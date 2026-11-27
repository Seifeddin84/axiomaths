---
uid: "0000418"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Les trois médianes d'un triangle sont concourantes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vecteurs", "triangle", "medianes", "concours", "determinant", "repere"]
provenance: own
dressing: "concours de trois droites dans le repère (A, AB, AC)"
rung: 3
---
Soit $ABC$ un triangle. On note $I$, $J$ et $K$ les milieux respectifs des côtés $[BC]$, $[CA]$ et $[AB]$. Le plan est muni du repère $\left(A, \overrightarrow{AB}, \overrightarrow{AC}\right)$.

1. Donner les coordonnées de $A$, $B$, $C$, $I$, $J$ et $K$ dans ce repère.

2. Soit $G$ le point défini par $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AI}$. Déterminer les coordonnées de $G$.

3. a. Montrer que les points $B$, $G$ et $J$ sont alignés.

   b. Montrer que les points $C$, $G$ et $K$ sont alignés.

4. En déduire que les trois médianes $(AI)$, $(BJ)$ et $(CK)$ du triangle $ABC$ sont concourantes en $G$.

5. Montrer que $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.

---

## Solution

:::property[Coordonnées dans le repère $(A, \overrightarrow{AB}, \overrightarrow{AC})$]
Un point $M$ a pour coordonnées $(x, y)$ dans ce repère si $\overrightarrow{AM} = x\,\overrightarrow{AB} + y\,\overrightarrow{AC}$.

Les formules habituelles restent valables : milieu, composantes $(x_B - x_A,\ y_B - y_A)$, et
$$\boxed{\overrightarrow{MN} \text{ et } \overrightarrow{PQ} \text{ colinéaires} \iff xy' - x'y = 0}$$
:::

1. $A$ est l'origine du repère : $A(0, 0)$.

   $\overrightarrow{AB} = 1 \times \overrightarrow{AB} + 0 \times \overrightarrow{AC}$ donne $B(1, 0)$. De même $C(0, 1)$.

   Le milieu $I$ de $[BC]$ a pour coordonnées $\left(\dfrac{1 + 0}{2}, \dfrac{0 + 1}{2}\right) = \left(\dfrac{1}{2}, \dfrac{1}{2}\right)$.

   Le milieu $J$ de $[CA]$ : $\left(\dfrac{0 + 0}{2}, \dfrac{1 + 0}{2}\right) = \left(0, \dfrac{1}{2}\right)$.

   Le milieu $K$ de $[AB]$ : $\left(\dfrac{1 + 0}{2}, \dfrac{0 + 0}{2}\right) = \left(\dfrac{1}{2}, 0\right)$.

2. $\overrightarrow{AI} \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \end{pmatrix}$, donc $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AI} \begin{pmatrix} \frac{1}{3} \\ \frac{1}{3} \end{pmatrix}$.

   Comme $A$ est l'origine, $G\left(\dfrac{1}{3}, \dfrac{1}{3}\right)$.

3. a. $\overrightarrow{BG} \begin{pmatrix} \frac{1}{3} - 1 \\ \frac{1}{3} - 0 \end{pmatrix} = \begin{pmatrix} -\frac{2}{3} \\ \frac{1}{3} \end{pmatrix}$ et $\overrightarrow{BJ} \begin{pmatrix} 0 - 1 \\ \frac{1}{2} - 0 \end{pmatrix} = \begin{pmatrix} -1 \\ \frac{1}{2} \end{pmatrix}$.

   $$\det\left(\overrightarrow{BG}, \overrightarrow{BJ}\right) = -\frac{2}{3} \times \frac{1}{2} - (-1) \times \frac{1}{3} = -\frac{1}{3} + \frac{1}{3} = 0$$

   Les vecteurs sont colinéaires : $B$, $G$, $J$ sont alignés.

   b. $\overrightarrow{CG} \begin{pmatrix} \frac{1}{3} - 0 \\ \frac{1}{3} - 1 \end{pmatrix} = \begin{pmatrix} \frac{1}{3} \\ -\frac{2}{3} \end{pmatrix}$ et $\overrightarrow{CK} \begin{pmatrix} \frac{1}{2} - 0 \\ 0 - 1 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ -1 \end{pmatrix}$.

   $$\det\left(\overrightarrow{CG}, \overrightarrow{CK}\right) = \frac{1}{3} \times (-1) - \frac{1}{2} \times \left(-\frac{2}{3}\right) = -\frac{1}{3} + \frac{1}{3} = 0$$

   Donc $C$, $G$, $K$ sont alignés.

4. Par construction, $G$ est sur la médiane $(AI)$ (car $\overrightarrow{AG} = \frac{2}{3}\overrightarrow{AI}$). D'après 3. a., $G$ est sur $(BJ)$. D'après 3. b., $G$ est sur $(CK)$.

   Les trois médianes passent par $G$ : elles sont **concourantes en $G$**.

5. $\overrightarrow{GA} \begin{pmatrix} -\frac{1}{3} \\ -\frac{1}{3} \end{pmatrix}$, $\overrightarrow{GB} \begin{pmatrix} 1 - \frac{1}{3} \\ 0 - \frac{1}{3} \end{pmatrix} = \begin{pmatrix} \frac{2}{3} \\ -\frac{1}{3} \end{pmatrix}$ et $\overrightarrow{GC} \begin{pmatrix} 0 - \frac{1}{3} \\ 1 - \frac{1}{3} \end{pmatrix} = \begin{pmatrix} -\frac{1}{3} \\ \frac{2}{3} \end{pmatrix}$.

   On additionne les composantes :

   $$\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} \begin{pmatrix} -\frac{1}{3} + \frac{2}{3} - \frac{1}{3} \\ -\frac{1}{3} - \frac{1}{3} + \frac{2}{3} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \vec{0}$$

   $G$ est le centre de gravité du triangle $ABC$, situé aux deux tiers de chaque médiane à partir du sommet.

:::intuition
Choisir le repère $(A, \overrightarrow{AB}, \overrightarrow{AC})$ donne des coordonnées très simples ($0$, $1$, $\frac{1}{2}$) : le calcul devient mécanique, et il vaut pour **tous** les triangles.
:::

:::trap
Les coordonnées ici ne sont **pas** des distances : le repère $(A, \overrightarrow{AB}, \overrightarrow{AC})$ n'est pas orthonormé. On l'utilise pour l'alignement (déterminant), jamais pour des longueurs.
:::
