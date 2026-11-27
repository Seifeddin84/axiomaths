---
uid: "0000387"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Pointures vendues"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "serie-discrete", "effectifs", "moyenne"]
provenance: "own"
dressing: "pointures : mode, moyenne, médiane"
rung: 1
batch: "2026-11-19-3eco-statistiques-n5"
---

Un magasin de chaussures a relevé les pointures des $40$ paires vendues un samedi :

| Pointure $x_i$ | $38$ | $39$ | $40$ | $41$ | $42$ | $43$ |
|---|---|---|---|---|---|---|
| Effectif $n_i$ | $4$ | $6$ | $12$ | $10$ | $4$ | $4$ |

1. Donner le mode et l'étendue de la série.

2. Calculer les fréquences en pourcentage. Quel pourcentage des paires vendues a une pointure au moins égale à $41$ ?

3. Calculer la pointure moyenne.

4. Dresser le tableau des effectifs cumulés croissants, puis déterminer la médiane.

---

## Solution

1.
   :::property[Mode, étendue]
   Le **mode** est la valeur de plus grand effectif ; l'**étendue** vaut $\boxed{x_{\max}-x_{\min}}$.
   :::

   Le plus grand effectif est $12$ : le mode est $40$. Étendue : $43-38=5$.

2.
   :::property[Fréquence]
   $\boxed{f_i=\dfrac{n_i}{N}}$, que l'on multiplie par $100$ pour l'avoir en pourcentage.
   :::

   Ici $N=40$, donc $f_i=\dfrac{n_i}{40}\times100=2{,}5\,n_i\,\%$ :

   | $x_i$ | $38$ | $39$ | $40$ | $41$ | $42$ | $43$ |
   |---|---|---|---|---|---|---|
   | $f_i$ (%) | $10$ | $15$ | $30$ | $25$ | $10$ | $10$ |

   Pointure au moins égale à $41$ : $25+10+10=45\,\%$.

3.
   :::property[Moyenne]
   $\boxed{\overline x=\dfrac{n_1x_1+n_2x_2+\dots+n_px_p}{N}}$.
   :::

   $$\displaystyle \overline x=\dfrac{4\times38+6\times39+12\times40+10\times41+4\times42+4\times43}{40}$$

   $$\displaystyle \overline x=\dfrac{152+234+480+410+168+172}{40}=\dfrac{1\,616}{40}=40{,}4$$

4. Effectifs cumulés croissants :

   | $x_i$ | $38$ | $39$ | $40$ | $41$ | $42$ | $43$ |
   |---|---|---|---|---|---|---|
   | ECC | $4$ | $10$ | $22$ | $32$ | $36$ | $40$ |

   :::property[Médiane, effectif pair]
   Si $N$ est pair, la médiane est la moyenne des valeurs de rangs $\boxed{\dfrac N2\text{ et }\dfrac N2+1}$.
   :::

   $N=40$ : on cherche les valeurs de rangs $20$ et $21$. Les ECC passent de $10$ à $22$ en $40$ : ces deux valeurs valent $40$.

   $$\displaystyle \text{Me}=\dfrac{40+40}{2}=40$$
