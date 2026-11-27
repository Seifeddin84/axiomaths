# Literaturnaya Book

`Literaturnaya-Regular.ttf` — *Literaturnaya Book* by **Marath Salychow** (2017), a free revival of the Soviet
book typeface Literaturnaya (Anatoly Shchukin, 1936), the face of most Soviet and Mir books from 1950 to 1990.

Licence: **Creative Commons Attribution 3.0 (CC BY 3.0)**, http://creativecommons.org/licenses/by/3.0/ —
free to share and adapt with attribution: « Literaturnaya Book © 2017 Marath Salychow, CC BY 3.0 ».
Source of this copy: https://github.com/Thecheetosman/Literaturnaya-Font (« Literaturnaya Book.ttf »);
original publication: Open Font Library, https://fontlibrary.org/en/font/literaturnaya-book

Only the Book (regular) style exists. `axiomath-mir.sty` slants it for italics and emboldens it for bold.
For true italic and bold, add `Literaturnaya-Italic`, `-Bold`, `-BoldItalic` (.ttf or .otf) here, e.g. from the
ParaType Literaturnaya family (commercial), and the package uses them automatically.
**Modified for AxioMath (2026-11-27):** the original has empty or missing French accented letters (é è ê à â ç î ô ù û ë ï ÿ
and capitals). `add_french_accents.py` draws acute, grave and circumflex wedges in the weight of the face, takes the
dieresis from the font's own dots and the cedilla from its comma, and composes them on the base letters:
`python3 add_french_accents.py "Literaturnaya Book.ttf" Literaturnaya-Regular.ttf` (fontTools). Licence unchanged
(CC BY 3.0); attribution above. Still missing: « œ » and « fi » (the package replaces œ by « oe »).
