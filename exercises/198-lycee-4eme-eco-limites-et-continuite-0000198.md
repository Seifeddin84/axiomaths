---
uid: "0000198"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 1 (limites 23 à 31)"
title: "Limites avec racines carrées : forme conjuguée et factorisation"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "racine-carree", "expression-conjuguee", "forme-indeterminee", "limites-en-l-infini"]
---

Calculer les limites suivantes :

23. $\displaystyle\lim_{x \to -\infty} \sqrt{x^2 - 1 + \dfrac{1}{x}}$

24. $\displaystyle\lim_{x \to \pm\infty} \sqrt{9x^2 - 8x + 6} - x$

25. $\displaystyle\lim_{x \to \pm\infty} \sqrt{x^2 - 8x + 6} - x$

26. $\displaystyle\lim_{x \to \pm\infty} \sqrt{x^2 + 3} + x$

27. $\displaystyle\lim_{x \to \pm\infty} \sqrt{x^2 - 1} - 2x$

28. $\displaystyle\lim_{x \to \pm\infty} 2x - \sqrt{4x^2 - x}$

29. $\displaystyle\lim_{x \to \pm\infty} \dfrac{\sqrt{x^2 - 1} + x}{x}$

30. $\displaystyle\lim_{x \to 3} \dfrac{2 - \sqrt{x+1}}{2x - 6}$

31. $\displaystyle\lim_{x \to 2} \dfrac{\sqrt{x+1} - 1}{x - 2}$

---

## Solution

**Les outils.**

