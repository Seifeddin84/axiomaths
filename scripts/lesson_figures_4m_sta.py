# Figures of the 4ème Maths lesson "Statistiques" (python scripts/lesson_figures_4m_sta.py).
# Requires: pip install numpy matplotlib
import os, math
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.92)


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.08); plt.close(fig)


def style(ax, xlab, ylab, xt, yt):
    for s in ("top", "right"): ax.spines[s].set_visible(False)
    for s in ("left", "bottom"): ax.spines[s].set_color("#9ca3af")
    ax.set_xticks(xt); ax.set_yticks(yt); ax.tick_params(colors="#4b5563", labelsize=11.5, length=3)
    ax.set_xlabel(xlab, fontsize=12.5, color="#374151"); ax.set_ylabel(ylab, fontsize=12.5, color="#374151")


# ---------------------------------------------------------------- data of the running example (6 pupils)
X = np.array([2, 4, 6, 8, 10, 12.0]); Y = np.array([5, 9, 10, 12, 14, 16.0])
mx, my = X.mean(), Y.mean(); vx, vy = (X ** 2).mean() - mx ** 2, (Y ** 2).mean() - my ** 2; cov = (X * Y).mean() - mx * my
assert (mx, my) == (7, 11) and abs(vx - 35 / 3) < 1e-12 and abs(vy - 38 / 3) < 1e-12 and abs(cov - 12) < 1e-12
a = cov / vx; b = my - a * mx; assert abs(a - 36 / 35) < 1e-12 and abs(b - 19 / 5) < 1e-12
assert np.allclose(np.polyfit(X, Y, 1), [a, b])                                            # least squares = polyfit
res = Y - (a * X + b); sse = float((res ** 2).sum()); assert abs(sse - 68 / 35) < 1e-12 and abs(res.sum()) < 1e-12
rho = cov / math.sqrt(vx * vy); assert abs(sse - 6 * vy * (1 - rho ** 2)) < 1e-9
XT, YT = [2, 4, 6, 8, 10, 12], [4, 6, 8, 10, 12, 14, 16, 18]

# ================================================================ 1. cloud, mean point, regression line and residuals
fig, ax = plt.subplots(figsize=(4.7, 3.7))
xs = np.array([0.8, 13.2]); ax.plot(xs, a * xs + b, color=ORANGE, lw=2.4, zorder=3)
for xi, yi in zip(X, Y): ax.plot([xi, xi], [yi, a * xi + b], color="#374151", lw=2.4, zorder=4)
ax.plot(X, Y, "o", color=TEAL, ms=8, zorder=5)
ax.plot([mx], [my], "D", color="black", ms=8, zorder=6)
ax.text(mx + 0.35, my - 1.25, r"$G\,(7\,;\,11)$", fontsize=12.5, ha="left", va="center", bbox=WHITE, zorder=7)
ax.text(3.6, 14.6, "droite des\nmoindres carrés", color=ORANGE, fontsize=12, ha="center", va="center", linespacing=1.2)
ax.text(10.3, 6.2, "écarts verticaux", color="#374151", fontsize=12, ha="center", va="center")
ax.annotate("", xy=(4.08, 8.5), xytext=(8.1, 6.6), arrowprops=dict(arrowstyle="-", color="#374151", lw=1.0, shrinkA=2, shrinkB=0))
style(ax, "heures de révision par semaine", "note sur 20", XT, YT)
ax.set_xlim(0.8, 13.2); ax.set_ylim(3, 18.6)
save(fig, "m4-sta-residus.svg")

# ================================================================ 2. covariance = mean of signed rectangles
fig, ax = plt.subplots(figsize=(4.7, 3.7))
x0, x1, y0, y1 = 0.8, 13.2, 3, 18.6
for (xa, xb, ya, yb, col) in ((mx, x1, my, y1, TEAL), (x0, mx, y0, my, TEAL), (x0, mx, my, y1, ORANGE), (mx, x1, y0, my, ORANGE)):
    ax.add_patch(Rectangle((xa, ya), xb - xa, yb - ya, fc=col, alpha=0.10, ec="none", zorder=0))
ax.axvline(mx, color=GRAY, lw=1.4, ls=(0, (4, 3)), zorder=1); ax.axhline(my, color=GRAY, lw=1.4, ls=(0, (4, 3)), zorder=1)
for (px, py, col) in ((12, 16, TEAL), (4, 9, TEAL)):                                        # two signed rectangles with a corner at G
    assert (px - mx) * (py - my) > 0
    ax.add_patch(Rectangle((min(px, mx), min(py, my)), abs(px - mx), abs(py - my), fc=col, alpha=0.28, ec=col, lw=1.4, zorder=2))
