---
uid: "0000371"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Trois parallèles par un point"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "trois-paralleles", "triangle", "point-interieur", "aires"]
provenance: "own"
dressing: "trois parallèles menées par un point"
rung: 5
batch: "2026-11-22-revision-1ere-A"
---

Soit $ABC$ un triangle de côtés $a=BC$, $b=CA$, $c=AB$ et d'aire $\mathcal S$, et $P$ un point intérieur au triangle. La parallèle à $(BC)$ passant par $P$ coupe $[AB]$ en $A_1$ et $[AC]$ en $A_2$ ; la parallèle à $(CA)$ coupe $[BC]$ en $B_1$ et $[BA]$ en $B_2$ ; la parallèle à $(AB)$ coupe $[CA]$ en $C_1$ et $[CB]$ en $C_2$. On pose $\ell_a=A_1A_2$, $\ell_b=B_1B_2$ et $\ell_c=C_1C_2$.

![Triangle ABC avec un point P intérieur et les trois parallèles aux côtés passant par P](/exercises/images/371-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000371.png)

1. Soit $h$ la hauteur issue de $A$ et $d$ la distance de $P$ à $(BC)$. Montrer que $\dfrac{\ell_a}a=1-\dfrac dh$.

2. On pose $\alpha=\dfrac{\text{aire}(PBC)}{\mathcal S}$, $\beta=\dfrac{\text{aire}(PCA)}{\mathcal S}$ et $\gamma=\dfrac{\text{aire}(PAB)}{\mathcal S}$. Montrer que $\dfrac dh=\alpha$ et que $\alpha+\beta+\gamma=1$.

3. En déduire que $\dfrac{\ell_a}a+\dfrac{\ell_b}b+\dfrac{\ell_c}c=2$.

4. Application : $a=12$, $b=10$, $c=9$, $\ell_a=8$ et $\ell_b=5$. Calculer $\ell_c$.

5. Le triangle est équilatéral de côté $s$. Montrer que $\ell_a+\ell_b+\ell_c=2s$ pour tout point $P$ intérieur. Que vaut $\ell_a$ lorsque $P$ est le centre du triangle ?

---

## Solution

:::property[Thalès et aire]
$A_1\in[AB]$, $A_2\in[AC]$ et $(A_1A_2)\parallel(BC)$ : on part de $A$, $\boxed{\dfrac{AA_1}{AB}=\dfrac{AA_2}{AC}=\dfrac{A_1A_2}{BC}}$.

Aire d'un triangle : $\boxed{\dfrac12\times\text{base}\times\text{hauteur}}$.
:::

1. Soit $H$ le pied de la hauteur issue de $A$ ; la droite $(AH)$ coupe $(A_1A_2)$ en $K$. Les droites $(A_1A_2)$ et $(BC)$ sont parallèles et $P\in(A_1A_2)$ : $KH=d$, et $K$ est entre $A$ et $H$ (car $P$ est intérieur au triangle). Donc

   $$\displaystyle AK=AH-KH=h-d$$

   **Thalès de sommet $A$ dans $ABC$** :

   $$\displaystyle \dfrac{AA_1}{AB}=\dfrac{A_1A_2}{BC}=\dfrac{\ell_a}a$$

   **Thalès de sommet $A$ dans $ABH$** ($A_1\in[AB]$, $K\in[AH]$, $(A_1K)\parallel(BH)$) :

   $$\displaystyle \dfrac{AA_1}{AB}=\dfrac{AK}{AH}=\dfrac{h-d}h$$

   Les deux rapports sont égaux à $\dfrac{AA_1}{AB}$ :

   $$\displaystyle \dfrac{\ell_a}a=\dfrac{h-d}h=\boxed{1-\dfrac dh}$$

2. On calcule les deux aires avec la même base $BC=a$ :

   $$\displaystyle \text{aire}(PBC)=\dfrac12\,a\,d\qquad\mathcal S=\dfrac12\,a\,h$$

   $$\displaystyle \alpha=\dfrac{\frac12\,a\,d}{\frac12\,a\,h}=\boxed{\dfrac dh}$$

   Comme $P$ est à l'intérieur du triangle, les triangles $PBC$, $PCA$ et $PAB$ **recouvrent** $ABC$ sans se chevaucher :

   $$\displaystyle \text{aire}(PBC)+\text{aire}(PCA)+\text{aire}(PAB)=\mathcal S\implies\boxed{\alpha+\beta+\gamma=1}$$

3. Le même raisonnement, avec le sommet $B$ puis le sommet $C$, donne

   $$\displaystyle \dfrac{\ell_b}b=1-\beta\qquad\dfrac{\ell_c}c=1-\gamma$$

   Avec $\dfrac{\ell_a}a=1-\alpha$ :

   $$\displaystyle \dfrac{\ell_a}a+\dfrac{\ell_b}b+\dfrac{\ell_c}c=3-(\alpha+\beta+\gamma)=3-1=\boxed{2}$$

4. On calcule les deux premiers rapports :

   $$\displaystyle \dfrac{\ell_a}a=\dfrac8{12}=\dfrac23\qquad\dfrac{\ell_b}b=\dfrac5{10}=\dfrac12$$

   La question 3 donne

   $$\displaystyle \dfrac{\ell_c}c=2-\dfrac23-\dfrac12=\dfrac{12-4-3}6=\dfrac56$$

   $$\displaystyle \ell_c=\dfrac56\times9=\boxed{\dfrac{15}2=7{,}5}$$

   (On a $\alpha=\dfrac13$, $\beta=\dfrac12$ et $\gamma=\dfrac16$ : trois nombres positifs de somme $1$, donc un tel point $P$ existe.)

5. Si $a=b=c=s$, la question 3 donne

   $$\displaystyle \dfrac{\ell_a+\ell_b+\ell_c}s=2\implies\boxed{\ell_a+\ell_b+\ell_c=2s}$$

   Le centre du triangle équilatéral est à la même distance des trois côtés : les triangles $PBC$, $PCA$, $PAB$ ont même aire, donc $\alpha=\beta=\gamma=\dfrac13$.

   $$\displaystyle \dfrac{\ell_a}s=1-\dfrac13=\dfrac23\implies\ell_a=\boxed{\dfrac{2s}3}$$

:::intuition
Chaque parallèle coupe le triangle dans le rapport $1-\alpha$ (resp. $1-\beta$, $1-\gamma$), et les trois aires $\alpha$, $\beta$, $\gamma$ recouvrent le triangle.
:::

:::trap
Confondre $\dfrac{\ell_a}a$ avec $\alpha$ : le rapport de la parallèle est $1-\alpha$, pas $\alpha$.
:::
