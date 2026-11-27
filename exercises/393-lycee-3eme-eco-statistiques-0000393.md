---
uid: "0000393"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Quelle machine est la plus régulière ?"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "variance", "ecart-type", "coefficient-de-variation"]
provenance: "own"
batch: "2026-11-19-3eco-statistiques-n5"
---

Une usine contrôle $20$ paquets remplis par chacune de ses deux machines. Masses en grammes :

| Machine A (paquets de $250$ g) | $246$ | $248$ | $250$ | $252$ | $254$ |
|---|---|---|---|---|---|
| Effectif | $2$ | $4$ | $8$ | $4$ | $2$ |

| Machine B (paquets de $1\,000$ g) | $994$ | $997$ | $1\,000$ | $1\,003$ | $1\,006$ |
|---|---|---|---|---|---|
| Effectif | $1$ | $4$ | $10$ | $4$ | $1$ |

1. Calculer la masse moyenne de chaque série.

2. Calculer la variance et l'écart type de chaque série (au centième).

3. Calculer le coefficient de variation $\dfrac{\sigma}{\overline x}$ de chaque série (en pourcentage, au centième).

4. Quelle machine est la plus régulière ? Justifier.

---

## Solution

1. Les deux tableaux sont symétriques autour de leur valeur centrale :

   $$\displaystyle \overline x_A=\dfrac{2\times246+4\times248+8\times250+4\times252+2\times254}{20}=\dfrac{5\,000}{20}=250\text{ g}$$

   $$\displaystyle \overline x_B=\dfrac{994+4\times997+10\times1\,000+4\times1\,003+1\,006}{20}=\dfrac{20\,000}{20}=1\,000\text{ g}$$

2.
   :::property[Variance avec les écarts]
   $\boxed{V=\dfrac{n_1(x_1-\overline x)^2+\dots+n_p(x_p-\overline x)^2}{N}}$ : elle donne le même résultat que « moyenne des carrés $-\ \overline x^{\,2}$ », avec des nombres plus petits.
   :::

   Machine A, écarts à $250$ : $-4$, $-2$, $0$, $2$, $4$.

   $$\displaystyle V_A=\dfrac{2\times16+4\times4+0+4\times4+2\times16}{20}=\dfrac{96}{20}=4{,}8\qquad\sigma_A=\sqrt{4{,}8}\approx2{,}19\text{ g}$$

   Machine B, écarts à $1\,000$ : $-6$, $-3$, $0$, $3$, $6$.

   $$\displaystyle V_B=\dfrac{36+4\times9+0+4\times9+36}{20}=\dfrac{144}{20}=7{,}2\qquad\sigma_B=\sqrt{7{,}2}\approx2{,}68\text{ g}$$

3.
   :::property[Coefficient de variation]
   $\boxed{CV=\dfrac{\sigma}{\overline x}}$ : il compare la dispersion de séries de moyennes différentes.
   :::

   $$\displaystyle CV_A=\dfrac{2{,}19}{250}\approx0{,}88\,\%\qquad CV_B=\dfrac{2{,}68}{1\,000}\approx0{,}27\,\%$$

4. $\sigma_B>\sigma_A$, mais les moyennes sont très différentes : il faut comparer les coefficients de variation.

   $CV_B<CV_A$ : **la machine B est la plus régulière** (relativement à la masse qu'elle doit remplir).

:::trap
Conclure avec les écarts types seuls ; une erreur de $2{,}7$ g sur $1$ kg est plus petite, en proportion, qu'une erreur de $2{,}2$ g sur $250$ g.
:::
