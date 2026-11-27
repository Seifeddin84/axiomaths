---
uid: "0000385"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Produit scalaire dans le plan"
source: "Axiomaths"
title: "Droites de Kiepert : concours et conique"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["droites-de-kiepert", "produit-scalaire", "triangle", "concours", "coniques", "defi"]
provenance: "adapted"
dressing: "droites de Kiepert et conique"
rung: 5
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Soit $ABC$ un triangle *acutangle et scalène*, de sens direct. On note $a=BC$, $b=CA$, $c=AB$ et

$$S_A=\dfrac{b^2+c^2-a^2}{2},\qquad S_B=\dfrac{c^2+a^2-b^2}{2},\qquad S_C=\dfrac{a^2+b^2-c^2}{2},\qquad S=\det\left(\overrightarrow{AB},\overrightarrow{AC}\right)>0.$$

Pour $\theta\in\left]0,\dfrac\pi2\right[$, on construit à l'extérieur de $ABC$, sur les côtés $[BC]$, $[CA]$, $[AB]$, trois triangles isocèles semblables $A'BC$, $B'CA$, $C'AB$ d'angles à la base $\theta$ (par exemple $\widehat{A'BC}=\widehat{A'CB}=\theta$). On pose $s=\dfrac{S}{\tan\theta}$.

![Triangle ABC, triangles isocèles semblables construits à l'extérieur sur les côtés, droites (AA'), (BB'), (CC') concourantes en K](/exercises/images/385-lycee-3eme-maths-produit-scalaire-dans-le-plan-0000385.png)

1.
   a. Montrer que $S_A=\overrightarrow{AB}\cdot\overrightarrow{AC}$ et que $S_B+S_C=a^2$ (et les relations analogues).

   b. Montrer que $A'$ est le barycentre de $(A,-a^2)$, $(B,s+S_C)$, $(C,s+S_B)$ (on pourra décomposer le vecteur $\overrightarrow{MA'}$, où $M$ est le milieu de $[BC]$, sur la base $\left(\overrightarrow{AB},\overrightarrow{AC}\right)$). Écrire les résultats analogues pour $B'$ et $C'$.

