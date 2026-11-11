# Figures placed right after a theorem box, so that the lesson AND the theorems wiki show them
# (python scripts/theorem_figures.py). Simple on purpose: one idea per figure, readable on a phone.
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle, Arc, Ellipse
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 13, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.92)
DASH = (0, (4, 2.5))
A_ = np.array


def new(w=4.6, h=3.6):
    fig, ax = plt.subplots(figsize=(w, h))
    ax.set_aspect("equal"); ax.axis("off")
    return fig, ax


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.06); plt.close(fig)


def seg(ax, a, b, col="black", lw=1.8, ls="-", z=3):
    ax.plot([a[0], b[0]], [a[1], b[1]], color=col, lw=lw, ls=ls, zorder=z, solid_capstyle="round")


def line(ax, p, d, t0, t1, col=GRAY, lw=1.4, ls="-", z=2):
    p, d = A_(p, float), A_(d, float)
    seg(ax, p + t0 * d, p + t1 * d, col, lw, ls, z)


def arrow(ax, a, b, col, lw=2.0, z=5):
    ax.annotate("", xy=b, xytext=a, arrowprops=dict(arrowstyle="-|>", color=col, lw=lw, shrinkA=0, shrinkB=0, mutation_scale=14), zorder=z)


def dot(ax, p, lab=None, dx=0.0, dy=0.0, col="black", size=14, ms=5.5):
    ax.plot([p[0]], [p[1]], "o", color=col, ms=ms, zorder=6)
    if lab: ax.text(p[0] + dx, p[1] + dy, lab, color=col, fontsize=size, ha="center", va="center", zorder=7, bbox=WHITE)


def text(ax, p, s, col="black", size=13, ha="center", box=True):
    ax.text(p[0], p[1], s, color=col, fontsize=size, ha=ha, va="center", zorder=7, bbox=WHITE if box else None)


def poly(ax, pts, fc, alpha=0.18, ec=None, lw=1.8, z=1):
    ax.add_patch(Polygon(pts, closed=True, fc=fc, alpha=alpha, ec="none", zorder=z))
    if ec: ax.add_patch(Polygon(pts, closed=True, fill=False, ec=ec, lw=lw, zorder=z + 2))


def right_angle(ax, P, u, v, s=0.25, col="black"):
    u = A_(u, float) / np.linalg.norm(u); v = A_(v, float) / np.linalg.norm(v); P = A_(P, float)
    ax.plot(*zip(P + s * u, P + s * (u + v), P + s * v), color=col, lw=1.2, zorder=4)


def arc(ax, c, r, a0, a1, col, lw=1.6, z=4):
    """arc from angle a0 to a1 (radians, counterclockwise if a1 > a0)."""
    t = np.linspace(a0, a1, 60)
    ax.plot(c[0] + r * np.cos(t), c[1] + r * np.sin(t), color=col, lw=lw, zorder=z)


def rot(p, c, t):
    p, c = A_(p, float), A_(c, float); d = p - c
    return c + A_([d[0] * math.cos(t) - d[1] * math.sin(t), d[0] * math.sin(t) + d[1] * math.cos(t)])


def ang(v): return math.atan2(v[1], v[0])


def cross2(u, v): return u[0] * v[1] - u[1] * v[0]


# ================================================================ 1. Pythagore (9ème): squares on the three sides
A, B, C = A_([0.0, 0.0]), A_([3.0, 0.0]), A_([0.0, 2.0])
assert abs(np.dot(B - A, C - A)) < 1e-12
AB, AC, BC = np.linalg.norm(B - A), np.linalg.norm(C - A), np.linalg.norm(C - B)
assert abs(BC ** 2 - AB ** 2 - AC ** 2) < 1e-12
fig, ax = new(4.4, 4.4)
poly(ax, [A, B, B + [0, -3], A + [0, -3]], BLUE, 0.16, BLUE, 1.4)
poly(ax, [A, C, C + [-2, 0], A + [-2, 0]], ORANGE, 0.16, ORANGE, 1.4)
n = A_([C[1] - B[1], B[0] - C[0]]) / BC * BC        # outward normal of [BC] (away from A), length BC
assert np.dot(n, (B + C) / 2 - A) > 0
poly(ax, [B, C, C + n, B + n], TEAL, 0.16, TEAL, 1.4)
poly(ax, [A, B, C], "white", 1.0, "black", 2.0, z=3)
right_angle(ax, A, B - A, C - A, 0.28)
dot(ax, A, "$A$", -0.3, -0.3); dot(ax, B, "$B$", 0.3, -0.25); dot(ax, C, "$C$", -0.3, 0.28)
text(ax, (1.5, -1.5), "$AB^2$", BLUE, 15); text(ax, (-1.0, 1.0), "$AC^2$", ORANGE, 15)
text(ax, (B + C) / 2 + n / 2, "$BC^2$", TEAL, 15)
ax.set_xlim(-2.4, 5.4); ax.set_ylim(-3.3, 5.3)
save(fig, "thm-pythagore.svg")

