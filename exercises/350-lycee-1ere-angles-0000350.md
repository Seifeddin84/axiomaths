---
uid: "0000350"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Cercle, diamètres et angle inscrit"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Moyen"
points: null
tags: ["angles", "cercle", "diametre", "angle-inscrit"]
provenance: scan
dressing: "diamètres et angle inscrit"
rung: 2
---

$O$ est le centre du cercle. $[BE]$ et $[AD]$ sont deux diamètres, $\widehat{EBC}=70°$, et la droite $(AD)$ coupe $[CE]$ en son milieu $M$.

![Cercle de centre O avec les diamètres [BE] et [AD], le point C, le milieu M de [CE] et un angle de 70° en B](/exercises/images/350-lycee-1ere-angles-0000350.png)

1. a. Quelle est la nature du triangle $BCE$ ?

   b. En déduire la mesure de l'angle $\widehat{BCE}$.

2. a. Vérifier que les droites $(BC)$ et $(AD)$ sont parallèles.

   b. En déduire les mesures des angles $\widehat{DOE}$ et $\widehat{DAE}$.

3. a. Quelle est la nature du triangle $OAE$ ?

   b. En déduire les mesures des angles $\widehat{AEO}$ et $\widehat{OED}$.

---

## Solution

:::property[Triangle inscrit dans un demi-cercle]
Si $[BE]$ est un diamètre d'un cercle et si $C$ est un point du cercle distinct de $B$ et $E$, alors le triangle $BCE$ est **rectangle en $C$**.
:::

:::property[Angle inscrit et angle au centre]
Un angle inscrit mesure la **moitié** de l'angle au centre qui intercepte le même arc :

$$\boxed{\widehat{DAE}=\dfrac12\,\widehat{DOE}}$$
:::

:::property[Droite des milieux]
Dans un triangle, la droite qui passe par les milieux de deux côtés est **parallèle au troisième côté**.
:::

1. a. $[BE]$ est un diamètre et $C$ est un point du cercle : le triangle $BCE$ est inscrit dans un demi-cercle.

   **Le triangle $BCE$ est rectangle en $C$.**

   b. $$\boxed{\widehat{BCE}=90°}$$

2. a. Dans le triangle $BCE$ :

   - $O$ est le milieu de $[BE]$ (centre du cercle, $[BE]$ est un diamètre) ;

   - $M$ est le milieu de $[CE]$ (donnée).

   D'après la droite des milieux, $(OM)\parallel(BC)$.

   Or $(OM)=(AD)$ (la droite $(AD)$ passe par $O$ et $M$).

   **Donc $(BC)\parallel(AD)$.**

   *Autre méthode* : $(BC)\perp(CE)$ d'après la question 1. Dans le triangle $OCE$ isocèle en $O$, la médiane $(OM)$ est aussi hauteur, donc $(AD)\perp(CE)$. Deux droites perpendiculaires à une même droite sont parallèles.

   b. $(OD)\parallel(BC)$ et la sécante $(BE)$ forment les angles **correspondants** $\widehat{DOE}$ et $\widehat{CBE}$ :

   $$\boxed{\widehat{DOE}=\widehat{CBE}=70°}$$

   $\widehat{DAE}$ est un angle inscrit qui intercepte le même arc $DE$ que l'angle au centre $\widehat{DOE}$ :

   $$\boxed{\widehat{DAE}=\dfrac{70°}{2}=35°}$$

3. a. $OA=OE$ (rayons du cercle) : **le triangle $OAE$ est isocèle en $O$.**

   b. Ses angles à la base sont égaux : $\widehat{AEO}=\widehat{OAE}$.

   Comme $O$ est sur $[AD]$, on a $\widehat{OAE}=\widehat{DAE}=35°$. Donc :

   $$\boxed{\widehat{AEO}=35°}$$

   Le triangle $ODE$ est aussi isocèle en $O$ ($OD=OE$), avec $\widehat{DOE}=70°$ :

   $$\displaystyle \widehat{OED}=\dfrac{180°-70°}{2}$$

   $$\boxed{\widehat{OED}=55°}$$

   Contrôle : $\widehat{AED}=\widehat{AEO}+\widehat{OED}=35°+55°=90°$, ce qui est normal car $[AD]$ est un diamètre.

:::intuition
Un diamètre donne un angle droit, les rayons donnent des triangles isocèles, et les parallèles transportent l'angle de $70°$ jusqu'au centre.
:::

:::trap
Ne pas écrire $\widehat{DAE}=70°$ : l'angle de $70°$ est l'angle **au centre** $\widehat{DOE}$, l'angle inscrit correspondant en vaut la **moitié**.
:::
