---
uid: "0000436"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Le triangle des milieux et les translations"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "triangle", "milieux", "parallelogramme", "triangles-superposables"]
recommended: true
provenance: own
dressing: "découper un triangle avec les milieux de ses côtés"
rung: 3
---
Soit $ABC$ un triangle. On note $I$, $J$ et $K$ les milieux respectifs de $[BC]$, $[CA]$ et $[AB]$.

![Triangle ABC et les milieux I, J, K de ses côtés](/exercises/images/436-lycee-2eme-sciences-translations-0000436.png)

1. Montrer que $\overrightarrow{AK} = \overrightarrow{JI}$.

2. On considère la translation $t_{\overrightarrow{AK}}$.

   a. Déterminer les images de $A$, de $K$ et de $J$.

   b. En déduire que le triangle $KBI$ est l'image du triangle $AKJ$.

3. Montrer de même que $\overrightarrow{AJ} = \overrightarrow{KI}$, puis que le triangle $JIC$ est l'image du triangle $AKJ$ par la translation $t_{\overrightarrow{AJ}}$.

4. Déduire des questions précédentes que $KJ = BI = IC$ et que $(KJ)$ est parallèle à $(BC)$.

5. Montrer que $AKIJ$ est un parallélogramme.

---

## Solution

:::property[Outils]
- $K$ milieu de $[AB] \iff \overrightarrow{AK} = \overrightarrow{KB} = \dfrac{1}{2}\overrightarrow{AB}$.
- $M' = t_{\vec{u}}(M) \iff \overrightarrow{MM'} = \vec{u}$.
- Une translation conserve les distances et envoie une droite sur une parallèle.
- **Chasles** : $\overrightarrow{XY} + \overrightarrow{YZ} = \overrightarrow{XZ}$.
:::

1. On passe de $J$ à $I$ en passant par $C$ : $\overrightarrow{JI} = \overrightarrow{JC} + \overrightarrow{CI}$.

   $J$ est le milieu de $[CA]$ donc $\overrightarrow{JC} = \dfrac{1}{2}\overrightarrow{AC}$. $I$ est le milieu de $[BC]$ donc $\overrightarrow{CI} = \dfrac{1}{2}\overrightarrow{CB}$.

   $$\overrightarrow{JI} = \frac{1}{2}\left(\overrightarrow{AC} + \overrightarrow{CB}\right) = \frac{1}{2}\overrightarrow{AB} = \overrightarrow{AK}$$

2. a. $t_{\overrightarrow{AK}}(A) = K$ car $\overrightarrow{AK} = \overrightarrow{AK}$.

   $t_{\overrightarrow{AK}}(K) = B$ car $\overrightarrow{KB} = \overrightarrow{AK}$ ($K$ est le milieu de $[AB]$).

   $t_{\overrightarrow{AK}}(J) = I$ car $\overrightarrow{JI} = \overrightarrow{AK}$ (question 1).

   b. L'image du triangle $AKJ$ est le triangle formé des images de ses sommets : $K$, $B$, $I$. C'est le triangle $KBI$.

3. $\overrightarrow{KI} = \overrightarrow{KB} + \overrightarrow{BI} = \dfrac{1}{2}\overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{BC} = \dfrac{1}{2}\overrightarrow{AC} = \overrightarrow{AJ}$.

   Par $t_{\overrightarrow{AJ}}$ : $A \mapsto J$ (car $\overrightarrow{AJ} = \overrightarrow{AJ}$) ; $K \mapsto I$ (car $\overrightarrow{KI} = \overrightarrow{AJ}$) ; $J \mapsto C$ (car $\overrightarrow{JC} = \overrightarrow{AJ}$, $J$ milieu de $[AC]$).

   Le triangle $AKJ$ a pour image le triangle $JIC$.

4. Par la première translation, le segment $[KJ]$ a pour image $[BI]$ : $KJ = BI$.

   Par la seconde, $[KJ]$ a pour image $[IC]$ : $KJ = IC$.

   Donc $KJ = BI = IC$. De plus, l'image d'une droite est une droite parallèle : $(KJ) \parallel (BI)$, c'est-à-dire $(KJ) \parallel (BC)$.

5. D'après la question 3, $\overrightarrow{AJ} = \overrightarrow{KI}$ : $AKIJ$ est un parallélogramme (les points $A$, $K$, $J$ ne sont pas alignés car $ABC$ est un vrai triangle).

:::intuition
Le triangle $ABC$ se découpe en **quatre** petits triangles que les translations permettent de superposer : on retrouve que chacun a des côtés moitiés de ceux de $ABC$.
:::

:::trap
Pour dire qu'un vecteur est « la moitié » d'un autre, il faut le justifier par un milieu : $\overrightarrow{AK} = \frac{1}{2}\overrightarrow{AB}$ vient de « $K$ milieu de $[AB]$ ».
:::
