---
uid: "0000219"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 14"
title: "Fonction homographique et deux tangentes parallèles"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["fonction-homographique", "asymptotes", "tangente", "tableau-de-variations", "courbe"]
---

Soit la fonction $f$ définie par $f(x) = \dfrac{2x + 5}{x + 2}$.

1. Déterminer le domaine de définition de $f$.

2. Déterminer les limites de $f$ aux bornes de son domaine de définition. Interpréter les résultats graphiquement.

3. Calculer $f'(x)$.

4. Dresser alors son tableau de variations.

5. Montrer que les tangentes aux points d'abscisses $-1$ et $-3$ sont parallèles et établir leurs équations.

6. Tracer dans un repère orthonormé la courbe $\mathcal{C}_f$ représentant $f$ et les deux tangentes en $-1$ et en $-3$, notées $T_{-1}$ et $T_{-3}$.

---

## Solution

1. $f$ est un quotient : le dénominateur $x + 2$ doit être non nul, c'est-à-dire $x \neq -2$.

   $D_f = \mathbb{R} \setminus \{-2\} = ]-\infty, -2[ \cup ]-2, +\infty[$.

2. Les « bornes » du domaine sont $-\infty$, $-2$ (à gauche et à droite) et $+\infty$.

   **En $\pm\infty$** : on garde les termes de plus haut degré, $\dfrac{2x}{x} = 2$. Donc

   $\displaystyle\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = 2$.

   La droite $y = 2$ est **asymptote horizontale** à $\mathcal{C}_f$ en $-\infty$ et en $+\infty$.

   **En $-2$** : le numérateur $2x + 5$ tend vers $2 \times (-2) + 5 = 1 > 0$. Le dénominateur $x + 2$ tend vers $0$ :

   - par valeurs positives si $x \to -2^+$ (c'est-à-dire $x > -2$) : $\displaystyle\lim_{x \to -2^+} f(x) = \dfrac{1}{0^+} = +\infty$ ;

   - par valeurs négatives si $x \to -2^-$ (c'est-à-dire $x < -2$) : $\displaystyle\lim_{x \to -2^-} f(x) = \dfrac{1}{0^-} = -\infty$.

   La droite $x = -2$ est **asymptote verticale** à $\mathcal{C}_f$.

3. $f$ est dérivable sur son domaine. Avec $u(x) = 2x + 5$ ($u' = 2$) et $v(x) = x + 2$ ($v' = 1$) :

   $f'(x) = \dfrac{u'v - uv'}{v^2} = \dfrac{2(x + 2) - (2x + 5) \times 1}{(x + 2)^2} = \dfrac{2x + 4 - 2x - 5}{(x + 2)^2}$.

   $f'(x) = \dfrac{-1}{(x + 2)^2}$.

4. Pour tout $x \neq -2$, $(x+2)^2 > 0$, donc $f'(x) < 0$ : $f$ est **strictement décroissante** sur chacun des deux intervalles de son domaine.

   | $x$ | $-\infty$ | | $-2$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f'(x)$ | | $-$ | ‖ | $-$ | |
   | $f(x)$ | $2$ | ↘ | $-\infty$ ‖ $+\infty$ | ↘ | $2$ |

   *Attention.* $f$ n'est pas décroissante sur tout $D_f$ : elle passe de $-\infty$ à $+\infty$ en $-2$. On dit « décroissante sur chaque intervalle ».

5. La tangente en $a$ a pour coefficient directeur $f'(a)$. Deux tangentes sont parallèles si elles ont **le même coefficient directeur**.

   - $f'(-1) = \dfrac{-1}{(-1 + 2)^2} = \dfrac{-1}{1} = -1$ ;

   - $f'(-3) = \dfrac{-1}{(-3 + 2)^2} = \dfrac{-1}{1} = -1$.

   Les deux coefficients directeurs sont égaux à $-1$ : les tangentes sont **parallèles**.

   On calcule les ordonnées des points de tangence : $f(-1) = \dfrac{-2 + 5}{-1 + 2} = 3$ et $f(-3) = \dfrac{-6 + 5}{-3 + 2} = \dfrac{-1}{-1} = 1$.

   - $T_{-1} : y = f'(-1)(x + 1) + f(-1) = -(x + 1) + 3$, soit $T_{-1} : y = -x + 2$ ;

   - $T_{-3} : y = f'(-3)(x + 3) + f(-3) = -(x + 3) + 1$, soit $T_{-3} : y = -x - 2$.

6. **Préparer le tracé.**

   - Les deux asymptotes : $x = -2$ (verticale) et $y = 2$ (horizontale), en pointillés.

   - Quelques points : $f(-1) = 3$, $f(0) = \dfrac{5}{2}$, $f(-3) = 1$, $f(-4) = \dfrac{3}{2}$, $f\left(-\dfrac{5}{2}\right) = 0$.

   - Les deux tangentes, de pente $-1$, passant par $(-1\,;\,3)$ et par $(-3\,;\,1)$.

   - Deux branches : l'une dans le coin « en haut à droite » des asymptotes, l'autre dans le coin « en bas à gauche ».

   ![Hyperbole de f avec ses asymptotes x = −2 et y = 2 et les deux tangentes parallèles T−1 et T−3](/exercises/images/219-lycee-4eme-eco-etude-de-fonctions-0000219.png)
