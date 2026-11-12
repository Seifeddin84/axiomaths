---
uid: "0000189"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Milieux, symétrique et alignement"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "alignement", "milieu", "reduction-vectorielle"]
---

Soit $ABC$ un triangle. On désigne par $A'$, $B'$ et $C'$ les milieux respectifs des côtés $[BC]$, $[CA]$ et $[AB]$. Soit $Q$ le milieu du segment $[B'C]$ et $P$ le symétrique de $C'$ par rapport à $B$.

1. a. Montrer que $\overrightarrow{AP} = \dfrac32\,\overrightarrow{AB}$. En déduire que $P$ est le barycentre de $(A\,,-1)$ et $(B\,,3)$.

   b. Montrer que $\overrightarrow{AQ} = \dfrac34\,\overrightarrow{AC}$. En déduire que $Q$ est le barycentre de $(A\,,1)$ et $(C\,,3)$.

2. a. Montrer que pour tout point $M$ du plan : $2\,\overrightarrow{MP} = -\overrightarrow{MA} + 3\,\overrightarrow{MB}$ et $4\,\overrightarrow{MQ} = \overrightarrow{MA} + 3\,\overrightarrow{MC}$.

   b. En prenant $M = A'$, montrer que $\overrightarrow{A'P} + 2\,\overrightarrow{A'Q} = \vec 0$.

3. En déduire que les points $A'$, $P$ et $Q$ sont alignés et préciser la position de $A'$ sur le segment $[PQ]$.

---

## Solution

1. a. $B$ est le milieu de $[C'P]$, donc $\overrightarrow{BP} = \overrightarrow{C'B} = \dfrac12\,\overrightarrow{AB}$.

   Donc $\overrightarrow{AP} = \overrightarrow{AB} + \overrightarrow{BP} = \dfrac32\,\overrightarrow{AB}$.

   Avec $t = \dfrac32$, $P$ est le barycentre de $\left(A\,,1 - \dfrac32\right) = \left(A\,,-\dfrac12\right)$ et $\left(B\,,\dfrac32\right)$, donc, en multipliant par $2$, de $(A\,,-1)$ et $(B\,,3)$.

   b. $Q$ est le milieu de $[B'C]$, donc $\overrightarrow{AQ} = \dfrac12\left(\overrightarrow{AB'} + \overrightarrow{AC}\right) = \dfrac12\left(\dfrac12\,\overrightarrow{AC} + \overrightarrow{AC}\right) = \dfrac34\,\overrightarrow{AC}$.

   $Q$ est le barycentre de $\left(A\,,\dfrac14\right)$ et $\left(C\,,\dfrac34\right)$, donc de $(A\,,1)$ et $(C\,,3)$.

2. a. C'est la réduction pour deux points : $-1 + 3 = 2$ et $1 + 3 = 4$.

   b. Avec $M = A'$ :

   $2\,\overrightarrow{A'P} + 4\,\overrightarrow{A'Q} = -\overrightarrow{A'A} + 3\,\overrightarrow{A'B} + \overrightarrow{A'A} + 3\,\overrightarrow{A'C} = 3\left(\overrightarrow{A'B} + \overrightarrow{A'C}\right) = \vec 0$,

   car $A'$ est le milieu de $[BC]$. En divisant par $2$ : $\overrightarrow{A'P} + 2\,\overrightarrow{A'Q} = \vec 0$.

3. $\overrightarrow{A'P} = -2\,\overrightarrow{A'Q}$ : les vecteurs sont colinéaires, donc $A'$, $P$, $Q$ sont alignés.

   L'égalité s'écrit aussi : $A'$ est le barycentre de $(P\,,1)$ et $(Q\,,2)$. Les coefficients sont de même signe, donc $A' \in [PQ]$, et $\overrightarrow{PA'} = \dfrac23\,\overrightarrow{PQ}$ : $A'$ est aux deux tiers de $[PQ]$ à partir de $P$ (deux fois plus près de $Q$ que de $P$).
