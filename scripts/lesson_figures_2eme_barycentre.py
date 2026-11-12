# Regenerates the SVG figures of the 2ème « Barycentre » lesson
# (python scripts/lesson_figures_2eme_barycentre.py). Requires: pip install numpy matplotlib
import os
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Rectangle, Circle
plt.rcParams.update({"mathtext.fontset":"cm","font.family":"serif","font.size":12,
  "axes.spines.top":False,"axes.spines.right":False,"svg.fonttype":"path"})
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL="#0d9488"; ORANGE="#ea580c"; GRAY="#6b7280"; BLUE="#2563eb"

def pt(ax, P, name, off=(0, 8), color="black", ms=6, size=14):
    ax.plot(*P, "o", color=color, ms=ms, zorder=5)
    ax.annotate(name, P, xytext=off, textcoords="offset points", ha="center", fontsize=size, color=color)

# 1. la tige en équilibre : 1 kg en A, 2 kg en B, AG = 2/3 AB
fig, ax = plt.subplots(figsize=(7.2, 3.2))
ax.plot([0, 3], [1, 1], color="black", lw=4, solid_capstyle="round")
G = 2.0
ax.add_patch(Polygon([[G, 1], [G - 0.18, 0.62], [G + 0.18, 0.62]], closed=True, color=TEAL, zorder=4))
for x, m, w in [(0, "1 kg", 0.34), (3, "2 kg", 0.46)]:
    ax.plot([x, x], [1, 0.55], color=GRAY, lw=1.2)
    ax.add_patch(Rectangle((x - w / 2, 0.55 - w), w, w, color=ORANGE, alpha=0.85, zorder=3))
    ax.text(x, 0.55 - w / 2, m, ha="center", va="center", color="white", fontsize=11, zorder=6)
pt(ax, (0, 1), "$A$", (0, 10)); pt(ax, (3, 1), "$B$", (0, 10)); pt(ax, (G, 1), "$G$", (0, 10), color=TEAL)
ax.annotate("", xy=(0, 1.42), xytext=(G, 1.42), arrowprops=dict(arrowstyle="<->", color=GRAY))
ax.annotate("", xy=(G, 1.42), xytext=(3, 1.42), arrowprops=dict(arrowstyle="<->", color=GRAY))
ax.text(G / 2, 1.5, "20 cm", ha="center", color=GRAY); ax.text((G + 3) / 2, 1.5, "10 cm", ha="center", color=GRAY)
ax.text(1.5, -0.25, r"équilibre : $1\times GA = 2\times GB$", ha="center", fontsize=13)
ax.set_xlim(-0.5, 3.5); ax.set_ylim(-0.4, 1.75); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "barycentre-balance.svg"); plt.close(fig)

# 2. trois barycentres de A et B : AG = t AB avec t = 1/3, -1/2, 2
rows = [(r"$(A,\,2)$ et $(B,\,1)$", 1/3, r"$\overrightarrow{AG}=\frac{1}{3}\overrightarrow{AB}$"),
        (r"$(A,\,3)$ et $(B,\,-1)$", -1/2, r"$\overrightarrow{AG}=-\frac{1}{2}\overrightarrow{AB}$"),
        (r"$(A,\,-1)$ et $(B,\,2)$", 2, r"$\overrightarrow{AG}=2\,\overrightarrow{AB}$")]
fig, ax = plt.subplots(figsize=(7.0, 3.6))
for k, (lab, t, rel) in enumerate(rows):
    y = -1.1 * k
    ax.plot([-1.0, 2.6], [y, y], color=GRAY, lw=0.9)
    ax.plot([0, 1], [y, y], color="black", lw=2.6)
    pt(ax, (0, y), "$A$", (0, 8)); pt(ax, (1, y), "$B$", (0, 8))
    pt(ax, (t, y), "$G$", (0, -20), color=ORANGE, ms=8)
    ax.text(-1.2, y, lab, ha="right", va="center", fontsize=14)
    ax.text(2.75, y, rel, ha="left", va="center", fontsize=14, color=ORANGE)
ax.set_xlim(-3.6, 4.6); ax.set_ylim(-2.75, 0.6); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "barycentre-deux-points.svg"); plt.close(fig)

# 3. barycentre partiel : G barycentre de (A,2), (B,1), (C,1) = milieu de [AI]
A = np.array([1.2, 3.2]); B = np.array([0, 0]); C = np.array([4.2, 0.3])
I = (B + C) / 2; Gp = (A + I) / 2
fig, ax = plt.subplots(figsize=(6.0, 4.4))
ax.add_patch(Polygon([A, B, C], closed=True, fill=False, ec="black", lw=1.8))
ax.plot(*zip(A, I), color=TEAL, lw=1.6, ls="--")
pt(ax, A, r"$(A,\,2)$", (0, 9)); pt(ax, B, r"$(B,\,1)$", (-10, -20)); pt(ax, C, r"$(C,\,1)$", (10, -20))
pt(ax, I, r"$(I,\,2)$", (0, -22), color=TEAL)
pt(ax, Gp, "$G$", (14, 0), color=ORANGE, ms=8)
ax.text(2.55, 2.9, r"$I$ : barycentre de $(B,1)$ et $(C,1)$", fontsize=11, color=TEAL)
ax.text(2.55, 2.45, r"$G$ : barycentre de $(A,2)$ et $(I,2)$", fontsize=11, color=ORANGE)
ax.set_xlim(-0.6, 6.2); ax.set_ylim(-0.7, 3.7); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "barycentre-partiel.svg"); plt.close(fig)

# 4. lieux : triangle équilatéral de côté a, cercles inscrit (MG = a√3/6) et circonscrit (MG = a√3/3)
a = 3.0
A = np.array([0, a * np.sqrt(3) / 2]); B = np.array([-a / 2, 0]); C = np.array([a / 2, 0])
G = (A + B + C) / 3; r = a * np.sqrt(3) / 6; R = a * np.sqrt(3) / 3
fig, ax = plt.subplots(figsize=(5.6, 5.0))
ax.add_patch(Circle(G, R, fill=False, ec=BLUE, lw=2))
ax.add_patch(Circle(G, r, fill=False, ec=ORANGE, lw=2))
ax.add_patch(Polygon([A, B, C], closed=True, fill=False, ec="black", lw=1.6))
pt(ax, A, "$A$", (0, 9)); pt(ax, B, "$B$", (-12, -14)); pt(ax, C, "$C$", (12, -14)); pt(ax, G, "$G$", (12, 4), color=TEAL)
ax.text(G[0] + 1.75, G[1] + 1.2, r"$\Vert\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}\Vert=a\sqrt{3}$", color=BLUE, fontsize=11)
ax.text(G[0] - 0.05, -1.3, r"$\Vert\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}\Vert=\frac{a\sqrt{3}}{2}$", color=ORANGE, fontsize=11, ha="center")
ax.set_xlim(-2.4, 4.6); ax.set_ylim(-1.6, 2.85); ax.set_aspect("equal"); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT + "barycentre-lieux.svg"); plt.close(fig)
print("ok")
