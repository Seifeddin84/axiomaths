---
uid: "0000435"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Une translation conserve le contact : cercle et tangente"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "cercle", "tangente", "orthogonalite", "coordonnees"]
provenance: own
dressing: "image d'un cercle et de sa tangente"
rung: 3
---
Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$. Soit $\mathcal{C}$ le cercle de centre $O$ et de rayon $2$, et $(d)$ la droite d'équation $y = 2$. On note $T$ le point de coordonnées $(0, 2)$.

1. Montrer que $T$ appartient à $\mathcal{C}$ et à $(d)$, et que $(OT)$ est perpendiculaire à $(d)$. En déduire que $(d)$ est tangente à $\mathcal{C}$ en $T$.

2. Soit $t$ la translation de vecteur $\vec{u} \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.

   a. Déterminer le centre $\Omega'$ et le rayon du cercle $\mathcal{C}'$, image de $\mathcal{C}$ par $t$.

   b. Déterminer l'image $T'$ de $T$ et l'équation de la droite $(d')$, image de $(d)$.

3. Montrer que $(d')$ est tangente à $\mathcal{C}'$ en $T'$.

---

## Solution

:::property[Tangente à un cercle]
Une droite $(d)$ est **tangente** en $T$ au cercle de centre $\Omega$ si $T$ est sur le cercle et sur $(d)$ et si $\boxed{(\Omega T) \perp (d)}$.

Une translation envoie : un cercle sur un cercle **de même rayon** (centre = image du centre), une droite sur une droite **parallèle**, et conserve les angles droits.
:::

1. $OT = \sqrt{0^2 + 2^2} = 2$ : $T \in \mathcal{C}$.

   $T$ a pour ordonnée $2$ : $T \in (d)$.

   $\overrightarrow{OT} \begin{pmatrix} 0 \\ 2 \end{pmatrix}$ est vertical, et $(d)$ est horizontale (équation $y = 2$) : $(OT) \perp (d)$.

   Donc $(d)$ est tangente à $\mathcal{C}$ en $T$.

2. a. $\Omega'$ est l'image de $O$ : $\Omega'(0 + 3,\ 0 - 1) = \Omega'(3, -1)$. Le rayon est conservé : $2$.

   b. $T'(0 + 3,\ 2 - 1) = T'(3, 1)$.

   $(d')$ est parallèle à $(d)$, donc horizontale, et passe par $T'(3, 1)$ : son équation est $y = 1$.

3. $T' \in \mathcal{C}'$ : $\Omega' T' = \sqrt{(3 - 3)^2 + (1 + 1)^2} = 2$. ✓

   $T' \in (d')$ : l'ordonnée de $T'$ est $1$. ✓

   $\overrightarrow{\Omega' T'} \begin{pmatrix} 0 \\ 2 \end{pmatrix}$ est vertical et $(d')$ est horizontale : $(\Omega' T') \perp (d')$.

   Donc $(d')$ est tangente à $\mathcal{C}'$ en $T'$.

   Autre vérification : la distance du centre $\Omega'(3, -1)$ à la droite $y = 1$ est $|1 - (-1)| = 2$, égale au rayon.

:::intuition
Une tangente est définie par un contact et un angle droit. Une translation conserve **les deux** : l'image d'une tangente est la tangente à l'image du cercle.
:::

:::trap
Ne pas oublier que le centre se déplace : $\Omega'$ n'est pas $O$. Comparer $(d')$ à $\mathcal{C}$ au lieu de $\mathcal{C}'$ donnerait une droite qui n'est plus tangente.
:::
