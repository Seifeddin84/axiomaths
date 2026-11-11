---
uid: "0000155"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Suites réelles"
source: "Bac 1988 principale, Problème"
title: "La somme 1/e + 2/e² + … + n/eⁿ : encadrement par des intégrales et calcul exact"
country: "Tunisie"
year: 1988
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "somme-et-integrale", "fonction-exponentielle", "suite-geometrique", "integrale-fonction-des-bornes"]
bac: "1988-principale-maths"
---

### Partie I

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = x\,e^{-x}$.

1. Étudier les variations de $f$ et tracer sa courbe représentative $\mathcal{C}$ dans un repère orthonormé.

2. Soit $E$ l'ensemble des points $M(x, y)$ tels que $1 \leq x \leq n$ et $0 \leq y \leq f(x)$, avec $n \in \mathbb{N}^*$. On désigne par $\mathcal{A}_n$ l'aire de $E$. Calculer $\mathcal{A}_n$ et $\lim\limits_{n \to +\infty} \mathcal{A}_n$.

### Partie II

Soit $(u_n)$ la suite définie sur $\mathbb{N}^*$ par $u_n = \dfrac1e + \dfrac{2}{e^2} + \cdots + \dfrac{n}{e^n} = \displaystyle\sum_{k=1}^{n} f(k)$.

1. Montrer que la suite $(u_n)$ est croissante.

2. Soit $k$ un entier supérieur ou égal à $2$.

   a. Montrer que pour tout réel $x$ de $[k - 1, k]$ : $f(k) \leq f(x) \leq f(k - 1)$.

   b. En déduire que $f(k) \leq \displaystyle\int_{k-1}^{k} f(x)\,dx \leq f(k - 1)$.

3. Prouver que : $\dfrac{n}{e^n} + \displaystyle\int_1^n f(x)\,dx \leq u_n \leq \dfrac1e + \int_1^n f(x)\,dx$.

4. En déduire que $(u_n)$ est majorée et convergente. Donner un encadrement de sa limite.

### Partie III

Soit $n \in \mathbb{N}^*$. Pour tout entier $p$ tel que $1 \leq p \leq n$, on pose $v_p = \dfrac{1}{e^p} + \dfrac{1}{e^{p+1}} + \cdots + \dfrac{1}{e^n}$.

1. Montrer que $v_1 + v_2 + \cdots + v_n = u_n$.

2. Prouver que $v_p = \dfrac{1}{e - 1}\left(\dfrac{1}{e^{p-1}} - \dfrac{1}{e^n}\right)$.

3. En déduire l'expression de $u_n$ en fonction de $n$ et calculer $\lim\limits_{n \to +\infty} u_n$.

### Partie IV

