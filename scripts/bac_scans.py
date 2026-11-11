#!/usr/bin/env python3
"""Page images for a bac paper: the scanned original (tab "Original") and the
AxioMath PDF (preview in tab "PDF").

Usage:  python3 scripts/bac_scans.py public/bac/1984-principale-maths [--dpi 110]
Reads <dir>/original.pdf  -> <dir>/original-1.jpg, original-2.jpg, ...
      <dir>/axiomath.pdf  -> <dir>/axiomath-1.png, axiomath-2.png, ...  (re-run after recompiling)
Needs PyMuPDF:  pip install pymupdf
"""
import argparse
import pathlib
import sys

import pymupdf as fitz  # PyMuPDF


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("folder", type=pathlib.Path)
    ap.add_argument("--dpi", type=int, default=110, help="110 keeps a page around 150 KB")
    args = ap.parse_args()
    if not (args.folder / "original.pdf").exists():
        sys.exit(f"{args.folder / 'original.pdf'} not found")
    render(args.folder, "original", "jpg", args.dpi)
    if (args.folder / "axiomath.pdf").exists():
        # crisp text on a phone, grey-scale PNG stays small
        render(args.folder, "axiomath", "png", 100)


def render(folder: pathlib.Path, name: str, ext: str, dpi: int) -> None:
    for old in folder.glob(f"{name}-*.{ext}"):
        old.unlink()
    for i, page in enumerate(fitz.open(folder / f"{name}.pdf"), start=1):
        out = folder / f"{name}-{i}.{ext}"
        pix = page.get_pixmap(dpi=dpi, colorspace=fitz.csGRAY if ext == "png" else None)
        if ext == "png":
            pix.save(out)
        else:
            pix.save(out, jpg_quality=80)
        print(f"{out}  ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