# ================================================================ 2. Réciproque de Pythagore (9ème): 3, 4, 5
A, B, C = A_([0.0, 0.0]), A_([4.0, 0.0]), A_([0.0, 3.0])
assert np.linalg.norm(C - B) == 5 and 5 ** 2 == 3 ** 2 + 4 ** 2
fig, ax = new(4.4, 3.2)
poly(ax, [A, B, C], TEAL, 0.14, "black", 2.0)
right_angle(ax, A, B - A, C - A, 0.32, ORANGE)
dot(ax, A, "$A$", -0.32, -0.3); dot(ax, B, "$B$", 0.32, -0.28); dot(ax, C, "$C$", -0.32, 0.3)
text(ax, (2.0, -0.38), "$4$", size=15); text(ax, (-0.38, 1.5), "$3$", size=15); text(ax, (2.3, 1.85), "$5$", size=15)
text(ax, (3.0, 2.6), "$5^2 = 3^2 + 4^2$", TEAL, 14)
ax.set_xlim(-0.8, 5.0); ax.set_ylim(-0.8, 3.6)
save(fig, "thm-pythagore-reciproque.svg")

# ================================================================ 3. Réciproque de Thalès (9ème)
A, B, C = A_([0.0, 3.2]), A_([-1.6, 0.0]), A_([3.4, 0.0])
k = 0.45
D, E = A + k * (B - A), A + k * (C - A)
assert abs(cross2(E - D, C - B)) < 1e-12                 # (DE) ∥ (BC)
fig, ax = new(4.4, 3.4)
poly(ax, [A, B, C], TEAL, 0.10, "black", 1.8)
seg(ax, D, E, ORANGE, 2.4, z=4)
dot(ax, A, "$A$", 0, 0.33); dot(ax, B, "$B$", -0.3, -0.25); dot(ax, C, "$C$", 0.3, -0.25)
dot(ax, D, "$D$", -0.35, 0.05, ORANGE); dot(ax, E, "$E$", 0.35, 0.05, ORANGE)
text(ax, (0.9, -0.55), r"$\dfrac{AD}{AB} = \dfrac{AE}{AC}\ \Rightarrow\ (DE)\parallel(BC)$", size=13, box=False)
ax.set_xlim(-2.2, 4.0); ax.set_ylim(-1.1, 3.7)
save(fig, "thm-thales-reciproque.svg")

# ================================================================ 4. Tangente à une parabole y² = 2px
p = 1.0
y0 = 2.0; x0 = y0 ** 2 / (2 * p)                              # M0(2, 2)
assert abs(y0 ** 2 - 2 * p * x0) < 1e-12
fig, ax = new(4.4, 3.8)
ys = np.linspace(-2.9, 2.9, 200); ax.plot(ys ** 2 / (2 * p), ys, color=TEAL, lw=2.4, zorder=3)
xs = np.linspace(-1.6, 4.4, 2)
ax.plot(xs, p * (xs + x0) / y0, color=ORANGE, lw=2.0, zorder=4)   # y y0 = p (x + x0)
ax.axhline(0, color=GRAY, lw=1.0, zorder=1); ax.axvline(0, color=GRAY, lw=1.0, zorder=1)
dot(ax, (x0, y0), "$M_0$", 0.05, 0.42, ORANGE); dot(ax, (p / 2, 0), "$F$", 0.25, -0.3, TEAL)
text(ax, (3.4, -2.0), "$y^2 = 2px$", TEAL, 14)
text(ax, (0.2, 2.75), r"$y\,y_0 = p\,(x + x_0)$", ORANGE, 13)
ax.set_xlim(-1.7, 4.6); ax.set_ylim(-3.1, 3.3)
save(fig, "thm-parabole-tangente.svg")
# check: the line y = (x + x0) p / y0 meets the parabola only at M0
yy = np.roots([1, -2 * y0, y0 ** 2]); assert np.allclose(yy, y0)

