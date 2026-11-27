---
uid: "0000425"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Vecteur d'une translation et image d'une droite"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "coordonnees", "droite", "parallelisme", "point-invariant"]
provenance: own
dressing: "retrouver le vecteur, puis l'image d'une droite"
rung: 2
---
Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$. Une translation $t$ envoie le point $A(1, 2)$ sur le point $A'(-1, 5)$.

1. Déterminer les composantes du vecteur de la translation $t$.

2. Un point $M(x, y)$ a pour image $M'(x', y')$. Exprimer $x'$ et $y'$ en fonction de $x$ et $y$.

3. Existe-t-il un point $M$ tel que $t(M) = M$ ? Justifier.

4. Soit $(d)$ la droite d'équation $y = 2x + 1$.

   a. Vérifier que $P(0, 1)$ est un point de $(d)$ et déterminer son image $P'$.

   b. En déduire l'équation de la droite $(d')$, image de $(d)$ par $t$.

   c. Que remarque-t-on pour $(d)$ et $(d')$ ?

---

## Solution

:::property[Image d'une droite]
L'image d'une droite $(d)$ par une translation est une droite $(d')$ **parallèle** à $(d)$. Elle passe par l'image de n'importe quel point de $(d)$.

Une droite d'équation $y = mx + p$ a pour **coefficient directeur** $m$ ; deux droites parallèles ont le même coefficient directeur.
:::

1. $\overrightarrow{AA'} \begin{pmatrix} -1 - 1 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}$.

   La translation $t$ a pour vecteur $\vec{u} \begin{pmatrix} -2 \\ 3 \end{pmatrix}$.

2. $\overrightarrow{MM'} \begin{pmatrix} x' - x \\ y' - y \end{pmatrix} = \vec{u} \begin{pmatrix} -2 \\ 3 \end{pmatrix}$, donc

   $$\boxed{x' = x - 2 \quad \text{et} \quad y' = y + 3}$$

3. Si $t(M) = M$, alors $\overrightarrow{MM} = \vec{u}$. Or $\overrightarrow{MM} = \vec{0}$ et $\vec{u} \neq \vec{0}$ : c'est impossible.

   **Aucun** point n'est invariant par une translation de vecteur non nul. On le voit aussi sur les formules : $x' = x - 2 \neq x$ pour tout $x$.

4. a. Pour $x = 0$, $2x + 1 = 1$ : le point $P(0, 1)$ est bien sur $(d)$.

   Son image est $P'(0 - 2,\ 1 + 3) = P'(-2, 4)$.

   b. $(d')$ est parallèle à $(d)$, donc a le même coefficient directeur $2$ : $(d')$ a pour équation $y = 2x + p$.

   Elle passe par $P'(-2, 4)$ : $4 = 2 \times (-2) + p$, donc $p = 8$.

   $$\boxed{(d') : y = 2x + 8}$$

   Contrôle avec un autre point : $Q(1, 3)$ est sur $(d)$ ($2 \times 1 + 1 = 3$). Son image est $Q'(-1, 6)$ et $2 \times (-1) + 8 = 6$ ✓.

   c. Les droites $(d)$ et $(d')$ ont le même coefficient directeur $2$ : elles sont **parallèles**.

:::intuition
Faire glisser une droite sans la tourner donne une droite **parallèle** : il suffit de savoir où va un de ses points pour la placer.
:::

:::trap
Pour l'image d'une droite, ne pas ajouter le vecteur à l'équation « telle quelle » : on transporte **un point**, puis on garde le même coefficient directeur.
:::
