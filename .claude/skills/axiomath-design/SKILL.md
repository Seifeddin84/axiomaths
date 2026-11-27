---
name: axiomath-design
description: AxioMath visual design system, figure style and UI audit checklist. Use for any change to the site's look or UI — src/components, src/app pages, globals.css, tailwind.config.js, a new page or widget, a design review or audit — and whenever drawing a figure (exercise PNG, lesson SVG, TikZ, matplotlib). Not for exercise/lesson content (see CLAUDE.md and lessons/_GUIDE.md).
---

# AxioMath design system

Direction (Seifeddine, 2026-11-27): **orange/teal stays the default look, made consistent**, while other themes
are tried through the test switch (§2b) without touching the live site.
The site is a tool for Tunisian pupils, mostly on phones, often weak or average in maths.
Every design decision is judged by one question: *does it help a pupil read and do the maths?*

Personality: clean, calm, school-friendly, a little warm. Not a startup landing page, not a game.

## 1. Before touching UI

1. Read the component and its CSS first; reuse an existing pattern before inventing one.
2. No new colour, font, shadow or radius outside the tokens below. Need one? Ask Seifeddine in the PR.
3. Content rules still apply: figures are black old-textbook style (CLAUDE.md §6), chapter names come from
   `canonical_chapters.md`, collège is Arabic and RTL.

## 2. Colour tokens (single source of truth)

The brand palette lives in **`src/app/themes.css`** as CSS variables (`--ax-accent-50…950`, `--ax-primary-50…950`,
space-separated RGB channels). `tailwind.config.js` maps `accent` + `orange` to the accent ramp and `primary` + `teal`
to the primary ramp, and `globals.css` uses `rgb(var(--ax-…))`. **Never write a brand hex in a component or in
`globals.css`**: use the Tailwind class or the variable, or the theme switch stops working. Neutrals stay Tailwind `gray-*`.
`src/config/themes.ts` (Vercel, Linear, Stripe… themes) and `useActiveTheme` are **not used by any component**:
do not build on them; they are slated for removal.

| Role | Light | Dark | Use |
|---|---|---|---|
| Accent (orange) | `#ea580c` fills, **`#c2410c` for text** | `#fb923c` | links, question numbers, `\boxed{}` frame, active states |
| Primary (teal) | `#14b8a6` fills, **`#0f766e` for text** | `#2dd4bf` | secondary accent, lesson h2 underline in dark |
| Text | `gray-900` / `gray-600` / `gray-500` | `gray-100` / `gray-300` / `gray-400` | body / secondary / muted |
| Surface | `white`, `gray-50` | `gray-950`, `gray-900` | page, cards |
| Border | `gray-200` | `gray-800` | cards, tables |

**Contrast rule (WCAG AA, 4.5:1 for text under 18px):** `#ea580c` on white is 3.56 and `#14b8a6` on white is 2.49,
so both **fail as small text**. Use them for fills, borders and big headings only; small text uses `#c2410c` (5.18)
or `#0f766e` (5.47).

## 2b. Test themes (switch)

