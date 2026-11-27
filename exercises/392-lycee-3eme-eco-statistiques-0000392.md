---
uid: "0000392"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Trouver l'erreur"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "recherche-d-erreur", "moyenne", "mediane", "pieges"]
provenance: "own"
dressing: "trouver l'erreur dans les calculs d'indicateurs"
rung: 4
batch: "2026-11-19-3eco-statistiques-n5"
---

On donne la série de dix notes : $8\quad12\quad7\quad15\quad10\quad9\quad14\quad11\quad10\quad14$.

Un élève a écrit :

- Moyenne : $\overline x=\dfrac{110}{10}=11$.

- Série rangée : $7\ \ 8\ \ 9\ \ 10\ \ 10\ \ 11\ \ 12\ \ 14\ \ 14\ \ 15$.

- Médiane : la valeur de rang $5$, donc $\text{Me}=10$.

- Quartiles : $Q_1=\dfrac{x_2+x_3}{2}=8{,}5$ et $Q_3=\dfrac{x_7+x_8}{2}=13$.

- Variance : $V=\dfrac{7^2+8^2+\dots+15^2}{10}=127{,}6$.

1. Quels résultats sont justes ? Repérer les trois erreurs.

2. Corriger : donner la médiane, $Q_1$, $Q_3$, la variance et l'écart type (au centième).

---

## Solution

1. La moyenne et la série rangée sont justes : $7+8+9+10+10+11+12+14+14+15=110$.

   **Erreur 1 :** la médiane. Avec $n=10$ (pair), il faut les *deux* valeurs centrales.

   **Erreur 2 :** les quartiles. Le manuel ne fait pas de moyenne de deux valeurs pour $Q_1$ et $Q_3$.

   **Erreur 3 :** la variance. L'élève a oublié de retrancher $\overline x^{\,2}$.

2.
   :::property[Médiane et quartiles (convention du manuel)]
   $n$ pair : $\boxed{\text{Me}=\dfrac{x_{n/2}+x_{n/2+1}}{2}}$. $Q_1$ : rang $\dfrac n4$ ou, s'il n'est pas entier, le rang immédiatement supérieur ; idem pour $Q_3$ avec $\dfrac{3n}4$.
   :::

   $$\displaystyle \text{Me}=\dfrac{x_5+x_6}{2}=\dfrac{10+11}{2}=10{,}5$$

   $\dfrac{10}{4}=2{,}5$ : $Q_1$ est de rang $3$, donc $Q_1=9$.

   $\dfrac{30}{4}=7{,}5$ : $Q_3$ est de rang $8$, donc $Q_3=14$.

   :::property[Variance]
   $\boxed{V=\text{(moyenne des carrés)}-\overline x^{\,2}}$.
   :::

   $$\displaystyle V=\dfrac{1\,276}{10}-11^2=127{,}6-121=6{,}6\qquad\sigma=\sqrt{6{,}6}\approx2{,}57$$

   **Contrôle :** une variance de $127{,}6$ donnerait $\sigma\approx11{,}3$, soit autant que la moyenne : impossible pour des notes entre $7$ et $15$.
