# Figures of the 4ème Maths "analyse" lessons (python scripts/lesson_figures_4m_analyse.py).
# Separate from lesson_figures_4m.py so that running it only rewrites its own files.
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Rectangle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


def cross(ax, x0, x1, y0, y1, lw=0.8):
    ax.plot([x0, x1], [0, 0], color="black", lw=lw, zorder=1); ax.plot([0, 0], [y0, y1], color="black", lw=lw, zorder=1)


def dot(ax, x, y, label=None, off=(0, 0), color="black", ms=5.5, fs=11.5, ha="center"):
    ax.plot([x], [y], "o", color=color, ms=ms, zorder=6)
    if label:
        ax.annotate(label, (x, y), xytext=off, textcoords="offset points", fontsize=fs, color=color, ha=ha, va="center",
                    bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.85), zorder=8)


# ------------------------------------------------------------------ 1. LOGARITHME
# left: graph of ln with its tangent at 1 ; right: ln x as an area under the hyperbola
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.6, 4.6), gridspec_kw={"width_ratios": [1.05, 1]})
xs = np.linspace(0.04, 5.2, 600)
cross(a1, -0.6, 5.6, -3.3, 2.4)
a1.plot(xs, np.log(xs), color=TEAL, lw=2.4, zorder=4)
a1.plot([0.1, 4.6], [0.1 - 1, 4.6 - 1], color=ORANGE, lw=1.6, ls="--", zorder=3)
assert abs(math.log(1) - 0) < 1e-12 and abs((math.e - 1) - 1.718281828) < 1e-6 and math.log(math.e) == 1.0
for t in np.linspace(0.05, 5.2, 400):
    assert math.log(t) <= t - 1 + 1e-12            # the inequality shown on the figure
a1.plot([0, math.e], [1, 1], color=GRAY, lw=0.9, ls=":", zorder=2); a1.plot([math.e, math.e], [0, 1], color=GRAY, lw=0.9, ls=":", zorder=2)
dot(a1, 1, 0, r"$1$", (0, -13), BLUE); dot(a1, math.e, 1, None, color=BLUE)
a1.annotate(r"$e$", (math.e, 0), xytext=(0, -13), textcoords="offset points", ha="center", fontsize=11.5, color=BLUE)
a1.annotate(r"$\ln e=1$", (0, 1), xytext=(-8, 0), textcoords="offset points", ha="right", va="center", fontsize=11.5, color=BLUE)
a1.text(3.55, 1.5, r"$y=\ln x$", color=TEAL, fontsize=13); a1.text(2.85, 2.18, r"$y=x-1$", color=ORANGE, fontsize=12.5, ha="right")
a1.text(0.12, -3.05, r"$x=0$ asymptote", color=GRAY, fontsize=10.5)
a1.set_xlim(-0.9, 5.7); a1.set_ylim(-3.4, 2.6); a1.axis("off")
a1.set_title(r"$\ln x \leq x-1$ : la courbe est sous sa tangente en $1$", fontsize=11.5, color="black", pad=4)

ts = np.linspace(1, 5.2, 500)
cross(a2, -0.4, 5.6, -0.35, 1.25)
tt = np.linspace(0.8, 5.4, 500)
a2.plot(tt, 1 / tt, color=VIOLET, lw=2.2, zorder=4)
ts2 = np.linspace(1, math.e, 300)
a2.fill_between(ts2, 0, 1 / ts2, color=TEAL, alpha=0.28, zorder=2)
a2.plot([1, 1], [0, 1], color=TEAL, lw=1.4); a2.plot([math.e, math.e], [0, 1 / math.e], color=TEAL, lw=1.4)
dot(a2, 1, 0, None); dot(a2, math.e, 0, None)
a2.annotate(r"$1$", (1, 0), xytext=(0, -12), textcoords="offset points", ha="center", fontsize=11.5)
a2.annotate(r"$x=e$", (math.e, 0), xytext=(0, -12), textcoords="offset points", ha="center", fontsize=11.5)
a2.text(1.62, 0.2, r"aire $=\ln x$" "\n" r"$=\ln e = 1$", color=TEAL, fontsize=12, ha="center", va="center")
a2.text(4.5, 0.47, r"$y=\dfrac{1}{t}$", color=VIOLET, fontsize=13)
a2.set_xlim(-0.5, 5.7); a2.set_ylim(-0.4, 1.3); a2.axis("off")
a2.set_title(r"$\ln x=\int_1^x \dfrac{dt}{t}$ : l'aire sous l'hyperbole", fontsize=11.5, color="black", pad=4)
fig.tight_layout(w_pad=2.0)
save(fig, "m4-ln-graphe.svg")

