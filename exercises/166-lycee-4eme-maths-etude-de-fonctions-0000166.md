---
uid: "0000166"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Etude de Fonctions"
source: "Bac 1977 principale, Ex. 1"
title: "cos³x − 3cos x + 2 : bijection, centre de symétrie et aire"
country: "Tunisie"
year: 1977
professor: null
difficulty: "Facile"
points: 4
tags: ["bac", "fonction-trigonometrique", "bijection", "centre-de-symetrie", "aire"]
bac: "1977-principale-maths"
---

Soit la fonction $f : [0, \pi] \to \mathbb{R}$, $x \longmapsto \cos^3 x - 3\cos x + 2$.

1. a. Étudier les variations de la fonction $f$ et montrer que $f$ est une bijection de $[0, \pi]$ sur un intervalle que l'on déterminera.

   b. Construire dans un repère orthonormé la courbe représentative $(C)$ de $f$ ; montrer que le point $I$ de $(C)$ d'abscisse $\dfrac{\pi}{2}$ est centre de symétrie de $(C)$ ; tracer la tangente en $I$ à $(C)$.

2. Calculer l'aire de l'ensemble des points $M(x, y)$ tels que $0 \leq x \leq \pi$ et $0 \leq y \leq f(x)$.

---

## Solution

1. a. $f'(x) = -3\cos^2 x\sin x + 3\sin x = 3\sin x\left(1 - \cos^2 x\right) = 3\sin^3 x$.

   $f'(x) > 0$ sur $]0, \pi[$ et $f'(0) = f'(\pi) = 0$ : $f$ est strictement croissante sur $[0, \pi]$.

   $f(0) = 1 - 3 + 2 = 0$ et $f(\pi) = -1 + 3 + 2 = 4$. $f$ étant continue et strictement croissante, c'est une bijection de $[0, \pi]$ sur $[0, 4]$.

   b. $f\left(\frac{\pi}{2}\right) = 2$ : $I\left(\frac{\pi}{2}, 2\right)$. Pour $x \in [0, \pi]$, $\pi - x \in [0, \pi]$ et $\cos(\pi - x) = -\cos x$, donc

   $f(\pi - x) + f(x) = \left(-\cos^3 x + 3\cos x + 2\right) + \left(\cos^3 x - 3\cos x + 2\right) = 4 = 2 \times 2$ : $I$ est centre de symétrie de $(C)$.

   $f'\left(\frac{\pi}{2}\right) = 3$ : tangente en $I$ : $y = 3\left(x - \dfrac{\pi}{2}\right) + 2$. Tangentes horizontales en $(0, 0)$ et $(\pi, 4)$.

2. $f \geq 0$ sur $[0, \pi]$, donc $\mathcal{A} = \displaystyle\int_0^\pi f(x)\,dx$.

   Par la symétrie de centre $I$, la partie sous la courbe et la partie au-dessus (dans le rectangle $[0, \pi] \times [0, 4]$) se correspondent : $\mathcal{A} = \dfrac12 \cdot 4\pi = 2\pi$.

   *Calcul direct :* $\displaystyle\int_0^\pi \cos x\,dx = 0$ et $\displaystyle\int_0^\pi \cos^3 x\,dx = \int_0^\pi \cos x\left(1 - \sin^2 x\right)dx = \left[\sin x - \dfrac{\sin^3 x}{3}\right]_0^\pi = 0$, donc $\mathcal{A} = 2\pi$.
