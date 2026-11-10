# Figures of the 4ème Maths lesson "Équations différentielles" (python scripts/lesson_figures_4m_ed.py).
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


def dot(ax, x, y, label=None, off=(0, 0), color="black", ms=5.5, fs=11.5, ha="center"):
    ax.plot([x], [y], "o", color=color, ms=ms, zorder=6)
    if label:
        ax.annotate(label, (x, y), xytext=off, textcoords="offset points", fontsize=fs, color=color, ha=ha, va="center",
                    bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.85), zorder=8)


def ode_residual(f, a, b, xs):
    """max |f' - (a f + b)| for f given as a vectorised function, using a centred difference."""
    h = 1e-6
    return float(np.max(np.abs((f(xs + h) - f(xs - h)) / (2 * h) - (a * f(xs) + b))))


# ------------------------------------------------------------------ 1. slope fields : y' = -2y + 6 (stable) and y' = 2y - 6 (unstable)
fig, axes = plt.subplots(1, 2, figsize=(10.8, 4.5))
X0, X1, Y0, Y1 = 0.0, 3.0, -1.0, 7.0
xs = np.linspace(X0, X1, 400)
for ax, a, b, title, curves in [
    (axes[0], -2.0, 6.0, r"$y'=-2y+6$ : toutes les solutions se rapprochent de $3$",
     [(3 - 3 * np.exp(-2 * xs), TEAL), (3 - 2 * np.exp(-2 * xs), ORANGE), (3 + 2 * np.exp(-2 * xs), TEAL), (3 + 3 * np.exp(-2 * xs), TEAL)]),
    (axes[1], 2.0, -6.0, r"$y'=2y-6$ : toutes (sauf une) s'éloignent de $3$",
     [(3 - 0.8 * np.exp(2 * xs), TEAL), (3 - 0.3 * np.exp(2 * xs), TEAL), (3 + 0.3 * np.exp(2 * xs), TEAL), (3 + 0.8 * np.exp(2 * xs), TEAL)]),
]:
    gx, gy = np.meshgrid(np.arange(0.15, X1, 0.3), np.arange(-0.8, Y1, 0.55))
    m = a * gy + b
    n = np.hypot(1, m)
    ax.quiver(gx, gy, 1 / n * 0.2, m / n * 0.2, angles="xy", scale_units="xy", scale=1, pivot="mid",
              headwidth=0, headlength=0, headaxislength=0, width=0.0035, color="#9ca3af", zorder=2)
    ax.axhline(3, color=BLUE, lw=1.6, ls=(0, (5, 3)), zorder=3)
    for y, col in curves:
        keep = (y > Y0) & (y < Y1)
        ax.plot(xs[keep], y[keep], color=col, lw=2.3 if col == ORANGE else 1.9, zorder=4)
    ax.plot([0, 0], [Y0, Y1], color="black", lw=0.8, zorder=1)
    ax.set_xlim(X0 - 0.05, X1); ax.set_ylim(Y0, Y1)
    ax.set_xlabel(r"$x$"); ax.set_xticks([0, 1, 2, 3]); ax.set_yticks([0, 1, 2, 3, 4, 5, 6])
    ax.set_title(title, fontsize=11.2, pad=6)
    ax.text(X1 - 0.05, 3.3, r"solution constante $y=3$", color=BLUE, fontsize=10.5, ha="right")
# maths asserts (on the exact formulas used above)
for C in (-3, -2, 2, 3):
    assert ode_residual(lambda t, C=C: 3 + C * np.exp(-2 * t), -2.0, 6.0, np.linspace(0, 3, 50)) < 1e-6
for C in (-0.8, -0.3, 0.3, 0.8):
    assert ode_residual(lambda t, C=C: 3 + C * np.exp(2 * t), 2.0, -6.0, np.linspace(0, 3, 50)) < 1e-5
assert abs((3 - 2 * math.exp(0)) - 1) < 1e-12                                            # highlighted solution passes through (0, 1)
dot(axes[0], 0, 1, r"$(0,1)$", (22, -8), ORANGE)
axes[0].text(1.2, 1.4, r"$y=3-2e^{-2x}$", color=ORANGE, fontsize=11.5, bbox=dict(boxstyle="round,pad=0.2", fc="white", ec="none", alpha=0.95), zorder=9)
save(fig, "m4-ed-champ.svg")

# ------------------------------------------------------------------ 2. Newton's law of cooling : T' = -k (T - 20), T(0) = 90, T(10) = 60
k = math.log(7 / 4) / 10
T = lambda t: 20 + 70 * np.exp(-k * t)
t30 = math.log(7) / k
assert abs(T(0) - 90) < 1e-12 and abs(T(10) - 60) < 1e-12 and abs(T(t30) - 30) < 1e-9 and abs(T(20) - (20 + 70 * 16 / 49)) < 1e-9
assert abs(k - 0.0559616) < 1e-6 and abs(t30 - 34.7723) < 1e-3
tt = np.linspace(0, 60, 400)
assert ode_residual(T, -k, 20 * k, np.linspace(0, 60, 50)) < 1e-6
fig, ax = plt.subplots(figsize=(8.6, 4.6))
ax.axhline(20, color=BLUE, lw=1.6, ls=(0, (5, 3)), zorder=2)
ax.plot(tt, T(tt), color=ORANGE, lw=2.5, zorder=4)
ax.plot([0, 60], [0, 0], color="black", lw=0.8, zorder=1); ax.plot([0, 0], [0, 100], color="black", lw=0.8, zorder=1)
ax.plot([0, t30], [30, 30], color=GRAY, lw=1.0, ls=":", zorder=3); ax.plot([t30, t30], [0, 30], color=GRAY, lw=1.0, ls=":", zorder=3)
dot(ax, 0, 90, r"$(0,\,90)$", (34, 0), ORANGE)
dot(ax, 10, 60, r"$(10,\,60)$", (36, 8), ORANGE)
dot(ax, t30, 30, r"$(34{,}8\ ;\ 30)$", (40, 14), ORANGE)
ax.text(59, 13, "température de la pièce : 20 °C", color=BLUE, fontsize=11, ha="right")
ax.text(26, 76, r"$T(t)=20+70\,e^{-kt}$" "\n" r"$k=\frac{\ln(7/4)}{10}\approx 0{,}056\ \mathrm{min}^{-1}$", color=ORANGE, fontsize=12.5, va="center")
ax.set_xlim(-1.5, 61); ax.set_ylim(-2, 100); ax.set_xlabel(r"temps $t$ (minutes)"); ax.set_ylabel(r"température (°C)")
ax.set_xticks([0, 10, 20, 30, 40, 50, 60]); ax.set_yticks([0, 20, 30, 60, 90])
save(fig, "m4-ed-newton.svg")

