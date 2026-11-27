---
uid: "0000414"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Dans un repère : composantes, parallélogramme et points alignés"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["vecteurs", "repere", "composantes", "parallelogramme", "alignement"]
provenance: own
dressing: "composantes dans un repère"
rung: 1
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On considère les points $A(-1, 2)$, $B(3, 1)$ et $C(4, -2)$.

1. Calculer les composantes des vecteurs $\overrightarrow{AB}$, $\overrightarrow{AC}$ et $\overrightarrow{BC}$.

2. Les points $A$, $B$ et $C$ sont-ils alignés ?

3. Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme. Vérifier que les diagonales $[AC]$ et $[BD]$ ont le même milieu.

4. Déterminer les coordonnées du point $E$ tel que $\overrightarrow{AE} = 2\overrightarrow{AB} - \overrightarrow{AC}$.

5. Déterminer l'ordonnée $y$ du point $F(7, y)$ pour que les points $A$, $B$ et $F$ soient alignés.

---

## Solution

:::property[Composantes d'un vecteur défini par deux points]
Si $A(x_A, y_A)$ et $B(x_B, y_B)$ :
$$\boxed{\overrightarrow{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}}$$
On soustrait les coordonnées de **l'origine** à celles de **l'extrémité**.
:::

:::property[Outils du chapitre]
- $\overrightarrow{AB} = \overrightarrow{DC} \iff ABCD$ est un parallélogramme (si $A$, $B$, $C$ ne sont pas alignés).
- Deux vecteurs égaux ont les **mêmes composantes**.
- $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ sont colinéaires $\iff \boxed{xy' - x'y = 0}$.
- $A$, $B$, $C$ alignés $\iff \overrightarrow{AB}$ et $\overrightarrow{AC}$ colinéaires.
- Milieu de $[AC]$ : $\left(\dfrac{x_A + x_C}{2}, \dfrac{y_A + y_C}{2}\right)$.
:::

1. $\overrightarrow{AB} \begin{pmatrix} 3 - (-1) \\ 1 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ -1 \end{pmatrix}$

   $\overrightarrow{AC} \begin{pmatrix} 4 - (-1) \\ -2 - 2 \end{pmatrix} = \begin{pmatrix} 5 \\ -4 \end{pmatrix}$

   $\overrightarrow{BC} \begin{pmatrix} 4 - 3 \\ -2 - 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$

2. On calcule le déterminant de $\overrightarrow{AB}$ et $\overrightarrow{AC}$ :

   $$\det\left(\overrightarrow{AB}, \overrightarrow{AC}\right) = 4 \times (-4) - 5 \times (-1) = -16 + 5 = -11$$

   Ce n'est pas $0$ : les vecteurs ne sont pas colinéaires, donc $A$, $B$, $C$ **ne sont pas alignés**.

3. $ABCD$ est un parallélogramme si et seulement si $\overrightarrow{AB} = \overrightarrow{DC}$.

   On a $\overrightarrow{AB} \begin{pmatrix} 4 \\ -1 \end{pmatrix}$ et $\overrightarrow{DC} \begin{pmatrix} 4 - x_D \\ -2 - y_D \end{pmatrix}$.

   On égalise les composantes :

   - $4 - x_D = 4$, donc $x_D = 0$ ;
   - $-2 - y_D = -1$, donc $y_D = -1$.

   $$D(0, -1)$$

   Milieu de $[AC]$ : $\left(\dfrac{-1 + 4}{2}, \dfrac{2 + (-2)}{2}\right) = \left(\dfrac{3}{2}, 0\right)$.

   Milieu de $[BD]$ : $\left(\dfrac{3 + 0}{2}, \dfrac{1 + (-1)}{2}\right) = \left(\dfrac{3}{2}, 0\right)$.

   Les deux milieux sont les mêmes : c'est bien un parallélogramme.

4. On calcule d'abord les composantes de $2\overrightarrow{AB} - \overrightarrow{AC}$ :

   $$2\overrightarrow{AB} - \overrightarrow{AC} \begin{pmatrix} 2 \times 4 - 5 \\ 2 \times (-1) - (-4) \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$$

   Puis $\overrightarrow{AE} \begin{pmatrix} x_E + 1 \\ y_E - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$, donc $x_E = 2$ et $y_E = 4$.

   $$E(2, 4)$$

5. $\overrightarrow{AB} \begin{pmatrix} 4 \\ -1 \end{pmatrix}$ et $\overrightarrow{AF} \begin{pmatrix} 7 - (-1) \\ y - 2 \end{pmatrix} = \begin{pmatrix} 8 \\ y - 2 \end{pmatrix}$.

   $A$, $B$, $F$ alignés $\iff \det\left(\overrightarrow{AB}, \overrightarrow{AF}\right) = 0$ :

   $$4(y - 2) - 8 \times (-1) = 0 \iff 4y - 8 + 8 = 0 \iff y = 0$$

   $$F(7, 0)$$

   Contrôle : $\overrightarrow{AF} \begin{pmatrix} 8 \\ -2 \end{pmatrix} = 2\overrightarrow{AB}$.

:::intuition
En coordonnées, toutes les questions de géométrie « parallélogramme, alignement, milieu » deviennent des **calculs sur les composantes**.
:::

:::trap
Pour $\overrightarrow{DC}$, on fait « extrémité $-$ origine » : $C - D$, pas $D - C$. Une inversion donnerait l'opposé du vecteur.
:::
