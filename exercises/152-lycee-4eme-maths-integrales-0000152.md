---
uid: "0000152"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Bac 1989 contrôle, Problème"
title: "La fonction e⁻ˣ/x : suite d'intégrales, dérivées successives et équation différentielle"
country: "Tunisie"
year: 1989
professor: null
difficulty: "Difficile"
points: null
tags: ["bac", "fonction-exponentielle", "suite-d-integrales", "derivees-successives", "recurrence", "equation-differentielle"]
bac: "1989-controle-maths"
---

Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ par $f(x) = \dfrac{e^{-x}}{x}$.

### Partie A

1. Étudier les variations de $f$ et construire sa courbe représentative $(C)$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

2. Soit $(u_n)$ la suite définie sur $\mathbb{N}^*$ par $u_n = n\displaystyle\int_n^{n+1} f(x)\,dx$.

   a. Montrer que si $x \in [n, n + 1]$, alors $\dfrac{e^{-x}}{n + 1} \leq f(x) \leq \dfrac{e^{-x}}{n}$.

   b. En déduire que $\dfrac12(e - 1)\,e^{-(n+1)} \leq u_n \leq (e - 1)\,e^{-(n+1)}$.

   c. Trouver $\lim\limits_{n \to +\infty} u_n$.

3. Soit $(v_n)$ la suite définie sur $\mathbb{N}^*$ par $v_n = u_1 + u_2 + \cdots + u_n$.

   a. Montrer que $(v_n)$ est croissante et qu'elle vérifie $v_n \leq \dfrac1e\left(1 - e^{-n}\right)$.

   b. En déduire que $(v_n)$ est convergente.

   c. On pose $\ell = \lim\limits_{n \to +\infty} v_n$. Prouver que $\dfrac{1}{2e} \leq \ell \leq \dfrac1e$.

### Partie B

On désigne par $f^{(n)}$ la dérivée d'ordre $n$ de $f$ sur $\mathbb{R}^*$, avec $f^{(0)} = f$.

1. Vérifier que, pour tout $x \in \mathbb{R}^*$ : $f(x) = \dfrac{e^{-x}P_0(x)}{x}$, $f'(x) = \dfrac{e^{-x}P_1(x)}{x^2}$ et $f''(x) = \dfrac{e^{-x}P_2(x)}{x^3}$, où $P_0$, $P_1$, $P_2$ sont des polynômes que l'on déterminera.

   Dans la suite, on admet que pour tout $n \in \mathbb{N}$, $f$ est $n$ fois dérivable sur $\mathbb{R}^*$ et $f^{(n)}(x) = \dfrac{e^{-x}P_n(x)}{x^{n+1}}$, où $P_n$ est un polynôme.

2. Soient $a$, $b$ deux réels et $\Phi$ une fonction $n$ fois dérivable sur $\mathbb{R}^*$. On pose $\psi(x) = (ax + b)\,\Phi(x)$. Établir par récurrence que, pour $n \geq 1$ : $\psi^{(n)}(x) = (ax + b)\,\Phi^{(n)}(x) + n\,a\,\Phi^{(n-1)}(x)$.

3. a. En prenant $\Phi = f$, $a = 1$ et $b = 0$, prouver que $P_n(x) + n\,P_{n-1}(x) = (-1)^n x^n$ pour tout $n \geq 1$ et tout $x$ réel.

   b. En déduire que $P_n(0) = (-1)^n\,n!$ pour tout $n \in \mathbb{N}$.

4. On définit le polynôme $Q_n$ par $P_n(x) = (-1)^n\,n!\,Q_n(x)$.

   a. Montrer que $Q_n(x) - Q_{n-1}(x) = \dfrac{x^n}{n!}$ pour tout $n \geq 1$.

   b. En déduire les expressions de $Q_n(x)$ et de $P_n(x)$.

5. a. Calculer $P'_n(x) - P_n(x)$.

   b. Résoudre l'équation différentielle $y' - y = (-1)^{n+1}x^n$.

---

## Solution

### Partie A

1. $f'(x) = \dfrac{-x e^{-x} - e^{-x}}{x^2} = -\dfrac{(x + 1)e^{-x}}{x^2}$ : $f$ croît sur $]-\infty, -1]$, décroît sur $[-1, 0[$ et sur $]0, +\infty[$. $f(-1) = -e$.

   $\lim\limits_{-\infty} f = -\infty$ avec $\dfrac{f(x)}{x} \to +\infty$ (branche parabolique de direction $(O\vec{j})$) ; $\lim\limits_{0^-} f = -\infty$, $\lim\limits_{0^+} f = +\infty$ (asymptote $x = 0$) ; $\lim\limits_{+\infty} f = 0$ (asymptote $y = 0$).

