---
uid: "0000348"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Angles d'un triangle, bissectrices et parallèles"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Facile"
points: null
tags: ["angles", "triangle", "bissectrice", "droites-paralleles"]
provenance: scan
dressing: "angles d'un triangle et bissectrice"
rung: 1
---

Soit $ABC$ un triangle tel que $\widehat{ABC}=35°$ et $\widehat{BAC}=75°$.

![Triangle ABC avec les angles de 35° en B et 75° en A](/exercises/images/348-lycee-1ere-angles-0000348.png)

1. Calculer $\widehat{ACB}$.

2. La bissectrice de l'angle $\widehat{ACB}$ coupe $[AB]$ en $D$. Calculer $\widehat{ADC}$.

3. La bissectrice de l'angle $\widehat{ADC}$ coupe $[AC]$ en $E$. Montrer que les droites $(DE)$ et $(BC)$ sont parallèles.

4. La parallèle à $(AC)$ passant par $D$ coupe $(BC)$ en $F$. Quelle est la nature du triangle $FDC$ ?

---

## Solution

:::property[Somme des angles d'un triangle]
Dans un triangle, la somme des mesures des trois angles est égale à $180°$.

$$\boxed{\widehat{A}+\widehat{B}+\widehat{C}=180°}$$
:::

:::property[Bissectrice d'un angle]
La **bissectrice** d'un angle est la demi-droite qui le partage en deux angles **égaux** : chacun mesure la moitié de l'angle de départ.
:::

:::property[Angles et droites parallèles]
Deux droites coupées par une sécante :

- si les angles **correspondants** (ou **alternes-internes**) sont égaux, alors les droites sont **parallèles** ;

- réciproquement, si les droites sont parallèles, ces angles sont égaux.
:::

1. Dans le triangle $ABC$ :

   $$\displaystyle \widehat{ACB}=180°-\widehat{ABC}-\widehat{BAC}=180°-35°-75°$$

   $$\boxed{\widehat{ACB}=70°}$$

2. $(CD)$ est la bissectrice de $\widehat{ACB}$, donc :

   $$\displaystyle \widehat{ACD}=\widehat{DCB}=\dfrac{70°}{2}=35°$$

   Dans le triangle $ADC$, on connaît $\widehat{DAC}=75°$ et $\widehat{ACD}=35°$ :

   $$\displaystyle \widehat{ADC}=180°-75°-35°$$

   $$\boxed{\widehat{ADC}=70°}$$

   Contrôle : $\widehat{ADC}$ est un angle extérieur du triangle $DBC$, donc $\widehat{ADC}=\widehat{DBC}+\widehat{DCB}=35°+35°=70°$.

3. $(DE)$ est la bissectrice de $\widehat{ADC}$ :

   $$\displaystyle \widehat{ADE}=\dfrac{70°}{2}=35°$$

   Les droites $(DE)$ et $(BC)$ sont coupées par la sécante $(AB)$. Les angles $\widehat{ADE}$ et $\widehat{ABC}$ sont **correspondants** et on a $\widehat{ADE}=35°=\widehat{ABC}$.

   Donc les droites $(DE)$ et $(BC)$ sont **parallèles**.

   *Autre justification* : $\widehat{EDC}=\widehat{ADC}-\widehat{ADE}=70°-35°=35°=\widehat{DCB}$, et ces deux angles sont alternes-internes pour la sécante $(DC)$.

4. Étudions les angles du triangle $FDC$.

   - $F$ est sur $(BC)$, du même côté de $C$ que $B$, donc $\widehat{FCD}=\widehat{BCD}=35°$.

   - $(DF)\parallel(AC)$ et la sécante $(DC)$ forment les angles alternes-internes $\widehat{FDC}$ et $\widehat{DCA}$ : $\widehat{FDC}=\widehat{DCA}=35°$.

   Le triangle $FDC$ a deux angles égaux : $\widehat{FDC}=\widehat{FCD}=35°$.

   **Le triangle $FDC$ est isocèle en $F$**, avec $FD=FC$.

   Contrôle : $\widehat{DFC}=180°-35°-35°=110°$.

:::intuition
La bissectrice de $\widehat{ACB}$ « recopie » l'angle de $35°$ de $B$ : c'est ce qui crée à la fois les parallèles et les triangles isocèles.
:::

:::trap
Ne pas confondre angles **correspondants** et **alternes-internes** : les deux conduisent à des parallèles, mais il faut regarder de quel côté de la sécante se trouvent les angles.
:::
