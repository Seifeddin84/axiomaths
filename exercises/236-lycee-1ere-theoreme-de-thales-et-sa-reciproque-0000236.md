---
uid: "0000236"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Le cercle d'Apollonius"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "apollonius", "bissectrices", "lieu-geometrique"]
provenance: own
---

$A$ et $B$ sont deux points tels que $AB=10$. On cherche l'ensemble des points $C$ tels que $\dfrac{CA}{CB}=\dfrac32$.

![Figure de l'énoncé](/exercises/images/236-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000236.png)

1. Soit $M\in[AB]$ tel que $\dfrac{MA}{MB}=\dfrac32$ et $N\in(AB)$, extérieur à $[AB]$, tel que $\dfrac{NA}{NB}=\dfrac32$. Calculer $MA$, $MB$, $NA$ et $NB$.

2. Soit $C$ un point hors de $(AB)$ tel que $\dfrac{CA}{CB}=\dfrac32$. La bissectrice de $\widehat{ACB}$ coupe $[AB]$ en $M'$ ; on admet le théorème de la bissectrice : $\dfrac{M'A}{M'B}=\dfrac{CA}{CB}$. Que peut-on dire de $M'$ ?

3. $x$ est un point de la demi-droite d'origine $C$ opposée à $[CA)$. La bissectrice de l'angle extérieur $\widehat{BCx}$ coupe $(AB)$ en $N'$, au-delà de $B$ (on l'admet). La parallèle à $(CN')$ passant par $B$ coupe $(AC)$ en $E$. Montrer que $CE=CB$, puis, par Thalès dans le triangle $AN'C$, que $\dfrac{N'A}{N'B}=\dfrac{CA}{CB}$. Que peut-on dire de $N'$ ?

4. Montrer que $\widehat{MCN}=90^\circ$.

5. En déduire que $C$ appartient à un cercle de diamètre $[MN]$ ; préciser son centre et son rayon.

---

## Solution

> **Théorème de la bissectrice (admis).** Dans un triangle $CAB$, la bissectrice de $\widehat{ACB}$ coupe $[AB]$ en $M$ tel que $\boxed{\dfrac{MA}{MB}=\dfrac{CA}{CB}}$.

1. **Point $M$.** $M\in[AB]$ donc $MA+MB=10$, et $MA=\dfrac32\,MB$ :

   $$\displaystyle \dfrac32\,MB+MB=10\implies\dfrac52\,MB=10\implies MB=4\qquad MA=6$$

   **Point $N$.** Comme $\dfrac{NA}{NB}=\dfrac32>1$, $N$ est plus près de $B$ que de $A$ : il est au-delà de $B$, donc $NA=NB+10$.

   $$\displaystyle \dfrac32\,NB=NB+10\implies\dfrac12\,NB=10\implies NB=20\qquad NA=30$$

2. Le point $M'$ est dans $[AB]$ et vérifie $\dfrac{M'A}{M'B}=\dfrac{CA}{CB}=\dfrac32$, comme $M$.

   Sur $[AB]$, le rapport $\dfrac{XA}{XB}$ prend chaque valeur une seule fois (il augmente quand $X$ va de $A$ vers $B$). Donc $M'=M$.

3. $(BE)\parallel(CN')$. Avec la sécante $(BC)$ : $\widehat{EBC}=\widehat{BCN'}$ (alternes-internes). Avec la sécante $(AC)$ : $\widehat{BEC}=\widehat{N'Cx}$ (correspondants).

   $(CN')$ est la bissectrice de l'angle extérieur : $\widehat{BCN'}=\widehat{N'Cx}$. Donc :

   $$\displaystyle \widehat{EBC}=\widehat{BEC}$$

   Le triangle $CBE$ est isocèle en $C$ : $\boxed{CE=CB}$.

   **Thalès dans le triangle $AN'C$** ($B\in[AN']$, $E\in[AC]$, $(BE)\parallel(N'C)$), de sommet $A$ :

   $$\displaystyle \dfrac{AB}{AN'}=\dfrac{AE}{AC}=\dfrac{BE}{N'C}$$

   On passe aux « complémentaires » ($N'B=AN'-AB$ et $CE=AC-AE$) :

   $$\displaystyle \dfrac{N'B}{N'A}=1-\dfrac{AB}{AN'}=1-\dfrac{AE}{AC}=\dfrac{AC-AE}{AC}=\dfrac{CE}{CA}=\dfrac{CB}{CA}$$

   En inversant : $\dfrac{N'A}{N'B}=\dfrac{CA}{CB}=\dfrac32$. Comme en 2), $N'$ est le seul point de ce type : $N'=N$.

4. Les angles $\widehat{ACB}$ et $\widehat{BCx}$ sont supplémentaires (leur somme vaut $180^\circ$). $(CM)$ est la bissectrice du premier, $(CN)$ celle du second :

   $$\displaystyle \widehat{MCN}=\widehat{MCB}+\widehat{BCN}=\dfrac12\,\widehat{ACB}+\dfrac12\,\widehat{BCx}=\dfrac12\times180^\circ=\boxed{90^\circ}$$

5. Le triangle $MCN$ est rectangle en $C$.

   > **Cercle et triangle rectangle.** Un triangle est rectangle en $C$ si et seulement si $C$ est sur le **cercle de diamètre l'hypoténuse**.

   Donc $C$ est sur le cercle de diamètre $[MN]$. Les points $M$ et $N$ ne dépendent pas de $C$ :

   $$\displaystyle MN=MB+BN=4+20=24\implies\text{rayon}=\boxed{12}$$

   Le centre est le milieu de $[MN]$. Comme $AM=6$ et $AN=30$ (sur la même demi-droite $[AB)$), il se trouve à la distance $\dfrac{6+30}2=18$ de $A$.

**Idée :** les bissectrices intérieure et extérieure en $C$ sont perpendiculaires et coupent $(AB)$ en deux points fixes $M$ et $N$.    **Piège :** appliquer le théorème de la bissectrice avec le rapport inversé ($\dfrac{CB}{CA}$).
