---
uid: "0000188"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Barycentre partiel et droites concourantes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "barycentre-partiel", "droites-concourantes", "ensemble-de-points"]
---

Soit $ABC$ un triangle et $G$ le barycentre des points pondérés $(A\,,1)$, $(B\,,2)$ et $(C\,,3)$.

1. a. Construire le point $I$ barycentre de $(B\,,2)$ et $(C\,,3)$.

   b. Montrer que $G$ est le barycentre de $(A\,,1)$ et $(I\,,5)$. Exprimer $\overrightarrow{AG}$ en fonction de $\overrightarrow{AI}$.

2. Soient $J$ le barycentre de $(A\,,1)$ et $(C\,,3)$ et $K$ le barycentre de $(A\,,1)$ et $(B\,,2)$.

   Montrer que les droites $(AI)$, $(BJ)$ et $(CK)$ sont concourantes en $G$.

3. a. Montrer que $\overrightarrow{AG} = \dfrac13\,\overrightarrow{AB} + \dfrac12\,\overrightarrow{AC}$.

   b. En déduire une deuxième construction de $G$.

4. Déterminer l'ensemble des points $M$ du plan tels que :

   a. $\lVert \overrightarrow{MA} + 2\,\overrightarrow{MB} + 3\,\overrightarrow{MC} \rVert = 6$ ;

   b. $\lVert \overrightarrow{MA} + 2\,\overrightarrow{MB} + 3\,\overrightarrow{MC} \rVert = 6\,AM$.

---

## Solution

1. a. $2 + 3 = 5 \neq 0$ et $\overrightarrow{BI} = \dfrac35\,\overrightarrow{BC}$ : $I$ est sur $[BC]$, aux trois cinquièmes à partir de $B$.

   b. $I$ est le barycentre de $(B\,,2)$ et $(C\,,3)$ avec $2 + 3 \neq 0$ : d'après le barycentre partiel, $G$ est le barycentre de $(A\,,1)$ et $(I\,,5)$.

   Donc $\overrightarrow{AG} = \dfrac{5}{6}\,\overrightarrow{AI}$.

2. On regroupe de deux autres façons :

   $J$ est le barycentre de $(A\,,1)$ et $(C\,,3)$, donc $G$ est le barycentre de $(B\,,2)$ et $(J\,,4)$ : $G \in (BJ)$.

   $K$ est le barycentre de $(A\,,1)$ et $(B\,,2)$, donc $G$ est le barycentre de $(C\,,3)$ et $(K\,,3)$ : $G \in (CK)$, et c'est même le milieu de $[CK]$.

   Avec 1.b, $G \in (AI)$ : les trois droites passent par $G$, elles sont concourantes.

3. a. D'après le théorème d'existence pour trois points, $\overrightarrow{AG} = \dfrac{2}{6}\,\overrightarrow{AB} + \dfrac{3}{6}\,\overrightarrow{AC} = \dfrac13\,\overrightarrow{AB} + \dfrac12\,\overrightarrow{AC}$.

   b. On place $P$ tel que $\overrightarrow{AP} = \dfrac13\,\overrightarrow{AB}$ et $Q$ tel que $\overrightarrow{AQ} = \dfrac12\,\overrightarrow{AC}$ (le milieu de $[AC]$) ; $G$ est le quatrième sommet du parallélogramme $APGQ$.

4. Pour tout $M$, $\overrightarrow{MA} + 2\,\overrightarrow{MB} + 3\,\overrightarrow{MC} = 6\,\overrightarrow{MG}$.

   a. La condition devient $6MG = 6$, soit $MG = 1$ : c'est le **cercle de centre $G$ et de rayon $1$**.

   b. La condition devient $6MG = 6MA$, soit $MG = MA$ : c'est la **médiatrice de $[AG]$** ($G \neq A$ car $\overrightarrow{AG} = \frac56\overrightarrow{AI}$ et $I \neq A$).

   *Remarque.* La même idée (un point écrit comme barycentre de trois façons) prouve une concurrence plus cachée dans l'[exercice n°192](/lycee/2eme/sciences/barycentre#ex-0000192). Dans l'[exercice n°195](/lycee/2eme/sciences/barycentre#ex-0000195), on ne connaît pas $G$ à l'avance : il faut le deviner à partir des coefficients de $I$, $J$ et $K$.
