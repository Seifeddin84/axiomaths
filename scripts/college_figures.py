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


# ---------------------------------------------------------------- 3. Pythagoras: the square of side a+b
fig, ax = plt.subplots(figsize=(5.4, 5.0))
a_, b_ = 3.0, 4.0; S = a_ + b_
sq = [(0, 0), (S, 0), (S, S), (0, S)]
poly(ax, sq, color=GRAY, fill=0.04, lw=1.6)
P = [np.array(p, float) for p in [(a_, 0), (S, a_), (b_, S), (0, b_)]]        # corners of the inner square (side c = 5)
poly(ax, [tuple(p) for p in P], color=ORANGE, fill=0.18, lw=2.4)
corners = [np.array(p, float) for p in sq]
for k, col in zip(range(4), (TEAL, TEAL, TEAL, TEAL)):
    tri = [tuple(corners[k]), tuple(P[k]), tuple(P[k - 1])]
    poly(ax, tri, color=col, fill=0.16, lw=1.6)
ax.text(S / 2, S / 2, "$c^2$", ha="center", va="center", fontsize=22, color=ORANGE)
ax.text(a_ / 2, -0.38, "$a$", ha="center", fontsize=15); ax.text(a_ + b_ / 2, -0.38, "$b$", ha="center", fontsize=15)
ax.text(S + 0.3, a_ / 2, "$a$", va="center", fontsize=15); ax.text(S + 0.3, a_ + b_ / 2, "$b$", va="center", fontsize=15)
ax.text(1.12, 1.68, "$c$", fontsize=17, color=ORANGE, ha="center", va="center")
ax.set_title(r"$(a+b)^2 = 4\times\dfrac{ab}{2} + c^2$", fontsize=14, color=GRAY, pad=6)
clean(ax, (-0.7, S + 0.9), (-0.9, S + 0.4)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "pythagore-carre.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# ---------------------------------------------------------------- 4. Thales in a triangle
fig, axs = plt.subplots(1, 2, figsize=(10.0, 3.9), gridspec_kw=dict(width_ratios=[1.0, 1.15]))
ax = axs[0]
A = np.array([0.0, 3.4]); B = np.array([-2.0, 0.0]); C = np.array([2.6, 0.0])
t = 0.6; D = A + t * (B - A); E = A + t * (C - A)
poly(ax, [tuple(A), tuple(B), tuple(C)], color=TEAL)
ax.plot(*zip(D, E), color=ORANGE, lw=2.6)
for pt, nm, off in ((A, "A", (0, 12)), (B, "B", (-12, -8)), (C, "C", (12, -8)), (D, "D", (-13, 3)), (E, "E", (13, 3))):
    ax.plot(*pt, "o", color="black", ms=3.5); label(ax, pt, nm, *off)
ax.set_title(r"$(DE)\parallel(BC)\ \Rightarrow\ \dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac{DE}{BC}$", fontsize=13, color=GRAY, pad=4)
clean(ax, (-3.0, 3.6), (-0.7, 4.0))
ax = axs[1]
y0, y1, y2 = 3.0, 1.6, 0.0
for y_, col in ((y0, GRAY), (y1, GRAY), (y2, GRAY)):
    ax.plot([-0.6, 6.0], [y_, y_], color=col, lw=1.6, ls="--")
# two transversals Delta and Delta'
def line_pt(p, q, y):
    return p + (q - p) * (y - p[1]) / (q[1] - p[1])
d1 = (np.array([0.4, 3.0]), np.array([2.6, 0.0])); d2 = (np.array([3.2, 3.0]), np.array([5.6, 0.0]))
for (p, q), col in ((d1, TEAL), (d2, BLUE)):
    ax.plot([p[0] - 0.15 * (q[0] - p[0]), q[0] + 0.15 * (q[0] - p[0])], [p[1] - 0.15 * (q[1] - p[1]), q[1] + 0.15 * (q[1] - p[1])], color=col, lw=2.2)
names = ("A", "B", "C"); names2 = ("A'", "B'", "C'")
for y_, n1, n2 in zip((y0, y1, y2), names, names2):
    p = line_pt(*d1, y_); q = line_pt(*d2, y_)
    ax.plot(*p, "o", color=TEAL, ms=5); ax.plot(*q, "o", color=BLUE, ms=5)
    label(ax, p, n1, -13, 6); label(ax, q, n2, 15, 6)
ax.set_title(r"$\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$", fontsize=13, color=GRAY, pad=4)
clean(ax, (-1.0, 6.6), (-0.7, 3.7))
fig.tight_layout(pad=0.4); fig.savefig(OUT + "thales-triangle.svg", bbox_inches="tight", pad_inches=0.12); plt.close(fig)

# ---------------------------------------------------------------- 5. coordinates: symmetric points
fig, ax = plt.subplots(figsize=(5.6, 5.0))
ax.axhline(0, color="black", lw=1.2); ax.axvline(0, color="black", lw=1.2)
ax.set_xticks(range(-4, 5)); ax.set_yticks(range(-3, 4)); ax.grid(alpha=0.25)
for sp in ax.spines.values(): sp.set_visible(False)
ax.tick_params(length=0, labelsize=10, colors=GRAY)
pts = {"M": ((3, 2), TEAL, (0, 16)), "M'": ((3, -2), ORANGE, (0, -16)), "M''": ((-3, 2), BLUE, (0, 16)), "N": ((-3, -2), GRAY, (0, -16))}
for nm, ((x_, y_), col, off) in pts.items():
    ax.plot(x_, y_, "o", color=col, ms=8, zorder=5)
    label(ax, (x_, y_), f"${nm.replace(chr(39), chr(39)*1)}({x_};{y_})$".replace("M''", "M''"), *off, color=col, size=12)
ax.plot([3, 3], [2, -2], color=ORANGE, lw=1.2, ls="--"); ax.plot([3, -3], [2, 2], color=BLUE, lw=1.2, ls="--"); ax.plot([3, -3], [2, -2], color=GRAY, lw=1.2, ls="--")
label(ax, (0.0, 0.0), "O", -10, 9, size=13)
ax.plot(1, 0, "o", color="black", ms=4); ax.plot(0, 1, "o", color="black", ms=4); label(ax, (1, 0), "I", 0, -12, size=12); label(ax, (0, 1), "J", -11, 0, size=12)
ax.set_xlim(-4.6, 4.8); ax.set_ylim(-3.5, 3.6); ax.set_aspect("equal")
fig.tight_layout(pad=0.3); fig.savefig(OUT + "repere-symetriques.svg"); plt.close(fig)

# ---------------------------------------------------------------- 6. right triangle and its altitude
fig, ax = plt.subplots(figsize=(6.2, 3.6))
Bp = np.array([0.0, 0.0]); Cp = np.array([13.0, 0.0])
# A with AB=5, AC=12 : BH=25/13, AH=60/13
H = np.array([25 / 13, 0.0]); Ap = np.array([25 / 13, 60 / 13])
poly(ax, [tuple(Ap), tuple(Bp), tuple(Cp)], color=TEAL)
ax.plot(*zip(Ap, H), color=ORANGE, lw=2.4); right_angle(ax, H, Cp, Ap, 0.4); right_angle(ax, Ap, Bp, Cp, 0.45, color=GRAY)
for pt, nm, off in ((Ap, "A", (0, 12)), (Bp, "B", (-12, -8)), (Cp, "C", (12, -8)), (H, "H", (0, -13))):
    ax.plot(*pt, "o", color="black", ms=3.5); label(ax, pt, nm, *off)
ax.text(0.7, 2.9, "5", color=GRAY, fontsize=12); ax.text(8.0, 2.6, "12", color=GRAY, fontsize=12); ax.text(7.0, -1.0, "13", color=GRAY, fontsize=12, ha="center")
ax.text(2.35, 2.0, r"$\dfrac{60}{13}$", color=ORANGE, fontsize=12)
clean(ax, (-1.2, 14.2), (-1.8, 6.4)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "triangle-hauteur.svg"); plt.close(fig)

# ---------------------------------------------------------------- 7. right triangle inscribed in a circle of diameter [BC]
fig, ax = plt.subplots(figsize=(4.6, 3.6))
th = np.linspace(0, 2 * np.pi, 400); R = 2.0
ax.plot(R * np.cos(th), R * np.sin(th), color=GRAY, lw=1.8)
Bc = np.array([-R, 0.0]); Cc = np.array([R, 0.0]); Oc = np.array([0.0, 0.0])
Ac = np.array([R * np.cos(np.radians(112)), R * np.sin(np.radians(112))])
poly(ax, [tuple(Ac), tuple(Bc), tuple(Cc)], color=TEAL, fill=0.10)
ax.plot(*zip(Oc, Ac), color=ORANGE, lw=2.4)
right_angle(ax, Ac, Bc, Cc, 0.28, color=ORANGE)
for a_pt, b_pt in ((Oc, Ac), (Oc, Bc), (Oc, Cc)):
    tick(ax, a_pt, b_pt, 1, color=ORANGE, size=0.09)
for pt, nm, off in ((Ac, "A", (-4, 13)), (Bc, "B", (-12, -6)), (Cc, "C", (12, -6)), (Oc, "O", (0, -13))):
    ax.plot(*pt, "o", color="black", ms=3.5); label(ax, pt, nm, *off)
clean(ax, (-2.8, 2.8), (-2.3, 2.5)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "cercle-triangle-rectangle.svg"); plt.close(fig)

# ---------------------------------------------------------------- 8. trapezoid, segment joining the midpoints of the legs
fig, ax = plt.subplots(figsize=(5.2, 3.0))
A8 = np.array([0.5, 2.0]); B8 = np.array([3.5, 2.0]); D8 = np.array([-0.5, 0.0]); C8 = np.array([4.5, 0.0])
I8 = (A8 + D8) / 2; J8 = (B8 + C8) / 2; P8 = (A8 + C8) / 2
poly(ax, [tuple(A8), tuple(B8), tuple(C8), tuple(D8)], color=TEAL, fill=0.08)
ax.plot(*zip(A8, C8), color=GRAY, lw=1.3, ls="--")
ax.plot(*zip(I8, J8), color=ORANGE, lw=2.6)
tick(ax, A8, I8, 1); tick(ax, I8, D8, 1); tick(ax, B8, J8, 2); tick(ax, J8, C8, 2)
for pt, nm, off in ((A8, "A", (-4, 11)), (B8, "B", (4, 11)), (C8, "C", (12, -6)), (D8, "D", (-12, -6)), (I8, "I", (-11, 0)), (J8, "J", (11, 0)), (P8, "P", (0, 11))):
    ax.plot(*pt, "o", color="black", ms=3.5); label(ax, pt, nm, *off)
ax.text(2.0, 2.33, "3", color=GRAY, fontsize=12, ha="center"); ax.text(2.0, -0.45, "5", color=GRAY, fontsize=12, ha="center")
clean(ax, (-1.4, 5.4), (-0.8, 2.7)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "trapeze-mediane.svg"); plt.close(fig)

# ---------------------------------------------------------------- 9. (a+b)^2 as an area
fig, ax = plt.subplots(figsize=(4.8, 4.4))
a9, b9 = 3.0, 2.0; S9 = a9 + b9
def rect(x0, y0, w, h, col, txt, size=17):
    ax.add_patch(plt.Rectangle((x0, y0), w, h, facecolor=col, alpha=0.16, edgecolor="none"))
    ax.plot([x0, x0 + w, x0 + w, x0, x0], [y0, y0, y0 + h, y0 + h, y0], color=col, lw=2.0)
    ax.text(x0 + w / 2, y0 + h / 2, txt, ha="center", va="center", fontsize=size, color=col)
rect(0, 0, a9, a9, TEAL, "$a^2$"); rect(a9, a9, b9, b9, ORANGE, "$b^2$")
rect(a9, 0, b9, a9, BLUE, "$ab$"); rect(0, a9, a9, b9, BLUE, "$ab$")
ax.text(a9 / 2, -0.32, "$a$", ha="center", va="top", fontsize=15); ax.text(a9 + b9 / 2, -0.32, "$b$", ha="center", va="top", fontsize=15)
ax.text(-0.25, a9 / 2, "$a$", ha="right", va="center", fontsize=15); ax.text(-0.25, a9 + b9 / 2, "$b$", ha="right", va="center", fontsize=15)
ax.set_title(r"$(a+b)^2 = a^2 + 2ab + b^2$", fontsize=14, color=GRAY, pad=6)
clean(ax, (-0.8, S9 + 0.4), (-0.9, S9 + 0.3)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "carre-somme.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# ---------------------------------------------------------------- 10. choice tree: a coin tossed three times
fig, ax = plt.subplots(figsize=(6.4, 4.4))
import itertools
levels = 3
ys = {}
leaves = list(itertools.product("PF", repeat=3))
for i, seq in enumerate(leaves):
    ys[seq] = 7 - i
def y_of(seq):
    if len(seq) == 3: return ys[seq]
    ch = [y_of(seq + (c,)) for c in "PF"]
    return sum(ch) / 2
xs = [0.0, 1.5, 3.0, 4.5]
root = (xs[0], y_of(()))
ax.plot(*root, "o", color="black", ms=5)
for depth in range(1, 4):
    for seq in itertools.product("PF", repeat=depth):
        parent = seq[:-1]
        p_pt = (xs[depth - 1], y_of(parent)); c_pt = (xs[depth], y_of(seq))
        col = TEAL if seq[-1] == "P" else ORANGE
        ax.plot([p_pt[0], c_pt[0]], [p_pt[1], c_pt[1]], color=col, lw=1.8)
        ax.plot(*c_pt, "o", color=col, ms=4.5)
        mid = ((p_pt[0] + c_pt[0]) / 2, (p_pt[1] + c_pt[1]) / 2)
        ax.text(mid[0] - 0.05, mid[1] + (0.22 if seq[-1] == "P" else -0.22), seq[-1], fontsize=11, color=col, ha="center", va="center")
for seq in leaves:
    ax.text(xs[3] + 0.18, ys[seq], "".join(seq), fontsize=12, va="center", ha="left")
ax.text(xs[3] + 2.5, 3.9, "8", fontsize=24, color=GRAY, va="center", ha="center")
ax.text(xs[3] + 2.5, 3.0, "2 \u00d7 2 \u00d7 2", fontsize=12, color=GRAY, va="center", ha="center")
clean(ax, (-0.4, 8.2), (-0.6, 7.6)); fig.tight_layout(pad=0.3)
fig.savefig(OUT + "arbre-pieces.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

print("ok")
