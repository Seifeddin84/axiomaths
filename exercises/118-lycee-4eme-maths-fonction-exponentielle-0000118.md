---
uid: "0000118"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction exponentielle"
source: "Arthur"
title: "Étude d'une fonction avec exponentielle et calcul d'aire"
country: "Tunisie"
year: null
professor: "M. Arthur"
difficulty: "Moyen"
points: null
tags: ["etude-de-fonction", "exponentielle", "integration"]
---

On considère la fonction $f$ définie sur $\mathbb{R}$ par :
$f(x) = x^2e^{1-x}$ où $(C)$ sa courbe dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d'unité $1\text{ cm}$.

**Partie A :**

1. Calculer les limites aux bornes du $D_f$

2. a. Montrer que $\forall x \in \mathbb{R}$, $f'(x) = x(2-x)e^{1-x}$

   b. Dresser le tableau de variation de $f$.

3. Étudier la branche infinie à $(C)$ en $-\infty$.

4. Tracer la courbe $(C)$.

**Partie B :**

Soit $g$ la restriction de $f$ sur l'intervalle $]-\infty ; 0]$

1. Montrer que $g$ admet une bijection réciproque $g^{-1}$ sur $]-\infty ; 0]$ vers l'intervalle $J$ que l'on précisera.

2. Dresser le tableau de variation de $g^{-1}$

3. Calculer $g(-1)$ puis $(g^{-1})'(e^2)$

4. Tracer la courbe $(C')$ de $g^{-1}$ sur le même repère que $(C)$.

**Partie C :**

On pose $I(\lambda) = \int_{0}^{\lambda} x e^{1-x} dx \quad (\lambda > 0)$

1. À l'aide d'une intégration par partie, montrer que $I(\lambda) = (-\lambda - 1)e^{1-\lambda} + e$

2. Soit $A(\lambda)$, l'aire du domaine plan limitée par la courbe $(C)$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = \lambda$.

   a. À l'aide d'une intégration par partie, montrer que $A(\lambda) = [2e + 2(-\lambda - 1)e^{1-\lambda} - \lambda^2e^{1-\lambda}]\text{ cm}^2$

   b. Calculer $\lim_{\lambda \to +\infty} A(\lambda)$

---

## Solution

**Partie A :**

1. **Limites aux bornes :**
   $D_f = \mathbb{R}$.
   $\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x^2 e^{1-x} = +\infty$ (car $x^2 \to +\infty$ et $e^{1-x} \to +\infty$).
   $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x^2 e^{1-x} = \lim_{x \to +\infty} e \frac{x^2}{e^x} = 0$.
   La droite d'équation $y = 0$ est une asymptote horizontale à $(C)$ en $+\infty$.

2. a. **Dérivée :**
   Pour tout $x \in \mathbb{R}$, $f'(x) = 2x e^{1-x} + x^2(-e^{1-x}) = (2x - x^2)e^{1-x} = x(2-x)e^{1-x}$.

   b. **Tableau de variation :**
   Puisque $e^{1-x} > 0$, le signe de $f'(x)$ est celui de $x(2-x)$.
   Les racines sont $0$ et $2$. $f'(x) < 0$ sur $]-\infty; 0[ \cup ]2; +\infty[$ et $f'(x) > 0$ sur $]0; 2[$.
   $f(0) = 0$ et $f(2) = 4e^{-1}$.
   $f$ est décroissante sur $]-\infty; 0]$, croissante sur $[0; 2]$, et décroissante sur $[2; +\infty[$.

3. **Branche infinie en $-\infty$ :**
   $\lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} x e^{1-x} = -\infty$.
   $(C)$ admet une branche parabolique de direction l'axe des ordonnées $(O, \vec{j})$ au voisinage de $-\infty$.

4. **Tracé :**
   La courbe passe par l'origine $(0,0)$, admet un maximum local en $(2, 4/e)$ et décroît asymptotiquement vers $0$ en $+\infty$.

**Partie B :**

1. **Bijection :**
   Sur $]-\infty; 0]$, la fonction $g$ est continue et strictement décroissante. Elle réalise donc une bijection de $]-\infty; 0]$ vers $J = f(]-\infty; 0]) = [0; +\infty[$.

2. **Tableau de variation de $g^{-1}$ :**
   $g^{-1}$ varie dans le même sens que $g$, elle est donc strictement décroissante sur $[0; +\infty[$, de $+\infty$ à $0$.

3. **Calculs :**
   $g(-1) = (-1)^2 e^{1-(-1)} = e^2$.
   Par conséquent, $g^{-1}(e^2) = -1$.
   $(g^{-1})'(e^2) = \frac{1}{g'(-1)} = \frac{1}{-1(2 - (-1))e^2} = \frac{1}{-3e^2} = -\frac{1}{3}e^{-2}$.

4. **Tracé de $(C')$ :**
   $(C')$ est le symétrique de la portion de $(C)$ (pour $x \le 0$) par rapport à la droite d'équation $y = x$.

**Partie C :**

1. **Calcul de $I(\lambda)$ :**
   $I(\lambda) = \int_{0}^{\lambda} x e^{1-x} dx$.
   On pose $u(x) = x \implies u'(x) = 1$
   $v'(x) = e^{1-x} \implies v(x) = -e^{1-x}$.
   Par intégration par parties :
   $I(\lambda) = [-x e^{1-x}]_{0}^{\lambda} - \int_{0}^{\lambda} -e^{1-x} dx = -\lambda e^{1-\lambda} - [e^{1-x}]_{0}^{\lambda} = -\lambda e^{1-\lambda} - (e^{1-\lambda} - e)$.
   $I(\lambda) = (-\lambda - 1)e^{1-\lambda} + e$.

2. a. **Calcul de $A(\lambda)$ :**
   $A(\lambda) = \int_{0}^{\lambda} x^2 e^{1-x} dx$ (exprimée en unités d'aire, avec 1 u.a. = $1\text{ cm}^2$).
   On pose $u(x) = x^2 \implies u'(x) = 2x$
   $v'(x) = e^{1-x} \implies v(x) = -e^{1-x}$.
   Par IPP :
   $A(\lambda) = [-x^2 e^{1-x}]_{0}^{\lambda} + \int_{0}^{\lambda} 2x e^{1-x} dx = -\lambda^2 e^{1-\lambda} + 2I(\lambda)$.
   En remplaçant $I(\lambda)$ :
   $A(\lambda) = -\lambda^2 e^{1-\lambda} + 2((-\lambda - 1)e^{1-\lambda} + e) = 2e + 2(-\lambda - 1)e^{1-\lambda} - \lambda^2 e^{1-\lambda}$.

   b. **Limite de $A(\lambda)$ :**
   $\lim_{\lambda \to +\infty} \lambda e^{1-\lambda} = 0$ et $\lim_{\lambda \to +\infty} \lambda^2 e^{1-\lambda} = 0$ (croissances comparées).
   Donc $\lim_{\lambda \to +\infty} A(\lambda) = 2e \text{ cm}^2$.