# Figures of the 4ème Maths lesson "Coniques" (python scripts/lesson_figures_4m_con.py).
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.92)


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.08); plt.close(fig)


def pt(ax, p, lab, dx=0.0, dy=0.0, col="black", size=12.5, ha="center", va="center", ms=5.5):
    ax.plot([p[0]], [p[1]], "o", color=col, ms=ms, zorder=6)
    if lab: ax.text(p[0] + dx, p[1] + dy, lab, color=col, fontsize=size, ha=ha, va=va, zorder=7, bbox=WHITE)


def seg(ax, a, b, col, lw=1.8, ls="-", z=3):
    ax.plot([a[0], b[0]], [a[1], b[1]], color=col, lw=lw, ls=ls, zorder=z, solid_capstyle="round")


# ================================================================ 1. one rule MF = e MH, three curves (same focus F = O, same directrix x = -2)
d = 2.0
xs, ys = np.meshgrid(np.linspace(-4.6, 7.4, 1400), np.linspace(-5.2, 5.2, 1200))
fig, ax = plt.subplots(figsize=(5.6, 4.0))
ax.axvline(-d, color=GRAY, lw=1.6, ls=(0, (5, 3)))
for e, col in ((0.6, TEAL), (1.0, VIOLET), (1.6, ORANGE)):
    ax.contour(xs, ys, xs ** 2 + ys ** 2 - e ** 2 * (xs + d) ** 2, [0], colors=[col], linewidths=2.4)
# sanity: every point of the three curves satisfies MF = e MH (polar form r = e d / (1 - e cos t), F at the origin)
for e in (0.6, 1.0, 1.6):
    for th in (0.7, 2.0, 2.6):
        r = e * d / (1 - e * math.cos(th)); X, Y = r * math.cos(th), r * math.sin(th)
        assert abs(math.hypot(X, Y) - e * abs(X + d)) < 1e-9
assert abs(3.0 - 0.6 * (3.0 + d)) < 1e-12 and abs(1.0 - 1.0 * (-1.0 + d)) < 1e-12           # vertices (3, 0) of the ellipse and (-1, 0) of the parabola
ax.plot([0], [0], "o", color="black", ms=6, zorder=6); ax.text(0.28, -0.42, r"$F$", fontsize=13)
ax.text(-d - 0.2, 4.55, r"$D$", fontsize=13, color=GRAY, ha="right")
ax.legend(handles=[Line2D([0], [0], color=TEAL, lw=2.4, label=r"ellipse : $e=0{,}6$"),
                   Line2D([0], [0], color=VIOLET, lw=2.4, label=r"parabole : $e=1$"),
                   Line2D([0], [0], color=ORANGE, lw=2.4, label=r"hyperbole : $e=1{,}6$")],
          loc="upper center", bbox_to_anchor=(0.5, 0.0), ncol=3, fontsize=10.5, frameon=False, handlelength=1.1, columnspacing=1.1, handletextpad=0.5)
ax.set_xlim(-4.6, 7.4); ax.set_ylim(-5.2, 5.2); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-trois.svg")

