#!/usr/bin/env python3
"""
inbox_convert.py — turn the LaTeX exercises dropped in inbox/tex/ (by the
_maths_tutoring Claude Project) into Axiomaths exercise files.

    python3 scripts/inbox_convert.py              # convert everything in inbox/tex/
    python3 scripts/inbox_convert.py --dry-run    # parse + report, write nothing
    python3 scripts/inbox_convert.py --report /tmp/report.md

What it does, per inbox/tex/<level>/*.tex file:
  1. reads the `% key: value` metadata block and validates it (chapter must be canonical,
     difficulty in Facile/Moyen/Difficile, 2ème Sciences/Informatique merged ...);
  2. splits `% ---STATEMENT---` / `% ---SOLUTION---`;
  3. converts the LaTeX to the house markdown (numbered items, `a.` sub-items indented 3 spaces,
     blank line between items, `$$` blocks on their own line, GFM tables);
  4. compiles every tikzpicture to a PNG in public/exercises/images/<stem>.png;
  5. allocates the UID + filename with next_exercise.py's rules, writes exercises/<file>.md;
  6. moves the .tex to inbox/done/<level>/ and prints a report (UIDs, warnings, possible duplicates).

What it does NOT do (that is the manager's job, see CLAUDE.md): verify the mathematics with SymPy,
judge difficulty, check figures by eye, run validate_exercises.py / check_katex.mjs.
Files that fail stay in inbox/tex/ with the reason in the report.
"""
from __future__ import annotations

import argparse
import datetime
import json
import re
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass, field
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import next_exercise as nx          # noqa: E402  UID + filename rules (single source of truth)
import validate_exercises as vx     # noqa: E402  canonical chapters

INBOX = ROOT / "inbox" / "tex"
DONE = ROOT / "inbox" / "done"
EXERCISES = ROOT / "exercises"
IMAGES = ROOT / "public" / "exercises" / "images"

DIFFICULTIES = {"Facile", "Moyen", "Difficile"}
KNOWN_KEYS = {
    "uid", "school", "level", "section", "chapter", "chapter_slug", "title", "difficulty", "points",
    "tags", "source", "professor", "year", "country", "type", "recommended",
    "provenance", "dressing", "rung", "batch",
}
SECTION_ALIASES = {
    "maths": "Mathématiques", "math": "Mathématiques", "mathematiques": "Mathématiques",
    "sciences": "Sciences", "science": "Sciences",
    "informatique": "Informatique",
    "sciences experimentales": "Sciences Expérimentales", "sciences exp": "Sciences Expérimentales",
    "eco": "Economie et Gestion", "economie": "Economie et Gestion",
    "economie et gestion": "Economie et Gestion",
    "economie et services": "Économie et Service", "economie et service": "Économie et Service",
    "technique": "Technique", "lettres": "Lettres",
}

MATH_O, MATH_C = "\ue000", "\ue001"      # math placeholder  \ue000<n>\ue001
FIG_O, FIG_C = "\ue002", "\ue003"        # figure placeholder
TAB_O, TAB_C = "\ue004", "\ue005"        # table placeholder
HB = "\ue006"                            # hard line break
BOX_O, BOX_C = "\ue007", "\ue008"      # \begin{prop}…\end{prop} box placeholder


class ConvertError(Exception):
    pass


# ───────────────────────────── small LaTeX helpers ─────────────────────────────

def match_brace(s: str, i: int) -> int:
    """Index of the } matching the { at s[i], or -1."""
    depth, j = 0, i
    while j < len(s):
        c = s[j]
        if c == "\\":
            j += 2
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return j
        j += 1
    return -1


def strip_comments(s: str) -> str:
    return "\n".join(re.sub(r"(?<!\\)%.*$", "", line) for line in s.split("\n"))


def parse_macros(preamble: str) -> dict:
    """Simple user macros from the preamble: \\newcommand, \\renewcommand, \\def, \\DeclareMathOperator."""
    macros: dict[str, tuple[int, str]] = {}
    for m in re.finditer(
        r"\\(?:re|provide)?newcommand\*?\s*\{?\\([A-Za-z]+)\}?\s*(?:\[(\d)\])?\s*(?:\[[^\]]*\])?\s*\{", preamble
    ):
        start = m.end() - 1
        end = match_brace(preamble, start)
        if end > 0:
            macros[m.group(1)] = (int(m.group(2) or 0), preamble[start + 1:end])
    for m in re.finditer(r"\\DeclareMathOperator\*?\s*\{\\([A-Za-z]+)\}\s*\{", preamble):
        start = m.end() - 1
        end = match_brace(preamble, start)
        if end > 0:
            macros[m.group(1)] = (0, r"\operatorname{%s}" % preamble[start + 1:end])
    for m in re.finditer(r"\\def\s*\\([A-Za-z]+)\s*\{", preamble):
        start = m.end() - 1
        end = match_brace(preamble, start)
        if end > 0:
            macros[m.group(1)] = (0, preamble[start + 1:end])
    return {k: v for k, v in macros.items() if "\\if" not in v[1] and "\\fi" not in v[1]}