# ------------------------------------------------------------------ 2. FONCTION RECIPROQUE
f = lambda x: x ** 3 + x
fp = lambda x: 3 * x ** 2 + 1
assert f(1) == 2 and fp(1) == 4 and f(2) == 10 and fp(2) == 13        # f(1)=2, slope 4 ; the reciprocal has slope 1/4 at 2
fig, ax = plt.subplots(figsize=(6.6, 6.2))
L = 3.4
cross(ax, -L, L, -L, L, lw=0.6)
xx = np.linspace(-1.5, 1.5, 600); ok = (f(xx) > -L) & (f(xx) < L)
ax.plot(xx[ok], f(xx)[ok], color=TEAL, lw=2.4, zorder=4)
ax.plot(f(xx)[ok], xx[ok], color=ORANGE, lw=2.4, zorder=4)
ax.plot([-L, L], [-L, L], color=GRAY, lw=1.2, ls="--", zorder=2)
for (px, py, sl, col, hw) in ((1, 2, 4, TEAL, 0.36), (2, 1, 0.25, ORANGE, 1.05)):
    d = np.linspace(px - hw, px + hw, 2)
    ax.plot(d, py + sl * (d - px), color=col, lw=1.1, ls=(0, (4, 2)), zorder=3)
ax.annotate("", xy=(1.93, 1.07), xytext=(1.07, 1.93), arrowprops=dict(arrowstyle="<->", color=GRAY, lw=1.1))
dot(ax, 1, 2, r"$A(1,\,2)$", (-30, 8), TEAL, ms=6.5); dot(ax, 2, 1, r"$A'(2,\,1)$", (36, -10), ORANGE, ms=6.5)
ax.text(-0.35, 2.85, r"$\mathcal{C}_f$", color=TEAL, fontsize=14)
ax.text(-3.25, -0.8, r"$\mathcal{C}_{f^{-1}}$", color=ORANGE, fontsize=14)
ax.text(1.55, 3.0, r"$y=x$", color=GRAY, fontsize=12)
ax.text(0.28, 3.05, r"pente $4$", color=TEAL, fontsize=11.5)
ax.text(2.35, 1.42, r"pente $\frac{1}{4}$", color=ORANGE, fontsize=11.5)
ax.text(0.7, -3.05, r"$f(x)=x^3+x$", color="black", fontsize=12)
ax.set_xlim(-L, L); ax.set_ylim(-L, L); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-reciproque.svg")

# ------------------------------------------------------------------ 3. SOMMES DE RIEMANN
g = lambda x: x ** 2
n = 5
lower = sum(g(k / n) for k in range(0, n)) / n; upper = sum(g(k / n) for k in range(1, n + 1)) / n
assert abs(lower - 0.24) < 1e-12 and abs(upper - 0.44) < 1e-12 and lower < 1 / 3 < upper
fig, (b1, b2) = plt.subplots(1, 2, figsize=(10.4, 4.3))
xs = np.linspace(0, 1, 300)
for ax, side, col, title, val in ((b1, 0, ORANGE, "somme inférieure", lower), (b2, 1, TEAL, "somme supérieure", upper)):
    cross(ax, -0.1, 1.15, -0.08, 1.2, lw=0.7)
    for k in range(n):
        h = g((k + side) / n)
        ax.add_patch(Rectangle((k / n, 0), 1 / n, h, fc=col, alpha=0.28, ec=col, lw=1.3, zorder=2))
    ax.plot(xs, g(xs), color="black", lw=2.0, zorder=4)
    ax.text(0.5, 1.12, r"%s, $n=5$ : $%s$" % (title, ("%.2f" % val).replace(".", "{,}")), ha="center", fontsize=12.5, color=col)
    ax.text(0.2, 0.74, r"$y=x^2$", fontsize=12.5)
    for k in range(n + 1): ax.plot([k / n], [0], "|", color="black", ms=5)
    ax.annotate(r"$1$", (1, 0), xytext=(0, -12), textcoords="offset points", ha="center", fontsize=11)
    ax.set_xlim(-0.12, 1.18); ax.set_ylim(-0.12, 1.25); ax.set_aspect("equal"); ax.axis("off")
fig.suptitle(r"$0{,}24\ \leq\ \int_0^1 x^2\,dx=\dfrac{1}{3}\ \leq\ 0{,}44$", fontsize=14, y=0.04)
fig.tight_layout(rect=(0, 0.1, 1, 1))
save(fig, "m4-riemann.svg")

