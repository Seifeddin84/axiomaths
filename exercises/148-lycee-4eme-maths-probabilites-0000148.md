---
uid: "0000148"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Probabilités"
source: "Bac 1991 principale, Ex. 2"
title: "Jetons blancs et noirs : tirages avec et sans remise"
country: "Tunisie"
year: 1991
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "tirages-successifs", "arbre-de-probabilites", "loi-binomiale"]
bac: "1991-principale-maths"
---

Un sac contient sept jetons indiscernables au toucher et répartis comme suit :

- quatre jetons blancs numérotés $1$, $2$, $2$, $2$ ;
- trois jetons noirs numérotés $1$, $1$, $2$.

1. On tire successivement et avec remise trois jetons du sac.

   a. Calculer la probabilité d'avoir trois jetons blancs.

   b. Calculer la probabilité pour que, parmi les trois jetons tirés, il y en ait deux seulement qui portent le numéro $1$.

2. On remet tous les jetons dans le sac et on tire de nouveau et successivement trois jetons de la manière suivante :

   - si le jeton tiré porte le numéro $2$, il est remis dans le sac ;
   - si le jeton tiré porte le numéro $1$, il n'est pas remis dans le sac.

   a. Calculer la probabilité d'avoir trois jetons blancs.

   b. Calculer la probabilité pour que deux seulement des trois jetons tirés portent le numéro $1$.

*N.B. : Toutes les probabilités seront calculées à $0{,}01$ près.*

---

## Solution

1. Avec remise, les trois tirages sont indépendants et identiques.

   a. $P(\text{blanc}) = \dfrac47$, donc $P = \left(\dfrac47\right)^3 = \dfrac{64}{343} \approx 0{,}19$.

   b. Trois jetons portent le $1$ : $P(1) = \dfrac37$. Le nombre de « 1 » suit la loi binomiale $\mathcal{B}\left(3, \dfrac37\right)$ :

   $P = \dbinom{3}{2}\left(\dfrac37\right)^2 \dfrac47 = \dfrac{108}{343} \approx 0{,}31$.

2. Le sac change seulement quand on tire un « 1 » : il perd ce jeton.

   a. Parmi les blancs, seul le blanc $1$ (noté $B_1$) n'est pas remis. On distingue selon le tirage où il sort.

   $B_1$ jamais tiré : trois blancs $2$ dans un sac de $7$, $\left(\dfrac37\right)^3 = \dfrac{27}{343}$.

   $B_1$ au 1ᵉʳ tirage : $\dfrac17 \cdot \dfrac36 \cdot \dfrac36 = \dfrac{1}{28}$ ; au 2ᵉ : $\dfrac37 \cdot \dfrac17 \cdot \dfrac36 = \dfrac{3}{98}$ ; au 3ᵉ : $\dfrac37 \cdot \dfrac37 \cdot \dfrac17 = \dfrac{9}{343}$.

   $P = \dfrac{27}{343} + \dfrac{1}{28} + \dfrac{3}{98} + \dfrac{9}{343} = \dfrac{108 + 49 + 42 + 36}{1372} = \dfrac{235}{1372} \approx 0{,}17$.

   b. On regarde seulement les numéros : $3$ jetons « 1 » et $4$ jetons « 2 » au départ. Exactement deux « 1 » : la place du « 2 » peut être $3$ᵉ, $2$ᵉ ou $1$ᵉʳ.

   $(1, 1, 2)$ : $\dfrac37 \cdot \dfrac26 \cdot \dfrac45 = \dfrac{4}{35}$ ; $(1, 2, 1)$ : $\dfrac37 \cdot \dfrac46 \cdot \dfrac26 = \dfrac{2}{21}$ ; $(2, 1, 1)$ : $\dfrac47 \cdot \dfrac37 \cdot \dfrac26 = \dfrac{4}{49}$.

   $P = \dfrac{84 + 70 + 60}{735} = \dfrac{214}{735} \approx 0{,}29$.
