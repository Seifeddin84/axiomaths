---
title: "Exemples d'étude de fonctions"
slug: "lycee-3eme-maths-etude-de-fonctions"
school: "lycee"
level: "3eme"
sections: ["Mathématiques"]
chapter: "Exemples d’étude de fonctions"
summary: "Un plan d'étude pour tracer une courbe : ensemble de définition, axe et centre de symétrie, limites et asymptotes, dérivée et tableau de variation, demi-tangentes. Appliqué à un polynôme, à une fonction rationnelle et à une fonction avec une racine carrée, puis aux courbes de fonctions associées."
prerequisites: ["Limites et asymptotes", "Nombre dérivé et fonction dérivée", "Continuité"]
source: "Manuel officiel 3ème année Mathématiques, Tome 1, chapitre 7"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Un traceur de courbes dessine en une seconde ce que tu mets dix minutes à faire. Alors pourquoi étudier une fonction à la main ? Parce que l'ordinateur te montre **une fenêtre** : il ne dit ni si la courbe monte encore après, ni si elle a une asymptote, ni où elle change de sens. L'étude te donne le **portrait-robot** de la courbe, puis le tracé n'est plus qu'une formalité.

:::intuition
Étudier une fonction $f$, c'est répondre à six questions, **dans cet ordre** :

1. **Où vit-elle ?** L'ensemble de définition $D_f$.
2. **Est-elle symétrique ?** Un axe ou un centre de symétrie permet de ne travailler que sur la moitié de la courbe.
3. **Que fait-elle aux bords ?** Les limites, donc les asymptotes.
4. **Monte-t-elle ou descend-elle ?** Le signe de la dérivée $f'$.
5. **Le tableau de variation** rassemble tout.
6. **Où sont les points particuliers ?** Intersections avec les axes, tangentes, demi-tangentes. Puis on trace.
:::

## 1. Éléments de symétrie d'une courbe

Dans un repère orthogonal $(O, \vec\imath, \vec\jmath)$, soit $f$ une fonction définie sur $D$ et $\mathcal C$ sa courbe.

:::theorem[Axe de symétrie]
La droite $\Delta : x = a$ est un **axe de symétrie** de $\mathcal C$ si et seulement si, pour tout $x \in D$ :

- $2a - x \in D$ ;
- $f(2a - x) = f(x)$.
:::

:::theorem[Centre de symétrie]
Le point $\Omega(a\,;b)$ est un **centre de symétrie** de $\mathcal C$ si et seulement si, pour tout $x \in D$ :

- $2a - x \in D$ ;
- $f(2a - x) = 2b - f(x)$.
:::

:::proof[Ces deux critères]
Soit $M(x\,;y)$ un point du plan.

| Étape | Justification |
|---|---|
| Le symétrique de $M$ par rapport à $\Delta : x = a$ est $N(2a - x\,;\,y)$ | l'abscisse est « reflétée » autour de $a$, l'ordonnée ne change pas |
| Le symétrique de $M$ par rapport à $\Omega(a\,;b)$ est $N(2a - x\,;\,2b - y)$ | $\Omega$ est le milieu de $[MN]$ : $\frac{x + x_N}{2} = a$ et $\frac{y + y_N}{2} = b$ |
| Si $M(x\,;f(x)) \in \mathcal C$, alors $N \in \mathcal C$ si et seulement si $2a - x \in D$ et $f(2a - x) = y_N$ | un point d'abscisse $2a - x$ est sur $\mathcal C$ exactement quand son ordonnée vaut $f(2a-x)$ |
| Cette condition est $f(2a - x) = f(x)$ pour l'axe et $f(2a - x) = 2b - f(x)$ pour le centre | on remplace $y_N$ |
:::

:::example[Un axe de symétrie]
Soit $g(x) = \dfrac{1}{x^2 - 2x + 2}$, définie sur $\mathbb R$ (le dénominateur vaut $(x-1)^2 + 1 > 0$). Pour $a = 1$ :
$$
(2 - x)^2 - 2(2 - x) + 2 = x^2 - 2x + 2 \quad \Rightarrow \quad g(2 - x) = g(x).
$$
La droite $x = 1$ est un axe de symétrie de $\mathcal C_g$.
:::

