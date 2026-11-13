---
uid: "0000220"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 16"
title: "Courbes de f et de f′ : lecture graphique, variations, signe et tangente"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["lecture-graphique", "derivee", "tableau-de-variations", "signe", "tangente"]
---

On a représenté sur la figure suivante les courbes représentatives d'une fonction $f$ et de sa dérivée $f'$ : $C_1$ et $C_2$. On sait que les deux courbes admettent l'axe des abscisses comme asymptote horizontale au voisinage de $\pm\infty$. (Sur le dessin, $C_1$ est en trait plein et $C_2$ en pointillés.)

![Deux courbes C1 en trait plein et C2 en pointillés : C1 monte jusqu'à un maximum d'environ 5,2 vers x = 0,2 puis redescend vers 0 ; C2 est positive à gauche de ce maximum puis négative, avec un minimum d'environ −2,7](/exercises/images/220-lycee-4eme-eco-etude-de-fonctions-0000220.png)

1. Identifier la courbe représentant $f$ et celle représentant $f'$.

2. Déterminer $f(0)$, $f'(0)$, $f(-1)$, $f'(-1)$, $\displaystyle\lim_{x \to \pm\infty} f(x)$.

3. Dresser le tableau de variations de $f$.

4. Donner le tableau de signes de $f$.

5. Donner l'équation de la tangente à la courbe de $f$ au point d'abscisse $-1$. Tracer cette tangente sur la figure.

---

## Solution

**Idée clé.** Le signe de $f'$ dit comment varie $f$ : quand $f'(x) > 0$, $f$ monte ; quand $f'(x) < 0$, $f$ descend ; quand $f'(x) = 0$, la courbe de $f$ a une tangente horizontale (souvent un sommet).

1. On regarde où la courbe $C_1$ a un sommet.

   - $C_1$ atteint son **maximum** vers $x \approx 0{,}2$. À cette abscisse, la tangente à $C_1$ est horizontale, donc la dérivée vaut $0$. Or c'est exactement là que $C_2$ coupe l'axe des abscisses (en passant du positif au négatif).

   - De plus, à gauche de $0{,}2$, $C_1$ monte et $C_2$ est au-dessus de l'axe ; à droite, $C_1$ descend et $C_2$ est en dessous de l'axe.

   Inversement, si $C_2$ représentait $f$, la courbe $C_1$ devrait s'annuler là où $C_2$ a son maximum (vers $x \approx -0{,}4$) : ce n'est pas le cas ($C_1$ y vaut environ $4$).

   Donc **$C_1$ représente $f$** et **$C_2$ représente $f'$**.

2. On lit les ordonnées sur le graphique (avec la précision permise par le quadrillage).

   - $f(0)$ : ordonnée du point de $C_1$ d'abscisse $0$ : $f(0) = 5$.

   - $f'(0)$ : ordonnée du point de $C_2$ d'abscisse $0$ : $f'(0) = 2$.

   - $f(-1)$ : $C_1$ en $x = -1$ : $f(-1) = 1{,}5$.

   - $f'(-1)$ : $C_2$ en $x = -1$ : $f'(-1) = 2{,}5$.

   - L'axe des abscisses est asymptote horizontale : $\displaystyle\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = 0$.

3. On utilise le signe de $f'$ (la courbe $C_2$) :

   - $C_2$ est en dessous de l'axe pour $x \lesssim -5{,}2$ : $f'(x) < 0$, donc $f$ décroît ;

   - $C_2$ est au-dessus de l'axe pour $-5{,}2 \lesssim x \lesssim 0{,}2$ : $f$ croît ;

   - $C_2$ est en dessous de l'axe pour $x \gtrsim 0{,}2$ : $f$ décroît.

   *Pourquoi un « creux » vers $-5{,}2$ ?* Ce creux est presque invisible sur le dessin, mais on peut le justifier : pour $x < -2{,}5$ la courbe $C_1$ est **sous** l'axe ($f < 0$) alors que $f$ tend vers $0$ en $-\infty$. Pour s'approcher de $0$ par en dessous quand $x \to -\infty$, $f$ doit commencer par **descendre** (en lisant de gauche à droite), puis remonter : il y a un minimum, de valeur voisine de $-0{,}2$.

   | $x$ | $-\infty$ | | $\approx -5{,}2$ | | $\approx 0{,}2$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
   | $f(x)$ | $0$ | ↘ | $\approx -0{,}2$ | ↗ | $\approx 5{,}2$ | ↘ | $0$ |

4. On regarde où $C_1$ est au-dessus ou en dessous de l'axe des abscisses. $C_1$ coupe cet axe en $x \approx -2{,}5$, et c'est son seul point d'intersection avec l'axe :

   | $x$ | $-\infty$ | | $\approx -2{,}5$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f(x)$ | | $-$ | $0$ | $+$ | |

   *(À droite de $-2{,}5$, $f$ reste positive : elle monte jusqu'à $5{,}2$ puis redescend vers $0$ sans jamais le toucher.)*

5. La tangente en $a = -1$ a pour équation $y = f'(a)(x - a) + f(a)$. Avec les lectures de la question 2 :

   $y = f'(-1)(x + 1) + f(-1) = 2{,}5(x + 1) + 1{,}5 = 2{,}5x + 4$.

   **Pour la tracer** : elle passe par le point $(-1\,;\,1{,}5)$ de la courbe et par le point $(0\,;\,4)$ (ordonnée à l'origine) ; elle coupe l'axe des abscisses en $x = -1{,}6$.

   ![Les courbes C1 et C2 avec la tangente T à C1 au point d'abscisse −1 d'équation y = 2,5x + 4](/exercises/images/220-lycee-4eme-eco-etude-de-fonctions-0000220-solution.png)

   *Remarque.* Les courbes de ce dessin ont été retracées avec la fonction $f(x) = \dfrac{2x + 5}{x^2 + 1}$, dont la dérivée est $f'(x) = \dfrac{-2(x^2 + 5x - 1)}{(x^2 + 1)^2}$. On vérifie que $f(0) = 5$, $f'(0) = 2$, $f(-1) = \dfrac{3}{2}$, $f'(-1) = \dfrac{5}{2}$, que $f$ s'annule en $-\dfrac{5}{2}$ et tend vers $0$ en $\pm\infty$ : toutes les lectures ci-dessus sont cohérentes avec cette formule.
