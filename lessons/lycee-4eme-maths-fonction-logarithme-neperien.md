---
title: "Fonction logarithme népérien : définition, propriétés, limites, étude de fonctions"
slug: "lycee-4eme-maths-fonction-logarithme-neperien"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Fonction logarithme népérien"
summary: "Le logarithme népérien comme primitive de 1/x qui s'annule en 1, la relation ln(ab) = ln a + ln b, le nombre e, les limites et les croissances comparées, la dérivée de ln u, les équations et inéquations, les logarithmes de base a, et l'étude complète d'une fonction avec un logarithme."
prerequisites: ["Primitives", "Intégrales", "Dérivation", "Limites et continuité"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Fonctions logarithmes »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Au début du XVIIᵉ siècle, les astronomes multiplient des nombres à dix chiffres à la main. Une erreur de retenue, et la trajectoire d'une planète est fausse. John Napier a l'idée d'une table qui **transforme les produits en sommes** : on lit les deux « logarithmes », on les additionne, on relit le résultat. Additionner à la main est bien plus rapide et plus sûr que multiplier.

:::intuition
On cherche une fonction $L$ telle que $L(ab) = L(a) + L(b)$. Un produit devient une somme, une puissance devient un multiple, une division devient une soustraction. Quelle fonction connue a un comportement pareil ? Aucune fonction usuelle (polynôme, fraction, racine). Il faut la **construire**, et le chemin le plus court passe par un fait que tu connais déjà : toute fonction continue a une primitive.
:::

## 1. Définition

La fonction $x \longmapsto \dfrac1x$ est continue sur $]0\,;+\infty[$. Elle y possède donc des primitives, qui diffèrent d'une constante. On en choisit une seule, en fixant sa valeur en $1$.

:::definition[Logarithme népérien]
La fonction **logarithme népérien**, notée $\ln$, est l'**unique primitive de $x \longmapsto \dfrac1x$ sur $]0\,;+\infty[$ qui s'annule en $1$**. Pour tout $x > 0$,
$$
\ln x = \int_1^x \dfrac{dt}{t}.
$$
:::

Retiens ce que la définition impose : $\ln$ est **dérivable** et $\ln'(x) = \dfrac1x$, c'est-à-dire que la pente de la courbe en $x$ est l'inverse de $x$. On en tire tout de suite, sans calcul :

:::property[Premières propriétés]
- $\ln 1 = 0$.
- $\ln$ est **strictement croissante** sur $]0\,;+\infty[$ (car $\ln'(x) = \dfrac1x > 0$).
- $\ln x < 0$ pour $0 < x < 1$ et $\ln x > 0$ pour $x > 1$.
- $\ln x = \ln y \iff x = y$ et $\ln x < \ln y \iff x < y$ (pour $x, y > 0$).
:::

Géométriquement, $\ln x$ est **l'aire sous l'hyperbole** $y = \dfrac1t$ entre $t = 1$ et $t = x$ (voir la figure du §3).

:::example[Ce que dit la dérivée]
En $x = 2$, la pente de la courbe est $\ln'(2) = \dfrac12$ ; en $x = 10$, elle n'est plus que $\dfrac1{10}$. La courbe monte de moins en moins vite : elle est **concave**. Calcul : $\ln''(x) = -\dfrac1{x^2} < 0$.
:::

### Une inégalité à retenir

Le fait que la courbe de $\ln$ reste **sous sa tangente** en $1$ sert dans presque tous les exercices.

:::property[Majoration par la tangente]
Pour tout $x > 0$,
$$
\ln x \leq x - 1,
$$
avec égalité si et seulement si $x = 1$.
:::

:::proof[$\ln x \leq x - 1$]
| Étape | Justification |
|---|---|
| On pose $g(x) = x - 1 - \ln x$ sur $]0\,;+\infty[$ | on étudie la différence |
| $g'(x) = 1 - \dfrac1x = \dfrac{x - 1}{x}$ | dérivée de $\ln$ |
| $g'(x) < 0$ sur $]0\,;1[$ et $g'(x) > 0$ sur $]1\,;+\infty[$ | signe de $x - 1$, avec $x > 0$ |
| $g$ décroît puis croît, donc $\textcolor{#ea580c}{g(1)}$ est son minimum | tableau de variation |
| $g(1) = 1 - 1 - \ln 1 = 0$ | $\ln 1 = 0$ |
| donc $g(x) \geq 0$, c'est-à-dire $\ln x \leq x - 1$ | $g$ est minorée par son minimum $0$ |
:::

:::example[Ça marche vraiment]
$\ln 1{,}1 \approx 0{,}0953 \leq 0{,}1$ ; $\ln 2 \approx 0{,}693 \leq 1$ ; $\ln 0{,}5 \approx -0{,}693 \leq -0{,}5$. L'écart est minuscule près de $1$ (la tangente colle à la courbe) et grandit quand on s'éloigne.
:::

## 2. La relation fonctionnelle

### Le produit devient somme

:::theorem[Logarithme d'un produit]
Pour tous réels $a > 0$ et $b > 0$,
$$
\ln(ab) = \ln a + \ln b.
$$
:::

:::proof[$\ln(ab) = \ln a + \ln b$]
| Étape | Justification |
|---|---|
| On fixe $a > 0$ et on pose $\varphi(x) = \ln(ax) - \ln x$ pour $x > 0$ | on regarde ce qui change quand on multiplie par $a$ |
| $\varphi'(x) = \dfrac{a}{ax} - \dfrac1x = \textcolor{#ea580c}{0}$ | dérivée de $\ln(ax)$ : $\dfrac{(ax)'}{ax}$ |
| $\varphi$ est constante sur l'intervalle $]0\,;+\infty[$ | dérivée nulle sur un intervalle |
| $\varphi(1) = \ln a - \ln 1 = \ln a$ | $\ln 1 = 0$ |
| donc $\ln(ax) - \ln x = \ln a$ pour tout $x > 0$ | la constante est $\varphi(1)$ |
| en prenant $x = b$ : $\ln(ab) = \ln a + \ln b$ | on remplace $x$ par $b$ |
:::

La preuve ne contient aucun calcul numérique : elle utilise seulement que $\ln' = \dfrac1x$ et que $\ln 1 = 0$. C'est pour cela qu'on a choisi la primitive qui s'annule en $1$.

:::corollary
Pour $a > 0$, $b > 0$ et $n$ entier :

- $\ln\dfrac1a = -\ln a$ ;
- $\ln\dfrac ab = \ln a - \ln b$ ;
- $\ln(a^n) = n\ln a$ ;
- $\ln\sqrt a = \dfrac12\ln a$.
:::

:::proof[Les quatre règles]
| Étape | Justification |
|---|---|
| $\ln a + \ln\dfrac1a = \ln\!\left(a\times\dfrac1a\right) = \ln 1 = 0$, donc $\ln\dfrac1a = -\ln a$ | relation fonctionnelle |
| $\ln\dfrac ab = \ln\!\left(a\times\dfrac1b\right) = \ln a + \ln\dfrac1b = \ln a - \ln b$ | règle précédente |
| $\ln(a^n) = \ln a + \cdots + \ln a = n\ln a$ ($n$ termes) | récurrence sur $n \geq 1$ ; pour $n \leq 0$ on utilise l'inverse |
| $2\ln\sqrt a = \ln(\sqrt a)^2 = \ln a$, donc $\ln\sqrt a = \dfrac12\ln a$ | règle de la puissance |
:::

:::example[Calculer sans calculatrice]
On donne $\ln 2 \approx 0{,}6931$, $\ln 3 \approx 1{,}0986$ et $\ln 5 \approx 1{,}6094$. Alors
$$
\ln 12 = \ln(2^2\times 3) = 2\ln 2 + \ln 3 \approx 2{,}4849
\quad\text{et}\quad
\ln 20 = \ln(2^2\times 5) = 2\ln 2 + \ln 5 \approx 2{,}9957.
$$
Et $\ln 72 = \ln(2^3\times 3^2) = 3\ln 2 + 2\ln 3 \approx 4{,}2767$. On factorise en nombres premiers, on applique la règle, et il ne reste que $\ln 2$, $\ln 3$, $\ln 5$.
:::

:::method[Simplifier une expression avec des logarithmes]
Deux gestes suffisent : **tout écrire avec les mêmes briques** (par exemple $\ln 2$ et $\ln 3$), puis **regrouper**.

Écrire $A = \ln\dfrac{3}{4} + 2\ln 6 - \ln 27$ en fonction de $\ln 2$ et $\ln 3$. On a $\ln\dfrac34 = \ln 3 - 2\ln 2$, $2\ln 6 = 2\ln 2 + 2\ln 3$ et $\ln 27 = 3\ln 3$. Donc
$$
A = (\ln 3 - 2\ln 2) + (2\ln 2 + 2\ln 3) - 3\ln 3 = 0.
$$
Contrôle : $\dfrac34\times 36 \div 27 = 1$ et $\ln 1 = 0$ ✓.
:::

:::warning
- **$\ln(a + b)$ n'est pas $\ln a + \ln b$.** Avec $a = b = 1$ : $\ln 2 \approx 0{,}693$ mais $\ln 1 + \ln 1 = 0$. Aucune règle ne simplifie $\ln(a + b)$.
- **La relation exige $a > 0$ et $b > 0$.** Pour $x$ négatif, $\ln(x^2) = 2\ln\lvert x\rvert$, pas $2\ln x$ (qui n'existe pas). Ainsi $\ln\big((-3)^2\big) = \ln 9 = 2\ln 3$ et non « $2\ln(-3)$ ».
- **$\ln$ ne simplifie pas un quotient de logarithmes :** $\dfrac{\ln a}{\ln b} \neq \ln\dfrac ab$.
:::

## 3. Limites, variations et le nombre $e$

### Où va $\ln$ ?

$\ln$ est strictement croissante. Mais est-elle bornée ? Elle croît lentement, de moins en moins vite (la pente est $\dfrac1x$). Pourtant elle finit par dépasser tout nombre.

:::theorem[Limites aux bornes]
$$
\lim_{x \to +\infty} \ln x = +\infty
\qquad\text{et}\qquad
\lim_{x \to 0^+} \ln x = -\infty.
$$
:::

:::proof[Limites de $\ln$]
| Étape | Justification |
|---|---|
| $\ln 2 > 0$ | $2 > 1$ et $\ln$ est positive sur $]1\,;+\infty[$ |
| $\ln(2^n) = n\ln 2$ tend vers $+\infty$ quand $n \to +\infty$ | règle de la puissance, et $\ln 2 > 0$ |
| $\ln$ est croissante : pour $x \geq 2^n$, $\ln x \geq n\ln 2$ | monotonie |
| donc $\textcolor{#ea580c}{\lim\limits_{x \to +\infty} \ln x = +\infty}$ | pour tout $M$, on choisit $n$ avec $n\ln 2 > M$ |
| en $0^+$ : $\ln x = -\ln\dfrac1x$ avec $\dfrac1x \to +\infty$ | règle de l'inverse |
| donc $\lim\limits_{x \to 0^+} \ln x = -\infty$ | limite de $-\ln t$ quand $t \to +\infty$ |
:::

:::example[Une croissance très lente]
$\ln(10^6) \approx 13{,}8$. Pour que $\ln x$ atteigne $14$, il faut $x \approx 1{,}2$ million. Le logarithme dépasse tout nombre, mais il prend son temps.
:::

On en déduit le tableau :

:::signs
| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $\ln x$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $\ln'(x) = \dfrac1x$ | $\Vert$ | $+$ | $+$ | $+$ | |
:::

$\ln$ est **continue et strictement croissante** sur $]0\,;+\infty[$, de limites $-\infty$ en $0^+$ et $+\infty$ en $+\infty$. D'après le théorème des valeurs intermédiaires, c'est une **bijection de $]0\,;+\infty[$ sur $\mathbb R$**. L'équation $\ln x = y$ a donc **une et une seule solution** pour tout réel $y$.

### Le nombre $e$

:::definition[Le nombre $e$]
Il existe un unique réel, noté $e$, tel que $\ln e = 1$. On a $e \approx 2{,}71828$.
:::

C'est la bijection qui l'impose : $1$ est un réel, il a un unique antécédent. Par la règle de la puissance, $\ln(e^n) = n$ pour tout entier $n$. Et la réciproque de $\ln$, que l'on étudiera dans le chapitre sur l'exponentielle, est la fonction $x \longmapsto e^x$.

![Courbe de ln et aire sous l'hyperbole](/lessons/images/m4-ln-graphe.svg "À gauche, la courbe de ln reste sous sa tangente y = x − 1 au point d'abscisse 1, et elle passe par (e, 1). À droite, ln x est l'aire sous y = 1/t entre 1 et x : pour x = e, l'aire vaut exactement 1.")

### Croissances comparées

Dans une limite, $\ln x$ tend vers l'infini en $+\infty$, et $x$ aussi. Qui gagne ?

:::theorem[Limites de référence]{wiki="Limites de référence de ln"}
$$
\lim_{x \to +\infty} \dfrac{\ln x}{x} = 0, \qquad
\lim_{x \to 0^+} x\ln x = 0, \qquad
\lim_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1.
$$
:::

:::proof[Les trois limites]
| Étape | Justification |
|---|---|
| Pour $x > 1$ : $\ln x = 2\ln\sqrt x \leq 2(\sqrt x - 1) < 2\sqrt x$ | $\ln t \leq t - 1$ avec $t = \sqrt x$ |
| donc $0 < \dfrac{\ln x}{x} < \dfrac{2\sqrt x}{x} = \dfrac{2}{\sqrt x}$ | on divise par $x > 0$ |
| $\dfrac{2}{\sqrt x} \to 0$, donc $\textcolor{#ea580c}{\dfrac{\ln x}{x} \to 0}$ | théorème des gendarmes |
| Pour $x \to 0^+$, on pose $t = \dfrac1x \to +\infty$ : $x\ln x = -\dfrac{\ln t}{t}$ | $\ln\dfrac1t = -\ln t$ |
| donc $x\ln x \to 0$ | première limite |
| $\dfrac{\ln(1 + x)}{x} = \dfrac{\ln(1 + x) - \ln 1}{x}$ | $\ln 1 = 0$ |
| c'est un taux d'accroissement de $\ln$ en $1$, de limite $\ln'(1) = 1$ | définition de la dérivée |
:::

:::example[Les chiffres]
$\dfrac{\ln x}{x}$ vaut $0{,}0069$ en $x = 10^3$ et $1{,}4\times 10^{-5}$ en $x = 10^6$. $x\ln x$ vaut $-0{,}0069$ en $x = 10^{-3}$ et $-1{,}4\times 10^{-5}$ en $x = 10^{-6}$. $\dfrac{\ln(1 + x)}{x}$ vaut $0{,}99950$ en $x = 10^{-3}$ et $0{,}9999995$ en $x = 10^{-6}$.
:::

La première limite dit que **$x$ écrase $\ln x$**, et plus généralement que **toute puissance de $x$ écrase $\ln x$** : pour $n \geq 1$,
$$
\lim_{x \to +\infty} \dfrac{\ln x}{x^n} = 0
\qquad\text{et}\qquad
\lim_{x \to 0^+} x^n\ln x = 0.
$$
Pour le voir, on écrit $\dfrac{\ln x}{x^n} = \dfrac1n\cdot\dfrac{\ln(x^n)}{x^n}$, et $x^n \to +\infty$.

:::method[Lever une forme indéterminée avec $\ln$]
1. **Repérer la forme.** $\dfrac{\ln x}{x}$ en $+\infty$ est du type $\dfrac\infty\infty$, $x\ln x$ en $0^+$ du type $0\times\infty$ : indéterminées.
2. **La ramener à une limite de référence.** Par changement de variable ($t = \dfrac1x$) ou en factorisant le terme dominant.
3. **Conclure.**

Par exemple $\displaystyle\lim_{x \to 0}\dfrac{\ln(1 + 3x)}{x}$ : on écrit $\dfrac{\ln(1 + 3x)}{x} = 3\times\dfrac{\ln(1 + 3x)}{3x}$ et, avec $u = 3x \to 0$, $\dfrac{\ln(1 + u)}{u} \to 1$. La limite vaut donc $3$. Contrôle numérique : en $x = 10^{-6}$, on trouve $2{,}999995$.
:::

## 4. Dérivée de $\ln u$ et ensemble de définition

### Où $\ln(u(x))$ existe-t-il ?

$\ln$ n'est définie que sur $]0\,;+\infty[$. Donc $\ln(u(x))$ **existe si et seulement si $u(x) > 0$**.

::::example[Un domaine à trois morceaux]
Domaine de $f(x) = \ln(x^2 - 3x + 2)$. On étudie le signe de $x^2 - 3x + 2 = (x - 1)(x - 2)$ :

:::signs
| $x$ | $-\infty$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x - 2$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x^2 - 3x + 2$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

Le trinôme est strictement positif pour $x < 1$ ou $x > 2$. Le domaine est $]-\infty\,;1[\,\cup\,]2\,;+\infty[$.
::::

### La dérivée

:::theorem[Dérivée de $\ln u$]
Si $u$ est dérivable et **strictement positive** sur un intervalle $I$, alors $\ln u$ est dérivable sur $I$ et
$$
(\ln u)' = \dfrac{u'}{u}.
$$
:::

C'est la dérivée d'une composée : $(\ln\circ u)' = \ln'(u)\times u' = \dfrac1u\times u'$. Tu l'as déjà utilisée dans la preuve du §2, avec $u(x) = ax$ : $\big(\ln(ax)\big)' = \dfrac{a}{ax}$.

:::example[Trois dérivées]
- $\big(\ln(1 + x^2)\big)' = \dfrac{2x}{1 + x^2}$ ; en $x = 1$, la pente vaut $1$.
- $\big(\ln(x^2 - 3x + 2)\big)' = \dfrac{2x - 3}{x^2 - 3x + 2}$ ; en $x = 3$, elle vaut $\dfrac{3}{2}$.
- $\big(\ln\sqrt x\big)' = \big(\tfrac12\ln x\big)' = \dfrac1{2x}$ : mieux vaut simplifier **avant** de dériver.
:::

:::remark
Quand $u$ est de signe quelconque mais ne s'annule pas, $\ln\lvert u\rvert$ est définie, et sa dérivée est encore $\dfrac{u'}{u}$. On en déduit les primitives : **sur un intervalle où $u$ ne s'annule pas, une primitive de $\dfrac{u'}{u}$ est $\ln\lvert u\rvert$**. Exemple : une primitive de $\dfrac{2x}{x^2 + 1}$ est $\ln(x^2 + 1)$ ; une primitive de $\dfrac{1}{x}$ sur $]-\infty\,;0[$ est $\ln\lvert x\rvert$.
:::

## 5. Équations et inéquations

$\ln$ est strictement croissante, donc **injective** : on peut « enlever le $\ln$ » des deux côtés, à condition que les deux arguments soient strictement positifs.

:::method[Résoudre avec des logarithmes]
1. **Domaine d'abord.** Écrire les conditions $u(x) > 0$ pour **chaque** logarithme.
2. **Regrouper** en un seul logarithme de chaque côté, avec les règles du §2.
3. **Enlever $\ln$** : $\ln A = \ln B \iff A = B$ et $\ln A < \ln B \iff A < B$. Pour comparer à une constante, on utilise $c = \ln(e^c)$ (par exemple $1 = \ln e$).
4. **Vérifier** que les solutions trouvées appartiennent au domaine.
:::

:::example[Une équation avec une solution parasite]
Résoudre $\ln(x - 1) + \ln(x + 1) = \ln 8$.

**Domaine :** $x - 1 > 0$ et $x + 1 > 0$, soit $x > 1$.

**Résolution :** $\ln\big((x - 1)(x + 1)\big) = \ln 8$, donc $x^2 - 1 = 8$, soit $x^2 = 9$ et $x = 3$ ou $x = -3$.

**Vérification :** $-3$ n'est pas dans le domaine $]1\,;+\infty[$ ; il est éliminé. Il reste $x = 3$, et en effet $\ln 2 + \ln 4 = \ln 8$ ✓.
:::

:::example[Une équation qui se ramène au second degré]
Résoudre $\ln x + \ln(x - 2) = \ln 3$. Domaine : $x > 2$. Alors $x(x - 2) = 3$, soit $x^2 - 2x - 3 = 0$, de racines $-1$ et $3$. Seul $x = 3$ est dans le domaine. Contrôle : $\ln 3 + \ln 1 = \ln 3$ ✓.
:::

:::example[Une inéquation avec une constante]
Résoudre $\ln(2x - 1) < 1$. Domaine : $2x - 1 > 0$, soit $x > \dfrac12$. Comme $1 = \ln e$ :
$$
\ln(2x - 1) < \ln e \iff 2x - 1 < e \iff x < \dfrac{e + 1}{2} \approx 1{,}859.
$$
Avec le domaine : l'ensemble des solutions est $\left]\dfrac12\,;\dfrac{e + 1}{2}\right[$.
:::

:::warning
Les solutions trouvées en **simplifiant** doivent toujours être contrôlées dans le **domaine de départ**. Regrouper $\ln A + \ln B$ en $\ln(AB)$ **élargit** le domaine : le premier exige $A > 0$ **et** $B > 0$, le second seulement $AB > 0$ (deux facteurs négatifs conviennent). La solution parasite est celle que le domaine d'origine interdisait.
:::

## 6. Les logarithmes de base $a$

Le logarithme népérien n'est pas le seul. Si l'on change de **base**, on garde les mêmes règles de calcul.

:::definition[Logarithme de base $a$]
Soit $a$ un réel strictement positif différent de $1$. Le **logarithme de base $a$** est la fonction
$$
\log_a x = \dfrac{\ln x}{\ln a}\qquad (x > 0).
$$
Le **logarithme décimal**, noté $\log$, est le cas $a = 10$.
:::

Comme $\ln a$ est une constante, $\log_a$ vérifie les mêmes règles que $\ln$ : $\log_a(xy) = \log_a x + \log_a y$ et $\log_a(x^n) = n\log_a x$. Elle vaut $0$ en $1$ et $1$ en $a$ : $\log_a a = 1$. Pour $a = 10$ : $\log 10^n = n$.

:::example[Combien de chiffres a $2^{100}$ ?]
$\log 2^{100} = 100\log 2 \approx 100\times 0{,}30103 = 30{,}103$. Un entier $N$ a $k$ chiffres exactement quand $10^{k-1} \leq N < 10^k$, c'est-à-dire $k - 1 \leq \log N < k$. Ici $30 \leq 30{,}103 < 31$ : $2^{100}$ a **31 chiffres**. Contrôle : $2^{100}$ s'écrit 1 267 650 600 228 229 401 496 703 205 376, soit bien $31$ chiffres ✓.
:::

:::method[À partir de quel rang une suite géométrique dépasse-t-elle un seuil ?]
On cherche le plus petit entier $n$ tel que $1{,}05^n \geq 2$ (un capital à $5\,\%$ par an a doublé). On prend le logarithme des deux côtés :
$$
n\ln 1{,}05 \geq \ln 2 \iff n \geq \dfrac{\ln 2}{\ln 1{,}05} \approx 14{,}2.
$$
On a divisé par $\ln 1{,}05 \approx 0{,}0488 > 0$ : le sens est conservé. Donc $n = 15$. Contrôle : $1{,}05^{14} \approx 1{,}980 < 2$ et $1{,}05^{15} \approx 2{,}079 \geq 2$ ✓.

Piège : pour $0{,}8^n < 0{,}01$, on divise par $\ln 0{,}8 < 0$, ce qui **inverse** l'inégalité : $n > \dfrac{\ln 0{,}01}{\ln 0{,}8} \approx 20{,}6$, donc $n = 21$ (on a $0{,}8^{20} \approx 0{,}0115$ et $0{,}8^{21} \approx 0{,}0092$).
:::

## 7. Étudier une fonction avec un logarithme

On applique tout le chapitre à une fonction complète. Étudions
$$
f(x) = x - 2 + \dfrac{\ln x}{x}\qquad\text{sur } ]0\,;+\infty[.
$$

**1. Limites.** En $0^+$, $\ln x \to -\infty$ et $\dfrac1x \to +\infty$, donc $\dfrac{\ln x}{x} \to -\infty$ et $\lim\limits_{x \to 0^+} f(x) = -\infty$ : la droite $x = 0$ est **asymptote verticale**. En $+\infty$, $\dfrac{\ln x}{x} \to 0$ (limite de référence), donc $f(x) - (x - 2) = \dfrac{\ln x}{x} \to 0$ : la droite $\Delta : y = x - 2$ est **asymptote oblique**, et $\lim\limits_{x \to +\infty} f(x) = +\infty$.

**2. Position par rapport à $\Delta$.** Le signe de $f(x) - (x - 2) = \dfrac{\ln x}{x}$ est celui de $\ln x$ : la courbe est **sous** $\Delta$ pour $x < 1$ et **au-dessus** pour $x > 1$.

**3. Dérivée.** On dérive le quotient :
$$
f'(x) = 1 + \dfrac{\frac1x\cdot x - \ln x}{x^2} = 1 + \dfrac{1 - \ln x}{x^2} = \dfrac{x^2 + 1 - \ln x}{x^2}.
$$
Le signe est celui du numérateur. Or $\ln x \leq x - 1$, donc $x^2 + 1 - \ln x \geq x^2 + 1 - (x - 1) = x^2 - x + 2$. Le trinôme $x^2 - x + 2$ a pour discriminant $1 - 8 = -7 < 0$ : il est strictement positif. Donc $f'(x) > 0$ pour tout $x > 0$.

:::signs
| $x$ | $0$ | | $+\infty$ |
|---|---|---|---|
| $x^2 + 1 - \ln x$ | $\Vert$ | $+$ | |
| $x^2$ | $\Vert$ | $+$ | |
| $f'(x)$ | $\Vert$ | $+$ | |
:::

$f$ est **strictement croissante** sur $]0\,;+\infty[$, de $-\infty$ à $+\infty$.

**4. Une solution unique.** $f$ est continue et strictement croissante, d'image $\mathbb R$ : l'équation $f(x) = 0$ a **exactement une solution** $\alpha$. On encadre : $f(1) = -1 < 0$ et $f(2) = \dfrac{\ln 2}{2} \approx 0{,}347 > 0$, donc $1 < \alpha < 2$. Plus finement, $f(1{,}6) \approx -0{,}106 < 0$ et $f(1{,}7) \approx 0{,}012 > 0$, donc $\textcolor{#ea580c}{1{,}6 < \alpha < 1{,}7}$ (on trouve $\alpha \approx 1{,}69$).

**5. Tangente en $x = 1$.** $f(1) = -1$ et $f'(1) = \dfrac{1 + 1 - 0}{1} = 2$. La tangente est $y = -1 + 2(x - 1) = 2x - 3$.

Avec ces cinq informations, le tracé s'ensuit : une courbe qui sort de $-\infty$ le long de l'axe des ordonnées, coupe $\Delta$ en $x = 1$ (où $\ln x = 0$), traverse l'axe des abscisses en $\alpha \approx 1{,}69$, puis se couche sur $\Delta$ par le dessus.

:::history
John Napier (en français : Neper, d'où « népérien ») publie ses tables de logarithmes en 1614. Vers 1650, on remarque que l'aire sous l'hyperbole $y = \dfrac1t$ obéit à la même règle : multiplier les abscisses additionne les aires. D'où l'ancien nom de **logarithme hyperbolique**, et la définition par primitive que l'on utilise ici. La lettre $e$ est introduite par Euler vers 1730.
:::

## 8. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Où $\ln(u(x))$ est-elle définie ? | résoudre $u(x) > 0$, avec un tableau de signes |
| Dériver $\ln u$ | $(\ln u)' = \dfrac{u'}{u}$ ; simplifier **avant** de dériver |
| Résoudre une équation ou inéquation | domaine, regrouper, enlever $\ln$, **vérifier** dans le domaine |
| Comparer à une constante | $c = \ln(e^c)$ ; par exemple $1 = \ln e$ |
| Limite avec $\ln x \to \pm\infty$ | $\dfrac{\ln x}{x^n} \to 0$ en $+\infty$ ; $x^n\ln x \to 0$ en $0^+$ ; $\dfrac{\ln(1 + x)}{x} \to 1$ en $0$ |
| Signe de $\ln(u) - \ln(v)$ ou de $\ln u$ | $\ln u \geq 0 \iff u \geq 1$ ; $\ln u \geq \ln v \iff u \geq v$ |
| Majorer ou minorer $\ln$ | $\ln x \leq x - 1$ appliqué au bon $x$ |
| Une primitive d'un quotient | $\dfrac{u'}{u}$ a pour primitive $\ln\lvert u\rvert$ |
| Seuil d'une suite géométrique | prendre $\ln$ ; attention au signe de $\ln q$ |

## Vérifie-toi

::::check[Simplifier]
Écrire $\ln 8 - 2\ln 6 + \ln 18$ en fonction de $\ln 2$ et $\ln 3$.

:::answer
$\ln 8 = 3\ln 2$, $2\ln 6 = 2\ln 2 + 2\ln 3$, $\ln 18 = \ln 2 + 2\ln 3$. Donc la somme vaut $3\ln 2 - 2\ln 2 - 2\ln 3 + \ln 2 + 2\ln 3 = 2\ln 2$. Contrôle : $\dfrac{8\times 18}{36} = 4 = 2^2$ ✓.
:::
::::

::::check[Domaine et dérivée]
Donner le domaine de $g(x) = \ln(x^2 - 4)$ puis calculer $g'(x)$.

:::answer
$x^2 - 4 > 0 \iff x < -2$ ou $x > 2$. Le domaine est $]-\infty\,;-2[\,\cup\,]2\,;+\infty[$ et $g'(x) = \dfrac{2x}{x^2 - 4}$.
:::
::::

::::check[Équation]
Résoudre $\ln(x + 2) + \ln x = \ln 3$.

:::answer
Domaine : $x > 0$. Alors $x(x + 2) = 3$, soit $x^2 + 2x - 3 = 0$, de racines $1$ et $-3$. Seul $x = 1$ est dans le domaine. Contrôle : $\ln 3 + \ln 1 = \ln 3$ ✓.
:::
::::

::::check[Inéquation]
Résoudre $\ln(x - 1) \geq 2$.

:::answer
Domaine : $x > 1$. Comme $2 = \ln(e^2)$ et que $\ln$ est croissante, $\ln(x - 1) \geq \ln(e^2) \iff x - 1 \geq e^2 \iff x \geq 1 + e^2 \approx 8{,}39$. L'ensemble des solutions est $[1 + e^2\,;+\infty[$.
:::
::::

::::check[Une limite]
Calculer $\displaystyle\lim_{x \to +\infty}\left(x - 2\ln x\right)$.

:::answer
Forme indéterminée $\infty - \infty$. On factorise : $x - 2\ln x = x\left(1 - 2\cdot\dfrac{\ln x}{x}\right)$. Comme $\dfrac{\ln x}{x} \to 0$, le facteur entre parenthèses tend vers $1$, donc la limite est $+\infty$.
:::
::::

::::challenge
Encadrer $\ln 2$ sans calculatrice, avec seulement $\ln x \leq x - 1$.

:::answer
**Majoration.** $\ln\sqrt 2 \leq \sqrt 2 - 1$, donc $\ln 2 = 2\ln\sqrt 2 \leq 2(\sqrt 2 - 1) \approx 0{,}828$.

**Minoration.** On applique la même inégalité à $\dfrac1{\sqrt 2}$ : $\ln\dfrac1{\sqrt 2} = -\dfrac12\ln 2 \leq \dfrac1{\sqrt 2} - 1$, donc $\ln 2 \geq 2 - \sqrt 2 \approx 0{,}586$.

Ainsi $0{,}586 \leq \ln 2 \leq 0{,}828$. La vraie valeur, $0{,}693$, est dans la fourchette. En remplaçant $\sqrt 2$ par $2^{1/8}$ on obtient, de la même façon, $0{,}664 \leq \ln 2 \leq 0{,}724$ : on resserre autant qu'on veut.
:::
::::

:::summary
- $\ln$ est l'**unique primitive de $\dfrac1x$ sur $]0\,;+\infty[$ qui s'annule en $1$** ; $\ln x$ est l'aire sous l'hyperbole entre $1$ et $x$. Elle est **strictement croissante**, concave, et $\ln 1 = 0$.
- $\ln(ab) = \ln a + \ln b$, $\ln\dfrac ab = \ln a - \ln b$, $\ln(a^n) = n\ln a$, $\ln\sqrt a = \dfrac12\ln a$ (pour $a, b > 0$). Jamais de règle pour $\ln(a + b)$.
- $\lim\limits_{+\infty}\ln = +\infty$, $\lim\limits_{0^+}\ln = -\infty$ ; $\ln$ est une **bijection** de $]0\,;+\infty[$ sur $\mathbb R$ ; $e$ est l'unique réel tel que $\ln e = 1$.
- Croissances comparées : $\dfrac{\ln x}{x^n} \to 0$ en $+\infty$, $x^n\ln x \to 0$ en $0^+$, $\dfrac{\ln(1 + x)}{x} \to 1$ en $0$.
- $\ln x \leq x - 1$ pour tout $x > 0$.
- $(\ln u)' = \dfrac{u'}{u}$ ; $\ln(u(x))$ existe quand $u(x) > 0$ ; une primitive de $\dfrac{u'}{u}$ est $\ln\lvert u\rvert$.
- Équations et inéquations : **domaine, regrouper, enlever $\ln$, vérifier**.
- $\log_a x = \dfrac{\ln x}{\ln a}$ ; $\log$ désigne le logarithme décimal ; diviser par $\ln q < 0$ inverse une inégalité.
:::
