---
uid: "0000437"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Prouver un alignement avec une translation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "alignement", "image-de-droite", "parallelisme", "coordonnees"]
provenance: own
dressing: "alignement de trois points par l'image d'une droite"
rung: 3
---
Soient $A$, $B$ et $C$ trois points non alignés. On note $D$ l'image de $B$ par la translation $t = t_{\overrightarrow{AC}}$.

1. Montrer que $C$ est l'image de $A$ par $t$, puis que l'image de la droite $(AB)$ par $t$ est la droite $(CD)$.

2. Soit $M$ un point de la droite $(AB)$ et $N$ son image par $t$. Montrer que $C$, $D$ et $N$ sont alignés.

3. Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$ avec $A(0, 0)$, $B(2, 1)$ et $C(1, 3)$.

   a. Calculer les coordonnées de $D$.

   b. Vérifier que $M(4, 2)$ appartient à $(AB)$, calculer son image $N$ et vérifier que $C$, $D$, $N$ sont alignés.

---

## Solution

:::property[Image d'une droite]
L'image d'une droite $(\Delta)$ par une translation est la droite **parallèle** à $(\Delta)$ qui passe par l'image d'un de ses points. Si $P \in (\Delta)$, alors $P' \in (\Delta')$.
:::

1. $t = t_{\overrightarrow{AC}}$ : $\overrightarrow{AA'} = \overrightarrow{AC}$ donne $A' = C$. L'image de $A$ est $C$.

   $D = t(B)$ par définition. Les images de $A$ et de $B$ sont donc $C$ et $D$ : l'image de la droite $(AB)$ est la droite $(CD)$ (elle passe par $C$ et $D$, et est parallèle à $(AB)$).

2. $M \in (AB)$ donc son image $N$ appartient à l'image de $(AB)$, c'est-à-dire à $(CD)$.

   Les points $C$, $D$ et $N$ sont donc sur la même droite $(CD)$ : ils sont **alignés**.

3. a. $\overrightarrow{AC} \begin{pmatrix} 1 \\ 3 \end{pmatrix}$ donc $D(2 + 1,\ 1 + 3) = D(3, 4)$.

   b. La droite $(AB)$ passe par $A(0, 0)$ et a pour coefficient directeur $\dfrac{1}{2}$ : $y = \dfrac{x}{2}$. Pour $M(4, 2)$ : $\dfrac{4}{2} = 2$ ✓.

   $N = t(M) = (4 + 1,\ 2 + 3) = (5, 5)$.

   $\overrightarrow{CD} \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ et $\overrightarrow{CN} \begin{pmatrix} 4 \\ 2 \end{pmatrix}$ : $\det = 2 \times 2 - 4 \times 1 = 0$. Les vecteurs sont colinéaires : $C$, $D$, $N$ sont alignés. ✓

:::intuition
Pour montrer que trois points sont alignés, on peut chercher une **droite connue** qui est l'image d'une autre : tout point image d'un point de la première est sur la seconde.
:::

:::trap
Il faut que $M$ soit **sur** $(AB)$ pour que $N$ soit sur $(CD)$ : si $M$ est ailleurs, $N$ n'a aucune raison d'être aligné avec $C$ et $D$.
:::
