# Figures of the 3ème lessons (python scripts/lesson_figures_3eme.py).
# Kept apart from the other figure scripts so that running it only rewrites its own files.
# Requires: pip install numpy matplotlib
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


def arrow(ax, p, q, color, lw=2.0, ls="-", ms=14, z=3):
    ax.annotate("", xy=q, xytext=p, zorder=z,
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, ls=ls, mutation_scale=ms, shrinkA=0, shrinkB=0))


def dot(ax, p, name, off, color="black", fs=13, ms=5):
    ax.plot(*p, "o", color=color, ms=ms, zorder=6)
    if name:
        ax.annotate(name, p, xytext=off, textcoords="offset points", fontsize=fs, color=color, ha="center", va="center")


def axes_cross(ax, x0, x1, y0, y1):
    ax.plot([x0, x1], [0, 0], color="black", lw=0.8); ax.plot([0, 0], [y0, y1], color="black", lw=0.8)


# 1. cubique x^3 - 3x^2 + 2 : centre de symétrie, extrema, tangente au centre
fig, ax = plt.subplots(figsize=(7.2, 5.2))
x = np.linspace(-1.35, 3.35, 400); f = lambda t: t**3 - 3 * t**2 + 2
axes_cross(ax, -1.6, 3.7, -3.3, 4.6)
ax.plot(x, f(x), color=TEAL, lw=2.6)
t = np.linspace(0.2, 1.8, 10); ax.plot(t, -3 * (t - 1), color=GRAY, lw=1.4, ls="--")
ax.text(1.85, -2.55, r"tangente en $\Omega$ : $y=-3(x-1)$", color=GRAY, fontsize=11)
for px, py, lab, off in [(0, 2, r"max. local $(0\,;2)$", (62, 6)), (2, -2, r"min. local $(2\,;-2)$", (-68, -16))]:
    ax.plot([px, px], [0, py], color=GRAY, lw=0.9, ls=":"); ax.plot(px, py, "o", color="black", ms=5, zorder=6)
    ax.annotate(lab, (px, py), xytext=off, textcoords="offset points", fontsize=11, ha="center")
ax.plot(1, 0, "o", color=ORANGE, ms=9, zorder=7); ax.annotate(r"$\Omega(1\,;0)$ centre de symétrie", (1, 0), xytext=(40, 26), textcoords="offset points", color=ORANGE, fontsize=12, arrowprops=dict(arrowstyle="->", color=ORANGE))
for r in (1 - np.sqrt(3), 1, 1 + np.sqrt(3)): ax.plot(r, 0, "s", color="black", ms=4, zorder=6)
ax.text(-1.5, 4.1, r"$y=x^3-3x^2+2$", color=TEAL, fontsize=13, ha="left")
ax.set_xlim(-1.6, 3.7); ax.set_ylim(-3.3, 4.6); ax.set_aspect("equal"); ax.axis("off")
save(fig, "etude-cubique.svg")

# 2. x + 1/(x-1) : asymptotes verticale et oblique, centre I(1,1)
fig, ax = plt.subplots(figsize=(7.4, 5.6))
xl = np.linspace(-2.6, 0.72, 300); xr = np.linspace(1.28, 4.3, 300); g = lambda t: t + 1 / (t - 1)
axes_cross(ax, -2.9, 4.8, -5.2, 6.4)
ax.plot(xl, g(xl), color=TEAL, lw=2.6); ax.plot(xr, g(xr), color=TEAL, lw=2.6)
ax.plot([1, 1], [-5.2, 6.4], color=ORANGE, lw=1.3, ls="--"); ax.plot([-2.9, 4.8], [-2.9, 4.8], color=BLUE, lw=1.3, ls="--")
ax.text(1.08, 5.8, r"asymptote $x=1$", color=ORANGE, fontsize=11)
ax.text(2.7, 1.3, r"asymptote $y=x$", color=BLUE, fontsize=11, rotation=0)
ax.plot(1, 1, "o", color="black", ms=8, zorder=7); ax.annotate(r"$I(1\,;1)$", (1, 1), xytext=(30, -16), textcoords="offset points", fontsize=12)
for px, py, lab, off in [(0, -1, r"max. local $(0\,;-1)$", (-62, -14)), (2, 3, r"min. local $(2\,;3)$", (58, 10))]:
    ax.plot(px, py, "o", color="black", ms=5, zorder=6); ax.annotate(lab, (px, py), xytext=off, textcoords="offset points", fontsize=11, ha="center")
