---
uid: "0000169"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Déterminants, inversibilité et produits de matrices"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["matrices", "determinant", "matrice-inversible", "produit-matriciel"]
---

On considère les matrices :

$$
A = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \quad B = \begin{pmatrix} -1 & -2 \\ 2 & 1 \end{pmatrix} \quad C = \begin{pmatrix} 7 & -9 \\ 5 & 1 \end{pmatrix}
$$

$$
D = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \quad E = \begin{pmatrix} 4 & 0 & 1 \\ -2 & 8 & 0 \\ -1 & 5 & 7 \end{pmatrix}
$$

$$
F = \begin{pmatrix} \frac12 & \frac13 & \frac14 \\[2pt] \frac15 & \frac16 & \frac17 \\[2pt] \frac18 & \frac19 & \frac1{10} \end{pmatrix} \quad G = \begin{pmatrix} 8 & 3 & -2 \\ 16 & 6 & -4 \\ -3 & 0 & 2 \end{pmatrix} \quad H = \begin{pmatrix} 1 & 4 & 5 \\ 2 & 5 & 7 \\ 3 & 6 & 9 \end{pmatrix}
$$

1. Calculer les déterminants de ces matrices et dire dans chaque cas si la matrice est inversible ou non.

2. Calculer $AB$ et $BA$. Que remarquez-vous ?

3. Calculer, si possible : $AC$, $AD$, $DE$, $EF$, $GH$, $HE$ et $FH$.

---

## Solution

1. Une matrice carrée est inversible si et seulement si son déterminant est non nul.

   $\det(A) = 1 \times 4 - 3 \times 2 = -2 \neq 0$ : inversible.

   $\det(B) = -1 + 4 = 3 \neq 0$ : inversible.

   $\det(C) = 7 + 45 = 52 \neq 0$ : inversible.

   $\det(D) = 1$ (matrice triangulaire : produit des termes diagonaux) : inversible.

   $\det(E) = 4(56 - 0) - 0 + 1(-10 + 8) = 222 \neq 0$ : inversible.

   $\det(F) = \dfrac{1}{33\,600} \neq 0$ : inversible.

   $\det(G) = 0$ : la deuxième ligne est le double de la première. $G$ n'est pas inversible.

   $\det(H) = 0$ : la troisième colonne est la somme des deux premières. $H$ n'est pas inversible.

2. $AB = \begin{pmatrix} 5 & 1 \\ 6 & 0 \end{pmatrix}$ et $BA = \begin{pmatrix} -5 & -11 \\ 4 & 10 \end{pmatrix}$.

   $AB \neq BA$ : le produit matriciel **n'est pas commutatif**.

3. Le produit $XY$ existe si le nombre de colonnes de $X$ est égal au nombre de lignes de $Y$.

   $AC = \begin{pmatrix} 22 & -6 \\ 34 & -14 \end{pmatrix}$.

   $AD$ n'existe pas : $A$ a 2 colonnes et $D$ a 3 lignes.

   $DE = \begin{pmatrix} 1 & 13 & 8 \\ -3 & 13 & 7 \\ -1 & 5 & 7 \end{pmatrix}$.

   $EF = \begin{pmatrix} \frac{17}{8} & \frac{13}{9} & \frac{11}{10} \\[2pt] \frac35 & \frac23 & \frac{9}{14} \\[2pt] \frac{11}{8} & \frac{23}{18} & \frac{163}{140} \end{pmatrix}$.

   $GH = \begin{pmatrix} 8 & 35 & 43 \\ 16 & 70 & 86 \\ 3 & 0 & 3 \end{pmatrix}$, $\quad HE = \begin{pmatrix} -9 & 57 & 36 \\ -9 & 75 & 51 \\ -9 & 93 & 66 \end{pmatrix}$.

   $FH = \begin{pmatrix} \frac{23}{12} & \frac{31}{6} & \frac{85}{12} \\[2pt] \frac{101}{105} & \frac{523}{210} & \frac{145}{42} \\[2pt] \frac{233}{360} & \frac{149}{90} & \frac{829}{360} \end{pmatrix}$.

   *Remarque.* $\det(GH) = \det(G)\det(H) = 0$ : on le voit sur $GH$, dont la deuxième ligne est encore le double de la première.
