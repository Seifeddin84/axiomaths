# Figures of the 4ème Maths lesson "Déplacements – Antidéplacements" (python scripts/lesson_figures_4m_dep.py).
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


def unit(d):
    d = np.asarray(d, float); return d / np.hypot(*d)


def rot(P, c, a):
    c = np.asarray(c, float); R = np.array([[math.cos(a), -math.sin(a)], [math.sin(a), math.cos(a)]])
    return c + (np.asarray(P, float) - c) @ R.T


def refl(P, p0, d):
    P = np.asarray(P, float); p0 = np.asarray(p0, float); d = unit(d)
    return 2 * (p0 + np.outer((P - p0) @ d, d)) - P


def ang(v):                                   # direction of a vector, in degrees
    return math.degrees(math.atan2(v[1], v[0]))


def oriented(u, v):                           # (u, v) in degrees, in ]-180, 180]
    d = (ang(v) - ang(u) + 180) % 360 - 180
    return 180.0 if d == -180 else d


def label(ax, p, txt, color, off=(0, 0), fs=12, box=False):
    ax.annotate(txt, p, xytext=off, textcoords="offset points", fontsize=fs, color=color, ha="center", va="center", zorder=9,
                bbox=WHITE if box else None)


def arrow(ax, p, q, color, lw=1.8, z=6, style="-|>"):
    ax.annotate("", xy=q, xytext=p, arrowprops=dict(arrowstyle=style, color=color, lw=lw, shrinkA=0, shrinkB=0), zorder=z)


def arc(ax, c, r, a1, a2, color, lw=1.5, ls="-"):
    """arc of centre c from direction a1 to a2 (degrees, counter-clockwise), with a small arrowhead at the end."""
    ax.add_patch(Arc(c, 2 * r, 2 * r, theta1=a1, theta2=a2, color=color, lw=lw, ls=ls, zorder=4))


def dot(ax, p, color, ms=6, z=7):
    ax.plot([p[0]], [p[1]], "o", color=color, ms=ms, zorder=z)


def fit(ax, pts, pad=0.6):
    pts = np.vstack(pts); lo, hi = pts.min(axis=0) - pad, pts.max(axis=0) + pad
    ax.set_xlim(lo[0], hi[0]); ax.set_ylim(lo[1], hi[1]); ax.set_aspect("equal"); ax.axis("off")


# ================================================================ 1. the angle of a displacement does not depend on the points
TH = 65.0; th = math.radians(TH); Om = np.array([0.0, 0.0])
A, B = np.array([2.2, 0.5]), np.array([4.0, 1.9])
C, D = np.array([-1.0, 2.8]), np.array([-3.0, 3.6])
A2, B2, C2, D2 = (rot([p], Om, th)[0] for p in (A, B, C, D))
u, v, u2, v2 = B - A, D - C, B2 - A2, D2 - C2
assert abs(oriented(u, u2) - TH) < 1e-9 and abs(oriented(v, v2) - TH) < 1e-9          # the angle of f is the same for AB and CD
assert abs(oriented(u, v) - oriented(u2, v2)) < 1e-9                                    # and (AB, CD) = (A'B', C'D')
assert abs(np.hypot(*u) - np.hypot(*u2)) < 1e-9 and abs(np.hypot(*v) - np.hypot(*v2)) < 1e-9
fig, (a1, a2) = plt.subplots(1, 2, figsize=(11.2, 5.0), gridspec_kw={"width_ratios": [1.15, 1]})
# left : the plane
for P, Q, col, nm, off in ((A, B, TEAL, ("A", "B"), ((8, -10), (10, -8))), (C, D, VIOLET, ("C", "D"), ((10, 8), (-10, 8))),
                           (A2, B2, ORANGE, ("A'", "B'"), ((-12, 6), (-12, 8))), (C2, D2, BLUE, ("C'", "D'"), ((-12, 2), (-12, -6)))):
    a1.plot(*zip(P, Q), color=col, lw=2.6, solid_capstyle="round", zorder=5)
    for p, n, o in zip((P, Q), nm, off): dot(a1, p, col, 5); label(a1, p, n, col, o, 12)
for P, Q in ((A, A2), (B, B2), (C, C2), (D, D2)):
    a1.plot(*zip(P, Q), color=GRAY, lw=0.8, ls=":", zorder=1)
