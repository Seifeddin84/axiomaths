# Figures of the 4ème Maths lesson "Probabilités" (python scripts/lesson_figures_4m_proba.py).
# Requires: pip install numpy matplotlib
import os, math
from math import comb, exp, log
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Rectangle
plt.rcParams.update({"mathtext.fontset": "cm", "font.family": "serif", "font.size": 12, "svg.fonttype": "path"})
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL = "#0d9488"; ORANGE = "#ea580c"; GRAY = "#6b7280"; BLUE = "#2563eb"; VIOLET = "#7c3aed"
WHITE = dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.9)


def save(fig, name):
    fig.savefig(OUT + name, bbox_inches="tight", pad_inches=0.1); plt.close(fig)


# ================================================================ 1. Venn diagram : 1000 appliances, defects D1 (60) and D2 (50), both (20)
N, n1, n2, n12 = 1000, 60, 50, 20
only1, only2, none = n1 - n12, n2 - n12, N - (n1 + n2 - n12)
assert (only1, only2, none) == (40, 30, 910) and only1 + n12 + only2 + none == N
assert (n1 + n2 - n12) / N == 0.09 and none / N == 0.91 and (only1 + only2) / N == 0.07
fig, ax = plt.subplots(figsize=(8.4, 5.2))
ax.add_patch(Rectangle((-3.4, -2.2), 6.8, 4.4, fc="#f9fafb", ec=GRAY, lw=1.4))
ax.add_patch(Circle((-0.75, 0.05), 1.5, fc=TEAL, alpha=0.20, lw=0)); ax.add_patch(Circle((-0.75, 0.05), 1.5, fc="none", ec=TEAL, lw=2.2))
ax.add_patch(Circle((0.75, 0.05), 1.5, fc=ORANGE, alpha=0.20, lw=0)); ax.add_patch(Circle((0.75, 0.05), 1.5, fc="none", ec=ORANGE, lw=2.2))
ax.text(-1.55, 0.35, "40", ha="center", va="center", fontsize=17, color=TEAL, fontweight="bold"); ax.text(-1.55, -0.15, r"$0{,}04$", ha="center", va="center", fontsize=11.5, color=TEAL)
ax.text(0, 0.35, "20", ha="center", va="center", fontsize=17, color="black", fontweight="bold"); ax.text(0, -0.15, r"$0{,}02$", ha="center", va="center", fontsize=11.5, color="black")
ax.text(1.55, 0.35, "30", ha="center", va="center", fontsize=17, color=ORANGE, fontweight="bold"); ax.text(1.55, -0.15, r"$0{,}03$", ha="center", va="center", fontsize=11.5, color=ORANGE)
ax.text(-2.75, -1.55, "910", ha="center", va="center", fontsize=17, color=GRAY, fontweight="bold"); ax.text(-2.75, -1.95, r"$0{,}91$", ha="center", va="center", fontsize=11.5, color=GRAY)
ax.text(-1.5, 1.75, r"$D_1$ : 60 appareils", ha="center", color=TEAL, fontsize=12.5); ax.text(1.5, 1.75, r"$D_2$ : 50 appareils", ha="center", color=ORANGE, fontsize=12.5)
ax.text(3.3, -1.95, r"$E$ : 1000 appareils", ha="right", va="center", color=GRAY, fontsize=11)
ax.set_xlim(-3.6, 3.6); ax.set_ylim(-2.4, 2.4); ax.set_aspect("equal"); ax.axis("off")
ax.set_title(r"Deux défauts $D_1$ et $D_2$ : on compte chaque zone, puis on divise par $1000$", fontsize=12, pad=6)
save(fig, "m4-proba-venn.svg")