2. a. Pour $x \in [n, n + 1]$ : $\dfrac{1}{n + 1} \leq \dfrac1x \leq \dfrac1n$ ; on multiplie par $e^{-x} > 0$.

   b. On intègre sur $[n, n + 1]$ : $\displaystyle\int_n^{n+1} e^{-x}\,dx = e^{-n} - e^{-n-1} = (e - 1)e^{-(n+1)}$, puis on multiplie par $n$ :

   $\dfrac{n}{n + 1}(e - 1)e^{-(n+1)} \leq u_n \leq (e - 1)e^{-(n+1)}$, et $\dfrac{n}{n + 1} \geq \dfrac12$ pour $n \geq 1$.

   c. $(e - 1)e^{-(n+1)} \to 0$ : par encadrement, $\lim\limits_{n \to +\infty} u_n = 0$.

3. a. $v_{n+1} - v_n = u_{n+1} > 0$ : $(v_n)$ est croissante.

   $v_n \leq (e - 1)\displaystyle\sum_{k=1}^{n} e^{-(k+1)} = (e - 1)\,e^{-2}\,\dfrac{1 - e^{-n}}{1 - e^{-1}} = \dfrac1e\left(1 - e^{-n}\right)$.

   b. $(v_n)$ est croissante et majorée par $\dfrac1e$ : elle converge.

   c. De même $v_n \geq \dfrac{1}{2e}\left(1 - e^{-n}\right)$. Par passage à la limite : $\dfrac{1}{2e} \leq \ell \leq \dfrac1e$ ($\ell \approx 0{,}287$).

### Partie B

1. $P_0(x) = 1$, $P_1(x) = -x - 1$ (d'après A. 1), et en dérivant $f'$ : $f''(x) = \dfrac{e^{-x}(x^2 + 2x + 2)}{x^3}$, soit $P_2(x) = x^2 + 2x + 2$.

2. Pour $n = 1$ : $\psi' = a\Phi + (ax + b)\Phi'$ : vrai.

   Si c'est vrai au rang $n$, on dérive : $\psi^{(n+1)} = a\Phi^{(n)} + (ax + b)\Phi^{(n+1)} + n\,a\,\Phi^{(n)} = (ax + b)\Phi^{(n+1)} + (n + 1)\,a\,\Phi^{(n)}$.

3. a. $\psi(x) = x f(x) = e^{-x}$, donc $\psi^{(n)}(x) = (-1)^n e^{-x}$. La formule donne $(-1)^n e^{-x} = x f^{(n)}(x) + n f^{(n-1)}(x) = \dfrac{e^{-x}}{x^n}\left(P_n(x) + n P_{n-1}(x)\right)$.

   D'où $P_n(x) + nP_{n-1}(x) = (-1)^n x^n$ pour $x \neq 0$, et donc pour tout $x$ (deux polynômes égaux en une infinité de points).

   b. En $x = 0$ : $P_n(0) = -n\,P_{n-1}(0)$, avec $P_0(0) = 1$. Par récurrence, $P_n(0) = (-1)^n n!$.

4. a. $(-1)^n n!\,Q_n + n(-1)^{n-1}(n - 1)!\,Q_{n-1} = (-1)^n x^n$, et en divisant par $(-1)^n n!$ : $Q_n - Q_{n-1} = \dfrac{x^n}{n!}$.

   b. $Q_0 = P_0 = 1$ : $Q_n(x) = \displaystyle\sum_{k=0}^{n} \dfrac{x^k}{k!} = 1 + x + \dfrac{x^2}{2!} + \cdots + \dfrac{x^n}{n!}$ et $P_n(x) = (-1)^n n!\,Q_n(x)$.

5. a. $Q'_n = Q_{n-1}$, donc $P'_n - P_n = (-1)^n n!\left(Q_{n-1} - Q_n\right) = (-1)^n n! \cdot \left(-\dfrac{x^n}{n!}\right) = (-1)^{n+1}x^n$.

   b. $P_n$ est une solution particulière. Les solutions de $y' - y = 0$ sont $x \mapsto Ce^x$.

   Les solutions sont les fonctions $x \mapsto P_n(x) + Ce^x$, $C \in \mathbb{R}$.

   *Remarque :* $Q_n(x)$ est la somme des premiers termes du développement de $e^x$ : on retrouve ce polynôme dans l'étude de $e$ comme limite de $\sum \frac{1}{k!}$.
