# inbox — hand-off from the `_maths_tutoring` Claude Project

`_maths_tutoring` writes exercises (homework series, devoirs, practice sets) in LaTeX for pupils.
The **AxioMath manager project** turns them into site exercises (`exercises/*.md`).
This folder is the only point of contact between the two. **This file is the contract**: if it
changes, both sides follow the new version.

```
inbox/
  TEMPLATE.tex        ← copy this, it is the exact format
  tex/<level>/*.tex   ← tutoring project drops files here (one exercise per file)
  done/<level>/*.tex  ← the manager moves converted files here (never touch)
  classroom/<level>/<batch>/   ← the pupils' PDFs + post.yaml, posted to Google Classroom on merge (rule 7)
```

## Rules for the tutoring project

1. **Write only under `inbox/tex/<level>/` and `inbox/classroom/<level>/`** (`<level>` = `7eme 8eme 9eme 1ere 2eme 3eme 4eme`).
   Never touch `exercises/`, `src/`, `public/`, `lessons/` or anything else.
2. **Never push to `main`.** Branch `inbox/<YYYY-MM-DD>-<short-topic>`, commit, open a PR into `main`.
   Do not delete or rewrite files in `inbox/done/`.
3. **One exercise = one file**, named `<level>-<chapter-slug>-<NN>.tex` (NN = running number in the batch).
   Never invent a UID: the manager allocates them.
   **You split, the manager does not.** A series or devoir you hand to pupils is one `.tex` with several
   exercises: do not commit that file. Commit each exercise as its own file in the format below (own metadata
   block, own statement and solution, any macros it needs copied into it). The pupils' PDF stays yours.
4. **Verify the mathematics before committing** (SymPy or numerics): every value, limit, identity and
   "Montrer que…" claim, and the full solution. The manager audits again, but an exercise that arrives
   wrong costs a round trip.
5. In the PR description list each file with chapter, difficulty, and any doubt (chapter fit, difficulty,
   a statement you adapted from a known source).
6. **Every exercise goes to the site, automatically.** Each série, devoir or practice set you write for a pupil is
   handed off in the same session, without asking: one `.tex` per exercise in `inbox/tex/<level>/` (rules 1–5),
   whatever the level, the audience or the style. Seifeddine still merges the PR: nothing is published before.
7. **Every série, devoir, cours and fiche goes to Google Classroom, automatically.** In the same PR, put the PDFs
   the pupils get in `inbox/classroom/<level>/<batch>/` with a `post.yaml` (format below). When the PR is merged,
   `.github/workflows/classroom.yml` uploads them to Drive and creates a **draft** post in the right class and topic;
   Seifeddine publishes it with one tap. Never post to Classroom yourself.
8. **Pupils' handouts** (the PDFs, not the inbox files):
   - every série and devoir opens with a **reminder** (`rappels`) and a **mini table of contents** (`\sommaire`);
   - **corrigés are always detailed with boxes**, for every level and every audience: reminder boxes (`prop`),
     framed key results (`\ib`), one step per line, `Idée :` / `Piège :`. Only the styling changes;
   - **audience decides the styling**: `\usepackage{axiomath}` (colours) by default; for lycée pilote and strong
     pupils `\usepackage{axiomath-mir}` (Mir rendering, black, Computer Modern), same commands, see `MIR_MODE.md`.
     Then add `% audience: "pilote"` to each exercise file.

## File format

Start from `TEMPLATE.tex`. Three parts, in this order: metadata block, optional simple macros, then
`% ---STATEMENT---` and `% ---SOLUTION---`.

**Also accepted: the native handout file.** One exercise per file, as the tutoring project compiles it:
the `% key: value` metadata block, then a complete document with
`\begin{corr}[title={…}, stars=N, source={…}] statement \axsol solution \end{corr}`. The converter reads the
statement before `\axsol` and the solution after it, takes the title from `corr`'s `title` (plain text: no
`$…$` in a title), converts `qcm` / `\qitem[AB]{question}{a}{b}{c}{d}` (options become **A.** **B.** …) and
`\axanswerkey{1/AB, …}` (a "correct answers" line), and keeps the tikz figures. For an Arabic chapter without
`% chapter_slug:` the converter knows the slug of the chapters already in the bank; for a new Arabic chapter add it.
Put `% alt: <description>` before a figure, otherwise its alt text is the exercise title.

### Metadata (`% key: value`, YAML values)