def expand_macros(s: str, macros: dict) -> str:
    for _ in range(6):
        changed = False
        for name, (n, body) in macros.items():
            pat = re.compile(r"\\" + name + r"(?![A-Za-z])")
            pos, out = 0, []
            while True:
                m = pat.search(s, pos)
                if not m:
                    out.append(s[pos:])
                    break
                out.append(s[pos:m.start()])
                j, args, ok = m.end(), [], True
                for _a in range(n):
                    k = j
                    while k < len(s) and s[k] == " ":
                        k += 1
                    if k < len(s) and s[k] == "{" and match_brace(s, k) > 0:
                        e = match_brace(s, k)
                        args.append(s[k + 1:e])
                        j = e + 1
                    else:
                        ok = False
                        break
                if not ok:
                    out.append(s[m.start():m.end()])
                    pos = m.end()
                    continue
                rep = body
                for idx, a in enumerate(args, 1):
                    rep = rep.replace(f"#{idx}", a)
                if n == 0 and s[j:j + 2] == "{}":
                    j += 2
                if rep and rep[-1].isalpha() and j < len(s) and s[j].isalpha():
                    rep += " "
                out.append(rep)
                pos = j
                changed = True
            s = "".join(out)
        if not changed:
            break
    return s


def figure_preamble(preamble: str) -> str:
    """Lines of the source preamble that a standalone figure needs (tikz libs, styles, colours)."""
    out = []
    for cmd, groups in (("usetikzlibrary", 1), ("usepgfplotslibrary", 1), ("pgfplotsset", 1),
                        ("tikzset", 1), ("definecolor", 3)):
        for m in re.finditer(r"\\" + cmd + r"\s*(?=[\[{])", preamble):
            j = m.end()
            if preamble[j] == "[":
                j = preamble.find("]", j) + 1
            parts = [preamble[m.start():j]]
            ok = True
            for _g in range(groups):
                if j < len(preamble) and preamble[j] == "{" and match_brace(preamble, j) > 0:
                    e = match_brace(preamble, j)
                    parts.append(preamble[j:e + 1])
                    j = e + 1
                else:
                    ok = False
                    break
            if ok:
                out.append("".join(parts))
    return "\n".join(out)


# ───────────────────────────── math / figure / table protection ─────────────────────────────

DISPLAY_ENVS = {"equation": None, "align": "aligned", "flalign": "aligned", "gather": "gathered",
                "multline": "aligned", "eqnarray": "aligned"}



def ib_to_math(inner: str) -> str:
    """Argument of the tutoring macro \\ib{…} (a framed text with $math$ inside) -> a math-mode \\boxed{…}."""
    out = []
    for i, seg in enumerate(inner.split("$")):
        if i % 2 == 1:
            out.append(seg.strip())
        elif seg.strip():
            out.append("\\text{" + seg + "}")
    return "\\boxed{" + "".join(out) + "}"


def fix_ib_in_math(content: str) -> str:
    """\\ib{$x$} written inside a math span (display math) -> \\boxed{x}."""
    while True:
        i = content.find("\\ib{")
        if i < 0:
            return content
        e = match_brace(content, i + 3)
        if e < 0:
            raise ConvertError("unbalanced braces after \\ib")
        content = content[:i] + ib_to_math(content[i + 4:e]) + content[e + 1:]


def clean_math(content: str) -> str:
    content = re.sub(r"\\(label|tag)\{[^}]*\}", "", content)
    content = re.sub(r"\\(nonumber|notag)\b", "", content)
    return fix_ib_in_math(content).strip()


def unwrap_ib_in_dollars(s: str) -> str:
    """`$\\ib{$1{,}875$ m/s}$` (frame written inside a math span) -> `\\ib{$1{,}875$ m/s}`."""
    out, i = [], 0
    while True:
        j = s.find("$\\ib{", i)
        if j < 0:
            out.append(s[i:])
            return "".join(out)
        e = match_brace(s, j + 4)
        if e > 0 and s[e + 1:e + 2] == "$" and s[j - 1:j] != "\\":
            out.append(s[i:j] + s[j + 1:e + 1])
            i = e + 2
        else:
            out.append(s[i:j + 1])
            i = j + 1


