---
uid: "0000390"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Achats dans une supérette"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "classes", "classe-modale", "moyenne"]
provenance: "own"
batch: "2026-11-19-3eco-statistiques-n5"
---

Montant des achats (en dinars) de $50$ clients d'une supérette :

| Montant | $[0,20[$ | $[20,40[$ | $[40,60[$ | $[60,80[$ | $[80,100[$ |
|---|---|---|---|---|---|
| Effectif | $6$ | $14$ | $20$ | $6$ | $4$ |

1. Donner la classe modale.

2. Calculer les fréquences en pourcentage. Quel pourcentage des clients a dépensé moins de $40$ D ?

3. Calculer le montant moyen des achats.

---

## Solution

1. Le plus grand effectif est $20$ : la classe modale est $[40,60[$.

2. $f_i=\dfrac{n_i}{50}\times100=2\,n_i\,\%$ :

   | Montant | $[0,20[$ | $[20,40[$ | $[40,60[$ | $[60,80[$ | $[80,100[$ |
   |---|---|---|---|---|---|
   | $f_i$ (%) | $12$ | $28$ | $40$ | $12$ | $8$ |

   Moins de $40$ D : $12+28=40\,\%$ des clients.

3.
   :::property[Série par classes]
   On remplace chaque classe $[a,b[$ par son **centre** $\boxed{c_i=\dfrac{a+b}{2}}$, puis $\boxed{\overline x=\dfrac{n_1c_1+\dots+n_pc_p}{N}}$.
   :::

   Centres : $10$, $30$, $50$, $70$, $90$.

   $$\displaystyle \overline x=\dfrac{6\times10+14\times30+20\times50+6\times70+4\times90}{50}$$

   $$\displaystyle \overline x=\dfrac{60+420+1\,000+420+360}{50}=\dfrac{2\,260}{50}=45{,}2\text{ D}$$
