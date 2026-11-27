---
uid: "0000439"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Deux symétries centrales font une translation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "symetrie-centrale", "composition", "milieu", "relation-de-chasles"]
provenance: adapted
adapted_from: "Manuel 2ème année, Tome 1, chapitre 7 (activité sur la composée de deux symétries centrales)"
dressing: "composée de deux symétries centrales"
rung: 5
---
Soient $I$ et $J$ deux points distincts. On note $S_I$ et $S_J$ les symétries centrales de centres $I$ et $J$ : $S_I(M) = M_1$ signifie que $I$ est le milieu de $[MM_1]$.

Pour tout point $M$, on pose $M_1 = S_I(M)$ puis $M_2 = S_J(M_1)$.

1. Faire une figure avec $I$, $J$ et un point $M$ placé hors de la droite $(IJ)$, et construire $M_1$ et $M_2$.

2. a. Justifier que $\overrightarrow{IM_1} = -\overrightarrow{IM}$ et $\overrightarrow{JM_2} = -\overrightarrow{JM_1}$.

   b. En passant par $I$ puis $J$, montrer que $\overrightarrow{MM_2} = 2\overrightarrow{IJ}$.

   c. En déduire la nature de l'application $S_J \circ S_I$.

3. Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$ avec $I(1, 2)$, $J(4, -1)$ et $M(0, 0)$. Calculer $M_1$ puis $M_2$ et vérifier le résultat de la question 2.

4. Que vaut $S_I \circ S_J$ ? Les applications $S_I \circ S_J$ et $S_J \circ S_I$ sont-elles égales ?

---

## Solution

:::definition[Symétrie centrale]
$S_I(M) = M_1 \iff I$ est le milieu de $[MM_1] \iff \boxed{\overrightarrow{IM_1} = -\overrightarrow{IM}}$.
:::

:::property[Outils]
$\overrightarrow{XY} + \overrightarrow{YZ} = \overrightarrow{XZ}$ et $\overrightarrow{YX} = -\overrightarrow{XY}$ ; $M' = t_{\vec{u}}(M) \iff \overrightarrow{MM'} = \vec{u}$.
:::

1. On place $M$, on joint $M$ à $I$ et on prolonge d'une même longueur : on obtient $M_1$. On joint $M_1$ à $J$ et on prolonge d'une même longueur : on obtient $M_2$. (On constate que $M_2$ est le point $M$ « décalé » dans la direction de $(IJ)$.)

2. a. $I$ est le milieu de $[MM_1]$, donc $\overrightarrow{IM_1} = -\overrightarrow{IM}$. De même, $J$ est le milieu de $[M_1M_2]$, donc $\overrightarrow{JM_2} = -\overrightarrow{JM_1} = \overrightarrow{M_1J}$.

   b. On va de $M$ à $M_2$ en passant par $I$ puis $J$ :

   $$\overrightarrow{MM_2} = \overrightarrow{MI} + \overrightarrow{IJ} + \overrightarrow{JM_2}$$

   Or $\overrightarrow{JM_2} = \overrightarrow{M_1J} = \overrightarrow{M_1I} + \overrightarrow{IJ}$, et $\overrightarrow{M_1I} = -\overrightarrow{IM_1} = \overrightarrow{IM}$. Donc

   $$\overrightarrow{MM_2} = \overrightarrow{MI} + \overrightarrow{IJ} + \overrightarrow{IM} + \overrightarrow{IJ}$$

   Comme $\overrightarrow{MI} + \overrightarrow{IM} = \vec{0}$ :

   $$\boxed{\overrightarrow{MM_2} = 2\overrightarrow{IJ}}$$

   c. Le vecteur $2\overrightarrow{IJ}$ ne dépend pas de $M$ : $S_J \circ S_I$ est la **translation de vecteur $2\overrightarrow{IJ}$**.

3. $M_1 = S_I(M)$ : $I$ est le milieu de $[MM_1]$, donc $M_1 = 2I - M = (2 \times 1 - 0,\ 2 \times 2 - 0) = (2, 4)$.

   $M_2 = S_J(M_1) = 2J - M_1 = (2 \times 4 - 2,\ 2 \times (-1) - 4) = (6, -6)$.

   $\overrightarrow{MM_2} \begin{pmatrix} 6 \\ -6 \end{pmatrix}$ et $\overrightarrow{IJ} \begin{pmatrix} 3 \\ -3 \end{pmatrix}$, donc $2\overrightarrow{IJ} \begin{pmatrix} 6 \\ -6 \end{pmatrix}$ ✓.

4. En échangeant les rôles de $I$ et $J$ : $S_I \circ S_J = t_{2\overrightarrow{JI}}$, translation de vecteur $2\overrightarrow{JI} = -2\overrightarrow{IJ}$.

   Les deux vecteurs sont **opposés** et non nuls (car $I \neq J$) : les deux applications sont différentes. L'ordre de composition compte pour les symétries centrales, alors qu'il n'en a pas pour les translations.

:::intuition
Une symétrie centrale « retourne » le plan, deux retournements successifs le « remettent à l'endroit », mais décalé. Ce décalage est le **double** du vecteur $\overrightarrow{IJ}$.
:::

:::trap
$S_J \circ S_I$ signifie « d'abord $S_I$, puis $S_J$ ». Intervertir l'ordre donne la translation de vecteur **opposé**.
:::
