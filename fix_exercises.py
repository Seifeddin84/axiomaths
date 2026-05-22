#!/usr/bin/env python3
"""
fix_exercises.py — Axiomaths Auto-Fixer
Fixes mechanical errors automatically. Run BEFORE validate_exercises.py.

What it fixes automatically:
  - difficulty: "Moyenne" → "Moyen"
  - section stored as list → first item as string
  - missing professor field → professor: null
  - chapter aliases → canonical names
  - year 1973 (pre-1980) — flags but does NOT auto-fix (needs human judgment)

What it does NOT fix (needs manual intervention):
  - Duplicate UIDs (you must decide which file has the wrong UID)
  - YAML parse errors (malformed frontmatter)
  - Wrong chapter names with no known alias

Run: python fix_exercises.py ./exercises
     python fix_exercises.py ./exercises --dry-run   (preview only)
"""

import re
import sys
import yaml
import argparse
from pathlib import Path

# ── Same alias map as validator ──
CHAPTER_ALIASES = {
    "applications linéaires":           "Fonctions linéaires et Affines",
    "fonctions linéaires":               "Fonctions linéaires et Affines",
    "fonctions affines":                 "Fonctions linéaires et Affines",
    "homothétie":                        "Homothéties",
    "homothetie":                        "Homothéties",
    "suites réelles":                    "Suites arithmétiques et géométriques",
    "suites":                            "Suites arithmétiques et géométriques",
    "fonctions":                         "Généralités sur les fonctions",
    "second degré":                      "Problèmes du premier et du second degré",
    "équations du second degré":         "Problèmes du premier et du second degré",
    "similitude":                        "Similitudes",
    "isométrie":                         "Isométries du plan",
    "isométries":                        "Isométries du plan",
    "déplacement":                       "Déplacements – Antidéplacements",
    "etude de fonctions":                "Étude de Fonctions",
}

DIFFICULTY_ALIASES = {
    "moyenne": "Moyen",
    "moyen":   "Moyen",
    "facile":  "Facile",
    "difficile": "Difficile",
    "easy":    "Facile",
    "hard":    "Difficile",
    "medium":  "Moyen",
}

def parse_frontmatter_raw(content):
    """Return (yaml_str, body) splitting on first --- block."""
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)", content, re.DOTALL)
    if not match:
        return None, content
    return match.group(1), match.group(2)

def fix_file(filepath, dry_run=False):
    fixes = []
    path = Path(filepath)
    content = path.read_text(encoding="utf-8")

    yaml_str, body = parse_frontmatter_raw(content)
    if yaml_str is None:
        return ["⚠ No frontmatter — skipped"]

    try:
        data = yaml.safe_load(yaml_str)
    except yaml.YAMLError as e:
        return [f"⚠ YAML parse error — skipped: {e}"]

    modified = False
    new_data = dict(data)

    # ── Fix: difficulty alias ──
    diff = str(new_data.get("difficulty", "")).strip()
    canonical_diff = DIFFICULTY_ALIASES.get(diff.lower())
    if canonical_diff and canonical_diff != diff:
        fixes.append(f"difficulty: '{diff}' → '{canonical_diff}'")
        new_data["difficulty"] = canonical_diff
        modified = True

    # ── Fix: section as list → string ──
    section = new_data.get("section")
    if isinstance(section, list):
        new_section = section[0] if section else None
        fixes.append(f"section: {section} → '{new_section}'")
        new_data["section"] = new_section
        modified = True

    # ── Fix: missing professor field → null ──
    if "professor" not in new_data:
        fixes.append("professor: (missing) → null")
        new_data["professor"] = None
        modified = True

    # ── Fix: chapter alias ──
    chapter = str(new_data.get("chapter", "")).strip()
    alias_target = CHAPTER_ALIASES.get(chapter.lower())
    if alias_target and alias_target != chapter:
        fixes.append(f"chapter: '{chapter}' → '{alias_target}'")
        new_data["chapter"] = alias_target
        modified = True

    # ── Flag (no auto-fix): year out of range ──
    year = new_data.get("year")
    if year is not None:
        try:
            y = int(year)
            if y < 1960 or y > 2026:
                fixes.append(f"⚠ year '{year}' out of range — fix manually")
        except (ValueError, TypeError):
            fixes.append(f"⚠ year '{year}' not an integer — fix manually")

    if modified and not dry_run:
        # Rebuild frontmatter preserving key order
        KEY_ORDER = [
            "uid", "school", "level", "section", "chapter",
            "source", "title", "country", "year", "professor",
            "difficulty", "points", "tags",
        ]
        ordered = {}
        for k in KEY_ORDER:
            if k in new_data:
                ordered[k] = new_data[k]
        for k in new_data:
            if k not in ordered:
                ordered[k] = new_data[k]

        new_yaml = yaml.dump(
            ordered,
            allow_unicode=True,
            default_flow_style=False,
            sort_keys=False,
        ).rstrip()
        new_content = f"---\n{new_yaml}\n---\n{body}"
        path.write_text(new_content, encoding="utf-8")

    return fixes

def main():
    parser = argparse.ArgumentParser(description="Auto-fix Axiomaths exercise files")
    parser.add_argument(
        "directory", nargs="?", default="./exercises",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Preview fixes without writing files",
    )
    args = parser.parse_args()

    exercises_dir = Path(args.directory)
    if not exercises_dir.exists():
        print(f"❌ Directory not found: {exercises_dir}")
        sys.exit(1)

    md_files = sorted(exercises_dir.glob("*.md"))
    total_fixes = 0
    mode = "DRY RUN — no files will be modified" if args.dry_run else "WRITING fixes to files"

    print(f"\n🔧 fix_exercises.py — {mode}")
    print(f"📂 {len(md_files)} files in '{exercises_dir}'\n")
    print("─" * 60)

    for filepath in md_files:
        fixes = fix_file(filepath, dry_run=args.dry_run)
        if fixes:
            total_fixes += len([f for f in fixes if not f.startswith("⚠")])
            print(f"\n  📄 {filepath.name}")
            for f in fixes:
                icon = "  ⚠" if f.startswith("⚠") else "  ✓"
                print(f"    {icon} {f}")

    print("\n" + "─" * 60)
    if args.dry_run:
        print(f"\n🔍 {total_fixes} fix(es) would be applied (dry run — nothing written)")
        print("   Run without --dry-run to apply.\n")
    else:
        print(f"\n✅ {total_fixes} fix(es) applied.\n")
        print("   Now run: python validate_exercises.py ./exercises --no-solution-ok\n")

if __name__ == "__main__":
    main()