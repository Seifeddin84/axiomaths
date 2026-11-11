# Figures of the 1ère lessons (python scripts/lesson_figures_1ere.py).
# Kept apart from lesson_figures.py so that running it never rewrites the other figures.
# Requires: pip install numpy matplotlib
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"


def arrow(ax, p, q, color, lw=2.2, ls="-", ms=16, z=3):
    ax.annotate("", xy=q, xytext=p, zorder=z,
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, ls=ls, mutation_scale=ms,
                                shrinkA=0, shrinkB=0))


def dot(ax, p, name, off, color="black", fs=14, ms=5):
    ax.plot(*p, "o", color=color, ms=ms, zorder=6)
    ax.annotate(name, p, xytext=off, textcoords="offset points", fontsize=fs, color=color,
                ha="center", va="center")


# 1. fonction linéaire et fonction affine : deux droites parallèles
fig, ax = plt.subplots(figsize=(7.2, 4.6))
x = np.linspace(-2.2, 1.9, 100)
ax.plot(x, 1.5 * x, color=TEAL, lw=2.4)
ax.plot(x, 1.5 * x + 2, color=ORANGE, lw=2.4)
ax.axhline(0, color="black", lw=0.8); ax.axvline(0, color="black", lw=0.8)
# triangle de pente sur la droite linéaire
ax.plot([0, 1, 1], [0, 0, 1.5], color=GRAY, lw=1.1, ls="--")
ax.text(0.5, -0.38, r"$1$", ha="center", color=GRAY, fontsize=13)
ax.text(1.08, 0.55, r"$a$", color=GRAY, fontsize=13)
ax.plot(1, 1.5, "o", color=TEAL, ms=7, zorder=5); ax.annotate(r"$A(1\,;\,a)$", (1, 1.5), xytext=(10, -22), textcoords="offset points", color=TEAL, fontsize=13)
# ordonnée à l'origine de la droite affine
ax.plot(0, 2, "o", color=ORANGE, ms=7, zorder=5); ax.annotate(r"$(0\,;\,b)$", (0, 2), xytext=(-48, 4), textcoords="offset points", color=ORANGE, fontsize=13)
arrow(ax, (-0.35, 0.05), (-0.35, 1.95), BLUE, lw=1.6)
ax.text(-0.5, 0.75, r"décalage $b$", color=BLUE, fontsize=12, ha="right")
ax.text(0.45, 5.15, r"$y=ax+b$", color=ORANGE, fontsize=14, ha="left")
ax.text(1.95, 2.9, r"$y=ax$", color=TEAL, fontsize=14, ha="left")
ax.text(2.45, -0.4, "$x$", fontsize=13); ax.text(0.08, 5.3, "$y$", fontsize=13)
ax.set_xlim(-2.2, 3.2); ax.set_ylim(-1.4, 5.7); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "fonctions-lineaire-affine.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# 2. signe de ax+b selon le signe de a
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.4, 3.9))
for ax, f, r, ttl, left, right in [
    (a1, lambda t: 2 * t - 4, 2, r"$a>0$ : $2x-4$", "-", "+"),
    (a2, lambda t: -t + 3, 3, r"$a<0$ : $-x+3$", "+", "-"),
]:
    t = np.linspace(r - 2.6, r + 2.6, 100)
    ax.plot(t, f(t), color="black", lw=2.2)
    ax.axhline(0, color="black", lw=0.8)
    ax.plot([r - 2.6, r], [0, 0], color=TEAL if left == "+" else ORANGE, lw=5, solid_capstyle="butt", zorder=4)
    ax.plot([r, r + 2.6], [0, 0], color=TEAL if right == "+" else ORANGE, lw=5, solid_capstyle="butt", zorder=4)
    ax.plot(r, 0, "o", color="black", ms=7, zorder=6)
    ax.annotate(rf"$-\frac{{b}}{{a}}={r}$", (r, 0), xytext=(0, -26), textcoords="offset points", ha="center", fontsize=13)
    ax.text(r - 1.3, 0.55 if left == "+" else -0.9, rf"${left}$", color=TEAL if left == "+" else ORANGE, fontsize=22, ha="center", fontweight="bold")
    ax.text(r + 1.3, 0.55 if right == "+" else -0.9, rf"${right}$", color=TEAL if right == "+" else ORANGE, fontsize=22, ha="center", fontweight="bold")
    ax.set_title(ttl, fontsize=13)
    ax.set_xlim(r - 2.8, r + 2.8); ax.set_ylim(-4.4, 4.4); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "fonctions-signe-ax-b.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# 3. égalité vectorielle et parallélogramme : AB = CD
