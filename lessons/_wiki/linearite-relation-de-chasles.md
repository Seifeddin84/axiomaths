---
theorem: "Linéarité, relation de Chasles"
---

:::redaction
Soit $F$ et $G$ des primitives de $f$ et $g$ sur $I$.
$(F + G)' = f + g$, donc $F + G$ est une primitive de $f + g$.
Par suite $\displaystyle\int_a^b (f + g)(x)\,dx = (F + G)(b) - (F + G)(a) = \big[F(b) - F(a)\big] + \big[G(b) - G(a)\big] = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$.
De même, $(\lambda F)' = \lambda f$, donc $\displaystyle\int_a^b \lambda f(x)\,dx = \lambda F(b) - \lambda F(a) = \lambda\int_a^b f(x)\,dx$.
Enfin $F(b) - F(a) = \big[F(c) - F(a)\big] + \big[F(b) - F(c)\big]$, d'où $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
:::
