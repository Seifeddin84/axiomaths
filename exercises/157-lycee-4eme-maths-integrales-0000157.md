---
uid: "0000157"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Bac 1986 principale, Problème"
title: "Réciproque, intégrale à borne tan x et série de Leibniz 1 − 1/3 + 1/5 − … = π/4"
country: "Tunisie"
year: 1986
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "fonction-reciproque", "integrale-fonction-des-bornes", "suite-d-integrales", "pi"]
bac: "1986-principale-maths"
recommended: true
---

### Partie I

Soit $f$ la fonction définie par $f(x) = \sqrt{\dfrac{x}{1 - x}}$.

1. Étudier les variations de $f$ et tracer sa courbe représentative $(C)$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

2. Montrer que $f$ admet une fonction réciproque $f^{-1}$ que l'on déterminera. Tracer la courbe $(C')$ de $f^{-1}$ dans le même repère.

3. Soit $\mathcal{A}$ l'aire du domaine limité par $(C)$ et les droites d'équations $x = 0$ et $y = 1$. Montrer que $\mathcal{A} = \displaystyle\int_0^1 \dfrac{x^2}{1 + x^2}\,dx$.

### Partie II

Soit $\varphi$ une fonction continue sur $\mathbb{R}$. On considère la fonction $F$ définie sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ par $F(x) = \displaystyle\int_0^{\tan x} \dfrac{\varphi(t)}{1 + t^2}\,dt$.

1. Montrer que $F$ est dérivable sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ et que $F'(x) = \varphi(\tan x)$.

2. Déterminer $F(x)$ dans chacun des cas suivants : a. $\varphi(t) = 1$ ; b. $\varphi(t) = t^2$.

3. En déduire $\displaystyle\int_0^1 \dfrac{1}{1 + t^2}\,dt$ et $\displaystyle\int_0^1 \dfrac{t^2}{1 + t^2}\,dt$.

### Partie III

On définit la suite $(u_n)$ par $u_0 = \displaystyle\int_0^1 \dfrac{dt}{1 + t^2}$ et, pour $n \in \mathbb{N}^*$, $u_n = \displaystyle\int_0^1 \dfrac{t^{2n}}{1 + t^2}\,dt$.

1. Montrer que : $\forall n \in \mathbb{N}$, $0 \leq u_n \leq \dfrac{1}{2n + 1}$. En déduire $\lim\limits_{n \to +\infty} u_n$.

2. Montrer que : $\forall n \in \mathbb{N}$, $u_{n+1} + u_n = \dfrac{1}{2n + 1}$. En déduire $u_2$ et $u_3$.

3. Soit $(v_n)$ la suite définie par $v_n = 1 - \dfrac13 + \dfrac15 - \dfrac17 + \cdots + \dfrac{(-1)^n}{2n + 1}$. Calculer $u_{n+1}$ en fonction de $u_0$ et $v_n$ (on distinguera les cas $n$ pair, $n$ impair). En déduire $\lim\limits_{n \to +\infty} v_n$.

---

## Solution

### Partie I

