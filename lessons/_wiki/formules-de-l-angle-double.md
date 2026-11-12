---
theorem: "Formules de l'angle double"
---

:::proof[Un triangle isocèle dans le cercle trigonométrique]
| Étape | Justification |
|---|---|
| Soit $\alpha \in \left]0\,;\frac\pi2\right[$, $A(1\,;0)$ et $B(\cos2\alpha\,;\sin2\alpha)$ sur le cercle trigonométrique de centre $O$ | $\widehat{AOB} = 2\alpha \in \,]0\,;\pi[$ |
| La bissectrice de $\widehat{AOB}$ coupe $[AB]$ en son milieu $H$, avec $(OH) \perp (AB)$ | $OAB$ est isocèle en $O$ |
| Dans le triangle $OHA$ rectangle en $H$ : $OH = \cos\alpha$ et $AH = \sin\alpha$ | $OA = 1$ et $\widehat{HOA} = \alpha$ |
| Aire de $OAB$ $= \dfrac12 \cdot OA \cdot \sin2\alpha = \dfrac12\sin2\alpha$, et aussi $= \dfrac12 \cdot AB \cdot OH = \sin\alpha\cos\alpha$ | base $OA = 1$ et hauteur l'ordonnée de $B$ ; base $AB = 2\sin\alpha$ et hauteur $OH$ |
| Donc $\sin2\alpha = 2\sin\alpha\cos\alpha$ | on égale les deux aires |
| $AB^2 = (1 - \cos2\alpha)^2 + \sin^22\alpha = 2 - 2\cos2\alpha$ et $AB^2 = 4\sin^2\alpha$ | coordonnées ; $AB = 2AH$ |
| Donc $\cos2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1 = \cos^2\alpha - \sin^2\alpha$ | $\cos^2\alpha + \sin^2\alpha = 1$ |
:::

:::redaction
Soit $\alpha \in \left]0\,;\frac\pi2\right[$, et sur le cercle trigonométrique de centre $O$ les points $A(1\,;0)$ et $B(\cos2\alpha\,;\sin2\alpha)$.
Le triangle $OAB$ est isocèle en $O$, donc la bissectrice de $\widehat{AOB}$ coupe $[AB]$ en son milieu $H$ et lui est perpendiculaire.
Dans le triangle $OHA$ rectangle en $H$, avec $OA = 1$ et $\widehat{HOA} = \alpha$, on a $OH = \cos\alpha$ et $AH = \sin\alpha$, donc $AB = 2\sin\alpha$.
L'aire de $OAB$ vaut $\dfrac12 \times OA \times \sin2\alpha = \dfrac12\sin2\alpha$ (hauteur : l'ordonnée de $B$), et aussi $\dfrac12 \times AB \times OH = \sin\alpha\cos\alpha$.
Donc $\sin2\alpha = 2\sin\alpha\cos\alpha$.
Par ailleurs $AB^2 = (1 - \cos2\alpha)^2 + \sin^22\alpha = 2 - 2\cos2\alpha$, or $AB^2 = 4\sin^2\alpha$.
Par suite $\cos2\alpha = 1 - 2\sin^2\alpha$, et avec $\sin^2\alpha = 1 - \cos^2\alpha$ : $\cos2\alpha = 2\cos^2\alpha - 1 = \cos^2\alpha - \sin^2\alpha$.
D'où les formules pour $\alpha \in \left]0\,;\frac\pi2\right[$ ; elles restent vraies pour tout réel $\alpha$, conséquence des formules d'addition vues en 3ème.
:::
