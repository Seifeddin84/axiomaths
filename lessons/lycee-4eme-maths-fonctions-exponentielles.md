---
title: "Fonctions exponentielles : définition, dérivée, croissances comparées, équations, base a"
slug: "lycee-4eme-maths-fonctions-exponentielles"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Fonctions exponentielles"
summary: "L'exponentielle comme réciproque du logarithme, la règle somme → produit, la propriété d'être sa propre dérivée, les limites et croissances comparées, les équations et inéquations, deux études de fonctions (dont une courbe en S), puis les exponentielles de base a : intérêts composés et demi-vie."
prerequisites: ["Fonction logarithme népérien", "Fonctions réciproques", "Dérivation", "Limites et continuité"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Fonctions exponentielles »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une colonie de bactéries double toutes les heures. Un capital placé à intérêts composés grandit de $5\,\%$ par an. Un échantillon radioactif perd la moitié de ses atomes tous les $5\,730$ ans (le carbone 14). Dans les trois cas, **la vitesse de variation est proportionnelle à la quantité présente** : plus il y en a, plus ça grandit (ou décroît) vite. Aucune fonction polynôme ne se comporte ainsi : sa dérivée est de degré plus petit, jamais proportionnelle à elle-même.

:::intuition
On cherche une fonction $E$ qui transforme les **sommes en produits** : $E(a + b) = E(a)\times E(b)$. Ajouter des durées revient alors à multiplier des quantités, ce qui est exactement la règle des intérêts composés. Or tu connais déjà la fonction qui fait le trajet inverse : $\ln$ transforme un produit en somme. Il suffit de lui rendre son chemin dans l'autre sens. L'exponentielle, c'est $\ln$ vue dans un miroir.
:::

## 1. Définition

Dans le chapitre sur le logarithme, on a montré que $\ln$ est **continue et strictement croissante** sur $]0\,;+\infty[$, de limites $-\infty$ en $0^+$ et $+\infty$ en $+\infty$. C'est donc une **bijection de $]0\,;+\infty[$ sur $\mathbb R$**, et une bijection a une fonction réciproque.

:::definition[Fonction exponentielle]
La fonction **exponentielle**, notée $\exp$, est la fonction réciproque de $\ln$. Elle est définie sur $\mathbb R$ et, pour tout réel $x$ et tout réel $y > 0$,
$$
y = \exp(x) \iff x = \ln y.
$$
:::

Tout ce qu'on sait sur une fonction réciproque s'applique : $\exp$ est **continue**, **strictement croissante**, et prend toutes les valeurs de $]0\,;+\infty[$. Deux égalités à connaître par cœur :

$$
\ln\bigl(\exp(x)\bigr) = x \quad (x \in \mathbb R)
\qquad\text{et}\qquad
\exp(\ln y) = y \quad (y > 0).
$$

On lit tout de suite deux valeurs : $\ln 1 = 0$ donne $\exp(0) = 1$, et $\ln e = 1$ donne $\exp(1) = e$.

:::property[Premières propriétés]
- $\exp(x) > 0$ pour tout réel $x$ (l'image de $\exp$ est $]0\,;+\infty[$).
- $\exp$ est strictement croissante : $\exp(a) < \exp(b) \iff a < b$, et $\exp(a) = \exp(b) \iff a = b$.
- La courbe de $\exp$ est la **symétrique** de celle de $\ln$ par rapport à la droite $y = x$.
:::

### La notation $e^x$

Pour un entier $n$, la règle de la puissance donne $\ln(e^n) = n\ln e = n$. Donc $\exp(n) = e^n$ (la puissance $n$-ième de $e$). On étend cette écriture à tout réel et on pose

$$
\exp(x) = e^x.
$$

Ce n'est pas qu'une écriture commode : les règles de calcul des puissances vont rester vraies, comme on le voit au paragraphe suivant.

![Courbes de exp et ln, et famille des fonctions aˣ](/lessons/images/m4-exp-graphe.svg "À gauche, la courbe de exp et celle de ln se déduisent l'une de l'autre par la symétrie d'axe y = x : (0, 1) et (1, e) sont envoyés sur (1, 0) et (e, 1). La tangente à exp en 0 est y = x + 1. À droite, les fonctions aˣ passent toutes par (0, 1) ; elles croissent si a > 1 et décroissent si 0 < a < 1.")

:::example[Passer de $\ln$ à $\exp$ et retour]
- $\ln x = 3 \iff x = e^3 \approx 20{,}0855$.
- $e^x = 5 \iff x = \ln 5 \approx 1{,}6094$. Contrôle : $e^{1{,}6094} \approx 4{,}9998$ ✓.
- $e^x = -2$ n'a **aucune solution** : $e^x > 0$ pour tout $x$.
:::

## 2. La relation fonctionnelle

:::theorem[Somme devient produit]
Pour tous réels $a$ et $b$ :
$$
e^{a + b} = e^a \times e^b, \qquad
e^{-a} = \dfrac{1}{e^a}, \qquad
e^{a - b} = \dfrac{e^a}{e^b}, \qquad
\left(e^a\right)^n = e^{na}\ (n \in \mathbb Z).
$$
:::

:::proof[$e^{a+b} = e^a \times e^b$]
| Étape | Justification |
|---|---|
| $e^a > 0$ et $e^b > 0$, donc leur produit est $> 0$ et on peut prendre son logarithme | $\ln$ est définie sur $]0\,;+\infty[$ |
| $\ln\left(e^a \times e^b\right) = \ln e^a + \ln e^b$ | le logarithme d'un produit |
| $= a + b$ | $\ln(e^x) = x$ |
| donc $e^a \times e^b$ est le nombre dont le logarithme est $a + b$ | définition de la réciproque |
| c'est-à-dire $\textcolor{#ea580c}{e^a \times e^b = e^{a + b}}$ | $y = e^x \iff x = \ln y$ |
:::

Les trois autres formules s'en déduisent : avec $b = -a$, $e^a\times e^{-a} = e^0 = 1$, d'où $e^{-a} = \dfrac1{e^a}$ ; puis $e^{a-b} = e^a\times e^{-b}$ ; et la puissance est une répétition de la somme.

:::example[Un calcul sans calculatrice]
On connaît $e^{0{,}5} \approx 1{,}6487$. Alors $e^{1{,}5} = e^{1 + 0{,}5} = e\times e^{0{,}5} \approx 2{,}71828\times 1{,}6487 \approx 4{,}4817$. Contrôle : la touche $e^x$ donne $4{,}48169$ ✓. De même $e^{0{,}5} = \sqrt e$ : $\left(e^{0{,}5}\right)^2 = e^{1} = e$.
:::

:::method[Simplifier une expression avec $e^x$]
1. **Écrire chaque terme avec la même base $e$.** $\dfrac{1}{e^{2x}} = e^{-2x}$ et $\sqrt{e^x} = e^{x/2}$.
2. **Regrouper les produits en additionnant les exposants**, et les quotients en les soustrayant.
3. **Contrôler avec une valeur.** Par exemple $\dfrac{e^{3x}\times e^{-x}}{e^{2x}}$ : exposants $3x - x - 2x = 0$, donc l'expression vaut $e^0 = 1$ pour tout $x$ (en $x = 1$ : $\dfrac{e^3 e^{-1}}{e^2} = \dfrac{7{,}389}{7{,}389} = 1$ ✓).
:::

## 3. Dérivée : l'exponentielle est sa propre dérivée

Quelle est la pente de la courbe de $\exp$ en un point ? On la déduit de celle de $\ln$ par le théorème de la dérivée d'une réciproque.

:::theorem[Dérivée de l'exponentielle]
$\exp$ est dérivable sur $\mathbb R$ et, pour tout réel $x$,
$$
\left(e^x\right)' = e^x.
$$
:::

:::proof[$\exp' = \exp$]
| Étape | Justification |
|---|---|
| $\ln$ est dérivable sur $]0\,;+\infty[$ et sa dérivée $\dfrac1y$ ne s'annule jamais | dérivée de $\ln$ |
| donc la réciproque $\exp$ est dérivable sur $\mathbb R$ et $\exp'(x) = \dfrac{1}{\ln'\bigl(\exp(x)\bigr)}$ | dérivée d'une fonction réciproque |
| $\ln'\bigl(\exp(x)\bigr) = \dfrac{1}{\exp(x)}$ | $\ln'(y) = \dfrac1y$ avec $y = \exp(x) > 0$ |
| donc $\textcolor{#ea580c}{\exp'(x) = \exp(x)}$ | on inverse |
:::

Retiens ce que ça veut dire : **en chaque point, la pente de la courbe est égale à sa hauteur**. En $x = 0$ la hauteur est $1$ et la pente est $1$ ; en $x = 3$ la hauteur est $20{,}09$ et la pente aussi. Plus la courbe monte, plus elle monte vite : c'est l'explosion exponentielle.

:::property[Dérivée de $e^{u}$]
Si $u$ est dérivable, $x \longmapsto e^{u(x)}$ est dérivable et
$$
\left(e^{u}\right)' = u'\,e^{u}.
$$
:::

:::example[Deux dérivées]
- $f(x) = e^{-x^2}$ : $u(x) = -x^2$, $u'(x) = -2x$, donc $f'(x) = -2x\,e^{-x^2}$. En $x = 1$ : $-2e^{-1} \approx -0{,}7358$. Contrôle par un taux d'accroissement : $\dfrac{f(1{,}0001) - f(1)}{0{,}0001} \approx -0{,}7357$ ✓.
- $g(x) = x\,e^x$ : produit, $g'(x) = e^x + x\,e^x = (1 + x)\,e^x$.
:::

### La seule fonction égale à sa dérivée

Y a-t-il d'autres fonctions qui valent leur dérivée ? Presque pas : à un facteur près, non.

:::theorem[Unicité]{wiki="Unicité de la fonction exponentielle"}
Soit $f$ une fonction dérivable sur $\mathbb R$ telle que $f' = f$ et $f(0) = 1$. Alors $f(x) = e^x$ pour tout $x$.
:::

:::proof[Unicité]
| Étape | Justification |
|---|---|
| On pose $g(x) = f(x)\,e^{-x}$, dérivable sur $\mathbb R$ | produit de fonctions dérivables |
| $g'(x) = f'(x)\,e^{-x} - f(x)\,e^{-x}$ | dérivée d'un produit, et $\left(e^{-x}\right)' = -e^{-x}$ |
| $= \bigl(f'(x) - f(x)\bigr)e^{-x} = 0$ | hypothèse $f' = f$ |
| donc $g$ est constante : $g(x) = g(0) = f(0)\,e^0 = 1$ | une dérivée nulle sur un intervalle |
| d'où $f(x)\,e^{-x} = 1$, c'est-à-dire $\textcolor{#ea580c}{f(x) = e^x}$ | on multiplie par $e^x$ |
:::

C'est la porte d'entrée vers les **équations différentielles** : la même preuve montre que si $f' = kf$, alors $f(x) = f(0)\,e^{kx}$. Une quantité dont la vitesse est proportionnelle à elle-même est forcément exponentielle.

### La courbe est au-dessus de sa tangente en $0$

La tangente à $\exp$ en $0$ a pour équation $y = \exp(0) + \exp'(0)\,x = 1 + x$.

:::property[Minoration par la tangente]
Pour tout réel $x$,
$$
e^x \geq 1 + x,
$$
avec égalité si et seulement si $x = 0$.
:::

:::proof[$e^x \geq 1 + x$]
| Étape | Justification |
|---|---|
| Pour tout $t > 0$ : $\ln t \leq t - 1$ | majoration de $\ln$ par sa tangente en $1$ |
| On prend $t = e^x > 0$ | $e^x$ est toujours strictement positif |
| $\ln(e^x) \leq e^x - 1$, c'est-à-dire $x \leq e^x - 1$ | $\ln(e^x) = x$ |
| donc $\textcolor{#ea580c}{e^x \geq 1 + x}$ | on ajoute $1$ |
:::

La preuve est la même inégalité que celle du logarithme, lue dans le miroir. Contrôle : $e^{-2} \approx 0{,}135 \geq 1 - 2 = -1$ ✓ ; $e^1 = 2{,}718 \geq 2$ ✓.

## 4. Limites, variations et croissances comparées

### Où va $\exp$ ?

:::theorem[Limites de référence]
$$
\lim_{x \to +\infty} e^x = +\infty, \qquad
\lim_{x \to -\infty} e^x = 0, \qquad
\lim_{x \to +\infty} \dfrac{e^x}{x} = +\infty, \qquad
\lim_{x \to -\infty} x\,e^x = 0, \qquad
\lim_{x \to 0} \dfrac{e^x - 1}{x} = 1.
$$
:::

:::proof[Les cinq limites]
| Étape | Justification |
|---|---|
| Pour $x \to +\infty$ : $e^x \geq 1 + x \to +\infty$ | minoration par la tangente, et comparaison |
| Pour $x \to -\infty$ : $e^x = \dfrac{1}{e^{-x}}$ avec $e^{-x} \to +\infty$ | on applique la première limite à $-x$ |
| donc $e^x \to 0$ (par valeurs positives) | l'inverse d'une quantité qui tend vers $+\infty$ |
| On pose $t = e^x$ : si $x \to +\infty$, alors $t \to +\infty$ et $x = \ln t$ | $\exp$ et $\ln$ sont réciproques |
| $\dfrac{x}{e^x} = \dfrac{\ln t}{t} \to 0$ | limite de référence de $\ln$ |
| donc $\textcolor{#ea580c}{\dfrac{e^x}{x} \to +\infty}$ | $\dfrac{e^x}{x} > 0$ est l'inverse d'une quantité qui tend vers $0$ |
| Pour $x \to -\infty$, on pose $y = -x \to +\infty$ : $x\,e^x = -\dfrac{y}{e^{y}}$ | $e^{-y} = \dfrac{1}{e^y}$ |
| donc $x\,e^x \to 0$ | $\dfrac{y}{e^y} \to 0$ |
| $\dfrac{e^x - 1}{x} = \dfrac{e^x - e^0}{x - 0}$ | $e^0 = 1$ |
| c'est un taux d'accroissement de $\exp$ en $0$, de limite $\exp'(0) = 1$ | définition de la dérivée |
:::

:::example[Les chiffres]
$\dfrac{e^x}{x}$ vaut $2\,202{,}6$ en $x = 10$, environ $1{,}04\times 10^{20}$ en $x = 50$ et $2{,}7\times 10^{41}$ en $x = 100$. $x\,e^x$ vaut $-0{,}0337$ en $x = -5$, $-4{,}54\times 10^{-4}$ en $x = -10$ et $-4{,}12\times 10^{-8}$ en $x = -20$. $\dfrac{e^x - 1}{x}$ vaut $1{,}0005002$ en $x = 10^{-3}$ et $1{,}0000005$ en $x = 10^{-6}$.
:::

On en déduit le tableau de $\exp$ :

:::signs
| $x$ | $-\infty$ | | $+\infty$ |
|---|---|---|---|
| $\exp'(x) = e^x$ | | $+$ | |
| $\exp(x)$ | $0$ | $\nearrow$ | $+\infty$ |
:::

L'axe des abscisses est **asymptote horizontale** de la courbe en $-\infty$ : la courbe s'en rapproche sans jamais la toucher.

### Croissances comparées : qui gagne ?

La limite $\dfrac{e^x}{x} \to +\infty$ dit que **l'exponentielle écrase $x$**. C'est vrai pour toute puissance de $x$ : pour tout entier $n \geq 1$,

$$
\lim_{x \to +\infty} \dfrac{e^x}{x^n} = +\infty
\qquad\text{et}\qquad
\lim_{x \to -\infty} x^n\,e^x = 0.
$$

Pour le voir, on écrit $\dfrac{e^x}{x^n} = \left(\dfrac{e^{x/n}}{x}\right)^n = \left(\dfrac1n\cdot\dfrac{e^{x/n}}{x/n}\right)^n$, et chaque facteur tend vers $+\infty$.

![Qui gagne : eˣ ou x³](/lessons/images/m4-exp-croissance.svg "À gauche, eˣ passe sous x³ entre x ≈ 1,86 et x ≈ 4,54, puis repasse devant pour toujours. À droite, le rapport eˣ / x³ : il descend jusqu'à un minimum d'environ 0,74 en x = 3, est inférieur à 1 uniquement entre ces deux points, puis tend vers +∞.")

La figure montre un piège : à l'œil nu, sur $[0\,;4]$, on croirait que $x^3$ gagne. La limite ne parle pas de ce qui se passe sur un petit intervalle, elle parle de ce qui se passe **à l'infini**. Pour $x = 20$, $e^{20} \approx 4{,}85\times 10^8$ alors que $x^3 = 8\,000$.

:::method[Lever une forme indéterminée avec $\exp$]
1. **Repérer la forme.** $\dfrac{e^x}{x^2}$ en $+\infty$ est du type $\dfrac\infty\infty$ ; $x\,e^{x}$ en $-\infty$ du type $0\times\infty$ ; $e^x - x^3$ en $+\infty$ du type $\infty - \infty$.
2. **Factoriser le terme dominant**, ou se ramener à une limite de référence par un changement de variable.
3. **Conclure.**

Exemples :
- $e^x - x^3 = e^x\left(1 - \dfrac{x^3}{e^x}\right)$. Comme $\dfrac{x^3}{e^x} \to 0$, la parenthèse tend vers $1$ et la limite en $+\infty$ est $+\infty$.
- $\dfrac{e^{2x} - 1}{x} = 2\times\dfrac{e^{2x} - 1}{2x}$. Avec $u = 2x \to 0$, $\dfrac{e^u - 1}{u} \to 1$, donc la limite en $0$ vaut $2$. Contrôle numérique : en $x = 10^{-6}$ on trouve $2{,}000002$ ✓.
:::

### Retrouver le nombre $e$ comme limite

Les deux chapitres se rejoignent ici. On écrit $\left(1 + \dfrac1n\right)^n = \exp\left(n\ln\left(1 + \dfrac1n\right)\right)$. Avec $h = \dfrac1n \to 0$, on a $n\ln\left(1 + \dfrac1n\right) = \dfrac{\ln(1 + h)}{h} \to 1$. Comme $\exp$ est continue, $\left(1 + \dfrac1n\right)^n \to e^1 = e$.

:::example[Avec les chiffres]
| $n$ | $1$ | $10$ | $100$ | $1\,000$ | $10^6$ |
|---|---|---|---|---|---|
| $\left(1 + \frac1n\right)^n$ | $2$ | $2{,}5937$ | $2{,}7048$ | $2{,}7169$ | $2{,}71828$ |

La suite monte lentement vers $e \approx 2{,}71828$. C'est la façon dont Bernoulli a rencontré ce nombre : un placement à $100\,\%$ par an, capitalisé $n$ fois dans l'année, finit par rapporter $e$ fois la mise quand on capitalise sans arrêt.
:::

## 5. Équations et inéquations

Les deux propriétés de monotonie du paragraphe 1 donnent les règles. Pour tous réels $a$, $b$ et tout réel $c > 0$ :

| On a | Alors |
|---|---|
| $e^a = e^b$ | $a = b$ |
| $e^a < e^b$ | $a < b$ (le sens est conservé : $\exp$ est croissante) |
| $e^a = c$ | $a = \ln c$ |
| $e^a \geq c$ | $a \geq \ln c$ |
| $e^a = c$ avec $c \leq 0$ | **aucune solution** |

:::method[Résoudre une équation avec $e^x$]
1. **Mettre sous la forme $e^{\ldots} = \ldots$ ou $e^{\ldots} = e^{\ldots}$**, en regroupant les exponentielles.
2. **Si l'équation contient $e^{2x}$ et $e^x$, poser $X = e^x$** (avec $X > 0$) : on obtient une équation du second degré en $X$.
3. **Résoudre en $X$, garder seulement $X > 0$**, puis revenir à $x = \ln X$.
4. **Vérifier.**

**Exemple.** $e^{2x} - 3e^x + 2 = 0$. On pose $X = e^x > 0$ : $X^2 - 3X + 2 = 0$, de racines $X = 1$ et $X = 2$, toutes deux $> 0$. Donc $e^x = 1$ ou $e^x = 2$, c'est-à-dire $x = 0$ ou $x = \ln 2 \approx 0{,}6931$. Contrôle : en $x = \ln 2$, $e^{2x} = 4$ et $3e^x = 6$ ; $4 - 6 + 2 = 0$ ✓.

**Piège.** Si l'une des racines en $X$ est négative ou nulle, on la rejette : $e^x = -1$ n'a pas de solution.
:::

:::example[Trois inéquations]
- $e^x \geq 5 \iff x \geq \ln 5 \approx 1{,}609$. Solutions : $[\ln 5\,;+\infty[$.
- $e^{2x - 1} < e^{x + 3} \iff 2x - 1 < x + 3 \iff x < 4$.
- $(e^x - 1)(e^x - 3) \leq 0$. Les deux facteurs changent de signe en $e^x = 1$ et $e^x = 3$, c'est-à-dire en $x = 0$ et $x = \ln 3 \approx 1{,}0986$. Le produit est négatif entre ses racines : $x \in [0\,;\ln 3]$.
:::

## 6. Étudier une fonction avec une exponentielle

:::method[Plan d'étude]
1. **Domaine** et éventuelle parité.
2. **Limites** aux bornes, en utilisant les croissances comparées. Asymptotes.
3. **Dérivée**, que l'on factorise en mettant $e^{u}$ en facteur. **Le signe de $e^{u}$ est toujours $+$**, donc le signe de $f'$ est celui du facteur restant.
4. **Tableau de variation**, extremums.
5. **Dérivée seconde** pour un point d'inflexion, tangentes remarquables, tracé.
:::

### Exemple 1 : $f(x) = x\,e^{-x}$

**Domaine** : $\mathbb R$.

**Limites.** En $+\infty$ : $x\,e^{-x} = \dfrac{x}{e^x} \to 0$, car $\dfrac{e^x}{x} \to +\infty$. L'axe des abscisses est asymptote. En $-\infty$ : $x \to -\infty$ et $e^{-x} \to +\infty$, donc $f(x) \to -\infty$.

**Dérivée.** $f'(x) = e^{-x} - x\,e^{-x} = (1 - x)\,e^{-x}$. Le signe est celui de $1 - x$.

:::signs
| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $1 - x$ | | $+$ | $0$ | $-$ | |
| $e^{-x}$ | | $+$ | | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $\dfrac1e$ | $\searrow$ | $0$ |
:::

$f$ admet un **maximum** en $x = 1$ : $f(1) = e^{-1} \approx 0{,}3679$.

**Dérivée seconde.** $f''(x) = -e^{-x} - (1 - x)e^{-x} = (x - 2)\,e^{-x}$. Elle s'annule en changeant de signe en $x = 2$ : **point d'inflexion** $\left(2\,;\,\dfrac{2}{e^2}\right)$, de hauteur $2e^{-2} \approx 0{,}2707$.

**Contrôle numérique.** $f(1) = 0{,}3679$, $f(2) = 0{,}2707$, $f(3) = 0{,}1494$, $f(5) = 0{,}0337$, $f(10) = 0{,}0005$ : la fonction monte jusqu'à $x = 1$ puis descend vers $0$ ✓.

### Exemple 2 : une courbe en S

Une population d'animaux sur une île grandit vite quand elle est petite, puis ralentit quand la nourriture manque et se stabilise. Le modèle le plus simple est $s(x) = \dfrac{e^x}{e^x + 1}$.

**Limites.** En $-\infty$ : $e^x \to 0$, donc $s(x) \to \dfrac{0}{1} = 0$. En $+\infty$ : $s(x) = \dfrac{1}{1 + e^{-x}} \to 1$. La courbe est coincée entre les asymptotes $y = 0$ et $y = 1$.

**Dérivée.** $s'(x) = \dfrac{e^x(e^x + 1) - e^x\cdot e^x}{(e^x + 1)^2} = \dfrac{e^x}{(e^x + 1)^2} > 0$ : $s$ est strictement croissante de $0$ à $1$.

**Symétrie.** $s(-x) = \dfrac{e^{-x}}{e^{-x} + 1} = \dfrac{1}{1 + e^x} = 1 - s(x)$. Donc $s(-x) + s(x) = 1$ : le point $\left(0\,;\dfrac12\right)$ est un **centre de symétrie**. Contrôle : $s(-2) = 0{,}1192$, $s(0) = 0{,}5$, $s(2) = 0{,}8808$, et $0{,}1192 + 0{,}8808 = 1$ ✓.

![Étude de x·e⁻ˣ et courbe en S](/lessons/images/m4-exp-etude.svg "À gauche, x·e⁻ˣ : maximum 1/e en x = 1, point d'inflexion (2, 2/e²), asymptote y = 0 en +∞. À droite, s(x) = eˣ/(eˣ + 1) : une courbe en S entre les asymptotes y = 0 et y = 1, de centre de symétrie (0, 1/2).")

## 7. Les exponentielles de base a

L'exponentielle $\exp$ est le cas particulier $a = e$ d'une famille. Pour un réel $a > 0$, on veut donner un sens à $a^x$ pour **tout** réel $x$, pas seulement pour un entier.

:::definition[Exponentielle de base $a$]
Soit $a > 0$. Pour tout réel $x$,
$$
a^x = e^{x\ln a}.
$$
:::

Cette définition prolonge les puissances entières (pour $x = n$, $e^{n\ln a} = \left(e^{\ln a}\right)^n = a^n$) et conserve toutes les règles de calcul : $a^{x + y} = a^x a^y$, $(ab)^x = a^x b^x$, $\left(a^x\right)^y = a^{xy}$. Par exemple $2^{0{,}5} = e^{0{,}5\ln 2} \approx e^{0{,}3466} \approx 1{,}4142 = \sqrt 2$ ✓.

:::property[Variations de $a^x$]
$x \longmapsto a^x$ est dérivable sur $\mathbb R$, de dérivée
$$
\left(a^x\right)' = \ln a\cdot a^x.
$$
- Si $a > 1$ : $\ln a > 0$, la fonction est **strictement croissante**, de limite $0$ en $-\infty$ et $+\infty$ en $+\infty$.
- Si $0 < a < 1$ : $\ln a < 0$, elle est **strictement décroissante**, de limite $+\infty$ en $-\infty$ et $0$ en $+\infty$.
- Dans tous les cas $a^0 = 1$ et $a^x > 0$.
:::

La dérivée vient de la dérivée de $e^{u}$ avec $u(x) = x\ln a$ : $\left(e^{x\ln a}\right)' = \ln a\cdot e^{x\ln a}$. Et la fonction $x \longmapsto \log_a x = \dfrac{\ln x}{\ln a}$ du chapitre précédent est la **réciproque** de $x \longmapsto a^x$ : $\log_a(a^x) = \dfrac{x\ln a}{\ln a} = x$.

:::warning
**Ne pas confondre** $x \longmapsto a^x$ (la variable est dans l'**exposant**, croissance explosive) et $x \longmapsto x^a$ (la variable est dans la **base**, croissance modérée). $2^x$ dépasse $x^2$ dès que $x > 4$ (égalité en $x = 4$ : $2^4 = 4^2 = 16$) : $2^{10} = 1\,024$ contre $10^2 = 100$.
:::

:::example[Intérêts composés et la règle des 70]
Un capital de $1\,000$ DT placé à $5\,\%$ par an vaut $C(n) = 1\,000\times 1{,}05^n = 1\,000\,e^{n\ln 1{,}05}$ après $n$ ans. Après $10$ ans : $1\,000\times 1{,}05^{10} \approx 1\,628{,}89$ DT.

Au bout de combien de temps le capital a-t-il doublé ? Il faut $1{,}05^n = 2$, donc $n\ln 1{,}05 = \ln 2$ et $n = \dfrac{\ln 2}{\ln 1{,}05} \approx 14{,}2$ ans. Comme $\ln(1 + r) \approx r$ pour $r$ petit, on obtient la règle pratique $n \approx \dfrac{0{,}693}{r}$, soit **$\dfrac{70}{\text{taux en \%}}$ ans**. Contrôle : à $5\,\%$, $\dfrac{70}{5} = 14$ ans ($14{,}2$ exactement) ; à $2\,\%$, $35$ ans (exactement $35{,}0$) ; à $7\,\%$, $10$ ans ($10{,}2$ exactement).
:::

:::example[Le carbone 14]
La quantité de carbone 14 d'un échantillon est $N(t) = N_0\left(\dfrac12\right)^{t/5730}$ après $t$ années ($5\,730$ ans est la demi-vie). Quand il en reste $10\,\%$ ? On résout $\left(\dfrac12\right)^{t/5730} = 0{,}1$. Avec $\ln$ :
$$
\dfrac{t}{5730}\ln\dfrac12 = \ln 0{,}1
\quad\Longrightarrow\quad
t = 5730\times\dfrac{\ln 10}{\ln 2} \approx 5730\times 3{,}3219 \approx 19\,035 \text{ ans}.
$$
On a divisé deux nombres négatifs ($\ln 0{,}1$ et $\ln\frac12$), donc $t > 0$ ✓. Contrôle : $\left(\frac12\right)^{3{,}3219} \approx 0{,}1$ ✓.
:::

## 8. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Résoudre $e^{f(x)} = e^{g(x)}$ | $f(x) = g(x)$ |
| Résoudre $e^{f(x)} = c$ | $c > 0$ : $f(x) = \ln c$ ; sinon aucune solution |
| Équation en $e^{2x}$ et $e^x$ | poser $X = e^x > 0$, résoudre en $X$, rejeter $X \leq 0$ |
| Dériver $e^{u}$ | $u'\,e^{u}$ ; factoriser $e^{u}$ ensuite |
| Signe d'une dérivée contenant $e^{u}$ | $e^{u} > 0$ : le signe est celui du facteur restant |
| Limite $\dfrac{e^x}{x^n}$ en $+\infty$, $x^n e^x$ en $-\infty$ | croissances comparées : l'exponentielle gagne |
| Limite $\dfrac{e^{ax} - 1}{x}$ en $0$ | $a\cdot\dfrac{e^{ax} - 1}{ax} \to a$ |
| Forme $\infty - \infty$ avec $e^x$ | factoriser $e^x$ |
| Majorer ou minorer $e^x$ | $e^x \geq 1 + x$ appliqué au bon $x$ |
| Taux de croissance constant | $a^x = e^{x\ln a}$ ; seuil par $\ln$, attention au signe de $\ln a$ |
| Une quantité vérifie $f' = kf$ | $f(x) = f(0)\,e^{kx}$ |

## Vérifie-toi

::::check[Simplifier]
Montrer que $\left(e^x + e^{-x}\right)^2 - \left(e^x - e^{-x}\right)^2 = 4$ pour tout réel $x$.

:::answer
On développe : $\left(e^{2x} + 2 + e^{-2x}\right) - \left(e^{2x} - 2 + e^{-2x}\right) = 4$. On a utilisé $e^x\times e^{-x} = e^0 = 1$. Contrôle en $x = 1$ : $e + e^{-1} = 3{,}0862$ et $e - e^{-1} = 2{,}3504$ ; $3{,}0862^2 - 2{,}3504^2 \approx 9{,}5244 - 5{,}5244 = 4{,}0000$ ✓.
:::
::::

::::check[Dérivée et variations]
Soit $g(x) = (x^2 + 1)\,e^{-x}$. Calculer $g'(x)$ et en déduire le sens de variation de $g$.

:::answer
$g'(x) = 2x\,e^{-x} - (x^2 + 1)\,e^{-x} = -(x^2 - 2x + 1)\,e^{-x} = -(x - 1)^2\,e^{-x}$. Comme $(x - 1)^2 \geq 0$ et $e^{-x} > 0$, on a $g'(x) \leq 0$ : $g$ est **décroissante** sur $\mathbb R$ (elle ne s'annule qu'en $x = 1$, où elle ne change pas de sens). Contrôle : $g(0) = 1$, $g(1) = 0{,}7358$, $g(2) = 0{,}6767$, $g(3) = 0{,}4979$ ✓.
:::
::::

::::check[Équation]
Résoudre $e^{2x} - e^x - 6 = 0$.

:::answer
On pose $X = e^x > 0$ : $X^2 - X - 6 = 0$, de racines $X = 3$ et $X = -2$. On rejette $X = -2 < 0$. Donc $e^x = 3$, soit $x = \ln 3 \approx 1{,}0986$. Contrôle : $e^{2x} = 9$, $e^x = 3$, et $9 - 3 - 6 = 0$ ✓.
:::
::::

::::check[Inéquation]
Résoudre $(e^x - 2)(e^x + 1) > 0$.

:::answer
Le facteur $e^x + 1$ est toujours strictement positif. Le produit est donc du signe de $e^x - 2$ : $e^x > 2 \iff x > \ln 2 \approx 0{,}6931$. L'ensemble des solutions est $]\ln 2\,;+\infty[$.
:::
::::

::::check[Deux limites]
Calculer $\displaystyle\lim_{x \to +\infty} x^2\,e^{-x}$ et $\displaystyle\lim_{x \to 0}\dfrac{e^{3x} - 1}{2x}$.

:::answer
Première limite : $x^2 e^{-x} = \dfrac{x^2}{e^x} = \dfrac{1}{e^x/x^2}$, et $\dfrac{e^x}{x^2} \to +\infty$, donc la limite est $0$. Contrôle : en $x = 20$, $\dfrac{400}{4{,}85\times 10^8} \approx 8{,}2\times 10^{-7}$ ✓. Seconde limite : $\dfrac{e^{3x} - 1}{2x} = \dfrac32\times\dfrac{e^{3x} - 1}{3x} \to \dfrac32\times 1 = \dfrac32$.
:::
::::

::::challenge
Montrer que pour tout $x \geq 0$, $e^x \geq 1 + x + \dfrac{x^2}{2}$, puis retrouver que $\dfrac{e^x}{x} \to +\infty$ sans utiliser $\ln$.

:::answer
On pose $h(x) = e^x - 1 - x - \dfrac{x^2}{2}$. Alors $h(0) = 0$ et $h'(x) = e^x - 1 - x \geq 0$ (minoration par la tangente). Donc $h$ est croissante sur $[0\,;+\infty[$ et $h(x) \geq h(0) = 0$. Contrôle : $e^1 = 2{,}718 \geq 2{,}5$ ✓ et $e^2 = 7{,}389 \geq 5$ ✓. Pour $x > 0$, on divise par $x$ : $\dfrac{e^x}{x} \geq \dfrac1x + 1 + \dfrac{x}{2} \geq \dfrac x2$, et $\dfrac x2 \to +\infty$. Par comparaison, $\dfrac{e^x}{x} \to +\infty$.
:::
::::
