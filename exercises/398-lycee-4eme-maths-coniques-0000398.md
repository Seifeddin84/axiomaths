---
uid: "0000398"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "L'hyperbole de Kiepert : une conique équilatère"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["kiepert", "barycentre", "hyperbole-equilatere", "concours", "triangle"]
provenance: "adapted"
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Soit $ABC$ un triangle *acutangle et scalène* ; on note $a=BC$, $b=CA$, $c=AB$ et

$$S_A=\dfrac{b^2+c^2-a^2}{2}=\overrightarrow{AB}\cdot\overrightarrow{AC},\qquad S_B=\dfrac{c^2+a^2-b^2}{2},\qquad S_C=\dfrac{a^2+b^2-c^2}{2}.$$

Le plan est rapporté aux coordonnées barycentriques $(x:y:z)$ relatives au repère affine $(A,B,C)$. Soit $\mathcal K$ la conique d'équation

$$(b^2-c^2)\,yz+(c^2-a^2)\,zx+(a^2-b^2)\,xy=0.$$

1. Montrer que $\mathcal K$ passe par $A$, $B$, $C$, par le centre de gravité $G$ et par l'orthocentre $H$ de $ABC$ (on montrera que $H=\left(\dfrac1{S_A}:\dfrac1{S_B}:\dfrac1{S_C}\right)$).