- Two independent choices, listed in `src/lib/siteThemes.ts` and defined in `src/app/themes.css`:
  **colours** (`data-ax-theme`: palette, paper tone, corners, boxes) and **fonts** (`data-ax-font`, a font pack that
  overrides the theme's own fonts; declared last in the CSS so it wins).
- Colour themes: `classic` (default) · `manuel` · `vert` · `mir` (black + ink blue, cream paper) · `lebosse` (black + brick)
  · `mir-pur` (a page of a Mir book: Computer Modern for text and maths, no filled boxes, bold run-in labels,
  italic statements, thin left rule, □ after proofs) · `lebosse-vert` (bottle green) · `lebosse-bleu` (Prussian blue) · `lebosse-noir` (black, with printer's red for the colour boxes, as in some old manuals) · `lisible` (indigo).
  The four Lebossé colourways share old paper, square corners and Garamond. `lebosse` and `lebosse-noir` print the
  boxes in **three inks** like old French manuals (Seifeddine, 2026-11-27): black = propriété, démonstration, remarque…;
  blue = théorème, définition, méthode, vérifie-toi; sober green (`#3f6b4e`, the `vert` theme's ink) = exemple; red = l'idée, piège, attention, défi; and key
  formulas (`\boxed{}`) framed in red. `lebosse-vert` and `lebosse-bleu` keep two inks (black + their colour).
- Font packs: `cmu` (Computer Modern, self-hosted in `public/fonts/cmu`, subset Latin + French, the same family as
  KaTeX so text and formulas match) · `garamond` (EB Garamond + Playfair headings) · `pt` (PT Serif / PT Sans) · `crimson` · `atkinson`
  (Atkinson Hyperlegible, low-vision font) · `roboto` (the classic fonts). Seifeddine's favourite so far (2026-11-27):
  Lebossé, then Mir, then Lisible, Garamond in particular.
- Theme fonts are downloaded **only when chosen** (`loadFonts`); Arabic falls back to Tajawal. Each theme is generated as
  a block of the same shape: ramps, then optional fonts, paper, radius, two-ink boxes.
- A script in `<head>` (`THEME_BOOT_SCRIPT`) sets `data-ax-theme` on `<html>` before the first paint.
  `?theme=<id>` and `?font=<id>` pick for this browser; `?theme=classic` and `?font=theme` reset.
- The switcher (`ThemeSwitcher.tsx`, a small « Thème » button that opens two selects) appears on Vercel previews and in dev; on the live site only after `?themes=on`
  (`?themes=off` or × hides it). Pupils never see it, and without a choice everyone gets `classic`.
- Adding a theme: one ramp pair in `themes.css` + one entry in `SITE_THEMES`. Check contrast first: the theme's
  600 shade on white and 400 shade on `gray-950` must both be ≥ 4.5.
- Box colours (`.lesson-box--*`) and difficulty colours are semantic: they keep their colours in every theme, except
  the deliberate two-ink experiment of `mir` and `lebosse` (to be judged with pupils).
- Regression rule: with `classic`, the site must stay pixel-identical to `main` (checked on 2026-11-27 for home,
  a lycée chapter, a collège level page and `/theoremes`, light and dark).

Semantic colours (meaning first, never decoration):

- **Difficulty**: Facile = green, Moyen = amber, Difficile = red. White text on `green-600` (3.3) or
  `amber-500` (2.15) fails: active chips need `green-700` / `amber-700`+ or dark text on the light shade.
- **Solution/lesson boxes** (`.lesson-box--*` in `globals.css`): theorem orange `#c2410c`, property/corollary teal
  `#0f766e`, definition blue `#1d4ed8`, method violet `#6d28d9`, trap rose `#be123c`, warning red `#b91c1c`,
  intuition ochre `#a16207`, remark slate `#475569`, example pink `#be185d`. Solid title bar, white text,
  full frame (Seifeddine 2026-11-19, like his tcolorbox handouts). Same kind = same colour everywhere.
- **Défi** cards: rose tint, always last in the chapter. **★ Recommandé**: badge, keep it rare.
- Maths highlight in lessons: `\textcolor{#ea580c}{…}` on the term that changes from one line to the next.

## 3. Typography

- **UI and text**: one sans family (currently Roboto through `tailwind.config.js`). **Arabic**: Tajawal.
  **Maths**: KaTeX's own fonts (`KaTeX_Main`). That's three families in total, nothing more.
- Load only those families and the weights in use (400, 500/600, 700). Every extra family costs pupils data on mobile.
- Weights: body 400; labels and buttons 600; headings 700–800. `font-black` (900) only for the logo/hero.
  If everything is bold, nothing is a heading.
- Body size ≥ 16px on mobile; line-height ≈ 1.6 for statements and solutions.
- Maths must never be shrunk to fit: long formulas scroll horizontally (`.katex-display { overflow-x: auto }`),
  and the page itself never scrolls sideways.

## 4. Layout and components

- **Mobile first.** Design at 360px wide, then check 768px and 1280px. Pupils mostly use phones.
- **Card view is the main view** (pupils prefer it): title, chapter, difficulty chip, source/professor, then the
  statement; the solution opens on demand under it. Filters: difficulty chips, professor, order easy → hard, recommended.
  The table view is secondary, for teachers.
- Lessons are an accordion card at the top of the chapter page, not a separate page.
- Tap targets ≥ 44×44px; filter chips can wrap on several lines but must not scroll out of reach.
- Spacing on the Tailwind 4px scale; card radius `rounded-lg` (the one in use), light border, at most a subtle shadow.
- **RTL**: collège content uses `dir="rtl"` on the `.exercise-content` element itself. Maths stays LTR in an isolated island.
  No Arabic inside formulas (lessons/_GUIDE.md). Check every UI change in an Arabic page too.
- **Dark mode** (`darkMode: 'class'`): every new colour needs its dark pair. Check that `.dark .katex` colour overrides
  don't erase deliberate `\textcolor` highlights.
- Motion: transitions 150–200ms on hover/expand only. No decorative animation, no parallax.

## 4b. Figures: the Mir-book style (rule, Seifeddine 2026-11-27)

Model: the line drawings of Mir Publishers books (Postnikov's *Lie groups*, *Problems in Geometry*, *Differential
models*: the pendulum, the projectile, the circles of Apollonius). Every figure AxioMath draws (exercise PNGs, lesson
SVGs, TikZ from the handouts, matplotlib plots) follows it, and it refines CLAUDE.md §6.

- **Ink**: pure black on white. No fills, no shadows, no rounded frame, no title inside the image. Hatching only
  where a textbook would hatch (a fixed support, a region to shade).
- **Line weights: the weight of a line says what it is** (Seifeddine, 2026-11-27, from Kutepov–Rubanov and Berman):
  | kind | look | TikZ style (`axiomath-mir.sty`) | matplotlib |
  |---|---|---|---|
  | object of the problem (polygon, visible edges, curve studied, rod) | solid ≈ 0.9 pt | `main` | `lw=1.2` |
  | secondary lines (diagonals, chords) | solid ≈ 0.4 pt | `thin` | `lw=0.6` |
  | hidden edges of a solid | dashed 3–2 | `hidden` | `ls=(0,(3,2)), lw=0.6` |
  | heights, projections, reference lines | dashed 2–1.5 | `constr` | `ls=(0,(2,1.5)), lw=0.6` |
  | trajectories, arcs of motion | dashed 4–2 | `path` | `ls=(0,(4,2)), lw=0.6` |
  | axes / vectors and forces | 0.45 / 0.7 pt, small sharp head | `axis` / `vec` | `lw=0.7` / `lw=1.0` |
  In space geometry hidden edges are **always** drawn, dashed. A section is solid on visible faces, dashed behind,
  hatched (never colour-filled). A fixed support is a thin line with hatching. Example: `latex/examples/figures-mir.tex`.
- **Labels**: italic serif letters, the same family as the formulas (`$A$`, `$A'_{12}$`, `$\alpha$`), set close to
  their point and never on a line. Write labels, do not print coordinate names: a coordinate `Hp` printed with
  `node{$\p$}` shows « Hp » instead of « H' » (bug of exercise #369). Points get a small dot only where it means something.
- **Axes**: thin, small sharp arrowheads, italic `$x$`, `$y$`, `$O$` at the origin. Ticks and values only when the
  question needs them. No grid, no box frame.
- **Arrows** (forces, velocities, mappings): thin with small sharp heads, italic labels (`$mg$`, `$v_0$`).
  **Angles**: small arcs with an italic Greek letter.
- **Caption**: plain small "Fig. n" (or the short legend) **under** the figure, in the text, not in the image.
- **Colour**: none by default. The exceptions of CLAUDE.md §6 still hold (a path in a graph, curves to tell apart):
  then one sharp colour, everything else black.
- **Check** every PNG/SVG at phone width: labels readable, no label collision (lesson of figure #383).

matplotlib preset (copy into the figure script, not into the repo):

```python
import matplotlib as mpl
mpl.rcParams.update({
    "font.family": "serif", "font.serif": ["CMU Serif", "Latin Modern Roman", "DejaVu Serif"],
    "mathtext.fontset": "cm", "font.size": 11,
    "lines.linewidth": 1.0, "axes.linewidth": 0.6,
    "axes.spines.top": False, "axes.spines.right": False, "axes.grid": False,
    "xtick.major.width": 0.6, "ytick.major.width": 0.6, "xtick.direction": "in", "ytick.direction": "in",
    "figure.facecolor": "white", "savefig.dpi": 240, "savefig.bbox": "tight",
})
# construction lines: ls="--", lw=0.5 · labels: ax.text(x, y, r"$A'_{12}$")
```

TikZ preset: `\begin{tikzpicture}[line width=0.5pt, >=stealth, every node/.style={font=\itshape}]`, main object
`line width=0.9pt`, auxiliary lines `dashed`.

## 5. Anti-patterns (refuse these)

- Gradients, glassmorphism, neon glows, blob backgrounds, emoji used as decoration (existing badges like 🔥 Défi are fine).
- New brand colours "for variety"; colour that carries no meaning.
- Hero sections, marketing copy, or carousels on pages whose job is listing exercises.
- Icons without text labels for important actions.
- Hiding the solution behind more than one click, or anything that interrupts a pupil doing an exercise (pop-ups, modals).
- Copying another product's look (the dead themes in `themes.ts` are the warning).

## 6. Audit checklist (run for every UI PR, and on request for a full audit)

Numbers, not opinions:

1. `npm run build`: no errors.
2. **Lighthouse, mobile preset** on the home page, one lycée chapter page and one collège (Arabic) chapter page, against the
   Vercel preview: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95. Report the scores in the PR.
3. **axe** (or Lighthouse a11y details): 0 contrast failures, every image has `alt`, buttons have names.
4. Contrast of any new colour pair checked with the WCAG formula (≥ 4.5 small text, ≥ 3 large text and UI borders).
5. Screenshots: 360px and 1280px × light and dark × French and Arabic page, before/after in the PR.
6. KaTeX: `node check_katex.mjs` on touched content; open a page with long formulas and a sign table on 360px.
7. Font requests: only the families of §3 appear in the network panel.

## 7. Known design debt (fix in dedicated PRs, one topic each)

Found on 2026-11-27; tick off here when done.

- [ ] `layout.tsx` loads about 12 font families (Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Playfair, Lora,
      JetBrains Mono, Crimson Pro, Satoshi, Tajawal); §3 needs 2 + KaTeX. Switch to `next/font` for Roboto and Tajawal.
- [ ] `src/config/themes.ts` + `useActiveTheme`: unused theme catalogue, delete.
- [ ] Contrast: orange/teal small text, white-on-amber and white-on-green difficulty chips (§2).
- [ ] ~156 uses of `font-black` across components; bring them back to the weight scale of §3.
- [ ] `globals.css` has 87 hand-written `ol[start="n"]` counter rules; replace them with a `counter-reset` based on the
      `start` attribute or a remark plugin.
- [ ] Verify `.dark .katex * { color: inherit }` does not cancel `\textcolor` highlights in lessons.
- [ ] Theorem box colour differs: orange in exercise solutions (`.exercise-content .lesson-box--theorem`) but teal in
      lessons (`.lesson-box--theorem`, `.lesson-box--example` orange). Pick one per kind (§2: same kind = same colour).
- [ ] Chapter page titles are built from the URL slug and lose accents and casing ("Suites Arithmetiques Et
      Geometriques"); they should show the canonical chapter name.
- [ ] Lesson figures drawn before this rule (e.g. the suites plot with teal dots) → redraw in the Mir style of §4b.
- [ ] `*.backup` files in `src/app/` and the root (`tailwind.config.js.backup`): remove once confirmed unused.

## 8. Reporting

PR description: what changed visually, screenshots (§6.5), Lighthouse scores before → after, any token added
(with Seifeddine's OK), and which debt items it closes. Never push to `main`.
