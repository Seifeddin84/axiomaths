---
uid: "0000429"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Image d'un cercle : centre et rayon"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "cercle", "coordonnees"]
provenance: own
dressing: "image d'un cercle : centre et rayon"
rung: 2
---
Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$. Soit $\mathcal{C}$ le cercle de centre $\Omega(1, 2)$ et de rayon $3$, et soit $t$ la translation de vecteur $\vec{u} \begin{pmatrix} 2 \\ -1 \end{pmatrix}$. On considère les points $A(4, 2)$ et $B(-2, 2)$.

1. Montrer que $A$ et $B$ appartiennent à $\mathcal{C}$ et que $[AB]$ est un diamètre de $\mathcal{C}$.

2. Déterminer le centre $\Omega'$ et le rayon du cercle $\mathcal{C}'$, image de $\mathcal{C}$ par $t$.

3. Déterminer les images $A'$ et $B'$ de $A$ et $B$ par $t$. Vérifier que $A'$ et $B'$ appartiennent à $\mathcal{C}'$.

4. Que représente $[A'B']$ pour $\mathcal{C}'$ ? Comparer les longueurs $AB$ et $A'B'$.

---

## Solution

:::property[Image d'un cercle par une translation]
L'image du cercle de centre $\Omega$ et de rayon $r$ est le cercle de **centre $\Omega'$**, image de $\Omega$, et de **même rayon $r$**.

Un point $M$ est sur le cercle de centre $\Omega$ et de rayon $r$ si et seulement si $\Omega M = r$.
:::

1. $\overrightarrow{\Omega A} \begin{pmatrix} 4 - 1 \\ 2 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$, donc $\Omega A = \sqrt{9 + 0} = 3$ : $A \in \mathcal{C}$.

   $\overrightarrow{\Omega B} \begin{pmatrix} -2 - 1 \\ 2 - 2 \end{pmatrix} = \begin{pmatrix} -3 \\ 0 \end{pmatrix}$, donc $\Omega B = 3$ : $B \in \mathcal{C}$.

   Milieu de $[AB]$ : $\left(\dfrac{4 + (-2)}{2},\ \dfrac{2 + 2}{2}\right) = (1, 2) = \Omega$.

   Le centre $\Omega$ est le milieu de $[AB]$ : $[AB]$ est un **diamètre** de $\mathcal{C}$ ($AB = 6 = 2 \times 3$).

2. Le centre $\Omega'$ est l'image de $\Omega$ : $\Omega'(1 + 2,\ 2 - 1) = \Omega'(3, 1)$.

   Le rayon est conservé : il vaut $3$.

   $\mathcal{C}'$ est le cercle de centre $\Omega'(3, 1)$ et de rayon $3$.

3. $A'(4 + 2,\ 2 - 1) = A'(6, 1)$ et $B'(-2 + 2,\ 2 - 1) = B'(0, 1)$.

   $\overrightarrow{\Omega' A'} \begin{pmatrix} 6 - 3 \\ 1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ donc $\Omega' A' = 3$ ✓.

   $\overrightarrow{\Omega' B'} \begin{pmatrix} 0 - 3 \\ 1 - 1 \end{pmatrix} = \begin{pmatrix} -3 \\ 0 \end{pmatrix}$ donc $\Omega' B' = 3$ ✓.

4. Milieu de $[A'B']$ : $\left(\dfrac{6 + 0}{2},\ \dfrac{1 + 1}{2}\right) = (3, 1) = \Omega'$.

   $[A'B']$ est un **diamètre** de $\mathcal{C}'$ : l'image d'un diamètre est un diamètre de l'image du cercle.

   Longueurs : $AB = 6$ et $A'B' = \sqrt{(0 - 6)^2 + 0^2} = 6$ : $AB = A'B'$, la translation conserve les distances.

:::intuition
Une translation fait **glisser** le cercle sans le déformer : le centre se déplace comme tous les autres points, le rayon ne change pas.
:::

:::trap
Le centre de l'image n'est pas « le même centre » : il est **déplacé** par la translation. Seul le rayon reste identique.
:::