ax.plot(X, Y, "o", color=TEAL, ms=8, zorder=5); ax.plot([mx], [my], "D", color="black", ms=8, zorder=6)
for (tx, ty, t, col) in ((11.4, 5.4, r"$-$", ORANGE), (2.6, 16.6, r"$-$", ORANGE), (12.55, 13.2, r"$+$", TEAL), (1.9, 6.6, r"$+$", TEAL)):
    ax.text(tx, ty, "+" if "+" in t else "\u2212", color=col, fontsize=34, fontweight="bold", family="DejaVu Sans", ha="center", va="center", zorder=7)
ax.text(mx + 0.3, my + 0.75, r"$G$", fontsize=13, ha="left", va="center", zorder=7)
ax.text(9.3, 15.4, "aire 25", color=TEAL, fontsize=11.5, ha="center", va="center", zorder=7)
ax.text(5.5, 7.3, "aire 6", color=TEAL, fontsize=11.5, ha="center", va="center", zorder=7, bbox=WHITE)
style(ax, "heures de révision par semaine", "note sur 20", XT, YT)
ax.set_xlim(x0, x1); ax.set_ylim(y0, y1)
save(fig, "m4-sta-quadrants.svg")
assert (12 - mx) * (16 - my) == 25 and (4 - mx) * (9 - my) == 6

# ================================================================ 3. Mayer's method: two half-clouds, two mean points, line (G1 G2)
G1 = (X[:3].mean(), Y[:3].mean()); G2 = (X[3:].mean(), Y[3:].mean()); assert G1 == (4, 8) and G2 == (10, 14)
am = (G2[1] - G1[1]) / (G2[0] - G1[0]); bm = G1[1] - am * G1[0]; assert (am, bm) == (1, 4) and abs(am * mx + bm - my) < 1e-12
fig, ax = plt.subplots(figsize=(4.7, 3.7))
ax.plot(xs, am * xs + bm, color=VIOLET, lw=2.4, zorder=3)
ax.plot(X[:3], Y[:3], "o", color=TEAL, ms=8, zorder=5); ax.plot(X[3:], Y[3:], "o", color=ORANGE, ms=8, zorder=5)
ax.plot([G1[0]], [G1[1]], "D", color=TEAL, ms=9, mec="black", mew=1.4, zorder=6); ax.plot([G2[0]], [G2[1]], "D", color=ORANGE, ms=9, mec="black", mew=1.4, zorder=6)
ax.plot([mx], [my], "D", color="black", ms=8, zorder=6)
ax.text(G1[0] + 1.0, G1[1] - 1.3, r"$G_1$", color=TEAL, fontsize=13, ha="left", va="center", bbox=WHITE, zorder=7)
ax.text(G2[0] - 0.45, G2[1] + 0.9, r"$G_2$", color=ORANGE, fontsize=13, ha="right", va="center", bbox=WHITE, zorder=7)
ax.text(mx + 0.35, my - 1.0, r"$G$", fontsize=13, ha="left", va="center", bbox=WHITE, zorder=7)
ax.text(4.0, 16.3, "droite de Mayer", color=VIOLET, fontsize=12, ha="center", va="center")
ax.text(2.6, 3.9, "partie I", color=TEAL, fontsize=12, ha="center", va="center", zorder=7)
ax.text(11.6, 11.2, "partie II", color=ORANGE, fontsize=12, ha="center", va="center", zorder=7)
style(ax, "heures de révision par semaine", "note sur 20", XT, YT)
ax.set_xlim(0.8, 13.2); ax.set_ylim(3, 18.6)
save(fig, "m4-sta-mayer.svg")

