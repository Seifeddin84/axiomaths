---
uid: "0000224"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "QCM : Thalès, réciproque et milieux"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["qcm", "thales", "reciproque", "milieux", "papillon"]
provenance: own
---

Pour chaque question, **une ou plusieurs** réponses sont correctes. Aucune justification n'est demandée.

1. Soit $ABC$ un triangle, $M\in[AB]$ et $N\in[AC]$ tels que $AM=3$, $AB=5$, $AN=4{,}5$ et $AC=7{,}5$. Alors :

   - [ ] $(MN)\parallel(BC)$

   - [ ] $\dfrac{MN}{BC}=\dfrac25$

   - [ ] $\dfrac{MB}{AB}=\dfrac25$

   - [ ] $\dfrac{AN}{NC}=\dfrac23$

2. Les droites $(AD)$ et $(BC)$ se coupent en $O$, entre $A$ et $D$ et entre $B$ et $C$, avec $(AB)\parallel(CD)$. Si $OA=3$, $OB=4$ et $OC=6$, alors $OD$ vaut :

   - [ ] $8$

   - [ ] $2$

   - [ ] $4{,}5$

   - [ ] $3{,}5$

3. Soit $ABC$ un triangle, $M\in[AB]$ et $N\in[AC]$. Dans quels cas a-t-on $(MN)\parallel(BC)$ ?

   - [ ] $AM=2$, $AB=6$, $AN=3$, $AC=9$

   - [ ] $AM=2$, $MB=4$, $AN=3$, $NC=5$

   - [ ] $AM=4$, $MB=6$, $AN=2$, $NC=3$

   - [ ] $AM=1$, $AB=3$, $AN=2$, $AC=5$

4. Dans le triangle $ABC$, $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$, avec $BC=7$ et $AI=3$. Alors :

   - [ ] $IJ=3{,}5$

   - [ ] $(IJ)\parallel(BC)$

   - [ ] $AB=6$

   - [ ] $AJ=3{,}5$

5. $M\in[AB]$ et $N\in[AC]$ vérifient $(MN)\parallel(BC)$ et $AM=\dfrac13AB$. Alors :

   - [ ] $MN=\dfrac13BC$

   - [ ] l'aire de $AMN$ est le tiers de celle de $ABC$

   - [ ] l'aire de $AMN$ est le neuvième de celle de $ABC$

   - [ ] l'aire du trapèze $MNCB$ vaut les $\dfrac89$ de celle de $ABC$

6. Trois droites parallèles $d_1$, $d_2$, $d_3$ sont coupées par une sécante en $A$, $B$, $C$ (dans cet ordre) avec $AB=3$ et $BC=5$, et par une autre sécante en $A'$, $B'$, $C'$ avec $A'B'=4{,}2$. Alors $B'C'$ vaut :

   - [ ] $2{,}52$

   - [ ] $7$

   - [ ] $9{,}2$

   - [ ] $12{,}6$

---

## Solution

**Réponses.** 1 : A, C ; 2 : C ; 3 : A, C ; 4 : A, B, C ; 5 : A, C, D ; 6 : B.

> **Thalès : direct et réciproque.** $M\in(AB)$, $N\in(AC)$. Si $(MN)\parallel(BC)$, alors $\boxed{\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}}$.
>
> Réciproquement, si $\dfrac{AM}{AB}=\dfrac{AN}{AC}$ (points placés dans le même ordre), alors $(MN)\parallel(BC)$.

**Question 1.** On calcule les deux rapports qui partent du sommet $A$ :

$$\dfrac{AM}{AB}=\dfrac35\qquad\dfrac{AN}{AC}=\dfrac{4{,}5}{7{,}5}=\dfrac{45}{75}=\dfrac35$$

Ils sont égaux : d'après la réciproque, $(MN)\parallel(BC)$ **(A vraie)**.

Alors $\dfrac{MN}{BC}=\dfrac35$ et non $\dfrac25$ **(B fausse)**.

