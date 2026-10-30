---
uid: "0000001"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Similitudes"
source: "Bac Tunisie 1984"
title: "Similitude complexe"
country: "Tunisie"
year: 1984
professor: Bac
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

2. Soit $M'$ le milieu de $[M_1 M_2]$.
   
   a. Calculer l'affixe $z'$ du point $M'$ en fonction de $z$.
   
   b. Caractériser l'application $T$ qui au point $M$ associe $M'$.

3. Démontrer que, pour $M \neq C$, le triangle $CM'M$ est rectangle isocèle.

---

## Solution

1. **Expression de $z_1$ et $z_2$ :**
   - Homothétie $h(A,2)$ : $z_1 - z_A = 2(z - z_A) \implies z_1 = 2z - 1$.
   - Similitude $s(B, 2, \frac{\pi}{2})$ : $z_2 - z_B = 2e^{i\frac{\pi}{2}}(z - z_B) \implies z_2 = 2iz + 2i - 1$.

2. a. Milieu $M'$ : $z' = \frac{z_1 + z_2}{2} = (1+i)z - 1 + i$.
   
   b. $z' = az + b$ avec $a = 1+i$, $|a| = \sqrt{2}$ et $\arg(a) \equiv \frac{\pi}{4}\ [2\pi]$. Le centre est le point fixe : $z = (1+i)z - 1 + i \iff iz = 1 - i \iff z = -1 - i = z_C$.

   $T$ est la similitude directe de centre $C$, de rapport $\sqrt{2}$ et d'angle $\frac{\pi}{4}$.

3. Comme $C$ est le centre de $T$ : $Q = \frac{z' - z_C}{z - z_C} = 1+i$, donc $CM' = \sqrt{2}\,CM$ et $(\overrightarrow{CM}, \overrightarrow{CM'}) \equiv \frac{\pi}{4}\ [2\pi]$.

   Par Al-Kashi : $MM'^2 = CM^2 + 2CM^2 - 2\sqrt{2}\,CM^2\cos\frac{\pi}{4} = CM^2$, donc $MM' = CM$ et $CM'^2 = CM^2 + MM'^2$.

   Le triangle $CMM'$ est rectangle isocèle en $M$.