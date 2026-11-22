---
uid: "0000343"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Lycée Farhat Hached Makthar : série d'exercices n°1 (2019-2020)"
title: "PGCD, PPCM et fraction irréductible"
country: "Tunisie"
year: 2019
professor: "M. Ghorbeli Med Hedi"
difficulty: "Facile"
points: null
tags: ["pgcd", "ppcm", "algorithme-euclide", "fraction-irreductible", "decomposition-premiers"]
provenance: scan
---

1. Déterminer le $\mathrm{PGCD}(66\,;\,378)$ :

   a. par la méthode de décomposition en facteurs premiers ;

   b. par l'algorithme d'Euclide.

2. a. Déterminer le $\mathrm{PPCM}(378\,;\,330)$.

   b. Rendre la fraction $\dfrac{330}{378}$ irréductible.

---

## Solution

:::property[PGCD et PPCM par décomposition en facteurs premiers]
On décompose chaque nombre en produit de facteurs premiers.

- **PGCD** : produit des facteurs premiers **communs**, chacun avec le **plus petit** exposant.
- **PPCM** : produit de **tous** les facteurs premiers rencontrés, chacun avec le **plus grand** exposant.

$$\boxed{\mathrm{PGCD}(a\,;b)\times\mathrm{PPCM}(a\,;b)=a\times b}$$
:::

:::method[Algorithme d'Euclide]
On divise $a$ par $b$ ($a>b$) : $a=bq+r$ avec $0\le r<b$. On recommence avec le couple $(b\,;r)$, et ainsi de suite.

$$\boxed{\text{le PGCD est le dernier reste non nul}}$$
:::

1. a. On décompose les deux nombres :

   $$\displaystyle 66=2\times3\times11 \qquad 378=2\times3^3\times7$$

   Les facteurs premiers communs sont $2$ et $3$, chacun avec son plus petit exposant ($2^1$ et $3^1$).

   $$\boxed{\mathrm{PGCD}(66\,;378)=2\times3=6}$$

   b. On enchaîne les divisions euclidiennes :

   $$\displaystyle 378=66\times5+48$$

   $$\displaystyle 66=48\times1+18$$

   $$\displaystyle 48=18\times2+12$$

   $$\displaystyle 18=12\times1+6$$

   $$\displaystyle 12=6\times2+0$$

   Le dernier reste non nul est $6$ : on retrouve $\boxed{\mathrm{PGCD}(66\,;378)=6}$.

2. a. On décompose $330$ :

   $$\displaystyle 330=2\times3\times5\times11 \qquad 378=2\times3^3\times7$$

   Pour le PPCM on prend **tous** les facteurs premiers, chacun avec son plus grand exposant : $2^1$, $3^3$, $5$, $7$, $11$.

   $$\displaystyle \mathrm{PPCM}(378\,;330)=2\times3^3\times5\times7\times11=2\times27\times385=20\,790$$

   $$\boxed{\mathrm{PPCM}(378\,;330)=20\,790}$$

   Contrôle : $\mathrm{PGCD}(378\,;330)=2\times3=6$ et $6\times20\,790=124\,740=378\times330$.

   b. D'après la décomposition, $\mathrm{PGCD}(330\,;378)=6$. On divise le numérateur et le dénominateur par ce PGCD :

   $$\displaystyle \dfrac{330}{378}=\dfrac{6\times55}{6\times63}=\boxed{\dfrac{55}{63}}$$

   Contrôle : $55=5\times11$ et $63=3^2\times7$ n'ont aucun facteur commun, la fraction est bien irréductible.

:::intuition
Diviser une fraction par le PGCD de ses deux termes la simplifie en **une seule fois** et au maximum.
:::

:::trap
Ne pas confondre : le PGCD prend les facteurs **communs** avec le **plus petit** exposant, le PPCM prend **tous** les facteurs avec le **plus grand** exposant.
:::