# ================================================================ 5. Propriété bifocale de l'ellipse
a, b = 3.0, 2.0; c = math.sqrt(a * a - b * b)
F, F2 = A_([c, 0.0]), A_([-c, 0.0])
t = 1.15; M = A_([a * math.cos(t), b * math.sin(t)])
assert abs(np.linalg.norm(M - F) + np.linalg.norm(M - F2) - 2 * a) < 1e-12
fig, ax = new(4.6, 3.3)
ax.add_patch(Ellipse((0, 0), 2 * a, 2 * b, fill=False, ec=TEAL, lw=2.4, zorder=3))
seg(ax, (-a - 0.3, 0), (a + 0.3, 0), GRAY, 1.0, z=1)
seg(ax, M, F, ORANGE, 2.2, z=4); seg(ax, M, F2, BLUE, 2.2, z=4)
dot(ax, F, "$F$", 0.1, -0.35); dot(ax, F2, "$F'$", -0.1, -0.35); dot(ax, M, "$M$", 0.05, 0.38)
text(ax, (M + F) / 2 + [0.35, 0.1], "$MF$", ORANGE, 13); text(ax, (M + F2) / 2 + [-0.45, 0.1], "$MF'$", BLUE, 13)
dot(ax, (-a, 0), None, ms=4); dot(ax, (a, 0), None, ms=4)
seg(ax, (-a, -b - 0.45), (a, -b - 0.45), GRAY, 1.2)
text(ax, (0, -b - 0.45), "$2a$", GRAY, 13)
text(ax, (0, -b - 1.05), "$MF + MF' = 2a$", TEAL, 14, box=False)
ax.set_xlim(-a - 0.4, a + 0.4); ax.set_ylim(-b - 1.35, b + 0.6)
save(fig, "thm-ellipse-bifocale.svg")

# ================================================================ 6. Tangente à une ellipse
t = 0.8; M0 = A_([a * math.cos(t), b * math.sin(t)])
fig, ax = new(4.6, 3.3)
ax.add_patch(Ellipse((0, 0), 2 * a, 2 * b, fill=False, ec=TEAL, lw=2.4, zorder=3))
d = A_([-M0[1] / b ** 2, M0[0] / a ** 2]); d = d / np.linalg.norm(d)   # direction of x x0/a² + y y0/b² = 1
assert abs(M0[0] * M0[0] / a ** 2 + M0[1] * M0[1] / b ** 2 - 1) < 1e-12
assert abs(d[0] * M0[0] / a ** 2 + d[1] * M0[1] / b ** 2) < 1e-12
line(ax, M0, d, -2.6, 2.4, ORANGE, 2.0, z=4)
seg(ax, (-a - 0.3, 0), (a + 0.3, 0), GRAY, 1.0, z=1); seg(ax, (0, -b - 0.3), (0, b + 0.3), GRAY, 1.0, z=1)
dot(ax, M0, "$M_0$", 0.35, 0.3, ORANGE)
text(ax, (0, -b - 0.85), r"tangente : $\dfrac{x\,x_0}{a^2} + \dfrac{y\,y_0}{b^2} = 1$", ORANGE, 13, box=False)
ax.set_xlim(-a - 0.4, a + 1.0); ax.set_ylim(-b - 1.3, b + 0.8)
save(fig, "thm-ellipse-tangente.svg")

