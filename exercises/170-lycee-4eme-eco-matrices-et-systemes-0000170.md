---
uid: "0000170"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Inverse d'une matrice d'ordre 3 à l'aide d'un produit"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["matrices", "determinant", "matrice-inverse", "produit-matriciel"]
---

Soit la matrice :

$$
A = \begin{pmatrix} 1 & 0 & -1 \\ 1 & -1 & 0 \\ 1 & -1 & 1 \end{pmatrix}
$$

1. Calculer $\det(A)$. En déduire que $A$ est inversible.

2. Calculer le produit matriciel $A \times B$, où $B$ est la matrice suivante : $B = \begin{pmatrix} 3 & -3 & 3 \\ 3 & -6 & 3 \\ 0 & -3 & 3 \end{pmatrix}$.

3. En déduire la matrice inverse de $A$, notée $A^{-1}$.

---

## Solution

1. En développant suivant la première ligne :

   $\det(A) = 1 \times \begin{vmatrix} -1 & 0 \\ -1 & 1 \end{vmatrix} - 0 + (-1) \times \begin{vmatrix} 1 & -1 \\ 1 & -1 \end{vmatrix} = 1 \times (-1) - 1 \times 0 = -1$.

   $\det(A) \neq 0$, donc $A$ est inversible.

2. $A \times B = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix} = 3 I_3$.

3. $A \times \left(\dfrac13 B\right) = I_3$, donc $A^{-1} = \dfrac13 B = \begin{pmatrix} 1 & -1 & 1 \\ 1 & -2 & 1 \\ 0 & -1 & 1 \end{pmatrix}$.

   Cette inverse sert à résoudre le système $(S_1)$ de l'[exercice n°176](/lycee/4eme/economie-et-gestion/matrices-et-systemes#ex-0000176).
