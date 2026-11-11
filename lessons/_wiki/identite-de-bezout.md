---
theorem: "Identité de Bézout"
---

:::redaction
Supposons qu'il existe $u$, $v$ entiers tels que $au + bv = 1$, et soit $d$ un diviseur commun de $a$ et $b$.
Alors $d$ divise $au + bv = 1$, donc $d = \pm 1$ : $a \wedge b = 1$.
Réciproquement, supposons $a \wedge b = 1$ ; quitte à changer les signes de $u$ et $v$, on suppose $a > 0$ et $b > 0$.
Si $b = 1$, le couple $(0, 1)$ convient.
Si $b \geq 2$, il existe $u$ tel que $au \equiv 1\ [b]$ (inverse de $a$ modulo $b$).
Donc il existe un entier $q$ tel que $au - 1 = bq$.
D'où $au + b(-q) = 1$, et le couple $(u, -q)$ convient.
:::
