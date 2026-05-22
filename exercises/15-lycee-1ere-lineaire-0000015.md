---
uid: "0000015"
school: "lycee"
level: "1ere"
section: null
chapter: "Fonctions linéaires et Affines"
source: "Lycée la Soukra : Ariana"
title: "Fonction linéaire définie par une expression"
country: "Tunisie"
year: 2026
professor: "El GHali Mounir"
difficulty: "Moyen"
points: 5
tags: ["fonction linéaire"]
---

Soit $f$ la fonction définie par : $f(x) = 3(x - 1)^2 - (2x^2 + 3) - x(x - 4)$.


1.  Montrer que $f$ est une fonction linéaire de coefficient $(-2)$.

2.  Soit $(O,I,J)$ un repère du plan.

    a.   Construire la droite $\Delta$ représentation graphique dans le repère $(O,I,J)$.
        
    b.  Le point $E\left(1 - \sqrt{2} \, ; \, \dfrac{2}{1+\sqrt{2}}\right)$ appartient-il à la droite $\Delta$ ?

    c.  Déterminer le réel $m$ pour que les points $E, O$ et $M(m^2 - m \, ; \, 10m + 6)$ soient alignés.

---

## Solution

1. **Développement de $f(x)$ :**
   $f(x) = 3(x^2 - 2x + 1) - 2x^2 - 3 - x^2 + 4x$

   $f(x) = 3x^2 - 6x + 3 - 2x^2 - 3 - x^2 + 4x$

   $f(x) = -2x$.

   C'est bien une fonction linéaire de coefficient $-2$.

2. a) $\Delta$ est la droite passant par l'origine $O(0,0)$ et par le point $(1, -2)$.

   b) Essayer de calculer $f(1-\sqrt{2})$ et de montrer que c'est bel et bien $\dfrac{2}{1+\sqrt{2}}$.


   c) Pour que $O, E, M$ soient alignés, $M$ doit appartenir à $\Delta$ (car $E \in \Delta$ et $O \in \Delta$).

   On doit avoir $f(x_M) = y_M$ :

   $-2(m^2 - m) = 10m + 6 \implies -2m^2 + 2m = 10m + 6 \implies 2m^2 + 8m + 6 = 0$.

   En divisant par 2 : $m^2 + 4m + 3 = 0$. Les solutions sont $m = -1$ et $m = -3$ (penser au produit remarquable $(m+2)^2$)
