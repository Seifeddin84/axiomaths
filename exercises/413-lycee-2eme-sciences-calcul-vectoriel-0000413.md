---
uid: "0000413"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Composantes dans une base, colinéarité et nouvelle base"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["vecteurs", "base", "composantes", "colinearite", "determinant"]
provenance: own
dressing: "composantes, déterminant et changement de base"
rung: 1
---
Le plan est muni d'une base $(\vec{i}, \vec{j})$. On considère les vecteurs $\vec{u} = 2\vec{i} - 3\vec{j}$, $\vec{v} = -\vec{i} + 4\vec{j}$, $\vec{w} = 3\vec{i} - 2\vec{j}$ et $\vec{t} \begin{pmatrix} -4 \\ 6 \end{pmatrix}$.

1. Donner les composantes de $\vec{u}$ et de $\vec{v}$ dans la base $(\vec{i}, \vec{j})$.

2. Calculer les composantes de $\vec{u} + \vec{v}$ et de $3\vec{u} - 2\vec{v}$.

3. a. Montrer que $\vec{u}$ et $\vec{t}$ sont colinéaires. Quel réel $k$ vérifie $\vec{t} = k\,\vec{u}$ ?

   b. Déterminer le réel $x$ pour que le vecteur $\vec{s} \begin{pmatrix} x \\ 9 \end{pmatrix}$ soit colinéaire à $\vec{u}$.

4. a. Montrer que $(\vec{u}, \vec{v})$ est une base du plan.

   b. Déterminer les composantes de $\vec{w}$ dans la base $(\vec{u}, \vec{v})$.

---

## Solution

:::property[Composantes et opérations]
Si $\vec{u} = x\vec{i} + y\vec{j}$, ses composantes sont $\begin{pmatrix} x \\ y \end{pmatrix}$. Pour $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$, $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ et un réel $\alpha$ :

$$\boxed{\vec{u} + \vec{v} \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}} \qquad \boxed{\alpha\,\vec{u} \begin{pmatrix} \alpha x \\ \alpha y \end{pmatrix}}$$
:::

:::property[Déterminant et colinéarité]
Le **déterminant** de $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ est le réel $\boxed{\det(\vec{u}, \vec{v}) = xy' - x'y}$.

$$\vec{u} \text{ et } \vec{v} \text{ sont colinéaires} \iff \det(\vec{u}, \vec{v}) = 0$$

Une **base** est un couple de vecteurs **non colinéaires**.
:::

1. $\vec{u} = 2\vec{i} - 3\vec{j}$ donne $\vec{u} \begin{pmatrix} 2 \\ -3 \end{pmatrix}$ et $\vec{v} = -\vec{i} + 4\vec{j}$ donne $\vec{v} \begin{pmatrix} -1 \\ 4 \end{pmatrix}$.

2. On additionne ligne par ligne :

   $$\vec{u} + \vec{v} \begin{pmatrix} 2 + (-1) \\ -3 + 4 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

   On multiplie, puis on additionne : $3\vec{u} \begin{pmatrix} 6 \\ -9 \end{pmatrix}$ et $-2\vec{v} \begin{pmatrix} 2 \\ -8 \end{pmatrix}$.

   $$3\vec{u} - 2\vec{v} \begin{pmatrix} 6 + 2 \\ -9 - 8 \end{pmatrix} = \begin{pmatrix} 8 \\ -17 \end{pmatrix}$$

3. a. $\det(\vec{u}, \vec{t}) = 2 \times 6 - (-4) \times (-3) = 12 - 12 = 0$.

   Le déterminant est nul : $\vec{u}$ et $\vec{t}$ sont colinéaires.

   Pour trouver $k$, on compare les premières composantes : $-4 = k \times 2$, donc $k = -2$. Contrôle sur la seconde : $-2 \times (-3) = 6$. ✓

   Donc $\vec{t} = -2\vec{u}$.

   b. $\det(\vec{u}, \vec{s}) = 2 \times 9 - x \times (-3) = 18 + 3x$.

   $\vec{u}$ et $\vec{s}$ colinéaires $\iff 18 + 3x = 0 \iff x = -6$.

   Contrôle : $\vec{s} \begin{pmatrix} -6 \\ 9 \end{pmatrix} = -3\vec{u}$.

4. a. $\det(\vec{u}, \vec{v}) = 2 \times 4 - (-1) \times (-3) = 8 - 3 = 5 \neq 0$.

   Donc $\vec{u}$ et $\vec{v}$ ne sont pas colinéaires : $(\vec{u}, \vec{v})$ est une base.

   b. On cherche deux réels $\alpha$ et $\beta$ tels que $\vec{w} = \alpha\vec{u} + \beta\vec{v}$. On écrit l'égalité composante par composante :

   $$\begin{cases} 2\alpha - \beta = 3 \\ -3\alpha + 4\beta = -2 \end{cases}$$

   De la première équation : $\beta = 2\alpha - 3$. On remplace dans la seconde :

   $$-3\alpha + 4(2\alpha - 3) = -2 \iff 5\alpha - 12 = -2 \iff \alpha = 2$$

   Puis $\beta = 2 \times 2 - 3 = 1$.

   $$\boxed{\vec{w} = 2\vec{u} + \vec{v}}$$

   Les composantes de $\vec{w}$ dans la base $(\vec{u}, \vec{v})$ sont $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

   Contrôle : $2\vec{u} + \vec{v} \begin{pmatrix} 4 - 1 \\ -6 + 4 \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$ ✓.

:::intuition
Deux vecteurs colinéaires sont « alignés » : l'un est un multiple de l'autre. Le déterminant mesure à quel point ils **ne** le sont **pas** : nul si et seulement si ils le sont.
:::

:::trap
$\det(\vec{u}, \vec{v}) = xy' - x'y$ : on multiplie « en croix » et on **soustrait**. Attention aux signes quand une composante est négative.
:::