2. Montrer que **$\mathcal K$ est une hyperbole équilatère** (on pourra utiliser le fait qu'une conique $\alpha x^2+2\beta xy+\gamma y^2+\cdots=0$ du plan euclidien a ses asymptotes perpendiculaires si et seulement si $\alpha+\gamma=0$).

3. Montrer que tout point $M(x:y:z)$ de $\mathcal K$ avec $xyz\neq0$ et $M\neq G$ est de la forme $K(s)=\left(\dfrac1{s+S_A}:\dfrac1{s+S_B}:\dfrac1{s+S_C}\right)$ pour un certain réel $s$.

*Remarque.* Les points $K(s)$ sont les points de concours des droites joignant chaque sommet au sommet d'un triangle isocèle semblable construit sur le côté opposé (hyperbole de Kiepert) ; voir l'exercice de 3ème Produit scalaire consacré à ce concours.

---

## Solution

1. *$A$, $B$, $C$ :* $A(1:0:0)$ annule chaque terme (chacun contient deux coordonnées parmi $x,y,z$, dont une nulle) ; idem pour $B$ et $C$.

   *$G(1:1:1)$ :* $(b^2-c^2)+(c^2-a^2)+(a^2-b^2)=0$.

   *$H$ :* on a $S_A-c^2=\overrightarrow{AB}\cdot\left(\overrightarrow{AC}-\overrightarrow{AB}\right)=\overrightarrow{AB}\cdot\overrightarrow{BC}=-S_B$ et de même $b^2-S_A=\overrightarrow{AC}\cdot\overrightarrow{BC}=S_C$. Soit $P=\left(\dfrac1{S_A}:\dfrac1{S_B}:\dfrac1{S_C}\right)$ (les $S_\bullet$ sont non nuls et de somme non nulle car le triangle est acutangle). Avec $A$ pour origine, $\overrightarrow{AP}\propto\dfrac1{S_B}\overrightarrow{AB}+\dfrac1{S_C}\overrightarrow{AC}$ et $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ :

   $$\displaystyle \left(\dfrac{\overrightarrow{AB}}{S_B}+\dfrac{\overrightarrow{AC}}{S_C}\right)\cdot\overrightarrow{BC}=\dfrac{-S_B}{S_B}+\dfrac{S_C}{S_C}=0.$$

   Donc $(AP)\perp(BC)$ ; par symétrie $(BP)\perp(CA)$ : $P=H$.

   Pour $H\in\mathcal K$ il suffit alors de vérifier que $H$ vérifie l'équation : avec $x=\dfrac1X$, $y=\dfrac1Y$, $z=\dfrac1Z$,

   $$\displaystyle (b^2-c^2)yz+(c^2-a^2)zx+(a^2-b^2)xy=\dfrac{(b^2-c^2)X+(c^2-a^2)Y+(a^2-b^2)Z}{XYZ},$$

   et pour $(X,Y,Z)=(S_A,S_B,S_C)$ le numérateur, multiplié par $2$, vaut

   $$\begin{aligned}&(b^2-c^2)(b^2+c^2-a^2)+(c^2-a^2)(c^2+a^2-b^2)+(a^2-b^2)(a^2+b^2-c^2)\\ &\quad=\underbrace{(b^4-c^4)+(c^4-a^4)+(a^4-b^4)}_{=0}-\underbrace{\big[a^2(b^2-c^2)+b^2(c^2-a^2)+c^2(a^2-b^2)\big]}_{=0}=0.\end{aligned}$$

   Donc $\boxed{H\in\mathcal K}$.

2. $\mathcal K$ passe par les quatre points $A$, $B$, $C$, $H$. Aucun triple n'est aligné : $A$, $B$, $C$ ne sont pas alignés, et $H$ n'est sur aucun côté car le triangle n'est pas rectangle.

   :::property[Faisceau de coniques]
   Les polynômes de degré $\le2$ en $(X,Y)$ forment un espace de dimension $6$. S'annuler en quatre points dont trois ne sont jamais alignés impose quatre conditions indépendantes : il reste un plan, engendré par $Q_1=\ell_{AB}\,\ell_{CH}$ et $Q_2=\ell_{AC}\,\ell_{BH}$ (produits de deux équations de droites).
   :::

   Pour $Q_1=(\alpha X+\beta Y+\gamma)(\alpha'X+\beta'Y+\gamma')$, la partie quadratique est $\alpha\alpha'X^2+(\alpha\beta'+\alpha'\beta)XY+\beta\beta'Y^2$, avec $\alpha\alpha'+\beta\beta'=\overrightarrow{n}\cdot\overrightarrow{n}'$ ($\overrightarrow{n}$, $\overrightarrow{n}'$ vecteurs normaux). Or $(AB)\perp(CH)$ et $(AC)\perp(BH)$ : $\overrightarrow{n}\cdot\overrightarrow{n}'=0$ pour $Q_1$ et $Q_2$. Cette condition est linéaire : elle vaut pour toute combinaison, donc pour l'équation de $\mathcal K$ :

   $$\displaystyle \alpha+\gamma=0.$$

   Reste à voir que $\mathcal K$ est une vraie conique non dégénérée. La matrice de la forme $Q(x,y,z)=(b^2-c^2)yz+\cdots$ a pour déterminant $\dfrac14(b^2-c^2)(c^2-a^2)(a^2-b^2)\neq0$ car le triangle est scalène.

   Comme $\alpha+\gamma=0$, le discriminant de la partie quadratique est $\beta^2-\alpha\gamma=\alpha^2+\beta^2$. Il ne peut pas être nul (sinon $\alpha=\beta=\gamma=0$ et l'équation serait celle d'une droite, qui ne peut contenir $A$, $B$, $C$). Donc $\alpha^2+\beta^2>0$ : **$\mathcal K$ est une hyperbole, à asymptotes perpendiculaires**.

3. Soit $M(x:y:z)\in\mathcal K$ avec $xyz\neq0$. En divisant l'équation par $xyz$ :

   $$\displaystyle \dfrac{b^2-c^2}{x}+\dfrac{c^2-a^2}{y}+\dfrac{a^2-b^2}{z}=0,$$

   c'est-à-dire $\overrightarrow{m}\cdot\overrightarrow{w}=0$ où $\overrightarrow{m}=(b^2-c^2,\,c^2-a^2,\,a^2-b^2)$ et $\overrightarrow{w}=\left(\dfrac1x,\dfrac1y,\dfrac1z\right)$.

   Le plan $\overrightarrow{m}^{\perp}$ de $\mathbb{R}^3$ contient $\overrightarrow{e}=(1,1,1)$ (car $\sum m_i=0$) et $\overrightarrow{\sigma}=(S_A,S_B,S_C)$ (car $\sum m_iS_i=0$, calcul de la question 1). Ces deux vecteurs sont indépendants ($S_A\neq S_B$ car $a\neq b$), donc $\overrightarrow{m}^\perp=\text{Vect}(\overrightarrow{e},\overrightarrow{\sigma})$ et

   $$\displaystyle \overrightarrow{w}=\lambda\overrightarrow{\sigma}+\mu\overrightarrow{e}.$$

   Si $\lambda=0$, $\overrightarrow{w}\propto\overrightarrow{e}$ : $M=G$, exclu. Sinon, avec $s=\dfrac\mu\lambda$, $\overrightarrow{w}\propto(s+S_A,s+S_B,s+S_C)$ et $M=K(s)$. $\blacksquare$

**Remarque.** $s\to+\infty$ donne $G$, $s=0$ donne $H$ et $s\to-S_A$ donne $A$ : le paramètre $s$ décrit la branche de $\mathcal K$ passant par $G$ et $H$. Ce sont les points de concours des droites de Kiepert (résultat classique, voir l'exercice de 3ème sur ce sujet).

:::intuition
Les coordonnées barycentriques transforment la concourance en une égalité de rapports ; l'équation de $\mathcal K$ devient linéaire en $\left(\dfrac1x,\dfrac1y,\dfrac1z\right)$ et l'hyperbole se paramètre par $s$. Le caractère équilatère vient de ce que $H$ est sur la conique (faisceau de coniques).
:::

:::trap
Pour un triangle isocèle ($b=c$ par exemple) la conique $\mathcal K$ est dégénérée (une droite : l'axe de symétrie) ; c'est pourquoi on suppose $ABC$ scalène.
:::
