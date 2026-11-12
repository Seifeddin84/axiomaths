---
uid: "0000173"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Inverse d'une matrice à partir d'une relation polynomiale"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "puissance-de-matrice", "matrice-inverse", "produit-matriciel"]
---

On donne les matrices :

$$
M = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 4 & 2 & 1 \end{pmatrix} \qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

1. Déterminer la matrice $M^2$. On donne : $M^3 = \begin{pmatrix} 20 & 10 & 11 \\ 12 & 2 & 9 \\ 42 & 20 & 21 \end{pmatrix}$.

2. Vérifier que : $M^3 = M^2 + 8M + 6I_3$.

3. En déduire que $M$ est inversible et que : $M^{-1} = \dfrac16\left(M^2 - M - 8I_3\right)$.

---

## Solution

1. $M^2 = M \times M = \begin{pmatrix} 6 & 2 & 3 \\ 4 & 4 & 1 \\ 10 & 4 & 7 \end{pmatrix}$.

2. $M^2 + 8M + 6I_3 = \begin{pmatrix} 6 + 8 + 6 & 2 + 8 & 3 + 8 \\ 4 + 8 & 4 - 8 + 6 & 1 + 8 \\ 10 + 32 & 4 + 16 & 7 + 8 + 6 \end{pmatrix} = \begin{pmatrix} 20 & 10 & 11 \\ 12 & 2 & 9 \\ 42 & 20 & 21 \end{pmatrix} = M^3$.

3. De $M^3 - M^2 - 8M = 6I_3$ on tire, en mettant $M$ en facteur :

   $M \times \left(M^2 - M - 8I_3\right) = 6I_3$, soit $M \times \dfrac16\left(M^2 - M - 8I_3\right) = I_3$.

   Donc $M$ est inversible et $M^{-1} = \dfrac16\left(M^2 - M - 8I_3\right) = \dfrac16\begin{pmatrix} -3 & 1 & 2 \\ 3 & -3 & 0 \\ 6 & 2 & -2 \end{pmatrix} = \begin{pmatrix} -\frac12 & \frac16 & \frac13 \\[2pt] \frac12 & -\frac12 & 0 \\[2pt] 1 & \frac13 & -\frac13 \end{pmatrix}$.

   *Remarque.* Pas besoin de déterminant ici : la relation fournit directement une matrice $N$ telle que $MN = I_3$. On peut contrôler : $\det(M) = 6$.
