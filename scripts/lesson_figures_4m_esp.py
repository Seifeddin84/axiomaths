# Figures of the 4ème Maths lesson "Géométrie dans l'espace" (python scripts/lesson_figures_4m_esp.py).
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.92)
DASH = (0, (4, 2.5))


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.08); plt.close(fig)


def P(p):
    """Oblique ('cavalière') projection: x to the right, z up, y receding up and to the right."""
    x, y, z = p
    return np.array([x + 0.45 * y, z + 0.32 * y])


def seg(ax, a, b, col, lw=1.8, ls="-", z=3):
    a, b = P(a), P(b)
    ax.plot([a[0], b[0]], [a[1], b[1]], color=col, lw=lw, ls=ls, zorder=z, solid_capstyle="round")


def arrow(ax, a, b, col, lw=2.2, z=5, shrink=0):
    a, b = P(a), P(b)
    ax.annotate("", xy=b, xytext=a, arrowprops=dict(arrowstyle="-|>", color=col, lw=lw, shrinkA=0, shrinkB=shrink, mutation_scale=14), zorder=z)


def dot(ax, p, lab=None, dx=0.0, dy=0.0, col="black", size=13, ms=5.5):
    q = P(p)
    ax.plot([q[0]], [q[1]], "o", color=col, ms=ms, zorder=6)
    if lab: ax.text(q[0] + dx, q[1] + dy, lab, color=col, fontsize=size, ha="center", va="center", zorder=7, bbox=WHITE)


def label(ax, p, txt, dx=0.0, dy=0.0, col="black", size=12.5, ha="center"):
    q = P(p)
    ax.text(q[0] + dx, q[1] + dy, txt, color=col, fontsize=size, ha=ha, va="center", zorder=7, bbox=WHITE)


def poly(ax, pts, fc, alpha, ec="none", z=1):
    ax.add_patch(Polygon([P(p) for p in pts], closed=True, fc=fc, ec=ec, alpha=alpha, zorder=z, lw=0))


def cross(u, v): return np.cross(u, v)


# ================================================================ 1. cube ABCDEFGH, diagonal (AG) perpendicular to the plane (EBD)
A = (0, 0, 0); B = (1, 0, 0); D = (0, 1, 0); C = (1, 1, 0); E = (0, 0, 1); F = (1, 0, 1); H = (0, 1, 1); G = (1, 1, 1)
AG = np.subtract(G, A); EB = np.subtract(B, E); ED = np.subtract(D, E)
assert np.dot(AG, EB) == 0 and np.dot(AG, ED) == 0                       # (AG) is orthogonal to two non-collinear vectors of (EBD)
assert all(sum(p) == 1 for p in (E, B, D))                               # plane x + y + z = 1
L = (1 / 3, 1 / 3, 1 / 3); assert abs(sum(L) - 1) < 1e-12 and np.allclose(L, np.array(AG) / 3)
fig, ax = plt.subplots(figsize=(4.9, 4.5))
poly(ax, [E, B, D], TEAL, 0.22, z=1)
visible = [(A, B), (B, C), (E, F), (F, G), (G, H), (H, E), (A, E), (B, F), (C, G)]
hidden = [(A, D), (D, C), (D, H)]
for a_, b_ in visible: seg(ax, a_, b_, "#374151", 1.6)
for a_, b_ in hidden: seg(ax, a_, b_, "#374151", 1.2, DASH)
for a_, b_ in ((E, B), (B, D), (D, E)): seg(ax, a_, b_, TEAL, 2.6, z=4)
arrow(ax, A, G, ORANGE, 2.4)
dot(ax, L, None, col=ORANGE, ms=6)
label(ax, L, r"$L$", 0.14, -0.1, ORANGE)
for p, t, dx, dy in ((A, "A", -0.13, -0.1), (B, "B", 0.1, -0.13), (C, "C", 0.15, -0.05), (D, "D", -0.18, 0.05), (E, "E", -0.13, 0.05), (F, "F", 0.0, 0.14), (G, "G", 0.15, 0.08), (H, "H", -0.02, 0.15)):
    label(ax, p, r"$" + t + r"$", dx, dy, "black")
ax.annotate(r"$(EBD)$", xy=(0.74, 0.17), xytext=(0.5, -0.34), color=TEAL, fontsize=13, ha="center", va="center",
            arrowprops=dict(arrowstyle="-", color=TEAL, lw=1.3, shrinkA=2, shrinkB=0), zorder=8)
ax.set_xlim(-0.45, 2.05); ax.set_ylim(-0.55, 1.8); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-cube.svg")

