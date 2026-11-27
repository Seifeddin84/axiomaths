---
uid: "0000434"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Parallélisme, orthogonalité et quadrilatères"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "parallelogramme", "orthogonalite", "conservation"]
provenance: own
dressing: "parallélisme et orthogonalité par translation"
rung: 3
---
**Partie A : un parallélogramme**

Soit $ABCD$ un parallélogramme et $t$ une translation. On note $A'$, $B'$, $C'$, $D'$ les images de $A$, $B$, $C$, $D$.

1. Montrer que $\overrightarrow{A'B'} = \overrightarrow{D'C'}$.

2. En déduire que $A'B'C'D'$ est un parallélogramme (si $A'$, $B'$, $D'$ ne sont pas alignés).

**Partie B : un rectangle**

Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$. Soient $R(0, 0)$, $S(4, 0)$, $T(4, 2)$ et $U(0, 2)$, et $t$ la translation de vecteur $\vec{w} \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.

1. Déterminer les coordonnées de $R'$, $S'$, $T'$, $U'$, images de $R$, $S$, $T$, $U$.

2. Montrer que $\overrightarrow{R'S'} \perp \overrightarrow{R'U'}$.

3. Calculer les longueurs des diagonales $R'T'$ et $S'U'$. Que peut-on dire de $R'S'T'U'$ ?

---

## Solution

:::property[Outils]
- Une translation conserve les vecteurs entre points : $\boxed{\overrightarrow{M'N'} = \overrightarrow{MN}}$.
- $ABCD$ parallélogramme $\iff \overrightarrow{AB} = \overrightarrow{DC}$.
- En repère orthonormé : $\vec{u} \perp \vec{v} \iff xx' + yy' = 0$ ; $\|\vec{u}\| = \sqrt{x^2 + y^2}$.
- Un parallélogramme à **angle droit** est un rectangle.
:::

**Partie A**

1. Comme $ABCD$ est un parallélogramme, $\overrightarrow{AB} = \overrightarrow{DC}$.

   Une translation conserve les vecteurs : $\overrightarrow{A'B'} = \overrightarrow{AB}$ et $\overrightarrow{D'C'} = \overrightarrow{DC}$.

   Donc $\overrightarrow{A'B'} = \overrightarrow{AB} = \overrightarrow{DC} = \overrightarrow{D'C'}$.

2. L'égalité $\overrightarrow{A'B'} = \overrightarrow{D'C'}$ signifie que $A'B'C'D'$ est un **parallélogramme**.

**Partie B**

1. On ajoute $3$ aux abscisses et $-1$ aux ordonnées :

   $$R'(3, -1) \qquad S'(7, -1) \qquad T'(7, 1) \qquad U'(3, 1)$$

2. $\overrightarrow{R'S'} \begin{pmatrix} 4 \\ 0 \end{pmatrix}$ et $\overrightarrow{R'U'} \begin{pmatrix} 0 \\ 2 \end{pmatrix}$.

   $$4 \times 0 + 0 \times 2 = 0$$

   Les vecteurs sont orthogonaux : $\overrightarrow{R'S'} \perp \overrightarrow{R'U'}$.

3. $\overrightarrow{R'T'} \begin{pmatrix} 4 \\ 2 \end{pmatrix}$ donc $R'T' = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$.

   $\overrightarrow{S'U'} \begin{pmatrix} -4 \\ 2 \end{pmatrix}$ donc $S'U' = \sqrt{16 + 4} = 2\sqrt{5}$.

   Les diagonales sont égales. D'après la partie A, $R'S'T'U'$ est un parallélogramme ; il a un angle droit (question 2) : c'est un **rectangle**. Ses diagonales égales le confirment.

:::intuition
Une translation fait glisser **toute** la figure : un parallélogramme reste un parallélogramme, un rectangle reste un rectangle, les angles droits restent droits.
:::

:::trap
Dans la partie A, la conclusion « parallélogramme » exige que les points ne soient pas alignés : si $A'$, $B'$, $D'$ étaient alignés, la figure serait aplatie.
:::
