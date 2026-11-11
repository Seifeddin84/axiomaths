---
theorem: "Au plus trois symétries"
---

:::redaction
Soit $A$, $B$, $C$ trois points non alignés, d'images $A'$, $B'$, $C'$.
Soit $\sigma_1$ la symétrie d'axe la médiatrice de $[AA']$ (l'identité si $A = A'$) : $\sigma_1(A) = A'$.
On pose $B_1 = \sigma_1(B)$ ; $A'B_1 = AB = A'B'$, donc $A'$ est sur la médiatrice de $[B_1B']$.
Soit $\sigma_2$ la symétrie d'axe cette médiatrice (l'identité si $B_1 = B'$) : elle fixe $A'$ et envoie $B_1$ sur $B'$.
On pose $C_2 = \sigma_2\circ\sigma_1(C)$ ; $A'C_2 = AC = A'C'$ et $B'C_2 = BC = B'C'$.
Donc $A'$ et $B'$ sont sur la médiatrice de $[C_2C']$ (si $C_2 \neq C'$), qui est la droite $(A'B')$.
Soit $\sigma_3 = S_{(A'B')}$ (l'identité si $C_2 = C'$) : elle fixe $A'$, $B'$ et envoie $C_2$ sur $C'$.
Ainsi $\sigma_3\circ\sigma_2\circ\sigma_1$ et $f$ coïncident sur $A$, $B$, $C$.
Or une isométrie est déterminée par l'image de trois points non alignés, d'où $f = \sigma_3\circ\sigma_2\circ\sigma_1$.
:::