1. $f$ est définie sur $[0, 1[$ (il faut $\dfrac{x}{1 - x} \geq 0$). Pour $x \in \,]0, 1[$ : $f'(x) = \dfrac{1}{2f(x)} \cdot \dfrac{1}{(1 - x)^2} > 0$.

   $f(0) = 0$ et $\lim\limits_{x \to 0^+} \dfrac{f(x)}{x} = \lim \dfrac{1}{\sqrt{x(1 - x)}} = +\infty$ : demi-tangente verticale en $O$.

   $\lim\limits_{x \to 1^-} f(x) = +\infty$ : asymptote $x = 1$.

2. $f$ est continue et strictement croissante : bijection de $[0, 1[$ sur $[0, +\infty[$.

   $y = \sqrt{\dfrac{x}{1 - x}} \iff y^2(1 - x) = x \iff x = \dfrac{y^2}{1 + y^2}$ : $f^{-1}(x) = \dfrac{x^2}{1 + x^2}$ pour $x \geq 0$.

   $(C')$ est la symétrique de $(C)$ par rapport à $y = x$ ; elle a l'asymptote $y = 1$.

3. Le domaine est $\left\{(x, y) : 0 \leq y \leq 1,\ 0 \leq x \leq f^{-1}(y)\right\}$. Par la symétrie d'axe $y = x$, il a la même aire que le domaine sous $(C')$ entre $x = 0$ et $x = 1$ :

   $\mathcal{A} = \displaystyle\int_0^1 f^{-1}(x)\,dx = \int_0^1 \dfrac{x^2}{1 + x^2}\,dx$.

### Partie II

1. $t \mapsto \dfrac{\varphi(t)}{1 + t^2}$ est continue sur $\mathbb{R}$ ; soit $\Phi$ une primitive. $F(x) = \Phi(\tan x) - \Phi(0)$ est dérivable et

   $F'(x) = (1 + \tan^2 x)\,\dfrac{\varphi(\tan x)}{1 + \tan^2 x} = \varphi(\tan x)$.

2. a. $F'(x) = 1$ et $F(0) = 0$ : $F(x) = x$.

   b. $F'(x) = \tan^2 x = (1 + \tan^2 x) - 1$ et $F(0) = 0$ : $F(x) = \tan x - x$.

3. Avec $x = \dfrac{\pi}{4}$ ($\tan x = 1$) : $\displaystyle\int_0^1 \dfrac{dt}{1 + t^2} = \dfrac{\pi}{4}$ et $\displaystyle\int_0^1 \dfrac{t^2}{1 + t^2}\,dt = 1 - \dfrac{\pi}{4}$.

   Donc $\mathcal{A} = 1 - \dfrac{\pi}{4}$ (partie I).

### Partie III

1. Sur $[0, 1]$ : $0 \leq \dfrac{t^{2n}}{1 + t^2} \leq t^{2n}$. On intègre : $0 \leq u_n \leq \dfrac{1}{2n + 1}$, donc $\lim\limits_{n \to +\infty} u_n = 0$.

2. $u_{n+1} + u_n = \displaystyle\int_0^1 \dfrac{t^{2n}(t^2 + 1)}{1 + t^2}\,dt = \int_0^1 t^{2n}\,dt = \dfrac{1}{2n + 1}$.

   $u_0 = \dfrac{\pi}{4}$ et $u_1 = 1 - \dfrac{\pi}{4}$ (II. 3).

   $u_2 = \dfrac13 - u_1 = \dfrac{\pi}{4} - \dfrac23$.

   $u_3 = \dfrac15 - u_2 = \dfrac{13}{15} - \dfrac{\pi}{4}$.

3. On multiplie la relation de 2. au rang $k$ par $(-1)^k$ et on somme de $k = 0$ à $n$ : à gauche, les termes se télescopent.

   $\displaystyle\sum_{k=0}^{n} (-1)^k (u_{k+1} + u_k) = u_0 + (-1)^n u_{n+1}$, et à droite on obtient $v_n$.

   Donc $u_{n+1} = (-1)^n (v_n - u_0)$ : $u_{n+1} = v_n - u_0$ si $n$ est pair, $u_{n+1} = u_0 - v_n$ si $n$ est impair.

   Dans les deux cas $|v_n - u_0| = u_{n+1} \to 0$ : $\lim\limits_{n \to +\infty} v_n = u_0 = \dfrac{\pi}{4}$.

   *Remarque :* $1 - \dfrac13 + \dfrac15 - \dfrac17 + \cdots = \dfrac{\pi}{4}$ est la **série de Leibniz** (1674). Elle converge très lentement : l'erreur après $n$ termes est $u_{n+1} \leq \dfrac{1}{2n + 3}$.
