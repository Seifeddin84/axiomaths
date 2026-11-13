---
uid: "0000176"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Trois systèmes 3×3 résolus avec des inverses connues"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "systeme-lineaire", "ecriture-matricielle", "matrice-inverse"]
---

Résoudre les systèmes suivants. Utiliser les résultats de l'[exercice n°170](/lycee/4eme/economie-et-gestion/matrices-et-systemes#ex-0000170) et de l'[exercice n°171](/lycee/4eme/economie-et-gestion/matrices-et-systemes#ex-0000171) pour obtenir les inverses des matrices.

$$
(S_1) : \begin{cases} x - z = 5 \\ x - y = 10 \\ x - y + z = -8 \end{cases} \qquad (S_2) : \begin{cases} x + y + 3z = -1 \\ -x - 2y - z = 70 \\ -x + 2y + z = 2 \end{cases}
$$

$$
(S_3) : \begin{cases} 3x + 2y + z = 105 \\ 5x + 5y + 8z = 224 \\ 3x + 3y + 5z = 316 \end{cases}
$$

---

## Solution

On note $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$. Chaque système s'écrit $PX = b$ ; si $P$ est inversible, $X = P^{-1} b$.

1. $(S_1) \iff P_1 X = \begin{pmatrix} 5 \\ 10 \\ -8 \end{pmatrix}$ avec $P_1 = \begin{pmatrix} 1 & 0 & -1 \\ 1 & -1 & 0 \\ 1 & -1 & 1 \end{pmatrix}$ : c'est la matrice $A$ de l'exercice n°170, d'inverse $\begin{pmatrix} 1 & -1 & 1 \\ 1 & -2 & 1 \\ 0 & -1 & 1 \end{pmatrix}$.

   $X = \begin{pmatrix} 5 - 10 - 8 \\ 5 - 20 - 8 \\ -10 - 8 \end{pmatrix} = \begin{pmatrix} -13 \\ -23 \\ -18 \end{pmatrix}$, donc $S_{\mathbb{R}^3} = \{(-13, -23, -18)\}$.

2. $(S_2) \iff P_2 X = \begin{pmatrix} -1 \\ 70 \\ 2 \end{pmatrix}$ avec $P_2 = \begin{pmatrix} 1 & 1 & 3 \\ -1 & -2 & -1 \\ -1 & 2 & 1 \end{pmatrix}$ : c'est la matrice $A$ du cas 1 de l'exercice n°171, d'inverse $\dfrac{1}{10}\begin{pmatrix} 0 & -5 & -5 \\ -2 & -4 & 2 \\ 4 & 3 & 1 \end{pmatrix}$.

   $X = \dfrac{1}{10}\begin{pmatrix} -350 - 10 \\ 2 - 280 + 4 \\ -4 + 210 + 2 \end{pmatrix} = \dfrac{1}{10}\begin{pmatrix} -360 \\ -274 \\ 208 \end{pmatrix}$, donc $S_{\mathbb{R}^3} = \left\{\left(-36, -\dfrac{137}{5}, \dfrac{104}{5}\right)\right\}$.

3. $(S_3) \iff P_3 X = \begin{pmatrix} 105 \\ 224 \\ 316 \end{pmatrix}$ avec $P_3 = \begin{pmatrix} 3 & 2 & 1 \\ 5 & 5 & 8 \\ 3 & 3 & 5 \end{pmatrix} = \dfrac12 B$, où $B$ est la matrice du cas 2 de l'exercice n°171.

   On y a trouvé $A \times \frac12 B = I_3$, donc $P_3$ est inversible et $P_3^{-1} = A = \begin{pmatrix} 1 & -7 & 11 \\ -1 & 12 & -19 \\ 0 & -3 & 5 \end{pmatrix}$.

   $X = \begin{pmatrix} 105 - 1568 + 3476 \\ -105 + 2688 - 6004 \\ -672 + 1580 \end{pmatrix} = \begin{pmatrix} 2013 \\ -3421 \\ 908 \end{pmatrix}$, donc $S_{\mathbb{R}^3} = \{(2013, -3421, 908)\}$.

   *Remarque.* Les coefficients de $P_3^{-1}$ vont jusqu'à 19 en valeur absolue : un second membre de quelques centaines donne une solution de plusieurs milliers. Contrôle sur la première équation : $6039 - 6842 + 908 = 105$.
