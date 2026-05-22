#!/usr/bin/env python3
"""
validate_exercises.py — Axiomaths Exercise Validator v2
Run:  python validate_exercises.py ./exercises
      python validate_exercises.py ./exercises --no-solution-ok
      python validate_exercises.py ./exercises --strict
"""

import os
import sys
import re
import yaml
import argparse
from pathlib import Path
from collections import defaultdict

# ─────────────────────────────────────────────
# CANONICAL CHAPTER LISTS
# ─────────────────────────────────────────────

CANONICAL_CHAPTERS = {
    ("college", "7eme", None): [
        "الإحصاء والاحتمالات",
        "الأعداد الصحيحة الطبيعية",
        "الأعداد العشرية - الأعداد الكسرية",
        "التعامد والتوازي",
        "التناظر المحوري",
        "الزوايا",
        "المثلثات",
        "الموشور القائم - الإسطوانة الدائرية القائمة",
        "أنشطة في الجبر",
        "رباعيات الأضلاع"
    ],
    ("college", "8eme", None): [
        "التناسب",
        "التناظر المركزي",
        "التوازي في الفضاء",
        "الزوايا الحاصلة عن تقاطع مستقيم مع مستقيمين متوازيين",
        "العمليات على مجموعة الأعداد الصحيحة النسبية",
        "العمليات والحساب على الأعداد الكسرية",
        "المثلثات المتقايسة",
        "الهرم والمخروط والكرة",
        "أنشطة حول الإحصاء والاحتمالات",
        "أنشطة في الحساب. قابلية القسمة على 8",
        "رباعيات الأضلاع",
        "معادلات من الدرجة الأولى ذات مجهول واحد"
    ],
    ("college", "9eme", None): [
        "الإحصاء والاحتمالات",
        "التعامد في الفضاء",
        "التعداد والحساب",
        "التعيين في المستوي",
        "الجذاءات المعتبرة والعبارات الجبرية",
        "الحساب في مجموعة الأعداد الحقيقية",
        "العلاقات القياسية في المثلث القائم",
        "المعادلات والمتراجحات من الدرجة الأولى",
        "أنشطة حول الرباعيات",
        "مبرهنة طالس وتطبيقاتها"
    ],
    ("lycee", "1ere", None): [
        "Activités algébriques",
        "Activités dans un repère",
        "Activités numériques",
        "Angles",
        "Devoirs",
        "Equations et inéquations du premier degré à une inconnu",
        "Exploitation de l'information",
        "Fonctions linéaires et Affines",
        "Quart de tour",
        "Rapports trigonométriques d'un angle aigu et Relations métriques dans un triangle rectangle",
        "Sections planes d'un solide",
        "Somme de deux vecteurs - Vecteurs colinéaires",
        "Systèmes de deux équations à deux inconnues",
        "Théorème de Thalès et sa réciproque",
        "Vecteurs et translations",
    ],
    ("lycee", "2eme", "Sciences"): [
        "Arithmétique",
        "Barycentre",
        "Calcul dans IR",
        "Calcul vectoriel",
        "Droites et plans de l'espace",
        "Fonctions de référence",
        "Généralités sur les fonctions",
        "Géométrie analytique",
        "Homothéties",
        "Notion de Polynômes",
        "Parallélisme et Orthogonalité dans l'espace",
        "Problèmes du premier et du second degré",
        "Rotations",
        "Statistiques",
        "Suites arithmétiques et géométriques",
        "Translations",
        "Trigonométrie",
    ],
    ("lycee", "2eme", "Informatique"): [
        "Arithmétique",
        "Barycentre",
        "Calcul dans IR",
        "Calcul vectoriel",
        "Droites et plans de l'espace",
        "Fonctions de référence",
        "Généralités sur les fonctions",
        "Géométrie analytique",
        "Homothéties",
        "Notion de Polynômes",
        "Parallélisme et Orthogonalité dans l'espace",
        "Problèmes du premier et du second degré",
        "Rotations",
        "Statistiques",
        "Suites arithmétiques et géométriques",
        "Translations",
        "Trigonométrie",
    ],
    ("lycee", "3eme", "Mathématiques"): [
        "Angles orientés",
        "Dénombrement et Probabilités",
        "Divisibilité dans IN",
        "Equations de droites et de plans, Equation d'une sphère",
        "Exemples d’étude de fonctions",
        "Fonctions trigonométriques",
        "Généralités sur les fonctions",
        "Limites de suites réelles",
        "Limites, continuité et comportements asymptotiques",
        "Nombre dérivé et Fonction dérivée",
        "Nombres complexes",
        "Nombres premiers",
        "Produit scalaire dans le plan",
        "Produit scalaire et vectoriel dans l'espace",
        "Rotations",
        "Statistiques",
        "Suites réelles",
        "Trigonométrie",
        "Vecteurs de l'espace",
    ],
    ("lycee", "3eme", "Sciences Expérimentales"): [
        "Angles orientés",
        "Dénombrement et Probabilités",
        "Equations de droites et de plans",
        "Exemples d’étude de fonctions",
        "Fonctions trigonométriques",
        "Généralités sur les fonctions",
        "Limites de suites réelles",
        "Limites, continuité et comportements asymptotiques",
        "Nombre dérivé et Fonction dérivée",
        "Nombres complexes",
        "Produit scalaire dans le plan",
        "Produit scalaire dans l'espace",
        "Statistiques",
        "Suites réelles",
        "Trigonométrie",
        "Vecteurs de l'espace",
    ],
    ("lycee", "4eme", "Mathématiques"): [
        "Continuité et limites",
        "Suites réelles",
        "Dérivabilité",
        "Fonctions réciproques",
        "Primitives",
        "Intégrales",
        "Fonction logarithme népérien",
        "Fonction exponentielle",
        "Equations différentielles",
        "Nombres complexes",
        "Isométries du plan",
        "Déplacements – Antidéplacements",
        "Similitudes",
        "Coniques",
        "Géométrie dans l'espace",
        "Divisibilité dans Z",
        "Identité de Bezout",
        "Probabilités",
        "Statistiques",
        "Etude de Fonctions",
    ],
    ("lycee", "4eme", "Informatique"): [
        "Continuité et limites",
        "Suites réelles",
        "Dérivabilité",
        "Fonctions réciproques",
        "Primitives",
        "Intégrales",
        "Fonction logarithme népérien",
        "Fonction exponentielle",
        "Equations différentielles",
        "Nombres complexes",
        "Isométries du plan",
        "Déplacements – Antidéplacements",
        "Similitudes",
        "Coniques",
        "Géométrie dans l'espace",
        "Divisibilité dans Z",
        "Identité de Bezout",
        "Probabilités",
        "Statistiques",
    ],
    ("lycee", "4eme", "Sciences Expérimentales"): [
        "Continuité et limites",
        "Suites réelles",
        "Dérivabilité",
        "Fonctions réciproques",
        "Primitives",
        "Intégrales",
        "Fonction logarithme népérien",
        "Fonction exponentielle",
        "Nombres complexes",
        "Probabilités",
        "Statistiques",
    ],
    ("lycee", "4eme", "Economie et Gestion"): [
        "Limites et continuité",
        "Dérivation - Primitives",
        "Etude de fonctions",
        "Fonction Logarithme Népérien",
        "Fonctions exponentielles",
        "Intégrale d'une fonction continue",
        "Suites réelles",
        "Matrices et systèmes",
        "Statistiques",
        "Probabilités",
        "Les graphes"
    ],
}

