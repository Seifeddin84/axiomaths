---
uid: "0000163"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Bac 1981 principale, Problème"
title: "La fonction cos x · ln(sin x), sa réciproque et les intégrales Iₙ → (−1)ⁿ⁺¹ n!"
country: "Tunisie"
year: 1981
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "logarithme", "fonction-reciproque", "integration-par-parties", "suite-d-integrales", "factorielle"]
bac: "1981-principale-maths"
---

Le plan est rapporté à un repère orthonormé $(O, \vec{i}, \vec{j})$.

1. On considère la fonction $g$ définie sur $\mathbb{R}_+$ par $g(t) = -t^2\ln t + 1 - t^2$ pour $t > 0$ et $g(0) = 1$.

   a. Étudier la continuité et la dérivabilité de $g$ sur $\mathbb{R}_+$.

   b. Étudier les variations de $g$. En déduire que : $\forall t \in [0, 1]$, $g(t) \geq 0$.

2. Soit $f$ la fonction définie sur $]0, \pi[$ par $f(x) = \cos x \cdot \ln(\sin x)$.

   a. Étudier les variations de $f$ et tracer sa courbe $(C)$. (On remarquera que $f'(x) = \dfrac{g(\sin x)}{\sin x}$.)

   b. Montrer que la droite $\Delta : y = x$ coupe $(C)$ en un point $M_0$ d'abscisse $x_0$ telle que $\dfrac{\pi}{2} < x_0 < \pi$.

   c. Montrer que $f$ est une bijection de $]0, \pi[$ sur $\mathbb{R}$. Déterminer les domaines de continuité et de dérivabilité de $f^{-1}$. Tracer la courbe $(C')$ de $f^{-1}$.

3. Soit $\alpha \in \left]\frac{\pi}{2}, \pi\right[$. On pose, pour tout entier naturel $n$, $I_n(\alpha) = \displaystyle\int_{\frac{\pi}{2}}^{\alpha} \cos x\,\big[\ln(\sin x)\big]^n\,dx$.

   a. Montrer que $\lim\limits_{X \to +\infty} \dfrac{X^n}{e^X} = 0$ ; en déduire que $\lim\limits_{t \to 0^+} t\,(\ln t)^n = 0$.

   b. En utilisant une intégration par parties, trouver une relation entre $I_{n+1}(\alpha)$ et $I_n(\alpha)$.

   c. Montrer que $I_n(\alpha)$ admet pour limite $(-1)^{n+1}\,n!$ quand $\alpha$ tend vers $\pi$ par valeurs inférieures.

   d. Calculer $I_n(\alpha)$ pour $n = 1$ et $\alpha = x_0$ ; en déduire l'aire de la partie du plan limitée par les courbes $(C)$ et $(C')$ et les axes de coordonnées.

---

## Solution

1. a. $\lim\limits_{t \to 0^+} t^2\ln t = 0$, donc $\lim\limits_{0^+} g = 1 = g(0)$ : $g$ est continue en $0$ (et sur $\mathbb{R}_+$).

   $\dfrac{g(t) - g(0)}{t} = -t\ln t - t \to 0$ : $g$ est dérivable en $0$, $g'(0) = 0$. Pour $t > 0$ : $g'(t) = -2t\ln t - t - 2t = -t(2\ln t + 3)$.

   b. $g'(t) > 0 \iff \ln t < -\dfrac32 \iff t < e^{-3/2}$ : $g$ croît sur $\left[0, e^{-3/2}\right]$ et décroît sur $\left[e^{-3/2}, +\infty\right[$.

   $g(1) = 0$. Sur $\left[e^{-3/2}, 1\right]$, $g$ décroît jusqu'à $0$, donc $g \geq 0$ ; sur $\left[0, e^{-3/2}\right]$, $g \geq g(0) = 1$. Ainsi $g \geq 0$ sur $[0, 1]$, et $g > 0$ sur $[0, 1[$.

2. a. $f'(x) = -\sin x\ln(\sin x) + \dfrac{\cos^2 x}{\sin x} = \dfrac{-\sin^2 x\ln(\sin x) + 1 - \sin^2 x}{\sin x} = \dfrac{g(\sin x)}{\sin x}$.

   $\sin x \in \,]0, 1]$, donc $f'(x) \geq 0$, nul seulement si $\sin x = 1$, c'est-à-dire en $\dfrac{\pi}{2}$ : $f$ est strictement croissante.

   $\lim\limits_{x \to 0^+} f(x) = -\infty$ ($\cos x \to 1$, $\ln\sin x \to -\infty$) et $\lim\limits_{x \to \pi^-} f(x) = +\infty$ ($\cos x \to -1$). Asymptotes $x = 0$ et $x = \pi$. $f\left(\frac{\pi}{2}\right) = 0$, tangente horizontale en ce point.

   b. Soit $h(x) = f(x) - x$. Sur $\left]0, \frac{\pi}{2}\right]$, $f(x) \leq 0 < x$ (car $\cos x \geq 0$ et $\ln\sin x \leq 0$) : pas de solution.

   Sur $\left[\frac{\pi}{2}, \pi\right[$, $h$ est continue, $h\left(\frac{\pi}{2}\right) = -\frac{\pi}{2} < 0$ et $\lim\limits_{\pi^-} h = +\infty$ : $h$ s'annule en un point $x_0 \in \left]\frac{\pi}{2}, \pi\right[$ (numériquement $x_0 \approx 3{,}097$, et c'est le seul).

   c. $f$ est continue et strictement croissante sur $]0, \pi[$, avec les limites $-\infty$ et $+\infty$ : bijection de $]0, \pi[$ sur $\mathbb{R}$.

   $f^{-1}$ est continue sur $\mathbb{R}$. Elle est dérivable en tout $y = f(x)$ tel que $f'(x) \neq 0$, c'est-à-dire sur $\mathbb{R}^*$ ; en $0 = f\left(\frac{\pi}{2}\right)$, $(C')$ a une tangente verticale. $(C')$ est la symétrique de $(C)$ par rapport à $\Delta$.

3. a. Croissances comparées : $\dfrac{X^n}{e^X} \to 0$. Avec $t = e^{-X}$ ($X \to +\infty$ quand $t \to 0^+$) : $t(\ln t)^n = (-1)^n\dfrac{X^n}{e^X} \to 0$.

   b. On pose $u(x) = \big[\ln(\sin x)\big]^{n+1}$, $v'(x) = \cos x$, donc $u'(x) = (n + 1)\dfrac{\cos x}{\sin x}\big[\ln(\sin x)\big]^n$ et $v(x) = \sin x$ :

   $I_{n+1}(\alpha) = \Big[\sin x\,\big(\ln\sin x\big)^{n+1}\Big]_{\frac{\pi}{2}}^{\alpha} - (n + 1)\,I_n(\alpha) = \sin\alpha\,\big(\ln\sin\alpha\big)^{n+1} - (n + 1)\,I_n(\alpha)$.

   c. Quand $\alpha \to \pi^-$, $\sin\alpha \to 0^+$, donc $\sin\alpha\,(\ln\sin\alpha)^{n+1} \to 0$ (question a).

   $I_0(\alpha) = \sin\alpha - 1 \to -1 = (-1)^1\,0!$. Si $I_n(\alpha) \to (-1)^{n+1}n!$, alors $I_{n+1}(\alpha) \to -(n + 1)(-1)^{n+1}n! = (-1)^{n+2}(n + 1)!$.

   Par récurrence, $\lim\limits_{\alpha \to \pi^-} I_n(\alpha) = (-1)^{n+1}\,n!$.

   d. $I_1(x_0) = \sin x_0\ln(\sin x_0) - I_0(x_0) = \sin x_0\ln(\sin x_0) - \sin x_0 + 1$.

   Comme $f(x_0) = x_0$, $\ln(\sin x_0) = \dfrac{x_0}{\cos x_0}$, d'où $I_1(x_0) = x_0\tan x_0 - \sin x_0 + 1$.

   Le domaine est symétrique par rapport à $\Delta$. Sa moitié située sous $\Delta$ est formée des points tels que $0 \leq x \leq x_0$ et $\max(0, f(x)) \leq y \leq x$ : son aire est $\dfrac{x_0^2}{2} - \displaystyle\int_{\frac{\pi}{2}}^{x_0} f(x)\,dx = \dfrac{x_0^2}{2} - I_1(x_0)$.

   $\mathcal{A} = x_0^2 - 2I_1(x_0) = x_0^2 - 2x_0\tan x_0 + 2\sin x_0 - 2$ unités d'aire ($\approx 7{,}96$).
