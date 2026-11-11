---
uid: "0000162"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Déplacements - Antidéplacements"
source: "Bac 1981 principale, Ex. 2"
title: "Une famille d'applications définies par barycentre ; un seul déplacement"
country: "Tunisie"
year: 1981
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "barycentre", "expression-analytique", "point-invariant", "rotation"]
bac: "1981-principale-maths"
---

Soit $P$ un plan rapporté à un repère orthonormé $(O, \vec{i}, \vec{j})$. À tout point $M(x, y)$ de $P$, on associe les points $A(x + y, 0)$, $B(0, x - y)$ et $M'(x', y')$ barycentre des points $M$, $A$, $B$ affectés respectivement des coefficients $1$, $m$, $-m$ ($m \in \mathbb{R}$). Soit $f_m$ l'application de $P$ dans $P$ telle que $f_m(M) = M'$.

1. a. Donner les expressions analytiques de $f_m$.

   b. Discuter, suivant les valeurs de $m$, l'ensemble des points invariants par $f_m$.

2. Montrer qu'il existe un unique réel non nul $m_0$ tel que $f_{m_0}$ soit un déplacement ; caractériser $f_{m_0}$.

---

## Solution

1. a. La somme des coefficients est $1 + m - m = 1$ : $\overrightarrow{OM'} = \overrightarrow{OM} + m\,\overrightarrow{OA} - m\,\overrightarrow{OB}$.

   $x' = x + m(x + y) = (1 + m)x + my$ et $y' = y - m(x - y) = -mx + (1 + m)y$.

   b. $M$ invariant $\iff m(x + y) = 0$ et $m(y - x) = 0$.

   Si $m = 0$ : $f_0$ est l'identité, tous les points sont invariants.

   Si $m \neq 0$ : $x + y = 0$ et $x = y$, donc $x = y = 0$ : seul $O$ est invariant.

2. En complexe : $z' = \big((1 + m) - im\big)z$. Une application $z \mapsto az$ ($a \neq 0$) est un déplacement si et seulement si $|a| = 1$.

   $|a|^2 = (1 + m)^2 + m^2 = 1 \iff 2m^2 + 2m = 0 \iff m = 0$ ou $m = -1$.

   L'unique réel non nul est $m_0 = -1$ : $f_{-1}(z) = iz$, soit $x' = -y$, $y' = x$.

   $f_{-1}$ est la rotation de centre $O$ et d'angle $\dfrac{\pi}{2}$.