# ================================================================ 2. two dice : 36 equally likely outcomes
cells = [(i, j) for i in range(1, 7) for j in range(1, 7)]
doubles = [c for c in cells if c[0] == c[1]]; sev = [c for c in cells if c[0] + c[1] == 7]
assert len(cells) == 36 and len(doubles) == 6 and len(sev) == 6 and set(doubles).isdisjoint(sev)
fig, ax = plt.subplots(figsize=(6.4, 6.2))
for i, j in cells:
    col = TEAL if (i, j) in doubles else ORANGE if (i, j) in sev else None
    ax.add_patch(Rectangle((i - 0.5, j - 0.5), 1, 1, fc=col or "white", alpha=0.30 if col else 1, ec="#d1d5db", lw=1))
    if col: ax.add_patch(Rectangle((i - 0.5, j - 0.5), 1, 1, fc="none", ec=col, lw=1.8))
    ax.text(i, j, f"{i}{j}", ha="center", va="center", fontsize=10.5, color=col or GRAY)
ax.set_xlim(0.5, 6.5); ax.set_ylim(0.5, 6.5); ax.set_aspect("equal"); ax.set_xticks(range(1, 7)); ax.set_yticks(range(1, 7)); ax.tick_params(labelsize=11, colors=GRAY)
ax.set_xlabel("dé rouge", color=GRAY); ax.set_ylabel("dé vert", color=GRAY)
for sp in ax.spines.values(): sp.set_visible(False)
ax.text(6.9, 5.6, r"$\mathbf{doubles}$ : 6 cases" + "\n" + r"$p=\dfrac{6}{36}=\dfrac{1}{6}$", color=TEAL, fontsize=12.5, va="center", ha="left")
ax.text(6.9, 2.6, r"$\mathbf{somme\ 7}$ : 6 cases" + "\n" + r"$p=\dfrac{6}{36}=\dfrac{1}{6}$", color=ORANGE, fontsize=12.5, va="center", ha="left")
ax.set_title(r"Deux dés équilibrés : $36$ issues équiprobables", fontsize=12.5, pad=8)
save(fig, "m4-proba-des.svg")

