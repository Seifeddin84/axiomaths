# Figures of the 4ème Maths lesson "Isométries du plan" (python scripts/lesson_figures_4m_iso.py).
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Arc
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.85)


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


# ---------------------------------------------------------------- the isometries (acting on arrays of points, shape (n, 2))
def unit(d):
    d = np.asarray(d, float); return d / np.hypot(*d)


def refl(P, p0, d):
    """orthogonal reflection in the line through p0 with direction d."""
    P = np.asarray(P, float); p0 = np.asarray(p0, float); d = unit(d)
    foot = p0 + np.outer((P - p0) @ d, d)
    return 2 * foot - P


def rot(P, c, a):
    c = np.asarray(c, float); R = np.array([[math.cos(a), -math.sin(a)], [math.sin(a), math.cos(a)]])
    return c + (np.asarray(P, float) - c) @ R.T


def trans(P, u):
    return np.asarray(P, float) + np.asarray(u, float)


def glide(P, p0, d, s):
    return trans(refl(P, p0, d), s * unit(d))


def orient(T):
    (a, b, c) = T[:3]; return float(np.sign((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])))


def dists(T):
    return [np.hypot(*(T[i] - T[j])) for i in range(3) for j in range(i + 1, 3)]


def label(ax, p, txt, color, off=(0, 0), fs=12, box=False):
    ax.annotate(txt, p, xytext=off, textcoords="offset points", fontsize=fs, color=color, ha="center", va="center", zorder=9,
                bbox=WHITE if box else None)


def spin_arrow(ax, T, color, r=0.42):
    """small circular arrow around the centroid, in the sense A -> B -> C."""
    g = T.mean(axis=0); s = orient(T)
    t = np.linspace(0.3, 4.4, 40) * s
    pts = g + r * np.column_stack([np.cos(t + 0.4 * s), np.sin(t + 0.4 * s)])
    ax.plot(pts[:, 0], pts[:, 1], color=color, lw=1.3, zorder=5)
    ax.annotate("", xy=pts[-1], xytext=pts[-3], arrowprops=dict(arrowstyle="-|>", color=color, lw=1.3), zorder=6)


def draw_tri(ax, T, color, names, off, fill=0.18):
    ax.add_patch(Polygon(T, closed=True, fc=color, ec=color, alpha=fill, lw=0, zorder=3))
    ax.add_patch(Polygon(T, closed=True, fc="none", ec=color, lw=2.0, zorder=4))
    for p, n, o in zip(T, names, off):
        label(ax, p, n, color, o)
    spin_arrow(ax, T, color)


def fit(ax, pts, pad=0.7):
    pts = np.vstack(pts); lo, hi = pts.min(axis=0) - pad, pts.max(axis=0) + pad
    ax.set_xlim(lo[0], hi[0]); ax.set_ylim(lo[1], hi[1]); ax.set_aspect("equal"); ax.axis("off")


# ================================================================ 1. the four non-trivial isometries on the same triangle
T = np.array([[1.0, 1.0], [3.2, 1.4], [1.8, 3.0]])
fig, axs = plt.subplots(2, 2, figsize=(10.4, 8.6))
OFF = [(-11, -9), (10, -8), (0, 11)]
IMG = ["A'", "B'", "C'"]

# (a) reflection
p0, d = np.array([4.6, 0.0]), np.array([0.35, 1.0])
Ta = refl(T, p0, d)
for q in (p0 + 1.0 * unit(d), p0 + 3.5 * unit(d)):
    assert np.allclose(refl([q], p0, d), [q])                                    # points of the axis are fixed
assert np.allclose(dists(T), dists(Ta)) and orient(Ta) == -orient(T)
ax = axs[0, 0]; a_end = [p0 - 2.6 * unit(d), p0 + 4.3 * unit(d)]
ax.plot(*zip(*a_end), color=GRAY, lw=1.4, ls=(0, (5, 3)), zorder=2)
label(ax, a_end[1] + np.array([0.35, 0.2]), r"axe $\Delta$", GRAY)
for p, q in zip(T, Ta): ax.plot(*zip(p, q), color=GRAY, lw=0.8, ls=":", zorder=1)
draw_tri(ax, T, TEAL, "ABC", OFF); draw_tri(ax, Ta, ORANGE, IMG, [(10, -9), (-12, -8), (0, 11)])
ax.set_title("Symétrie orthogonale : fixe tous les points de l'axe", fontsize=11.5, pad=4)
fit(ax, [T, Ta, np.array(a_end)])