A = np.array([0.0, 0.0]); B = np.array([4.0, 0.6]); C = np.array([1.2, 2.2]); D = C + B - A
O = (A + D) / 2
fig, ax = plt.subplots(figsize=(7.2, 4.0))
P = np.array([A, B, D, C, A]); ax.plot(P[:, 0], P[:, 1], color=GRAY, lw=1.2)
ax.plot([A[0], D[0]], [A[1], D[1]], color=GRAY, lw=1.1, ls="--"); ax.plot([B[0], C[0]], [B[1], C[1]], color=GRAY, lw=1.1, ls="--")
arrow(ax, A, B, TEAL); arrow(ax, C, D, TEAL)
ax.plot(*O, "o", color=ORANGE, ms=8, zorder=6)
dot(ax, A, "$A$", (-12, -10)); dot(ax, B, "$B$", (12, -10)); dot(ax, C, "$C$", (-12, 8)); dot(ax, D, "$D$", (12, 8))
ax.annotate("$O$", O, xytext=(9, 11), textcoords="offset points", color=ORANGE, fontsize=14)
ax.text(2.0, 0.05, r"$\overrightarrow{AB}$", color=TEAL, fontsize=14, ha="center", va="top")
ax.text(3.25, 2.95, r"$\overrightarrow{CD}$", color=TEAL, fontsize=14, ha="center", va="bottom")
ax.set_xlim(-1, 6.2); ax.set_ylim(-0.7, 3.5); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "vecteur-egalite.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# 4. image d'un triangle par une translation
A = np.array([0.0, 0.0]); B = np.array([4.0, 1.2]); u = B - A
M = np.array([0.8, 2.4]); N = np.array([3.2, 2.0]); Pp = np.array([1.6, 3.9])
fig, ax = plt.subplots(figsize=(8.2, 4.4))
def tri(Q, col, names, offs, fill=True):
    S = np.vstack([Q, Q[0]]); ax.plot(S[:, 0], S[:, 1], color=col, lw=2.2)
    if fill: ax.fill(Q[:, 0], Q[:, 1], color=col, alpha=0.12)
    for q, nm, o in zip(Q, names, offs): dot(ax, q, nm, o, color=col)