# ------------------------------------------------------------------ 3. y'' + 4 y = 0 : cos 2x, sin 2x, and f = cos 2x + sqrt(3) sin 2x = 2 cos(2x - pi/3)
w = 2.0
xs = np.linspace(0, 2 * math.pi, 800)
f = lambda t: np.cos(w * t) + math.sqrt(3) * np.sin(w * t)
g = lambda t: 2 * np.cos(w * t - math.pi / 3)
assert np.max(np.abs(f(xs) - g(xs))) < 1e-12                                              # amplitude-phase form
h = 1e-4
for fn in (lambda t: np.cos(w * t), lambda t: np.sin(w * t), f):
    x0 = np.linspace(0.1, 6, 40)
    assert np.max(np.abs((fn(x0 + h) - 2 * fn(x0) + fn(x0 - h)) / h**2 + w**2 * fn(x0))) < 1e-4      # y'' + w^2 y = 0
assert abs(f(0) - 1) < 1e-12 and abs((f(h) - f(-h)) / (2 * h) - 2 * math.sqrt(3)) < 1e-6      # f(0) = 1, f'(0) = 2 sqrt(3)
assert abs(f(math.pi / 6) - 2) < 1e-12 and abs(f(math.pi / 6 + math.pi) - 2) < 1e-12              # maxima at pi/6 + k pi, value 2
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.2), gridspec_kw={"width_ratios": [1, 1.1]})
for ax in (a1, a2):
    ax.plot([-2.7 if ax is a2 else -0.2, 2 * math.pi + 0.2], [0, 0], color="black", lw=0.8, zorder=1)
    ax.set_xticks([0, math.pi / 2, math.pi, 3 * math.pi / 2, 2 * math.pi])
    ax.set_xticklabels(["0", r"$\frac{\pi}{2}$", r"$\pi$", r"$\frac{3\pi}{2}$", r"$2\pi$"])
a1.plot(xs, np.cos(w * xs), color=TEAL, lw=2.2, label=r"$\cos 2x$"); a1.plot(xs, np.sin(w * xs), color=VIOLET, lw=2.2, label=r"$\sin 2x$")
a1.annotate("", xy=(math.pi, 1.35), xytext=(0, 1.35), arrowprops=dict(arrowstyle="<->", color=GRAY, lw=1.2))
a1.text(math.pi / 2, 1.5, r"période $T=\frac{2\pi}{\omega}=\pi$", color=GRAY, fontsize=11.5, ha="center")
a1.set_yticks([-1, 0, 1]); a1.set_ylim(-1.35, 1.95); a1.set_xlim(-0.2, 2 * math.pi + 0.2); a1.legend(loc="upper right", frameon=False, fontsize=11.5, ncol=2, bbox_to_anchor=(1.0, 0.99))
a1.set_title(r"$y''+4y=0$ : les deux solutions de base ($\omega=2$)", fontsize=11.2, pad=6)
a2.plot(xs, np.cos(w * xs), color=TEAL, lw=1.1, ls=(0, (4, 3)), zorder=2); a2.plot(xs, math.sqrt(3) * np.sin(w * xs), color=VIOLET, lw=1.1, ls=(0, (4, 3)), zorder=2)
a2.axhline(2, color=GRAY, lw=0.9, ls=":", zorder=1); a2.axhline(-2, color=GRAY, lw=0.9, ls=":", zorder=1)
a2.plot(xs, f(xs), color=ORANGE, lw=2.5, zorder=4)
dot(a2, 0, 1, None, (0, 0), ORANGE)
a2.text(-0.12, 1.0, r"$f(0)=1$" "\n" r"$f'(0)=2\sqrt{3}$", color=ORANGE, fontsize=11.5, ha="right", va="center")
dot(a2, math.pi / 6, 2, r"$\left(\frac{\pi}{6},\,2\right)$", (0, 15), ORANGE)
a2.text(2 * math.pi - 0.1, -2.35, r"amplitude $2$", color=GRAY, fontsize=11, ha="right")
a2.set_ylim(-2.7, 3.1); a2.set_xlim(-2.7, 2 * math.pi + 0.2)
a2.set_title(r"$f(x)=\cos 2x+\sqrt{3}\sin 2x=2\cos\!\left(2x-\frac{\pi}{3}\right)$", fontsize=11.2, pad=6)
save(fig, "m4-ed-oscillation.svg")
print("ok")
