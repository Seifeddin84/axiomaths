---
uid: "0000195"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Manuel de 2ème Sciences, Tome 1 — Barycentre, Ex. 13"
title: "Trois droites concourantes : barycentres sur les côtés"
country: "Tunisie"
year: null
professor: null
difficulty: "Moyen"
points: null
tags: ["barycentre", "barycentre-partiel", "droites-concourantes", "triangle"]
---

Soit $ABC$ un triangle. On désigne par $I$ le barycentre de $(B\,,1)$ et $(C\,,2)$, par $J$ le barycentre de $(A\,,3)$ et $(C\,,2)$ et par $K$ le barycentre de $(A\,,3)$ et $(B\,,1)$.

Montrer que les droites $(AI)$, $(BJ)$ et $(CK)$ sont concourantes.

---

## Solution

Les coefficients de $I$, $J$ et $K$ sont compatibles : $A$ porte $3$, $B$ porte $1$, $C$ porte $2$. On pose donc $G$ le barycentre de $(A\,,3)$, $(B\,,1)$ et $(C\,,2)$ (il existe car $3 + 1 + 2 = 6 \neq 0$) et on montre que $G$ est sur chacune des trois droites.

**$G \in (AI)$.** $I$ est le barycentre de $(B\,,1)$ et $(C\,,2)$ avec $1 + 2 \neq 0$. Par barycentre partiel, $G$ est le barycentre de $(A\,,3)$ et $(I\,,3)$ : c'est le milieu de $[AI]$.

**$G \in (BJ)$.** $J$ est le barycentre de $(A\,,3)$ et $(C\,,2)$ avec $3 + 2 \neq 0$. Donc $G$ est le barycentre de $(B\,,1)$ et $(J\,,5)$, soit $\overrightarrow{BG} = \dfrac56\,\overrightarrow{BJ}$.

**$G \in (CK)$.** $K$ est le barycentre de $(A\,,3)$ et $(B\,,1)$ avec $3 + 1 \neq 0$. Donc $G$ est le barycentre de $(K\,,4)$ et $(C\,,2)$, soit $\overrightarrow{CG} = \dfrac23\,\overrightarrow{CK}$.

Les droites $(AI)$, $(BJ)$ et $(CK)$ passent toutes par $G$ : elles sont concourantes en $G$.

*Remarque.* Tout repose sur la compatibilité des coefficients : $B$ porte le coefficient $1$ dans $I$ comme dans $K$. Si l'on prenait pour $K$ le barycentre de $(A\,,3)$ et $(B\,,4)$, les trois droites ne seraient plus concourantes (figure b).

En effet, $(AI)$ et $(BJ)$ sont distinctes ($A \notin (BJ)$) et ne se coupent qu'en $G$. Si $(CK)$ passait par $G$, la droite $(CG)$ couperait $(AB)$ en $K$. Or d'après ce qui précède, $(CG)$ coupe $(AB)$ au barycentre de $(A\,,3)$ et $(B\,,1)$, point qui vérifie $\overrightarrow{AK} = \dfrac14\,\overrightarrow{AB}$, alors que le barycentre de $(A\,,3)$ et $(B\,,4)$ vérifie $\overrightarrow{AK} = \dfrac47\,\overrightarrow{AB}$.

![Les trois droites (AI), (BJ), (CK) : concourantes en G pour K barycentre de (A,3) et (B,1), non concourantes pour (A,3) et (B,4)](/exercises/images/195-lycee-2eme-sciences-barycentre-0000195.png)

*Remarque.* Dans l'[exercice n°188](/lycee/2eme/sciences/barycentre#ex-0000188), le point $G$ est donné d'avance. Ici il faut le deviner à partir des coefficients de $I$, $J$ et $K$.