# ================================================================ 7. Propriété bifocale de l'hyperbole
a, b = 1.5, 1.2; c = math.sqrt(a * a + b * b)
F, F2 = A_([c, 0.0]), A_([-c, 0.0])
s = 0.9; M = A_([a * math.cosh(s), b * math.sinh(s)])
assert abs(abs(np.linalg.norm(M - F) - np.linalg.norm(M - F2)) - 2 * a) < 1e-12
fig, ax = new(4.6, 3.5)
ss = np.linspace(-1.55, 1.55, 200)
for sg in (1, -1): ax.plot(sg * a * np.cosh(ss), b * np.sinh(ss), color=TEAL, lw=2.4, zorder=3)
xs = np.linspace(-3.6, 3.6, 2)
for sg in (1, -1): ax.plot(xs, sg * b / a * xs, color=GRAY, lw=1.0, ls=DASH, zorder=1)
seg(ax, (-3.6, 0), (3.6, 0), GRAY, 1.0, z=1)
seg(ax, M, F, ORANGE, 2.2, z=4); seg(ax, M, F2, BLUE, 2.2, z=4)
dot(ax, F, "$F$", 0.12, -0.35); dot(ax, F2, "$F'$", -0.1, -0.35); dot(ax, M, "$M$", 0.32, 0.25)
dot(ax, (a, 0), None, ms=4); dot(ax, (-a, 0), None, ms=4)
text(ax, (0, 2.3), r"$|MF - MF'| = 2a$", TEAL, 14, box=False)
ax.set_xlim(-3.6, 3.6); ax.set_ylim(-2.4, 2.6)
save(fig, "thm-hyperbole-bifocale.svg")

# ================================================================ 8. Tangente à une hyperbole
s = 0.75; M0 = A_([a * math.cosh(s), b * math.sinh(s)])
assert abs(M0[0] ** 2 / a ** 2 - M0[1] ** 2 / b ** 2 - 1) < 1e-12
d = A_([M0[1] / b ** 2, M0[0] / a ** 2]); d = d / np.linalg.norm(d)
assert abs(d[0] * M0[0] / a ** 2 - d[1] * M0[1] / b ** 2) < 1e-12
fig, ax = new(4.6, 3.5)
for sg in (1, -1): ax.plot(sg * a * np.cosh(ss), b * np.sinh(ss), color=TEAL, lw=2.4, zorder=3)
for sg in (1, -1): ax.plot(xs, sg * b / a * xs, color=GRAY, lw=1.0, ls=DASH, zorder=1)
seg(ax, (-3.6, 0), (3.6, 0), GRAY, 1.0, z=1); seg(ax, (0, -2.4), (0, 2.4), GRAY, 1.0, z=1)
line(ax, M0, d, -1.6, 1.6, ORANGE, 2.0, z=4)
dot(ax, M0, "$M_0$", 0.42, -0.12, ORANGE)
text(ax, (0, -2.85), r"tangente : $\dfrac{x\,x_0}{a^2} - \dfrac{y\,y_0}{b^2} = 1$", ORANGE, 13, box=False)
ax.set_xlim(-3.6, 3.6); ax.set_ylim(-3.3, 2.4)
save(fig, "thm-hyperbole-tangente.svg")

# ================================================================ 9. Rotation: un point et son image (3ème)
A, A2 = A_([0.0, 0.0]), A_([3.0, 0.0]); th = math.radians(70)
# centre: on the perpendicular bisector, apex angle θ  →  distance to the midpoint = (AA'/2) / tan(θ/2)
m = (A + A2) / 2; h = 1.5 / math.tan(th / 2); O = m + A_([0, h])
assert np.allclose(rot(A, O, -th), A2) or np.allclose(rot(A, O, th), A2)
sgn = 1 if np.allclose(rot(A, O, th), A2) else -1
fig, ax = new(4.4, 3.6)
line(ax, m, (0, 1), -0.9, 3.0, GRAY, 1.2, DASH)
seg(ax, O, A, TEAL, 1.8); seg(ax, O, A2, TEAL, 1.8); seg(ax, A, A2, GRAY, 1.0)
a0, a1 = ang(A - O), ang(A2 - O)
arc(ax, O, 0.6, min(a0, a1), max(a0, a1), ORANGE, 2.0)
text(ax, O + 0.95 * A_([math.cos((a0 + a1) / 2), math.sin((a0 + a1) / 2)]), r"$\theta$", ORANGE, 15)
right_angle(ax, m, (1, 0), (0, 1), 0.18, GRAY)
dot(ax, A, "$A$", -0.3, -0.2); dot(ax, A2, "$A'$", 0.32, -0.2); dot(ax, O, r"$\Omega$", 0, 0.36, ORANGE)
text(ax, m + A_([0.95, -0.55]), "médiatrice de $[AA']$", GRAY, 11.5)
ax.set_xlim(-0.8, 4.2); ax.set_ylim(-1.0, h + 0.7)
save(fig, "thm-rotation-point-image.svg")

