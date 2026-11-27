---
uid: "0000358"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités algébriques"
source: "Axiomaths"
title: "Simplifier et discuter"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["fractions-rationnelles", "simplification", "domaine-de-definition", "factorisation", "discussion"]
provenance: "own"
dressing: "simplifier (x³−1)/(x²−1) et discuter"
rung: 3
batch: "2026-11-22-revision-1ere-A"
---

Pour $x$ réel, on pose $E(x)=\dfrac{x^3-1}{x^2-1}$.

1. Pour quelles valeurs de $x$ l'expression $E(x)$ est-elle définie ?

2. Simplifier $E(x)$. [On rappelle que $a^3-b^3=(a-b)(a^2+ab+b^2)$.]

3. Montrer que $E(x)=x+\dfrac1{x+1}$, puis que $E(x)-1=\dfrac{x^2}{x+1}$.

4. Déterminer tous les entiers $x$ pour lesquels $E(x)$ est un entier.

5. Montrer que $E(x)\geq1$ pour tout $x>-1$ avec $x\neq1$, et préciser le cas d'égalité.

---

## Solution

:::property[Outils]
Une fraction n'existe que si $\boxed{\text{son dénominateur est non nul}}$. On simplifie une fraction en **divisant** numérateur et dénominateur par un **facteur commun** non nul. Un entier $m$ divise $1$ si et seulement si $\boxed{m=1\text{ ou }m=-1}$.
:::

1. $x^2-1=(x-1)(x+1)$ est nul si et seulement si $x=1$ ou $x=-1$.

   $E(x)$ est définie pour tout $x\in\mathbb R\setminus\{-1\,;1\}$.

2. Avec $a=x$ et $b=1$ : $x^3-1=(x-1)(x^2+x+1)$. Pour $x\neq1$ et $x\neq-1$ :

   $$\displaystyle E(x)=\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)}=\boxed{\dfrac{x^2+x+1}{x+1}}$$

3. On écrit $x^2+x+1=x(x+1)+1$ :

   $$\displaystyle E(x)=\dfrac{x(x+1)+1}{x+1}=x+\boxed{\dfrac1{x+1}}$$

   Puis on réduit au même dénominateur :

   $$\displaystyle E(x)-1=x+\dfrac1{x+1}-1=\dfrac{x(x+1)+1-(x+1)}{x+1}=\dfrac{x^2}{x+1}$$

4. Si $x$ est entier, alors $E(x)=x+\dfrac1{x+1}$ est entier si et seulement si $\dfrac1{x+1}$ est entier. Donc :

   $$\displaystyle E(x)\ \text{entier}\iff\dfrac1{x+1}\ \text{entier}\iff x+1\ \text{divise}\ 1\iff x+1=\pm1$$

   $$\displaystyle x=0\qquad\text{ou}\qquad x=-2$$

   Ces deux valeurs sont bien dans l'ensemble de définition ($0$ et $-2$ sont différents de $\pm1$).

   Valeurs : $E(0)=0+1=\boxed{1}$ et $E(-2)=-2+\dfrac1{-1}=\boxed{-3}$.

5. Pour $x>-1$ : $x+1>0$ et $x^2\geq0$, donc

   $$\displaystyle E(x)-1=\dfrac{x^2}{x+1}\geq0$$

   $$\displaystyle E(x)\geq1$$

   L'égalité a lieu si et seulement si $x^2=0$, c'est-à-dire pour $\boxed{x=0}$ seulement.

:::intuition
Écrire la fraction sous la forme « entier + fraction simple » pour étudier une divisibilité.
:::

:::trap
Simplifier $\dfrac{x^3-1}{x^2-1}$ en $x$ en barrant « $x^2$ » : on ne simplifie que des *facteurs*, pas des termes.
:::
