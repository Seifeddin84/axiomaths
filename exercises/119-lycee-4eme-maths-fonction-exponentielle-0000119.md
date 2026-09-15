---
uid: "0000119"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction exponentielle"
source: "MS Maths"
title: "Étude d'une fonction exponentielle et asymptote oblique"
country: "Tunisie"
year: null
professor: "M. MS Maths"
difficulty: "Moyen"
points: null
tags: ["etude-de-fonction", "exponentielle", "asymptote", "aire"]
---

Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = x + e^{-x} - 1$.
On désigne par $(C)$ la courbe représentative de $f$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

1. a. Calculer $\lim_{x \to -\infty} f(x)$ et $\lim_{x \to +\infty} f(x)$.

   b. Calculer $\lim_{x \to +\infty} \frac{f(x)}{x}$ puis interpréter graphiquement le résultat.

   c. Montrer que la droite $\Delta : y = x - 1$ est une asymptote oblique à $(C)$ au voisinage de $+\infty$.

   d. Etudier la position relative de $(C)$ et $\Delta$.

2. a. Montrer que pour tout réel $x$, $f'(x) = 1 - e^{-x}$.

   b. Etudier le signe de $f'(x)$ et dresser le tableau de variation de $f$.

3. a. Tracer la courbe $(C)$ et $\Delta$.

   b. Calculer l'aire $A$ de la région limitée par la courbe $(C)$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = 1$.

   c. Calculer l'aire $A$ de la région limitée par la courbe $(C)$, $\Delta$ et les droites d'équations $x = 0$ et $x = 1$.

---

## Solution

1. a. **Limites en l'infini :**
   - $\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x + e^{-x} - 1 = \lim_{x \to -\infty} e^{-x}(x e^x + 1) - 1 = +\infty$.
   - $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x + e^{-x} - 1 = +\infty + 0 - 1 = +\infty$.

   b. **Direction asymptotique :**
   $\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{x + e^{-x} - 1}{x} = \lim_{x \to +\infty} 1 + \frac{e^{-x}}{x} - \frac{1}{x} = 1 + 0 - 0 = 1$.
   Interprétation : La courbe $(C)$ admet une direction asymptotique de coefficient directeur $1$ au voisinage de $+\infty$.

   c. **Asymptote oblique :**
   $\lim_{x \to +\infty} (f(x) - y_{\Delta}) = \lim_{x \to +\infty} (x + e^{-x} - 1 - (x - 1)) = \lim_{x \to +\infty} e^{-x} = 0$.
   Donc la droite $\Delta$ d'équation $y = x - 1$ est une asymptote oblique à $(C)$ en $+\infty$.

   d. **Position relative :**
   $f(x) - y_{\Delta} = e^{-x}$.
   Pour tout $x \in \mathbb{R}$, $e^{-x} > 0$.
   Donc la courbe $(C)$ est au-dessus de la droite $\Delta$ sur $\mathbb{R}$.

2. a. **Dérivée :**
   $f(x) = x + e^{-x} - 1 \implies f'(x) = 1 - e^{-x}$.

   b. **Signe de la dérivée et tableau de variation :**
   $f'(x) \ge 0 \iff 1 - e^{-x} \ge 0 \iff e^{-x} \le 1 \iff -x \le 0 \iff x \ge 0$.
   $f'(x) < 0$ pour $x < 0$ et $f'(x) > 0$ pour $x > 0$.
   $f(0) = 0 + e^0 - 1 = 0$.
   La fonction $f$ est strictement décroissante sur $]-\infty; 0]$ et strictement croissante sur $[0; +\infty[$. Elle atteint un minimum global en $0$ valant $0$.

3. a. **Tracé :**
   La courbe passe par l'origine, est tangente à l'axe des abscisses en ce point (minimum), et se rapproche de la droite $\Delta : y = x - 1$ pour les grands $x$ positifs.

   b. **Calcul de l'aire avec l'axe des abscisses :**
   Sur $[0; 1]$, $f(x) \ge 0$. L'aire cherchée est :
   $A = \int_{0}^{1} f(x) dx = \int_{0}^{1} (x + e^{-x} - 1) dx$
   $A = \left[ \frac{1}{2}x^2 - e^{-x} - x \right]_{0}^{1} = \left(\frac{1}{2} - e^{-1} - 1\right) - (0 - 1 - 0) = -\frac{1}{2} - \frac{1}{e} + 1 = \frac{1}{2} - \frac{1}{e}$ unités d'aire.

   c. **Calcul de l'aire entre $(C)$ et $\Delta$ :**
   Comme $(C)$ est au-dessus de $\Delta$, l'aire cherchée est :
   $A' = \int_{0}^{1} (f(x) - (x - 1)) dx = \int_{0}^{1} e^{-x} dx$
   $A' = \left[ -e^{-x} \right]_{0}^{1} = -e^{-1} - (-1) = 1 - \frac{1}{e}$ unités d'aire.