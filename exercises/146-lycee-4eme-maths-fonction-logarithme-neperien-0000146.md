---
uid: "0000146"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Bac 1990 contrôle, Problème"
title: "Les fonctions ln(1 + nx) : point fixe, réciproque, aire et équivalent"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "logarithme", "fonction-reciproque", "aire", "suite-recurrente", "point-fixe"]
bac: "1990-controle-maths"
---

Soit $P$ le plan rapporté à un repère orthonormé $(O, \vec{i}, \vec{j})$ et $\Delta$ la droite d'équation $y = x$.

### Partie A

Soit $f$ la fonction définie par $f(x) = \ln(1 + 2x)$ et $\mathcal{C}$ sa courbe représentative.

1. Étudier les variations de $f$.

2. On désigne par $\varphi$ la fonction définie par $\varphi(x) = f(x) - x$.

   a. Montrer que l'équation $\varphi(x) = 0$ admet deux solutions $0$ et $\alpha$, avec $1 < \alpha < 2$.

   b. Déterminer les positions relatives de $\mathcal{C}$ et $\Delta$.

   c. Tracer $\mathcal{C}$ et $\Delta$.

3. a. Montrer que $f$ admet une fonction réciproque $f^{-1}$ dont on tracera la courbe $\mathcal{C}'$ dans le même repère.

   b. Calculer $f^{-1}(x)$ pour tout réel $x$.

   c. Calculer, en fonction de $\alpha$, l'aire du domaine limité par les courbes $\mathcal{C}$, $\mathcal{C}'$ et les droites d'équations $x = 0$ et $x = \alpha$.

4. On définit la suite $(U_n)$ par $U_0 = 1$ et $U_{n+1} = f(U_n)$ pour $n \in \mathbb{N}$.

   a. Montrer que : $\forall n \in \mathbb{N}$, $1 \leq U_n < \alpha$.

   b. Montrer que $(U_n)$ est strictement croissante.

   c. En déduire que $(U_n)$ est convergente et trouver sa limite.

### Partie B

Dans cette partie, $n$ est un entier naturel tel que $n \geq 2$. On note $f_n(x) = \ln(1 + nx)$.

