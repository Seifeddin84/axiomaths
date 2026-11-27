---
uid: "0000226"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa Réciproque"
source: "Axiomaths"
title: "L'ombre du lampadaire"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["thales", "probleme-concret", "calcul-de-longueurs", "proportionnalite"]
provenance: own
dressing: "situation réelle : l'ombre d'un lampadaire"
rung: 2
---

Un lampadaire $[OL]$ de $5$ m de haut est planté verticalement sur un sol horizontal. Une personne de taille $1{,}8$ m, représentée par le segment vertical $[PQ]$ ($P$ au sol), se tient à la distance $OP=d$ du pied du lampadaire. L'extrémité de son ombre est le point $T$ du sol où la droite $(LQ)$ rencontre le sol ($P\in[OT]$).

![Figure de l'énoncé](/exercises/images/226-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000226.png)

1. Justifier que $(PQ)\parallel(OL)$ et écrire, dans le triangle $TOL$, l'égalité de Thalès faisant intervenir $TP$ et $TO$.

2. Pour $d=4{,}8$ m, calculer la longueur $PT$ de l'ombre, puis la distance $OT$.

3. Montrer que, pour tout $d>0$, $PT=\dfrac9{16}\,d$ et $OT=\dfrac{25}{16}\,d$.

4. La personne part du pied du lampadaire et s'éloigne en ligne droite à la vitesse de $1{,}2$ m/s. Montrer que le point $T$ se déplace à vitesse constante et la calculer.

5. À quelle distance $d$ du lampadaire la longueur de l'ombre est-elle égale à la taille de la personne ?

---

## Solution

> **Thalès.** Dans le triangle $TOL$, si $P\in[TO]$, $Q\in[TL]$ et $(PQ)\parallel(OL)$, alors $\boxed{\dfrac{TP}{TO}=\dfrac{TQ}{TL}=\dfrac{PQ}{OL}}$.

1. Le lampadaire et la personne sont tous les deux perpendiculaires au sol. Deux droites perpendiculaires à une même droite sont parallèles : $(PQ)\parallel(OL)$.

   Dans le triangle $TOL$, on a $P\in[TO]$, $Q\in[TL]$ et $(PQ)\parallel(OL)$. D'après Thalès :

   $$\displaystyle \dfrac{TP}{TO}=\dfrac{PQ}{OL}=\dfrac{1{,}8}5=\dfrac9{25}$$

2. On a $TO=TP+PO=TP+4{,}8$. On remplace dans l'égalité (produit en croix) :

   $$\displaystyle 25\,TP=9\,(TP+4{,}8)$$

   $$\displaystyle 25\,TP-9\,TP=43{,}2\implies16\,TP=43{,}2\implies PT=2{,}7\text{ m}$$

   $$\displaystyle OT=PT+PO=2{,}7+4{,}8=7{,}5\text{ m}$$

3. Même calcul avec $PO=d$ :

   $$\displaystyle 25\,TP=9\,(TP+d)\implies16\,TP=9d$$

   $$\displaystyle \boxed{PT=\dfrac9{16}\,d}\qquad OT=d+\dfrac9{16}\,d=\boxed{\dfrac{25}{16}\,d}$$

4. Après $t$ secondes, la personne a parcouru $d=1{,}2\,t$ mètres. Alors :

   $$\displaystyle OT=\dfrac{25}{16}\times1{,}2\,t=1{,}875\,t$$

   La distance $OT$ est proportionnelle au temps : $T$ avance de $1{,}875$ m chaque seconde.

   Le mouvement est donc uniforme, à la vitesse de $**$1{,}875$m/s**$ (plus vite que la personne : le rapport est $\dfrac{25}{16}$).

5. La longueur de l'ombre est $PT$ :

   $$\displaystyle PT=1{,}8\iff\dfrac9{16}\,d=1{,}8\iff d=1{,}8\times\dfrac{16}9=3{,}2\text{ m}$$

**Idée :** $TP$ et $TO$ se lisent dans le même triangle $TOL$, avec $TO=TP+d$.    **Piège :** écrire $\dfrac{TP}{PO}=\dfrac{PQ}{OL}$ : le rapport de Thalès porte sur $\dfrac{TP}{TO}$, pas sur $\dfrac{TP}{PO}$.