2. Montrer que **les droites $(AA')$, $(BB')$, $(CC')$ sont concourantes** en un point $K_\theta$, dont on donnera des coordonnées barycentriques $(x:y:z)$ dans le repère affine $(A,B,C)$.

3. Soit $\mathcal K$ la conique d'équation barycentrique $(b^2-c^2)yz+(c^2-a^2)zx+(a^2-b^2)xy=0$.

   a. Montrer que $K_\theta\in\mathcal K$.

   b. Montrer que $\mathcal K$ passe par $A$, $B$, $C$, par le centre de gravité $G$ et par l'orthocentre $H$ de $ABC$.

*Remarque.* Les valeurs $s<0$ correspondent aux triangles construits vers l'intérieur. Pour $\theta=\dfrac\pi3$ (triangles équilatéraux), $K_\theta$ est le point de Fermat de $ABC$.

---

## Solution

1.
   :::property[Produit scalaire et longueurs]
   **$\overrightarrow{u}\cdot\overrightarrow{v}=\dfrac{\|\overrightarrow{u}\|^2+\|\overrightarrow{v}\|^2-\|\overrightarrow{u}-\overrightarrow{v}\|^2}{2}$**
   :::

   a. Avec $\overrightarrow{u}=\overrightarrow{AB}$, $\overrightarrow{v}=\overrightarrow{AC}$ : $\overrightarrow{AB}\cdot\overrightarrow{AC}=\dfrac{c^2+b^2-a^2}2=S_A$.

      Par permutation, $S_B=\overrightarrow{BC}\cdot\overrightarrow{BA}$ et $S_C=\overrightarrow{CA}\cdot\overrightarrow{CB}$.

      $S_B+S_C=\dfrac{c^2+a^2-b^2+a^2+b^2-c^2}{2}=a^2$.

      Deux relations utiles pour la suite, avec $u=\overrightarrow{AB}$, $v=\overrightarrow{AC}$ : $\ u\cdot v=S_A$, $\ \|u\|^2=c^2$, $\|v\|^2=b^2$, d'où

      $$\displaystyle S_A-c^2=\dfrac{b^2-c^2-a^2}{2}=-S_B,\qquad b^2-S_A=\dfrac{b^2-c^2+a^2}{2}=S_C.\quad(\ast)$$

   b. Notons $J$ la rotation vectorielle d'angle $+\dfrac\pi2$ et $t=\tan\theta$, donc $ts=S$.

      Le triangle $ABC$ est direct : l'intérieur est à gauche de $B\to C$, l'extérieur à droite. Le sommet $A'$ est à la hauteur $\dfrac a2\tan\theta$ au-dessus du milieu $M$ de $[BC]$, du côté extérieur :

      $$\displaystyle \overrightarrow{MA'}=-\dfrac t2\,J\left(\overrightarrow{BC}\right).$$

      :::property[Rotation d'un vecteur dans une base]
      Soient $\overrightarrow{u},\overrightarrow{v}$ non colinéaires, $D=\det(\overrightarrow{u},\overrightarrow{v})$. Alors **$J\overrightarrow{u}=\dfrac{\|\overrightarrow{u}\|^2\overrightarrow{v}-(\overrightarrow{u}\cdot\overrightarrow{v})\overrightarrow{u}}{D}$** et **$J\overrightarrow{v}=\dfrac{(\overrightarrow{u}\cdot\overrightarrow{v})\overrightarrow{v}-\|\overrightarrow{v}\|^2\overrightarrow{u}}{D}$**.
      :::

      *Preuve.* Écrivons $J\overrightarrow{u}=\alpha\overrightarrow{u}+\beta\overrightarrow{v}$. Le produit scalaire avec $\overrightarrow{u}$ donne $0=\alpha\|\overrightarrow{u}\|^2+\beta\,\overrightarrow{u}\cdot\overrightarrow{v}$. D'autre part $\det(\overrightarrow{u},J\overrightarrow{u})=\|\overrightarrow{u}\|^2=\beta D$. D'où $\beta=\dfrac{\|\overrightarrow{u}\|^2}{D}$ et $\alpha=-\dfrac{\overrightarrow{u}\cdot\overrightarrow{v}}{D}$. Même méthode pour $J\overrightarrow{v}$.

      Avec $\overrightarrow{u}=\overrightarrow{AB}$, $\overrightarrow{v}=\overrightarrow{AC}$ ($D=S$) et $\overrightarrow{BC}=\overrightarrow{v}-\overrightarrow{u}$, d'après $(\ast)$ :

      $$\displaystyle J\left(\overrightarrow{BC}\right)=\dfrac{(S_A-c^2)\overrightarrow{v}-(b^2-S_A)\overrightarrow{u}}{S}=\dfrac{-S_B\overrightarrow{v}-S_C\overrightarrow{u}}{S}.$$

      Donc $\overrightarrow{MA'}=\dfrac{t}{2S}\left(S_C\overrightarrow{u}+S_B\overrightarrow{v}\right)$. Comme $\overrightarrow{AM}=\dfrac12(\overrightarrow{u}+\overrightarrow{v})=\dfrac{ts}{2S}(\overrightarrow{u}+\overrightarrow{v})$ :

      $$\displaystyle \overrightarrow{AA'}=\dfrac{t}{2S}\Big[(s+S_C)\overrightarrow{AB}+(s+S_B)\overrightarrow{AC}\Big].$$

      Le coefficient de $A$ dans la combinaison barycentrique est

      $$\displaystyle 1-\dfrac{t}{2S}(2s+S_B+S_C)=1-\dfrac{2S+ta^2}{2S}=-\dfrac{t}{2S}a^2.$$

      Divisons les trois poids par $\dfrac t{2S}>0$ : **$A'=\text{bar}\{(A,-a^2),(B,s+S_C),(C,s+S_B)\}$** (somme des poids $2s\neq0$).

      Par permutation circulaire $(A,B,C)\to(B,C,A)$ :

      $$\begin{aligned}B'&=\text{bar}\{(B,-b^2),(C,s+S_A),(A,s+S_C)\},\\ C'&=\text{bar}\{(C,-c^2),(A,s+S_B),(B,s+S_A)\}.\end{aligned}$$

2.
   :::property[Coordonnées barycentriques]
   $M=\text{bar}\{(A,x),(B,y),(C,z)\}$ se note $M(x:y:z)$ (définies à un facteur non nul près). Un point de la droite $(AA')$ est un barycentre de $A$ et $A'$ : son poids en $B$ et en $C$ est proportionnel à celui de $A'$. Les points de $(AA')$ sont donc ceux dont les coordonnées vérifient $\boxed{y:z=(s+S_C):(s+S_B)}$, car $A'(-a^2:s+S_C:s+S_B)$.
   :::

   De même, $(BB')$ est l'ensemble des points avec $x:z=(s+S_C):(s+S_A)$ et $(CC')$ celui avec $x:y=(s+S_B):(s+S_A)$.

   Posons $X=s+S_A$, $Y=s+S_B$, $Z=s+S_C$ (tous $>0$ car $ABC$ est acutangle et $s>0$) et

   $$\displaystyle K_\theta=\left(\dfrac1X:\dfrac1Y:\dfrac1Z\right).$$

   Alors $y:z=\dfrac1Y:\dfrac1Z=Z:Y$ : $K_\theta\in(AA')$. De même $x:z=Z:X$ : $K_\theta\in(BB')$, et $x:y=Y:X$ : $K_\theta\in(CC')$.

   Les trois droites sont concourantes en **$K_\theta=\left(\dfrac1{s+S_A}:\dfrac1{s+S_B}:\dfrac1{s+S_C}\right)$**, point intérieur au triangle (poids positifs).

3.
   a. Avec $x=\dfrac1X$, $y=\dfrac1Y$, $z=\dfrac1Z$ :

      $$\displaystyle (b^2-c^2)yz+(c^2-a^2)zx+(a^2-b^2)xy=\dfrac{(b^2-c^2)X+(c^2-a^2)Y+(a^2-b^2)Z}{XYZ}.$$

      Le numérateur vaut $s\,[(b^2-c^2)+(c^2-a^2)+(a^2-b^2)]+(b^2-c^2)S_A+(c^2-a^2)S_B+(a^2-b^2)S_C$.

      Le crochet est nul. Reste, en multipliant par $2$ :

      $$\begin{aligned}&(b^2-c^2)(b^2+c^2-a^2)+(c^2-a^2)(c^2+a^2-b^2)+(a^2-b^2)(a^2+b^2-c^2)\\ &\quad=\underbrace{(b^4-c^4)+(c^4-a^4)+(a^4-b^4)}_{=0}-\underbrace{\big[a^2(b^2-c^2)+b^2(c^2-a^2)+c^2(a^2-b^2)\big]}_{=0}=0.\end{aligned}$$

      Donc $\boxed{K_\theta\in\mathcal K}$.

   b. *$A$, $B$, $C$ :* $A(1:0:0)$ annule chaque terme (chacun contient deux coordonnées parmi $x,y,z$ dont une nulle) ; idem pour $B$ et $C$.

      *$G(1:1:1)$ :* $(b^2-c^2)+(c^2-a^2)+(a^2-b^2)=0$.

      *$H$ :* montrons que $H=\left(\dfrac1{S_A}:\dfrac1{S_B}:\dfrac1{S_C}\right)$. Soit $P$ ce barycentre. Avec $A$ pour origine, $\overrightarrow{AP}\propto\dfrac1{S_B}\overrightarrow{u}+\dfrac1{S_C}\overrightarrow{v}$ et $\overrightarrow{BC}=\overrightarrow{v}-\overrightarrow{u}$ :

      $$\displaystyle \left(\dfrac{\overrightarrow{u}}{S_B}+\dfrac{\overrightarrow{v}}{S_C}\right)\cdot(\overrightarrow{v}-\overrightarrow{u})=\dfrac{S_A-c^2}{S_B}+\dfrac{b^2-S_A}{S_C}=-1+1=0$$

      d'après $(\ast)$. Donc $(AP)\perp(BC)$ ; par symétrie $(BP)\perp(CA)$ : $P=H$. Le calcul de la question 3a avec $s=0$ s'applique tel quel (le terme en $s$ disparaît) : $H\in\mathcal K$.

**Remarque.** $s\to+\infty$ ($\theta\to0$) donne $G$ et $s=0$ ($\theta=\dfrac\pi2$) donne $H$ : la conique $\mathcal K$ contient donc les deux points remarquables $G$ et $H$ (c'est l'hyperbole de Kiepert, étudiée en 4ème).

:::intuition
Les coordonnées barycentriques transforment la concourance de trois droites en une égalité de rapports, et l'équation de $\mathcal K$ devient linéaire en $\left(\dfrac1x,\dfrac1y,\dfrac1z\right)$.
:::

:::trap
Le calcul n'est valable que pour $xyz\neq0$ ; $A$, $B$, $C$ se vérifient directement sur l'équation.
:::