:::example[Un centre de symétrie]
Soit $f(x) = x^3 - 3x^2 + 2$ et $\Omega(1\,;0)$. Alors
$$
f(2 - x) = (2-x)^3 - 3(2-x)^2 + 2 = -x^3 + 3x^2 - 2 = -f(x) = 2 \times 0 - f(x).
$$
Le point $\Omega$ est un centre de symétrie de $\mathcal C_f$.
:::

:::method[Deviner le centre avant de le démontrer]
Si l'on peut écrire $f(x) = h(x - a) + b$ où $h$ est une fonction **impaire**, alors $\Omega(a\,;b)$ est un centre de symétrie. De même, si $h$ est **paire**, la droite $x = a$ est un axe de symétrie. Ici $f(x) = (x-1)^3 - 3(x-1)$ avec $h(t) = t^3 - 3t$ impaire : on retrouve $\Omega(1\,;0)$. Quand $a = 0$ et $b = 0$, on retrouve les fonctions paires et impaires : on étudie alors $f$ sur $D \cap [0\,;+\infty[$ seulement.
:::

### Changer de repère pour simplifier

Pour tester un centre $\Omega(a\,;b)$, on peut changer d'**origine** : $X = x - a$ et $Y = y - b$. La courbe a pour équation $Y = f(a + X) - b$ dans le repère $(\Omega, \vec\imath, \vec\jmath)$, et $\Omega$ est un centre de symétrie si et seulement si cette fonction de $X$ est impaire.

:::method[Changement de repère avec un nouveau vecteur]
On passe à un repère $(I, \vec u, \vec\jmath)$ avec $I(x_I\,;y_I)$ et $\vec u = \vec\imath + \vec\jmath$. Un point $M$ de coordonnées $(X\,;Y)$ dans le nouveau repère vérifie $\overrightarrow{IM} = X\vec u + Y\vec\jmath = X\vec\imath + (X + Y)\vec\jmath$, donc
$$
x = x_I + X, \qquad y = y_I + X + Y,
$$
d'où $Y = y - y_I - (x - x_I)$. On remplace $y$ par $f(x)$, puis $x$ par $x_I + X$.

Exemple. Pour $f(x) = x + \dfrac{1}{x - 1}$ et $I(1\,;1)$ : $Y = f(x) - 1 - (x - 1) = \dfrac{1}{x-1} = \dfrac{1}{X}$. Dans $(I, \vec u, \vec\jmath)$ la courbe est l'hyperbole d'équation $Y = \dfrac1X$.
:::

## 2. Fonctions polynômes