def protect_math(s: str, store: list) -> str:
    """Replace every math span by a placeholder; store[(kind, content)] with kind 'inline'|'display'."""
    s = unwrap_ib_in_dollars(s)
    out, i, n = [], 0, len(s)

    def put(kind: str, content: str) -> str:
        store.append((kind, clean_math(content) if kind == "display" else fix_ib_in_math(" ".join(content.split()))))
        return f"{MATH_O}{len(store) - 1}{MATH_C}"

    while i < n:
        if s.startswith("\\\\", i):
            out.append("\\\\")
            i += 2
        elif s.startswith("\\ib{", i):
            e = match_brace(s, i + 3)
            if e < 0:
                raise ConvertError("unbalanced braces after \\ib")
            out.append(put("inline", ib_to_math(s[i + 4:e])))
            i = e + 1
        elif s.startswith("\\$", i):
            out.append("\\$")
            i += 2
        elif s.startswith("\\[", i):
            j = s.find("\\]", i + 2)
            if j < 0:
                raise ConvertError("unterminated \\[ display math")
            out.append("\n\n" + put("display", s[i + 2:j]) + "\n\n")
            i = j + 2
        elif s.startswith("\\(", i):
            j = s.find("\\)", i + 2)
            if j < 0:
                raise ConvertError("unterminated \\( inline math")
            out.append(put("inline", s[i + 2:j]))
            i = j + 2
        elif s.startswith("$$", i):
            j = s.find("$$", i + 2)
            if j < 0:
                raise ConvertError("unterminated $$ display math")
            out.append("\n\n" + put("display", s[i + 2:j]) + "\n\n")
            i = j + 2
        elif s[i] == "$":
            j = i + 1
            while j < n and not (s[j] == "$" and s[j - 1] != "\\"):
                j += 1
            if j >= n:
                raise ConvertError("unterminated $ inline math")
            out.append(put("inline", s[i + 1:j]))
            i = j + 1
        else:
            m = re.match(r"\\begin\{(equation|align|flalign|gather|multline|eqnarray)(\*?)\}", s[i:])
            if m:
                env = m.group(1)
                end_tag = f"\\end{{{env}{m.group(2)}}}"
                j = s.find(end_tag, i)
                if j < 0:
                    raise ConvertError(f"unterminated {env} environment")
                inner = s[i + m.end():j]
                target = DISPLAY_ENVS[env]
                if target:
                    inner = f"\\begin{{{target}}}{inner}\\end{{{target}}}"
                out.append("\n\n" + put("display", inner) + "\n\n")
                i = j + len(end_tag)
            else:
                out.append(s[i])
                i += 1
    return "".join(out)


def extract_figures(s: str, figs: list) -> str:
    def sub(m):
        figs.append(m.group(0))
        return f"\n\n{FIG_O}{len(figs) - 1}{FIG_C}\n\n"
    return re.sub(r"\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}", sub, s, flags=re.S)


def extract_boxes(s: str, boxes: list) -> str:
    """\\begin{prop}[Title] … \\end{prop} (course reminder of the tutoring corrigés) -> a placeholder block."""
    def sub(m):
        boxes.append((m.group(1) or "", m.group(2)))
        return f"\n\n{BOX_O}{len(boxes) - 1}{BOX_C}\n\n"
    return re.sub(r"\\begin\{prop\}(?:\[([^\n]*?)\])?(.*?)\\end\{prop\}", sub, s, flags=re.S)


def extract_tables(s: str, tabs: list) -> str:
    def sub(m):
        tabs.append(m.group(1))
        return f"\n\n{TAB_O}{len(tabs) - 1}{TAB_C}\n\n"
    return re.sub(r"\\begin\{tabular\}\{[^}]*\}(.*?)\\end\{tabular\}", sub, s, flags=re.S)


# ───────────────────────────── text conversion ─────────────────────────────

INLINE_CMDS = re.compile(
    r"\\(textbf|textit|emph|underline|textsc|textrm|textsf|texttt|mbox|textnormal|textsuperscript)\s*\{")
HEADING = re.compile(r"\\(?:sub)*section\*?\s*\{")
REMOVE = [
    r"\\(?:vspace|hspace)\*?\{[^}]*\}", r"\\rule\{[^}]*\}\{[^}]*\}", r"\\label\{[^}]*\}",
    r"\\(?:noindent|medskip|bigskip|smallskip|newpage|clearpage|centering|hfill|hrule|large|Large|LARGE|"
    r"normalsize|small|footnotesize|bfseries|itshape|leavevmode)(?![A-Za-z])",
    r"\\begin\{center\}", r"\\end\{center\}", r"(?<!\\)\{\}",
]
REPLACE = [
    (r"\\og(?![A-Za-z])\s*", "« "), (r"\s*\\fg(?![A-Za-z])", " »"),
    (r"\\(?:ldots|dots|cdots)(?![A-Za-z])", "…"),
    (r"\\(?:quad|qquad)(?![A-Za-z])", " "), (r"\\[,;:! ]", " "),
    (r"\\%", "%"), (r"\\&", "&"), (r"\\_", "_"), (r"\\#", "#"), (r"\\\{", "{"), (r"\\\}", "}"),
    (r"\\(?:texteuro|euro)(?![A-Za-z])\s*\{?\}?", "€"), (r"\\(?:textdegree|degree)(?![A-Za-z])\s*\{?\}?", "°"),
    (r"``", "“"), (r"''", "”"), (r"---", "—"), (r"--", "–"),
]


def conv_inline(s: str, unknown: set | None = None) -> str:
    while True:
        mc = re.search(r"\\textcolor\s*\{[^}]*\}\s*\{", s)
        if mc:
            b = mc.end() - 1
            e = match_brace(s, b)
            if e < 0:
                raise ConvertError("unbalanced braces after \\textcolor")
            s = s[:mc.start()] + s[b + 1:e] + s[e + 1:]
            if unknown is not None:
                unknown.add("(\\textcolor dropped: check the colour was needed)")
            continue
        m = INLINE_CMDS.search(s)
        if not m:
            return s
        b = m.end() - 1
        e = match_brace(s, b)
        if e < 0:
            raise ConvertError(f"unbalanced braces after \\{m.group(1)}")
        inner, cmd = s[b + 1:e], m.group(1)
        if cmd in ("textbf",):
            rep = f"**{inner.strip()}**" if inner.strip() else ""
        elif cmd in ("textit", "emph"):
            rep = f"*{inner.strip()}*" if inner.strip() else ""
        elif cmd == "texttt":
            rep = f"`{inner}`"
        elif cmd == "textsuperscript":
            rep = f"<sup>{inner}</sup>"
        else:
            rep = inner
        s = s[:m.start()] + rep + s[e + 1:]