# ================================================================ 10. Deux rotations de même centre (3ème)
O = A_([0.0, 0.0]); M = A_([2.6, 0.0]); t1, t2 = math.radians(50), math.radians(65)
M1 = rot(M, O, t1); M2 = rot(M1, O, t2)
assert np.allclose(M2, rot(M, O, t1 + t2))
fig, ax = new(4.4, 3.6)
for P in (M, M1, M2): seg(ax, O, P, GRAY, 1.2)
arc(ax, O, 0.9, 0, t1, ORANGE, 2.2); arc(ax, O, 1.25, t1, t1 + t2, BLUE, 2.2); arc(ax, O, 1.75, 0, t1 + t2, TEAL, 2.0)
text(ax, 0.62 * A_([math.cos(t1 / 2), math.sin(t1 / 2)]) * 1.0 + [0.55, 0.1], r"$\theta$", ORANGE, 14)
text(ax, 1.25 * A_([math.cos(t1 + t2 / 2), math.sin(t1 + t2 / 2)]) + [-0.25, 0.2], r"$\theta'$", BLUE, 14)
text(ax, 1.75 * A_([math.cos(1.95), math.sin(1.95)]) + [-0.55, 0.15], r"$\theta+\theta'$", TEAL, 14)
dot(ax, O, r"$\Omega$", -0.3, -0.2); dot(ax, M, "$M$", 0.3, -0.2); dot(ax, M1, "$M_1$", 0.35, 0.1); dot(ax, M2, "$M_2$", -0.38, 0.1)
ax.set_xlim(-2.4, 3.2); ax.set_ylim(-0.5, 3.0)
save(fig, "thm-rotations-meme-centre.svg")

# ================================================================ 11. Composée de deux rotations (4ème): centre Ω
O, O2 = A_([0.0, 0.0]), A_([4.0, 0.0]); th, th2 = math.radians(80), math.radians(70)
# Δ through O with (Δ, D) = θ/2  → Δ makes angle -θ/2 with D... draw Δ at angle +θ/2 above D, Δ' at angle π - θ'/2
u = A_([math.cos(th / 2), math.sin(th / 2)]); v = A_([math.cos(math.pi - th2 / 2), math.sin(math.pi - th2 / 2)])
lam = np.linalg.solve(np.column_stack([u, -v]), O2 - O)[0]; W = O + lam * u
# check with the actual composition: r' ∘ r where r = rot(O, θ), r' = rot(O', θ') ; the fixed point
def comp(P): return rot(rot(P, O, th), O2, th2)
# solve fixed point: comp is a rotation of angle θ+θ'; centre = (I - R)^{-1} b
R = lambda P: comp(P)
b0 = R(A_([0.0, 0.0])); Rm = np.column_stack([R(A_([1.0, 0.0])) - b0, R(A_([0.0, 1.0])) - b0])
Om = np.linalg.solve(np.eye(2) - Rm, b0)
assert np.allclose(R(Om), Om)
same = np.allclose(Om, W)
if not same:   # the lesson's orientation convention: mirror the construction below D
    u = A_([u[0], -u[1]]); v = A_([v[0], -v[1]])
    lam = np.linalg.solve(np.column_stack([u, -v]), O2 - O)[0]; W = O + lam * u