ax.text(1.6, -4.4, r"$y=x+\dfrac{1}{x-1}$", color=TEAL, fontsize=13)
ax.set_xlim(-2.9, 4.8); ax.set_ylim(-5.2, 6.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "etude-hyperbole-oblique.svg")

# 3. racine de x^2-2x-3 : deux demi-tangentes verticales, deux asymptotes obliques, axe x = 1
fig, ax = plt.subplots(figsize=(7.6, 4.8))
r = lambda t: np.sqrt(np.maximum(t**2 - 2 * t - 3, 0))
xa = np.linspace(-4.2, -1, 300); xb = np.linspace(3, 6.2, 300)
axes_cross(ax, -4.6, 6.7, -1.0, 5.8)
ax.plot(xa, r(xa), color=TEAL, lw=2.6); ax.plot(xb, r(xb), color=TEAL, lw=2.6)
xs = np.linspace(-4.4, 6.5, 10); ax.plot(xs, xs - 1, color=BLUE, lw=1.2, ls="--"); ax.plot(xs, 1 - xs, color=BLUE, lw=1.2, ls="--")
ax.plot([1, 1], [-1.0, 5.8], color=GRAY, lw=1.0, ls=":"); ax.text(1.1, 5.35, r"axe $x=1$", color=GRAY, fontsize=11)
for px in (-1, 3):
    ax.plot([px, px], [0, 1.6], color=ORANGE, lw=3.0, solid_capstyle="butt", zorder=5); ax.plot(px, 0, "o", color="black", ms=5, zorder=6)
ax.annotate("demi-tangente\nverticale", (3, 0.9), xytext=(4.3, 0.15), fontsize=11, color=ORANGE, arrowprops=dict(arrowstyle="->", color=ORANGE))
ax.annotate("demi-tangente\nverticale", (-1, 0.9), xytext=(-3.9, 0.15), fontsize=11, color=ORANGE, arrowprops=dict(arrowstyle="->", color=ORANGE))
ax.text(5.0, 4.9, r"$y=x-1$", color=BLUE, fontsize=12); ax.text(-4.35, 5.3, r"$y=1-x$", color=BLUE, fontsize=12)
ax.text(-1.0, -0.55, "$-1$", fontsize=12, ha="center"); ax.text(3.0, -0.55, "$3$", fontsize=12, ha="center")
ax.set_xlim(-4.6, 6.7); ax.set_ylim(-1.0, 5.8); ax.set_aspect("equal"); ax.axis("off")
save(fig, "etude-racine-asymptotes.svg")

# 4. sécantes qui tendent vers la tangente (y = x^2 en A(1,1))
fig, ax = plt.subplots(figsize=(7.4, 5.0))
xx = np.linspace(-0.6, 2.9, 300); ax.plot(xx, xx**2, color="black", lw=2.2)
axes_cross(ax, -0.9, 3.2, -1.4, 7.6)
xt = np.linspace(-0.3, 2.9, 10); ax.plot(xt, 2 * xt - 1, color=ORANGE, lw=2.8, zorder=4)
for h, col in [(1.4, "#9ca3af"), (0.8, "#6b7280"), (0.3, "#374151")]:
    xm = 1 + h; ym = xm**2; sl = (ym - 1) / h
    xs_ = np.linspace(0.1, xm + 0.5, 10); ax.plot(xs_, 1 + sl * (xs_ - 1), color=col, lw=1.3, zorder=3)
    ax.plot(xm, ym, "o", color=col, ms=6, zorder=6)
