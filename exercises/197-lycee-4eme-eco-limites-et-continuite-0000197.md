---
uid: "0000197"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 1 (limites 12 à 22)"
title: "Limites de quotients : formes indéterminées et limites à gauche et à droite"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "fonction-rationnelle", "forme-indeterminee", "factorisation", "limite-a-gauche-et-a-droite"]
---

Calculer les limites suivantes :

12. $\displaystyle\lim_{x \to +\infty} \dfrac{x^2 + 5x - 6}{x^2 - 4x + 3}$

13. $\displaystyle\lim_{x \to 1} \dfrac{x^2 + 5x - 6}{x^2 - 4x + 3}$

14. $\displaystyle\lim_{x \to 1} \dfrac{(x+1)(x-1)}{(x+1)(-2x+7)}$

15. $\displaystyle\lim_{x \to -1} \dfrac{(x+1)(x-1)}{(x+1)(-2x+7)}$

16. $\displaystyle\lim_{x \to -\infty} \dfrac{x^2 - 1}{(x+1)(-2x+7)}$

17. $\displaystyle\lim_{x \to +\infty} \dfrac{x^2 - 1}{(x+1)(-2x+7)}$

18. $\displaystyle\lim_{x \to 2^+} \dfrac{x^2 - x - 2}{x^3 - 2x^2}$

19. $\displaystyle\lim_{x \to 2} \dfrac{x - 1}{x - 2}$

20. $\displaystyle\lim_{x \to -1} \dfrac{x - 1}{(x+1)^2}$

21. $\displaystyle\lim_{x \to 0} \dfrac{1 - 3x}{-2x^2 + 3x}$

22. $\displaystyle\lim_{x \to 1} \dfrac{x^2 + 1}{(x-2)(x-1)}$

---

## Solution

**Méthode générale pour un quotient $\dfrac{N(x)}{D(x)}$.** On regarde d'abord les limites de $N$ et de $D$ :

- si $D$ tend vers un nombre $\neq 0$ : on remplace, c'est fini ;

- si $D$ tend vers $0$ et $N$ vers un nombre $\neq 0$ : la limite est infinie, et son **signe** se lit dans le signe de $D$ près du point ;

- si $N$ et $D$ tendent tous deux vers $0$ (forme $\dfrac{0}{0}$) : on factorise pour simplifier ;

- en $\pm\infty$ avec $\dfrac{\infty}{\infty}$ : on factorise le terme de plus haut degré en haut et en bas.

12. $N$ et $D$ tendent vers $+\infty$ : forme indéterminée $\dfrac{\infty}{\infty}$. On factorise $x^2$ :

    $$\dfrac{x^2 + 5x - 6}{x^2 - 4x + 3} = \dfrac{x^2\left(1 + \dfrac{5}{x} - \dfrac{6}{x^2}\right)}{x^2\left(1 - \dfrac{4}{x} + \dfrac{3}{x^2}\right)} = \dfrac{1 + \dfrac{5}{x} - \dfrac{6}{x^2}}{1 - \dfrac{4}{x} + \dfrac{3}{x^2}}$$

    Quand $x \to +\infty$, tous les termes en $\dfrac{1}{x}$ et $\dfrac{1}{x^2}$ tendent vers $0$ : le quotient tend vers $\dfrac{1}{1} = 1$.

    $\displaystyle\lim_{x \to +\infty} \dfrac{x^2 + 5x - 6}{x^2 - 4x + 3} = 1$.

13. En $x = 1$ : $N(1) = 1 + 5 - 6 = 0$ et $D(1) = 1 - 4 + 3 = 0$. Forme $\dfrac{0}{0}$ : $1$ est racine des deux polynômes, donc $(x-1)$ est un facteur commun.

    $x^2 + 5x - 6 = (x-1)(x+6)$ et $x^2 - 4x + 3 = (x-1)(x-3)$.

    Pour $x \neq 1$ : $\dfrac{x^2 + 5x - 6}{x^2 - 4x + 3} = \dfrac{(x-1)(x+6)}{(x-1)(x-3)} = \dfrac{x+6}{x-3}$.

    On remplace : $\dfrac{1 + 6}{1 - 3} = \dfrac{7}{-2}$.

    $\displaystyle\lim_{x \to 1} \dfrac{x^2 + 5x - 6}{x^2 - 4x + 3} = -\dfrac{7}{2}$.

14. Ici, quand $x \to 1$ : $(x+1) \to 2$, $(x-1) \to 0$ et $(-2x+7) \to 5$.

    Le dénominateur tend vers $2 \times 5 = 10 \neq 0$ : il n'y a **pas** de forme indéterminée. On remplace directement :

    $\dfrac{2 \times 0}{2 \times 5} = \dfrac{0}{10} = 0$.

    $\displaystyle\lim_{x \to 1} \dfrac{(x+1)(x-1)}{(x+1)(-2x+7)} = 0$.

