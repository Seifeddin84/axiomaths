---
theorem: "Volume d'un parallélépipède"
---

:::redaction
La base du parallélépipède est le parallélogramme construit sur $\vec u$ et $\vec v$, d'aire $\mathcal A = \lVert\vec u\wedge\vec v\rVert$.
Le vecteur $\vec n = \dfrac{\vec u\wedge\vec v}{\lVert\vec u\wedge\vec v\rVert}$ est unitaire et orthogonal à la base.
La hauteur est la longueur de la projection de $\vec w$ sur la direction de $\vec n$ : $h = \lvert\vec n\cdot\vec w\rvert$.
Donc $V = \mathcal A\cdot h = \lVert\vec u\wedge\vec v\rVert \cdot \dfrac{\lvert(\vec u\wedge\vec v)\cdot\vec w\rvert}{\lVert\vec u\wedge\vec v\rVert} = \lvert(\vec u\wedge\vec v)\cdot\vec w\rvert$.
Le tétraèdre a pour base la moitié du parallélogramme et la même hauteur.
D'où son volume est $\dfrac13 \times \dfrac{\mathcal A}{2} \times h = \dfrac V6$.
:::
