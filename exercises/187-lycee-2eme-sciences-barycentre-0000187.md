---
uid: "0000187"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Coordonnées de barycentres dans un repère"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "coordonnees", "barycentre-partiel", "alignement"]
---

Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On considère les points $A(-1\,,2)$, $B(3\,,0)$ et $C(1\,,4)$.

1. Calculer les coordonnées :

   a. du point $I$ barycentre de $(A\,,1)$ et $(B\,,3)$ ;

   b. du point $J$ barycentre de $(A\,,3)$ et $(C\,,-1)$.

2. Soit $G$ le barycentre de $(A\,,1)$, $(B\,,3)$ et $(C\,,2)$.

   a. Calculer les coordonnées de $G$.

   b. Montrer que $G$ est le barycentre de $(I\,,4)$ et $(C\,,2)$. En déduire que les points $I$, $G$ et $C$ sont alignés et préciser la position de $G$ sur $[IC]$.

3. Soit $K$ le point de coordonnées $(3\,,6)$.

   a. Vérifier que $\overrightarrow{AK} = 2\,\overrightarrow{AC}$.

   b. En déduire que $K$ est le barycentre des points $A$ et $C$ affectés de coefficients que l'on déterminera.

4. Le point $N(1\,,1)$ est-il un barycentre des points $A$ et $B$ ? Si oui, préciser des coefficients.

---

## Solution

On utilise $x_G = \dfrac{\alpha x_A + \beta x_B + \gamma x_C}{\alpha + \beta + \gamma}$, et de même pour l'ordonnée.

1. a. $I\left(\dfrac{-1 + 9}{4}\,,\dfrac{2 + 0}{4}\right) = I\left(2\,,\dfrac12\right)$.

   b. $3 - 1 = 2 \neq 0$ : $J\left(\dfrac{-3 - 1}{2}\,,\dfrac{6 - 4}{2}\right) = J(-2\,,1)$.

2. a. $1 + 3 + 2 = 6$ : $G\left(\dfrac{-1 + 9 + 2}{6}\,,\dfrac{2 + 0 + 8}{6}\right) = G\left(\dfrac53\,,\dfrac53\right)$.

   b. $I$ est le barycentre de $(A\,,1)$ et $(B\,,3)$ et $1 + 3 = 4 \neq 0$ : d'après le barycentre partiel, $G$ est le barycentre de $(I\,,4)$ et $(C\,,2)$.

   Contrôle : $\dfrac{4 \times 2 + 2 \times 1}{6} = \dfrac{10}{6} = \dfrac53$ et $\dfrac{4 \times \frac12 + 2 \times 4}{6} = \dfrac{10}{6} = \dfrac53$.

   Un barycentre de $I$ et $C$ est sur la droite $(IC)$ : $I$, $G$, $C$ sont alignés.

   De plus $\overrightarrow{IG} = \dfrac{2}{6}\,\overrightarrow{IC} = \dfrac13\,\overrightarrow{IC}$ : $G$ est sur $[IC]$, au tiers à partir de $I$ (coefficients de même signe).

3. a. $\overrightarrow{AK}(4\,,4)$ et $\overrightarrow{AC}(2\,,2)$, donc $\overrightarrow{AK} = 2\,\overrightarrow{AC}$.

   b. $\overrightarrow{AK} = t\,\overrightarrow{AC}$ avec $t = 2$ : $K$ est le barycentre de $(A\,,1 - t) = (A\,,-1)$ et $(C\,,2)$.

   Contrôle : $\dfrac{-1 \times (-1) + 2 \times 1}{1} = 3$ et $\dfrac{-1 \times 2 + 2 \times 4}{1} = 6$.

4. $\overrightarrow{AB}(4\,,-2)$ et $\overrightarrow{AN}(2\,,-1)$, donc $\overrightarrow{AN} = \dfrac12\,\overrightarrow{AB}$ : $N$ est le **milieu** de $[AB]$, barycentre de $(A\,,1)$ et $(B\,,1)$ (ou de $(A\,,k)$ et $(B\,,k)$ pour tout $k \neq 0$).