# ------------------------------------------------------------------ 4. SUITE RECURRENTE (escalier)
h = lambda x: math.sqrt(2 + x)
us = [0.0]
for _ in range(7): us.append(h(us[-1]))
assert abs(h(2) - 2) < 1e-12 and abs(us[-1] - 2) < 2e-3 and all(us[i] < us[i + 1] < 2 for i in range(7))
fig, ax = plt.subplots(figsize=(6.4, 5.9))
cross(ax, -0.2, 2.65, -0.2, 2.65, lw=0.6)
xs = np.linspace(0, 2.6, 300)
ax.plot(xs, np.sqrt(2 + xs), color=TEAL, lw=2.4, zorder=4)
ax.plot([0, 2.6], [0, 2.6], color=GRAY, lw=1.2, ls="--", zorder=2)
px, py = [us[0]], [0.0]
for i in range(6):
    px += [us[i], us[i + 1]]; py += [us[i + 1], us[i + 1]]
ax.plot(px, py, color=ORANGE, lw=1.5, zorder=5)
for i in range(4):
    ax.plot([us[i], us[i]], [0, us[i]] if i else [0, 0], color=ORANGE, lw=0.8, ls=":", zorder=3)
    ax.annotate(r"$u_%d$" % i, (us[i], 0), xytext=(0, -13), textcoords="offset points", ha="center", fontsize=11, color=ORANGE)
dot(ax, 2, 2, None, color=BLUE, ms=7)
ax.annotate(r"$\ell=2$", (2, 2), xytext=(26, -14), textcoords="offset points", ha="center", fontsize=12.5, color=BLUE)
ax.text(0.2, 2.35, r"$y=\sqrt{2+x}$", color=TEAL, fontsize=12.5); ax.text(2.0, 2.58, r"$y=x$", color=GRAY, fontsize=12)
ax.set_xlim(-0.35, 2.75); ax.set_ylim(-0.35, 2.75); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-suite-escalier.svg")

# ------------------------------------------------------------------ 5. PRIMITIVES : une famille de courbes translatees
fig, ax = plt.subplots(figsize=(6.4, 5.6))
cross(ax, -1.7, 4.4, -2.2, 6.6)
xs = np.linspace(-1.3, 3.9, 400)
for c in (-1, 0, 1, 2):
    F = lambda x, c=c: x * x - 2 * x + c
    assert abs(F(2) - c) < 1e-12 and abs((2 * 2 - 2) - 2) < 1e-12           # F_c(2)=c and F_c'(2)=2 for every c
    ax.plot(xs, F(xs), color=TEAL if c == 1 else "#9ca3af", lw=2.8 if c == 1 else 1.4, zorder=4 if c == 1 else 3)
    ax.plot([1.5, 2.5], [F(2) - 1.0, F(2) + 1.0], color=ORANGE, lw=1.4, zorder=5)   # tangent of slope 2 at x=2
    dot(ax, 2, F(2), None, color=ORANGE, ms=4.5)
    x0 = -1.25
    ax.annotate(rf"$F_{{{c}}}$", (x0, F(x0)), xytext=(-7, 0), textcoords="offset points", ha="right", va="center", fontsize=12,
                color=TEAL if c == 1 else GRAY)
ax.plot([2, 2], [-2.0, 3.6], color=GRAY, lw=0.9, ls=":", zorder=1)
ax.annotate(r"$x=2$", (2, -2.0), xytext=(0, -12), textcoords="offset points", ha="center", fontsize=11.5, color=GRAY)
ax.text(0.2, 6.15, r"$F_c(x)=x^2-2x+c$", color="black", fontsize=12.5)
ax.annotate("même pente $2$\nen $x=2$", (2.3, -0.4), xytext=(2.75, -1.55), fontsize=11.5, color=ORANGE, ha="left", va="center",
            arrowprops=dict(arrowstyle="-", color=ORANGE, lw=0.9))
dot(ax, 2, 1, r"$A(2\,;1)$", (28, -12), TEAL)
ax.set_xlim(-2.4, 4.7); ax.set_ylim(-2.4, 6.8); ax.axis("off")
save(fig, "m4-primitives-famille.svg")

