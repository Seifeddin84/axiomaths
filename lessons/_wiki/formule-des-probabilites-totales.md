---
theorem: "Formule des probabilités totales"
---

:::redaction
Les $B_i$ forment une partition de $E$, donc $A = (A \cap B_1) \cup \dots \cup (A \cap B_n)$.
Les $B_i$ sont deux à deux incompatibles, donc les $A \cap B_i$ le sont aussi.
Par additivité, $p(A) = p(A \cap B_1) + \dots + p(A \cap B_n)$.
Or, comme $p(B_i) \neq 0$, $p(A \cap B_i) = p(B_i)\,p_{B_i}(A)$.
D'où $p(A) = \displaystyle\sum_{i=1}^{n} p(B_i)\,p_{B_i}(A)$.
:::
