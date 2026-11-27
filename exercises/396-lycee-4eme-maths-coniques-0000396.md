---
uid: "0000396"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Une hyperbole qui passe par l'orthocentre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["hyperbole", "coniques", "orthocentre", "triangle", "defi"]
provenance: "adapted"
dressing: "hyperbole passant par l'orthocentre"
rung: 5
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Le plan est rapporté à un repère orthonormé $(\Omega;\vec{\imath},\vec{\jmath})$. On note $\Gamma$ l'hyperbole d'équation $xy=1$. Soient $a$, $b$, $c$ trois réels non nuls deux à deux distincts et $A\left(a,\dfrac1a\right)$, $B\left(b,\dfrac1b\right)$, $C\left(c,\dfrac1c\right)$ trois points de $\Gamma$.

![Hyperbole d'équation xy=1, triangle ABC inscrit et orthocentre H sur l'hyperbole](/exercises/images/396-lycee-4eme-maths-coniques-0000396.png)

### Partie A : l'orthocentre reste sur l'hyperbole.

1. Montrer que la droite $(BC)$ a pour coefficient directeur $-\dfrac{1}{bc}$. En déduire une équation de la hauteur du triangle $ABC$ issue de $A$.

2. Montrer que le point $H\left(-\dfrac{1}{abc},\,-abc\right)$ est l'orthocentre de $ABC$.

3. En déduire que $H\in\Gamma$.

### Partie B : les centres des hyperboles équilatères passant par $A$, $B$, $C$.

On oublie le repère de la partie A. Soit $ABC$ un triangle non rectangle, d'orthocentre $H$, inscrit dans un cercle $\mathcal C$ de centre $O$ et de rayon $R$. On note $N$ le milieu de $[OH]$. On rappelle que le cercle d'Euler de $ABC$ a pour centre $N$ et pour rayon $\dfrac R2$. Une hyperbole est dite *équilatère* si ses asymptotes sont perpendiculaires.

1. Soit $\mathcal H$ une hyperbole équilatère passant par $A$, $B$, $C$, de centre $\Omega$.

   a. Justifier qu'on peut choisir un repère orthonormé d'origine $\Omega$ et une unité de longueur dans lesquels $\mathcal H$ a pour équation $xy=1$.

   b. Déduire de la partie A que $H\in\mathcal H$.

2. On se place dans ce repère et on note $a$, $b$, $c$ les abscisses de $A$, $B$, $C$.

   a. Montrer que $\mathcal C$ recoupe $\mathcal H$ en un quatrième point $D\left(\dfrac{1}{abc},\,abc\right)$, symétrique de $H$ par rapport à $\Omega$ (on pourra écrire que l'abscisse d'un point commun à $\mathcal C$ et $\mathcal H$ est racine d'un polynôme de degré $4$).

   b. En déduire que **le centre $\Omega$ de toute hyperbole équilatère passant par $A$, $B$, $C$ appartient au cercle d'Euler de $ABC$.**

---

## Solution

### Partie A.

1.
   :::property[Coefficient directeur et perpendicularité]
   La droite passant par $M(x_M,y_M)$ et $N(x_N,y_N)$, avec $x_M\neq x_N$, a pour coefficient directeur $\boxed{\dfrac{y_N-y_M}{x_N-x_M}}$.

   Deux droites de coefficients directeurs $m$ et $m'$ sont perpendiculaires si et seulement si $\boxed{mm'=-1}$.
   :::

   Coefficient directeur de $(BC)$ :

   $$\displaystyle \dfrac{\dfrac1c-\dfrac1b}{c-b}=\dfrac{\dfrac{b-c}{bc}}{c-b}=-\dfrac{1}{bc}.$$

   La hauteur issue de $A$ est perpendiculaire à $(BC)$ : son coefficient directeur $m$ vérifie $m\times\left(-\dfrac1{bc}\right)=-1$, donc $m=bc$.

   Elle passe par $A\left(a,\dfrac1a\right)$ : $\boxed{y-\dfrac1a=bc\,(x-a)}$.

