---
theorem: "Dérivée d'une composée"
---

:::proof[Avec une fonction auxiliaire]
On note $y_0 = u(x_0)$. Le piège : $u(x) - u(x_0)$ peut s'annuler pour $x \neq x_0$, on ne peut donc pas simplement « multiplier et diviser » par $u(x) - u(x_0)$. On contourne avec une fonction auxiliaire.

| Étape | Justification |
|---|---|
| On pose $\varphi(y) = \dfrac{f(y) - f(y_0)}{y - y_0}$ si $y \neq y_0$, et $\varphi(y_0) = f'(y_0)$ | taux d'accroissement de $f$ en $y_0$ |
| $\varphi$ est continue en $y_0$ | $f$ est dérivable en $y_0$ |
| Pour tout $y$ : $f(y) - f(y_0) = \varphi(y)\,(y - y_0)$ | vrai aussi pour $y = y_0$ (les deux membres sont nuls) |
| Avec $y = u(x)$ : $\dfrac{f(u(x)) - f(u(x_0))}{x - x_0} = \varphi\big(u(x)\big)\times\dfrac{u(x) - u(x_0)}{x - x_0}$ | on divise par $x - x_0 \neq 0$ |
| $u(x) \to u(x_0)$, donc $\varphi\big(u(x)\big) \to \varphi(y_0) = f'(y_0)$ | $u$ dérivable donc continue ; limite d'une composée |
| Le taux de $f\circ u$ tend vers $f'\big(u(x_0)\big)\times u'(x_0)$ | produit de limites |
:::

:::redaction
On pose $y_0 = u(x_0)$ et on définit $\varphi(y) = \dfrac{f(y) - f(y_0)}{y - y_0}$ pour $y \neq y_0$, et $\varphi(y_0) = f'(y_0)$.
$f$ est dérivable en $y_0$, donc $\lim\limits_{y \to y_0} \varphi(y) = f'(y_0) = \varphi(y_0)$ : $\varphi$ est continue en $y_0$.
Pour tout $y$, $f(y) - f(y_0) = \varphi(y)\,(y - y_0)$, y compris pour $y = y_0$.
Donc, pour $x \neq x_0$, $\dfrac{f\big(u(x)\big) - f\big(u(x_0)\big)}{x - x_0} = \varphi\big(u(x)\big) \times \dfrac{u(x) - u(x_0)}{x - x_0}$.
Or $u$ est dérivable en $x_0$, donc continue en $x_0$ : $u(x) \to y_0$, par suite $\varphi\big(u(x)\big) \to \varphi(y_0) = f'(y_0)$.
De plus $\dfrac{u(x) - u(x_0)}{x - x_0} \to u'(x_0)$.
D'où $f\circ u$ est dérivable en $x_0$ et $(f\circ u)'(x_0) = f'\big(u(x_0)\big) \times u'(x_0)$.
:::
