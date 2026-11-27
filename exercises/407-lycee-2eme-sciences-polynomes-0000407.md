---
uid: "0000407"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Déterminer un polynôme à partir de valeurs ou de racines"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "identification", "racine", "systeme", "second-degre"]
provenance: own
dressing: "polynôme déterminé par des valeurs ou des racines"
rung: 2
---
**Partie A : à partir de trois valeurs**

Soit $P$ un polynôme du second degré : $P(x) = ax^2 + bx + c$ avec $a \neq 0$. On sait que $P(0) = -2$, $P(1) = -3$ et $P(-1) = 3$.

1. Écrire un système vérifié par $a$, $b$ et $c$.

2. Déterminer $a$, $b$ et $c$.

3. Résoudre dans $\mathbb{R}$ l'équation $P(x) = 0$ et factoriser $P(x)$.

**Partie B : à partir de trois racines**

Soit $R$ un polynôme de degré $3$ qui admet pour racines $-1$, $1$ et $2$, et tel que $R(0) = 4$.

1. Justifier qu'il existe un réel $k \neq 0$ tel que, pour tout réel $x$, $R(x) = k(x + 1)(x - 1)(x - 2)$.

2. Déterminer $k$, puis développer $R(x)$.

3. Résoudre dans $\mathbb{R}$ l'inéquation $R(x) \geq 0$.

---

## Solution

**Partie A**

:::property[Valeur d'un polynôme]
Dire que $P(\alpha) = y$ signifie : quand on remplace $x$ par $\alpha$ dans $P(x)$, on obtient $y$. Chaque valeur connue donne **une équation** sur les coefficients.
:::

1. On remplace $x$ dans $P(x) = ax^2 + bx + c$ :

   - $P(0) = c$, donc $c = -2$ ;
   - $P(1) = a + b + c$, donc $a + b + c = -3$ ;
   - $P(-1) = a - b + c$, donc $a - b + c = 3$.

   Le système est :

   $$\begin{cases} c = -2 \\ a + b + c = -3 \\ a - b + c = 3 \end{cases}$$

2. On remplace $c = -2$ dans les deux autres équations :

   $$\begin{cases} a + b = -1 \\ a - b = 5 \end{cases}$$

   En additionnant : $2a = 4$, donc $a = 2$. Puis $b = -1 - a = -3$.

   $$\boxed{P(x) = 2x^2 - 3x - 2}$$

   Contrôle : $P(1) = 2 - 3 - 2 = -3$ et $P(-1) = 2 + 3 - 2 = 3$.

3. $\Delta = (-3)^2 - 4 \times 2 \times (-2) = 9 + 16 = 25 = 5^2$.

   Les racines sont $\dfrac{3 - 5}{4} = -\dfrac{1}{2}$ et $\dfrac{3 + 5}{4} = 2$. Donc $S = \left\{-\dfrac{1}{2}\,;\,2\right\}$.

   $P(x) = 2\left(x + \dfrac{1}{2}\right)(x - 2) = (2x + 1)(x - 2)$.

**Partie B**

:::property[Polynôme de degré $n$ qui a $n$ racines]
Si un polynôme de degré $3$ admet trois racines distinctes $\alpha$, $\beta$, $\gamma$, alors
$$\boxed{R(x) = k(x - \alpha)(x - \beta)(x - \gamma)}$$
où $k \neq 0$ est son coefficient dominant.
:::

1. $-1$ est une racine de $R$, donc $R(x) = (x + 1)\,R_1(x)$ avec $R_1$ de degré $2$.

   $1$ est une autre racine : $R(1) = 2\,R_1(1) = 0$, donc $R_1(1) = 0$. Alors $R_1(x) = (x - 1)\,R_2(x)$ avec $R_2$ de degré $1$.

   $2$ est aussi une racine : $R(2) = 3 \times 1 \times R_2(2) = 0$, donc $R_2(2) = 0$. Un polynôme de degré $1$ qui s'annule en $2$ s'écrit $R_2(x) = k(x - 2)$ avec $k \neq 0$.

   Ainsi $R(x) = k(x + 1)(x - 1)(x - 2)$, où $k \neq 0$ est le coefficient dominant de $R$.

2. On utilise $R(0) = 4$ :

   $$\displaystyle R(0) = k \times (0 + 1)(0 - 1)(0 - 2) = k \times 1 \times (-1) \times (-2) = 2k$$

   Donc $2k = 4$ et $k = 2$.

   On développe : $(x + 1)(x - 1) = x^2 - 1$, puis

   $$\displaystyle (x^2 - 1)(x - 2) = x^3 - 2x^2 - x + 2$$

   $$\boxed{R(x) = 2x^3 - 4x^2 - 2x + 4}$$

3. $R(x) = 2(x + 1)(x - 1)(x - 2)$. Tableau de signes (le facteur $2$ est positif) :

   | $x$ | $-\infty$ | | $-1$ | | $1$ | | $2$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $x + 1$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
   | $x - 1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $x - 2$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $R(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

   $R(x) \geq 0 \iff x \in [-1\,;\,1] \cup [2\,;\,+\infty[$.

:::intuition
Connaître **autant de valeurs que de coefficients** suffit à retrouver un polynôme. Connaître **toutes ses racines** donne sa forme factorisée, à une constante $k$ près : une seule valeur supplémentaire fixe $k$.
:::

:::trap
Oublier la constante $k$ : $(x+1)(x-1)(x-2)$ a bien les trois racines, mais sa valeur en $0$ est $2$, pas $4$.
:::
