---
uid: "0000213"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Dérivation - Primitives"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 9"
title: "Dérivabilité en 1 d'une fonction par morceaux et asymptotes"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["derivation", "nombre-derive", "derivabilite", "point-anguleux", "asymptotes"]
---

Soit $f$ la fonction définie sur $\mathbb{R}$ par :

$$
f(x) = \begin{cases} x^2 - x - 4 & \text{si } x \leq 1 \\ \dfrac{x - 5}{x} & \text{si } x > 1 \end{cases}
$$

1. Montrer que $f$ est continue en $1$.

2. $f$ est-elle dérivable en $1$ ?

3. Calculer les limites en $\pm\infty$ et en déduire les asymptotes à la courbe représentative de $f$.

---

## Solution

1. $f$ est continue en $1$ si $\displaystyle\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1)$.

   - Valeur : $1 \leq 1$, premier morceau : $f(1) = 1 - 1 - 4 = -4$.

   - À gauche : $\displaystyle\lim_{x \to 1^-} \left(x^2 - x - 4\right) = -4$.

   - À droite : $\displaystyle\lim_{x \to 1^+} \dfrac{x - 5}{x} = \dfrac{1 - 5}{1} = -4$.

   Les trois nombres sont égaux : $f$ est continue en $1$.

2. $f$ est dérivable en $1$ si le taux d'accroissement $\dfrac{f(x) - f(1)}{x - 1}$ a une limite finie quand $x \to 1$. Comme la formule change en $1$, on étudie **à gauche** et **à droite**.

   **À gauche** ($x < 1$, donc $f(x) = x^2 - x - 4$) :

   $$\dfrac{f(x) - f(1)}{x - 1} = \dfrac{x^2 - x - 4 + 4}{x - 1} = \dfrac{x^2 - x}{x - 1} = \dfrac{x(x - 1)}{x - 1} = x \xrightarrow[x \to 1^-]{} 1$$

   $f$ est dérivable à gauche en $1$ et $f'_g(1) = 1$.

   **À droite** ($x > 1$, donc $f(x) = \dfrac{x - 5}{x}$) :

   $$\dfrac{f(x) - f(1)}{x - 1} = \dfrac{\dfrac{x - 5}{x} + 4}{x - 1} = \dfrac{\dfrac{x - 5 + 4x}{x}}{x - 1} = \dfrac{5x - 5}{x(x - 1)} = \dfrac{5(x - 1)}{x(x - 1)} = \dfrac{5}{x} \xrightarrow[x \to 1^+]{} 5$$

   $f$ est dérivable à droite en $1$ et $f'_d(1) = 5$.

   **Conclusion.** Les nombres dérivés à gauche ($1$) et à droite ($5$) sont différents : **$f$ n'est pas dérivable en $1$**. Sa courbe admet au point $(1, -4)$ deux demi-tangentes de pentes $1$ et $5$ : c'est un **point anguleux**.

3. **En $-\infty$** : on utilise $f(x) = x^2 - x - 4$. Le terme dominant est $x^2$ :

   $\displaystyle\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x^2 = +\infty$.

   **En $+\infty$** : on utilise $f(x) = \dfrac{x - 5}{x} = 1 - \dfrac{5}{x}$ :

   $\displaystyle\lim_{x \to +\infty} f(x) = 1 - 0 = 1$.

   **Asymptotes.**

   - Comme $\displaystyle\lim_{x \to +\infty} f(x) = 1$, la droite d'équation $y = 1$ est une **asymptote horizontale** à la courbe au voisinage de $+\infty$.

   - En $-\infty$, la limite est infinie : il n'y a pas d'asymptote horizontale. Y a-t-il une asymptote oblique ? On calcule $\displaystyle\lim_{x \to -\infty} \dfrac{f(x)}{x} = \lim_{x \to -\infty} \left(x - 1 - \dfrac{4}{x}\right) = -\infty$ : ce n'est pas un nombre fini, donc il n'y a **pas d'asymptote oblique** non plus.

   - Pas d'asymptote verticale : $f$ est continue sur $\mathbb{R}$ (polynôme sur $]-\infty, 1[$, fraction de dénominateur $x \neq 0$ sur $]1, +\infty[$, et continue en $1$ d'après la question 1).
