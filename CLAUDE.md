# CLAUDE.md — Axiomaths

Axiomaths (axiomaths.com.tn) is a Next.js site (deployed on Vercel) that serves
math exercises for the **Tunisian curriculum** (collège 7ème–9ème, lycée 1ère–4ème).
Each exercise is one markdown file in `exercises/`, with YAML frontmatter.

Main job in this repo: **create exercise files**, either by extracting them from
photos/screenshots or by generating new ones in the house style.

---

## 1. Ground rules

- **Never push to `main`.** Work on a branch `claude/<short-topic>`, open a PR,
  and let Seifeddine review the Vercel preview before merging.
- **Never publish math you have not verified.** Every value, limit, identity or
  "Montrer que…" claim gets checked with SymPy (or numerically) before commit.
  Two published errors were found in the first audit (#67 wrong identity for
  (a−b)³, #88 index typo), which is why this rule exists.
- **Never invent missing content.** If a photo is cut off (left margin, last
  line, missing statement), skip that exercise and say what's missing in the PR.
- List every judgement call (fixed typo, corrected statement, guessed section
  or source) in the PR description so it can be reviewed.

## 2. Workflow for a batch

1. `git fetch origin main && git checkout -b claude/<topic> origin/main`
2. **Duplicate check first.** For each exercise, grep a distinctive formula,
   the professor, or the school: `grep -rlF '\tan\left(\dfrac{\pi}{x}' exercises/`,
   `grep -ril "Ayari" exercises/`. Formulas are written in several ways, so try 2–3 variants. Existing match → improve that file
   (missing question, solution, typo) instead of creating a duplicate.
3. Allocate UIDs and filenames with the helper (never by hand):
   `python3 next_exercise.py --school lycee --level 4eme --section "Mathématiques" --chapter "Intégrales" --count 3`
4. Write the files (format below). Figures → section 6.
5. Verify: SymPy checks (keep the script out of the repo),
   `python3 validate_exercises.py ./exercises` (must be 0 errors),
   `node check_katex.mjs <changed files>` (must parse).
   Run `npm run build` if anything in `src/` changed.
6. Commit, push, open PR with: list of new UIDs, fixes, skipped items + why, open questions.

## 3. Filename & UID

`{n}-{school}-{level}[-{section_slug}]-{chapter_slug}-{UID7}.md`

- `n` = integer uid (`111`), `UID7` = zero-padded (`0000111`). UIDs are global and
  sequential; `next_exercise.py` scans frontmatter of `.md` and `.mdx`.
- `section_slug` only for lycée 2ème–4ème: `maths`, `sciences`,
  `sciences-experimentales`, `informatique`, `eco`, `technique`, `lettres`.
- `chapter_slug`: ASCII, no accents, hyphens. Arabic chapters → pass a French
  `--chapter-slug` (e.g. `operations-et-calcul`).
- The site reads `uid` from frontmatter; filenames are not used for routing.
- Extension is `.md` (exactly once — `.md.md` happened before).

## 4. Frontmatter (exact field order)

```yaml
---
uid: "0000111"
school: "lycee"                 # "lycee" | "college"
level: "4eme"                   # college: 7eme 8eme 9eme | lycee: 1ere 2eme 3eme 4eme
section: "Mathématiques"        # see rules below
chapter: "Intégrales"           # MUST be in CANONICAL_CHAPTERS of validate_exercises.py, spelled exactly
source: "Lycée la Soukra : Ariana"   # school + devoir/série, as printed
title: "Suite d'intégrales et logarithme"   # short, descriptive, French (Arabic for collège)
country: "Tunisie"
year: 2025                      # integer, or null if unknown
professor: "M. Haj Ali"         # as printed, or null
difficulty: "Moyen"             # "Facile" | "Moyen" | "Difficile"  (never "Moyenne")
points: 7                       # integer from the barème, or null
tags: ["integrales", "integration-par-parties"]   # kebab-case ASCII, 3–6 tags
---
```

Section rules:
- Collège and lycée **1ère**: `section: null`.
- Lycée 2ème–4ème: one string, or a list when the exercise fits several sections
  (the site shows it under each): `["Sciences", "Informatique"]`.
- Use the site's section names: 2ème → `Sciences`, `Informatique`,
  `Économie et Service`, `Lettres`; 3ème/4ème → `Mathématiques`,
  `Sciences Expérimentales`, `Economie et Gestion`, `Informatique`, `Technique`, `Lettres`.
  (Not "Technologies de l'Informatique": the 2ème Informatique page would not list it.)
- Typical 4ème analysis (ln, exp, intégrales, réciproques) with no section printed → `"Mathématiques"`,
  and say so in the PR.

## 5. Body format (house style)

- **Language**: collège statements in **Arabic** (as in the Tunisian manuals);
  lycée in **French**. Solutions in the same language as the statement.
- Statement, then a line `---`, then `## Solution`.
  No solution yet → `Pas de solution encore.`
- Numbering: `1.` for questions, `a.` / `b.` for sub-questions, sub-items indented
  3 spaces, **blank line between items** (otherwise markdown merges them).
  Parts: `### Partie A`, `### Partie B`.
- Math: KaTeX via remark-math. Inline `$…$`, display `$$…$$` on its own line.
  Prefer `\dfrac`, `\lim\limits_{x \to +\infty}`, `\displaystyle\int_a^b … \, dx`,
  `\ln`, `\mathbb{R}`, `\mathbb{N}^*`, `\vec{AB}` (or `\overrightarrow{AB}`),
  decimal comma `1{,}9`. Intervals: `]0, +\infty[` (no `\]`/`\[` — they break KaTeX).
  Inside a numbered item, `$$…$$` renders *inline* (small sums/integrals): write `$$\displaystyle …$$`.
  "f^{2n}(x)" meaning a power → say so: "où $f^{k}(x)$ désigne $(f(x))^k$".
- Solutions: concise, same numbering as the statement, key steps and results
  (not a full essay). `**Vrai.**` / `**Faux.**` + one-line justification for V-F.
  A short *Remarque* is welcome when it opens a door (e.g. a link to another exercise,
  a famous constant).
- Inside a numbered item, consecutive lines **merge into one paragraph**. In solutions, put each step on its own
  line with a blank line before it (keep the 3-space indent) so the steps stay readable.
- **Links between exercises** (same theme, follow-up, same constant): use the deep link
  `[exercice n°116](/lycee/4eme/mathematiques/integrales#ex-0000116)` — path = level / section / chapter
  in lowercase ASCII with hyphens (the page normalizes accents), anchor `#ex-<UID7>` opens and scrolls to the card.
  Link both ways. College: `/college/<level>/<chapter>#ex-…`.
- A devoir with several exercises → **one file per exercise**, same `source`,
  `professor`, `year`; `points` from each exercise's barème.

## 6. Figures

- Path: `public/exercises/images/<same stem as the .md>.png`;
  in markdown: `![short description](/exercises/images/<stem>.png)`, placed where
  the statement refers to it.
- Prefer **redrawing** the figure cleanly (matplotlib, white background, black
  lines, hatching where the original hatches) over cropping a photo. Check the PNG
  visually before committing.

## 7. Extraction from photos — rules

- Be faithful to the text. Silently fix pure typos/OCR noise
  ("dérivable en à droite" → "dérivable à droite", "primitive de U" → "de u").
- If the statement is **mathematically wrong** (false for some n, wrong value),
  make the minimal correction and list it in the PR. Example: "pour tout n non nul"
  where n = 1 makes f(2n) undefined → "pour tout n ≥ 2".
- Don't merge an exercise with the end of the previous one on the same photo.
- Rotated/blurred photos: read carefully; numeric hints that disagree with the
  math (e.g. "α ≈ 1,8" when α ≈ 1,895) are corrected and flagged.
- Unknown source/year/professor → `source: "Série d'exercices — <chapitre>"`,
  `year: null`, `professor: null`, and ask in the PR.

## 8. Generating new exercises

- Stay inside the official program of the level/section and the canonical chapter.
- Match the style of existing exercises of the same chapter (read 2–3 first):
  progressive questions, "Montrer que … En déduire …", a final question that
  ties things together.
- Calibrate `difficulty` against existing files of the same chapter.
- Generated exercises: `source: "Axiomaths"`, `professor: "Axiomaths"`, `year` = current year.
- Always include a full verified solution.

## 9. Tools in the repo

| file | use |
|---|---|
| `next_exercise.py` | next UID(s) + canonical filename (non-interactive) |
| `validate_exercises.py` | frontmatter/chapter/difficulty/UID checks — must report 0 errors |
| `check_katex.mjs` | parses all formulas with KaTeX (needs `npm ci`) |
| `create_exercise.py` | legacy interactive generator — outdated naming/sections, don't use |

## 10. Known quirks

- UID 107 does not exist (gap); #70 and #74 are `.mdx`.
- Collège 9ème files #62–66 have `section: "التاسعة أساسي"` (harmless; validator ignores collège sections).

## 11. Lessons log (append corrections from Seifeddine here)

- 2026-10-30: first batch. Screenshots of the tan(π/x) exercise and the Rafeha Mnihla DC3
  were already in the repo (#31, #32–34) → duplicate check is step 1.
  #32 had silently lost a question at extraction → after extracting, re-count
  the questions against the photo.
