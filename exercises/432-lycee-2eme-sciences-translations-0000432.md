---
uid: "0000432"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Composer deux translations"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "vecteurs", "relation-de-chasles"]
provenance: own
dressing: "composer deux translations"
rung: 3
---
Soient $A$, $B$ et $C$ trois points du plan. On considère un point quelconque $M$, son image $M_1$ par $t_{\overrightarrow{AB}}$, puis l'image $M_2$ de $M_1$ par $t_{\overrightarrow{BC}}$.

1. Écrire les deux égalités vectorielles qui définissent $M_1$ et $M_2$.

2. Montrer que $\overrightarrow{MM_2} = \overrightarrow{AC}$. Que peut-on dire de l'application qui à $M$ associe $M_2$ ?

3. Application. $ABCD$ est un parallélogramme. Déterminer l'image de $A$ par $t_{\overrightarrow{AD}} \circ t_{\overrightarrow{AB}}$ (on applique d'abord $t_{\overrightarrow{AB}}$, puis $t_{\overrightarrow{AD}}$).

4. Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. On considère $\vec{u} \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} -3 \\ 4 \end{pmatrix}$.

   a. Déterminer l'image de $M(1, 1)$ d'abord par $t_{\vec{u}}$, puis par $t_{\vec{v}}$.

   b. Vérifier que le résultat est l'image de $M$ par la translation de vecteur $\vec{u} + \vec{v}$.

   c. Quelle est l'image d'un point par $t_{\vec{u}}$ puis par $t_{-\vec{u}}$ ?

---

## Solution

:::definition[Composée de deux applications]
$g \circ f$ désigne l'application qui à $M$ associe $g(f(M))$ : on applique **d'abord $f$**, puis $g$.
:::

:::property[Chasles]
$$\boxed{\overrightarrow{XY} + \overrightarrow{YZ} = \overrightarrow{XZ}}$$
:::

1. $M_1 = t_{\overrightarrow{AB}}(M)$ signifie $\overrightarrow{MM_1} = \overrightarrow{AB}$.

   $M_2 = t_{\overrightarrow{BC}}(M_1)$ signifie $\overrightarrow{M_1M_2} = \overrightarrow{BC}$.

2. On passe de $M$ à $M_2$ en passant par $M_1$ :

   $$\overrightarrow{MM_2} = \overrightarrow{MM_1} + \overrightarrow{M_1M_2} = \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$

   Ce vecteur $\overrightarrow{AC}$ est le même pour tous les points $M$. L'application $M \mapsto M_2$ est la **translation de vecteur $\overrightarrow{AC}$** :

   $$\boxed{t_{\overrightarrow{BC}} \circ t_{\overrightarrow{AB}} = t_{\overrightarrow{AC}}}$$

3. $t_{\overrightarrow{AB}}(A) = B$. Puis $t_{\overrightarrow{AD}}(B)$ est le point $B'$ tel que $\overrightarrow{BB'} = \overrightarrow{AD}$. Dans le parallélogramme, $\overrightarrow{AD} = \overrightarrow{BC}$, donc $B' = C$.

   L'image de $A$ est $C$. On le retrouve avec la question 2 : $t_{\overrightarrow{AD}} \circ t_{\overrightarrow{AB}}$ est la translation de vecteur $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$, qui envoie $A$ sur $C$.

4. a. $t_{\vec{u}}$ ajoute $(2, -1)$ : $M(1, 1)$ donne $M_1(3, 0)$.

   $t_{\vec{v}}$ ajoute $(-3, 4)$ : $M_1(3, 0)$ donne $M_2(0, 4)$.

   b. $\vec{u} + \vec{v} \begin{pmatrix} 2 - 3 \\ -1 + 4 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$. L'image de $M(1, 1)$ par $t_{\vec{u} + \vec{v}}$ est $(1 - 1,\ 1 + 3) = (0, 4)$, c'est bien $M_2$. ✓

   c. $t_{-\vec{u}} \circ t_{\vec{u}} = t_{\vec{u} + (-\vec{u})} = t_{\vec{0}}$ : chaque point revient **sur lui-même**. On dit que $t_{-\vec{u}}$ est la translation **réciproque** de $t_{\vec{u}}$.

:::intuition
Faire un déplacement puis un autre revient à faire **un seul** déplacement : leur somme. Composer deux translations, c'est additionner leurs vecteurs.
:::

:::trap
$g \circ f$ se lit de droite à gauche : on applique **$f$ d'abord**. Pour des translations, l'ordre n'a pas d'importance pour le résultat, mais ce ne sera plus vrai pour d'autres transformations.
:::
