---
uid: "0000119"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités algébriques"
source: "Axiomaths"
title: "Fraction rationnelle : simplification et inégalité"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["fraction-rationnelle", "factorisation", "identites-remarquables", "inegalite"]
---
1. a. Montrer que pour tout réel $x$ : $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

   b. Montrer que pour tout réel $x$ : $x^2 + x + 1 > 0$.

2. Soit $F(x) = \dfrac{x^3 - 1}{x^2 - 1}$.

   a. Déterminer les valeurs de $x$ pour lesquelles $F(x)$ existe.

   b. Montrer que pour tout réel $x$ différent de $1$ et de $-1$ : $F(x) = \dfrac{x^2 + x + 1}{x + 1}$.

   c. En déduire que : $F(x) = x + \dfrac{1}{x + 1}$.

3. Résoudre dans $\mathbb{R}$ l'équation $F(x) = x + \dfrac{1}{2}$.

4. a. Montrer que pour tout réel $t > 0$ : $t + \dfrac{1}{t} \geq 2$.

   b. En déduire que pour tout réel $x > -1$ avec $x \neq 1$ : $F(x) \geq 1$. Pour quelle valeur de $x$ a-t-on $F(x) = 1$ ?

5. Calculer $F(\sqrt{2} - 1)$ et l'écrire sous la forme $a\sqrt{2} + b$ avec $a$ et $b$ rationnels.

---

## Solution

1. a. $(x - 1)(x^2 + x + 1) = x^3 + x^2 + x - x^2 - x - 1 = x^3 - 1$.

   b. $x^2 + x + 1 = \left(x + \dfrac{1}{2}\right)^2 + \dfrac{3}{4} > 0$.

2. a. $F(x)$ existe si et seulement si $x^2 - 1 \neq 0$, c'est-à-dire $x \neq 1$ et $x \neq -1$.

   b. $F(x) = \dfrac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \dfrac{x^2 + x + 1}{x + 1}$ (car $x - 1 \neq 0$).

   c. $x + \dfrac{1}{x + 1} = \dfrac{x(x + 1) + 1}{x + 1} = \dfrac{x^2 + x + 1}{x + 1} = F(x)$.

3. $F(x) = x + \dfrac{1}{2} \iff \dfrac{1}{x + 1} = \dfrac{1}{2} \iff x + 1 = 2 \iff x = 1$.

   Mais $F(1)$ n'existe pas : l'équation n'a **pas de solution**, $S = \emptyset$.

4. a. Pour $t > 0$ : $t + \dfrac{1}{t} - 2 = \dfrac{t^2 - 2t + 1}{t} = \dfrac{(t - 1)^2}{t} \geq 0$.

   b. Pour $x > -1$, on pose $t = x + 1 > 0$ : $F(x) = (x + 1) + \dfrac{1}{x + 1} - 1 = t + \dfrac{1}{t} - 1 \geq 2 - 1 = 1$.

   Égalité si et seulement si $t = 1$, c'est-à-dire $x = 0$ : $F(0) = 1$.

5. $\sqrt{2} - 1 + 1 = \sqrt{2}$, donc $F(\sqrt{2} - 1) = \sqrt{2} - 1 + \dfrac{1}{\sqrt{2}} = \sqrt{2} - 1 + \dfrac{\sqrt{2}}{2} = \dfrac{3}{2}\sqrt{2} - 1$.