# ─────────────────────────────────────────────
# CHAPTER ALIAS MAP
# Gemini-generated names → canonical names
# Used for auto-suggestion in error messages
# ─────────────────────────────────────────────

CHAPTER_ALIASES = {
    # 1ère
    "applications linéaires":           "Fonctions linéaires et Affines",
    "fonctions linéaires":               "Fonctions linéaires et Affines",
    "fonctions affines":                 "Fonctions linéaires et Affines",
    "vecteurs et translations":          "Vecteurs et translations",  # correct but just in case
    # 2ème Sciences
    "homothétie":                        "Homothéties",
    "homothetie":                        "Homothéties",
    "suites réelles":                    "Suites arithmétiques et géométriques",
    "suites":                            "Suites arithmétiques et géométriques",
    "fonctions":                         "Généralités sur les fonctions",
    "second degré":                      "Problèmes du premier et du second degré",
    "équations du second degré":         "Problèmes du premier et du second degré",
    # 4ème Maths
    "similitude":                        "Similitudes",
    "isométrie":                         "Isométries du plan",
    "isométries":                        "Isométries du plan",
    "déplacement":                       "Déplacements – Antidéplacements",
    "nombres complexes":                 "Nombres complexes",
    "etude de fonctions":                "Étude de Fonctions",
}