for P in (A, A2): a1.plot(*zip(Om, P), color=GRAY, lw=0.9, zorder=1)
arc(a1, Om, 1.0, ang(A), ang(A2), GRAY, 1.4); label(a1, 1.35 * unit(unit(A) + unit(A2)), r"$\theta$", GRAY, (0, 0), 13)
dot(a1, Om, "black", 6); label(a1, Om, r"$\Omega$", "black", (-10, -10), 13)
a1.set_title(r"Une rotation $r$ de centre $\Omega$ et d'angle $\theta$", fontsize=11.5, pad=4)
fit(a1, [A, B, C, D, A2, B2, C2, D2, Om[None, :]], 0.7)
# right : the four vectors brought back to a common origin
O = np.zeros(2); k = 1.0
for w, col, nm, off in ((u, TEAL, r"$\overrightarrow{AB}$", (20, 0)), (u2, ORANGE, r"$\overrightarrow{A'B'}$", (-4, 16)),
                        (v, VIOLET, r"$\overrightarrow{CD}$", (-6, 16)), (v2, BLUE, r"$\overrightarrow{C'D'}$", (-10, -16))):
    arrow(a2, O, w, col, 2.2); label(a2, w, nm, col, off, 12)
r1 = 1.45
arc(a2, O, r1, ang(u), ang(u2), TEAL, 1.6); mid = math.radians(ang(u) + TH / 2)
label(a2, 1.85 * np.array([math.cos(mid), math.sin(mid)]), r"$\theta$", TEAL, (0, 0), 14)
arc(a2, O, r1, ang(v), ang(v) + TH, BLUE, 1.6); mid = math.radians(ang(v) + TH / 2)
label(a2, 1.85 * np.array([math.cos(mid), math.sin(mid)]), r"$\theta$", BLUE, (0, 0), 14)
dot(a2, O, "black", 5)
a2.set_title(r"Les quatre vecteurs, ramenés à une même origine : le même $\theta$", fontsize=11.5, pad=4)
fit(a2, [O[None, :], u, u2, v, v2], 0.9)
fig.tight_layout(w_pad=0.8)
save(fig, "m4-dep-angle.svg")

# ================================================================ 2. composition of two rotations : the triangle O O' Omega
d_ = 4.0; T1, T2 = 90.0, 60.0                                                         # angles theta and theta'
O, O2 = np.array([0.0, 0.0]), np.array([d_, 0.0])
tan = lambda deg: math.tan(math.radians(deg))
x = d_ * tan(T2 / 2) / (tan(T1 / 2) + tan(T2 / 2)); Om = np.array([x, -tan(T1 / 2) * x])
# Omega is the intersection of Delta (through O, direction -theta/2) and Delta' (through O', direction +theta'/2)
assert abs(Om[1] + tan(T1 / 2) * Om[0]) < 1e-9 and abs(Om[1] - tan(T2 / 2) * (Om[0] - d_)) < 1e-9
M = np.array([1.0, 2.0]); M1 = rot([M], O, math.radians(T1))[0]; M2 = rot([M1], O2, math.radians(T2))[0]
assert np.allclose(rot([M], Om, math.radians(T1 + T2))[0], M2)                          # r' o r = rotation (Omega, theta + theta')
assert abs(oriented(M - Om, M2 - Om) - (T1 + T2)) < 1e-9
assert np.allclose(rot([Om], O, math.radians(T1))[0] if False else rot([rot([Om], O, math.radians(T1))[0]], O2, math.radians(T2))[0], Om)   # Omega is fixed by r' o r
fig, (a1, a2) = plt.subplots(1, 2, figsize=(11.6, 5.4), gridspec_kw={"width_ratios": [1, 1.05]})
# left : construction of the centre
dirs = {"D": np.array([1.0, 0.0]), "Delta": unit([math.cos(math.radians(-T1 / 2)), math.sin(math.radians(-T1 / 2))]),
        "Delta'": unit([math.cos(math.radians(T2 / 2)), math.sin(math.radians(T2 / 2))])}
