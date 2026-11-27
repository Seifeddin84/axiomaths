---
uid: "0000368"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Deux segments égaux et un milieu"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["thales", "papillon", "triangle-isocele", "milieu"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

$ABC$ est un triangle isocèle en $A$. Le point $D$ est sur $[AB]$ et le point $E$ sur la demi-droite $[AC)$, au-delà de $C$, avec $BD=CE$. La droite $(DE)$ coupe $(BC)$ en $F$.

![Triangle isocèle ABC, points D sur AB et E sur la demi-droite AC au-delà de C, droite DE coupant BC en F, parallèle à AC passant par D coupant BC en K](/exercises/images/368-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000368.png)

1. La parallèle à $(AC)$ passant par $D$ coupe $[BC]$ en $K$. Montrer que $DK=BD$.

2. Montrer que $F$ est le milieu de $[DE]$. [Papillon de sommet $F$.]

3. Application : $AB=AC=5$, $BC=6$ et $BD=2$. Calculer $BK$, puis $BF$.

4. On pose $BD=t\,AB$ avec $0<t<1$. Montrer que $BF=\dfrac{1+t}2\,BC$. Où se trouve $F$ lorsque $D$ décrit $[AB]$ ?

5. Avec les données de la question 3, pour quelle valeur de $BD$ a-t-on $BF=5$ ?

---

## Solution

:::property[Thalès : triangle et papillon]
**Triangle.** $D\in[BA]$, $K\in[BC]$, $(DK)\parallel(AC)$ : on part de $B$, $\boxed{\dfrac{BD}{BA}=\dfrac{BK}{BC}=\dfrac{DK}{AC}}$.

**Papillon.** Deux droites se coupent en $F$, avec $(DK)\parallel(EC)$ : on part de $F$, $\boxed{\dfrac{FD}{FE}=\dfrac{FK}{FC}=\dfrac{DK}{EC}}$.
:::

1. Dans le triangle $BAC$, on a $D\in[BA]$, $K\in[BC]$ et $(DK)\parallel(AC)$. Thalès de sommet $B$ :

   $$\displaystyle \dfrac{BD}{BA}=\dfrac{BK}{BC}=\dfrac{DK}{AC}$$

   On retient $\dfrac{DK}{AC}=\dfrac{BD}{BA}$, donc $DK=AC\times\dfrac{BD}{BA}$.

   Le triangle est isocèle en $A$ : $AC=BA$. Donc

   $$\displaystyle DK=\boxed{BD}$$

2. Les droites $(DE)$ et $(KC)=(BC)$ se coupent en $F$ ; les droites $(DK)$ et $(EC)=(AC)$ sont parallèles. Triangles $FDK$ et $FEC$ de sommet $F$ :

   $$\displaystyle \dfrac{FD}{FE}=\dfrac{FK}{FC}=\dfrac{DK}{EC}$$

   On a $DK=BD$ (question 1) et $BD=CE$ (hypothèse), donc $\dfrac{DK}{EC}=1$.

   Alors $FD=FE$ et $FK=FC$ :

   $$\displaystyle \boxed{F\text{ est le milieu de }[DE]}$$

   et aussi le milieu de $[KC]$.

3. Thalès de sommet $B$ avec $BD=2$ et $BA=5$ :

   $$\displaystyle \dfrac{BK}{BC}=\dfrac{BD}{BA}=\dfrac25\implies BK=\dfrac25\times6=\boxed{2{,}4}$$

   Alors $KC=BC-BK=6-2{,}4=3{,}6$. $F$ est le milieu de $[KC]$ :

   $$\displaystyle KF=\dfrac{3{,}6}2=1{,}8\qquad BF=BK+KF=2{,}4+1{,}8=\boxed{4{,}2}$$

4. Thalès de sommet $B$ : $\dfrac{BK}{BC}=\dfrac{BD}{BA}=t$, donc $BK=t\,BC$ et $KC=(1-t)\,BC$.

   $F$ est le milieu de $[KC]$ :

   $$\displaystyle BF=BK+\dfrac{KC}2=t\,BC+\dfrac{1-t}2\,BC=\boxed{\dfrac{1+t}2\,BC}$$

   Pour $0<t<1$, $BF$ est compris entre $\dfrac{BC}2$ et $BC$ : le point $F$ décrit le segment ouvert entre le milieu de $[BC]$ et $C$.

5. Avec $BC=6$ : $BF=3\,(1+t)$.

   $$\displaystyle 3\,(1+t)=5\iff1+t=\dfrac53\iff t=\dfrac23$$

   $$\displaystyle BD=t\times AB=\dfrac23\times5=\boxed{\dfrac{10}3}\approx3{,}3$$

:::intuition
La parallèle à $(AC)$ menée par $D$ déplace le segment $[BD]$ sans changer sa longueur (triangle isocèle $BDK$), ce qui fabrique un papillon de rapport $1$.
:::

:::trap
Oublier que $AB=AC$ : sans cette hypothèse, $DK\neq BD$ et $F$ n'est plus le milieu.
:::
