---
uid: "0000355"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Trapèze, diagonales et droites parallèles"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Facile"
points: null
tags: ["angles", "trapeze", "diagonales", "droites-paralleles"]
provenance: adapted
adapted_from: "Série Angles (Ibn Elbaitar, 2015-2016), exercice 1 : la question 2.b d'origine (mesure de MIA) n'est pas déterminée par les données ; remplacée par le calcul de EAI. Les mesures de la figure sont ajoutées à l'énoncé."
dressing: "angles alternes-internes dans un trapèze"
rung: 1
---

$AMIE$ est un trapèze de bases $[AM]$ et $[IE]$. Ses diagonales $[AI]$ et $[EM]$ se coupent en $S$.

On donne $\widehat{AME}=28°$, $\widehat{AIE}=26°$, $\widehat{AEI}=71°$ et $\widehat{AEB}=83°$.

![Trapèze AMIE, diagonales [AI] et [EM] se coupant en S, point B tel que AEB = 83°](/exercises/images/355-lycee-1ere-angles-0000355.png)

1. a. Déterminer la mesure de l'angle $\widehat{MEI}$.

   b. En déduire la mesure de l'angle $\widehat{ISE}$.

2. a. Déterminer la mesure de l'angle $\widehat{MAI}$.

   b. Calculer la mesure de l'angle $\widehat{MAE}$, puis en déduire celle de l'angle $\widehat{EAI}$.

3. Le triangle $IAE$ est-il rectangle en $A$ ? Justifier la réponse.

4. Les droites $(IA)$ et $(EB)$ sont-elles parallèles ? Justifier la réponse.

---

## Solution

:::property[Somme des angles d'un triangle]
Dans un triangle, la somme des trois angles vaut $180°$.

$$\boxed{\widehat{A}+\widehat{B}+\widehat{C}=180°}$$
:::

:::property[Parallèles et angles]
Deux droites coupées par une sécante :

- si elles sont **parallèles**, les angles **alternes-internes** sont **égaux** et les angles **co-internes** (situés du même côté de la sécante, entre les deux droites) sont **supplémentaires** ;

- réciproquement, si les angles alternes-internes sont égaux, les droites sont **parallèles**.
:::

1. a. Les bases $[AM]$ et $[IE]$ sont parallèles. Les droites $(AM)$ et $(IE)$ sont coupées par la sécante $(EM)$ : les angles $\widehat{EMA}$ et $\widehat{MEI}$ sont **alternes-internes**.

   $$\boxed{\widehat{MEI}=\widehat{AME}=28°}$$

   b. $S$ est sur $[EM]$ et sur $[AI]$, donc $\widehat{SEI}=\widehat{MEI}=28°$ et $\widehat{SIE}=\widehat{AIE}=26°$.

   Dans le triangle $SEI$ :

   $$\displaystyle \widehat{ISE}=180°-28°-26°$$

   $$\boxed{\widehat{ISE}=126°}$$

2. a. Les droites $(AM)$ et $(IE)$ sont parallèles, coupées par la sécante $(AI)$ : les angles $\widehat{MAI}$ et $\widehat{AIE}$ sont alternes-internes.

   $$\boxed{\widehat{MAI}=\widehat{AIE}=26°}$$

   b. Les droites $(AM)$ et $(EI)$ sont parallèles, coupées par la sécante $(AE)$ : les angles $\widehat{MAE}$ et $\widehat{AEI}$ sont **co-internes**, donc supplémentaires.

   $$\displaystyle \widehat{MAE}=180°-\widehat{AEI}=180°-71°$$

   $$\boxed{\widehat{MAE}=109°}$$

   La diagonale $[AI]$ partage l'angle $\widehat{MAE}$ en deux :

   $$\displaystyle \widehat{EAI}=\widehat{MAE}-\widehat{MAI}=109°-26°$$

   $$\boxed{\widehat{EAI}=83°}$$

   Contrôle par le triangle $AEI$ : $180°-71°-26°=83°$.

3. Dans le triangle $IAE$, on a $\widehat{IAE}=83°$.

   Comme $83°\neq90°$, **le triangle $IAE$ n'est pas rectangle en $A$**.

4. Les droites $(IA)$ et $(EB)$ sont coupées par la sécante $(EA)$. Les points $B$ et $I$ sont de part et d'autre de $(EA)$, donc $\widehat{AEB}$ et $\widehat{EAI}$ sont **alternes-internes**.

   $$\widehat{AEB}=83°=\widehat{EAI}$$

   Deux angles alternes-internes égaux : **les droites $(IA)$ et $(EB)$ sont parallèles.**

:::intuition
Les parallèles $(AM)$ et $(IE)$ « transportent » les angles de la figure : $28°$ en $M$ se retrouve en $E$, $26°$ en $I$ se retrouve en $A$. Il suffit ensuite de chasser les angles dans les triangles.
:::

:::trap
Ne pas confondre : angles alternes-internes (égaux) et angles co-internes (supplémentaires). Pour $\widehat{MAE}$ et $\widehat{AEI}$, qui sont du même côté de $(AE)$, on calcule $180°-71°$, on ne les égale pas.
:::