# ------------------------------------------------------------------ 6. TVI + DICHOTOMIE : cos x = x
fig, (a1, a2) = plt.subplots(2, 1, figsize=(6.6, 6.4), gridspec_kw={"height_ratios": [1.55, 1]})
g = lambda x: np.cos(x) - x
xs = np.linspace(-0.05, 1.12, 400)
cross(a1, -0.12, 1.2, -0.62, 1.12)
a1.plot(xs, g(xs), color=TEAL, lw=2.5, zorder=4)
alpha = 0.7390851332151607
assert abs(math.cos(alpha) - alpha) < 1e-12 and g(0.0) > 0 > g(1.0)
dot(a1, 0, 1, r"$g(0)=1$", (0, 15), BLUE); dot(a1, 1, math.cos(1) - 1, r"$g(1)\approx-0{,}46$", (-10, -16), BLUE, ha="right")
dot(a1, alpha, 0, None, color=ORANGE, ms=7)
a1.annotate(r"$\alpha\approx 0{,}739$", (alpha, 0), xytext=(0, 16), textcoords="offset points", ha="center", fontsize=12, color=ORANGE)
a1.text(0.02, -0.5, r"$g(x)=\cos x-x$", fontsize=12.5, color=TEAL)
a1.set_xlim(-0.15, 1.2); a1.set_ylim(-0.7, 1.32); a1.axis("off")
a1.set_title("le théorème des valeurs intermédiaires : g change de signe, donc s'annule", fontsize=11.5, pad=2)

steps = [(0.0, 1.0), (0.5, 1.0), (0.5, 0.75), (0.625, 0.75), (0.6875, 0.75), (0.71875, 0.75)]
lo, hi = 0.0, 1.0
for k, (l, h) in enumerate(steps):
    assert abs(l - lo) < 1e-12 and abs(h - hi) < 1e-12 and l < alpha < h        # each bracket really contains the root
    m = (lo + hi) / 2
    if math.cos(lo) - lo > 0 and math.cos(m) - m > 0: lo = m
    elif math.cos(lo) - lo > 0 > math.cos(m) - m: hi = m
    y = -k
    a2.plot([l, h], [y, y], color=BLUE if k else GRAY, lw=5, solid_capstyle="butt", zorder=3)
    a2.annotate(rf"$[{l:.5g}\,;{h:.5g}]$".replace(".", "{,}"), (1.04, y), fontsize=10.5, va="center", color="black")
a2.plot([alpha, alpha], [-5.6, 0.6], color=ORANGE, lw=1.3, ls="--", zorder=2)
a2.set_xlim(-0.05, 1.45); a2.set_ylim(-5.7, 0.9); a2.axis("off")
a2.set_title("dichotomie : on coupe l'intervalle en deux à chaque pas", fontsize=11.5, pad=2)
save(fig, "m4-tvi-dichotomie.svg")

# ------------------------------------------------------------------ 7. SECANTES -> TANGENTE
fig, ax = plt.subplots(figsize=(6.4, 5.2))
cross(ax, -0.3, 2.9, -0.45, 4.3)
xs = np.linspace(-0.2, 2.2, 300)
ax.plot(xs, xs * xs, color=TEAL, lw=2.6, zorder=4)
for h in (1.0, 0.5, 0.2):
    slope = ((1 + h) ** 2 - 1) / h
    assert abs(slope - (2 + h)) < 1e-12                                          # slope of the secant = 2 + h
    xx = np.array([0.35, 2.1])
    ax.plot(xx, 1 + slope * (xx - 1), color="#9ca3af", lw=1.3, zorder=3)
    dot(ax, 1 + h, (1 + h) ** 2, None, color="#9ca3af", ms=4.5)
ax.plot([0.3, 2.3], [1 + 2 * (0.3 - 1), 1 + 2 * (2.3 - 1)], color=ORANGE, lw=2.2, zorder=5)
dot(ax, 1, 1, r"$A(1\,;1)$", (-34, 12), "black")
ax.annotate(r"pente $3$", (2.0, 4.0), xytext=(1.8, 4.2), fontsize=11.5, color=GRAY, va="center", ha="right", arrowprops=dict(arrowstyle="-", color=GRAY, lw=0.8))
ax.annotate(r"pente $2{,}5$", (1.5, 2.25), xytext=(0.3, 2.95), fontsize=11.5, color=GRAY, va="center", arrowprops=dict(arrowstyle="-", color=GRAY, lw=0.8))
ax.annotate(r"pente $2{,}2$", (1.2, 1.44), xytext=(1.5, 0.3), fontsize=11.5, color=GRAY, va="center", arrowprops=dict(arrowstyle="-", color=GRAY, lw=0.8))
ax.text(2.35, 3.28, r"tangente" "\n" r"pente $f'(1)=2$", color=ORANGE, fontsize=12, va="center")
ax.text(0.1, 3.95, r"$f(x)=x^2$", color=TEAL, fontsize=13)
ax.set_xlim(-0.4, 3.35); ax.set_ylim(-0.55, 4.5); ax.axis("off")
save(fig, "m4-secantes-tangente.svg")
print("ok")
