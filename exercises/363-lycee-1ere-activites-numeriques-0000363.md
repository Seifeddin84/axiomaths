---
uid: "0000363"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Restes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["arithmetique", "division-euclidienne", "carres", "demonstration"]
provenance: "own"
dressing: "restes de carrés"
rung: 3
batch: "2026-11-22-revision-1ere-A"
---

1. Montrer que le carré d'un entier impair a pour reste $1$ dans la division euclidienne par $8$. [Écrire $n=8q+r$ avec $r\in\{1,3,5,7\}$.]

2. Un entier $n$ a pour reste $7$ dans la division euclidienne par $25$. Quels sont les restes de $n^2$ et de $n^3$ dans la division par $25$ ?

3. Un entier naturel $n$ a pour reste $3$ dans la division par $7$ et pour reste $2$ dans la division par $5$. Montrer que $n-17$ est un multiple de $35$, en déduire l'écriture de $n$, puis le plus petit entier $n>2026$ qui convient.

---

## Solution

:::property[Division euclidienne]
Pour deux entiers $a$ et $b>0$, il existe un unique couple $(q,r)$ tel que $\boxed{a=bq+r\text{ avec }0\leq r<b}$. Si deux entiers **premiers entre eux** divisent $m$, leur produit divise $m$.
:::

1. Un entier impair a pour reste $r\in\{1,3,5,7\}$ dans la division par $8$ : $n=8q+r$.

   $$\displaystyle n^2=64q^2+16qr+r^2=8\,(8q^2+2qr)+r^2$$

   Il reste à étudier $r^2$ :

   $$
   \begin{array}{c|c|c|c|c}
     r&1&3&5&7\\\hline
     r^2&1&9=8\times1+1&25=8\times3+1&49=8\times6+1
     \end{array}
   $$

   Dans chaque cas $r^2=8m+1$, donc $n^2=8\,(8q^2+2qr+m)+1$ : le reste est $\boxed{1}$.

2. On écrit $n=25q+7$.

   **Pour $n^2$ :**

   $$\displaystyle n^2=625q^2+350q+49=25\,(25q^2+14q)+49$$

   Comme $49=25\times1+24$ :

   $$\displaystyle n^2=25\,(25q^2+14q+1)+24$$

   Le reste est $\boxed{24}$.

   **Pour $n^3$ :** on développe $(25q+7)^3$. Tous les termes contiennent le facteur $25q$, sauf le dernier :

   $$\displaystyle n^3=(25q)^3+3(25q)^2\times7+3\times25q\times49+343=25\times(\cdots)+343$$

   Comme $343=13\times25+18$, le reste est $\boxed{18}$.

3. On écrit $n=7a+3=5b+2$ avec $a,b$ entiers. On remarque que $17=7\times2+3=5\times3+2$.

   On soustrait :

   $$\displaystyle n-17=7a+3-17=7\,(a-2)\qquad n-17=5b+2-17=5\,(b-3)$$

   Donc $n-17$ est multiple de $7$ **et** de $5$. Comme $5$ et $7$ sont premiers entre eux, $n-17$ est multiple de $35$ :

   $$\displaystyle n-17=35k\implies\boxed{n=35k+17}\ \ (k\in\mathbb N)$$

   On cherche $n>2026$ :

   $$\displaystyle 35k+17>2026\iff35k>2009\iff k>57{,}4$$

   Le plus petit entier est $k=58$ :

   $$\displaystyle n=35\times58+17=2030+17=\boxed{2047}$$

   Contrôle : $2047=7\times292+3$ et $2047=5\times409+2$.

:::intuition
Remplacer $n$ par $n-17$ transforme deux conditions « reste 3 » et « reste 2 » en deux conditions « multiple de ».
:::

:::trap
Conclure « multiple de $35$ » sans avoir vérifié que $5$ et $7$ sont premiers entre eux.
:::