def suggest_canonical(chapter):
    """Return canonical suggestion for a mismatched chapter name."""
    return CHAPTER_ALIASES.get(chapter.strip().lower())

def normalize(s):
    return s.strip().lower() if s else ""

def chapter_is_valid(school, level, section, chapter):
    """Returns True/False/None (None = no list defined for this combo)."""
    key = (school, level, section)
    if key not in CANONICAL_CHAPTERS:
        return None
    canonical = [normalize(c) for c in CANONICAL_CHAPTERS[key]]
    return normalize(chapter) in canonical

def normalize_section(section):
    """Handle section stored as list ['Sciences', 'Informatique'] → 'Sciences'."""
    if isinstance(section, list):
        return section[0] if section else None
    return section

# ─────────────────────────────────────────────
# FRONTMATTER PARSER
# ─────────────────────────────────────────────

def parse_frontmatter(filepath):
    content = Path(filepath).read_text(encoding="utf-8")
    match = re.match(r"^---\s*\n(.*?)\n---", content, re.DOTALL)
    if not match:
        return None, content
    try:
        data = yaml.safe_load(match.group(1))
        return data, content
    except yaml.YAMLError as e:
        return {"_parse_error": str(e)}, content

# ─────────────────────────────────────────────
# VALIDATION RULES
# ─────────────────────────────────────────────

def validate_file(filepath, seen_uids, no_solution_ok=False):
    errors = []
    warnings = []
    filename = Path(filepath).name

    data, content = parse_frontmatter(filepath)

    if data is None:
        errors.append("No YAML frontmatter found")
        return errors, warnings

    if "_parse_error" in data:
        errors.append(f"YAML parse error: {data['_parse_error']}")
        return errors, warnings

    # ── REQUIRED FIELDS ──
    required = ["uid", "school", "level", "chapter", "source", "title", "difficulty"]
    for field in required:
        if field not in data or data[field] is None:
            errors.append(f"Missing required field: '{field}'")

    if errors:
        return errors, warnings

    uid       = str(data.get("uid", "")).strip()
    school    = str(data.get("school", "")).strip().lower()
    level     = str(data.get("level", "")).strip().lower()
    section   = normalize_section(data.get("section"))
    if section:
        section = str(section).strip()
    chapter   = str(data.get("chapter", "")).strip()
    year      = data.get("year")
    difficulty = str(data.get("difficulty", "")).strip()
    tags      = data.get("tags", [])

    # ── SECTION AS LIST WARNING ──
    raw_section = data.get("section")
    if isinstance(raw_section, list):
        warnings.append(
            f"section is stored as a list {raw_section} — "
            f"should be a single string. Using '{section}' for validation."
        )

    # ── UID FORMAT ──
    if not re.match(r"^\d{7}$", uid):
        errors.append(f"uid '{uid}' must be exactly 7 digits (e.g. 0000001)")

    # ── UID UNIQUENESS ──
    if uid in seen_uids:
        errors.append(f"uid '{uid}' duplicated — also in {seen_uids[uid]}")
    else:
        seen_uids[uid] = filename

    # ── SCHOOL ──
    if school not in ("lycee", "college"):
        errors.append(f"school '{school}' must be 'lycee' or 'college'")

    # ── LEVEL ──
    valid_levels = {
        "lycee":   ["1ere", "2eme", "3eme", "4eme"],
        "college": ["7eme", "8eme", "9eme"],
    }
    if school in valid_levels and level not in valid_levels[school]:
        errors.append(f"level '{level}' invalid for school '{school}'")

    # ── CHAPTER CANONICAL CHECK ──
    chapter_valid = chapter_is_valid(school, level, section, chapter)
    if chapter_valid is False:
        suggestion = suggest_canonical(chapter)
        hint = f" → did you mean '{suggestion}'?" if suggestion else ""
        errors.append(
            f"chapter '{chapter}' not in canonical list for "
            f"{school}/{level}/{section or 'no section'}.{hint}"
        )
    elif chapter_valid is None:
        warnings.append(
            f"No canonical list for {school}/{level}/{section} "
            f"— '{chapter}' not validated (add list to validator)"
        )

    # ── YEAR ──
    if year is not None:
        try:
            y = int(year)
            if not (1900 <= y <= 2026):
                errors.append(f"year '{year}' must be between 1960 and 2026")
        except (ValueError, TypeError):
            errors.append(f"year '{year}' must be a 4-digit integer")

    # ── PROFESSOR FIELD EXISTENCE ──
    if "professor" not in data:
        errors.append("Field 'professor' must exist (use null if unknown)")

    # ── DIFFICULTY ──
    valid_difficulties = ["Facile", "Moyen", "Difficile"]
    if difficulty not in valid_difficulties:
        suggestion = "Moyen" if difficulty.lower() in ("moyenne", "moyen") else None
        hint = f" → did you mean '{suggestion}'?" if suggestion else ""
        errors.append(
            f"difficulty '{difficulty}' invalid.{hint} "
            f"Must be one of: {valid_difficulties}"
        )

    # ── TAGS ──
    if not isinstance(tags, list):
        warnings.append("'tags' should be a list, even if empty []")

    # ── BODY LENGTH ──
    body = content.split("---", 2)[-1].strip()
    if len(body) < 50:
        warnings.append("Exercise body seems very short — is it complete?")

    # ── SOLUTION SECTION ──
    if not no_solution_ok:
        if "## Solution" not in content and "## Correction" not in content:
            warnings.append("No ## Solution or ## Correction section found")

    return errors, warnings

# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Validate Axiomaths exercise files")
    parser.add_argument(
        "directory", nargs="?", default="./exercises",
        help="Path to exercises directory (default: ./exercises)",
    )
    parser.add_argument(
        "--strict", action="store_true",
        help="Treat warnings as errors",
    )
    parser.add_argument(
        "--no-solution-ok", action="store_true",
        help="Suppress warnings about missing solution sections",
    )
    parser.add_argument(
        "--errors-only", action="store_true",
        help="Show only errors, suppress warnings",
    )
    args = parser.parse_args()

    exercises_dir = Path(args.directory)
    if not exercises_dir.exists():
        print(f"❌ Directory not found: {exercises_dir}")
        sys.exit(1)

    md_files = sorted(exercises_dir.glob("*.md"))
    if not md_files:
        print(f"⚠️  No .md files found in {exercises_dir}")
        sys.exit(0)

    seen_uids = {}
    total_errors = 0
    total_warnings = 0
    error_report = defaultdict(list)
    warning_report = defaultdict(list)

    for filepath in md_files:
        errors, warnings = validate_file(
            filepath, seen_uids,
            no_solution_ok=args.no_solution_ok
        )
        if errors:
            error_report[filepath.name] = errors
            total_errors += len(errors)
        if warnings and not args.errors_only:
            warning_report[filepath.name] = warnings
            total_warnings += len(warnings)

    files_with_issues = len(set(list(error_report) + list(warning_report)))

    print(f"\n📂 Validating {len(md_files)} exercises in '{exercises_dir}'\n")
    print("─" * 60)

    if error_report:
        print("\n🔴 ERRORS (must fix)\n")
        for fname, errs in error_report.items():
            print(f"  📄 {fname}")
            for e in errs:
                print(f"     ✗ {e}")

    if warning_report:
        print("\n🟡 WARNINGS\n")
        for fname, warns in warning_report.items():
            print(f"  📄 {fname}")
            for w in warns:
                print(f"     ⚠ {w}")

    print("\n" + "─" * 60)
    ok_count = len(md_files) - len(error_report)
    print(f"\n✅ {ok_count}/{len(md_files)} files error-free")
    if total_errors:
        print(f"🔴 {total_errors} error(s) in {len(error_report)} file(s)")
    if total_warnings:
        print(f"🟡 {total_warnings} warning(s) in {len(warning_report)} file(s)")
    print()

    if total_errors > 0 or (args.strict and total_warnings > 0):
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()