---
uid: "0000210"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 7"
title: "Racine d'un quotient : continuité, bijection et fonction réciproque"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["continuite", "fonction-composee", "bijection", "fonction-reciproque", "asymptote-verticale"]
---

Soit la fonction $f$ définie par $f(x) = \sqrt{\dfrac{x}{1 - x}}$. On donne ci-dessous sa courbe représentative $\mathcal{C}_f$ dans un repère orthonormé.

![Courbe de f : elle part de l'origine et monte de plus en plus vite quand x approche de 1](/exercises/images/210-lycee-4eme-eco-limites-et-continuite-0000210.png)

1. Donner le domaine de définition de $f$, noté $D_f$.

2. Écrire $f$ sous la forme $f = g \circ h$, où $g$ et $h$ sont deux fonctions à déterminer.

3. Étudier la continuité de $f$ sur $D_f$.

4. Calculer $\displaystyle\lim_{x \to 1^-} f(x)$ et interpréter le résultat graphiquement.

5. En utilisant la courbe ci-dessus, montrer que $f$ réalise une bijection de l'intervalle $[0, 1[$ sur un intervalle $J$ qu'on précisera.

6. Expliciter la fonction réciproque $f^{-1}$ et préciser son domaine de continuité.

7. a. Montrer que l'équation $f(x) = 4$ admet une unique solution $\beta$ dans l'intervalle $[0, 1[$ et vérifier que $0{,}9 \leq \beta \leq 1$.

   b. Calculer explicitement $\beta$.

---

## Solution

1. Il faut que $1 - x \neq 0$ et que ce qui est sous la racine soit positif ou nul : $\dfrac{x}{1 - x} \geq 0$.

   On étudie le signe du quotient : le numérateur $x$ est positif pour $x \geq 0$ ; le dénominateur $1 - x$ est strictement positif pour $x < 1$ et négatif pour $x > 1$.

   | $x$ | $-\infty$ | | $0$ | | $1$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $x$ | | $-$ | $0$ | $+$ | $+$ | $+$ | |
   | $1 - x$ | | $+$ | $+$ | $+$ | $0$ | $-$ | |
   | $\dfrac{x}{1-x}$ | | $-$ | $0$ | $+$ | ‖ | $-$ | |

   Le quotient est positif ou nul exactement pour $0 \leq x < 1$.

   $D_f = [0, 1[$.

2. On pose $h(x) = \dfrac{x}{1 - x}$ (fonction qui s'applique en premier) et $g(t) = \sqrt{t}$ (qui s'applique ensuite). Alors $f(x) = g(h(x)) = \sqrt{\dfrac{x}{1-x}}$.

   $$f = g \circ h \quad \text{avec} \quad h(x) = \dfrac{x}{1 - x} \quad \text{et} \quad g(t) = \sqrt{t}$$

3. - $h$ est une fraction rationnelle dont le dénominateur $1 - x$ ne s'annule pas sur $[0, 1[$ : elle est continue sur $[0, 1[$ ;

   - pour tout $x \in [0, 1[$, $h(x) \geq 0$ (question 1), et $g$ est continue sur $[0, +\infty[$.

   Comme composée de deux fonctions continues, $f = g \circ h$ est continue sur $D_f = [0, 1[$.

4. Quand $x \to 1^-$ : $x \to 1$ et $1 - x \to 0^+$ (car $x < 1$). Donc $h(x) = \dfrac{x}{1-x} \to \dfrac{1}{0^+} = +\infty$, puis $\sqrt{\ }$ de quelque chose qui tend vers $+\infty$ tend vers $+\infty$.

   $\displaystyle\lim_{x \to 1^-} f(x) = +\infty$.

   **Interprétation graphique.** La droite d'équation $x = 1$ est une **asymptote verticale** à $\mathcal{C}_f$ : sur la figure, la courbe monte de plus en plus vite en se rapprochant de la droite $x = 1$ (qu'elle ne touche jamais, puisque $1 \notin D_f$).

5. **Avec la courbe.** En allant de gauche à droite, la courbe monte toujours, sans jamais redescendre ni rester à plat : $f$ est strictement croissante. Elle part du point $(0, 0)$ et monte indéfiniment : elle prend toutes les valeurs positives.

   **Par le calcul.** On écrit $h(x) = \dfrac{x}{1-x} = -1 + \dfrac{1}{1-x}$. Quand $x$ augmente dans $[0, 1[$, $1 - x$ diminue en restant strictement positif, donc $\dfrac{1}{1-x}$ augmente : $h$ est strictement croissante. La racine carrée est strictement croissante sur $[0, +\infty[$ : leur composée $f$ est strictement croissante sur $[0, 1[$.

   $f$ est donc **continue** (question 3) et **strictement croissante** sur $[0, 1[$ : elle réalise une bijection de $[0, 1[$ sur l'intervalle

   $$J = f([0, 1[) = \left[ f(0), \lim_{x \to 1^-} f(x) \right[ = [0, +\infty[$$

   car $f(0) = \sqrt{0} = 0$ et $\displaystyle\lim_{x \to 1^-} f(x) = +\infty$ (question 4).

6. Soit $y \in J = [0, +\infty[$. On cherche l'unique $x \in [0, 1[$ tel que $f(x) = y$ :

   $$\sqrt{\dfrac{x}{1-x}} = y \iff \dfrac{x}{1-x} = y^2 \iff x = y^2(1 - x) \iff x\left(1 + y^2\right) = y^2 \iff x = \dfrac{y^2}{1 + y^2}$$

   (la première équivalence est valable car $y \geq 0$ ; on vérifie que $x \in [0, 1[$ : $0 \leq \dfrac{y^2}{1+y^2} < 1$).

   En notant la variable $x$ comme d'habitude, la fonction réciproque est :

   $$f^{-1} : [0, +\infty[ \to [0, 1[, \quad x \mapsto \dfrac{x^2}{1 + x^2}$$

   C'est une fraction rationnelle dont le dénominateur $1 + x^2 \geq 1$ ne s'annule jamais : $f^{-1}$ est **continue sur son domaine** $[0, +\infty[$.

7. a. Comme $4 \in J = [0, +\infty[$ et que $f$ est une bijection de $[0, 1[$ sur $J$, l'équation $f(x) = 4$ admet **une unique solution** $\beta \in [0, 1[$.

   Calculons $f(0{,}9) = \sqrt{\dfrac{0{,}9}{0{,}1}} = \sqrt{9} = 3$. Alors $f(0{,}9) = 3 < 4 = f(\beta)$. Comme $f$ est strictement croissante, cela impose $0{,}9 < \beta$. Et $\beta < 1$ puisque $\beta \in [0, 1[$.

   Donc $0{,}9 \leq \beta \leq 1$.

   b. $\beta = f^{-1}(4) = \dfrac{4^2}{1 + 4^2} = \dfrac{16}{17}$.

   *Vérification.* $f\left(\dfrac{16}{17}\right) = \sqrt{\dfrac{16/17}{1/17}} = \sqrt{16} = 4$. Et $\dfrac{16}{17} \approx 0{,}941 \in [0{,}9, 1]$.