# ================================================================ 2. parabola y^2 = 8x : focus F(2,0), directrix x = -2, tangent = perpendicular bisector of [F H0], mirror property
p = 4.0; x0, y0 = 4.5, 6.0
assert y0 ** 2 == 2 * p * x0 and math.hypot(x0 - p / 2, y0) == 6.5 == x0 + p / 2
sl, ic = p / y0, p * x0 / y0                                            # tangent y y0 = p (x + x0)  ->  y = (p/y0) x + p x0/y0
assert abs(sl - 2 / 3) < 1e-12 and abs(ic - 3) < 1e-12 and abs((0 + y0) / 2 - (sl * 0 + ic)) < 1e-12      # passes through the midpoint (0, 3) of [F H0]
fig, ax = plt.subplots(figsize=(4.9, 5.6))
t = np.linspace(-6.2, 6.2, 400); ax.plot(t ** 2 / (2 * p), t, color=TEAL, lw=2.6, zorder=2)
ax.axvline(-p / 2, color=GRAY, lw=1.6, ls=(0, (5, 3)))
xt = np.array([-2.6, 7.3]); ax.plot(xt, sl * xt + ic, color=BLUE, lw=1.8, zorder=3)
F = (p / 2, 0.0); M0 = (x0, y0); H0 = (-p / 2, y0)
seg(ax, M0, H0, GRAY, 1.6, (0, (4, 2)))
ax.annotate("", xy=F, xytext=M0, arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=2.0, shrinkA=0, shrinkB=4), zorder=4)
ax.annotate("", xy=M0, xytext=(8.3, y0), arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=2.0, shrinkA=0, shrinkB=0), zorder=4)
pt(ax, F, r"$F$", 0.0, -0.75); pt(ax, M0, r"$M_0$", 0.55, 0.75); pt(ax, H0, r"$H_0$", -0.7, 0.75, col=GRAY); pt(ax, (0, 0), r"$S$", -0.55, -0.7, ms=4.5)
ax.text(4.6, 3.0, r"$6{,}5$", color=ORANGE, fontsize=12, ha="left", va="center", bbox=WHITE)
ax.text(1.2, y0 + 0.65, r"$6{,}5$", color=GRAY, fontsize=12, ha="center", va="center", bbox=WHITE)
ax.text(-2.2, -6.2, r"$D$", color=GRAY, fontsize=13, ha="right")
ax.text(6.9, 2.5, r"tangente", color=BLUE, fontsize=12, ha="left")
ax.text(8.3, y0 + 0.7, r"rayon", color=ORANGE, fontsize=11.5, ha="right")
ax.set_xlim(-3.4, 8.6); ax.set_ylim(-6.9, 7.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-parabole.svg")

# ================================================================ 3. ellipse x^2/25 + y^2/9 = 1 : MF + MF' = 2a
a, b = 5.0, 3.0; c = math.sqrt(a * a - b * b); e = c / a; kd = a * a / c
M = (3.0, 2.4); assert abs(c - 4) < 1e-12 and abs(e - 0.8) < 1e-12 and abs(kd - 6.25) < 1e-12 and abs(M[0] ** 2 / 25 + M[1] ** 2 / 9 - 1) < 1e-12
MF, MFp, MH = math.hypot(M[0] - c, M[1]), math.hypot(M[0] + c, M[1]), kd - M[0]
assert abs(MF - 2.6) < 1e-12 and abs(MFp - 7.4) < 1e-12 and abs(MF + MFp - 2 * a) < 1e-12 and abs(MH - 3.25) < 1e-12 and abs(MF / MH - e) < 1e-12
fig, ax = plt.subplots(figsize=(5.6, 3.35))
th = np.linspace(0, 2 * np.pi, 500); ax.plot(a * np.cos(th), b * np.sin(th), color=TEAL, lw=2.6, zorder=2)
ax.axhline(0, color="#d1d5db", lw=1); ax.axvline(0, color="#d1d5db", lw=1)
ax.plot([kd, kd], [-3.7, 3.7], color=GRAY, lw=1.6, ls=(0, (5, 3))); ax.plot([-kd, -kd], [-3.7, 3.7], color=GRAY, lw=1.0, ls=(0, (2, 3)))
seg(ax, M, (c, 0), TEAL, 2.0); seg(ax, M, (-c, 0), ORANGE, 2.0); seg(ax, M, (kd, M[1]), GRAY, 1.6, (0, (4, 2)))
pt(ax, (c, 0), r"$F$", 0.0, -0.5); pt(ax, (-c, 0), r"$F'$", 0.0, -0.5); pt(ax, M, r"$M$", -0.1, 0.5, ms=6.5); pt(ax, (kd, M[1]), r"$H$", 0.4, 0.45, col=GRAY, ms=4.5)
pt(ax, (a, 0), None, ms=4.5); pt(ax, (-a, 0), None, ms=4.5); pt(ax, (0, b), None, ms=4.5); pt(ax, (0, -b), None, ms=4.5)
ax.text(3.0, 1.0, r"$2{,}6$", color=TEAL, fontsize=12, ha="center", bbox=WHITE); ax.text(-0.5, 1.45, r"$7{,}4$", color=ORANGE, fontsize=12, ha="center", bbox=WHITE)
ax.text(kd + 0.2, 1.25, r"$3{,}25$", color=GRAY, fontsize=11.5, ha="left", va="center", bbox=WHITE)
ax.text(kd + 0.2, -3.0, r"$D$", color=GRAY, fontsize=13, ha="left")
ax.set_xlim(-7.4, 8.2); ax.set_ylim(-3.9, 3.9); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-ellipse.svg")

# ================================================================ 4. hyperbola x^2/9 - y^2/16 = 1 : |MF' - MF| = 2a, asymptotes
a, b = 3.0, 4.0; c = math.hypot(a, b); e = c / a; kd = a * a / c
M = (5.0, 16 / 3); assert c == 5 and abs(e - 5 / 3) < 1e-12 and abs(kd - 1.8) < 1e-12 and abs(M[0] ** 2 / 9 - M[1] ** 2 / 16 - 1) < 1e-12
MF, MFp, MH = math.hypot(M[0] - c, M[1]), math.hypot(M[0] + c, M[1]), M[0] - kd
assert abs(MF - 16 / 3) < 1e-12 and abs(MFp - 34 / 3) < 1e-12 and abs(MFp - MF - 2 * a) < 1e-12 and abs(MF / MH - e) < 1e-12
fig, ax = plt.subplots(figsize=(5.4, 4.7))
u = np.linspace(-7.0, 7.0, 500); ax.plot(a * np.sqrt(1 + u ** 2 / b ** 2), u, color=TEAL, lw=2.6); ax.plot(-a * np.sqrt(1 + u ** 2 / b ** 2), u, color=TEAL, lw=2.6)
xa = np.array([-7.6, 7.6]); ax.plot(xa, b / a * xa, color=GRAY, lw=1.3, ls=(0, (5, 3))); ax.plot(xa, -b / a * xa, color=GRAY, lw=1.3, ls=(0, (5, 3)))
ax.axhline(0, color="#d1d5db", lw=1); ax.axvline(0, color="#d1d5db", lw=1)
ax.plot([kd, kd], [-7, 7], color=GRAY, lw=1.2, ls=(0, (2, 3))); ax.plot([-kd, -kd], [-7, 7], color=GRAY, lw=1.2, ls=(0, (2, 3)))
seg(ax, M, (c, 0), TEAL, 2.0); seg(ax, M, (-c, 0), ORANGE, 2.0)
pt(ax, (c, 0), r"$F$", 0.0, -0.75); pt(ax, (-c, 0), r"$F'$", 0.0, -0.75); pt(ax, M, r"$M$", 0.85, -0.55, ms=6.5)
pt(ax, (a, 0), r"$S$", -0.75, 0.7, ms=4.5); pt(ax, (-a, 0), r"$S'$", 0.75, 0.7, ms=4.5)
ax.text(c + 0.25, 2.5, r"$\frac{16}{3}$", color=TEAL, fontsize=12.5, ha="left", va="center", bbox=WHITE)
ax.text(-0.7, 3.4, r"$\frac{34}{3}$", color=ORANGE, fontsize=12.5, ha="center", va="center", bbox=WHITE)
ax.set_xlim(-8.0, 8.0); ax.set_ylim(-7.2, 7.2); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-hyperbole.svg")

# ================================================================ 5. non-reduced equation : (x-1)^2/9 + (y+2)^2/4 = 1  (translation of the axes)
cx, cy, a, b = 1.0, -2.0, 3.0, 2.0; c = math.sqrt(a * a - b * b)
for _ in range(20):
    x, y = np.random.default_rng(3).uniform(-4, 4, 2)
    assert abs((4 * x * x + 9 * y * y - 8 * x + 36 * y + 4) - 36 * (((x - cx) / a) ** 2 + ((y - cy) / b) ** 2 - 1)) < 1e-9
fig, ax = plt.subplots(figsize=(5.4, 3.9))
th = np.linspace(0, 2 * np.pi, 500); ax.plot(cx + a * np.cos(th), cy + b * np.sin(th), color=TEAL, lw=2.6, zorder=3)
ax.annotate("", xy=(5.0, 0), xytext=(-3.1, 0), arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.3)); ax.annotate("", xy=(0, 1.7), xytext=(0, -4.9), arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.3))
ax.annotate("", xy=(5.0, cy), xytext=(-2.4, cy), arrowprops=dict(arrowstyle="-|>", color=BLUE, lw=1.3, ls=(0, (4, 2)))); ax.annotate("", xy=(cx, 1.2), xytext=(cx, -4.6), arrowprops=dict(arrowstyle="-|>", color=BLUE, lw=1.3, ls=(0, (4, 2))))
pt(ax, (0, 0), r"$O$", -0.3, 0.38, col=GRAY, ms=4.5); pt(ax, (cx, cy), r"$\Omega$", 0.34, 0.4, col=BLUE, ms=5.5)
pt(ax, (cx + c, cy), r"$F$", 0.0, -0.5, ms=5.5); pt(ax, (cx - c, cy), r"$F'$", 0.0, -0.5, ms=5.5)
ax.text(5.0, -0.36, r"$x$", color=GRAY, fontsize=13, ha="center"); ax.text(-0.3, 1.45, r"$y$", color=GRAY, fontsize=13, ha="center")
ax.text(5.0, cy - 0.4, r"$X$", color=BLUE, fontsize=13, ha="center"); ax.text(cx + 0.3, 1.0, r"$Y$", color=BLUE, fontsize=13, ha="center")
ax.set_xlim(-3.5, 5.5); ax.set_ylim(-5.0, 1.8); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-translation.svg")

