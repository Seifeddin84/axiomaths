---
uid: "0000263"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Du barycentre de deux points à celui de trois points"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: 4
tags: ["barycentre", "triangle-rectangle", "calcul-de-longueurs"]
provenance: own
dressing: "de deux à trois points pondérés"
rung: 2
---

Soit $ABC$ un triangle rectangle en $B$ tel que $AB=3$ cm et $BC=2$ cm. On note $I$ le barycentre de $(B,5)$ et $(C,-3)$, et $G$ le barycentre de $(A,4)$, $(B,5)$ et $(C,-3)$.

1. Montrer que $\overrightarrow{BI}=-\dfrac32\overrightarrow{BC}$, puis placer $I$.  *(0,5 pt)*

2. Montrer que $G$ est le barycentre de $(A,4)$ et $(I,2)$, puis construire $G$.  *(0,75 pt)*

3. Déterminer et construire l'ensemble $\Delta$ des points $M$ du plan tels que $\bigl\|4\overrightarrow{MA}+5\overrightarrow{MB}-3\overrightarrow{MC}\bigr\|=6MB$.  *(0,75 pt)*

4. Soit $J$ le symétrique de $B$ par rapport à $G$. Montrer que $J$ est le barycentre de $(A,4)$, $(B,2)$ et $(C,-3)$.  *(0,75 pt)*

5. Déterminer et construire l'ensemble $\Gamma$ des points $M$ du plan tels que $\bigl\|4\overrightarrow{MA}+2\overrightarrow{MB}-3\overrightarrow{MC}\bigr\|=6$.  *(0,5 pt)*

6. Soit $M$ un point de $\Gamma$ et $K$ le barycentre de $(M,4)$ et $(G,-6)$. Soit $\Omega$ le barycentre de $(J,4)$ et $(G,-6)$. Montrer que $\overrightarrow{\Omega K}=-2\overrightarrow{JM}$, puis déterminer l'ensemble décrit par $K$ lorsque $M$ décrit $\Gamma$.  *(0,75 pt)*

---

## Solution

![Figure de la solution](/exercises/images/263-lycee-2eme-sciences-barycentre-0000263.png)

1.
   > **Barycentre de deux points.** $I$ est le barycentre de $(B,\alpha)$ et $(C,\beta)$ avec $\alpha+\beta\neq0$ si et seulement si $\boxed{\alpha\overrightarrow{IB}+\beta\overrightarrow{IC}=\vec0}$.

   Ici $5+(-3)=2\neq0$, donc $I$ existe, et :

   $$\displaystyle 5\overrightarrow{IB}-3\overrightarrow{IC}=\vec0$$

   > **Relation de Chasles.** $\boxed{\overrightarrow{IC}=\overrightarrow{IB}+\overrightarrow{BC}}$.

   $$\displaystyle 5\overrightarrow{IB}-3\left(\overrightarrow{IB}+\overrightarrow{BC}\right)=\vec0$$

   $$\displaystyle 2\overrightarrow{IB}-3\overrightarrow{BC}=\vec0$$

   $$\displaystyle \overrightarrow{IB}=\dfrac32\overrightarrow{BC}$$

   Les vecteurs $\overrightarrow{BI}$ et $\overrightarrow{IB}$ sont opposés :

   $$\displaystyle \overrightarrow{BI}=-\dfrac32\overrightarrow{BC}$$

   **Placement :** $BI=\dfrac32\times2=3$ cm ; le signe $-$ signifie que $I$ est sur $(BC)$ *du côté opposé à $C$* par rapport à $B$.

2.
   > **Réduction d'une somme vectorielle.** Si $\alpha+\beta\neq0$ et si $I$ est le barycentre de $(B,\alpha)$ et $(C,\beta)$, alors pour tout point $M$ : $\boxed{\alpha\overrightarrow{MB}+\beta\overrightarrow{MC}=(\alpha+\beta)\overrightarrow{MI}}$.

   Ici, pour tout point $M$ : $5\overrightarrow{MB}-3\overrightarrow{MC}=2\overrightarrow{MI}$.

   $G$ est le barycentre de $(A,4),(B,5),(C,-3)$ (somme $6\neq0$), donc :

   $$\displaystyle 4\overrightarrow{GA}+5\overrightarrow{GB}-3\overrightarrow{GC}=\vec0$$

   On remplace $5\overrightarrow{GB}-3\overrightarrow{GC}$ par $2\overrightarrow{GI}$ :

   $$\displaystyle 4\overrightarrow{GA}+2\overrightarrow{GI}=\vec0$$

   La somme $4+2=6$ est non nulle : $G$ est le barycentre de $(A,4)$ et $(I,2)$.

   On en déduit la position de $G$ :

   $$\displaystyle \overrightarrow{AG}=\dfrac{2}{4+2}\overrightarrow{AI}=\dfrac13\overrightarrow{AI}$$

   **Construction :** on trace $[AI]$ et on place $G$ au tiers de $[AI]$, en partant de $A$.

