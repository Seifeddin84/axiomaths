---
uid: "0000001"
school: "lycee"
level: "4eme"
section: "maths"
chapter: "Similitude"
source: "Bac Tunisie 1984"
title: "Similitude complexe"
country: "Tunisie"
year: 1984
professor: null
difficulty: "Facile"
points: 4
tags: ["complex-numbers", "geometry"]
---

Soit $\mathcal{P}$ un plan affine euclidien orienté rapporté à un repère orthonormé $(O, \vec{u}, \vec{v})$.

On donne les points $A(1,0)$, $B(-1,0)$ et $C(-1,-1)$.

À tout point $M$ d'affixe $z$, on fait correspondre :

- Le point $M_1$ d'affixe $z_1$ par l'homothétie de centre $A$ et de rapport 2.
- Le point $M_2$ d'affixe $z_2$ par la similitude directe de centre $B$, de rapport 2 et d'angle $\frac{\pi}{2}$.

1. Calculer $z_1$ et $z_2$ en fonction de $z$.

2. Soit $H'$ le milieu de $[M_1 M_2]$.
   
   a. Calculer l'affixe $z'$ du point $M'$ en fonction de $z$.
   
   b. Caractériser l'application $T$ qui au point $M$ associe $M'$.

3. Démontrer que, pour $M \neq C$, le triangle $CM'M$ est rectangle isocèle.

---

## Solution

1. **Expression de $z_1$ et $z_2$ :**
   - Homothétie $h(A,2)$ : $z_1 - z_A = 2(z - z_A) \implies z_1 = 2z - 1$.
   - Similitude $s(B, 2, \frac{\pi}{2})$ : $z_2 - z_B = 2e^{i\frac{\pi}{2}}(z - z_B) \implies z_2 = 2iz + 2i - 1$.

2. a. Milieu $H'$ : $z' = \frac{z_1 + z_2}{2} = (1+i)z - 1 + i$.
   
   b. $T$ est une similitude directe de rapport $\sqrt{2}$ et d'angle $\frac{\pi}{4}$.

3. On trouve $Q = \frac{z' - z_C}{z - z_C} = 1+i$ donc $|Q| = \sqrt{2}$ et $\arg(Q) = \frac{\pi}{4}$.