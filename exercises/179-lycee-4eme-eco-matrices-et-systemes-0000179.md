---
uid: "0000179"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Atelier de production : trois machines, trois types de tables"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "determinant", "parametre", "matrice-inverse", "systeme-lineaire", "mise-en-equation"]
---

Soit $m$ un réel et la matrice :

$$
A = \begin{pmatrix} 2m & 12 & 4 \\ 16 & 10 & m + 2 \\ 20 & 14 & 10 \end{pmatrix}
$$

1. Montrer que $\det(A) = -28m^2 + 384m - 1344$.

2. Pour quelles valeurs de $m$ la matrice $A$ est-elle non inversible ?

Dans la suite on prend $m = 4$.

3. Calculer le déterminant de $A$ par deux méthodes différentes.

Soit la matrice $B = \begin{pmatrix} 4 & -8 & 4 \\ -5 & 2 & 2 \\ 3 & 16 & -12 \end{pmatrix}$.

4. Calculer $A(B - 2I_3)$.

5. En déduire la matrice $A^{-1}$, inverse de $A$.

6. Dans un atelier de production, on dispose de 3 machines notées $M_1$, $M_2$ et $M_3$. On fabrique 3 types de tables $T_1$, $T_2$ et $T_3$ qui nécessitent des temps de passage différents sur chaque machine pour être finies. Le tableau suivant donne le temps de passage (en minutes) de chaque table sur chaque machine :

   | | $T_1$ | $T_2$ | $T_3$ |
   |:-:|:-:|:-:|:-:|
   | $M_1$ | 4 | 6 | 2 |
   | $M_2$ | 8 | 5 | 3 |
   | $M_3$ | 10 | 7 | 5 |

   Pendant une journée de travail, la machine $M_1$ a été occupée pendant 228 minutes, la machine $M_2$ pendant 362 minutes et la machine $M_3$ pendant 490 minutes.

   a. Traduire cette situation par un système linéaire à trois inconnues $x$, $y$ et $z$, où $x$ = nombre de tables $T_1$, $y$ = nombre de tables $T_2$ et $z$ = nombre de tables $T_3$.

   b. En déduire que le nombre total des tables produites est 64.

---

## Solution

1. En développant suivant la première ligne :

   $\det(A) = 2m\big(100 - 14(m + 2)\big) - 12\big(160 - 20(m + 2)\big) + 4(224 - 200)$

   $= 2m(72 - 14m) - 12(120 - 20m) + 96 = 144m - 28m^2 - 1440 + 240m + 96$

   $= -28m^2 + 384m - 1344$.

2. $\det(A) = -4(7m^2 - 96m + 336)$ et le discriminant de $7m^2 - 96m + 336$ vaut $\Delta = 96^2 - 4 \times 7 \times 336 = 9216 - 9408 = -192 < 0$.

   Donc $\det(A) \neq 0$ pour tout réel $m$ : **aucune valeur** de $m$ ne rend $A$ non inversible.

3. Pour $m = 4$ : $A = \begin{pmatrix} 8 & 12 & 4 \\ 16 & 10 & 6 \\ 20 & 14 & 10 \end{pmatrix}$.

   Première méthode, avec la formule : $\det(A) = -28 \times 16 + 384 \times 4 - 1344 = -448 + 1536 - 1344 = -256$.

   Deuxième méthode, en développant directement : $\det(A) = 8(100 - 84) - 12(160 - 120) + 4(224 - 200) = 128 - 480 + 96 = -256$.

4. $B - 2I_3 = \begin{pmatrix} 2 & -8 & 4 \\ -5 & 0 & 2 \\ 3 & 16 & -14 \end{pmatrix}$ et $A(B - 2I_3) = \begin{pmatrix} -32 & 0 & 0 \\ 0 & -32 & 0 \\ 0 & 0 & -32 \end{pmatrix} = -32\,I_3$.

5. $A \times \left(-\dfrac{1}{32}(B - 2I_3)\right) = I_3$, donc $A^{-1} = -\dfrac{1}{32}(B - 2I_3) = \dfrac{1}{32}\begin{pmatrix} -2 & 8 & -4 \\ 5 & 0 & -2 \\ -3 & -16 & 14 \end{pmatrix}$.

6. a. En comptant les minutes passées sur chaque machine :

   $(S) : \begin{cases} 4x + 6y + 2z = 228 \\ 8x + 5y + 3z = 362 \\ 10x + 7y + 5z = 490 \end{cases}$

   En multipliant chaque équation par 2, on reconnaît la matrice $A$ (pour $m = 4$) : $(S) \iff AX = \begin{pmatrix} 456 \\ 724 \\ 980 \end{pmatrix}$ avec $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$.

   b. $X = A^{-1}\begin{pmatrix} 456 \\ 724 \\ 980 \end{pmatrix} = \dfrac{1}{32}\begin{pmatrix} -912 + 5792 - 3920 \\ 2280 - 1960 \\ -1368 - 11\,584 + 13\,720 \end{pmatrix} = \dfrac{1}{32}\begin{pmatrix} 960 \\ 320 \\ 768 \end{pmatrix} = \begin{pmatrix} 30 \\ 10 \\ 24 \end{pmatrix}$.

   On a produit 30 tables $T_1$, 10 tables $T_2$ et 24 tables $T_3$, soit $30 + 10 + 24 = 64$ tables au total.