def conv_headings(s: str) -> str:
    while True:
        m = HEADING.search(s)
        if not m:
            break
        b = m.end() - 1
        e = match_brace(s, b)
        if e < 0:
            raise ConvertError("unbalanced braces in a \\section")
        s = s[:m.start()] + f"\n\n### {s[b + 1:e].strip()}\n\n" + s[e + 1:]
    return s


def convert_text(s: str, unknown: set) -> str:
    """Convert one chunk of text (math already replaced by placeholders). Returns text with HB markers."""
    s = re.sub(r"\\\\(?:\[[^\]]*\])?", HB, s)
    s = re.sub(r"\\newline(?![A-Za-z])", HB, s)
    s = re.sub(r"\\par(?![A-Za-z])", "\n\n", s)
    s = conv_headings(s)
    s = conv_inline(s, unknown)
    for pat in REMOVE:
        s = re.sub(pat, "", s)
    for pat, rep in REPLACE:
        s = re.sub(pat, rep, s)
    s = s.replace("~", " ")
    for cmd in re.findall(r"\\[A-Za-z]+", s):
        unknown.add(cmd)
    return s


def md_table(body: str, unknown: set, restore) -> str:
    rows = []
    for raw in re.split(r"\\\\(?:\[[^\]]*\])?", body):
        raw = re.sub(r"\\(?:hline|toprule|midrule|bottomrule)", "", raw)
        raw = re.sub(r"\\cline\{[^}]*\}", "", raw).strip()
        if not raw:
            continue
        cells = [restore(convert_text(c, unknown)).strip().replace("\n", " ") for c in raw.split("&")]
        rows.append(cells)
    if not rows:
        raise ConvertError("empty tabular")
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    lines = ["| " + " | ".join(rows[0]) + " |", "|" + "|".join(["---"] * width) + "|"]
    lines += ["| " + " | ".join(r) + " |" for r in rows[1:]]
    return "\n".join(lines)


# ───────────────────────────── lists → house markdown ─────────────────────────────

@dataclass
class LList:
    kind: str                                   # enumerate | itemize
    items: list = field(default_factory=list)   # each item: list[str | LList]


LIST_TOK = re.compile(
    r"\\begin\{(enumerate|itemize)\}(?:\[[^\]]*\])?|\\end\{(enumerate|itemize)\}|\\item(?![A-Za-z])(?:\s*\[[^\]]*\])?")


def parse_lists(s: str) -> list:
    root = LList("root", [[]])
    stack = [root]
    pos = 0
    for m in LIST_TOK.finditer(s):
        text = s[pos:m.start()]
        if text.strip():
            if not stack[-1].items:
                raise ConvertError("text between \\begin{enumerate} and the first \\item")
            stack[-1].items[-1].append(text)
        pos = m.end()
        tok = m.group(0)
        if tok.startswith("\\begin"):
            lst = LList(m.group(1))
            stack[-1].items[-1].append(lst)
            stack.append(lst)
        elif tok.startswith("\\end"):
            if len(stack) == 1 or stack[-1].kind != m.group(2):
                raise ConvertError(f"unbalanced \\end{{{m.group(2)}}}")
            stack.pop()
        else:
            if len(stack) == 1:
                raise ConvertError("\\item outside a list")
            stack[-1].items.append([])
    tail = s[pos:]
    if tail.strip():
        stack[-1].items[-1].append(tail)
    if len(stack) != 1:
        raise ConvertError("unclosed list environment")
    return root.items[0]


def roman(k: int) -> str:
    vals = [(10, "x"), (9, "ix"), (5, "v"), (4, "iv"), (1, "i")]
    out = ""
    for v, r in vals:
        while k >= v:
            out += r
            k -= v
    return out


def marker(kind: str, edepth: int, k: int) -> str:
    if kind == "itemize":
        return "-"
    if edepth == 0:
        return f"{k}."
    if edepth == 2:
        return f"{roman(k)}."
    return f"{chr(96 + ((k - 1) % 26) + 1)}."


def indent_block(block: str, n: int) -> str:
    pad = " " * n
    return "\n".join(pad + l if l.strip() else l for l in block.split("\n"))


