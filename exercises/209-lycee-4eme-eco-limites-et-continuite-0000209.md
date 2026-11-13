---
uid: "0000209"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 6"
title: "Deux paramètres a et b : continuité en −1 et en 2"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["continuite", "parametre", "fonction-definie-par-morceaux", "systeme-lineaire"]
---

Soit la fonction $f$ définie par :

$$
f(x) = \begin{cases} \dfrac{ax^2 + bx}{2x + 1} & \text{si } x < -1 \\ 2ax - 3b & \text{si } -1 \leq x < 2 \\ x^2 - bx + 1 & \text{si } x \geq 2 \end{cases}
$$

1. Montrer que pour que $f$ soit continue en $-1$ et en $2$, il faut que les réels $a$ et $b$ vérifient le système suivant :

   $$\displaystyle (S) : \begin{cases} a + 4b = 0 \\ 4a - b = 5 \end{cases}$$

2. Déterminer alors les réels $a$ et $b$ pour assurer la continuité de $f$ en $-1$ et en $2$.

3. Montrer alors que $f$ est continue sur $\mathbb{R}$.

---

## Solution

1. $f$ change de formule en $-1$ et en $2$. On écrit la continuité en chacun de ces deux points.

   **Continuité en $-1$.** Valeur : $-1$ est dans le deuxième morceau, donc $f(-1) = 2a \times (-1) - 3b = -2a - 3b$.

   - À droite : $\displaystyle\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} (2ax - 3b) = -2a - 3b$ (c'est un polynôme).

   - À gauche : $\displaystyle\lim_{x \to -1^-} \dfrac{ax^2 + bx}{2x + 1} = \dfrac{a \times 1 + b \times (-1)}{2 \times (-1) + 1} = \dfrac{a - b}{-1} = b - a$ (le dénominateur tend vers $-1 \neq 0$ : on remplace).

   $f$ est continue en $-1$ si et seulement si $b - a = -2a - 3b$, c'est-à-dire $b - a + 2a + 3b = 0$, soit

   $$a + 4b = 0$$

   **Continuité en $2$.** Valeur : $2$ est dans le troisième morceau, donc $f(2) = 2^2 - 2b + 1 = 5 - 2b$.

   - À droite : $\displaystyle\lim_{x \to 2^+} (x^2 - bx + 1) = 5 - 2b$.

   - À gauche : $\displaystyle\lim_{x \to 2^-} (2ax - 3b) = 4a - 3b$.

   $f$ est continue en $2$ si et seulement si $4a - 3b = 5 - 2b$, c'est-à-dire

   $$4a - b = 5$$

   On retrouve bien le système $(S)$ : si $f$ est continue en $-1$ et en $2$, alors $a$ et $b$ vérifient $(S)$.

2. On résout $(S)$ par substitution. De la première équation : $a = -4b$. On remplace dans la seconde :

   $$4(-4b) - b = 5 \iff -16b - b = 5 \iff -17b = 5 \iff b = -\dfrac{5}{17}$$

   puis $a = -4b = -4 \times \left(-\dfrac{5}{17}\right) = \dfrac{20}{17}$.

   $$a = \dfrac{20}{17} \quad \text{et} \quad b = -\dfrac{5}{17}$$

   *Vérification.* En $-1$ : $b - a = -\dfrac{5}{17} - \dfrac{20}{17} = -\dfrac{25}{17}$ et $-2a - 3b = -\dfrac{40}{17} + \dfrac{15}{17} = -\dfrac{25}{17}$ : égaux. En $2$ : $4a - 3b = \dfrac{80}{17} + \dfrac{15}{17} = \dfrac{95}{17}$ et $5 - 2b = \dfrac{85}{17} + \dfrac{10}{17} = \dfrac{95}{17}$ : égaux.

   Comme les équations du système sont **équivalentes** à la continuité en $-1$ et en $2$, ces valeurs assurent bien la continuité de $f$ en ces deux points.

3. On regarde chaque morceau avec ces valeurs de $a$ et $b$.

   - Sur $]-\infty, -1[$ : $f(x) = \dfrac{ax^2 + bx}{2x + 1}$ est une fraction rationnelle. Son dénominateur $2x + 1$ ne s'annule qu'en $-\dfrac{1}{2}$, qui n'est pas dans $]-\infty, -1[$ : $f$ est continue.

   - Sur $]-1, 2[$ : $f(x) = 2ax - 3b$ est une fonction affine : continue.

   - Sur $]2, +\infty[$ : $f(x) = x^2 - bx + 1$ est un polynôme : continue.

   - En $-1$ et en $2$ : $f$ est continue d'après la question 2.

   Donc $f$ est continue sur $\mathbb{R}$.
