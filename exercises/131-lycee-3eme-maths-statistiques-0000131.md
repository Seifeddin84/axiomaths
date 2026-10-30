---
uid: "0000131"
school: "lycee"
level: "3eme"
section: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Statistiques"
source: "Axiomaths"
title: "Temps d'attente : série groupée en classes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["statistiques", "classes", "interpolation-lineaire", "ecart-type", "histogramme"]
---
On a relevé le temps d'attente (en minutes) de $40$ clients à un guichet :

| Temps (min) | $[0, 5[$ | $[5, 10[$ | $[10, 15[$ | $[15, 20[$ | $[20, 30[$ |
|---|---|---|---|---|---|
| Effectif | $8$ | $14$ | $10$ | $5$ | $3$ |

1. On veut représenter cette série par un histogramme. Pourquoi ne peut-on pas utiliser $3$ comme hauteur du rectangle de la dernière classe, si les autres hauteurs sont égales aux effectifs ? Quelle hauteur faut-il utiliser ?

2. En utilisant les centres des classes, calculer la moyenne $\overline{x}$ et l'écart-type $\sigma$ de cette série (à $10^{-2}$ près).

3. a. Dresser le tableau des effectifs cumulés croissants.

   b. En supposant que les valeurs sont réparties de façon uniforme dans chaque classe, déterminer par interpolation linéaire la médiane $Me$ et les quartiles $Q_1$ et $Q_3$.

4. Estimer le pourcentage de clients qui ont attendu moins de $12$ minutes.

5. Comparer $\overline{x}$ et $Me$. Comment l'expliquer à partir de la forme de la série ?

---

## Solution

1. La dernière classe est deux fois plus large que les autres ($10$ minutes au lieu de $5$). Dans un histogramme, c'est l'**aire** des rectangles qui est proportionnelle à l'effectif.

   La hauteur doit donc être $\dfrac{3}{2} = 1{,}5$.

2. Centres : $2{,}5$ ; $7{,}5$ ; $12{,}5$ ; $17{,}5$ ; $25$.

   $\displaystyle\sum n_ic_i = 20 + 105 + 125 + 87{,}5 + 75 = 412{,}5$, donc $\overline{x} = \dfrac{412{,}5}{40} = 10{,}3125 \approx 10{,}31$ min.

   $\displaystyle\sum n_ic_i^2 = 50 + 787{,}5 + 1562{,}5 + 1531{,}25 + 1875 = 5806{,}25$.

   $V = \dfrac{5806{,}25}{40} - 10{,}3125^2 \approx 145{,}156 - 106{,}348 = 38{,}809$, donc $\sigma \approx 6{,}23$ min.

3. a.

   | Borne supérieure | $5$ | $10$ | $15$ | $20$ | $30$ |
   |---|---|---|---|---|---|
   | E.C.C. | $8$ | $22$ | $32$ | $37$ | $40$ |

   b. *Médiane* : $\dfrac{N}{2} = 20$ est atteint dans la classe $[5, 10[$ (on passe de $8$ à $22$) :

   $Me = 5 + 5 \times \dfrac{20 - 8}{14} = 5 + \dfrac{30}{7} \approx 9{,}29$ min.

   *Premier quartile* : $\dfrac{N}{4} = 10$, dans $[5, 10[$ : $Q_1 = 5 + 5 \times \dfrac{10 - 8}{14} \approx 5{,}71$ min.

   *Troisième quartile* : $\dfrac{3N}{4} = 30$, dans $[10, 15[$ (de $22$ à $32$) : $Q_3 = 10 + 5 \times \dfrac{30 - 22}{10} = 14$ min.

4. $12$ est dans $[10, 15[$, aux $\dfrac{2}{5}$ de la classe : effectif cumulé estimé $22 + 10 \times \dfrac{2}{5} = 26$.

   Environ $\dfrac{26}{40} = 65\,\%$ des clients ont attendu moins de $12$ minutes.

5. $\overline{x} \approx 10{,}31 > Me \approx 9{,}29$ : quelques attentes longues (classe $[20, 30[$) tirent la moyenne vers le haut. La série est étalée vers la droite, et la médiane est moins sensible à ces valeurs extrêmes.
