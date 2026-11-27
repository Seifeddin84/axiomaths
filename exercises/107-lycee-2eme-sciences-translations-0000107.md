---
uid: "0000107"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Où construire le pont ? (chemin le plus court)"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["translation", "chemin-le-plus-court", "inegalite-triangulaire", "distance", "coordonnees"]
recommended: true
provenance: adapted
adapted_from: "Problème classique du « pont sur la rivière » (chemin minimal avec une translation)"
dressing: "problème d'optimisation résolu par une translation"
rung: 5
---
Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$ (unité : le kilomètre). Une rivière est limitée par deux rives rectilignes : la rive nord d'équation $y = 4$ et la rive sud d'équation $y = 1$. Un village $A(0, 7)$ est au nord de la rivière et un village $B(8, -2)$ est au sud.

On veut construire un pont **perpendiculaire** aux rives, reliant un point $M(x, 4)$ de la rive nord à un point $N(x, 1)$ de la rive sud. Le trajet est $A \to M \to N \to B$ ; sa longueur est $AM + MN + NB$.

![Les deux rives, les villages A et B et un pont MN](/exercises/images/107-lycee-2eme-sciences-translations-0000107.png)

1. Calculer $MN$. Exprimer la longueur $L(x)$ du trajet en fonction de $x$. Calculer $L(0)$ et $L(8)$.

2. Soit $t$ la translation de vecteur $\overrightarrow{MN}$ et $A' = t(A)$.

   a. Déterminer les coordonnées de $A'$ et montrer que $A'N = AM$.

   b. En déduire que $AM + NB = A'N + NB$, puis que $AM + NB \geq A'B$.

3. Calculer $A'B$.

4. À quelle condition sur le point $N$ a-t-on $A'N + NB = A'B$ ? Déterminer alors les coordonnées de $N$ et de $M$.

5. Donner la longueur minimale du trajet $A \to M \to N \to B$.

---

## Solution

![Solution : le pont MN est placé de sorte que A', N et B soient alignés](/exercises/images/107-lycee-2eme-sciences-translations-0000107-2.png)

:::property[Inégalité triangulaire]
Pour trois points $P$, $Q$, $R$ :
$$\boxed{PQ + QR \geq PR}$$
avec égalité si et seulement si $Q$ est sur le segment $[PR]$.
:::

:::property[Outils]
- Une translation **conserve les distances**.
- $M' = t_{\vec{u}}(M) \iff \overrightarrow{MM'} = \vec{u}$.
- $PQ = \sqrt{(x_Q - x_P)^2 + (y_Q - y_P)^2}$ dans un repère orthonormé.
:::

1. $\overrightarrow{MN} \begin{pmatrix} 0 \\ -3 \end{pmatrix}$, donc $MN = 3$ (la largeur de la rivière).

   $AM = \sqrt{x^2 + (4 - 7)^2} = \sqrt{x^2 + 9}$ et $NB = \sqrt{(8 - x)^2 + (-2 - 1)^2} = \sqrt{(8 - x)^2 + 9}$.

   $$L(x) = \sqrt{x^2 + 9} + 3 + \sqrt{(8 - x)^2 + 9}$$

   $L(0) = 3 + 3 + \sqrt{64 + 9} = 6 + \sqrt{73} \approx 14{,}5$ et $L(8) = \sqrt{73} + 3 + 3 \approx 14{,}5$.

2. a. $\overrightarrow{MN} \begin{pmatrix} 0 \\ -3 \end{pmatrix}$ donc $A' = (0 + 0,\ 7 - 3) = A'(0, 4)$. Ce point ne dépend pas de $x$.

   $t(A) = A'$ et $t(M) = N$. Une translation conserve les distances : $A'N = AM$.

   b. Donc $AM + NB = A'N + NB$.

   Par l'inégalité triangulaire dans le triangle $A'NB$ : $A'N + NB \geq A'B$. Ainsi $\boxed{AM + NB \geq A'B}$.

3. $A'(0, 4)$ et $B(8, -2)$ : $\overrightarrow{A'B} \begin{pmatrix} 8 \\ -6 \end{pmatrix}$, donc $A'B = \sqrt{64 + 36} = 10$.

4. L'égalité $A'N + NB = A'B$ a lieu si et seulement si $N$ est sur le segment $[A'B]$.

   $N$ est aussi sur la rive sud : $y = 1$. La droite $(A'B)$ a pour coefficient directeur $\dfrac{-2 - 4}{8 - 0} = -\dfrac{3}{4}$ et passe par $A'(0, 4)$ : $y = 4 - \dfrac{3}{4}x$.

   $y = 1 \iff 4 - \dfrac{3}{4}x = 1 \iff x = 4$.

   $N(4, 1)$ (on vérifie $0 \leq 4 \leq 8$ : il est bien sur le segment $[A'B]$) et $M(4, 4)$.

5. Avec $x = 4$ : $AM = \sqrt{16 + 9} = 5$ et $NB = \sqrt{16 + 9} = 5$, donc $AM + NB = 10 = A'B$, et

   $$L(4) = 5 + 3 + 5 = 13$$

   Pour tout $x$, $L(x) = AM + NB + 3 \geq 10 + 3 = 13$, avec égalité pour $x = 4$. **La longueur minimale du trajet est $13$ km**, pont construit entre $M(4, 4)$ et $N(4, 1)$.

:::intuition
Comme la longueur du pont ($3$) est **fixée**, il suffit de minimiser $AM + NB$. La translation « fait disparaître le pont » : on déplace $A$ de la largeur de la rivière et on cherche le plus court chemin de $A'$ à $B$, qui est une **ligne droite**.
:::

:::trap
Ne pas chercher la solution en essayant des valeurs au hasard : on obtiendrait une valeur approchée. La translation donne la **preuve** que $x = 4$ est le meilleur, et que $13$ ne peut pas être battu.
:::