3. La somme des coefficients est $4+5-3=6\neq0$, donc d'après la propriété de réduction, pour tout point $M$ :

   $$\displaystyle 4\overrightarrow{MA}+5\overrightarrow{MB}-3\overrightarrow{MC}=6\overrightarrow{MG}$$

   La condition devient :

   $$\displaystyle \|6\overrightarrow{MG}\|=6MB\iff6MG=6MB\iff MG=MB$$

   > **Médiatrice.** La médiatrice de $[BG]$ est l'ensemble des points $M$ tels que $\boxed{MB=MG}$.

   **Conclusion :** $\Delta$ est la médiatrice du segment $[BG]$.

   **Construction :** on trace $[BG]$, on place son milieu, puis la perpendiculaire à $(BG)$ en ce milieu.

4.
   > **Symétrique d'un point.** $J$ est le symétrique de $B$ par rapport à $G$ si et seulement si $G$ est le milieu de $[BJ]$. Alors $\boxed{\overrightarrow{JB}=2\overrightarrow{JG}}$.

   On applique la propriété de réduction avec $M=J$ (somme $6$) :

   $$\displaystyle 4\overrightarrow{JA}+5\overrightarrow{JB}-3\overrightarrow{JC}=6\overrightarrow{JG}$$

   On écrit $6\overrightarrow{JG}=3\times2\overrightarrow{JG}=3\overrightarrow{JB}$ :

   $$\displaystyle 4\overrightarrow{JA}+5\overrightarrow{JB}-3\overrightarrow{JC}=3\overrightarrow{JB}$$

   On passe $3\overrightarrow{JB}$ à gauche :

   $$\displaystyle 4\overrightarrow{JA}+2\overrightarrow{JB}-3\overrightarrow{JC}=\vec0$$

   La somme $4+2-3=3$ est non nulle : $J$ est le barycentre de $(A,4),(B,2),(C,-3)$.

5. La somme des coefficients est maintenant $4+2-3=3\neq0$ : pour tout point $M$,

   $$\displaystyle 4\overrightarrow{MA}+2\overrightarrow{MB}-3\overrightarrow{MC}=3\overrightarrow{MJ}$$

   La condition devient :

   $$\displaystyle 3MJ=6\iff MJ=2$$

   > **Cercle.** Le cercle de centre $J$ et de rayon $r$ est l'ensemble des points $M$ tels que $\boxed{MJ=r}$.

   **Conclusion :** $\Gamma$ est le cercle de centre $J$ et de rayon $2$ cm.

6. $K$ est le barycentre de $(M,4)$ et $(G,-6)$ (somme $-2\neq0$) :

   $$\displaystyle 4\overrightarrow{KM}-6\overrightarrow{KG}=\vec0$$

   On utilise Chasles, $\overrightarrow{KM}=\overrightarrow{KG}+\overrightarrow{GM}$ :

   $$\displaystyle 4\overrightarrow{KG}+4\overrightarrow{GM}-6\overrightarrow{KG}=\vec0$$

   $$\displaystyle -2\overrightarrow{KG}+4\overrightarrow{GM}=\vec0$$

   $$\displaystyle \overrightarrow{KG}=2\overrightarrow{GM}\quad\text{donc}\quad\overrightarrow{GK}=-2\overrightarrow{GM}$$

   De la même façon, $\Omega$ est le barycentre de $(J,4)$ et $(G,-6)$, donc $\overrightarrow{G\Omega}=-2\overrightarrow{GJ}$.

   On calcule $\overrightarrow{\Omega K}$ avec Chasles :

   $$\displaystyle \overrightarrow{\Omega K}=\overrightarrow{\Omega G}+\overrightarrow{GK}=-\overrightarrow{G\Omega}+\overrightarrow{GK}$$

   $$\displaystyle \overrightarrow{\Omega K}=2\overrightarrow{GJ}-2\overrightarrow{GM}=-2\left(\overrightarrow{GM}-\overrightarrow{GJ}\right)$$

   Or $\overrightarrow{GM}-\overrightarrow{GJ}=\overrightarrow{JM}$, donc :

   $$\displaystyle \overrightarrow{\Omega K}=-2\overrightarrow{JM}$$

   En prenant les longueurs, avec $JM=2$ car $M\in\Gamma$ :

   $$\displaystyle \Omega K=2\times JM=2\times2=4$$

   **Conclusion :** $K$ reste à la distance $4$ cm de $\Omega$ : il décrit le cercle de centre $\Omega$ et de rayon $4$ cm (c'est l'image de $\Gamma$ par l'homothétie de centre $G$ et de rapport $-2$).

**Idée :** le barycentre partiel $5\overrightarrow{MB}-3\overrightarrow{MC}=2\overrightarrow{MI}$ ramène les trois points à deux. **Piège :** la somme des coefficients vaut $6$ pour $G$, mais $3$ pour $J$.
