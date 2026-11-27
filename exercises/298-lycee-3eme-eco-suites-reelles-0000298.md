---
uid: "0000298"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Dépréciation d'une voiture"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["suites", "suite-geometrique", "pourcentages", "modelisation"]
provenance: "own"
dressing: "dépréciation de 12 % par an"
rung: 1
batch: "2026-11-20-suites-3eco-A"
---

Une voiture neuve vaut $15\,000$ dinars et perd $12\,\%$ de sa valeur chaque année. On note $U_n$ sa valeur au bout de $n$ années.

1. Calculer $U_1$ puis montrer que $(U_n)$ est géométrique de raison $0{,}88$.

2. Exprimer $U_n$ en fonction de $n$.

3. Calculer $U_8$ et $U_9$ (arrondis au dixième). À partir de quelle année la voiture vaut-elle moins de $5\,000$ dinars ?

4. Déterminer $\displaystyle\lim_{n\to+\infty}U_n$ et interpréter.

---

## Solution

1. $U_1=15\,000\times(1-0{,}12)=15\,000\times0{,}88=13\,200$ dinars.

   Perdre $12\,\%$ revient à multiplier par $1-0{,}12=0{,}88$. Donc pour tout $n$, $U_{n+1}=0{,}88\,U_n$ : $(U_n)$ est géométrique de raison $q=0{,}88$ et de premier terme $U_0=15\,000$.

2. **Rappel.**

   :::property[Terme général d'une suite géométrique]
   $u_n=u_0\,q^n$.
   :::

   $$\displaystyle \boxed{U_n=15\,000\times0{,}88^n}.$$

3. À la calculatrice :

   $$\displaystyle U_8=15\,000\times0{,}88^8\approx5\,394{,}5\qquad U_9=15\,000\times0{,}88^9\approx4\,747{,}2.$$

   $U_8>5\,000>U_9$ et la suite est décroissante : la voiture vaut moins de $5\,000$ dinars à partir de la $9^{\text{e}}$ année.

4. $0<0{,}88<1$, donc $0{,}88^n\to0$ et $U_n\to15\,000\times0=$ $\boxed{0}$.

   La valeur de la voiture se rapproche de $0$ sans jamais l'atteindre : la dépréciation est de plus en plus lente en dinars (on perd $12\,\%$ d'une valeur de plus en plus petite).

:::intuition
Pourcentage constant chaque année : on multiplie toujours par le même coefficient, c'est une suite géométrique.
:::
