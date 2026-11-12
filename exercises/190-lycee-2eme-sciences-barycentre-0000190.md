---
uid: "0000190"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Vecteur constant, droites parallèles et lieu d'un barycentre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "vecteur-constant", "droites-paralleles", "ensemble-de-points"]
---

Soit $ABC$ un triangle. Pour tout point $M$ du plan, on pose $\vec u = \overrightarrow{MA} + 2\,\overrightarrow{MB} - 3\,\overrightarrow{MC}$.

1. Montrer que $\vec u$ ne dépend pas du point $M$ et que $\vec u = \overrightarrow{CA} + 2\,\overrightarrow{CB}$.

2. On désigne par $A'$ le barycentre de $(B\,,2)$ et $(C\,,-3)$, par $B'$ le barycentre de $(A\,,1)$ et $(C\,,-3)$, et par $C'$ le barycentre de $(A\,,1)$ et $(B\,,2)$.

   a. Construire les points $A'$, $B'$ et $C'$.

   b. En choisissant convenablement le point $M$, montrer que $\overrightarrow{AA'} = -\vec u$, $\overrightarrow{BB'} = -\dfrac12\,\vec u$ et $\overrightarrow{CC'} = \dfrac13\,\vec u$.

   c. En déduire que les droites $(AA')$, $(BB')$ et $(CC')$ sont parallèles.

3. Soit $m$ un réel. On considère les points pondérés $(A\,,1)$, $(B\,,m)$ et $(C\,,-m)$.

   a. Justifier que ces points admettent un barycentre $G_m$ pour tout réel $m$.

   b. Montrer que $\overrightarrow{AG_m} = m\,\overrightarrow{CB}$.

   c. En déduire l'ensemble des points $G_m$ lorsque $m$ décrit $\mathbb{R}$.

4. Soit $I$ le milieu de $[BC]$. Déterminer l'ensemble des points $M$ du plan tels que $\lVert \overrightarrow{MA} + 2\,\overrightarrow{MB} - 3\,\overrightarrow{MC} \rVert = \lVert \overrightarrow{MB} + \overrightarrow{MC} \rVert$.

---

## Solution

1. La somme des coefficients est $1 + 2 - 3 = 0$, donc $\vec u$ ne dépend pas de $M$.

   Pour le calculer, on prend $M = C$ : $\vec u = \overrightarrow{CA} + 2\,\overrightarrow{CB} - 3\,\overrightarrow{CC} = \overrightarrow{CA} + 2\,\overrightarrow{CB}$.

2. a. $\overrightarrow{BA'} = \dfrac{-3}{-1}\,\overrightarrow{BC} = 3\,\overrightarrow{BC}$ ; $\quad \overrightarrow{AB'} = \dfrac{-3}{-2}\,\overrightarrow{AC} = \dfrac32\,\overrightarrow{AC}$ ; $\quad \overrightarrow{AC'} = \dfrac23\,\overrightarrow{AB}$.

   b. Avec $M = A$ : $\vec u = 2\,\overrightarrow{AB} - 3\,\overrightarrow{AC} = (2 - 3)\,\overrightarrow{AA'} = -\overrightarrow{AA'}$ (réduction pour $(B\,,2)$, $(C\,,-3)$).

   Avec $M = B$ : $\vec u = \overrightarrow{BA} - 3\,\overrightarrow{BC} = (1 - 3)\,\overrightarrow{BB'} = -2\,\overrightarrow{BB'}$, donc $\overrightarrow{BB'} = -\dfrac12\,\vec u$.

   Avec $M = C$ : $\vec u = \overrightarrow{CA} + 2\,\overrightarrow{CB} = 3\,\overrightarrow{CC'}$, donc $\overrightarrow{CC'} = \dfrac13\,\vec u$.

   c. $\vec u \neq \vec 0$ (sinon $A' = A$, alors $A$ serait sur $(BC)$). Les trois vecteurs $\overrightarrow{AA'}$, $\overrightarrow{BB'}$, $\overrightarrow{CC'}$ sont colinéaires à $\vec u$ : les droites $(AA')$, $(BB')$ et $(CC')$ sont parallèles (de direction $\vec u$).

3. a. $1 + m - m = 1 \neq 0$ pour tout réel $m$ : le barycentre $G_m$ existe toujours.

   b. D'après le théorème d'existence pour trois points (somme $1$) :

   $\overrightarrow{AG_m} = m\,\overrightarrow{AB} - m\,\overrightarrow{AC} = m\,(\overrightarrow{AB} + \overrightarrow{CA}) = m\,\overrightarrow{CB}$.

   c. Quand $m$ décrit $\mathbb{R}$, $G_m$ décrit **la droite passant par $A$ et parallèle à $(BC)$** (tout point $P$ de cette droite s'écrit $\overrightarrow{AP} = m\,\overrightarrow{CB}$ pour un unique $m$).

4. $\overrightarrow{MB} + \overrightarrow{MC} = 2\,\overrightarrow{MI}$ et $\overrightarrow{MA} + 2\,\overrightarrow{MB} - 3\,\overrightarrow{MC} = \vec u$, de norme $\lVert \vec u \rVert = AA'$ d'après 2.b.

   La condition s'écrit $AA' = 2MI$, soit $MI = \dfrac{AA'}{2}$ : c'est le **cercle de centre $I$ et de rayon $\dfrac{AA'}{2}$**.
