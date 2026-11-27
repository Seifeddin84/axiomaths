---
uid: "0000345"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Lycée Farhat Hached Makthar : série d'exercices n°1 (2019-2020)"
title: "Division euclidienne : retrouver l'entier n"
country: "Tunisie"
year: 2019
professor: "M. Ghorbeli Med Hedi"
difficulty: "Facile"
points: null
tags: ["division-euclidienne", "quotient", "reste", "entiers-naturels"]
provenance: scan
---

Déterminer la valeur de l'entier positif $n$ dans chaque cas :

a. Dans la division euclidienne de $n$ par $24$, le quotient entier est $52$ et le reste $9$.

b. Dans la division euclidienne de $368$ par $n$, le quotient entier est $61$ et le reste $2$.

c. Dans la division euclidienne de $982$ par $45$, le quotient entier est $21$ et le reste $n$.

---

## Solution

:::property[Division euclidienne]
Effectuer la division euclidienne de $a$ par $b$ ($b\neq0$), c'est trouver deux entiers $q$ (quotient) et $r$ (reste) tels que :

$$\boxed{a=b\times q+r\qquad\text{avec}\qquad 0\le r<b}$$

Le reste est toujours **strictement plus petit** que le diviseur.
:::

a. Ici $a=n$, $b=24$, $q=52$, $r=9$ (et $9<24$ : c'est bien possible).

   $$\displaystyle n=24\times52+9=1\,248+9$$

   $$\boxed{n=1\,257}$$

b. Ici $a=368$, le diviseur est $n$, $q=61$, $r=2$.

   $$\displaystyle 368=61\,n+2\implies 61\,n=368-2=366$$

   $$\displaystyle n=\dfrac{366}{61}=6$$

   $$\boxed{n=6}$$

   Contrôle : $61\times6+2=366+2=368$ et le reste $2$ est bien inférieur au diviseur $6$.

c. Ici $a=982$, $b=45$, $q=21$, le reste est $n$.

   $$\displaystyle 982=45\times21+n \implies n=982-945=37$$

   $$\boxed{n=37}$$

   Contrôle : $37<45$, donc $37$ est bien un reste possible.

:::intuition
Dans $a=bq+r$, on isole l'inconnue : c'est une équation du premier degré. Il reste ensuite à vérifier la condition $r<b$.
:::

:::trap
Oublier la condition $r<b$. Dans la question b, si l'on avait trouvé un $n\le2$ le résultat aurait été impossible : on vérifie toujours.
:::