class Renderer:
    def __init__(self, math, figs, tabs, fig_names, boxes=None):
        self.math, self.figs, self.tabs, self.fig_names = math, figs, tabs, fig_names
        self.boxes = boxes or []
        self.unknown: set[str] = set()
        self.notes: list[str] = []

    def restore(self, s: str) -> str:
        def sub(m):
            kind, content = self.math[int(m.group(1))]
            return f"${content}$" if kind == "inline" else f"$${content}$$"
        return re.sub(f"{MATH_O}(\\d+){MATH_C}", sub, s)

    # one text chunk -> list of (kind, text)
    def text_parts(self, s: str, in_item: bool) -> list:
        s = convert_text(s, self.unknown)
        parts = []
        for para in re.split(r"\n\s*\n", s):
            para = para.strip()
            if not para:
                continue
            m = re.fullmatch(f"{FIG_O}(\\d+){FIG_C}", para)
            if m:
                parts.append(("block", self.fig_names[int(m.group(1))]))
                continue
            m = re.fullmatch(f"{TAB_O}(\\d+){TAB_C}", para)
            if m:
                parts.append(("block", md_table(self.tabs[int(m.group(1))], self.unknown, self.restore)))
                continue
            m = re.fullmatch(f"{BOX_O}(\\d+){BOX_C}", para)
            if m:
                parts.append(("block", self.render_box(*self.boxes[int(m.group(1))], in_item)))
                continue
            m = re.fullmatch(f"{MATH_O}(\\d+){MATH_C}", para)
            if m and self.math[int(m.group(1))][0] == "display":
                content = self.math[int(m.group(1))][1]
                if in_item and not content.startswith(("\\displaystyle", "\\begin")):
                    content = "\\displaystyle " + content
                parts.append(("block", f"$${content}$$" if "\n" not in content else f"$$\n{content}\n$$"))
                continue
            para = re.sub(r"\s*\n\s*", " ", para)
            para = re.sub(r"[ \t]{2,}", " ", para)
            para = re.sub(r"\s*" + HB + r"\s*", "  \n", para).strip()
            if re.fullmatch(r"\*\*(?:Partie|PARTIE)\s+[A-Z0-9IVX]+\s*[.:]?.*\*\*", para) and "\n" not in para:
                para = "### " + para.strip("*").strip()
            para = self.restore(para)
            ip = re.fullmatch(r"(?:\*\*Id[ée]e\s*:\*\*\s*(.*?))?\s*(?:\*\*Pi[eè]ge\s*:\*\*\s*(.*))?", para, re.S)
            if ip and (ip.group(1) or ip.group(2)) and para.startswith(("**Idée", "**Idee", "**Piège", "**Piege")):
                cap = lambda t: t[:1].upper() + t[1:]
                if ip.group(1):
                    parts.append(("block", f":::intuition\n{cap(ip.group(1).strip())}\n:::"))
                if ip.group(2):
                    parts.append(("block", f":::trap\n{cap(ip.group(2).strip())}\n:::"))
                continue
            parts.append(("text", para))
        return parts

    def render_box(self, title: str, raw: str, in_item: bool) -> str:
        """A course reminder: :::property[Title] … ::: (lesson boxes, see CLAUDE.md section 5)."""
        head = ":::property"
        if title.strip():
            t = protect_math(title, self.math)
            head += "[" + self.restore(re.sub(r"\s+", " ", convert_text(t, self.unknown))).strip() + "]"
        inner = protect_math(raw, self.math)
        body = "\n\n".join(t for _k, t in self.render_parts(parse_lists(inner), 0, in_item))
        return f"{head}\n{body}\n:::"

    def render_parts(self, parts: list, edepth: int, in_item: bool) -> list:
        out = []
        for p in parts:
            if isinstance(p, LList):
                out.append(("list", "\n\n".join(self.render_list(p, edepth, in_item))))
            else:
                out.extend(self.text_parts(p, in_item))
        return out

    def render_list(self, lst: LList, edepth: int, in_item: bool) -> list:
        blocks = []
        child_depth = edepth + (1 if lst.kind == "enumerate" else 0)
        for k, item in enumerate(lst.items, 1):
            sub = self.render_parts(item, child_depth, True)
            mk = marker(lst.kind, edepth, k)
            width = len(mk) + 1
            if sub and sub[0][0] == "text":
                head = f"{mk} {sub[0][1]}"
                rest = sub[1:]
                head_lines = head.split("\n")
                head = "\n".join([head_lines[0]] + [indent_block(l, width) if l.strip() else l
                                                   for l in head_lines[1:]])
                joiner = "\n\n"
            else:
                head, rest, joiner = mk, sub, "\n"
            chunks = [head] + [indent_block(t, width) for _k, t in rest]
            text = chunks[0]
            if len(chunks) > 1:
                text += joiner + "\n\n".join(chunks[1:])
            blocks.append(text)
        return blocks


# ───────────────────────────── file-level conversion ─────────────────────────────

@dataclass
class Result:
    src: Path
    status: str = "ok"                    # ok | skipped
    uid: str = ""
    filename: str = ""
    warnings: list = field(default_factory=list)
    errors: list = field(default_factory=list)
    chapter: str = ""
    level: str = ""


