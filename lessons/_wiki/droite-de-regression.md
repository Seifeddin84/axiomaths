---
theorem: "Droite de régression"
---

:::redaction
On pose $u_i = x_i - \bar X$ et $v_i = y_i - \bar Y$ ; alors $\sum u_i = \sum v_i = 0$.
Pour tout $i$, $y_i - ax_i - b = (v_i - au_i) - d$, avec $d = a\bar X + b - \bar Y$.
Donc $S = \sum(v_i - au_i)^2 - 2d\sum(v_i - au_i) + nd^2 = \sum(v_i - au_i)^2 + nd^2$.
Or $nd^2 \geq 0$, avec égalité si et seulement si $b = \bar Y - a\bar X$ : à $a$ fixé, $S$ est minimale pour ce $b$, et la droite passe alors par $G$.
De plus $\sum(v_i - au_i)^2 = n\big(V(Y) - 2a\operatorname{cov}(X, Y) + a^2V(X)\big)$.
C'est un trinôme en $a$ de coefficient dominant $nV(X) > 0$, minimal en $a = \dfrac{\operatorname{cov}(X, Y)}{V(X)}$.
Sa valeur minimale est $n\left(V(Y) - \dfrac{\operatorname{cov}(X, Y)^2}{V(X)}\right) = nV(Y)(1 - \rho^2)$.
:::
