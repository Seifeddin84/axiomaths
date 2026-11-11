---
uid: "0000140"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonctions exponentielles"
source: "Bac 1984 principale, Problème partie I"
bac: "1984-principale-maths"
title: "Une famille de fonctions exponentielles et l'aire entre une courbe et sa réciproque"
country: "Tunisie"
year: 1984
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "exponentielle", "bijection", "integrale"]
---

Soit $f_m$ la fonction définie sur $\mathbb{R}$ par $f_m(x) = \dfrac{m\,e^{2x}}{e^{2x} + 1}$, où $m$ est un paramètre réel de l'intervalle $]0, 2]$.

1. 
   1. Étudier les variations de $f_m$. En déduire l'ensemble $J_m$ image de $\mathbb{R}$ par $f_m$.
   2. Montrer que $f_m$ est une bijection de $\mathbb{R}$ sur $J_m$.
   3. Calculer $f_m^{-1}(x)$ pour $x \in J_m$.
   4. Quelle est l'image de $\mathbb{R}^*_-$ par $f_m$ ?
2. Pour tout réel $x$, on pose $g_m(x) = f_m(x) - x$.
   1. Étudier les variations de $g_m$.
   2. Montrer que l'équation $f_m(x) = x$ admet dans $\mathbb{R}$ une solution unique $x_m$ et que $x_m \in \left]\dfrac m2, m\right[$.
3. Soit $(\mathcal C_m)$ la courbe de $f_m$ dans un repère orthonormé et $(\mathcal C'_m)$ celle de $f_m^{-1}$.
   1. Étudier la position de $(\mathcal C_m)$ et de la droite $\mathcal D : y = x$.
   2. Soit $(\mathcal H_m)$ la partie du plan limitée par $(\mathcal C_m)$, $(\mathcal C'_m)$ et les droites $x = 0$ et $y = 0$. Calculer son aire $\mathcal A$ en fonction de $x_m$ et $m$.
   3. Montrer que $\lim\limits_{m \to 0^+} \dfrac{x_m}{m} = \dfrac12$. En déduire $\lim\limits_{m \to 0^+} \dfrac{\mathcal A}{m^2}$.

---

## Solution

1. 1. $f_m'(x) = \dfrac{2m\,e^{2x}}{(e^{2x} + 1)^2} > 0$ : $f_m$ est strictement croissante. $\lim\limits_{x \to -\infty} f_m(x) = 0$ et, comme $f_m(x) = \dfrac{m}{1 + e^{-2x}}$, $\lim\limits_{x \to +\infty} f_m(x) = m$. Donc $J_m = \,]0, m[$.
   2. $f_m$ est continue et strictement croissante sur $\mathbb{R}$ : c'est une bijection de $\mathbb{R}$ sur $J_m$.
   3. Pour $y \in J_m$ : $y = \dfrac{m\,e^{2x}}{e^{2x} + 1} \iff e^{2x}(m - y) = y \iff x = \dfrac12\ln\dfrac{y}{m - y}$. Donc $f_m^{-1}(x) = \dfrac12\ln\dfrac{x}{m - x}$.
   4. $f_m(0) = \dfrac m2$ et $f_m$ est strictement croissante : $f_m(\mathbb{R}^*_-) = \left]0, \dfrac m2\right[$.
2. 1. $g_m'(x) = f_m'(x) - 1$. Avec $u = e^{2x} > 0$, $\dfrac{u}{(1 + u)^2} \leq \dfrac14$ (car $(1 + u)^2 - 4u = (1 - u)^2 \geq 0$), donc $f_m'(x) \leq \dfrac m2 \leq 1$. Ainsi $g_m' \leq 0$, avec égalité seulement pour $m = 2$ et $x = 0$ : $g_m$ est strictement décroissante, de $+\infty$ (en $-\infty$) à $-\infty$ (en $+\infty$).
   2. $g_m$ est continue et strictement décroissante de $+\infty$ à $-\infty$ : l'équation $g_m(x) = 0$ a une unique solution $x_m$. De plus $g_m\left(\dfrac m2\right) = f_m\left(\dfrac m2\right) - \dfrac m2 > f_m(0) - \dfrac m2 = 0$ et $g_m(m) = f_m(m) - m < 0$ (car $f_m < m$). D'où $x_m \in \left]\dfrac m2, m\right[$.
3. 1. Pour $x < x_m$, $g_m(x) > 0$ : $(\mathcal C_m)$ est au-dessus de $\mathcal D$ ; pour $x > x_m$, elle est en dessous ; elles se coupent au point $(x_m, x_m)$.
   2. $(\mathcal C_m)$ et $(\mathcal C'_m)$ sont symétriques par rapport à $\mathcal D$, donc $\mathcal A = 2\displaystyle\int_0^{x_m}\big(f_m(x) - x\big)\,dx$. Une primitive de $f_m$ est $\dfrac m2\ln(e^{2x} + 1)$, et $f_m(x_m) = x_m$ donne $e^{2x_m} + 1 = \dfrac{m}{m - x_m}$. Donc $\mathcal A = m\ln\dfrac{m}{2(m - x_m)} - x_m^2$.
   3. $\dfrac m2 < x_m < m$ donc $x_m \to 0$, et $\dfrac{x_m}{m} = \dfrac{e^{2x_m}}{e^{2x_m} + 1} \to \dfrac12$. En écrivant $r = \dfrac{x_m}{m}$, on a $r - \dfrac12 = \dfrac{e^{2x_m} - 1}{2(e^{2x_m} + 1)} \sim \dfrac{x_m}{2} \sim \dfrac m4$, donc $\ln\dfrac{1}{2(1 - r)} \sim \dfrac m2$. Ainsi $\dfrac{\mathcal A}{m^2} = \dfrac1m\ln\dfrac{1}{2(1 - r)} - r^2 \to \dfrac12 - \dfrac14 = \dfrac14$. Contrôle numérique : pour $m = 0{,}001$, $\dfrac{\mathcal A}{m^2} \approx 0{,}2501$.