# (b) rotation of angle pi/3 about I
I, alpha = np.array([5.0, 0.0]), math.pi / 3
Tb = rot(T, I, alpha)
assert np.allclose(dists(T), dists(Tb)) and orient(Tb) == orient(T)
assert np.allclose(rot([I], I, alpha), [I])
ax = axs[0, 1]
for p, q in zip(T, Tb): ax.plot(*zip(p, q), color=GRAY, lw=0.8, ls=":", zorder=1)
ax.plot(*zip(I, T[0]), color=VIOLET, lw=1.1, zorder=2); ax.plot(*zip(I, Tb[0]), color=VIOLET, lw=1.1, zorder=2)
a0 = math.degrees(math.atan2(*(T[0] - I)[::-1]))
ax.add_patch(Arc(I, 2.0, 2.0, theta1=a0, theta2=a0 + 60, color=VIOLET, lw=1.6, zorder=3))
label(ax, I + 1.35 * np.array([math.cos(math.radians(a0 + 30)), math.sin(math.radians(a0 + 30))]), r"$\alpha$", VIOLET, (0, 0), 13)
ax.plot([I[0]], [I[1]], "o", color=VIOLET, ms=6, zorder=7); label(ax, I, r"$I$", VIOLET, (12, 5), 13)
draw_tri(ax, T, TEAL, "ABC", OFF); draw_tri(ax, Tb, ORANGE, IMG, [(-12, -7), (12, -3), (-4, 11)])
ax.set_title("Rotation : fixe un seul point, le centre", fontsize=11.5, pad=4)
fit(ax, [T, Tb, I[None, :]])

# (c) translation
u = np.array([4.6, -0.6]); Tc = trans(T, u)
assert np.allclose(dists(T), dists(Tc)) and orient(Tc) == orient(T)
ax = axs[1, 0]
for p, q in zip(T, Tc): ax.plot(*zip(p, q), color=GRAY, lw=0.8, ls=":", zorder=1)
ax.annotate("", xy=(T[2] + u + np.array([0, 0.9])), xytext=(T[2] + np.array([0, 0.9])), arrowprops=dict(arrowstyle="-|>", color=VIOLET, lw=1.6), zorder=6)
label(ax, T[2] + u / 2 + np.array([0, 1.4]), r"$\vec{u}$", VIOLET, (0, 0), 13)
draw_tri(ax, T, TEAL, "ABC", OFF); draw_tri(ax, Tc, ORANGE, IMG, [(-11, -9), (11, -7), (0, 11)])
ax.set_title("Translation : ne fixe aucun point", fontsize=11.5, pad=4)
fit(ax, [T, Tc, (T[2] + u + np.array([0, 1.6]))[None, :]])

# (d) glide reflection : axis y = 0, vector (4, 0)
g0, gd, gs = np.array([0.0, 0.0]), np.array([1.0, 0.0]), 4.0
Td = glide(T, g0, gd, gs)
assert np.allclose(dists(T), dists(Td)) and orient(Td) == -orient(T)
M = np.random.default_rng(0).normal(size=(50, 2)) * 3                            # no fixed point : M' - M = (4, -2y) never 0
assert np.all(np.abs(glide(M, g0, gd, gs) - M).sum(axis=1) > 1e-9) and np.all(np.abs((glide(M, g0, gd, gs) - M)[:, 0] - gs) < 1e-9)
ax = axs[1, 1]; ax.plot([-0.8, 9.2], [0, 0], color=GRAY, lw=1.4, ls=(0, (5, 3)), zorder=2); label(ax, (9.2, 0.5), r"axe $\Delta$", GRAY)
for p, q in zip(T, Td): ax.plot(*zip(p, q), color=GRAY, lw=0.8, ls=":", zorder=1)
ax.annotate("", xy=(5.0, 0.0), xytext=(1.0, 0.0), arrowprops=dict(arrowstyle="-|>", color=VIOLET, lw=2.2), zorder=7)
label(ax, (3.0, 0.38), r"$\vec{u}$ (parallèle à $\Delta$)", VIOLET, (0, 0), 11.5, box=True)
draw_tri(ax, T, TEAL, "ABC", OFF); draw_tri(ax, Td, ORANGE, IMG, [(-11, 9), (11, 8), (0, -12)])
ax.set_title("Symétrie glissante : ne fixe aucun point", fontsize=11.5, pad=4)
fit(ax, [T, Td, np.array([[-0.8, 0.0], [9.8, 0.5]])])
fig.tight_layout(h_pad=1.5, w_pad=1.0)
save(fig, "m4-iso-types.svg")

