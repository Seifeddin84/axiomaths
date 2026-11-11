---
theorem: "Théorème des accroissements finis"
---

:::redaction
On pose $m = \dfrac{f(b) - f(a)}{b - a}$ et, pour $x \in [a\,;b]$, $\varphi(x) = f(x) - f(a) - m\,(x - a)$.
$\varphi$ est continue sur $[a\,;b]$ et dérivable sur $]a\,;b[$, comme différence de fonctions qui le sont.
On a $\varphi(a) = 0$ et $\varphi(b) = f(b) - f(a) - m\,(b - a) = 0$, donc $\varphi(a) = \varphi(b)$.
D'après le théorème de Rolle, il existe $c \in\, ]a\,;b[$ tel que $\varphi'(c) = 0$.
Or $\varphi'(x) = f'(x) - m$, donc $f'(c) = m$.
D'où $f(b) - f(a) = f'(c)\,(b - a)$.
:::
