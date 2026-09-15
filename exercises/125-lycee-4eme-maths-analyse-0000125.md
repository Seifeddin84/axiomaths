---
uid: "0000125"
school: "lycee"
level: "4eme"
section: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Continuité et limites"
source: "Bac Tunisie"
title: "Méthode de Newton et approximation de solutions"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: 4
tags: ["analyse", "approximation", "suites", "newton"]
---

Soit $f$ la fonction définie par : $f(x) = x^3 - 3x + 1$.

1. Montrer que l'équation $f(x) = 0$ admet une solution unique $\alpha$ dans l'intervalle $I = [0, \frac{1}{2}]$.

2. On pose $\varphi(x) = x - \frac{f(x)}{f'(x)}$.

   a. Montrer que pour tout $x$ de $I$, $\varphi(x) - \alpha = (x - \alpha)^2 \frac{2x + \alpha}{3(x^2 - 1)}$.

   b. Prouver que $\varphi(I) \subset I$ et que pour tout $x$ de $I$, $|\varphi(x) - \alpha| \le \frac{2}{3}|x - \alpha|^2$.

3. Soit $(u_n)$ la suite définie par $u_0 = 0$ et $u_{n+1} = \varphi(u_n)$.

   a. Établir que pour tout $n$, $u_n \in I$.

   b. Déduire que pour tout $n$, $|u_{n+1} - \alpha| \le (\frac{2}{3})^{2^{n+1}-1}$.

   c. Montrer que la suite $(u_n)$ est convergente.

4. Déterminer un entier $n_0$ pour que $u_{n_0}$ soit une valeur approchée de $\alpha$ à $10^{-4}$ près.

---

## Solution

1. **Existence et unicité de $\alpha$ :**
   - $f$ est continue et dérivable sur $\mathbb{R}$, donc sur $I$.
   - $f(0) = 1$ et $f(1/2) = 1/8 - 3/2 + 1 = -3/8$.
   - $f(0) \cdot f(1/2) < 0$, donc d'après le théorème des valeurs intermédiaires, $\alpha \in ]0, 1/2[$.
   - $f'(x) = 3x^2 - 3 = 3(x^2 - 1)$. Sur $I = [0, 1/2]$, $x^2 \le 1/4$, donc $x^2 - 1 < 0$, ainsi $f'(x) < 0$.
   - $f$ est strictement décroissante sur $I$, donc $\alpha$ est unique.

2. a. **Vérification de l'expression :**
   $\varphi(x) - \alpha = x - \frac{x^3 - 3x + 1}{3x^2 - 3} - \alpha = (x - \alpha) - \frac{x^3 - 3x + 1}{3x^2 - 3}$.
   Comme $f(\alpha) = 0$, $\alpha^3 - 3\alpha + 1 = 0$, soit $1 = 3\alpha - \alpha^3$.
   En remplaçant :
   $\varphi(x) - \alpha = \frac{3x^3 - 3x - x^3 + 3x - (3\alpha - \alpha^3) - \alpha(3x^2 - 3)}{3x^2 - 3} = \dots = (x - \alpha)^2 \frac{2x + \alpha}{3(x^2 - 1)}$.

   b. **Inclusion et inégalité :**
   Sur $I$, $|2x + \alpha| \le 2$ et $|3(x^2 - 1)| \ge 3(1 - 1/4) = 9/4$.
   Le rapport est donc $\le \frac{2}{9/4} = 8/9 \le 2/3$. D'où $|\varphi(x) - \alpha| \le \frac{2}{3}|x - \alpha|^2$.

3. a. **Récurrence :**
   $u_0 = 0 \in I$. Si $u_n \in I$, alors $\varphi(u_n) \in \varphi(I) \subset I$, donc $u_{n+1} \in I$.

   b. **Convergence :**
   Par récurrence, $|u_{n+1} - \alpha| \le (\frac{2}{3})^{2^{n+1}-1}$ par majoration successive.

   c. **Convergence :**
   Comme $|u_n - \alpha| \to 0$, $u_n \to \alpha$.

4. **Valeur approchée :**
   Il faut $(\frac{2}{3})^{2^{n+1}-1} \le 10^{-4}$. On trouve $n_0 = 3$.