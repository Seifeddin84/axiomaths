---
title: "Étude de fonctions"
slug: "lycee-4eme-economie-etude-de-fonctions"
school: "lycee"
level: "4eme"
sections: ["Economie et Gestion"]
chapter: "Etude de fonctions"
summary: "Le plan d'étude complet d'une fonction : symétries, limites, asymptotes (verticales, horizontales, obliques) et branches paraboliques, dérivée et tableau de variation, demi-tangentes, tracé. Appliqué aux polynômes, aux fractions rationnelles, aux racines carrées et aux fonctions trigonométriques, puis à l'économie : coût moyen minimal et bénéfice maximal. Un dernier paragraphe rappelle comment tracer la courbe de la fonction réciproque."
prerequisites: ["Limites et continuité", "Dérivation", "Fonction réciproque"]
source: "Manuel officiel 4ème année Économie et Gestion, chapitre 3 (Étude de fonctions)"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Un fabricant se demande : « À combien de tonnes par mois mon coût **par tonne** est-il le plus bas ? » Sa réponse est le minimum d'une fonction. Pour le trouver sans tâtonner, il faut savoir **étudier une fonction** de A à Z : où elle est définie, comment elle se comporte aux bords, où elle monte et où elle descend.

Ce chapitre est la boîte à outils complète. Tu y réutilises les limites, les dérivées et le théorème de la bijection, et tu y ajoutes la pièce manquante : les **branches infinies** (asymptotes et branches paraboliques), qui disent à quoi ressemble la courbe quand $x$ devient immense.

