# Regenerates the SVG figures of the 4ème Économie et Gestion lessons « Matrices et systèmes » and « Les graphes »
# (python scripts/lesson_figures_eco.py). Requires: pip install numpy matplotlib
# Old-textbook style: black on white, thin lines, hatching instead of colours.
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, FancyArrowPatch, Rectangle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 13, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep

# the pentagon layout used by every graph of the lesson (same 5 vertices, same 9 edges)
ang = {"B": 90, "C": 162, "D": 234, "E": 306, "A": 18}
P = {k: (np.cos(np.radians(a)), np.sin(np.radians(a))) for k, a in ang.items()}
EDGES = ["AB", "AC", "AE", "BC", "BD", "BE", "CD", "CE", "DE"]

def dot(ax, p, name, out=0.17, fill="black", hatch=None, size=7.5, fs=14, rad=None):
    if rad is None:
        ax.plot(*p, "o", color="black", ms=size, zorder=5)
    else:
        ax.add_patch(Circle(p, rad, facecolor=fill, edgecolor="black", lw=1.4, hatch=hatch, zorder=5))
    v = np.array(p); n = np.linalg.norm(v)
    q = v + (v / n if n > 1e-9 else np.array([0, 1])) * out
    ax.text(*q, name, ha="center", va="center", fontsize=fs)

def seg(ax, p, q, lw=1.3, **kw):
    ax.plot([p[0], q[0]], [p[1], q[1]], color="black", lw=lw, solid_capstyle="round", zorder=2, **kw)

def arrow(ax, p, q, rad=0.08):
    ax.add_patch(FancyArrowPatch(p, q, arrowstyle="-|>", mutation_scale=16, lw=1.3, color="black",
                                 shrinkA=rad * 70, shrinkB=rad * 70, zorder=2))

def finish(fig, ax, name, xl, yl):
    ax.set_xlim(*xl); ax.set_ylim(*yl); ax.set_aspect("equal"); ax.axis("off")
    fig.tight_layout(pad=0.2); fig.savefig(OUT + name); plt.close(fig)

# ---------------------------------------------------------------- 1. vocabulary: loop / complete / not connected
fig, axs = plt.subplots(1, 3, figsize=(9.2, 2.9))
ax = axs[0]  # (a) a loop
pts = {"A": (0, 0), "B": (1.2, 0.0), "C": (0.6, 1.0)}
for e in ["AB", "AC", "BC"]: seg(ax, pts[e[0]], pts[e[1]])
ax.add_patch(Circle((1.2 + 0.26, 0.0), 0.26, fill=False, ec="black", lw=1.3, zorder=2))
for k, p in pts.items(): ax.plot(*p, "o", color="black", ms=7.5, zorder=5)
ax.text(-0.17, -0.17, "A", ha="center", va="center", fontsize=14); ax.text(1.05, -0.2, "B", ha="center", va="center", fontsize=14)
ax.text(0.6, 1.2, "C", ha="center", va="center", fontsize=14)
ax.text(0.8, -0.62, "(a)  une boucle en $B$", ha="center", fontsize=12)
ax.set_xlim(-0.45, 1.95); ax.set_ylim(-0.8, 1.4); ax.set_aspect("equal"); ax.axis("off")
ax = axs[1]  # (b) complete graph K4
q = {"A": (0, 1), "B": (1, 1), "C": (1, 0), "D": (0, 0)}
for e in ["AB", "BC", "CD", "DA", "AC", "BD"]: seg(ax, q[e[0]], q[e[1]])
for k, p in q.items():
    ax.plot(*p, "o", color="black", ms=7.5, zorder=5)
    ax.text(p[0] + (-0.15 if p[0] == 0 else 0.15), p[1] + (0.15 if p[1] == 1 else -0.15), k, ha="center", va="center", fontsize=14)
ax.text(0.5, -0.62, "(b)  graphe complet", ha="center", fontsize=12)
ax.set_xlim(-0.45, 1.45); ax.set_ylim(-0.8, 1.4); ax.set_aspect("equal"); ax.axis("off")
ax = axs[2]  # (c) not connected
r = {"A": (0, 0.9), "B": (0.7, 0), "C": (0, -0.1), "D": (1.8, 0.8), "E": (1.8, 0.0)}
for e in ["AB", "BC", "AC", "DE"]: seg(ax, r[e[0]], r[e[1]])
for k, p in r.items(): ax.plot(*p, "o", color="black", ms=7.5, zorder=5)
for k, (dx, dy) in {"A": (-0.15, 0.12), "B": (0.15, -0.12), "C": (-0.15, -0.12), "D": (0.17, 0.1), "E": (0.17, -0.1)}.items():
    ax.text(r[k][0] + dx, r[k][1] + dy, k, ha="center", va="center", fontsize=14)
ax.text(0.9, -0.62, "(c)  non connexe", ha="center", fontsize=12)
ax.set_xlim(-0.45, 2.2); ax.set_ylim(-0.8, 1.4); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(pad=0.3); fig.savefig(OUT + "eco-graphes-vocabulaire.svg"); plt.close(fig)

# ---------------------------------------------------------------- 2. the lesson's graph, with degrees
fig, ax = plt.subplots(figsize=(4.4, 4.0))
for e in EDGES: seg(ax, P[e[0]], P[e[1]])
for k, p in P.items(): dot(ax, p, k, out=0.2)
finish(fig, ax, "eco-graphes-exemple.svg", (-1.35, 1.35), (-1.15, 1.35))