assert np.allclose(Om, W), (Om, W)
fig, ax = new(4.6, 3.6)
line(ax, O, (1, 0), -0.7, 5.0, GRAY, 1.3)
line(ax, O, u, -0.6, lam + 0.5, ORANGE, 1.8); line(ax, O2, v, -0.6, np.linalg.norm(W - O2) + 0.5, BLUE, 1.8)
dot(ax, O, "$O$", -0.1, 0.32 * (-1 if W[1] > 0 else 1)); dot(ax, O2, "$O'$", 0.1, 0.32 * (-1 if W[1] > 0 else 1))
dot(ax, W, r"$\Omega$", 0, 0.42 if W[1] > 0 else -0.42, TEAL, size=15)
sgn = 1 if W[1] > 0 else -1
arc(ax, O, 0.9, min(0, sgn * th / 2), max(0, sgn * th / 2), ORANGE, 1.8)
arc(ax, O2, 0.9, min(math.pi, math.pi - sgn * th2 / 2), max(math.pi, math.pi - sgn * th2 / 2), BLUE, 1.8)
text(ax, O + 1.4 * A_([math.cos(sgn * th / 4), math.sin(sgn * th / 4)]), r"$\theta/2$", ORANGE, 14)
text(ax, O2 + 1.45 * A_([math.cos(math.pi - sgn * th2 / 4), math.sin(math.pi - sgn * th2 / 4)]), r"$\theta'/2$", BLUE, 14)
text(ax, (5.0, 0.3 * -sgn), "$D$", GRAY, 14)
text(ax, O + (lam + 0.5) * u + A_([0.3, 0]), r"$\Delta$", ORANGE, 14); text(ax, O2 + (np.linalg.norm(W - O2) + 0.5) * v + A_([-0.35, 0]), r"$\Delta'$", BLUE, 14)
ys = sorted([W[1], 0]); ax.set_xlim(-1.0, 5.4); ax.set_ylim(ys[0] - 0.9, ys[1] + 0.9)
save(fig, "thm-composee-rotations.svg")
print("composée de deux rotations: Ω =", np.round(Om, 3), "construction above D" if same else "construction below D")

# ================================================================ 12. Une symétrie orthogonale renverse les angles (4ème)
fig, ax = new(4.4, 3.6)
line(ax, (0, 0), (1, 0), -0.4, 4.6, GRAY, 1.6)
Pt = A_([0.8, 1.0]); u = A_([2.0, 0.4]); v = A_([0.9, 1.5])
sym = lambda P: A_([P[0], -P[1]])
Pt2, u2, v2 = sym(Pt), sym(u), sym(v)
arrow(ax, Pt, Pt + u, ORANGE); arrow(ax, Pt, Pt + v, BLUE)
arrow(ax, Pt2, Pt2 + u2, ORANGE); arrow(ax, Pt2, Pt2 + v2, BLUE)
a_u, a_v = ang(u), ang(v)
arc(ax, Pt, 0.55, a_u, a_v, TEAL, 2.0); arc(ax, Pt2, 0.55, -a_v, -a_u, TEAL, 2.0)
arrow(ax, Pt + 0.55 * A_([math.cos(a_v - 0.12), math.sin(a_v - 0.12)]), Pt + 0.55 * A_([math.cos(a_v), math.sin(a_v)]), TEAL, 1.4)
arrow(ax, Pt2 + 0.55 * A_([math.cos(-a_v + 0.12), math.sin(-a_v + 0.12)]), Pt2 + 0.55 * A_([math.cos(-a_v), math.sin(-a_v)]), TEAL, 1.4)
text(ax, Pt + u + [0.3, 0.05], r"$\vec u$", ORANGE, 14); text(ax, Pt + v + [0.0, 0.3], r"$\vec v$", BLUE, 14)
text(ax, Pt2 + u2 + [0.32, -0.05], r"$\vec u\,'$", ORANGE, 14); text(ax, Pt2 + v2 + [0.0, -0.3], r"$\vec v\,'$", BLUE, 14)
text(ax, (4.75, 0.25), r"$\Delta$", GRAY, 14)
mid = (a_u + a_v) / 2
text(ax, Pt + 0.95 * A_([math.cos(mid), math.sin(mid)]), r"$\alpha$", TEAL, 14); text(ax, Pt2 + 0.98 * A_([math.cos(-mid), math.sin(-mid)]), r"$-\alpha$", TEAL, 14)
ax.set_xlim(-0.6, 5.0); ax.set_ylim(-2.8, 2.8)
save(fig, "thm-symetrie-angles.svg")

