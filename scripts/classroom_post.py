#!/usr/bin/env python3
"""classroom_post.py — post the pupils' handouts of inbox/classroom/ to Google Classroom, as DRAFTS.

Each folder inbox/classroom/<level>/<batch>/ holds PDFs and a post.yaml (format: inbox/README.md,
« Classroom hand-off »). For each post.yaml this script:
  1. finds the Classroom course (`class`, by name or numeric id) and the topic (`topic`, created if missing);
  2. uploads the PDFs to Drive, in "AxioMath – Classroom (auto)/<class>/<topic>/";
  3. creates a **draft** course material with those files (and a second draft « Corrigé : <title> » if `corrige`);
     nothing is ever published: Seifeddine publishes from Classroom.
A post whose title already exists in the course (draft or published) is skipped, so re-running is safe.

Usage
  python3 scripts/classroom_post.py --check --all            validate every post.yaml (no Google call; CI on PRs)
  python3 scripts/classroom_post.py inbox/classroom/1ere/<batch>/post.yaml ...   post these (CI on merge)
  python3 scripts/classroom_post.py --all                     post everything not posted yet
  python3 scripts/classroom_post.py --auth client_secret.json one-time: prints the refresh token to store as a secret

Credentials (environment): GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN — an OAuth client of type
"Desktop" in Seifeddine's Google Cloud project, authorised once with his own account (the Classroom classes are on
his personal Gmail, which a service account cannot reach). Without them the script says so and exits 0.

Setup, once (Seifeddine, ~10 minutes):
  1. Google Cloud console, the project already made for Classroom: enable the "Google Classroom API" and the
     "Google Drive API".
  2. OAuth consent screen: user type External, add his Gmail as test user, then **Publish app → In production**
     (in "Testing" the refresh token dies after 7 days; an unverified app in production is fine for his own use,
     Google just shows a warning at consent).
  3. Credentials → Create OAuth client ID → type "Desktop app" → download the JSON.
  4. On his computer: pip install -r scripts/requirements-classroom.txt
                      python3 scripts/classroom_post.py --auth client_secret_XXX.json
     log in with the Gmail that owns the classes, accept, copy the three printed values.
  5. GitHub → repo Settings → Secrets and variables → Actions → New repository secret, three times.
  6. Test: Actions tab → "Classroom drafts" → Run workflow.
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CLASSROOM = ROOT / "inbox" / "classroom"
KINDS = {"serie", "devoir", "cours", "fiche"}
DRIVE_ROOT_NAME = "AxioMath – Classroom (auto)"
SCOPES = [
    "https://www.googleapis.com/auth/classroom.courses.readonly",
    "https://www.googleapis.com/auth/classroom.topics",
    "https://www.googleapis.com/auth/classroom.courseworkmaterials",
    "https://www.googleapis.com/auth/drive.file",
]


class PostError(Exception):
    pass


# ---------------------------------------------------------------- reading and checking post.yaml

def load_post(path: Path) -> dict:
    """Read and validate one post.yaml; returns the post with absolute file paths. Raises PostError."""
    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    except yaml.YAMLError as e:
        raise PostError(f"{path}: not valid YAML ({e})")
    if not isinstance(data, dict):
        raise PostError(f"{path}: expected a mapping")
    problems = []
    for key in ("class", "topic", "kind", "title", "files"):
        if not data.get(key):
            problems.append(f"missing '{key}'")
    if data.get("kind") and data["kind"] not in KINDS:
        problems.append(f"kind must be one of {sorted(KINDS)} (got {data['kind']!r})")
    files = data.get("files") or []
    if isinstance(files, str):
        files = [files]
    if not isinstance(files, list):
        problems.append("files must be a list of PDF names")
        files = []
    names = list(files) + ([data["corrige"]] if data.get("corrige") else [])
    for name in names:
        if not isinstance(name, str) or not re.fullmatch(r"[A-Za-z0-9._-]+\.pdf", name):
            problems.append(f"file {name!r}: PDF with an ASCII name expected")
            continue
        f = path.parent / name
        if not f.is_file():
            problems.append(f"file {name} not found next to post.yaml")
        elif f.read_bytes()[:5] != b"%PDF-":
            problems.append(f"file {name} is not a PDF")
    if problems:
        raise PostError(f"{path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}: " + "; ".join(problems))
    return {
        "path": path,
        "class": str(data["class"]).strip(),
        "topic": str(data["topic"]).strip(),
        "kind": data["kind"],
        "title": str(data["title"]).strip(),
        "description": str(data.get("description") or "").strip(),
        "files": [path.parent / n for n in files],
        "corrige": path.parent / data["corrige"] if data.get("corrige") else None,
    }


def all_posts() -> list[Path]:
    return sorted(CLASSROOM.glob("*/*/post.yaml")) if CLASSROOM.is_dir() else []


# ---------------------------------------------------------------- Google side

def credentials():
    cid, secret, token = (os.environ.get(k) for k in ("GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REFRESH_TOKEN"))
    if not (cid and secret and token):
        return None
    from google.oauth2.credentials import Credentials
    return Credentials(None, refresh_token=token, client_id=cid, client_secret=secret,
                       token_uri="https://oauth2.googleapis.com/token", scopes=SCOPES)


def services(creds):
    from googleapiclient.discovery import build
    return (build("classroom", "v1", credentials=creds, cache_discovery=False),
            build("drive", "v3", credentials=creds, cache_discovery=False))


def paged(call, key, **kw):
    token = None
    while True:
        res = call(pageToken=token, **kw).execute() if token else call(**kw).execute()
        yield from res.get(key, [])
        token = res.get("nextPageToken")
        if not token:
            return


def find_course(classroom, wanted: str) -> dict:
    courses = list(paged(classroom.courses().list, "courses", teacherId="me", courseStates=["ACTIVE"]))
    if wanted.isdigit():
        hit = [c for c in courses if c["id"] == wanted]
    else:
        norm = lambda s: re.sub(r"\s+", " ", s).strip().casefold()
        hit = [c for c in courses if norm(c["name"]) == norm(wanted)]
    if len(hit) != 1:
        names = ", ".join(sorted(c["name"] for c in courses)) or "none"
        raise PostError(f"class {wanted!r}: {'not found' if not hit else 'ambiguous'} (active classes: {names})")
    return hit[0]


def find_or_create_topic(classroom, course_id: str, name: str) -> str:
    for t in paged(classroom.courses().topics().list, "topic", courseId=course_id):
        if t["name"].strip().casefold() == name.casefold():
            return t["topicId"]
    return classroom.courses().topics().create(courseId=course_id, body={"name": name}).execute()["topicId"]


def existing_titles(classroom, course_id: str) -> set[str]:
    items = paged(classroom.courses().courseWorkMaterials().list, "courseWorkMaterial",
                  courseId=course_id, courseWorkMaterialStates=["DRAFT", "PUBLISHED"])
    return {m.get("title", "").strip().casefold() for m in items}


def drive_folder(drive, name: str, parent: str | None) -> str:
    q = ["mimeType='application/vnd.google-apps.folder'", "trashed=false", "name='%s'" % name.replace("'", "\\'")]
    if parent:
        q.append(f"'{parent}' in parents")
    hit = drive.files().list(q=" and ".join(q), fields="files(id)", spaces="drive").execute().get("files", [])
    if hit:
        return hit[0]["id"]
    body = {"name": name, "mimeType": "application/vnd.google-apps.folder"}
    if parent:
        body["parents"] = [parent]
    return drive.files().create(body=body, fields="id").execute()["id"]


def upload(drive, folder_id: str, pdf: Path, label: str) -> str:
    from googleapiclient.http import MediaFileUpload
    body = {"name": f"{label} — {pdf.name}", "parents": [folder_id]}
    media = MediaFileUpload(str(pdf), mimetype="application/pdf", resumable=False)
    return drive.files().create(body=body, media_body=media, fields="id").execute()["id"]


def create_draft(classroom, course_id, topic_id, title, description, file_ids):
    body = {"title": title, "state": "DRAFT", "topicId": topic_id,
            "materials": [{"driveFile": {"driveFile": {"id": fid}, "shareMode": "VIEW"}} for fid in file_ids]}
    if description:
        body["description"] = description
    return classroom.courses().courseWorkMaterials().create(courseId=course_id, body=body).execute()


def post_one(classroom, drive, p: dict) -> str:
    course = find_course(classroom, p["class"])
    topic_id = find_or_create_topic(classroom, course["id"], p["topic"])
    titles = existing_titles(classroom, course["id"])
    root = drive_folder(drive, DRIVE_ROOT_NAME, None)
    folder = drive_folder(drive, p["topic"], drive_folder(drive, course["name"], root))
    done = []
    plan = [(p["title"], p["files"])]
    if p["corrige"]:
        plan.append((f"Corrigé : {p['title']}", [p["corrige"]]))
    for title, pdfs in plan:
        if title.casefold() in titles:
            done.append(f"skipped (already in Classroom): {title}")
            continue
        ids = [upload(drive, folder, f, title) for f in pdfs]
        create_draft(classroom, course["id"], topic_id, title, p["description"], ids)
        done.append(f"draft created: {title}")
    return f"{course['name']} / {p['topic']}: " + "; ".join(done)


# ---------------------------------------------------------------- one-time authorisation

def authorise(client_secret: str) -> None:
    from google_auth_oauthlib.flow import InstalledAppFlow
    flow = InstalledAppFlow.from_client_secrets_file(client_secret, SCOPES)
    creds = flow.run_local_server(port=0, prompt="consent", access_type="offline")
    print("\nStore these three values as GitHub repository secrets (Settings → Secrets and variables → Actions):")
    print(f"GOOGLE_CLIENT_ID={creds.client_id}")
    print(f"GOOGLE_CLIENT_SECRET={creds.client_secret}")
    print(f"GOOGLE_REFRESH_TOKEN={creds.refresh_token}")


# ---------------------------------------------------------------- main

def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("posts", nargs="*", help="post.yaml files (default with --all: every one in inbox/classroom/)")
    ap.add_argument("--all", action="store_true", help="every post.yaml in inbox/classroom/")
    ap.add_argument("--check", action="store_true", help="validate only, no Google call")
    ap.add_argument("--auth", metavar="CLIENT_SECRET_JSON", help="one-time OAuth consent, prints the refresh token")
    args = ap.parse_args()

    if args.auth:
        authorise(args.auth)
        return 0
    paths = [Path(p).resolve() for p in args.posts] + (all_posts() if args.all else [])
    paths = list(dict.fromkeys(p for p in paths if p.name == "post.yaml" and p.is_file()))
    if not paths:
        print("No post.yaml to process.")
        return 0

    posts, failed = [], 0
    for path in paths:
        try:
            posts.append(load_post(path))
        except PostError as e:
            print(f"ERROR {e}")
            failed += 1
    if args.check:
        for p in posts:
            extra = f" + corrigé {p['corrige'].name}" if p["corrige"] else ""
            print(f"ok  {p['class']} / {p['topic']} / {p['kind']}: « {p['title']} » "
                  f"({', '.join(f.name for f in p['files'])}{extra})")
        return 1 if failed else 0

    creds = credentials()
    if creds is None:
        print("GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REFRESH_TOKEN are not set: nothing posted "
              "(see scripts/classroom_post.py --auth).")
        return 0
    classroom, drive = services(creds)
    for p in posts:
        try:
            print(post_one(classroom, drive, p))
        except PostError as e:
            print(f"ERROR {p['path'].parent.name}: {e}")
            failed += 1
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