tri(np.array([M, N, Pp]), TEAL, ["$M$", "$N$", "$P$"], [(-12, -6), (12, -8), (0, 12)])
tri(np.array([M + u, N + u, Pp + u]), ORANGE, ["$M'$", "$N'$", "$P'$"], [(-14, -8), (14, -8), (0, 12)])
for q in (M, N, Pp): arrow(ax, q, q + u, GRAY, lw=1.0, ls=(0, (4, 3)), ms=10, z=2)
arrow(ax, A, B, BLUE, lw=2.6); dot(ax, A, "$A$", (-10, -10)); dot(ax, B, "$B$", (10, -10))
ax.text(2.1, 0.15, r"$\overrightarrow{AB}$", color=BLUE, fontsize=15, ha="center", va="top")
ax.text(5.2, 0.55, r"image par la translation" "\n" r"de vecteur $\overrightarrow{AB}$", color=ORANGE, fontsize=13, ha="left")
ax.set_xlim(-0.8, 8.4); ax.set_ylim(-0.8, 5.6); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "vecteur-translation.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# 5. somme de deux vecteurs : Chasles et règle du parallélogramme
fig, (a1, a2) = plt.subplots(1, 2, figsize=(10.6, 3.9), gridspec_kw={"width_ratios": [1, 1.1]})
A = np.array([0.0, 0.0]); B = np.array([3.2, 0.2]); C = np.array([4.4, 2.6])
arrow(a1, A, B, TEAL); arrow(a1, B, C, TEAL); arrow(a1, A, C, ORANGE, lw=2.8)
dot(a1, A, "$A$", (-12, -8)); dot(a1, B, "$B$", (10, -12)); dot(a1, C, "$C$", (10, 8))
a1.text(1.6, -0.05, r"$\overrightarrow{AB}$", color=TEAL, fontsize=14, ha="center", va="top")
a1.text(4.1, 1.2, r"$\overrightarrow{BC}$", color=TEAL, fontsize=14, ha="left")
a1.text(1.35, 1.55, r"$\overrightarrow{AC}$", color=ORANGE, fontsize=14, ha="right")
a1.set_title(r"Chasles : $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$", fontsize=13)
a1.set_xlim(-0.8, 5.6); a1.set_ylim(-0.9, 3.4); a1.set_aspect("equal"); a1.axis("off")
A = np.array([0.0, 0.0]); B = np.array([3.4, 0.3]); Dd = np.array([1.2, 2.2]); C = B + Dd - A
S = np.array([A, B, C, Dd, A]); a2.plot(S[:, 0], S[:, 1], color=GRAY, lw=1.1, ls="--")
arrow(a2, A, B, TEAL); arrow(a2, A, Dd, TEAL); arrow(a2, A, C, ORANGE, lw=2.8)
dot(a2, A, "$A$", (-12, -8)); dot(a2, B, "$B$", (10, -10)); dot(a2, C, "$C$", (12, 8)); dot(a2, Dd, "$D$", (-10, 8))
a2.text(1.7, 0.05, r"$\overrightarrow{AB}$", color=TEAL, fontsize=14, ha="center", va="top")
a2.text(0.45, 1.25, r"$\overrightarrow{AD}$", color=TEAL, fontsize=14, ha="right")
a2.text(2.5, 1.75, r"$\overrightarrow{AC}$", color=ORANGE, fontsize=14, ha="left")
a2.set_title(r"Parallélogramme : $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$", fontsize=13)
a2.set_xlim(-0.8, 5.8); a2.set_ylim(-0.9, 3.3); a2.set_aspect("equal"); a2.axis("off")
fig.tight_layout(); fig.savefig(OUT + "vecteur-somme.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)

# 6. produit d'un vecteur par un réel : k·AB pour plusieurs k
fig, ax = plt.subplots(figsize=(8.2, 4.2))
ax.plot([-2.1, 3.4], [0, 0], color="black", lw=0.9)
for xx, nm in [(0, "$A$"), (1, "$B$")]:
    ax.plot(xx, 0, "o", color="black", ms=6, zorder=6); ax.annotate(nm, (xx, 0), xytext=(0, -17), textcoords="offset points", ha="center", fontsize=14)
rows = [(1, TEAL, r"$\overrightarrow{AB}$", 0.8), (2, ORANGE, r"$2\overrightarrow{AB}$", 1.6),
        (1.5, BLUE, r"$\frac{3}{2}\overrightarrow{AB}$", 2.4), (-0.5, GRAY, r"$-\frac{1}{2}\overrightarrow{AB}$", 3.2),
        (-1, "#7c3aed", r"$-\overrightarrow{AB}$", 4.0)]
for k, col, lab, y in rows:
    arrow(ax, (0, y), (k, y), col, lw=2.6)
    ax.plot([0, 0], [0, y], color="#d1d5db", lw=0.8, zorder=1)
    ax.text(max(k, 0) + 0.12 if k > 0 else 0.12, y - 0.04, lab, color=col, fontsize=14, va="center", ha="left")
ax.set_xlim(-2.1, 3.9); ax.set_ylim(-0.7, 4.6); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "vecteur-produit.svg", bbox_inches="tight", pad_inches=0.1); plt.close(fig)
print("ok")
