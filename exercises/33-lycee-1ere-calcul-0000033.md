---
uid: "0000033"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Algébriques"
source: "Lycée Rafeha MNIHLA - Devoir de Contrôle N°3"
title: "Factorisation et expressions rationnelles"
country: "Tunisie"
year: 2025
professor: "Ayari Lassaad"
difficulty: "Moyen"
points: 7
tags: ["calcul littéral", "factorisation", "polynômes", "fraction rationnelle"]
---

$x$ étant un réel.
Soit $A = x^3 - 3x^2 + 3x - 9$ et $B = x^3 - 27 - 3x(x - 3)$.

1.  a) Montrer que $A = (x - 1)^3 - 8$.
    
    b) Factoriser alors $A$.

2.  Montrer que $B = (x - 3)(x^2 + 9)$.

3.  a) Montrer que $B - A = 6(x - 3)$.

    b) Lorsque $A \neq 0$, montrer que $\frac{B}{A} = 1 + \frac{6}{x^2 + 3}$.

---

## Solution

1. a) $(x - 1)^3 - 8 = x^3 - 3x^2 + 3x - 1 - 8 = x^3 - 3x^2 + 3x - 9 = A$.

   b) $A = (x-1)^3 - 2^3 = (x - 1 - 2)\left[(x-1)^2 + 2(x-1) + 4\right] = (x - 3)(x^2 + 3)$.

2. $B = (x - 3)(x^2 + 3x + 9) - 3x(x - 3) = (x - 3)(x^2 + 3x + 9 - 3x) = (x - 3)(x^2 + 9)$.

3. a) $B - A = (x - 3)\left[(x^2 + 9) - (x^2 + 3)\right] = 6(x - 3)$.

   b) $x^2 + 3 > 0$, donc $A \neq 0 \iff x \neq 3$. Alors :
   $\dfrac{B}{A} = \dfrac{A + 6(x-3)}{A} = 1 + \dfrac{6(x - 3)}{(x - 3)(x^2 + 3)} = 1 + \dfrac{6}{x^2 + 3}$.