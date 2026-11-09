# Regenerates the SVG figures of the collège lessons (python scripts/college_figures.py).
# Only Latin letters and digits are drawn (no Arabic text), so no shaping is needed.
# Requires: pip install numpy matplotlib
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Polygon

plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"


def poly(ax, pts, color=TEAL, fill=0.10, lw=2.2, closed=True):
    ax.add_patch(Polygon(pts, closed=closed, facecolor=color, alpha=fill, edgecolor="none"))
    p = list(pts) + ([pts[0]] if closed else [])
    ax.plot([q[0] for q in p], [q[1] for q in p], color=color, lw=lw, solid_joinstyle="round")


def label(ax, pt, text, dx, dy, color="black", size=14):
    ax.annotate(text, pt, xytext=(dx, dy), textcoords="offset points", ha="center", va="center", fontsize=size, color=color)


def tick(ax, a, b, n=1, color=ORANGE, size=0.09, gap=0.07):
    """n small ticks across segment [ab] (equal-length marks)."""
    a = np.array(a, float); b = np.array(b, float)
    m = (a + b) / 2; d = (b - a) / np.linalg.norm(b - a); nrm = np.array([-d[1], d[0]])
    for k in range(n):
        c = m + d * (k - (n - 1) / 2) * gap
        ax.plot(*zip(c - nrm * size, c + nrm * size), color=color, lw=2)


def arc(ax, vertex, p1, p2, r=0.35, n=1, color=ORANGE):
    v = np.array(vertex, float)
    a1 = np.degrees(np.arctan2(p1[1] - v[1], p1[0] - v[0]))
    a2 = np.degrees(np.arctan2(p2[1] - v[1], p2[0] - v[0]))
    lo, hi = sorted([a1, a2])
    if hi - lo > 180: lo, hi = hi, lo + 360
    for k in range(n):
        ax.add_patch(Arc(v, 2 * (r + 0.07 * k), 2 * (r + 0.07 * k), theta1=lo, theta2=hi, color=color, lw=2))


def right_angle(ax, v, p1, p2, s=0.22, color=ORANGE):
    v = np.array(v, float); u1 = np.array(p1, float) - v; u2 = np.array(p2, float) - v
    u1 /= np.linalg.norm(u1); u2 /= np.linalg.norm(u2)
    pts = [v + u1 * s, v + (u1 + u2) * s, v + u2 * s]
    ax.plot(*zip(*pts), color=color, lw=1.8)


def clean(ax, xlim, ylim):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.set_aspect("equal"); ax.axis("off")


# ---------------------------------------------------------------- 1. the family of quadrilaterals
fig, axs = plt.subplots(1, 4, figsize=(11, 3.0))
shapes = [
    ("parallelogram", [(0, 0), (3.4, 0), (4.4, 2.0), (1.0, 2.0)], dict(par=True)),
    ("rectangle", [(0, 0), (3.6, 0), (3.6, 2.1), (0, 2.1)], dict(rect=True)),
    ("rhombus", [(0, 1.1), (1.9, 0), (3.8, 1.1), (1.9, 2.2)], dict(rhomb=True)),
    ("square", [(0, 0), (2.4, 0), (2.4, 2.4), (0, 2.4)], dict(sq=True)),
]
for ax, (name, P, opt) in zip(axs, shapes):
    A, B, C, D = [np.array(p, float) for p in P]
    poly(ax, P)
    I = (A + C) / 2
    ax.plot(*zip(A, C), color=GRAY, lw=1.3, ls="--"); ax.plot(*zip(B, D), color=GRAY, lw=1.3, ls="--")
    ax.plot(*I, "o", color=ORANGE, ms=5)
    for (pt, t) in zip((A, B, C, D), "ABCD"):
        c = np.array(pt) - I; c = c / np.linalg.norm(c)
        ax.annotate(t, pt, xytext=tuple(c * 13), textcoords="offset points", ha="center", va="center", fontsize=14)
    label(ax, I, "I", -9 if opt.get("rhomb") else 0, -11, ORANGE, 12)
    # opposite sides equal
    if opt.get("rhomb") or opt.get("sq"):          # four equal sides: one tick each
        for a_, b_ in ((A, B), (B, C), (C, D), (D, A)): tick(ax, a_, b_, 1)
    else:                                           # opposite sides equal
        tick(ax, A, B, 1); tick(ax, D, C, 1); tick(ax, B, C, 2); tick(ax, A, D, 2)
    if opt.get("rect") or opt.get("sq"):
        for v, p, q in ((A, B, D), (B, C, A), (C, D, B), (D, A, C)): right_angle(ax, v, p, q)
    if opt.get("rhomb"):
        right_angle(ax, I, B, C)
    cx = (min(p[0] for p in P) + max(p[0] for p in P)) / 2; cy = (min(p[1] for p in P) + max(p[1] for p in P)) / 2
    clean(ax, (cx - 2.8, cx + 2.8), (cy - 1.6, cy + 1.6))      # same box for the four shapes
    ax.set_title({"parallelogram": "Parallelogram", "rectangle": "Rectangle", "rhombus": "Rhombus", "square": "Square"}[name],
                 fontsize=13, color=GRAY, pad=10)
fig.tight_layout(pad=0.4); fig.savefig(OUT + "quadrilateres-famille.svg"); plt.close(fig)

# ---------------------------------------------------------------- 2. the three cases of congruent triangles
fig, axs = plt.subplots(3, 1, figsize=(8.2, 7.2))
T1 = [(0, 0), (3.0, 0), (1.1, 2.0)]
T2 = [(5.0, 0), (8.0, 0), (6.1, 2.0)]
titles = ["Case 1 : one side and the two adjacent angles (ASA)",
          "Case 2 : two sides and the angle between them (SAS)",
          "Case 3 : the three sides (SSS)"]
for k, ax in enumerate(axs):
    for T, names, col in ((T1, "ABC", TEAL), (T2, "EFG", BLUE)):
        poly(ax, T, color=col)
        pts = [np.array(p, float) for p in T]; cen = sum(pts) / 3
        for p, t in zip(pts, names):
            c = p - cen; c /= np.linalg.norm(c)
            ax.annotate(t, p, xytext=tuple(c * 14), textcoords="offset points", ha="center", va="center", fontsize=14)
    for T, off in ((T1, 0), (T2, 0)):
        A, B, C = [np.array(p, float) for p in T]
        if k == 0:    # side AB and angles A, B
            tick(ax, A, B, 1); arc(ax, A, B, C, 0.45, 1); arc(ax, B, A, C, 0.45, 2)
        elif k == 1:  # sides AB, AC and angle A
            tick(ax, A, B, 1); tick(ax, A, C, 2); arc(ax, A, B, C, 0.45, 1)
        else:
            tick(ax, A, B, 1); tick(ax, B, C, 2); tick(ax, A, C, 3)
    ax.set_title(titles[k], fontsize=13, color=GRAY, pad=0)
    clean(ax, (-0.8, 8.8), (-0.6, 2.6))
fig.tight_layout(pad=0.5); fig.savefig(OUT + "triangles-cas.svg"); plt.close(fig)

print("ok")