![Un exemple d'étude complète : asymptote verticale, asymptote oblique et centre de symétrie](/lessons/images/eco-asymptote-oblique.svg "La courbe de f(x) = (2x² + x + 2)/(x + 2) : une asymptote verticale x = −2, une asymptote oblique y = 2x − 3, un maximum local en (−4 ; −15), un minimum local en (0 ; 1), et le point I(−2 ; −7) où les deux asymptotes se coupent, centre de symétrie de la courbe.")

:::intuition
Étudier une fonction, c'est répondre à quatre questions, dans cet ordre : **Où vit-elle ?** (ensemble de définition, symétries) · **Où va-t-elle ?** (limites, asymptotes) · **Comment bouge-t-elle ?** (dérivée, tableau de variation) · **Quels points remarquables ?** (intersections, extrema, tangentes). Le tracé n'est que la mise en dessin des quatre réponses.
:::

## 1. Symétries et translations

Le plan est muni d'un repère orthonormé $(O, \vec\imath, \vec\jmath)$. Soit $f$ une fonction définie sur $D$, de courbe $\mathcal C_f$.

:::theorem[Axe de symétrie]
La droite $\Delta : x = a$ est un **axe de symétrie** de $\mathcal C_f$ si et seulement si, pour tout $x \in D$ :

- $2a - x \in D$ ;
- $f(2a - x) = f(x)$.
:::

:::theorem[Centre de symétrie]
Le point $I(a\,;b)$ est un **centre de symétrie** de $\mathcal C_f$ si et seulement si, pour tout $x \in D$ :

- $2a - x \in D$ ;
- $f(2a - x) = 2b - f(x)$.
:::

Pour $a = 0$ et $b = 0$, on retrouve les fonctions **paires** ($f(-x) = f(x)$, axe $(O, \vec\jmath)$) et **impaires** ($f(-x) = -f(x)$, centre $O$). Une fonction paire ou impaire s'étudie sur $D \cap [0\,;+\infty[$ seulement ; on complète par symétrie.

:::example[Une fonction paire]
Soit $g(x) = \dfrac{x^2 + 1}{x^2 - 4}$. Elle est définie sur $D = \mathbb R \setminus \{-2\,;2\}$, qui est symétrique par rapport à $0$, et
$$
g(-x) = \frac{(-x)^2 + 1}{(-x)^2 - 4} = \frac{x^2 + 1}{x^2 - 4} = g(x).
$$
$g$ est paire : on l'étudie sur $[0\,;2[ \ \cup\ ]2\,;+\infty[$, puis on complète par symétrie par rapport à $(O, \vec\jmath)$.
:::

:::example[Un centre de symétrie]
Soit $p(x) = x^3 - 6x^2 + 9x$ et $I(2\,;2)$. Alors $2a - x = 4 - x$ et
$$
p(4 - x) = (4-x)^3 - 6(4-x)^2 + 9(4-x) = -x^3 + 6x^2 - 9x + 4 = 4 - p(x) = 2 \times 2 - p(x).
$$
Le point $I$ est un centre de symétrie de $\mathcal C_p$.
:::

:::property[Translations de courbes]
Soit $k$ un réel.

- La courbe de $x \mapsto f(x) + k$ est l'image de $\mathcal C_f$ par la translation de vecteur $k\,\vec\jmath$.
- La courbe de $x \mapsto f(x + k)$ est l'image de $\mathcal C_f$ par la translation de vecteur $-k\,\vec\imath$.
:::

Exemple : la parabole de $x \mapsto (x-1)^2 + 3$ est celle de $x \mapsto x^2$ translatée du vecteur $\vec\imath + 3\vec\jmath$ ($f(x - 1)$ avec $k = -1$ décale de $+1$ vers la droite).

## 2. Asymptotes et branches infinies

Quand $x$ ou $f(x)$ part à l'infini, la courbe peut se **coller** à une droite, ou bien **s'éloigner** sans direction collée. Les deux cas ont chacun leur nom.

### 2.1 Asymptotes parallèles aux axes

:::definition[Asymptote verticale, asymptote horizontale]
- La droite $x = a$ est **asymptote verticale** à $\mathcal C_f$ si $\lim\limits_{x \to a^+} f(x) = \pm\infty$ ou $\lim\limits_{x \to a^-} f(x) = \pm\infty$.
- La droite $y = b$ est **asymptote horizontale** à $\mathcal C_f$ en $+\infty$ (resp. en $-\infty$) si $\lim\limits_{x \to +\infty} f(x) = b$ (resp. $\lim\limits_{x \to -\infty} f(x) = b$).
:::

:::example[Les limites de $g(x) = \frac{x^2 + 1}{x^2 - 4}$]
Au voisinage de $2$ le numérateur vaut presque $5 > 0$ ; tout se joue sur le signe de $x^2 - 4 = (x-2)(x+2)$, qui est petit :

- $x \to 2^+$ : $x^2 - 4 \to 0^+$, donc $g(x) \to +\infty$ ;
- $x \to 2^-$ : $x^2 - 4 \to 0^-$, donc $g(x) \to -\infty$.

Par parité, $g(x) \to +\infty$ quand $x \to -2^-$ et $g(x) \to -\infty$ quand $x \to -2^+$. Enfin, $\dfrac{x^2 + 1}{x^2 - 4} = \dfrac{1 + 1/x^2}{1 - 4/x^2} \to 1$ en $\pm\infty$.

Conclusion : les droites $x = 2$ et $x = -2$ sont asymptotes verticales, la droite $y = 1$ est asymptote horizontale en $+\infty$ et en $-\infty$.
:::

### 2.2 Asymptote oblique

:::definition[Asymptote oblique]
Soit $a \neq 0$ et $b$ deux réels. La droite $\Delta : y = ax + b$ est **asymptote oblique** à $\mathcal C_f$ au voisinage de $+\infty$ (resp. $-\infty$) si
$$
\lim_{x \to +\infty} \big[ f(x) - (ax + b) \big] = 0 \qquad \left(\text{resp. } \lim_{x \to -\infty} \big[ f(x) - (ax + b) \big] = 0\right).
$$
:::

C'est une question d'**écart vertical** : la distance verticale entre la courbe et la droite fond vers $0$. Le signe de cet écart donne la **position relative**.

:::method[Chercher une asymptote oblique]
1. Vérifier que $\lim f(x) = \pm\infty$ à l'infini.
2. Calculer $a = \lim \dfrac{f(x)}{x}$. Si $a$ est un réel non nul, on continue.
3. Calculer $b = \lim \big( f(x) - ax \big)$. Si $b$ est un réel, $y = ax + b$ est asymptote oblique.
4. **Position** : étudier le signe de $f(x) - (ax + b)$. Positif : la courbe est au-dessus de la droite ; négatif : en dessous.

Pour une fraction rationnelle, on gagne du temps avec la **division euclidienne** : on écrit $f(x) = ax + b + \dfrac{c}{x - x_0}$, et la droite se lit directement.
:::

:::proof[Pourquoi $a$ et $b$ se calculent ainsi]
Supposons $f(x) = ax + b + \varepsilon(x)$ avec $\varepsilon(x) \to 0$ quand $x \to +\infty$.

| Étape | Justification |
|---|---|
| $\dfrac{f(x)}{x} = a + \dfrac{b}{x} + \dfrac{\varepsilon(x)}{x}$ | on divise par $x \neq 0$ |
| $\dfrac{b}{x} \to 0$ et $\dfrac{\varepsilon(x)}{x} \to 0$ | $b$ est constant et $\varepsilon(x) \to 0$ |
| donc $\dfrac{f(x)}{x} \to a$ | somme de limites |
| $f(x) - ax = b + \varepsilon(x) \to b$ | on retranche $ax$ |
:::

::::example[Une fraction avec asymptote oblique]
Soit $f(x) = \dfrac{2x^2 + x + 2}{x + 2}$ sur $\mathbb R \setminus \{-2\}$. On cherche $a, b, c$ tels que $f(x) = ax + b + \dfrac{c}{x+2}$ : la division euclidienne donne $2x^2 + x + 2 = (x + 2)(2x - 3) + 8$, donc
$$
f(x) = 2x - 3 + \frac{8}{x + 2}.
$$
Alors $f(x) - (2x - 3) = \dfrac{8}{x + 2} \to 0$ en $+\infty$ et en $-\infty$ : la droite $\Delta : y = 2x - 3$ est asymptote oblique de chaque côté. De plus $\lim\limits_{x \to -2^+} f(x) = +\infty$ et $\lim\limits_{x \to -2^-} f(x) = -\infty$ : la droite $x = -2$ est asymptote verticale.

**Position.** Le signe de $\dfrac{8}{x + 2}$ est celui de $x + 2$ :

:::signs
| $x$ | $-\infty$ | | $-2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $x + 2$ | | $-$ | $0$ | $+$ | |
| $f(x) - (2x - 3)$ | | $-$ | $\Vert$ | $+$ | |
:::

La courbe est **sous** $\Delta$ pour $x < -2$ et **au-dessus** pour $x > -2$.

**Contrôle numérique.** $f(10) = \dfrac{212}{12} \approx 17{,}67$ et $2 \times 10 - 3 = 17$ : l'écart est $\dfrac{8}{12} \approx 0{,}67 > 0$, la courbe est au-dessus. ✓
::::

:::warning
Une courbe **ne peut pas** traverser son asymptote verticale (elle n'existe pas en $x = a$), mais elle peut très bien couper une asymptote horizontale ou oblique en un point, puis s'en rapprocher ensuite. Ce qui compte est la limite de l'écart, pas l'absence de rencontre. Dans l'exemple ci-dessus, $\dfrac{8}{x+2} = 0$ n'a pas de solution : cette fois-ci, la courbe ne coupe jamais $\Delta$.
:::

### 2.3 Branches paraboliques

Si $f(x) \to \pm\infty$ quand $x \to \pm\infty$ mais qu'aucune droite ne colle à la courbe, on regarde la **pente moyenne** $\dfrac{f(x)}{x}$.

:::definition[Branche parabolique]
Soit $f$ telle que $\lim f(x) = \pm\infty$ quand $x \to +\infty$ (même énoncé en $-\infty$).

| Si | alors $\mathcal C_f$ admet |
|---|---|
| $\lim \dfrac{f(x)}{x} = \pm\infty$ | une **branche parabolique de direction $(O, \vec\jmath)$** (elle monte plus vite qu'une droite) |
| $\lim \dfrac{f(x)}{x} = 0$ | une **branche parabolique de direction $(O, \vec\imath)$** (elle monte plus lentement qu'une droite) |
| $\lim \dfrac{f(x)}{x} = a \neq 0$ et $\lim \big( f(x) - ax \big) = \pm\infty$ | une **branche parabolique de direction la droite $y = ax$** |
:::

:::example[Trois branches paraboliques]
- $f(x) = \sqrt{x}$ : $\dfrac{f(x)}{x} = \dfrac{1}{\sqrt x} \to 0$, direction $(O, \vec\imath)$.
- $f(x) = x^3$ : $\dfrac{f(x)}{x} = x^2 \to +\infty$, direction $(O, \vec\jmath)$.
- $f(x) = x + \sqrt{x}$ : $\dfrac{f(x)}{x} = 1 + \dfrac{1}{\sqrt x} \to 1$ et $f(x) - x = \sqrt{x} \to +\infty$, direction la droite $y = x$.
:::

:::warning
Ne pas confondre : une asymptote horizontale $y = b$ demande que $f(x)$ ait une **limite finie** $b$. La branche parabolique de direction $(O, \vec\imath)$ concerne une fonction qui part à $\pm\infty$, simplement trop lentement pour qu'une droite oblique l'accompagne.
:::

::::check[Branches infinies]
**1.** Étudier les asymptotes de $f(x) = \dfrac{3x^2 + x - 1}{x - 1}$ et la position de la courbe par rapport à l'asymptote oblique.

**2.** Quelle branche infinie la courbe de $f(x) = 2x + \sqrt{x}$ admet-elle en $+\infty$ ?

:::answer
**1.** $3x^2 + x - 1 = (x - 1)(3x + 4) + 3$, donc $f(x) = 3x + 4 + \dfrac{3}{x - 1}$. La droite $x = 1$ est asymptote verticale (le dénominateur s'annule, pas le numérateur : $3 \times 1 + 1 - 1 = 3$). La droite $y = 3x + 4$ est asymptote oblique en $\pm\infty$ car $\dfrac{3}{x-1} \to 0$. Position : le signe de $f(x) - (3x + 4) = \dfrac{3}{x - 1}$ est celui de $x - 1$, donc la courbe est au-dessus de la droite pour $x > 1$ et en dessous pour $x < 1$.

**2.** $\dfrac{f(x)}{x} = 2 + \dfrac{1}{\sqrt x} \to 2$ et $f(x) - 2x = \sqrt{x} \to +\infty$ : branche parabolique de direction la droite $y = 2x$.
:::
::::

## 3. Le plan d'étude

:::method[Étudier une fonction : les six étapes]
1. **Domaine** $D$, parité, périodicité, symétries : on réduit l'intervalle d'étude.
2. **Limites** aux bornes de $D$ (y compris en $\pm\infty$).
3. **Branches infinies** : asymptotes verticales, horizontales, obliques, branches paraboliques.
4. **Dérivée** : domaine de dérivabilité, calcul de $f'$, signe de $f'$, **tableau de variation**.
5. **Points remarquables** : intersections avec les axes, extrema, tangentes (horizontale en un extremum, demi-tangentes aux points de non-dérivabilité), centre ou axe de symétrie.
6. **Tracé** : d'abord les asymptotes et les points, puis la courbe qui doit coller à toutes les informations.
:::

Les paragraphes suivants déroulent ce plan sur un exemple de chaque famille.

## 4. Fonctions polynômes

:::theorem[Comportement à l'infini]
Soit $f$ un polynôme de degré $n \geq 2$. Alors $\lim\limits_{x \to \pm\infty} f(x) = \pm\infty$ (selon le signe du coefficient dominant et la parité de $n$), et
$$
\lim_{x \to \pm\infty} \frac{f(x)}{x} = \pm\infty.
$$
La courbe admet une **branche parabolique de direction $(O, \vec\jmath)$** en $+\infty$ et en $-\infty$. Un polynôme n'a jamais d'asymptote.
:::

::::example[Étude complète de $p(x) = x^3 - 6x^2 + 9x$]
**1. Domaine, symétrie.** $D = \mathbb R$. Le point $I(2\,;2)$ est un centre de symétrie (voir §1).

**2. Limites.** $\lim\limits_{x \to -\infty} p(x) = -\infty$ et $\lim\limits_{x \to +\infty} p(x) = +\infty$.

**3. Branches infinies.** $\dfrac{p(x)}{x} = x^2 - 6x + 9 \to +\infty$ : branches paraboliques de direction $(O, \vec\jmath)$.

**4. Dérivée.** $p$ est dérivable sur $\mathbb R$ et $p'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$.

:::signs
| $x$ | $-\infty$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x - 3$ | | $-$ | | $-$ | $0$ | $+$ | |
| $p'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

$p$ est croissante sur $]-\infty\,;1]$, décroissante sur $[1\,;3]$, croissante sur $[3\,;+\infty[$, avec un **maximum local** $p(1) = 4$ et un **minimum local** $p(3) = 0$.

**5. Points remarquables.** $p(x) = x(x - 3)^2$ : la courbe coupe l'axe des abscisses en $(0\,;0)$ et touche l'axe en $(3\,;0)$ (zéro **double**, tangente horizontale : c'est le minimum). La tangente en $I$ a pour équation $y = p'(2)(x - 2) + p(2) = -3x + 8$, et
$$
p(x) - (-3x + 8) = (x - 2)^3.
$$
La courbe est sous cette tangente pour $x < 2$ et au-dessus pour $x > 2$ : elle la **traverse** en $I$, qui est un **point d'inflexion**.
::::

![La courbe de x³ − 6x² + 9x](/lessons/images/eco-polynome-cubique.svg "La courbe de p(x) = x³ − 6x² + 9x : maximum local en (1 ; 4), minimum local en (3 ; 0) où elle touche l'axe des abscisses, centre de symétrie et point d'inflexion I(2 ; 2).")

:::method[Nombre de solutions de $f(x) = m$]
On lit le tableau de variation : on compte combien de fois la droite horizontale $y = m$ coupe la courbe. Pour $p$ :

| $m$ | $m < 0$ | $m = 0$ | $0 < m < 4$ | $m = 4$ | $m > 4$ |
|---|---|---|---|---|---|
| nombre de solutions | $1$ | $2$ | $3$ | $2$ | $1$ |

Contrôle pour $m = 4$ : $p(1) = 4$ (tangence, solution double) et $p(4) = 64 - 96 + 36 = 4$ : deux solutions distinctes, $x = 1$ et $x = 4$. ✓
:::

## 5. Fractions rationnelles

::::example[Une fonction paire : $g(x) = \frac{x^2 + 1}{x^2 - 4}$]
**1. Domaine, symétrie.** $D = \mathbb R \setminus \{-2\,;2\}$ ; $g$ est paire (voir §1).

**2. Limites et branches infinies.** Calculées au §2.1 : asymptotes verticales $x = \pm 2$, asymptote horizontale $y = 1$.

**3. Dérivée.** $g$ est dérivable sur $D$ et
$$
g'(x) = \frac{2x(x^2 - 4) - (x^2 + 1)\cdot 2x}{(x^2 - 4)^2} = \frac{-10x}{(x^2 - 4)^2}.
$$

:::signs
| $x$ | $-\infty$ | | $-2$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $-10x$ | | $+$ | | $+$ | $0$ | $-$ | | $-$ | |
| $(x^2 - 4)^2$ | | $+$ | $0$ | $+$ | | $+$ | $0$ | $+$ | |
| $g'(x)$ | | $+$ | $\Vert$ | $+$ | $0$ | $-$ | $\Vert$ | $-$ | |
:::

$g$ est croissante sur $]-\infty\,;-2[$ et sur $]-2\,;0]$, décroissante sur $[0\,;2[$ et sur $]2\,;+\infty[$. Elle a un maximum local $g(0) = -\dfrac14$.

**4. Position par rapport à l'asymptote horizontale.** $g(x) - 1 = \dfrac{5}{x^2 - 4}$ est positif si $\lvert x \rvert > 2$ et négatif si $\lvert x \rvert < 2$ : la courbe est au-dessus de $y = 1$ pour $\lvert x \rvert > 2$ et en dessous pour $\lvert x \rvert < 2$. Elle ne coupe jamais cette asymptote.
::::

![La courbe de (x² + 1)/(x² − 4)](/lessons/images/eco-rationnelle-paire.svg "La courbe de g(x) = (x² + 1)/(x² − 4) : trois branches séparées par les asymptotes verticales x = −2 et x = 2, rapprochée de l'asymptote horizontale y = 1 à l'infini, et symétrique par rapport à l'axe des ordonnées.")

::::example[Étude complète de $f(x) = \frac{2x^2 + x + 2}{x + 2}$]
**1. Domaine.** $D = \mathbb R \setminus \{-2\}$. D'après le §2.2, $f(x) = 2x - 3 + \dfrac{8}{x + 2}$.

**2. Limites.** $\lim\limits_{x \to \pm\infty} f(x) = \pm\infty$ ; $\lim\limits_{x \to -2^-} f(x) = -\infty$ et $\lim\limits_{x \to -2^+} f(x) = +\infty$.

**3. Branches infinies.** Asymptote verticale $x = -2$ ; asymptote oblique $y = 2x - 3$ en $\pm\infty$ (§2.2).

**4. Dérivée.** À partir de la forme $f(x) = 2x - 3 + \dfrac{8}{x+2}$ :
$$
f'(x) = 2 - \frac{8}{(x + 2)^2} = \frac{2\big[(x + 2)^2 - 4\big]}{(x + 2)^2} = \frac{2x(x + 4)}{(x + 2)^2}.
$$

:::signs
| $x$ | $-\infty$ | | $-4$ | | $-2$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $2x$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x + 4$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
| $(x+2)^2$ | | $+$ | | $+$ | $0$ | $+$ | | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
:::

$f$ est croissante sur $]-\infty\,;-4]$, décroissante sur $[-4\,;-2[$ et sur $]-2\,;0]$, croissante sur $[0\,;+\infty[$. **Maximum local** $f(-4) = -15$, **minimum local** $f(0) = 1$.

**5. Points remarquables.** $f(x) = 0 \iff 2x^2 + x + 2 = 0$ : le discriminant vaut $1 - 16 < 0$, la courbe ne coupe pas l'axe des abscisses. Elle coupe l'axe des ordonnées en $(0\,;1)$. Le point $I(-2\,;-7)$ (croisement des deux asymptotes) est un **centre de symétrie** :
$$
f(-4 - x) = 2(-4 - x) - 3 + \frac{8}{-4 - x + 2} = -2x - 11 - \frac{8}{x + 2} = -14 - f(x).
$$
::::

Le tracé complet est la figure du début de ce chapitre.

## 6. Fonctions avec une racine carrée

:::theorem[Dérivée d'une racine]
Soit $u$ une fonction dérivable **et strictement positive** sur un intervalle $I$. Alors $\sqrt{u}$ est dérivable sur $I$ et
$$
\big(\sqrt{u}\big)' = \frac{u'}{2\sqrt{u}}.
$$
:::

Aux points $a$ où $u(a) = 0$ (les bords du domaine), la racine n'est pas dérivable : le dénominateur s'annule. On étudie alors le **taux d'accroissement** $\dfrac{f(x) - f(a)}{x - a}$. S'il tend vers $\pm\infty$, la courbe admet une **demi-tangente verticale** en ce point.

::::example[Étude complète de $f(x) = \sqrt{x^2 - 9}$]
**1. Domaine, symétrie.** $x^2 - 9 \geq 0 \iff x \in ]-\infty\,;-3] \cup [3\,;+\infty[$. $f$ est **paire** : on l'étudie sur $[3\,;+\infty[$.

**2. Limites.** $\lim\limits_{x \to +\infty} f(x) = +\infty$ (et $f(3) = 0$).

**3. Dérivabilité en 3 à droite.** Pour $x > 3$ :
$$
\frac{f(x) - f(3)}{x - 3} = \frac{\sqrt{(x - 3)(x + 3)}}{x - 3} = \sqrt{\frac{x + 3}{x - 3}} \xrightarrow[x \to 3^+]{} +\infty.
$$
$f$ n'est pas dérivable à droite en $3$ ; sa courbe admet en $(3\,;0)$ une **demi-tangente verticale**. Par parité, même chose en $(-3\,;0)$.

**4. Dérivée.** Sur $]3\,;+\infty[$, $f'(x) = \dfrac{2x}{2\sqrt{x^2 - 9}} = \dfrac{x}{\sqrt{x^2 - 9}} > 0$. $f$ est strictement croissante sur $[3\,;+\infty[$ (de $0$ à $+\infty$) et, par parité, strictement décroissante sur $]-\infty\,;-3]$.

**5. Asymptote en $+\infty$.** On multiplie par la **quantité conjuguée** :
$$
f(x) - x = \frac{\big(\sqrt{x^2 - 9} - x\big)\big(\sqrt{x^2 - 9} + x\big)}{\sqrt{x^2 - 9} + x} = \frac{-9}{\sqrt{x^2 - 9} + x}.
$$
Cette quantité tend vers $0$ et reste négative : la droite $y = x$ est asymptote oblique en $+\infty$, avec la courbe **en dessous**. Par parité, $y = -x$ est asymptote en $-\infty$.

**Contrôle numérique.** $f(10) = \sqrt{91} \approx 9{,}539$ ; $f(10) - 10 \approx -0{,}461$ et $\dfrac{-9}{\sqrt{91} + 10} \approx -0{,}461$. ✓
::::

![La courbe de la racine de x² − 9](/lessons/images/eco-racine.svg "La courbe de f(x) = √(x² − 9) : deux branches symétriques, des demi-tangentes verticales en (−3 ; 0) et (3 ; 0), et les asymptotes obliques y = x et y = −x.")

:::method[Asymptote d'une fonction contenant une racine]
Pour montrer que $y = ax + b$ est asymptote à $f(x) = \sqrt{u(x)} + \dots$, on écrit $f(x) - (ax + b)$ sous la forme $A - B$ avec une racine, et on multiplie par $\dfrac{A + B}{A + B}$ : le numérateur devient $A^2 - B^2$, sans racine, et la limite se calcule.
:::

::::check[Sans demi-tangente]
Étudier $f(x) = \sqrt{x^2 + 4}$ : domaine, parité, variations, asymptotes en $+\infty$. Y a-t-il une demi-tangente verticale ?

:::answer
$x^2 + 4 > 0$ pour tout $x$ : $D = \mathbb R$ et $f$ est dérivable partout. $f$ est paire. $f'(x) = \dfrac{x}{\sqrt{x^2 + 4}}$ a le signe de $x$ : $f$ décroît sur $]-\infty\,;0]$ et croît sur $[0\,;+\infty[$, avec un **minimum** $f(0) = 2$. En $+\infty$ : $f(x) - x = \dfrac{4}{\sqrt{x^2 + 4} + x} \to 0^+$, donc $y = x$ est asymptote avec la courbe **au-dessus** ; par parité $y = -x$ en $-\infty$. Aucune demi-tangente verticale : la racine ne s'annule jamais, donc la fonction est dérivable partout. Contrôle : $f(10) = \sqrt{104} \approx 10{,}198$, écart $\approx 0{,}198 = \dfrac{4}{\sqrt{104} + 10}$. ✓
:::
::::

## 7. Fonctions trigonométriques

Une fonction **périodique** de période $T$ ($f(x + T) = f(x)$) se comprend sur **une période** ; si elle est de plus impaire, sur **une demi-période** seulement.

:::method[Réduire l'intervalle d'étude]
Si $f$ est de période $T$ et impaire, on l'étudie sur $\left[0\,;\dfrac{T}{2}\right]$ ; on obtient la courbe sur $\left[-\dfrac{T}{2}\,;\dfrac{T}{2}\right]$ par symétrie de centre $O$, puis sur $\mathbb R$ par les translations de vecteurs $kT\,\vec\imath$ ($k \in \mathbb Z$).
:::

::::example[Étude de $f(x) = \sin(2x)$]
**1. Réduction.** $\sin\big(2(x + \pi)\big) = \sin(2x + 2\pi) = \sin(2x)$ : $\pi$ est une période. $f(-x) = \sin(-2x) = -\sin(2x) = -f(x)$ : $f$ est impaire. On étudie $f$ sur $\left[0\,;\dfrac\pi2\right]$.

**2. Dérivée.** $f'(x) = 2\cos(2x)$. Pour $x \in \left[0\,;\dfrac\pi2\right]$ on a $2x \in [0\,;\pi]$ et $\cos(2x) \geq 0 \iff 2x \leq \dfrac\pi2 \iff x \leq \dfrac\pi4$.

:::signs
| $x$ | $0$ | | $\dfrac{\pi}{4}$ | | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos(2x)$ | | $+$ | $0$ | $-$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | |
:::

$f$ croît de $f(0) = 0$ à $f\!\left(\dfrac\pi4\right) = 1$ puis décroît jusqu'à $f\!\left(\dfrac\pi2\right) = 0$. La tangente en $O$ a pour pente $f'(0) = 2$ : $y = 2x$.

**3. Courbe sur $\mathbb R$.** Symétrie de centre $O$ pour avoir $\left[-\dfrac\pi2\,;\dfrac\pi2\right]$, puis translations de vecteurs $k\pi\,\vec\imath$.

**Contrôle numérique.** $f\!\left(\dfrac\pi8\right) = \sin\dfrac\pi4 = \dfrac{\sqrt2}{2} \approx 0{,}71$ : un point entre $0$ et $1$, cohérent avec la croissance. ✓
::::

![La courbe de sin(2x)](/lessons/images/eco-sinus-2x.svg "La courbe de f(x) = sin(2x) : étudiée sur [0 ; π/2] (trait épais), le reste s'en déduit par symétrie par rapport à l'origine puis par translations de vecteur de longueur π, la période.")

:::remark
La courbe de $\sin(2x)$ admet aussi l'axe $x = \dfrac\pi4$ : $f\!\left(\dfrac\pi2 - x\right) = \sin(\pi - 2x) = \sin(2x) = f(x)$. On aurait donc pu s'arrêter à $\left[0\,;\dfrac\pi4\right]$. Chercher une symétrie en plus raccourcit le travail, mais n'est jamais obligatoire.
:::

## 8. Applications économiques

En économie, une quantité $x$ de produit (en tonnes, en milliers de pièces) engage un **coût** et rapporte une **recette**. L'étude de fonctions répond à deux questions de chef d'entreprise : quel niveau de production minimise le coût par unité, et lequel maximise le bénéfice.

:::definition[Coût total, coût moyen, coût marginal]
Soit $C(x)$ le **coût total** de production de $x$ unités.

- Le **coût moyen** (coût par unité) est $C_M(x) = \dfrac{C(x)}{x}$ pour $x > 0$.
- Le **coût marginal** est $C'(x)$ : c'est, à peu près, ce que coûte **une unité de plus**.
- Le **bénéfice** pour une recette $R(x)$ est $B(x) = R(x) - C(x)$.
:::

:::property[Au minimum du coût moyen, coût marginal et coût moyen se rejoignent]
$C_M'(x) = \dfrac{x\,C'(x) - C(x)}{x^2}$. Donc $C_M'(x) = 0 \iff C'(x) = \dfrac{C(x)}{x}$ : là où le coût moyen est minimal (et où sa dérivée s'annule), le coût marginal est égal au coût moyen.
:::

::::example[Coût moyen minimal]
Une entreprise produit $x$ tonnes ($0 < x \leq 10$) pour un coût total, en milliers de dinars, de
$$
C(x) = x^3 + 20x + 128.
$$
Le coût moyen est $C_M(x) = \dfrac{C(x)}{x} = x^2 + 20 + \dfrac{128}{x}$. Sa limite en $0^+$ est $+\infty$ (les coûts fixes pèsent sur très peu de tonnes). Dérivons :
$$
C_M'(x) = 2x - \frac{128}{x^2} = \frac{2x^3 - 128}{x^2} = \frac{2(x - 4)(x^2 + 4x + 16)}{x^2}.
$$
Le trinôme $x^2 + 4x + 16 = (x + 2)^2 + 12$ est strictement positif : $C_M'(x)$ a le signe de $x - 4$.

:::signs
| $x$ | $0$ | | $4$ | | $10$ |
|---|---|---|---|---|---|
| $x - 4$ | | $-$ | $0$ | $+$ | |
| $C_M'(x)$ | | $-$ | $0$ | $+$ | |
:::

$C_M$ décroît sur $]0\,;4]$ puis croît sur $[4\,;10]$ : le coût moyen est **minimal pour 4 tonnes**, et vaut
$$
C_M(4) = 16 + 20 + 32 = 68 \quad \text{milliers de dinars par tonne.}
$$
**Contrôle.** Le coût marginal est $C'(x) = 3x^2 + 20$, donc $C'(4) = 68 = C_M(4)$ : coût marginal et coût moyen se rejoignent bien au minimum. ✓ Et si le prix de vente est inférieur à $68$ milliers de dinars la tonne, l'entreprise perd de l'argent quelle que soit sa production.
::::

![Coût moyen et coût marginal](/lessons/images/eco-cout-moyen.svg "Le coût moyen C_M(x) = x² + 20 + 128/x et le coût marginal C'(x) = 3x² + 20 : les deux courbes se coupent au point (4 ; 68), minimum du coût moyen.")

::::example[Bénéfice maximal]
L'entreprise vend la tonne $95$ milliers de dinars : $R(x) = 95x$. Le bénéfice est
$$
B(x) = 95x - (x^3 + 20x + 128) = -x^3 + 75x - 128, \qquad x \in [0\,;10].
$$
$B'(x) = -3x^2 + 75 = -3(x - 5)(x + 5)$ : sur $[0\,;10]$, $B'$ a le signe de $5 - x$. $B$ croît sur $[0\,;5]$ puis décroît sur $[5\,;10]$ ; le bénéfice est **maximal pour 5 tonnes** :
$$
B(5) = -125 + 375 - 128 = 122 \quad \text{milliers de dinars.}
$$
**Contrôle.** $B(0) = -128$ (les coûts fixes), $B(4) = 108$ et $B(6) = 106$ : tous deux inférieurs à $B(5) = 122$. ✓ Et $R'(5) = 95 = C'(5)$ : au maximum, la recette marginale égale le coût marginal.
::::

:::tic[Retrouver le minimum avec un tableur]
Dans la colonne A, saisir les tonnages $1, 2, \dots, 10$ ; en B2, la formule `=A2^2+20+128/A2` (à recopier vers le bas) donne le coût moyen :

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $C_M(x)$ | $149$ | $88$ | $71{,}7$ | $68$ | $70{,}6$ | $77{,}3$ | $87{,}3$ | $100$ | $115{,}2$ | $132{,}8$ |

Le tableur n'est qu'une loupe : le minimum est bien en $x = 4$ comme l'a prouvé la dérivée, mais seul le calcul justifie qu'il n'y a pas de valeur plus basse entre deux entiers.
:::

:::history[Cournot et le calcul de la production optimale]
En 1838, Antoine Augustin Cournot publie ses *Recherches sur les principes mathématiques de la théorie des richesses*. Il y utilise la dérivée pour chercher la production qui maximise le profit d'un producteur, et retrouve la règle que tu viens de vérifier : au maximum, la recette marginale égale le coût marginal.
:::

## 9. Pour aller plus loin : la courbe d'une réciproque

Les exercices d'étude de fonctions demandent souvent de construire aussi la courbe de la **fonction réciproque** $f^{-1}$. Ces résultats viennent des chapitres précédents ; les voici en action.

:::theorem[Rappel : bijection et réciproque]
Si $f$ est **continue et strictement monotone** sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur $J = f(I)$. Sa réciproque $f^{-1}$ est définie sur $J$, continue, et a le **même sens de variation** que $f$.
:::

:::property[Courbes symétriques]
Dans un repère orthonormé, $M(a\,;b) \in \mathcal C_f \iff M'(b\,;a) \in \mathcal C_{f^{-1}}$ : la courbe de $f^{-1}$ est la **symétrique** de $\mathcal C_f$ par rapport à la droite $y = x$. Les tangentes se transforment de la même façon : une tangente **horizontale** devient **verticale** et inversement.
:::

:::theorem[Dérivée de la réciproque]
Soit $f$ continue et strictement monotone sur un intervalle ouvert contenant $a$, dérivable en $a$.

- Si $f'(a) \neq 0$, alors $f^{-1}$ est dérivable en $b = f(a)$ et $\big(f^{-1}\big)'(b) = \dfrac{1}{f'(a)}$.
- Si $f'(a) = 0$, $f^{-1}$ n'est **pas** dérivable en $b = f(a)$ : $\mathcal C_{f^{-1}}$ admet une tangente verticale.
:::

::::example[La réciproque de $\sqrt{x^2 - 9}$]
Avec la fonction du §6 restreinte à $[3\,;+\infty[$ : $f$ est continue et strictement croissante, $f(3) = 0$, $\lim\limits_{x \to +\infty} f(x) = +\infty$, donc $f$ est une bijection de $[3\,;+\infty[$ sur $J = [0\,;+\infty[$. On résout $y = \sqrt{x^2 - 9}$ avec $x \geq 3$ : $x^2 = y^2 + 9$, donc
$$
f^{-1}(y) = \sqrt{y^2 + 9}, \qquad y \in [0\,;+\infty[.
$$
**Dérivée en un point.** $f(5) = \sqrt{16} = 4$ et $f'(5) = \dfrac{5}{4}$, donc $\big(f^{-1}\big)'(4) = \dfrac{1}{f'(5)} = \dfrac45$.

**Contrôle direct.** $\big(f^{-1}\big)'(y) = \dfrac{y}{\sqrt{y^2 + 9}}$, qui vaut $\dfrac{4}{5}$ en $y = 4$. ✓

**Demi-tangente.** La demi-tangente **verticale** de $\mathcal C_f$ en $(3\,;0)$ devient la tangente **horizontale** de $\mathcal C_{f^{-1}}$ en $(0\,;3)$ : en effet $\big(f^{-1}\big)'(0) = 0$.
::::

![La courbe de f et celle de sa réciproque](/lessons/images/eco-reciproque.svg "La courbe de f(x) = √(x² − 9) sur [3 ; +∞[ et celle de sa réciproque f⁻¹(y) = √(y² + 9), symétriques par rapport à la droite y = x : la demi-tangente verticale en (3 ; 0) devient la tangente horizontale en (0 ; 3), et les pentes 5/4 en A(5 ; 4) et 4/5 en A'(4 ; 5) sont inverses l'une de l'autre.")

## Synthèse

:::summary
| Type de fonction | À regarder en priorité |
|---|---|
| Polynôme | pas d'asymptote ; branches paraboliques $(O, \vec\jmath)$ ; extrema, centre ou axe de symétrie |
| Fraction rationnelle | asymptotes verticales (zéros du dénominateur) ; division pour l'asymptote oblique ; position par le signe de $f(x) - (ax + b)$ |
| Avec une racine $\sqrt{u}$ | $u \geq 0$ pour le domaine ; demi-tangentes verticales où $u = 0$ ; quantité conjuguée pour l'asymptote |
| Trigonométrique | parité et période, étude sur une demi-période ; dérivée $\cos$, $-\sin$ |
| Économique | $C_M = C/x$, $C_M' = 0 \iff C' = C_M$ ; $B = R - C$, $B' = 0 \iff R' = C'$ |

- Asymptote **oblique** : $\lim\,\big(f(x) - (ax + b)\big) = 0$, avec $a = \lim \dfrac{f(x)}{x}$ et $b = \lim\,\big(f(x) - ax\big)$.
- **Branche parabolique** : $\dfrac{f(x)}{x} \to \pm\infty$ (direction $(O, \vec\jmath)$), $\to 0$ (direction $(O, \vec\imath)$) ou $\to a$ avec $f(x) - ax \to \pm\infty$ (direction $y = ax$).
- Une courbe ne coupe jamais son asymptote verticale ; elle peut couper les autres.
- $\big(f^{-1}\big)'(f(a)) = \dfrac{1}{f'(a)}$ si $f'(a) \neq 0$ ; les courbes de $f$ et $f^{-1}$ sont symétriques par rapport à $y = x$.
:::