ax.plot(1, 1, "o", color="black", ms=8, zorder=7); ax.annotate(r"$A(a\,;f(a))$", (1, 1), xytext=(-44, 16), textcoords="offset points", fontsize=12)
ax.annotate(r"sécantes $(AM)$ : pente $\dfrac{f(a+h)-f(a)}{h}$", (2.4, 5.76), xytext=(-0.5, 6.7), fontsize=11, color=GRAY)
ax.text(2.35, 2.2, "tangente :\npente $f'(a)$", color=ORANGE, fontsize=12)
ax.set_xlim(-0.9, 3.2); ax.set_ylim(-1.4, 7.6); ax.axis("off")
save(fig, "derivee-secantes.svg")

# 5. demi-tangentes : points anguleux de |x^2-2x| et demi-tangente verticale de sqrt(x)
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.2), gridspec_kw={"width_ratios": [1.15, 1]})
x = np.linspace(-0.85, 2.85, 400); a1.plot(x, np.abs(x**2 - 2 * x), color=TEAL, lw=2.6)
axes_cross(a1, -1.1, 3.2, -0.5, 3.2)
for (x0, x1, base, sl, col) in [(0, 0.7, 0, 2, ORANGE), (-0.7, 0, 0, -2, BLUE), (1.3, 2, 2, -2, BLUE), (2, 2.7, 2, 2, ORANGE)]:
    xs_ = np.linspace(x0, x1, 5); a1.plot(xs_, sl * (xs_ - base), color=col, lw=3.0, zorder=5, solid_capstyle="butt")
a1.plot([0, 2], [0, 0], "o", color="black", ms=6, zorder=6)
a1.text(0.42, 1.6, r"$f'_d(0)=2$", color=ORANGE, fontsize=11, ha="center"); a1.text(-0.95, 1.5, r"$f'_g(0)=-2$", color=BLUE, fontsize=11)
a1.text(1.2, 1.55, r"$f'_g(2)=-2$", color=BLUE, fontsize=11, ha="center"); a1.text(2.55, 1.55, r"$f'_d(2)=2$", color=ORANGE, fontsize=11, ha="center")
a1.set_title(r"$f(x)=| x^2-2x|$ : deux points anguleux", fontsize=12)
a1.set_xlim(-1.1, 3.2); a1.set_ylim(-0.5, 3.2); a1.set_aspect("equal"); a1.axis("off")
x = np.linspace(0, 4.4, 400); a2.plot(x, np.sqrt(x), color=TEAL, lw=2.6)
axes_cross(a2, -0.5, 4.8, -0.5, 2.6)
a2.plot([0, 0], [0, 1.4], color=ORANGE, lw=3.0, solid_capstyle="butt", zorder=5); a2.plot(0, 0, "o", color="black", ms=6, zorder=6)
a2.annotate("demi-tangente\nverticale en $O$", (0, 0.8), xytext=(0.7, 1.9), fontsize=11, color=ORANGE, arrowprops=dict(arrowstyle="->", color=ORANGE))
a2.text(2.7, 0.6, r"$\dfrac{f(x)-f(0)}{x}=\dfrac{1}{\sqrt{x}}\to+\infty$", fontsize=11)
a2.set_title(r"$f(x)=\sqrt{x}$", fontsize=12)
a2.set_xlim(-0.5, 4.8); a2.set_ylim(-0.5, 2.6); a2.set_aspect("equal"); a2.axis("off")
fig.tight_layout(); save(fig, "derivee-demi-tangentes.svg")