a1.plot([-1.2, d_ + 1.6], [0, 0], color=GRAY, lw=1.2, ls=(0, (5, 3)), zorder=2); label(a1, (d_ + 1.85, 0.0), r"$D$", GRAY, (0, 0), 13)
ends = []
for p0, dv, nm, col, t0, t1 in ((O, dirs["Delta"], r"$\Delta$", VIOLET, -1.1, 3.1), (O2, dirs["Delta'"], r"$\Delta'$", BLUE, -3.3, 1.5)):
    a1.plot(*zip(p0 + t0 * dv, p0 + t1 * dv), color=col, lw=1.6, zorder=3); label(a1, p0 + (t1 + 0.35) * dv, nm, col, (0, 0), 13)
    ends += [p0 + t0 * dv, p0 + (t1 + 0.6) * dv]
a1.add_patch(Polygon([O, O2, Om], closed=True, fc=ORANGE, alpha=0.12, lw=0, zorder=2)); a1.plot(*zip(O, O2, Om, O), color=ORANGE, lw=2.0, zorder=4)
for p, n, off in ((O, r"$O$", (-12, 8)), (O2, r"$O'$", (12, 8)), (Om, r"$\Omega$", (0, -14))):
    dot(a1, p, "black", 6); label(a1, p, n, "black", off, 14)
arc(a1, O, 1.15, -T1 / 2, 0, VIOLET, 1.8); label(a1, 1.62 * np.array([math.cos(math.radians(-T1 / 4)), math.sin(math.radians(-T1 / 4))]), r"$\frac{\theta}{2}$", VIOLET, (0, 0), 13)
arc(a1, O2, 1.15, 180, 180 + T2 / 2, BLUE, 1.8); label(a1, O2 + 1.75 * np.array([math.cos(math.radians(180 + T2 / 4)), math.sin(math.radians(180 + T2 / 4))]), r"$\frac{\theta'}{2}$", BLUE, (0, 0), 13)
a1.set_title(r"Le centre $\Omega$ de $r'\circ r$ : sommet du triangle $O\,O'\,\Omega$", fontsize=11.5, pad=4)
fit(a1, [O[None, :], O2[None, :], Om[None, :], np.array(ends), np.array([[d_ + 2.2, 0.5], [-1.4, 0.7]])], 0.4)
# right : one point M followed through the two rotations
for P, Q, col in ((O, M, VIOLET), (O, M1, VIOLET), (O2, M1, BLUE), (O2, M2, BLUE), (Om, M, ORANGE), (Om, M2, ORANGE)):
    a2.plot(*zip(P, Q), color=col, lw=1.0, zorder=2)
arc(a2, O, 1.0, ang(M), ang(M1), VIOLET, 1.7); label(a2, 1.45 * unit(M + M1), r"$\theta$", VIOLET, (0, 0), 13)
arc(a2, O2, 1.3, ang(M1 - O2) % 360, ang(M2 - O2) % 360, BLUE, 1.7); label(a2, O2 + 1.85 * unit((M1 - O2) + (M2 - O2)) * -1 if False else O2 + 1.8 * unit(np.array([math.cos(math.radians(ang(M1 - O2) % 360 + T2 / 2)), math.sin(math.radians(ang(M1 - O2) % 360 + T2 / 2))])), r"$\theta'$", BLUE, (0, 0), 13)
a0 = ang(M - Om); arc(a2, Om, 1.55, a0, a0 + T1 + T2, ORANGE, 2.0); mm = math.radians(a0 + (T1 + T2) / 2)
label(a2, Om + 2.15 * np.array([math.cos(mm), math.sin(mm)]), r"$\theta+\theta'$", ORANGE, (0, 0), 13)
for p, n, col, off in ((O, r"$O$", "black", (-12, 6)), (O2, r"$O'$", "black", (12, 6)), (Om, r"$\Omega$", "black", (12, -8)),
                       (M, r"$M$", TEAL, (11, 6)), (M1, r"$M_1=r(M)$", VIOLET, (-26, 8)), (M2, r"$M_2=r'(M_1)$", ORANGE, (62, -2))):
    dot(a2, p, col if col != "black" else "black", 6); label(a2, p, n, col, off, 13)
a2.set_title(r"Un point $M$ suivi par $r$ puis $r'$ : l'angle total vaut $\theta+\theta'$", fontsize=11.5, pad=4)
fit(a2, [O[None, :], O2[None, :], Om[None, :], M[None, :], M1[None, :], M2[None, :], np.array([[-3.2, 0.0], [7.2, -1.0]])], 0.6)
fig.tight_layout(w_pad=0.8)
save(fig, "m4-dep-composition.svg")

