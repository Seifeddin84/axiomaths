---
uid: "0000196"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 1 (limites 1 à 11)"
title: "Limites de base : polynômes, inverses et racine"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["limites", "limites-usuelles", "operations-sur-les-limites", "forme-indeterminee", "limite-a-droite"]
---

Calculer les limites suivantes :

1. $\displaystyle\lim_{x \to +\infty} 2x + 1$

2. $\displaystyle\lim_{x \to +\infty} -3x - 7$

3. $\displaystyle\lim_{x \to 0} \dfrac{-2}{5}x - 6$

4. $\displaystyle\lim_{x \to +\infty} \dfrac{x+1}{x-1}$

5. $\displaystyle\lim_{x \to 0^+} 2x - \dfrac{1}{x}$

6. $\displaystyle\lim_{x \to +\infty} \dfrac{2x - x^3}{\sqrt{2} - x}$

7. $\displaystyle\lim_{x \to \sqrt{2}} \dfrac{2x - x^3}{\sqrt{2} - x}$

8. $\displaystyle\lim_{x \to 0^+} -2 + \dfrac{1}{x} + \dfrac{1}{x^2}$

9. $\displaystyle\lim_{x \to +\infty} -2 + \dfrac{1}{x} + \dfrac{1}{x^2}$

10. $\displaystyle\lim_{x \to +\infty} \dfrac{1}{x^2 + 1}$

11. $\displaystyle\lim_{x \to 0^+} \dfrac{x+1}{\sqrt{x}}$

---

## Solution

