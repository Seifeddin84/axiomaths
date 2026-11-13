---
uid: "0000207"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 4"
title: "Continuité sur un intervalle : raccordement de deux morceaux"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["continuite", "continuite-sur-un-intervalle", "fonction-definie-par-morceaux", "raccordement"]
---

Étudier dans chaque cas la continuité de la fonction $f$ sur l'intervalle $I$.

1. $I = [1, 3]$ et

   $$\displaystyle f(x) = \begin{cases} x - 1 & \text{si } x \in [1, 2] \\ -2x + 7 & \text{si } x \in ]2, 3] \end{cases}$$

2. $I = [0, +\infty[$ et

   $$\displaystyle f(x) = \begin{cases} x^2 - x + 1 & \text{si } x \in [0, 1] \\ \dfrac{2x - 1}{x} & \text{si } x \in ]1, +\infty[ \end{cases}$$

---

## Solution

**Méthode.** Pour une fonction définie par morceaux, on procède en deux temps :

- **à l'intérieur de chaque morceau**, $f$ est donnée par une formule usuelle (polynôme, fraction rationnelle…) : on vérifie qu'elle est continue ;

- **au point de raccordement** (là où la formule change), on compare la limite à gauche, la limite à droite et la valeur de $f$.

1. **Sur $[1, 2[$** et **sur $]2, 3]$** : $x - 1$ et $-2x + 7$ sont des fonctions affines (des polynômes), donc continues.

   **Au point de raccordement $x = 2$.**

   - Valeur : $f(2) = 2 - 1 = 1$ (le point $2$ appartient au premier morceau).

   - À gauche : $\displaystyle\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x - 1) = 1$.

   - À droite : $\displaystyle\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (-2x + 7) = -4 + 7 = 3$.

   Les limites à gauche ($1$) et à droite ($3$) sont différentes : $f$ n'est pas continue en $2$.

   **Conclusion.** $f$ n'est **pas continue sur $[1, 3]$**. Elle est seulement continue sur $[1, 2]$ (continue à gauche en $2$) et sur $]2, 3]$.

2. **Sur $[0, 1[$** : $x^2 - x + 1$ est un polynôme, donc continue.

   **Sur $]1, +\infty[$** : $\dfrac{2x - 1}{x}$ est une fraction rationnelle dont le dénominateur $x$ ne s'annule pas sur $]1, +\infty[$ : elle est continue.

   **Au point de raccordement $x = 1$.**

   - Valeur : $f(1) = 1^2 - 1 + 1 = 1$.

   - À gauche : $\displaystyle\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 - x + 1) = 1$.

   - À droite : $\displaystyle\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} \dfrac{2x - 1}{x} = \dfrac{2 - 1}{1} = 1$.

   Les trois nombres sont égaux : $f$ est continue en $1$.

   **Conclusion.** $f$ est continue sur chaque morceau et au point de raccordement : $f$ est **continue sur $[0, +\infty[$**.
