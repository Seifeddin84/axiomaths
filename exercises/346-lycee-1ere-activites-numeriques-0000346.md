---
uid: "0000346"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Lycée Farhat Hached Makthar : série d'exercices n°1 (2019-2020)"
title: "Quotient d'entiers, PGCD et critères de divisibilité"
country: "Tunisie"
year: 2019
professor: "M. Ghorbeli Med Hedi"
difficulty: "Moyen"
points: null
tags: ["diviseurs", "pgcd", "fraction-irreductible", "criteres-divisibilite"]
provenance: scan
---

### Partie I

On considère le nombre $A=\dfrac{n-11}{n+5}$ où $n\in\mathbb{N}$.

1. Montrer que $A=1-\dfrac{16}{n+5}$.

2. En déduire toutes les valeurs de l'entier naturel $n$ telles que $A\in\mathbb{N}$.

### Partie II

1. Déterminer le $\mathrm{PGCD}(804\,;\,536)$ en utilisant l'algorithme d'Euclide.

2. En déduire l'écriture irréductible de $B=\dfrac{804}{536}$.

3. Le chiffre des unités du nombre $x=\overline{148\,\square}$ a été effacé. Retrouver ce chiffre sachant que $x$ est divisible par $2$, par $3$ et par $8$.

---

## Solution

### Partie I

:::property[Diviseurs d'un entier]
Si $k$ est un entier **strictement positif**, alors $\dfrac{16}{k}$ est un entier **si et seulement si** $k$ est un diviseur de $16$.

Les diviseurs positifs de $16$ sont : $1,\ 2,\ 4,\ 8,\ 16$.
:::

1. On met $1$ au même dénominateur que la fraction :

   $$\displaystyle 1-\dfrac{16}{n+5}=\dfrac{n+5}{n+5}-\dfrac{16}{n+5}=\dfrac{n+5-16}{n+5}=\dfrac{n-11}{n+5}$$

   $$\boxed{A=1-\dfrac{16}{n+5}}$$

2. $A$ est un entier si et seulement si $\dfrac{16}{n+5}$ est un entier, c'est-à-dire si $n+5$ divise $16$.

   Comme $n\in\mathbb{N}$, on a $n+5\ge5$. Parmi $1,\ 2,\ 4,\ 8,\ 16$, seuls $8$ et $16$ conviennent :

   - $n+5=8\implies n=3$ ;

   - $n+5=16\implies n=11$.

   Il faut maintenant vérifier que $A$ est **positif ou nul** pour être dans $\mathbb{N}$ :

   - $n=3$ : $A=\dfrac{3-11}{3+5}=\dfrac{-8}{8}=-1\notin\mathbb{N}$ ;

   - $n=11$ : $A=\dfrac{0}{16}=0\in\mathbb{N}$.

   $$\boxed{n=11}$$

### Partie II

:::method[Algorithme d'Euclide]
On divise $a$ par $b$ : $a=bq+r$ avec $0\le r<b$, puis on recommence avec $(b\,;r)$.

$$\boxed{\text{le PGCD est le dernier reste non nul}}$$
:::

:::property[Critères de divisibilité]
- Par $3$ : la somme des chiffres est divisible par $3$.

- Par $2$ : le chiffre des unités est pair.

- Par $8$ : le nombre formé par les **trois derniers chiffres** est divisible par $8$ (car $1000=8\times125$).
:::

1. $$\displaystyle 804=536\times1+268$$

   $$\displaystyle 536=268\times2+0$$

   Le dernier reste non nul est $268$ : $\boxed{\mathrm{PGCD}(804\,;536)=268}$.

2. On divise le numérateur et le dénominateur par $268$ :

   $$\displaystyle B=\dfrac{804}{536}=\dfrac{268\times3}{268\times2}=\boxed{\dfrac{3}{2}}$$

3. Notons $d$ le chiffre effacé : $x=\overline{148d}=1\,480+d$.

   *Divisible par $8$* : les trois derniers chiffres forment $48d=480+d$. Comme $480=8\times60$ est divisible par $8$, il faut que $d$ le soit : $d\in\{0\,;8\}$.

   *Divisible par $3$* : la somme des chiffres est $1+4+8+d=13+d$.

   - $d=0$ : $13$ n'est pas divisible par $3$ ;

   - $d=8$ : $21=3\times7$ est divisible par $3$.

   *Divisible par $2$* : $d=8$ est pair, c'est bon.

   $$\boxed{d=8\qquad x=1\,488}$$

   Contrôle : $1\,488=8\times186=3\times496=2\times744$.

:::intuition
« $\dfrac{16}{n+5}$ entier » transforme un problème sur un quotient en un problème sur les **diviseurs** de $16$ : il n'y a que cinq candidats.
:::

:::trap
$n=3$ donne bien un entier ($A=-1$), mais pas un entier **naturel**. Penser à vérifier le signe : $A\ge0$ équivaut ici à $n\ge11$.
:::
