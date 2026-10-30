---
uid: "0000115"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Série d'exercices — Intégrales"
title: "Intégrales de Wallis : sinⁿ⁺¹(t)cos²(t)"
country: "Tunisie"
year: null
professor: null
difficulty: "Difficile"
points: null
tags: ["integrales", "integration-par-parties", "suites-reelles", "recurrence", "wallis"]
---

Soit la suite $(I_n)$ définie pour tout $n \in \mathbb{N}$ par $I_n = \displaystyle\int_0^{\frac{\pi}{2}} \sin^{n+1}(t)\cos^2(t)\,dt$.

1. a. Calculer $I_0$ et $I_1$.

   b. Montrer que la suite $(I_n)$ est décroissante. En déduire qu'elle est convergente.

2. a. Prouver à l'aide d'une intégration par parties que pour tout $n \in \mathbb{N}$ on a : $I_{n+2} = \dfrac{n+2}{n+5}\,I_n$.

   b. En déduire que pour tout $n \in \mathbb{N}$ on a : $\dfrac{n+2}{n+5} \leq \dfrac{I_{n+1}}{I_n} \leq 1$ et que $\lim\limits_{n \to +\infty} \dfrac{I_{n+1}}{I_n} = 1$.

3. a. Montrer par récurrence que pour tout $n \in \mathbb{N}$ on a : $I_n I_{n+1} = \dfrac{\pi}{2(n+2)(n+3)(n+4)}$.

   b. En déduire que $\lim\limits_{n \to +\infty} n^3 I_n^2 = \dfrac{\pi}{2}$.

---

## Solution

1. a. $I_0 = \displaystyle\int_0^{\frac{\pi}{2}} \sin t\cos^2 t\,dt = \left[-\dfrac{\cos^3 t}{3}\right]_0^{\frac{\pi}{2}} = \dfrac{1}{3}$.
   $I_1 = \displaystyle\int_0^{\frac{\pi}{2}} \dfrac{\sin^2(2t)}{4}\,dt = \dfrac{1}{8}\displaystyle\int_0^{\frac{\pi}{2}} \left(1 - \cos 4t\right)dt = \dfrac{\pi}{16}$.

   b. $I_{n+1} - I_n = \displaystyle\int_0^{\frac{\pi}{2}} \sin^{n+1}t\cos^2 t\,(\sin t - 1)\,dt \leq 0$. La suite est décroissante et minorée par $0$ ($I_n > 0$) : elle converge.

2. a. $\sin^{n+3}t\cos^2 t = \sin^{n+1}t\cos^2 t\,(1 - \cos^2 t)$, donc $I_{n+2} = I_n - K_n$ avec $K_n = \displaystyle\int_0^{\frac{\pi}{2}} \sin^{n+1}t\cos^4 t\,dt$.
   Dans $K_n$, on pose $u = \cos^3 t$ et $v' = \sin^{n+1}t\cos t$, donc $v = \dfrac{\sin^{n+2}t}{n+2}$ :
   $K_n = \left[\dfrac{\cos^3 t\,\sin^{n+2}t}{n+2}\right]_0^{\frac{\pi}{2}} + \dfrac{3}{n+2}\displaystyle\int_0^{\frac{\pi}{2}} \sin^{n+3}t\cos^2 t\,dt = \dfrac{3}{n+2}I_{n+2}$.
   D'où $I_{n+2}\left(1 + \dfrac{3}{n+2}\right) = I_n$, soit $I_{n+2} = \dfrac{n+2}{n+5}I_n$.

   b. $(I_n)$ décroissante : $\dfrac{n+2}{n+5}I_n = I_{n+2} \leq I_{n+1} \leq I_n$ ; on divise par $I_n > 0$ et on conclut par encadrement.

3. a. $n = 0$ : $I_0 I_1 = \dfrac{\pi}{48} = \dfrac{\pi}{2 \cdot 2 \cdot 3 \cdot 4}$.
   Hérédité : $I_{n+1}I_{n+2} = \dfrac{n+2}{n+5}I_n I_{n+1} = \dfrac{n+2}{n+5}\cdot\dfrac{\pi}{2(n+2)(n+3)(n+4)} = \dfrac{\pi}{2(n+3)(n+4)(n+5)}$.

   b. $n^3 I_n^2 = n^3\,I_n I_{n+1}\cdot\dfrac{I_n}{I_{n+1}} = \dfrac{\pi\,n^3}{2(n+2)(n+3)(n+4)}\cdot\dfrac{I_n}{I_{n+1}} \to \dfrac{\pi}{2} \times 1 = \dfrac{\pi}{2}$.