def parse_metadata(text: str) -> dict:
    lines = text.splitlines()
    start = None
    for i, line in enumerate(lines):
        if re.search(r"METADATA BLOCK", line):
            start = i + 1
            break
    block = []
    key_re = re.compile(r"^%\s*[A-Za-z_]+\s*:")
    marker_re = re.compile(r"^%\s*-{2,}\s*(STATEMENT|SOLUTION)\s*-{2,}")
    for line in lines[start or 0:]:
        if marker_re.match(line):
            break
        if re.match(r"^%-{8,}\s*$", line):
            if block:
                break
            continue
        if key_re.match(line):
            block.append(re.sub(r"^%\s?", "", line))
        elif line.startswith("%") or not line.strip():
            continue
        elif block or start is not None:
            break
    if not block:
        raise ConvertError("no metadata block found (expected '% key: value' lines)")
    try:
        data = yaml.safe_load("\n".join(block)) or {}
    except yaml.YAMLError as e:
        raise ConvertError(f"metadata block is not valid YAML: {e}")
    if not isinstance(data, dict):
        raise ConvertError("metadata block must be 'key: value' lines")
    return data


def fold(s: str) -> str:
    return nx.strip_accents(str(s)).lower().strip()


def normalise_meta(meta: dict, res: Result, src_level_dir: str) -> dict:
    out = {}
    for k in meta:
        if k not in KNOWN_KEYS:
            res.warnings.append(f"unknown metadata key '{k}' ignored")
    school = meta.get("school")
    level = meta.get("level")
    if school not in ("lycee", "college"):
        res.errors.append(f"school must be 'lycee' or 'college' (got {school!r})")
    level = str(level).strip().replace("è", "e") if level else level
    if level not in ("7eme", "8eme", "9eme", "1ere", "2eme", "3eme", "4eme"):
        res.errors.append(f"level invalid: {meta.get('level')!r}")
    elif school == "college" and level not in ("7eme", "8eme", "9eme"):
        res.errors.append(f"level {level} is not a collège level")
    elif school == "lycee" and level not in ("1ere", "2eme", "3eme", "4eme"):
        res.errors.append(f"level {level} is not a lycée level")
    if level and src_level_dir != level:
        res.warnings.append(f"file is in inbox/tex/{src_level_dir}/ but metadata says level {level}")
    out["school"], out["level"] = school, level

    # section
    sec = meta.get("section")
    if school == "college" or level == "1ere":
        sec = None
    else:
        secs = sec if isinstance(sec, list) else [sec]
        fixed = []
        for s in secs:
            if not s:
                continue
            key = fold(s)
            fixed.append(SECTION_ALIASES.get(key, str(s).strip()))
        if not fixed:
            res.errors.append("section is required for lycée 2ème–4ème")
        if level == "2eme" and set(fixed) & {"Sciences", "Informatique"}:
            fixed = ["Sciences", "Informatique"] + [x for x in fixed if x not in ("Sciences", "Informatique")]
        sec = fixed if len(fixed) > 1 else (fixed[0] if fixed else None)
    out["section"] = sec

    # chapter
    chapter = meta.get("chapter")
    if not chapter:
        res.errors.append("chapter is required")
    else:
        first = sec[0] if isinstance(sec, list) else sec
        ok = vx.chapter_is_valid(school, level, vx.normalize_section(first) if first else None, chapter)
        if ok is False:
            hint = vx.suggest_canonical(str(chapter))
            res.errors.append(f"chapter {chapter!r} is not canonical for {school}/{level}/{first}"
                              + (f" (did you mean {hint!r}?)" if hint else ""))
        elif ok is None:
            res.warnings.append(f"no canonical chapter list for {school}/{level}/{first}: chapter not checked")
    out["chapter"] = chapter

    title = meta.get("title")
    if not title:
        res.errors.append("title is required (short, descriptive; Arabic for collège)")
    out["title"] = title

    diff = meta.get("difficulty")
    if diff not in DIFFICULTIES:
        res.errors.append(f"difficulty must be Facile, Moyen or Difficile (got {diff!r})")
    out["difficulty"] = diff

    pts = meta.get("points")
    out["points"] = int(pts) if isinstance(pts, (int, float)) or (isinstance(pts, str) and pts.isdigit()) else None
    tags = meta.get("tags") or []
    if not isinstance(tags, list):
        tags = [t.strip() for t in str(tags).split(",") if t.strip()]
    fixed_tags = []
    for t in tags:
        slug = nx.slugify(str(t)) or str(t)
        if slug != t:
            res.warnings.append(f"tag {t!r} rewritten as {slug!r}")
        fixed_tags.append(slug)
    if not 3 <= len(fixed_tags) <= 6:
        res.warnings.append(f"{len(fixed_tags)} tags (house rule: 3–6)")
    out["tags"] = fixed_tags

    out["source"] = meta.get("source") or "Axiomaths"
    out["professor"] = meta.get("professor") if "professor" in meta and meta["professor"] else "Axiomaths"
    out["country"] = meta.get("country") or "Tunisie"
    year = meta.get("year")
    out["year"] = int(year) if isinstance(year, int) else datetime.date.today().year
    for k in ("provenance", "dressing", "rung", "batch"):
        if meta.get(k) not in (None, ""):
            out[k] = meta[k]
    if meta.get("recommended") is True:
        res.warnings.append("'recommended' ignored: only the manager sets it")
    if meta.get("chapter_slug"):
        out["chapter_slug"] = str(meta["chapter_slug"])
    return out


