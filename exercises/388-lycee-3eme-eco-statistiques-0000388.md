---
uid: "0000388"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Réclamations journalières"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "moyenne", "variance", "ecart-type"]
provenance: "own"
batch: "2026-11-19-3eco-statistiques-n5"
---

Un service après-vente a noté le nombre de réclamations reçues chaque jour pendant $20$ jours :

| Réclamations $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Nombre de jours $n_i$ | $2$ | $5$ | $6$ | $5$ | $2$ |

1. Calculer le nombre moyen de réclamations par jour.

2. Calculer la variance $V$ et l'écart type $\sigma$ (au centième).

3. Quel pourcentage des jours compte au moins $4$ réclamations ?

---

## Solution

1. $N=20$ :

   $$\displaystyle \overline x=\dfrac{2\times1+5\times2+6\times3+5\times4+2\times5}{20}=\dfrac{2+10+18+20+10}{20}=\dfrac{60}{20}=3$$

2.
   :::property[Variance et écart type]
   $\boxed{V=\dfrac{n_1x_1^2+\dots+n_px_p^2}{N}-\overline x^{\,2}}$ et $\boxed{\sigma=\sqrt V}$.
   :::

   On calcule d'abord la moyenne des carrés :

   $$\displaystyle \dfrac{2\times1+5\times4+6\times9+5\times16+2\times25}{20}=\dfrac{2+20+54+80+50}{20}=\dfrac{206}{20}=10{,}3$$

   $$\displaystyle V=10{,}3-3^2=10{,}3-9=1{,}3\qquad\sigma=\sqrt{1{,}3}\approx1{,}14$$

3. Au moins $4$ réclamations : $5+2=7$ jours sur $20$, soit $\dfrac{7}{20}=35\,\%$.
