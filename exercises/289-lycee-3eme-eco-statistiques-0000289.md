---
uid: "0000289"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Âge des clients d'une agence de voyages"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "classes", "effectifs-cumules", "interpolation", "quartiles", "ecart-type"]
provenance: "own"
dressing: "série groupée en classes"
rung: 3
batch: "2026-11-20-stat-3eco-A"
---

Une agence de voyages a relevé l'âge de ses $80$ clients du mois :

| Âge (ans) | $[0\,;10[$ | $[10\,;20[$ | $[20\,;30[$ | $[30\,;40[$ | $[40\,;50[$ |
|---|---|---|---|---|---|
| Effectif $n_i$ | $8$ | $20$ | $28$ | $16$ | $8$ |

1. Calculer l'âge moyen, la variance et l'écart type (on remplace chaque classe par son centre).

2. Dresser le tableau des effectifs cumulés croissants.

3. Déterminer par interpolation linéaire la médiane $M_e$ et les quartiles $Q_1$, $Q_3$. Calculer l'écart interquartile.

4. Estimer le pourcentage de clients de moins de $35$ ans.

---

## Solution

| Classe | $[0;10[$ | $[10;20[$ | $[20;30[$ | $[30;40[$ | $[40;50[$ | Total |
|---|---|---|---|---|---|---|
| Centre $x_i$ | $5$ | $15$ | $25$ | $35$ | $45$ |  |
| $n_i$ | $8$ | $20$ | $28$ | $16$ | $8$ | $80$ |
| $n_ix_i$ | $40$ | $300$ | $700$ | $560$ | $360$ | $1\,960$ |
| $n_ix_i^2$ | $200$ | $4\,500$ | $17\,500$ | $19\,600$ | $16\,200$ | $58\,000$ |
| ECC (borne sup.) | $8$ | $28$ | $56$ | $72$ | $80$ |  |

1. On remplace chaque classe par son centre (calcul approché).

   $$
   \displaystyle \overline{x}=\frac{1\,960}{80}=\boxed{24{,}5}\text{ ans}\qquad
     V=\frac{58\,000}{80}-24{,}5^2=725-600{,}25=124{,}75\qquad\sigma\approx\boxed{11{,}17}.
   $$

2. Voir la dernière ligne du tableau : $8,\ 28,\ 56,\ 72,\ 80$.

3. **Rappel.**

   :::property[Interpolation linéaire]
   Si le rang $r$ cherché se trouve dans la classe $[a;b[$ et si $c_1$, $c_2$ sont les effectifs cumulés en $a$ et en $b$, alors

   $$\displaystyle Q=a+(b-a)\times\frac{r-c_1}{c_2-c_1}.$$

   On suppose les valeurs uniformément réparties dans la classe.
   :::

   *$Q_1$* : rang $\dfrac{80}4=20$. ECC$(10)=8<20\le$ ECC$(20)=28$, donc dans $[10;20[$ :

   $$\displaystyle Q_1=10+10\times\frac{20-8}{28-8}=10+10\times\frac{12}{20}=\boxed{16}.$$

   *Médiane* : rang $40$, ECC$(20)=28<40\le$ ECC$(30)=56$, classe $[20;30[$ :

   $$\displaystyle M_e=20+10\times\frac{40-28}{56-28}=20+\frac{120}{28}=\frac{170}7\approx\boxed{24{,}29}.$$

   *$Q_3$* : rang $60$, ECC$(30)=56<60\le$ ECC$(40)=72$, classe $[30;40[$ :

   $$\displaystyle Q_3=30+10\times\frac{60-56}{72-56}=30+10\times\frac4{16}=\boxed{32{,}5}.$$

   Écart interquartile : $Q_3-Q_1=32{,}5-16=16{,}5$ ans.

4. On cherche l'effectif cumulé en $35$, milieu de $[30;40[$ : on est à mi-chemin entre ECC$(30)=56$ et ECC$(40)=72$ :

   $$\displaystyle 56+\frac{35-30}{40-30}\times(72-56)=56+0{,}5\times16=64.$$

   $\dfrac{64}{80}=0{,}80$ : environ $\boxed{80\,\%}$ des clients ont moins de $35$ ans.

   :::trap
   L'interpolation donne une *estimation*, car on ne connaît pas la répartition exacte à l'intérieur de la classe.
   :::

:::intuition
Dans une classe on suppose les valeurs régulièrement réparties : les quartiles se lisent par interpolation sur les effectifs cumulés.
:::
