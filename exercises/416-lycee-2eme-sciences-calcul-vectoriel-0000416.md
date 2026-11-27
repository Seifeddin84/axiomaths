---
uid: "0000416"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul Vectoriel"
source: "Axiomaths"
title: "Repère orthonormé : normes, orthogonalité et carré"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vecteurs", "orthogonalite", "carre"]
provenance: own
dressing: "normes et orthogonalité en repère orthonormé"
rung: 2
---
Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$. On considère les points $A(1, 2)$, $B(4, 3)$ et $C(0, 5)$.

1. Calculer les composantes des vecteurs $\overrightarrow{AB}$, $\overrightarrow{AC}$ et $\overrightarrow{BC}$.

2. Calculer les distances $AB$, $AC$ et $BC$.

3. Montrer que les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont orthogonaux. En déduire la nature du triangle $ABC$.

4. Déterminer les coordonnées du point $D$ tel que $ABDC$ soit un parallélogramme. Montrer que $ABDC$ est un carré.

5. Déterminer le réel $k$ pour que le vecteur $\vec{w} \begin{pmatrix} k \\ 2 \end{pmatrix}$ soit orthogonal à $\overrightarrow{AB}$.

---

## Solution

:::property[Norme et orthogonalité dans une base orthonormée]
Pour $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ :

$$\boxed{\|\vec{u}\| = \sqrt{x^2 + y^2}} \qquad \boxed{\vec{u} \perp \vec{v} \iff xx' + yy' = 0}$$

La distance $AB$ est la norme de $\overrightarrow{AB}$ : $\boxed{AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}}$.
:::

:::property[Reconnaître un carré]
Un parallélogramme qui a **un angle droit** et **deux côtés consécutifs égaux** est un carré.
:::

1. $\overrightarrow{AB} \begin{pmatrix} 4 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$

   $\overrightarrow{AC} \begin{pmatrix} 0 - 1 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$

   $\overrightarrow{BC} \begin{pmatrix} 0 - 4 \\ 5 - 3 \end{pmatrix} = \begin{pmatrix} -4 \\ 2 \end{pmatrix}$

2. On applique $\sqrt{x^2 + y^2}$ aux composantes de chaque vecteur :

   $$AB = \sqrt{3^2 + 1^2} = \sqrt{10} \qquad AC = \sqrt{(-1)^2 + 3^2} = \sqrt{10}$$

   $$BC = \sqrt{(-4)^2 + 2^2} = \sqrt{20} = 2\sqrt{5}$$

3. On calcule $xx' + yy'$ avec $\overrightarrow{AB} \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ et $\overrightarrow{AC} \begin{pmatrix} -1 \\ 3 \end{pmatrix}$ :

   $$3 \times (-1) + 1 \times 3 = -3 + 3 = 0$$

   Donc $\overrightarrow{AB} \perp \overrightarrow{AC}$ : le triangle $ABC$ est rectangle en $A$.

   De plus $AB = AC = \sqrt{10}$ : le triangle $ABC$ est **rectangle isocèle en $A$**.

   Contrôle avec Pythagore : $AB^2 + AC^2 = 10 + 10 = 20 = BC^2$. ✓

4. $ABDC$ est un parallélogramme si et seulement si $\overrightarrow{AB} = \overrightarrow{CD}$.

   $\overrightarrow{CD} \begin{pmatrix} x_D - 0 \\ y_D - 5 \end{pmatrix}$ doit être égal à $\overrightarrow{AB} \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ : $x_D = 3$ et $y_D = 6$.

   $$D(3, 6)$$

   $ABDC$ est un parallélogramme qui a un angle droit en $A$ (question 3) et deux côtés consécutifs égaux $AB = AC$ : c'est un **carré**.

5. $\vec{w} \perp \overrightarrow{AB} \iff 3k + 1 \times 2 = 0 \iff 3k = -2 \iff k = -\dfrac{2}{3}$.

   Contrôle : $3 \times \left(-\dfrac{2}{3}\right) + 1 \times 2 = -2 + 2 = 0$. ✓

:::intuition
Dans une base **orthonormée**, la norme et l'orthogonalité se lisent sur les composantes : Pythagore pour la norme, $xx' + yy'$ pour l'angle droit.
:::

:::trap
Ces formules ne sont valables que dans une base **orthonormée**. Dans une base quelconque, $\sqrt{x^2 + y^2}$ ne donne pas la longueur.
:::