# ================================================================ 2. two mirrors : parallel axes -> translation, secant axes -> rotation
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.8, 4.8), gridspec_kw={"width_ratios": [1, 1]})
# left : parallel axes x = 0 and x = dd
P = np.array([[-2.5, 0.6], [-0.9, 1.1], [-1.7, 2.5]])
dd = 3.4
P1 = refl(P, [0, 0], [0, 1]); P2 = refl(P1, [dd, 0], [0, 1])
assert np.allclose(P2 - P, [2 * dd, 0])                                           # S_D' o S_D = translation of vector 2 IJ
assert P1[:, 0].max() < dd < P2[:, 0].min()                                       # the figure is readable : F1 left of D', F2 right of it
for ax_x in (0, dd): a1.plot([ax_x, ax_x], [-0.6, 3.5], color=GRAY, lw=1.4, ls=(0, (5, 3)), zorder=2)
label(a1, (0, 3.8), r"$\Delta$", GRAY, (0, 0), 13); label(a1, (dd, 3.8), r"$\Delta'$", GRAY, (0, 0), 13)
for Q, col, nm in ((P, TEAL, r"$F$"), (P1, VIOLET, r"$F_1$"), (P2, ORANGE, r"$F_2$")):
    a1.add_patch(Polygon(Q, closed=True, fc=col, ec=col, alpha=0.2, lw=0)); a1.add_patch(Polygon(Q, closed=True, fc="none", ec=col, lw=2))
    label(a1, Q.mean(axis=0), nm, col, (0, 0), 13)
a1.annotate("", xy=(dd, -0.3), xytext=(0, -0.3), arrowprops=dict(arrowstyle="<->", color=BLUE, lw=1.3)); label(a1, (dd / 2, -0.7), r"$IJ=d$", BLUE, (0, 0), 12)
y_t = -1.6; xa, xb = P[:, 0].mean(), P2[:, 0].mean()
a1.annotate("", xy=(xb, y_t), xytext=(xa, y_t), arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.8))
label(a1, ((xa + xb) / 2, y_t - 0.45), r"translation de vecteur $2\,\overrightarrow{IJ}$ (longueur $2d$)", ORANGE, (0, 0), 12)
a1.set_title(r"Axes parallèles : $S_{\Delta'}\circ S_{\Delta}$ est une translation", fontsize=11.5, pad=4)
a1.set_aspect("equal"); a1.axis("off"); a1.set_xlim(-3.2, 7.4); a1.set_ylim(-2.7, 4.3)
# right : two secant axes through I = O, angle theta = 30 deg
th = math.radians(30); phi = math.radians(70); R = 3.0
d1, d2 = np.array([1.0, 0.0]), np.array([math.cos(th), math.sin(th)])
Mp = R * np.array([math.cos(phi), math.sin(phi)]); M1 = refl([Mp], [0, 0], d1)[0]; M2 = refl([M1], [0, 0], d2)[0]
assert np.allclose(M2, R * np.array([math.cos(phi + 2 * th), math.sin(phi + 2 * th)]))   # rotation of angle 2 theta
assert np.allclose(M2, rot([Mp], [0, 0], 2 * th)[0])
for dv, nm in ((d1, r"$\Delta$"), (d2, r"$\Delta'$")):
    a2.plot(*zip(-3.6 * dv, 4.1 * dv), color=GRAY, lw=1.4, ls=(0, (5, 3)), zorder=2); label(a2, 4.4 * dv + np.array([0.05, 0.0]), nm, GRAY, (0, 0), 13)
a2.add_patch(Arc((0, 0), 2.2, 2.2, theta1=0, theta2=30, color=BLUE, lw=1.5)); label(a2, 1.55 * np.array([math.cos(th / 2), math.sin(th / 2)]) + np.array([0.15, 0]), r"$\theta$", BLUE, (0, 0), 13)
a2.add_patch(Arc((0, 0), 2 * R, 2 * R, theta1=-70, theta2=130, color=GRAY, lw=0.9, ls=":"))
for Q, col, nm, off in ((Mp, TEAL, r"$M$", (-12, 6)), (M1, VIOLET, r"$M_1$", (17, -2)), (M2, ORANGE, r"$M_2$", (-14, 6))):
    a2.plot([Q[0]], [Q[1]], "o", color=col, ms=7, zorder=6); label(a2, Q, nm, col, off, 13)
