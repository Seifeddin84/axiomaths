---
theorem: "Linéarité de l'espérance"
---

:::redaction
En regroupant les issues qui donnent la même valeur, $E(X) = \displaystyle\sum_{a \in E} X(a)\,p(a)$.
Donc $E(\alpha X) = \displaystyle\sum_a \alpha X(a)\,p(a) = \alpha\sum_a X(a)\,p(a) = \alpha\,E(X)$.
De même $E(X + Y) = \displaystyle\sum_a \big(X(a) + Y(a)\big)\,p(a) = \sum_a X(a)\,p(a) + \sum_a Y(a)\,p(a) = E(X) + E(Y)$.
Enfin $E(X + b) = E(X) + b\displaystyle\sum_a p(a)$, et $\displaystyle\sum_a p(a) = 1$, d'où $E(X + b) = E(X) + b$.
:::
