---
uid: "0000124"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Problèmes du premier et du second degré"
source: "Axiomaths"
title: "Somme et produit des racines, problème et inéquation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["second-degre", "somme-et-produit", "discriminant", "inequation", "probleme"]
---
1. Résoudre dans $\mathbb{R}$ l'équation : $2x^2 - 7x + 3 = 0$.

2. On considère l'équation $(E) : x^2 - 5x + 3 = 0$.

   a. Montrer que $(E)$ admet deux solutions distinctes $x'$ et $x''$.

   b. Sans calculer $x'$ et $x''$, calculer : $x' + x''$, $x'x''$, $x'^2 + x''^2$ et $\dfrac{1}{x'} + \dfrac{1}{x''}$.

   c. Sans calculer $x'$ et $x''$, préciser leurs signes.

3. **Problème.** Un rectangle a un périmètre de $34$ m et une diagonale de $13$ m.

   a. On note $x$ et $y$ ses dimensions (en m). Montrer que $x + y = 17$ et $xy = 60$.

   b. En déduire les dimensions du rectangle.

4. Résoudre dans $\mathbb{R}$ :

   a. $-x^2 + 5x - 6 \geq 0$ ;

   b. $\dfrac{2x^2 - 7x + 3}{x - 2} \geq 0$.

---

## Solution

1. $\Delta = 49 - 24 = 25$, donc $x = \dfrac{7 \pm 5}{4}$ : $S = \left\{\dfrac{1}{2}, 3\right\}$.

2. a. $\Delta = 25 - 12 = 13 > 0$ : deux solutions distinctes.

   b. $x' + x'' = 5$ et $x'x'' = 3$.

   $x'^2 + x''^2 = (x' + x'')^2 - 2x'x'' = 25 - 6 = 19$.

   $\dfrac{1}{x'} + \dfrac{1}{x''} = \dfrac{x' + x''}{x'x''} = \dfrac{5}{3}$.

   c. Le produit $3$ est positif : les deux solutions ont le même signe ; la somme $5$ est positive : elles sont toutes les deux **positives**.

3. a. Périmètre : $2(x + y) = 34$, donc $x + y = 17$. Pythagore : $x^2 + y^2 = 13^2 = 169$.

   $xy = \dfrac{(x + y)^2 - (x^2 + y^2)}{2} = \dfrac{289 - 169}{2} = 60$.

   b. $x$ et $y$ sont les solutions de $t^2 - 17t + 60 = 0$ : $\Delta = 289 - 240 = 49$, $t = \dfrac{17 \pm 7}{2}$, donc $t = 12$ ou $t = 5$.

   Le rectangle mesure $12$ m sur $5$ m.

4. a. $-x^2 + 5x - 6 = -(x - 2)(x - 3)$ : ce trinôme est du signe de $-1$ (coefficient de $x^2$) à l'extérieur des racines, et du signe contraire entre les racines.

   $S = [2, 3]$.

   b. $2x^2 - 7x + 3 = (2x - 1)(x - 3)$ est positif à l'extérieur de $\left[\frac{1}{2}, 3\right]$ ; le dénominateur s'annule en $2$ (valeur interdite).

   | $x$ | $-\infty$ | | $\frac{1}{2}$ | | $2$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $2x^2 - 7x + 3$ | | $+$ | $0$ | $-$ | | $-$ | $0$ | $+$ | |
   | $x - 2$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
   | quotient | | $-$ | $0$ | $+$ | $\Vert$ | $-$ | $0$ | $+$ | |

   $S = \left[\dfrac{1}{2}, 2\right[ \cup [3, +\infty[$.
