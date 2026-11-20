---
uid: "0000292"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Prix et demande : ajustement et prévision"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "serie-double", "droite-de-mayer", "demande", "prevision", "interpretation"]
provenance: "own"
dressing: "ajustement affine"
rung: 3
batch: "2026-11-20-stat-3eco-A"
---

Une coopérative a observé la quantité demandée $y$ (en tonnes) d'un produit selon son prix $x$ (en dinars le kilo) :

| Prix $x_i$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|
| Demande $y_i$ | $96$ | $90$ | $83$ | $78$ | $70$ | $64$ | $57$ | $52$ |

1. Calculer les points moyens $G_1$ (quatre premiers prix) et $G_2$ (quatre derniers).

2. Déterminer l'équation de la droite de Mayer $y=ax+b$. Interpréter le signe de $a$.

3. Estimer la demande si le prix est fixé à $10$ dinars.

4. Pour quel prix cet ajustement prévoit-il une demande nulle ? Ce résultat est-il utilisable pour un prix de $20$ dinars ? Commenter.

---

## Solution

1. Points moyens des deux sous-nuages de $4$ points (prix $2$ à $5$, puis $6$ à $9$) :

   $$\displaystyle G_1:\ \overline{x}_1=\frac{2+3+4+5}4=3{,}5,\quad\overline{y}_1=\frac{96+90+83+78}4=\frac{347}4=86{,}75.$$

   $$\displaystyle G_2:\ \overline{x}_2=\frac{6+7+8+9}4=7{,}5,\quad\overline{y}_2=\frac{70+64+57+52}4=\frac{243}4=60{,}75.$$

2. Pente : $a=\dfrac{60{,}75-86{,}75}{7{,}5-3{,}5}=\dfrac{-26}4=-6{,}5$. Ordonnée à l'origine, avec $G_1$ : $86{,}75=-6{,}5\times3{,}5+b\Rightarrow b=86{,}75+22{,}75=109{,}5$.

   $$\displaystyle \boxed{y=-6{,}5\,x+109{,}5}.$$

   $a<0$ : quand le prix augmente de $1$ dinar, la demande baisse d'environ $6{,}5$ tonnes (loi de la demande).

3. $x=10$ : $y=-6{,}5\times10+109{,}5=-65+109{,}5=44{,}5$ tonnes.

4. $-6{,}5\,x+109{,}5=0\iff x=\dfrac{109{,}5}{6{,}5}=\dfrac{219}{13}\approx16{,}85$ dinars.

   Pour $x=20$ : $y=-130+109{,}5=-20{,}5<0$ : une quantité ne peut pas être négative.

   :::trap
   L'ajustement n'est valable que sur (ou près de) l'intervalle observé $2\le x\le9$. Au-delà de $16{,}85$ dinars, la droite perd tout sens économique : il ne faut jamais extrapoler loin des données.
   :::

:::intuition
Un ajustement affine décrit la tendance dans la zone observée, pas au-delà.
:::