Soit $F$ la fonction définie sur $[1, +\infty[$ par $F(x) = \displaystyle\int_{\ln x}^{2\ln x} \big(f(t)\big)^2\,dt = \int_{\ln x}^{2\ln x} t^2 e^{-2t}\,dt$. On se propose d'étudier $F$ sans calculer son expression en fonction de $x$.

1. a. Soit $G$ une primitive de $t \mapsto \big(f(t)\big)^2$ sur $[0, +\infty[$. Exprimer $F(x)$ à l'aide de $G$.

   b. En déduire que $F$ est dérivable sur $[1, +\infty[$ et que $F'(x) = \dfrac{(\ln x)^2}{x^5}\left(8 - x^2\right)$.

2. a. Montrer que pour tout $x \geq 1$ et tout $t \in [\ln x, 2\ln x]$ : $\dfrac{t^2}{x^4} \leq \big(f(t)\big)^2 \leq \dfrac{t^2}{x^2}$.

   b. Montrer que pour tout $x \geq 1$ : $\dfrac{7(\ln x)^3}{3x^4} \leq F(x) \leq \dfrac{7(\ln x)^3}{3x^2}$.

   c. En déduire $\lim\limits_{x \to +\infty} F(x)$.

3. Étudier les variations de $F$ et donner l'allure de sa courbe $\Gamma$. On précisera la tangente à $\Gamma$ au point d'abscisse $1$. (On donne $F(2\sqrt2) \approx 0{,}11$.)

---

## Solution

### Partie I

1. $f'(x) = (1 - x)e^{-x}$ : $f$ croît sur $]-\infty, 1]$, décroît sur $[1, +\infty[$, maximum $f(1) = \dfrac1e$.

   $\lim\limits_{-\infty} f = -\infty$ (branche parabolique de direction $(O\vec{j})$) ; $\lim\limits_{+\infty} f = 0$ (asymptote $y = 0$).

2. $f \geq 0$ sur $[1, n]$. Par parties ($u = x$, $v' = e^{-x}$) : une primitive de $f$ est $-(x + 1)e^{-x}$.

   $\mathcal{A}_n = \Big[-(x + 1)e^{-x}\Big]_1^n = \dfrac2e - (n + 1)e^{-n}$, et $\lim\limits_{n \to +\infty} \mathcal{A}_n = \dfrac2e$.

### Partie II

1. $u_{n+1} - u_n = f(n + 1) > 0$.

2. a. $f$ est décroissante sur $[1, +\infty[$, et $[k - 1, k] \subset [1, +\infty[$ pour $k \geq 2$.

   b. On intègre sur un intervalle de longueur $1$.

3. On somme 2. b. pour $k = 2, \dots, n$ (Chasles) : $\displaystyle\sum_{k=2}^{n} f(k) \leq \int_1^n f(x)\,dx \leq \sum_{k=1}^{n-1} f(k)$,

   soit $u_n - \dfrac1e \leq \displaystyle\int_1^n f \leq u_n - \dfrac{n}{e^n}$, ce qui est l'encadrement demandé.

4. $\displaystyle\int_1^n f = \mathcal{A}_n \leq \dfrac2e$, donc $u_n \leq \dfrac3e$ : $(u_n)$ est croissante et majorée, elle converge vers $L$.

   Par passage à la limite ($\dfrac{n}{e^n} \to 0$, $\mathcal{A}_n \to \dfrac2e$) : $\dfrac2e \leq L \leq \dfrac3e$.

### Partie III

1. Dans $v_1 + \cdots + v_n$, le terme $\dfrac{1}{e^k}$ apparaît dans $v_1, \dots, v_k$, donc $k$ fois : la somme vaut $\displaystyle\sum_{k=1}^n \dfrac{k}{e^k} = u_n$.

2. Somme géométrique de raison $\dfrac1e$ : $v_p = \dfrac{1}{e^p} \cdot \dfrac{1 - e^{-(n-p+1)}}{1 - \frac1e} = \dfrac{1}{e - 1}\left(\dfrac{1}{e^{p-1}} - \dfrac{1}{e^n}\right)$.

3. $u_n = \dfrac{1}{e - 1}\left(\displaystyle\sum_{p=1}^n \dfrac{1}{e^{p-1}} - \dfrac{n}{e^n}\right) = \dfrac{1}{e - 1}\left(\dfrac{e\left(1 - e^{-n}\right)}{e - 1} - \dfrac{n}{e^n}\right)$.

   $\lim\limits_{n \to +\infty} u_n = \dfrac{e}{(e - 1)^2} \approx 0{,}921$, bien dans l'encadrement $\left[\dfrac2e, \dfrac3e\right] \approx [0{,}736 ;\ 1{,}104]$ de II. 4.

### Partie IV

1. a. $F(x) = G(2\ln x) - G(\ln x)$.

   b. $G' = f^2$ et $\ln$ est dérivable sur $[1, +\infty[$ : $F'(x) = \dfrac2x\,f^2(2\ln x) - \dfrac1x\,f^2(\ln x)$.

   $f^2(2\ln x) = 4(\ln x)^2 e^{-4\ln x} = \dfrac{4(\ln x)^2}{x^4}$ et $f^2(\ln x) = \dfrac{(\ln x)^2}{x^2}$, d'où $F'(x) = \dfrac{8(\ln x)^2}{x^5} - \dfrac{(\ln x)^2}{x^3} = \dfrac{(\ln x)^2}{x^5}\left(8 - x^2\right)$.

2. a. Pour $t \in [\ln x, 2\ln x]$ : $e^{-4\ln x} \leq e^{-2t} \leq e^{-2\ln x}$, soit $\dfrac{1}{x^4} \leq e^{-2t} \leq \dfrac{1}{x^2}$ ; on multiplie par $t^2 \geq 0$.

   b. On intègre ($\ln x \leq 2\ln x$ car $x \geq 1$) : $\displaystyle\int_{\ln x}^{2\ln x} t^2\,dt = \dfrac{8 - 1}{3}(\ln x)^3 = \dfrac{7(\ln x)^3}{3}$.

   c. $\dfrac{(\ln x)^3}{x^2} \to 0$ en $+\infty$ (croissances comparées) : $\lim\limits_{x \to +\infty} F(x) = 0$.

3. $F' \geq 0$ sur $\left[1, 2\sqrt2\right]$ et $F' \leq 0$ sur $\left[2\sqrt2, +\infty\right[$ : maximum $F(2\sqrt2) \approx 0{,}11$.

   $F(1) = 0$ et $F'(1) = 0$ : $\Gamma$ a une tangente horizontale en $(1, 0)$. Asymptote $y = 0$ en $+\infty$.