# ================================================================ 2. cross product : orthogonal to u and v, norm = area of the parallelogram
u = (2.0, 0, 0); v = (0.5, 2.0, 0)
w = cross(u, v); assert w[0] == 0 and w[1] == 0 and w[2] > 0              # u^v points up (direct basis u, v, u^v)
n_len = 1.7
O = (0, 0, 0); uv = tuple(np.add(u, v))
fig, ax = plt.subplots(figsize=(4.9, 4.2))
poly(ax, [O, u, uv, v], TEAL, 0.22, z=1)
for a_, b_ in ((O, u), (u, uv), (uv, v), (v, O)): seg(ax, a_, b_, TEAL, 1.6, z=2)
arrow(ax, O, u, BLUE, 2.4); arrow(ax, O, v, VIOLET, 2.4); arrow(ax, O, (0, 0, n_len), ORANGE, 2.6)
dot(ax, O, None, ms=5)
label(ax, O, r"$O$", -0.14, -0.14)
label(ax, u, r"$\vec u$", 0.0, -0.2, BLUE, 14)
label(ax, v, r"$\vec v$", -0.17, 0.12, VIOLET, 14)
label(ax, (0, 0, n_len), r"$\vec u\wedge\vec v$", 0.38, 0.0, ORANGE, 14)
t = np.linspace(0, 1, 60); a_ = P(u) / np.linalg.norm(P(u)); b_ = P(v) / np.linalg.norm(P(v))
th0, th1 = 0.0, math.atan2(P(v)[1], P(v)[0]); tt = np.linspace(th0, th1, 40)
ax.plot(0.55 * np.cos(tt), 0.55 * np.sin(tt), color=GRAY, lw=1.4, zorder=3)
ax.text(0.78 * math.cos(th1 / 2) + 0.05, 0.78 * math.sin(th1 / 2) - 0.02, r"$\theta$", fontsize=13, color=GRAY, ha="center", va="center")
q = P((1.6, 1.0, 0)); ax.text(q[0], q[1], "aire\n" + r"$=\Vert\vec u\wedge\vec v\Vert$", fontsize=11.5, color=TEAL, ha="center", va="center", zorder=7, linespacing=1.25)
ax.set_xlim(-0.55, 3.6); ax.set_ylim(-0.45, 2.15); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-vectoriel.svg")

# ================================================================ 3. parallelepiped : V = area of the base x height = |(u^v).w|
w3 = (0.6, 0.4, 1.7)
nvec = cross(u, v); nhat = nvec / np.linalg.norm(nvec)
h = abs(np.dot(nhat, w3)); assert abs(h - 1.7) < 1e-12                    # height = component of w along the normal
V = abs(np.dot(nvec, w3)); assert abs(V - np.linalg.norm(nvec) * h) < 1e-12
vu = np.array(u); vv = np.array(v); vw = np.array(w3)
verts = {k: tuple(s * vu + t * vv + r * vw) for k, (s, t, r) in {"O": (0, 0, 0), "u": (1, 0, 0), "v": (0, 1, 0), "uv": (1, 1, 0), "w": (0, 0, 1), "uw": (1, 0, 1), "vw": (0, 1, 1), "uvw": (1, 1, 1)}.items()}
fig, ax = plt.subplots(figsize=(4.9, 4.2))
poly(ax, [verts["O"], verts["u"], verts["uv"], verts["v"]], TEAL, 0.2, z=1)
edges = [("O", "u"), ("u", "uv"), ("O", "w"), ("u", "uw"), ("uv", "uvw"), ("w", "uw"), ("uw", "uvw"), ("w", "vw"), ("vw", "uvw")]
hid = [("O", "v"), ("v", "uv"), ("v", "vw")]
for a_, b_ in edges: seg(ax, verts[a_], verts[b_], "#374151", 1.6)
for a_, b_ in hid: seg(ax, verts[a_], verts[b_], "#374151", 1.2, DASH)
foot = (w3[0], w3[1], 0.0)
seg(ax, w3, foot, GRAY, 1.6, DASH, 4)
arrow(ax, O, u, BLUE, 2.4); arrow(ax, O, v, VIOLET, 2.4); arrow(ax, O, w3, "#be123c", 2.4)
arrow(ax, (-0.0, 0, 0), (0, 0, 1.0), ORANGE, 2.6)
label(ax, u, r"$\vec u$", 0.0, -0.2, BLUE, 14); label(ax, v, r"$\vec v$", -0.2, 0.0, VIOLET, 14)
label(ax, (0.6, 0.4, 1.0), r"$\vec w$", -0.2, 0.05, "#be123c", 14)
label(ax, (0, 0, 1.0), r"$\vec u\wedge\vec v$", -0.46, 0.0, ORANGE, 13)
label(ax, (w3[0], w3[1], 0.85), r"$h$", 0.2, 0.0, GRAY, 14)
q = P((1.25, 0.8, 0)); ax.text(q[0], q[1] - 0.02, "base", fontsize=11.5, color=TEAL, ha="center", va="center", zorder=7)
ax.set_xlim(-0.95, 4.2); ax.set_ylim(-0.4, 2.6); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-parallelepipede.svg")

