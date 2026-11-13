---
uid: "0000177"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Inverse égale à 2I₃ − A et résolution d'un système"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "determinant", "matrice-inverse", "systeme-lineaire"]
---

On considère la matrice :

$$
A = \begin{pmatrix} 2 & 2 & 1 \\ -1 & -1 & -1 \\ 1 & 2 & 2 \end{pmatrix}
$$

1. Calculer le déterminant de $A$ puis déduire que la matrice $A$ est inversible.

2. a. Calculer la matrice $M = 2I_3 - A$.

   b. Calculer $AM$.

   c. En déduire la matrice $A^{-1}$, inverse de $A$.

3. On considère le système :

   $$
   (S) : \begin{cases} 2x + 2y + z = 5 \\ -x - y - z = -2 \\ 10x + 20y + 20z = 30 \end{cases}
   $$

   a. Déterminer l'écriture matricielle du système $(S)$.

   b. Résoudre le système $(S)$.

---

## Solution

1. En développant suivant la première ligne :

   $\det(A) = 2(-2 + 2) - 2(-2 + 1) + 1(-2 + 1) = 0 + 2 - 1 = 1 \neq 0$, donc $A$ est inversible.

2. a. $M = 2I_3 - A = \begin{pmatrix} 0 & -2 & -1 \\ 1 & 3 & 1 \\ -1 & -2 & 0 \end{pmatrix}$.

   b. $AM = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = I_3$.

   c. Donc $A^{-1} = M = 2I_3 - A$.

   *Remarque.* $A(2I_3 - A) = I_3$ s'écrit aussi $A^2 - 2A + I_3 = O$, c'est-à-dire $(A - I_3)^2 = O$.

3. a. En divisant la troisième équation par 10, elle devient $x + 2y + 2z = 3$ ; donc :

   $(S) \iff A X = b$ avec $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ et $b = \begin{pmatrix} 5 \\ -2 \\ 3 \end{pmatrix}$.

   b. $X = A^{-1} b = M b = \begin{pmatrix} 0 + 4 - 3 \\ 5 - 6 + 3 \\ -5 + 4 + 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$.

   $S_{\mathbb{R}^3} = \{(1, 2, -1)\}$ (contrôle : $2 + 4 - 1 = 5$, $-1 - 2 + 1 = -2$, $10 + 40 - 20 = 30$).
