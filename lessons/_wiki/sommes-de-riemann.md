---
theorem: "Sommes de Riemann"
admis: true
---

:::proof[Le cas d'une dérivée bornée]
On suppose $f$ dérivable sur $[a\,;b]$ avec $\lvert f'\rvert \leq M$ : c'est le cas de toutes les fonctions usuelles. On note $h = \dfrac{b - a}{n}$, $x_k = a + kh$, et $S_n$ la somme de gauche.

| Étape | Justification |
|---|---|
| $S_n = \displaystyle\sum_{k=0}^{n-1}\int_{x_k}^{x_{k+1}} f(x_k)\,dt$ | l'intégrale d'une constante sur un intervalle de longueur $h$ vaut $h\,f(x_k)$ |
| $\displaystyle\int_a^b f - S_n = \sum_{k=0}^{n-1}\int_{x_k}^{x_{k+1}}\big(f(t) - f(x_k)\big)\,dt$ | Chasles et linéarité |
| $\lvert f(t) - f(x_k)\rvert \leq M\,(t - x_k)$ | inégalité des accroissements finis |
| Chaque terme est majoré en valeur absolue par $\displaystyle\int_{x_k}^{x_{k+1}} M\,(t - x_k)\,dt = \dfrac{M h^2}{2}$ | positivité |
| $\left\lvert\displaystyle\int_a^b f - S_n\right\rvert \leq n\,\dfrac{M h^2}{2} = \dfrac{M(b - a)^2}{2n} \to 0$ | il y a $n$ termes |
| La somme de droite diffère de $S_n$ de $h\big(f(b) - f(a)\big) \to 0$ | les deux sommes ont $n - 1$ termes communs |

Contrôle sur $x^2$ et $[0\,;1]$ ($M = 2$) : l'erreur de la somme de gauche vaut $\dfrac{3n - 1}{6n^2} \leq \dfrac1n$ ✓. Pour une fonction seulement continue, il faut la **continuité uniforme** (théorème de Heine), hors programme.
:::

:::redaction
On pose $h = \dfrac{b - a}{n}$ et $x_k = a + kh$ pour $0 \leq k \leq n$.
Pour tout $k$, $h\,f(x_k) = \displaystyle\int_{x_k}^{x_{k+1}} f(x_k)\,dt$, donc $S_n = \displaystyle\sum_{k=0}^{n-1}\int_{x_k}^{x_{k+1}} f(x_k)\,dt$.
D'après la relation de Chasles et la linéarité, $\displaystyle\int_a^b f(t)\,dt - S_n = \sum_{k=0}^{n-1}\int_{x_k}^{x_{k+1}}\big(f(t) - f(x_k)\big)\,dt$.
Or $\lvert f'\rvert \leq M$ sur $[a\,;b]$, donc, d'après l'inégalité des accroissements finis, $\lvert f(t) - f(x_k)\rvert \leq M\,(t - x_k)$ pour $t \in [x_k\,;x_{k+1}]$.
Par positivité de l'intégrale, $\left\lvert\displaystyle\int_{x_k}^{x_{k+1}}\big(f(t) - f(x_k)\big)\,dt\right\rvert \leq \displaystyle\int_{x_k}^{x_{k+1}} M\,(t - x_k)\,dt = \dfrac{Mh^2}{2}$.
Par suite, $\left\lvert\displaystyle\int_a^b f(t)\,dt - S_n\right\rvert \leq n\,\dfrac{Mh^2}{2} = \dfrac{M(b - a)^2}{2n}$.
Or $\dfrac{M(b - a)^2}{2n} \to 0$, donc $S_n \to \displaystyle\int_a^b f(t)\,dt$.
Enfin, la somme de droite est $S_n + h\big(f(b) - f(a)\big)$, et $h\big(f(b) - f(a)\big) \to 0$ : elle a la même limite.
:::
