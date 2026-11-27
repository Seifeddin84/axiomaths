---
uid: "0000369"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa Réciproque"
source: "Axiomaths"
title: "Aires dans un trapèze"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "trapeze", "aires", "diagonales"]
provenance: "own"
dressing: "aires dans un trapèze"
rung: 5
batch: "2026-11-22-revision-1ere-A"
---

$ABCD$ est un trapèze de bases $[AB]$ et $[DC]$, avec $AB=a<DC=b$. Ses diagonales se coupent en $O$. On note $S_1$, $S_2$, $S_3$ et $S_4$ les aires des triangles $OAB$, $OCD$, $OAD$ et $OBC$.

![Trapèze ABCD de bases AB et DC, diagonales sécantes en O, triangles OAB et OCD marqués](/exercises/images/369-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000369.png)

1. Montrer que $\dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac ab$.

2. La perpendiculaire à $(AB)$ passant par $O$ coupe $(AB)$ en $H'$ et $(DC)$ en $H$. Montrer que $\dfrac{OH'}{OH}=\dfrac ab$, puis que $\dfrac{S_1}{S_2}=\dfrac{a^2}{b^2}$.

3. Montrer que $S_3=S_4$. [Comparer les aires de $ABD$ et de $ABC$.]

4. Montrer que $\dfrac{S_3}{S_1}=\dfrac ba$, puis que $S_3^{\,2}=S_1\,S_2$.

5. En déduire que l'aire du trapèze est $\big(\sqrt{S_1}+\sqrt{S_2}\big)^2$.

6. Application : $S_1=16$ et $S_2=25$. Calculer $S_3$, l'aire du trapèze et le rapport $\dfrac ab$.

---

## Solution

:::property[Papillon et aires]
Deux droites se coupent en $O$, avec $(AB)\parallel(CD)$ : on part du sommet $O$, $\boxed{\dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac{AB}{CD}}$.

Aire d'un triangle : $\boxed{\dfrac12\times\text{base}\times\text{hauteur}}$. Deux triangles de **même base** et de **même hauteur** ont la même aire ; deux triangles de **même hauteur** ont des aires proportionnelles à leurs bases.
:::

1. Les droites $(AC)$ et $(BD)$ se coupent en $O$ et $(AB)\parallel(DC)$. Papillon de sommet $O$ (triangles $OAB$ et $OCD$) :

   $$\displaystyle \dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac{AB}{CD}=\boxed{\dfrac ab}$$

2. Les droites $(AC)$ et $(H'H)$ se coupent en $O$. Comme $(AB)\parallel(DC)$, la perpendiculaire à $(AB)$ est aussi perpendiculaire à $(DC)$, et $(AH')\parallel(CH)$. Papillon de sommet $O$ :

   $$\displaystyle \dfrac{OH'}{OH}=\dfrac{OA}{OC}=\dfrac ab$$

   $OH'$ est la hauteur de $OAB$ et $OH$ celle de $OCD$ :

   $$\displaystyle S_1=\dfrac12\,a\times OH'\qquad S_2=\dfrac12\,b\times OH$$

   $$\displaystyle \dfrac{S_1}{S_2}=\dfrac ab\times\dfrac{OH'}{OH}=\dfrac ab\times\dfrac ab=\boxed{\dfrac{a^2}{b^2}}$$

3. Les triangles $ABD$ et $ABC$ ont la même base $[AB]$ et la même hauteur (la distance entre les parallèles $(AB)$ et $(DC)$) : ils ont la même aire.

   Or $\text{aire}(ABD)=S_1+S_3$ et $\text{aire}(ABC)=S_1+S_4$. Donc

   $$\displaystyle S_1+S_3=S_1+S_4\implies\boxed{S_3=S_4}$$

4. Les triangles $OAD$ et $OAB$ ont le même sommet $A$ et leurs bases $[OD]$ et $[OB]$ sont sur la même droite $(BD)$ : même hauteur issue de $A$.

   $$\displaystyle \dfrac{S_3}{S_1}=\dfrac{OD}{OB}=\boxed{\dfrac ba}$$

   (car $\dfrac{OB}{OD}=\dfrac ab$ d'après la question 1). On exprime $S_3$ et $S_2$ avec $S_1$ :

   $$\displaystyle S_3=\dfrac ba\,S_1\qquad S_2=\dfrac{b^2}{a^2}\,S_1\ \ \text{(question 2)}$$

   $$\displaystyle S_1\,S_2=\dfrac{b^2}{a^2}\,S_1^{\,2}=\left(\dfrac ba\,S_1\right)^2=S_3^{\,2}$$

5. L'aire du trapèze est la somme des quatre triangles :

   $$\displaystyle S=S_1+S_2+S_3+S_4=S_1+S_2+2S_3$$

   Comme $S_3>0$ et $S_3^{\,2}=S_1S_2$, on a $S_3=\sqrt{S_1}\sqrt{S_2}$ :

   $$\displaystyle S=S_1+S_2+2\sqrt{S_1}\sqrt{S_2}=\boxed{\big(\sqrt{S_1}+\sqrt{S_2}\big)^2}$$

6. $S_3=\sqrt{16\times25}=\sqrt{400}=\boxed{20}$ et :

   $$\displaystyle S=(\sqrt{16}+\sqrt{25})^2=(4+5)^2=\boxed{81}$$

   Contrôle : $16+25+20+20=81$.

   Le rapport $\dfrac ab$ vérifie $\dfrac{a^2}{b^2}=\dfrac{S_1}{S_2}=\dfrac{16}{25}$, donc $\dfrac ab=\boxed{\dfrac45}$.

:::intuition
Deux triangles de même base et de même hauteur ont la même aire, et un papillon de rapport $k$ multiplie les aires par $k^2$.
:::

:::trap
Écrire $\dfrac{S_1}{S_2}=\dfrac ab$ (rapport des aires et non des longueurs), ou croire que les quatre triangles ont la même aire.
:::
