---
uid: "0000129"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Suite homographique et somme télescopique"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["suites-reelles", "recurrence", "suite-arithmetique", "somme-telescopique", "inegalite"]
---
Soit $(u_n)$ la suite définie sur $\mathbb{N}$ par : $u_0 = 1$ et pour tout $n \in \mathbb{N}$, $u_{n+1} = \dfrac{u_n}{1 + u_n}$.

1. a. Calculer $u_1$, $u_2$ et $u_3$.

   b. Montrer par récurrence que pour tout $n \in \mathbb{N}$ : $u_n > 0$.

   c. Montrer que la suite $(u_n)$ est décroissante.

2. On pose, pour tout $n \in \mathbb{N}$ : $v_n = \dfrac{1}{u_n}$.

   a. Montrer que $(v_n)$ est une suite arithmétique dont on précisera la raison et le premier terme.

   b. En déduire $u_n$ en fonction de $n$.

3. On pose, pour tout $n \in \mathbb{N}$ : $S_n = u_0u_1 + u_1u_2 + \dots + u_nu_{n+1} = \displaystyle\sum_{k=0}^{n} u_ku_{k+1}$.

   a. Montrer que pour tout $k \in \mathbb{N}$ : $u_ku_{k+1} = u_k - u_{k+1}$.

   b. En déduire que $S_n = 1 - \dfrac{1}{n + 2}$.

4. a. Montrer par récurrence que pour tout $n \in \mathbb{N}$ : $2^n \geq n + 1$.

   b. En déduire que pour tout $n \in \mathbb{N}$ : $u_n \geq \left(\dfrac{1}{2}\right)^n$.

---

## Solution

1. a. $u_1 = \dfrac{1}{2}$, $u_2 = \dfrac{\frac{1}{2}}{\frac{3}{2}} = \dfrac{1}{3}$, $u_3 = \dfrac{\frac{1}{3}}{\frac{4}{3}} = \dfrac{1}{4}$.

   b. *Initialisation* : $u_0 = 1 > 0$. *Hérédité* : si $u_n > 0$, alors $1 + u_n > 0$ et $u_{n+1} = \dfrac{u_n}{1 + u_n} > 0$.

   c. $u_{n+1} - u_n = \dfrac{u_n - u_n(1 + u_n)}{1 + u_n} = \dfrac{-u_n^2}{1 + u_n} < 0$ : $(u_n)$ est décroissante.

2. a. $v_{n+1} = \dfrac{1 + u_n}{u_n} = \dfrac{1}{u_n} + 1 = v_n + 1$ : $(v_n)$ est arithmétique de raison $1$ et de premier terme $v_0 = 1$.

   b. $v_n = 1 + n$, donc $u_n = \dfrac{1}{n + 1}$.

3. a. $u_k - u_{k+1} = \dfrac{1}{k + 1} - \dfrac{1}{k + 2} = \dfrac{1}{(k + 1)(k + 2)} = u_ku_{k+1}$.

   b. $S_n = (u_0 - u_1) + (u_1 - u_2) + \dots + (u_n - u_{n+1}) = u_0 - u_{n+1} = 1 - \dfrac{1}{n + 2}$ (les termes intermédiaires se simplifient).

4. a. *Initialisation* : $2^0 = 1 \geq 1$.

   *Hérédité* : si $2^n \geq n + 1$, alors $2^{n+1} = 2 \cdot 2^n \geq 2n + 2 \geq n + 2$.

   b. $u_n = \dfrac{1}{n + 1} \geq \dfrac{1}{2^n} = \left(\dfrac{1}{2}\right)^n$ car $0 < n + 1 \leq 2^n$.

*Remarque : $u_n$ tend vers $0$, mais beaucoup plus lentement qu'une suite géométrique de raison $\frac{1}{2}$.*