a2.plot([0, 0], [0, 0], "o", color="black", ms=5, zorder=7); label(a2, (0, 0), r"$I$", "black", (-8, 12), 13, box=True)
for Q in (Mp, M2): a2.plot([0, Q[0]], [0, Q[1]], color=GRAY, lw=0.8, zorder=1)
a2.add_patch(Arc((0, 0), 2.6, 2.6, theta1=70, theta2=130, color=ORANGE, lw=1.8))
a2.annotate("", xy=1.3 * np.array([math.cos(math.radians(130)), math.sin(math.radians(130))]), xytext=1.3 * np.array([math.cos(math.radians(124)), math.sin(math.radians(124))]), arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.6))
label(a2, 1.95 * np.array([math.cos(math.radians(100)), math.sin(math.radians(100))]), r"$2\theta$", ORANGE, (0, 0), 13)
a2.set_title(r"Axes sécants : $S_{\Delta'}\circ S_{\Delta}$ est la rotation de centre $I$, d'angle $2\theta$", fontsize=11.5, pad=4)
a2.set_aspect("equal"); a2.axis("off"); a2.set_xlim(-4.0, 5.0); a2.set_ylim(-3.3, 3.5)
fig.tight_layout(w_pad=1.0)
save(fig, "m4-iso-miroirs.svg")

# ================================================================ 3. glide reflection = footprints
Fpoly = np.array([[0, 0], [0.35, 0], [0.35, 0.65], [0.85, 0.65], [0.85, 0.95], [0.35, 0.95], [0.35, 1.25], [1.1, 1.25], [1.1, 1.6], [0, 1.6]], float)
F0 = Fpoly + np.array([0.2, 0.45]); s = 2.6
feet = [F0]
for _ in range(4): feet.append(glide(feet[-1], [0, 0], [1, 0], s))
assert np.allclose(feet[2], trans(F0, [2 * s, 0])) and np.allclose(feet[4], trans(F0, [4 * s, 0]))     # g o g = translation of vector 2u
assert all(np.allclose(dists(f[:3]), dists(feet[0][:3])) for f in feet)
fig, ax = plt.subplots(figsize=(10.8, 4.4))
ax.plot([-0.5, 5 * s + 0.6], [0, 0], color=GRAY, lw=1.4, ls=(0, (5, 3)), zorder=2); label(ax, (5 * s + 1.1, 0.0), r"axe $\Delta$", GRAY)
cent = [f.mean(axis=0) for f in feet]
for i, f in enumerate(feet):
    col = TEAL if i % 2 == 0 else ORANGE
    ax.add_patch(Polygon(f, closed=True, fc=col, ec=col, alpha=0.25, lw=0)); ax.add_patch(Polygon(f, closed=True, fc="none", ec=col, lw=2))
    label(ax, (cent[i][0] + 0.12, 2.55 if i % 2 == 0 else -2.55), rf"$F_{i}$", col, (0, 0), 13)
for i in range(4):
    rad = -0.45 if i % 2 == 0 else 0.45                                            # arcs bend away from the axis
    ax.annotate("", xy=cent[i + 1] + np.array([-0.35, 0.0]), xytext=cent[i] + np.array([0.55, 0.0]),
                arrowprops=dict(arrowstyle="-|>", color=VIOLET, lw=1.4, connectionstyle=f"arc3,rad={rad}", shrinkA=2, shrinkB=2), zorder=7)
    mid = (cent[i] + cent[i + 1]) / 2
    label(ax, mid + np.array([0.0, 0.95 if i % 2 == 0 else -0.95]), r"$g$", VIOLET, (0, 0), 13)
ax.annotate("", xy=(0.2 + s, -0.25), xytext=(0.2, -0.25), arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.8), zorder=8)
label(ax, (0.2 + s / 2, 0.22), r"$\vec{u}$", GRAY, (0, 0), 13)
y_b = -3.3
ax.annotate("", xy=(cent[2][0] + 0.0, y_b), xytext=(cent[0][0], y_b), arrowprops=dict(arrowstyle="-|>", color=BLUE, lw=1.8))
ax.annotate(r"$g\circ g=t_{2\vec{u}}$ : deux pas de la même jambe font une translation", (cent[2][0] + 0.3, y_b), fontsize=12.5, color=BLUE, ha="left", va="center")
ax.set_aspect("equal"); ax.axis("off"); ax.set_xlim(-0.8, 5 * s + 2.0); ax.set_ylim(-3.9, 3.1)
fig.tight_layout()
save(fig, "m4-iso-pas.svg")
print("ok")