:::theorem[Comportement à l'infini]
Soit $f$ une fonction polynôme de degré $n \geq 2$. Alors $\lim\limits_{x \to \pm\infty} f(x) = \pm\infty$ (selon le signe du coefficient dominant et la parité de $n$), et
$$
\lim_{x \to \pm\infty}\frac{f(x)}{x} = \pm\infty.
$$
La courbe admet alors une **branche parabolique de direction $(O, \vec\jmath)$** au voisinage de l'infini : elle s'éloigne plus vite qu'une droite.
:::

::::example[Étude complète de $f(x) = x^3 - 3x^2 + 2$]
**1. Ensemble de définition.** $D_f = \mathbb R$.

**2. Symétrie.** $\Omega(1\,;0)$ est un centre de symétrie (voir plus haut).

**3. Limites.** $\lim\limits_{x \to -\infty} f(x) = -\infty$ et $\lim\limits_{x \to +\infty} f(x) = +\infty$ ; comme $\frac{f(x)}{x} = x^2 - 3x + \frac2x \to +\infty$, branche parabolique de direction $(O, \vec\jmath)$.

**4. Dérivée.** $f$ est dérivable sur $\mathbb R$ et $f'(x) = 3x^2 - 6x = 3x(x-2)$.

**5. Tableau de variation.**

:::signs
| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $3x$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x-2$ | | $-$ | | $-$ | $0$ | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

$f$ est croissante sur $]-\infty\,;0]$, décroissante sur $[0\,;2]$, croissante sur $[2\,;+\infty[$, avec un maximum local $f(0) = 2$ et un minimum local $f(2) = -2$.

**6. Points particuliers.** $f(x) = (x-1)(x^2 - 2x - 2)$ : les points d'intersection avec l'axe des abscisses sont $(1 - \sqrt3\,;0)$, $(1\,;0)$ et $(1 + \sqrt3\,;0)$. La tangente en $\Omega$ a pour équation $y = f'(1)(x-1) + f(1) = -3(x-1)$ ; et $f(x) + 3(x-1) = (x-1)^3$, donc la courbe est **sous** la tangente pour $x < 1$ et **au-dessus** pour $x > 1$ : elle la **traverse** en $\Omega$.
::::

![La courbe de x³ − 3x² + 2](/lessons/images/etude-cubique.svg "La courbe de f(x) = x³ − 3x² + 2 : un maximum local en (0 ; 2), un minimum local en (2 ; −2), un centre de symétrie Ω(1 ; 0) où la courbe traverse sa tangente.")

:::method[Nombre de solutions de $f(x) = m$]
On lit le tableau de variation : on compte combien de fois la droite horizontale $y = m$ coupe la courbe. Pour la cubique ci-dessus :

| $m$ | $m < -2$ | $m = -2$ | $-2 < m < 2$ | $m = 2$ | $m > 2$ |
|---|---|---|---|---|---|
| nombre de solutions | $1$ | $2$ | $3$ | $2$ | $1$ |

Contrôle pour $m = 2$ : $x^3 - 3x^2 = 0 \iff x^2(x - 3) = 0$, soit $x = 0$ (double) ou $x = 3$ : deux solutions distinctes. ✓
:::

:::method[Prouver qu'une équation a exactement trois racines]
Avec un tableau de variation, on utilise le théorème des valeurs intermédiaires sur **chaque intervalle où $f$ est continue et strictement monotone** : si $f$ change de signe sur l'intervalle, il y a **exactement une** solution. Ici $f(-1) = -2 < 0$ et $f(0) = 2 > 0$ ; $f(0) = 2 > 0$ et $f(2) = -2 < 0$ ; $f(2) = -2 < 0$ et $f(3) = 2 > 0$. Donc $f(x) = 0$ a exactement une solution dans chacun des intervalles $]-1\,;0[$, $]0\,;2[$ et $]2\,;3[$ : trois solutions en tout.
:::

## 3. Fonctions rationnelles

Une fonction rationnelle est un quotient de deux polynômes. Elle n'est pas définie là où le dénominateur s'annule, et la courbe a en général des **asymptotes**.

:::method[Écrire $f(x) = ax + b + \dfrac{c}{x - x_0}$]
Quand le degré du numérateur dépasse d'une unité celui du dénominateur, on fait la **division euclidienne** (ou on identifie) pour faire apparaître $ax + b + \frac{c}{x-x_0}$. La droite $y = ax + b$ est alors asymptote oblique et $x = x_0$ asymptote verticale, car $\frac{c}{x - x_0}$ tend vers $0$ à l'infini.

Exemple. $\dfrac{2x^2 - 3x + 4}{x - 2} = 2x + 1 + \dfrac{6}{x - 2}$, car $(2x+1)(x-2) + 6 = 2x^2 - 3x - 2 + 6 = 2x^2 - 3x + 4$ ✓.
:::

:::property[Fonctions homographiques]
Soit $f(x) = \dfrac{ax + b}{cx + d}$ avec $c \neq 0$ et $ad - bc \neq 0$. Sur chaque intervalle de son ensemble de définition,
$$
f'(x) = \frac{ad - bc}{(cx + d)^2}.
$$
Le signe de $f'$ est celui de $ad - bc$ : $f$ est **croissante** sur chaque intervalle si $ad - bc > 0$, **décroissante** si $ad - bc < 0$. La courbe est une hyperbole : elle a une asymptote verticale $x = -\frac dc$ et une asymptote horizontale $y = \frac ac$, et leur intersection est un centre de symétrie.
:::

:::example[Une homographique]
$f(x) = \dfrac{2x + 1}{x - 3} = 2 + \dfrac{7}{x - 3}$ (car $2(x-3) + 7 = 2x + 1$). Ici $ad - bc = 2 \times (-3) - 1 \times 1 = -7 < 0$, et on le retrouve avec $f'(x) = -\dfrac{7}{(x-3)^2}$ : $f$ est décroissante sur $]-\infty\,;3[$ et sur $]3\,;+\infty[$. Asymptotes : $x = 3$ et $y = 2$ ; centre de symétrie $(3\,;2)$.
:::

### Étude de $f(x) = \dfrac{x^2 - x + 1}{x - 1}$

::::example[Étude complète]
**1. Définition.** $D_f = \mathbb R \setminus \{1\}$. Par division, $f(x) = x + \dfrac{1}{x - 1}$ (car $x(x-1) + 1 = x^2 - x + 1$).

**2. Centre de symétrie.** $2 - x \in D_f$ si $x \in D_f$, et $f(2 - x) = 2 - x + \dfrac{1}{1 - x} = 2 - x - \dfrac{1}{x-1} = 2 - f(x)$ : le point $I(1\,;1)$ est un centre de symétrie.

**3. Limites et asymptotes.**
- $\lim\limits_{x \to 1^+} f(x) = +\infty$ et $\lim\limits_{x \to 1^-} f(x) = -\infty$ : la droite $x = 1$ est **asymptote verticale**.
- $f(x) - x = \dfrac{1}{x-1} \to 0$ quand $x \to \pm\infty$ : la droite $y = x$ est **asymptote oblique**. Position : $f(x) - x$ est positif pour $x > 1$ (la courbe est **au-dessus**) et négatif pour $x < 1$ (**en dessous**).

**4. Dérivée.** $f'(x) = 1 - \dfrac{1}{(x-1)^2} = \dfrac{(x-1)^2 - 1}{(x-1)^2} = \dfrac{x(x-2)}{(x-1)^2}$.

**5. Tableau de variation.**

:::signs
| $x$ | $-\infty$ | | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $x(x-2)$ | | $+$ | $0$ | $-$ | | $-$ | $0$ | $+$ | |
| $(x-1)^2$ | | $+$ | | $+$ | $0$ | $+$ | | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
:::

Donc : $f$ croît sur $]-\infty\,;0]$ de $-\infty$ à $f(0) = -1$ ; décroît sur $[0\,;1[$ jusqu'à $-\infty$ ; décroît sur $]1\,;2]$ de $+\infty$ à $f(2) = 3$ ; croît sur $[2\,;+\infty[$ vers $+\infty$. Maximum local $-1$ en $0$, minimum local $3$ en $2$.
::::

![La courbe de x + 1/(x−1) et ses deux asymptotes](/lessons/images/etude-hyperbole-oblique.svg "La courbe de f(x) = x + 1/(x − 1) a deux branches de part et d'autre de l'asymptote verticale x = 1 et s'approche de l'asymptote oblique y = x ; le point I(1 ; 1) est son centre de symétrie.")

:::method[Discuter le nombre d'intersections avec les droites $y = mx$]
Pour $f(x) = x + \frac{1}{x-1}$, on résout $f(x) = mx$ avec $x \neq 1$. En multipliant par $(x - 1)$ :
$$
x(x-1) + 1 = m\,x(x-1) \iff (1 - m)x^2 - (1 - m)x + 1 = 0.
$$
Si $m = 1$, l'équation devient $1 = 0$ : aucune intersection. Sinon, c'est une équation du second degré de discriminant $\Delta = (1-m)^2 - 4(1-m) = (m-1)(m+3)$. De plus $x = 1$ n'est jamais solution (on obtiendrait $1 = 0$). Donc :

| $m$ | $m < -3$ | $m = -3$ | $-3 < m \leq 1$ | $m > 1$ |
|---|---|---|---|---|
| intersections avec $y = mx$ | $2$ | $1$ (tangente) | $0$ | $2$ |

Quand il y a deux points d'intersection $M'$ et $M''$, la somme de leurs abscisses vaut $-\dfrac{b}{a} = \dfrac{1-m}{1-m} = 1$ : le milieu $M$ de $[M'M'']$ a pour abscisse $\dfrac12$, **quel que soit $m$**. Il appartient aussi à la droite $y = mx$, donc son ordonnée est $\dfrac m2$. L'ensemble des milieux est la droite $x = \dfrac12$ privée des points d'ordonnée $y \in \left[-\dfrac32\,;\dfrac12\right]$, qui correspondent à $m \in [-3\,;1]$ (où il n'y a pas deux points distincts).
:::

## 4. Fonctions avec une racine carrée

:::example[Étude de $f(x) = \sqrt{x^2 - 2x - 3}$]
**1. Définition.** $x^2 - 2x - 3 = (x-3)(x+1) \geq 0 \iff x \in {]-\infty\,;-1]} \cup [3\,;+\infty[$.

**2. Symétrie.** $x^2 - 2x - 3 = (x-1)^2 - 4$ et $(2 - x - 1)^2 = (x-1)^2$ : $f(2 - x) = f(x)$. La droite $x = 1$ est un **axe de symétrie** ; on étudie $f$ sur $[3\,;+\infty[$ puis on complète par symétrie.

**3. Dérivabilité.** Sur $]-\infty\,;-1[ \cup ]3\,;+\infty[$, la fonction $x^2 - 2x - 3$ est dérivable et strictement positive, donc
$$
f'(x) = \frac{2x - 2}{2\sqrt{x^2 - 2x - 3}} = \frac{x - 1}{\sqrt{x^2 - 2x - 3}}.
$$
Sur $]3\,;+\infty[$, $f' > 0$ : $f$ croît. Sur $]-\infty\,;-1[$, $f' < 0$ : $f$ décroît.

**4. Demi-tangentes verticales.** Aux bornes, étudions le taux d'accroissement. À droite de $3$ :
$$
\frac{f(x) - f(3)}{x - 3} = \frac{\sqrt{(x-3)(x+1)}}{x - 3} = \sqrt{\frac{x+1}{x-3}} \xrightarrow[x \to 3^+]{} +\infty.
$$
$f$ n'est pas dérivable à droite en $3$ et $\mathcal C$ admet en $(3\,;0)$ une **demi-tangente verticale**. Par symétrie, de même en $(-1\,;0)$ (le taux d'accroissement à gauche tend vers $-\infty$).

**5. Asymptotes obliques.** Pour $x \to +\infty$, on multiplie par la quantité conjuguée :
$$
f(x) - (x - 1) = \frac{(x-1)^2 - 4 - (x-1)^2}{\sqrt{(x-1)^2 - 4} + (x - 1)} = \frac{-4}{\sqrt{x^2 - 2x - 3} + x - 1} \to 0.
$$
La droite $y = x - 1$ est asymptote en $+\infty$, avec la courbe **en dessous** (la différence est négative). Par symétrie par rapport à $x = 1$, la droite $y = -x + 1$ est asymptote en $-\infty$.

**6. Tableau.** $f$ est décroissante de $+\infty$ à $0$ sur $]-\infty\,;-1]$ et croissante de $0$ à $+\infty$ sur $[3\,;+\infty[$.
:::

![La courbe de la racine de x²−2x−3](/lessons/images/etude-racine-asymptotes.svg "La courbe de f(x) = √(x² − 2x − 3) : deux branches symétriques par rapport à x = 1, deux demi-tangentes verticales en (−1 ; 0) et (3 ; 0), et deux asymptotes obliques y = x − 1 et y = 1 − x.")

:::remark[Un moyen de reconnaître le cas]
Pour $\sqrt{ax^2 + bx + c}$, on met d'abord le trinôme sous **forme canonique** : cela révèle l'axe de symétrie $x = -\frac{b}{2a}$ et donne les asymptotes à l'aide de la quantité conjuguée. Si le discriminant est positif et $a > 0$, il y a deux demi-tangentes verticales aux racines.
:::

## 5. Courbes de fonctions associées

Connaissant la courbe $\mathcal C_f$, on obtient sans calcul celle des fonctions suivantes.

| Fonction | Construction à partir de $\mathcal C_f$ | Effet sur les variations |
|---|---|---|
| $-f$ | symétrique par rapport à l'axe $(Ox)$ | variations **renversées** |
| $\lvert f \rvert$ | on garde la partie au-dessus de $(Ox)$ ; on retourne celle qui est en dessous | inchangées là où $f \geq 0$, renversées là où $f < 0$ |
| $x \mapsto f(x - a) + b$ | translation de vecteur $(a\,;b)$ | inchangées |
| $x \mapsto f(-x)$ | symétrique par rapport à l'axe $(Oy)$ | renversées |
| $x \mapsto f(\lvert x \rvert)$ | on garde la partie $x \geq 0$ et on la symétrise par rapport à $(Oy)$ | paire : copie de $f$ sur $[0\,;+\infty[$ |
| $x \mapsto kf(x)$, $k > 0$ | dilatation verticale de rapport $k$ | inchangées |

:::example[Avec la cubique]
Avec $f(x) = x^3 - 3x^2 + 2$, la fonction $g(x) = f(x) - 2 = x^3 - 3x^2$ a pour courbe celle de $f$ descendue de $2$ : le maximum devient $0$ en $x = 0$ et le minimum $-4$ en $x = 2$. La courbe de $\lvert f \rvert$ remonte la partie négative : $\lvert f \rvert$ a un minimum $0$ en chaque racine et des maxima $2$ en $x = 0$ et $2$ en $x = 2$.
:::

:::property[Fonction réciproque]
Si $f$ est continue et strictement monotone sur un intervalle $I$, elle réalise une bijection de $I$ sur $f(I)$ et les courbes de $f$ et de sa réciproque sont **symétriques par rapport à la droite $y = x$** (repère orthonormé). Exemple : $x \mapsto x^2 - 2x - 3$ sur $[1\,;+\infty[$ et $x \mapsto 1 + \sqrt{x + 4}$ sur $[-4\,;+\infty[$.
:::

## Vérifie-toi

::::check[Symétrie]
Montrer que $f(x) = \dfrac{x}{x^2 + 1}$ est impaire, puis que $g(x) = \dfrac{1}{x^2 - 4x + 5}$ admet la droite $x = 2$ comme axe de symétrie.

:::answer
$f(-x) = \dfrac{-x}{x^2+1} = -f(x)$ : impaire (donc $O$ est centre de symétrie). Pour $g$, $(4 - x)^2 - 4(4 - x) + 5 = x^2 - 4x + 5$, donc $g(4 - x) = g(x)$ : l'axe est $x = 2$.
:::
::::

::::check[Décomposition]
Écrire $f(x) = \dfrac{x^2 + 3x - 1}{x + 1}$ sous la forme $ax + b + \dfrac{c}{x+1}$.

:::answer
$(x + 2)(x + 1) = x^2 + 3x + 2$, donc $x^2 + 3x - 1 = (x+2)(x+1) - 3$ et $f(x) = x + 2 - \dfrac{3}{x + 1}$. Asymptotes : $x = -1$ et $y = x + 2$.
:::
::::

::::check[Nombre de solutions]
Combien de solutions l'équation $x^3 - 3x^2 + 2 = 1$ possède-t-elle ?

:::answer
$m = 1$ vérifie $-2 < 1 < 2$ : **trois** solutions (une dans chacun des intervalles où la fonction est strictement monotone).
:::
::::

::::check[Un changement de repère]
Dans le repère $(I, \vec u, \vec\jmath)$ avec $I(2\,;1)$ et $\vec u = \vec\imath + \vec\jmath$, trouver l'équation de la courbe $y = x - 1 + \dfrac{1}{x - 2}$.

:::answer
$Y = y - y_I - (x - x_I) = x - 1 + \dfrac{1}{x-2} - 1 - (x - 2) = \dfrac{1}{x - 2} = \dfrac1X$.
:::
::::

::::challenge
Montrer que les asymptotes de $y = x + \dfrac{1}{x-1}$ se coupent en son centre de symétrie $I(1\,;1)$, puis que tout point $M(x\,;y)$ de la courbe vérifie $\bigl(y - x\bigr)\bigl(x - 1\bigr) = 1$.

:::answer
Les asymptotes $x = 1$ et $y = x$ se coupent en $(1\,;1) = I$. Pour tout $x \neq 1$ : $y - x = \dfrac{1}{x-1}$, donc $(y - x)(x - 1) = 1$ : le produit de la distance verticale à l'asymptote oblique par la distance horizontale à l'asymptote verticale est constant, c'est la propriété caractéristique d'une hyperbole.
:::
::::

:::summary
- Plan d'étude : définition, symétries, limites et asymptotes, dérivée et signe, tableau de variation, points particuliers, tracé.
- **Axe** $x = a$ : $f(2a - x) = f(x)$. **Centre** $(a\,;b)$ : $f(2a - x) = 2b - f(x)$.
- Polynôme de degré $\geq 2$ : branche parabolique de direction $(O, \vec\jmath)$.
- $f(x) = ax + b + \frac{c}{x - x_0}$ : asymptotes $x = x_0$ et $y = ax + b$. Homographique : $f' = \frac{ad - bc}{(cx+d)^2}$.
- $\sqrt{u}$ : domaine $u \geq 0$, $f' = \frac{u'}{2\sqrt u}$ ; **demi-tangente verticale** là où le taux d'accroissement tend vers $\pm\infty$.
- $f(x) - \text{(droite)} \to 0$ se démontre avec la quantité conjuguée pour une racine.
- TVI sur chaque intervalle monotone : une solution exactement quand $f$ change de signe.
:::
