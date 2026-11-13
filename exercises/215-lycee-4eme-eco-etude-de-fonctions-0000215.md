---
uid: "0000215"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 10"
title: "Étude complète d'une fonction polynôme de degré 3"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["etude-de-fonction", "polynome-degre-3", "tangente", "point-d-inflexion", "theoreme-des-valeurs-intermediaires"]
---

Soit $g$ la fonction définie sur $\mathbb{R}$ par $g(x) = 2x^3 + 6x^2 + 1$.

1. Calculer $g'(x)$.

2. Dresser le tableau de variations de $g$.

3. On s'intéresse à l'équation $g(x) = 0$.

   a. Démontrer que l'équation $g(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$.

   b. Montrer que $\alpha \in ]-4, -2[$.

4. Donner l'équation de la tangente $\Delta$ à $\mathcal{C}_g$ au point d'abscisse $1$.

5. Montrer que la courbe représentative de $g$ admet un point d'inflexion $I$ dont on déterminera les coordonnées.

6. Représenter $\mathcal{C}_g$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$. (On prend pour unité graphique $2$ cm.)

---

## Solution

1. $g$ est un polynôme : elle est dérivable sur $\mathbb{R}$. On dérive terme à terme, avec $(x^n)' = n\,x^{n-1}$ :

   $g'(x) = 2 \times 3x^2 + 6 \times 2x + 0 = 6x^2 + 12x$.

   On factorise pour pouvoir étudier le signe :

   $g'(x) = 6x(x + 2)$.

2. **Étape 1 : signe de $g'(x)$.**

   $g'(x) = 6x(x+2)$ s'annule en $x = 0$ et en $x = -2$. C'est un trinôme dont le coefficient de $x^2$ est positif ($6 > 0$) : il est **positif à l'extérieur** des racines et **négatif entre** les racines.

   - Si $x < -2$ : $g'(x) > 0$, donc $g$ est croissante.

   - Si $-2 < x < 0$ : $g'(x) < 0$, donc $g$ est décroissante.

   - Si $x > 0$ : $g'(x) > 0$, donc $g$ est croissante.

   **Étape 2 : valeurs et limites.**

   - $g(-2) = 2 \times (-8) + 6 \times 4 + 1 = -16 + 24 + 1 = 9$ ;

   - $g(0) = 1$ ;

   - en $\pm\infty$, un polynôme se comporte comme son terme de plus haut degré : $\displaystyle\lim_{x \to -\infty} g(x) = \lim_{x \to -\infty} 2x^3 = -\infty$ et $\displaystyle\lim_{x \to +\infty} g(x) = +\infty$.

   **Étape 3 : le tableau.**

   | $x$ | $-\infty$ | | $-2$ | | $0$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $g'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
   | $g(x)$ | $-\infty$ | ↗ | $9$ | ↘ | $1$ | ↗ | $+\infty$ |

3. a. On cherche les solutions de $g(x) = 0$ **intervalle par intervalle**, là où $g$ est continue (c'est un polynôme) et strictement monotone.

   - Sur $]-\infty, -2]$ : $g$ est strictement croissante et passe de $-\infty$ à $9$. Elle prend donc **une seule fois** chaque valeur de $]-\infty, 9]$, en particulier la valeur $0$ (car $0 \in ]-\infty, 9]$). Il y a **une** solution $\alpha$ dans cet intervalle.

   - Sur $[-2, 0]$ : $g$ décroît de $9$ à $1$, donc $g(x) \geq 1 > 0$ : **aucune** solution.

   - Sur $[0, +\infty[$ : $g$ croît à partir de $1$, donc $g(x) \geq 1 > 0$ : **aucune** solution.

   Conclusion : l'équation $g(x) = 0$ admet **une unique solution** $\alpha$ dans $\mathbb{R}$, et $\alpha < -2$.

   b. On calcule $g$ aux bornes de l'intervalle proposé :

   $g(-4) = 2 \times (-64) + 6 \times 16 + 1 = -128 + 96 + 1 = -31 < 0$ ;

   $g(-2) = 9 > 0$.

   $g$ est continue et strictement croissante sur $[-4, -2]$, et $0$ est compris entre $g(-4) = -31$ et $g(-2) = 9$. Donc $g(x) = 0$ a une solution dans $]-4, -2[$ ; par l'unicité du **a.**, c'est $\alpha$ :

   $\alpha \in ]-4, -2[$.

   *Pour aller plus loin.* On peut resserrer : $g(-3) = 1 > 0$ et $g(-3{,}1) \approx -0{,}92 < 0$, donc $\alpha \in ]-3{,}1\,;\,-3[$ (en fait $\alpha \approx -3{,}05$).

4. La tangente en $a = 1$ a pour équation $y = g'(a)(x - a) + g(a)$.

   - $g(1) = 2 + 6 + 1 = 9$ ;

   - $g'(1) = 6 \times 1 \times (1 + 2) = 18$.

   $y = 18(x - 1) + 9 = 18x - 18 + 9$, soit

   $\Delta : y = 18x - 9$.

5. Un point d'inflexion est un point où la courbe change de concavité : la dérivée seconde $g''$ s'annule **en changeant de signe**.

   $g'(x) = 6x^2 + 12x$ donc $g''(x) = 12x + 12 = 12(x + 1)$.

   - $g''(x) < 0$ pour $x < -1$ ;

   - $g''(x) = 0$ pour $x = -1$ ;

   - $g''(x) > 0$ pour $x > -1$.

   $g''$ s'annule en $-1$ en changeant de signe : la courbe admet un point d'inflexion d'abscisse $-1$. Son ordonnée est $g(-1) = -2 + 6 + 1 = 5$ :

   $I(-1\,;\,5)$.

   *Remarque.* $I$ est même un **centre de symétrie** de la courbe : on vérifie que $g(-1 + h) = 5 - 6h + 2h^3$ et $g(-1 - h) = 5 + 6h - 2h^3$, donc $g(-1 + h) + g(-1 - h) = 10 = 2 \times 5$.

6. **Préparer le tracé.** On place d'abord les points utiles et les tangentes.

   | $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ |
   |---|---|---|---|---|---|
   | $g(x)$ | $1$ | $9$ | $5$ | $1$ | $9$ |

   - en $x = -2$ (maximum, ordonnée $9$) et en $x = 0$ (minimum, ordonnée $1$), la tangente est **horizontale** ;

   - $I(-1\,;\,5)$ : la courbe traverse sa tangente ;

   - en $(1\,;\,9)$, la tangente $\Delta : y = 18x - 9$ est très raide : elle coupe l'axe des abscisses en $x = \tfrac{1}{2}$ ;

   - la courbe coupe l'axe des abscisses en $\alpha \approx -3{,}05$.

   Ensuite on relie les points par une courbe lisse, en respectant le tableau de variations.

   ![Courbe de g : maximum au point d'abscisse −2 et d'ordonnée 9, minimum au point (0, 1), point d'inflexion I(−1, 5), tangente Δ au point (1, 9)](/exercises/images/215-lycee-4eme-eco-etude-de-fonctions-0000215.png)

   *(La figure est dessinée ici à échelle réduite ; sur ton cahier, prends $2$ cm pour une unité.)*