- Si $\sqrt{u(x)}$ est suivi d'une soustraction ou d'une addition avec un terme en $x$, on regarde d'abord si l'on tombe sur $+\infty - \infty$. Si **non** (deux $+\infty$ qui s'ajoutent, par exemple), la limite est immédiate.

- Si **oui**, on utilise la **quantité conjuguée** : $a - b = \dfrac{a^2 - b^2}{a + b}$ (et de même pour $a + b$). Cela fait disparaître la racine au numérateur.

- On se souvient que $\sqrt{x^2} = |x|$ : c'est $x$ si $x > 0$ et $-x$ si $x < 0$. Cela compte surtout en $-\infty$.

23. Quand $x \to -\infty$ : $x^2 \to +\infty$, $-1$ est constant et $\dfrac{1}{x} \to 0$. Donc ce qui est sous la racine tend vers $+\infty$.

    $\displaystyle\lim_{x \to -\infty} \sqrt{x^2 - 1 + \dfrac{1}{x}} = +\infty$.

24. **En $+\infty$.** $\sqrt{9x^2 - 8x + 6}$ tend vers $+\infty$ et $-x \to -\infty$ : forme indéterminée $+\infty - \infty$. On factorise $x^2$ sous la racine ; comme $x > 0$, $\sqrt{x^2} = x$ :

    $$\sqrt{9x^2 - 8x + 6} - x = x\sqrt{9 - \dfrac{8}{x} + \dfrac{6}{x^2}} - x = x\left(\sqrt{9 - \dfrac{8}{x} + \dfrac{6}{x^2}} - 1\right)$$

    La parenthèse tend vers $\sqrt{9} - 1 = 2 > 0$ et $x \to +\infty$ : le produit tend vers $+\infty$.

    **En $-\infty$.** Cette fois $\sqrt{9x^2 - 8x + 6} \to +\infty$ et $-x \to +\infty$ : on additionne deux $+\infty$, pas de forme indéterminée.

    $\displaystyle\lim_{x \to +\infty} \sqrt{9x^2 - 8x + 6} - x = +\infty$ et $\displaystyle\lim_{x \to -\infty} \sqrt{9x^2 - 8x + 6} - x = +\infty$.

25. **En $+\infty$.** $\sqrt{x^2 - 8x + 6} \to +\infty$ et $-x \to -\infty$ : forme indéterminée. On multiplie et on divise par la quantité conjuguée $\sqrt{x^2 - 8x + 6} + x$ (elle est $> 0$) :

    $$\sqrt{x^2 - 8x + 6} - x = \dfrac{\left(x^2 - 8x + 6\right) - x^2}{\sqrt{x^2 - 8x + 6} + x} = \dfrac{-8x + 6}{\sqrt{x^2 - 8x + 6} + x}$$

    Maintenant c'est $\dfrac{\infty}{\infty}$ : on divise haut et bas par $x$ (avec $x > 0$, donc $\sqrt{x^2 - 8x + 6} = x\sqrt{1 - \frac{8}{x} + \frac{6}{x^2}}$) :

    $$\dfrac{-8 + \dfrac{6}{x}}{\sqrt{1 - \dfrac{8}{x} + \dfrac{6}{x^2}} + 1} \xrightarrow[x \to +\infty]{} \dfrac{-8}{1 + 1} = -4$$

    **En $-\infty$.** $\sqrt{x^2 - 8x + 6} \to +\infty$ et $-x \to +\infty$ : pas de forme indéterminée.

    $\displaystyle\lim_{x \to +\infty} \sqrt{x^2 - 8x + 6} - x = -4$ et $\displaystyle\lim_{x \to -\infty} \sqrt{x^2 - 8x + 6} - x = +\infty$.

26. **En $+\infty$.** $\sqrt{x^2 + 3} \to +\infty$ et $x \to +\infty$ : somme de deux $+\infty$, donc $+\infty$.

    **En $-\infty$.** $\sqrt{x^2 + 3} \to +\infty$ et $x \to -\infty$ : forme indéterminée. On utilise le conjugué $\sqrt{x^2 + 3} - x$ :

    $$\sqrt{x^2 + 3} + x = \dfrac{\left(x^2 + 3\right) - x^2}{\sqrt{x^2 + 3} - x} = \dfrac{3}{\sqrt{x^2 + 3} - x}$$

    En $-\infty$, le dénominateur $\sqrt{x^2 + 3} - x$ est une somme de deux $+\infty$ : il tend vers $+\infty$. Donc $\dfrac{3}{+\infty} = 0$.

    $\displaystyle\lim_{x \to +\infty} \sqrt{x^2 + 3} + x = +\infty$ et $\displaystyle\lim_{x \to -\infty} \sqrt{x^2 + 3} + x = 0$.

27. **En $+\infty$.** $\sqrt{x^2 - 1} \to +\infty$ et $-2x \to -\infty$ : forme indéterminée. On factorise $x$ (avec $x > 0$) :

    $$\sqrt{x^2 - 1} - 2x = x\sqrt{1 - \dfrac{1}{x^2}} - 2x = x\left(\sqrt{1 - \dfrac{1}{x^2}} - 2\right)$$

    La parenthèse tend vers $1 - 2 = -1 < 0$ et $x \to +\infty$ : le produit tend vers $-\infty$.

    **En $-\infty$.** $\sqrt{x^2 - 1} \to +\infty$ et $-2x \to +\infty$ : on additionne deux $+\infty$.

    $\displaystyle\lim_{x \to +\infty} \sqrt{x^2 - 1} - 2x = -\infty$ et $\displaystyle\lim_{x \to -\infty} \sqrt{x^2 - 1} - 2x = +\infty$.

28. **En $+\infty$.** $2x \to +\infty$ et $-\sqrt{4x^2 - x} \to -\infty$ : forme indéterminée. Conjugué $2x + \sqrt{4x^2 - x}$ :

    $$2x - \sqrt{4x^2 - x} = \dfrac{4x^2 - \left(4x^2 - x\right)}{2x + \sqrt{4x^2 - x}} = \dfrac{x}{2x + \sqrt{4x^2 - x}}$$

    On divise haut et bas par $x$ (avec $x > 0$) :

    $$\dfrac{1}{2 + \sqrt{4 - \dfrac{1}{x}}} \xrightarrow[x \to +\infty]{} \dfrac{1}{2 + 2} = \dfrac{1}{4}$$

    **En $-\infty$.** $2x \to -\infty$ et $-\sqrt{4x^2 - x} \to -\infty$ : on additionne deux $-\infty$.

    $\displaystyle\lim_{x \to +\infty} 2x - \sqrt{4x^2 - x} = \dfrac{1}{4}$ et $\displaystyle\lim_{x \to -\infty} 2x - \sqrt{4x^2 - x} = -\infty$.

29. L'expression est définie pour $x^2 - 1 \geq 0$ et $x \neq 0$, donc pour $|x| \geq 1$ : on peut bien faire $x \to \pm\infty$.

    On sépare la fraction : $\dfrac{\sqrt{x^2 - 1} + x}{x} = \dfrac{\sqrt{x^2 - 1}}{x} + 1$.

    **En $+\infty$** ($x > 0$ donc $x = \sqrt{x^2}$) : $\dfrac{\sqrt{x^2 - 1}}{x} = \sqrt{\dfrac{x^2 - 1}{x^2}} = \sqrt{1 - \dfrac{1}{x^2}} \to 1$. La limite vaut $1 + 1 = 2$.

    **En $-\infty$** ($x < 0$ donc $x = -\sqrt{x^2}$) : $\dfrac{\sqrt{x^2 - 1}}{x} = -\sqrt{1 - \dfrac{1}{x^2}} \to -1$. La limite vaut $-1 + 1 = 0$.

    $\displaystyle\lim_{x \to +\infty} \dfrac{\sqrt{x^2 - 1} + x}{x} = 2$ et $\displaystyle\lim_{x \to -\infty} \dfrac{\sqrt{x^2 - 1} + x}{x} = 0$.

    *Attention.* Le signe de $x$ change le résultat : c'est le piège classique $\sqrt{x^2} = |x|$ (et non $x$) quand $x < 0$.

30. Quand $x \to 3$ : le numérateur tend vers $2 - \sqrt{4} = 0$ et le dénominateur vers $0$ : forme $\dfrac{0}{0}$. On multiplie haut et bas par le conjugué $2 + \sqrt{x+1}$ :

    $$\dfrac{2 - \sqrt{x+1}}{2x - 6} = \dfrac{4 - (x+1)}{(2x - 6)\left(2 + \sqrt{x+1}\right)} = \dfrac{3 - x}{2(x-3)\left(2 + \sqrt{x+1}\right)}$$

    Or $3 - x = -(x - 3)$. Pour $x \neq 3$, on simplifie par $(x-3)$ :

    $$\dfrac{2 - \sqrt{x+1}}{2x - 6} = \dfrac{-1}{2\left(2 + \sqrt{x+1}\right)}$$

    On remplace : $\dfrac{-1}{2(2+2)} = -\dfrac{1}{8}$.

    $\displaystyle\lim_{x \to 3} \dfrac{2 - \sqrt{x+1}}{2x - 6} = -\dfrac{1}{8}$.

31. Quand $x \to 2$ : le numérateur tend vers $\sqrt{3} - 1 \approx 0{,}73$, un nombre **non nul** et positif, et le dénominateur vers $0$. Ce n'est donc pas une forme $\dfrac{0}{0}$ (le conjugué ne sert à rien ici) : la limite est infinie et son signe dépend du côté.

    - Pour $x \to 2^+$ : $x - 2 \to 0^+$, donc la fonction $\to \dfrac{\sqrt{3}-1}{0^+} = +\infty$.

    - Pour $x \to 2^-$ : $x - 2 \to 0^-$, donc la fonction $\to \dfrac{\sqrt{3}-1}{0^-} = -\infty$.

    Les limites à droite et à gauche sont différentes : **la fonction n'a pas de limite en $2$**.
