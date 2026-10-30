---
uid: "0000112"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Série d'exercices — Intégrales (Exercice N°4)"
title: "Étude de ln(x)/(1+x²) et fonction définie par une intégrale"
country: "Tunisie"
year: null
professor: null
difficulty: "Difficile"
points: null
tags: ["integrales", "logarithme-neperien", "aire", "integration-par-parties", "fonction-integrale", "encadrement"]
---

### Partie A

1. On considère la fonction $g$ définie sur $]0, +\infty[$ par $g(x) = 1 + x^2 - 2x^2 \ln x$.

   a. Dresser le tableau de variations de $g$.

   b. Montrer que l'équation $g(x) = 0$ admet dans $]0, +\infty[$ une solution unique $\alpha$.

   c. Déduire de ce qui précède le signe de $g(x)$.

2. La courbe $(\mathcal{C})$ de la figure ci-dessous représente la fonction $g$.

   ![Courbe de g avec la partie hachurée entre x = 0,5 et x = 1](/exercises/images/112-lycee-4eme-maths-integrales-0000112.png)

   a. Calculer l'intégrale $A = \displaystyle\int_{\frac{1}{2}}^{1} x^2 \ln x \, dx$.

   b. Déduire l'aire de la partie hachurée.

3. On considère la fonction $f$ définie sur $]0, +\infty[$ par $f(x) = \dfrac{\ln x}{1 + x^2}$.

   a. Vérifier que pour tout $x > 0$, on a $f'(x) = \dfrac{g(x)}{x(1+x^2)^2}$.

   b. Dresser le tableau de variations de $f$. Vérifier que $f(\alpha) = \dfrac{1}{2\alpha^2}$.

   c. Construire la courbe de $f$ dans un repère orthogonal en prenant $2$ cm pour unité sur l'axe des abscisses et $4$ cm pour unité sur l'axe des ordonnées (on prendra $\alpha \approx 1{,}9$).

### Partie B

On considère la fonction $F$ définie sur $]0, +\infty[$ par $F(x) = \displaystyle\int_1^x f(t)\,dt$.

1. Montrer que $F$ est dérivable sur $]0, +\infty[$ et préciser $F'(x)$. En déduire le sens de variation de $F$.

2. a. Vérifier que pour tout $t \geq 1$ : $(1+t)^2 \geq 1 + t^2 \geq t^2$.

   b. Déduire que pour tout $t \geq 1$ : $\dfrac{\ln t}{(1+t)^2} \leq f(t) \leq \dfrac{\ln t}{t^2}$.

   c. Pour $x > 0$, on pose $I(x) = \displaystyle\int_1^x \dfrac{\ln t}{t^2}\,dt$ et $J(x) = \displaystyle\int_1^x \dfrac{\ln t}{(1+t)^2}\,dt$.

      À l'aide d'une intégration par parties, calculer $I(x)$.

      À l'aide d'une intégration par parties et de l'égalité $\dfrac{1}{t(1+t)} = \dfrac{1}{t} - \dfrac{1}{t+1}$ pour $t > 0$, calculer $J(x)$.

   d. Déduire de ce qui précède que, pour $x > 1$ :
   $$\ln 2 + \ln\left(\dfrac{x}{x+1}\right) - \dfrac{\ln x}{x+1} \leq F(x) \leq 1 - \dfrac{\ln x}{x} - \dfrac{1}{x}$$

   e. On admet que $\lim\limits_{x \to +\infty} F(x) = L$. Sans calculer $L$, vérifier que $\ln 2 \leq L \leq 1$.

---

## Solution

**Partie A**

1. a. $g'(x) = 2x - 4x\ln x - 2x = -4x\ln x$ : $g$ est croissante sur $]0,1]$ et décroissante sur $[1,+\infty[$.
   $\lim\limits_{x \to 0^+} g(x) = 1$ (car $x^2\ln x \to 0$), $g(1) = 2$, $\lim\limits_{x \to +\infty} g(x) = \lim x^2\left(\dfrac{1}{x^2} + 1 - 2\ln x\right) = -\infty$.

   b. Sur $]0,1]$, $g(x) > 1 > 0$ : pas de solution. Sur $[1,+\infty[$, $g$ est continue et strictement décroissante de $2$ vers $-\infty$ : une unique solution $\alpha > 1$.
   $g(1{,}8) \approx 0{,}43 > 0$ et $g(1{,}9) \approx -0{,}02 < 0$, donc $\alpha \in \,]1{,}8\,;\,1{,}9[$ ($\alpha \approx 1{,}895$).

   c. $g(x) > 0$ sur $]0, \alpha[$, $g(\alpha) = 0$, $g(x) < 0$ sur $]\alpha, +\infty[$.

2. a. $u = \ln x$, $v' = x^2$ : $A = \left[\dfrac{x^3}{3}\ln x\right]_{\frac12}^{1} - \dfrac{1}{3}\displaystyle\int_{\frac12}^{1} x^2\,dx = \dfrac{\ln 2}{24} - \dfrac{7}{72}$.

   b. $g \geq 0$ sur $\left[\frac{1}{2}, 1\right]$, donc l'aire vaut
   $\displaystyle\int_{\frac12}^{1} g(x)\,dx = \left[x + \dfrac{x^3}{3}\right]_{\frac12}^{1} - 2A = \dfrac{19}{24} - \dfrac{\ln 2}{12} + \dfrac{7}{36} = \dfrac{71}{72} - \dfrac{\ln 2}{12} \approx 0{,}93$ u.a.

3. a. $f'(x) = \dfrac{\frac{1}{x}(1+x^2) - 2x\ln x}{(1+x^2)^2} = \dfrac{1 + x^2 - 2x^2\ln x}{x(1+x^2)^2} = \dfrac{g(x)}{x(1+x^2)^2}$.

   b. $f'$ a le signe de $g$ : $f$ est croissante sur $]0,\alpha]$ et décroissante sur $[\alpha,+\infty[$.
   $\lim\limits_{x \to 0^+} f(x) = -\infty$ et $\lim\limits_{x \to +\infty} f(x) = 0$.
   $g(\alpha) = 0 \iff \ln\alpha = \dfrac{1+\alpha^2}{2\alpha^2}$, donc $f(\alpha) = \dfrac{\ln\alpha}{1+\alpha^2} = \dfrac{1}{2\alpha^2} \approx 0{,}14$.

   c. Asymptotes : $x = 0$ (verticale) et $y = 0$ en $+\infty$ ; $f(1) = 0$.

**Partie B**

1. $f$ est continue sur $]0,+\infty[$, donc $F$ est la primitive de $f$ qui s'annule en $1$ : $F'(x) = f(x)$. $F$ est décroissante sur $]0,1]$ et croissante sur $[1,+\infty[$ (signe de $\ln x$).

2. a. $(1+t)^2 = 1 + 2t + t^2 \geq 1 + t^2 \geq t^2$.

   b. On passe aux inverses (quantités positives) puis on multiplie par $\ln t \geq 0$.

   c. $I(x) = \left[-\dfrac{\ln t}{t}\right]_1^x + \displaystyle\int_1^x \dfrac{dt}{t^2} = 1 - \dfrac{\ln x}{x} - \dfrac{1}{x}$.

      Avec $v(t) = -\dfrac{1}{1+t}$ : $J(x) = \left[-\dfrac{\ln t}{1+t}\right]_1^x + \displaystyle\int_1^x \left(\dfrac{1}{t} - \dfrac{1}{t+1}\right)dt = \ln 2 + \ln\left(\dfrac{x}{x+1}\right) - \dfrac{\ln x}{x+1}$.

   d. On intègre l'encadrement de 2.b. sur $[1, x]$ ($x > 1$) : $J(x) \leq F(x) \leq I(x)$.

   e. $\lim\limits_{x \to +\infty} J(x) = \ln 2$ et $\lim\limits_{x \to +\infty} I(x) = 1$ ; le passage à la limite conserve les inégalités larges : $\ln 2 \leq L \leq 1$.

   *Remarque : on peut montrer que $L = \displaystyle\sum_{k \geq 0} \dfrac{(-1)^k}{(2k+1)^2} \approx 0{,}916$ (constante de Catalan) — voir l'exercice n°90.*
