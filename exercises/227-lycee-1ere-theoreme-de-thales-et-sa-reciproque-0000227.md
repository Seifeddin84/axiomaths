---
uid: "0000227"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Une cévienne et une médiane"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "mediane", "milieux", "droites-paralleles"]
provenance: own
dressing: "céviennes et médiane dans un triangle"
rung: 3
---

Soit $ABC$ un triangle, $M$ le milieu de $[BC]$, $P\in[AB]$ et $E\in[AC]$ tels que $AP=\dfrac13AB$ et $AE=\dfrac13AC$. La droite $(CP)$ coupe $(AM)$ en $Q$.

![Figure de l'énoncé](/exercises/images/227-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000227.png)

1. La parallèle à $(CP)$ passant par $M$ coupe $(AB)$ en $R$. Montrer que $R$ est le milieu de $[BP]$.

2. En déduire que $AR=\dfrac23AB$, puis que $Q$ est le milieu de $[AM]$ et que $CQ=3\,QP$.

3. En échangeant les rôles de $B$ et de $C$, montrer que $(BE)$ passe par $Q$. Que peut-on dire des droites $(AM)$, $(BE)$ et $(CP)$ ?

4. Plus généralement, on prend $P$ tel que $AP=\dfrac1n\,AB$ ($n\ge2$ entier). Montrer que $\dfrac{AQ}{AM}=\dfrac2{n+1}$. Que retrouve-t-on pour $n=2$ ?

---

## Solution

> **Droite des milieux et sa réciproque.** Dans un triangle $ABC$, si $I$ est le milieu de $[AB]$ et si la parallèle à $(BC)$ passant par $I$ coupe $(AC)$ en $J$, alors **$J$ est le milieu de $[AC]$**, et $IJ=\dfrac{BC}2$.

> **Thalès.** Si $(PQ)\parallel(RM)$ avec $P\in(AR)$ et $Q\in(AM)$, on part du sommet $A$ : $\boxed{\dfrac{AP}{AR}=\dfrac{AQ}{AM}=\dfrac{PQ}{RM}}$.

1. Dans le triangle $BCP$, on a $M\in[BC]$, $R\in[BP]$ et $(MR)\parallel(CP)$. Thalès de sommet $B$ :

   $$\displaystyle \dfrac{BM}{BC}=\dfrac{BR}{BP}=\dfrac{MR}{CP}$$

   Or $M$ est le milieu de $[BC]$ : $\dfrac{BM}{BC}=\dfrac12$. Donc $\dfrac{BR}{BP}=\dfrac12$ : $R$ est le milieu de $[BP]$, et $MR=\dfrac12\,CP$.

2. On sait que $AP=\dfrac13AB$, donc $PB=AB-AP=\dfrac23AB$.

   $R$ est le milieu de $[PB]$ : $PR=\dfrac12\,PB=\dfrac13AB$.

   $$\displaystyle AR=AP+PR=\dfrac13AB+\dfrac13AB=\boxed{\dfrac23AB}$$

   Dans le triangle $ARM$, on a $P\in[AR]$, $Q\in[AM]$ et $(PQ)=(CP)\parallel(RM)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AP}{AR}=\dfrac{AQ}{AM}=\dfrac{PQ}{RM}$$

   $$\displaystyle \dfrac{AQ}{AM}=\dfrac{AP}{AR}=\dfrac{1/3}{2/3}=\dfrac12$$

   Donc $Q$ est le milieu de $[AM]$. Avec la même égalité :

   $$\displaystyle \dfrac{PQ}{RM}=\dfrac{AP}{AR}=\dfrac12\implies PQ=\dfrac12\,RM=\dfrac12\times\dfrac12\,CP=\dfrac14\,CP$$

   $$\displaystyle CQ=CP-PQ=\dfrac34\,CP=3\times\dfrac14\,CP=\boxed{3\,PQ}$$

3. Le raisonnement n'utilise pas la position de $B$ ou de $C$. On échange leurs rôles : $E$ à la place de $P$ et $B$ à la place de $C$.

   La droite $(BE)$ coupe donc $(AM)$ au milieu de $[AM]$, c'est-à-dire en $Q$.

   Les trois droites $(AM)$, $(BE)$ et $(CP)$ passent par $Q$ : elles sont **concourantes** en $Q$, milieu de $[AM]$.

4. Avec $AP=\dfrac1n\,AB$ :

   $$\displaystyle PB=AB-AP=\dfrac{n-1}n\,AB\qquad PR=\dfrac12\,PB=\dfrac{n-1}{2n}\,AB$$

   $$\displaystyle AR=AP+PR=\dfrac1n\,AB+\dfrac{n-1}{2n}\,AB=\dfrac{2+n-1}{2n}\,AB=\dfrac{n+1}{2n}\,AB$$

   Thalès de sommet $A$ dans $ARM$ :

   $$\displaystyle \dfrac{AQ}{AM}=\dfrac{AP}{AR}=\dfrac{1/n}{(n+1)/(2n)}=\dfrac1n\times\dfrac{2n}{n+1}=\boxed{\dfrac2{n+1}}$$

   **Pour $n=2$ :** $\dfrac{AQ}{AM}=\dfrac23$. Comme $AP=\dfrac12AB$, $P$ est le milieu de $[AB]$ : $(CP)$ est une médiane, et $Q$ est le **centre de gravité** (aux deux tiers de la médiane $[AM]$).

**Idée :** la parallèle menée par le milieu $M$ fabrique un autre milieu ($R$), puis on applique Thalès.    **Piège :** oublier de justifier $(PQ)\parallel(RM)$ avant d'écrire les rapports.
