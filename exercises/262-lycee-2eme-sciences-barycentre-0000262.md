---
uid: "0000262"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Barycentre de deux points"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: 4
tags: ["barycentre", "deux-points", "construction", "demonstration"]
provenance: own
dressing: "barycentre de deux points"
rung: 1
---

Soient $A$ et $B$ deux points tels que $AB=6$ cm. On note $G$ le barycentre de $(A,2)$ et $(B,1)$.

1. Montrer que $\overrightarrow{AG}=\dfrac13\overrightarrow{AB}$, puis construire $G$.  *(0,75 pt)*

2. Soit $H$ le barycentre de $(A,1)$ et $(B,2)$. Construire $H$, puis déterminer et construire l'ensemble $\Delta$ des points $M$ du plan tels que $\bigl\|2\overrightarrow{MA}+\overrightarrow{MB}\bigr\|=\bigl\|\overrightarrow{MA}+2\overrightarrow{MB}\bigr\|$.  *(1 pt)*

3. Déterminer et construire l'ensemble $\Gamma$ des points $M$ du plan tels que $\bigl\|2\overrightarrow{MA}+\overrightarrow{MB}\bigr\|=AB$.  *(0,5 pt)*

4. Soit $E$ le symétrique de $G$ par rapport à $B$. Montrer que $E$ est le barycentre de $(A,-2)$ et $(B,5)$.  *(0,75 pt)*

5. Déterminer et construire l'ensemble $\Delta'$ des points $M$ du plan tels que $\bigl\|5\overrightarrow{MB}-2\overrightarrow{MA}\bigr\|=\bigl\|2\overrightarrow{MA}+\overrightarrow{MB}\bigr\|$.  *(0,5 pt)*

6. Soit $M$ un point de $\Gamma$ et $K$ le barycentre de $(M,3)$ et $(A,1)$. Soit $\Omega$ le barycentre de $(G,3)$ et $(A,1)$. Montrer que $\overrightarrow{\Omega K}=\dfrac34\overrightarrow{GM}$, puis déterminer l'ensemble décrit par $K$ lorsque $M$ décrit $\Gamma$.  *(0,5 pt)*

---

## Solution

![Figure de la solution](/exercises/images/262-lycee-2eme-sciences-barycentre-0000262.png)

1.
   > **Barycentre de deux points.** $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$ avec $\alpha+\beta\neq0$ si et seulement si $\boxed{\alpha\overrightarrow{GA}+\beta\overrightarrow{GB}=\vec0}$.

   Ici $\alpha=2$ et $\beta=1$ (somme $3\neq0$, donc $G$ existe) :

   $$\displaystyle 2\overrightarrow{GA}+\overrightarrow{GB}=\vec0$$

   > **Relation de Chasles.** Pour tous points $A$, $B$, $G$ : $\boxed{\overrightarrow{GB}=\overrightarrow{GA}+\overrightarrow{AB}}$.

   On remplace $\overrightarrow{GB}$ par $\overrightarrow{GA}+\overrightarrow{AB}$ :

   $$\displaystyle 2\overrightarrow{GA}+\overrightarrow{GA}+\overrightarrow{AB}=\vec0$$

   $$\displaystyle 3\overrightarrow{GA}=-\overrightarrow{AB}$$

   $$\displaystyle \overrightarrow{GA}=-\dfrac13\overrightarrow{AB}$$

   Les vecteurs $\overrightarrow{AG}$ et $\overrightarrow{GA}$ sont opposés :

   $$\displaystyle \overrightarrow{AG}=\dfrac13\overrightarrow{AB}$$

   **Construction :** $G$ est sur le segment $[AB]$, à $\dfrac13\times6=2$ cm de $A$.

2. On construit d'abord $H$. Avec la même méthode, $\overrightarrow{AH}=\dfrac23\overrightarrow{AB}$ : $H$ est sur $[AB]$, à $4$ cm de $A$.

   > **Réduction d'une somme vectorielle.** Si $\alpha+\beta\neq0$ et si $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$, alors pour tout point $M$ : $\boxed{\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}=(\alpha+\beta)\overrightarrow{MG}}$.

   Avec $G$ barycentre de $(A,2),(B,1)$ et $H$ barycentre de $(A,1),(B,2)$ :

   $$\displaystyle 2\overrightarrow{MA}+\overrightarrow{MB}=3\overrightarrow{MG}\qquad\overrightarrow{MA}+2\overrightarrow{MB}=3\overrightarrow{MH}$$

   La condition devient :

   $$\displaystyle \|3\overrightarrow{MG}\|=\|3\overrightarrow{MH}\|\iff3MG=3MH\iff MG=MH$$

   > **Médiatrice.** La médiatrice d'un segment $[GH]$ est l'ensemble des points $M$ tels que $\boxed{MG=MH}$.

   **Conclusion :** $\Delta$ est la médiatrice du segment $[GH]$.

   **Remarque :** $AG=BH=2$ cm, donc $G$ et $H$ sont symétriques par rapport au milieu de $[AB]$ : $\Delta$ est aussi la médiatrice de $[AB]$ (perpendiculaire à $(AB)$ à $3$ cm de $A$).