# ================================================================ 4. grouped table (20 pupils): screen time vs sleep, the two regression lines
tab = {(1, 7): 0, (1, 8): 2, (1, 9): 4, (2, 7): 3, (2, 8): 5, (2, 9): 2, (3, 7): 3, (3, 8): 1, (3, 9): 0}
N = sum(tab.values()); assert N == 20
gx = sum(i * v for (i, j), v in tab.items()) / N; gy = sum(j * v for (i, j), v in tab.items()) / N
gvx = sum(i * i * v for (i, j), v in tab.items()) / N - gx ** 2; gvy = sum(j * j * v for (i, j), v in tab.items()) / N - gy ** 2
gc = sum(i * j * v for (i, j), v in tab.items()) / N - gx * gy
assert abs(gx - 1.9) < 1e-12 and gy == 8 and abs(gvx - 0.49) < 1e-12 and abs(gvy - 0.6) < 1e-12 and abs(gc + 0.35) < 1e-12
ga = gc / gvx; gb = gy - ga * gx; assert abs(ga + 5 / 7) < 1e-12 and abs(gb - 131 / 14) < 1e-12
ap = gc / gvy; assert abs(ap + 7 / 12) < 1e-12 and abs(ga * ap - (gc / math.sqrt(gvx * gvy)) ** 2) < 1e-12
fig, ax = plt.subplots(figsize=(4.7, 3.8))
for (i, j), v in tab.items():
    if v: ax.scatter([i], [j], s=135 * v, color=TEAL, alpha=0.35, edgecolor=TEAL, linewidth=1.4, zorder=3); ax.text(i + (0.065 if (i, j) == (2, 8) else 0), j - (0.03 if (i, j) == (2, 8) else 0), str(v), fontsize=12, ha="center", va="center", zorder=6)
xl = np.array([0.55, 3.45])
ax.plot(xl, ga * xl + gb, color=BLUE, lw=2.3, zorder=2)
yl = np.array([6.45, 9.55]); ax.plot(ap * (yl - gy) + gx, yl, color=ORANGE, lw=2.3, zorder=2)
ax.plot([gx], [gy], "D", color="black", ms=8, zorder=7); ax.text(gx - 0.3, gy - 0.3, r"$G$", fontsize=13, ha="left", va="center", zorder=8, bbox=WHITE)
ax.text(3.18, 6.62, r"$Y$ en $X$", color=BLUE, fontsize=12, ha="center", va="center", bbox=WHITE, zorder=8)
ax.text(1.55, 9.4, r"$X$ en $Y$", color=ORANGE, fontsize=12, ha="center", va="center", bbox=WHITE, zorder=8)
style(ax, "heures d'écran par jour", "heures de sommeil", [1, 2, 3], [7, 8, 9])
ax.set_xlim(0.55, 3.45); ax.set_ylim(6.45, 9.55)
save(fig, "m4-sta-droites.svg")

# ================================================================ 5. exponential growth: the straight line fails, the model y = A q^x works
X5 = np.arange(6.0); Y5 = np.array([100, 135, 180, 245, 330, 450.0])
Z5 = np.log(Y5); az, bz = np.polyfit(X5, Z5, 1); ay, by = np.polyfit(X5, Y5, 1)
rz = np.corrcoef(X5, Z5)[0, 1]; ry = np.corrcoef(X5, Y5)[0, 1]
assert abs(az - 0.30029) < 1e-4 and abs(bz - 4.60144) < 1e-4 and abs(rz - 0.99995) < 1e-4 and abs(ry - 0.97562) < 1e-4
assert abs(math.exp(az * 8 + bz) - 1100.8) < 0.1 and abs(ay * 8 + by - 617.14) < 0.01
fig, ax = plt.subplots(figsize=(4.7, 3.7))
t = np.linspace(-0.2, 8.5, 300)
ax.plot(t, np.exp(az * t + bz), color=ORANGE, lw=2.4, zorder=3); ax.plot(t, ay * t + by, color=GRAY, lw=2.0, ls=(0, (5, 3)), zorder=2)
ax.plot(X5, Y5, "o", color=TEAL, ms=8, zorder=5)
ax.plot([8], [math.exp(az * 8 + bz)], "o", mfc="white", mec=ORANGE, mew=2, ms=8, zorder=6); ax.plot([8], [ay * 8 + by], "o", mfc="white", mec=GRAY, mew=2, ms=8, zorder=6)
ax.text(7.75, 1100, "1 101", color=ORANGE, fontsize=12, ha="right", va="center", bbox=WHITE)
ax.text(8.0, 470, "617", color=GRAY, fontsize=12, ha="right", va="center", bbox=WHITE)
ax.text(5.1, 910, r"$y = A\,q^{x}$", color=ORANGE, fontsize=13, ha="center", va="center")
ax.text(2.2, 560, "droite de\nrégression", color=GRAY, fontsize=12, ha="center", va="center", linespacing=1.2)
style(ax, "mois", "visiteurs (en centaines)", [0, 2, 4, 6, 8], [0, 300, 600, 900, 1200])
ax.set_xlim(-0.3, 8.6); ax.set_ylim(0, 1250)
save(fig, "m4-sta-exp.svg")
print("ok")