15. Quand $x \to -1$ : $(x+1) \to 0$ en haut **et** en bas : forme $\dfrac{0}{0}$. On simplifie par $(x+1)$ (c'est possible car $x \neq -1$ quand on calcule la limite) :

    $$\dfrac{(x+1)(x-1)}{(x+1)(-2x+7)} = \dfrac{x-1}{-2x+7}$$

    On remplace : $\dfrac{-1-1}{-2\times(-1)+7} = \dfrac{-2}{9}$.

    $\displaystyle\lim_{x \to -1} \dfrac{(x+1)(x-1)}{(x+1)(-2x+7)} = -\dfrac{2}{9}$.

16. On développe le dénominateur : $(x+1)(-2x+7) = -2x^2 + 7x - 2x + 7 = -2x^2 + 5x + 7$.

    Forme $\dfrac{\infty}{\infty}$ en $-\infty$. On factorise $x^2$ en haut et en bas :

    $$\dfrac{x^2 - 1}{-2x^2 + 5x + 7} = \dfrac{x^2\left(1 - \dfrac{1}{x^2}\right)}{x^2\left(-2 + \dfrac{5}{x} + \dfrac{7}{x^2}\right)} = \dfrac{1 - \dfrac{1}{x^2}}{-2 + \dfrac{5}{x} + \dfrac{7}{x^2}}$$

    Quand $x \to -\infty$, on obtient $\dfrac{1}{-2}$.

    $\displaystyle\lim_{x \to -\infty} \dfrac{x^2 - 1}{(x+1)(-2x+7)} = -\dfrac{1}{2}$.

17. Même expression qu'en 16, et le calcul est identique (les termes $\dfrac{1}{x}$ et $\dfrac{1}{x^2}$ tendent vers $0$ aussi bien en $+\infty$ qu'en $-\infty$).

    $\displaystyle\lim_{x \to +\infty} \dfrac{x^2 - 1}{(x+1)(-2x+7)} = -\dfrac{1}{2}$.

    *Remarque.* Pour une fonction rationnelle, la limite en $+\infty$ et en $-\infty$ est celle du quotient des termes de plus haut degré : ici $\dfrac{x^2}{-2x^2} = -\dfrac{1}{2}$.

18. En $x = 2$ : $N(2) = 4 - 2 - 2 = 0$ et $D(2) = 8 - 8 = 0$. Forme $\dfrac{0}{0}$ : on factorise.

    $x^2 - x - 2 = (x-2)(x+1)$ (racines $2$ et $-1$) et $x^3 - 2x^2 = x^2(x-2)$.

    Pour $x \neq 2$ : $\dfrac{x^2 - x - 2}{x^3 - 2x^2} = \dfrac{(x-2)(x+1)}{x^2(x-2)} = \dfrac{x+1}{x^2}$.

    On remplace : $\dfrac{2+1}{4} = \dfrac{3}{4}$.

    $\displaystyle\lim_{x \to 2^+} \dfrac{x^2 - x - 2}{x^3 - 2x^2} = \dfrac{3}{4}$.

    *Remarque.* On trouverait la même valeur par la gauche : la limite en $2$ existe.

19. Quand $x \to 2$ : le numérateur $x - 1 \to 1$ et le dénominateur $x - 2 \to 0$. Ce n'est pas $\dfrac{0}{0}$ : la limite est infinie, mais son signe dépend du côté.

    - Pour $x \to 2^+$ : $x - 2 > 0$, donc $x - 2 \to 0^+$ et $\dfrac{x-1}{x-2} \to \dfrac{1}{0^+} = +\infty$.

    - Pour $x \to 2^-$ : $x - 2 < 0$, donc $x - 2 \to 0^-$ et $\dfrac{x-1}{x-2} \to \dfrac{1}{0^-} = -\infty$.

    Les limites à droite et à gauche sont différentes : **la fonction n'a pas de limite en $2$**.

20. Quand $x \to -1$ : le numérateur $x - 1 \to -2$ et le dénominateur $(x+1)^2 \to 0$.

    Un carré est toujours positif : $(x+1)^2 \to 0^+$ des **deux** côtés de $-1$. On a donc « $\dfrac{-2}{0^+}$ ».

    $\displaystyle\lim_{x \to -1} \dfrac{x-1}{(x+1)^2} = -\infty$.

21. Quand $x \to 0$ : le numérateur $1 - 3x \to 1$. Pour le dénominateur, on factorise : $-2x^2 + 3x = x(-2x + 3)$, avec $-2x + 3 \to 3 > 0$.

    Le dénominateur tend vers $0$ avec le signe de $x$.

    - Pour $x \to 0^+$ : dénominateur $\to 0^+$, donc $\dfrac{1-3x}{-2x^2+3x} \to \dfrac{1}{0^+} = +\infty$.

    - Pour $x \to 0^-$ : dénominateur $\to 0^-$, donc la fonction tend vers $\dfrac{1}{0^-} = -\infty$.

    Limites à droite et à gauche différentes : **pas de limite en $0$**.

22. Quand $x \to 1$ : le numérateur $x^2 + 1 \to 2$ et $(x-2) \to -1$. Le dénominateur $(x-2)(x-1)$ tend vers $0$ avec le signe de $-(x-1)$.

    - Pour $x \to 1^+$ : $x - 1 \to 0^+$, donc le dénominateur $\to 0^-$ et la fonction $\to \dfrac{2}{0^-} = -\infty$.

    - Pour $x \to 1^-$ : $x - 1 \to 0^-$, donc le dénominateur $\to 0^+$ et la fonction $\to \dfrac{2}{0^+} = +\infty$.

    Limites à droite et à gauche différentes : **pas de limite en $1$**.

*Retenir.* Une limite « $\dfrac{\text{nombre} \neq 0}{0}$ » est infinie. Si le dénominateur change de signe autour du point (facteur $(x-a)$ à la puissance impaire), les limites à gauche et à droite sont opposées et il n'y a pas de limite en $a$ ; s'il ne change pas de signe (carré), la limite existe et vaut $+\infty$ ou $-\infty$.
