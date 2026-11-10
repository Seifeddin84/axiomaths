# Figures of the 4ème Maths lesson "Fonctions exponentielles" (python scripts/lesson_figures_4m_exp.py).
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
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


# ------------------------------------------------------------------ 1. exp and ln, mirror images ; family a^x
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.7), gridspec_kw={"width_ratios": [1.05, 1]})
cross(a1, -3.2, 4.4, -3.2, 4.4)
xs = np.linspace(-3.1, 1.6, 500); ys = np.linspace(0.05, 4.2, 500)
a1.plot([-3, 4.2], [-3, 4.2], color=GRAY, lw=1.0, ls=(0, (5, 3)), zorder=2)
a1.plot(xs, np.exp(xs), color=TEAL, lw=2.4, zorder=4)
a1.plot(ys, np.log(ys), color=VIOLET, lw=2.4, zorder=4)
a1.plot([-1.6, 1.0], [-0.6, 2.0], color=ORANGE, lw=1.5, ls="--", zorder=3)           # tangent y = x + 1 at 0
assert abs(math.exp(0) - 1) < 1e-12 and abs(math.exp(1) - math.e) < 1e-12 and abs(math.log(math.exp(1.3)) - 1.3) < 1e-12
for x in np.linspace(-3, 3, 400):
    assert math.exp(x) >= x + 1 - 1e-12                                               # the curve is above its tangent at 0
for (px, py, lab, off) in [(0, 1, r"$(0,1)$", (22, 8)), (1, math.e, r"$(1,e)$", (-24, 10))]:
    dot(a1, px, py, lab, off, TEAL)
for (px, py, lab, off) in [(1, 0, r"$(1,0)$", (0, -13)), (math.e, 1, r"$(e,1)$", (14, -11))]:
    dot(a1, px, py, lab, off, VIOLET)
a1.text(-3.05, 0.45, r"$y=e^x$", color=TEAL, fontsize=13); a1.text(3.0, 1.95, r"$y=\ln x$", color=VIOLET, fontsize=13)
a1.text(-3.15, 2.05, "tangente en $0$ :\n" r"$y=x+1$", color=ORANGE, fontsize=11.5, ha="left", va="center")
a1.text(3.65, 3.25, r"$y=x$", color=GRAY, fontsize=12)
a1.set_xlim(-3.3, 4.6); a1.set_ylim(-3.3, 4.6); a1.set_aspect("equal"); a1.axis("off")
a1.set_title(r"$\exp$ et $\ln$ : images l'une de l'autre dans la symétrie d'axe $y=x$", fontsize=11.2, pad=4)

cross(a2, -3.4, 2.7, -0.5, 10.4)
xs = np.linspace(-3.1, 2.05, 500)
for a, col in [(0.5, VIOLET), (2, BLUE), (math.e, TEAL), (3, ORANGE)]:
    a2.plot(xs, a ** xs, color=col, lw=2.1, zorder=4)
a2.text(-2.35, 7.3, r"$(1/2)^x$", color=VIOLET, fontsize=12.5)
a2.text(2.12, 9.0, r"$3^x$", color=ORANGE, fontsize=12.5, va="center")
a2.text(2.12, 7.35, r"$e^x$", color=TEAL, fontsize=12.5, va="center")
a2.text(2.12, 4.0, r"$2^x$", color=BLUE, fontsize=12.5, va="center")
assert abs(0.5 ** -3 - 8) < 1e-12 and abs(2 ** 2 - 4) < 1e-12 and abs(3 ** 2 - 9) < 1e-12 and abs(math.e ** 2 - 7.389) < 1e-3
dot(a2, 0, 1, r"$(0,1)$", (22, -12))
a2.set_xlim(-3.4, 2.9); a2.set_ylim(-0.7, 10.2); a2.axis("off")
a2.set_title(r"$a^x=e^{x\ln a}$ : toutes passent par $(0,1)$", fontsize=11.2, pad=4)
save(fig, "m4-exp-graphe.svg")

