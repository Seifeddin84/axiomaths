---
title: "Matrices et systèmes"
slug: "lycee-4eme-economie-matrices-et-systemes"
school: "lycee"
level: "4eme"
sections: ["Economie et Gestion"]
chapter: "Matrices et systèmes"
summary: "Lire une matrice, l'additionner, la multiplier, calculer un déterminant et un inverse, puis résoudre un système d'équations avec une seule égalité : AX = B."
prerequisites: ["Systèmes d'équations linéaires"]
source: "Fiche 1 « Matrices et systèmes d'équations » de S. Talbi, reprise et complétée"
updated: "2026-11-13"
---

## Pourquoi ce chapitre ?

Pour résoudre $3x = 6$, on divise par $3$. Pour un système de trois équations à trois inconnues, on aimerait faire pareil. Les matrices rendent cela possible : le système s'écrit **une seule égalité** $AX = B$, et on le résout en « divisant » par $A$, c'est-à-dire en multipliant par son **inverse** : $X = A^{-1}B$.

:::summary[L'essentiel]
- Une matrice d'ordre $n \times p$ a $n$ lignes et $p$ colonnes ; $a_{ij}$ est à la ligne $i$, colonne $j$.
- **Somme** : terme à terme (même ordre). **$\alpha A$** : on multiplie tous les termes par $\alpha$.
- **Produit $A \times B$** : possible si le nombre de **colonnes de $A$** égale le nombre de **lignes de $B$**. En général $AB \neq BA$.
- $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. Une matrice carrée est **inversible** $\iff \det \neq 0$.
- Ordre 2 : $A^{-1} = \dfrac{1}{\det A} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
- Un système s'écrit $AX = B$, donc $X = A^{-1}B$.
:::

## 1. Matrice, ordre, éléments

:::definition[Matrice]
Une **matrice** est un tableau de réels à $n$ lignes et $p$ colonnes. On dit qu'elle est **d'ordre $n \times p$**.

L'élément $a_{ij}$ est celui de la **$i$-ème ligne** et de la **$j$-ème colonne**.

Si $n = p$, la matrice est **carrée** d'ordre $n$.
:::

:::example
$A = \begin{pmatrix} 1 & 0 & -2 \\ 3 & 5 & 4 \end{pmatrix}$ a $2$ lignes et $3$ colonnes : elle est d'ordre $2 \times 3$. L'élément $a_{23}$ est à la 2e ligne, 3e colonne : $a_{23} = 4$.
:::

:::definition[Matrices identité]
$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

Pour une matrice carrée $A$ d'ordre $n$ : $A \times I_n = I_n \times A = A$. L'identité joue le rôle du nombre $1$.
:::

## 2. Somme et produit par un réel

Pour **additionner** deux matrices du même ordre, on additionne les éléments qui ont la même place : $c_{ij} = a_{ij} + b_{ij}$. Pour **multiplier par un réel** $\alpha$, on multiplie chaque élément : $(\alpha A)_{ij} = \alpha\, a_{ij}$.

:::example
Avec $A = \begin{pmatrix} 1 & 0 & -2 \\ 3 & 5 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 2 & 1 & 0 \\ -1 & 4 & 3 \end{pmatrix}$ :

$$A + B = \begin{pmatrix} 3 & 1 & -2 \\ 2 & 9 & 7 \end{pmatrix}, \qquad 2A - B = \begin{pmatrix} 2 - 2 & 0 - 1 & -4 - 0 \\ 6 + 1 & 10 - 4 & 8 - 3 \end{pmatrix} = \begin{pmatrix} 0 & -1 & -4 \\ 7 & 6 & 5 \end{pmatrix}.$$
:::

## 3. Produit de deux matrices

:::property[Condition et ordre du produit]
Si $A$ est d'ordre $m \times n$ et $B$ d'ordre $n \times p$, alors $C = A \times B$ existe et est d'ordre $m \times p$. L'élément $c_{ij}$ s'obtient en multipliant la **$i$-ème ligne de $A$** par la **$j$-ème colonne de $B$** :

$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj}.$$
:::

