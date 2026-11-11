---
uid: "0000144"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Probabilités"
source: "Bac 1990 contrôle, Ex. 1"
title: "Un dé truqué lancé trois fois"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Facile"
points: 4
tags: ["bac", "de-truque", "loi-binomiale", "epreuves-repetees"]
bac: "1990-controle-maths"
---

On lance un dé cubique dont les faces sont numérotées de $1$ à $6$. Ce dé est truqué de façon qu'à chaque jet la probabilité d'obtenir un nombre pair soit égale au double de celle d'obtenir un nombre impair.

1. On lance le dé une fois et on désigne par $p$ la probabilité d'obtenir un nombre impair.

   a. Calculer $p$.

   b. En déduire la probabilité d'obtenir le nombre $1$ et celle d'obtenir le nombre $2$.

2. On lance le dé trois fois. Calculer la probabilité de chacun des événements suivants :

   a. on obtient deux fois et deux fois seulement le nombre $2$ ;

   b. on obtient au moins deux fois le nombre $2$.

---

## Solution

1. a. « Pair » et « impair » sont contraires : $p + 2p = 1$, donc $p = \dfrac13$.

   b. Comme d'habitude pour ce type d'énoncé, les trois faces impaires sont équiprobables, ainsi que les trois faces paires.

   $P(\{1\}) = \dfrac{p}{3} = \dfrac19$ et $P(\{2\}) = \dfrac{2p}{3} = \dfrac29$.

2. Les trois lancers sont indépendants et identiques. Le nombre $X$ de « 2 » obtenus suit la loi binomiale de paramètres $n = 3$ et $\dfrac29$.

   a. $P(X = 2) = \dbinom{3}{2}\left(\dfrac29\right)^2 \dfrac79 = \dfrac{84}{729} = \dfrac{28}{243} \approx 0{,}115$.

   b. $P(X \geq 2) = P(X = 2) + P(X = 3) = \dfrac{84}{729} + \dfrac{8}{729} = \dfrac{92}{729} \approx 0{,}126$.