# 6. angles associés sur le cercle trigonométrique
th = np.deg2rad(50); c, s = np.cos(th), np.sin(th)
fig, ax = plt.subplots(figsize=(6.6, 6.2))
t = np.linspace(0, 2 * np.pi, 400); ax.plot(np.cos(t), np.sin(t), color="black", lw=1.8)
axes_cross(ax, -1.4, 1.5, -1.3, 1.4)
pts = {"M": (c, s, r"$M(\theta)$", (14, 10), TEAL), "N": (-c, s, r"$N(\pi-\theta)$", (-26, 12), ORANGE),
       "P": (c, -s, r"$P(-\theta)$", (28, -12), BLUE), "Q": (-c, -s, r"$Q(\pi+\theta)$", (-26, -14), VIOLET)}
ax.plot([-c, c], [s, s], color=GRAY, lw=0.9, ls=":"); ax.plot([-c, c], [-s, -s], color=GRAY, lw=0.9, ls=":")
ax.plot([c, c], [-s, s], color=GRAY, lw=0.9, ls=":"); ax.plot([-c, -c], [-s, s], color=GRAY, lw=0.9, ls=":")
for k, (px, py, lab, off, col) in pts.items():
    ax.plot([0, px], [0, py], color=col, lw=1.2); dot(ax, (px, py), lab, off, color=col)
ax.add_patch(Arc((0, 0), 0.5, 0.5, theta1=0, theta2=50, color=TEAL, lw=1.6)); ax.text(0.3, 0.1, r"$\theta$", color=TEAL, fontsize=13)
ax.text(c, -0.12, r"$\cos\theta$", fontsize=11, ha="center", color=TEAL); ax.text(-c, -0.12, r"$-\cos\theta$", fontsize=11, ha="center", color=ORANGE)
ax.text(1.05, s, r"$\sin\theta$", fontsize=11, va="center", color=TEAL); ax.text(1.05, -s, r"$-\sin\theta$", fontsize=11, va="center", color=BLUE)
ax.set_xlim(-1.45, 1.75); ax.set_ylim(-1.3, 1.35); ax.set_aspect("equal"); ax.axis("off")
save(fig, "trigo-angles-associes.svg")

# 7. inéquation sin x >= 1/2 sur le cercle
fig, ax = plt.subplots(figsize=(6.6, 5.4))
t = np.linspace(0, 2 * np.pi, 400); ax.plot(np.cos(t), np.sin(t), color="black", lw=1.6)
axes_cross(ax, -1.4, 1.5, -1.3, 1.35)
a = np.linspace(np.pi / 6, 5 * np.pi / 6, 100); ax.plot(np.cos(a), np.sin(a), color=TEAL, lw=5.0, solid_capstyle="round", zorder=4)
ax.plot([-1.3, 1.3], [0.5, 0.5], color=ORANGE, lw=1.3, ls="--")
for ang, nm, off in [(np.pi / 6, r"$M\left(\frac{\pi}{6}\right)$", (36, -18)), (5 * np.pi / 6, r"$N\left(\frac{5\pi}{6}\right)$", (-40, -18))]:
    ax.plot([0, np.cos(ang)], [0, np.sin(ang)], color=GRAY, lw=1.0); dot(ax, (np.cos(ang), np.sin(ang)), nm, off)
ax.text(1.0, 0.56, r"$y=\frac{1}{2}$", color=ORANGE, fontsize=12)
ax.text(0, 1.12, r"$\sin x \geq \frac{1}{2}$", color=TEAL, fontsize=13, ha="center")
ax.set_xlim(-1.5, 1.7); ax.set_ylim(-1.3, 1.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "trigo-inequation.svg")

