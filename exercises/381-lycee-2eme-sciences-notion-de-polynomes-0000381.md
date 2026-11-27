---
uid: "0000381"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Synthèse : supprimer le terme en $x^2$"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "changement-de-variable", "equation-troisieme-degre", "identification"]
provenance: "own"
dressing: "supprimer le terme en x² (translation de variable)"
rung: 5
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $P(x)=x^3+6x^2+9x+5$.

1. Développer et réduire $(x+a)^3+b(x+a)+c$, où $a$, $b$, $c$ sont des réels.

2. Déterminer $a$, $b$ et $c$ pour que, pour tout réel $x$ : $P(x)=(x+a)^3+b(x+a)+c$.

3. En posant $X=x+2$, résoudre dans $\mathbb{R}$ l'équation $P(x)=3$.

4. Résoudre dans $\mathbb{R}$ l'inéquation $P(x)\geq3$.

---

## Solution

1.
   :::property[Cube d'une somme]
   $\boxed{(x+a)^3=x^3+3ax^2+3a^2x+a^3}$.
   :::

   $$\displaystyle (x+a)^3+b(x+a)+c=x^3+3ax^2+(3a^2+b)x+(a^3+ab+c)$$

2. Identification avec $P(x)=x^3+6x^2+9x+5$ :

   $$
   \displaystyle \left\{
     \begin{aligned}
       3a&=6 &&\text{(coefficient de }x^2\text{)}\\
       3a^2+b&=9 &&\text{(coefficient de }x\text{)}\\
       a^3+ab+c&=5 &&\text{(terme constant)}
     \end{aligned}
     \right.
   $$

   La première ligne donne $a=2$. La deuxième : $12+b=9$, donc $b=-3$. La troisième : $8-6+c=5$, donc $c=3$.

   $$\displaystyle \boxed{P(x)=(x+2)^3-3(x+2)+3}$$

3. Avec $X=x+2$ :

   $$\displaystyle P(x)=3\iff X^3-3X+3=3\iff X^3-3X=0\iff X\left(X^2-3\right)=0$$

   $$\displaystyle X\left(X-\sqrt3\right)\left(X+\sqrt3\right)=0\iff X=0\quad\text{ou}\quad X=\sqrt3\quad\text{ou}\quad X=-\sqrt3$$

   On revient à $x=X-2$ :

   $$\displaystyle \mathcal S=\left\{-2-\sqrt3\,;-2\,;-2+\sqrt3\right\}$$

4. $P(x)\geq3\iff X\left(X-\sqrt3\right)\left(X+\sqrt3\right)\geq0$. Tableau de signe en $X$ :

   | $X$ | $-\infty$ |  | $-\sqrt3$ |  | $0$ |  | $\sqrt3$ |  | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $X+\sqrt3$ |  | $-$ | $0$ | $+$ | $+$ | $+$ | $+$ | $+$ |  |
   | $X$ |  | $-$ | $-$ | $-$ | $0$ | $+$ | $+$ | $+$ |  |
   | $X-\sqrt3$ |  | $-$ | $-$ | $-$ | $-$ | $-$ | $0$ | $+$ |  |
   | produit |  | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |  |

   $X\in\left[-\sqrt3\,;0\right]\cup\left[\sqrt3\,;+\infty\right[$, et $x=X-2$ :

   $$\displaystyle \mathcal S=\left[-2-\sqrt3\,;-2\right]\cup\left[-2+\sqrt3\,;+\infty\right[$$

:::intuition
Le changement $X=x+2$ fait disparaître le terme en $x^2$ ; l'équation devient $X^3-3X=0$, qui se factorise par $X$.
:::

**Contrôle :** $-2$ est racine de $x^3+6x^2+9x+2$ et $x^3+6x^2+9x+2=(x+2)(x^2+4x+1)$ redonne les mêmes solutions.
