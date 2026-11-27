---
uid: "0000370"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Une droite par le centre de gravité"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "papillon", "milieu", "inegalites"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

$ABC$ est un triangle, $I$ le milieu de $[BC]$ et $G$ le point de $[AI]$ tel que $AG=\dfrac23AI$. Une droite $d$ passant par $G$, mais pas par $A$, coupe $[AB]$ en $M$ et $[AC]$ en $N$. Les parallèles à $d$ passant par $B$ et par $C$ coupent la droite $(AI)$ en $U$ et $V$ ; on admet que $U$ et $V$ sont sur la demi-droite $[AI)$, au-delà de $G$.

![Triangle ABC, milieu I de BC, point G aux deux tiers de AI, droite d passant par G coupant AB en M et AC en N, parallèles à d par B et C coupant AI en U et V](/exercises/images/370-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000370.png)

1. Montrer que $I$ est le milieu de $[UV]$, puis que $AU+AV=2\,AI$. [Papillon de sommet $I$ dans les triangles $IBU$ et $ICV$.]

2. Écrire Thalès de sommet $A$ dans les triangles $ABU$ et $ACV$ pour montrer que $\dfrac{AB}{AM}=\dfrac{AU}{AG}$ et $\dfrac{AC}{AN}=\dfrac{AV}{AG}$.

3. En déduire que $\dfrac{AB}{AM}+\dfrac{AC}{AN}=3$.

4. Application : $AB=12$, $AC=10$ et $AM=9$. Calculer $AN$. Que devient la relation lorsque $d\parallel(BC)$ ? lorsque $d=(BG)$ ?

5. On pose $x=\dfrac{AM}{AB}$, $y=\dfrac{AN}{AC}$ et on note $\mathcal S$ l'aire de $ABC$. Montrer que $\text{aire}(AMN)=xy\,\mathcal S$, puis que $\dfrac49\,\mathcal S\leq\text{aire}(AMN)\leq\dfrac12\,\mathcal S$. Préciser les positions de $d$ pour lesquelles il y a égalité. [Poser $u=\dfrac1x$ ; montrer que $1\leq u\leq2$ et que $xy=\dfrac1{u(3-u)}$.]

---

## Solution

:::property[Thalès et papillon]
**Triangle.** $M\in[AB]$, $G\in[AU]$, $(MG)\parallel(BU)$ : on part de $A$, $\boxed{\dfrac{AM}{AB}=\dfrac{AG}{AU}=\dfrac{MG}{BU}}$.

**Papillon.** Deux droites se coupent en $I$, avec $(BU)\parallel(CV)$ : on part de $I$, $\boxed{\dfrac{IB}{IC}=\dfrac{IU}{IV}=\dfrac{BU}{CV}}$.
:::

1. Les droites $(BC)$ et $(UV)=(AI)$ se coupent en $I$. Les droites $(BU)$ et $(CV)$ sont parallèles (toutes deux parallèles à $d$). Papillon de sommet $I$ (triangles $IBU$ et $ICV$) :

   $$\displaystyle \dfrac{IB}{IC}=\dfrac{IU}{IV}=\dfrac{BU}{CV}$$

   $I$ est le milieu de $[BC]$ : $IB=IC$, donc $IU=IV$. Les points $B$ et $C$ sont de part et d'autre de $I$, donc $U$ et $V$ aussi : $\boxed{I\text{ est le milieu de }[UV]}$.

   Les points $U$ et $V$ sont sur la même demi-droite d'origine $A$. Sur cette demi-droite, le milieu de $[UV]$ est à la distance $\dfrac{AU+AV}2$ de $A$ :

   $$\displaystyle AI=\dfrac{AU+AV}2\implies\boxed{AU+AV=2\,AI}$$

2. **Triangle $ABU$.** On a $M\in[AB]$, $G\in[AU]$ (car $U$ est au-delà de $G$) et $(MG)=d\parallel(BU)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AM}{AB}=\dfrac{AG}{AU}\implies\boxed{\dfrac{AB}{AM}=\dfrac{AU}{AG}}$$

   **Triangle $ACV$.** On a $N\in[AC]$, $G\in[AV]$ et $(NG)=d\parallel(CV)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AN}{AC}=\dfrac{AG}{AV}\implies\boxed{\dfrac{AC}{AN}=\dfrac{AV}{AG}}$$

