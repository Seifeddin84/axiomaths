---
theorem: "Solutions de y' = ay + b"
---

:::redaction
Soit $f$ une fonction dérivable sur $\mathbb R$ ; on pose $g = f + \dfrac ba$, de sorte que $g' = f'$.
$f$ est solution si et seulement si $f' = af + b$.
Or $af + b = a\left(g - \dfrac ba\right) + b = ag$, donc $f$ est solution si et seulement si $g' = ag$.
D'après le théorème précédent, ceci équivaut à : il existe $C \in \mathbb R$ tel que $g(x) = Ce^{ax}$.
D'où les solutions sont les fonctions $f(x) = Ce^{ax} - \dfrac ba$, avec $C \in \mathbb R$.
:::
