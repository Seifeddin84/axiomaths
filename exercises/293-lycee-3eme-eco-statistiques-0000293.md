---
uid: "0000293"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Heures de révision et note : tableau à double entrée"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "serie-double", "covariance"]
provenance: "own"
dressing: "tableau à double entrée"
rung: 3
batch: "2026-11-20-stat-3eco-A"
---

On a interrogé $30$ élèves sur le nombre $X$ d'heures de révision avant un devoir et noté la note $Y$ obtenue sur $20$. Les effectifs $n_{ij}$ sont donnés dans le tableau :

| $X\backslash Y$ | $8$ | $12$ | $16$ |
|---|---|---|---|
| $2$ h | $4$ | $2$ | $0$ |
| $4$ h | $3$ | $7$ | $2$ |
| $6$ h | $1$ | $5$ | $6$ |

1. Compléter le tableau avec les marges (effectifs marginaux de $X$ et de $Y$).

2. Calculer les moyennes $\overline{x}$ et $\overline{y}$ et donner les coordonnées du point moyen $G$.

3. Donner la distribution des fréquences marginales de $Y$ (en fractions irréductibles).

4. Quelle proportion des élèves ayant révisé au moins $4$ heures a obtenu au moins $12$ ?

---

## Solution

1. Marges : somme de chaque ligne (pour $X$) et de chaque colonne (pour $Y$).

   | $X\backslash Y$ | $8$ | $12$ | $16$ | Total |
   |---|---|---|---|---|
   | $2$ h | $4$ | $2$ | $0$ | $6$ |
   | $4$ h | $3$ | $7$ | $2$ | $12$ |
   | $6$ h | $1$ | $5$ | $6$ | $12$ |
   | Total | $8$ | $14$ | $8$ | $30$ |

   Contrôle : $6+12+12=30$ et $8+14+8=30$ $\checkmark$

2. **Rappel.**

   :::property[Moyennes marginales]
   $\displaystyle\overline{x}=\frac1N\sum n_{i\bullet}\,x_i$ et $\displaystyle\overline{y}=\frac1N\sum n_{\bullet j}\,y_j$, où $n_{i\bullet}$ et $n_{\bullet j}$ sont les effectifs marginaux.
   :::

   $$\displaystyle \overline{x}=\frac{6\times2+12\times4+12\times6}{30}=\frac{12+48+72}{30}=\frac{132}{30}=4{,}4$$

   $$\displaystyle \overline{y}=\frac{8\times8+14\times12+8\times16}{30}=\frac{64+168+128}{30}=\frac{360}{30}=12$$

   $$\displaystyle \boxed{G(4{,}4\,;12)}.$$

3. Fréquences marginales de $Y$ : effectif marginal divisé par $N=30$.

   $$\displaystyle f(8)=\frac8{30}=\frac4{15}\qquad f(12)=\frac{14}{30}=\frac7{15}\qquad f(16)=\frac8{30}=\frac4{15}.$$

   Contrôle : $\dfrac4{15}+\dfrac7{15}+\dfrac4{15}=1$ $\checkmark$

4. On se restreint aux lignes $X=4$ et $X=6$ : $12+12=24$ élèves. Parmi eux, ceux dont la note est $12$ ou $16$ : $(7+2)+(5+6)=20$.

   $$\displaystyle \frac{20}{24}=\frac56\approx\boxed{83\,\%}.$$

   :::trap
   La proportion demandée est calculée sur les $24$ élèves qui ont révisé au moins $4$ heures, pas sur les $30$ élèves.
   :::

:::intuition
Les marges ramènent un tableau à double entrée à deux séries simples, dont on calcule les moyennes.
:::
