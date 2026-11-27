---
uid: "0000419"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul Vectoriel"
source: "Axiomaths"
title: "Vrai ou faux : les pièges du calcul vectoriel"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vrai-faux", "vecteurs", "colinearite", "orthogonalite", "pieges"]
provenance: own
dressing: "pièges du calcul vectoriel"
rung: 4
---
Dans cet exercice, le plan est muni d'une base orthonormée lorsqu'il s'agit de normes ou d'orthogonalité. Pour chacune des affirmations suivantes, dire si elle est vraie ou fausse, puis justifier.

1. Si $A$, $B$, $C$, $D$ sont quatre points tels que $\overrightarrow{AB} = \overrightarrow{CD}$, alors $ABDC$ est un parallélogramme (non aplati).

2. Les vecteurs $\vec{u} \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 4 \\ 6 \end{pmatrix}$ sont colinéaires.

3. Les vecteurs $\vec{u} \begin{pmatrix} 3 \\ 6 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ 3 \end{pmatrix}$ sont colinéaires.

4. Pour tous vecteurs $\vec{u}$ et $\vec{v}$, $\|\vec{u} + \vec{v}\| = \|\vec{u}\| + \|\vec{v}\|$.

5. Les vecteurs $\vec{u} \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ sont orthogonaux.

6. Si $\overrightarrow{AM} = 2\overrightarrow{AB}$, alors $B$ est le milieu de $[AM]$.

7. Si $2\vec{u} + 3\vec{v} = \vec{0}$, alors $\vec{u}$ et $\vec{v}$ sont colinéaires.

---

## Solution

:::property[Outils utilisés]
- $\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC$ parallélogramme, **si $A$, $B$, $C$ ne sont pas alignés**.
- $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ colinéaires $\iff \boxed{xy' - x'y = 0}$.
- Base orthonormée : $\boxed{\|\vec{u}\| = \sqrt{x^2 + y^2}}$ et $\boxed{\vec{u} \perp \vec{v} \iff xx' + yy' = 0}$.
- $\overrightarrow{AB} = \overrightarrow{BM} \iff B$ milieu de $[AM]$.
:::

1. **Faux.** Contre-exemple avec quatre points alignés : $A(0, 0)$, $B(1, 0)$, $C(2, 0)$, $D(3, 0)$. On a $\overrightarrow{AB} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \overrightarrow{CD} \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, mais $ABDC$ est « aplati » : ce n'est pas un vrai parallélogramme. L'équivalence demande que $A$, $B$, $C$ ne soient pas alignés.

2. **Vrai.** $\det(\vec{u}, \vec{v}) = 2 \times 6 - 4 \times 3 = 12 - 12 = 0$. On le voit aussi directement : $\vec{v} = 2\vec{u}$.

3. **Faux.** $\det(\vec{u}, \vec{v}) = 3 \times 3 - 1 \times 6 = 9 - 6 = 3 \neq 0$. Le piège : « $3$ est le triple de $1$ » donne l'impression d'une proportionnalité, mais $6$ n'est **pas** le triple de $3$.

4. **Faux.** Contre-exemple : $\vec{u} \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 0 \\ 1 \end{pmatrix}$. Alors $\vec{u} + \vec{v} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ et $\|\vec{u} + \vec{v}\| = \sqrt{2}$, alors que $\|\vec{u}\| + \|\vec{v}\| = 1 + 1 = 2$. L'égalité n'a lieu que si les vecteurs sont colinéaires et de même sens.

5. **Vrai.** $xx' + yy' = 2 \times 1 + (-1) \times 2 = 2 - 2 = 0$.

6. **Vrai.** $\overrightarrow{AM} = 2\overrightarrow{AB}$ signifie $\overrightarrow{AB} + \overrightarrow{BM} = 2\overrightarrow{AB}$, donc $\overrightarrow{BM} = \overrightarrow{AB}$. Ainsi $\overrightarrow{AB} = \overrightarrow{BM}$ : $B$ est le milieu de $[AM]$.

7. **Vrai.** $2\vec{u} + 3\vec{v} = \vec{0}$ donne $2\vec{u} = -3\vec{v}$, donc $\vec{u} = -\dfrac{3}{2}\vec{v}$ : $\vec{u}$ est un multiple de $\vec{v}$.

:::intuition
Pour **réfuter** une affirmation, un seul contre-exemple suffit. Pour la **prouver**, il faut un calcul ou un raisonnement qui marche dans tous les cas.
:::

:::trap
Pour la colinéarité, ne pas se fier à un « air de proportionnalité » entre une composante et une autre : on calcule le déterminant $xy' - x'y$.
:::
