---
uid: "0000090"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Douma Ali"
title: "Étude de fonction et suite d'intégrales (Partie 2)"
country: "Tunisie"
year: 2026
professor: "Douma Ali"
difficulty: "Difficile"
points: null
tags: ["logarithme-neperien", "integration", "suites-reelles", "encadrement"]
---

1. Soient $f$ et $g$ les deux fonctions définies sur $]0, +\infty[$ par :
   $$\displaystyle f(x)=\dfrac{\ln(x)}{1+x^2} \quad \text{et} \quad g(x)=1+x^2-2x^2\ln(x)$$

   a. Étudier les variations de $f$ et $g$.

   b. En déduire que l'équation $g(x)=0$ admet une solution unique $\alpha \in \left]1{,}8\,;\,2\right[$. Préciser le signe de $g(x)$.

2. Vérifier que $f(\alpha) = \dfrac{1}{2\alpha^2}$, puis dresser le tableau de variation de $f$ et tracer sa courbe $(C_f)$ dans un repère $(O, \vec{i}, \vec{j})$.

3. Soit $F$ la fonction définie sur $]0, +\infty[$ par : $F(x) = \displaystyle\int_1^x f(t)\,dt$.

   a. Étudier le signe de $F$ ainsi que son sens de variation.

   b. Montrer que pour tout $x > 0$ : $F\left(\dfrac{1}{x}\right) = F(x)$.

   c. Montrer que pour tout $x \ge 1$ : $\ln x \le \sqrt{x}$, puis que $f(x) \le \dfrac{1}{x\sqrt{x}}$. En déduire que pour tout $x \ge 1$ : $F(x) \le 2$.

   d. Montrer que $\lim\limits_{x \to +\infty} F(x) = \beta \in \mathbb{R}$ et en déduire que $\lim\limits_{x \to 0^+} F(x) = \beta$.

4. Pour tout $n \in \mathbb{N}$ et $x > 0$, on pose : $I_n(x) = \displaystyle\int_1^x t^n \ln t\,dt$ et $u_n = \displaystyle\sum_{k=0}^n \dfrac{(-1)^k}{(2k+1)^2}$.

   a. Montrer que : $I_n(x) = \dfrac{x^{n+1}\ln x}{n+1} - \dfrac{x^{n+1}}{(n+1)^2} + \dfrac{1}{(n+1)^2}$.

   b. Montrer que pour tout $n \in \mathbb{N}$ et $x > 0$ :
   $$\displaystyle \dfrac{1}{1+x^2} = \sum_{k=0}^n (-1)^k x^{2k} + (-1)^{n+1} \dfrac{x^{2n+2}}{1+x^2}$$

   c. Montrer que pour tout $n \in \mathbb{N}$ : $|u_n - \beta| \le \dfrac{1}{(2n+3)^2}$. En déduire $\lim\limits_{n \to +\infty} u_n$.

*Pour aller plus loin : le réel $\beta$ est la **constante de Catalan** $G \approx 0{,}916$. Voir l'exercice [n°116 « La constante de Catalan »](/lycee/4eme/mathematiques/integrales#ex-0000116), l'[exercice n°112](/lycee/4eme/mathematiques/integrales#ex-0000112) et l'[exercice n°117](/lycee/4eme/mathematiques/integrales#ex-0000117).*

---

## Solution

1. a. $g'(x) = 2x - 4x\ln x - 2x = -4x\ln x$ : $g$ est croissante sur $]0,1]$ et décroissante sur $[1,+\infty[$.

   $\lim\limits_{x \to 0^+} g(x) = 1$ (car $x^2\ln x \to 0$), $g(1) = 2$ et $\lim\limits_{x \to +\infty} g(x) = \lim x^2\left(\dfrac{1}{x^2} + 1 - 2\ln x\right) = -\infty$.

   $f'(x) = \dfrac{\frac{1}{x}(1+x^2) - 2x\ln x}{(1+x^2)^2} = \dfrac{g(x)}{x(1+x^2)^2}$ : $f'(x)$ a le signe de $g(x)$ (voir 1.b et 2).

   b. Sur $]0,1]$ : $g(x) > 1 > 0$. Sur $[1,+\infty[$, $g$ est continue et strictement décroissante de $2$ vers $-\infty$ : l'équation $g(x) = 0$ a une unique solution $\alpha$.

   $g(1{,}8) \approx 0{,}43 > 0$ et $g(2) = 5 - 8\ln 2 \approx -0{,}55 < 0$, donc $\alpha \in \left]1{,}8\,;\,2\right[$.

   Signe : $g > 0$ sur $]0,\alpha[$ et $g < 0$ sur $]\alpha,+\infty[$.

2. $g(\alpha) = 0 \iff 2\alpha^2\ln\alpha = 1 + \alpha^2 \iff \ln\alpha = \dfrac{1+\alpha^2}{2\alpha^2}$, donc $f(\alpha) = \dfrac{\ln\alpha}{1+\alpha^2} = \dfrac{1}{2\alpha^2}$.

   $f$ est croissante sur $]0,\alpha]$ et décroissante sur $[\alpha,+\infty[$ ; $\lim\limits_{x \to 0^+} f(x) = -\infty$ (asymptote $x = 0$), $\lim\limits_{x \to +\infty} f(x) = 0$ (asymptote $y = 0$), $f(1) = 0$ et $f(\alpha) \approx 0{,}14$.

3. a. $f$ est continue sur $]0,+\infty[$, donc $F$ est dérivable et $F' = f$.

   $f < 0$ sur $]0,1[$ et $f > 0$ sur $]1,+\infty[$ : $F$ est décroissante sur $]0,1]$ et croissante sur $[1,+\infty[$.

   Son minimum est $F(1) = 0$ : $F(x) > 0$ pour $x \neq 1$.

   b. On pose $H(x) = F\left(\frac{1}{x}\right) - F(x)$. $H$ est dérivable sur $]0,+\infty[$ et

   $H'(x) = -\dfrac{1}{x^2}f\left(\dfrac{1}{x}\right) - f(x) = -\dfrac{1}{x^2}\cdot\dfrac{-\ln x}{1 + \frac{1}{x^2}} - f(x) = \dfrac{\ln x}{x^2 + 1} - f(x) = 0$.

   $H$ est constante, égale à $H(1) = 0$.

   *Autre méthode* (changement de variable $t = \dfrac{1}{u}$, $dt = -\dfrac{du}{u^2}$) : $F\left(\dfrac{1}{x}\right) = \displaystyle\int_1^{x} \dfrac{\ln\frac{1}{u}}{1 + \frac{1}{u^2}}\left(-\dfrac{du}{u^2}\right) = \int_1^x \dfrac{\ln u}{1 + u^2}\,du = F(x)$.

   c. $\psi(x) = \sqrt{x} - \ln x$ : $\psi'(x) = \dfrac{1}{2\sqrt{x}} - \dfrac{1}{x} = \dfrac{\sqrt{x} - 2}{2x}$, minimum en $x = 4$ : $\psi(4) = 2 - 2\ln 2 > 0$. Donc $\ln x \le \sqrt{x}$.

   Pour $x \ge 1$ : $0 \le \ln x \le \sqrt{x}$ et $1 + x^2 \ge x^2$, donc $f(x) \le \dfrac{\sqrt{x}}{x^2} = \dfrac{1}{x\sqrt{x}}$.

   On intègre sur $[1,x]$ : $F(x) \le \displaystyle\int_1^x t^{-\frac{3}{2}}\,dt = 2 - \dfrac{2}{\sqrt{x}} \le 2$.

   d. $F$ est croissante et majorée par $2$ sur $[1,+\infty[$ : elle admet une limite finie $\beta$ en $+\infty$ (avec $0 < \beta \le 2$).

   Quand $x \to 0^+$, $\dfrac{1}{x} \to +\infty$, donc $F(x) = F\left(\dfrac{1}{x}\right) \to \beta$.

4. a. On pose $u(t) = \ln t$ et $v'(t) = t^n$, donc $v(t) = \dfrac{t^{n+1}}{n+1}$ :

   $I_n(x) = \left[\dfrac{t^{n+1}\ln t}{n+1}\right]_1^x - \dfrac{1}{n+1}\displaystyle\int_1^x t^n\,dt = \dfrac{x^{n+1}\ln x}{n+1} - \dfrac{x^{n+1} - 1}{(n+1)^2}$.

   En particulier, comme $x^{n+1}\ln x \to 0$ : $\lim\limits_{x \to 0^+} I_n(x) = \dfrac{1}{(n+1)^2}$.

   b. Somme géométrique de raison $-x^2$ : $\displaystyle\sum_{k=0}^n (-x^2)^k = \dfrac{1 - (-x^2)^{n+1}}{1 + x^2} = \dfrac{1}{1+x^2} - (-1)^{n+1}\dfrac{x^{2n+2}}{1+x^2}$.

   c. Soit $x \in \,]0,1[$. On multiplie 4.b (écrite en $t$) par $\ln t$ et on intègre de $1$ à $x$ :
   $$\displaystyle F(x) = \sum_{k=0}^n (-1)^k I_{2k}(x) + (-1)^{n+1} r_n(x) \quad \text{avec} \quad r_n(x) = \int_x^1 \dfrac{t^{2n+2}(-\ln t)}{1+t^2}\,dt$$
   Sur $[x,1]$ : $0 \le \dfrac{t^{2n+2}(-\ln t)}{1+t^2} \le t^{2n+2}(-\ln t)$, donc $0 \le r_n(x) \le \displaystyle\int_x^1 t^{2n+2}(-\ln t)\,dt = I_{2n+2}(x)$.

   Quand $x \to 0^+$ : $F(x) \to \beta$ et $I_{2k}(x) \to \dfrac{1}{(2k+1)^2}$, donc $r_n(x) = (-1)^{n+1}\left(F(x) - \displaystyle\sum_{k=0}^n (-1)^k I_{2k}(x)\right)$ a une limite $\ell_n$ avec

   $\beta = u_n + (-1)^{n+1}\ell_n$ et $0 \le \ell_n \le \lim\limits_{x \to 0^+} I_{2n+2}(x) = \dfrac{1}{(2n+3)^2}$.

   D'où $|u_n - \beta| \le \dfrac{1}{(2n+3)^2}$, et $\lim\limits_{n \to +\infty} u_n = \beta$.

*Remarque : le même nombre est obtenu dans l'[exercice n°116](/lycee/4eme/mathematiques/integrales#ex-0000116) par une autre voie ($\beta = \displaystyle\int_0^1 \dfrac{\varphi(x)}{x}\,dx$ où $\varphi$ est la réciproque de $\tan$), avec la même majoration $\dfrac{1}{(2n+3)^2}$.*
