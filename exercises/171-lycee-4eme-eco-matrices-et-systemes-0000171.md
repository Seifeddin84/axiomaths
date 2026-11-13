---
uid: "0000171"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Inverses de matrices d'ordre 3 : deux exemples"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["matrices", "determinant", "matrice-inverse", "produit-matriciel"]
---

Même travail que dans l'[exercice n°170](/lycee/4eme/economie-et-gestion/matrices-et-systemes#ex-0000170) pour chacun des couples $(A, B)$ suivants :

a. Calculer $\det(A)$. En déduire que $A$ est inversible.

b. Calculer le produit $A \times B$.

c. En déduire $A^{-1}$.

1. $A = \begin{pmatrix} 1 & 1 & 3 \\ -1 & -2 & -1 \\ -1 & 2 & 1 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & -5 & -5 \\ -2 & -4 & 2 \\ 4 & 3 & 1 \end{pmatrix}$.

2. $A = \begin{pmatrix} 1 & -7 & 11 \\ -1 & 12 & -19 \\ 0 & -3 & 5 \end{pmatrix}$ et $B = \begin{pmatrix} 6 & 4 & 2 \\ 10 & 10 & 16 \\ 6 & 6 & 10 \end{pmatrix}$.

---

## Solution

1. a. En développant suivant la première ligne :

   $\det(A) = 1(-2 + 2) - 1(-1 - 1) + 3(-2 - 2) = 0 + 2 - 12 = -10 \neq 0$, donc $A$ est inversible.

   b. $A \times B = \begin{pmatrix} 10 & 0 & 0 \\ 0 & 10 & 0 \\ 0 & 0 & 10 \end{pmatrix} = 10 I_3$.

   c. $A^{-1} = \dfrac{1}{10} B = \begin{pmatrix} 0 & -\frac12 & -\frac12 \\[2pt] -\frac15 & -\frac25 & \frac15 \\[2pt] \frac25 & \frac{3}{10} & \frac{1}{10} \end{pmatrix}$.

2. a. $\det(A) = 1(60 - 57) + 7(-5 - 0) + 11(3 - 0) = 3 - 35 + 33 = 1 \neq 0$, donc $A$ est inversible.

   b. $A \times B = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} = 2 I_3$.

   c. $A^{-1} = \dfrac12 B = \begin{pmatrix} 3 & 2 & 1 \\ 5 & 5 & 8 \\ 3 & 3 & 5 \end{pmatrix}$.

   *Remarque.* Comme $A \times \frac12 B = I_3$, on a aussi $\frac12 B \times A = I_3$ : la matrice $\frac12 B$ est inversible, d'inverse $A$. C'est exactement ce qu'utilise le système $(S_3)$ de l'[exercice n°176](/lycee/4eme/economie-et-gestion/matrices-et-systemes#ex-0000176).
