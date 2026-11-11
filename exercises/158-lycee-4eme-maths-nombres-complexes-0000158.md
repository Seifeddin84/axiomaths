---
uid: "0000158"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1983 principale, Ex. 1"
title: "Équation à paramètre complexe, alignement et distances égales"
country: "Tunisie"
year: 1983
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "equation-second-degre", "ensemble-de-points", "alignement", "cercle"]
bac: "1983-principale-maths"
---

1. Résoudre dans $\mathbb{C}$ l'équation $z^2 - a(2 + i)\,z + 2a^2 i = 0$, $a$ étant un paramètre complexe. On désignera par $z'$ et $z''$ les solutions de cette équation.

2. Dans le plan rapporté à un repère orthonormé $(O, \vec{u}, \vec{v})$, on considère les points $A$, $N$, $M'$ et $M''$ d'affixes respectives $1$, $a$, $z'$ et $z''$.

   a. Déterminer l'ensemble $(C)$ des points $N$ pour lesquels les points $A$, $M'$ et $M''$ sont alignés.

   b. Déterminer l'ensemble $(C')$ des points $N$ pour lesquels on a : $AM' = AM''$.

---

## Solution

1. $2a + ia = a(2 + i)$ et $2a \cdot ia = 2a^2 i$ : les solutions sont $z' = 2a$ et $z'' = ia$ (pour $a = 0$, solution double $0$).

2. On pose $a = x + iy$ ($x$, $y$ réels) : $z' - 1 = (2x - 1) + 2iy$ et $z'' - 1 = -(y + 1) + ix$.

   a. Si $M' = A$, les trois points sont alignés. Sinon, $A$, $M'$, $M''$ sont alignés $\iff \dfrac{z'' - 1}{z' - 1}$ est réel $\iff \operatorname{Im}\left[(z'' - 1)\,\overline{(z' - 1)}\right] = 0$.

   $\operatorname{Im}\left[\big(-(y + 1) + ix\big)\big((2x - 1) - 2iy\big)\right] = 2y(y + 1) + x(2x - 1) = 2x^2 + 2y^2 - x + 2y$.

   La condition $x^2 + y^2 - \dfrac{x}{2} + y = 0$ s'écrit $\left(x - \dfrac14\right)^2 + \left(y + \dfrac12\right)^2 = \dfrac{5}{16}$, et le cas $M' = A$ ($a = \frac12$) la vérifie aussi.

   $(C)$ est le cercle de centre $\left(\dfrac14, -\dfrac12\right)$ et de rayon $\dfrac{\sqrt5}{4}$.

   b. $AM'^2 = AM''^2 \iff (2x - 1)^2 + 4y^2 = (y + 1)^2 + x^2 \iff 3x^2 + 3y^2 - 4x - 2y = 0$.

   $\iff \left(x - \dfrac23\right)^2 + \left(y - \dfrac13\right)^2 = \dfrac59$.

   $(C')$ est le cercle de centre $\left(\dfrac23, \dfrac13\right)$ et de rayon $\dfrac{\sqrt5}{3}$.

   *Remarque :* les deux cercles passent par $O$ (pour $a = 0$, $M' = M'' = O$).
