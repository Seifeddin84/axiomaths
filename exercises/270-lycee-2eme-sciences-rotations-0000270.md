---
uid: "0000270"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Rotations"
source: "Axiomaths"
title: "Morley dans le triangle équilatéral : une rotation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["morley", "rotation", "triangle-equilateral", "trisectrices", "tangente"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths"
idea: "morley"
dressing: "triangle-equilateral"
rung: 1
---
Soit $ABC$ un triangle **équilatéral** de côté $1$ et de centre $G$. On trace les deux trisectrices de chacun de ses angles (chacune fait avec les côtés un angle de $20^\circ$ ou $40^\circ$). On note

- $P$ le point d'intersection des trisectrices issues de $B$ et de $C$ les plus proches de $[BC]$,
- $Q$ celui des trisectrices issues de $C$ et de $A$ les plus proches de $[CA]$,
- $R$ celui des trisectrices issues de $A$ et de $B$ les plus proches de $[AB]$.

![Le triangle équilatéral et ses trisectrices](/exercises/images/270-lycee-2eme-sciences-rotations-0000270.png)

1. Calculer les angles $\widehat{PBC}$, $\widehat{PCB}$ et $\widehat{BPC}$. Que dire du triangle $PBC$ ?

2. Soit $r$ la rotation de centre $G$ et d'angle $120^\circ$ qui envoie $A$ sur $B$ (et donc $B$ sur $C$, $C$ sur $A$). Montrer que $r(P)=Q$ et $r(Q)=R$.

3. En déduire que $PQR$ est équilatéral.

4. **Longueur du côté.** Soit $H$ le milieu de $[BC]$.

   a. Montrer que $P$ est sur la droite $(AH)$ et calculer $PH$ en fonction de $\tan 20^\circ$.

   b. Calculer $GH$, puis $GP$. En déduire que $PQ=\dfrac{1-\sqrt3\,\tan20^\circ}{2}$ et donner une valeur approchée à $10^{-3}$ près.

---

## Solution

:::property[Rotation]

Une rotation conserve les distances et les angles, et envoie une droite sur une droite, un segment sur un segment. Si $r$ est une rotation de centre $G$ qui envoie $M$ sur $M'$, alors $\ GM=GM'$.

:::

1. $ABC$ est équilatéral : chaque angle vaut $60^\circ$. Une trisectrice partage l'angle de $60^\circ$ en trois angles de $20^\circ$ : la trisectrice de $B$ la plus proche de $[BC]$ fait $20^\circ$ avec $(BC)$, de même en $C$.

   $$\displaystyle \widehat{PBC}=\widehat{PCB}=20^\circ,\qquad \widehat{BPC}=180^\circ-20^\circ-20^\circ=140^\circ .$$

   Les angles en $B$ et $C$ sont égaux : le triangle $PBC$ est **isocèle** en $P$.

2. La rotation $r$ envoie $B$ sur $C$ et $C$ sur $A$, donc le côté $[BC]$ sur le côté $[CA]$.

   Elle conserve les angles : la trisectrice de $B$ la plus proche de $[BC]$ (qui fait $20^\circ$ avec $(BC)$) a pour image la droite issue de $r(B)=C$ qui fait $20^\circ$ avec $(r(B)r(C))=(CA)$ : c'est la trisectrice de $C$ la plus proche de $[CA]$.

   De même, la trisectrice de $C$ la plus proche de $[BC]$ a pour image la trisectrice de $A$ la plus proche de $[CA]$.

   Le point $P$ est l'intersection des deux premières droites ; son image $r(P)$ est donc l'intersection de leurs images, c'est-à-dire $Q$ :

   $$\displaystyle \boxed{r(P)=Q}$$

   Le même raisonnement (côté $[CA]\to[AB]$) donne $r(Q)=R$.

3. $r$ conserve les distances et $r(P)=Q$, $r(Q)=R$, donc $r(\text{segment }[PQ])=[QR]$ :

   $$\displaystyle PQ=QR .$$

   De même $r(Q)=R$ et $r(R)=P$ (car $r^3=\mathrm{id}$, la rotation de $120^\circ$ appliquée trois fois ramène chaque point à sa place) donnent $QR=RP$.

   $$\displaystyle \boxed{PQ=QR=RP}$$

   Le triangle $PQR$ est équilatéral, de centre $G$ (car $GP=GQ=GR$ aussi).

4. a. Le triangle $PBC$ est isocèle en $P$ : $P$ est sur la médiatrice de $[BC]$, c'est-à-dire sur $(AH)$ (dans un triangle équilatéral, la médiatrice de $[BC]$ passe par $A$).

   Dans le triangle $BHP$ rectangle en $H$, avec $BH=\tfrac12$ et $\widehat{PBH}=20^\circ$ :

   $$\displaystyle \tan20^\circ=\frac{PH}{BH}\quad\text{donc}\quad PH=\frac12\tan20^\circ .$$

   b. $G$ est le centre du triangle équilatéral, sur $(AH)$ avec $GH=\dfrac13AH$. Comme $AH=\dfrac{\sqrt3}2$ (hauteur d'un triangle équilatéral de côté $1$) :

   $$\displaystyle GH=\frac13\cdot\frac{\sqrt3}2=\frac{\sqrt3}6=\frac1{2\sqrt3} .$$

   Le point $P$ est entre $H$ et $G$ (car $PH\approx0{,}182<GH\approx0{,}289$) :

   $$\displaystyle GP=GH-PH=\frac{\sqrt3}6-\frac12\tan20^\circ .$$

   Le triangle $PQR$ est équilatéral de centre $G$ : $GP$ est son rayon circonscrit, donc $PQ=GP\sqrt3$ :

   $$\displaystyle PQ=\sqrt3\Big(\frac{\sqrt3}6-\frac12\tan20^\circ\Big)=\frac12-\frac{\sqrt3}2\tan20^\circ=\boxed{\frac{1-\sqrt3\,\tan20^\circ}2\approx0{,}185}$$

   **Contrôle :** $\tan20^\circ\approx0{,}364$, donc $\sqrt3\tan20^\circ\approx0{,}630$ et $PQ\approx0{,}185$. On retrouvera cette valeur avec une autre méthode à l'[exercice n°276](/lycee/3eme/mathematiques/trigonometrie#ex-0000276).

:::remark[Morley pour tous les triangles]

Pour un triangle quelconque, la rotation ne marche plus (le triangle n'a plus de symétrie), mais le triangle $PQR$ est **toujours** équilatéral : c'est le théorème de Morley, voir l'[exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272).

:::

:::intuition

Le triangle équilatéral a trois rotations qui le laissent inchangé ; elles envoient « une trisectrice-près-d'un-côté » sur « la même trisectrice-près-du-côté-suivant ». Les trois points $P,Q,R$ sont donc des copies les uns des autres.

:::

:::trap

La trisectrice **la plus proche** de $[BC]$ n'est pas celle qui fait $40^\circ$ avec $(BC)$ : c'est celle qui fait $20^\circ$. Prendre l'autre donnerait le point $U$ de la preuve de Naraniengar (exercice [278](/lycee/3eme/mathematiques/angles-orientes#ex-0000278)), pas $P$.

:::

:::remark[Pour aller plus loin]

Le côté du triangle de Morley obtenu ici, $\dfrac{1-\sqrt3\tan20^\circ}2\approx0{,}1848$, est retrouvé par le calcul trigonométrique, pour un triangle quelconque, dans l'[exercice n°275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275).

:::
