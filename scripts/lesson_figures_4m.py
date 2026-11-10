# Figures of the 4ème Maths lessons (python scripts/lesson_figures_4m.py).
# Kept apart from the other figure scripts so that running it only rewrites its own files.
# Requires: pip install numpy matplotlib
import os, cmath, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, FancyArrowPatch, Polygon
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


def axes_cross(ax, x0, x1, y0, y1, lw=0.8):
    ax.plot([x0, x1], [0, 0], color="black", lw=lw); ax.plot([0, 0], [y0, y1], color="black", lw=lw)


def pt(ax, p, label=None, off=(0, 0), color="black", ms=5, fs=11, ha="center"):
    ax.plot(*p, "o", color=color, ms=ms, zorder=6)
    if label:
        ax.annotate(label, p, xytext=off, textcoords="offset points", fontsize=fs, color=color, ha=ha, va="center",
                    bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.85), zorder=8)


def c2p(z): return (z.real, z.imag)


# ------------------------------------------------------------------ COMPLEXES
# 1. racines cinquièmes de l'unité et racines cubiques de 8i
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.2, 4.9))
for ax, R, lim in ((a1, 1.0, 1.55), (a2, 2.0, 3.1)):
    t = np.linspace(0, 2 * np.pi, 400)
    ax.plot(R * np.cos(t), R * np.sin(t), color=GRAY, lw=1.1, ls="--")
    axes_cross(ax, -1.3 * R, 1.3 * R, -1.3 * R, 1.3 * R)
    ax.set_xlim(-lim, lim); ax.set_ylim(-lim, lim); ax.set_aspect("equal"); ax.axis("off")
roots5 = [cmath.exp(2j * math.pi * k / 5) for k in range(5)]
a1.add_patch(Polygon([c2p(r) for r in roots5], closed=True, fc=TEAL, alpha=0.12, ec=TEAL, lw=1.8))
labels5 = [r"$z_0=1$", r"$z_1=e^{2i\pi/5}$", r"$z_2=e^{4i\pi/5}$", r"$z_3=e^{6i\pi/5}$", r"$z_4=e^{8i\pi/5}$"]
offs5 = [(30, 10), (6, 14), (-14, 13), (-14, -14), (8, -15)]
has5 = ["center", "center", "right", "right", "center"]
for r, lab, off, ha in zip(roots5, labels5, offs5, has5):
    pt(a1, c2p(r), lab, off, color=TEAL, ms=7, ha=ha)
a1.text(0, -1.5, r"racines cinquièmes de l'unité", ha="center", fontsize=12, color="black")
roots3 = [2 * cmath.exp(1j * (math.pi / 6 + 2 * math.pi * k / 3)) for k in range(3)]
assert all(abs(r ** 3 - 8j) < 1e-9 for r in roots3)
a2.add_patch(Polygon([c2p(r) for r in roots3], closed=True, fc=ORANGE, alpha=0.12, ec=ORANGE, lw=1.8))
labs3 = [r"$z_0=\sqrt{3}+i$", r"$z_1=-\sqrt{3}+i$", r"$z_2=-2i$"]
offs3 = [(52, 6), (-52, 8), (52, -6)]
for r, lab, off in zip(roots3, labs3, offs3):
    pt(a2, c2p(r), lab, off, color=ORANGE, ms=7)
a2.annotate("", (2 * math.cos(math.pi / 6), 2 * math.sin(math.pi / 6)), (0, 0), arrowprops=dict(arrowstyle="-", color=ORANGE, lw=0.8, ls=":"))
a2.add_patch(Arc((0, 0), 1.1, 1.1, theta1=0, theta2=30, color=ORANGE, lw=1.3))
a2.text(0.72, 0.17, r"$\frac{\pi}{6}$", color=ORANGE, fontsize=11)
a2.text(0, -3.0, r"solutions de $z^3=8i$ (rayon 2)", ha="center", fontsize=12)
save(fig, "m4-racines.svg")

# 2. ensemble des points M tels que (MA,MB) = pi/3 : arc capable
A_, B_ = 1 + 0j, -1 + 0j
ang = lambda M: cmath.phase((B_ - M) / (A_ - M))          # (MA, MB)
R = 2 / math.sqrt(3); c = complex(0, -R / 2)
lower = lambda d: c + R * cmath.exp(1j * math.radians(d))
for d in (170, 210, 250, 290, 330, 380):
    assert abs(ang(lower(d)) - math.pi / 3) < 1e-9, d
upper = lambda d: c + R * cmath.exp(1j * math.radians(d))
for d in (40, 70, 90, 110, 140):
    assert abs(ang(upper(d)) + 2 * math.pi / 3) < 1e-9, d
