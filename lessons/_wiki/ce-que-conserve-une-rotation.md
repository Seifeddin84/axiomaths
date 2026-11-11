---
theorem: "Ce que conserve une rotation"
---

:::proof[Avec l'écriture complexe]
| Étape | Justification |
|---|---|
| $z' = e^{i\theta}(z - \omega) + \omega$, donc $b' - a' = e^{i\theta}(b - a)$ | on soustrait les écritures de $A'$ et $B'$ |
| $A'B' = AB$ et $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \arg e^{i\theta} = \theta$ | module et argument du quotient |
| $\dfrac{d' - c'}{b' - a'} = \dfrac{d - c}{b - a}$ : les angles orientés sont conservés | les $e^{i\theta}$ se simplifient |
| $z \mapsto e^{i\theta}z + c$ conserve les combinaisons $\alpha z_A + (1 - \alpha)z_B$ : milieux, barycentres, alignement | calcul direct |
| Les angles conservés donnent parallélisme et orthogonalité ; les distances, l'image d'un cercle | conséquences |
| Une tangente coupe le cercle en un seul point ; la rotation étant bijective, son image aussi | conservation du contact |
:::

:::redaction
La rotation s'écrit $z' - \omega = e^{i\theta}(z - \omega)$, donc, pour deux points $A$ et $B$, $b' - a' = e^{i\theta}(b - a)$.
Par suite $A'B' = \lvert e^{i\theta}\rvert\,AB = AB$ et $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \arg e^{i\theta} \equiv \theta$.
Pour quatre points, $\dfrac{d' - c'}{b' - a'} = \dfrac{d - c}{b - a}$, donc les angles orientés de vecteurs sont conservés, ainsi que le parallélisme et l'orthogonalité.
L'application $z \mapsto e^{i\theta}z + (1 - e^{i\theta})\omega$ conserve les combinaisons $\alpha a + (1 - \alpha)b$ : elle conserve milieux, barycentres de deux points et alignement.
Donc l'image d'une droite est une droite, et celle d'un segment un segment de même longueur.
Comme les distances sont conservées, l'image du cercle de centre $O$ et de rayon $r$ est le cercle de centre $R(O)$ et de même rayon.
Enfin, la rotation étant bijective, une droite qui n'a qu'un point commun avec un cercle a pour image une droite qui n'a qu'un point commun avec le cercle image.
:::