On retient : $(2 \times \mathbf{3})(\mathbf{3} \times 2) \to 2 \times 2$. Les deux nombres du milieu doivent être égaux, et ils disparaissent.

![Disposition pratique du produit de deux matrices](/lessons/images/eco-matrices-produit.svg "On écrit B au-dessus à droite de A : le produit se place à leur croisement. Le terme c11 est entouré : ligne 1 de A fois colonne 1 de B.")

:::example
Avec $A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 1 & 4 \end{pmatrix}$ ($2 \times 3$) et $B = \begin{pmatrix} 2 & 1 \\ 0 & 3 \\ 5 & -1 \end{pmatrix}$ ($3 \times 2$) :

$$A \times B = \begin{pmatrix} 1 \times 2 + 2 \times 0 + 0 \times 5 & 1 \times 1 + 2 \times 3 + 0 \times (-1) \\ 3 \times 2 + 1 \times 0 + 4 \times 5 & 3 \times 1 + 1 \times 3 + 4 \times (-1) \end{pmatrix} = \begin{pmatrix} 2 & 7 \\ 26 & 2 \end{pmatrix}.$$
:::

:::warning
**Le produit n'est pas commutatif.** Ici $B \times A$ existe aussi, mais elle est d'ordre $3 \times 3$ : ce n'est même pas la même taille que $AB$. Même pour deux matrices carrées de même ordre, $AB \neq BA$ en général :

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}.$$
:::

## 4. Déterminant et inverse