# ------------------------------------------------------------------ 2. who wins: e^x or x^3 ?
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.5), gridspec_kw={"width_ratios": [1.05, 1]})


def bisect(f, lo, hi):
    for _ in range(80):
        mid = (lo + hi) / 2
        if f(lo) * f(mid) <= 0: hi = mid
        else: lo = mid
    return (lo + hi) / 2


f = lambda x: math.exp(x) - x ** 3
r1, r2 = bisect(f, 1.0, 3.0), bisect(f, 3.0, 6.0)
assert abs(r1 - 1.8571) < 1e-3 and abs(r2 - 4.5364) < 1e-3
assert f(3) < 0 and f(5) > 0 and f(1) > 0 and abs(math.exp(4) - 54.598) < 1e-3 and 4 ** 3 == 64

xs = np.linspace(0, 5.3, 600)
cross(a1, -0.25, 5.6, -14, 215)
a1.plot(xs, np.exp(xs), color=TEAL, lw=2.5, zorder=4)
a1.plot(xs, xs ** 3, color=ORANGE, lw=2.3, zorder=4)
a1.plot(xs, xs ** 2, color=VIOLET, lw=1.8, zorder=3)
xx = np.linspace(r1, r2, 200)
a1.fill_between(xx, np.exp(xx), xx ** 3, color=ORANGE, alpha=0.22, zorder=2)
for r in (r1, r2):
    dot(a1, r, math.exp(r), None)
    a1.plot([r, r], [0, math.exp(r)], color=GRAY, lw=0.8, ls=":")
    a1.annotate(rf"$x\approx{r:.2f}$", (r, 0), xytext=(0, -14), textcoords="offset points", ha="center", fontsize=11)
a1.text(5.32, 200, r"$e^x$", color=TEAL, fontsize=14, va="center")
a1.text(5.32, 148, r"$x^3$", color=ORANGE, fontsize=13, va="center")
a1.text(5.32, 28, r"$x^2$", color=VIOLET, fontsize=13, va="center")
a1.annotate(r"$x^3$ devant $e^x$", (3.2, 30), xytext=(2.45, 112), fontsize=11, color=ORANGE, ha="center",
            arrowprops=dict(arrowstyle="->", color=ORANGE, lw=1.1))
a1.set_xlim(-0.4, 5.95); a1.set_ylim(-34, 222); a1.axis("off")
a1.set_title(r"$e^x$ perd contre $x^3$ entre ces deux points", fontsize=11.5, pad=4)

q = lambda x: math.exp(x) / x ** 3
xs = np.linspace(0.95, 8.2, 600)
cross(a2, 0.4, 8.8, -0.35, 6.3)
a2.plot(xs, np.exp(xs) / xs ** 3, color=TEAL, lw=2.5, zorder=4)
a2.plot([0.6, 8.6], [1, 1], color=GRAY, lw=1.0, ls=":")
assert abs(q(3) - 0.7439) < 1e-3 and all(q(3) <= q(x) + 1e-12 for x in np.linspace(0.9, 9, 500))   # minimum at x = 3
assert q(r1) > 0.999 and abs(q(r1) - 1) < 1e-6 and abs(q(r2) - 1) < 1e-6 and q(10) > 22 and q(8) > 5.8
dot(a2, 3, q(3), r"minimum $\approx 0{,}74$ en $x=3$", (0, -17), ORANGE)
a2.text(0.62, 1.12, r"$1$", color=GRAY, fontsize=11)
a2.text(6.55, 4.5, r"tend vers $+\infty$", color=TEAL, fontsize=11.5, ha="center")
for xt in (2, 4, 6, 8):
    a2.annotate(rf"${xt}$", (xt, 0), xytext=(0, -11), textcoords="offset points", ha="center", fontsize=10.5)