fig, ax = plt.subplots(figsize=(7.4, 5.4))
axes_cross(ax, -1.7, 1.7, -1.9, 0.9, lw=0.6)
t = np.radians(np.linspace(150, 390, 300)); ax.plot(c.real + R * np.cos(t), c.imag + R * np.sin(t), color=TEAL, lw=3)
t2 = np.radians(np.linspace(30, 150, 120)); ax.plot(c.real + R * np.cos(t2), c.imag + R * np.sin(t2), color=GRAY, lw=1.3, ls="--")
M = lower(250)
ax.plot([A_.real, M.real, B_.real], [A_.imag, M.imag, B_.imag], color=ORANGE, lw=1.6)
v1, v2 = A_ - M, B_ - M
a1_, a2_ = math.degrees(cmath.phase(v1)), math.degrees(cmath.phase(v2))
ax.add_patch(Arc(c2p(M), 0.7, 0.7, theta1=a1_, theta2=a2_, color=ORANGE, lw=1.4))
ax.text(M.real + 0.02, M.imag + 0.62, r"$\frac{\pi}{3}$", color=ORANGE, fontsize=14, ha="center")
pt(ax, c2p(A_), r"$A(1)$", (14, 10)); pt(ax, c2p(B_), r"$B(-1)$", (-20, 10))
pt(ax, c2p(M), r"$M$", (0, -14), color=ORANGE, ms=7)
ax.text(0, -2.55, r"$(\overrightarrow{MA},\overrightarrow{MB})=\frac{\pi}{3}\ [2\pi]$ : arc $AB$ (trait plein)", ha="center", fontsize=12, color=TEAL)
ax.text(0, 1.05, r"pointillé : $(\overrightarrow{MA},\overrightarrow{MB})=-\frac{2\pi}{3}$", ha="center", fontsize=11, color=GRAY)
ax.set_xlim(-2.0, 2.0); ax.set_ylim(-2.7, 1.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-arc-capable.svg")

# 3. puissances de 1+i : spirale
fig, ax = plt.subplots(figsize=(7.4, 5.6))
zs = [(1 + 1j) ** n for n in range(0, 9)]
assert abs(zs[2] - 2j) < 1e-9 and abs(zs[4] + 4) < 1e-9 and abs(zs[8] - 16) < 1e-9
axes_cross(ax, -9, 17.5, -9.5, 6.5, lw=0.6)
ax.plot([-8, 6], [-8, 6], color=GRAY, lw=1.1, ls="--"); ax.text(5.7, 6.0, r"$y=x$", color=GRAY, fontsize=11, ha="left")
ax.plot([p.real for p in zs], [p.imag for p in zs], color=TEAL, lw=1.4, ls=":")
for n in range(1, 9):
    p = zs[n]
    off = {1: (0, 14), 2: (-12, 12), 3: (-18, 6), 4: (-4, 16), 5: (-18, -6), 6: (-2, -16), 7: (16, -10), 8: (0, 15)}[n]
    pt(ax, c2p(p), r"$M_{%d}$" % n, off, color=TEAL if n % 4 else ORANGE, ms=6)
ax.text(8, 3.8, r"$z=1+i=\sqrt{2}\,e^{i\pi/4}$" "\n" r"$M_n$ a pour affixe $z^n$", fontsize=12, color="black", va="top", ha="center")
ax.set_xlim(-9, 17.5); ax.set_ylim(-9.5, 6.5); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-puissances.svg")

# ------------------------------------------------------------------ SIMILITUDES
# 4. similitude directe z' = (1+i) z + 2 : centre 2i, rapport sqrt2, angle pi/4
f = lambda z: (1 + 1j) * z + 2
Ia = 2j
assert abs(f(Ia) - Ia) < 1e-12
tri = [1 + 0j, 2 + 0j, 1.5 + 1j]; tri2 = [f(p) for p in tri]
assert abs(tri2[0] - (3 + 1j)) < 1e-12 and abs(tri2[1] - (4 + 2j)) < 1e-12 and abs(tri2[2] - (2.5 + 2.5j)) < 1e-12
assert abs(abs(tri2[0] - Ia) / abs(tri[0] - Ia) - math.sqrt(2)) < 1e-12
assert abs(cmath.phase((tri2[0] - Ia) / (tri[0] - Ia)) - math.pi / 4) < 1e-12
fig, ax = plt.subplots(figsize=(7.6, 4.9))
axes_cross(ax, -0.7, 4.7, -0.7, 3.3, lw=0.6)
ax.add_patch(Polygon([c2p(p) for p in tri], closed=True, fc=TEAL, alpha=0.2, ec=TEAL, lw=2))
ax.add_patch(Polygon([c2p(p) for p in tri2], closed=True, fc=ORANGE, alpha=0.2, ec=ORANGE, lw=2))
for P_, Q_ in zip(tri[:1], tri2[:1]):
    ax.plot([Ia.real, P_.real], [Ia.imag, P_.imag], color=GRAY, lw=1.0, ls=":")
    ax.plot([Ia.real, Q_.real], [Ia.imag, Q_.imag], color=GRAY, lw=1.0, ls=":")
ang_a = math.degrees(cmath.phase(tri[0] - Ia)); ang_b = math.degrees(cmath.phase(tri2[0] - Ia))
ax.add_patch(Arc(c2p(Ia), 1.5, 1.5, theta1=ang_a, theta2=ang_b, color=BLUE, lw=1.8))
ax.text(0.8, 1.45, r"$\theta=\frac{\pi}{4}$", color=BLUE, fontsize=12.5, ha="left", va="center")
pt(ax, c2p(Ia), r"$I(2i)$", (-28, 6), color=BLUE, ms=8)
lab = [(r"$A$", (-11, -8)), (r"$B$", (11, -9)), (r"$C$", (-3, 12))]
lab2 = [(r"$A'$", (12, -8)), (r"$B'$", (13, 3)), (r"$C'$", (-4, 12))]
for P_, (s_, o) in zip(tri, lab): pt(ax, c2p(P_), s_, o, color=TEAL)
for P_, (s_, o) in zip(tri2, lab2): pt(ax, c2p(P_), s_, o, color=ORANGE)
ax.text(2.6, 3.15, r"$z'=(1+i)\,z+2$", fontsize=13, ha="center")
ax.text(2.6, 2.8, r"rapport $\sqrt{2}$, angle $\frac{\pi}{4}$, centre $I$", fontsize=11.5, ha="center", color=GRAY)
ax.set_xlim(-0.7, 4.7); ax.set_ylim(-0.7, 3.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-similitude-directe.svg")

# 5. similitude indirecte z' = (1+i) conj(z) + 1 : centre -2-i, rapport sqrt2, axe de direction pi/8
a_, b_ = 1 + 1j, 1 + 0j
g = lambda z: a_ * z.conjugate() + b_
I2 = (a_ * b_.conjugate() + b_) / (1 - abs(a_) ** 2)
assert abs(I2 - (-2 - 1j)) < 1e-12 and abs(g(I2) - I2) < 1e-12
th = math.pi / 8
Nn = I2 + 2 * cmath.exp(1j * th); assert abs((g(Nn) - I2) - math.sqrt(2) * (Nn - I2)) < 1e-12
Mm = -1 + 2j; Mp = g(Mm); assert abs(Mp - (2 - 3j)) < 1e-12
a_m = cmath.phase(Mm - I2); a_p = cmath.phase(Mp - I2)
assert abs((a_m + a_p) / 2 - th) < 1e-12 and abs(abs(Mp - I2) / abs(Mm - I2) - math.sqrt(2)) < 1e-12
fig, ax = plt.subplots(figsize=(7.6, 5.6))
axes_cross(ax, -4.6, 4.6, -4.2, 2.7, lw=0.6)
d = cmath.exp(1j * th)
ax.plot([(I2 - 2.6 * d).real, (I2 + 6.6 * d).real], [(I2 - 2.6 * d).imag, (I2 + 6.6 * d).imag], color=VIOLET, lw=1.8)
ax.text((I2 + 6.6 * d).real - 0.1, (I2 + 6.6 * d).imag + 0.28, "axe", color=VIOLET, fontsize=12.5, ha="right")
for Q_ in (Mm, Mp):
    ax.plot([I2.real, Q_.real], [I2.imag, Q_.imag], color=ORANGE, lw=1.7)
ax.add_patch(Arc(c2p(I2), 2.2, 2.2, theta1=math.degrees(th), theta2=math.degrees(a_m), color=TEAL, lw=1.8))
ax.add_patch(Arc(c2p(I2), 2.8, 2.8, theta1=math.degrees(a_p), theta2=math.degrees(th), color=TEAL, lw=1.8))
for ang_, rr in ((0.5 * (th + a_m), 1.65), (0.5 * (th + a_p), 2.05)):
    q = I2 + rr * cmath.exp(1j * ang_); ax.text(q.real, q.imag, r"$\alpha$", color=TEAL, fontsize=14, ha="center", va="center")
pt(ax, c2p(I2), r"$I(-2-i)$", (-38, 13), color=BLUE, ms=8)
pt(ax, c2p(Mm), r"$M(-1+2i)$", (0, 14), color=ORANGE, ms=6); pt(ax, c2p(Mp), r"$M'(2-3i)$", (40, -4), color=ORANGE, ms=6)
ax.text(-4.4, 3.55, r"$z'=(1+i)\,\bar z+1$", fontsize=13, ha="left")
ax.text(-4.4, 3.15, r"l'axe est la bissectrice de $(\overrightarrow{IM},\overrightarrow{IM'})$", fontsize=11.5, color=GRAY, ha="left")
ax.set_xlim(-4.6, 4.6); ax.set_ylim(-4.2, 3.9); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-similitude-indirecte.svg")

# ------------------------------------------------------------------ DIVISIBILITE
# 6. division euclidienne de -17 par 5
fig, ax = plt.subplots(figsize=(8.6, 2.7))
ax.plot([-26, 11], [0, 0], color="black", lw=1)
for k in range(-25, 11):
    big = (k % 5 == 0)
    ax.plot([k, k], [-0.16 if big else -0.07, 0.16 if big else 0.07], color="black", lw=1.4 if big else 0.7)
for k in range(-25, 11, 5):
    ax.text(k, -0.52, r"$%d$" % k, ha="center", fontsize=11)
ax.plot([-20, -17], [0.55, 0.55], color=TEAL, lw=2.4); ax.plot([-20, -20], [0.45, 0.65], color=TEAL, lw=2); ax.plot([-17, -17], [0.45, 0.65], color=TEAL, lw=2)
ax.text(-18.5, 0.93, r"$r=3$", color=TEAL, ha="center", fontsize=13)
pt(ax, (-17, 0), r"$a=-17$", (0, -34), color=ORANGE, ms=8, fs=12)
ax.annotate(r"$5q=-20$ (le multiple de 5 juste en dessous)", (-20, 0), xytext=(-15, 1.55), fontsize=11.5, color=GRAY, ha="left",
            arrowprops=dict(arrowstyle="->", color=GRAY))
ax.set_xlim(-26.5, 11.5); ax.set_ylim(-1.15, 2.0); ax.axis("off")
save(fig, "m4-division-euclidienne.svg")

# 7. multiplier par 2 modulo 7 : deux cycles de longueur 3 et le point fixe 0
fig, ax = plt.subplots(figsize=(7.2, 4.6))
def on(cx, cy, r, deg): return (cx + r * math.cos(math.radians(deg)), cy + r * math.sin(math.radians(deg)))
pos = {1: on(-1.25, -0.05, 0.62, 90), 2: on(-1.25, -0.05, 0.62, -30), 4: on(-1.25, -0.05, 0.62, 210),
       3: on(1.25, -0.05, 0.62, 90), 6: on(1.25, -0.05, 0.62, -30), 5: on(1.25, -0.05, 0.62, 210), 0: (0.0, -0.05)}
for k, (x, y) in pos.items():
    col = TEAL if k in (1, 2, 4) else (ORANGE if k in (3, 5, 6) else GRAY)
    ax.add_patch(plt.Circle((x, y), 0.19, fc="white", ec=col, lw=2.2, zorder=4))
    ax.text(x, y, str(k), ha="center", va="center", fontsize=14, color=col, zorder=5)


def arrow(a, b, col):
    xa, ya = pos[a]; xb, yb = pos[b]
    ax.add_patch(FancyArrowPatch((xa, ya), (xb, yb), connectionstyle="arc3,rad=-0.28", arrowstyle="-|>", mutation_scale=16,
                                 color=col, lw=1.9, shrinkA=15, shrinkB=15, zorder=3))


for a, b in ((1, 2), (2, 4), (4, 1)): arrow(a, b, TEAL)
for a, b in ((3, 6), (6, 5), (5, 3)): arrow(a, b, ORANGE)
assert [pow(2, k, 7) for k in range(4)] == [1, 2, 4, 1] and [3 * pow(2, k, 7) % 7 for k in range(4)] == [3, 6, 5, 3]
assert [(2 * k) % 7 for k in (1, 2, 4)] == [2, 4, 1] and [(2 * k) % 7 for k in (3, 6, 5)] == [6, 5, 3]
ax.text(0, 0.95, r"flèche $k\rightarrow r$ : $r$ est le reste de $2k$ modulo $7$", ha="center", va="center", fontsize=12.5)
ax.text(0, -0.5, r"$2\times 0=0$", ha="center", fontsize=11, color=GRAY)
ax.text(-1.25, -1.1, r"$1\to 2\to 4\to 1$", ha="center", fontsize=12, color=TEAL)
ax.text(1.25, -1.1, r"$3\to 6\to 5\to 3$", ha="center", fontsize=12, color=ORANGE)
ax.set_xlim(-2.2, 2.2); ax.set_ylim(-1.35, 1.2); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-horloge.svg")
print("ok")
