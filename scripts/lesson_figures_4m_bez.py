# Figures of the 4ème Maths lesson "Identité de Bézout" (python scripts/lesson_figures_4m_bez.py).
# Requires: pip install numpy matplotlib
import os, math
from math import gcd
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Rectangle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.9)


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


# ================================================================ 1. Euclid's algorithm as a tiling by squares : 21 x 15
W, H = 21, 15
squares = [(0, 0, 15, TEAL), (15, 0, 6, ORANGE), (15, 6, 6, ORANGE), (15, 12, 3, VIOLET), (18, 12, 3, VIOLET)]   # (x, y, side, colour)
assert sum(s * s for _, _, s, _ in squares) == W * H                                                         # the squares tile the rectangle exactly
assert all(x + s <= W and y + s <= H for x, y, s, _ in squares)
assert divmod(21, 15) == (1, 6) and divmod(15, 6) == (2, 3) and divmod(6, 3) == (2, 0) and gcd(21, 15) == 3     # the three divisions of the algorithm
fig, ax = plt.subplots(figsize=(9.6, 5.6))
for x, y, s, col in squares:
    ax.add_patch(Rectangle((x, y), s, s, fc=col, ec="white", lw=2.5, alpha=0.30)); ax.add_patch(Rectangle((x, y), s, s, fc="none", ec=col, lw=2.2))
    ax.text(x + s / 2, y + s / 2, rf"${s}\times{s}$", ha="center", va="center", color=col, fontsize=15 if s > 3 else 11.5, fontweight="bold")
ax.annotate("", xy=(0, -0.9), xytext=(W, -0.9), arrowprops=dict(arrowstyle="<->", color=GRAY, lw=1.2)); ax.text(W / 2, -1.7, "21", ha="center", color=GRAY, fontsize=13)
ax.annotate("", xy=(-0.9, 0), xytext=(-0.9, H), arrowprops=dict(arrowstyle="<->", color=GRAY, lw=1.2)); ax.text(-1.7, H / 2, "15", va="center", ha="center", color=GRAY, fontsize=13)
ax.text(24.0, 12.9, r"$21 = 1\times15 + \mathbf{6}$", color=TEAL, fontsize=13, va="center")
ax.text(24.0, 8.8, r"$15 = 2\times6 + \mathbf{3}$", color=ORANGE, fontsize=13, va="center")
ax.text(24.0, 4.8, r"$6 = 2\times3 + 0$", color=VIOLET, fontsize=13, va="center")
ax.text(24.0, 1.4, r"$21\wedge15 = \mathbf{3}$", color="black", fontsize=15, va="center", bbox=dict(boxstyle="round,pad=0.35", fc="#fef3c7", ec="none"))
for yy in (11.7, 7.6, 3.6): ax.plot([24.0, 31.2], [yy, yy], color="#e5e7eb", lw=0.9)
ax.set_xlim(-3, 31.5); ax.set_ylim(-2.6, 16.2); ax.set_aspect("equal"); ax.axis("off")
ax.set_title(r"L'algorithme d'Euclide : paver un rectangle $21\times15$ avec des carrés", fontsize=12.5, pad=6)
save(fig, "m4-bez-carrelage.svg")

# ================================================================ 2. lattice points near the line 12x - 7y = 0 : O A, I(3,5), J(4,7)
A = np.array([7, 12]); I = np.array([3, 5]); J = np.array([4, 7])
assert 12 * I[0] - 7 * I[1] == 1 and 12 * J[0] - 7 * J[1] == -1 and (I + J == A).all()                          # I + J = A : OIAJ is a parallelogram
assert abs(I[0] * J[1] - I[1] * J[0]) == 1                                                                       # its area is 1
inside = [(x, y) for x in range(1, 7) for y in range(1, 12)]
assert min(abs(12 * x - 7 * y) for x, y in inside) == 1 and sorted(p for p in inside if abs(12 * p[0] - 7 * p[1]) == 1) == [(3, 5), (4, 7)]
assert [p for p in inside if 12 * p[0] == 7 * p[1]] == []                                                         # no lattice point strictly inside on the line
fig, ax = plt.subplots(figsize=(6.2, 8.4))
gx, gy = np.meshgrid(np.arange(0, 8), np.arange(0, 13)); ax.plot(gx.ravel(), gy.ravel(), ".", color="#9ca3af", ms=5, zorder=1)
ax.add_patch(Rectangle((0, 0), 7, 12, fc="none", ec=GRAY, lw=1.0, ls=(0, (4, 3)), zorder=2))
ax.add_patch(Polygon([(0, 0), tuple(I), tuple(A), tuple(J)], closed=True, fc=ORANGE, alpha=0.22, lw=0, zorder=2)); ax.add_patch(Polygon([(0, 0), tuple(I), tuple(A), tuple(J)], closed=True, fc="none", ec=ORANGE, lw=1.8, zorder=3))
ax.plot([0, 7], [0, 12], color=VIOLET, lw=1.3, zorder=4)
for p, nm, off, col in (((0, 0), "O", (-11, -9), "black"), ((7, 12), "A", (11, 3), "black"), (tuple(I), "I(3, 5)", (-34, -2), ORANGE), (tuple(J), "J(4, 7)", (36, 0), ORANGE)):
    ax.plot([p[0]], [p[1]], "o", color=col, ms=8 if col != "black" else 6, zorder=6)
    ax.annotate(nm, p, xytext=off, textcoords="offset points", fontsize=13, color=col, ha="center", va="center", zorder=7, bbox=WHITE)
