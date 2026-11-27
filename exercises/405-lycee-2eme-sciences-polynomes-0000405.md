---
uid: "0000405"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Égalité de deux polynômes : trois identifications"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["polynomes", "identification", "developpement"]
provenance: own
dressing: "identifier les coefficients"
rung: 1
---
1. Déterminer les réels $a$, $b$ et $c$ tels que, pour tout réel $x$ :
   $$x^2 + 4x + 5 = a(x+1)^2 + b(x+1) + c.$$

2. Déterminer les réels $a$ et $b$ tels que, pour tout réel $x \neq 1$ :
   $$\frac{3x - 1}{x - 1} = a + \frac{b}{x - 1}.$$

3. a. Déterminer les réels $a$, $b$ et $c$ tels que, pour tout réel $x$ :
   $$x^3 - x^2 - 4x + 4 = (x - 2)(ax^2 + bx + c).$$

   b. En déduire une factorisation de $x^3 - x^2 - 4x + 4$ en produit de trois facteurs du premier degré, puis résoudre dans $\mathbb{R}$ l'équation $x^3 - x^2 - 4x + 4 = 0$.

---

## Solution

:::property[Identification]
Deux polynômes sont égaux pour tout $x$ si et seulement si les coefficients de chaque puissance de $x$ sont égaux :

$$\boxed{ax^2 + bx + c = a'x^2 + b'x + c' \text{ pour tout } x \iff a = a',\ b = b',\ c = c'}$$

Méthode : on **développe** le membre qui contient les inconnues, on **ordonne** suivant les puissances de $x$, puis on **compare** les coefficients.
:::

1. On développe le membre de droite :

   $$\displaystyle a(x+1)^2 + b(x+1) + c = a(x^2 + 2x + 1) + bx + b + c$$

   $$\displaystyle = ax^2 + (2a + b)x + (a + b + c)$$

   On compare avec $x^2 + 4x + 5$ :

   - coefficient de $x^2$ : $a = 1$ ;
   - coefficient de $x$ : $2a + b = 4$, donc $2 + b = 4$ et $b = 2$ ;
   - terme constant : $a + b + c = 5$, donc $1 + 2 + c = 5$ et $c = 2$.

   Donc $\boxed{x^2 + 4x + 5 = (x+1)^2 + 2(x+1) + 2}$.

   Contrôle : $(x+1)^2 + 2(x+1) + 2 = x^2 + 2x + 1 + 2x + 2 + 2 = x^2 + 4x + 5$.

2. On met le membre de droite au même dénominateur, pour $x \neq 1$ :

   $$\displaystyle a + \frac{b}{x-1} = \frac{a(x-1) + b}{x-1} = \frac{ax + (b - a)}{x-1}$$

   Deux fractions de même dénominateur sont égales quand leurs numérateurs sont égaux :

   $$\displaystyle 3x - 1 = ax + (b - a)$$

   - coefficient de $x$ : $a = 3$ ;
   - terme constant : $b - a = -1$, donc $b - 3 = -1$ et $b = 2$.

   Donc $\boxed{\dfrac{3x-1}{x-1} = 3 + \dfrac{2}{x-1}}$.

   Contrôle : $3 + \dfrac{2}{x-1} = \dfrac{3(x-1) + 2}{x-1} = \dfrac{3x - 1}{x-1}$.

3. a. On développe $(x - 2)(ax^2 + bx + c)$ :

   $$\displaystyle (x-2)(ax^2 + bx + c) = ax^3 + bx^2 + cx - 2ax^2 - 2bx - 2c$$

   $$\displaystyle = ax^3 + (b - 2a)x^2 + (c - 2b)x - 2c$$

   On compare avec $x^3 - x^2 - 4x + 4$ :

   - $x^3$ : $a = 1$ ;
   - $x^2$ : $b - 2a = -1$, donc $b = 1$ ;
   - $x$ : $c - 2b = -4$, donc $c = -2$ ;
   - terme constant : $-2c = 4$, ce qui est vrai : **c'est le contrôle**.

   Donc $x^3 - x^2 - 4x + 4 = (x - 2)(x^2 + x - 2)$.

   b. Pour $x^2 + x - 2$ : $\Delta = 1 + 8 = 9 = 3^2$, d'où les racines $\dfrac{-1 - 3}{2} = -2$ et $\dfrac{-1 + 3}{2} = 1$.

   Donc $x^2 + x - 2 = (x + 2)(x - 1)$ et

   $$\boxed{x^3 - x^2 - 4x + 4 = (x - 2)(x - 1)(x + 2)}$$

   Un produit est nul si et seulement si l'un de ses facteurs est nul : $S = \{-2\,;\,1\,;\,2\}$.

:::intuition
Identifier, c'est écrire « les deux côtés ont exactement la même recette ». Il y a toujours **une équation de plus que d'inconnues** : elle sert de contrôle.
:::

:::trap
Ne pas comparer seulement deux ou trois valeurs de $x$ : l'égalité doit être vraie pour **tout** $x$, donc on compare **tous** les coefficients.
:::
