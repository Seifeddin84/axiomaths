---
theorem: "Positivité et comparaison"
---

:::redaction
Soit $F$ une primitive de $f$ sur $[a\,;b]$.
Si $f \geq 0$ sur $[a\,;b]$, alors $F' \geq 0$, donc $F$ est croissante sur $[a\,;b]$.
Comme $a \leq b$, $F(b) \geq F(a)$, c'est-à-dire $\displaystyle\int_a^b f(x)\,dx \geq 0$.
Si $f \leq g$, alors $g - f \geq 0$, donc $\displaystyle\int_a^b (g - f)(x)\,dx \geq 0$.
Par linéarité, $\displaystyle\int_a^b g(x)\,dx - \int_a^b f(x)\,dx \geq 0$.
Si $m \leq f \leq M$, on compare $f$ aux fonctions constantes : $\displaystyle\int_a^b m\,dx = m(b - a)$ et $\displaystyle\int_a^b M\,dx = M(b - a)$.
Enfin $-\lvert f\rvert \leq f \leq \lvert f\rvert$, donc $\displaystyle -\int_a^b \lvert f(x)\rvert\,dx \leq \int_a^b f(x)\,dx \leq \int_a^b \lvert f(x)\rvert\,dx$.
D'où $\displaystyle\left\lvert \int_a^b f(x)\,dx\right\rvert \leq \int_a^b \lvert f(x)\rvert\,dx$.
:::
