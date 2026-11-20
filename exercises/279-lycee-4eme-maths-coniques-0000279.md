---
uid: "0000279"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Le papillon d'une parabole, des chiffres"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["coniques", "parabole", "papillon", "geometrie-analytique"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "numerique-parabole"
rung: 2
---
Le plan est muni d'un repère orthonormé $(O\,;\vec\imath,\vec\jmath)$. On considère la parabole $\mathcal P$ d'équation $x^2=4(y+1)$ et les points

$$\displaystyle P(-2,0),\quad Q(2,0),\quad M(0,0),\quad A(-4,3),\quad B\Big(1,-\tfrac34\Big),\quad C\Big(3,\tfrac54\Big),\quad D\Big(-\tfrac43,-\tfrac59\Big).$$

![Le papillon d'une parabole](/exercises/images/279-lycee-4eme-maths-coniques-0000279.png)

1. Donner le sommet $S$, le paramètre $p$ (avec $x^2=2p(y-y_S)$), le foyer $F$ et la directrice de $\mathcal P$.

2. a. Vérifier que $P,Q,A,B,C,D$ sont sur $\mathcal P$ et que $M$ est le milieu de $[PQ]$.

   b. Montrer que $A,M,B$ sont alignés, ainsi que $C,M,D$. Que peut-on dire de la position de $M$ sur $[AB]$ et sur $[CD]$ ?

3. a. Déterminer les coordonnées du point $X=(AD)\cap(PQ)$.

   b. Déterminer les coordonnées du point $Y=(BC)\cap(PQ)$.

4. Que remarque-t-on pour $M$, $X$, $Y$ ?

---

## Solution

:::property[Parabole d'équation réduite]

La parabole de sommet $S(x_S,y_S)$ et d'axe vertical a pour équation $\ \boxed{(x-x_S)^2=2p\,(y-y_S)}$ ; son foyer est $F\big(x_S,\,y_S+\tfrac p2\big)$ et sa directrice la droite $y=y_S-\tfrac p2$.

:::

1. $x^2=4(y+1)=4(y-(-1))$. On identifie : $S(0,-1)$ et $2p=4$, donc $p=2$.

   Foyer : $F\big(0,-1+\tfrac22\big)=\boxed{F(0,0)}$. Directrice : $y=-1-1=\boxed{-2}$.

   (Le foyer est l'origine du repère, qui est aussi le point $M$ : c'est une coïncidence de cet énoncé.)

2. a. On vérifie $x^2=4(y+1)$ :

   - $P$ : $4=4(0+1)$ ✓ ; $Q$ : $4=4(0+1)$ ✓ ;

   - $A$ : $16=4(3+1)$ ✓ ; $C$ : $9=4\big(\tfrac54+1\big)=9$ ✓ ;

   - $B$ : $1=4\big(-\tfrac34+1\big)=1$ ✓ ; $D$ : $\tfrac{16}9=4\big(-\tfrac59+1\big)=\tfrac{16}9$ ✓.

   Milieu de $[PQ]$ : $\big(\tfrac{-2+2}2,0\big)=(0,0)=M$.

   b. $B=\big(1,-\tfrac34\big)$ et $A=(-4,3)$ : $B=-\tfrac14A$, donc $\overrightarrow{MB}=-\tfrac14\overrightarrow{MA}$. $D=\big(-\tfrac43,-\tfrac59\big)$ et $C=\big(3,\tfrac54\big)$ : $-\tfrac49\times3=-\tfrac43$ et $-\tfrac49\times\tfrac54=-\tfrac59$, donc $\overrightarrow{MD}=-\tfrac49\overrightarrow{MC}$.

   Les coefficients sont négatifs : $M$ est **entre** $A$ et $B$ et entre $C$ et $D$. Ce sont deux cordes passant par $M$.

3. a. Coefficient directeur de $(AD)$ :

   $$\displaystyle m=\frac{-\frac59-3}{-\frac43+4}=\frac{-\frac{32}9}{\frac83}=-\frac{32}9\cdot\frac38=-\frac43 .$$

   Équation avec $A$ : $y-3=-\tfrac43(x+4)$. Pour $y=0$ : $-3=-\tfrac43(x+4)$, donc $x+4=\tfrac94$ et $x=-\tfrac74$.

   $$\displaystyle \boxed{X\Big(-\tfrac74,0\Big)}$$

   b. Coefficient directeur de $(BC)$ : $\dfrac{\frac54+\frac34}{3-1}=\dfrac22=1$. Équation avec $B$ : $y+\tfrac34=x-1$. Pour $y=0$ : $x=1+\tfrac34$.

   $$\displaystyle \boxed{Y\Big(\tfrac74,0\Big)}$$

4. $X\big(-\tfrac74,0\big)$ et $Y\big(\tfrac74,0\big)$ : $M(0,0)$ est le milieu de $[XY]$.

   $$\displaystyle \boxed{M\text{ est le milieu de }[XY]}$$

   **Contrôle :** sur la figure, $X$ est à gauche de $M$ et $Y$ à droite, à la même distance.

:::remark[Pas seulement pour le cercle]

Le théorème du papillon est valable pour **toutes** les coniques. Pour le cercle, voir l'[exercice 268](/lycee/2eme/sciences/geometrie-analytique#ex-0000268). Ici c'est une parabole, et le cas général fait l'objet de l'[exercice 280](/lycee/4eme/mathematiques/coniques#ex-0000280).

:::

:::intuition

Avec des points aux coordonnées rationnelles bien choisies, la parabole se comporte comme le cercle de l'exercice 268 : la symétrie par rapport à $M$ apparaît dans les nombres eux-mêmes.

:::

:::trap

Ne pas confondre $p$ et $2p$ : dans $x^2=2py$, le foyer est à l'ordonnée $\tfrac p2$ (pas $p$). Ici $2p=4$ donc $p=2$ et le foyer est $1$ au-dessus du sommet.

:::
