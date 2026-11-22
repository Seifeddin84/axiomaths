---
uid: "0000380"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Une racine double"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["polynomes", "racine-double", "tableau-de-signe", "inequation"]
provenance: "own"
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $P(x)=x^3-3x-2$.

1. Calculer $P(-1)$ et $P(2)$.

2. Déterminer les réels $a$, $b$, $c$ tels que, pour tout réel $x$, $P(x)=(x+1)(ax^2+bx+c)$.

3. Montrer que $P(x)=(x+1)^2(x-2)$.

4. Dresser le tableau de signe de $P(x)$, puis résoudre dans $\mathbb{R}$ l'inéquation $P(x)\geq0$.

5. En déduire que, pour tout réel $x\leq2$ : $x^3\leq3x+2$.

---

## Solution

1. $P(-1)=-1+3-2=0$ et $P(2)=8-6-2=0$. Les réels $-1$ et $2$ sont des racines de $P$.

2. On développe : $(x+1)(ax^2+bx+c)=ax^3+(a+b)x^2+(b+c)x+c$.

   On identifie avec $P(x)=x^3+0x^2-3x-2$ :

   $$
   \displaystyle \left\{
     \begin{aligned}
       a&=1 &&\text{(coefficient de }x^3\text{)}\\
       a+b&=0 &&\text{(coefficient de }x^2\text{)}\\
       b+c&=-3 &&\text{(coefficient de }x\text{)}\\
       c&=-2 &&\text{(terme constant)}
     \end{aligned}
     \right.
     \qquad\text{donc}\qquad a=1,\ b=-1,\ c=-2
   $$

   Contrôle : $b+c=-1-2=-3$ (vérifié). Ainsi $P(x)=(x+1)(x^2-x-2)$.

3. $2$ est racine de $P$ mais pas de $x+1$, donc $2$ est racine de $x^2-x-2$ : $2^2-2-2=0$.

   Le produit des racines de $x^2-x-2$ vaut $\dfrac ca=-2$, donc l'autre racine est $-1$ :

   $$\displaystyle x^2-x-2=(x-2)(x+1)\qquad\text{et}\qquad P(x)=(x+1)(x+1)(x-2)=(x+1)^2(x-2)$$

4.
   :::property[Signe d'un carré]
   $\boxed{(x+1)^2\geq0}$ pour tout réel $x$, et $(x+1)^2=0$ seulement pour $x=-1$ : un carré ne change pas le signe d'un produit.
   :::

   | $x$ | $-\infty$ |  | $-1$ |  | $2$ |  | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $(x+1)^2$ |  | $+$ | $0$ | $+$ | $+$ | $+$ |  |
   | $x-2$ |  | $-$ | $-$ | $-$ | $0$ | $+$ |  |
   | $P(x)$ |  | $-$ | $0$ | $-$ | $0$ | $+$ |  |

   On garde les zones $+$ et les zéros :

   $$\displaystyle \mathcal S=\{-1\}\cup[\,2\,;+\infty[$$

   :::trap
   Oublier la valeur isolée $-1$, où $P$ s'annule sans changer de signe.
   :::

5. D'après le tableau, $P(x)\leq0$ pour tout $x\leq2$ (avec $P(-1)=0$). Donc, pour tout réel $x\leq2$ :

   $$\displaystyle x^3-3x-2\leq0\qquad\text{soit}\qquad x^3\leq3x+2$$
