---
uid: "0000126"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Composantes, parallélogramme et alignement"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vecteurs", "composantes", "colinearite", "determinant", "parallelogramme"]
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On considère les points $A(1, 2)$, $B(4, 3)$ et $C(2, -1)$.

1. a. Calculer les composantes des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$.

   b. Montrer que les points $A$, $B$ et $C$ ne sont pas alignés.

2. Déterminer les coordonnées du point $D$ tel que $ABDC$ soit un parallélogramme.

3. Déterminer les coordonnées du point $E$ tel que $\overrightarrow{AE} = 2\overrightarrow{AB} - 3\overrightarrow{AC}$.

4. Soit $F$ le point de coordonnées $(x, -4)$. Déterminer $x$ pour que les points $A$, $C$ et $F$ soient alignés.

5. Soit $I$ le milieu de $[BC]$ et $G$ le point de coordonnées $\left(\dfrac{7}{3}, \dfrac{4}{3}\right)$.

   a. Calculer les coordonnées de $I$.

   b. Montrer que $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AI}$. Que représente le point $G$ pour le triangle $ABC$ ?

---

## Solution

1. a. $\overrightarrow{AB} \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ et $\overrightarrow{AC} \begin{pmatrix} 1 \\ -3 \end{pmatrix}$.

   b. $\det(\overrightarrow{AB}, \overrightarrow{AC}) = 3 \times (-3) - 1 \times 1 = -10 \neq 0$ : les vecteurs ne sont pas colinéaires, donc $A$, $B$, $C$ ne sont pas alignés.

2. $ABDC$ est un parallélogramme $\iff \overrightarrow{AB} = \overrightarrow{CD}$ :

   $x_D - 2 = 3$ et $y_D + 1 = 1$, donc $D(5, 0)$.

3. $2\overrightarrow{AB} - 3\overrightarrow{AC} \begin{pmatrix} 6 - 3 \\ 2 + 9 \end{pmatrix} = \begin{pmatrix} 3 \\ 11 \end{pmatrix}$, donc $x_E = 1 + 3 = 4$ et $y_E = 2 + 11 = 13$ : $E(4, 13)$.

4. $\overrightarrow{AF} \begin{pmatrix} x - 1 \\ -6 \end{pmatrix}$. $A$, $C$, $F$ alignés $\iff \det(\overrightarrow{AC}, \overrightarrow{AF}) = 0$ :

   $1 \times (-6) - (-3)(x - 1) = 0 \iff 3x - 9 = 0 \iff x = 3$.

5. a. $I\left(\dfrac{4 + 2}{2}, \dfrac{3 - 1}{2}\right) = (3, 1)$.

   b. $\overrightarrow{AI} \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ et $\overrightarrow{AG} \begin{pmatrix} \frac{4}{3} \\ -\frac{2}{3} \end{pmatrix} = \dfrac{2}{3}\begin{pmatrix} 2 \\ -1 \end{pmatrix}$.

   $G$ est sur la médiane $[AI]$, aux deux tiers à partir de $A$ : c'est le **centre de gravité** du triangle $ABC$ (on vérifie : $\dfrac{1 + 4 + 2}{3} = \dfrac{7}{3}$ et $\dfrac{2 + 3 - 1}{3} = \dfrac{4}{3}$).
