---
uid: "0000149"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonctions réciproques"
source: "Bac 1991 principale, Problème"
title: "ln((x+2+√(x²+4x))/2), sa réciproque eˣ+e⁻ˣ−2, une aire et une suite"
country: "Tunisie"
year: 1991
professor: null
difficulty: "Difficile"
points: 10
tags: ["bac", "fonction-reciproque", "logarithme", "integrale-de-la-reciproque", "suite-recurrente", "inegalite-des-accroissements-finis"]
bac: "1991-principale-maths"
recommended: true
---

Soit $f$ la fonction numérique définie par $f(x) = \ln\left(\dfrac{x + 2 + \sqrt{x^2 + 4x}}{2}\right)$.

### Partie A

1. a. Montrer que le domaine de définition de $f$ est $\mathbb{R}_+$.

   b. Étudier les variations de $f$ sur $\mathbb{R}_+$.

   c. Tracer sa courbe représentative $(C)$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

2. a. Soit $y$ un réel strictement positif. Résoudre dans $\mathbb{R}_+$ l'équation en $x$ : $e^x + e^{-x} - 2 = y$.

   b. Montrer que $f$ admet sur $\mathbb{R}_+$ une fonction réciproque $g$, et déduire de ce qui précède l'expression de $g(x)$.

### Partie B

1. Soit $h$ une fonction dérivable et strictement monotone sur un intervalle $I$.

   a. Montrer que $h^{-1}$ admet des primitives sur $h(I)$.

   b. Soit $H$ une primitive de $h^{-1}$ sur $h(I)$. Démontrer que $H \circ h$ est une primitive, sur $I$, de la fonction $x \mapsto x\,h'(x)$.

   c. Soit $(\alpha, \beta)$ un couple de $I^2$. En déduire que $\displaystyle\int_{h(\alpha)}^{h(\beta)} h^{-1}(t)\,dt = \int_\alpha^\beta t\,h'(t)\,dt$.

2. a. Calculer $f(0)$ et $f\left(\dfrac{(e - 1)^2}{e}\right)$.

   b. En déduire l'aire de la partie du plan limitée par la courbe $(C)$ et les droites d'équations $x = \dfrac{(e - 1)^2}{e}$ et $y = 0$.

### Partie C