# ================================================================ 6. y = 1/x is a rectangular hyperbola : F(sqrt2, sqrt2), D : x + y = sqrt2, e = sqrt2
s2 = math.sqrt(2); M = (2.0, 0.5)
for x in np.linspace(0.2, 6, 40):
    y = 1 / x; assert abs(math.hypot(x - s2, y - s2) - s2 * abs(x + y - s2) / s2) < 1e-9
MF = math.hypot(M[0] - s2, M[1] - s2); MH = abs(M[0] + M[1] - s2) / s2; assert abs(MF / MH - s2) < 1e-9
fig, ax = plt.subplots(figsize=(4.9, 4.9))
tt = np.linspace(0.27, 4.3, 400); ax.plot(tt, 1 / tt, color=TEAL, lw=2.6); ax.plot(-tt, -1 / tt, color=TEAL, lw=2.6)
ax.annotate("", xy=(4.3, 0), xytext=(-4.3, 0), arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.2)); ax.annotate("", xy=(0, 4.3), xytext=(0, -4.3), arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.2))
ax.plot([-3.0, 3.0], [-3.0, 3.0], color="#d1d5db", lw=1, ls=(0, (4, 3)))
xd = np.array([-0.3, 3.9]); ax.plot(xd, s2 - xd, color=GRAY, lw=1.6, ls=(0, (5, 3)))
H = ((M[0] - M[1] + s2) / 2, (M[1] - M[0] + s2) / 2)                       # projection of M on x + y = sqrt2
assert abs(H[0] + H[1] - s2) < 1e-12 and abs(math.hypot(M[0] - H[0], M[1] - H[1]) - MH) < 1e-12
seg(ax, M, (s2, s2), ORANGE, 2.0); seg(ax, M, H, GRAY, 1.8, (0, (4, 2)))
pt(ax, (s2, s2), r"$F$", -0.3, 0.42); pt(ax, (-s2, -s2), r"$F'$", 0.3, -0.42); pt(ax, M, r"$M$", 0.42, 0.4, ms=6.5); pt(ax, H, r"$H$", -0.42, -0.4, col=GRAY, ms=4.5)
pt(ax, (1, 1), r"$S$", -0.33, -0.3, ms=4.5)
ax.text(3.7, -0.35, r"$x$", color=GRAY, fontsize=13); ax.text(-0.4, 4.0, r"$y$", color=GRAY, fontsize=13)
ax.text(3.45, -1.35, r"$D$", color=GRAY, fontsize=13)
ax.set_xlim(-4.4, 4.4); ax.set_ylim(-4.4, 4.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-con-inverse.svg")
print("ok")
