---
uid: "0000382"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Produit de quatre nombres consécutifs"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "identites-remarquables", "changement-de-variable", "factorisation"]
provenance: "own"
dressing: "quatre entiers consécutifs plus 1"
rung: 3
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $P(x)=x(x+1)(x+2)(x+3)+1$.

1. Développer $x(x+3)$ et $(x+1)(x+2)$.

2. En posant $t=x^2+3x$, montrer que, pour tout réel $x$ : $P(x)=\left(x^2+3x+1\right)^2$.

3. En déduire que $\sqrt{97\times98\times99\times100+1}$ est un entier et le calculer.

4. Résoudre dans $\mathbb{R}$ l'équation $x(x+1)(x+2)(x+3)=24$.

---

## Solution

1. $x(x+3)=x^2+3x$ et $(x+1)(x+2)=x^2+3x+2$.

2. On regroupe les facteurs deux par deux (le premier avec le dernier) :

   $$\displaystyle x(x+1)(x+2)(x+3)=\left[x(x+3)\right]\times\left[(x+1)(x+2)\right]=t(t+2)$$

   $$\displaystyle P(x)=t(t+2)+1=t^2+2t+1$$

   :::property[Identité remarquable]
   $\boxed{t^2+2t+1=(t+1)^2}$.
   :::

   $$\displaystyle P(x)=(t+1)^2=\left(x^2+3x+1\right)^2$$

3. On prend $x=97$ : $97\times98\times99\times100+1=P(97)=\left(97^2+3\times97+1\right)^2$.

   Comme $97^2+3\times97+1>0$ :

   $$\displaystyle \sqrt{97\times98\times99\times100+1}=97^2+3\times97+1=9\,409+291+1=9\,701$$

4. $x(x+1)(x+2)(x+3)=24\iff P(x)=25\iff\left(x^2+3x+1\right)^2=25$

   $$\displaystyle \iff x^2+3x+1=5\quad\text{ou}\quad x^2+3x+1=-5$$

   **Premier cas :** $x^2+3x-4=0$, $\Delta=9+16=25$ :

   $$\displaystyle x=\dfrac{-3-5}{2}=-4\quad\text{ou}\quad x=\dfrac{-3+5}{2}=1$$

   **Second cas :** $x^2+3x+6=0$, $\Delta=9-24=-15<0$ : pas de solution.

   $$\displaystyle \mathcal S=\{-4\,;1\}$$

   **Contrôle :** $1\times2\times3\times4=24$ et $(-4)(-3)(-2)(-1)=24$ (vérifié)

:::intuition
Associer les facteurs extrêmes et les facteurs du milieu fait apparaître la même expression $x^2+3x$.
:::

:::trap
$A^2=25$ donne *deux* cas, $A=5$ ou $A=-5$.
:::
