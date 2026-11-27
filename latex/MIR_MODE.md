# MIR_MODE.md — handouts for strong pupils in the style of the Mir books

For the `_maths_tutoring` Claude Project: copy this file, `latex/axiomath.sty` (v2.3, the repo copy is now the reference)
and the folder `latex/fonts/literaturnaya/` into its files.
Decided by Seifeddine on 2026-11-27. Models: G. N. Berman, *A Problem Book in Mathematical Analysis*;
A. Kutepov & A. Rubanov, *Problems in Geometry*; M. Postnikov, *Lie Groups and Lie Algebras* (Mir Publishers, Moscow).

## 1. When

| audience | package | look |
|---|---|---|
| every class by default (weak and average pupils, collège, lycée) | `\usepackage[level=...]{axiomath}` | coloured handout |
| **lycée pilote**, strong pupils, preparation for competitions | `\usepackage[level=...,mir]{axiomath}` | Mir: black ink, Literaturnaya |

One handout = one style; never mix the two in one PDF. When Seifeddine says « pilote », « élèves forts » or « style
Mir », use Mir mode; otherwise the coloured package.

## 2. How: one word, `mir`

```latex
\documentclass[12pt,a4paper]{article}
\usepackage[level=1,mir]{axiomath}          % drop ",mir" and the same file gives the coloured handout
\axsetup{title={Thalès et calcul numérique}, serie=3,
         classe={1\textsuperscript{ère} année -- lycée pilote}, corrige}   % "corrige" only on the corrigé
\begin{document}
\axmaketitle
\sommaire                                    % mini table of contents of the exercises (compile twice)
\begin{rappels} ... \end{rappels}            % the reminder that opens every série
\begin{exo}[title={...}, stars=4] statement \end{exo}                    % pupils' sheet
\begin{corr}[title={...}, stars=4] statement \axsol solution \end{corr}  % corrigé
\end{document}
```

Everything is in `latex/axiomath.sty` v2.3 (Seifeddine's v2.2 + the `mir` option, `rappels`, `\sommaire`,
`classe`, `sous-titre`, `\og`/`\fg`, the figure styles). `latex/axiomath-mir.sty` is only an alias
(`\usepackage{axiomath-mir}` = `\usepackage[mir]{axiomath}`). Compile with **xelatex** (as always for axiomath),
twice. Examples: `latex/examples/serie-pilote-enonce.tex` and `serie-pilote-corrige.tex` (4 bank exercises).

## 3. What never changes (both styles, every level)

- **The corrigé is detailed, with boxes** (house rule, Seifeddine 2026-11-18 and 2026-11-27): a `prop` box before each
  course tool it uses (1–3 per exercise), framed key results with `\ib{}`, one step per line, the rule named at each
  step, `\textbf{Idée :}` and `\textbf{Piège :}` lines at the end. In Mir mode the boxes are thin black frames headed
  « Rappel. », but they are all there.
- Every série and devoir opens with `rappels` and `\sommaire`.
- Every exercise is handed off to the site (`inbox/README.md`, rule 6) with `% audience: "pilote"`, and the PDFs go
  to Classroom through `inbox/classroom/` (rule 7).
- Mathematics checked with SymPy or numerics before anything is committed.

## 4. The Mir page (what `axiomath-mir.sty` does, and what you write)

- **Typography**: **Literaturnaya**, the Soviet book face of most Mir books (1950–1990), for the text *and* the
  mathematical letters (`mathastext`), as in Berman or Kutepov–Rubanov. The font is in the repo:
  `latex/fonts/literaturnaya/Literaturnaya-Regular.ttf` (free revival by Marath Salychow, CC BY 3.0, French accents
  added for AxioMath; see its README). **Compile with `xelatex`** (twice, for the `\sommaire`), from the repo root or
  with the font folder copied next to the `.tex` (`fonts/literaturnaya/` or the same folder; or set
  `\newcommand{\AxMirFontDir}{path/}` before `\usepackage`). Italic and bold are slanted / emboldened from the Book
  style until true italic and bold files are added. With pdflatex the package falls back to Latin Modern and warns.
  Black only, spaced capitals for the title block between thin rules, small italic running head, page number top right.
