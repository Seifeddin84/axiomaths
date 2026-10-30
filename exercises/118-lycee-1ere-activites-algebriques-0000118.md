---
uid: "0000118"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités algébriques"
source: "Axiomaths"
title: "Identités remarquables, radicaux et factorisation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["identites-remarquables", "radicaux", "factorisation", "inequation"]
---
1. a. Développer $(\sqrt{3} - 1)^2$ et $(\sqrt{3} - 1)^3$.

   b. En déduire que $\sqrt{4 - 2\sqrt{3}} = \sqrt{3} - 1$.

2. Écrire $A = \dfrac{\sqrt{3} - 1}{\sqrt{3} + 1}$ sans radical au dénominateur.

3. Soit $E(x) = x^3 - 6x^2 + 12x - 9$ où $x$ est un réel.

   a. Montrer que $E(x) = (x - 2)^3 - 1$.

   b. En déduire que $E(x) = (x - 3)(x^2 - 3x + 3)$.

   c. Vérifier que $x^2 - 3x + 3 = \left(x - \dfrac{3}{2}\right)^2 + \dfrac{3}{4}$. En déduire que pour tout réel $x$ : $x^2 - 3x + 3 > 0$.

   d. Résoudre dans $\mathbb{R}$ l'équation $E(x) = 0$, puis l'inéquation $E(x) \leq 0$.

4. En utilisant la question 1, calculer $E(\sqrt{3} + 1)$.

---

## Solution

1. a. $(\sqrt{3} - 1)^2 = 3 - 2\sqrt{3} + 1 = 4 - 2\sqrt{3}$.

   $(\sqrt{3} - 1)^3 = (\sqrt{3})^3 - 3(\sqrt{3})^2 + 3\sqrt{3} - 1 = 3\sqrt{3} - 9 + 3\sqrt{3} - 1 = 6\sqrt{3} - 10$.

   b. $\sqrt{4 - 2\sqrt{3}} = \sqrt{(\sqrt{3} - 1)^2} = |\sqrt{3} - 1| = \sqrt{3} - 1$ car $\sqrt{3} > 1$.

2. $A = \dfrac{(\sqrt{3} - 1)^2}{(\sqrt{3} + 1)(\sqrt{3} - 1)} = \dfrac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}$.

3. a. $(x - 2)^3 - 1 = x^3 - 6x^2 + 12x - 8 - 1 = E(x)$.

   b. $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ avec $a = x - 2$ et $b = 1$ :

   $E(x) = (x - 2 - 1)\left[(x-2)^2 + (x - 2) + 1\right] = (x - 3)(x^2 - 3x + 3)$.

   c. $\left(x - \dfrac{3}{2}\right)^2 + \dfrac{3}{4} = x^2 - 3x + \dfrac{9}{4} + \dfrac{3}{4} = x^2 - 3x + 3$. Un carré est positif, donc $x^2 - 3x + 3 \geq \dfrac{3}{4} > 0$.

   d. Le facteur $x^2 - 3x + 3$ est strictement positif : $E(x)$ a le signe de $x - 3$.

   $E(x) = 0 \iff x = 3$ et $E(x) \leq 0 \iff x \leq 3$ : $S = \,]-\infty, 3]$.

4. $E(\sqrt{3} + 1) = (\sqrt{3} + 1 - 2)^3 - 1 = (\sqrt{3} - 1)^3 - 1 = 6\sqrt{3} - 11$.