# ================================================================ 3. a glide reflection from two points : square ABCD, B -> K, K -> A
Aq, Bq, Cq, Dq = (np.array(p, float) for p in ([0, 0], [1, 0], [1, 1], [0, 1]))
I_, J_, K_, L_ = (Aq + Bq) / 2, (Bq + Cq) / 2, (Cq + Dq) / 2, (Dq + Aq) / 2
g = lambda P: refl(P, [0, 0.5], [1, 0]) + np.array([-0.5, 0.0])                        # S_(JL) followed by t_u, u = BA/2
assert np.allclose(g([Bq])[0], K_) and np.allclose(g([K_])[0], Aq)                      # g(B) = K and g(K) = A
assert np.allclose(g(g([Bq]))[0], Aq) and np.allclose(g(g([Aq]))[0], Aq + [-1.0, 0.0])  # g o g = t_{BA}
mB, mK = (Bq + K_) / 2, (K_ + Aq) / 2
assert np.allclose(mB, [0.75, 0.5]) and np.allclose(mK, [0.25, 0.5])                    # midpoints of [BK] and [KA] lie on the axis (JL)
assert abs(np.hypot(*(Bq - K_)) - np.hypot(*(K_ - Aq))) < 1e-12
fig, ax = plt.subplots(figsize=(8.6, 5.6))
ax.add_patch(Polygon([Aq, Bq, Cq, Dq], closed=True, fc=TEAL, alpha=0.12, lw=0, zorder=1)); ax.plot(*zip(Aq, Bq, Cq, Dq, Aq), color=TEAL, lw=2.0, zorder=3)
for p, n, off in ((Aq, "A", (-11, -9)), (Bq, "B", (11, -9)), (Cq, "C", (11, 8)), (Dq, "D", (-11, 8))): dot(ax, p, TEAL, 5); label(ax, p, n, TEAL, off, 14)
for p, n, off in ((I_, "I", (0, -12)), (J_, "J", (11, 9)), (K_, "K", (0, 12)), (L_, "L", (-11, 9))): dot(ax, p, GRAY, 4); label(ax, p, n, GRAY, off, 13)
ax.plot([-0.55, 1.55], [0.5, 0.5], color=VIOLET, lw=1.6, ls=(0, (5, 3)), zorder=2); label(ax, (1.7, 0.5), r"axe $(JL)$", VIOLET, (0, 0), 12.5)
ax.plot(*zip(Bq, K_), color=GRAY, lw=0.9, ls=":", zorder=2); ax.plot(*zip(K_, Aq), color=GRAY, lw=0.9, ls=":", zorder=2)
for m, n, off in ((mB, r"$M_1$", (6, -12)), (mK, r"$M_2$", (-4, -12))): dot(ax, m, VIOLET, 6); label(ax, m, n, VIOLET, off, 12.5)
ax.annotate("", xy=K_ + [0.03, -0.04], xytext=Bq + [-0.03, 0.05], arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=2.0, connectionstyle="arc3,rad=0.22", shrinkA=0, shrinkB=0), zorder=6)
ax.annotate("", xy=Aq + [0.04, 0.03], xytext=K_ + [-0.04, -0.04], arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=2.0, connectionstyle="arc3,rad=0.22", shrinkA=0, shrinkB=0), zorder=6)
label(ax, (0.74, 0.8), r"$g$", ORANGE, (0, 0), 15); label(ax, (0.26, 0.8), r"$g$", ORANGE, (0, 0), 15)
arrow(ax, (0.75, 0.3), (0.25, 0.3), BLUE, 2.2); label(ax, (0.5, 0.17), r"$\vec u=\frac{1}{2}\overrightarrow{BA}$", BLUE, (0, 0), 13, box=True)
ax.set_title(r"$g(B)=K$ et $g(K)=A$ : symétrie glissante d'axe $(JL)$", fontsize=12, pad=6)
fit(ax, [Aq, Cq, np.array([[-0.8, -0.15], [1.95, 1.25]])], 0.1)
fig.tight_layout()
save(fig, "m4-dep-carre.svg")
print("ok")
