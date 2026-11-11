---
uid: "0000151"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1989 contrôle, Ex. 2"
title: "Équation du troisième degré, parallélogramme, déplacement et antidéplacement"
country: "Tunisie"
year: 1989
professor: null
difficulty: "Moyen"
points: null
tags: ["bac", "equation-troisieme-degre", "deplacement", "antideplacement", "symetrie-glissee"]
bac: "1989-controle-maths"
---

Soit, dans l'ensemble $\mathbb{C}$ des nombres complexes, l'équation $(E)$ : $z^3 + (-2 - 4i)\,z^2 + (-9 + 10i)\,z + 18 + 6i = 0$.

1. Vérifier que $3$ est une racine de l'équation $(E)$ et en déduire les autres racines $z_1$ et $z_2$ de $(E)$ (on désigne par $z_1$ la racine ayant une partie réelle positive).

2. Soit $(O, \vec{u}, \vec{v})$ un repère orthonormé direct du plan et $A$, $B$, $C$ les points d'affixes respectives $3$, $z_1$, $z_2$.

   a. Montrer que $OABC$ est un parallélogramme et qu'il existe un déplacement $f$ et un antidéplacement $g$ transformant $O$ en $B$ et $A$ en $C$.

   b. Donner la nature et les éléments caractéristiques de $f$.

   c. Soit $S$ la symétrie orthogonale d'axe la droite $(OA)$. Vérifier que $g = f \circ S$ et en déduire la forme réduite de $g$.

---

## Solution

1. $27 + 9(-2 - 4i) + 3(-9 + 10i) + 18 + 6i = 27 - 18 - 27 + 18 + (-36 + 30 + 6)i = 0$.

   $(E) \iff (z - 3)\left(z^2 + (1 - 4i)z - 6 - 2i\right) = 0$ (identification des coefficients).

   $\Delta = (1 - 4i)^2 + 4(6 + 2i) = 1 - 8i - 16 + 24 + 8i = 9$, d'où $z = \dfrac{-1 + 4i \pm 3}{2}$.

   $z_1 = 1 + 2i$ et $z_2 = -2 + 2i$.

2. a. $z_A - z_O = 3$ et $z_B - z_C = 3$ : $\overrightarrow{OA} = \overrightarrow{CB}$, donc $OABC$ est un parallélogramme.

   $OA = BC = 3$ : il existe un unique déplacement et un unique antidéplacement qui envoient $O$ sur $B$ et $A$ sur $C$.

   b. $f : z \mapsto az + b$ avec $|a| = 1$. $f(0) = 1 + 2i$ donne $b = 1 + 2i$ ; $f(3) = -2 + 2i$ donne $a = -1$.

   $f(z) = -z + 1 + 2i$ : c'est la symétrie centrale de centre le point d'affixe $\dfrac{1 + 2i}{2}$, c'est-à-dire le centre $\Omega\left(\frac12, 1\right)$ du parallélogramme.

   c. $S(z) = \bar{z}$ et $f \circ S(z) = -\bar{z} + 1 + 2i$ ; $f \circ S$ est un antidéplacement, et $f \circ S(0) = 1 + 2i = z_B$, $f \circ S(3) = -2 + 2i = z_C$. Par unicité, $g = f \circ S$.

   $g(x + iy) = (1 - x) + i(y + 2)$ : $g$ est la composée de la symétrie d'axe $\Delta : x = \frac12$ (qui envoie $(x, y)$ sur $(1 - x, y)$) et de la translation de vecteur $2\vec{v}$, parallèle à $\Delta$.

   Forme réduite : $g = t_{2\vec{v}} \circ S_\Delta$, symétrie glissée d'axe $\Delta : x = \dfrac12$ et de vecteur $2\vec{v}$. (Vérification : $g \circ g$ est la translation de vecteur $4\vec{v}$.)
