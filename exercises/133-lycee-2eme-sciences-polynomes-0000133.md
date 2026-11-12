---
uid: "0000133"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Racine apparente, factorisation et signe d'un polynôme de degré 3"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["polynomes", "racine-apparente", "factorisation", "tableau-de-signes", "inequation"]
---

Soit $P$ le polynôme défini par $P(x) = x^3 - 2x^2 - 5x + 6$.

1. a. Quel est le degré de $P$ ? Quel est son terme constant ?

   b. Calculer $P(1)$. Que peut-on en déduire ?

2. a. Déterminer les réels $a$, $b$ et $c$ tels que, pour tout réel $x$, $P(x) = (x - 1)(ax^2 + bx + c)$.

   b. En déduire une factorisation de $P(x)$ en produit de trois facteurs du premier degré.

3. Résoudre dans $\mathbb{R}$ l'équation $P(x) = 0$.

4. a. Dresser le tableau de signes de $P(x)$.

   b. En déduire l'ensemble des solutions de l'inéquation $P(x) \geq 0$.

---

## Solution

1. a. $P$ est de degré $3$ et son terme constant est $6$.

   b. $P(1) = 1 - 2 - 5 + 6 = 0$. Donc $1$ est une racine de $P$, et $P$ est factorisable par $x - 1$.

2. a. On développe : $(x - 1)(ax^2 + bx + c) = ax^3 + (b - a)x^2 + (c - b)x - c$. Par identification avec $x^3 - 2x^2 - 5x + 6$ :

   - coefficient de $x^3$ : $a = 1$ ;
   - coefficient de $x^2$ : $b - a = -2$, donc $b = -1$ ;
   - coefficient de $x$ : $c - b = -5$, donc $c = -6$ ;
   - terme constant : $-c = 6$, ce qui est bien vérifié.

   Donc $P(x) = (x - 1)(x^2 - x - 6)$.

   b. Pour $x^2 - x - 6$ : $\Delta = 1 + 24 = 25$, d'où les racines $\dfrac{1 - 5}{2} = -2$ et $\dfrac{1 + 5}{2} = 3$. Ainsi $x^2 - x - 6 = (x + 2)(x - 3)$ et
   $$P(x) = (x - 1)(x + 2)(x - 3).$$

3. Un produit est nul si et seulement si l'un de ses facteurs est nul : $S = \{-2\,;\,1\,;\,3\}$.

4. a. Tableau de signes :

   | $x$ | $-\infty$ | | $-2$ | | $1$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $x + 2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
   | $x - 1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $x - 3$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $P(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

   b. $P(x) \geq 0$ sur $S = [-2\,;\,1] \cup [3\,;\,+\infty[$. Les crochets sont fermés en $-2$, $1$ et $3$ car $P$ s'y annule.
