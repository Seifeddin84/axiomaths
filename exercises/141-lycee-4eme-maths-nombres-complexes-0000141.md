---
uid: "0000141"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1990 principale, Ex. 1"
title: "Équation du troisième degré et losange"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "equation-troisieme-degre", "forme-trigonometrique", "losange"]
bac: "1990-principale-maths"
---

Pour tout nombre complexe $z$ on pose : $f(z) = z^3 + 2\left(-\sqrt{3} + i\right) z^2 + 4\left(1 - i\sqrt{3}\right) z + 8i$.

1. a. Montrer que l'équation $f(z) = 0$ possède une racine imaginaire pure $z_0$ que l'on déterminera.

   b. Résoudre alors l'équation $f(z) = 0$. On notera $z_1$ et $z_2$ les deux autres racines, $z_1$ étant celle qui a une partie imaginaire négative.

2. On pose $\omega = \dfrac{z_1}{z_0}$.

   a. Donner la forme trigonométrique de $\omega$.

   b. Le plan complexe est rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$. À tout nombre complexe $z$ non nul on associe les points $M$, $M_1$ et $M_2$ d'affixes respectives $z$, $\omega z$ et $\omega^2 z$. Montrer que $OMM_1M_2$ est un losange.

---

## Solution

1. a. On cherche $z_0 = iy$ avec $y$ réel. $f(iy) = -iy^3 - 2\left(-\sqrt3 + i\right)y^2 + 4\left(i + \sqrt3\right)y + 8i$.

   Partie réelle : $2\sqrt3\,y^2 + 4\sqrt3\,y = 2\sqrt3\,y(y + 2) = 0$. Partie imaginaire : $-y^3 - 2y^2 + 4y + 8 = -(y + 2)(y^2 - 4) = 0$.

   La valeur commune est $y = -2$ : $z_0 = -2i$.

   b. On factorise : $f(z) = (z + 2i)\left(z^2 - 2\sqrt3\,z + 4\right)$ (on vérifie en développant).

   $\Delta' = 3 - 4 = -1 = i^2$, donc $z = \sqrt3 \pm i$.

   $z_1 = \sqrt3 - i$, $z_2 = \sqrt3 + i$, et $S = \left\{-2i,\ \sqrt3 - i,\ \sqrt3 + i\right\}$.

2. a. $\omega = \dfrac{\sqrt3 - i}{-2i} = \dfrac{(\sqrt3 - i)\,i}{2} = \dfrac12 + i\,\dfrac{\sqrt3}{2} = \cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3}$.

   b. $\omega = e^{i\pi/3}$ vérifie $\omega^2 - \omega + 1 = 0$ (car $\omega^3 = -1$ et $\omega \neq -1$), donc $z + \omega^2 z = \omega z$.

   Ainsi $\overrightarrow{OM} + \overrightarrow{OM_2} = \overrightarrow{OM_1}$ : $OMM_1M_2$ est un parallélogramme (non aplati car $\omega$ n'est pas réel).

   De plus $OM = |z|$ et $OM_2 = |\omega^2 z| = |z|$ : deux côtés consécutifs égaux, c'est un losange.

   *Remarque :* $(\overrightarrow{OM}, \overrightarrow{OM_2}) \equiv \dfrac{2\pi}{3}\ [2\pi]$, donc le losange est formé de deux triangles équilatéraux $OMM_1$ et $OM_1M_2$.
