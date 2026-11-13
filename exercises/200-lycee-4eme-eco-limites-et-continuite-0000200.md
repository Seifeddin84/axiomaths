---
uid: "0000200"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 3"
title: "Fraction rationnelle : domaine, signe et limites aux bornes"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "fonction-rationnelle", "domaine-de-definition", "signe", "asymptotes"]
---

Soit la fonction $f$ définie par $f(x) = \dfrac{-2x + 5}{x^2 - 5x + 6}$.

1. Déterminer le domaine de définition de $f$, noté $D_f$.

2. Étudier le signe de $f(x)$.

3. Calculer les limites de $f$ aux bornes de son domaine de définition.

---

## Solution

1. Une fraction n'existe que si son dénominateur n'est pas nul. On résout $x^2 - 5x + 6 = 0$ :

   $\Delta = (-5)^2 - 4 \times 1 \times 6 = 25 - 24 = 1$, donc $x = \dfrac{5 - 1}{2} = 2$ ou $x = \dfrac{5 + 1}{2} = 3$.

   On a donc $x^2 - 5x + 6 = (x-2)(x-3)$ et :

   $D_f = \mathbb{R} \setminus \{2, 3\} = ]-\infty, 2[ \,\cup\, ]2, 3[ \,\cup\, ]3, +\infty[$.

2. Le signe d'un quotient se déduit des signes du numérateur et du dénominateur.

   - Numérateur : $-2x + 5 = 0 \iff x = \dfrac{5}{2}$. Le coefficient de $x$ est négatif : $-2x + 5 > 0$ pour $x < \dfrac{5}{2}$ et $< 0$ pour $x > \dfrac{5}{2}$.

   - Dénominateur : $(x-2)(x-3)$ est un trinôme de coefficient dominant $1 > 0$ : il est positif à l'extérieur des racines et négatif entre elles. Il est donc $> 0$ pour $x < 2$ ou $x > 3$, et $< 0$ pour $2 < x < 3$.

   On range tout dans un tableau (la double barre indique une valeur interdite) :

   | $x$ | $-\infty$ | | $2$ | | $\dfrac{5}{2}$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $-2x + 5$ | | $+$ | $+$ | $+$ | $0$ | $-$ | $-$ | $-$ | |
   | $x^2 - 5x + 6$ | | $+$ | $0$ | $-$ | $-$ | $-$ | $0$ | $+$ | |
   | $f(x)$ | | $+$ | ‖ | $-$ | $0$ | $+$ | ‖ | $-$ | |

   Conclusion :

   - $f(x) > 0$ sur $]-\infty, 2[$ et sur $\left]\dfrac{5}{2}, 3\right[$ ;

   - $f(x) < 0$ sur $\left]2, \dfrac{5}{2}\right[$ et sur $]3, +\infty[$ ;

   - $f\left(\dfrac{5}{2}\right) = 0$.

3. Les bornes de $D_f$ sont $-\infty$, $2$ (à gauche et à droite), $3$ (à gauche et à droite) et $+\infty$.

   **En $\pm\infty$.** Forme $\dfrac{\infty}{\infty}$ : on garde les termes de plus haut degré.

   $$f(x) = \dfrac{x\left(-2 + \dfrac{5}{x}\right)}{x^2\left(1 - \dfrac{5}{x} + \dfrac{6}{x^2}\right)} = \dfrac{1}{x} \times \dfrac{-2 + \dfrac{5}{x}}{1 - \dfrac{5}{x} + \dfrac{6}{x^2}}$$

   Quand $x \to \pm\infty$, $\dfrac{1}{x} \to 0$ et le quotient tend vers $\dfrac{-2}{1} = -2$ : le produit tend vers $0 \times (-2) = 0$.

   $\displaystyle\lim_{x \to -\infty} f(x) = 0$ et $\displaystyle\lim_{x \to +\infty} f(x) = 0$.

   **En $2$.** Le numérateur tend vers $-4 + 5 = 1 > 0$ et le dénominateur vers $0$ : la limite est infinie, son signe est donné par le signe du dénominateur (tableau ci-dessus).

   - $x \to 2^-$ : le dénominateur est positif, il tend vers $0^+$ : $\displaystyle\lim_{x \to 2^-} f(x) = \dfrac{1}{0^+} = +\infty$.

   - $x \to 2^+$ : le dénominateur est négatif, il tend vers $0^-$ : $\displaystyle\lim_{x \to 2^+} f(x) = \dfrac{1}{0^-} = -\infty$.

   **En $3$.** Le numérateur tend vers $-6 + 5 = -1 < 0$ et le dénominateur vers $0$.

   - $x \to 3^-$ : le dénominateur est négatif, il tend vers $0^-$ : $\displaystyle\lim_{x \to 3^-} f(x) = \dfrac{-1}{0^-} = +\infty$.

   - $x \to 3^+$ : le dénominateur est positif, il tend vers $0^+$ : $\displaystyle\lim_{x \to 3^+} f(x) = \dfrac{-1}{0^+} = -\infty$.

   *Vérification.* Ces signes sont cohérents avec le tableau de la question 2 : $f > 0$ à gauche de $2$ et à gauche de $3$ (limites $+\infty$), $f < 0$ à droite de $2$ et à droite de $3$ (limites $-\infty$).

*Remarque.* Géométriquement, les droites d'équations $x = 2$ et $x = 3$ sont des asymptotes verticales de la courbe de $f$, et l'axe des abscisses ($y = 0$) est asymptote horizontale en $+\infty$ et en $-\infty$. La courbe de l'[exercice n°203](/lycee/4eme/economie-et-gestion/limites-et-continuite#ex-0000203) a exactement ce type d'allure.
