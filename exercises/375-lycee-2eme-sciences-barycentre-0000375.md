---
uid: "0000375"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Réduire des sommes vectorielles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "sommes-vectorielles", "centre-de-gravite", "reduction"]
provenance: "own"
dressing: "réduire des sommes vectorielles"
rung: 1
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $ABC$ un triangle, $I$ le milieu de $[BC]$ et $G$ le centre de gravité du triangle $ABC$.

1. Montrer que, pour tout point $M$ du plan : $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.

2. Montrer que, pour tout point $M$ du plan : $2\overrightarrow{MA}-\overrightarrow{MB}-\overrightarrow{MC}=2\overrightarrow{IA}$.

3. Déterminer et construire l'ensemble $\Gamma$ des points $M$ tels que $\bigl\|\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}\bigr\|=\bigl\|2\overrightarrow{MA}-\overrightarrow{MB}-\overrightarrow{MC}\bigr\|$.

4. Déterminer l'ensemble $\Delta$ des points $M$ tels que les vecteurs $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}$ et $2\overrightarrow{MA}-\overrightarrow{MB}-\overrightarrow{MC}$ soient colinéaires.

---

## Solution

![Triangle ABC, I milieu de [BC], centre de gravité G, cercle de centre G passant par A et médiane (AI).](/exercises/images/375-lycee-2eme-sciences-barycentre-0000375.png)

1.
   :::property[Centre de gravité]
   Le centre de gravité $G$ du triangle $ABC$ est le barycentre de $(A,1)$, $(B,1)$, $(C,1)$ : $\boxed{\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0}$.
   :::

   Avec Chasles, $\overrightarrow{MA}=\overrightarrow{MG}+\overrightarrow{GA}$, et de même pour $B$ et $C$ :

   $$\displaystyle \overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}+\underbrace{\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}}_{=\vec0}=3\overrightarrow{MG}$$

2. La somme des coefficients est $2-1-1=0$ : il n'y a pas de barycentre, on regroupe autrement.

   $$\displaystyle 2\overrightarrow{MA}-\overrightarrow{MB}-\overrightarrow{MC}=\left(\overrightarrow{MA}-\overrightarrow{MB}\right)+\left(\overrightarrow{MA}-\overrightarrow{MC}\right)=\overrightarrow{BA}+\overrightarrow{CA}$$

   :::property[Milieu]
   Si $I$ est le milieu de $[BC]$, alors pour tout point $N$ : $\boxed{\overrightarrow{NB}+\overrightarrow{NC}=2\overrightarrow{NI}}$.
   :::

   Avec $N=A$ : $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AI}$, donc $\overrightarrow{BA}+\overrightarrow{CA}=-2\overrightarrow{AI}=2\overrightarrow{IA}$ :

   $$\displaystyle 2\overrightarrow{MA}-\overrightarrow{MB}-\overrightarrow{MC}=2\overrightarrow{IA}\qquad\text{(vecteur qui ne dépend pas de }M\text{)}$$

3. D'après 1) et 2), la condition s'écrit

   $$\displaystyle 3MG=2IA\iff MG=\dfrac23\,IA$$

   :::property[Centre de gravité sur la médiane]
   $G$ est situé aux deux tiers de la médiane en partant du sommet : $\boxed{AG=\dfrac23\,AI}$.
   :::

   Donc $MG=AG$ : $\Gamma$ est le **cercle de centre $G$ passant par $A$**.

4. $3\overrightarrow{MG}$ et $2\overrightarrow{IA}$ sont colinéaires si et seulement si $\overrightarrow{MG}$ et $\overrightarrow{IA}$ le sont, c'est-à-dire si $M=G$ ou si la droite $(MG)$ est parallèle à $(IA)$.

   Or $G$ est sur la droite $(AI)$ : la parallèle à $(IA)$ passant par $G$ est $(AI)$ elle-même.

   **Conclusion :** $\Delta$ est la médiane $(AI)$.

:::trap
Quand la somme des coefficients est nulle, on ne cherche pas de barycentre : la somme vectorielle est un vecteur constant.
:::
