---
uid: "0000352"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Triangle inscrit et angles au centre"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Moyen"
points: null
tags: ["triangle-inscrit", "angle-inscrit", "angle-au-centre", "quadrilatere-inscrit", "triangle-equilateral"]
provenance: scan
---

Dans la figure ci-contre, $ABC$ est un triangle inscrit dans le cercle de centre $O$ tel que $\widehat{OAB}=30°$ et $\widehat{AOC}=120°$.

![Triangle ABC inscrit dans un cercle de centre O, avec OAB = 30° et AOC = 120°](/exercises/images/352-lycee-1ere-angles-0000352.png)

1. Déterminer les mesures des angles du triangle $ABC$.

2. Soit $D$ le point diamétralement opposé à $C$. Calculer $\widehat{ADB}$.

---

## Solution

:::property[Angle inscrit et angle au centre]
Un angle inscrit mesure la **moitié** de l'angle au centre qui intercepte le même arc.
:::

:::property[Quadrilatère inscrit]
Dans un quadrilatère convexe inscrit dans un cercle, les angles **opposés** sont **supplémentaires** (leur somme vaut $180°$).
:::

1. $OA=OB$ (rayons) : le triangle $OAB$ est isocèle en $O$, donc $\widehat{OBA}=\widehat{OAB}=30°$.

   $$\displaystyle \widehat{AOB}=180°-30°-30°=120°$$

   On connaît donc deux angles au centre : $\widehat{AOB}=120°$ et $\widehat{AOC}=120°$.

   - $\widehat{ACB}$ est l'angle inscrit qui intercepte le même arc $AB$ que $\widehat{AOB}$ :

     $$\widehat{ACB}=\dfrac{120°}{2}=60°$$

   - $\widehat{ABC}$ est l'angle inscrit qui intercepte le même arc $AC$ que $\widehat{AOC}$ :

     $$\widehat{ABC}=\dfrac{120°}{2}=60°$$

   - Dans le triangle $ABC$ :

     $$\widehat{BAC}=180°-60°-60°=60°$$

   $$\boxed{\widehat{ABC}=\widehat{BCA}=\widehat{CAB}=60°}$$

   **Le triangle $ABC$ est équilatéral.**

2. $O$ est à l'intérieur du triangle équilatéral $ABC$ et $[CD]$ est un diamètre : la droite $(CO)$ coupe $[AB]$ en son milieu puis rencontre le cercle en $D$, de l'autre côté de $(AB)$ par rapport à $C$.

   Les points $A$, $D$, $B$, $C$ sont donc, dans cet ordre, sur le cercle : $ADBC$ est un quadrilatère inscrit. Ses angles opposés $\widehat{ADB}$ et $\widehat{ACB}$ sont supplémentaires :

   $$\displaystyle \widehat{ADB}=180°-\widehat{ACB}=180°-60°$$

   $$\boxed{\widehat{ADB}=120°}$$

   Contrôle : $\widehat{ADB}$ est un angle inscrit qui intercepte le grand arc $AB$ de $240°$ (celui qui ne contient pas $D$), et $\dfrac{240°}{2}=120°$.

:::intuition
Trois angles au centre de $120°$ découpent le cercle en trois arcs égaux : le triangle est forcément équilatéral.
:::

:::trap
$\widehat{ADB}\neq\widehat{ACB}$ ! Deux angles inscrits ne sont égaux que si leurs sommets sont du **même côté** de la corde. Ici $C$ et $D$ sont de part et d'autre de $(AB)$ : les angles sont supplémentaires.
:::
