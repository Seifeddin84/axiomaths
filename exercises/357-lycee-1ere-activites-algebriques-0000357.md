---
uid: "0000357"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Algébriques"
source: "Axiomaths"
title: "Factoriser n⁴ + 4"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["factorisation", "identite-de-sophie-germain", "identites-remarquables", "arithmetique"]
provenance: "own"
dressing: "factoriser x⁴+4y⁴ et nombres composés"
rung: 5
batch: "2026-11-22-revision-1ere-A"
---

1. Montrer que, pour tous réels $x$ et $y$ : $x^4+4y^4=(x^2+2xy+2y^2)(x^2-2xy+2y^2)$. [Écrire $x^4+4y^4=(x^2+2y^2)^2-(2xy)^2$.]

2. Vérifier que $5^4+4$ est le produit de deux entiers supérieurs à $1$.

3. Montrer que, pour tout entier $n\geq2$, le nombre $n^4+4$ n'est pas premier.

4. Soit $k\geq1$ un entier. Montrer que $2^{4k+2}+1=(2^{2k+1}+2^{k+1}+1)(2^{2k+1}-2^{k+1}+1)$, puis que $2^{4k+2}+1$ n'est pas premier.

5. Décomposer $2^{10}+1$ en produit de facteurs premiers.

---

## Solution

:::property[Outils]
$\boxed{a^2-b^2=(a-b)(a+b)}$ et $\boxed{(a+b)^2=a^2+2ab+b^2}$. Un entier $N\geq2$ est **premier** s'il n'a pas d'autre diviseur que $1$ et $N$ : un produit de deux entiers supérieurs ou égaux à $2$ n'est **pas** premier.
:::

1. On suit l'indication. Le développement de $(x^2+2y^2)^2$ donne $x^4+4x^2y^2+4y^4$ :

   $$\displaystyle (x^2+2y^2)^2-(2xy)^2=x^4+4x^2y^2+4y^4-4x^2y^2=x^4+4y^4$$

   Puis la différence de deux carrés avec $a=x^2+2y^2$ et $b=2xy$ :

   $$\displaystyle x^4+4y^4=(x^2+2y^2-2xy)(x^2+2y^2+2xy)=\boxed{(x^2+2xy+2y^2)(x^2-2xy+2y^2)}$$

2. Avec $y=1$ et $x=n$ : $\boxed{n^4+4=(n^2+2n+2)(n^2-2n+2)}$. Pour $n=5$ :

   $$\displaystyle 5^4+4=629\qquad n^2+2n+2=25+10+2=37\qquad n^2-2n+2=25-10+2=17$$

   $$\displaystyle 629=17\times37$$

3. On écrit le plus petit facteur sous forme de carré :

   $$\displaystyle n^2-2n+2=(n-1)^2+1$$

   Pour $n\geq2$, $(n-1)^2\geq1$ donc $n^2-2n+2\geq2$.

   L'autre facteur est $n^2+2n+2\geq2$ aussi.

   $n^4+4$ est le produit de deux entiers supérieurs ou égaux à $2$ : il n'est pas premier.

4. On prend $x=1$ et $y=2^k$ dans la question 1. Alors :

   $$\displaystyle 4y^4=4\times(2^k)^4=2^2\times2^{4k}=2^{4k+2}$$

   $$\displaystyle 2xy=2\times2^k=2^{k+1}\qquad2y^2=2\times2^{2k}=2^{2k+1}$$

   On obtient :

   $$\displaystyle 2^{4k+2}+1=\boxed{(2^{2k+1}+2^{k+1}+1)(2^{2k+1}-2^{k+1}+1)}$$

   **Le deuxième facteur est $\geq2$ :** on met $2^{k+1}$ en facteur.

   $$\displaystyle 2^{2k+1}-2^{k+1}+1=2^{k+1}(2^k-1)+1$$

   Pour $k\geq1$ : $2^k-1\geq1$ et $2^{k+1}\geq4$, donc ce facteur vaut au moins $5$.

   Le premier facteur est encore plus grand : le nombre est un produit de deux entiers $\geq2$, il n'est pas premier.

5. On prend $k=2$ : $2^{10}+1=1025$.

   $$\displaystyle 2^{2k+1}+2^{k+1}+1=2^5+2^3+1=41\qquad2^{2k+1}-2^{k+1}+1=2^5-2^3+1=25$$

   $$\displaystyle 2^{10}+1=25\times41=\boxed{5^2\times41}$$

   Le nombre $41$ est premier (il n'est divisible ni par $2$, ni par $3$, ni par $5$, et $7^2>41$ : il suffit de tester les nombres premiers $2$, $3$, $5$).

:::intuition
Faire apparaître un carré moins un carré en complétant $x^4$ en $(x^2+2y^2)^2$.
:::

:::trap
Le cas $k=0$ : $2^2+1=5=5\times1$ (un facteur vaut $1$), il est exclu.
:::
