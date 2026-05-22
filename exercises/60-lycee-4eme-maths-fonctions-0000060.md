---
uid: "0000060"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Etude de Fonctions"
source: "Devoir de Synthèse N°2 - L.P.A"
title: "Étude de fonctions et suites intégrales"
country: "Tunisie"
year: 2025
professor: null
difficulty: "Difficile"
points: 7
tags: ["etude-de-fonctions", "integration-par-parties", "suites", "bijection"]
---


**A)** Pour $n \in \mathbb{N}^*$, on considère la fonction $f_n$ définie sur $\mathbb{R}$ par : $f_n(x) = x e^{-\frac{n}{x}}$, si $x \neq 0$ et $f_n(0) = 0$.
On note $(\mathscr{C}_n)$ la représentation graphique de $f_n$ dans le repère orthonormé $(O, \vec{i}, \vec{j})$.

1. Montrer que $f_n$ est continue et dérivable à droite en $O$.

2. Montrer que $f_n$ est dérivable sur $\mathbb{R}^*$ et calculer $f_n'(x)$ pour $x \in \mathbb{R}^*$.

3. Calculer $\lim_{x \to +\infty} f_n(x)$, $\lim_{x \to -\infty} f_n(x)$ et $\lim_{x \to 0^-} f_n(x)$ puis dresser le tableau de variation de $f_n$.

4. Montrer que la droite $D_n : y = x - n$ est une asymptote à $(\mathscr{C}_n)$.

5. Construire $(\mathscr{C}_1)$ et $(\mathscr{C}_2)$.

6. Pour $x > 0$, on pose $F_1(x) = \int_1^x f_1(t) dt$.

   a. A l'aide d'une intégration par parties montrer que : $F_1(x) = \dfrac{1}{2} x^2 e^{-\frac{1}{x}} - \dfrac{1}{2e} - \dfrac{1}{2} \int_1^x e^{-\frac{1}{t}} dt$.

   b. En déduire que pour $x \ge 1$ on a : $F_1(x) \ge \dfrac{1}{2} e^{-\frac{1}{x}}(x^2 - x + 1) - \dfrac{1}{2e}$.

**B)** 1. Montrer qu'il existe un réel unique $a_n$ tel que : $f_n(a_n) = 1$.

2. Vérifier que pour tout $n \in \mathbb{N}^* : a_n > 1$ et que $a_n \ln(a_n) = n$.

3. Soit $g$ la fonction définie sur $[1, +\infty[$ par : $g(x) = x \ln x$.

   a. Montrer que $g$ est une bijection de $[1, +\infty[$ sur un intervalle $J$ que l'on précisera.

   b. En déduire que $\lim_{n \to +\infty} a_n = +\infty$.

   c. Montrer que la suite $(a_n)_{n \in \mathbb{N}^*}$ est strictement croissante.

   d. Vérifier que pour tout $n \in \mathbb{N}^* : \ln(a_n) + \ln(\ln(a_n)) = \ln(n)$. En déduire que $\lim_{n \to +\infty} \dfrac{\ln(a_n)}{\ln(n)} = 1$.

   e. Montrer que $f_n(a_{n+1}) = e^{\frac{1}{a_{n+1}}}$.

**C)** Pour $n \in \mathbb{N}^*$, on pose $I_n = \int_{a_n}^{a_{n+1}} f_n(t) dt$, $J_n$ la valeur moyenne de $f_n$ sur $[a_n, a_{n+1}]$ et $S_n = \sum_{k=1}^n I_k$.

1. Montrer que pour tout $n \in \mathbb{N}^* : 1 \le J_n \le e^{\frac{1}{a_{n+1}}}$.

2. En déduire $\lim_{n \to +\infty} J_n$ et $\lim_{n \to +\infty} S_n$.

3. Pour $x > 0$, on pose $F_n(x) = \int_n^x f_n(t) dt$ où $n \in \mathbb{N}^*$.

   a. Montrer que $F_n$ est dérivable sur $]0, +\infty[$ et que $F_n'(x) = n f_1\left(\dfrac{x}{n}\right)$.

   b. En déduire que pour tout $x > 0 : F_n(x) = n^2 F_1\left(\dfrac{x}{n}\right) - n^2 F_1(1)$.

   c. Calculer $\lim_{x \to +\infty} F_n(x)$.

---
## Solution

Pas de solution encore.