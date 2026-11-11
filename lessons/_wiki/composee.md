---
theorem: "Composée"
---

:::proof[Deux conservations à la suite]
| Étape | Justification |
|---|---|
| Soit $f$ et $g$ deux isométries et $M$, $N$ deux points | hypothèses |
| $g\big(f(M)\big)\,g\big(f(N)\big) = f(M)\,f(N)$ | $g$ conserve les distances |
| $f(M)\,f(N) = MN$ | $f$ conserve les distances |
| donc $g\circ f$ conserve les distances : c'est une isométrie | définition |
:::

:::redaction
Soit $f$ et $g$ deux isométries, et $M$, $N$ deux points du plan.
$g$ conserve les distances, donc $g\big(f(M)\big)\,g\big(f(N)\big) = f(M)\,f(N)$.
Or $f$ conserve aussi les distances, donc $f(M)\,f(N) = MN$.
D'où $(g\circ f)(M)\,(g\circ f)(N) = MN$ : $g\circ f$ est une isométrie.
:::