# ================================================================ 13. Composée de deux homothéties (4ème)
I1, I2 = A_([0.0, 0.0]), A_([4.0, 0.0]); k1, k2 = 2.0, 0.75
h1 = lambda P: I1 + k1 * (A_(P) - I1); h2 = lambda P: I2 + k2 * (A_(P) - I2)
T = [A_([0.6, 0.5]), A_([1.4, 0.5]), A_([0.8, 1.1])]
T1 = [h1(P) for P in T]; T2 = [h2(P) for P in T1]
k = k1 * k2
# fixed point of h2∘h1: I = h2(h1(I))  ⇔  I (1 - k) = I2 (1 - k2) + k2 (1 - k1) I1
I = (I2 * (1 - k2) + k2 * (1 - k1) * I1) / (1 - k)
assert np.allclose(h2(h1(I)), I) and all(np.allclose(I + k * (P - I), Q) for P, Q in zip(T, T2))
fig, ax = new(4.8, 3.0)
poly(ax, T, TEAL, 0.25, TEAL, 1.6); poly(ax, T1, ORANGE, 0.18, ORANGE, 1.6); poly(ax, T2, BLUE, 0.18, BLUE, 1.6)
for P, Q in zip(T, T2): seg(ax, I, Q, GRAY, 0.9, DASH, z=1)
dot(ax, I1, "$I_1$", -0.3, -0.25); dot(ax, I2, "$I_2$", 0.3, -0.25); dot(ax, I, "$I$", 0.0, -0.32, VIOLET)
text(ax, (0.3, 1.2), "$T$", TEAL, 14); text(ax, (1.0, 2.55), "$h_1(T)$", ORANGE, 13); text(ax, (3.6, 2.3), r"$h_2\circ h_1(T)$", BLUE, 13)
text(ax, (1.0, -0.8), r"$k_1 = 2,\ k_2 = 0{,}75$ : rapport $1{,}5$", VIOLET, 13, box=False)
ax.set_xlim(-2.6, 4.7); ax.set_ylim(-1.1, 2.8)
save(fig, "thm-homotheties-composee.svg")
print("composée d'homothéties: I =", np.round(I, 3))

# ================================================================ 14. Images par une homothétie (2ème): droite, cercle
I = A_([0.0, 0.0]); k = 2.0
A, B = A_([1.0, 0.3]), A_([1.6, 1.2]); A2, B2 = I + k * A, I + k * B
Oc, r = A_([1.7, -0.35]), 0.35; Oc2 = I + k * Oc
assert abs(cross2(B - A, B2 - A2)) < 1e-12
fig, ax = new(4.6, 3.2)
seg(ax, A, B, TEAL, 2.2); seg(ax, A2, B2, ORANGE, 2.2)
for P in (A2, B2, Oc2): seg(ax, I, P, GRAY, 0.9, DASH, z=1)
ax.add_patch(Circle(Oc, r, fill=False, ec=TEAL, lw=2.0, zorder=3)); ax.add_patch(Circle(Oc2, abs(k) * r, fill=False, ec=ORANGE, lw=2.0, zorder=3))
dot(ax, I, "$I$", -0.28, 0.0); dot(ax, A, "$A$", 0.0, -0.3, TEAL); dot(ax, B, "$B$", -0.28, 0.12, TEAL)
dot(ax, A2, "$A'$", 0.05, -0.32, ORANGE); dot(ax, B2, "$B'$", -0.32, 0.15, ORANGE)
dot(ax, Oc, None, TEAL, ms=4); dot(ax, Oc2, None, ORANGE, ms=4)
text(ax, (1.8, -1.85), "$k = 2$ : $A'B' = 2AB$, rayon $\\times 2$", GRAY, 12.5, box=False)
ax.set_xlim(-0.6, 4.3); ax.set_ylim(-2.1, 2.7)
save(fig, "thm-homothetie-images.svg")

