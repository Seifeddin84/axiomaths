---
theorem: "Composée de deux similitudes"
---

:::proof[Les rapports se multiplient]
| Étape | Justification |
|---|---|
| Soit $f$ de rapport $k$, $g$ de rapport $k'$, et $M$, $N$ deux points | hypothèses |
| $g\big(f(M)\big)\,g\big(f(N)\big) = k'\,f(M)f(N)$ | $g$ multiplie les distances par $k'$ |
| $= k'k\,MN$ | $f$ multiplie les distances par $k$ |
| donc $g\circ f$ est une similitude de rapport $kk'$ | définition |
:::

:::redaction
Soit $f$ une similitude de rapport $k$, $g$ une similitude de rapport $k'$, et $M$, $N$ deux points.
$g$ multiplie les distances par $k'$, donc $g\big(f(M)\big)\,g\big(f(N)\big) = k'\,f(M)f(N)$.
Or $f$ multiplie les distances par $k$, donc $f(M)f(N) = k\,MN$.
D'où $(g\circ f)(M)\,(g\circ f)(N) = kk'\,MN$ : $g\circ f$ est une similitude de rapport $kk'$.
:::
