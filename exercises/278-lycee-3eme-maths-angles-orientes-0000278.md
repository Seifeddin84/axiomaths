---
uid: "0000278"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Angles Orientés"
source: "Axiomaths"
title: "Morley par la preuve de Naraniengar"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["theoreme-de-morley", "preuve-de-naraniengar", "angles-orientes", "trigonometrie"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths ; preuve synthétique de M. T. Naraniengar (1909)"
idea: "morley"
dressing: "preuve de Naraniengar"
rung: 5
---
Soit $ABC$ un triangle d'angles $\widehat A=3\alpha$, $\widehat B=3\beta$, $\widehat C=3\gamma$ (donc $\alpha+\beta+\gamma=60^\circ$). On note :

- $X$ l'intersection des trisectrices de $B$ et de $C$ **les plus proches de $[BC]$** (c'est le point $P$ du théorème de Morley) ;
- $U$ l'intersection des deux **autres** trisectrices issues de $B$ et de $C$.

On veut montrer par une méthode purement géométrique (Naraniengar, 1909) que le triangle de Morley de $ABC$ est équilatéral. On admet le lemme de l'[exercice n°277](/lycee/3eme/mathematiques/angles-orientes#ex-0000277).

1. Montrer que $X$ est le centre du cercle inscrit dans le triangle $BCU$, puis que $\widehat{BUC}=60^\circ+2\alpha$ et que $(UX)$ est la bissectrice de $\widehat{BUC}$.

2. On place $Y\in[BU]$ et $Z\in[CU]$ tels que $\widehat{YXU}=\widehat{ZXU}=30^\circ$. Montrer que les triangles $XUY$ et $XUZ$ sont isométriques, puis que $XYZ$ est **équilatéral**.

3. Montrer que $\widehat{UYZ}=\widehat{UZY}=60^\circ-\alpha$ et que $\widehat{XYU}=\widehat{XZU}=120^\circ-\alpha$.

4. Soit $Y'$ le symétrique de $X$ par rapport à $(BU)$ et $Z'$ le symétrique de $X$ par rapport à $(CU)$. Montrer que $Y'\in[BA)$ et $Z'\in[CA)$, puis que $Y'Y=YZ=ZZ'$.

5. Montrer que $\widehat{Y'YZ}=\widehat{YZZ'}=180^\circ-2\alpha$.

6. Conclure : montrer que $A$ est sur le cercle de $Y',Y,Z,Z'$, que $(AY)$ et $(AZ)$ trisectent l'angle $\widehat A$, puis que $Y=R$, $Z=Q$, $X=P$ et que le triangle de Morley est équilatéral.

---

## Solution

![Les points X, Y, Z dans le triangle BCU](/exercises/images/278-lycee-3eme-maths-angles-orientes-0000278.png)

:::property[Outils]

- **Bissectrice :** le centre du cercle inscrit est l'intersection des bissectrices.

- **Triangles isométriques :** deux triangles ayant un côté égal compris entre deux angles égaux (ASA) sont isométriques.

- **Symétrie axiale :** elle conserve les longueurs et les angles ; si $(d)$ est la bissectrice de l'angle de deux demi-droites, le symétrique d'un point de l'une par rapport à $(d)$ est sur l'autre, à la même distance du sommet.

:::

1. Dans le triangle $BCU$, les angles en $B$ et $C$ valent $2\beta$ et $2\gamma$ (deux tiers de $\widehat B$ et $\widehat C$). Les droites $(BX)$ et $(CX)$ sont les trisectrices **les plus proches de $[BC]$** : elles font des angles $\beta$ et $\gamma$ avec $(BC)$, donc sont les bissectrices de $\widehat{CBU}=2\beta$ et $\widehat{BCU}=2\gamma$.

   $X$ est l'intersection de deux bissectrices : c'est le centre du cercle inscrit, et $(UX)$ est la troisième bissectrice.

   $$\displaystyle \widehat{BUC}=180^\circ-2\beta-2\gamma=180^\circ-2(60^\circ-\alpha)=\boxed{60^\circ+2\alpha},$$

   et $\widehat{BUX}=\widehat{XUC}=30^\circ+\alpha$.

2. Les triangles $XUY$ et $XUZ$ ont : le côté commun $XU$, l'angle en $X$ égal à $30^\circ$, l'angle en $U$ égal à $30^\circ+\alpha$ (car $Y\in[UB]$, $Z\in[UC]$). Ils sont isométriques (ASA). Donc

   $$\displaystyle XY=XZ,\qquad UY=UZ,\qquad \widehat{YXZ}=30^\circ+30^\circ=60^\circ .$$

   $XYZ$ est isocèle en $X$ avec un angle de $60^\circ$ : il est **équilatéral**, $XY=YZ=ZX$.