# ================================================================ 4. distance from a point to a plane : d(A, P) = |n . MA| / ||n||
nn = np.array([-0.12, 0.08, 1.0]); nh = nn / np.linalg.norm(nn)
zp = lambda x, y: 0.12 * x - 0.08 * y                                        # the plane  z = 0.12 x - 0.08 y
corner = [(0.0, 0.0), (3.6, 0.0), (3.6, 2.3), (0.0, 2.3)]
plane = [(x, y, zp(x, y)) for x, y in corner]
Hh = np.array([1.9, 1.25, zp(1.9, 1.25)]); Aa = Hh + 1.45 * nh
Mm = np.array([0.65, 0.5, zp(0.65, 0.5)])
assert abs(np.dot(Aa - Hh, Mm - Hh)) < 1e-12                                  # AH is orthogonal to the plane
assert abs(np.dot(Aa - Mm, nh) - 1.45) < 1e-12                                # the projection of MA on the normal has length AH
fig, ax = plt.subplots(figsize=(4.7, 3.4))
poly(ax, plane, GRAY, 0.15, z=1)
for i in range(4): seg(ax, plane[i], plane[(i + 1) % 4], GRAY, 1.4, z=2)
seg(ax, Mm, Hh, BLUE, 1.6, DASH, 3); seg(ax, Mm, Aa, BLUE, 2.0, "-", 3)
e1 = (Mm - Hh) / np.linalg.norm(Mm - Hh); s = 0.2
poly(ax, [Hh, Hh + s * e1, Hh + s * e1 + s * nh, Hh + s * nh], ORANGE, 0.0, ec="none", z=2)
sq = [P(Hh + s * e1), P(Hh + s * e1 + s * nh), P(Hh + s * nh)]
ax.plot([q_[0] for q_ in sq], [q_[1] for q_ in sq], color=ORANGE, lw=1.3, zorder=5)
seg(ax, tuple(Hh), tuple(Aa), ORANGE, 2.8, z=5)
arrow(ax, tuple(Mm), tuple(Mm + 1.0 * nh), VIOLET, 2.2)
dot(ax, tuple(Aa), r"$A$", 0.0, 0.22); dot(ax, tuple(Hh), r"$H$", 0.22, -0.2); dot(ax, tuple(Mm), r"$M$", -0.22, -0.2)
label(ax, tuple(Mm + 0.6 * nh), r"$\vec n$", -0.2, 0.0, VIOLET, 14)
label(ax, tuple((Hh + Aa) / 2), r"$d(A,P)$", 0.62, 0.0, ORANGE, 12.5)
label(ax, tuple((Mm + Aa) / 2), r"$\overrightarrow{MA}$", -0.38, 0.1, BLUE, 12.5)
q = P((3.3, 0.35, zp(3.3, 0.35))); ax.text(q[0], q[1], r"$P$", color=GRAY, fontsize=14, ha="center", va="center")
ax.set_xlim(-0.3, 4.9); ax.set_ylim(-0.35, 2.7); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-distance.svg")

# ================================================================ 5. sphere cut by a plane at distance h : circle of radius sqrt(R^2 - h^2)
R, hp = 5.0, 3.0; r = math.sqrt(R * R - hp * hp); assert abs(r - 4) < 1e-12
fig, ax = plt.subplots(figsize=(4.7, 4.7))
th = np.linspace(0, 2 * np.pi, 600); ax.plot(R * np.cos(th), R * np.sin(th), color=GRAY, lw=2.0, zorder=2)
k = 0.3                                                                       # flattening of the 'horizontal' circles (view from slightly above)
for ctr, rad, col, lw, fillit in ((0.0, R, GRAY, 1.4, False), (hp, r, TEAL, 2.6, True)):
    tf = np.linspace(np.pi, 2 * np.pi, 200); tb = np.linspace(0, np.pi, 200)
    ax.plot(rad * np.cos(tf), ctr + k * rad * np.sin(tf), color=col, lw=lw, zorder=4)
    ax.plot(rad * np.cos(tb), ctr + k * rad * np.sin(tb), color=col, lw=lw * 0.8, ls=DASH, zorder=4)
    if fillit: ax.fill(rad * np.cos(th), ctr + k * rad * np.sin(th), color=TEAL, alpha=0.18, zorder=1)
