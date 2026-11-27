---
uid: "0000438"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Translation, milieu et centre de gravité en coordonnées"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "milieu", "centre-de-gravite", "coordonnees", "images"]
provenance: own
dressing: "translation et centre de gravité en coordonnées"
rung: 3
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On considère les points $A(1, 1)$, $B(4, 2)$ et $C(2, 5)$ et la translation $t$ de vecteur $\vec{u} \begin{pmatrix} -2 \\ 3 \end{pmatrix}$. On note $A'$, $B'$, $C'$ les images de $A$, $B$, $C$.

1. Déterminer les coordonnées de $A'$, $B'$ et $C'$.

2. Soit $G$ le centre de gravité du triangle $ABC$.

   a. Calculer les coordonnées de $G$, puis celles de son image $G'$.

   b. Calculer les coordonnées du centre de gravité du triangle $A'B'C'$. Comparer à $G'$.

3. Soit $I$ le milieu de $[BC]$. Calculer les coordonnées de $I$, de son image $I'$ et du milieu de $[B'C']$. Que remarque-t-on ?

---

## Solution

:::property[Centre de gravité et milieu]
- Le **centre de gravité** (isobarycentre) du triangle $ABC$ a pour coordonnées
$$\boxed{G\left(\dfrac{x_A + x_B + x_C}{3},\ \dfrac{y_A + y_B + y_C}{3}\right)}$$
- Le **milieu** de $[BC]$ a pour coordonnées $\left(\dfrac{x_B + x_C}{2},\ \dfrac{y_B + y_C}{2}\right)$.
- La translation de vecteur $\begin{pmatrix} a \\ b \end{pmatrix}$ envoie $(x, y)$ sur $(x + a,\ y + b)$.
:::

1. On ajoute $-2$ aux abscisses et $3$ aux ordonnées :

   $$A'(-1, 4) \qquad B'(2, 5) \qquad C'(0, 8)$$

2. a. $x_G = \dfrac{1 + 4 + 2}{3} = \dfrac{7}{3}$ et $y_G = \dfrac{1 + 2 + 5}{3} = \dfrac{8}{3}$, donc $G\left(\dfrac{7}{3}, \dfrac{8}{3}\right)$.

   $$G'\left(\frac{7}{3} - 2,\ \frac{8}{3} + 3\right) = G'\left(\frac{1}{3}, \frac{17}{3}\right)$$

   b. Centre de gravité de $A'B'C'$ :

   $$\left(\frac{-1 + 2 + 0}{3},\ \frac{4 + 5 + 8}{3}\right) = \left(\frac{1}{3}, \frac{17}{3}\right)$$

   C'est exactement $G'$ : l'image du centre de gravité est le centre de gravité de l'image.

3. $I\left(\dfrac{4 + 2}{2}, \dfrac{2 + 5}{2}\right) = \left(3, \dfrac{7}{2}\right)$ et $I'\left(3 - 2,\ \dfrac{7}{2} + 3\right) = \left(1, \dfrac{13}{2}\right)$.

   Milieu de $[B'C']$ : $\left(\dfrac{2 + 0}{2}, \dfrac{5 + 8}{2}\right) = \left(1, \dfrac{13}{2}\right)$.

   On remarque que $I'$ est le milieu de $[B'C']$ : **une translation conserve les milieux** (et les barycentres).

:::intuition
Le centre de gravité est « le point d'équilibre » du triangle. Si on fait glisser le triangle, son point d'équilibre glisse avec lui.
:::

:::trap
Pour $G$, on divise par $3$ (trois points), pour $I$ par $2$ (deux points). Diviser par le mauvais nombre est l'erreur la plus fréquente.
:::
