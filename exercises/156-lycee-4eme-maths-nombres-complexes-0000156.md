---
uid: "0000156"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1986 principale, Ex. 2"
title: "Triangle équilatéral et équation du troisième degré"
country: "Tunisie"
year: 1986
professor: null
difficulty: "Difficile"
points: 4
tags: ["bac", "triangle-equilateral", "racines-cubiques-de-l-unite", "equation-troisieme-degre"]
bac: "1986-principale-maths"
---

Le plan est rapporté à un repère orthonormé direct.

1. Soit $M_1$, $M_2$, $M_3$ les points d'affixes respectives $z_1$, $z_2$, $z_3$. Montrer que le triangle $M_1M_2M_3$ est équilatéral si et seulement si $z_1 + j\,z_2 + j^2 z_3 = 0$ ou $z_1 + j^2 z_2 + j\,z_3 = 0$, où $j = -\dfrac12 + i\dfrac{\sqrt3}{2}$.

2. Soit dans $\mathbb{C}$ l'équation $(E) : z^3 - (1 + a + ia)\,z^2 + a(1 + i + ia)\,z - ia^2 = 0$, où $a$ désigne un paramètre complexe.

   a. Vérifier que $1$ est une solution de $(E)$. Calculer les deux autres solutions $z'$ et $z''$ de $(E)$.

   b. Soit $A$, $B$, $C$ les points d'affixes respectives $1$, $z'$ et $z''$. Déterminer $a$ de manière que le triangle $ABC$ soit équilatéral.

---

## Solution

1. On rappelle $j^3 = 1$, $1 + j + j^2 = 0$ et $-j^2 = e^{i\pi/3}$.

   $M_1M_2M_3$ est équilatéral direct $\iff M_3$ est l'image de $M_2$ par la rotation de centre $M_1$ et d'angle $\dfrac{\pi}{3}$ $\iff z_3 - z_1 = -j^2(z_2 - z_1)$.

   Cette égalité s'écrit $z_3 = (1 + j^2)z_1 - j^2 z_2 = -j\,z_1 - j^2 z_2$, soit $j\,z_1 + j^2 z_2 + z_3 = 0$ ; en multipliant par $j^2$ : $z_1 + j\,z_2 + j^2 z_3 = 0$.

   De même (rotation d'angle $-\dfrac{\pi}{3}$, $e^{-i\pi/3} = -j$), $M_1M_2M_3$ est équilatéral indirect $\iff z_1 + j^2 z_2 + j\,z_3 = 0$.

   Un triangle équilatéral est direct ou indirect, d'où l'équivalence.

2. a. $1 - (1 + a + ia) + a(1 + i + ia) - ia^2 = -a - ia + a + ia + ia^2 - ia^2 = 0$.

   $(E) \iff (z - 1)\left(z^2 - (a + ia)z + ia^2\right) = 0$. Le trinôme a pour somme $a + ia$ et produit $ia^2$ : ses racines sont $z' = a$ et $z'' = ia$.

   b. Il faut $a \neq 0$ (sinon $B = C$). D'après 1. avec $(z_1, z_2, z_3) = (1, a, ia)$ :

   $1 + ja + j^2\,ia = 0 \iff a = \dfrac{-1}{j + ij^2}$, et $1 + j^2 a + j\,ia = 0 \iff a = \dfrac{-1}{j^2 + ij}$.

   Le calcul donne $a = \dfrac{\sqrt3 + 1}{2}(-1 + i)$ ou $a = \dfrac{\sqrt3 - 1}{2}(1 - i)$.

   *Lecture géométrique :* $OBC$ est rectangle isocèle en $O$, donc $AB = AC$ impose à $A$ d'être sur la médiatrice de $[BC]$, qui est la bissectrice $(O\,;\ \arg a + \frac{\pi}{4})$ : $\arg a \equiv -\dfrac{\pi}{4}\ [\pi]$, ce que confirment les deux valeurs trouvées.