$MB=AB-AM=5-3=2$, donc $\dfrac{MB}{AB}=\dfrac25$ **(C vraie)**.

$NC=AC-AN=7{,}5-4{,}5=3$, donc $\dfrac{AN}{NC}=\dfrac{4{,}5}3=\dfrac32$ et non $\dfrac23$ **(D fausse)**.

Réponses : **A et C**.

**Question 2.**

> **Configuration « papillon ».** Deux droites sécantes en $O$, avec $(AB)\parallel(CD)$ : $\boxed{\dfrac{OA}{OD}=\dfrac{OB}{OC}=\dfrac{AB}{DC}}$.

On isole $OD$ :

$$\dfrac{OA}{OD}=\dfrac{OB}{OC}\implies\dfrac3{OD}=\dfrac46\implies OD=\dfrac{3\times6}{4}=4{,}5$$

Les valeurs $8$ et $2$ viennent d'un produit en croix mal placé.

Réponse : **C**.

**Question 3.** On compare $\dfrac{AM}{AB}$ et $\dfrac{AN}{AC}$ dans chaque cas (réciproque de Thalès).

**A :** $\dfrac26=\dfrac13$ et $\dfrac39=\dfrac13$ : égaux, donc parallèles.

**B :** $AB=6$, $AC=8$ : $\dfrac26=\dfrac13$ et $\dfrac38$ : différents.

**C :** $AB=4+6=10$ et $AC=2+3=5$ : $\dfrac4{10}=\dfrac25$ et $\dfrac25$ : égaux, donc parallèles.

**D :** $\dfrac13$ et $\dfrac25$ : différents.

Réponses : **A et C**.

**Question 4.**

> **Droite des milieux.** Dans un triangle $ABC$, si $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$, alors $\boxed{(IJ)\parallel(BC)}$ et $\boxed{IJ=\dfrac{BC}2}$.

$IJ=\dfrac72=3{,}5$ **(A vraie)**, $(IJ)\parallel(BC)$ **(B vraie)**, $AB=2\times AI=6$ **(C vraie)**.

Rien n'indique la longueur de $AC$ : on ne peut pas affirmer $AJ=3{,}5$ **(D fausse)**.

Réponses : **A, B et C**.

**Question 5.**

> **Rapport des aires.** Si on multiplie les longueurs d'une figure par $k$, **les aires sont multipliées par $k^2$**.

Thalès avec $k=\dfrac13$ : $MN=\dfrac13BC$ **(A vraie)**.

Base et hauteur du triangle $AMN$ sont divisées par $3$ : l'aire est divisée par $9$, donc le tiers est faux **(B fausse)** et le neuvième est vrai **(C vraie)**.

Le trapèze est le reste : $1-\dfrac19=\dfrac89$ de l'aire de $ABC$ **(D vraie)**.

Réponses : **A, C et D**.

**Question 6.** On se ramène à un triangle. Par $A$, on trace la parallèle à $(A'B'C')$ ; elle coupe $d_2$ en $P$ et $d_3$ en $Q$. On a $AP=A'B'$ et $AQ=A'C'$ (côtés opposés de parallélogrammes).

Dans le triangle $ACQ$, on a $B\in[AC]$, $P\in[AQ]$ et $(BP)\parallel(CQ)$ (car $d_2\parallel d_3$). Thalès de sommet $A$ :

$$\dfrac{AB}{AC}=\dfrac{AP}{AQ}=\dfrac{BP}{CQ}\implies\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$$

Avec $AB=3$ et $AC=3+5=8$ :

$$\dfrac38=\dfrac{4{,}2}{A'C'}\implies A'C'=\dfrac{4{,}2\times8}3=11{,}2$$

$$B'C'=A'C'-A'B'=11{,}2-4{,}2=7$$

Les autres valeurs sont des pièges : $2{,}52=4{,}2\times\dfrac35$ (rapport inversé), $9{,}2=4{,}2+5$ (on ajoute au lieu de proportionner) et $12{,}6=4{,}2\times3$.

Réponse : **B**.
