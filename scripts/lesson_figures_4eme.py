# Figures of the 4ème lessons (python scripts/lesson_figures_4eme.py).
# Kept apart from the other figure scripts so that running it only rewrites its own files.
# Requires: pip install numpy matplotlib
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


def axes_cross(ax, x0, x1, y0, y1):
    ax.plot([x0, x1], [0, 0], color="black", lw=0.8); ax.plot([0, 0], [y0, y1], color="black", lw=0.8)


def pt(ax, p, label=None, off=(0, 0), color="black", ms=5, fs=11, ha="center"):
    ax.plot(*p, "o", color=color, ms=ms, zorder=6)
    if label:
        ax.annotate(label, p, xytext=off, textcoords="offset points", fontsize=fs, color=color, ha=ha, va="center",
                    bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.85), zorder=8)


# 1. (2x^2+x+2)/(x+2) : asymptote verticale x=-2, asymptote oblique y=2x-3, extrema, centre I(-2,-7)
fig, ax = plt.subplots(figsize=(7.2, 5.6))
f = lambda t: (2 * t**2 + t + 2) / (t + 2)
xl = np.linspace(-7.2, -2.18, 400); xr = np.linspace(-1.82, 3.4, 400)
axes_cross(ax, -7.6, 3.8, -24, 11)
ax.plot([-2, -2], [-24, 11], color=ORANGE, lw=1.3, ls="--")
xs = np.array([-7.6, 3.8]); ax.plot(xs, 2 * xs - 3, color=BLUE, lw=1.3, ls="--")
ax.plot(xl, f(xl), color=TEAL, lw=2.6); ax.plot(xr, f(xr), color=TEAL, lw=2.6)
ax.text(-2.15, 9.2, r"asymptote $x=-2$", color=ORANGE, fontsize=11, ha="right")
ax.text(0.6, -4.2, r"asymptote $y=2x-3$", color=BLUE, fontsize=11, rotation=0)
pt(ax, (-4, -15), r"max. local $(-4\,;-15)$", (0, 17), ha="center"); pt(ax, (0, 1), r"min. local $(0\,;1)$", (52, -16))
pt(ax, (-2, -7), r"$I(-2\,;-7)$", (-34, 12), color=ORANGE, ms=8)
ax.text(1.4, 7.2, r"$y=\dfrac{2x^2+x+2}{x+2}$", color=TEAL, fontsize=13)
ax.set_xlim(-7.6, 3.8); ax.set_ylim(-24, 11); ax.axis("off")
save(fig, "eco-asymptote-oblique.svg")

# 2. (x^2+1)/(x^2-4) : fonction paire, asymptotes x=+-2 et y=1
fig, ax = plt.subplots(figsize=(7.2, 4.8))
g = lambda t: (t**2 + 1) / (t**2 - 4)
xa = np.linspace(-6.4, -2.14, 300); xb = np.linspace(-1.86, 1.86, 300); xc = np.linspace(2.14, 6.4, 300)
axes_cross(ax, -6.8, 6.8, -4.6, 5.2)
for v in (-2, 2): ax.plot([v, v], [-4.6, 5.2], color=ORANGE, lw=1.3, ls="--")
ax.plot([-6.8, 6.8], [1, 1], color=BLUE, lw=1.3, ls="--")
for seg in (xa, xb, xc): ax.plot(seg, g(seg), color=TEAL, lw=2.6)
ax.text(2.15, -3.9, r"$x=2$", color=ORANGE, fontsize=11); ax.text(-2.15, -3.9, r"$x=-2$", color=ORANGE, fontsize=11, ha="right")
ax.text(4.8, 0.45, r"$y=1$", color=BLUE, fontsize=11)
pt(ax, (0, -0.25), r"$\left(0\,;-\frac{1}{4}\right)$", (0, -19), fs=11)
ax.text(-6.4, -3.7, r"$y=\dfrac{x^2+1}{x^2-4}$", color=TEAL, fontsize=13)
ax.set_xlim(-6.8, 6.8); ax.set_ylim(-4.6, 5.2); ax.axis("off")
save(fig, "eco-rationnelle-paire.svg")

