---
uid: "0000218"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 13"
title: "Fonction rationnelle (10x + 4)/(5x² + 1), tangente et position relative"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["fonction-rationnelle", "derivee", "tangente", "position-relative", "tableau-de-variations"]
---

Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \dfrac{10x + 4}{5x^2 + 1}$.

1. Déterminer le domaine de définition de $f$.

2. Montrer que $f$ est dérivable et calculer $f'(x)$ pour tout $x$ appartenant à son domaine de définition.

3. Dresser le tableau de variations de $f$.

4. Donner l'équation de la tangente $T$ à la courbe représentant $f$ au point $A$ d'abscisse $0$.

5. Étudier la position relative de cette tangente et de la courbe représentant la fonction.

---

## Solution

1. $f$ est un quotient : elle existe quand le dénominateur est **non nul**. Or pour tout réel $x$, $x^2 \geq 0$, donc $5x^2 + 1 \geq 1 > 0$ : le dénominateur ne s'annule jamais.

   Le domaine de définition de $f$ est $\mathbb{R}$.

2. $f$ est le quotient de deux polynômes (dérivables sur $\mathbb{R}$), le dénominateur ne s'annulant pas : **$f$ est dérivable sur $\mathbb{R}$**.

   On utilise $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ avec :

   - $u(x) = 10x + 4$, donc $u'(x) = 10$ ;

   - $v(x) = 5x^2 + 1$, donc $v'(x) = 10x$.

   $f'(x) = \dfrac{10(5x^2 + 1) - (10x + 4) \times 10x}{(5x^2 + 1)^2}$.

   On développe le numérateur :

   $10(5x^2 + 1) - 10x(10x + 4) = 50x^2 + 10 - 100x^2 - 40x = -50x^2 - 40x + 10$.

   On factorise : $-50x^2 - 40x + 10 = -10(5x^2 + 4x - 1)$. Le trinôme $5x^2 + 4x - 1$ a pour discriminant $16 + 20 = 36$ et pour racines $\dfrac{-4 \pm 6}{10}$, c'est-à-dire $\dfrac{1}{5}$ et $-1$. Donc $5x^2 + 4x - 1 = (5x - 1)(x + 1)$ et :

   $f'(x) = \dfrac{-10(5x - 1)(x + 1)}{(5x^2 + 1)^2}$.

3. **Signe de $f'$.** Le dénominateur $(5x^2+1)^2$ est strictement positif : le signe de $f'(x)$ est celui de $-10(5x-1)(x+1)$.

   $(5x-1)(x+1)$ est un trinôme de coefficient dominant positif, donc négatif entre ses racines $-1$ et $\dfrac{1}{5}$, positif à l'extérieur. Avec le facteur $-10$, tout s'inverse :

   - $f'(x) < 0$ pour $x < -1$ et pour $x > \dfrac{1}{5}$ ;

   - $f'(x) > 0$ pour $-1 < x < \dfrac{1}{5}$.

   **Limites.** En $\pm\infty$, une fraction rationnelle se comporte comme le quotient des termes de plus haut degré : $\dfrac{10x}{5x^2} = \dfrac{2}{x} \to 0$. Donc $\displaystyle\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = 0$.

   **Valeurs aux points critiques.**

   - $f(-1) = \dfrac{-10 + 4}{5 + 1} = \dfrac{-6}{6} = -1$ ;

   - $f\left(\dfrac{1}{5}\right) = \dfrac{2 + 4}{\dfrac{5}{25} + 1} = \dfrac{6}{\dfrac{6}{5}} = 5$.

   | $x$ | $-\infty$ | | $-1$ | | $\dfrac{1}{5}$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
   | $f(x)$ | $0$ | ↘ | $-1$ | ↗ | $5$ | ↘ | $0$ |

4. La tangente en $0$ a pour équation $y = f'(0)(x - 0) + f(0)$.

   - $f(0) = \dfrac{4}{1} = 4$, donc $A(0\,;\,4)$ ;

   - $f'(0) = \dfrac{-10 \times (-1) \times 1}{1^2} = 10$.

   $T : y = 10x + 4$.

5. On étudie le signe de la différence $f(x) - (10x + 4)$ : s'il est positif, la courbe est au-dessus de $T$, s'il est négatif elle est en dessous.

   On met sur le même dénominateur :

   $f(x) - (10x + 4) = \dfrac{(10x + 4) - (10x + 4)(5x^2 + 1)}{5x^2 + 1}$.

   On met $(10x + 4)$ en facteur au numérateur :

   $(10x + 4)\bigl(1 - (5x^2 + 1)\bigr) = (10x + 4)(-5x^2) = -5x^2 \times 2(5x + 2) = -10x^2(5x + 2)$.

   $f(x) - (10x + 4) = \dfrac{-10x^2(5x + 2)}{5x^2 + 1}$.

   Le dénominateur est positif, $-10x^2 \leq 0$, donc le signe dépend de $x^2$ et de $(5x + 2)$ :

   | $x$ | $-\infty$ | | $-\dfrac{2}{5}$ | | $0$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f(x) - (10x+4)$ | | $+$ | $0$ | $-$ | $0$ | $-$ | |
   | Position | | $\mathcal{C}_f$ au-dessus de $T$ | | $\mathcal{C}_f$ en dessous de $T$ | | $\mathcal{C}_f$ en dessous de $T$ | |

   Conclusion :

   - pour $x < -\dfrac{2}{5}$ : $\mathcal{C}_f$ est **au-dessus** de $T$ ;

   - pour $x > -\dfrac{2}{5}$ et $x \neq 0$ : $\mathcal{C}_f$ est **en dessous** de $T$ ;

   - en $x = 0$ : c'est le point de tangence $A(0\,;\,4)$ ; la courbe reste en dessous de $T$ de part et d'autre, **$T$ ne traverse pas la courbe** en $A$ ;

   - en $x = -\dfrac{2}{5}$ : $T$ **coupe** la courbe au point $B\left(-\dfrac{2}{5}\,;\,0\right)$ (car $f\left(-\dfrac{2}{5}\right) = 0$ et $10 \times \left(-\dfrac{2}{5}\right) + 4 = 0$), et la position change.

   ![Courbe de f avec ses extrema (−1, −1) et (1/5, 5), le point A(0, 4) et la tangente T d'équation y = 10x + 4 qui recoupe la courbe au point B(−2/5, 0)](/exercises/images/218-lycee-4eme-eco-etude-de-fonctions-0000218.png)
