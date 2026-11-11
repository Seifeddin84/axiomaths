---
theorem: "Image d'un intervalle par une fonction continue"
admis: true
---

:::proof[Avec le théorème des valeurs intermédiaires]
Une partie $J$ de $\mathbb R$ est un intervalle lorsque, pour tous $y_1 < y_2$ dans $J$, tout $y$ entre $y_1$ et $y_2$ est dans $J$.

| Étape | Justification |
|---|---|
| Soit $y_1 = f(x_1)$ et $y_2 = f(x_2)$ dans $f(I)$, et $y$ entre les deux | $y_1, y_2$ sont des images |
| $f$ est continue sur l'intervalle d'extrémités $x_1$ et $x_2$, inclus dans $I$ | $I$ est un intervalle |
| Il existe $c$ entre $x_1$ et $x_2$ tel que $f(c) = y$, donc $y \in f(I)$ | théorème des valeurs intermédiaires |
| $f(I)$ est donc un intervalle | définition d'un intervalle |
| Sur un segment, le minimum $m$ et le maximum $M$ sont **atteints** (admis) : $f([a\,;b]) \subset [m\,;M]$ et contient $m$ et $M$ | complétude de $\mathbb R$ |
| $f([a\,;b])$ est un intervalle contenant $m$ et $M$, donc $f([a\,;b]) = [m\,;M]$ | point précédent |
| Si $f$ est strictement croissante, $m = f(a)$ et $M = f(b)$ | $f(a) \leq f(x) \leq f(b)$ |
:::

:::redaction
Soit $y_1$ et $y_2$ deux éléments de $f(I)$ avec $y_1 < y_2$, et $y \in [y_1\,;y_2]$.
Il existe $x_1$ et $x_2$ dans $I$ tels que $f(x_1) = y_1$ et $f(x_2) = y_2$.
$I$ est un intervalle, donc il contient le segment d'extrémités $x_1$ et $x_2$, sur lequel $f$ est continue.
D'après le théorème des valeurs intermédiaires, il existe $c$ entre $x_1$ et $x_2$ tel que $f(c) = y$, donc $y \in f(I)$.
Par suite, $f(I)$ est un intervalle.
Si $I = [a\,;b]$, on admet que $f$ atteint un minimum $m$ et un maximum $M$ sur $[a\,;b]$.
Alors $f([a\,;b]) \subset [m\,;M]$, et $f([a\,;b])$ est un intervalle qui contient $m$ et $M$, d'où $f([a\,;b]) = [m\,;M]$.
Si de plus $f$ est strictement croissante, pour tout $x \in [a\,;b]$, $f(a) \leq f(x) \leq f(b)$, donc $m = f(a)$ et $M = f(b)$.
:::
