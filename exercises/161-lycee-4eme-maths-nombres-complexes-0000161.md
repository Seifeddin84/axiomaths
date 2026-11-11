---
uid: "0000161"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1981 principale, Ex. 1"
title: "Une équation du troisième degré ramenée à Z³ = i"
country: "Tunisie"
year: 1981
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "racines-n-iemes", "changement-d-inconnue", "equation-troisieme-degre"]
bac: "1981-principale-maths"
---

On considère l'application $f : \mathbb{C} \to \mathbb{C}$, $z \longmapsto Z = (1 + i)\,z - 2$.

1. Montrer qu'un nombre complexe $z$ est solution de l'équation $2(1 - i)\,z^3 + 12i\,z^2 - 12(1 + i)\,z + 8 + i = 0$ si et seulement si son image $Z$ par $f$ est solution de l'équation $Z^3 = i$.

2. a. Résoudre dans $\mathbb{C}$ l'équation $Z^3 = i$.

   b. En déduire les solutions de l'équation $2(1 - i)\,z^3 + 12i\,z^2 - 12(1 + i)\,z + 8 + i = 0$.

---

## Solution

1. $(1 + i)^2 = 2i$ et $(1 + i)^3 = 2i(1 + i) = -2 + 2i$. On développe :

   $Z^3 = (1 + i)^3 z^3 - 3 \cdot 2\,(1 + i)^2 z^2 + 3 \cdot 4\,(1 + i)\,z - 8 = (-2 + 2i)z^3 - 12i\,z^2 + 12(1 + i)z - 8$.

   $Z^3 = i \iff (-2 + 2i)z^3 - 12i\,z^2 + 12(1 + i)z - 8 - i = 0$, et en multipliant par $-1$ on obtient l'équation de l'énoncé.

2. a. $i = e^{i\pi/2}$ : $Z^3 = i \iff Z = e^{i\left(\frac{\pi}{6} + \frac{2k\pi}{3}\right)}$, $k \in \{0, 1, 2\}$.

   $Z_0 = \dfrac{\sqrt3}{2} + \dfrac{i}{2}$, $Z_1 = -\dfrac{\sqrt3}{2} + \dfrac{i}{2}$, $Z_2 = -i$.

   b. $f$ est bijective, de réciproque $z = \dfrac{Z + 2}{1 + i} = \dfrac{(Z + 2)(1 - i)}{2}$. D'après 1., les solutions sont les $\dfrac{(Z_k + 2)(1 - i)}{2}$ :

   $z_0 = \dfrac{5 + \sqrt3}{4} - i\,\dfrac{3 + \sqrt3}{4}$, $z_1 = \dfrac{5 - \sqrt3}{4} + i\,\dfrac{\sqrt3 - 3}{4}$, $z_2 = \dfrac{1 - 3i}{2}$.

   *Remarque :* les points $Z_0$, $Z_1$, $Z_2$ forment un triangle équilatéral ; $f^{-1}$ est une similitude directe, donc les images des solutions $z_k$ forment aussi un triangle équilatéral.
