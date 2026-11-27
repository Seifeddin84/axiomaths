---
uid: "0000228"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Câbles croisés"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "probleme-concret", "hauteur", "calcul-de-longueurs"]
provenance: own
dressing: "câbles croisés entre deux poteaux"
rung: 3
---

Deux poteaux verticaux $[AA']$ et $[BB']$, de hauteurs $12$ m et $4$ m, sont plantés sur un sol horizontal, avec $A'B'=8$ m. Un câble relie $A$ à $B'$, un autre relie $B$ à $A'$ ; ils se croisent en $P$. Soit $H$ le projeté orthogonal de $P$ sur $[A'B']$.

![Figure de l'énoncé](/exercises/images/228-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000228.png)

1. Pourquoi a-t-on $(PH)\parallel(AA')\parallel(BB')$ ?

2. Dans le triangle $A'BB'$, puis dans le triangle $B'AA'$, écrire le théorème de Thalès faisant intervenir $PH$ : $\dfrac{A'H}{A'B'}=\dfrac{PH}{BB'}$ et $\dfrac{B'H}{B'A'}=\dfrac{PH}{AA'}$.

3. Additionner ces deux égalités pour montrer que $\dfrac1{PH}=\dfrac1{AA'}+\dfrac1{BB'}$. En déduire $PH$, puis $A'H$ et $B'H$.

4. Montrer que $PH$ ne dépend pas de la distance $A'B'$. Quelle hauteur obtient-on si les deux poteaux ont la même hauteur $h$ ?

5. Les poteaux mesurent $12$ m et $x$ m ; les câbles se croisent à $4{,}5$ m du sol. Déterminer $x$.

---

## Solution

> **Thalès.** Dans un triangle $XYZ$, si $U\in[XY]$, $V\in[XZ]$ et $(UV)\parallel(YZ)$, on part du sommet $X$ : $\boxed{\dfrac{XU}{XY}=\dfrac{XV}{XZ}=\dfrac{UV}{YZ}}$.

1. Les poteaux $[AA']$ et $[BB']$ sont perpendiculaires au sol, et $(PH)$ aussi puisque $H$ est le projeté orthogonal de $P$ sur $[A'B']$.

   Trois droites perpendiculaires à la même droite $(A'B')$ sont parallèles entre elles : $(PH)\parallel(AA')\parallel(BB')$.

2. **Triangle $A'BB'$ :** $H\in[A'B']$, $P\in[A'B]$ et $(PH)\parallel(BB')$. Thalès de sommet $A'$ :

   $$\displaystyle \dfrac{A'H}{A'B'}=\dfrac{A'P}{A'B}=\dfrac{PH}{BB'}$$

   **Triangle $B'AA'$ :** $H\in[B'A']$, $P\in[B'A]$ et $(PH)\parallel(AA')$. Thalès de sommet $B'$ :

   $$\displaystyle \dfrac{B'H}{B'A'}=\dfrac{B'P}{B'A}=\dfrac{PH}{AA'}$$

3. On additionne les deux égalités. Comme $A'H+B'H=A'B'$ :

   $$\displaystyle \dfrac{A'H+B'H}{A'B'}=\dfrac{A'B'}{A'B'}=1=PH\left(\dfrac1{BB'}+\dfrac1{AA'}\right)$$

   $$\displaystyle \boxed{\dfrac1{PH}=\dfrac1{AA'}+\dfrac1{BB'}}$$

   Avec $AA'=12$ et $BB'=4$ :

   $$\displaystyle \dfrac1{PH}=\dfrac1{12}+\dfrac14=\dfrac1{12}+\dfrac3{12}=\dfrac4{12}=\dfrac13\implies PH=3\text{ m}$$

   On revient à la première égalité de Thalès :

   $$\displaystyle \dfrac{A'H}8=\dfrac3{4}\implies A'H=6\text{ m}\qquad\dfrac{B'H}8=\dfrac3{12}\implies B'H=2\text{ m}$$

   Contrôle : $6+2=8=A'B'$.

4. La longueur $A'B'$ a disparu de la relation de la question 3 : elle **n'influence pas** $PH$.

   Si $AA'=BB'=h$ :

   $$\displaystyle \dfrac1{PH}=\dfrac1h+\dfrac1h=\dfrac2h\implies PH=\dfrac h2$$

5. Ici $AA'=12$, $BB'=x$ et $PH=4{,}5$ :

   $$\displaystyle \dfrac1x=\dfrac1{PH}-\dfrac1{AA'}=\dfrac1{4{,}5}-\dfrac1{12}=\dfrac29-\dfrac1{12}=\dfrac8{36}-\dfrac3{36}=\dfrac5{36}$$

   $$\displaystyle x=\dfrac{36}5=7{,}2\text{ m}$$

**Idée :** additionner les deux égalités de Thalès fait disparaître $A'B'$.    **Piège :** prendre pour $PH$ la moyenne des deux hauteurs.
