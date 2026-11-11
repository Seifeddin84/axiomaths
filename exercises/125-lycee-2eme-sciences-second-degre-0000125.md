---
uid: "0000125"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Problèmes du premier et du second degré"
source: "Axiomaths"
title: "Équation à paramètre, bicarrée et irrationnelle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["second-degre", "parametre", "equation-bicarree", "equation-irrationnelle", "systeme"]
---
Soit $m$ un réel. On considère l'équation $(E_m) : (m - 1)x^2 - 2mx + m + 2 = 0$.

1. Résoudre $(E_m)$ pour $m = 1$.

2. On suppose $m \neq 1$.

   a. Montrer que le discriminant réduit de $(E_m)$ est $\Delta' = 2 - m$.

   b. Discuter suivant les valeurs de $m$ le nombre de solutions de $(E_m)$.

   c. Pour $m = 2$, préciser la solution de $(E_m)$.

3. Montrer que, pour tout réel $m$, le réel $1$ n'est jamais solution de $(E_m)$.

4. On suppose que $(E_m)$ admet deux solutions non nulles $x'$ et $x''$.

   a. Exprimer $x' + x''$ et $x'x''$ en fonction de $m$.

   b. Déterminer $m$ pour que $\dfrac{1}{x'} + \dfrac{1}{x''} = 3$, puis résoudre l'équation $(E_m)$ obtenue.

5. Résoudre dans $\mathbb{R}$ :

   a. $x^4 - 5x^2 + 4 = 0$ ;

   b. $\sqrt{2x + 3} = x$ ;

   c. le système $\begin{cases} x + y = 7 \\ xy = 12 \end{cases}$.

---

## Solution

1. Pour $m = 1$ : $-2x + 3 = 0$, donc $S = \left\{\dfrac{3}{2}\right\}$.

2. a. $(E_m)$ s'écrit $ax^2 + 2b'x + c = 0$ avec $a = m - 1$, $b' = -m$, $c = m + 2$ :

   $\Delta' = b'^2 - ac = m^2 - (m - 1)(m + 2) = m^2 - (m^2 + m - 2) = 2 - m$.

   b. Si $m < 2$ et $m \neq 1$ : deux solutions distinctes. Si $m = 2$ : une solution double. Si $m > 2$ : aucune solution.

   c. Pour $m = 2$ : $x^2 - 4x + 4 = 0$, soit $(x - 2)^2 = 0$ : $S = \{2\}$.

3. En remplaçant $x$ par $1$ : $(m - 1) - 2m + m + 2 = 1 \neq 0$ pour tout $m$.

4. a. $x' + x'' = \dfrac{2m}{m - 1}$ et $x'x'' = \dfrac{m + 2}{m - 1}$.

   b. $\dfrac{1}{x'} + \dfrac{1}{x''} = \dfrac{x' + x''}{x'x''} = \dfrac{2m}{m + 2}$ (avec $m \neq -2$ pour que le produit soit non nul).

   $\dfrac{2m}{m + 2} = 3 \iff 2m = 3m + 6 \iff m = -6$. On vérifie : $-6 < 2$, $-6 \neq 1$ et $-6 \neq -2$.

   $(E_{-6}) : -7x^2 + 12x - 4 = 0$, soit $7x^2 - 12x + 4 = 0$ : $\Delta' = 36 - 28 = 8$, $x = \dfrac{6 \pm 2\sqrt{2}}{7}$.

5. a. On pose $X = x^2 \geq 0$ : $X^2 - 5X + 4 = 0 \iff X = 1$ ou $X = 4$. Donc $S = \{-2, -1, 1, 2\}$.

   b. Condition : $x \geq 0$ (et $2x + 3 \geq 0$). Alors $2x + 3 = x^2 \iff x^2 - 2x - 3 = 0 \iff x = 3$ ou $x = -1$.

   Seul $3 \geq 0$ convient : $S = \{3\}$.

   c. $x$ et $y$ sont les solutions de $t^2 - 7t + 12 = 0$, soit $t = 3$ ou $t = 4$ : $S = \{(3, 4), (4, 3)\}$.
