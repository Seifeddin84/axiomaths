---
uid: "0000172"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Matrice à paramètre : inversibilité et inverse"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "determinant", "parametre", "matrice-inverse"]
---

Soit $a$ un réel et $A$ la matrice suivante :

$$
A = \begin{pmatrix} a + 3 & 3 & 2 \\ 1 & 1 & a + 4 \\ 1 & 2 & a \end{pmatrix}
$$

1. Calculer le déterminant de $A$.

2. Déterminer les valeurs de $a$ pour que $A$ soit inversible.

Dans la suite on prend $a = 1$. Soit $M$ la matrice suivante :

$$
M = \begin{pmatrix} 9 & -1 & -13 \\ -4 & -2 & 18 \\ -1 & 5 & -1 \end{pmatrix}
$$

3. Effectuer le produit $M \times A$.

4. En déduire $A^{-1}$.

---

## Solution

1. En développant suivant la première ligne :

   $\det(A) = (a + 3)\big(a - 2(a + 4)\big) - 3\big(a - (a + 4)\big) + 2(2 - 1)$

   $= (a + 3)(-a - 8) + 12 + 2 = -a^2 - 11a - 24 + 14 = -a^2 - 11a - 10$.

   Donc $\det(A) = -(a + 1)(a + 10)$.

2. $A$ est inversible si et seulement si $\det(A) \neq 0$, c'est-à-dire $a \neq -1$ et $a \neq -10$.

3. Pour $a = 1$ : $A = \begin{pmatrix} 4 & 3 & 2 \\ 1 & 1 & 5 \\ 1 & 2 & 1 \end{pmatrix}$ et $M \times A = \begin{pmatrix} 22 & 0 & 0 \\ 0 & 22 & 0 \\ 0 & 0 & 22 \end{pmatrix} = 22 I_3$.

   (Contrôle : $\det(A) = -(2)(11) = -22 \neq 0$.)

4. $\left(\dfrac{1}{22} M\right) \times A = I_3$, donc $A^{-1} = \dfrac{1}{22} M = \dfrac{1}{22}\begin{pmatrix} 9 & -1 & -13 \\ -4 & -2 & 18 \\ -1 & 5 & -1 \end{pmatrix}$.