# 3. x^3-6x^2+9x : extrema (1,4) et (3,0), centre de symétrie (2,2), tangente d'inflexion
fig, ax = plt.subplots(figsize=(6.8, 5.6))
p = lambda t: t**3 - 6 * t**2 + 9 * t
x = np.linspace(-0.62, 4.45, 400)
axes_cross(ax, -1.0, 4.9, -10.5, 9.5)
ax.plot(x, p(x), color=TEAL, lw=2.6)
t = np.linspace(0.9, 3.1, 10); ax.plot(t, -3 * (t - 2) + 2, color=GRAY, lw=1.4, ls="--")
ax.text(0.15, 6.3, r"tangente en $I$", color=GRAY, fontsize=11)
pt(ax, (1, 4), r"max. local $(1\,;4)$", (-6, 14), ha="right"); pt(ax, (3, 0), r"min. local $(3\,;0)$", (4, -20), ha="left")
pt(ax, (2, 2), None, color=ORANGE, ms=8)
ax.annotate(r"$I(2\,;2)$ centre de symétrie", (2, 2), xytext=(2, -4.2), fontsize=12, color=ORANGE, ha="center", arrowprops=dict(arrowstyle="->", color=ORANGE))
for px, py in ((1, 4), (3, 0)): ax.plot([px, px], [0, py], color=GRAY, lw=0.9, ls=":")
ax.text(0.2, 8.4, r"$y=x^3-6x^2+9x$", color=TEAL, fontsize=13)
ax.set_xlim(-1.0, 4.9); ax.set_ylim(-10.5, 9.5); ax.axis("off")
save(fig, "eco-polynome-cubique.svg")

# 4. racine de x^2-9 : demi-tangentes verticales en +-3, asymptotes y=x et y=-x
fig, ax = plt.subplots(figsize=(7.4, 4.4))
r = lambda t: np.sqrt(np.maximum(t**2 - 9, 0))
xa = np.linspace(-8.6, -3, 300); xb = np.linspace(3, 8.6, 300)
axes_cross(ax, -9.2, 9.2, -1.3, 8.8)
xs = np.array([-9.0, 9.0]); ax.plot(xs, xs, color=BLUE, lw=1.2, ls="--"); ax.plot(xs, -xs, color=BLUE, lw=1.2, ls="--")
ax.plot(xa, r(xa), color=TEAL, lw=2.6); ax.plot(xb, r(xb), color=TEAL, lw=2.6)
for px in (-3, 3):
    ax.plot([px, px], [0, 1.7], color=ORANGE, lw=3.0, solid_capstyle="butt", zorder=5); ax.plot(px, 0, "o", color="black", ms=5, zorder=6)
ax.annotate("demi-tangente\nverticale", (3, 1.0), xytext=(4.6, 0.55), fontsize=11, color=ORANGE, arrowprops=dict(arrowstyle="->", color=ORANGE))
ax.text(6.2, 7.6, r"$y=x$", color=BLUE, fontsize=11); ax.text(-7.3, 7.6, r"$y=-x$", color=BLUE, fontsize=11)
ax.text(0.5, 6.4, r"$y=\sqrt{x^2-9}$", color=TEAL, fontsize=13)
ax.set_xlim(-9.2, 9.2); ax.set_ylim(-1.3, 8.8); ax.set_aspect("equal"); ax.axis("off")
save(fig, "eco-racine.svg")

# 5. sin(2x) : étude sur [0, pi/2], le reste s'en déduit par symétrie et périodicité
fig, ax = plt.subplots(figsize=(7.6, 3.8))
x = np.linspace(-np.pi, np.pi, 800); s = lambda t: np.sin(2 * t)
axes_cross(ax, -3.5, 3.5, -1.5, 1.6)
ax.plot(x, s(x), color=TEAL, lw=1.8, alpha=0.45)
xe = np.linspace(0, np.pi / 2, 200); ax.plot(xe, s(xe), color=TEAL, lw=3.4)
ax.axvspan(0, np.pi / 2, color=ORANGE, alpha=0.10, lw=0)
pt(ax, (np.pi / 4, 1), r"$\left(\frac{\pi}{4}\,;1\right)$", (0, 14))
ax.annotate("", xy=(np.pi, -1.25), xytext=(0, -1.25), arrowprops=dict(arrowstyle="<->", color=GRAY, lw=1.2))
ax.text(np.pi / 2, -1.43, r"période $\pi$", ha="center", fontsize=11, color=GRAY)
ax.text(np.pi / 4, -0.62, "étudiée sur\n" r"$[0\,;\pi/2]$", ha="center", va="center", fontsize=11, color=ORANGE)
for v, lab in ((np.pi / 2, r"$\pi/2$"), (np.pi, r"$\pi$"), (-np.pi / 2, r"$-\pi/2$"), (-np.pi, r"$-\pi$")):
    ax.plot([v, v], [-0.05, 0.05], color="black", lw=0.8); ax.text(v, 0.16 if v > 0 else -0.3, lab, ha="center", fontsize=11)