3. D'après la question précédente, $\|2\overrightarrow{MA}+\overrightarrow{MB}\|=3MG$. La condition devient :

   $$\displaystyle 3MG=AB=6\iff MG=2$$

   > **Cercle.** Le cercle de centre $G$ et de rayon $r$ est l'ensemble des points $M$ tels que $\boxed{MG=r}$.

   **Conclusion :** $\Gamma$ est le cercle de centre $G$ et de rayon $2$ cm. Il passe par $A$ puisque $AG=2$ cm.

4.
   > **Symétrique d'un point.** $E$ est le symétrique de $G$ par rapport à $B$ si et seulement si $B$ est le milieu de $[GE]$. Alors $\boxed{\overrightarrow{EG}=2\overrightarrow{EB}}$.

   On applique la propriété de réduction avec $M=E$ :

   $$\displaystyle 2\overrightarrow{EA}+\overrightarrow{EB}=3\overrightarrow{EG}$$

   On remplace $\overrightarrow{EG}$ par $2\overrightarrow{EB}$ :

   $$\displaystyle 2\overrightarrow{EA}+\overrightarrow{EB}=6\overrightarrow{EB}$$

   $$\displaystyle 2\overrightarrow{EA}-5\overrightarrow{EB}=\vec0$$

   On multiplie par $-1$ :

   $$\displaystyle -2\overrightarrow{EA}+5\overrightarrow{EB}=\vec0$$

   > **Reconnaître un barycentre.** Si $\alpha\overrightarrow{EA}+\beta\overrightarrow{EB}=\vec0$ avec $\alpha+\beta\neq0$, alors $E$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$.

   Ici $-2+5=3\neq0$ : $E$ est le barycentre de $(A,-2)$ et $(B,5)$.

   **Contrôle :** $\overrightarrow{AE}=\dfrac{5}{-2+5}\overrightarrow{AB}=\dfrac53\overrightarrow{AB}$, donc $AE=10$ cm, ce qui correspond à la figure.

5. $E$ est le barycentre de $(A,-2),(B,5)$, de somme $3$, donc :

   $$\displaystyle 5\overrightarrow{MB}-2\overrightarrow{MA}=-2\overrightarrow{MA}+5\overrightarrow{MB}=3\overrightarrow{ME}$$

   Et $\|2\overrightarrow{MA}+\overrightarrow{MB}\|=3MG$. La condition devient :

   $$\displaystyle 3ME=3MG\iff ME=MG$$

   **Conclusion :** $\Delta'$ est la médiatrice de $[EG]$.

   Comme $B$ est le milieu de $[GE]$ et que $(GE)=(AB)$, c'est la **perpendiculaire à $(AB)$ passant par $B$**.

6.
   > **Position d'un barycentre.** Si $K$ est le barycentre de $(A,1)$ et $(M,3)$, alors $\boxed{\overrightarrow{AK}=\dfrac{3}{1+3}\overrightarrow{AM}=\dfrac34\overrightarrow{AM}}$.

   Donc $\overrightarrow{AK}=\dfrac34\overrightarrow{AM}$ et, de la même façon avec $\Omega$ barycentre de $(A,1),(G,3)$ : $\overrightarrow{A\Omega}=\dfrac34\overrightarrow{AG}$.

   On exprime $\overrightarrow{\Omega K}$ avec la relation de Chasles :

   $$\displaystyle \overrightarrow{\Omega K}=\overrightarrow{\Omega A}+\overrightarrow{AK}=-\overrightarrow{A\Omega}+\overrightarrow{AK}$$

   $$\displaystyle \overrightarrow{\Omega K}=-\dfrac34\overrightarrow{AG}+\dfrac34\overrightarrow{AM}=\dfrac34\left(\overrightarrow{AM}-\overrightarrow{AG}\right)$$

   Or $\overrightarrow{AM}-\overrightarrow{AG}=\overrightarrow{GM}$, donc :

   $$\displaystyle \overrightarrow{\Omega K}=\dfrac34\overrightarrow{GM}$$

   En prenant les longueurs, avec $GM=2$ car $M\in\Gamma$ :

   $$\displaystyle \Omega K=\dfrac34\times GM=\dfrac34\times2=\dfrac32$$

   **Conclusion :** $K$ reste à la distance $1{,}5$ cm de $\Omega$ : il décrit le cercle de centre $\Omega$ et de rayon $1{,}5$ cm (c'est l'image de $\Gamma$ par l'homothétie de centre $A$ et de rapport $\dfrac34$).

**Idée :** avec une somme de coefficients non nulle, $\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}=(\alpha+\beta)\overrightarrow{MG}$ : tous les ensembles de points se ramènent à $MG=$ constante (cercle) ou $MG=MH$ (médiatrice).
