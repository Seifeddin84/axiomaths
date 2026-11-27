---
uid: "0000276"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Trigonométrie"
source: "Axiomaths"
title: "Le côté du triangle de Morley dans trois triangles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["theoreme-de-morley", "calcul", "trigonometrie"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths"
idea: "morley"
dressing: "côté du triangle de Morley sur trois exemples"
rung: 2
---
On rappelle (exercice [275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275)) que le triangle de Morley d'un triangle $ABC$ de rayon circonscrit $\rho$ est équilatéral, de côté

$$\displaystyle c_M=8\rho\,\sin\frac{\widehat A}3\,\sin\frac{\widehat B}3\,\sin\frac{\widehat C}3 .$$

![Le triangle de Morley d'un triangle rectangle de 60°, 30°, 90°](/exercises/images/276-lycee-3eme-maths-trigonometrie-0000276.png)

1. Le triangle $ABC$ est rectangle en $C$ avec $\widehat A=60^\circ$ et $AB=2$. Calculer le côté de son triangle de Morley : valeur exacte, puis valeur approchée à $10^{-4}$ près. (Indication : $2\sin a\sin b=\cos(a-b)-\cos(a+b)$.)

2. Le triangle $ABC$ est équilatéral de côté $1$. Calculer $\rho$, puis $c_M$ (valeur approchée à $10^{-4}$ près).

3. Le triangle $ABC$ est rectangle isocèle en $C$, de rayon circonscrit $\rho$. Montrer que $c_M=\rho\,(2-\sqrt3)$. (Indication : $2\sin^2x=1-\cos2x$.)

---

## Solution

:::property[Rappels]

- **Rayon circonscrit :** dans un triangle de côté $a$ opposé à l'angle $\widehat A$, $\ \boxed{a=2\rho\sin\widehat A}$.

- **Triangle rectangle :** le centre du cercle circonscrit est le milieu de l'hypoténuse, donc $\rho=\dfrac{\text{hypoténuse}}2$.

- **Produit en somme :** $\ \boxed{2\sin a\sin b=\cos(a-b)-\cos(a+b)}$.

:::

1. Le triangle est rectangle en $C$, d'hypoténuse $[AB]=2$ : $\rho=1$.

   Les angles sont $\widehat A=60^\circ$, $\widehat B=30^\circ$, $\widehat C=90^\circ$ ; leurs tiers sont $20^\circ$, $10^\circ$, $30^\circ$.

   $$\displaystyle c_M=8\cdot1\cdot\sin20^\circ\,\sin10^\circ\,\sin30^\circ=4\sin20^\circ\sin10^\circ\quad(\text{car }\sin30^\circ=\tfrac12).$$

   On applique $2\sin a\sin b=\cos(a-b)-\cos(a+b)$ avec $a=20^\circ$, $b=10^\circ$ :

   $$\displaystyle 4\sin20^\circ\sin10^\circ=2\big(\cos10^\circ-\cos30^\circ\big)=2\cos10^\circ-\sqrt3 .$$

   $$\displaystyle \boxed{c_M=2\cos10^\circ-\sqrt3\approx0{,}2376}$$

   **Contrôle :** $2\cos10^\circ\approx1{,}9696$ et $\sqrt3\approx1{,}7321$, d'où $0{,}2376$.

2. Le côté vaut $1=2\rho\sin60^\circ=\rho\sqrt3$, donc $\rho=\dfrac1{\sqrt3}$. Les angles valent $60^\circ$ ; leurs tiers $20^\circ$.

   $$\displaystyle c_M=8\cdot\frac1{\sqrt3}\cdot\sin^320^\circ=\boxed{\frac8{\sqrt3}\sin^320^\circ\approx0{,}1848}$$

   **Contrôle :** c'est la valeur $\dfrac{1-\sqrt3\tan20^\circ}2\approx0{,}1848$ trouvée par une tout autre méthode (rotation et tangente) dans l'[exercice n°270](/lycee/2eme/sciences/rotations#ex-0000270).

3. Angles : $90^\circ,45^\circ,45^\circ$ ; leurs tiers : $30^\circ,15^\circ,15^\circ$.

   $$\displaystyle c_M=8\rho\sin30^\circ\sin^215^\circ=4\rho\sin^215^\circ .$$

   On utilise $2\sin^2x=1-\cos2x$ avec $x=15^\circ$ :

   $$\displaystyle 4\rho\sin^215^\circ=2\rho\,(1-\cos30^\circ)=2\rho\Big(1-\frac{\sqrt3}2\Big)=\boxed{\rho\,(2-\sqrt3)\approx0{,}268\,\rho}$$

:::remark[Comparer les trois cas]

Rapportés au rayon circonscrit, les trois côtés valent environ $0{,}238\,\rho$, $0{,}320\,\rho$ et $0{,}268\,\rho$. Le plus grand est celui du triangle équilatéral, et ce n'est pas un hasard : c'est le **maximum** pour tous les triangles de même $\rho$ (voir l'[exercice n°285](/lycee/4eme/mathematiques/derivabilite#ex-0000285)).

:::

:::intuition

La formule $8\rho\sin\sin\sin$ transforme un problème de géométrie (trisectrices) en un calcul de trois sinus d'angles connus.

:::

:::trap

Les tiers des angles (pas les angles eux-mêmes) entrent dans la formule : en 1, on prend $20^\circ,10^\circ,30^\circ$ et non $60^\circ,30^\circ,90^\circ$.

:::
