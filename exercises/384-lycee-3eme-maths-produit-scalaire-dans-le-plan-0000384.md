---
uid: "0000384"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Produit scalaire dans le plan"
source: "Axiomaths"
title: "Euler et Poncelet : OI² = R² − 2Rr et sa réciproque"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["euler", "poncelet", "cercle-inscrit", "puissance-d-un-point", "triangle"]
provenance: "adapted"
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

**Partie A : la formule d'Euler.** Soit $ABC$ un triangle, $\mathcal C$ son cercle circonscrit (centre $O$, rayon $R$), $I$ le centre de son cercle inscrit (rayon $r$). La droite $(AI)$ recoupe $\mathcal C$ en $M$. On note $\widehat{BAC}=2\alpha$.

![Triangle ABC inscrit dans le cercle de centre O, cercle inscrit de centre I, la droite (AI) recoupe le cercle en M](/exercises/images/384-lycee-3eme-maths-produit-scalaire-dans-le-plan-0000384.png)

1. Montrer que $MB=MI$ (on calculera les angles $\widehat{MBI}$ et $\widehat{MIB}$).

2. Montrer que $MB=2R\sin\alpha$ et que $AI=\dfrac{r}{\sin\alpha}$.

3. En considérant la puissance de $I$ par rapport à $\mathcal C$ (on rappelle que, pour toute corde $[UV]$ de $\mathcal C$ passant par $I$, $IU\cdot IV=R^2-OI^2$), montrer que **$OI^2=R^2-2Rr$**.

**Partie B : la réciproque (porisme de Poncelet).** Soient un cercle $\mathcal C$ de centre $O$ et de rayon $R$ et un cercle $\gamma$ de centre $I$ et de rayon $r$ tels que $OI^2=R^2-2Rr$. Soit $A$ un point quelconque de $\mathcal C$. Les tangentes à $\gamma$ issues de $A$ recoupent $\mathcal C$ en $B$ et $C$.

1. Soit $M$ le second point d'intersection de $(AI)$ avec $\mathcal C$ et $\alpha$ l'angle entre $(AI)$ et chacune des deux tangentes. Montrer que $MB=MC=MI$.

2. Montrer que $I$ est le centre du cercle inscrit dans $ABC$ et que **$(BC)$ est tangente à $\gamma$**.

3. En déduire que, pour tout point $A$ de $\mathcal C$, il existe un triangle de sommet $A$ inscrit dans $\mathcal C$ et circonscrit à $\gamma$ : il y en a donc une infinité.

---

## Solution

### Partie A.

1.
   :::property[Angles inscrits et angle extérieur]
   Deux angles inscrits qui interceptent le même arc sont égaux. Dans un triangle, un angle extérieur est la somme des deux angles intérieurs non adjacents.
   :::

   Notons $\widehat{ABC}=2\beta$. Comme $I$ est sur les bissectrices, $\widehat{BAM}=\widehat{MAC}=\alpha$ et $\widehat{IBC}=\widehat{IBA}=\beta$.

   *Angle $\widehat{MBI}$ :* $\widehat{MBC}=\widehat{MAC}=\alpha$ (angles inscrits qui interceptent l'arc $MC$). Donc

   $$\displaystyle \widehat{MBI}=\widehat{MBC}+\widehat{CBI}=\alpha+\beta.$$

   *Angle $\widehat{MIB}$ :* c'est un angle extérieur du triangle $ABI$ : $\widehat{MIB}=\widehat{IAB}+\widehat{IBA}=\alpha+\beta$.

   Le triangle $MBI$ a deux angles égaux : il est isocèle de sommet $M$. Donc $\boxed{MB=MI}$.

2. Dans le triangle $ABM$ inscrit dans $\mathcal C$ :

   :::property[Loi des sinus]
   Dans un triangle inscrit dans un cercle de rayon $R$, chaque côté vaut $\boxed{2R\sin(\text{angle opposé})}$.
   :::

   Le côté $MB$ est opposé à $\widehat{BAM}=\alpha$ : $\boxed{MB=2R\sin\alpha}$.

   La distance de $I$ à $(AB)$ est $r$ et $(AI)$ fait un angle $\alpha$ avec $(AB)$ : $r=AI\sin\alpha$, donc $\boxed{AI=\dfrac r{\sin\alpha}}$.

3. $I$ est à l'intérieur de $\mathcal C$ et $[AM]$ est une corde passant par $I$ : $IA\cdot IM=R^2-OI^2$.

   Or $IM=MB=2R\sin\alpha$ et $IA=\dfrac r{\sin\alpha}$ :

   $$\displaystyle R^2-OI^2=\dfrac r{\sin\alpha}\times2R\sin\alpha=2Rr.$$

   Donc $\boxed{OI^2=R^2-2Rr}$. $\blacksquare$

### Partie B.

1. $\gamma$ est à l'intérieur de $\mathcal C$ (car $OI^2=R^2-2Rr<(R-r)^2$) et $I$ est à l'intérieur de $\mathcal C$.

   Puissance de $I$ : $IA\cdot IM=R^2-OI^2=2Rr$, donc $IM=\dfrac{2Rr}{IA}$.

   La tangente issue de $A$ est à distance $r$ de $I$ : $r=IA\sin\alpha$, donc $IM=2R\sin\alpha$.

   Les deux tangentes sont symétriques par rapport à $(AI)$ : $\widehat{BAM}=\widehat{MAC}=\alpha$. Le triangle $ABM$ est inscrit dans $\mathcal C$ :

   $$\displaystyle MB=2R\sin\widehat{BAM}=2R\sin\alpha,\qquad MC=2R\sin\widehat{MAC}=2R\sin\alpha.$$

   Donc $\boxed{MB=MC=MI}$.

2. Comme $\widehat{BAM}=\widehat{MAC}$, $M$ est le milieu de l'arc $BC$ ne contenant pas $A$ et $(AM)$ est la bissectrice de $\widehat{BAC}$.

   Le centre $I_0$ du cercle inscrit de $ABC$ est sur $[AM]$ et, d'après la partie A, vérifie $MI_0=MB$.

   Sur le segment $[AM]$, il y a un seul point à la distance $MB$ de $M$. Or $I\in[AM]$ et $MI=MB$ : donc $I=I_0$.

   $I$ est le centre du cercle inscrit de $ABC$ ; ce cercle est tangent à $(AB)$, donc son rayon est la distance de $I$ à $(AB)$, c'est-à-dire $r$.

   Ce cercle est donc $\gamma$, et $\boxed{(BC)\text{ est tangente à }\gamma}$. $\blacksquare$

3. Le point $A\in\mathcal C$ était quelconque : le triangle $ABC$ est inscrit dans $\mathcal C$ et circonscrit à $\gamma$. Il y a une infinité de tels triangles (un par point $A$ de $\mathcal C$).

:::intuition
Le point $M$ est le pont entre les deux parties. Dans la partie A, la puissance de $I$ vaut $IA\cdot IM=2Rr$ ; dans la partie B on lit cette égalité à l'envers pour obtenir $MI=MB$, qui caractérise le centre du cercle inscrit.
:::

:::trap
Le centre $I_0$ du cercle inscrit est sur $[AM]$ avec $MI_0=MB$, mais le cercle de centre $M$ et de rayon $MB$ coupe la droite $(AM)$ en *deux* points ; il faut préciser qu'on est sur le segment $[AM]$.
:::
