---
uid: "0000137"
school: "lycee"
level: "3eme"
section: ["Economie et Gestion"]
chapter: "Statistiques"
source: "Axiomaths"
title: "Notes d'un devoir : moyenne, médiane, quartiles et écart type"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "serie-simple", "mediane", "quartiles", "ecart-type", "diagramme-en-boite"]
---

Voici les notes obtenues par $12$ élèves à un devoir de mathématiques :

$$8 \quad 11 \quad 9 \quad 14 \quad 12 \quad 10 \quad 15 \quad 7 \quad 12 \quad 13 \quad 10 \quad 11$$

1. Ranger les notes par ordre croissant et donner l'étendue de la série.

2. Calculer la moyenne $\overline{x}$ de la série.

3. Déterminer la médiane $M_e$, le premier quartile $Q_1$ et le troisième quartile $Q_3$. En déduire l'écart interquartile.

4. Construire le diagramme en boîte de la série.

5. a. Calculer la variance $V$ et l'écart type $\sigma$ de la série (arrondir $\sigma$ à $0{,}01$ près).

   b. Quel pourcentage des notes appartient à l'intervalle $[\overline{x} - \sigma\,;\,\overline{x} + \sigma]$ ?

---

## Solution

1. Série rangée : $7,\ 8,\ 9,\ 10,\ 10,\ 11,\ 11,\ 12,\ 12,\ 13,\ 14,\ 15$.

   Étendue : $15 - 7 = 8$.

2. La somme des notes vaut $132$, donc $\overline{x} = \dfrac{132}{12} = 11$.

3. $N = 12$ est pair : $M_e$ est la moyenne des valeurs de rangs $6$ et $7$, soit $M_e = \dfrac{11 + 11}{2} = 11$.

   $N = 12$ est un multiple de $4$ :
   - $Q_1$ est la valeur de rang $\dfrac{12}{4} = 3$, donc $Q_1 = 9$ ;
   - $Q_3$ est la valeur de rang $\dfrac{3 \times 12}{4} = 9$, donc $Q_3 = 12$.

   Écart interquartile : $Q_3 - Q_1 = 12 - 9 = 3$.

4. Le diagramme en boîte se construit avec les cinq valeurs $\min = 7$, $Q_1 = 9$, $M_e = 11$, $Q_3 = 12$, $\max = 15$. La boîte va de $9$ à $12$, avec un trait à $11$ pour la médiane. Les moustaches vont de $7$ à $9$ et de $12$ à $15$.

5. a. $\dfrac{1}{N}\sum x_i^2 = \dfrac{49 + 64 + 81 + 100 + 100 + 121 + 121 + 144 + 144 + 169 + 196 + 225}{12} = \dfrac{1514}{12} \approx 126{,}17$.

   $V = \dfrac{1514}{12} - 11^2 = \dfrac{1514 - 1452}{12} = \dfrac{62}{12} \approx 5{,}17$ et $\sigma = \sqrt{V} \approx 2{,}27$.

   b. $[\overline{x} - \sigma\,;\,\overline{x} + \sigma] \approx [8{,}73\,;\,13{,}27]$. Les notes qui appartiennent à cet intervalle sont $9,\ 10,\ 10,\ 11,\ 11,\ 12,\ 12,\ 13$, soit $8$ notes sur $12$.

   Pourcentage : $\dfrac{8}{12} \approx 66{,}7\,\%$. Environ deux tiers des notes sont à moins d'un écart type de la moyenne.
