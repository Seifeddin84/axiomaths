---
uid: "0000153"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1988 principale, Ex. 1"
title: "Racines a et a² : quand le triangle est-il équilatéral ?"
country: "Tunisie"
year: 1988
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "equation-second-degre", "triangle-equilateral", "module-argument"]
bac: "1988-principale-maths"
---

1. Résoudre dans $\mathbb{C}$ l'équation $(E) : z^2 - (a + a^2)\,z + a^3 = 0$, où $a$ est un paramètre complexe différent de $1$ et $-1$. On désigne par $z_1$ et $z_2$ les solutions de $(E)$.

2. Le plan étant rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j})$, on considère les points $A$, $B$, $C$ d'affixes respectives $1$, $z_1$, $z_2$.

   a. Montrer que le triangle $ABC$ est équilatéral si et seulement si $|a| = 1$ et $|1 + a| = 1$.

   b. On pose $a = \cos\theta + i\sin\theta$ avec $\theta \in \,]0, \pi[$. Déterminer le module et un argument de $1 + a$ en fonction de $\theta$.

   c. Déterminer la valeur de $\theta$ pour laquelle le triangle $ABC$ est équilatéral.

---

## Solution

1. La somme $a + a^2$ et le produit $a^3$ sont ceux de $a$ et $a^2$ : $z_1 = a$, $z_2 = a^2$ (vérification : $(z - a)(z - a^2) = z^2 - (a + a^2)z + a^3$).

2. a. $AB = |a - 1|$, $AC = |a^2 - 1| = |a - 1|\,|a + 1|$ et $BC = |a^2 - a| = |a|\,|a - 1|$, avec $|a - 1| \neq 0$.

   $ABC$ équilatéral $\iff AB = AC = BC \iff |a + 1| = 1$ et $|a| = 1$ (on divise par $|a - 1|$).

   b. $1 + e^{i\theta} = e^{i\theta/2}\left(e^{-i\theta/2} + e^{i\theta/2}\right) = 2\cos\dfrac{\theta}{2}\,e^{i\theta/2}$.

   Pour $\theta \in \,]0, \pi[$, $\cos\dfrac{\theta}{2} > 0$ : $|1 + a| = 2\cos\dfrac{\theta}{2}$ et $\arg(1 + a) \equiv \dfrac{\theta}{2}\ [2\pi]$.

   c. $|a| = 1$ est vrai. $|1 + a| = 1 \iff \cos\dfrac{\theta}{2} = \dfrac12 \iff \dfrac{\theta}{2} = \dfrac{\pi}{3}$ (car $\dfrac{\theta}{2} \in \left]0, \dfrac{\pi}{2}\right[$).

   $\theta = \dfrac{2\pi}{3}$ : $a = j$, et $A$, $B$, $C$ ont pour affixes $1$, $j$, $j^2$, les racines cubiques de l'unité.