:::definition[Déterminant d'ordre 2]
$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = a \times d - b \times c.$$
:::

:::example
$\begin{vmatrix} 3 & 1 \\ 5 & 2 \end{vmatrix} = 3 \times 2 - 1 \times 5 = 1$.
:::

:::definition[Déterminant d'ordre 3]
On développe suivant la **première colonne**, avec les signes $+\ -\ +$ :

$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & k \end{vmatrix} = a \begin{vmatrix} e & f \\ h & k \end{vmatrix} - d \begin{vmatrix} b & c \\ h & k \end{vmatrix} + g \begin{vmatrix} b & c \\ e & f \end{vmatrix}.$$
:::

:::example
$$\begin{vmatrix} -2 & 0 & 3 \\ 3 & -2 & 0 \\ 1 & -1 & 2 \end{vmatrix} = -2 \begin{vmatrix} -2 & 0 \\ -1 & 2 \end{vmatrix} - 3 \begin{vmatrix} 0 & 3 \\ -1 & 2 \end{vmatrix} + 1 \begin{vmatrix} 0 & 3 \\ -2 & 0 \end{vmatrix} = -2(-4) - 3(3) + 1(6) = 8 - 9 + 6 = 5.$$
:::

:::theorem[Matrice inversible et déterminant]
Une matrice carrée $A$ d'ordre $n$ est **inversible** si et seulement si $\det A \neq 0$. Il existe alors une unique matrice, notée $A^{-1}$, telle que $A \times A^{-1} = A^{-1} \times A = I_n$.

Ce théorème est admis.
:::

:::theorem[Inverse d'une matrice d'ordre 2]
Si $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ avec $\det A = ad - bc \neq 0$, alors
$$A^{-1} = \frac{1}{\det A} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$
:::

:::proof
On calcule le produit :

| Étape | Justification |
|---|---|
| $\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & -ab + ba \\ cd - dc & -cb + da \end{pmatrix}$ | produit ligne par colonne |
| $= \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = (\det A)\, I_2$ | les termes croisés se détruisent |
| donc $A \times \dfrac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = I_2$ | on divise par $\det A \neq 0$ |
:::

:::example
Pour $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$, $\det A = 1$, donc $A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$. Vérification : $3 \times 2 + 1 \times (-5) = 1$ et $5 \times 2 + 2 \times (-5) = 0$, etc.
:::

:::warning
Si $\det A = 0$, la matrice **n'a pas d'inverse**. Par exemple $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$ a pour déterminant $2 \times 2 - 4 \times 1 = 0$ : inutile de chercher son inverse.
:::

## 5. Résoudre un système

:::method[Résoudre un système avec les matrices]
1. **Écrire $AX = B$** : $A$ contient les coefficients, $X$ les inconnues, $B$ les seconds membres. Les inconnues sont toujours rangées dans le même ordre ; une inconnue absente d'une équation donne un coefficient $0$.
2. **Vérifier que $\det A \neq 0$.**
3. **Obtenir $A^{-1}$** : par la formule en ordre 2 ; en ordre 3, l'énoncé la donne le plus souvent (ou demande de vérifier que $A \times M = I_3$).
4. **Calculer $X = A^{-1}B$.**
5. **Vérifier** dans une équation de départ.
:::

:::example[Un système 2 × 2]
$\begin{cases} 3x + y = 7 \\ 5x + 2y = 12 \end{cases}$ s'écrit $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 \\ 12 \end{pmatrix}$.

On a vu que $\det A = 1 \neq 0$ et $A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$. Donc

$$X = A^{-1}B = \begin{pmatrix} 2 \times 7 - 1 \times 12 \\ -5 \times 7 + 3 \times 12 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}.$$

Vérification : $3 \times 2 + 1 = 7$ et $5 \times 2 + 2 \times 1 = 12$. La solution est $(x, y) = (2, 1)$.
:::

:::example[Un système 3 × 3]
$\begin{cases} -2x + 3z = 1 \\ 3x - 2y = 5 \\ x - y + 2z = 6 \end{cases}$ s'écrit $AX = B$ avec

$$A = \begin{pmatrix} -2 & 0 & 3 \\ 3 & -2 & 0 \\ 1 & -1 & 2 \end{pmatrix}, \quad X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \quad B = \begin{pmatrix} 1 \\ 5 \\ 6 \end{pmatrix}.$$

Les zéros de $A$ correspondent aux inconnues absentes (pas de $y$ dans la 1re équation, pas de $z$ dans la 2e).

On a $\det A = 5 \neq 0$ (calculé plus haut) et $A^{-1} = \dfrac{1}{5} \begin{pmatrix} -4 & -3 & 6 \\ -6 & -7 & 9 \\ -1 & -2 & 4 \end{pmatrix}$, donc

$$X = A^{-1}B = \frac{1}{5} \begin{pmatrix} -4 - 15 + 36 \\ -6 - 35 + 54 \\ -1 - 10 + 24 \end{pmatrix} = \begin{pmatrix} 17/5 \\ 13/5 \\ 13/5 \end{pmatrix}.$$

Vérification dans la 1re équation : $-2 \times \frac{17}{5} + 3 \times \frac{13}{5} = \frac{-34 + 39}{5} = 1$.
:::

## Vérifie-toi

::::check[Produit]
Soit $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ et $B = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Calculer $AB$. Peut-on calculer $BA$ ?

:::answer
$A$ est d'ordre $2 \times 2$ et $B$ d'ordre $2 \times 1$ : $AB$ existe, d'ordre $2 \times 1$.

$$AB = \begin{pmatrix} 1 \times 3 + 2 \times 4 \\ 0 \times 3 + 1 \times 4 \end{pmatrix} = \begin{pmatrix} 11 \\ 4 \end{pmatrix}.$$

$BA$ n'existe pas : $B$ a $1$ colonne et $A$ a $2$ lignes, $1 \neq 2$.
:::
::::

::::check[Un système]
Résoudre $\begin{cases} 2x + y = 1 \\ 3x + 2y = -1 \end{cases}$ avec les matrices.

:::answer
$A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$, $\det A = 2 \times 2 - 1 \times 3 = 1 \neq 0$, donc $A^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$.

$$X = A^{-1}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \times 1 - 1 \times (-1) \\ -3 \times 1 + 2 \times (-1) \end{pmatrix} = \begin{pmatrix} 3 \\ -5 \end{pmatrix}.$$

Vérification : $2 \times 3 + (-5) = 1$ et $3 \times 3 + 2 \times (-5) = -1$. Solution : $(x, y) = (3, -5)$.
:::
::::
