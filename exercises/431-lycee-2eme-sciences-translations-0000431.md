---
uid: "0000431"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Reconnaître une translation grâce à une égalité vectorielle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "egalite-vectorielle", "vecteurs"]
provenance: own
dressing: "reconnaître une translation par une égalité vectorielle"
rung: 3
---
Soient $A$ et $B$ deux points distincts du plan. À tout point $M$ du plan, on associe le point $N$ défini par la relation indiquée. On note $f$ l'application $M \mapsto N$.

1. On suppose que $\overrightarrow{MN} = \overrightarrow{MA} - \overrightarrow{MB}$.

   a. Montrer que $\overrightarrow{MN} = \overrightarrow{BA}$.

   b. En déduire que $f$ est une translation dont on précisera le vecteur.

2. On suppose maintenant que $\overrightarrow{AN} = 3\overrightarrow{AM} - 2\overrightarrow{BM}$.

   a. Montrer que $\overrightarrow{MN} = 2\overrightarrow{AB}$.

   b. En déduire que $f$ est une translation dont on précisera le vecteur.

3. Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$ avec $A(1, 2)$ et $B(3, -1)$. Dans chacun des deux cas, déterminer l'image du point $O(0, 0)$.

---

## Solution

:::definition[Translation]
$N = t_{\vec{u}}(M) \iff \overrightarrow{MN} = \vec{u}$. Une application $M \mapsto N$ est donc une translation dès que $\overrightarrow{MN}$ est **un vecteur fixe**, le même pour tous les points $M$.
:::

:::property[Chasles]
$$\boxed{\overrightarrow{XY} + \overrightarrow{YZ} = \overrightarrow{XZ}} \qquad \overrightarrow{YX} = -\overrightarrow{XY}$$
:::

1. a. On fait apparaître $\overrightarrow{BA}$ avec Chasles :

   $$\overrightarrow{MA} - \overrightarrow{MB} = \overrightarrow{MA} + \overrightarrow{BM} = \overrightarrow{BM} + \overrightarrow{MA} = \overrightarrow{BA}$$

   Donc $\overrightarrow{MN} = \overrightarrow{BA}$.

   b. Le vecteur $\overrightarrow{BA}$ ne dépend pas de $M$. Donc $f$ est la translation de vecteur $\overrightarrow{BA}$.

2. a. On écrit $\overrightarrow{AN} = \overrightarrow{AM} + \overrightarrow{MN}$, donc $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}$.

   $$\overrightarrow{MN} = 3\overrightarrow{AM} - 2\overrightarrow{BM} - \overrightarrow{AM} = 2\overrightarrow{AM} - 2\overrightarrow{BM}$$

   $$\overrightarrow{MN} = 2\left(\overrightarrow{AM} + \overrightarrow{MB}\right) = 2\overrightarrow{AB}$$

   b. $2\overrightarrow{AB}$ ne dépend pas de $M$. Donc $f$ est la translation de vecteur $2\overrightarrow{AB}$.

3. Le vecteur $\overrightarrow{AB} \begin{pmatrix} 3 - 1 \\ -1 - 2 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$, donc $\overrightarrow{BA} \begin{pmatrix} -2 \\ 3 \end{pmatrix}$.

   **Cas 1.** $f$ est $t_{\overrightarrow{BA}}$ : l'image de $O(0, 0)$ est $(0 - 2,\ 0 + 3) = (-2, 3)$.

   **Cas 2.** $f$ est $t_{2\overrightarrow{AB}}$ avec $2\overrightarrow{AB} \begin{pmatrix} 4 \\ -6 \end{pmatrix}$ : l'image de $O$ est $(0 + 4,\ 0 - 6) = (4, -6)$.

   Contrôle du cas 2 par la relation de départ : $N(4, -6)$ donne $\overrightarrow{AN} \begin{pmatrix} 3 \\ -8 \end{pmatrix}$, et $3\overrightarrow{AM} - 2\overrightarrow{BM}$ avec $M = O$ vaut $3 \begin{pmatrix} -1 \\ -2 \end{pmatrix} - 2 \begin{pmatrix} -3 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ -8 \end{pmatrix}$ ✓.

:::intuition
Pour reconnaître une translation, on cherche à transformer la relation en $\overrightarrow{MN} = \text{(un vecteur qui ne dépend pas de } M)$.
:::

:::trap
$\overrightarrow{MA} - \overrightarrow{MB}$ vaut $\overrightarrow{BA}$ et **non** $\overrightarrow{AB}$ : on ajoute l'opposé de $\overrightarrow{MB}$, soit $\overrightarrow{BM}$, ce qui donne la chaîne $B \to M \to A$.
:::
