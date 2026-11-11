---
uid: "0000159"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Suites réelles"
source: "Bac 1983 principale, Ex. 2"
title: "Suite homographique et suite géométrique associée"
country: "Tunisie"
year: 1983
professor: null
difficulty: "Facile"
points: 4
tags: ["bac", "suite-recurrente", "suite-geometrique", "recurrence", "convergence"]
bac: "1983-principale-maths"
---

Soit la suite $(u_n)$ définie par $u_0 = -1$ et, pour tout $n \in \mathbb{N}$, $u_{n+1} = \dfrac{4u_n + 3}{u_n + 6}$.

1. a. Montrer que : $\forall n \in \mathbb{N}$, $-3 < u_n < 1$.

   b. Montrer que la suite $(u_n)$ est strictement croissante et qu'elle est convergente.

2. Soit la suite $(v_n)$ définie par : $\forall n \in \mathbb{N}$, $v_n = \dfrac{u_n - 1}{u_n + 3}$.

   a. Montrer que $(v_n)$ est une suite géométrique ; calculer $v_n$ en fonction de $n$.

   b. En déduire $u_n$ en fonction de $n$, puis la limite de $(u_n)$.

---

## Solution

1. a. Récurrence. $u_0 = -1 \in \,]-3, 1[$. Si $-3 < u_n < 1$, alors $u_n + 6 > 0$ et :

   $u_{n+1} - 1 = \dfrac{3(u_n - 1)}{u_n + 6} < 0$ et $u_{n+1} + 3 = \dfrac{7(u_n + 3)}{u_n + 6} > 0$.

   Donc $-3 < u_{n+1} < 1$.

   b. $u_{n+1} - u_n = \dfrac{4u_n + 3 - u_n^2 - 6u_n}{u_n + 6} = \dfrac{-(u_n - 1)(u_n + 3)}{u_n + 6} > 0$ d'après a.

   $(u_n)$ est strictement croissante et majorée par $1$ : elle converge.

2. a. D'après les calculs de 1. a : $v_{n+1} = \dfrac{u_{n+1} - 1}{u_{n+1} + 3} = \dfrac{3(u_n - 1)}{7(u_n + 3)} = \dfrac37\,v_n$.

   $(v_n)$ est géométrique de raison $\dfrac37$ et de premier terme $v_0 = \dfrac{-2}{2} = -1$ : $v_n = -\left(\dfrac37\right)^n$.

   b. $v_n(u_n + 3) = u_n - 1 \iff u_n = \dfrac{1 + 3v_n}{1 - v_n} = \dfrac{1 - 3\left(\frac37\right)^n}{1 + \left(\frac37\right)^n}$.

   $\left(\dfrac37\right)^n \to 0$ car $0 < \dfrac37 < 1$ : $\lim\limits_{n \to +\infty} u_n = 1$.

   *Remarque :* $1$ et $-3$ sont les points fixes de $x \mapsto \dfrac{4x + 3}{x + 6}$ ; c'est pourquoi $v_n$ les fait apparaître.
