---
uid: "0000113"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction exponentielle"
source: "Série Exponentielle — 4ème Maths (Exercice 1)"
title: "Étude de (eˣ−1)/(eˣ+1), réciproque et suite d'intégrales"
country: "Tunisie"
year: null
professor: "M. Haj Ali"
difficulty: "Moyen"
points: null
tags: ["fonction-exponentielle", "fonction-impaire", "tangente", "aire", "fonction-reciproque", "suite-d-integrales"]
---

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = \dfrac{e^x - 1}{e^x + 1}$. On désigne par $\mathcal{C}_f$ sa courbe représentative dans le plan rapporté à un repère orthonormé $(O, \vec{i}, \vec{j})$ (unité $2$ cm).

1. Montrer que $f$ est impaire et interpréter graphiquement ce résultat.

2. a. Dresser le tableau de variation de $f$ sur $\mathbb{R}_+$.

   b. Déterminer une équation de la tangente $T$ à la courbe $\mathcal{C}_f$ au point $O$.

   c. Montrer que pour tout réel $t$, on a $f'(t) \leq \dfrac{1}{2}$.

   d. Déduire que pour tout réel $x$ positif on a : $f(x) \leq \dfrac{1}{2}x$ et préciser la position de $\mathcal{C}_f$ par rapport à $T$.

3. Tracer la courbe $\mathcal{C}_f$ et $T$.

4. a. Vérifier que pour tout réel $x$, on a : $f(x) = \dfrac{2e^x}{e^x + 1} - 1$.

   b. Soit $\lambda$ un réel strictement négatif : calculer en cm² l'aire $\mathcal{A}(\lambda)$ de la partie limitée par $\mathcal{C}_f$ et les droites d'équations $x = \lambda$, $x = 0$ et $y = 0$.

   c. Calculer $\lim\limits_{\lambda \to -\infty} \mathcal{A}(\lambda)$.

5. a. Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on précisera. Construire la courbe représentative de $f^{-1}$ dans le même repère que $\mathcal{C}_f$.

   b. Donner l'expression de $f^{-1}(x)$ pour tout $x \in J$.

6. On considère la suite $(U_n)$ définie pour $n \in \mathbb{N}^*$ par $U_n = \displaystyle\int_0^{\ln 2} f^{2n}(x)\,dx$, où $f^{k}(x)$ désigne $\left(f(x)\right)^k$.

   a. Montrer que pour tout réel $x$, on a $f^2(x) = 1 - 2f'(x)$ et calculer $U_1$.

   b. Montrer que pour tout $x \geq 0$, on a : $f^{2n}(x) \leq \dfrac{x^{2n}}{2^{2n}}$.

   c. Montrer alors que pour tout $n \in \mathbb{N}^*$, on a : $0 \leq U_n \leq \dfrac{(\ln 2)^{2n+1}}{2^{2n}(2n+1)}$ et déduire $\lim\limits_{n \to +\infty} U_n$.

---

## Solution

1. $\mathbb{R}$ est symétrique par rapport à $0$ et $f(-x) = \dfrac{e^{-x} - 1}{e^{-x} + 1} = \dfrac{1 - e^x}{1 + e^x} = -f(x)$ : $O$ est centre de symétrie de $\mathcal{C}_f$.

2. a. $f'(x) = \dfrac{2e^x}{(e^x + 1)^2} > 0$ ; $f(0) = 0$ et $\lim\limits_{x \to +\infty} f(x) = 1$ (asymptote $y = 1$).

   b. $f'(0) = \dfrac{1}{2}$ : $T : y = \dfrac{1}{2}x$.

   c. $f'(t) \leq \dfrac{1}{2} \iff 4e^t \leq (e^t + 1)^2 \iff 0 \leq (e^t - 1)^2$ : vrai.

   d. $\varphi(x) = \dfrac{x}{2} - f(x)$ : $\varphi'(x) = \dfrac{1}{2} - f'(x) \geq 0$ et $\varphi(0) = 0$, donc $\varphi(x) \geq 0$ pour $x \geq 0$.

   $\mathcal{C}_f$ est au-dessous de $T$ sur $\mathbb{R}_+$ et, par symétrie, au-dessus de $T$ sur $\mathbb{R}_-$.

4. a. $\dfrac{2e^x}{e^x + 1} - 1 = \dfrac{2e^x - e^x - 1}{e^x + 1} = f(x)$.

   b. Une primitive de $f$ est $x \mapsto 2\ln(e^x + 1) - x$. Sur $[\lambda, 0]$, $f(x) \leq 0$, donc :

   $\mathcal{A}(\lambda) = -\displaystyle\int_\lambda^0 f(x)\,dx \times 4\text{ cm}^2 = 4\left(2\ln(1 + e^\lambda) - \lambda - 2\ln 2\right)\text{ cm}^2$.

   c. $\ln(1 + e^\lambda) \to 0$ et $-\lambda \to +\infty$ : $\lim\limits_{\lambda \to -\infty} \mathcal{A}(\lambda) = +\infty$.

5. a. $f$ est continue et strictement croissante sur $\mathbb{R}$ : bijection de $\mathbb{R}$ sur $J = \,]-1, 1[$. La courbe de $f^{-1}$ est la symétrique de $\mathcal{C}_f$ par rapport à la droite $y = x$.

   b. $y = \dfrac{e^x - 1}{e^x + 1} \iff e^x = \dfrac{1 + y}{1 - y}$, donc $f^{-1}(x) = \ln\left(\dfrac{1 + x}{1 - x}\right)$ pour $x \in \,]-1,1[$.

6. a. $f^2(x) = \dfrac{(e^x + 1)^2 - 4e^x}{(e^x + 1)^2} = 1 - 2f'(x)$.

   $U_1 = \displaystyle\int_0^{\ln 2}\left(1 - 2f'(x)\right)dx = \ln 2 - 2\left(f(\ln 2) - f(0)\right) = \ln 2 - \dfrac{2}{3}$.

   b. Pour $x \geq 0$ : $0 \leq f(x) \leq \dfrac{x}{2}$, d'où $0 \leq f^{2n}(x) \leq \left(\dfrac{x}{2}\right)^{2n}$.

   c. On intègre sur $[0, \ln 2]$ : $0 \leq U_n \leq \dfrac{1}{2^{2n}}\left[\dfrac{x^{2n+1}}{2n+1}\right]_0^{\ln 2}$. Comme $0 < \dfrac{\ln 2}{2} < 1$, le majorant tend vers $0$ : $\lim\limits_{n \to +\infty} U_n = 0$.
