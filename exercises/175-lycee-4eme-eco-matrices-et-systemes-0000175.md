---
uid: "0000175"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Inverse par une combinaison C = A + 4M et résolution d'un système"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "determinant", "matrice-inverse", "systeme-lineaire"]
---

On considère les matrices :

$$
A = \begin{pmatrix} 15 & 18 & -12 \\ -10 & -4 & 6 \\ -5 & -8 & 12 \end{pmatrix} \quad \text{et} \quad M = \begin{pmatrix} -4 & -4 & 2 \\ 3 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}
$$

1. a. Quel est l'ordre de $M$ ?

   b. Déterminer le terme $m_{21}$ de $M$.

2. Calculer le déterminant de $M$ puis déduire que la matrice $M$ est inversible.

3. a. Calculer la matrice $C = A + 4M$.

   b. Calculer $C \times M$.

   c. En déduire la matrice $M^{-1}$, inverse de $M$.

4. On considère le système :

   $$
   (S) : \begin{cases} -4x - 4y + 2z = -2 \\ 3x + z = 1 \\ 2x + y = 4 \end{cases}
   $$

   a. Déterminer l'écriture matricielle du système $(S)$.

   b. Résoudre le système $(S)$.

---

## Solution

1. a. $M$ est une matrice carrée d'ordre 3.

   b. $m_{21}$ est le terme de la 2ᵉ ligne, 1ʳᵉ colonne : $m_{21} = 3$.

2. En développant suivant la première ligne :

   $\det(M) = -4(0 - 1) + 4(0 - 2) + 2(3 - 0) = 4 - 8 + 6 = 2 \neq 0$, donc $M$ est inversible.

3. a. $C = A + 4M = \begin{pmatrix} -1 & 2 & -4 \\ 2 & -4 & 10 \\ 3 & -4 & 12 \end{pmatrix}$.

   b. $C \times M = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} = 2 I_3$.

   c. $\left(\dfrac12 C\right) \times M = I_3$, donc $M^{-1} = \dfrac12 C = \begin{pmatrix} -\frac12 & 1 & -2 \\[2pt] 1 & -2 & 5 \\[2pt] \frac32 & -2 & 6 \end{pmatrix}$.

4. a. $(S) \iff M X = b$ avec $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ et $b = \begin{pmatrix} -2 \\ 1 \\ 4 \end{pmatrix}$.

   b. $M$ est inversible, donc $X = M^{-1} b = \begin{pmatrix} 1 + 1 - 8 \\ -2 - 2 + 20 \\ -3 - 2 + 24 \end{pmatrix} = \begin{pmatrix} -6 \\ 16 \\ 19 \end{pmatrix}$.

   $S_{\mathbb{R}^3} = \{(-6, 16, 19)\}$ (contrôle : $24 - 64 + 38 = -2$, $-18 + 19 = 1$, $-12 + 16 = 4$).
