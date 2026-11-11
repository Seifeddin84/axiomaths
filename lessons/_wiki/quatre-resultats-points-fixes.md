---
theorem: "Quatre résultats sur les points fixes"
---

:::redaction
(1) Soit $M$ un point fixe ; $f$ conserve les distances, donc $MA' = f(M)f(A) = MA$ : $M$ est sur la médiatrice de $[AA']$.
(2) Soit $A$, $B$, $C$ fixes non alignés et $M$ un point ; il existe $x$, $y$ tels que $\overrightarrow{AM} = x\,\overrightarrow{AB} + y\,\overrightarrow{AC}$.
Par conservation des combinaisons linéaires, $\overrightarrow{AM'} = x\,\overrightarrow{AB} + y\,\overrightarrow{AC} = \overrightarrow{AM}$, donc $M' = M$ : $f = \mathrm{Id}$.
(3) Si $M \in (AB)$, $\overrightarrow{AM} = x\,\overrightarrow{AB}$, donc $\overrightarrow{AM'} = x\,\overrightarrow{AB}$ et $M' = M$.
Si de plus $f \neq \mathrm{Id}$, soit $M \notin (AB)$ ; alors $M' \neq M$, sinon $f$ fixerait trois points non alignés.
Or $AM' = AM$ et $BM' = BM$, donc $A$ et $B$ sont sur la médiatrice de $[MM']$, qui est donc $(AB)$ : $M' = S_{(AB)}(M)$.
(4) Soit $I$ l'unique point fixe et $A \neq I$ ; alors $A' \neq A$ et $IA' = IA$.
Il existe donc une rotation $r$ de centre $I$ telle que $r(A) = A'$, et $g = r^{-1}\circ f$ fixe $I$ et $A$.
D'après (3), $g = \mathrm{Id}$ ou $g = S_{(IA)}$.
Si $g = S_{(IA)}$, alors $f = r\circ S_{(IA)}$ est une symétrie d'axe passant par $I$ (composée de trois miroirs passant par $I$), qui fixe une droite : c'est exclu.
D'où $f = r$, d'angle non nul puisque $f \neq \mathrm{Id}$.
:::