ax.annotate(r"droite $12x-7y=0$", (3.5, 6.0), xytext=(-88, 28), textcoords="offset points", fontsize=11.5, color=VIOLET, ha="center", bbox=WHITE, zorder=7)
ax.annotate("parallélogramme $OIAJ$\nd'aire $1$ : très fin !", (4.9, 8.4), xytext=(2.0, 10.5), textcoords="data", fontsize=11, color=ORANGE, ha="center", va="center",
            arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.3), bbox=dict(boxstyle="round,pad=0.3", fc="white", ec=ORANGE, lw=0.8), zorder=8)
ax.text(5.15, 2.2, r"$12x-7y=\pm1$" + "\nles deux points\nles plus proches", fontsize=11, color=ORANGE, ha="center", va="center", bbox=dict(boxstyle="round,pad=0.3", fc="white", ec=ORANGE, lw=0.8))
ax.set_xlim(-1, 8.4); ax.set_ylim(-1, 13); ax.set_aspect("equal"); ax.set_xticks(range(0, 8)); ax.set_yticks(range(0, 13, 2))
ax.tick_params(labelsize=10, colors=GRAY)
for sp in ("top", "right"): ax.spines[sp].set_visible(False)
ax.set_title(r"Points à coordonnées entières près de la droite $(OA)$", fontsize=12, pad=6)
save(fig, "m4-bez-reseau.svg")

# ================================================================ 3. the solutions of 7x + 11y = 2 are equally spaced on the line
a_, b_, c_ = 7, 11, 2
assert gcd(a_, b_) == 1 and a_ * (-6) + b_ * 4 == c_
sols = [(-6 + b_ * k, 4 - a_ * k) for k in range(-1, 3)]
assert all(a_ * x + b_ * y == c_ for x, y in sols) and sols == [(-17, 11), (-6, 4), (5, -3), (16, -10)]
xs = np.arange(-22, 23); ys = np.arange(-14, 15)
brute = {(x, y) for x in range(-40, 41) for y in range(-40, 41) if a_ * x + b_ * y == c_}
assert {s for s in sols} <= brute and all((x2 - x1, y2 - y1) == (b_, -a_) for (x1, y1), (x2, y2) in zip(sols, sols[1:]))
fig, ax = plt.subplots(figsize=(9.6, 5.4))
gx, gy = np.meshgrid(xs, ys); ax.plot(gx.ravel(), gy.ravel(), ".", color="#d1d5db", ms=3, zorder=1)
xl = np.array([-22, 22]); ax.plot(xl, (c_ - a_ * xl) / b_, color=VIOLET, lw=2.0, zorder=3)
for (x, y) in sols:
    ax.plot([x], [y], "o", color=ORANGE, ms=9, zorder=6)
ax.annotate("", xy=(5, -3), xytext=(-6, 4), arrowprops=dict(arrowstyle="-|>", color=BLUE, lw=2.0, shrinkA=6, shrinkB=6), zorder=5)
ax.annotate(r"pas $(11,\,-7)=(b/d,\,-a/d)$", (-0.5, 0.5), xytext=(28, 22), textcoords="offset points", fontsize=12, color=BLUE, ha="left", va="center", bbox=WHITE, zorder=8)
ax.annotate(r"solution particulière $(-6,\,4)$", (-6, 4), xytext=(-8, 26), textcoords="offset points", fontsize=11.5, color=ORANGE, ha="right", va="center", bbox=WHITE, zorder=8)
for (x, y), nm in zip(sols, (r"$k=-1$", r"$k=0$", r"$k=1$", r"$k=2$")):
    ax.annotate(nm, (x, y), xytext=(0, -17), textcoords="offset points", fontsize=10.5, color=ORANGE, ha="center", va="center", zorder=8)
ax.axhline(0, color="#374151", lw=0.8, zorder=2); ax.axvline(0, color="#374151", lw=0.8, zorder=2)
ax.set_xlim(-22, 22); ax.set_ylim(-14, 14); ax.set_aspect("equal"); ax.set_xticks(range(-20, 21, 5)); ax.set_yticks(range(-10, 11, 5)); ax.tick_params(labelsize=10, colors=GRAY)
for sp in ("top", "right"): ax.spines[sp].set_visible(False)
ax.set_title(r"Les solutions entières de $7x+11y=2$ : des points de la droite régulièrement espacés", fontsize=12, pad=6)
save(fig, "m4-bez-solutions.svg")
print("ok")
