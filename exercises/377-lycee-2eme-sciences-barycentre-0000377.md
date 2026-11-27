---
uid: "0000377"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Synthèse : ensembles de points dans un rectangle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "ensembles-de-points", "rectangle", "lieu-geometrique", "cercle"]
provenance: "own"
dressing: "synthèse : ensembles de points dans un rectangle"
rung: 3
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $ABCD$ un rectangle tel que $AB=6$ cm et $AD=4$ cm. On note $I$ le milieu de $[AB]$ et $J$ le milieu de $[CD]$.

1. Montrer que $D$ est le barycentre de $(A,1)$, $(B,-1)$ et $(C,1)$.

2. Déterminer et construire l'ensemble $E_1$ des points $M$ tels que $\bigl\|\overrightarrow{MA}+\overrightarrow{MB}\bigr\|=\bigl\|\overrightarrow{MC}+\overrightarrow{MD}\bigr\|$.

3. Soit $G$ le barycentre de $(A,1)$, $(B,1)$ et $(C,2)$.

   a. Montrer que $G$ est le milieu de $[IC]$ et que $G\in E_1$.

   b. Déterminer et construire l'ensemble $E_2$ des points $M$ tels que $\bigl\|\overrightarrow{MA}+\overrightarrow{MB}+2\overrightarrow{MC}\bigr\|=8$.

   c. Construire les points communs à $E_1$ et $E_2$.

4. Déterminer l'ensemble $E_3$ des points $M$ tels que $\bigl\|\overrightarrow{MA}-\overrightarrow{MB}+\overrightarrow{MC}\bigr\|=AC$. Vérifier que $B\in E_3$.

---

## Solution

![Rectangle ABCD, I et J milieux de [AB] et [CD], droite E1 à mi-hauteur, cercle E2 de centre G, grand cercle E3 de centre D passant par B.](/exercises/images/377-lycee-2eme-sciences-barycentre-0000377.png)

1.
   :::property[Parallélogramme]
   $ABCD$ est un parallélogramme si et seulement si $\boxed{\overrightarrow{DA}+\overrightarrow{DC}=\overrightarrow{DB}}$.
   :::

   Un rectangle est un parallélogramme, donc :

   $$\displaystyle \overrightarrow{DA}-\overrightarrow{DB}+\overrightarrow{DC}=\overrightarrow{DB}-\overrightarrow{DB}=\vec0$$

   La somme $1-1+1=1\neq0$ : $D$ est le barycentre de $(A,1)$, $(B,-1)$, $(C,1)$.

2.
   :::property[Milieu]
   Si $I$ est le milieu de $[AB]$ : $\boxed{\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}}$ pour tout point $M$.
   :::

   De même $\overrightarrow{MC}+\overrightarrow{MD}=2\overrightarrow{MJ}$. La condition devient

   $$\displaystyle 2MI=2MJ\iff MI=MJ$$

   $E_1$ est la **médiatrice de $[IJ]$** : la droite parallèle à $(AB)$ qui passe par les milieux de $[AD]$ et de $[BC]$.

3.
   a. On remplace $(A,1)$ et $(B,1)$ par leur barycentre $(I,2)$ : $G$ est le barycentre de $(I,2)$ et $(C,2)$, c'est le milieu de $[IC]$.

      Pour montrer que $G\in E_1$, on se place dans le repère orthonormé d'origine $A$, d'unité $1$ cm, avec $B(6\,;0)$ et $D(0\,;4)$ :

      $$\displaystyle I(3\,;0)\qquad J(3\,;4)\qquad C(6\,;4)\qquad G\left(\dfrac{3+6}{2}\,;\dfrac{0+4}{2}\right)=\left(\dfrac92\,;2\right)$$

      La médiatrice de $[IJ]$ est la droite d'équation $y=2$ ; comme $y_G=2$, on a bien $G\in E_1$.

   b.
      :::property[Réduction d'une somme vectorielle]
      Si $\alpha+\beta+\gamma\neq0$ et $G$ est le barycentre de $(A,\alpha),(B,\beta),(C,\gamma)$ : $\boxed{\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}+\gamma\overrightarrow{MC}=(\alpha+\beta+\gamma)\overrightarrow{MG}}$.
      :::

      Ici $1+1+2=4$ : la condition devient $4MG=8$, soit $MG=2$.

      $E_2$ est le **cercle de centre $G$ et de rayon $2$ cm**.

   c. $G$ est sur la droite $E_1$ : la droite coupe le cercle $E_2$ en deux points, situés sur $E_1$ à $2$ cm de part et d'autre de $G$, c'est-à-dire $\left(\dfrac52\,;2\right)$ et $\left(\dfrac{13}{2}\,;2\right)$ dans le repère précédent.

4. D'après 1), la somme vaut $1$ et $\overrightarrow{MA}-\overrightarrow{MB}+\overrightarrow{MC}=\overrightarrow{MD}$. La condition devient $MD=AC$.

   $E_3$ est le **cercle de centre $D$ et de rayon $AC$**, avec $AC=\sqrt{6^2+4^2}=\sqrt{52}=2\sqrt{13}$ cm.

   Les diagonales d'un rectangle ont la même longueur : $DB=AC$, donc $B\in E_3$.

:::intuition
Chaque somme se réduit à un seul vecteur $k\overrightarrow{MP}$ ; on obtient une médiatrice ($MP=MQ$) ou un cercle ($MP=r$).
:::

:::trap
Pour $E_3$, le barycentre est le sommet $D$ lui-même, que l'on reconnaît grâce au parallélogramme.
:::
