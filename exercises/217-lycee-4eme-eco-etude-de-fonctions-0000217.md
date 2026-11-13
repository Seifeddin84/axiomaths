---
uid: "0000217"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 12"
title: "Fonction rationnelle, asymptote verticale et asymptote oblique"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["fonction-rationnelle", "asymptote-oblique", "asymptote-verticale", "tableau-de-variations", "theoreme-des-valeurs-intermediaires"]
---

Soit la fonction $f$ définie sur $]-\infty, 1[ \cup ]1, +\infty[$ par $f(x) = \dfrac{2x^3 + 2x^2 - 10x + 11}{2(x - 1)^2}$.

1. Montrer que $f$ peut s'écrire sous la forme : $f(x) = x + 3 + \dfrac{5}{2(x - 1)^2}$.

2. On étudie les limites de $f$ et les asymptotes de $\mathcal{C}_f$.

   a. Calculer $\displaystyle\lim_{x \to 1^+} f(x)$ et $\displaystyle\lim_{x \to 1^-} f(x)$. Interpréter les résultats graphiquement.

   b. Calculer $\displaystyle\lim_{x \to -\infty} f(x)$ et $\displaystyle\lim_{x \to +\infty} f(x)$.

   c. Montrer que la droite $\Delta : y = x + 3$ est une asymptote oblique à $\mathcal{C}_f$ au voisinage de $\pm\infty$.

3. On admet que le tableau de variations de $f$ est le suivant (les valeurs $2{,}7$ et $6{,}5$ sont approchées) :

   | $x$ | $-\infty$ | | $1$ | | $2{,}7$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f(x)$ | $\dots$ | ↗ | $\dots$ ‖ $\dots$ | ↘ | $6{,}5$ | ↗ | $\dots$ |

   a. Compléter le tableau de variations de $f$.

   b. Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha \in ]-4, -1[$.

   c. Combien l'équation $f(x) = 10$ admet-elle de solutions dans l'intervalle $]1, +\infty[$ ?

La courbe représentative de $f$ est tracée ci-dessous. Placer $\alpha$ et tracer la droite $\Delta$.

![Courbe représentative de f : deux branches de part et d'autre de la droite x = 1, la branche de droite ayant un minimum d'environ 6,5 vers x = 2,7](/exercises/images/217-lycee-4eme-eco-etude-de-fonctions-0000217.png)

---

## Solution

1. On part de la forme proposée et on la met **au même dénominateur** :

   $x + 3 + \dfrac{5}{2(x-1)^2} = \dfrac{2(x+3)(x-1)^2 + 5}{2(x-1)^2}$.

   On développe le numérateur, en commençant par $(x - 1)^2 = x^2 - 2x + 1$ :

   - $(x+3)(x^2 - 2x + 1) = x^3 - 2x^2 + x + 3x^2 - 6x + 3 = x^3 + x^2 - 5x + 3$ ;

   - donc $2(x+3)(x-1)^2 = 2x^3 + 2x^2 - 10x + 6$ ;

   - et en ajoutant $5$ : $2x^3 + 2x^2 - 10x + 11$.

   On retrouve exactement le numérateur de $f(x)$ :

   $f(x) = \dfrac{2x^3 + 2x^2 - 10x + 11}{2(x-1)^2} = x + 3 + \dfrac{5}{2(x-1)^2}$.

2. a. On utilise la forme de la question 1. Quand $x$ tend vers $1$ :

   - $x + 3$ tend vers $4$ ;

   - $(x - 1)^2$ tend vers $0$ **par valeurs positives** (un carré est positif, des deux côtés de $1$), donc $\dfrac{5}{2(x-1)^2}$ tend vers $+\infty$.

   Donc :

   $\displaystyle\lim_{x \to 1^+} f(x) = +\infty$ et $\displaystyle\lim_{x \to 1^-} f(x) = +\infty$.

   Interprétation : la droite d'équation $x = 1$ est **asymptote verticale** à $\mathcal{C}_f$ ; la courbe monte vers $+\infty$ des deux côtés de cette droite.

   b. Quand $x$ tend vers $\pm\infty$, $\dfrac{5}{2(x-1)^2}$ tend vers $0$ et $x + 3$ tend vers $\pm\infty$ :

   $\displaystyle\lim_{x \to -\infty} f(x) = -\infty$ et $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

   c. On étudie la différence entre la courbe et la droite :

   $f(x) - (x + 3) = \dfrac{5}{2(x-1)^2}$.

   Cette différence tend vers $0$ quand $x \to \pm\infty$. La droite $\Delta : y = x + 3$ est donc **asymptote oblique** à $\mathcal{C}_f$ au voisinage de $-\infty$ et de $+\infty$.

   *Position.* Comme $\dfrac{5}{2(x-1)^2} > 0$ pour tout $x \neq 1$, la courbe est **toujours au-dessus** de $\Delta$.

3. a. **On complète les « ... » du tableau** avec les résultats de la question 2.

   - À gauche de $1$ : $f$ croît de $\displaystyle\lim_{x \to -\infty} f(x) = -\infty$ jusqu'à $\displaystyle\lim_{x \to 1^-} f(x) = +\infty$.

   - À droite de $1$ : $f$ décroît de $\displaystyle\lim_{x \to 1^+} f(x) = +\infty$ jusqu'à son minimum $\approx 6{,}5$.

   - Puis elle croît jusqu'à $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

   | $x$ | $-\infty$ | | $1$ | | $2{,}7$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f(x)$ | $-\infty$ | ↗ | $+\infty$ ‖ $+\infty$ | ↘ | $6{,}5$ | ↗ | $+\infty$ |

   *Remarque.* Les valeurs $2{,}7$ et $6{,}5$ sont arrondies : avec $f'(x) = 1 - \dfrac{5}{(x-1)^3}$, le minimum est atteint quand $(x-1)^3 = 5$, c'est-à-dire $x = 1 + \sqrt[3]{5} \approx 2{,}71$, et vaut environ $6{,}56$.

   b. Sur $]-\infty, 1[$, $f$ est continue et strictement croissante. On calcule aux bornes de l'intervalle $[-4, -1]$ :

   - $f(-4) = \dfrac{2(-64) + 2 \times 16 + 40 + 11}{2 \times 25} = \dfrac{-45}{50} = -\dfrac{9}{10} < 0$ ;

   - $f(-1) = \dfrac{-2 + 2 + 10 + 11}{2 \times 4} = \dfrac{21}{8} > 0$.

   $0$ est compris entre $f(-4)$ et $f(-1)$ : par le théorème des valeurs intermédiaires, $f(x) = 0$ a une solution dans $]-4, -1[$, **unique** car $f$ est strictement monotone sur cet intervalle. C'est $\alpha$.

   *Remarque.* C'est même le seul zéro de $f$ sur tout son domaine : pour $x > 1$, on a $f(x) \geq 6{,}5 > 0$.

   c. Sur $]1, +\infty[$, on découpe en deux morceaux autour du minimum.

   - Sur $]1, 2{,}7]$ : $f$ est continue et strictement décroissante, de $+\infty$ à $\approx 6{,}5$. Comme $6{,}5 < 10$, la valeur $10$ est prise **une fois**.

   - Sur $[2{,}7, +\infty[$ : $f$ est continue et strictement croissante, de $\approx 6{,}5$ à $+\infty$. La valeur $10$ est prise **une fois**.

   Donc $f(x) = 10$ admet **deux solutions** dans $]1, +\infty[$ (environ $1{,}69$ et $6{,}93$).

   **Placer $\alpha$ et tracer $\Delta$.** $\alpha$ est l'abscisse du point où la courbe coupe l'axe des abscisses : $\alpha \approx -3{,}15$ (en effet $f(-3{,}2) \approx -0{,}06 < 0$ et $f(-3{,}1) \approx 0{,}05 > 0$). La droite $\Delta : y = x + 3$ passe par $(0\,;\,3)$ et $(-3\,;\,0)$.

   ![Courbe de f, asymptote verticale x = 1, asymptote oblique Δ : y = x + 3 et le point d'abscisse α sur l'axe des abscisses](/exercises/images/217-lycee-4eme-eco-etude-de-fonctions-0000217-solution.png)
