---
theorem: "Équation ax + by = c"
---

:::redaction
Si $(x, y)$ est solution, $d \mid a$ et $d \mid b$, donc $d \mid ax + by = c$.
Réciproquement, supposons $c = dc'$ ; d'après Bézout, il existe $u$, $v$ tels que $au + bv = d$.
Alors $a(uc') + b(vc') = dc' = c$ : $(uc', vc')$ est solution.
Soit $(x_0, y_0)$ une solution et $(x, y)$ une autre ; en soustrayant, $a(x - x_0) = -b(y - y_0)$.
On écrit $a = da'$, $b = db'$ avec $a' \wedge b' = 1$ ; en divisant par $d$, $a'(x - x_0) = -b'(y - y_0)$.
Donc $b' \mid a'(x - x_0)$, et, d'après le lemme de Gauss, $b' \mid x - x_0$ : $x = x_0 + b'k$ avec $k$ entier.
En remplaçant, $a'b'k = -b'(y - y_0)$, donc $y = y_0 - a'k$.
Réciproquement, $a\left(x_0 + \dfrac bd k\right) + b\left(y_0 - \dfrac ad k\right) = ax_0 + by_0 = c$.
D'où les solutions sont les couples $\left(x_0 + \dfrac bd k,\ y_0 - \dfrac ad k\right)$, $k \in \mathbb Z$.
:::
