---
theorem: "Une isométrie est une bijection"
---

:::redaction
Si $M \neq N$, alors $M'N' = MN > 0$, donc $M' \neq N'$ : $f$ est injective.
Soit $A$, $B$, $C$ trois points non alignés ; leurs images $A'$, $B'$, $C'$ sont non alignées, car $f$ conserve les combinaisons linéaires.
Soit $N$ un point du plan ; $(A', \overrightarrow{A'B'}, \overrightarrow{A'C'})$ est un repère, donc il existe $x$ et $y$ tels que $\overrightarrow{A'N} = x\,\overrightarrow{A'B'} + y\,\overrightarrow{A'C'}$.
On définit $M$ par $\overrightarrow{AM} = x\,\overrightarrow{AB} + y\,\overrightarrow{AC}$.
Par conservation des combinaisons linéaires, $\overrightarrow{A'M'} = x\,\overrightarrow{A'B'} + y\,\overrightarrow{A'C'} = \overrightarrow{A'N}$, donc $M' = N$.
Par suite, $f$ est surjective, donc bijective.
Enfin, si $N = f(M)$ et $N_1 = f(M_1)$, alors $f^{-1}(N)\,f^{-1}(N_1) = MM_1 = NN_1$ : $f^{-1}$ est une isométrie.
:::
