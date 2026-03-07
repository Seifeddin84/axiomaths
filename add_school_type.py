#!/usr/bin/env python3
"""
add_school_type.py
------------------
Scans all markdown exercises and injects a `schoolType` field into the
YAML frontmatter based on keywords found in the `source` field.

Rules (extend the RULES list as needed):
  - source contains "pilote"  → schoolType: "pilote"

Usage:
  python add_school_type.py                  # dry run (preview only)
  python add_school_type.py --apply          # write changes to disk
  python add_school_type.py --apply --verbose
"""

import os
import re
import sys
import argparse

EXERCISES_DIR = os.path.join(os.path.dirname(__file__), "exercises")

# Each rule: (regex pattern to match against source, schoolType value to assign)
RULES = [
    (re.compile(r"pilote", re.IGNORECASE), "pilote"),
    # Add more rules here, e.g.:
    # (re.compile(r"prépa intégrée", re.IGNORECASE), "prepa"),
    # (re.compile(r"privé|privee", re.IGNORECASE), "prive"),
]

def detect_school_type(source: str) -> str | None:
    for pattern, school_type in RULES:
        if pattern.search(source):
            return school_type
    return None

def process_file(filepath: str, apply: bool, verbose: bool) -> bool:
    """Returns True if a change was made (or would be made in dry-run)."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Must have frontmatter
    fm_match = re.match(r"^---\s*\n([\s\S]*?)\n---\s*\n", content)
    if not fm_match:
        return False

    frontmatter = fm_match.group(1)
    fm_end = fm_match.end()

    # Already has schoolType → skip
    if re.search(r"^schoolType\s*:", frontmatter, re.MULTILINE):
        if verbose:
            print(f"  [skip]    {os.path.basename(filepath)} (already has schoolType)")
        return False

    # Extract source value
    source_match = re.search(r'^source\s*:\s*["\']?(.*?)["\']?\s*$', frontmatter, re.MULTILINE)
    if not source_match:
        if verbose:
            print(f"  [skip]    {os.path.basename(filepath)} (no source field)")
        return False

    source_value = source_match.group(1).strip()
    school_type = detect_school_type(source_value)

    if not school_type:
        if verbose:
            print(f"  [skip]    {os.path.basename(filepath)} (no match for: {source_value[:60]})")
        return False

    # Inject schoolType right after the source line
    new_frontmatter = re.sub(
        r'(^source\s*:.*$)',
        rf'\1\nschoolType: "{school_type}"',
        frontmatter,
        count=1,
        flags=re.MULTILINE
    )

    new_content = content[:fm_match.start(1)] + new_frontmatter + content[fm_match.end(1):]

    print(f"  [{'write' if apply else 'dry-run'}] {os.path.basename(filepath)} → schoolType: \"{school_type}\"")

    if apply:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

    return True

def main():
    parser = argparse.ArgumentParser(description="Auto-tag schoolType in exercise frontmatter")
    parser.add_argument("--apply", action="store_true", help="Write changes to disk (default: dry run)")
    parser.add_argument("--verbose", action="store_true", help="Show skipped files too")
    args = parser.parse_args()

    if not os.path.isdir(EXERCISES_DIR):
        print(f"Error: exercises directory not found at {EXERCISES_DIR}")
        sys.exit(1)

    files = sorted(f for f in os.listdir(EXERCISES_DIR) if f.endswith(".md"))
    print(f"Scanning {len(files)} exercise files in {EXERCISES_DIR}/")
    print(f"Mode: {'APPLY (writing to disk)' if args.apply else 'DRY RUN (no changes)'}\n")

    changed = 0
    for filename in files:
        filepath = os.path.join(EXERCISES_DIR, filename)
        if process_file(filepath, apply=args.apply, verbose=args.verbose):
            changed += 1

    print(f"\nDone. {changed} file(s) {'updated' if args.apply else 'would be updated'}.")
    if not args.apply and changed > 0:
        print("Run with --apply to write changes.")

if __name__ == "__main__":
    main()