def build_frontmatter(uid: str, m: dict) -> str:
    j = lambda v: json.dumps(v, ensure_ascii=False)       # valid YAML scalars / flow lists
    lines = ["---", f'uid: "{uid}"', f"school: {j(m['school'])}", f"level: {j(m['level'])}",
             f"section: {j(m['section'])}", f"chapter: {j(m['chapter'])}", f"source: {j(m['source'])}",
             f"title: {j(m['title'])}", f"country: {j(m['country'])}", f"year: {m['year']}",
             f"professor: {j(m['professor'])}", f"difficulty: {j(m['difficulty'])}",
             f"points: {j(m['points'])}", f"tags: {j(m['tags'])}"]
    for k in ("provenance", "dressing", "rung", "batch"):
        if k in m:
            lines.append(f"{k}: {j(m[k])}")
    lines.append("---")
    return "\n".join(lines)


def split_sections(text: str):
    st = re.search(r"^%\s*-{2,}\s*STATEMENT\s*-{2,}.*$", text, re.M)
    so = re.search(r"^%\s*-{2,}\s*SOLUTION\s*-{2,}.*$", text, re.M)
    if not st or not so or so.start() < st.start():
        raise ConvertError("markers '% ---STATEMENT---' then '% ---SOLUTION---' are required")
    preamble = text[:st.start()]
    dm = re.search(r"\\begin\{document\}", preamble)
    if dm:
        preamble = preamble[:dm.start()]
    statement = text[st.end():so.start()]
    solution = text[so.end():]
    solution = re.split(r"\\end\{document\}", solution)[0]
    statement = re.sub(r"\\begin\{document\}|\\end\{document\}", "", statement)
    return preamble, statement, solution


def render_figure(code: str, fig_pre: str, out_png: Path):
    tex = ("\\documentclass[border=4pt]{standalone}\n\\usepackage[utf8]{inputenc}\n\\usepackage[T1]{fontenc}\n"
           "\\usepackage{amsmath,amssymb,xcolor}\n\\usepackage{tikz}\n\\usepackage{pgfplots}\n"
           "\\pgfplotsset{compat=1.17}\n"
           "\\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.markings,intersections,angles,quotes}\n"
           f"{fig_pre}\n"
           "\\colorlet{axmain}{black}\\colorlet{axdark}{black}\\colorlet{axlight}{white}\n"   # house style: black on white
           f"\\begin{{document}}\n{code}\n\\end{{document}}\n")
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        (td / "fig.tex").write_text(tex, encoding="utf-8")
        r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "fig.tex"],
                           cwd=td, capture_output=True, text=True, timeout=120)
        if r.returncode != 0 or not (td / "fig.pdf").exists():
            errs = [l for l in r.stdout.splitlines() if l.startswith("!")][:3]
            raise ConvertError("figure does not compile: " + " | ".join(errs or ["see pdflatex log"]))
        r = subprocess.run(["pdftoppm", "-png", "-r", "220", "-singlefile", "fig.pdf", "fig"],
                           cwd=td, capture_output=True, text=True, timeout=60)
        if r.returncode != 0 or not (td / "fig.png").exists():
            raise ConvertError("pdftoppm failed on a figure")
        out_png.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(td / "fig.png", out_png)


def shingles(text: str, k: int = 3) -> set:
    toks = re.findall(r"\w+", text.lower())
    return {" ".join(toks[i:i + k]) for i in range(max(0, len(toks) - k + 1))}


def statement_of(md: str) -> str:
    body = re.sub(r"\A---\n.*?\n---\n", "", md, flags=re.S)
    return re.split(r"\n---\s*\n+##\s*(?:Solution|Correction)", body)[0]


def build_dup_index() -> dict:
    idx = {}
    for f in EXERCISES.glob("*.md*"):
        t = f.read_text(encoding="utf-8")
        m = re.search(r'^uid:\s*"?(\d+)"?', t, re.M)
        idx[m.group(1) if m else f.name] = shingles(statement_of(t))
    return idx


