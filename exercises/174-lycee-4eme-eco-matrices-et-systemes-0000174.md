---
uid: "0000174"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Lapins et poules : un système 2×2"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["matrices", "systeme-lineaire", "mise-en-equation", "matrice-inverse"]
---

Dans une ferme, il y a des lapins et des poules. On compte 58 têtes et 156 pattes.

Déterminer le nombre des lapins et des poules.

---

## Solution

Notons $x$ le nombre de lapins et $y$ le nombre de poules. Chaque animal a une tête ; un lapin a 4 pattes et une poule 2 :

$$
(S) : \begin{cases} x + y = 58 \\ 4x + 2y = 156 \end{cases} \iff \underbrace{\begin{pmatrix} 1 & 1 \\ 4 & 2 \end{pmatrix}}_{A} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 58 \\ 156 \end{pmatrix}
$$

$\det(A) = 2 - 4 = -2 \neq 0$, donc $A$ est inversible et $A^{-1} = \dfrac{1}{-2}\begin{pmatrix} 2 & -1 \\ -4 & 1 \end{pmatrix} = \begin{pmatrix} -1 & \frac12 \\ 2 & -\frac12 \end{pmatrix}$.

$\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1}\begin{pmatrix} 58 \\ 156 \end{pmatrix} = \begin{pmatrix} -58 + 78 \\ 116 - 78 \end{pmatrix} = \begin{pmatrix} 20 \\ 38 \end{pmatrix}$.

Il y a **20 lapins** et **38 poules** (contrôle : $20 + 38 = 58$ têtes, $80 + 76 = 156$ pattes).
