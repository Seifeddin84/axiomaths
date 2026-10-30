---
uid: "0000130"
school: "lycee"
level: "3eme"
section: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Statistiques"
source: "Axiomaths"
title: "Notes d'une classe : moyenne, écart-type et quartiles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "moyenne", "ecart-type", "mediane", "quartiles"]
---
Le tableau suivant donne la répartition des notes obtenues par les $25$ élèves d'une classe lors d'un devoir :

| Note $x_i$ | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ | $18$ |
|---|---|---|---|---|---|---|---|
| Effectif $n_i$ | $2$ | $3$ | $6$ | $5$ | $4$ | $3$ | $2$ |

1. Calculer la moyenne $\overline{x}$ de cette série.

2. Calculer la variance $V$ et l'écart-type $\sigma$ (on donnera $\sigma$ à $10^{-2}$ près).

3. a. Dresser le tableau des effectifs cumulés croissants.

   b. Déterminer la médiane $Me$ de la série.

   c. Déterminer le premier quartile $Q_1$ et le troisième quartile $Q_3$, puis l'écart interquartile.

   *On rappelle que $Q_1$ (resp. $Q_3$) est la plus petite valeur de la série telle qu'au moins $25\,\%$ (resp. $75\,\%$) des valeurs lui sont inférieures ou égales.*

4. Quel est le pourcentage des élèves dont la note appartient à l'intervalle $[\overline{x} - \sigma, \overline{x} + \sigma]$ ?

5. Le professeur décide d'ajouter $1$ point à chaque note. Sans refaire les calculs, donner la nouvelle moyenne et le nouvel écart-type.

---

## Solution

1. $\displaystyle\sum n_ix_i = 12 + 24 + 60 + 60 + 56 + 48 + 36 = 296$, donc $\overline{x} = \dfrac{296}{25} = 11{,}84$.

2. $\displaystyle\sum n_ix_i^2 = 72 + 192 + 600 + 720 + 784 + 768 + 648 = 3784$.

   $V = \dfrac{3784}{25} - 11{,}84^2 = 151{,}36 - 140{,}1856 = 11{,}1744$ et $\sigma = \sqrt{V} \approx 3{,}34$.

3. a.

   | Note | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ | $18$ |
   |---|---|---|---|---|---|---|---|
   | E.C.C. | $2$ | $5$ | $11$ | $16$ | $20$ | $23$ | $25$ |

   b. $N = 25$ est impair : la médiane est la $13^{\text{e}}$ valeur. Les valeurs de rang $12$ à $16$ valent $12$, donc $Me = 12$.

   c. $\dfrac{N}{4} = 6{,}25$ : $Q_1$ est la $7^{\text{e}}$ valeur, $Q_1 = 10$.

   $\dfrac{3N}{4} = 18{,}75$ : $Q_3$ est la $19^{\text{e}}$ valeur, $Q_3 = 14$.

   Écart interquartile : $Q_3 - Q_1 = 4$.

4. $[\overline{x} - \sigma, \overline{x} + \sigma] \approx [8{,}50\,;\,15{,}18]$ contient les notes $10$, $12$ et $14$, soit $6 + 5 + 4 = 15$ élèves : $\dfrac{15}{25} = 60\,\%$.

5. Chaque note devient $x_i + 1$ : la moyenne devient $12{,}84$ ; les écarts à la moyenne ne changent pas, donc l'écart-type reste $\sigma \approx 3{,}34$.
