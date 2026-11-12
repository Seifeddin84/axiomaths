---
uid: "0000168"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Matrices et systèmes"
source: "Série 7 — Matrices et systèmes (Bac Économie et Gestion)"
title: "Ordre d'une matrice, somme et combinaisons linéaires"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["matrices", "ordre-d-une-matrice", "somme-de-matrices", "calcul-matriciel"]
---

Pour chaque cas, donner l'ordre des matrices $A$ et $B$ et calculer si possible : $A + B$, $A - B$, $2A + 3B$ et $3A - 2B$.

1. $A = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ et $B = \begin{pmatrix} 5 \\ 6 \\ 7 \end{pmatrix}$.

2. $A = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ et $B = \begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$.

3. $A = \begin{pmatrix} 1 & -1 & 2 \\ 8 & 5 & -3 \end{pmatrix}$ et $B = \begin{pmatrix} 3 & 0 \\ 7 & 11 \\ -4 & 6 \end{pmatrix}$.

4. $A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$ et $B = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$.

---

## Solution

On ne peut additionner (ou combiner) deux matrices que si elles ont **le même ordre** : on opère alors terme à terme.

1. $A$ et $B$ sont d'ordre $3 \times 1$.

   $A + B = \begin{pmatrix} 6 \\ 8 \\ 10 \end{pmatrix}$, $\quad A - B = \begin{pmatrix} -4 \\ -4 \\ -4 \end{pmatrix}$, $\quad 2A + 3B = \begin{pmatrix} 17 \\ 22 \\ 27 \end{pmatrix}$, $\quad 3A - 2B = \begin{pmatrix} -7 \\ -6 \\ -5 \end{pmatrix}$.

2. $A$ est d'ordre $3 \times 1$ et $B$ d'ordre $1 \times 3$ : les ordres sont différents, aucune de ces opérations n'est possible.

3. $A$ est d'ordre $2 \times 3$ et $B$ d'ordre $3 \times 2$ : impossible, pour la même raison.

   (En revanche le **produit** $AB$ existe : nombre de colonnes de $A$ = nombre de lignes de $B$.)

4. $A$ et $B$ sont d'ordre $3 \times 3$ (matrices carrées d'ordre 3).

   $A + B = \begin{pmatrix} 2 & 1 & 2 \\ 0 & 2 & 2 \\ 1 & 0 & 2 \end{pmatrix}$, $\quad A - B = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}$.

   $2A + 3B = \begin{pmatrix} 5 & 3 & 5 \\ 0 & 5 & 5 \\ 2 & 0 & 5 \end{pmatrix}$, $\quad 3A - 2B = \begin{pmatrix} 1 & -2 & 1 \\ 0 & 1 & 1 \\ 3 & 0 & 1 \end{pmatrix}$.