def convert_file(src: Path, next_uid: int, dup_index: dict, dry: bool, fig_check: bool = True):
    res = Result(src)
    try:
        text = src.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        text = src.read_text(encoding="latin-1")
        res.warnings.append("file was not UTF-8 (read as latin-1): check accents")
    try:
        meta_raw = parse_metadata(text)
        meta = normalise_meta(meta_raw, res, src.parent.name)
        res.chapter, res.level = str(meta.get("chapter")), str(meta.get("level"))
        preamble, statement, solution = split_sections(text)
        macros = parse_macros(strip_comments(preamble))
        fig_pre = figure_preamble(strip_comments(preamble))
        alts = re.findall(r"^%\s*alt:\s*(.+)$", statement + "\n" + solution, re.M)

        uid = f"{next_uid:07d}"
        stem_parts = [meta["school"], meta["level"]]
        if meta["school"] == "lycee" and meta["level"] != "1ere" and meta["section"]:
            first = meta["section"][0] if isinstance(meta["section"], list) else meta["section"]
            stem_parts.append(nx.SECTION_SLUGS.get(fold(first), nx.slugify(first)))
        chapter_slug = meta.get("chapter_slug") or nx.slugify(str(meta["chapter"]))
        if not chapter_slug:
            res.errors.append("Arabic chapter: add `% chapter_slug: <ascii-slug>` to the metadata")
        stem_parts.append(chapter_slug)
        stem = f"{next_uid}-" + "-".join(stem_parts) + f"-{uid}"

        math: list = []
        figs: list = []
        tabs: list = []
        boxes: list = []
        fig_names: list = []
        fig_files: list = []

        def prep(chunk: str) -> str:
            chunk = strip_comments(chunk)
            chunk = expand_macros(chunk, macros)
            chunk = extract_boxes(chunk, boxes)
            chunk = extract_figures(chunk, figs)
            chunk = protect_math(chunk, math)
            chunk = extract_tables(chunk, tabs)
            return chunk

        s_prep, o_prep = prep(statement), prep(solution)
        for i, code in enumerate(figs):
            name = f"{stem}.png" if len(figs) == 1 else f"{stem}-{i + 1}.png"
            alt = alts[i].strip() if i < len(alts) else "figure"
            fig_names.append(f"![{alt}](/exercises/images/{name})")
            fig_files.append((code, IMAGES / name))
            if re.search(r"\b(red|blue|green|orange|purple|magenta|cyan|brown|violet|pink)\b|\\textcolor|\\definecolor",
                         code):
                res.warnings.append(f"figure {i + 1} uses colour: house style is pure black unless colour adds real value")
            if i >= len(alts):
                res.warnings.append(f"figure {i + 1} has no `% alt:` description")

        rend = Renderer(math, figs, tabs, fig_names, boxes)
        st_md = "\n\n".join(t for _k, t in rend.render_parts(parse_lists(s_prep), 0, False))
        so_md = "\n\n".join(t for _k, t in rend.render_parts(parse_lists(o_prep), 0, False))
        if rend.unknown:
            res.warnings.append("unconverted LaTeX left in the text: " + " ".join(sorted(rend.unknown)))
        if not st_md.strip():
            res.errors.append("empty statement")
        if not so_md.strip():
            res.errors.append("empty solution (the tutoring project must always provide a full solution)")
        if res.errors:
            raise ConvertError("; ".join(res.errors))

        md = build_frontmatter(uid, meta) + "\n\n" + st_md.strip() + "\n\n---\n\n## Solution\n\n" + so_md.strip() + "\n"

        # possible duplicates (statement similarity)
        mine = shingles(statement_of(md))
        for other_uid, sh in dup_index.items():
            if mine and sh:
                sim = len(mine & sh) / len(mine | sh)
                if sim >= 0.5:
                    res.warnings.append(f"possible duplicate of exercise {other_uid} (similarity {sim:.2f})")
        dup_index[uid] = mine

        res.uid, res.filename = uid, stem + ".md"
        if dry:
            if fig_check:
                for code, _p in fig_files:     # still prove the figures compile
                    with tempfile.TemporaryDirectory() as td:
                        render_figure(code, fig_pre, Path(td) / "x.png")
            return res, md
        for code, path in fig_files:
            render_figure(code, fig_pre, path)
        (EXERCISES / res.filename).write_text(md, encoding="utf-8")
        dest = DONE / src.parent.name / src.name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(src), str(dest))
        return res, md
    except ConvertError as e:
        res.status = "skipped"
        msg = str(e)
        if msg != "; ".join(res.errors) and msg not in res.errors:
            res.errors.append(msg)
        return res, None


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--inbox", default=str(INBOX))
    ap.add_argument("--dry-run", action="store_true", help="convert in memory, write nothing (figures still compiled)")
    ap.add_argument("--report", help="also write the markdown report to this path")
    a = ap.parse_args()

    files = sorted(Path(a.inbox).rglob("*.tex"))
    if not files:
        print("inbox is empty — nothing to convert.")
        return 0
    dup_index = build_dup_index()
    next_uid = nx.max_uid() + 1
    results = []
    for f in files:
        res, _md = convert_file(f, next_uid, dup_index, a.dry_run)
        if res.status == "ok":
            next_uid += 1
        results.append(res)

    ok = [r for r in results if r.status == "ok"]
    bad = [r for r in results if r.status != "ok"]
    out = [f"## Inbox conversion {'(dry run) ' if a.dry_run else ''}— {len(ok)} converted, {len(bad)} skipped", ""]
    if ok:
        out += ["| UID | file | chapter | from | warnings |", "|---|---|---|---|---|"]
        for r in ok:
            out.append(f"| {r.uid} | `{r.filename}` | {r.chapter} | `{r.src.name}` | {'; '.join(r.warnings) or '—'} |")
        out.append("")
    if bad:
        out += ["### Skipped (still in inbox/tex/)", ""]
        for r in bad:
            out.append(f"- `{r.src.relative_to(ROOT) if r.src.is_relative_to(ROOT) else r.src}`: " + "; ".join(r.errors))
        out.append("")
    out += ["**Not done by this script (manager checklist):** SymPy audit of every statement and solution, "
            "view each figure PNG, `python3 validate_exercises.py ./exercises`, `node check_katex.mjs <files>`, "
            "solutions detailed enough for a weak pupil."]
    report = "\n".join(out)
    print(report)
    if a.report:
        Path(a.report).write_text(report + "\n", encoding="utf-8")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