3. On additionne les deux égalités de la question 2 :

   $$\displaystyle \dfrac{AB}{AM}+\dfrac{AC}{AN}=\dfrac{AU+AV}{AG}=\dfrac{2\,AI}{AG}$$

   Comme $AG=\dfrac23AI$ :

   $$\displaystyle \dfrac{AB}{AM}+\dfrac{AC}{AN}=\dfrac{2\,AI}{\frac23AI}=\boxed{3}$$

4. **Application.** $\dfrac{12}9+\dfrac{10}{AN}=3\implies\dfrac{10}{AN}=3-\dfrac43=\dfrac53\implies AN=\boxed{6}$.

   **Si $d\parallel(BC)$.** Thalès de sommet $A$ dans $ABI$ (avec $G\in[AI]$) donne $\dfrac{AM}{AB}=\dfrac{AG}{AI}=\dfrac23$ ; de même $\dfrac{AN}{AC}=\dfrac23$. On retrouve $\dfrac32+\dfrac32=3$.

   **Si $d=(BG)$.** Alors $M=B$ et $\dfrac{AB}{AM}=1$. La relation donne $\dfrac{AC}{AN}=2$ : $N$ est le milieu de $[AC]$ (la droite $(BG)$ est la médiane issue de $B$).

5. **Les aires.** Les triangles $AMN$ et $ABN$ ont le même sommet $N$ et leurs bases $[AM]$ et $[AB]$ sont sur la même droite : même hauteur, donc

   $$\displaystyle \dfrac{\text{aire}(AMN)}{\text{aire}(ABN)}=\dfrac{AM}{AB}=x$$

   De même, $ABN$ et $ABC$ ont le même sommet $B$ et leurs bases $[AN]$ et $[AC]$ sont sur la droite $(AC)$ :

   $$\displaystyle \dfrac{\text{aire}(ABN)}{\text{aire}(ABC)}=\dfrac{AN}{AC}=y$$

   $$\displaystyle \text{aire}(AMN)=xy\,\mathcal S$$

   **La relation.** La question 3 s'écrit $\dfrac1x+\dfrac1y=3$. On pose $u=\dfrac1x$ et $v=\dfrac1y=3-u$.

   Comme $0<x\leq1$ et $0<y\leq1$ : $u\geq1$ et $v\geq1$, donc $3-u\geq1$, c'est-à-dire $1\leq u\leq2$.

   $$\displaystyle xy=\dfrac1{uv}=\dfrac1{u(3-u)}$$

   **Encadrement de $u(3-u)$.** On écrit

   $$\displaystyle u(3-u)=\dfrac94-\left(u-\dfrac32\right)^2$$

   Pour $1\leq u\leq2$ : $0\leq\left(u-\dfrac32\right)^2\leq\dfrac14$, donc

   $$\displaystyle 2\leq u(3-u)\leq\dfrac94\implies\dfrac49\leq xy\leq\dfrac12$$

   $$\displaystyle \boxed{\dfrac49\,\mathcal S\leq\text{aire}(AMN)\leq\dfrac12\,\mathcal S}$$

   **Cas d'égalité.** $xy=\dfrac49$ si et seulement si $u=\dfrac32$, c'est-à-dire $x=y=\dfrac23$ : $d$ est parallèle à $(BC)$.

   $xy=\dfrac12$ si et seulement si $\left(u-\dfrac32\right)^2=\dfrac14$, c'est-à-dire $u=1$ ou $u=2$ : $M=B$ et $N$ milieu de $[AC]$ (la médiane $(BG)$), ou bien $N=C$ et $M$ milieu de $[AB]$ (la médiane $(CG)$).

:::intuition
Les deux parallèles à $d$ menées par $B$ et $C$ transportent les rapports $\dfrac{AB}{AM}$ et $\dfrac{AC}{AN}$ sur la droite $(AI)$, où le milieu $I$ les fait s'additionner.
:::

:::trap
Écrire Thalès dans le triangle $ABC$ : la droite $(MN)$ n'est pas parallèle à $(BC)$ en général.
:::
