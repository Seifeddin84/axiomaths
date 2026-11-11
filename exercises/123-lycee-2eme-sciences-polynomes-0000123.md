---
uid: "0000123"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Polynôme de degré 4 et polynôme réciproque"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["polynomes", "racine", "identification", "factorisation", "polynome-reciproque"]
---
Soient $a$ et $b$ deux réels et $P$ le polynôme défini par : $P(x) = x^4 + ax^3 + bx^2 - 4x + 3$.

1. Déterminer $a$ et $b$ pour que $1$ et $-1$ soient des racines de $P$.

   **Dans la suite, on prend $a = 4$ et $b = -4$.**

2. a. Montrer que $P(x)$ est factorisable par $x^2 - 1$.

   b. Montrer que pour tout réel $x$ : $P(x) = (x^2 - 1)(x^2 + 4x - 3)$.

3. Résoudre dans $\mathbb{R}$ l'équation $P(x) = 0$.

4. Soit $Q$ le polynôme défini par : $Q(x) = 3x^4 - 4x^3 - 4x^2 + 4x + 1$.

   a. Vérifier que pour tout réel $x \neq 0$ : $Q(x) = x^4\,P\!\left(\dfrac{1}{x}\right)$.

   b. Vérifier que $0$ n'est pas une racine de $Q$.

   c. En déduire que $\alpha$ est une racine de $Q$ si et seulement si $\dfrac{1}{\alpha}$ est une racine de $P$.

   d. Résoudre dans $\mathbb{R}$ l'équation $Q(x) = 0$. On donnera les solutions sans radical au dénominateur.

---

## Solution

1. $P(1) = 1 + a + b - 4 + 3 = a + b$ et $P(-1) = 1 - a + b + 4 + 3 = 8 - a + b$.

   $\begin{cases} a + b = 0 \\ -a + b = -8 \end{cases} \iff a = 4$ et $b = -4$.

2. a. $1$ et $-1$ sont des racines de $P$ : $P(x)$ est factorisable par $(x - 1)$, puis le quotient par $(x + 1)$, donc par $(x - 1)(x + 1) = x^2 - 1$.

   b. $(x^2 - 1)(x^2 + 4x - 3) = x^4 + 4x^3 - 3x^2 - x^2 - 4x + 3 = x^4 + 4x^3 - 4x^2 - 4x + 3 = P(x)$.

3. $x^2 - 1 = 0 \iff x = \pm 1$.

   $x^2 + 4x - 3 = 0$ : $\Delta = 16 + 12 = 28$, donc $x = \dfrac{-4 \pm 2\sqrt{7}}{2} = -2 \pm \sqrt{7}$.

   $S = \left\{-1, 1, -2 - \sqrt{7}, -2 + \sqrt{7}\right\}$.

4. a. $x^4 P\!\left(\dfrac{1}{x}\right) = x^4\left(\dfrac{1}{x^4} + \dfrac{4}{x^3} - \dfrac{4}{x^2} - \dfrac{4}{x} + 3\right) = 1 + 4x - 4x^2 - 4x^3 + 3x^4 = Q(x)$.

   b. $Q(0) = 1 \neq 0$.

   c. Pour $\alpha \neq 0$ : $Q(\alpha) = 0 \iff \alpha^4 P\!\left(\dfrac{1}{\alpha}\right) = 0 \iff P\!\left(\dfrac{1}{\alpha}\right) = 0$.

   d. Les racines de $Q$ sont les inverses des racines de $P$ :

   $\dfrac{1}{1} = 1$, $\dfrac{1}{-1} = -1$, $\dfrac{1}{-2 + \sqrt{7}} = \dfrac{\sqrt{7} + 2}{7 - 4} = \dfrac{2 + \sqrt{7}}{3}$, $\dfrac{1}{-2 - \sqrt{7}} = -\dfrac{\sqrt{7} - 2}{3} = \dfrac{2 - \sqrt{7}}{3}$.

   $S = \left\{-1, 1, \dfrac{2 - \sqrt{7}}{3}, \dfrac{2 + \sqrt{7}}{3}\right\}$.

*Remarque : les coefficients de $Q$ sont ceux de $P$ écrits dans l'ordre inverse. C'est pour cela que $Q$ a pour racines les inverses des racines de $P$.*