# ================================================================ 3. probability tree of the screening test (p(M)=0.1, p(T|M)=0.98, p(T|notM)=0.01)
pM, pT_M, pT_nM = 0.1, 0.98, 0.01
leaves = {"MT": pM * pT_M, "MnT": pM * (1 - pT_M), "nMT": (1 - pM) * pT_nM, "nMnT": (1 - pM) * (1 - pT_nM)}
assert [round(v, 3) for v in leaves.values()] == [0.098, 0.002, 0.009, 0.891] and abs(sum(leaves.values()) - 1) < 1e-12
pT = leaves["MT"] + leaves["nMT"]; assert round(pT, 3) == 0.107 and round(leaves["MT"] / pT, 3) == 0.916
fig, ax = plt.subplots(figsize=(5.8, 4.2))
root = (0, 0); L1 = {"M": (3.0, 2.0), "nM": (3.0, -2.0)}
L2 = {"MT": (6.0, 3.0), "MnT": (6.0, 1.0), "nMT": (6.0, -1.0), "nMnT": (6.0, -3.0)}
def edge(a, b, lab, col, dy=0.0):
    ax.plot([a[0], b[0]], [a[1], b[1]], color=col, lw=1.8, zorder=1)
    ax.text((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + dy, lab, ha="center", va="center", fontsize=12, color=col, bbox=WHITE, zorder=3)
edge(root, L1["M"], r"$0{,}1$", GRAY, 0.2); edge(root, L1["nM"], r"$0{,}9$", GRAY, -0.2)
edge(L1["M"], L2["MT"], r"$0{,}98$", TEAL, 0.15); edge(L1["M"], L2["MnT"], r"$0{,}02$", GRAY, -0.15)
edge(L1["nM"], L2["nMT"], r"$0{,}01$", ORANGE, 0.15); edge(L1["nM"], L2["nMnT"], r"$0{,}99$", GRAY, -0.15)
def node(p, txt, col):
    ax.add_patch(Circle(p, 0.5, fc="white", ec=col, lw=2, zorder=4)); ax.text(p[0], p[1], txt, ha="center", va="center", fontsize=14, color=col, zorder=5)
ax.plot([0], [0], "o", color=GRAY, ms=7, zorder=4)
node(L1["M"], r"$M$", TEAL); node(L1["nM"], r"$\overline{M}$", GRAY)
tx = {"MT": r"$T$", "MnT": r"$\overline{T}$", "nMT": r"$T$", "nMnT": r"$\overline{T}$"}
cl = {"MT": TEAL, "MnT": GRAY, "nMT": ORANGE, "nMnT": GRAY}
for k, p in L2.items(): node(p, tx[k], cl[k])
res = {"MT": r"$\mathbf{0{,}098}$", "MnT": r"$0{,}002$", "nMT": r"$\mathbf{0{,}009}$", "nMnT": r"$0{,}891$"}
for k, p in L2.items(): ax.text(p[0] + 0.85, p[1], res[k], ha="left", va="center", fontsize=14, color=cl[k] if k in ("MT", "nMT") else GRAY)
ax.text(6.0, 4.1, "probabilité\ndu chemin", ha="left", va="center", fontsize=11, color=GRAY)
ax.set_xlim(-0.5, 9.2); ax.set_ylim(-3.8, 4.8); ax.set_aspect("equal"); ax.axis("off")
save(fig, "m4-proba-arbre.svg")

# ================================================================ 4. law and cumulative distribution function of X ~ B(3, 0.6)
pr = [comb(3, k) * 0.6 ** k * 0.4 ** (3 - k) for k in range(4)]
cum = list(np.cumsum(pr))
assert [round(x, 3) for x in pr] == [0.064, 0.288, 0.432, 0.216] and [round(x, 3) for x in cum] == [0.064, 0.352, 0.784, 1.0]
def clean(a):
    a.tick_params(labelsize=11.5, colors=GRAY)
    for sp in ("top", "right"): a.spines[sp].set_visible(False)
fig, a1 = plt.subplots(figsize=(5.2, 3.3))
a1.bar(range(4), pr, width=0.62, color=TEAL, alpha=0.75, ec=TEAL)
for k, v in enumerate(pr): a1.text(k, v + 0.012, rf"${v:.3f}$".replace(".", "{,}"), ha="center", fontsize=12.5, color=TEAL)
a1.set_xticks(range(4)); a1.set_ylim(0, 0.5); a1.set_xlabel(r"valeur $k$ de $X$", color=GRAY, fontsize=12); a1.set_ylabel(r"$p(X=k)$", color=GRAY, fontsize=12)
clean(a1); fig.tight_layout(); save(fig, "m4-proba-loi.svg")

fig, a2 = plt.subplots(figsize=(5.4, 3.5))
a2.hlines(0, -1.0, 0, color=ORANGE, lw=2.4)
for k in range(4):
    right = k + 1 if k < 3 else 4.2
    a2.hlines(cum[k], k, right, color=ORANGE, lw=2.4); a2.plot([k], [cum[k]], "o", color=ORANGE, ms=7)
    if k < 3: a2.plot([k + 1], [cum[k]], "o", mfc="white", mec=ORANGE, ms=7, mew=1.6)
    a2.text(k + 0.5 if k < 3 else 3.6, cum[k] + 0.05, rf"${cum[k]:.3f}$".replace(".", "{,}") if k < 3 else r"$1$", ha="center", fontsize=12.5, color=ORANGE)
a2.plot([0], [0], "o", mfc="white", mec=ORANGE, ms=7, mew=1.6)
a2.set_xlim(-1.0, 4.2); a2.set_ylim(-0.05, 1.15); a2.set_xticks(range(4)); a2.set_yticks([0, 0.5, 1]); a2.set_yticklabels(["0", "0,5", "1"])
a2.set_xlabel(r"$x$", color=GRAY, fontsize=12); a2.set_ylabel(r"$F(x)=p(X\leq x)$", color=GRAY, fontsize=12)
clean(a2); fig.tight_layout(); save(fig, "m4-proba-repartition.svg")

# ================================================================ 5. binomial laws B(10, p) for p = 0.2, 0.5, 0.9, on one panel
fig, ax = plt.subplots(figsize=(5.8, 3.7))
n = 10; w = 0.27
for off, p, col in zip((-w, 0, w), (0.2, 0.5, 0.9), (VIOLET, TEAL, ORANGE)):
    pk = [comb(n, k) * p ** k * (1 - p) ** (n - k) for k in range(n + 1)]
    assert abs(sum(pk) - 1) < 1e-12
    E = sum(k * x for k, x in enumerate(pk)); V = sum(k * k * x for k, x in enumerate(pk)) - E * E
    assert abs(E - n * p) < 1e-12 and abs(V - n * p * (1 - p)) < 1e-12                                   # E = np, V = np(1-p)
    lab = rf"$B(10\,;{p:.1f})$ : $E={E:.0f}$, $\sigma\approx{math.sqrt(V):.2f}$".replace(".", "{,}").replace("{,}1f", "")
    ax.bar(np.arange(n + 1) + off, pk, width=w, color=col, alpha=0.8, ec=col, label=lab)
    ax.vlines(E, 0, max(pk) + 0.045, color=col, lw=1.4, ls=(0, (3, 2)))
ax.set_xticks(range(0, 11)); ax.set_ylim(0, 0.56); ax.set_xlim(-0.7, 10.7)
ax.set_xlabel(r"nombre de succès $k$", color=GRAY, fontsize=12); ax.set_ylabel(r"$p(X=k)$", color=GRAY, fontsize=12)
ax.legend(loc="upper center", fontsize=10.5, frameon=False, handlelength=1.2, borderaxespad=0.1)
clean(ax); fig.tight_layout(); save(fig, "m4-proba-binomiale.svg")

# ================================================================ 6. continuous laws : uniform on [0,20] (shaded [2,5]) and exponential, lambda = ln2 / 10 (shaded x >= 10)
lam = log(2) / 10
xs = np.linspace(0, 40, 800); f = lam * np.exp(-lam * xs)
assert abs(3 / 20 - (5 - 2) * 0.05) < 1e-12 and abs(exp(-lam * 10) - 0.5) < 1e-12
assert abs(np.trapezoid(f, xs) - (1 - exp(-lam * 40))) < 1e-4
fig, a1 = plt.subplots(figsize=(5.4, 3.1))
a1.hlines(0.05, 0, 20, color=TEAL, lw=2.4); a1.vlines([0, 20], 0, 0.05, color=TEAL, lw=2.4)
a1.fill_between([2, 5], 0, 0.05, color=ORANGE, alpha=0.40)
a1.annotate(r"aire $=3\times\dfrac{1}{20}=0{,}15$", (5, 0.02), xytext=(14.5, 0.02), fontsize=12.5, color=ORANGE, ha="center", va="center", arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.3), bbox=WHITE)
a1.text(10, 0.058, r"densité $\dfrac{1}{20}$", ha="center", fontsize=12.5, color=TEAL)
a1.set_xlim(-2, 24); a1.set_ylim(0, 0.085); a1.set_xticks([0, 2, 5, 10, 15, 20]); a1.set_yticks([0, 0.05]); a1.set_yticklabels(["0", "0,05"])
clean(a1); fig.tight_layout(); save(fig, "m4-proba-uniforme.svg")

fig, a2 = plt.subplots(figsize=(5.4, 3.3))
a2.plot(xs, f, color=TEAL, lw=2.4); a2.fill_between(xs[xs >= 10], 0, f[xs >= 10], color=ORANGE, alpha=0.35)
a2.vlines(10, 0, lam * exp(-lam * 10), color=ORANGE, lw=1.6)
a2.annotate(r"$p(X\geq10)=\dfrac{1}{2}$", (21, 0.009), xytext=(29, 0.036), fontsize=12.5, color=ORANGE, ha="center", va="center", arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.3), bbox=WHITE)
a2.text(13, 0.062, r"densité $\lambda e^{-\lambda x}$", ha="left", fontsize=12.5, color=TEAL)
a2.set_xlim(-1, 40); a2.set_ylim(0, 0.085); a2.set_xticks([0, 10, 20, 30, 40]); a2.set_yticks([0, round(lam, 3)]); a2.set_yticklabels(["0", r"$\lambda$"])
clean(a2); fig.tight_layout(); save(fig, "m4-proba-exponentielle.svg")
print("ok")