# ---------------------------------------------------------------- 3. the directed graph
fig, ax = plt.subplots(figsize=(4.4, 4.0))
for u, v in ["BC", "CA", "AB", "BE", "AE", "ED", "DB", "EC", "CD"]: arrow(ax, P[u], P[v])
for k, p in P.items(): dot(ax, p, k, out=0.2)
finish(fig, ax, "eco-graphes-oriente.svg", (-1.35, 1.35), (-1.15, 1.35))

# ---------------------------------------------------------------- 4. the weighted graph, shortest path C-A-B-E in thick line
W = {"CB": 13, "CA": 7, "BA": 5, "BD": 11, "BE": 6, "CD": 10, "CE": 20, "AE": 15, "DE": 12}
best = {"CA", "AB", "BE"}
t = {"CB": 0.5, "CA": 0.2, "BA": 0.5, "BD": 0.72, "BE": 0.66, "CD": 0.5, "CE": 0.62, "AE": 0.5, "DE": 0.5}
fig, ax = plt.subplots(figsize=(4.8, 4.4))
for e, w in W.items():
    thick = e in best or e[::-1] in best
    seg(ax, P[e[0]], P[e[1]], lw=3.4 if thick else 1.2)
for e, w in W.items():
    p = np.array(P[e[0]]); q = np.array(P[e[1]]); m = p + (q - p) * t[e]
    ax.text(*m, str(w), ha="center", va="center", fontsize=12, zorder=6, bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="none"))
for k, p in P.items(): dot(ax, p, k, out=0.2)
finish(fig, ax, "eco-graphes-pondere.svg", (-1.35, 1.35), (-1.15, 1.35))

# ---------------------------------------------------------------- 5. colouring with 4 "colours" (white, black, grey, hatched)
fills = {"A": ("white", None), "D": ("white", None), "B": ("black", None), "C": ("0.65", None), "E": ("white", "////")}
fig, ax = plt.subplots(figsize=(4.4, 4.0))
for e in EDGES: seg(ax, P[e[0]], P[e[1]])
for k, p in P.items(): dot(ax, p, k, out=0.28, fill=fills[k][0], hatch=fills[k][1], rad=0.12)
finish(fig, ax, "eco-graphes-coloration.svg", (-1.35, 1.35), (-1.15, 1.35))

# ---------------------------------------------------------------- 6. Falk's scheme for a matrix product
def mat(ax, x0, y0, rows, cw=0.62, ch=0.5, fs=14):
    n, p = len(rows), len(rows[0]); w, h = p * cw, n * ch
    for i, row in enumerate(rows):
        for j, v in enumerate(row):
            ax.text(x0 + (j + 0.5) * cw, y0 - (i + 0.5) * ch, str(v).replace("-", "\u2212"), ha="center", va="center", fontsize=fs)
    for sx, d in [(x0, 1), (x0 + w, -1)]:
        ax.plot([sx + d * 0.09, sx, sx, sx + d * 0.09], [y0 + 0.04, y0 + 0.04, y0 - h - 0.04, y0 - h - 0.04], color="black", lw=1.3)
    return w, h
Pm = [[1, 2, 0], [3, 1, 4]]; Qm = [[2, 1], [0, 3], [5, -1]]; Rm = [[2, 7], [26, 2]]
fig, ax = plt.subplots(figsize=(6.6, 3.9))
cw, ch = 0.62, 0.5
bx, by = 3.2, 3.95          # B (3x2) top right
ax_, ay = 0.3, 1.55         # A (2x3) bottom left
mat(ax, bx, by, Qm); mat(ax, ax_, ay, Pm)
mat(ax, bx, ay, Rm)        # product C (2x2)
ax.text(bx + 0.62, by + 0.22, "$B$   ($3\\times 2$)", ha="center", fontsize=13)
ax.text(ax_ + 0.93, ay + 0.22, "$A$   ($2\\times 3$)", ha="center", fontsize=13)
ax.text(bx + 0.62, ay - 1.35, "$C=A\\times B$   ($2\\times 2$)", ha="center", fontsize=13)
# dashed frames: row 1 of A, column 1 of B, and the cell c11
ax.add_patch(Rectangle((ax_ + 0.05, ay - ch + 0.03), 3 * cw - 0.1, ch - 0.06, fill=False, ls="--", ec="black", lw=1.1))
ax.add_patch(Rectangle((bx + 0.04, by - 3 * ch + 0.03), cw - 0.08, 3 * ch - 0.06, fill=False, ls="--", ec="black", lw=1.1))
ax.add_patch(Rectangle((bx + 0.04, ay - ch + 0.03), cw - 0.08, ch - 0.06, fill=False, ls="--", ec="black", lw=1.1))
ax.text(bx + 1.5, ay - 0.25, "", fontsize=1)
ax.text(5.15, 1.05, "$c_{11}=1\\times 2+2\\times 0+0\\times 5=2$", fontsize=12, ha="left", va="center")
ax.set_xlim(0, 7.8); ax.set_ylim(-0.05, 4.5); ax.axis("off")
fig.tight_layout(pad=0.2); fig.savefig(OUT + "eco-matrices-produit.svg"); plt.close(fig)
print("ok")