a2.set_xlim(0.2, 9.0); a2.set_ylim(-0.75, 6.5); a2.axis("off")
a2.set_title(r"le rapport $\dfrac{e^x}{x^3}$ : sous $1$ seulement entre les deux points", fontsize=11.2, pad=4)
save(fig, "m4-exp-croissance.svg")

# ------------------------------------------------------------------ 3. two studies : x e^{-x}  and  e^x/(e^x+1)
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.3), gridspec_kw={"width_ratios": [1.1, 1]})
g = lambda x: x * math.exp(-x)
xs = np.linspace(-1.6, 7.0, 600)
cross(a1, -1.8, 7.3, -0.3, 0.55)
a1.plot(xs, xs * np.exp(-xs), color=TEAL, lw=2.4, zorder=4)
assert abs(g(1) - 1 / math.e) < 1e-12 and abs(g(2) - 2 * math.exp(-2)) < 1e-12 and abs(1 / math.e - 0.3679) < 1e-4 and abs(2 * math.exp(-2) - 0.2707) < 1e-4
# g' = (1-x)e^{-x}, g'' = (x-2)e^{-x} : maximum at 1, inflection at 2
h = 1e-5
assert abs((g(1 + h) - g(1 - h)) / (2 * h)) < 1e-8
assert abs((g(2 + h) - 2 * g(2) + g(2 - h)) / h ** 2) < 1e-4
assert all(g(1) >= g(x) for x in np.linspace(-1.6, 7, 500))
dot(a1, 1, g(1), r"max $\left(1,\ \frac{1}{e}\right)$", (62, 12), TEAL)
dot(a1, 2, g(2), r"inflexion $\left(2,\ \frac{2}{e^2}\right)$", (70, 6), ORANGE)
a1.plot([1, 1], [0, g(1)], color=GRAY, lw=0.8, ls=":"); a1.plot([2, 2], [0, g(2)], color=GRAY, lw=0.8, ls=":")
a1.annotate(r"$1$", (1, 0), xytext=(0, -11), textcoords="offset points", ha="center", fontsize=11); a1.annotate(r"$2$", (2, 0), xytext=(0, -11), textcoords="offset points", ha="center", fontsize=11)
a1.text(5.9, 0.115, r"$y=0$ asymptote", color=GRAY, fontsize=10.5, ha="center")
a1.set_xlim(-1.9, 7.4); a1.set_ylim(-0.34, 0.6); a1.axis("off")
a1.set_title(r"$f(x)=xe^{-x}$", fontsize=11.5, pad=4)

s = lambda x: math.exp(x) / (math.exp(x) + 1)
xs = np.linspace(-6.2, 6.2, 600)
cross(a2, -6.5, 6.8, -0.12, 1.25)
a2.plot(xs, np.exp(xs) / (np.exp(xs) + 1), color=VIOLET, lw=2.4, zorder=4)
for x in np.linspace(-6, 6, 200):
    assert abs(s(-x) - (1 - s(x))) < 1e-12                                  # centre of symmetry (0, 1/2)
a2.plot([-6.4, 6.4], [1, 1], color=GRAY, lw=0.9, ls=":"); a2.plot([-6.4, 6.4], [0, 0], color=GRAY, lw=0.9, ls=":")
dot(a2, 0, 0.5, r"$\left(0,\ \frac{1}{2}\right)$", (30, -14), ORANGE)
a2.text(-6.2, 1.07, r"$y=1$", color=GRAY, fontsize=10.5)
a2.text(2.0, 0.28, r"$y=\dfrac{e^x}{e^x+1}$", color=VIOLET, fontsize=13)
a2.set_xlim(-6.7, 6.9); a2.set_ylim(-0.17, 1.28); a2.axis("off")
a2.set_title(r"une courbe en S : la croissance qui sature", fontsize=11.5, pad=4)
save(fig, "m4-exp-etude.svg")
print("ok")
