---
uid: "0000232"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Deux cercles tangents et une sécante"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "cercles-tangents", "tangente", "calcul-de-longueurs"]
provenance: own
dressing: "deux cercles tangents et une sécante"
rung: 3
---

Deux cercles $\mathcal C_1$ (de centre $O_1$ et de rayon $6$) et $\mathcal C_2$ (de centre $O_2$ et de rayon $2$) sont tangents extérieurement en $A$. Une droite $d$ passant par $A$, distincte de $(O_1O_2)$, recoupe $\mathcal C_1$ en $M$ et $\mathcal C_2$ en $N$ ; on admet que $A$ est entre $M$ et $N$.

![Figure de l'énoncé](/exercises/images/232-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000232.png)

1. Montrer que $(O_1M)\parallel(O_2N)$. [Observer les triangles isocèles $O_1AM$ et $O_2AN$.]

2. En déduire que $\dfrac{AM}{AN}=\dfrac{AO_1}{AO_2}=3$. Calculer $AM$ et $AN$ lorsque $MN=12$.

3. Montrer que la tangente à $\mathcal C_1$ en $M$ et la tangente à $\mathcal C_2$ en $N$ sont parallèles.

4. Quelle est la plus grande valeur possible de $MN$ ? Pour quelle droite $d$ est-elle atteinte ? (On autorise ici $d=(O_1O_2)$.)

5. Les cercles sont maintenant tangents *intérieurement* en $A$ ($\mathcal C_2$ à l'intérieur de $\mathcal C_1$), et $d$ recoupe $\mathcal C_1$ en $M$ et $\mathcal C_2$ en $N$. Montrer que $(O_1M)\parallel(O_2N)$ et calculer $\dfrac{AN}{AM}$.

---

## Solution

> **Rappels.** Les rayons d'un cercle sont égaux : un triangle formé de deux rayons est **isocèle** (ses angles à la base sont égaux).
>
> Des angles **opposés par le sommet** sont égaux. Si deux angles *alternes-internes* (ou correspondants) sont égaux, les deux droites sont parallèles.

1. Le triangle $O_1AM$ est isocèle en $O_1$ (car $O_1A=O_1M$) :

   $$\displaystyle \widehat{O_1MA}=\widehat{O_1AM}$$

   Le triangle $O_2AN$ est isocèle en $O_2$ (car $O_2A=O_2N$) :

   $$\displaystyle \widehat{O_2NA}=\widehat{O_2AN}$$

   Les points $O_1,A,O_2$ sont alignés avec $A$ entre $O_1$ et $O_2$, et les points $M,A,N$ aussi avec $A$ entre $M$ et $N$ : les angles $\widehat{O_1AM}$ et $\widehat{O_2AN}$ sont **opposés par le sommet**, donc égaux.

   On en déduit $\widehat{O_1MA}=\widehat{O_2NA}$. Ce sont des angles alternes-internes pour les droites $(O_1M)$ et $(O_2N)$ et la sécante $(MN)$ : $\boxed{(O_1M)\parallel(O_2N)}$.

2. Triangles $AO_1M$ et $AO_2N$ de sommet $A$, avec $(O_1M)\parallel(O_2N)$ :

   $$\displaystyle \dfrac{AO_1}{AO_2}=\dfrac{AM}{AN}=\dfrac{O_1M}{O_2N}\qquad\text{donc}\qquad\dfrac{AM}{AN}=\dfrac{AO_1}{AO_2}=\dfrac62=3$$

   Avec $AM+AN=MN=12$ et $AM=3\,AN$ :

   $$\displaystyle 4\,AN=12\implies AN=3\qquad AM=9$$

3. La tangente à un cercle en un point est perpendiculaire au rayon en ce point.

   La tangente en $M$ est perpendiculaire à $(O_1M)$, celle en $N$ est perpendiculaire à $(O_2N)$.

   Comme $(O_1M)\parallel(O_2N)$, les deux tangentes sont perpendiculaires à deux droites parallèles : elles sont **parallèles**.

4. D'après 2), $AN=\dfrac13\,AM$, donc :

   $$\displaystyle MN=AM+AN=\dfrac43\,AM$$

   $[AM]$ est une corde du cercle $\mathcal C_1$ de rayon $6$ : elle est plus courte que le diamètre, $AM\leq12$. Donc :

   $$\displaystyle MN\leq\dfrac43\times12=16$$

   L'égalité a lieu si et seulement si $[AM]$ est un diamètre, c'est-à-dire pour $d=(O_1O_2)$ : $AM=12$, $AN=4$, $MN=\boxed{16}$.

5. Cette fois $O_2$ est sur $[AO_1]$ et $N$ est sur $[AM]$ : les angles $\widehat{O_1AM}$ et $\widehat{O_2AN}$ sont **le même angle**.

   Les triangles isocèles $O_1AM$ et $O_2AN$ ont donc le même angle en $A$, donc les mêmes angles à la base :

   $$\displaystyle \widehat{O_1MA}=\widehat{O_2NA}$$

   Ce sont des angles correspondants (sécante $(AM)$) : $(O_2N)\parallel(O_1M)$.

   Thalès de sommet $A$ dans le triangle $AO_1M$ (avec $O_2\in[AO_1]$, $N\in[AM]$) :

   $$\displaystyle \dfrac{AO_2}{AO_1}=\dfrac{AN}{AM}=\dfrac{O_2N}{O_1M}\qquad\text{donc}\qquad\dfrac{AN}{AM}=\dfrac{AO_2}{AO_1}=\dfrac26=\boxed{\dfrac13}$$

**Idée :** deux triangles isocèles de même angle au sommet ont des bases parallèles, et Thalès donne le rapport des rayons.    **Piège :** oublier que les angles en $A$ sont opposés par le sommet (tangence extérieure) ou confondus (tangence intérieure).
