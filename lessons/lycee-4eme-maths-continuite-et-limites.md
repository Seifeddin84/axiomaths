---
title: "Continuité et limites : limites de fonctions, asymptotes, continuité et théorème des valeurs intermédiaires"
slug: "lycee-4eme-maths-continuite-et-limites"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Continuité et limites"
summary: "Limites d'une fonction en un point et à l'infini, formes indéterminées, asymptotes, composition, gendarmes et limites trigonométriques, continuité en un point et sur un intervalle, prolongement par continuité, théorème des valeurs intermédiaires et dichotomie, image d'un intervalle."
prerequisites: ["Limites de suites", "Fonctions usuelles", "Trigonométrie"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Continuité et limites »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Un thermomètre ne saute pas de $10\,°$C à $20\,°$C sans passer par $15\,°$C. Un avion ne passe pas de $0$ à $10\,000$ m sans traverser toutes les altitudes. Cette évidence physique s'appelle la **continuité**, et elle a une conséquence géniale : **si une quantité change de signe, elle s'annule quelque part**. Cela permet de prouver qu'une équation a une solution sans la calculer.

:::intuition
Il y a deux idées. La **limite** décrit ce que fait $f(x)$ quand $x$ s'approche d'un point (ou de l'infini), **sans regarder la valeur en ce point**. La **continuité** dit que la limite en $a$ est exactement la valeur $f(a)$ : il n'y a ni trou, ni saut. Le dessin se trace d'un trait. Le théorème des valeurs intermédiaires transforme cette image en un outil : un trait qui part d'en bas et arrive en haut **coupe forcément** toute ligne horizontale intermédiaire.
:::

## 1. Limites de fonctions

### Les quatre situations

On note $\displaystyle\lim_{x \to a}f(x) = \ell$ quand $f(x)$ se rapproche autant qu'on veut de $\ell$ dès que $x$ est assez proche de $a$ (sans que $x = a$ soit nécessaire). Selon que $a$ et $\ell$ sont des réels ou $\pm\infty$, quatre situations :

| $a$ | $\ell$ | Ce que ça dit | Conséquence graphique |
|---|---|---|---|
| réel | réel | $f(x) \to \ell$ quand $x \to a$ | un point de la courbe (ou un trou) en $(a\,;\ell)$ |
| réel | $\pm\infty$ | $f(x)$ explose près de $a$ | **asymptote verticale** $x = a$ |
| $\pm\infty$ | réel | $f(x) \to \ell$ quand $x \to \pm\infty$ | **asymptote horizontale** $y = \ell$ |
| $\pm\infty$ | $\pm\infty$ | $f(x)$ part à l'infini quand $x$ y va | branche infinie |

:::definition[Limites à gauche et à droite]
$\displaystyle\lim_{x \to a^-}f(x)$ est la limite quand $x$ tend vers $a$ **en restant inférieur à $a$**, et $\displaystyle\lim_{x \to a^+}f(x)$ celle avec $x > a$. La limite en $a$ existe et vaut $\ell$ **si et seulement si** les deux limites existent et valent $\ell$.
:::

:::example[Une asymptote verticale, deux côtés]
$f(x) = \dfrac{1}{x - 1}$. Quand $x \to 1^+$, $x - 1$ est petit **positif**, donc $f(x) \to +\infty$ ; quand $x \to 1^-$, $x - 1$ est petit **négatif**, donc $f(x) \to -\infty$. Il n'y a pas de limite en $1$ (les deux côtés disent des choses opposées), mais il y a une **asymptote verticale** $x = 1$.
:::

### Calculer une limite

Les règles sont les mêmes que pour les suites (§2 du chapitre « Suites réelles ») : somme, produit, quotient, composée. On retrouve les **quatre formes indéterminées** $\infty - \infty$, $0 \times \infty$, $\dfrac\infty\infty$, $\dfrac00$. Voici comment les lever.

:::method[Lever une forme indéterminée]
- **Polynôme ou fraction rationnelle à l'infini** : on garde le terme de plus haut degré. $\lim\limits_{x \to +\infty}\dfrac{3x^2 - x}{x^2 + 2} = \lim\limits_{x \to +\infty}\dfrac{3x^2}{x^2} = 3$. Contrôle : pour $x = 10^6$, le quotient vaut $2{,}999999$.
- **$\dfrac00$ avec un facteur commun** : on factorise et on simplifie. $\dfrac{x^2 - 1}{x - 1} = \dfrac{(x - 1)(x + 1)}{x - 1} = x + 1 \to 2$ quand $x \to 1$ (on simplifie car $x \neq 1$ dans la limite).
- **Racines carrées** : on multiplie par la **quantité conjuguée**. $\dfrac{\sqrt{x + 4} - 2}{x} = \dfrac{(x + 4) - 4}{x\big(\sqrt{x + 4} + 2\big)} = \dfrac{1}{\sqrt{x + 4} + 2} \to \dfrac14$ quand $x \to 0$. Contrôle : en $x = 0{,}001$, on trouve $0{,}249984$.
:::

### Limites et asymptotes obliques

:::definition[Asymptote oblique]
La droite $\Delta : y = ax + b$ ($a \neq 0$) est **asymptote oblique** à $\mathcal C_f$ en $+\infty$ si
$$
\lim_{x \to +\infty}\big(f(x) - (ax + b)\big) = 0.
$$
Même chose en $-\infty$. La **position** de la courbe par rapport à $\Delta$ est donnée par le signe de $f(x) - (ax + b)$.
:::

:::example[Deux asymptotes d'une fraction]
$f(x) = \dfrac{2x^2 + 1}{x - 1}$. Une division donne $2x^2 + 1 = (x - 1)(2x + 2) + 3$, donc
$$
f(x) = 2x + 2 + \dfrac{3}{x - 1}.
$$
Comme $\dfrac{3}{x - 1} \to 0$ en $\pm\infty$, la droite $y = 2x + 2$ est **asymptote oblique**. Comme $\dfrac{3}{x - 1} \to \pm\infty$ quand $x \to 1^\pm$, la droite $x = 1$ est **asymptote verticale**. Position : $f(x) - (2x + 2) = \dfrac{3}{x - 1}$ est positif pour $x > 1$ (courbe au-dessus) et négatif pour $x < 1$ (courbe en dessous). Contrôle : en $x = 1000$, l'écart vaut $0{,}003$.
:::

### Composition et comparaison

:::theorem[Limite d'une composée]
Si $\displaystyle\lim_{x \to a}f(x) = b$ et $\displaystyle\lim_{y \to b}g(y) = \ell$, alors $\displaystyle\lim_{x \to a}g\big(f(x)\big) = \ell$ (avec $a$, $b$, $\ell$ réels ou infinis).
:::

:::example[Un changement de variable]
$\displaystyle\lim_{x \to +\infty}\cos\dfrac1x$ : $\dfrac1x \to 0$ et $\cos$ est continue en $0$ avec $\cos 0 = 1$. La limite vaut $1$.
:::

:::theorem[Comparaison et gendarmes]
Soit $f$, $g$, $h$ trois fonctions définies près de $a$ (ou à l'infini).

- Si $f \leq g$ et $f \to +\infty$, alors $g \to +\infty$.
- Si $f \leq g \leq h$ et $f \to \ell$, $h \to \ell$, alors $g \to \ell$.
- Si $\lvert f(x) - \ell\rvert \leq h(x)$ avec $h \to 0$, alors $f \to \ell$.
:::

:::example[Une oscillation écrasée]
$\displaystyle\lim_{x \to +\infty}\dfrac{\sin x}{x}$ : $\left\lvert\dfrac{\sin x}{x}\right\rvert \leq \dfrac1x \to 0$, donc la limite est $0$. Et $\displaystyle\lim_{x \to 0}x^2\sin\dfrac1x = 0$, car $\left\lvert x^2\sin\dfrac1x\right\rvert \leq x^2 \to 0$. Contrôle : en $x = 0{,}001$, $x^2\sin\dfrac1x = 8{,}3\times 10^{-7}$.
:::

### Limites trigonométriques

:::theorem[Limites de référence]{wiki="Limites de référence des fonctions"}
$$
\lim_{x \to 0}\dfrac{\sin x}{x} = 1,\qquad
\lim_{x \to 0}\dfrac{\tan x}{x} = 1,\qquad
\lim_{x \to 0}\dfrac{1 - \cos x}{x^2} = \dfrac12.
$$
:::

:::proof[$\dfrac{\sin x}{x} \to 1$ et ses conséquences]
| Étape | Justification |
|---|---|
| Pour $0 < x < \dfrac\pi2$ : $\sin x < x < \tan x$ | aires du triangle, du secteur et du grand triangle sur le cercle trigonométrique |
| En divisant par $\sin x > 0$ : $1 < \dfrac{x}{\sin x} < \dfrac{1}{\cos x}$, soit $\cos x < \dfrac{\sin x}{x} < 1$ | on passe à l'inverse |
| $\cos x \to 1$ quand $x \to 0$ | continuité de $\cos$ |
| donc $\dfrac{\sin x}{x} \to 1$ pour $x \to 0^+$ | gendarmes |
| $\dfrac{\sin x}{x}$ est paire, donc même limite en $0^-$ | $\dfrac{\sin(-x)}{-x} = \dfrac{\sin x}{x}$ |
| $\dfrac{\tan x}{x} = \dfrac{\sin x}{x}\times\dfrac{1}{\cos x} \to 1\times 1$ | produit |
| $\dfrac{1 - \cos x}{x^2} = \dfrac{2\sin^2\frac x2}{x^2} = \dfrac12\left(\dfrac{\sin\frac x2}{\frac x2}\right)^2 \to \dfrac12$ | $1 - \cos x = 2\sin^2\dfrac x2$ |
:::

:::example[Les chiffres]
En $x = 0{,}01$ : $\dfrac{\sin x}{x} = 0{,}99998$, $\dfrac{\tan x}{x} = 1{,}00003$, $\dfrac{1 - \cos x}{x^2} = 0{,}49999$. À l'œil nu, on lit $1$, $1$ et $\dfrac12$.
:::

## 2. Continuité

### Définition

:::definition[Continuité en un point, sur un intervalle]
Soit $f$ définie sur un intervalle $I$ et $a \in I$. On dit que $f$ est **continue en $a$** si
$$
\lim_{x \to a}f(x) = f(a).
$$
$f$ est **continue sur $I$** si elle est continue en tout point de $I$.
:::

Trois choses à vérifier : $f(a)$ existe, la limite en $a$ existe, et **elles sont égales**. Si l'une des trois échoue, il y a une discontinuité.

:::property[Fonctions continues usuelles]
- Les fonctions **polynômes** sont continues sur $\mathbb R$ ; les **fractions rationnelles** sont continues sur leur ensemble de définition.
- $x \mapsto \sqrt x$ est continue sur $[0\,;+\infty[$ ; $\lvert x\rvert$, $\sin$, $\cos$ sont continues sur $\mathbb R$ ; $\tan$ l'est sur chaque intervalle de son domaine.
- La **somme**, le **produit**, le **quotient** (dénominateur non nul) et la **composée** de fonctions continues sont continues.
:::

:::example[Un exemple de non-continuité]
La partie entière $E(x)$ saute de $0$ à $1$ en $x = 1$ : pour $x \to 1^-$, $E(x) = 0$, pour $x \to 1^+$, $E(x) = 1$, et $E(1) = 1$. Les limites à gauche et à droite diffèrent : **pas de limite**, donc pas continue en $1$. Elle est continue sur chaque intervalle $]n\,;n + 1[$.
:::

### Raccorder, prolonger

:::method[Continuité d'une fonction définie par morceaux]
En un point de raccord $a$ : calculer $\lim\limits_{x \to a^-}f$, $\lim\limits_{x \to a^+}f$ et $f(a)$. Les trois doivent être **égaux**. S'il y a un paramètre, on écrit cette égalité et on la résout.

Pour
$$
f(x) = \begin{cases} ax + 1 & \text{si } x \leq 2 \\ x^2 - 1 & \text{si } x > 2 \end{cases}
$$
on a $f(2) = 2a + 1$, et $\lim\limits_{x \to 2^+}(x^2 - 1) = 3$. Continuité en $2$ : $2a + 1 = 3$, soit $a = 1$. Contrôle : $f(2) = 3$ des deux côtés ✓.
:::

:::definition[Prolongement par continuité]
Si $f$ n'est pas définie en $a$ mais a une **limite finie $\ell$** en $a$, la fonction $\tilde f$ égale à $f$ partout et à $\ell$ en $a$ est le **prolongement par continuité** de $f$ en $a$. Elle est continue en $a$.
:::

:::example[Boucher un trou]
$f(x) = \dfrac{\sin x}{x}$ n'est pas définie en $0$, mais $\lim\limits_{x \to 0}\dfrac{\sin x}{x} = 1$. On pose $\tilde f(0) = 1$ : $\tilde f$ est continue sur $\mathbb R$. De même $\dfrac{x^2 - 1}{x - 1} = x + 1$ se prolonge par $2$ en $x = 1$. En revanche $\dfrac{1}{x}$ n'a pas de limite finie en $0$ : on ne peut pas la prolonger.
:::

:::warning
**Une fonction qui a une limite en $a$ n'est pas forcément continue en $a$.** Avec $g(x) = \dfrac{x^2 - 1}{x - 1}$ pour $x \neq 1$ et $g(1) = 0$, la limite en $1$ vaut $2$ mais $g(1) = 0$ : il y a un **trou décalé**. La continuité exige que la valeur **colle** à la limite.
:::

## 3. Le théorème des valeurs intermédiaires

### L'énoncé

:::theorem[Théorème des valeurs intermédiaires]
Soit $f$ une fonction **continue sur $[a\,;b]$**. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un réel $c \in [a\,;b]$** tel que $f(c) = k$.
:::

Ce théorème est admis. Son énoncé est une évidence géométrique : un trait continu qui part de la hauteur $f(a)$ et arrive à la hauteur $f(b)$ coupe toute horizontale intermédiaire. Il est cependant **faux sans la continuité** : la partie entière $E$ vérifie $E(0) = 0$ et $E(2) = 2$, mais ne prend que des valeurs entières, donc jamais la valeur intermédiaire $\dfrac12$.

:::curious[L'idée de la preuve]{theorem="Théorème des valeurs intermédiaires"}
L'idée : couper $[a\,;b]$ en deux, garder la moitié où $f$ « encadre » encore $k$, et recommencer. Les intervalles emboîtés se resserrent sur un point $c$, et la continuité force $f(c) = k$.
:::


:::corollary
**Cas $k = 0$.** Si $f$ est continue sur $[a\,;b]$ et si $f(a)\,f(b) < 0$ (valeurs de signes contraires), alors l'équation $f(x) = 0$ a **au moins une solution** dans $]a\,;b[$.

**Unicité.** Si de plus $f$ est **strictement monotone** sur $[a\,;b]$, la solution est **unique**.
:::

### La méthode de l'existence et de l'unicité

:::method[Montrer qu'une équation $f(x) = k$ a une solution unique]
1. **Continuité** : $f$ est continue sur $[a\,;b]$ (fonctions usuelles).
2. **Monotonie stricte** : on calcule $f'$ et on étudie son signe.
3. **Valeurs aux bornes** : $k$ est compris entre $f(a)$ et $f(b)$.
4. **Conclusion** : par le théorème des valeurs intermédiaires, il existe $c \in [a\,;b]$ tel que $f(c) = k$ ; comme $f$ est strictement monotone, il est unique.
:::

:::example[$\cos x = x$ a une solution unique]
Soit $g(x) = \cos x - x$ sur $[0\,;1]$. $g$ est continue. $g'(x) = -\sin x - 1 < 0$ sur $[0\,;1]$ (car $\sin x \geq 0$ y est), donc $g$ est strictement décroissante. $g(0) = 1 > 0$ et $g(1) = \cos 1 - 1 \approx -0{,}460 < 0$. Donc il existe un **unique** $\alpha \in\, ]0\,;1[$ tel que $\cos\alpha = \alpha$. On ne sait pas le calculer exactement, mais on sait qu'il existe et qu'il est unique ; en fait $\alpha \approx 0{,}7391$.
:::

![Théorème des valeurs intermédiaires et dichotomie pour cos x = x](/lessons/images/m4-tvi-dichotomie.svg "En haut, g(x) = cos x − x vaut 1 en 0 et environ −0,46 en 1 : elle s'annule en α ≈ 0,739. En bas, la dichotomie coupe l'intervalle en deux à chaque pas : on garde la moitié où g change de signe.")

### La dichotomie

Le théorème dit **qu'il existe** une solution. La dichotomie la **trouve** : on coupe en deux, on regarde le signe au milieu, on garde la moitié où le signe change.

| Pas | Intervalle | Milieu $m$ | $g(m)$ | On garde |
|---|---|---|---|---|
| $1$ | $[0\,;1]$ | $0{,}5$ | $+0{,}378$ | $[0{,}5\,;1]$ |
| $2$ | $[0{,}5\,;1]$ | $0{,}75$ | $-0{,}018$ | $[0{,}5\,;0{,}75]$ |
| $3$ | $[0{,}5\,;0{,}75]$ | $0{,}625$ | $+0{,}186$ | $[0{,}625\,;0{,}75]$ |
| $4$ | $[0{,}625\,;0{,}75]$ | $0{,}6875$ | $+0{,}085$ | $[0{,}6875\,;0{,}75]$ |
| $5$ | $[0{,}6875\,;0{,}75]$ | $0{,}71875$ | $+0{,}034$ | $[0{,}71875\,;0{,}75]$ |

La longueur de l'intervalle est **divisée par deux à chaque pas** : après $n$ pas, elle vaut $\dfrac{1}{2^n}$. Pour une précision de $10^{-3}$, il suffit de $10$ pas ($2^{-10} \approx 0{,}00098$). C'est lent mais **infaillible**.

:::example[Un polynôme de degré 3 a trois racines]
$h(x) = x^3 - 3x + 1$ est continue. Ses valeurs : $h(-2) = -1$, $h(-1) = 3$, $h(0) = 1$, $h(1) = -1$, $h(2) = 3$. Trois changements de signe : une racine dans $]-2\,;-1[$, une dans $]0\,;1[$, une dans $]1\,;2[$. Un polynôme de degré $3$ a au plus $3$ racines : **il y en a exactement trois**, environ $-1{,}879$, $0{,}347$ et $1{,}532$.
:::

:::example[Un point fixe garanti]
Si $f$ est continue de $[0\,;1]$ dans $[0\,;1]$, alors $f$ a un **point fixe** ($f(c) = c$). En effet, $g(x) = f(x) - x$ vérifie $g(0) = f(0) \geq 0$ et $g(1) = f(1) - 1 \leq 0$ : par le TVI, $g$ s'annule. Les limites possibles d'une suite $u_{n+1} = f(u_n)$ sont des points fixes : ce résultat garantit qu'il y en a au moins un.
:::

### Image d'un intervalle

:::theorem[Image d'un intervalle par une fonction continue]
- L'image d'un **intervalle** par une fonction continue est un **intervalle**.
- L'image d'un **segment** $[a\,;b]$ par une fonction continue est un **segment** $[m\,;M]$, où $m$ et $M$ sont le minimum et le maximum de $f$ sur $[a\,;b]$ (ils sont **atteints**).
- Si $f$ est continue et **strictement croissante** sur $[a\,;b]$, $f\big([a\,;b]\big) = \big[f(a)\,;f(b)\big]$ ; si elle est strictement décroissante, c'est $\big[f(b)\,;f(a)\big]$.
:::

Pour un intervalle non fermé, on utilise les **limites** aux bornes.

:::example[Image d'un intervalle non borné]
$f(x) = \dfrac{1}{1 + x^2}$ sur $[0\,;+\infty[$ est continue et strictement décroissante. $f(0) = 1$ et $\lim\limits_{x \to +\infty}f(x) = 0$ sans jamais l'atteindre. Donc $f\big([0\,;+\infty[\big) = ]0\,;1]$ : on ferme du côté de $f(0)$, on ouvre du côté de la limite.
:::

## 4. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Limite en $\pm\infty$ d'un polynôme ou d'une fraction | terme de plus haut degré |
| $\dfrac00$ | factoriser et simplifier, ou quantité conjuguée |
| Terme borné fois terme qui tend vers $0$ | gendarmes : $\lvert f - \ell\rvert \leq h \to 0$ |
| Asymptote oblique | $f(x) = ax + b + \varepsilon(x)$ avec $\varepsilon \to 0$ ; position par le signe de $\varepsilon$ |
| Continuité en un point de raccord | limites à gauche et à droite, valeur : trois égalités |
| Trou à boucher | limite finie en $a$, puis prolongement par continuité |
| Une équation $f(x) = k$ a une solution unique | continuité, stricte monotonie, valeurs aux bornes, TVI |
| Valeur approchée d'une solution | dichotomie : $n$ pas donnent une précision de $\dfrac{b - a}{2^n}$ |
| Image d'un intervalle | tableau de variation et limites aux bornes |

## Vérifie-toi

::::check[Limite d'une fraction]
Calculer $\displaystyle\lim_{x \to 2}\dfrac{x^2 - 4}{x - 2}$ et $\displaystyle\lim_{x \to +\infty}\dfrac{5x^3 + x}{2x^3 - 7}$.

:::answer
Pour la première : $\dfrac{x^2 - 4}{x - 2} = x + 2 \to 4$ (on simplifie pour $x \neq 2$). Pour la seconde, on garde les termes dominants : $\dfrac{5x^3}{2x^3} = \dfrac52$.
:::
::::

::::check[Continuité avec un paramètre]
Déterminer $a$ pour que la fonction définie par $f(x) = x^2 + a$ si $x < 1$ et $f(x) = 2x + 3$ si $x \geq 1$ soit continue sur $\mathbb R$.

:::answer
Chaque morceau est continu. En $1$ : $f(1) = 5$ et $\lim\limits_{x \to 1^-}(x^2 + a) = 1 + a$. Il faut $1 + a = 5$, donc $a = 4$.
:::
::::

::::check[Existence et unicité]
Montrer que $x^3 + 2x - 5 = 0$ a une unique solution dans $]1\,;2[$.

:::answer
$g(x) = x^3 + 2x - 5$ est continue, et $g'(x) = 3x^2 + 2 > 0$ : strictement croissante. $g(1) = -2 < 0$ et $g(2) = 7 > 0$. Par le théorème des valeurs intermédiaires, il existe une unique solution, qui vaut environ $1{,}3283$.
:::
::::

::::check[Asymptotes]
Étudier les asymptotes de $f(x) = \dfrac{x^2 + x + 1}{x + 1}$.

:::answer
$x^2 + x + 1 = x(x + 1) + 1$, donc $f(x) = x + \dfrac{1}{x + 1}$. La droite $y = x$ est asymptote oblique (l'écart $\dfrac{1}{x + 1} \to 0$), la droite $x = -1$ est asymptote verticale. Position : $f(x) - x = \dfrac{1}{x + 1}$ est positif pour $x > -1$ et négatif pour $x < -1$.
:::
::::

::::check[Limite trigonométrique]
Calculer $\displaystyle\lim_{x \to 0}\dfrac{\sin 3x}{x}$.

:::answer
$\dfrac{\sin 3x}{x} = 3\times\dfrac{\sin 3x}{3x}$, et avec $u = 3x \to 0$, $\dfrac{\sin u}{u} \to 1$. La limite vaut $3$.
:::
::::

::::challenge
Un randonneur monte du pied d'une montagne à son sommet entre 8 h et 18 h un jour, par un sentier. Le lendemain, il descend entre 8 h et 18 h par le **même sentier**. Montrer qu'il existe une heure du jour où il se trouve au **même endroit** les deux jours.

:::answer
Soit $m(t)$ son altitude (ou sa distance le long du sentier) le jour de la montée, et $d(t)$ le jour de la descente, à l'heure $t \in [8\,;18]$. Ce sont des fonctions continues. Posons $g(t) = m(t) - d(t)$. À 8 h, $m(8)$ est le pied et $d(8)$ le sommet, donc $g(8) < 0$. À 18 h, $m(18)$ est le sommet et $d(18)$ le pied, donc $g(18) > 0$. Par le théorème des valeurs intermédiaires, $g$ s'annule : à cette heure-là, il est au même point les deux jours.
:::
::::

:::summary
- $\lim\limits_{x \to a}f(x) = \ell$ : $f(x)$ s'approche de $\ell$ quand $x$ s'approche de $a$, sans regarder $f(a)$. Elle existe ssi limites à gauche et à droite existent et sont égales.
- Asymptotes : $x = a$ (limite infinie en $a$), $y = \ell$ (limite $\ell$ à l'infini), $y = ax + b$ (écart $\to 0$). Position : signe de l'écart.
- Formes indéterminées : terme dominant, factorisation, quantité conjuguée. Gendarmes : $\lvert f - \ell\rvert \leq h \to 0$.
- $\dfrac{\sin x}{x} \to 1$, $\dfrac{\tan x}{x} \to 1$, $\dfrac{1 - \cos x}{x^2} \to \dfrac12$ en $0$.
- $f$ est **continue en $a$** si $\lim\limits_{x \to a}f(x) = f(a)$. Polynômes, fractions rationnelles, $\sqrt{\ }$, $\sin$, $\cos$, et leurs sommes, produits, quotients, composées sont continus là où ils sont définis. **Prolongement** : limite finie en $a$, on pose $\tilde f(a) = \ell$.
- **TVI** : $f$ continue sur $[a\,;b]$, $k$ entre $f(a)$ et $f(b)$ $\Rightarrow$ il existe $c$ avec $f(c) = k$. Si $f$ est de plus strictement monotone, $c$ est **unique**. Dichotomie pour approcher $c$.
- L'image d'un segment par une fonction continue est un segment ; pour un intervalle non fermé, on utilise les limites.
:::
