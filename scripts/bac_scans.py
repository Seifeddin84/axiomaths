#!/usr/bin/env python3
"""Turn the scanned original of a bac paper into page images for the "Original" tab.

Usage:  python3 scripts/bac_scans.py public/bac/1984-principale-maths [--dpi 110]
Reads <dir>/original.pdf and writes <dir>/original-1.jpg, original-2.jpg, ...
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
    pdf = args.folder / "original.pdf"
    if not pdf.exists():
        sys.exit(f"{pdf} not found")
    for old in args.folder.glob("original-*.jpg"):
        old.unlink()
    doc = fitz.open(pdf)
    for i, page in enumerate(doc, start=1):
        out = args.folder / f"original-{i}.jpg"
        page.get_pixmap(dpi=args.dpi).save(out, jpg_quality=80)
        print(f"{out}  ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
