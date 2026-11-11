---
theorem: "Image d'un plan par une translation"
---

:::redaction
$M'(x', y', z')$ est l'image d'un point de $\mathcal P$ si et seulement si $M = t_{-\vec u}(M')$ est dans $\mathcal P$.
Or $M$ a pour coordonnées $(x' - u_1, y' - u_2, z' - u_3)$.
Donc $M' \in t_{\vec u}(\mathcal P) \iff a(x' - u_1) + b(y' - u_2) + c(z' - u_3) + d = 0$.
C'est-à-dire $ax' + by' + cz' + d - (au_1 + bu_2 + cu_3) = 0$, et $au_1 + bu_2 + cu_3 = \vec n\cdot\vec u$.
D'où l'image est le plan $ax + by + cz + d' = 0$ avec $d' = d - \vec n\cdot\vec u$, de même vecteur normal $\vec n$, donc parallèle à $\mathcal P$.
Elle est égale à $\mathcal P$ si et seulement si $d' = d$, c'est-à-dire $\vec n\cdot\vec u = 0$.
:::
