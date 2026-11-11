---
uid: "0000150"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Probabilités"
source: "Bac 1989 contrôle, Ex. 1"
title: "Deux dés dont un spécial, épreuves répétées"
country: "Tunisie"
year: 1989
professor: null
difficulty: "Moyen"
points: null
tags: ["bac", "loi-de-probabilite", "loi-binomiale", "epreuves-repetees"]
bac: "1989-controle-maths"
---

On considère deux dés cubiques non truqués. Les faces de l'un sont numérotées de $1$ à $6$, les faces de l'autre sont numérotées $2$, $2$, $2$, $3$, $4$ et $4$. On lance les deux dés simultanément et on désigne par $X$ la variable aléatoire qui, à chaque lancer, associe la somme des nombres marqués sur les faces supérieures.

1. Déterminer la loi de probabilité de $X$.

2. Soit $A$ l'événement : « La somme des nombres marqués sur les faces supérieures est égale à $8$ ». On répète quatre fois l'épreuve qui consiste à lancer simultanément les deux dés. Calculer la probabilité de chacun des événements suivants :

   a. $A$ est réalisé exactement trois fois.

   b. $A$ est réalisé au moins une fois.

   c. $A$ est réalisé pour la première fois au troisième lancer.

---

## Solution

1. Les $36$ couples (face du premier dé, face du second) sont équiprobables, en distinguant les trois faces « 2 » et les deux faces « 4 » du second dé.

   Pour chaque face $b$ du second dé, $X = a + b$ prend les valeurs $b + 1, \dots, b + 6$. En comptant :

   | $x_i$ | $P(X = x_i)$ |
   |---|---|
   | $3$ | $\dfrac{3}{36}$ |
   | $4$ | $\dfrac{4}{36}$ |
   | $5$ | $\dfrac{6}{36}$ |
   | $6$ | $\dfrac{6}{36}$ |
   | $7$ | $\dfrac{6}{36}$ |
   | $8$ | $\dfrac{6}{36}$ |
   | $9$ | $\dfrac{3}{36}$ |
   | $10$ | $\dfrac{2}{36}$ |

   Par exemple $X = 8$ : $(6, 2)$ trois fois, $(5, 3)$ une fois, $(4, 4)$ deux fois, soit $6$ cas. On vérifie que la somme vaut $\frac{36}{36} = 1$.

2. $P(A) = \dfrac{6}{36} = \dfrac16$. Les quatre épreuves sont indépendantes : le nombre $Y$ de réalisations de $A$ suit $\mathcal{B}\left(4, \dfrac16\right)$.

   a. $P(Y = 3) = \dbinom{4}{3}\left(\dfrac16\right)^3 \dfrac56 = \dfrac{20}{1296} = \dfrac{5}{324} \approx 0{,}015$.

   b. $P(Y \geq 1) = 1 - P(Y = 0) = 1 - \left(\dfrac56\right)^4 = \dfrac{671}{1296} \approx 0{,}518$.

   c. $\bar{A}$ aux deux premiers lancers puis $A$ au troisième (le quatrième est quelconque) : $\left(\dfrac56\right)^2 \dfrac16 = \dfrac{25}{216} \approx 0{,}116$.
