---
uid: "0000178"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Retrouver une fonction cubique à partir de sa courbe"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["matrices", "systeme-lineaire", "matrice-inverse", "lecture-graphique", "fonction-polynome"]
recommended: true
---

Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = ax^3 + bx^2 + c$, où $a$, $b$ et $c$ sont des réels, et dont on a représenté la courbe $\mathcal{C}_f$ ci-dessous.

![Courbe de f passant par les points (−1, −1), (1, 1) et (2, 5)](/exercises/images/178-lycee-4eme-eco-matrices-et-systemes-0000178.png)

1. Déterminer graphiquement $f(-1)$, $f(1)$ et $f(2)$.

2. Montrer que les coefficients $a$, $b$ et $c$ de la fonction $f$ vérifient le système suivant :

   $$
   (S) : \begin{cases} -a + b + c = -1 \\ a + b + c = 1 \\ 8a + 4b + c = 5 \end{cases}
   $$

3. Vérifier que le système $(S)$ est équivalent à l'équation matricielle $AX = Y$, où $A$ est à déterminer et $X = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$, $Y = \begin{pmatrix} -1 \\ 1 \\ 5 \end{pmatrix}$.

4. a. Calculer le déterminant de $A$. En déduire que $A$ est inversible.

   b. Calculer le produit $AB$, où $B = \begin{pmatrix} -3 & 3 & 0 \\ 7 & -9 & 2 \\ -4 & 12 & -2 \end{pmatrix}$.

   c. Déterminer alors $A^{-1}$, la matrice inverse de $A$.

5. En déduire, de ce qui précède, la fonction $f$.

---

## Solution

1. Par lecture graphique : $f(-1) = -1$, $f(1) = 1$ et $f(2) = 5$.

2. $f(-1) = -a + b + c$, $f(1) = a + b + c$ et $f(2) = 8a + 4b + c$.

   Les trois valeurs lues donnent exactement le système $(S)$.

3. $(S) \iff AX = Y$ avec $A = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 1 & 1 \\ 8 & 4 & 1 \end{pmatrix}$.

4. a. $\det(A) = -1(1 - 4) - 1(1 - 8) + 1(4 - 8) = 3 + 7 - 4 = 6 \neq 0$, donc $A$ est inversible.

   b. $AB = \begin{pmatrix} 6 & 0 & 0 \\ 0 & 6 & 0 \\ 0 & 0 & 6 \end{pmatrix} = 6I_3$.

   c. $A \times \dfrac16 B = I_3$, donc $A^{-1} = \dfrac16 B = \dfrac16\begin{pmatrix} -3 & 3 & 0 \\ 7 & -9 & 2 \\ -4 & 12 & -2 \end{pmatrix}$.

5. $X = A^{-1} Y = \dfrac16\begin{pmatrix} 3 + 3 + 0 \\ -7 - 9 + 10 \\ 4 + 12 - 10 \end{pmatrix} = \dfrac16\begin{pmatrix} 6 \\ -6 \\ 6 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.

   Donc $a = 1$, $b = -1$, $c = 1$ et $f(x) = x^3 - x^2 + 1$.

   *Remarque.* Le graphique permet un contrôle : $f(0) = 1$, et $f'(x) = 3x^2 - 2x$ s'annule en $0$ et en $\frac23$, d'où le maximum local $1$ en $0$ et le minimum local $f\left(\frac23\right) = \frac{23}{27} \approx 0{,}85$ visibles sur la courbe.