# 8. plan complexe : affixe, module, argument, conjugué
a, b = 2.2, 1.6; r = np.hypot(a, b); th = np.arctan2(b, a)
fig, ax = plt.subplots(figsize=(6.8, 5.4))
axes_cross(ax, -0.7, 3.5, -2.3, 2.5)
arrow(ax, (0, 0), (a, b), TEAL, lw=2.4); arrow(ax, (0, 0), (a, -b), BLUE, lw=1.8, ls="--")
ax.plot([a, a], [-b, b], color=GRAY, lw=0.9, ls=":"); ax.plot([0, a], [b, b], color=GRAY, lw=0.9, ls=":")
dot(ax, (a, b), r"$M(z)$", (24, 4), color=TEAL); dot(ax, (a, -b), r"$M'(\bar z)$", (30, -4), color=BLUE)
ax.add_patch(Arc((0, 0), 1.1, 1.1, theta1=0, theta2=np.degrees(th), color=ORANGE, lw=2)); ax.text(0.7, 0.16, r"$\theta=\arg z$", color=ORANGE, fontsize=12)
ax.text(0.8, 1.05, r"$r=| z|$", color=TEAL, fontsize=13, rotation=np.degrees(th) + 4)
ax.text(a, -0.3, r"$a=\mathrm{Re}\,z$", fontsize=12, ha="center"); ax.text(-0.15, b, r"$b$", fontsize=12, ha="right", va="center")
ax.text(a + 0.12, 0.3, r"$\mathrm{Im}\,z=b$", fontsize=11, color=GRAY)
ax.plot([1, 1], [-0.07, 0.07], color="black", lw=1.2); ax.text(1, -0.28, "$1$", fontsize=11, ha="center")
ax.plot([-0.07, 0.07], [1, 1], color="black", lw=1.2); ax.text(-0.14, 1, "$i$", fontsize=11, ha="right", va="center")
ax.text(3.45, -0.3, "axe réel", fontsize=10, ha="right", color=GRAY); ax.text(0.1, 2.35, "axe imaginaire", fontsize=10, color=GRAY)
ax.set_xlim(-0.8, 3.7); ax.set_ylim(-2.4, 2.6); ax.set_aspect("equal"); ax.axis("off")
save(fig, "complexes-plan.svg")

# 9. produit de deux complexes : les modules se multiplient, les arguments s'additionnent
z = np.array([np.sqrt(3), 1.0]); w = 1.5 * np.array([np.cos(np.pi / 3), np.sin(np.pi / 3)]); zw = np.array([0.0, 3.0])
fig, ax = plt.subplots(figsize=(7.6, 5.4))
axes_cross(ax, -0.5, 4.8, -0.4, 3.6)
arrow(ax, (0, 0), z, TEAL, lw=2.2); arrow(ax, (0, 0), w, BLUE, lw=2.2); arrow(ax, (0, 0), zw, ORANGE, lw=2.8)
dot(ax, z, r"$M(z)$", (28, -4), color=TEAL); dot(ax, w, r"$M'(z')$", (-40, 14), color=BLUE); dot(ax, zw, r"$P(zz')$", (38, 0), color=ORANGE)
for rad, ang, col in [(0.6, 30, TEAL), (0.9, 60, BLUE), (1.25, 90, ORANGE)]:
    ax.add_patch(Arc((0, 0), 2 * rad, 2 * rad, theta1=0, theta2=ang, color=col, lw=1.8))
ax.text(2.1, 3.1, r"$\lvert z\rvert=2,\ \arg z=\frac{\pi}{6}$".replace(r"\lvert", "|").replace(r"\rvert", "|"), color=TEAL, fontsize=13)
ax.text(2.1, 2.55, r"$|z'|=\frac{3}{2},\ \arg z'=\frac{\pi}{3}$", color=BLUE, fontsize=13)
ax.text(2.1, 2.0, r"$|zz'|=3,\ \arg zz'=\frac{\pi}{2}$", color=ORANGE, fontsize=13)
ax.text(2.1, 1.5, r"$\frac{\pi}{6}+\frac{\pi}{3}=\frac{\pi}{2}$", color=GRAY, fontsize=12)
ax.set_xlim(-0.9, 4.8); ax.set_ylim(-0.4, 3.6); ax.set_aspect("equal"); ax.axis("off")
save(fig, "complexes-produit.svg")


# 10. image d'un triangle par une rotation de centre Omega
def rot(p, c, a):
    d = np.array(p) - np.array(c); co, si = np.cos(a), np.sin(a)
    return np.array(c) + np.array([co * d[0] - si * d[1], si * d[0] + co * d[1]])
