---
uid: "0000233"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Synthèse : le quadrilatère des milieux"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "varignon", "milieux", "aires", "synthese"]
provenance: own
---

$ABCD$ est un quadrilatère convexe ; $M$, $N$, $P$ et $Q$ sont les milieux de $[AB]$, $[BC]$, $[CD]$ et $[DA]$.

![Figure de l'énoncé](/exercises/images/233-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000233.png)

1. Montrer que $(MN)\parallel(AC)$ et $MN=\dfrac12AC$. Procéder de même pour $[QP]$ et conclure que $MNPQ$ est un parallélogramme.

2. Quelle condition doivent vérifier les diagonales $[AC]$ et $[BD]$ pour que $MNPQ$ soit un rectangle ? un losange ? un carré ? Justifier.

3. Application : $AC=10$, $BD=6$ et $(AC)\perp(BD)$. Calculer les dimensions et l'aire de $MNPQ$.

4. Montrer que l'aire de $AMQ$ est le quart de celle de $ABD$. Donner de même l'aire des triangles $BMN$, $CNP$ et $DPQ$ en fonction de celle de $ABC$, $CBD$ et $DAC$.

5. En déduire que l'aire de $MNPQ$ est la moitié de celle de $ABCD$. Le vérifier avec les données de 3) [pour des diagonales perpendiculaires, l'aire du quadrilatère est $\dfrac12AC\times BD$].

---

## Solution

> **Droite des milieux.** Dans un triangle $XYZ$, si $U$ et $V$ sont les milieux de $[XY]$ et $[XZ]$ : $\boxed{(UV)\parallel(YZ)}$ et $\boxed{UV=\dfrac{YZ}2}$.

> **Parallélogramme.** Un quadrilatère dont deux côtés opposés sont **parallèles et égaux** est un parallélogramme. C'est un **rectangle** si deux côtés consécutifs sont perpendiculaires, un **losange** si deux côtés consécutifs sont égaux, un **carré** s'il est les deux.

1. Dans le triangle $ABC$ : $M$ et $N$ sont les milieux de $[AB]$ et $[BC]$.

   $$\displaystyle (MN)\parallel(AC)\qquad MN=\dfrac12\,AC$$

   Dans le triangle $ADC$ : $Q$ et $P$ sont les milieux de $[AD]$ et $[DC]$.

   $$\displaystyle (QP)\parallel(AC)\qquad QP=\dfrac12\,AC$$

   Donc $(MN)\parallel(QP)$ et $MN=QP$ : $MNPQ$ a deux côtés opposés parallèles et égaux, c'est un **parallélogramme**.

2. Dans le triangle $ABD$, $M$ et $Q$ sont les milieux de $[AB]$ et $[AD]$ : $(MQ)\parallel(BD)$ et $MQ=\dfrac12\,BD$.

   Les côtés $(MN)$ et $(MQ)$ sont parallèles à $(AC)$ et à $(BD)$ respectivement.

   **Rectangle :** $(MN)\perp(MQ)\iff(AC)\perp(BD)$ : les diagonales sont perpendiculaires.

   **Losange :** $MN=MQ\iff\dfrac12AC=\dfrac12BD\iff AC=BD$ : les diagonales ont la même longueur.

   **Carré :** les diagonales sont perpendiculaires et de même longueur.

3. $MN=\dfrac12\times10=5$ et $MQ=\dfrac12\times6=3$. Comme $(AC)\perp(BD)$, $MNPQ$ est un rectangle de dimensions $5$ et $3$.

   $$\displaystyle \text{aire}=5\times3=15$$

4. $M$ est le milieu de $[AB]$ : les triangles $AMD$ et $ABD$ ont la même hauteur issue de $D$ et $AM=\dfrac12\,AB$.

   $$\displaystyle \text{aire}(AMD)=\dfrac12\,\text{aire}(ABD)$$

   $Q$ est le milieu de $[AD]$ : les triangles $AMQ$ et $AMD$ ont la même hauteur issue de $M$ et $AQ=\dfrac12\,AD$.

   $$\displaystyle \text{aire}(AMQ)=\dfrac12\,\text{aire}(AMD)=\boxed{\dfrac14\,\text{aire}(ABD)}$$

   Le même raisonnement donne :

   $$\displaystyle \text{aire}(BMN)=\dfrac14\,\text{aire}(ABC)\qquad\text{aire}(CNP)=\dfrac14\,\text{aire}(CBD)\qquad\text{aire}(DPQ)=\dfrac14\,\text{aire}(DAC)$$

5. Soit $\mathcal S$ l'aire de $ABCD$. La diagonale $[BD]$ coupe le quadrilatère en deux triangles, et la diagonale $[AC]$ aussi :

   $$\displaystyle \text{aire}(ABD)+\text{aire}(CBD)=\mathcal S\qquad\text{aire}(ABC)+\text{aire}(DAC)=\mathcal S$$

   Les quatre triangles des coins ont une aire totale :

   $$\displaystyle \dfrac14\big[\text{aire}(ABD)+\text{aire}(CBD)\big]+\dfrac14\big[\text{aire}(ABC)+\text{aire}(DAC)\big]=\dfrac14\mathcal S+\dfrac14\mathcal S=\dfrac12\mathcal S$$

   $$\displaystyle \text{aire}(MNPQ)=\mathcal S-\dfrac12\mathcal S=\boxed{\dfrac12\,\mathcal S}$$

   **Vérification :** d'après 3), $\mathcal S=\dfrac12\times10\times6=30$, et $\dfrac12\mathcal S=15$, ce qui est bien l'aire de $MNPQ$ trouvée à la question 3.

**Idée :** la droite des milieux relie les côtés de $MNPQ$ aux diagonales de $ABCD$ ; les aires se lisent avec « même hauteur, base moitié ».    **Piège :** croire que $MNPQ$ est toujours un rectangle : il faut $(AC)\perp(BD)$.
