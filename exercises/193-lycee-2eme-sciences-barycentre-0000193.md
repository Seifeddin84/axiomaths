---
uid: "0000193"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Bissectrice et centre du cercle inscrit"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["barycentre", "bissectrice", "cercle-inscrit", "theoreme-de-thales", "barycentre-partiel"]
recommended: true
---

Soit $ABC$ un triangle. On pose $a = BC$, $b = CA$ et $c = AB$.

La bissectrice intérieure de l'angle $\widehat{BAC}$ coupe le côté $[BC]$ en $M$. La parallèle à la droite $(AC)$ passant par $B$ coupe la droite $(AM)$ en $A'$.

![Triangle ABC, bissectrice (AM) et parallèle à (AC) passant par B](/exercises/images/193-lycee-2eme-sciences-barycentre-0000193.png)

1. a. Montrer que le triangle $ABA'$ est isocèle en $B$.

   b. Montrer que $\dfrac{MB}{MC} = \dfrac{c}{b}$.

   c. En déduire que $M$ est le barycentre de $(B\,,b)$ et $(C\,,c)$.

2. Soit $\Omega$ le barycentre de $(A\,,a)$, $(B\,,b)$ et $(C\,,c)$.

   a. Montrer que $\Omega$ appartient à la droite $(AM)$.

   b. Montrer de même que $\Omega$ appartient aux bissectrices intérieures des angles $\widehat{ABC}$ et $\widehat{ACB}$.

   c. En déduire que $\Omega$ est le centre du cercle inscrit dans le triangle $ABC$.

3. **Application.** Le plan est muni d'un repère orthonormé. On donne $A(0\,,0)$, $B(4\,,0)$ et $C(0\,,3)$.

   a. Calculer $a$, $b$ et $c$.

   b. Calculer les coordonnées du centre $\Omega$ du cercle inscrit.

   c. En décomposant le triangle $ABC$ en trois triangles de sommet $\Omega$, montrer que le rayon $r$ du cercle inscrit vérifie $r = \dfrac{2 \times \text{aire}(ABC)}{a + b + c}$. Calculer $r$ et vérifier le résultat avec les coordonnées de $\Omega$.

---

## Solution

1. a. Les droites $(BA')$ et $(AC)$ sont parallèles, coupées par la sécante $(AA')$ : les angles alternes-internes $\widehat{BA'A}$ et $\widehat{A'AC}$ sont égaux.

   Or $(AM)$ est la bissectrice de $\widehat{BAC}$ : $\widehat{A'AC} = \widehat{BAA'}$.

   Donc $\widehat{BA'A} = \widehat{BAA'}$ : le triangle $ABA'$ est isocèle en $B$, et $BA' = BA = c$.

   b. Les droites $(BA')$ et $(CA)$ sont parallèles et les droites $(BC)$ et $(A'A)$ se coupent en $M$. D'après le théorème de Thalès :

   $\dfrac{MB}{MC} = \dfrac{BA'}{CA} = \dfrac{c}{b}$.

   c. On a $b\,MB = c\,MC$. Comme $M \in [BC]$, les vecteurs $\overrightarrow{MB}$ et $\overrightarrow{MC}$ sont de sens contraires, donc $b\,\overrightarrow{MB} + c\,\overrightarrow{MC} = \vec 0$.

   Avec $b + c > 0$ : $M$ est le barycentre de $(B\,,b)$ et $(C\,,c)$.

2. a. $b + c \neq 0$ : d'après le barycentre partiel, $\Omega$ est le barycentre de $(A\,,a)$ et $(M\,,b + c)$, donc $\Omega \in (AM)$.

   b. Le même raisonnement, mené à partir du sommet $B$, montre que la bissectrice de $\widehat{ABC}$ coupe $[CA]$ au barycentre $N$ de $(A\,,a)$ et $(C\,,c)$ : $\Omega$, barycentre de $(B\,,b)$ et $(N\,,a + c)$, est sur $(BN)$. De même pour la bissectrice issue de $C$.

   c. $\Omega$ est sur les trois bissectrices intérieures : c'est leur point de concours, le **centre du cercle inscrit** dans $ABC$.

3. a. $a = BC = \sqrt{16 + 9} = 5$, $\quad b = CA = 3$, $\quad c = AB = 4$.

   b. $a + b + c = 12$ : $\Omega\left(\dfrac{5 \times 0 + 3 \times 4 + 4 \times 0}{12}\,,\dfrac{5 \times 0 + 3 \times 0 + 4 \times 3}{12}\right) = \Omega(1\,,1)$.

   c. Le cercle inscrit est tangent aux trois côtés : la distance de $\Omega$ à chaque côté vaut $r$, et c'est la hauteur issue de $\Omega$ dans les triangles $\Omega BC$, $\Omega CA$, $\Omega AB$.

   $\text{aire}(ABC) = \text{aire}(\Omega BC) + \text{aire}(\Omega CA) + \text{aire}(\Omega AB) = \dfrac{r\,a}{2} + \dfrac{r\,b}{2} + \dfrac{r\,c}{2}$, d'où $r = \dfrac{2 \times \text{aire}(ABC)}{a + b + c}$.

   Ici $\text{aire}(ABC) = \dfrac{4 \times 3}{2} = 6$, donc $r = \dfrac{12}{12} = 1$.

   Contrôle : $\Omega(1\,,1)$ est à la distance $1$ de l'axe des abscisses $(AB)$ et de l'axe des ordonnées $(AC)$.

   *Remarque.* Les poids sont ici des **longueurs**. Dans l'[exercice n°194](/lycee/2eme/sciences/barycentre#ex-0000194), ce sont des **aires** qui servent de coefficients.
