---
uid: "0000268"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Géométrie analytique"
source: "Axiomaths"
title: "Le papillon dans un repère : un cercle, des chiffres"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["geometrie-analytique", "cercle", "droites", "papillon"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "numerique-cercle"
rung: 2
---
Le plan est muni d'un repère orthonormé $(O\,;\vec\imath,\vec\jmath)$. On considère le cercle $\Gamma$ d'équation

$$\displaystyle x^2+y^2-3y-4=0$$

et les points
$$\displaystyle P(-2,0),\quad Q(2,0),\quad M(0,0),\quad A\Big(\tfrac52,\tfrac32\Big),\quad B\Big(-\tfrac{20}{17},-\tfrac{12}{17}\Big),\quad C(2,3),\quad D\Big(-\tfrac{8}{13},-\tfrac{12}{13}\Big).$$

![Le papillon dans un repère](/exercises/images/268-lycee-2eme-sciences-geometrie-analytique-0000268.png)

1. a. Vérifier que $P$, $Q$, $A$, $B$, $C$, $D$ appartiennent à $\Gamma$.

   b. Vérifier que $M$ est le milieu de $[PQ]$.

2. a. Montrer que $B=-\dfrac{8}{17}\,A$ et $D=-\dfrac{4}{13}\,C$ (en identifiant les points à leurs coordonnées). Que peut-on en conclure pour les points $A$, $M$, $B$ et pour les points $C$, $M$, $D$ ?

   b. Pourquoi $M$ est-il bien situé à l'intérieur des segments $[AB]$ et $[CD]$ ?

3. a. Déterminer une équation de la droite $(AD)$, puis les coordonnées de son point d'intersection $X$ avec l'axe $(Ox)$, c'est-à-dire avec la droite $(PQ)$.

   b. Faire de même pour la droite $(BC)$ : on note $Y$ son point d'intersection avec $(Ox)$.

4. Que remarque-t-on pour les points $X$, $M$ et $Y$ ?

---

## Solution

:::property[Droite et colinéarité dans un repère]

- Un point appartient à une courbe d'équation $F(x,y)=0$ si ses coordonnées vérifient l'équation.

- Trois points $A$, $M$, $B$ sont alignés si $\overrightarrow{MB}=k\,\overrightarrow{MA}$ pour un réel $k$.

- La droite passant par $E(x_E,y_E)$ et $F(x_F,y_F)$ avec $x_E\neq x_F$ a pour coefficient directeur $\ \boxed{m=\dfrac{y_F-y_E}{x_F-x_E}}$ et pour équation $y-y_E=m(x-x_E)$.

:::

1. a. On remplace dans $x^2+y^2-3y-4$ :

   $$\displaystyle P:\ 4+0-0-4=0,\qquad Q:\ 4+0-0-4=0,$$

   $$\displaystyle A:\ \tfrac{25}4+\tfrac94-\tfrac92-4=\tfrac{34}4-\tfrac{18}4-\tfrac{16}4=0,\qquad C:\ 4+9-9-4=0 .$$

   Pour $B$ : $\tfrac{400}{289}+\tfrac{144}{289}+\tfrac{36}{17}-4=\tfrac{544}{289}+\tfrac{612}{289}-\tfrac{1156}{289}=0$.

   Pour $D$ : $\tfrac{64}{169}+\tfrac{144}{169}+\tfrac{36}{13}-4=\tfrac{208}{169}+\tfrac{468}{169}-\tfrac{676}{169}=0$.

   Les six points sont donc sur $\Gamma$.

   b. Le milieu de $[PQ]$ a pour coordonnées $\Big(\dfrac{-2+2}2,\dfrac{0+0}2\Big)=(0,0)=M$.

2. a. $-\dfrac8{17}\times\dfrac52=-\dfrac{20}{17}$ et $-\dfrac8{17}\times\dfrac32=-\dfrac{12}{17}$ : on a bien $B=-\dfrac8{17}A$.

   De même $-\dfrac4{13}\times2=-\dfrac8{13}$ et $-\dfrac4{13}\times3=-\dfrac{12}{13}$ : $D=-\dfrac4{13}C$.

   Comme $M$ est l'origine, cela s'écrit $\overrightarrow{MB}=-\dfrac8{17}\overrightarrow{MA}$ et $\overrightarrow{MD}=-\dfrac4{13}\overrightarrow{MC}$ : les points $A,M,B$ sont alignés, de même $C,M,D$.

   b. Le coefficient est négatif : $M$ est **entre** $A$ et $B$ et entre $C$ et $D$. Donc $[AB]$ et $[CD]$ sont deux cordes passant par $M$.

3. a. Coefficient directeur de $(AD)$ :

   $$\displaystyle m=\frac{-\frac{12}{13}-\frac32}{-\frac8{13}-\frac52}=\frac{-\frac{63}{26}}{-\frac{81}{26}}=\frac79 .$$

   Équation, avec le point $A$ :

   $$\displaystyle y-\tfrac32=\tfrac79\Big(x-\tfrac52\Big).$$

   Pour $y=0$ : $-\tfrac32=\tfrac79\big(x-\tfrac52\big)$, donc $x-\tfrac52=-\tfrac{27}{14}$ et $x=\tfrac{35}{14}-\tfrac{27}{14}=\tfrac{8}{14}$.

   $$\displaystyle \boxed{X\Big(\tfrac47,0\Big)}$$

   b. Coefficient directeur de $(BC)$ :

   $$\displaystyle m'=\frac{3+\frac{12}{17}}{2+\frac{20}{17}}=\frac{\frac{63}{17}}{\frac{54}{17}}=\frac76 .$$

   Équation, avec le point $C$ : $y-3=\tfrac76(x-2)$. Pour $y=0$ : $x-2=-\tfrac{18}7$, donc $x=-\tfrac47$.

   $$\displaystyle \boxed{Y\Big(-\tfrac47,0\Big)}$$

4. $X\big(\tfrac47,0\big)$ et $Y\big(-\tfrac47,0\big)$ ont des abscisses opposées et la même ordonnée $0$ : $M(0,0)$ est le milieu de $[XY]$.

   $$\displaystyle \boxed{M\text{ est le milieu de }[XY]}$$

   **Contrôle :** sur la figure, $X$ et $Y$ sont de part et d'autre de $M$, à la même distance.

:::remark[Un théorème]

Ce n'est pas un hasard : c'est le « théorème du papillon », démontré dans le cas général dans l'[exercice n°269](/lycee/2eme/sciences/trigonometrie#ex-0000269). Les cordes $[AB]$ et $[CD]$ auraient pu être n'importe quelles cordes passant par $M$.

:::

:::intuition

Deux calculs aussi laids qui donnent des résultats exactement opposés ($\frac47$ et $-\frac47$) : ce serait un hasard bien improbable, c'est le signe qu'un théorème se cache derrière.

:::

:::trap

Une erreur classique : calculer le coefficient directeur avec $\dfrac{x_F-x_E}{y_F-y_E}$ (l'inverse). Vérifier toujours que la droite passe bien par les **deux** points.

:::
