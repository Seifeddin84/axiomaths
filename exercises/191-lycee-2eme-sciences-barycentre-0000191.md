---
uid: "0000191"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Ensembles de points dans un rectangle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "ensemble-de-points", "mediatrice", "cercle", "reduction-vectorielle"]
---

Soit $ABCD$ un rectangle tel que $AB = 6$ et $AD = 3$. On désigne par $G$ le barycentre de $(A\,,2)$ et $(B\,,1)$ et par $G'$ le barycentre de $(C\,,4)$ et $(D\,,-1)$.

1. Construire les points $G$ et $G'$.

2. Montrer que pour tout point $M$ du plan : $2\,\overrightarrow{MA} + \overrightarrow{MB} = 3\,\overrightarrow{MG}$ et $4\,\overrightarrow{MC} - \overrightarrow{MD} = 3\,\overrightarrow{MG'}$.

3. Déterminer et construire l'ensemble $E_1$ des points $M$ tels que $\lVert 2\,\overrightarrow{MA} + \overrightarrow{MB} \rVert = \lVert 4\,\overrightarrow{MC} - \overrightarrow{MD} \rVert$.

4. a. Déterminer l'ensemble $E_2$ des points $M$ tels que $\lVert 2\,\overrightarrow{MA} + \overrightarrow{MB} \rVert = 9$.

   b. Montrer que $E_2$ est tangent à la droite $(DC)$ et préciser le point de contact.

5. Déterminer l'ensemble $E_3$ des points $M$ tels que $\lVert 2\,\overrightarrow{MA} + \overrightarrow{MB} \rVert = \lVert \overrightarrow{MA} - \overrightarrow{MB} \rVert$. Vérifier que $A \in E_3$.

6. On munit le plan du repère orthonormé $(A, \vec i, \vec j)$ avec $\vec i = \dfrac16\,\overrightarrow{AB}$ et $\vec j = \dfrac13\,\overrightarrow{AD}$.

   a. Donner les coordonnées de $G$ et de $G'$.

   b. Montrer qu'une équation de $E_1$ est $4x + 2y - 23 = 0$.

---

## Solution

1. $\overrightarrow{AG} = \dfrac13\,\overrightarrow{AB}$ : $G \in [AB]$ avec $AG = 2$.

   $4 - 1 = 3 \neq 0$ et $\overrightarrow{CG'} = \dfrac{-1}{3}\,\overrightarrow{CD} = \dfrac13\,\overrightarrow{DC}$ : $G'$ est sur la droite $(DC)$, au-delà de $C$, avec $CG' = 2$.

2. C'est la réduction pour deux points : $2 + 1 = 3$ et $4 - 1 = 3$.

3. La condition s'écrit $3MG = 3MG'$, soit $MG = MG'$ : $E_1$ est la **médiatrice de $[GG']$**.

4. a. La condition s'écrit $3MG = 9$, soit $MG = 3$ : $E_2$ est le **cercle de centre $G$ et de rayon $3$**.

   b. $G$ est sur $[AB]$ et la droite $(DC)$ est parallèle à $(AB)$ à la distance $AD = 3$ : la distance de $G$ à $(DC)$ est $3$, égale au rayon.

   Donc $E_2$ est tangent à $(DC)$, au point $H$ projeté orthogonal de $G$ sur $(DC)$, c'est-à-dire le point de $[DC]$ tel que $DH = 2$.

5. $\overrightarrow{MA} - \overrightarrow{MB} = \overrightarrow{BA}$ (somme des coefficients nulle), de norme $6$.

   La condition s'écrit $3MG = 6$, soit $MG = 2$ : $E_3$ est le **cercle de centre $G$ et de rayon $2$**. Comme $AG = 2$, $A \in E_3$.

6. a. $A(0\,,0)$, $B(6\,,0)$, $C(6\,,3)$, $D(0\,,3)$.

   $G\left(\dfrac{2 \times 0 + 6}{3}\,,0\right) = G(2\,,0)$ et $G'\left(\dfrac{24 - 0}{3}\,,\dfrac{12 - 3}{3}\right) = G'(8\,,3)$.

   b. $M(x\,,y) \in E_1 \iff MG^2 = MG'^2 \iff (x - 2)^2 + y^2 = (x - 8)^2 + (y - 3)^2$

   $\iff -4x + 4 = -16x + 64 - 6y + 9 \iff 12x + 6y - 69 = 0 \iff 4x + 2y - 23 = 0$.

   (Contrôle : le milieu $\left(5\,,\frac32\right)$ de $[GG']$ vérifie $20 + 3 - 23 = 0$.)
