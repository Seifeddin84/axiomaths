---
uid: "0000134"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Polynôme à paramètres et fonction rationnelle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "parametres", "factorisation", "fonction-rationnelle", "inequation"]
---

Soit $P$ le polynôme défini par $P(x) = 2x^3 + ax^2 + bx - 6$, où $a$ et $b$ sont deux réels.

1. Déterminer $a$ et $b$ sachant que $1$ et $-3$ sont des racines de $P$.

2. On prend désormais $a = 6$ et $b = -2$.

   a. Justifier qu'il existe un polynôme $Q$ tel que, pour tout réel $x$, $P(x) = (x - 1)(x + 3)\,Q(x)$. Quel est le degré de $Q$ ?

   b. Déterminer $Q(x)$, puis résoudre l'équation $P(x) = 0$.

3. On considère la fonction rationnelle $f$ définie par $f(x) = \dfrac{P(x)}{x^2 + 2x - 3}$.

   a. Déterminer l'ensemble de définition $D$ de $f$.

   b. Montrer que, pour tout $x \in D$, $f(x) = 2x + 2$.

   c. Résoudre dans $D$ l'inéquation $f(x) \geq x^2 - 1$.

---

## Solution

1. $P(1) = 2 + a + b - 6 = a + b - 4$ et $P(-3) = -54 + 9a - 3b - 6 = 9a - 3b - 60$.

   $1$ et $-3$ sont des racines de $P$ si et seulement si $\begin{cases} a + b = 4 \\ 9a - 3b = 60 \end{cases}$, c'est-à-dire $\begin{cases} a + b = 4 \\ 3a - b = 20 \end{cases}$.

   En additionnant les deux équations : $4a = 24$, donc $a = 6$, puis $b = -2$.

2. a. $1$ et $-3$ sont deux racines distinctes de $P$, qui est de degré $3$. D'après le cours, $P$ est factorisable par $(x - 1)(x + 3)$ et $Q$ est de degré $3 - 2 = 1$.

   b. $(x - 1)(x + 3) = x^2 + 2x - 3$. On pose $Q(x) = mx + n$. Alors
   $$(x^2 + 2x - 3)(mx + n) = mx^3 + (2m + n)x^2 + (2n - 3m)x - 3n.$$
   Par identification avec $2x^3 + 6x^2 - 2x - 6$ : $m = 2$, puis $2m + n = 6$ donne $n = 2$. On vérifie : $2n - 3m = -2$ et $-3n = -6$.

   Donc $Q(x) = 2x + 2 = 2(x + 1)$ et $P(x) = 2(x - 1)(x + 3)(x + 1)$.

   Les solutions de $P(x) = 0$ sont $S = \{-3\,;\,-1\,;\,1\}$.

3. a. $x^2 + 2x - 3 = (x - 1)(x + 3)$ s'annule en $1$ et en $-3$. Donc $D = \mathbb{R} \setminus \{-3\,;\,1\}$.

   b. Pour tout $x \in D$, $(x - 1)(x + 3) \neq 0$, donc
   $$f(x) = \frac{2(x - 1)(x + 3)(x + 1)}{(x - 1)(x + 3)} = 2(x + 1) = 2x + 2.$$

   c. Pour $x \in D$ :
   $$f(x) \geq x^2 - 1 \iff 2(x + 1) - (x - 1)(x + 1) \geq 0 \iff (x + 1)(3 - x) \geq 0.$$

   | $x$ | $-\infty$ | | $-1$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $x + 1$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $3 - x$ | | $+$ | | $+$ | $0$ | $-$ | |
   | produit | | $-$ | $0$ | $+$ | $0$ | $-$ | |

   Le produit est positif ou nul sur $[-1\,;\,3]$. Mais $1 \notin D$, il faut donc l'enlever ($-3$ n'est pas dans cet intervalle) :
   $$S = [-1\,;\,1[\ \cup\ ]1\,;\,3].$$
