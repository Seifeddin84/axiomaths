---
uid: "0000186"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Réduire des sommes vectorielles dans un parallélogramme"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "reduction-vectorielle", "parallelogramme", "ensemble-de-points"]
---

Soit $ABCD$ un parallélogramme de centre $O$. On désigne par $I$ le milieu de $[AB]$. Soit $M$ un point quelconque du plan.

1. Réduire chacune des sommes suivantes :

   a. $\overrightarrow{MA} + \overrightarrow{MB}$ ;

   b. $\overrightarrow{MA} + \overrightarrow{MC}$ ;

   c. $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} + \overrightarrow{MD}$ ;

   d. $\overrightarrow{MA} - \overrightarrow{MB} + \overrightarrow{MC}$.

2. Montrer que le vecteur $2\,\overrightarrow{MA} - \overrightarrow{MB} - \overrightarrow{MC}$ ne dépend pas de $M$ et l'exprimer en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AD}$.

3. Déterminer l'ensemble $E$ des points $M$ du plan tels que $\lVert \overrightarrow{MA} + \overrightarrow{MB} \rVert = \lVert \overrightarrow{MA} + \overrightarrow{MC} \rVert$.

4. Déterminer l'ensemble $F$ des points $M$ du plan tels que $\lVert \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} + \overrightarrow{MD} \rVert = 2\,AC$.

---

## Solution

1. a. $I$ est le barycentre de $(A\,,1)$ et $(B\,,1)$, donc $\overrightarrow{MA} + \overrightarrow{MB} = 2\,\overrightarrow{MI}$.

   b. Les diagonales d'un parallélogramme ont le même milieu $O$ : $O$ est le milieu de $[AC]$, donc $\overrightarrow{MA} + \overrightarrow{MC} = 2\,\overrightarrow{MO}$.

   c. $O$ est aussi le milieu de $[BD]$, donc $\overrightarrow{MB} + \overrightarrow{MD} = 2\,\overrightarrow{MO}$.

   D'où $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} + \overrightarrow{MD} = 4\,\overrightarrow{MO}$.

   d. $-\overrightarrow{MB} + \overrightarrow{MC} = \overrightarrow{BM} + \overrightarrow{MC} = \overrightarrow{BC} = \overrightarrow{AD}$ (car $ABCD$ est un parallélogramme).

   Donc $\overrightarrow{MA} - \overrightarrow{MB} + \overrightarrow{MC} = \overrightarrow{MA} + \overrightarrow{AD} = \overrightarrow{MD}$ : $D$ est le barycentre de $(A\,,1)$, $(B\,,-1)$ et $(C\,,1)$.

2. La somme des coefficients est $2 - 1 - 1 = 0$ : le vecteur est constant. Avec $M = A$ :

   $2\,\overrightarrow{AA} - \overrightarrow{AB} - \overrightarrow{AC} = -\overrightarrow{AB} - (\overrightarrow{AB} + \overrightarrow{AD}) = -2\,\overrightarrow{AB} - \overrightarrow{AD}$.

3. D'après 1.a et 1.b, la condition s'écrit $2MI = 2MO$, soit $MI = MO$.

   $\overrightarrow{IO} = \dfrac12\,\overrightarrow{BC}$ (droite des milieux dans le triangle $ABC$), donc $I \neq O$ et $E$ est la **médiatrice du segment $[IO]$**.

4. D'après 1.c, la condition s'écrit $4MO = 2AC$, soit $MO = \dfrac{AC}{2} = OA$.

   $F$ est le **cercle de centre $O$ passant par $A$** (il passe aussi par $C$).

   *Remarque.* Ce cercle passe par $B$ et $D$ si et seulement si $OB = OA$, c'est-à-dire si les diagonales ont la même longueur : $ABCD$ est alors un rectangle.
