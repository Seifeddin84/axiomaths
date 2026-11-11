---
uid: "0000147"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Déplacements - Antidéplacements"
source: "Bac 1991 principale, Ex. 1"
title: "Triangle équilatéral, cercles tangents et composée de rotations"
country: "Tunisie"
year: 1991
professor: null
difficulty: "Difficile"
points: 6
tags: ["bac", "rotation", "composee-de-rotations", "triangle-equilateral", "lieu-geometrique"]
bac: "1991-principale-maths"
recommended: true
---

On considère, dans un plan orienté, un triangle équilatéral $ABC$ tel que $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \dfrac{\pi}{3}\ [2\pi]$ et le cercle $(\mathcal{C})$ circonscrit à ce triangle. On construit les cercles $(\mathcal{C}')$ et $(\mathcal{C}'')$ de même rayon, de centres respectifs $B$ et $C$ et tangents extérieurement l'un à l'autre.

1. Soit $M$ un point du cercle $(\mathcal{C}')$ et $M'$ le point du cercle $(\mathcal{C}'')$ tel que $\left(\widehat{\overrightarrow{BM}, \overrightarrow{CM'}}\right) \equiv \dfrac{\pi}{3}\ [2\pi]$. Montrer que la médiatrice du segment $[MM']$ passe par un point fixe que l'on précisera.

2. Le point $M$ se projette orthogonalement en $H$ sur $(AM')$ ; déterminer l'ensemble des points $H$ lorsque $M$ décrit $(\mathcal{C}')$. Construire cet ensemble.

3. Soit $D$ le point du cercle $(\mathcal{C})$ diamétralement opposé à $A$ et $M''$ l'image du point $M'$ par la rotation de centre $D$ et d'angle dont une mesure est $\dfrac{2\pi}{3}$. Montrer que $M$ et $M''$ sont deux points diamétralement opposés du cercle $(\mathcal{C}')$.

---

## Solution

On note $a = BC$. Les cercles $(\mathcal{C}')$ et $(\mathcal{C}'')$ ont le même rayon et sont tangents extérieurement : leur rayon est $\dfrac{a}{2}$ et ils se touchent au milieu $I$ de $[BC]$.

1. Soit $r$ la rotation de centre $A$ et d'angle $\dfrac{\pi}{3}$. Comme $AB = AC$ et $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \dfrac{\pi}{3}$, on a $r(B) = C$.

   $r$ transforme le cercle $(\mathcal{C}')$ de centre $B$ en le cercle $(\mathcal{C}'')$ de centre $C$, de même rayon.

   Pour $M \in (\mathcal{C}')$, le point $r(M)$ est sur $(\mathcal{C}'')$ et $\left(\widehat{\overrightarrow{BM}, \overrightarrow{C\,r(M)}}\right) \equiv \dfrac{\pi}{3}$ (une rotation tourne tous les vecteurs de son angle). Comme $M'$ est l'unique point de $(\mathcal{C}'')$ vérifiant cette condition, $M' = r(M)$.

   Donc $AM = AM'$ : la médiatrice de $[MM']$ passe par le point fixe $A$.

2. $AM = AM'$ et $\left(\widehat{\overrightarrow{AM}, \overrightarrow{AM'}}\right) \equiv \dfrac{\pi}{3}$ : le triangle $AMM'$ est équilatéral (non aplati, car $A \notin (\mathcal{C}')$ puisque $AB = a > \frac a2$).

   Dans un triangle équilatéral, le pied de la hauteur issue de $M$ est le milieu du côté opposé : $H$ est le milieu de $[AM']$.

   Donc $H = h(M')$, où $h$ est l'homothétie de centre $A$ et de rapport $\dfrac12$. Quand $M$ décrit $(\mathcal{C}')$, $M' = r(M)$ décrit $(\mathcal{C}'')$ tout entier.

   L'ensemble des points $H$ est le cercle $h\big((\mathcal{C}'')\big)$ : le cercle de centre $J$, milieu de $[AC]$, et de rayon $\dfrac{a}{4}$.

3. Soit $\rho$ la rotation de centre $D$ et d'angle $\dfrac{2\pi}{3}$. On a $M'' = \rho(M') = \rho \circ r\,(M)$.

   $\rho \circ r$ est une rotation d'angle $\dfrac{2\pi}{3} + \dfrac{\pi}{3} = \pi$ : c'est une symétrie centrale.

   Son centre : $D$ est diamétralement opposé à $A$, donc $\widehat{ABD}$ et $\widehat{ACD}$ sont droits ; avec $\widehat{BAD} = \widehat{DAC} = \dfrac{\pi}{6}$ (la droite $(AD)$ est un axe de symétrie du triangle équilatéral), on obtient $DB = DC$ et $\widehat{BDC} = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$.

   L'orientation donne $\left(\widehat{\overrightarrow{DC}, \overrightarrow{DB}}\right) \equiv \dfrac{2\pi}{3}$, donc $\rho(C) = B$.

   Ainsi $\rho \circ r\,(B) = \rho(C) = B$ : $\rho \circ r$ est la symétrie centrale de centre $B$.

   $M'' = S_B(M)$ : $B$ est le milieu de $[MM'']$, et $M$, $M''$ sont deux points diamétralement opposés de $(\mathcal{C}')$.
