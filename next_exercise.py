#!/usr/bin/env python3
"""
next_exercise.py — non-interactive UID + filename allocator for Axiomaths.

Scans exercises/ (*.md and *.mdx), finds the highest uid (frontmatter first,
filename as fallback) and prints the next UID(s) with the canonical filename.

Usage:
  python3 next_exercise.py --school lycee --level 4eme --section "Mathématiques" \
      --chapter "Fonction exponentielle" [--count 3]
  python3 next_exercise.py --school college --level 8eme --chapter-slug calcul-litteral

Filename rule:  {n}-{school}-{level}[-{section_slug}]-{chapter_slug}-{UID7}.md
  - n is the integer uid without padding (e.g. 111)
  - section_slug only for lycée 2ème/3ème/4ème (1ère and collège have no section)
  - chapter_slug: lowercase ASCII, accents stripped, words joined by '-'
    (for Arabic chapter names, pass --chapter-slug in French/ASCII)
"""
import argparse
import re
import sys
import unicodedata
from pathlib import Path

EXERCISES_DIR = Path(__file__).resolve().parent / "exercises"

SECTION_SLUGS = {
    "mathematiques": "maths",
    "sciences": "sciences",
    "sciences experimentales": "sciences-experimentales",
    "informatique": "informatique",
    "sciences informatiques": "informatique",
    "economie et gestion": "eco",
    "economie et services": "eco",
    "economie et service": "eco",
    "technique": "technique",
    "lettres": "lettres",
    "sport": "sport",
}


def strip_accents(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def slugify(text: str) -> str:
    s = strip_accents(text).lower().replace("'", " ").replace("’", " ")
    s = re.sub(r"[^a-z0-9\s-]", " ", s)
    s = re.sub(r"[\s-]+", "-", s).strip("-")
    return s


def max_uid() -> int:
    best = 0
    for f in EXERCISES_DIR.iterdir():
        if not (f.name.endswith(".md") or f.name.endswith(".mdx")):
            continue
        m = re.search(r'^uid:\s*"?(\d+)"?', f.read_text(encoding="utf-8"), re.M)
        if not m:
            m = re.search(r"-(\d{7})\.mdx?$", f.name)
        if m:
            best = max(best, int(m.group(1)))
    return best


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--school", required=True, choices=["lycee", "college"])
    ap.add_argument("--level", required=True)
    ap.add_argument("--section", default=None, help='First section, e.g. "Mathématiques"')
    ap.add_argument("--chapter", default=None, help="Chapter name (French) to slugify")
    ap.add_argument("--chapter-slug", default=None, help="Explicit ASCII chapter slug")
    ap.add_argument("--count", type=int, default=1)
    a = ap.parse_args()

    if not (a.chapter or a.chapter_slug):
        ap.error("give --chapter or --chapter-slug")
    chapter_slug = a.chapter_slug or slugify(a.chapter)
    if not chapter_slug:
        ap.error("chapter slug is empty (Arabic chapter?) — pass --chapter-slug")

    parts = [a.school, a.level]
    if a.school == "lycee" and a.level != "1ere":
        if not a.section:
            ap.error("lycée 2ème–4ème needs --section")
        key = strip_accents(a.section).lower().strip()
        parts.append(SECTION_SLUGS.get(key, slugify(a.section)))
    parts.append(chapter_slug)
    stem = "-".join(parts)

    start = max_uid() + 1
    for uid in range(start, start + a.count):
        print(f'{uid:07d}\t{uid}-{stem}-{uid:07d}.md')
    return 0


if __name__ == "__main__":
    sys.exit(main())
