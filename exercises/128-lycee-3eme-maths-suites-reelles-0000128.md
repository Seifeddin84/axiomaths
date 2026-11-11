---
uid: "0000128"
school: "lycee"
level: "3eme"
section: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Suites réelles"
source: "Axiomaths"
title: "Suite arithmético-géométrique et suite auxiliaire"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["suites-reelles", "recurrence", "suite-geometrique", "monotonie", "somme"]
---
Soit $(u_n)$ la suite définie sur $\mathbb{N}$ par : $u_0 = 2$ et pour tout $n \in \mathbb{N}$, $u_{n+1} = \dfrac{1}{2}u_n + 3$.

1. Calculer $u_1$, $u_2$ et $u_3$.

2. Montrer par récurrence que pour tout $n \in \mathbb{N}$ : $u_n < 6$.

3. Montrer que la suite $(u_n)$ est croissante.

4. On pose, pour tout $n \in \mathbb{N}$ : $v_n = u_n - 6$.

   a. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le premier terme.

   b. Exprimer $v_n$, puis $u_n$, en fonction de $n$.

   c. Calculer, en fonction de $n$, la somme $S_n = u_0 + u_1 + \dots + u_n$.

5. Déterminer le plus petit entier $n$ tel que $6 - u_n < 10^{-3}$.

---

## Solution

1. $u_1 = 1 + 3 = 4$, $u_2 = 2 + 3 = 5$, $u_3 = \dfrac{5}{2} + 3 = \dfrac{11}{2}$.

2. *Initialisation* : $u_0 = 2 < 6$.

   *Hérédité* : si $u_n < 6$, alors $\dfrac{1}{2}u_n < 3$, donc $u_{n+1} = \dfrac{1}{2}u_n + 3 < 6$.

   *Conclusion* : pour tout $n \in \mathbb{N}$, $u_n < 6$.

3. $u_{n+1} - u_n = 3 - \dfrac{1}{2}u_n = \dfrac{6 - u_n}{2} > 0$ d'après 2. : $(u_n)$ est croissante.

4. a. $v_{n+1} = u_{n+1} - 6 = \dfrac{1}{2}u_n - 3 = \dfrac{1}{2}(u_n - 6) = \dfrac{1}{2}v_n$.

   $(v_n)$ est géométrique de raison $q = \dfrac{1}{2}$ et de premier terme $v_0 = 2 - 6 = -4$.

   b. $v_n = -4\left(\dfrac{1}{2}\right)^n$, donc $u_n = 6 - 4\left(\dfrac{1}{2}\right)^n$.

   c. $S_n = \displaystyle\sum_{k=0}^{n}\left(6 - 4\left(\dfrac{1}{2}\right)^k\right) = 6(n + 1) - 4 \cdot \dfrac{1 - \left(\frac{1}{2}\right)^{n+1}}{1 - \frac{1}{2}} = 6(n + 1) - 8 + 8\left(\dfrac{1}{2}\right)^{n+1}$.

   Soit $S_n = 6n - 2 + 4\left(\dfrac{1}{2}\right)^n$ (vérification : $S_0 = -2 + 4 = 2 = u_0$).

5. $6 - u_n = 4\left(\dfrac{1}{2}\right)^n < 10^{-3} \iff 2^n > 4000$.

   Or $2^{11} = 2048$ et $2^{12} = 4096$ : le plus petit entier est $n = 12$.