1. Montrer que : $\forall x \in \,]1, +\infty[$, $1 - \dfrac1x < \ln x < \dfrac12\left(x - \dfrac1x\right)$.

2. Montrer que l'équation $f_n(x) - x = 0$ admet deux solutions (on notera $\alpha_n$ la solution non nulle).

3. a. Montrer que : $\ln n < \alpha_n < 2\ln n$.

   b. En déduire que : $\ln n < \alpha_n < \ln(1 + 2n\ln n)$.

   c. Calculer $\lim\limits_{n \to +\infty} \dfrac{\alpha_n}{\ln n}$.

*La question B. 4 du sujet d'origine (une affinité orthogonale transformant $\mathcal{C}_2$ en $\mathcal{C}_n$) n'est plus au programme ; elle figure sur la [page du sujet](/bac/1990-controle-maths).*

---

## Solution

### Partie A

1. $f$ est définie et dérivable sur $\left]-\frac12, +\infty\right[$, $f'(x) = \dfrac{2}{1 + 2x} > 0$ : $f$ est strictement croissante.

   $\lim\limits_{x \to -\frac12^+} f(x) = -\infty$ (asymptote $x = -\frac12$) et $\lim\limits_{x \to +\infty} f(x) = +\infty$.

2. a. $\varphi'(x) = \dfrac{2}{1 + 2x} - 1 = \dfrac{1 - 2x}{1 + 2x}$ : $\varphi$ croît sur $\left]-\frac12, \frac12\right]$ et décroît sur $\left[\frac12, +\infty\right[$.

   $\varphi(0) = 0$, $\varphi\left(\frac12\right) = \ln 2 - \frac12 > 0$, $\lim\limits_{-\frac12^+} \varphi = -\infty$ et $\lim\limits_{+\infty} \varphi = -\infty$ (car $\dfrac{\ln(1 + 2x)}{x} \to 0$).

   Sur $\left]-\frac12, \frac12\right]$, $\varphi$ est une bijection strictement croissante : $0$ est la seule solution.

   Sur $\left[\frac12, +\infty\right[$, $\varphi$ est une bijection strictement décroissante sur $\left]-\infty, \ln 2 - \frac12\right]$ : une seule solution $\alpha$.

   $\varphi(1) = \ln 3 - 1 > 0$ et $\varphi(2) = \ln 5 - 2 < 0$, donc $1 < \alpha < 2$ ($\alpha \approx 1{,}256$).

   b. $\mathcal{C}$ est au-dessus de $\Delta$ sur $]0, \alpha[$, au-dessous sur $\left]-\frac12, 0\right[$ et sur $]\alpha, +\infty[$ ; elles se coupent en $O$ et en $A(\alpha, \alpha)$.

3. a. $f$ est continue et strictement croissante sur $\left]-\frac12, +\infty\right[$ : c'est une bijection sur $\mathbb{R}$. $\mathcal{C}'$ est la symétrique de $\mathcal{C}$ par rapport à $\Delta$.

   b. $y = \ln(1 + 2x) \iff 1 + 2x = e^y \iff x = \dfrac{e^y - 1}{2}$ : $f^{-1}(x) = \dfrac{e^x - 1}{2}$ pour tout réel $x$.

   c. Sur $[0, \alpha]$, $f(x) \geq x$, donc (en appliquant $f^{-1}$, croissante) $x \geq f^{-1}(x)$ : $\mathcal{C}$ est au-dessus de $\mathcal{C}'$.

   $\mathcal{A} = \displaystyle\int_0^\alpha \ln(1 + 2x)\,dx - \int_0^\alpha \dfrac{e^x - 1}{2}\,dx$.

   Une primitive de $\ln(1 + 2x)$ est $\dfrac{(1 + 2x)\ln(1 + 2x)}{2} - x$. Avec $\ln(1 + 2\alpha) = \alpha$ et $e^\alpha = 1 + 2\alpha$ :

   $\displaystyle\int_0^\alpha \ln(1 + 2x)\,dx = \dfrac{(1 + 2\alpha)\alpha}{2} - \alpha = \alpha^2 - \dfrac{\alpha}{2}$ et $\displaystyle\int_0^\alpha \dfrac{e^x - 1}{2}\,dx = \dfrac{e^\alpha - 1 - \alpha}{2} = \dfrac{\alpha}{2}$.

   $\mathcal{A} = \alpha^2 - \alpha$ unités d'aire ($\approx 0{,}322$).

4. a. Récurrence : $U_0 = 1$ convient. Si $1 \leq U_n < \alpha$, $f$ étant croissante, $f(1) \leq U_{n+1} < f(\alpha) = \alpha$, et $f(1) = \ln 3 > 1$.

   b. $U_{n+1} - U_n = \varphi(U_n) > 0$ car $U_n \in [1, \alpha[ \subset \,]0, \alpha[$.

   c. $(U_n)$ est croissante et majorée par $\alpha$ : elle converge vers $\ell \in [1, \alpha]$. $f$ étant continue, $f(\ell) = \ell$, donc $\ell \in \{0, \alpha\}$ : $\ell = \alpha$.

### Partie B

1. $h_1(x) = \ln x - 1 + \dfrac1x$ : $h_1'(x) = \dfrac{x - 1}{x^2} > 0$ sur $]1, +\infty[$ et $h_1(1) = 0$, donc $h_1(x) > 0$.

   $h_2(x) = \dfrac12\left(x - \dfrac1x\right) - \ln x$ : $h_2'(x) = \dfrac{(x - 1)^2}{2x^2} > 0$ sur $]1, +\infty[$ et $h_2(1) = 0$, donc $h_2(x) > 0$.

2. $\psi(x) = \ln(1 + nx) - x$ sur $\left]-\frac1n, +\infty\right[$ : $\psi'(x) = \dfrac{n - 1 - nx}{1 + nx}$, nul en $x_0 = \dfrac{n - 1}{n} > 0$.

   $\psi$ croît strictement sur $\left]-\frac1n, x_0\right]$, décroît strictement ensuite, $\psi(0) = 0$ et $\lim\limits_{+\infty} \psi = -\infty$.

   Comme en A. 2, $0$ est l'unique solution sur $\left]-\frac1n, x_0\right]$, et il y a une unique solution $\alpha_n > x_0$ sur $[x_0, +\infty[$.

   De plus $\psi(x) > 0 \iff 0 < x < \alpha_n$ pour $x > 0$.

3. a. $\psi(\ln n) = \ln\left(\dfrac1n + \ln n\right)$, et $\dfrac1n + \ln n > 1$ (pour $n = 2$ : $0{,}5 + 0{,}69 > 1$ ; pour $n \geq 3$, $\ln n > 1$). Donc $\psi(\ln n) > 0$ et $\ln n < \alpha_n$.

   $\psi(2\ln n) = \ln\dfrac{1 + 2n\ln n}{n^2}$. D'après 1. avec $x = n > 1$ : $2n\ln n < n^2 - 1$, donc $\psi(2\ln n) < 0$ et $\alpha_n < 2\ln n$.

   b. $\alpha_n = f_n(\alpha_n) = \ln(1 + n\alpha_n) < \ln(1 + 2n\ln n)$, car $\ln$ est croissante et $\alpha_n < 2\ln n$.

   c. $\dfrac{\ln(1 + 2n\ln n)}{\ln n} = \dfrac{\ln n + \ln\left(2\ln n + \frac1n\right)}{\ln n} = 1 + \dfrac{\ln\left(2\ln n + \frac1n\right)}{\ln n} \to 1$ (car $\dfrac{\ln(\ln n)}{\ln n} \to 0$).

   Par encadrement : $\lim\limits_{n \to +\infty} \dfrac{\alpha_n}{\ln n} = 1$.

   *Remarque :* la convergence est lente : pour $n = 10^8$, $\dfrac{\alpha_n}{\ln n} \approx 1{,}17$.