2. On remplace $H\left(-\dfrac1{abc},-abc\right)$ dans l'équation de la hauteur issue de $A$.

   Membre de gauche : $y_H-\dfrac1a=-abc-\dfrac1a$.

   Membre de droite : $bc\,(x_H-a)=bc\left(-\dfrac1{abc}-a\right)=-\dfrac1a-abc$.

   Les deux membres sont égaux : $H$ est sur la hauteur issue de $A$.

   Les coordonnées de $H$ sont *symétriques* en $a$, $b$, $c$. En échangeant les rôles de $A$, $B$, $C$, le même calcul montre que $H$ est aussi sur la hauteur issue de $B$ et sur celle issue de $C$.

   $H$ est donc le point commun aux trois hauteurs : $\boxed{H\text{ est l'orthocentre de }ABC}$.

3. $x_Hy_H=\left(-\dfrac{1}{abc}\right)(-abc)=1$, donc $\boxed{H\in\Gamma}$.

### Partie B.

1.
   :::property[Hyperbole rapportée à ses asymptotes]
   Si les asymptotes d'une hyperbole de centre $\Omega$ sont les axes d'un repère orthonormé d'origine $\Omega$, son équation est $\boxed{xy=k}$ avec $k\neq0$.
   :::

   a. $\mathcal H$ est équilatère : ses asymptotes sont deux droites perpendiculaires qui se coupent en $\Omega$. On les prend pour axes.

      Alors $\mathcal H$ a pour équation $xy=k$, $k\neq0$.

      Si $k<0$, on change l'orientation de l'axe des ordonnées ($y$ devient $-y$) : on obtient $k>0$.

      On prend alors $\sqrt k$ pour unité de longueur : $X=\dfrac{x}{\sqrt k}$, $Y=\dfrac{y}{\sqrt k}$ donnent $XY=1$.

   b. Dans ce repère, $A$, $B$, $C$ sont trois points de $\Gamma:xy=1$. L'orthocentre est une notion géométrique : il ne dépend ni du repère ni de l'unité. Le résultat de la partie A donne $H\in\mathcal H$.

2.
   :::property[Relations entre coefficients et racines]
   Si un polynôme unitaire de degré $4$ s'écrit $x^4+\cdots+e$ et a pour racines $x_1,x_2,x_3,x_4$, alors $\boxed{x_1x_2x_3x_4=e}$ (terme constant).
   :::

   a. Le cercle $\mathcal C$ passe par $A$, $B$, $C$ : il a une équation $x^2+y^2+px+qy+s=0$.

      Un point de $\mathcal H$ a pour ordonnée $\dfrac1x$ ($x\neq0$). Il est sur $\mathcal C$ si et seulement si

      $$\displaystyle x^2+\dfrac1{x^2}+px+\dfrac qx+s=0.$$

      On multiplie par $x^2$ : $\boxed{x^4+px^3+sx^2+qx+1=0}$ $(E)$.

      $A$, $B$, $C$ sont communs à $\mathcal C$ et $\mathcal H$ : $a$, $b$, $c$ sont trois racines distinctes de $(E)$. Le polynôme du premier membre est unitaire de degré $4$ ; sa quatrième racine $d$ est réelle et

      $$\displaystyle (E)\iff (x-a)(x-b)(x-c)(x-d)=0.$$

      Le terme constant vaut $1$ : $abcd=1$, donc $d=\dfrac1{abc}$.

      Le point $D\left(d,\dfrac1d\right)=\left(\dfrac1{abc},abc\right)$ est sur $\mathcal H$ et son abscisse est racine de $(E)$ : $D\in\mathcal C$.

      Enfin $D=(-x_H,-y_H)$ : $D$ est le symétrique de $H$ par rapport à $\Omega$.

   b. $N$ est le milieu de $[OH]$ : $\overrightarrow{\Omega N}=\dfrac12\left(\overrightarrow{\Omega O}+\overrightarrow{\Omega H}\right)$.

      $\Omega$ est le milieu de $[HD]$ : $\overrightarrow{\Omega D}=-\overrightarrow{\Omega H}$.

      On remplace $\overrightarrow{\Omega H}$ par $-\overrightarrow{\Omega D}$ : **$\overrightarrow{\Omega N}=\dfrac12\left(\overrightarrow{\Omega O}-\overrightarrow{\Omega D}\right)=\dfrac12\overrightarrow{DO}$**.

      Comme $D\in\mathcal C$, $DO=R$ : $\boxed{\Omega N=\dfrac R2}$.

      $\Omega$ est sur le cercle de centre $N$ et de rayon $\dfrac R2$, c'est-à-dire sur le cercle d'Euler. $\blacksquare$

:::intuition
Dans le repère centré sur l'hyperbole, le quatrième point commun avec le cercle circonscrit est le symétrique de $H$. Alors $\Omega$ est milieu de $[HD]$, $N$ milieu de $[HO]$ : la droite des milieux donne $\Omega N=\dfrac{OD}2=\dfrac R2$.
:::

:::trap
Les racines de $(E)$ sont comptées avec multiplicité : si $\mathcal C$ est tangent à $\mathcal H$ en un sommet, $d$ est égal à l'un des réels $a$, $b$, $c$ ; la formule $d=\dfrac1{abc}$ reste valable.
:::