# ================================================================ 15. Translation: conservation des distances (1ère)
M, N = A_([0.0, 0.0]), A_([1.6, 1.1]); u = A_([2.4, -0.5]); M2, N2 = M + u, N + u
assert np.isclose(np.linalg.norm(N2 - M2), np.linalg.norm(N - M))
fig, ax = new(4.4, 2.6)
poly(ax, [M, N, N2, M2], TEAL, 0.10)
seg(ax, M, N, BLUE, 2.4); seg(ax, M2, N2, BLUE, 2.4)
arrow(ax, M, M2, ORANGE); arrow(ax, N, N2, ORANGE)
dot(ax, M, "$M$", -0.3, -0.1); dot(ax, N, "$N$", -0.3, 0.12); dot(ax, M2, "$M'$", 0.35, -0.12); dot(ax, N2, "$N'$", 0.35, 0.12)
text(ax, (M + M2) / 2 + [0, -0.3], r"$\vec u$", ORANGE, 14)
text(ax, (2.0, -1.05), "$MNN'M'$ est un parallélogramme", GRAY, 12.5, box=False)
ax.set_xlim(-0.6, 4.6); ax.set_ylim(-1.35, 1.45)
save(fig, "thm-translation-distances.svg")

# ================================================================ 16. Images par une translation (1ère): triangle et droite
u = A_([2.3, 0.9])
T = [A_([0.0, 0.0]), A_([1.3, 0.1]), A_([0.4, 1.1])]; T2 = [P + u for P in T]
L0, Ld = A_([-0.3, -0.8]), A_([1.0, -0.15])
fig, ax = new(4.6, 3.0)
poly(ax, T, TEAL, 0.22, TEAL, 1.6); poly(ax, T2, ORANGE, 0.20, ORANGE, 1.6)
line(ax, L0, Ld, -0.2, 2.6, TEAL, 1.8); line(ax, L0 + u, Ld, -0.2, 2.6, ORANGE, 1.8)
arrow(ax, A_([-0.6, 1.4]), A_([-0.6, 1.4]) + u, GRAY, 1.8)
text(ax, A_([-0.6, 1.4]) + u / 2 + [-0.1, 0.32], r"$\vec u$", GRAY, 14)
text(ax, (0.55, 0.38), "$F$", TEAL, 14); text(ax, (0.55, 0.38) + u, "$F'$", ORANGE, 14)
text(ax, L0 + 2.6 * Ld + [0.3, 0], "$d$", TEAL, 14); text(ax, L0 + u + 2.6 * Ld + [0.35, 0], "$d'$", ORANGE, 14)
ax.set_xlim(-1.0, 5.4); ax.set_ylim(-1.4, 2.5)
save(fig, "thm-translation-images.svg")

# ================================================================ 17. Angles supplémentaires et complémentaires (2ème)
al = math.radians(28)
P = A_([math.cos(al), math.sin(al)]); Ps = A_([math.cos(math.pi - al), math.sin(math.pi - al)]); Pc = A_([math.cos(math.pi / 2 - al), math.sin(math.pi / 2 - al)])
assert np.allclose(Ps, [-P[0], P[1]]) and np.allclose(Pc, [P[1], P[0]])
fig, ax = new(4.4, 3.2)
th_ = np.linspace(0, math.pi, 200); ax.plot(np.cos(th_), np.sin(th_), color=GRAY, lw=1.4, zorder=1)
seg(ax, (-1.25, 0), (1.25, 0), GRAY, 1.0); seg(ax, (0, -0.1), (0, 1.25), GRAY, 1.0)
line(ax, (0, 0), (1, 1), 0, 1.1, GRAY, 1.0, DASH)
for Q, col in ((P, TEAL), (Ps, ORANGE), (Pc, BLUE)): seg(ax, (0, 0), Q, col, 2.0)
seg(ax, P, Ps, ORANGE, 1.0, DASH); seg(ax, P, Pc, BLUE, 1.0, DASH)
dot(ax, P, None, TEAL); dot(ax, Ps, None, ORANGE); dot(ax, Pc, None, BLUE)
text(ax, P + [0.2, 0.0], r"$\alpha$", TEAL, 14); text(ax, Ps + [-0.32, 0.06], r"$\pi-\alpha$", ORANGE, 14)
text(ax, Pc + [0.38, 0.12], r"$\frac{\pi}{2}-\alpha$", BLUE, 14)
text(ax, (0.0, -0.32), "symétrie d'axe $(Oy)$ ; symétrie d'axe $y = x$", GRAY, 11, box=False)
ax.set_xlim(-1.45, 1.55); ax.set_ylim(-0.5, 1.35)
save(fig, "thm-angles-associes.svg")
print("ok")