| key | required | values |
|---|---|---|
| `school` | yes | `"lycee"` or `"college"` |
| `level` | yes | `"7eme" "8eme" "9eme"` / `"1ere" "2eme" "3eme" "4eme"` |
| `section` | lycée 2ème–4ème | `"Sciences"`, `"Informatique"`, `"Mathématiques"`, `"Sciences Expérimentales"`, `"Economie et Gestion"`, `"Technique"`, `"Lettres"` (a list if it fits several). Omit for collège and 1ère. 2ème Sciences and Informatique are the same book: the converter merges them. |
| `chapter` | yes | **exactly** a chapter of `canonical_chapters.md` (same spelling, accents, plural) for that level and section. No fit → stop and ask the manager. |
| `chapter_slug` | Arabic chapters only | ASCII slug for the filename, e.g. `"triangles-isometriques"` |
| `title` | yes | short, descriptive; French for lycée, Arabic for collège |
| `difficulty` | yes | `"Facile"`, `"Moyen"` or `"Difficile"` |
| `points` | no | integer (barème) |
| `tags` | yes | 3–6 kebab-case ASCII tags |
| `provenance` | yes | `"own"` (created) or `"adapted"` (adapted from a known exercise or book) |
| `dressing` | practice sets | the variation of the technique this exercise trains, e.g. `"nth term"`, `"absolute value"` |
| `rung` | practice sets | difficulty step inside the set, 1 = direct application |
| `batch` | yes | same value for every file generated together, e.g. `"2026-11-18-suites-2sc-A"` |
| `defi` | no | `true` for a challenge that goes beyond the programme (olympiad style, off-programme tools). The site lists it after every regular exercise of its chapter, with a rose tint and a « Défi · hors programme » badge. Still file it in the closest canonical chapter; never use it to hide a regular exercise. |
| `audience` | no | `"pilote"` for exercises written for strong pupils (Mir handout). The site tags them `pilote`. Leave out otherwise. |
| `uid` | leave `""` | assigned by the manager |
| `source`, `professor`, `year`, `country` | no | leave out: default to `"Axiomaths"`, `"Axiomaths"`, current year, `"Tunisie"`. Only set `source` for an adapted exercise if you know it. |

A practice set on one idea is 5–10 exercises: the same technique in different dressings, **not clones that
only change the numbers**.

### Body: what the converter understands

Plain LaTeX content, **no handout styling** (no `tcolorbox`, no coloured boxes of your own; the pupils' handout
is a different rendering, produced separately). The only boxes are the three solution constructs listed below.

- `enumerate` / `itemize`, nested up to three levels (rendered as `1.` / `a.` / `i.`; your label options are ignored)
- inline math `$…$`, display math `\[…\]`, `$$…$$`, `equation*`, `align*`, `gather*`
- `\textbf`, `\textit`, `\emph`, `\\`, `\section*{Partie A}`, `\og … \fg`, `\ldots`
- `tabular` (becomes a Markdown table; first row = header)
- `\newcommand{\N}{\mathbb{N}}`-style macros defined in the preamble are expanded (KaTeX does not know your macros)
- `tikzpicture` figures (compiled to PNG). **Pure black on white**, thin lines, old-textbook style. Colour
  only if the figure cannot be read without it. Put `% alt: <one-line description>` right before the figure.
  Tables of variations and sign tables: use `tabular`, not tikz.

- **Solution boxes** (house style, see "Solutions"): `\begin{prop}[Title] … \end{prop}` becomes a property box,
  `\ib{$…$}` (or `$\ib{…}$`) a framed key result, and the lines `\textbf{Idée :} …` / `\textbf{Piège :} …` an
  "Idée" / "Piège" box. Your `axmain/axdark/axlight` colours are turned black in figures.

Anything else is reported by the converter as "unconverted LaTeX" and fixed by hand, so prefer the list above.

### Solutions

Always provide a full solution. Write it so a **weak pupil can follow**: one operation per line, say which
rule or theorem is used, no skipped algebra, same numbering as the statement. Put each step in its own
paragraph (blank line between steps).

House style of the site (rule since 2026-11-18): before using a property, a `prop` box with its statement
(1–3 boxes per solution, one idea per box); frame the 1–3 key results with `\ib{}`; end with one `Idée :` line
(the intuition) and, when a classic mistake exists, one `Piège :` line. A `prop` may sit inside a list item.

### Language

Lycée statements and solutions in French; collège in Arabic.

## Classroom hand-off (`inbox/classroom/<level>/<batch>/`)

One folder per handout batch, the same `batch` id as the exercise files. It holds the PDFs exactly as the pupils get
them and a `post.yaml`:

```yaml
class: "1ère"                     # Classroom course, by its name in Classroom (or its numeric id)
topic: "Théorème de Thalès et sa Réciproque"   # the canonical chapter = the Classroom topic (created if missing)
kind: "serie"                     # serie | devoir | cours | fiche
title: "Série 3 : Thalès et calcul numérique"
description: "Révision avant le devoir de synthèse."   # optional
files: ["serie.pdf"]              # attached to the post, in this order
corrige: "corrige.pdf"            # optional: a second draft post « Corrigé : <title> », to publish later
```

Rules: PDFs only (compiled, checked), file names ASCII, one post per folder. The workflow skips a post whose title
already exists in that class (so re-running is safe) and never publishes: every post is created as a **draft**.

## What the manager does with a batch

1. Bases a branch on your PR branch, runs `scripts/inbox_convert.py` (UID, filename, frontmatter, figures, markdown).
2. Audits every statement and solution independently (SymPy), looks at every figure, checks for duplicates
   in the bank, adjusts wording/difficulty, runs `validate_exercises.py` and `check_katex.mjs`.
3. Opens one PR with the converted exercises (your inbox files move to `inbox/done/`). Seifeddine tests the
   Vercel preview and merges. Your PR is then merged by the same commits.
