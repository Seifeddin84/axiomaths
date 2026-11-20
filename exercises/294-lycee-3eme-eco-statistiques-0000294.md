---
uid: "0000294"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Équilibre du marché : offre et demande"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["statistiques", "serie-double", "droite-de-mayer", "offre-demande", "equilibre", "modelisation"]
provenance: "own"
dressing: "deux ajustements"
rung: 4
batch: "2026-11-20-stat-3eco-A"
---

Pour un produit agricole, le prix $x$ est exprimé en dinars le kilo. Des enquêtes ont fourni :

- côté **demande** : un ajustement affine donne $y_d=-6{,}5\,x+109{,}5$ (en tonnes) ;

- côté **offre** : les producteurs ont proposé les quantités $y_s$ (en tonnes) suivantes :

| Prix $x_i$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|
| Offre $y_{s,i}$ | $30$ | $38$ | $44$ | $53$ | $58$ | $64$ | $70$ | $77$ |

1. Par la méthode de Mayer (deux sous-nuages de $4$ points), déterminer une équation $y_s=ax+b$ de la droite d'ajustement de l'offre.

2. Résoudre $y_s=y_d$. En déduire le prix d'équilibre et la quantité échangée à l'équilibre.

3. Pour un prix de $5$ dinars, calculer $y_s$ et $y_d$. Y a-t-il pénurie ou excédent ? De combien de tonnes ?

4. Interpréter graphiquement le prix d'équilibre.

---

## Solution

1. Sous-nuages : prix $2$ à $5$, puis prix $6$ à $9$.

   $$
   \displaystyle H_1:\ \overline{x}=3{,}5,\ \overline{y}=\frac{30+38+44+53}4=\frac{165}4=41{,}25\qquad
     H_2:\ \overline{x}=7{,}5,\ \overline{y}=\frac{58+64+70+77}4=\frac{269}4=67{,}25.
   $$

   Pente : $a=\dfrac{67{,}25-41{,}25}{7{,}5-3{,}5}=\dfrac{26}4=6{,}5$. Puis $41{,}25=6{,}5\times3{,}5+b$ donne $b=41{,}25-22{,}75=18{,}5$.

   $$\displaystyle \boxed{y_s=6{,}5\,x+18{,}5}.$$

2. L'équilibre est atteint quand l'offre est égale à la demande :

   $$\displaystyle 6{,}5\,x+18{,}5=-6{,}5\,x+109{,}5\iff13\,x=91\iff x=7.$$

   Quantité échangée : $y_s(7)=6{,}5\times7+18{,}5=45{,}5+18{,}5=64$. *Vérification* avec la demande : $-6{,}5\times7+109{,}5=64$ $\checkmark$

   Prix d'équilibre : $\boxed{7\text{ dinars le kilo}}$ ; quantité d'équilibre : $\boxed{64\text{ tonnes}}$.

3. Pour $x=5$ :

   $$\displaystyle y_s=6{,}5\times5+18{,}5=51\qquad y_d=-6{,}5\times5+109{,}5=77.$$

   La demande ($77$ t) dépasse l'offre ($51$ t) : **pénurie** de $77-51=26$ tonnes. Les acheteurs sont prêts à payer plus cher : le prix monte vers $7$ dinars.

4. Dans un repère $(x\,;y)$, la droite d'offre est croissante, celle de demande décroissante. Elles se coupent au point $(7\,;64)$ : son abscisse est le prix d'équilibre et son ordonnée la quantité échangée.

:::intuition
Le prix d'équilibre est l'abscisse du point d'intersection des deux droites d'ajustement.
:::
