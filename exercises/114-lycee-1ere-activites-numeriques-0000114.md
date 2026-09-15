---
uid: "0000114"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Séries n° 1"
title: "Division euclidienne et nombres premiers"
country: "Tunisie"
year: null
professor: "M. Zh Messai"
difficulty: "Moyen"
points: null
tags: ["division-euclidienne", "nombres-premiers"]
---

Soit $x = 8 \times 10^{10} - 7$ et $y = 8 \times 10^{15} + 13$.

1. Déterminer le reste de la division euclidienne de $x$ et $y$ par $8$.

2. Montrer que $x + y$ n'est pas premier.

3. Montrer que $x$ et $(10^{10} - 1)$ sont premiers entre eux.

---

## Solution

1. **Reste de la division par 8 :**
   Pour $x$ : on peut écrire $x = 8 \times 10^{10} - 8 + 1 = 8(10^{10} - 1) + 1$. Le reste de la division de $x$ par $8$ est donc $1$.
   Pour $y$ : on peut écrire $y = 8 \times 10^{15} + 8 + 5 = 8(10^{15} + 1) + 5$. Le reste de la division de $y$ par $8$ est donc $5$.

2. **Nature de $x+y$ :**
   $x + y = (8 \times 10^{10} - 7) + (8 \times 10^{15} + 13)$
   $x + y = 8 \times 10^{15} + 8 \times 10^{10} + 6$
   $x + y = 2(4 \times 10^{15} + 4 \times 10^{10} + 3)$
   Le nombre $x+y$ est un entier pair strictement supérieur à $2$, il est donc divisible par $2$. Ainsi, $x+y$ n'est pas un nombre premier.

3. **Nombres premiers entre eux :**
   Soit $d$ un diviseur commun à $x$ et à $(10^{10} - 1)$.
   Puisque $d$ divise $(10^{10} - 1)$, il divise aussi tout multiple de ce nombre, notamment $8(10^{10} - 1)$.
   De plus, $d$ divise $x$, soit $x = 8 \times 10^{10} - 7 = 8(10^{10} - 1) + 1$.
   Par conséquent, $d$ divise la différence $x - 8(10^{10} - 1) = 1$.
   Le seul diviseur entier naturel de $1$ est $1$, donc le PGCD de $x$ et $(10^{10} - 1)$ est $1$. Ils sont premiers entre eux.