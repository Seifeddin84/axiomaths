---
uid: "0000415"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul Vectoriel"
source: "Axiomaths"
title: "Colinéarité et paramètre : quand trois points sont-ils alignés ?"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vecteurs", "colinearite", "parametre", "determinant", "alignement"]
provenance: own
dressing: "paramètre et alignement de points"
rung: 2
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. Soit $m$ un réel. On considère les vecteurs $\vec{u} \begin{pmatrix} m \\ 4 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ m \end{pmatrix}$.

1. Calculer $\det(\vec{u}, \vec{v})$ en fonction de $m$.

2. Pour quelles valeurs de $m$ les vecteurs $\vec{u}$ et $\vec{v}$ sont-ils colinéaires ? Dans chaque cas, écrire $\vec{u}$ comme multiple de $\vec{v}$.

3. En déduire les valeurs de $m$ pour lesquelles $(\vec{u}, \vec{v})$ est une base.

4. On considère les points $A(1, 1)$, $B(1 + m, 5)$ et $C(2, 1 + m)$. Pour quelles valeurs de $m$ les points $A$, $B$ et $C$ sont-ils alignés ? Donner alors les coordonnées de $B$ et de $C$.

---

## Solution

:::property[Colinéarité et base]
$\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ sont colinéaires $\iff \boxed{xy' - x'y = 0}$.

$(\vec{u}, \vec{v})$ est une **base** $\iff \vec{u}$ et $\vec{v}$ **ne sont pas** colinéaires $\iff xy' - x'y \neq 0$.
:::

:::property[Produit nul]
$\boxed{ab = 0 \iff a = 0 \text{ ou } b = 0}$ ; et $m^2 - 4 = (m - 2)(m + 2)$.
:::

1. On applique la formule avec $x = m$, $y = 4$, $x' = 1$, $y' = m$ :

   $$\det(\vec{u}, \vec{v}) = m \times m - 1 \times 4 = m^2 - 4$$

2. $\vec{u}$ et $\vec{v}$ sont colinéaires si et seulement si $m^2 - 4 = 0$, c'est-à-dire $(m - 2)(m + 2) = 0$.

   Donc $m = 2$ ou $m = -2$.

   - Pour $m = 2$ : $\vec{u} \begin{pmatrix} 2 \\ 4 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, donc $\vec{u} = 2\vec{v}$.
   - Pour $m = -2$ : $\vec{u} \begin{pmatrix} -2 \\ 4 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ -2 \end{pmatrix}$, donc $\vec{u} = -2\vec{v}$.

3. $(\vec{u}, \vec{v})$ est une base si et seulement si $\det(\vec{u}, \vec{v}) \neq 0$, c'est-à-dire pour tout réel $m$ **différent de** $2$ et de $-2$.

   Exemple : pour $m = 0$, $\det(\vec{u}, \vec{v}) = -4 \neq 0$.

4. On calcule les composantes de $\overrightarrow{AB}$ et $\overrightarrow{AC}$ :

   $$\overrightarrow{AB} \begin{pmatrix} (1 + m) - 1 \\ 5 - 1 \end{pmatrix} = \begin{pmatrix} m \\ 4 \end{pmatrix} \qquad \overrightarrow{AC} \begin{pmatrix} 2 - 1 \\ (1 + m) - 1 \end{pmatrix} = \begin{pmatrix} 1 \\ m \end{pmatrix}$$

   On reconnaît $\overrightarrow{AB} = \vec{u}$ et $\overrightarrow{AC} = \vec{v}$.

   $A$, $B$, $C$ sont alignés $\iff \overrightarrow{AB}$ et $\overrightarrow{AC}$ colinéaires $\iff m^2 - 4 = 0 \iff m = 2$ ou $m = -2$.

   - Pour $m = 2$ : $B(3, 5)$ et $C(2, 3)$.
   - Pour $m = -2$ : $B(-1, 5)$ et $C(2, -1)$.

   Contrôle pour $m = 2$ : $\overrightarrow{AB} \begin{pmatrix} 2 \\ 4 \end{pmatrix} = 2\overrightarrow{AC} \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ ✓.

:::intuition
Un paramètre $m$ transforme la condition de colinéarité en une **équation en $m$**. Ici elle est du second degré : on la factorise avec $a^2 - b^2 = (a - b)(a + b)$.
:::

:::trap
Ne pas s'arrêter à $m = 2$ : l'équation $m^2 = 4$ a **deux** solutions, $2$ et $-2$.
:::
