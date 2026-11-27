---
uid: "0000231"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa Réciproque"
source: "Axiomaths"
title: "Un parallélogramme, deux milieux, trois morceaux"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "parallelogramme", "milieux"]
provenance: own
dressing: "deux milieux et trois morceaux"
rung: 3
---

$ABCD$ est un parallélogramme de centre $O$. $I$ et $J$ sont les milieux de $[BC]$ et de $[CD]$. La droite $(AI)$ coupe $(BD)$ en $G$ et $(DC)$ en $E$ ; la droite $(AJ)$ coupe $(BD)$ en $H$.

![Figure de l'énoncé](/exercises/images/231-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000231.png)

1. Montrer que $C$ est le milieu de $[DE]$.

2. Montrer que $GD=2\,GB$, puis que $BG=\dfrac13BD$.

3. En échangeant les rôles de $B$ et de $D$, montrer que $DH=\dfrac13DB$. Conclure que $BG=GH=HD$.

4. Montrer que $AGCH$ est un parallélogramme.

5. Montrer que l'aire de $AGCH$ est le tiers de celle de $ABCD$.

---

## Solution

> **Propriétés du parallélogramme.** Dans un parallélogramme, **les côtés opposés sont parallèles et égaux** et **les diagonales ont le même milieu**. Réciproquement, un quadrilatère dont les diagonales ont le même milieu est un parallélogramme.

> **Papillon.** Deux droites se coupent en $X$ avec $(PQ)\parallel(RS)$ : $\boxed{\dfrac{XP}{XS}=\dfrac{XQ}{XR}=\dfrac{PQ}{SR}}$.

1. Les points $B,I,C$ sont alignés, $A,I,E$ aussi, et $(AB)\parallel(CE)$ (car $(CE)=(DC)$ et $ABCD$ est un parallélogramme). Triangles $IBA$ et $ICE$ de sommet $I$ :

   $$\displaystyle \dfrac{IC}{IB}=\dfrac{IE}{IA}=\dfrac{CE}{BA}$$

   $I$ est le milieu de $[BC]$ : $IC=IB$, donc $\dfrac{CE}{BA}=1$ et $CE=BA$. Or $BA=DC$ (côtés opposés). Donc $CE=DC$ et $C\in[DE]$ : $C$ est le milieu de $[DE]$.

2. Triangles $GBI$ et $GDA$ de sommet $G$ : $B,G,D$ sont alignés, $I,G,A$ aussi, et $(BI)=(BC)\parallel(DA)$.

   $$\displaystyle \dfrac{GB}{GD}=\dfrac{GI}{GA}=\dfrac{BI}{DA}$$

   Or $BI=\dfrac12\,BC=\dfrac12\,AD$ (côtés opposés égaux). Donc :

   $$\displaystyle \dfrac{GB}{GD}=\dfrac12\implies GD=2\,GB$$

   $$\displaystyle BD=GB+GD=3\,GB\implies\boxed{BG=\dfrac13\,BD}$$

3. Dans le parallélogramme, $J$ est le milieu de $[CD]$, et $(AJ)$ coupe $(BD)$ en $H$. C'est la même situation qu'en 2), avec les rôles de $B$ et de $D$ échangés (et $I$ remplacé par $J$) :

   $$\displaystyle DH=\dfrac13\,DB$$

   On a alors $BG=\dfrac13\,BD$ et $HD=\dfrac13\,BD$, donc :

   $$\displaystyle GH=BD-BG-HD=BD-\dfrac13\,BD-\dfrac13\,BD=\dfrac13\,BD$$

   Les points $G$ et $H$ partagent $[BD]$ en trois parties égales : $\boxed{BG=GH=HD}$.

4. Les diagonales du parallélogramme $ABCD$ se coupent en leur milieu $O$ : $O$ est le milieu de $[AC]$ et de $[BD]$.

   Comme $BG=HD$ et que $G$, $H$ sont placés symétriquement sur $[BD]$, $O$ est aussi le milieu de $[GH]$ : $OG=OB-BG=OD-HD=OH$.

   Les diagonales $[AC]$ et $[GH]$ de $AGCH$ ont le même milieu $O$ : $AGCH$ est un **parallélogramme**.

5.
   > **Aire d'un triangle.** **Aire $=\dfrac12\times\text{base}\times\text{hauteur}$**. Deux triangles de même hauteur ont des aires proportionnelles à leurs bases.

   Soit $\mathcal S$ l'aire de $ABCD$. La diagonale $[BD]$ partage le parallélogramme en deux triangles de même aire : aire$(ABD)=\dfrac{\mathcal S}2$.

   Les triangles $AGH$ et $ABD$ ont la même hauteur issue de $A$, et $GH=\dfrac13\,BD$ :

   $$\displaystyle \text{aire}(AGH)=\dfrac13\times\dfrac{\mathcal S}2=\dfrac{\mathcal S}6$$

   $C$ est le symétrique de $A$ par rapport à $O$, qui est sur $(GH)$ : les triangles $AGH$ et $CGH$ ont la même aire.

   $$\displaystyle \text{aire}(AGCH)=2\times\dfrac{\mathcal S}6=\boxed{\dfrac{\mathcal S}3}$$

**Idée :** chaque côté du parallélogramme est parallèle au côté opposé, ce qui fournit des « papillons » de rapport $\dfrac12$ ; la symétrie de centre $O$ fait le reste.    **Piège :** écrire $BG=\dfrac12\,BD$ au lieu de $\dfrac13\,BD$ : le rapport de Thalès est $\dfrac{GB}{GD}$, pas $\dfrac{GB}{BD}$.
