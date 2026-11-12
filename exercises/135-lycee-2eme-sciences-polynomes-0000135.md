---
uid: "0000135"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Équation symétrique de degré 4 et somme des carrés"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["polynomes", "equation-symetrique", "changement-de-variable", "identification", "somme-telescopique"]
---

**Partie A : une équation de degré 4**

On considère l'équation $(E) : x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$.

1. Vérifier que $0$ n'est pas solution de $(E)$.

2. Montrer que, pour $x \neq 0$, $(E)$ est équivalente à
   $$\left(x^2 + \frac{1}{x^2}\right) - 5\left(x + \frac{1}{x}\right) + 8 = 0.$$

3. On pose $X = x + \dfrac{1}{x}$.

   a. Exprimer $x^2 + \dfrac{1}{x^2}$ en fonction de $X$.

   b. En déduire que $(E)$ se ramène à $X^2 - 5X + 6 = 0$, puis résoudre cette équation.

4. Résoudre $(E)$ dans $\mathbb{R}$.

5. En déduire une factorisation de $x^4 - 5x^3 + 8x^2 - 5x + 1$.

**Partie B : la somme $1^2 + 2^2 + \dots + n^2$**

1. Déterminer un polynôme $Q$ de degré $3$ tel que $Q(0) = 0$ et, pour tout réel $x$,
   $$Q(x) - Q(x - 1) = x^2.$$

2. Vérifier que $Q(x) = \dfrac{x(x + 1)(2x + 1)}{6}$.

3. En déduire que, pour tout entier naturel $n \geq 1$, $1^2 + 2^2 + \dots + n^2 = \dfrac{n(n + 1)(2n + 1)}{6}$.

4. Calculer $1^2 + 2^2 + \dots + 20^2$.

---

## Solution

**Partie A**

1. Pour $x = 0$, le premier membre vaut $1 \neq 0$ : $0$ n'est pas solution.

2. Comme $x \neq 0$, on peut diviser les deux membres par $x^2$ :
   $$x^2 - 5x + 8 - \frac{5}{x} + \frac{1}{x^2} = 0 \iff \left(x^2 + \frac{1}{x^2}\right) - 5\left(x + \frac{1}{x}\right) + 8 = 0.$$

3. a. $X^2 = x^2 + 2 + \dfrac{1}{x^2}$, donc $x^2 + \dfrac{1}{x^2} = X^2 - 2$.

   b. L'équation devient $X^2 - 2 - 5X + 8 = 0$, soit $X^2 - 5X + 6 = 0$. On a $\Delta = 25 - 24 = 1$, d'où $X = 2$ ou $X = 3$.

4. On revient à $x$ (avec $x \neq 0$) :

   - $x + \dfrac{1}{x} = 2 \iff x^2 - 2x + 1 = 0 \iff (x - 1)^2 = 0 \iff x = 1$ ;
   - $x + \dfrac{1}{x} = 3 \iff x^2 - 3x + 1 = 0$. On a $\Delta = 9 - 4 = 5$, d'où $x = \dfrac{3 - \sqrt5}{2}$ ou $x = \dfrac{3 + \sqrt5}{2}$.

   Donc $S = \left\{1\,;\,\dfrac{3 - \sqrt5}{2}\,;\,\dfrac{3 + \sqrt5}{2}\right\}$.

5. Pour $x \neq 0$, on a $x^4 - 5x^3 + 8x^2 - 5x + 1 = x^2(X - 2)(X - 3)$, avec $x(X - 2) = x^2 - 2x + 1$ et $x(X - 3) = x^2 - 3x + 1$. Donc
   $$x^4 - 5x^3 + 8x^2 - 5x + 1 = (x - 1)^2(x^2 - 3x + 1).$$
   Les deux membres sont des polynômes égaux pour tout $x \neq 0$ : leur différence a une infinité de racines, elle est donc nulle. L'égalité est vraie aussi pour $x = 0$ (les deux membres valent $1$).

   *Remarque :* $1$ est une racine « double », d'où seulement trois solutions pour une équation de degré $4$.

**Partie B**

1. Comme $Q(0) = 0$, on pose $Q(x) = ax^3 + bx^2 + cx$. Alors
   $$Q(x) - Q(x - 1) = a\big(x^3 - (x - 1)^3\big) + b\big(x^2 - (x - 1)^2\big) + c = a(3x^2 - 3x + 1) + b(2x - 1) + c,$$
   c'est-à-dire $3a\,x^2 + (2b - 3a)\,x + (a - b + c)$. Par identification avec $x^2$ :
   $$3a = 1, \qquad 2b - 3a = 0, \qquad a - b + c = 0.$$
   D'où $a = \dfrac13$, $b = \dfrac12$ et $c = b - a = \dfrac16$. Donc $Q(x) = \dfrac{x^3}{3} + \dfrac{x^2}{2} + \dfrac{x}{6}$.

2. $Q(x) = \dfrac{2x^3 + 3x^2 + x}{6} = \dfrac{x(2x^2 + 3x + 1)}{6} = \dfrac{x(x + 1)(2x + 1)}{6}$, car $(x + 1)(2x + 1) = 2x^2 + 3x + 1$.

3. On écrit l'égalité $Q(k) - Q(k - 1) = k^2$ pour $k = 1, 2, \dots, n$ et on additionne :
   $$\big(Q(1) - Q(0)\big) + \big(Q(2) - Q(1)\big) + \dots + \big(Q(n) - Q(n - 1)\big) = 1^2 + 2^2 + \dots + n^2.$$
   Les termes se détruisent deux à deux (somme télescopique) : il reste $Q(n) - Q(0) = Q(n)$. Donc
   $$1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}{6}.$$

4. $1^2 + 2^2 + \dots + 20^2 = \dfrac{20 \times 21 \times 41}{6} = 2870$.
