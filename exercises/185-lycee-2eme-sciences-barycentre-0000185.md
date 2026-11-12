---
uid: "0000185"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Placer des barycentres de deux points"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "deux-points", "construction", "homogeneite"]
---

Soient $A$ et $B$ deux points du plan tels que $AB = 6$ cm.

1. Construire :

   a. le point $G$ barycentre des points pondérés $(A\,,2)$ et $(B\,,1)$ ;

   b. le point $H$ barycentre de $(A\,,3)$ et $(B\,,-1)$ ;

   c. le point $K$ barycentre de $(A\,,-1)$ et $(B\,,3)$.

2. Calculer les distances $AG$, $AH$ et $AK$.

3. Montrer que $G$ est aussi le barycentre de $(A\,,-4)$ et $(B\,,-2)$.

4. Soit $L$ le point du plan tel que $3\,\overrightarrow{LA} = 5\,\overrightarrow{LB}$.

   a. Montrer que $L$ est le barycentre de deux points pondérés que l'on précisera.

   b. Exprimer $\overrightarrow{AL}$ en fonction de $\overrightarrow{AB}$, puis placer $L$.

5. Montrer que $A$ est le barycentre de $(G\,,3)$ et $(B\,,-1)$.

---

## Solution

On utilise : si $\alpha + \beta \neq 0$, le barycentre $G$ de $(A\,,\alpha)$ et $(B\,,\beta)$ vérifie $\overrightarrow{AG} = \dfrac{\beta}{\alpha + \beta}\,\overrightarrow{AB}$.

1. a. $2 + 1 = 3 \neq 0$ et $\overrightarrow{AG} = \dfrac13\,\overrightarrow{AB}$ : $G$ est sur $[AB]$, au tiers à partir de $A$.

   b. $3 - 1 = 2 \neq 0$ et $\overrightarrow{AH} = \dfrac{-1}{2}\,\overrightarrow{AB}$ : $H$ est sur $(AB)$, de l'autre côté de $A$ par rapport à $B$.

   c. $-1 + 3 = 2 \neq 0$ et $\overrightarrow{AK} = \dfrac32\,\overrightarrow{AB}$ : $K$ est sur $(AB)$, au-delà de $B$.

   On retrouve la règle : coefficients de même signe, le barycentre est sur $[AB]$ ; de signes contraires, il est à l'extérieur, du côté du coefficient le plus grand en valeur absolue.

2. $AG = \dfrac13 \times 6 = 2$ cm, $\quad AH = \dfrac12 \times 6 = 3$ cm, $\quad AK = \dfrac32 \times 6 = 9$ cm.

3. $(-4\,,-2) = (-2) \times (2\,,1)$ : on a multiplié les deux coefficients par le même réel non nul $-2$, donc le barycentre ne change pas.

   (Directement : $-4\,\overrightarrow{GA} - 2\,\overrightarrow{GB} = -2\,(2\,\overrightarrow{GA} + \overrightarrow{GB}) = \vec 0$.)

4. a. $3\,\overrightarrow{LA} = 5\,\overrightarrow{LB} \iff 3\,\overrightarrow{LA} - 5\,\overrightarrow{LB} = \vec 0$ et $3 + (-5) = -2 \neq 0$ : $L$ est le barycentre de $(A\,,3)$ et $(B\,,-5)$.

   b. $\overrightarrow{AL} = \dfrac{-5}{-2}\,\overrightarrow{AB} = \dfrac52\,\overrightarrow{AB}$ : $L$ est au-delà de $B$, avec $AL = 15$ cm et $BL = 9$ cm.

5. $3\,\overrightarrow{AG} - \overrightarrow{AB} = 3 \times \dfrac13\,\overrightarrow{AB} - \overrightarrow{AB} = \vec 0$ et $3 + (-1) = 2 \neq 0$.

   Donc $A$ est le barycentre de $(G\,,3)$ et $(B\,,-1)$.
