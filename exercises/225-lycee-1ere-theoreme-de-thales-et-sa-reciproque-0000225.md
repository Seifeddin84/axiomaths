---
uid: "0000225"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Thalès : calculer des longueurs"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["thales", "calcul-de-longueurs", "papillon", "reciproque", "parallelisme"]
provenance: own
---

Dans chaque cas, calculer les longueurs demandées (les figures ne sont pas à l'échelle).

![Figure de l'énoncé](/exercises/images/225-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000225.png)

1. $M\in[AB]$ et $N\in[AC]$ avec $(MN)\parallel(BC)$, $AM=4$, $MB=2$, $AN=5$ et $BC=9$. Calculer $AC$, $NC$ et $MN$.

2. Les droites $(AD)$ et $(BC)$ se coupent en $O$, entre $A$ et $D$ et entre $B$ et $C$, avec $(AB)\parallel(CD)$ ; $OA=2$, $OD=5$, $OB=3$ et $AB=4$. Calculer $OC$ et $CD$.

3. $M$ est sur la demi-droite $[AB)$ au-delà de $B$, $N$ sur $[AC)$ au-delà de $C$, avec $(MN)\parallel(BC)$ ; $AB=6$, $AM=9$, $AC=8$ et $BC=5$. Calculer $AN$, $CN$ et $MN$.

4. $E,G\in[AB]$ et $F,H\in[AC]$ avec $AE=4$, $EB=6$, $AF=6$, $FC=9$, $AG=5$, $GB=5$, $AH=6$, $HC=9$. Les droites $(EF)$ et $(GH)$ sont-elles parallèles à $(BC)$ ?

---

## Solution

> **Thalès : les trois outils.** **Triangle :** on part du sommet $A$ ; $(MN)\parallel(BC)$ donne $\boxed{\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}}$.
>
> **Papillon :** les droites $(AD)$ et $(BC)$ se coupent en $O$ et $(AB)\parallel(CD)$ ; on part du sommet $O$ : $\boxed{\dfrac{OA}{OD}=\dfrac{OB}{OC}=\dfrac{AB}{CD}}$.
>
> **Réciproque :** si $\dfrac{AM}{AB}=\dfrac{AN}{AC}$ (même ordre des points), alors $(MN)\parallel(BC)$.

1. On a $AB=AM+MB=4+2=6$. Le sommet commun est $A$ :

   $$\displaystyle \dfrac{AM}{AB}=\dfrac46=\dfrac23$$

   Thalès : $\dfrac{AN}{AC}=\dfrac23$, avec $AN=5$ :

   $$\displaystyle AC=\dfrac{5\times3}2=7{,}5\qquad NC=AC-AN=7{,}5-5=2{,}5$$

   $$\displaystyle \dfrac{MN}{BC}=\dfrac23\implies MN=\dfrac23\times9=6$$

2. Papillon de sommet $O$ :

   $$\displaystyle \dfrac{OA}{OD}=\dfrac{OB}{OC}=\dfrac{AB}{CD}\qquad\text{soit}\qquad\dfrac25=\dfrac3{OC}=\dfrac4{CD}$$

   $$\displaystyle OC=\dfrac{3\times5}2=7{,}5\qquad CD=\dfrac{4\times5}2=10$$

3. Ici $M$ et $N$ sont au-delà de $B$ et de $C$ : le grand triangle est $AMN$ et le petit est $ABC$. Le rapport est $\dfrac{AM}{AB}$ (et non $\dfrac{MB}{AB}$) :

   $$\displaystyle \dfrac{AN}{AC}=\dfrac{AM}{AB}=\dfrac96=\dfrac32$$

   $$\displaystyle AN=\dfrac32\times8=12\qquad CN=AN-AC=12-8=4\qquad MN=\dfrac32\times5=7{,}5$$

4. On compare, pour chaque droite, les deux rapports qui partent de $A$.

   **Droite $(EF)$ :** $AB=4+6=10$ et $AC=6+9=15$.

   $$\displaystyle \dfrac{AE}{AB}=\dfrac4{10}=\dfrac25\qquad\dfrac{AF}{AC}=\dfrac6{15}=\dfrac25$$

   Les rapports sont égaux : d'après la réciproque de Thalès, $(EF)\parallel(BC)$.

   **Droite $(GH)$ :**

   $$\displaystyle \dfrac{AG}{AB}=\dfrac5{10}=\dfrac12\qquad\dfrac{AH}{AC}=\dfrac6{15}=\dfrac25$$

   Les rapports sont différents : si $(GH)$ était parallèle à $(BC)$, ils seraient égaux. Donc $(GH)$ **n'est pas** parallèle à $(BC)$.

**Idée :** avant d'écrire un rapport, repérer le sommet commun et les deux droites parallèles.    **Piège :** comparer $\dfrac{AE}{AB}$ avec $\dfrac{AF}{FC}$ : ce sont deux rapports de nature différente.