ax.text(-3.4, 1.35, r"$y=\sin 2x$", color=TEAL, fontsize=13)
ax.set_xlim(-3.5, 3.5); ax.set_ylim(-1.55, 1.6); ax.axis("off")
save(fig, "eco-sinus-2x.svg")

# 6. coût moyen et coût marginal de C(x) = x^3 + 20x + 128 : ils se coupent au minimum du coût moyen
fig, ax = plt.subplots(figsize=(7.0, 5.0))
x = np.linspace(1.0, 7.9, 300)
axes_cross(ax, -0.4, 8.4, -14, 230)
ax.plot(x, x**2 + 20 + 128 / x, color=TEAL, lw=2.6); ax.plot(x, 3 * x**2 + 20, color=VIOLET, lw=2.6)
ax.plot([4, 4], [0, 68], color=GRAY, lw=0.9, ls=":"); ax.plot([0, 4], [68, 68], color=GRAY, lw=0.9, ls=":")
pt(ax, (4, 68), r"$(4\,;68)$", (36, -14), color=ORANGE, ms=9)
ax.text(-0.3, 76, "68", fontsize=11, color=GRAY, ha="right"); ax.text(4, -16, "4", fontsize=11, color=GRAY, ha="center")
ax.text(1.1, 172, r"coût moyen $C_M$", color=TEAL, fontsize=12, ha="left"); ax.text(5.3, 194, r"coût marginal $C'$", color=VIOLET, fontsize=12, ha="center")
ax.set_xlim(-0.8, 8.4); ax.set_ylim(-24, 232); ax.axis("off")
save(fig, "eco-cout-moyen.svg")

# 7. réciproque de sqrt(x^2-9) sur [3,+inf[ : symétrie par rapport à y=x, tangentes horizontale / verticale échangées
fig, ax = plt.subplots(figsize=(6.4, 6.0))
x = np.linspace(3, 9.3, 300); u = np.linspace(0, 9.3, 300)
axes_cross(ax, -0.9, 9.7, -0.9, 9.7)
ax.plot([-0.9, 9.5], [-0.9, 9.5], color=GRAY, lw=1.2, ls="--"); ax.text(1.9, 0.9, r"$y=x$", color=GRAY, fontsize=11)
ax.plot(x, np.sqrt(x**2 - 9), color=TEAL, lw=2.6); ax.plot(u, np.sqrt(u**2 + 9), color=VIOLET, lw=2.6)
ax.plot([3, 3], [0, 1.5], color=ORANGE, lw=3.0, solid_capstyle="butt", zorder=5); ax.plot([0, 1.5], [3, 3], color=ORANGE, lw=3.0, solid_capstyle="butt", zorder=5)
pt(ax, (3, 0)); pt(ax, (0, 3))
ax.plot([5, 4], [4, 5], ":", color=GRAY, lw=0.9)
t = np.linspace(3.5, 6.5, 5); ax.plot(t, 4 + 1.25 * (t - 5), color=TEAL, lw=1.1, ls="--", alpha=0.8)
t = np.linspace(2.0, 6.0, 5); ax.plot(t, 5 + 0.8 * (t - 4), color=VIOLET, lw=1.1, ls="--", alpha=0.8)
pt(ax, (5, 4), r"$A(5\,;4)$", (26, -12), color=TEAL); pt(ax, (4, 5), r"$A'(4\,;5)$", (-30, 12), color=VIOLET)
ax.text(7.2, 5.2, r"$\mathcal{C}_f$", color=TEAL, fontsize=14); ax.text(2.1, 7.7, r"$\mathcal{C}_{f^{-1}}$", color=VIOLET, fontsize=14)
ax.set_xlim(-0.9, 9.7); ax.set_ylim(-0.9, 9.7); ax.set_aspect("equal"); ax.axis("off")
save(fig, "eco-reciproque.svg")
print("ok")
