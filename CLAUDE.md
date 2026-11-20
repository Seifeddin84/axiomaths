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

## 2b. Banque : règles permanentes (décidées par Seifeddine)

- **R1. Tout exercice va dans la banque**, quelle que soit sa source (séries, devoirs, bacs…).
  Les doublons banque / devoir / bac sont **voulus** : ne pas dédoublonner, ne pas demander.
  Seuls contrôles : collisions d'uid et fichiers créés deux fois par erreur.
- **R2. La mathématique prime sur la source.** Énoncé juste et solution vérifiée ; une source mal
  retrouvée ne fait pas rejeter l'exercice. On n'affiche jamais une fausse citation : sans lien
  retrouvé, étiquette honnête (« Axiomaths », « résultat classique »).
- **R3. Vision.** Alimenter la banque avec (a) archives / scans, (b) contenu Axiomaths généré en masse dans
  le style tunisien (cible ~50 % de contenu propre à terme ; archive en croissance lente, contenu propre en
  croissance rapide), (c) exercices retrouvés / adaptés depuis les connaissances de Claude, l'internet et les
  livres. Toute adaptation est vérifiée par le code (SymPy / Fractions) avant publication.
- **R4. Répétition d'une IDÉE** (pas de copies avec seulement des chiffres changés). Pour comprendre une
  technique, un élève fort a besoin de 5 à 7 exercices (jusqu'à 10) du même type, *dans le même domaine*, avec
  des habillages différents (valeur absolue, comparaison, simplification, suppression des radicaux, n-ième
  terme, produit remarquable…) ; pour des élèves plus faibles viser 7–10 avec des marches plus petites
  (**à tester** sur de vrais élèves). En plus : variation **par chapitre** (la même idée dans un autre
  chapitre = transfert). Parcours type : 2 techniques nues, 3–4 habillages, 2 déguisements forts, 1 piège,
  puis des exercices de transfert ; hypothèse à tester : finir par un exercice mixte.
- **R5. Champs de frontmatter optionnels** (après `tags`, tolérés par le validateur et le parseur) :
  `provenance` (own | adapted | scan), `source_url` (lien réellement retrouvé), `adapted_from` (texte libre),
  `source_checked` (true seulement si le contenu propre de la page a été lu pendant la session et correspond),
  `idea` (technique, identifiant court partagé entre chapitres : `telescopage`, `denestage`…),
  `dressing` (habillage dans le chapitre), `rung` (1 technique nue · 2 habillages · 3 déguisement fort ·
  4 piège · 5 transfert). `source` reste le texte affiché. Ne renseigner `idea` / `dressing` que si c'est
  évident, jamais pour combler une case.
- **R6. Ordre des vagues** pour la suite des imports et générations : d'abord **3ème Économie (3 ES) et 8ème**,
  puis **1ère année et 2ème Sciences**.
- **Étoiles → difficulté** (séries .tex) : ★ et ★★ → Facile, ★★★ → Moyen, ★★★★ → Difficile.
- **Séries générées par Axiomaths** : `source: "Axiomaths"`, `professor: "Axiomaths"`, `year` = année courante.

## 2c. Figures TikZ → PNG, et devoirs

- Une figure TikZ d'un `.tex` devient un PNG : `tikzpicture` isolé dans `\documentclass{standalone}` (pdfLaTeX),
  couleur `axmain` redéfinie en noir, puis `pdftocairo -png -r 240 -singlefile`. Nom : `<stem>.png`, puis
  `<stem>-2.png`, … (voir §6). Couleur conservée seulement quand plusieurs courbes doivent se distinguer.
- **Devoirs** (page `/devoirs`) : un PDF + un YAML dans `public/exams/` (`exams.ts` lit les `.yaml`).
  Champ optionnel `corrige_filename` : le PDF du corrigé, affiché par le bouton « Corrigé ». Le devoir va aussi,
  exercice par exercice, dans la banque (R1).
- `axiomath.sty` v2.0 ne contient pas `prop` ni `\ib` : ajouter `bloc_axiomath_prop.tex` avant de compiler un corrigé.

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
bac: "1990-principale-maths"    # optional: id of the bac paper (public/bac/<id>/) it comes from
recommended: true               # optional: worth showing to students → "★ Recommandé" badge + filter
---
```

Section rules:
- Collège and lycée **1ère**: `section: null`.
- Lycée 2ème–4ème: one string, or a list when the exercise fits several sections
  (the site shows it under each): `["Sciences", "Informatique"]`.
- **2ème Sciences and 2ème Informatique are one and the same** (same maths textbook:
  « Sections : Sciences – Technologie de l'informatique »). Always write
  `section: ["Sciences", "Informatique"]` for them (lessons: `sections: ["Sciences", "Informatique"]`).
  The site also merges them on load (`src/lib/sections.ts`), so a file tagged with only one still
  shows under both; the validator warns about it.
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
- Solutions: **house style below** (detailed, boxed reminders, one idea per line), same numbering as the
  statement. `**Vrai.**` / `**Faux.**` + one-line justification for V-F.
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

**Recommandé.** Set `recommended: true` only for exercises a teacher would pick to show
in class: a classic result reached step by step (Stirling, Leibniz series, e as a limit),
an elegant idea, or a question that links several chapters. Keep it rare (≈ 1 in 5),
or the filter stops meaning anything.

**Bac papers.** An exercise taken from a paper in `public/bac/<id>/` gets `bac: "<id>"`,
`source: "Bac <year> <session>, Ex. n"` and the paper's `sujet.tex` gets `\banque{<UID7>}`
in that block: the links then go both ways.

### Solutions: house style (rule since 2026-11-18, for every exercise we generate)

Model: Seifeddine's "corrigé détaillé" of the Thalès series (_maths_tutoring). The audience is the **weak and the
average pupil**: detailed, clean, nothing skipped.

- **Reminders in boxes.** Each course tool the exercise needs (theorem, property, formula, definition) is recalled
  in a box *before* the step that uses it (at the top of the solution, or at the start of the numbered item):
  `:::property[Thalès : direct et réciproque]` … `:::`. One box per tool, 1–3 boxes per exercise, not more.
  The key formula inside is framed with `\boxed{…}` (key formulas only, and the final results worth keeping).
- **Steps.** Same numbering as the statement. One idea per line, each step its own paragraph (blank line between).
  Say which property is used ("D'après le rappel…", "Thalès de sommet $A$"). Show the intermediate computation
  (no skipped algebra); display equations on their own line (`$$\displaystyle …$$` inside a numbered item).
  Justify every "Montrer que" fully; finish a question with its result, and a *Contrôle* line when a quick
  check exists.
- **End of the solution** (when useful): `:::intuition` (the idea in one or two lines) and `:::trap` (the typical
  wrong move, one or two lines). Optional `:::method` for a recipe that will be reused.
- **Box kinds** (same as the lessons, unnumbered here): `property`, `theorem`, `definition`, `method`, `example`,
  `remark`, `warning`, `intuition` (« L'idée »), `trap` (« Piège »). Title in brackets, no title needed for
  `intuition`/`trap`. Collège (Arabic) solutions get Arabic labels automatically.
- **Syntax.** `:::kind[Title]` on its own line, content, `:::` on its own line, blank line before and after.
  Inside a numbered item indent the whole box (every line) by the item's indentation (3 spaces).
  Boxes work only in the solution part, nothing else changes for exercises without a `:::` line.
- Reference example: exercise **#44** (2ème Sciences/Informatique, suites).

## 6. Figures

- Path: `public/exercises/images/<same stem as the .md>.png`;
  in markdown: `![short description](/exercises/images/<stem>.png)`, placed where
  the statement refers to it.
- Prefer **redrawing** the figure cleanly (matplotlib, white background, black
  lines, hatching where the original hatches) over cropping a photo. Check the PNG
  visually before committing.
- Style: old-textbook, pure black on white, **including graph theory and geometry**. Colour only when it
  clearly helps understanding or use, and then sharp colours (see the lessons log, 2026-11-13).

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
- Always include a full verified solution, in the house style of §5 (boxed reminders, step by step).

## 9. Tools in the repo

| file | use |
|---|---|
| `next_exercise.py` | next UID(s) + canonical filename (non-interactive) |
| `validate_exercises.py` | frontmatter/chapter/difficulty/UID checks — must report 0 errors |
| `check_katex.mjs` | parses all formulas with KaTeX (needs `npm ci`) |
| `scripts/inbox_convert.py` | converts the `.tex` exercises in `inbox/tex/` (from `_maths_tutoring`) to site exercises — see §11 |
| `create_exercise.py` | legacy interactive generator — outdated naming/sections, don't use |

## 10. Known quirks

- UID 107 does not exist (gap); #70 and #74 are `.mdx`.
- Collège 9ème files #62–66 have `section: "التاسعة أساسي"` (harmless; validator ignores collège sections).

## 11. Inbox hand-off from `_maths_tutoring`

The Claude Project `_maths_tutoring` generates pupils' homework in LaTeX and also drops each exercise as a
`.tex` file in `inbox/tex/<level>/` (branch `inbox/<date>-<topic>`, PR into main, never main itself). **This
project is the manager**: only it allocates UIDs, writes `exercises/`, and publishes. The format contract
the other project follows is `inbox/README.md` (single source of truth; change it there, not in prompts).
The converter maps the tutoring solution constructs to the house style of §5: `prop` → `:::property[…]`,
`\ib{}` → `\boxed{}`, `Idée :` / `Piège :` lines → `:::intuition` / `:::trap` (tested on the Thalès corrigé).

The converter reads both the contract format and the tutoring project's native handout file (`corr` … `\axsol` … `\end{corr}`,
`qcm`); first real batch: 37 files of 8ème (fractions, symétrie centrale), UIDs 306–342 (renumbered from 264–300, which collided with the 3ème Éco import).

Vercel does not build `inbox/*` branches (`vercel.json` `ignoreCommand`; they only add `.tex`), so the tutoring PR has no
preview: the preview to test is the one of our `claude/convert-<batch>` PR. The tutoring project splits a series into one
file per exercise itself (`inbox/README.md`, rule 3).

Workflow for a batch (Seifeddine says "new batch", or `git ls-remote --heads origin 'inbox/*'`):

1. `git fetch --depth=50 origin inbox/<branch>` then `git checkout -b claude/convert-<batch> origin/inbox/<branch>`
   (our PR carries the tutoring commits, so one merge closes both PRs).
2. `python3 -B scripts/inbox_convert.py --dry-run` (`-B`: `__pycache__` is tracked, do not dirty it),
   then without `--dry-run`. Files it skips stay in `inbox/tex/` with the reason; fix the metadata or the TeX
   by hand, or send the problem back to the tutoring project through Seifeddine.
3. The script does **not** make anything trustworthy. For every converted exercise, still do §2 and the lessons log (§12):
   - re-derive statement claims and the solution independently (SymPy / numeric, script outside the repo);
   - read the `.md` against the `.tex` (lost question, merged lines, wrong numbering) and open every PNG;
   - triage the "possible duplicate" warnings (an exercise in the bank *and* in a devoir is accepted, but an
     exercise duplicated inside the batch is not);
   - solutions must be step-by-step for a weak pupil; calibrate `difficulty` against the chapter;
   - generated content: `source: "Axiomaths"`, `professor: "Axiomaths"` stay as the script wrote them;
     `provenance`, `dressing`, `rung`, `batch` are kept in the frontmatter (practice-set bookkeeping);
     `recommended` is never set by the tutoring project.
4. `python3 validate_exercises.py ./exercises` (0 errors) and `node check_katex.mjs <new files>`.
5. Commit, push, PR with: new UIDs, skipped files and why, fixes and judgement calls, open questions.
   Seifeddine tests the preview and merges; never push to main.

## 12. Lessons log (append corrections from Seifeddine here)

- 2026-10-30: first batch. Screenshots of the tan(π/x) exercise and the Rafeha Mnihla DC3
  were already in the repo (#31, #32–34) → duplicate check is step 1.
  #32 had silently lost a question at extraction → after extracting, re-count
  the questions against the photo.
- 2026-10-30 (Seifeddine): **change of variable** is not a theorem in the Bac program but is used as a
  technique and accepted in solutions. Use it when it is the natural route (e.g. $t = 1/u$, $x = \tan\theta$);
  when a derivative-based proof also exists, give it as the main proof or as *Autre méthode*.
- 2026-11-13 (Seifeddine): **figures in the old-textbook style by default**: pure black on white, thin
  lines, hatching instead of fills, serif/CM labels (exercise PNGs *and* lesson SVGs). Use colour only
  when the figure cannot be read without it (e.g. several curves that must be told apart).
  Refined the same day: this holds for graph theory and geometry too. Colour is the **exception**, allowed
  when it adds real value to understanding or ease of use (a path in a graph, a highlighted element in a
  geometry figure, curves to tell apart); then use **sharp, saturated colours**, a few at most, and keep
  everything else black.
- 2026-11-13 (Seifeddine): **audit every exercise before adding it to the bank.** Re-derive the
  statement's claims and the printed solution independently (SymPy / numeric), not just the final
  answer; a printed error is corrected minimally and listed in the PR (see Ex. 13 of the 2ème manual, #195).
- 2026-11-13 (pupil test on a laptop, relayed by Seifeddine): a below-average pupil found the
  **solutions too crude** and wants **detailed, step-by-step** ones, and the **lessons too long**.
  For new exercises, write solutions a weak student can follow (one operation per line, say which
  rule is used, no skipped algebra); keep lessons short, with the "À retenir" first.
- 2026-11-13: Éco Séries 7 and 10 are Seifeddine's own compilations (PDF dates March–April 2021),
  so `year: 2021` there is the year of the série, not of an original bac; #182 keeps 2009 (Bac ES Amérique du Nord).
- 2026-11-17: import des séries Thalès (16), Calcul numérique (16), Défis (4) et du devoir 2ème Sciences
  « Polynômes et barycentre » (4) : UIDs 224–263 ; règles R1–R6 ci-dessus. Les exercices Défis portent
  `provenance: adapted`. `source_checked: true` = contenu de la page lu via WebSearch (WebFetch était bloqué
  par la liste d'autorisation de la session) et conforme ; la note de la *Mathematical Gazette* (Cambridge)
  n'a jamais été lue : elle reste une référence historique non vérifiée.
- 2026-11-18 (Seifeddine): **all solutions in the house style of §5** (boxed reminders, framed key formulas,
  detailed steps for weak and average pupils, « L'idée » / « Piège » at the end), modelled on his Thalès corrigé;
  rule for every exercise we generate from now on. Existing solutions stay as they are until rewritten.
