---
uid: "0000160"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Bac 1983 principale, Problème (partie I)"
title: "La fonction x + √(4 − x²), une intégrale à borne 2cos x et une aire"
country: "Tunisie"
year: 1983
professor: null
difficulty: "Moyen"
points: null
tags: ["bac", "integrale-fonction-des-bornes", "aire", "demi-disque", "etude-de-fonction"]
bac: "1983-principale-maths"
---

Le plan est muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$.

Soit $f$ la fonction définie par $f(x) = x + \sqrt{4 - x^2}$.

1. Étudier les variations de $f$ et construire sa courbe représentative $(C_1)$.

2. Soit $g$ la fonction définie par : $\forall x \in [0, \pi]$, $g(x) = \displaystyle\int_0^{2\cos x} \sqrt{4 - t^2}\,dt$.

   a. Montrer que $g$ est dérivable et que $g'(x) = -4\sin^2 x$. Calculer $g\left(\dfrac{\pi}{2}\right)$. En déduire l'expression de $g(x)$ en fonction de $x$.

   b. Soit $\mathcal{A}$ l'aire de l'ensemble des points $M(x, y)$ tels que $-2 \leq x \leq 2$ et $x \leq y \leq f(x)$. Montrer que $\mathcal{A} = g(0) - g(\pi)$ ; en déduire $\mathcal{A}$.

3. On désigne par $(C_2)$ l'image de $(C_1)$ par la symétrie centrale de centre $O$ et on pose $(E) = (C_1) \cup (C_2)$. Construire $(C_2)$ et donner une équation cartésienne de $(E)$.

*Les parties II et III du problème d'origine (applications affines, valeurs propres et réduction de l'équation de $(E)$) ne sont plus au programme ; elles figurent sur la [page du sujet](/bac/1983-principale-maths).*

---

## Solution

1. $f$ est définie et continue sur $[-2, 2]$, dérivable sur $]-2, 2[$ : $f'(x) = 1 - \dfrac{x}{\sqrt{4 - x^2}} = \dfrac{\sqrt{4 - x^2} - x}{\sqrt{4 - x^2}}$.

   $f'(x) > 0 \iff \sqrt{4 - x^2} > x$, vrai pour $x \leq 0$, et pour $x > 0$ équivalent à $4 - x^2 > x^2$, soit $x < \sqrt2$.

   $f$ croît sur $[-2, \sqrt2]$ et décroît sur $[\sqrt2, 2]$ ; $f(-2) = -2$, $f(\sqrt2) = 2\sqrt2$, $f(2) = 2$.

   $\lim\limits_{x \to -2^+} f'(x) = +\infty$ et $\lim\limits_{x \to 2^-} f'(x) = -\infty$ : demi-tangentes verticales aux extrémités.

2. a. $\varphi : t \mapsto \sqrt{4 - t^2}$ est continue sur $[-2, 2]$ ; soit $\Phi$ une primitive. $g(x) = \Phi(2\cos x) - \Phi(0)$ est dérivable et

   $g'(x) = -2\sin x\,\sqrt{4 - 4\cos^2 x} = -2\sin x \cdot 2|\sin x| = -4\sin^2 x$ (car $\sin x \geq 0$ sur $[0, \pi]$).

   $g\left(\frac{\pi}{2}\right) = \displaystyle\int_0^0 = 0$. Comme $-4\sin^2 x = -2 + 2\cos 2x$ :

   $g(x) = \displaystyle\int_{\pi/2}^{x} (-2 + 2\cos 2t)\,dt = \pi - 2x + \sin 2x$.

   b. $f(x) - x = \sqrt{4 - x^2} \geq 0$, donc $\mathcal{A} = \displaystyle\int_{-2}^{2} \sqrt{4 - t^2}\,dt$.

   Or $g(0) = \displaystyle\int_0^2 \sqrt{4 - t^2}\,dt$ et $g(\pi) = \displaystyle\int_0^{-2} \sqrt{4 - t^2}\,dt = -\int_{-2}^0 \sqrt{4 - t^2}\,dt$ : $\mathcal{A} = g(0) - g(\pi)$.

   $\mathcal{A} = \pi - (-\pi) = 2\pi$ unités d'aire.

   *Vérification :* c'est l'aire d'un demi-disque de rayon $2$, $\dfrac12\,\pi \cdot 2^2 = 2\pi$ (la courbe $y = \sqrt{4 - x^2}$ est un demi-cercle).

3. $M(x, y) \in (C_2) \iff (-x, -y) \in (C_1) \iff -y = -x + \sqrt{4 - x^2} \iff y = x - \sqrt{4 - x^2}$.

   $M(x, y) \in (E) \iff y - x = \pm\sqrt{4 - x^2}$, avec $-2 \leq x \leq 2$ $\iff (y - x)^2 = 4 - x^2$.

   $(E) : 2x^2 - 2xy + y^2 = 4$ (une ellipse, comme le montrait la suite du problème).