- **Sections** numbered like Kutepov–Rubanov: « 15. Prismes et parallélépipèdes ». Use them to group the problems
  by idea; the `\sommaire` lists them.
- **Problems** numbered continuously through the handout in bold (« 12. »), no title printed, the statement starts on
  the same line. A hard problem (`stars` ≥ 3) gets an asterisk, as in Berman (« 155*. »); points, if any, in italics.
  The `title` key is still required: the sommaire, the site and the corrigé (« Solution (title). ») use it.
- **Questions**: `enumerate` gives « 1. », « a) », « i) ». Families of short items may share one problem, Berman-style:
  « Déterminer les domaines de définition : (1) … ; (2) … ; (3) … ».
- **Wording for strong pupils**: short and exact, imperative (« Démontrer que… », « Calculer… », « En déduire… »),
  fewer intermediate steps than the standard sheet, no hint in brackets in the statement (hints belong in the
  corrigé's `Idée :`). The difficulty can be higher; the corrigé stays as detailed as for anyone.
- **Figures**: the Mir-book figure rule (`.claude/skills/axiomath-design/SKILL.md` §4b). **The weight of a line says
  what it is**; `axiomath-mir.sty` defines the TikZ styles, use them instead of raw widths:

  | style | line | for |
  |---|---|---|
  | `main` | solid 0.9 pt | the object of the problem: the polygon, the visible edges of a solid, the curve studied, a rod |
  | `thin` | solid 0.4 pt | secondary lines: diagonals, chords, the second curve |
  | `hidden` | dashed 0.4 pt (3–2) | hidden edges of a solid (space geometry: always dashed, never omitted) |
  | `constr` | dashed 0.4 pt (2–1.5) | heights, projections onto the axes, reference verticals, construction lines |
  | `path` | dashed 0.4 pt (4–2) | trajectories and arcs of motion (pendulum swing) |
  | `axis` / `vec` | 0.45 / 0.7 pt with a small sharp head | axes / vectors and forces |
  | `pt`, `lbl` | small filled dot, italic label | a point that matters, its name close to it |

  A section of a solid is drawn `main` on the visible faces, `hidden` behind, and hatched (`pattern=north east lines`),
  never filled with colour. A fixed support (pendulum, wall) is a thin line with hatching. Angles: small `thin` arcs
  with an italic Greek letter. Caption « Fig. n » under the figure, small upright:
  `\begin{center} ...tikzpicture... \par\smallskip{\small Fig.~1}\end{center}`.
  **Labels are written, not computed**: `node{$H'$}`, `node{$A_1$}`; a loop `node{$\p$}` over coordinates called `Hp`
  or `A1` prints « Hp », « A1 » (bug of exercise #369). Use `\foreach \p/\t in {Hp/H',A1/A_1}` and print `$\t$`.
  Example of all styles: `latex/examples/figures-mir.tex`.
- **QCM** in Mir mode: numbered (1), (2)…, options A–D on one line; the answer key appears only in the corrigé.

## 5. Before the PR

1. `xelatex` twice (the `\sommaire` needs it): 0 errors, no « Missing character » in the log, no overfull box.
2. The pupils' PDF (without `corrige`) shows no solution; the corrigé shows every `prop` box and `\ib` frame.
3. Each exercise as its own inbox file with `% audience: "pilote"`; the two PDFs + `post.yaml` in
   `inbox/classroom/<level>/<batch>/`.

## 6. Notes

- The `mir` option replaces the banner, the coloured boxes, the stars and the page decoration; it keeps every command,
  the QCM (correct answers in bold in the corrigé) and the Arabic levels (Arabic text keeps its Arabic font).
- The free Literaturnaya has one style: italic is slanted and bold is thickened until true files are added
  (`Literaturnaya-Italic`, `-Bold`, `-BoldItalic` in the font folder; the package uses them automatically).
