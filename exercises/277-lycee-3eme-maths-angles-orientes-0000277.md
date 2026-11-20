---
uid: "0000277"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Angles orientés"
source: "Axiomaths"
title: "Trois cordes égales sur un cercle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["cercle", "angle-inscrit", "angle-au-centre", "triangles-isometriques", "morley"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths ; lemme de la preuve de Naraniengar"
idea: "morley"
dressing: "lemme-cordes"
rung: 2
---
Soit $\alpha$ un réel avec $0^\circ<\alpha<60^\circ$. On considère quatre points $Y',Y,Z,Z'$ tels que :

- $Y'Y=YZ=ZZ'$ ;
- $\widehat{Y'YZ}=\widehat{YZZ'}=180^\circ-2\alpha$ ;
- $Y'$ et $Z'$ sont du même côté de la droite $(YZ)$.

![Quatre points, trois cordes égales](/exercises/images/277-lycee-3eme-maths-angles-orientes-0000277.png)

1. Les bissectrices des angles $\widehat{Y'YZ}$ et $\widehat{YZZ'}$ se coupent en un point $\Omega$. Montrer que $\Omega Y=\Omega Z$ et que $\widehat{Y\Omega Z}=2\alpha$.

2. Montrer que les triangles $\Omega Y'Y$ et $\Omega ZY$ sont isométriques. En déduire $\Omega Y'=\Omega Y$ et $\widehat{Y'\Omega Y}=2\alpha$. Montrer de même que $\Omega Z'=\Omega Z$ et $\widehat{Z\Omega Z'}=2\alpha$.

3. Conclure que $Y',Y,Z,Z'$ sont sur un cercle $\mathcal C$ de centre $\Omega$ et que l'arc $Y'YZZ'$ mesure $6\alpha$ au centre.

4. Soit $A$ un point situé de l'autre côté de $(Y'Z')$ que $Y$ et $Z$, tel que $\widehat{Y'AZ'}=3\alpha$. Montrer que $A$ est sur $\mathcal C$ et que $\widehat{Y'AY}=\widehat{YAZ}=\widehat{ZAZ'}=\alpha$.

---

## Solution

:::property[Angle inscrit et angle au centre]

Dans un cercle, un angle inscrit mesure la **moitié** de l'angle au centre qui intercepte le même arc : $\ \boxed{\widehat{\text{inscrit}}=\tfrac12\,\widehat{\text{au centre}}}$. Deux angles inscrits qui interceptent le même arc sont égaux. Le lieu des points d'un côté de $(EF)$ qui voient $[EF]$ sous un angle donné est un arc de cercle passant par $E$ et $F$.

:::

1. Les bissectrices de $\widehat{Y'YZ}$ et de $\widehat{YZZ'}$ font avec $[YZ]$ des angles de $\tfrac12(180^\circ-2\alpha)=90^\circ-\alpha$ chacun ; la somme $2(90^\circ-\alpha)=180^\circ-2\alpha$ est inférieure à $180^\circ$, donc elles se coupent en un point $\Omega$ du côté de $Y'$ et $Z'$.

   Dans le triangle $\Omega YZ$, les angles en $Y$ et en $Z$ valent tous les deux $90^\circ-\alpha$ : il est isocèle en $\Omega$, donc

   $$\displaystyle \Omega Y=\Omega Z,\qquad \widehat{Y\Omega Z}=180^\circ-2(90^\circ-\alpha)=\boxed{2\alpha}.$$

2. Comparons $\Omega Y'Y$ et $\Omega ZY$ :

   - $YY'=YZ$ (hypothèse) ;

   - $\Omega Y$ est un côté commun ;

   - $\widehat{\Omega YY'}=\widehat{\Omega YZ}=90^\circ-\alpha$ (car $(Y\Omega)$ est la bissectrice de $\widehat{Y'YZ}$).

   Deux côtés égaux et l'angle compris égal : les triangles sont isométriques. Donc

   $$\displaystyle \Omega Y'=\Omega Z=\Omega Y,\qquad \widehat{Y'\Omega Y}=\widehat{Z\Omega Y}=2\alpha .$$

   Le même raisonnement avec les triangles $\Omega Z'Z$ et $\Omega YZ$ (côté $ZZ'=ZY$, côté commun $\Omega Z$, angle $\widehat{\Omega ZZ'}=\widehat{\Omega ZY}$) donne $\Omega Z'=\Omega Y=\Omega Z$ et $\widehat{Z\Omega Z'}=2\alpha$.

3. On a $\Omega Y'=\Omega Y=\Omega Z=\Omega Z'$ : les quatre points sont à la même distance de $\Omega$, donc sur le cercle $\mathcal C$ de centre $\Omega$.

   Les trois angles au centre consécutifs $\widehat{Y'\Omega Y}$, $\widehat{Y\Omega Z}$, $\widehat{Z\Omega Z'}$ valent chacun $2\alpha$ : l'arc $Y'YZZ'$ mesure $3\times2\alpha=\boxed{6\alpha}$ (avec $6\alpha<360^\circ$).

4. Le lieu des points $A$ de l'autre côté de $(Y'Z')$ qui voient $[Y'Z']$ sous l'angle $3\alpha$ est un arc de cercle. Or les points de $\mathcal C$ situés de l'autre côté de $(Y'Z')$ que l'arc $Y'YZZ'$ voient $[Y'Z']$ sous l'angle inscrit $\tfrac12\cdot6\alpha=3\alpha$ : ce lieu est cet arc de $\mathcal C$. Donc $A\in\mathcal C$.

   Chacune des trois cordes $[Y'Y]$, $[YZ]$, $[ZZ']$ intercepte un arc de $2\alpha$ (au centre), donc est vue de $A$ sous l'angle inscrit $\tfrac12\cdot2\alpha=\alpha$ :

   $$\displaystyle \boxed{\widehat{Y'AY}=\widehat{YAZ}=\widehat{ZAZ'}=\alpha}$$

   **Contrôle :** $\alpha+\alpha+\alpha=3\alpha=\widehat{Y'AZ'}$.

:::remark[Un lemme pour Morley]

Ce lemme est l'étape clé de la preuve de Naraniengar du théorème de Morley : [exercice n°278](/lycee/3eme/mathematiques/angles-orientes#ex-0000278). Il dit qu'un angle de $3\alpha$ est partagé en trois angles égaux par les « bons » points d'un même cercle.

:::

:::intuition

Trois cordes égales, c'est trois arcs égaux ; trois arcs égaux vus de loin, c'est trois angles égaux : un tiers de l'angle total $3\alpha$.

:::

:::trap

On n'a pas le droit de conclure à $A\in\mathcal C$ juste parce que « ça a l'air vrai » : c'est la **réciproque** de l'angle inscrit (le lieu des points qui voient un segment sous un angle donné) qui permet de le dire, et elle suppose que $A$ est du bon côté de $(Y'Z')$.

:::
