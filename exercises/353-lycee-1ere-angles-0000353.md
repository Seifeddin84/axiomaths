---
uid: "0000353"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Triangle inscrit, hauteur et angle au centre"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Moyen"
points: null
tags: ["angles", "triangle-inscrit", "hauteur", "angle-au-centre", "cercle"]
provenance: scan
dressing: "triangle inscrit et hauteur"
rung: 3
---

$ABM$ est un triangle inscrit dans un cercle $(\mathscr{C})$ de centre $O$ tel que $\widehat{ABM}=40°$.

La hauteur issue de $A$ coupe $(\mathscr{C})$ en $E$.

Calculer $\widehat{AOM}$ et $\widehat{BOE}$.

---

## Solution

:::property[Angle inscrit et angle au centre]
Un angle inscrit mesure la **moitié** de l'angle au centre qui intercepte le même arc :

$$\boxed{\text{angle au centre}=2\times\text{angle inscrit}}$$
:::

:::property[Hauteur d'un triangle]
La hauteur issue de $A$ est la droite qui passe par $A$ et qui est **perpendiculaire** à $(BM)$. Elle coupe $(BM)$ en un point $H$ (le pied de la hauteur) et $\widehat{AHB}=90°$.
:::

**Calcul de $\widehat{AOM}$.**

$\widehat{ABM}$ est un angle inscrit et $\widehat{AOM}$ est l'angle au centre qui intercepte le même arc $AM$ :

$$\boxed{\widehat{AOM}=2\times\widehat{ABM}=2\times40°=80°}$$

**Calcul de $\widehat{BOE}$.**

Soit $H$ le pied de la hauteur issue de $A$ : $H\in(BM)$ et $(AH)\perp(BM)$. Le point $E$ est sur la droite $(AH)$.

Le triangle $ABH$ est rectangle en $H$ et $\widehat{ABH}=\widehat{ABM}=40°$ (l'angle en $B$ est aigu, donc $H$ est sur la demi-droite $[BM)$). Ses angles aigus sont complémentaires :

$$\displaystyle \widehat{BAH}=90°-40°=50°$$

Comme $E$ est sur la demi-droite $[AH)$, on a $\widehat{BAE}=\widehat{BAH}=50°$.

$\widehat{BAE}$ est un angle inscrit et $\widehat{BOE}$ est l'angle au centre qui intercepte le même arc $BE$ :

$$\boxed{\widehat{BOE}=2\times\widehat{BAE}=2\times50°=100°}$$

*Remarque.* La valeur $\widehat{BOE}=100°$ ne dépend pas de la position de $A$ sur le cercle : seule compte la valeur de $\widehat{ABM}$. Avec un logiciel de géométrie, on peut déplacer $A$ et voir $\widehat{BOE}$ rester égal à $100°$.

:::intuition
La hauteur est perpendiculaire à $(BM)$ : elle transforme l'angle de $40°$ en son complémentaire $50°$, puis l'angle inscrit se « double » en angle au centre.
:::

:::trap
Ne pas écrire $\widehat{AOM}=40°$ ni $\widehat{BOE}=50°$ : ce sont des angles **inscrits** ; les angles **au centre** qu'on demande valent le double.
:::
