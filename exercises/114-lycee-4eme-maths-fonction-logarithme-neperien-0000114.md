---
uid: "0000114"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Série de problèmes — Logarithme (Problème 2)"
title: "Prolongement par continuité, dérivabilité et suite récurrente"
country: "Tunisie"
year: null
professor: null
difficulty: "Difficile"
points: null
tags: ["logarithme-neperien", "prolongement-par-continuite", "derivabilite", "primitive", "suite-recurrente"]
---

Soit $f$ la fonction définie sur $\mathbb{R}_+$ par : $f(x) = \dfrac{-1 + x + \ln x}{\ln x}$ pour $x \in \,]0,1[\, \cup \,]1,+\infty[$, $f(0) = 1$ et $f(1) = 2$.

1. a. Étudier la continuité de $f$ à droite en $0$ et en $1$.

   b. $f$ est-elle dérivable à droite en $0$ ? Justifier.

2. Soit $u$ la fonction définie sur $]-1, +\infty[$ par $u(x) = \dfrac{x^2}{1 + x}$. Montrer que la fonction $g(x) = -x + \dfrac{1}{2}x^2 + \ln(1 + x)$ est une primitive de $u$ sur $]-1, +\infty[$.

3. a. Montrer que pour tout $x \in \,]-1, +\infty[$ on a : $\dfrac{x^3}{3(x+1)} \leq g(x) \leq \dfrac{x^3}{3}$. En déduire $\lim\limits_{x \to 0} \dfrac{g(x)}{x^2}$.

   b. Montrer que $f$ est dérivable en $1$ et que $f'(1) = \dfrac{1}{2}$.

4. a. Montrer que pour tout réel $x$ strictement positif on a : $1 - x + x\ln x \geq 0$.

   b. Construire la courbe de $f$ dans un repère orthonormé.

5. Soit $(V_n)$ la suite définie sur $\mathbb{N}$ par $V_{n+1} = f(V_n)$ et $V_0 \in \,]0, e[$. Montrer que $(V_n)$ converge, puis calculer sa limite.

---

## Solution

Pour $x \neq 1$, $x > 0$ : $f(x) = 1 + \dfrac{x - 1}{\ln x}$.

1. a. En $0^+$ : $\dfrac{x - 1}{\ln x} \to 0$, donc $f(x) \to 1 = f(0)$ : $f$ est continue à droite en $0$.
   En $1$ : $\dfrac{\ln x}{x - 1} \to 1$, donc $f(x) \to 2 = f(1)$ : $f$ est continue en $1$.

   b. $\dfrac{f(x) - f(0)}{x} = \dfrac{x - 1}{x\ln x} \to +\infty$ quand $x \to 0^+$ (car $x\ln x \to 0^-$) : $f$ n'est pas dérivable à droite en $0$ ; demi-tangente verticale.

2. $g'(x) = -1 + x + \dfrac{1}{1 + x} = \dfrac{-(1+x) + x(1+x) + 1}{1+x} = \dfrac{x^2}{1 + x} = u(x)$.

3. a. Pour $x \geq 0$ et $t \in [0,x]$ : $\dfrac{t^2}{1+x} \leq u(t) \leq t^2$ ; on intègre sur $[0,x]$ ($g(0) = 0$).
   Pour $-1 < x < 0$ et $t \in [x,0]$ : $t^2 \leq u(t) \leq \dfrac{t^2}{1+x}$ ; on intègre sur $[x,0]$ puis on change de signe.
   Dans les deux cas : $\dfrac{x^3}{3(x+1)} \leq g(x) \leq \dfrac{x^3}{3}$. En divisant par $x^2 > 0$ : $\dfrac{x}{3(x+1)} \leq \dfrac{g(x)}{x^2} \leq \dfrac{x}{3}$, donc $\lim\limits_{x \to 0} \dfrac{g(x)}{x^2} = 0$.

   b. On pose $h = x - 1$ : $f(x) - 2 = \dfrac{h - \ln(1+h)}{\ln(1+h)} = \dfrac{\frac{h^2}{2} - g(h)}{\ln(1+h)}$, d'où
   $\dfrac{f(x) - f(1)}{x - 1} = \left(\dfrac{1}{2} - \dfrac{g(h)}{h^2}\right)\cdot\dfrac{h}{\ln(1+h)} \xrightarrow[h \to 0]{} \dfrac{1}{2}$.

4. a. $\varphi(x) = 1 - x + x\ln x$ : $\varphi'(x) = \ln x$, minimum en $1$ avec $\varphi(1) = 0$, donc $\varphi \geq 0$.

   b. Pour $x \neq 1$ : $f'(x) = \dfrac{x\ln x - x + 1}{x(\ln x)^2} = \dfrac{\varphi(x)}{x(\ln x)^2} > 0$ : $f$ est strictement croissante sur $\mathbb{R}_+$.
   $\lim\limits_{x \to +\infty} f(x) = +\infty$ et $\dfrac{f(x)}{x} \to 0$ : branche parabolique de direction $(Ox)$. Demi-tangente verticale en $0$, tangente de pente $\dfrac{1}{2}$ en $1$.

5. $f(x) - x = \dfrac{(x - 1)(1 - \ln x)}{\ln x} > 0$ sur $]0,1[\, \cup \,]1,e[$, et $f(1) = 2 > 1$ ; de plus $f(e) = e$.
   Par récurrence, $0 < V_n < e$ (car $f$ est strictement croissante et $f(e) = e$), et $V_{n+1} = f(V_n) > V_n$.
   $(V_n)$ est croissante et majorée par $e$ : elle converge vers $\ell \in \,]0, e]$ avec $f(\ell) = \ell$ ($f$ continue).
   Les solutions de $f(x) = x$ vérifient $(x - 1)(1 - \ln x) = 0$ avec $x \neq 1$ (car $f(1) = 2$), d'où $\ell = e$.
