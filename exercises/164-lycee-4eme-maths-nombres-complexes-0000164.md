---
uid: "0000164"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 1978 principale, Ex. 1"
title: "Équation du second degré à paramètre θ et demi-ellipse"
country: "Tunisie"
year: 1978
professor: null
difficulty: "Moyen"
points: null
tags: ["bac", "equation-second-degre", "parametre", "ensemble-de-points", "ellipse"]
bac: "1978-principale-maths"
---

Soit, dans $\mathbb{C}$, l'équation : $z^2 - 2z + 2\sin^2\theta - 2i\sin\theta\cos\theta = 0$, avec $\theta \in [0, \pi[$.

1. Résoudre cette équation. On désignera par $z'$ la racine dont le coefficient $b$ de la partie imaginaire $(ib)$ est positif et par $z''$ l'autre racine.

2. On pose $z_1 = z' + i\sin\theta$ et $z_2 = z'' - i\sin\theta$. Soit $M_1$ et $M_2$ les images respectives de $z_1$ et $z_2$ dans le plan complexe.

   a. Montrer que $M_1$ et $M_2$ sont symétriques par rapport au point d'affixe $1$.

   b. Déterminer l'ensemble des points $M_1$ lorsque $\theta$ décrit l'intervalle $[0, \pi[$ ; en déduire l'ensemble des points $M_2$.

---

## Solution

1. $\Delta' = 1 - 2\sin^2\theta + 2i\sin\theta\cos\theta = \cos 2\theta + i\sin 2\theta = \left(e^{i\theta}\right)^2$.

   Les racines sont $1 + e^{i\theta} = (1 + \cos\theta) + i\sin\theta$ et $1 - e^{i\theta} = (1 - \cos\theta) - i\sin\theta$.

   Pour $\theta \in \,]0, \pi[$, $\sin\theta > 0$ : $z' = 1 + e^{i\theta}$ et $z'' = 1 - e^{i\theta}$. (Pour $\theta = 0$, les racines $2$ et $0$ sont réelles ; on garde la même écriture.)

2. a. $z_1 = 1 + \cos\theta + 2i\sin\theta$ et $z_2 = 1 - \cos\theta - 2i\sin\theta$.

   $\dfrac{z_1 + z_2}{2} = 1$ : le point d'affixe $1$ est le milieu de $[M_1M_2]$.

   b. $M_1(x, y)$ avec $x = 1 + \cos\theta$ et $y = 2\sin\theta$, d'où $(x - 1)^2 + \dfrac{y^2}{4} = \cos^2\theta + \sin^2\theta = 1$.

   $M_1$ est sur l'ellipse $(\mathcal{E})$ de centre $\Omega(1, 0)$, de demi-axes $1$ (horizontal) et $2$ (vertical).

   Réciproquement, tout point de $(\mathcal{E})$ d'ordonnée $y \geq 0$, sauf $O(0, 0)$ (qui correspondrait à $\theta = \pi$), s'écrit ainsi avec $\theta \in [0, \pi[$.

   L'ensemble des $M_1$ est la demi-ellipse supérieure ($y \geq 0$) privée du point $O$.

   $M_2$ est le symétrique de $M_1$ par rapport à $\Omega$, qui est le centre de $(\mathcal{E})$ : l'ensemble des $M_2$ est la demi-ellipse inférieure ($y \leq 0$) privée du point $(2, 0)$.
