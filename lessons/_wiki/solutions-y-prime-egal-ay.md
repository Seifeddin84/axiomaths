---
theorem: "Solutions de y' = ay"
---

:::redaction
Pour tout réel $C$, la fonction $f(x) = Ce^{ax}$ vérifie $f'(x) = aCe^{ax} = af(x)$ : c'est une solution.
Réciproquement, soit $f$ une solution sur $\mathbb R$, et $g(x) = f(x)\,e^{-ax}$.
$g$ est dérivable et $g'(x) = f'(x)\,e^{-ax} - af(x)\,e^{-ax} = \big(f'(x) - af(x)\big)e^{-ax}$.
Or $f' = af$, donc $g' = 0$ sur l'intervalle $\mathbb R$ : $g$ est constante, égale à un réel $C$.
D'où $f(x)\,e^{-ax} = C$, c'est-à-dire $f(x) = Ce^{ax}$.
:::