I_, H_, M_ = (0.0, 0.0), (0.0, hp), (r, hp)
assert abs(math.hypot(*M_) - R) < 1e-12                                       # M is on the sphere
ax.plot([0, 0], [0, hp], color="#374151", lw=1.8, ls=DASH, zorder=5)
ax.plot([0, r], [hp, hp], color=ORANGE, lw=2.6, zorder=5); ax.plot([0, r], [0, hp], color=BLUE, lw=2.2, zorder=5)
for p, t, dx, dy, col in ((I_, "I", -0.38, -0.05, "black"), (H_, "H", -0.4, 0.1, "black"), (M_, "M", 0.4, 0.15, "black")):
    ax.plot([p[0]], [p[1]], "o", color=col, ms=6, zorder=7); ax.text(p[0] + dx, p[1] + dy, r"$" + t + r"$", fontsize=14, ha="center", va="center", zorder=8, bbox=WHITE)
ax.text(2.35, 1.2, r"$R$", color=BLUE, fontsize=14, ha="center", va="center", bbox=WHITE)
ax.text(-0.35, 1.5, r"$h$", color="#374151", fontsize=14, ha="center", va="center", bbox=WHITE)
ax.text(2.0, 3.55, r"$r$", color=ORANGE, fontsize=14, ha="center", va="center", bbox=WHITE)
ax.text(-3.95, 4.55, "cercle", color=TEAL, fontsize=12, ha="center", va="center")
ax.text(-4.4, 3.2, r"$P$", color=TEAL, fontsize=14, ha="center", va="center")
ax.set_xlim(-5.4, 5.4); ax.set_ylim(-5.4, 5.4); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-sphere-plan.svg")

# ================================================================ 6. homothety (centre Omega, ratio 2) of a sphere : centre I -> I', radius R -> 2R, tangents kept
Om = np.array([0.0, 0.0]); Ic = np.array([3.2, 0.0]); R1 = 1.0; k2 = 2.0
Icp = Om + k2 * (Ic - Om); R2 = abs(k2) * R1
al = math.asin(R1 / np.linalg.norm(Ic - Om)); assert abs(math.sin(al) - 1 / 3.2) < 1e-12
d_ = np.array([math.cos(al), math.sin(al)])
T = (math.sqrt(np.dot(Ic, Ic) - R1 ** 2)) * d_; Tp = Om + k2 * (T - Om)
assert abs(np.dot(T - Ic, d_)) < 1e-12 and abs(np.linalg.norm(Tp - Icp) - R2) < 1e-12 and abs(np.dot(Tp - Icp, d_)) < 1e-12
fig, ax = plt.subplots(figsize=(4.4, 2.2))
th = np.linspace(0, 2 * np.pi, 400)
ax.plot(Ic[0] + R1 * np.cos(th), R1 * np.sin(th), color=TEAL, lw=2.4); ax.fill(Ic[0] + R1 * np.cos(th), R1 * np.sin(th), color=TEAL, alpha=0.15)
ax.plot(Icp[0] + R2 * np.cos(th), R2 * np.sin(th), color=ORANGE, lw=2.4); ax.fill(Icp[0] + R2 * np.cos(th), R2 * np.sin(th), color=ORANGE, alpha=0.10)
for sgn in (1, -1):
    ax.plot([0, 8.9 * math.cos(al)], [0, sgn * 8.9 * math.sin(al)], color=GRAY, lw=1.4, ls=DASH)
ax.plot([Om[0], Icp[0]], [0, 0], color=GRAY, lw=1.2, ls=(0, (2, 2.5)))
ax.plot([Ic[0], T[0]], [Ic[1], T[1]], color=TEAL, lw=1.6); ax.plot([Icp[0], Tp[0]], [Icp[1], Tp[1]], color=ORANGE, lw=1.6)
for p, t, dx, dy, col in ((Om, r"\Omega", -0.5, 0.0, "black"), (Ic, "I", 0.0, -0.52, TEAL), (Icp, "I'", 0.0, -0.62, ORANGE), (T, "T", -0.45, 0.28, TEAL), (Tp, "T'", -0.5, 0.35, ORANGE)):
    ax.plot([p[0]], [p[1]], "o", color=col if col != "black" else "black", ms=5.5, zorder=7)
    ax.text(p[0] + dx, p[1] + dy, r"$" + t + r"$", fontsize=13.5, ha="center", va="center", color=col, zorder=8, bbox=WHITE)
mid = (Ic + T) / 2; ax.text(mid[0] + 0.55, mid[1], r"$R$", color=TEAL, fontsize=13, ha="center", va="center", bbox=WHITE)
mid = (Icp + Tp) / 2; ax.text(mid[0] + 0.72, mid[1], r"$2R$", color=ORANGE, fontsize=13, ha="center", va="center", bbox=WHITE)
ax.set_xlim(-1.0, 9.0); ax.set_ylim(-2.4, 2.5); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-esp-homothetie.svg")
print("ok")
