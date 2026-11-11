---
uid: "0000138"
school: "lycee"
level: "3eme"
section: ["Economie et Gestion"]
chapter: "Statistiques"
source: "Axiomaths"
title: "Durée des appels d'un service client : série groupée en classes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "classes", "effectifs-cumules", "interpolation-lineaire", "quartiles", "coefficient-de-variation"]
---

Un service client a relevé la durée (en minutes) de $80$ appels téléphoniques.

| Durée (min) | $[0\,;\,5[$ | $[5\,;\,10[$ | $[10\,;\,15[$ | $[15\,;\,20[$ | $[20\,;\,30[$ |
|---|---|---|---|---|---|
| Nombre d'appels | $12$ | $20$ | $24$ | $16$ | $8$ |

1. a. Recopier le tableau et le compléter par la ligne des centres des classes et la ligne des effectifs cumulés croissants.

   b. Construire le polygone des effectifs cumulés croissants.

2. Calculer la durée moyenne $\overline{x}$ d'un appel.

3. Calculer la variance $V$, puis l'écart type $\sigma$ (arrondir à $0{,}01$ près). Calculer le coefficient de variation $\dfrac{\sigma}{\overline{x}}$.

4. On suppose que, dans chaque classe, les durées sont réparties uniformément.

   a. Déterminer par interpolation linéaire la médiane $M_e$ et les quartiles $Q_1$ et $Q_3$.

   b. Comparer la moyenne et la médiane. Que peut-on en déduire sur la répartition des durées ?

5. Le responsable affirme : « Plus de la moitié des appels durent moins de $12$ minutes. » A-t-il raison ?

---

## Solution

1. a. Tableau complété :

   | Durée (min) | $[0\,;\,5[$ | $[5\,;\,10[$ | $[10\,;\,15[$ | $[15\,;\,20[$ | $[20\,;\,30[$ |
   |---|---|---|---|---|---|
   | Centre $x_i$ | $2{,}5$ | $7{,}5$ | $12{,}5$ | $17{,}5$ | $25$ |
   | Effectif $n_i$ | $12$ | $20$ | $24$ | $16$ | $8$ |
   | ECC (borne de droite) | $12$ | $32$ | $56$ | $72$ | $80$ |

   b. On relie les points $(0\,;\,0)$, $(5\,;\,12)$, $(10\,;\,32)$, $(15\,;\,56)$, $(20\,;\,72)$ et $(30\,;\,80)$.

2. $\overline{x} = \dfrac{12 \times 2{,}5 + 20 \times 7{,}5 + 24 \times 12{,}5 + 16 \times 17{,}5 + 8 \times 25}{80} = \dfrac{30 + 150 + 300 + 280 + 200}{80} = \dfrac{960}{80} = 12$ minutes.

3. $\dfrac{1}{N}\sum n_i x_i^2 = \dfrac{12 \times 6{,}25 + 20 \times 56{,}25 + 24 \times 156{,}25 + 16 \times 306{,}25 + 8 \times 625}{80} = \dfrac{14\,850}{80} = 185{,}625$.

   $V = 185{,}625 - 12^2 = 41{,}625$ et $\sigma = \sqrt{41{,}625} \approx 6{,}45$ minutes.

   Coefficient de variation : $\dfrac{\sigma}{\overline{x}} \approx \dfrac{6{,}45}{12} \approx 0{,}54$. La dispersion est forte : l'écart type représente plus de la moitié de la moyenne.

4. a. On a $N = 80$, donc on cherche les effectifs cumulés $\dfrac{N}{4} = 20$, $\dfrac{N}{2} = 40$ et $\dfrac{3N}{4} = 60$.

   - $Q_1$ : $20$ est entre $\text{ECC}(5) = 12$ et $\text{ECC}(10) = 32$, d'où $Q_1 = 5 + 5 \times \dfrac{20 - 12}{32 - 12} = 7$ min.
   - $M_e$ : $40$ est entre $\text{ECC}(10) = 32$ et $\text{ECC}(15) = 56$, d'où $M_e = 10 + 5 \times \dfrac{40 - 32}{56 - 32} \approx 11{,}67$ min.
   - $Q_3$ : $60$ est entre $\text{ECC}(15) = 56$ et $\text{ECC}(20) = 72$, d'où $Q_3 = 15 + 5 \times \dfrac{60 - 56}{72 - 56} = 16{,}25$ min.

   b. $\overline{x} = 12 > M_e \approx 11{,}67$. Les appels longs (classe $[20\,;\,30[$) tirent la moyenne vers le haut : la répartition est un peu étalée vers les grandes durées. Pour décrire un appel « ordinaire », la médiane est plus représentative.

5. On calcule l'effectif cumulé en $12$ par interpolation dans la classe $[10\,;\,15[$ :
   $$\text{ECC}(12) = 32 + 24 \times \frac{12 - 10}{15 - 10} = 32 + 9{,}6 = 41{,}6.$$
   Cela représente $\dfrac{41{,}6}{80} = 52\,\%$ des appels : le responsable a raison, mais de justesse. On pouvait aussi le voir directement : $M_e \approx 11{,}67 < 12$, donc plus de la moitié des appels durent moins de $12$ minutes.
