---
uid: "0000417"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Parallélogramme : droites parallèles et points alignés"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["vecteurs", "parallelogramme", "droites-paralleles", "alignement", "relation-de-chasles"]
provenance: own
dressing: "parallélisme et alignement dans un parallélogramme"
rung: 2
---
Soit $ABCD$ un parallélogramme. On pose $\vec{u} = \overrightarrow{AB}$ et $\vec{v} = \overrightarrow{AD}$. On considère les points $E$ et $F$ définis par $\overrightarrow{AE} = \dfrac{1}{3}\overrightarrow{AB}$ et $\overrightarrow{AF} = \dfrac{1}{3}\overrightarrow{AD}$, et on note $I$ le milieu de $[EF]$.

1. Exprimer $\overrightarrow{AC}$ et $\overrightarrow{BD}$ en fonction de $\vec{u}$ et $\vec{v}$.

2. a. Exprimer $\overrightarrow{EF}$ en fonction de $\vec{u}$ et $\vec{v}$.

   b. En déduire que les droites $(EF)$ et $(BD)$ sont parallèles.

3. a. Exprimer $\overrightarrow{AI}$ en fonction de $\vec{u}$ et $\vec{v}$.

   b. En déduire que les points $A$, $I$ et $C$ sont alignés. Quelle fraction de $[AC]$ représente $AI$ ?

4. On munit le plan du repère $(A, \vec{u}, \vec{v})$. Donner les coordonnées de $A$, $B$, $C$, $D$, $E$, $F$ et $I$, puis retrouver les résultats des questions 2 et 3 avec des déterminants.

---

## Solution

:::property[Outils]
- Dans un parallélogramme $ABCD$ : $\overrightarrow{AB} = \overrightarrow{DC}$ et $\overrightarrow{AD} = \overrightarrow{BC}$.
- **Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ et $\overrightarrow{EF} = \overrightarrow{AF} - \overrightarrow{AE}$.
- $\vec{u}$ et $\vec{v}$ colinéaires $\iff$ il existe un réel $k$ tel que $\vec{v} = k\vec{u}$ (et alors les droites de ces vecteurs sont parallèles).
- $I$ milieu de $[EF]$ $\iff \overrightarrow{AI} = \dfrac{1}{2}\left(\overrightarrow{AE} + \overrightarrow{AF}\right)$.
:::

1. Dans un parallélogramme, $\overrightarrow{BC} = \overrightarrow{AD} = \vec{v}$. Par Chasles :

   $$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = \vec{u} + \vec{v}$$

   Pour $\overrightarrow{BD}$, on passe par $A$ :

   $$\overrightarrow{BD} = \overrightarrow{BA} + \overrightarrow{AD} = -\vec{u} + \vec{v}$$

2. a. $\overrightarrow{EF} = \overrightarrow{AF} - \overrightarrow{AE}$, avec $\overrightarrow{AE} = \dfrac{1}{3}\vec{u}$ et $\overrightarrow{AF} = \dfrac{1}{3}\vec{v}$ :

   $$\overrightarrow{EF} = \frac{1}{3}\vec{v} - \frac{1}{3}\vec{u} = \frac{1}{3}(\vec{v} - \vec{u})$$

   b. D'après la question 1, $\overrightarrow{BD} = -\vec{u} + \vec{v} = \vec{v} - \vec{u}$. Donc

   $$\boxed{\overrightarrow{EF} = \frac{1}{3}\overrightarrow{BD}}$$

   Les vecteurs $\overrightarrow{EF}$ et $\overrightarrow{BD}$ sont colinéaires : les droites $(EF)$ et $(BD)$ sont **parallèles**.

3. a. $I$ est le milieu de $[EF]$ :

   $$\overrightarrow{AI} = \frac{1}{2}\left(\overrightarrow{AE} + \overrightarrow{AF}\right) = \frac{1}{2}\left(\frac{1}{3}\vec{u} + \frac{1}{3}\vec{v}\right) = \frac{1}{6}(\vec{u} + \vec{v})$$

   b. D'après la question 1, $\vec{u} + \vec{v} = \overrightarrow{AC}$. Donc

   $$\boxed{\overrightarrow{AI} = \frac{1}{6}\overrightarrow{AC}}$$

   $\overrightarrow{AI}$ et $\overrightarrow{AC}$ sont colinéaires et ont le même point $A$ : les points $A$, $I$, $C$ sont **alignés**, et $AI = \dfrac{1}{6}AC$.

4. Dans le repère $(A, \vec{u}, \vec{v})$ : $A(0, 0)$, $B(1, 0)$, $D(0, 1)$, $C(1, 1)$ (car $\overrightarrow{AC} = \vec{u} + \vec{v}$), $E\left(\dfrac{1}{3}, 0\right)$ et $F\left(0, \dfrac{1}{3}\right)$.

   Milieu $I$ de $[EF]$ : $I\left(\dfrac{1}{6}, \dfrac{1}{6}\right)$.

   **Parallélisme.** $\overrightarrow{EF} \begin{pmatrix} -\frac{1}{3} \\ \frac{1}{3} \end{pmatrix}$ et $\overrightarrow{BD} \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.

   $$\det\left(\overrightarrow{EF}, \overrightarrow{BD}\right) = -\frac{1}{3} \times 1 - (-1) \times \frac{1}{3} = -\frac{1}{3} + \frac{1}{3} = 0$$

   **Alignement.** $\overrightarrow{AI} \begin{pmatrix} \frac{1}{6} \\ \frac{1}{6} \end{pmatrix}$ et $\overrightarrow{AC} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

   $$\det\left(\overrightarrow{AI}, \overrightarrow{AC}\right) = \frac{1}{6} \times 1 - 1 \times \frac{1}{6} = 0$$

:::intuition
Montrer qu'un vecteur est un **multiple** d'un autre ($\overrightarrow{EF} = \frac{1}{3}\overrightarrow{BD}$, $\overrightarrow{AI} = \frac{1}{6}\overrightarrow{AC}$) donne tout de suite le parallélisme ou l'alignement.
:::

:::trap
$\overrightarrow{BD} = \vec{v} - \vec{u}$ et **non** $\vec{u} - \vec{v}$ : on prend « extrémité $-$ origine », c'est-à-dire $\overrightarrow{AD} - \overrightarrow{AB}$.
:::
