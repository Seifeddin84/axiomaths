---
uid: "0000235"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Partager un triangle par des parallèles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "aires", "parametre", "proportionnalite"]
provenance: own
dressing: "partager un triangle par des parallèles"
rung: 3
---

Soit $ABC$ un triangle d'aire $\mathcal S$ et $h$ sa hauteur issue de $A$. Pour $0<k<1$, on note $M$ le point de $[AB]$ tel que $AM=k\,AB$ et $N$ le point de $[AC]$ tel que $(MN)\parallel(BC)$.

![Figure de l'énoncé](/exercises/images/235-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000235.png)

1. Montrer que $MN=k\,BC$ et que la hauteur du triangle $AMN$ issue de $A$ vaut $k\,h$. En déduire que aire$(AMN)=k^2\,\mathcal S$.

2. Vérifier que la droite des milieux ($k=\dfrac12$) découpe un triangle d'aire $\dfrac14\mathcal S$.

3. Pour quelle valeur de $k$ la droite $(MN)$ partage-t-elle le triangle en deux parties de même aire ? Calculer $AM$ pour $AB=12$ (valeur exacte puis arrondie au dixième).

4. On veut partager $ABC$ en trois parties de même aire par deux droites $(M_1N_1)$ et $(M_2N_2)$ parallèles à $(BC)$. Déterminer les rapports $k_1$ et $k_2$, puis calculer $AM_1$ et $AM_2$ pour $AB=12$.

---

## Solution

> **Rapport de réduction.** Si on réduit un triangle dans le rapport $k$ (par Thalès), **les longueurs sont multipliées par $k$ et l'aire par $k^2$**.

1. Thalès de sommet $A$ dans le triangle $ABC$, avec $(MN)\parallel(BC)$ :

   $$\displaystyle \dfrac{MN}{BC}=\dfrac{AM}{AB}=k\implies MN=k\,BC$$

   Soit $H$ le pied de la hauteur issue de $A$ et $K=(AH)\cap(MN)$. Comme $(MN)\parallel(BC)$ et $(AH)\perp(BC)$, on a $(AK)\perp(MN)$ : $[AK]$ est la hauteur de $AMN$.

   Thalès de sommet $A$ dans le triangle $ABH$ :

   $$\displaystyle \dfrac{AK}{AH}=\dfrac{AM}{AB}=k\implies AK=k\,h$$

   On calcule l'aire :

   $$\displaystyle \text{aire}(AMN)=\dfrac12\times MN\times AK=\dfrac12\times(k\,BC)\times(k\,h)=k^2\times\dfrac12\,BC\times h=\boxed{k^2\,\mathcal S}$$

2. Pour $k=\dfrac12$ (droite des milieux) :

   $$\displaystyle k^2=\dfrac14\implies\text{aire}(AMN)=\dfrac14\,\mathcal S$$

   Les quatre petits triangles de la figure « droite des milieux » ont la même aire $\dfrac14\mathcal S$.

3. Les deux parties ont la même aire si l'aire du triangle $AMN$ vaut $\dfrac12\,\mathcal S$ :

   $$\displaystyle k^2=\dfrac12\implies k=\dfrac1{\sqrt2}=\boxed{\dfrac{\sqrt2}2}$$

   Pour $AB=12$ :

   $$\displaystyle AM=k\times12=\dfrac{\sqrt2}2\times12=6\sqrt2\approx8{,}5$$

4. **Première droite :** le triangle $AM_1N_1$ doit avoir l'aire $\dfrac13\,\mathcal S$.

   $$\displaystyle k_1^2=\dfrac13\implies k_1=\dfrac1{\sqrt3}=\dfrac{\sqrt3}3\qquad AM_1=12\times\dfrac{\sqrt3}3=4\sqrt3\approx6{,}9$$

   **Deuxième droite :** le triangle $AM_2N_2$ doit avoir l'aire $\dfrac23\,\mathcal S$.

   $$\displaystyle k_2^2=\dfrac23\implies k_2=\sqrt{\dfrac23}=\dfrac{\sqrt6}3\qquad AM_2=12\times\dfrac{\sqrt6}3=4\sqrt6\approx9{,}8$$

   Contrôle : $6{,}9<8{,}5<9{,}8<12$, c'est-à-dire $AM_1<AM<AM_2<AB$.

**Idée :** réduire un triangle dans le rapport $k$ multiplie son aire par $k^2$ (base et hauteur sont multipliées par $k$).    **Piège :** croire que la droite des milieux partage l'aire en deux, ou prendre $k=\dfrac13$ et $\dfrac23$ pour obtenir trois parts égales.
