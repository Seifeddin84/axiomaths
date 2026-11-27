---
uid: "0000372"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Cercles d'Apollonius et points isodynamiques"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["barycentre", "cercles-d-apollonius", "lieu-geometrique", "triangle", "defi"]
provenance: "adapted"
dressing: "cercles d'Apollonius et points isodynamiques"
rung: 5
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Soit $ABC$ un triangle, $a=BC$, $b=CA$, $c=AB$, $\mathcal C$ son cercle circonscrit de centre $O$ et de rayon $R$. Soient $k_1,k_2,k_3$ trois réels strictement positifs, différents de $1$, tels que $k_1k_2k_3=1$. On considère les trois ensembles

$$\Gamma_1=\left\{M,\ \dfrac{MB}{MC}=k_1\right\},\qquad\Gamma_2=\left\{M,\ \dfrac{MC}{MA}=k_2\right\},\qquad\Gamma_3=\left\{M,\ \dfrac{MA}{MB}=k_3\right\}.$$

Pour un point $M\neq O$, on appelle *inverse* de $M$ par rapport à $\mathcal C$ le point $M'$ de la demi-droite $[OM)$ tel que $OM\cdot OM'=R^2$.

1.
   a. Montrer que $\Gamma_1$ est un cercle dont le centre est sur la droite $(BC)$ (même résultat pour $\Gamma_2$ et $\Gamma_3$).

   b. Montrer que tout point commun à deux de ces trois cercles appartient au troisième.

2.
   a. Soit $U$ un point de $\mathcal C$ et $M\neq O$. Montrer que $M'U=\dfrac{R\cdot MU}{OM}$.

   b. En déduire que l'inverse d'un point commun aux trois cercles est encore commun aux trois cercles.

3. On suppose $a$, $b$, $c$ deux à deux distincts et on prend $k_1=\dfrac cb$, $k_2=\dfrac ac$, $k_3=\dfrac ba$.

   a. Vérifier que $k_1k_2k_3=1$, que ces nombres sont différents de $1$, et qu'un point $M$ appartient aux trois cercles si et seulement si $a\,MA=b\,MB=c\,MC$.

   b. Pour $X\neq A$, on note $X^*$ le point de la demi-droite $[AX)$ tel que $AX\cdot AX^*=1$. Montrer que $X^*Y^*=\dfrac{XY}{AX\cdot AY}$. En déduire que, si $M$ est un point des trois cercles, $M^*$ est un sommet d'un triangle équilatéral construit sur $[B^*C^*]$, puis que **les trois cercles ont exactement deux points communs $F_1$ et $F_2$** (les points isodynamiques de $ABC$).

   c. Montrer que $F_1$ et $F_2$ ne sont pas sur $\mathcal C$, puis que **$F_1$ et $F_2$ sont inverses l'un de l'autre par rapport à $\mathcal C$**.

---

## Solution

1.
   a.
      :::property[Relation de Leibniz]
      Si $G=\text{bar}\{(B,\alpha),(C,\beta)\}$ avec $\alpha+\beta\neq0$, alors pour tout $M$ : **$\alpha MB^2+\beta MC^2=(\alpha+\beta)MG^2+\alpha GB^2+\beta GC^2$**.
      :::

      $\dfrac{MB}{MC}=k_1\iff MB^2-k_1^2MC^2=0$. On prend $\alpha=1$, $\beta=-k_1^2$ ($\alpha+\beta=1-k_1^2\neq0$ car $k_1\neq1$) et $G_1=\text{bar}\{(B,1),(C,-k_1^2)\}\in(BC)$ :

      $$\displaystyle MB^2-k_1^2MC^2=(1-k_1^2)MG_1^2+GB^2-k_1^2GC^2.$$

      Donc $M\in\Gamma_1\iff MG_1^2=\dfrac{k_1^2G_1C^2-G_1B^2}{1-k_1^2}$, constante. C'est un cercle de centre $G_1\in(BC)$ dès que cette constante est $>0$ ; c'est le cas car $\Gamma_1$ contient les deux points distincts $I_1=\text{bar}\{(B,1),(C,k_1)\}$ et $J_1=\text{bar}\{(B,1),(C,-k_1)\}$ (pour chacun, $\dfrac{MB}{MC}=k_1$).

   b. Si $M\in\Gamma_1\cap\Gamma_2$ : $MB=k_1MC$ et $MC=k_2MA$. Donc $MB=k_1k_2\,MA$ et

      $$\displaystyle \dfrac{MA}{MB}=\dfrac1{k_1k_2}=k_3.$$

      $M\in\Gamma_3$. Le raisonnement est le même pour les deux autres couples.

