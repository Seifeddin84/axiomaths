---
uid: "0000424"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Translation et coordonnées : images et antécédents"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "coordonnees", "repere", "images", "antecedents"]
provenance: own
dressing: "translation en coordonnées"
rung: 1
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On donne les points $A(2, -1)$ et $A'(5, 1)$. Soit $t$ la translation de vecteur $\overrightarrow{AA'}$.

1. Calculer les composantes du vecteur $\overrightarrow{AA'}$.

2. Déterminer les coordonnées des images $B'$, $C'$ et $D'$ des points $B(-1, 3)$, $C(0, -2)$ et $D(4, 4)$ par la translation $t$.

3. Déterminer les coordonnées des antécédents des points $E(0, 0)$ et $F(1, 1)$ par $t$.

---

## Solution

:::property[Translation et composantes]
Si $A(x_A, y_A)$ et $A'(x_{A'}, y_{A'})$, alors $\overrightarrow{AA'} \begin{pmatrix} x_{A'} - x_A \\ y_{A'} - y_A \end{pmatrix}$.

Si $t$ a pour vecteur $\vec{u} \begin{pmatrix} a \\ b \end{pmatrix}$ et si $M(x, y)$ a pour image $M'(x', y')$ :

$$\overrightarrow{MM'} = \vec{u} \iff \boxed{x' - x = a \ \text{ et } \ y' - y = b} \iff \boxed{M'(x + a,\ y + b)}$$

Pour un **antécédent**, on fait l'opération inverse : $M(x' - a,\ y' - b)$.
:::

1. On soustrait les coordonnées de l'origine $A$ à celles de l'extrémité $A'$ :

   $$\overrightarrow{AA'} \begin{pmatrix} 5 - 2 \\ 1 - (-1) \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$$

   La translation $t$ a donc pour vecteur $\vec{u} \begin{pmatrix} 3 \\ 2 \end{pmatrix}$ : elle déplace tout point de $3$ vers la droite et de $2$ vers le haut.

2. On ajoute $3$ à l'abscisse et $2$ à l'ordonnée :

   $B(-1, 3)$ donne $B'(-1 + 3,\ 3 + 2) = B'(2, 5)$.

   $C(0, -2)$ donne $C'(0 + 3,\ -2 + 2) = C'(3, 0)$.

   $D(4, 4)$ donne $D'(4 + 3,\ 4 + 2) = D'(7, 6)$.

3. Pour un antécédent, on **retranche** $3$ à l'abscisse et $2$ à l'ordonnée :

   L'antécédent de $E(0, 0)$ est $(0 - 3,\ 0 - 2) = (-3, -2)$.

   L'antécédent de $F(1, 1)$ est $(1 - 3,\ 1 - 2) = (-2, -1)$.

   Contrôle pour $E$ : l'image de $(-3, -2)$ est $(-3 + 3,\ -2 + 2) = (0, 0)$ ✓.

:::intuition
En coordonnées, une translation de vecteur $\begin{pmatrix} a \\ b \end{pmatrix}$ consiste à **ajouter $a$ aux abscisses et $b$ aux ordonnées**. Pour revenir en arrière, on retranche.
:::

:::trap
Attention aux signes avec les coordonnées négatives : $1 - (-1) = 2$, et non $0$. Mettre des parenthèses autour des nombres négatifs.
:::
