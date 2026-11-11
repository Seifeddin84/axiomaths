---
theorem: "p_B est une probabilité"
---

:::redaction
On a $E \cap B = B$, donc $p_B(E) = \dfrac{p(B)}{p(B)} = 1$.
De même $\varnothing \cap B = \varnothing$, donc $p_B(\varnothing) = \dfrac{p(\varnothing)}{p(B)} = 0$.
Soit $A$ un événement et $A \cap B = \{a'_1, \dots, a'_m\}$.
Par définition de $p$, $p(A \cap B) = p(a'_1) + \dots + p(a'_m)$.
Donc $p_B(A) = \dfrac{p(a'_1)}{p(B)} + \dots + \dfrac{p(a'_m)}{p(B)} = p_B(\{a'_1\}) + \dots + p_B(\{a'_m\})$.
Or, pour une issue $a \in A$ hors de $B$, $p_B(\{a\}) = 0$ ; d'où $p_B(A)$ est la somme des $p_B$ des événements élémentaires de $A$.
:::