1. a. Montrer que pour tout réel $x$ positif : $\ln(1 + x) \leq f(x) \leq \ln(2 + x)$.

   b. Soit $\theta(x) = f(x) - \dfrac12 x$ sur $\mathbb{R}_+$. Montrer que $\theta$ est strictement décroissante sur $[1, +\infty[$ et en déduire que l'équation $f(x) = \dfrac12 x$ admet une solution unique $\gamma$ dans $]1, 4[$.

2. On considère la suite $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = f(2u_n)$ pour tout $n \in \mathbb{N}$.

   a. Montrer que, pour tout $n \in \mathbb{N}$, $u_n \in [1, 2]$.

   b. Montrer que, pour tout $n \in \mathbb{N}$, $\left|u_{n+1} - \dfrac12\gamma\right| \leq \dfrac{2}{\sqrt5}\left|u_n - \dfrac12\gamma\right|$.

   c. En déduire la limite de la suite $(u_n)$.

---

## Solution

### Partie A

1. a. Il faut $x^2 + 4x \geq 0$, soit $x \leq -4$ ou $x \geq 0$, et $x + 2 + \sqrt{x^2 + 4x} > 0$.

   Pour $x \leq -4$ : $x + 2 < 0$ et $\sqrt{x^2 + 4x} = \sqrt{(x + 2)^2 - 4} < |x + 2| = -(x + 2)$, donc la somme est négative : exclu.

   Pour $x \geq 0$ : la somme est $\geq 2 > 0$. Donc $D_f = \mathbb{R}_+$.

   b. Pour $x > 0$ : $f'(x) = \dfrac{1 + \frac{x + 2}{\sqrt{x^2 + 4x}}}{x + 2 + \sqrt{x^2 + 4x}} = \dfrac{1}{\sqrt{x^2 + 4x}} > 0$.

   $f$ est strictement croissante, $f(0) = \ln 1 = 0$, $\lim\limits_{x \to +\infty} f(x) = +\infty$.

   $\lim\limits_{x \to 0^+} f'(x) = +\infty$ : demi-tangente verticale en $O$.

   c. $\dfrac{f(x)}{x} \to 0$ en $+\infty$ : branche parabolique de direction $(O\vec{i})$.

2. a. On pose $X = e^x \geq 1$ : $X + \dfrac1X - 2 = y \iff X^2 - (y + 2)X + 1 = 0$, de discriminant $y^2 + 4y > 0$.

   Les deux racines ont pour produit $1$ ; seule la plus grande est $\geq 1$ : $X = \dfrac{y + 2 + \sqrt{y^2 + 4y}}{2}$.

   Unique solution : $x = \ln\dfrac{y + 2 + \sqrt{y^2 + 4y}}{2} = f(y)$.

   b. $f$ est continue et strictement croissante sur $\mathbb{R}_+$, avec $f(0) = 0$ et $\lim\limits_{+\infty} f = +\infty$ : bijection de $\mathbb{R}_+$ sur $\mathbb{R}_+$.

   D'après a. (et $f(0) = 0$) : $f(y) = x \iff y = e^x + e^{-x} - 2$. Donc $g(x) = e^x + e^{-x} - 2$ pour $x \geq 0$.

### Partie B

1. a. $h$ est continue et strictement monotone sur $I$ : $h(I)$ est un intervalle et $h^{-1}$ est continue sur $h(I)$, donc admet des primitives.

   b. $(H \circ h)'(x) = h'(x)\,H'\big(h(x)\big) = h'(x)\,h^{-1}\big(h(x)\big) = x\,h'(x)$.

   c. $\displaystyle\int_{h(\alpha)}^{h(\beta)} h^{-1}(t)\,dt = H\big(h(\beta)\big) - H\big(h(\alpha)\big) = \int_\alpha^\beta t\,h'(t)\,dt$.

2. a. $f(0) = 0$. $g(1) = e + \dfrac1e - 2 = \dfrac{(e - 1)^2}{e}$, donc $f\left(\dfrac{(e - 1)^2}{e}\right) = 1$.

   b. $f \geq 0$, donc $\mathcal{A} = \displaystyle\int_0^{(e-1)^2/e} f(t)\,dt$. On applique 1. c. avec $h = g$ sur $I = [0, 1]$ ($h^{-1} = f$) :

   $\mathcal{A} = \displaystyle\int_0^1 t\,g'(t)\,dt = \int_0^1 t\left(e^t - e^{-t}\right)dt = \Big[(t - 1)e^t + (t + 1)e^{-t}\Big]_0^1 = \dfrac2e$ unités d'aire ($\approx 0{,}736$).

### Partie C

1. a. $f(x) \geq \ln(1 + x) \iff \sqrt{x^2 + 4x} \geq x$ : vrai. $f(x) \leq \ln(2 + x) \iff \sqrt{x^2 + 4x} \leq x + 2 \iff x^2 + 4x \leq x^2 + 4x + 4$ : vrai.

   b. $\theta'(x) = \dfrac{1}{\sqrt{x^2 + 4x}} - \dfrac12 < 0 \iff x^2 + 4x > 4$, vrai pour $x \geq 1$.

   $\theta(1) = \ln\dfrac{3 + \sqrt5}{2} - \dfrac12 \approx 0{,}46 > 0$ et $\theta(4) = \ln\left(3 + 2\sqrt2\right) - 2 \approx -0{,}24 < 0$.

   $\theta$ est continue et strictement décroissante sur $[1, 4]$ : une unique solution $\gamma \in \,]1, 4[$ ($\gamma \approx 3{,}23$).

   De plus $\theta(2) = \ln\left(2 + \sqrt3\right) - 1 > 0$, donc $\gamma > 2$ et $\dfrac{\gamma}{2} \in \,]1, 2[$.

2. a. Récurrence : si $u_n \in [1, 2]$, alors $2u_n \in [2, 4]$ et, $f$ étant croissante, $u_{n+1} \in [f(2), f(4)] = \left[\ln(2 + \sqrt3), \ln(3 + 2\sqrt2)\right] \subset [1, 2]$ ($1{,}32$ et $1{,}76$).

   b. Soit $k(x) = f(2x)$ sur $[1, 2]$ : $k'(x) = \dfrac{2}{\sqrt{4x^2 + 8x}} = \dfrac{1}{\sqrt{x^2 + 2x}} \leq \dfrac{1}{\sqrt3} < \dfrac{2}{\sqrt5}$.

   $k\left(\frac{\gamma}{2}\right) = f(\gamma) = \frac{\gamma}{2}$, et $u_n$, $\frac{\gamma}{2}$ sont dans $[1, 2]$. L'inégalité des accroissements finis donne le résultat.

   c. Par récurrence, $\left|u_n - \dfrac{\gamma}{2}\right| \leq \left(\dfrac{2}{\sqrt5}\right)^n \left|1 - \dfrac{\gamma}{2}\right|$, et $\left(\dfrac{2}{\sqrt5}\right)^n \to 0$ : $\lim\limits_{n \to +\infty} u_n = \dfrac{\gamma}{2}$.

   *Remarque :* la constante $\dfrac{1}{\sqrt3}$ convient aussi ; le sujet demande seulement une constante plus faible.
