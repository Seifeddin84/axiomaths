---
uid: "0000427"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Image d'un triangle : les longueurs sont conservées"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "coordonnees", "triangle", "distance", "conservation-des-distances"]
provenance: own
dressing: "vérifier la conservation des distances sur un triangle"
rung: 2
---
Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$. On considère les points $A(1, 1)$, $B(4, 2)$ et $C(2, 5)$ et la translation $t$ de vecteur $\vec{u} \begin{pmatrix} -2 \\ 3 \end{pmatrix}$. On note $A'$, $B'$, $C'$ les images de $A$, $B$, $C$ par $t$.

1. Déterminer les coordonnées de $A'$, $B'$ et $C'$.

2. Calculer les composantes de $\overrightarrow{AB}$ et de $\overrightarrow{A'B'}$. Que remarque-t-on ?

3. Calculer les longueurs $AB$, $BC$, $AC$, puis $A'B'$, $B'C'$, $A'C'$.

4. Quelle propriété des translations ces calculs illustrent-ils ?

---

## Solution

:::property[Outils]
- $M(x, y)$ a pour image $M'(x - 2,\ y + 3)$ par la translation de vecteur $\begin{pmatrix} -2 \\ 3 \end{pmatrix}$.
- $\overrightarrow{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$.
- Dans un repère orthonormé : $\boxed{AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}}$.
:::

1. On ajoute $-2$ à chaque abscisse et $3$ à chaque ordonnée :

   $A(1, 1)$ donne $A'(1 - 2,\ 1 + 3) = A'(-1, 4)$.

   $B(4, 2)$ donne $B'(4 - 2,\ 2 + 3) = B'(2, 5)$.

   $C(2, 5)$ donne $C'(2 - 2,\ 5 + 3) = C'(0, 8)$.

2. $\overrightarrow{AB} \begin{pmatrix} 4 - 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ et $\overrightarrow{A'B'} \begin{pmatrix} 2 - (-1) \\ 5 - 4 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$.

   On remarque que $\overrightarrow{A'B'} = \overrightarrow{AB}$.

3. On calcule chaque longueur avec la formule.

   $AB = \sqrt{3^2 + 1^2} = \sqrt{10}$.

   $BC$ : $\overrightarrow{BC} \begin{pmatrix} 2 - 4 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}$, donc $BC = \sqrt{4 + 9} = \sqrt{13}$.

   $AC$ : $\overrightarrow{AC} \begin{pmatrix} 1 \\ 4 \end{pmatrix}$, donc $AC = \sqrt{1 + 16} = \sqrt{17}$.

   Pour les images : $\overrightarrow{A'B'} \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ donc $A'B' = \sqrt{10}$ ; $\overrightarrow{B'C'} \begin{pmatrix} 0 - 2 \\ 8 - 5 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}$ donc $B'C' = \sqrt{13}$ ; $\overrightarrow{A'C'} \begin{pmatrix} 0 - (-1) \\ 8 - 4 \end{pmatrix} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$ donc $A'C' = \sqrt{17}$.

   $$AB = A'B' = \sqrt{10} \qquad BC = B'C' = \sqrt{13} \qquad AC = A'C' = \sqrt{17}$$

4. Les trois côtés du triangle $A'B'C'$ ont les mêmes longueurs que ceux de $ABC$ : **une translation conserve les distances**. Les triangles $ABC$ et $A'B'C'$ sont superposables. Cela vient de $\overrightarrow{A'B'} = \overrightarrow{AB}$, $\overrightarrow{B'C'} = \overrightarrow{BC}$ et $\overrightarrow{A'C'} = \overrightarrow{AC}$.

:::intuition
Faire glisser un triangle ne change ni la longueur de ses côtés, ni sa forme : on obtient une copie exacte, simplement déplacée.
:::

:::trap
Ne pas oublier la racine carrée : $AB = \sqrt{10}$ et non $10$. Et dans $x_B - x_A$, bien mettre l'**extrémité moins l'origine**.
:::
