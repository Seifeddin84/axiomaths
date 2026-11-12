---
uid: "0000194"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Coefficients d'aires et une inégalité"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["barycentre", "aires", "inegalite", "centre-de-gravite", "barycentre-partiel"]
recommended: true
---

Soit $ABC$ un triangle et $M$ un point intérieur à ce triangle. Les droites $(AM)$, $(BM)$ et $(CM)$ coupent respectivement les côtés $[BC]$, $[CA]$ et $[AB]$ en $A'$, $B'$ et $C'$.

On note $a$ l'aire du triangle $MBC$, $b$ l'aire du triangle $MCA$ et $c$ l'aire du triangle $MAB$.

![Triangle ABC, point intérieur M et droites (AA'), (BB'), (CC')](/exercises/images/194-lycee-2eme-sciences-barycentre-0000194.png)

1. a. Soient $H$ et $H'$ les projetés orthogonaux de $B$ et $C$ sur la droite $(AM)$. Montrer que $\dfrac{c}{b} = \dfrac{BH}{CH'} = \dfrac{A'B}{A'C}$.

   b. En déduire que $A'$ est le barycentre de $(B\,,b)$ et $(C\,,c)$.

   c. Montrer de même que $B'$ est le barycentre de $(A\,,a)$ et $(C\,,c)$, et que $C'$ est le barycentre de $(A\,,a)$ et $(B\,,b)$.

2. Montrer que $M$ est le barycentre de $(A\,,a)$, $(B\,,b)$ et $(C\,,c)$.

3. On pose $S = \dfrac{MA}{MA'} + \dfrac{MB}{MB'} + \dfrac{MC}{MC'}$.

   a. Montrer que $\dfrac{MA}{MA'} = \dfrac{b + c}{a}$.

   b. Montrer que pour tout réel $x > 0$, $x + \dfrac1x \geq 2$, avec égalité si et seulement si $x = 1$.

   c. En déduire que $S \geq 6$.

   d. Pour quelle position du point $M$ a-t-on $S = 6$ ?

---

## Solution

1. a. Les triangles $MAB$ et $MAC$ ont la même base $[MA]$ ; leurs hauteurs relatives à cette base sont $BH$ et $CH'$. Donc $\dfrac{c}{b} = \dfrac{\frac12\,MA \times BH}{\frac12\,MA \times CH'} = \dfrac{BH}{CH'}$.

   Les droites $(BH)$ et $(CH')$ sont parallèles (toutes deux perpendiculaires à $(AM)$) ; les points $B$, $A'$, $C$ sont alignés, ainsi que $H$, $A'$, $H'$ (sur $(AM)$). D'après le théorème de Thalès, $\dfrac{BH}{CH'} = \dfrac{A'B}{A'C}$.

   b. On a $b\,A'B = c\,A'C$, et $A' \in [BC]$, donc $\overrightarrow{A'B}$ et $\overrightarrow{A'C}$ sont de sens contraires : $b\,\overrightarrow{A'B} + c\,\overrightarrow{A'C} = \vec 0$. Comme $b + c > 0$, $A'$ est le barycentre de $(B\,,b)$ et $(C\,,c)$.

   c. Le même raisonnement, avec la droite $(BM)$ puis la droite $(CM)$, donne les deux autres résultats.

2. Soit $G$ le barycentre de $(A\,,a)$, $(B\,,b)$, $(C\,,c)$ (les aires sont positives, leur somme est non nulle).

   Par regroupement : $G$ est le barycentre de $(A\,,a)$ et $(A'\,,b + c)$, donc $G \in (AA')$ ; de même $G \in (BB')$.

   Les droites $(AA')$ et $(BB')$ se coupent en un seul point, $M$. Donc $G = M$.

3. a. D'après la question 2, $M$ est le barycentre de $(A\,,a)$ et $(A'\,,b + c)$, donc $a\,MA = (b + c)\,MA'$ et $\dfrac{MA}{MA'} = \dfrac{b + c}{a}$.

   b. Pour $x > 0$ : $x + \dfrac1x - 2 = \dfrac{x^2 - 2x + 1}{x} = \dfrac{(x - 1)^2}{x} \geq 0$, avec égalité si et seulement si $x = 1$.

   c. De même $\dfrac{MB}{MB'} = \dfrac{a + c}{b}$ et $\dfrac{MC}{MC'} = \dfrac{a + b}{c}$. En regroupant :

   $S = \left(\dfrac{a}{b} + \dfrac{b}{a}\right) + \left(\dfrac{a}{c} + \dfrac{c}{a}\right) + \left(\dfrac{b}{c} + \dfrac{c}{b}\right) \geq 2 + 2 + 2 = 6$.

   d. $S = 6$ si et seulement si $\dfrac{a}{b} = \dfrac{a}{c} = \dfrac{b}{c} = 1$, soit $a = b = c$.

   Alors $M$ est le barycentre de $(A\,,a)$, $(B\,,a)$, $(C\,,a)$, c'est-à-dire l'isobarycentre : **$M$ est le centre de gravité du triangle $ABC$**.

   Réciproquement, au centre de gravité, $\dfrac{MA}{MA'} = 2$ pour chaque médiane, et $S = 6$.

   *Remarque.* Les trois triangles $MBC$, $MCA$, $MAB$ ont la même aire exactement au centre de gravité. Dans l'[exercice n°193](/lycee/2eme/sciences/barycentre#ex-0000193), ce sont les longueurs des côtés qui servent de coefficients.