**Les outils.** On a $\displaystyle\lim_{x \to +\infty} \dfrac{1}{x} = 0$, $\displaystyle\lim_{x \to 0^+} \dfrac{1}{x} = +\infty$ et $\displaystyle\lim_{x \to 0^+} \dfrac{1}{x^2} = +\infty$. Une somme ou un produit de limites se calcule terme à terme, sauf dans les quatre **formes indéterminées** : $+\infty - \infty$, $0 \times \infty$, $\dfrac{\infty}{\infty}$ et $\dfrac{0}{0}$ (il faut alors transformer l'expression).

1. Quand $x \to +\infty$, $2x \to +\infty$ et $1$ est une constante.

   Donc $\displaystyle\lim_{x \to +\infty} 2x + 1 = +\infty$.

2. Quand $x \to +\infty$, $x \to +\infty$ et on multiplie par $-3 < 0$ : $-3x \to -\infty$. Le terme $-7$ est une constante.

   Donc $\displaystyle\lim_{x \to +\infty} -3x - 7 = -\infty$.

3. La fonction $x \mapsto \dfrac{-2}{5}x - 6$ est un polynôme : on remplace simplement $x$ par $0$.

   $\displaystyle\lim_{x \to 0} \dfrac{-2}{5}x - 6 = \dfrac{-2}{5} \times 0 - 6 = -6$.

4. Numérateur $x + 1 \to +\infty$ et dénominateur $x - 1 \to +\infty$ : c'est la forme indéterminée $\dfrac{\infty}{\infty}$.

   On factorise le terme de plus haut degré en haut et en bas :

   $$\dfrac{x+1}{x-1} = \dfrac{x\left(1 + \dfrac{1}{x}\right)}{x\left(1 - \dfrac{1}{x}\right)} = \dfrac{1 + \dfrac{1}{x}}{1 - \dfrac{1}{x}}$$

   Comme $\dfrac{1}{x} \to 0$, on obtient $\dfrac{1+0}{1-0} = 1$.

   Donc $\displaystyle\lim_{x \to +\infty} \dfrac{x+1}{x-1} = 1$.

5. Quand $x \to 0^+$ : $2x \to 0$ et $\dfrac{1}{x} \to +\infty$, donc $-\dfrac{1}{x} \to -\infty$.

   On a « $0 + (-\infty)$ » : ce n'est pas une forme indéterminée.

   Donc $\displaystyle\lim_{x \to 0^+} 2x - \dfrac{1}{x} = -\infty$.

6. Numérateur : $2x - x^3$ a pour terme dominant $-x^3 \to -\infty$. Dénominateur : $\sqrt{2} - x \to -\infty$. C'est la forme indéterminée $\dfrac{\infty}{\infty}$.

   On factorise $x^3$ en haut et $x$ en bas :

   $$\dfrac{2x - x^3}{\sqrt{2} - x} = \dfrac{x^3\left(\dfrac{2}{x^2} - 1\right)}{x\left(\dfrac{\sqrt{2}}{x} - 1\right)} = x^2 \times \dfrac{\dfrac{2}{x^2} - 1}{\dfrac{\sqrt{2}}{x} - 1}$$

   Quand $x \to +\infty$ : $\dfrac{2}{x^2} - 1 \to -1$ et $\dfrac{\sqrt{2}}{x} - 1 \to -1$, donc le quotient tend vers $\dfrac{-1}{-1} = 1$. Et $x^2 \to +\infty$.

   Donc $\displaystyle\lim_{x \to +\infty} \dfrac{2x - x^3}{\sqrt{2} - x} = +\infty$.

   *Raccourci :* pour un quotient de polynômes en $\pm\infty$, on garde seulement les termes de plus haut degré : $\dfrac{-x^3}{-x} = x^2 \to +\infty$.

7. Quand $x \to \sqrt{2}$ : le numérateur tend vers $2\sqrt{2} - 2\sqrt{2} = 0$ et le dénominateur vers $0$. C'est la forme indéterminée $\dfrac{0}{0}$ : on cherche à simplifier par $(\sqrt{2} - x)$.

   On factorise le numérateur : $2x - x^3 = x(2 - x^2) = x(\sqrt{2} - x)(\sqrt{2} + x)$.

   Pour $x \neq \sqrt{2}$ :

   $$\dfrac{2x - x^3}{\sqrt{2} - x} = \dfrac{x(\sqrt{2} - x)(\sqrt{2} + x)}{\sqrt{2} - x} = x(\sqrt{2} + x)$$

   Il suffit alors de remplacer : $\sqrt{2} \times (\sqrt{2} + \sqrt{2}) = \sqrt{2} \times 2\sqrt{2} = 4$.

   Donc $\displaystyle\lim_{x \to \sqrt{2}} \dfrac{2x - x^3}{\sqrt{2} - x} = 4$.

8. Quand $x \to 0^+$ : $\dfrac{1}{x} \to +\infty$ et $\dfrac{1}{x^2} \to +\infty$, et $-2$ est une constante.

   On additionne deux $+\infty$ : pas de forme indéterminée.

   Donc $\displaystyle\lim_{x \to 0^+} -2 + \dfrac{1}{x} + \dfrac{1}{x^2} = +\infty$.

9. Quand $x \to +\infty$ : $\dfrac{1}{x} \to 0$ et $\dfrac{1}{x^2} \to 0$.

   Donc $\displaystyle\lim_{x \to +\infty} -2 + \dfrac{1}{x} + \dfrac{1}{x^2} = -2$.

   *Remarque.* Les questions 8 et 9 ont la même expression, mais pas la même limite : tout dépend de **où** va $x$.

10. Quand $x \to +\infty$ : $x^2 + 1 \to +\infty$, donc son inverse tend vers $0$.

    $\displaystyle\lim_{x \to +\infty} \dfrac{1}{x^2 + 1} = 0$.

11. Quand $x \to 0^+$ : le numérateur $x + 1 \to 1$ et le dénominateur $\sqrt{x} \to 0$, avec $\sqrt{x} > 0$ (on reste à droite de $0$). On a donc « $\dfrac{1}{0^+}$ ».

    Donc $\displaystyle\lim_{x \to 0^+} \dfrac{x+1}{\sqrt{x}} = +\infty$.

*Suite.* Les limites 12 à 22 (quotients, formes indéterminées, limites à gauche et à droite) sont dans l'[exercice n°197](/lycee/4eme/economie-et-gestion/limites-et-continuite#ex-0000197) ; les limites 23 à 31 (racines carrées) dans l'[exercice n°198](/lycee/4eme/economie-et-gestion/limites-et-continuite#ex-0000198).
