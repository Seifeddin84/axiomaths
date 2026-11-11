---
uid: "0000122"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Factorisation d'un polynôme de degré 3"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "racine", "factorisation", "signe", "valeur-absolue"]
---
Soit $P$ le polynôme défini par : $P(x) = 2x^3 - 3x^2 - 11x + 6$.

1. Préciser le degré et le coefficient dominant de $P$.

2. a. Calculer $P(3)$. Que peut-on en déduire ?

   b. Déterminer les réels $a$, $b$ et $c$ tels que pour tout réel $x$ : $P(x) = (x - 3)(ax^2 + bx + c)$.

3. a. Factoriser $2x^2 + 3x - 2$.

   b. En déduire une factorisation de $P(x)$ en produit de trois polynômes de degré $1$.

4. a. Résoudre dans $\mathbb{R}$ l'équation $P(x) = 0$.

   b. Dresser le tableau de signe de $P(x)$ et résoudre dans $\mathbb{R}$ l'inéquation $P(x) \leq 0$.

5. Résoudre dans $\mathbb{R}$ l'équation : $2|x|^3 - 3x^2 - 11|x| + 6 = 0$.

---

## Solution

1. $P$ est de degré $3$, de coefficient dominant $2$.

2. a. $P(3) = 54 - 27 - 33 + 6 = 0$ : $3$ est une racine de $P$, donc $P(x)$ est factorisable par $(x - 3)$.

   b. $(x - 3)(ax^2 + bx + c) = ax^3 + (b - 3a)x^2 + (c - 3b)x - 3c$. Par identification :

   $a = 2$, $b - 3a = -3$, $c - 3b = -11$, $-3c = 6$, d'où $a = 2$, $b = 3$, $c = -2$ (la troisième équation est vérifiée : $-2 - 9 = -11$).

   $P(x) = (x - 3)(2x^2 + 3x - 2)$.

3. a. $2x^2 + 3x - 2$ s'annule en $x = \dfrac{1}{2}$ ($\dfrac{1}{2} + \dfrac{3}{2} - 2 = 0$), et $2x^2 + 3x - 2 = (2x - 1)(x + 2)$.

   b. $P(x) = (x - 3)(2x - 1)(x + 2)$.

4. a. $P(x) = 0 \iff x \in \left\{-2, \dfrac{1}{2}, 3\right\}$.

   b. Tableau de signe :

   | $x$ | $-\infty$ | | $-2$ | | $\frac{1}{2}$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $x + 2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
   | $2x - 1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $x - 3$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $P(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

   $P(x) \leq 0 \iff x \in \,]-\infty, -2] \cup \left[\dfrac{1}{2}, 3\right]$.

5. Comme $x^2 = |x|^2$, l'équation s'écrit $P(|x|) = 0$, donc $|x| \in \left\{-2, \dfrac{1}{2}, 3\right\}$.

   $|x| = -2$ est impossible ; $|x| = \dfrac{1}{2}$ ou $|x| = 3$ : $S = \left\{-3, -\dfrac{1}{2}, \dfrac{1}{2}, 3\right\}$.
