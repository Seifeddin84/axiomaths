---
uid: "0000192"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Quatre droites concourantes dans un parallélogramme"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["barycentre", "barycentre-partiel", "droites-concourantes", "parallelogramme"]
---

Soit $ABCD$ un parallélogramme. On désigne par $K$ et $L$ les milieux respectifs de $[AD]$ et $[BC]$, et par $I$ et $J$ les points du segment $[AB]$ tels que $AI = IJ = JB$.

![Parallélogramme ABCD avec les points K, L, I et J](/exercises/images/192-lycee-2eme-sciences-barycentre-0000192.png)

1. Montrer que $ABLK$ est un parallélogramme. En déduire que les segments $[AL]$ et $[BK]$ ont le même milieu, que l'on note $G$.

2. a. Montrer que $G$ est le barycentre de $(A\,,2)$, $(B\,,1)$ et $(C\,,1)$.

   b. Montrer que $I$ est le barycentre de $(A\,,2)$ et $(B\,,1)$.

   c. En déduire que $G$ appartient à la droite $(CI)$ et préciser la position de $G$ sur $[IC]$.

3. a. En utilisant $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$, montrer que $G$ est aussi le barycentre de $(A\,,1)$, $(B\,,2)$ et $(D\,,1)$.

   b. En déduire que $G$ appartient à la droite $(DJ)$.

4. Conclure.

---

## Solution

1. $\overrightarrow{AK} = \dfrac12\,\overrightarrow{AD}$ et $\overrightarrow{BL} = \dfrac12\,\overrightarrow{BC} = \dfrac12\,\overrightarrow{AD}$ (car $\overrightarrow{BC} = \overrightarrow{AD}$).

   Donc $\overrightarrow{AK} = \overrightarrow{BL}$ : $ABLK$ est un parallélogramme. Ses diagonales $[AL]$ et $[BK]$ ont le même milieu $G$.

2. a. $G$ est le milieu de $[AL]$ : barycentre de $(A\,,1)$ et $(L\,,1)$, donc aussi de $(A\,,2)$ et $(L\,,2)$.

   $L$ est le barycentre de $(B\,,1)$ et $(C\,,1)$, de somme $2$ : d'après le barycentre partiel (lu à l'envers), $G$ est le barycentre de $(A\,,2)$, $(B\,,1)$ et $(C\,,1)$.

   (Vérification : $2\,\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = 2\,\overrightarrow{GA} + 2\,\overrightarrow{GL} = \vec 0$.)

   b. $\overrightarrow{AI} = \dfrac13\,\overrightarrow{AB}$ ; le barycentre de $(A\,,2)$ et $(B\,,1)$ vérifie aussi $\overrightarrow{AI} = \dfrac{1}{3}\,\overrightarrow{AB}$ : c'est $I$.

   c. En regroupant $(A\,,2)$ et $(B\,,1)$ en $(I\,,3)$, $G$ est le barycentre de $(I\,,3)$ et $(C\,,1)$ : $G \in (CI)$ et $\overrightarrow{IG} = \dfrac14\,\overrightarrow{IC}$.

3. a. D'après 2.a, $4\,\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AC}$ (réduction en $M = A$, le terme en $A$ étant nul).

   Avec $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$ : $4\,\overrightarrow{AG} = 2\,\overrightarrow{AB} + \overrightarrow{AD}$.

   C'est exactement la relation $\overrightarrow{AG} = \dfrac{2}{4}\,\overrightarrow{AB} + \dfrac{1}{4}\,\overrightarrow{AD}$ qui caractérise le barycentre de $(A\,,1)$, $(B\,,2)$, $(D\,,1)$.

   b. $\overrightarrow{AJ} = \dfrac23\,\overrightarrow{AB}$, donc $J$ est le barycentre de $(A\,,1)$ et $(B\,,2)$.

   En regroupant, $G$ est le barycentre de $(J\,,3)$ et $(D\,,1)$ : $G \in (DJ)$ (et $\overrightarrow{JG} = \dfrac14\,\overrightarrow{JD}$).

4. $G$ appartient à $(AL)$, à $(BK)$ (question 1), à $(CI)$ (question 2) et à $(DJ)$ (question 3) : **les quatre droites $(AL)$, $(BK)$, $(CI)$ et $(DJ)$ sont concourantes en $G$**.

   *Remarque.* La méthode est celle de l'[exercice n°188](/lycee/2eme/sciences/barycentre#ex-0000188) : on écrit le même point comme barycentre de plusieurs façons, et chaque écriture fournit une droite qui passe par lui.
