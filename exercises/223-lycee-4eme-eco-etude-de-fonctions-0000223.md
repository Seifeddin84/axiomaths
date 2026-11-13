---
uid: "0000223"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 19"
title: "Polynôme auxiliaire et étude de f(x) = x − 2/(x² + 1)"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["polynome-auxiliaire", "fonction-rationnelle", "asymptote-oblique", "tableau-de-variations", "theoreme-des-valeurs-intermediaires"]
---

1. Soit le polynôme $P$ défini sur $\mathbb{R}$ par $P(x) = x^3 - x^2 + 3x + 1$.

   a. Calculer $\displaystyle\lim_{x \to -\infty} P(x)$ et $\displaystyle\lim_{x \to +\infty} P(x)$.

   b. Calculer $P'(x)$ et dresser le tableau de variations de $P$.

   c. Démontrer que l'équation $P(x) = 0$ admet une unique solution $\alpha$ sur $\mathbb{R}$ et vérifier que $-1 < \alpha < 0$.

   d. Déterminer le signe de $P(x)$ suivant les valeurs de $x$.

2. Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x - \dfrac{2}{x^2 + 1}$.

   a. Calculer $\displaystyle\lim_{x \to -\infty} f(x)$ et $\displaystyle\lim_{x \to +\infty} f(x)$.

   b. Montrer que la droite $\Delta : y = x$ est une asymptote oblique à $\mathcal{C}_f$.

   c. Calculer $f'(x)$ et l'écrire sous la forme $f'(x) = \dfrac{(x + 1)P(x)}{(x^2 + 1)^2}$.

   d. Dresser alors le tableau de variations de la fonction $f$.

---

## Solution

### Partie 1 : le polynôme $P$

1. a. En $\pm\infty$, un polynôme se comporte comme son terme de plus haut degré, ici $x^3$ :

   $\displaystyle\lim_{x \to -\infty} P(x) = \lim_{x \to -\infty} x^3 = -\infty$ et $\displaystyle\lim_{x \to +\infty} P(x) = \lim_{x \to +\infty} x^3 = +\infty$.

   b. $P'(x) = 3x^2 - 2x + 3$.

   C'est un trinôme du second degré. Son discriminant est $\Delta = (-2)^2 - 4 \times 3 \times 3 = 4 - 36 = -32 < 0$ : il **n'a pas de racine**, donc il garde le signe de son coefficient dominant $3 > 0$.

   $P'(x) > 0$ pour tout réel $x$ : $P$ est **strictement croissante** sur $\mathbb{R}$.

   | $x$ | $-\infty$ | | $+\infty$ |
   |---|---|---|---|
   | $P'(x)$ | | $+$ | |
   | $P(x)$ | $-\infty$ | ↗ | $+\infty$ |

   c. $P$ est continue (polynôme), **strictement croissante** sur $\mathbb{R}$, et prend toutes les valeurs de $-\infty$ à $+\infty$. Donc chaque réel, en particulier $0$, a **exactement un** antécédent : l'équation $P(x) = 0$ admet une unique solution $\alpha$.

   Pour la situer :

   - $P(-1) = -1 - 1 - 3 + 1 = -4 < 0$ ;

   - $P(0) = 1 > 0$.

   $P$ change de signe entre $-1$ et $0$ : $-1 < \alpha < 0$ (en fait $\alpha \approx -0{,}30$).

   d. $P$ est croissante et s'annule en $\alpha$ : elle est négative avant $\alpha$ et positive après.

   | $x$ | $-\infty$ | | $\alpha$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $P(x)$ | | $-$ | $0$ | $+$ | |

### Partie 2 : la fonction $f$

2. a. $\dfrac{2}{x^2 + 1}$ tend vers $0$ quand $x \to \pm\infty$ (le dénominateur devient immense), donc $f(x)$ se comporte comme $x$ :

   $\displaystyle\lim_{x \to -\infty} f(x) = -\infty$ et $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

   b. On étudie l'écart entre la courbe et la droite $\Delta : y = x$ :

   $f(x) - x = -\dfrac{2}{x^2 + 1}$.

   Cet écart tend vers $0$ quand $x \to \pm\infty$ : $\Delta$ est **asymptote oblique** à $\mathcal{C}_f$ en $-\infty$ et en $+\infty$.

   *Position.* $-\dfrac{2}{x^2 + 1} < 0$ pour tout $x$ : $\mathcal{C}_f$ est toujours **en dessous** de $\Delta$.

   c. $f$ est dérivable sur $\mathbb{R}$. On dérive $x$, puis $-\dfrac{2}{x^2 + 1}$ avec $\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$ pour $v = x^2 + 1$, $v' = 2x$ :

   $\left(-\dfrac{2}{x^2 + 1}\right)' = -2 \times \left(-\dfrac{2x}{(x^2 + 1)^2}\right) = \dfrac{4x}{(x^2 + 1)^2}$.

   $f'(x) = 1 + \dfrac{4x}{(x^2 + 1)^2} = \dfrac{(x^2 + 1)^2 + 4x}{(x^2 + 1)^2}$.

   On développe le numérateur : $(x^2 + 1)^2 + 4x = x^4 + 2x^2 + 1 + 4x = x^4 + 2x^2 + 4x + 1$.

   On développe maintenant la forme proposée : $(x + 1)P(x) = (x + 1)(x^3 - x^2 + 3x + 1)$

   $= x^4 - x^3 + 3x^2 + x + x^3 - x^2 + 3x + 1 = x^4 + 2x^2 + 4x + 1$.

   Les deux numérateurs sont égaux :

   $f'(x) = \dfrac{(x + 1)P(x)}{(x^2 + 1)^2}$.

   d. Le dénominateur $(x^2 + 1)^2$ est positif : le signe de $f'(x)$ est celui du produit $(x + 1)P(x)$. On fait un tableau de signes avec $P$ de la partie 1 (rappel : $-1 < \alpha < 0$) :

   | $x$ | $-\infty$ | | $-1$ | | $\alpha$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $x + 1$ | | $-$ | $0$ | $+$ | $+$ | $+$ | |
   | $P(x)$ | | $-$ | $-$ | $-$ | $0$ | $+$ | |
   | $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |

   (Le signe de $f'$ est le produit des deux lignes : $(-)(-) = +$, $(+)(-) = -$, $(+)(+) = +$.)

   **Valeurs aux points critiques.**

   - $f(-1) = -1 - \dfrac{2}{1 + 1} = -2$ ;

   - $f(\alpha) = \alpha - \dfrac{2}{\alpha^2 + 1} \approx -0{,}30 - \dfrac{2}{1{,}09} \approx -2{,}13$ (valeur approchée).

   | $x$ | $-\infty$ | | $-1$ | | $\alpha$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
   | $f(x)$ | $-\infty$ | ↗ | $-2$ | ↘ | $\approx -2{,}13$ | ↗ | $+\infty$ |

   *Remarque.* Le maximum local $f(-1) = -2$ et le minimum local $f(\alpha) \approx -2{,}13$ sont très proches : la courbe a un « petit pli » entre $x = -1$ et $x = \alpha$ avant de suivre l'asymptote $\Delta$.
