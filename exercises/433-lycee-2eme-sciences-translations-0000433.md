---
uid: "0000433"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Une translation conserve l'alignement et le milieu"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "alignement", "milieu", "coordonnees", "vecteurs"]
provenance: own
dressing: "alignement et milieu conservés"
rung: 2
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. Soit $t$ la translation de vecteur $\vec{u} \begin{pmatrix} 1 \\ -2 \end{pmatrix}$. On considère les points $A(-1, 1)$, $B(3, 3)$ et $C(7, 5)$, et on note $A'$, $B'$, $C'$ leurs images par $t$.

1. Montrer que $A$, $B$, $C$ sont alignés. Montrer que $B$ est le milieu de $[AC]$.

2. Déterminer les coordonnées de $A'$, $B'$ et $C'$.

3. Montrer que $A'$, $B'$, $C'$ sont alignés et que $B'$ est le milieu de $[A'C']$.

4. Cas général. Soient $P$ et $Q$ deux points d'images $P'$ et $Q'$ par une translation, et $I$ le milieu de $[PQ]$, d'image $I'$. Montrer que $I'$ est le milieu de $[P'Q']$.

---

## Solution

:::property[Outils]
- $\overrightarrow{AB}$ et $\overrightarrow{AC}$ colinéaires $\iff A$, $B$, $C$ alignés ; en composantes : $xy' - x'y = 0$.
- $I$ milieu de $[AC] \iff \overrightarrow{AI} = \overrightarrow{IC}$ ; coordonnées $\left(\dfrac{x_A + x_C}{2}, \dfrac{y_A + y_C}{2}\right)$.
- Une translation vérifie $\boxed{\overrightarrow{M'N'} = \overrightarrow{MN}}$ pour tous points $M$, $N$.
:::

1. $\overrightarrow{AB} \begin{pmatrix} 4 \\ 2 \end{pmatrix}$ et $\overrightarrow{AC} \begin{pmatrix} 8 \\ 4 \end{pmatrix}$.

   $\det\left(\overrightarrow{AB}, \overrightarrow{AC}\right) = 4 \times 4 - 8 \times 2 = 0$ : $A$, $B$, $C$ sont alignés.

   Milieu de $[AC]$ : $\left(\dfrac{-1 + 7}{2},\ \dfrac{1 + 5}{2}\right) = (3, 3) = B$. Donc $B$ est le milieu de $[AC]$.

2. On ajoute $1$ aux abscisses et $-2$ aux ordonnées :

   $$A'(0, -1) \qquad B'(4, 1) \qquad C'(8, 3)$$

3. $\overrightarrow{A'B'} \begin{pmatrix} 4 \\ 2 \end{pmatrix}$ et $\overrightarrow{A'C'} \begin{pmatrix} 8 \\ 4 \end{pmatrix}$ : le déterminant vaut $16 - 16 = 0$, donc $A'$, $B'$, $C'$ sont alignés.

   Milieu de $[A'C']$ : $\left(\dfrac{0 + 8}{2},\ \dfrac{-1 + 3}{2}\right) = (4, 1) = B'$. Donc $B'$ est le milieu de $[A'C']$.

4. $I$ est le milieu de $[PQ]$ : $\overrightarrow{PI} = \overrightarrow{IQ}$.

   La propriété caractéristique donne $\overrightarrow{P'I'} = \overrightarrow{PI}$ et $\overrightarrow{I'Q'} = \overrightarrow{IQ}$.

   Donc $\overrightarrow{P'I'} = \overrightarrow{PI} = \overrightarrow{IQ} = \overrightarrow{I'Q'}$ : $I'$ est le milieu de $[P'Q']$.

:::intuition
Comme $\overrightarrow{M'N'} = \overrightarrow{MN}$ pour **tous** les points, toute relation entre vecteurs (égalité, colinéarité) est transportée telle quelle sur les images.
:::

:::trap
Vérifier sur trois points ne **prouve** rien en général : c'est la question 4 qui démontre la propriété, la partie numérique n'est qu'un exemple.
:::