2.
   a. $OM\cdot OM'=R^2=OU^2$ donne $\dfrac{OM}{OU}=\dfrac{OU}{OM'}$. Les triangles $OMU$ et $OUM'$ ont l'angle en $O$ en commun (les points $M,M'$ sont sur la même demi-droite) : ils sont *semblables*, avec $\dfrac{MU}{UM'}=\dfrac{OM}{OU}$.

      Donc $M'U=MU\cdot\dfrac{OU}{OM}$, soit $\boxed{M'U=\dfrac{R\cdot MU}{OM}}$.

   b. Soit $M$ un point commun aux trois cercles ; $M\neq O$ car $OB/OC=1\neq k_1$. Pour $U=A,B,C$ (points de $\mathcal C$) :

      $$\displaystyle \dfrac{M'B}{M'C}=\dfrac{R\,MB/OM}{R\,MC/OM}=\dfrac{MB}{MC}=k_1,$$

      et de même $\dfrac{M'C}{M'A}=k_2$, $\dfrac{M'A}{M'B}=k_3$. Donc $M'\in\Gamma_1\cap\Gamma_2\cap\Gamma_3$.

3.
   a. $k_1k_2k_3=\dfrac cb\cdot\dfrac ac\cdot\dfrac ba=1$. Comme $a,b,c$ sont deux à deux distincts, $k_1,k_2,k_3\neq1$.

      $M\in\Gamma_1\iff c\,MC=b\,MB$ et $M\in\Gamma_2\iff a\,MA=c\,MC$. Donc $M\in\Gamma_1\cap\Gamma_2\iff a\,MA=b\,MB=c\,MC$, et d'après la question 1b, c'est aussi $M\in\Gamma_3$. Réciproquement, $a\,MA=b\,MB=c\,MC$ donne les trois rapports.

   b. *Formule.* Les triangles $AXY$ et $AY^*X^*$ ont l'angle en $A$ en commun et $\dfrac{AX^*}{AY}=\dfrac{1/AX}{AY}=\dfrac1{AX\cdot AY}=\dfrac{AY^*}{AX}$ : ils sont semblables, de rapport $\dfrac1{AX\cdot AY}$. Donc $\boxed{X^*Y^*=\dfrac{XY}{AX\cdot AY}}$.

      En particulier $B^*C^*=\dfrac a{bc}$, $AB^*=\dfrac1c$, $AC^*=\dfrac1b$.

      *Condition.* Soit $M$ commun aux trois cercles, $\lambda=a\,MA=b\,MB=c\,MC>0$ (si $\lambda=0$, $M=A=B=C$). Alors $M\neq A$ et

      $$\displaystyle M^*B^*=\dfrac{MB}{MA\cdot AB}=\dfrac{\lambda/b}{(\lambda/a)\,c}=\dfrac a{bc},\qquad M^*C^*=\dfrac{MC}{MA\cdot AC}=\dfrac{\lambda/c}{(\lambda/a)\,b}=\dfrac a{bc}.$$

      Donc $M^*B^*=M^*C^*=B^*C^*$ : **$M^*$ est l'un des deux sommets des triangles équilatéraux construits sur $[B^*C^*]$**.

      *Réciproque.* Soit $Q^*$ l'un de ces deux sommets. Il est distinct de $A$ : sinon $AB^*=AC^*=B^*C^*$, soit $\dfrac1c=\dfrac1b=\dfrac a{bc}$, donc $b=c$, ce qui est exclu. Soit $M$ le point tel que $M^*=Q^*$. Les égalités $M^*B^*=M^*C^*=B^*C^*$ s'écrivent $\dfrac{MB}{MA\cdot c}=\dfrac{MC}{MA\cdot b}=\dfrac a{bc}$, soit $b\,MB=a\,MA$ et $c\,MC=a\,MA$ : $M$ est un point commun aux trois cercles.

      Il y a deux sommets $Q^*$ possibles : **les trois cercles ont exactement deux points communs $F_1$, $F_2$**.

   c. *$F_i\notin\mathcal C$.* Supposons $M\in\mathcal C$, avec $a\,MA=b\,MB=c\,MC=\lambda>0$. Selon l'arc où se trouve $M$, le théorème de Ptolémée donne l'une des trois égalités

      $$\displaystyle MA\cdot a=MB\cdot b+MC\cdot c,\quad MB\cdot b=MC\cdot c+MA\cdot a,\quad MC\cdot c=MA\cdot a+MB\cdot b,$$

      soit $\lambda=2\lambda$, donc $\lambda=0$ : impossible.

      *Inverses.* D'après 2b, l'inverse $F_1'$ de $F_1$ est encore un point commun : $F_1'\in\{F_1,F_2\}$. Comme $F_1\notin\mathcal C$, $OF_1\neq R$ et $F_1'\neq F_1$ (car $OF_1\cdot OF_1'=R^2$). Donc $F_1'=F_2$ : **$F_1$ et $F_2$ sont inverses l'un de l'autre**. $\blacksquare$

:::intuition
L'inversion de pôle $A$ transforme la condition $a\,MA=b\,MB=c\,MC$ en l'équation « $M^*B^*=M^*C^*=B^*C^*$ » : on retrouve un triangle équilatéral, qui a deux sommets. Ensuite l'inversion par rapport à $\mathcal C$ conserve les rapports de distances aux points de $\mathcal C$.
:::

:::trap
Pour des $k_i$ quelconques de produit $1$, les trois cercles peuvent ne pas se couper (par exemple si $k_1$ et $k_2$ sont très petits : $\Gamma_1$ et $\Gamma_2$ sont deux petits cercles autour de $B$ et de $C$) ; l'énoncé suppose implicitement le cas isodynamique ci-dessus (ou que deux cercles se coupent).
:::
