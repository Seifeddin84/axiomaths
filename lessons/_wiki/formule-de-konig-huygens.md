---
theorem: "Formule de König-Huygens"
---

:::redaction
On note $\overline{xy} = \dfrac1n\displaystyle\sum x_iy_i$.
Pour tout $i$, $(x_i - \bar X)(y_i - \bar Y) = x_iy_i - \bar Y x_i - \bar X y_i + \bar X\bar Y$.
En faisant la moyenne des $n$ termes, et comme la moyenne des $x_i$ est $\bar X$ et celle des $y_i$ est $\bar Y$ :
$\operatorname{cov}(X, Y) = \overline{xy} - \bar Y\bar X - \bar X\bar Y + \bar X\bar Y$.
D'où $\operatorname{cov}(X, Y) = \overline{xy} - \bar X\bar Y$.
Pour un tableau à double entrée, le couple $(x_i, y_j)$ est compté $n_{ij}$ fois, donc $\displaystyle\sum x_iy_i$ devient $\displaystyle\sum n_{ij}\,x_iy_j$.
:::
