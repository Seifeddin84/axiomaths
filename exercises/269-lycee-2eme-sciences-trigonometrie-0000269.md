---
uid: "0000269"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Trigonométrie"
source: "Axiomaths"
title: "Le théorème du papillon : distances et loi du sinus"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["papillon", "cercle", "loi-du-sinus", "distance-point-droite", "corde"]
recommended: true
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "distances-sinus"
rung: 3
---
Soit $\Gamma$ un cercle de centre $O$ et de rayon $R$, et $[PQ]$ une corde de milieu $M$. On pose $a=MP=MQ$. Soient $[AB]$ et $[CD]$ deux cordes passant par $M$, avec $A$ et $C$ du même côté de $(PQ)$ (donc $B$ et $D$ de l'autre côté). On note

$$\displaystyle X=(AD)\cap(PQ),\qquad Y=(BC)\cap(PQ),\qquad x=MX,\quad y=MY .$$

On veut montrer que $M$ est le milieu de $[XY]$ (**théorème du papillon**).

![Distances de X et de Y aux deux cordes](/exercises/images/269-lycee-2eme-sciences-trigonometrie-0000269.png)

On admet le résultat de l'[exercice n°266](/lycee/1ere/toutes-sections/rapports-trigonometriques-d-un-angle-aigu-et-relations-metriques-dans-un-triangle-rectangle#ex-0000266) : si $T$ est un point intérieur à $\Gamma$ et $[UV]$ une corde contenant $T$, alors $TU\cdot TV=R^2-OT^2$.

1. Soit $T$ un point de $(PQ)$ à la distance $t$ de $M$. Montrer que $R^2-OT^2=a^2-t^2$.

2. Soit $\theta$ l'angle aigu entre $(PQ)$ et $(AB)$, et $\theta'$ celui entre $(PQ)$ et $(CD)$. Exprimer, avec $x$, $y$, $\theta$, $\theta'$, les quatre distances
$$\displaystyle d(X,AB),\quad d(X,CD),\quad d(Y,AB),\quad d(Y,CD),$$
puis montrer que
$$\displaystyle \frac{d(X,AB)\,d(X,CD)}{d(Y,AB)\,d(Y,CD)}=\frac{x^2}{y^2}.\tag{1}$$

3. Le point $X$ est sur la corde $[AD]$ et $Y$ sur la corde $[BC]$.

   a. Montrer que $d(X,AB)=AX\cdot\dfrac{BD}{2R}$ et $d(X,CD)=XD\cdot\dfrac{AC}{2R}$.

   b. De même, exprimer $d(Y,AB)$ et $d(Y,CD)$. En déduire
   $$\displaystyle \frac{d(X,AB)\,d(X,CD)}{d(Y,AB)\,d(Y,CD)}=\frac{AX\cdot XD}{YB\cdot YC}.\tag{2}$$

4. Déduire de (1), (2) et de la question 1 que $x=y$.

5. Conclure que $M$ est le milieu de $[XY]$.

---

## Solution

:::property[Trois outils de 2ème]

- **Distance à une droite :** si $T$ est un point d'une droite $d$ passant par $U$, et si $\Delta$ passe par $U$, alors $\ \boxed{d(T,\Delta)=UT\cdot\sin\theta}$ où $\theta$ est l'angle aigu entre $d$ et $\Delta$.

- **Loi du sinus étendue :** pour un triangle $UVW$ inscrit dans un cercle de rayon $R$, $\ \boxed{UV=2R\,\sin\widehat{W}}$.

- **Produit des segments d'une corde :** $\ TU\cdot TV=R^2-OT^2$ (exercice 266).

:::

1. $(OM)$ est la médiatrice de $[PQ]$, donc $(OM)\perp(PQ)$ (si $O=M$, c'est vrai pour toute droite passant par $O$ et le calcul qui suit reste valable).

   Pythagore dans $OMP$ (rectangle en $M$) :

   $$\displaystyle R^2=OM^2+a^2 .$$

   Comme $T\in(PQ)$ est à la distance $t$ de $M$, Pythagore dans $OMT$ (rectangle en $M$) donne $OT^2=OM^2+t^2$. Donc

   $$\displaystyle R^2-OT^2=(OM^2+a^2)-(OM^2+t^2)=a^2-t^2 .$$

   $$\displaystyle \boxed{R^2-OT^2=a^2-t^2}$$

2. Les droites $(AB)$ et $(CD)$ passent toutes les deux par $M$, et $X$, $Y$ sont des points de $(PQ)$, qui passe aussi par $M$. D'après le rappel (avec $U=M$) :

   $$\displaystyle d(X,AB)=x\sin\theta,\quad d(Y,AB)=y\sin\theta,\quad d(X,CD)=x\sin\theta',\quad d(Y,CD)=y\sin\theta' .$$

   Dans le quotient, $\sin\theta$ et $\sin\theta'$ se simplifient :

   $$\displaystyle \frac{d(X,AB)\,d(X,CD)}{d(Y,AB)\,d(Y,CD)}=\frac{x\sin\theta\cdot x\sin\theta'}{y\sin\theta\cdot y\sin\theta'}=\boxed{\frac{x^2}{y^2}}\tag{1}$$

3. a. $X$ est sur $(AD)$ : la distance de $X$ à $(AB)$ est $AX\sin\widehat{DAB}$ (angle aigu entre $(AD)$ et $(AB)$ en $A$ ; son sinus est le même que celui de son supplémentaire).

   Le triangle $ABD$ est inscrit dans $\Gamma$ : $BD=2R\sin\widehat{DAB}$, donc $\sin\widehat{DAB}=\dfrac{BD}{2R}$ et

   $$\displaystyle d(X,AB)=AX\cdot\frac{BD}{2R} .$$

   De même, $X$ est sur $(DA)$ et $(DC)$ passe par $D$ : $d(X,CD)=XD\sin\widehat{ADC}$, et le triangle $ADC$ est inscrit dans $\Gamma$ : $AC=2R\sin\widehat{ADC}$. Donc

   $$\displaystyle d(X,CD)=XD\cdot\frac{AC}{2R} .$$

   b. $Y$ est sur $(BC)$ : $d(Y,AB)=YB\sin\widehat{CBA}=YB\cdot\dfrac{AC}{2R}$ (triangle $ABC$ inscrit), et $d(Y,CD)=YC\sin\widehat{BCD}=YC\cdot\dfrac{BD}{2R}$ (triangle $BCD$ inscrit).

   On forme le quotient : $AC$, $BD$ et $2R$ se simplifient.

   $$\displaystyle \frac{d(X,AB)\,d(X,CD)}{d(Y,AB)\,d(Y,CD)}=\frac{AX\cdot BD\cdot XD\cdot AC}{YB\cdot AC\cdot YC\cdot BD}=\boxed{\frac{AX\cdot XD}{YB\cdot YC}}\tag{2}$$

4. $X$ est un point de la corde $[AD]$ et $X\in(PQ)$ est à la distance $x$ de $M$ : d'après le rappel et la question 1,

   $$\displaystyle AX\cdot XD=R^2-OX^2=a^2-x^2 ,\qquad YB\cdot YC=a^2-y^2 .$$

   Les relations (1) et (2) donnent alors

   $$\displaystyle \frac{x^2}{y^2}=\frac{a^2-x^2}{a^2-y^2} .$$

   On multiplie en croix :

   $$\displaystyle x^2(a^2-y^2)=y^2(a^2-x^2)\iff a^2x^2-x^2y^2=a^2y^2-x^2y^2\iff a^2x^2=a^2y^2 .$$

   Comme $a\neq0$, $x^2=y^2$, et comme $x,y\ge0$ :

   $$\displaystyle \boxed{x=y}$$

5. $X$ et $Y$ sont deux points de $(PQ)$ à la même distance de $M$ : ou bien $X=Y$, ou bien ils sont symétriques par rapport à $M$.

   Or $X\neq Y$ : les cordes $[AB]$ et $[CD]$ se coupent en $M$, donc leurs extrémités se suivent dans l'ordre $A,C,B,D$ sur le cercle. Les cordes $[AD]$ et $[BC]$ ont des extrémités qui ne sont pas entrelacées : elles ne se coupent pas, et $X\in[AD]$, $Y\in[BC]$ sont distincts.

   Donc $X$ et $Y$ sont symétriques par rapport à $M$ :

   $$\displaystyle \boxed{M\text{ est le milieu de }[XY]}$$

:::method[Calculer une quantité de deux façons]

Pour montrer que deux longueurs sont égales, on calcule **un même quotient** de deux façons (une fois depuis $M$, une fois depuis le cercle), puis on identifie. Ici, le lemme de l'exercice 266 relie les deux calculs.

:::

:::remark[D'autres preuves]

Le papillon admet d'autres démonstrations, avec les outils de chaque niveau : [exercice 264](/college/7eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%AD%D9%88%D8%B1%D9%8A#ex-0000264) et [exercice 265](/college/8eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A#ex-0000265) (cas symétriques), [exercice 268](/lycee/2eme/sciences/geometrie-analytique#ex-0000268) (calcul numérique), [exercice 273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273) (coordonnées polaires), [exercice 281](/lycee/4eme/mathematiques/coniques#ex-0000281) (coniques) et [exercice 283](/lycee/4eme/mathematiques/coniques#ex-0000283) (faisceau de coniques).

:::

:::intuition

Les produits de distances ont deux écritures : l'une ne voit que les droites passant par $M$ ($x^2/y^2$), l'autre ne voit que le cercle ($AX\cdot XD$ sur $YB\cdot YC$). Le théorème est le fait que les deux se rejoignent.

:::

:::trap

La loi du sinus étendue donne $UV=2R\sin\widehat{W}$ avec $\widehat{W}$ l'angle **opposé** au côté $[UV]$. Ici $\sin\widehat{DAB}=BD/2R$ (le côté opposé à $A$ dans $ABD$ est $[BD]$), pas $AD/2R$.

:::