Om = np.array([0.0, 0.0]); ang = np.deg2rad(70)
T = {"A": np.array([2.2, 0.4]), "B": np.array([3.5, 1.1]), "C": np.array([2.9, 2.2])}
Tp = {k: rot(v, Om, ang) for k, v in T.items()}
fig, ax = plt.subplots(figsize=(6.6, 6.4))
for P, col in [(T, TEAL), (Tp, ORANGE)]:
    pts = np.array([P["A"], P["B"], P["C"], P["A"]]); ax.plot(pts[:, 0], pts[:, 1], color=col, lw=2.4); ax.fill(pts[:3, 0], pts[:3, 1], color=col, alpha=0.12)
for k in "ABC":
    ax.plot([0, T[k][0]], [0, T[k][1]], color=GRAY, lw=0.9, ls="--"); ax.plot([0, Tp[k][0]], [0, Tp[k][1]], color=GRAY, lw=0.9, ls="--")
    dot(ax, T[k], f"${k}$", (12, -10) if k != "C" else (10, 10), color=TEAL); dot(ax, Tp[k], f"${k}'$", (-12, 8) if k != "B" else (-14, 6), color=ORANGE)
dot(ax, (0, 0), r"$\Omega$", (-12, -12), color="black", ms=7)
ax.add_patch(Arc((0, 0), 1.7, 1.7, theta1=np.degrees(np.arctan2(T["A"][1], T["A"][0])), theta2=np.degrees(np.arctan2(T["A"][1], T["A"][0])) + 70, color=BLUE, lw=2))
ax.text(0.45, 1.05, r"$\theta=70^\circ$", color=BLUE, fontsize=12)
ax.set_xlim(-1.7, 4.2); ax.set_ylim(-0.8, 4.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "rotation-triangle.svg")

# 11. centre d'une rotation : intersection des médiatrices de [AA'] et [BB']
Om = np.array([2.0, -1.0]); A = np.array([5.0, -1.0]); B = np.array([5.0, 0.0]); Ap = rot(A, Om, np.pi / 2); Bp = rot(B, Om, np.pi / 2)
fig, ax = plt.subplots(figsize=(7.4, 5.6))
axes_cross(ax, -1.5, 6.6, -3.2, 4.0)
xs = np.linspace(-0.6, 6, 10); ax.plot(xs, xs - 3, color=BLUE, lw=1.5, ls="--"); xv = np.linspace(0.6, 3.6, 10); ax.plot(xv, 2 * xv - 5, color=VIOLET, lw=1.5, ls="--")
ax.text(5.3, 2.75, r"médiatrice de $[AA']$", color=BLUE, fontsize=11); ax.text(3.45, 2.7, r"médiatrice de $[BB']$", color=VIOLET, fontsize=11, ha="right")
for P, Q in [(A, Ap), (B, Bp)]: ax.plot([P[0], Q[0]], [P[1], Q[1]], color=GRAY, lw=1.0, ls=":")
for P in (A, Ap, B, Bp): ax.plot([Om[0], P[0]], [Om[1], P[1]], color=GRAY, lw=1.0)
for P, nm, off, col in [(A, "$A$", (12, -12), TEAL), (Ap, "$A'$", (-14, 8), ORANGE), (B, "$B$", (12, 8), TEAL), (Bp, "$B'$", (-14, 8), ORANGE)]: dot(ax, P, nm, off, color=col)
dot(ax, Om, r"$\Omega$", (-14, -14), color="black", ms=8)
ax.add_patch(Arc(tuple(Om), 1.1, 1.1, theta1=0, theta2=90, color=ORANGE, lw=2)); ax.text(2.75, -0.55, r"$\frac{\pi}{2}$", color=ORANGE, fontsize=12)
ax.set_xlim(-1.5, 6.9); ax.set_ylim(-3.2, 4.0); ax.set_aspect("equal"); ax.axis("off")
save(fig, "rotation-centre.svg")
print("ok")
