---
theorem: "Propriétés de rho"
---

:::redaction
D'après le théorème de la droite de régression, la somme minimale des carrés des écarts vaut $nV(Y)(1 - \rho^2)$.
C'est une somme de carrés, donc elle est positive ou nulle ; comme $nV(Y) > 0$, $1 - \rho^2 \geq 0$.
D'où $-1 \leq \rho \leq 1$.
$\rho^2 = 1$ si et seulement si cette somme est nulle, c'est-à-dire si et seulement si tous les écarts sont nuls.
Or un écart nul signifie que le point est sur la droite : $\rho = \pm1$ si et seulement si les points sont alignés.
Pour $a > 0$ et $b > 0$ : $\operatorname{cov}(aX + c, bY + d) = ab\,\operatorname{cov}(X, Y)$, $\sigma(aX + c) = a\,\sigma(X)$ et $\sigma(bY + d) = b\,\sigma(Y)$.
Donc $\rho(aX + c, bY + d) = \dfrac{ab\,\operatorname{cov}(X, Y)}{ab\,\sigma(X)\,\sigma(Y)} = \rho(X, Y)$.
:::
