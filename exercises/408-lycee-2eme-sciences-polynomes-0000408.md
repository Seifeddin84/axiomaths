---
uid: "0000408"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Équations bicarrées et inéquation de degré 4"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "equation-bicarree", "changement-de-variable", "inequations", "degre-4"]
provenance: own
dressing: "bicarrées et inéquation de degré 4"
rung: 2
---
1. Résoudre dans $\mathbb{R}$ chacune des équations :

   a. $x^4 - 5x^2 + 4 = 0$

   b. $x^4 - 2x^2 - 3 = 0$

   c. $x^4 + x^2 + 1 = 0$

2. a. Factoriser $P(x) = x^4 - 5x^2 + 4$ en produit de quatre facteurs du premier degré.

   b. Dresser le tableau de signes de $P(x)$.

   c. En déduire l'ensemble des solutions de l'inéquation $x^4 - 5x^2 + 4 \leq 0$.

---

## Solution

:::method[Équation bicarrée]
Une équation de la forme $ax^4 + bx^2 + c = 0$ ne contient que des puissances **paires** de $x$.

On pose $X = x^2$, avec $X \geq 0$ : on obtient $aX^2 + bX + c = 0$, une équation du second degré. On résout en $X$, puis on revient à $x$ avec $x^2 = X$.
:::

:::property[Résoudre $x^2 = X$]
- Si $X > 0$ : $x = \sqrt{X}$ ou $x = -\sqrt{X}$ (deux solutions).
- Si $X = 0$ : $x = 0$.
- Si $X < 0$ : **aucune** solution réelle, car un carré est positif ou nul.
:::

1. a. On pose $X = x^2$. L'équation devient $X^2 - 5X + 4 = 0$.

   $\Delta = 25 - 16 = 9 = 3^2$, donc $X = \dfrac{5 - 3}{2} = 1$ ou $X = \dfrac{5 + 3}{2} = 4$.

   Les deux valeurs sont positives. On revient à $x$ :

   - $x^2 = 1$ donne $x = -1$ ou $x = 1$ ;
   - $x^2 = 4$ donne $x = -2$ ou $x = 2$.

   $$S = \{-2\,;\,-1\,;\,1\,;\,2\}$$

   b. On pose $X = x^2$ : $X^2 - 2X - 3 = 0$.

   $\Delta = 4 + 12 = 16 = 4^2$, donc $X = \dfrac{2 - 4}{2} = -1$ ou $X = \dfrac{2 + 4}{2} = 3$.

   - $X = -1$ : $x^2 = -1$ est **impossible** ;
   - $X = 3$ : $x^2 = 3$ donne $x = -\sqrt{3}$ ou $x = \sqrt{3}$.

   $$S = \{-\sqrt{3}\,;\,\sqrt{3}\}$$

   c. On pose $X = x^2$ : $X^2 + X + 1 = 0$.

   $\Delta = 1 - 4 = -3 < 0$ : cette équation n'a **aucune** solution réelle en $X$.

   Donc l'équation $x^4 + x^2 + 1 = 0$ n'a aucune solution : $S = \emptyset$.

   Autre façon de le voir : pour tout $x$, $x^4 \geq 0$ et $x^2 \geq 0$, donc $x^4 + x^2 + 1 \geq 1 > 0$.

2. a. Avec $X = x^2$, on a $X^2 - 5X + 4 = (X - 1)(X - 4)$ (racines $1$ et $4$ trouvées plus haut). Donc

   $$\displaystyle P(x) = (x^2 - 1)(x^2 - 4)$$

   On factorise chaque différence de carrés : $x^2 - 1 = (x - 1)(x + 1)$ et $x^2 - 4 = (x - 2)(x + 2)$.

   $$\boxed{P(x) = (x - 2)(x - 1)(x + 1)(x + 2)}$$

   b. Tableau de signes :

   | $x$ | $-\infty$ | | $-2$ | | $-1$ | | $1$ | | $2$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|---|---|
   | $x + 2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | | $+$ | |
   | $x + 1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
   | $x - 1$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $x - 2$ | | $-$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $P(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

   c. $P(x) \leq 0$ aux endroits où la dernière ligne est $-$ ou $0$ :

   $$S = [-2\,;\,-1] \cup [1\,;\,2]$$

   Contrôle : $P(1{,}5) = (-0{,}5)(0{,}5)(2{,}5)(3{,}5) < 0$ et $P(0) = 4 > 0$.

:::intuition
En posant $X = x^2$, on **ramène le degré $4$ au degré $2$**. Chaque valeur positive de $X$ donne deux valeurs de $x$ (opposées).
:::

:::trap
Après avoir trouvé $X$, ne pas oublier de **revenir à $x$** (on ne donne pas $X = 1$ et $X = 4$ comme solutions), et éliminer les valeurs négatives de $X$.
:::