3. $UYZ$ est isocèle en $U$ (car $UY=UZ$), d'angle au sommet $60^\circ+2\alpha$. Ses angles à la base valent

   $$\displaystyle \widehat{UYZ}=\widehat{UZY}=\frac{180^\circ-60^\circ-2\alpha}2=\boxed{60^\circ-\alpha}.$$

   Dans le triangle $XYU$ : $\widehat{XYU}=180^\circ-30^\circ-(30^\circ+\alpha)=\boxed{120^\circ-\alpha}$, et de même $\widehat{XZU}=120^\circ-\alpha$.

4. $(BU)$ est la bissectrice de l'angle formé par $(BX)$ et $(BA)$ : en effet $\widehat{XBU}=\beta$ et $\widehat{UBA}=\beta$ (les trois angles en $B$ valent $\beta$ chacun). Le symétrique de $X\in[BX)$ par rapport à $(BU)$ est donc sur la demi-droite $[BA)$, avec $BY'=BX$.

   De même $Z'\in[CA)$, avec $CZ'=CX$.

   Par symétrie ($Y\in(BU)$ est son propre symétrique) : $Y'Y=XY$ et $Z'Z=XZ$. Avec l'équilatéral $XYZ$ :

   $$\displaystyle \boxed{Y'Y=YZ=ZZ'}\quad(=XY=XZ=YZ).$$

5. La symétrie par rapport à $(BU)$ conserve les angles : $\widehat{Y'YU}=\widehat{XYU}=120^\circ-\alpha$. Comme $UYZ$ voit son angle en $Y$ égal à $60^\circ-\alpha$ :

   $$\displaystyle \widehat{Y'YZ}=\widehat{Y'YU}+\widehat{UYZ}=(120^\circ-\alpha)+(60^\circ-\alpha)=\boxed{180^\circ-2\alpha}.$$

   Même calcul en $Z$ : $\widehat{YZZ'}=180^\circ-2\alpha$.

6. Les points $Y',Y,Z,Z'$ vérifient les hypothèses du lemme de l'exercice 277 ($Y'Y=YZ=ZZ'$ et deux angles de $180^\circ-2\alpha$ ; $Y'$ et $Z'$ du même côté de $(YZ)$). De plus $Y'\in[BA)$ et $Z'\in[CA)$ donnent $\widehat{Y'AZ'}=\widehat A=3\alpha$, et $A$ est de l'autre côté de $(Y'Z')$ que $Y$ et $Z$ (c'est la figure).

   ![Naraniengar, fin de la preuve](/exercises/images/278-lycee-3eme-maths-angles-orientes-0000278-2.png)

   Le lemme donne : $A$ est sur le cercle de $Y',Y,Z,Z'$ et

   $$\displaystyle \widehat{Y'AY}=\widehat{YAZ}=\widehat{ZAZ'}=\alpha .$$

   Donc $(AY)$ et $(AZ)$ **trisectent** $\widehat A$ : ce sont les deux trisectrices de $A$.

   Conclusion : $Y$ est sur la trisectrice de $B$ et sur la trisectrice de $A$ les plus proches de $[AB]$ : $Y=R$. De même $Z=Q$. Et $X=P$ par définition. Le triangle de Morley $PQR=XZY$ est équilatéral (question 2).

   $$\displaystyle \boxed{PQR\text{ est équilatéral}}$$

:::remark[Autres preuves]

Cette preuve n'utilise aucun calcul trigonométrique, seulement des angles et des symétries. Pour la même conclusion avec des calculs : [exercice 275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275) ; « à rebours » : [exercice 272](/lycee/2eme/sciences/trigonometrie#ex-0000272).

:::

:::intuition

On remplace $A$ par deux points $Y',Z'$ placés sur ses côtés et on montre qu'avec $Y$ et $Z$ ils forment trois cordes égales d'un cercle : le lemme dit que $A$ voit alors ces trois cordes sous trois angles égaux, c'est-à-dire qu'il voit $Y$ et $Z$ sur ses trisectrices.

:::

:::trap

$U$ n'est **pas** $P$ : $U$ est l'intersection des trisectrices les plus éloignées de $[BC]$. Prendre $P$ à la place de $U$ dans les questions 1 à 3 rendrait faux le calcul de $\widehat{BUC}=60^\circ+2\alpha$ (alors $\widehat{BPC}=120^\circ+\alpha$).

:::

:::remark[Pour aller plus loin]

Le cas du triangle équilatéral se traite très simplement avec une rotation : [exercice n°270](/lycee/2eme/sciences/rotations#ex-0000270).

:::
