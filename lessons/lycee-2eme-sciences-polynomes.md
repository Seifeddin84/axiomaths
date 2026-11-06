---
title: "Notions de polynômes"
slug: "lycee-2eme-sciences-polynomes"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Technologies de l'Informatique"]
chapter: "Polynômes"
order: 3
summary: "Reconnaître un polynôme, identifier ses coefficients, trouver ses racines et surtout le factoriser : c'est l'outil qui transforme une équation de degré 3 en un simple tableau de signes."
prerequisites: ["Identités remarquables", "Second degré : discriminant et signe d'un trinôme"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 3"
updated: "2026-11-06"
---

## Pourquoi ce chapitre ?

On dispose d'une plaque de carton carrée de $60$ cm de côté. On découpe à chaque coin un carré de côté $x$ cm, puis on replie les bords pour obtenir une boîte sans couvercle. Le volume de la boîte est

$$
V(x) = x\,(60-2x)^2 = 4x^3 - 240x^2 + 3600x, \qquad x \in \left]0\,;30\right[.
$$

**Question :** quelle valeur de $x$ donne la plus grande boîte ?

Tu sais étudier le signe d'une expression du premier ou du second degré. Mais $V(x)$ est de **degré 3** : ni le discriminant ni le tableau de signes d'un trinôme ne s'appliquent directement. Il nous manque un outil : **factoriser un polynôme dont on connaît une racine**. C'est exactement l'objet de ce chapitre. On reviendra à la boîte à la [section 7](#7-equations-et-inequations-de-degre-superieur-a-2).

:::intuition
Un polynôme, c'est une expression construite uniquement avec $x$, des nombres, des additions et des multiplications. Pas de racine carrée de $x$, pas de $x$ au dénominateur, pas de valeur absolue. Ces expressions sont simples à calculer, et surtout **on peut les factoriser comme des nombres entiers** : connaître une racine $\alpha$, c'est connaître un « diviseur » $x-\alpha$.
:::

## 1. Fonction polynôme

:::definition[Fonction polynôme]
Soient $a_0, a_1, \dots, a_n$ des réels. La fonction $f$ définie sur $\mathbb{R}$ par

$$
f(x) = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0
$$

est appelée **fonction polynôme** (ou simplement **polynôme**). Les réels $a_n, \dots, a_1, a_0$ sont ses **coefficients**.

Si tous les coefficients sont nuls, $f$ est le **polynôme nul**.
:::

:::example[Polynôme ou pas ?]
| Expression | Polynôme ? | Pourquoi |
|---|---|---|
| $P(x) = 3x^4 - 7x^2 + x$ | oui | coefficients $3,\ 0,\ -7,\ 1,\ 0$ |
| $Q(x) = \sqrt{2}\,x^3 - x$ | oui | un coefficient peut être irrationnel : c'est $x$ qui ne doit pas être sous la racine |
| $K(x) = (x-1)^3 - x^3$ | oui | en développant : $K(x) = -3x^2 + 3x - 1$ |
| $f(x) = \sqrt{x}$ | non | $x$ sous une racine (et $f$ n'est pas définie sur $\mathbb{R}$) |
| $g(x) = \dfrac{1}{x}$ | non | $x$ au dénominateur |
| $h(x) = \lvert x \rvert$ | non | valeur absolue |
:::

:::warning[Une expression peut cacher sa nature]
$K(x) = (x-1)^3 - x^3$ « ressemble » à un polynôme de degré 3, mais les termes en $x^3$ se détruisent. Inversement, $C(x) = \dfrac{x^2-1}{x-1}$ « ressemble » à $x+1$, mais **ce n'est pas une fonction polynôme** : elle n'est pas définie en $1$. Il faut toujours regarder l'expression *et* son ensemble de définition.
:::

## 2. Égalité de deux polynômes

Comment savoir si deux expressions polynômes sont égales pour **tout** réel $x$ ? Le calcul de quelques valeurs ne suffit pas :

:::warning[Deux valeurs communes ne prouvent rien]
Soient $f(x) = 3x^2 - x + 3$ et $g(x) = 2x^2 + 4x - 1$. On a $f(1) = g(1) = 5$ et $f(4) = g(4) = 47$. Pourtant $f \neq g$ : en effet
$$
f(x) - g(x) = x^2 - 5x + 4 = (x-1)(x-4),
$$
qui ne s'annule **qu'en** $1$ et en $4$.
:::

Le bon critère porte sur les **coefficients**.

:::theorem[Polynôme nul — identification]
1. Un polynôme est nul (c'est-à-dire $P(x) = 0$ pour tout réel $x$) **si et seulement si** tous ses coefficients sont nuls.
2. Deux polynômes sont égaux **si et seulement si** ils ont le même degré et les coefficients des termes de même degré sont égaux.
:::

:::proof[Cas du degré 2]
Soit $g(x) = a_2x^2 + a_1x + a_0$ avec $g(x) = 0$ pour tout réel $x$. On choisit trois valeurs bien placées.

| Étape | Justification |
|---|---|
| $g(0) = a_0 = 0$ | on remplace $x$ par $0$ |
| $g(1) = a_2 + a_1 + a_0 = 0$, donc $a_2 + a_1 = 0$ | on remplace $x$ par $1$ et $a_0 = 0$ |
| $g(-1) = a_2 - a_1 + a_0 = 0$, donc $a_2 - a_1 = 0$ | on remplace $x$ par $-1$ et $a_0 = 0$ |
| $2a_2 = 0$ donc $a_2 = 0$, puis $a_1 = 0$ | on additionne les deux égalités précédentes |

La réciproque est évidente : si tous les coefficients sont nuls, $g(x) = 0$ pour tout $x$. Le point 2 s'en déduit en appliquant le point 1 au polynôme $f - g$.
:::

C'est la **méthode d'identification** : quand deux écritures d'un même polynôme sont égales pour tout $x$, on égale les coefficients un par un.

:::example[Identifier des coefficients]
Déterminer les réels $a$, $b$, $c$ tels que, pour tout réel $x$ :
$$
x^3 + 16x^2 + 86x + 156 = (x+5)^3 + a(x+5)^2 + b(x+5) + c.
$$

On développe le membre de droite :
$$
(x+5)^3 + a(x+5)^2 + b(x+5) + c = x^3 + \textcolor{#ea580c}{(15+a)}x^2 + \textcolor{#2563eb}{(75+10a+b)}x + (125+25a+5b+c).
$$

| Coefficient de | Égalité | Résultat |
|---|---|---|
| $x^2$ | $15 + a = 16$ | $a = 1$ |
| $x$ | $75 + 10a + b = 86$ | $b = 1$ |
| terme constant | $125 + 25a + 5b + c = 156$ | $c = 1$ |

Donc $x^3 + 16x^2 + 86x + 156 = (x+5)^3 + (x+5)^2 + (x+5) + 1$. On verra au [défi 2](#11-pour-aller-plus-loin) que cette écriture permet de factoriser le polynôme presque sans calcul.
:::

## 3. Degré d'un polynôme

:::definition[Degré]
Tout polynôme **non nul** $P$ s'écrit de façon unique
$$
P(x) = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0 \qquad \text{avec } a_n \neq 0.
$$
L'entier $n$ est le **degré** de $P$ ; on note $d^\circ(P) = n$.

- Un polynôme constant non nul est de degré $0$.
- Le polynôme nul **n'a pas** de degré.
:::

:::remark[Vocabulaire]
- $a_0$ est le **terme constant** ; $a_1x$ est le **terme du premier degré** ; $a_nx^n$ est le **terme de plus haut degré** et $a_n$ son coefficient.
- Chacun des termes $a_kx^k$ est un **monôme**.
- Un polynôme de degré 1 est un **binôme** ; un polynôme de degré 2 est un **trinôme** (du second degré).
:::

:::example[Lire un degré]
| Polynôme | Degré | Remarque |
|---|---|---|
| $P(x) = 3x^4 - 7x^2 + x$ | $4$ | |
| $R(x) = (x+1)(x-1)$ | $2$ | $R(x) = x^2 - 1$ |
| $K(x) = (x-1)^3 - x^3$ | $2$ | les $x^3$ se détruisent ! |
| $V(x) = (2x+1)(2x^3 + 8x - 1)$ | $4$ | $1 + 3$, sans développer |
| $T(x) = 5$ | $0$ | polynôme constant |
:::

## 4. Opérations sur les polynômes

:::definition[Somme, produit par un réel, produit]
Soient $f$ et $g$ deux polynômes et $\alpha$ un réel. Les fonctions définies pour tout réel $x$ par
$$
(f+g)(x) = f(x) + g(x), \qquad (\alpha f)(x) = \alpha\, f(x), \qquad (fg)(x) = f(x) \times g(x)
$$
sont encore des polynômes.
:::

:::property[Degré d'un produit]
Si $f$ et $g$ sont deux polynômes non nuls, alors
$$
d^\circ(fg) = d^\circ(f) + d^\circ(g).
$$
Si de plus $\alpha \neq 0$, alors $d^\circ(\alpha f) = d^\circ(f)$.
:::

Pourquoi ? Le terme de plus haut degré de $fg$ vient d'**un seul** produit : $a_nx^n \times b_px^p = a_nb_p\,x^{n+p}$, et $a_nb_p \neq 0$ car $a_n \neq 0$ et $b_p \neq 0$.

:::example[Vérifier la règle sur un calcul]
Soient $f(x) = 2x^3 - 5x^2 + x - 1$ et $q(x) = x - 2$.
$$
f(x)\,q(x) = 2x^4 - 4x^3 - 5x^3 + 10x^2 + x^2 - 2x - x + 2 = 2x^4 - 9x^3 + 11x^2 - 3x + 2.
$$
On trouve bien un polynôme de degré $4 = 3 + 1$, de coefficient dominant $2 \times 1 = 2$.
:::

:::warning[Pour une somme, le degré peut baisser]
Pour la somme, on a seulement $d^\circ(f+g) \le \max\big(d^\circ(f), d^\circ(g)\big)$. Exemple : avec $f(x) = x^3 + x$ et $g(x) = -x^3 + 2$, on obtient $(f+g)(x) = x + 2$, de degré $1$. Les termes de plus haut degré peuvent se détruire, comme dans $K(x) = (x-1)^3 - x^3$.
:::

::::check[Degré sans développer]
Donner le degré de $B(x) = (x^2+3)^5$ et de $C(x) = (x^4 - 2x^3 + x^2 + 5x - 7)(x-1) - (x^5+1)$.

:::answer
- $B$ est le produit de $5$ trinômes : $d^\circ(B) = 5 \times 2 = 10$.
- Dans $C$, le terme en $x^5$ du produit est $x^5$, qui se détruit avec $-x^5$. Les termes en $x^4$ sont $-2x^3 \times x = -2x^4$ et $x^4 \times (-1) = -x^4$, soit $-3x^4 \neq 0$. Donc $d^\circ(C) = 4$ (et non $5$ !).
:::
::::

## 5. Racines d'un polynôme

:::definition[Racine]
On dit qu'un réel $\alpha$ est une **racine** (ou un **zéro**) du polynôme $f$ si $f(\alpha) = 0$.
:::

:::example[Vérifier une racine]
Pour $h(x) = 3x^3 - x^2 - 6x + 2$ :
$$
h\!\left(\tfrac{1}{3}\right) = 3 \times \tfrac{1}{27} - \tfrac{1}{9} - 6 \times \tfrac{1}{3} + 2 = \tfrac{1}{9} - \tfrac{1}{9} - 2 + 2 = 0.
$$
Donc $\tfrac{1}{3}$ est une racine de $h$.
:::

Dans les exercices, on te demande souvent de **trouver** une racine, sans qu'on te la donne : on parle de **racine apparente**.

:::method[Chercher une racine apparente]
1. Tester les valeurs simples : $0$, $1$, $-1$, $2$, $-2$, $\tfrac12$, …
2. Deux tests instantanés :
   - $f(1) = a_n + \dots + a_1 + a_0$ : **$1$ est racine si et seulement si la somme des coefficients est nulle** ;
   - $f(-1) = 0$ si et seulement si la somme des coefficients des termes de degré pair est égale à la somme des coefficients des termes de degré impair.
3. Si les coefficients sont **entiers**, une racine entière $\alpha$ divise forcément le terme constant $a_0$ (voir la justification ci-dessous). On ne teste donc que les diviseurs de $a_0$.
:::

:::proof[Pourquoi une racine entière divise $a_0$]
| Étape | Justification |
|---|---|
| $a_n\alpha^n + \dots + a_1\alpha + a_0 = 0$ | $\alpha$ est racine |
| $a_0 = -\alpha\,(a_n\alpha^{n-1} + \dots + a_2\alpha + a_1)$ | on isole $a_0$ et on factorise par $\alpha$ |
| la parenthèse est un entier | les $a_k$ et $\alpha$ sont entiers |
| donc $\alpha$ divise $a_0$ | définition de la divisibilité |
:::

:::example[Une racine entière]
$P(x) = x^3 + 6x^2 + 12x - 56$. Les racines entières possibles divisent $56$ : $\pm1, \pm2, \pm4, \pm7, \dots$
- $P(1) = 1 + 6 + 12 - 56 = -37 \neq 0$ ;
- $P(2) = 8 + 24 + 24 - 56 = 0$. Donc $2$ est une racine de $P$.
:::

## 6. Racines et factorisation

Voici le résultat central du chapitre.

:::theorem[Racine et factorisation]
Soit $f$ un polynôme de degré $n \ge 1$ et $\alpha$ un réel.

$$
\alpha \text{ est une racine de } f \iff \text{il existe un polynôme } g \text{ de degré } n-1 \text{ tel que } f(x) = (x-\alpha)\,g(x) \text{ pour tout réel } x.
$$

On dit alors que $f$ est **factorisable par** $x - \alpha$.
:::

:::proof[Cas du degré 3]
Le sens « $\Leftarrow$ » est immédiat : si $f(x) = (x-\alpha)g(x)$, alors $f(\alpha) = 0 \times g(\alpha) = 0$.

Pour « $\Rightarrow$ », soit $f(x) = ax^3 + bx^2 + cx + d$ avec $a \neq 0$ et $f(\alpha) = 0$.

| Étape | Justification |
|---|---|
| $f(x) = f(x) - f(\alpha)$ | car $f(\alpha) = 0$ |
| $= a(x^3 - \alpha^3) + b(x^2 - \alpha^2) + c(x - \alpha)$ | les $d$ se simplifient |
| $= a(x-\alpha)(x^2 + \alpha x + \alpha^2) + b(x-\alpha)(x+\alpha) + c(x-\alpha)$ | identités $u^3 - v^3$ et $u^2 - v^2$ |
| $= (x-\alpha)\big[\,a x^2 + \textcolor{#ea580c}{(a\alpha + b)}\,x + \textcolor{#2563eb}{(a\alpha^2 + b\alpha + c)}\,\big]$ | on factorise par $x - \alpha$ |

Le crochet est un polynôme $g$ de degré $2$ (son coefficient dominant $a$ est non nul).
:::

Retiens les deux coefficients colorés : ils fabriquent le **schéma de Horner** ci-dessous.

:::corollary
- Si $\alpha$ et $\beta$ sont deux racines **distinctes** de $f$ (de degré $n \ge 2$), alors $f(x) = (x-\alpha)(x-\beta)\,g(x)$ avec $d^\circ(g) = n-2$.
- Plus généralement, si $\alpha_1, \dots, \alpha_k$ sont des racines distinctes de $f$, alors $f(x) = (x-\alpha_1)\cdots(x-\alpha_k)\,g(x)$ avec $d^\circ(g) = n - k$.
- Par conséquent, **un polynôme de degré $n$ admet au plus $n$ racines.**
:::

### Trois façons de trouver $g$

On les compare sur le même exemple : $P(x) = 2x^3 - 7x^2 - 17x + 10$, dont $-2$ est une racine. En effet,
$$
P(-2) = 2(-8) - 7(4) - 17(-2) + 10 = -16 - 28 + 34 + 10 = 0.
$$
On cherche donc $Q$ de degré $2$ tel que $P(x) = (x+2)\,Q(x)$.

:::method[Identification des coefficients]
On pose $Q(x) = ax^2 + bx + c$ et on développe :
$$
(x+2)(ax^2 + bx + c) = ax^3 + (2a + b)x^2 + (2b + c)x + 2c.
$$

| Coefficient de | Égalité | Résultat |
|---|---|---|
| $x^3$ | $a = 2$ | $a = 2$ |
| $x^2$ | $2a + b = -7$ | $b = -11$ |
| $x$ | $2b + c = -17$ | $c = 5$ |
| terme constant | $2c = 10$ | vérifié ✔ |

On a **4 équations pour 3 inconnues** : la dernière sert de contrôle. Si elle est fausse, c'est que $-2$ n'était pas une racine… ou qu'il y a une erreur de calcul.
:::

:::method[Division suivant les puissances décroissantes]
On divise comme pour les nombres entiers, en ne regardant à chaque étape que le terme de plus haut degré.

| Étape | Terme du quotient | On retranche | Reste |
|---|---|---|---|
| 1 | $2x^3 \div x = 2x^2$ | $2x^2(x+2) = 2x^3 + 4x^2$ | $-11x^2 - 17x + 10$ |
| 2 | $-11x^2 \div x = -11x$ | $-11x(x+2) = -11x^2 - 22x$ | $5x + 10$ |
| 3 | $5x \div x = 5$ | $5(x+2) = 5x + 10$ | $0$ |

Le quotient est $Q(x) = 2x^2 - 11x + 5$ et le reste est nul. Cette méthode marche aussi pour diviser par $2x - 1$, par $x^2 + 1$, etc.
:::

:::method[Schéma de Horner (le plus rapide)]
On écrit les coefficients de $P$. On descend le premier, puis on répète : **multiplier par $\alpha = -2$, ajouter au coefficient suivant**.

| | $x^3$ | $x^2$ | $x$ | constante |
|---|---|---|---|---|
| coefficients de $P$ | $2$ | $-7$ | $-17$ | $10$ |
| $\times(-2)$ puis $+$ | | $2 \times (-2) = -4$ | $-11 \times (-2) = 22$ | $5 \times (-2) = -10$ |
| résultat | $\mathbf{2}$ | $\mathbf{-11}$ | $\mathbf{5}$ | $\mathbf{0} = P(-2)$ |

La dernière ligne donne les coefficients de $Q$ : $Q(x) = 2x^2 - 11x + 5$. La dernière case vaut $P(\alpha)$. Ce sont exactement les coefficients colorés de la démonstration : $a\alpha + b$, puis $(a\alpha + b)\alpha + c$.
:::

On finit la factorisation avec le second degré : pour $Q(x) = 2x^2 - 11x + 5$, $\Delta = 121 - 40 = 81$, donc les racines sont $\dfrac{11 \pm 9}{4}$, c'est-à-dire $5$ et $\dfrac12$. Ainsi
$$
\boxed{\,2x^3 - 7x^2 - 17x + 10 = (x+2)(x-5)(2x-1)\,}
$$

:::tic[Horner dans un tableur]
Le manuel propose de programmer Horner dans un tableur. Pour $P(x) = ax^3 + bx^2 + cx + d$, on tape $a$, $b$, $c$, $d$ dans `A2:D2` et $\alpha$ dans `E2`, puis :
- `F2` : `=A2*E2^3+B2*E2^2+C2*E2+D2` → $P(\alpha)$ ;
- `G2` : `=A2*E2+B2` → $b' = a\alpha + b$ ;
- `H2` : `=A2*E2^2+B2*E2+C2` → $c' = a\alpha^2 + b\alpha + c$.

Si `F2` affiche $0$, alors $P(x) = (x - \alpha)(ax^2 + b'x + c')$.
:::

::::check[Factoriser à partir d'une racine]
Soit $P(x) = x^3 - 4x^2 - 2x + 8$.
1. Vérifier que $4$ est une racine de $P$.
2. Factoriser $P(x)$ en produit de trois facteurs du premier degré.

:::answer
1. $P(4) = 64 - 64 - 8 + 8 = 0$.
2. Horner avec $\alpha = 4$ sur les coefficients $1,\ -4,\ -2,\ 8$ donne $1,\ 0,\ -2$ et un reste $0$. Donc $P(x) = (x-4)(x^2-2) = (x-4)(x-\sqrt2)(x+\sqrt2)$.
:::
::::

::::check[Deux racines d'un coup]
Soit $Q(x) = x^4 - x^3 - 8x^2 + 2x + 12$. Vérifier que $-2$ et $3$ sont des racines, puis résoudre $Q(x) = 0$.

:::answer
$Q(-2) = 16 + 8 - 32 - 4 + 12 = 0$ et $Q(3) = 81 - 27 - 72 + 6 + 12 = 0$. Donc $Q$ est factorisable par $(x+2)(x-3) = x^2 - x - 6$. Par identification (ou deux Horner successifs) : $Q(x) = (x^2 - x - 6)(x^2 - 2)$.

Les solutions de $Q(x) = 0$ sont $-2,\ 3,\ -\sqrt2,\ \sqrt2$ : quatre racines pour un polynôme de degré 4, c'est le maximum possible.
:::
::::

## 7. Équations et inéquations de degré supérieur à 2

La stratégie est toujours la même : **une racine apparente → une factorisation → un tableau de signes**.

::::example[Une inéquation de degré 3]
Résoudre dans $\mathbb{R}$ : $\quad 2x^3 - 3x < 2 - 3x^2$.

| Étape | Justification |
|---|---|
| $2x^3 + 3x^2 - 3x - 2 < 0$ | on passe tout à gauche ; on note $P(x)$ ce membre |
| $P(1) = 2 + 3 - 3 - 2 = 0$ | somme des coefficients nulle : $1$ est racine |
| $P(x) = (x-1)(2x^2 + 5x + 2)$ | Horner avec $\alpha = 1$ : coefficients $2,\ 5,\ 2$, reste $0$ |
| $2x^2 + 5x + 2 = (x+2)(2x+1)$ | $\Delta = 25 - 16 = 9$, racines $-2$ et $-\tfrac12$ |
| $P(x) = (x+2)(2x+1)(x-1)$ | |

:::signs
| $x$ | $-\infty$ | | $-2$ | | $-\frac12$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $x+2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
| $2x+1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x-1$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
| $P(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

Donc $\mathcal{S} = \left]-\infty\,;-2\right[ \,\cup\, \left]-\tfrac12\,;1\right[$.
::::

![La courbe de P passe sous l'axe exactement sur les intervalles de la solution](/lessons/images/polynomes-signe.svg "Le tableau de signes se lit sur la courbe : P(x) < 0 sur ]−∞ ; −2[ et sur ]−1/2 ; 1[.")

### Retour à la boîte

On peut maintenant répondre à la question du début. On calcule $V(10) = 10 \times 40^2 = 16\,000$, puis on factorise la différence :

| Étape | Justification |
|---|---|
| $V(x) - V(10) = 4x^3 - 240x^2 + 3600x - 16\,000$ | développement de $V$ |
| $= 4(x-10)(x^2 - 50x + 400)$ | $10$ est racine ; Horner sur $1,\ -60,\ 900,\ -4000$ |
| $= 4(x-10)(x-10)(x-40) = 4(x-10)^2(x-40)$ | $\Delta' = 625 - 400 = 225$, racines $10$ et $40$ |
| $V(x) - V(10) \le 0$ pour tout $x \in \left]0\,;30\right[$ | $(x-10)^2 \ge 0$ et $x - 40 < 0$ |

Donc $V(x) \le V(10)$ : **le volume est maximal pour $x = 10$ cm**, et il vaut $16\,000\ \text{cm}^3$, soit $16$ litres. Aucune dérivée n'a été nécessaire : seulement une racine et une factorisation.

![Volume de la boîte en fonction de x](/lessons/images/polynomes-boite.svg "V(x) = x(60 − 2x)² : le maximum est atteint en x = 10.")

::::challenge[Le problème de Bhaskara (XIIᵉ siècle)]
« Quel est, homme savant, le nombre qui, multiplié par $12$ et ajouté au cube du nombre, est égal à $6$ fois le carré augmenté de $35$ ? »

:::answer
On résout $x^3 + 12x = 6x^2 + 35$, c'est-à-dire $x^3 - 6x^2 + 12x - 35 = 0$. Les racines entières possibles divisent $35$ ; on trouve $5^3 - 6 \times 25 + 60 - 35 = 0$. D'où $(x-5)(x^2 - x + 7) = 0$, et $x^2 - x + 7$ n'a pas de racine ($\Delta = -27$). Le nombre cherché est $5$.

Astuce de Bhaskara : $x^3 - 6x^2 + 12x - 8 = (x-2)^3$, donc l'équation s'écrit $(x-2)^3 = 27$, d'où $x - 2 = 3$.
:::
::::

## 8. Fonctions rationnelles

:::definition[Fonction rationnelle]
Soient $f$ et $g$ deux polynômes ($g$ non nul). La fonction $h : x \mapsto \dfrac{f(x)}{g(x)}$ est une **fonction rationnelle**. Elle est définie pour tous les réels $x$ tels que $g(x) \neq 0$.
:::

::::example[Domaine, simplification, signe]
Soit $h(x) = \dfrac{x^3 - 2x^2 - x + 2}{x^2 + x - 6}$.

**Domaine.** $x^2 + x - 6 = (x-2)(x+3)$ s'annule en $2$ et $-3$. Donc $D = \mathbb{R} \setminus \{-3\,;2\}$.

**Factorisation du numérateur.** $2$ est racine : $8 - 8 - 2 + 2 = 0$. Horner donne $x^3 - 2x^2 - x + 2 = (x-2)(x^2-1) = (x-2)(x-1)(x+1)$.

**Simplification.** Pour tout $x \in D$ :
$$
h(x) = \frac{(x-2)(x-1)(x+1)}{(x-2)(x+3)} = \frac{(x-1)(x+1)}{x+3}.
$$

**Signe.** La double barre $\Vert$ marque une valeur interdite.

:::signs
| $x$ | $-\infty$ | | $-3$ | | $-1$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $(x-1)(x+1)$ | | $+$ | | $+$ | $0$ | $-$ | $0$ | $+$ | | $+$ | |
| $x+3$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | | $+$ | |
| $h(x)$ | | $-$ | $\Vert$ | $+$ | $0$ | $-$ | $0$ | $+$ | $\Vert$ | $+$ | |
:::
::::

:::warning[La simplification ne fait pas disparaître les valeurs interdites]
L'expression simplifiée $\dfrac{(x-1)(x+1)}{x+3}$ vaut $\dfrac35$ en $x = 2$, mais $h(2)$ **n'existe pas**. L'égalité n'est vraie que sur $D$. Cela compte dans les inéquations : $2$ ne doit jamais apparaître dans un ensemble de solutions.
:::

::::check[Inéquation rationnelle]
Avec la fonction $h$ ci-dessus, résoudre $h(x) \ge 0$.

:::answer
D'après le tableau de signes, et sans oublier que $2 \notin D$ :
$$
\mathcal{S} = \left]-3\,;-1\right] \,\cup\, \left[1\,;2\right[ \,\cup\, \left]2\,;+\infty\right[.
$$
Le crochet est ouvert en $-3$ et en $2$ (valeurs interdites) et fermé en $-1$ et en $1$ (là, $h$ s'annule).
:::
::::

## 9. Les pièges classiques

| Erreur | Ce qu'il faut faire |
|---|---|
| « $f(1) = g(1)$ et $f(2) = g(2)$, donc $f = g$ » | comparer **tous les coefficients** (ou étudier $f - g$) |
| Lire le degré de $(x-1)^3 - x^3$ comme $3$ | développer, ou regarder si les termes dominants se détruisent |
| Diviser les deux membres de $x^3 = 4x$ par $x$ | on perd la solution $0$ : écrire $x(x^2 - 4) = 0$ |
| Oublier le contrôle dans l'identification | il y a toujours une équation de plus que d'inconnues : elle doit être vérifiée |
| Garder une valeur interdite après simplification | toujours écrire $D$ **avant** de simplifier |

## 10. Synthèse

:::summary[À retenir]
- **Polynôme nul** $\iff$ tous les coefficients sont nuls. **Deux polynômes égaux** $\iff$ mêmes coefficients (identification).
- $d^\circ(fg) = d^\circ(f) + d^\circ(g)$ ; pour une somme, le degré peut baisser.
- $\alpha$ est racine de $f$ $\iff$ $f(x) = (x - \alpha)\,g(x)$ avec $d^\circ(g) = d^\circ(f) - 1$.
- Un polynôme de degré $n$ a **au plus $n$ racines**.
- Pour trouver $g$ : identification, division suivant les puissances décroissantes, ou schéma de Horner.
- Racine apparente : somme des coefficients nulle $\Rightarrow$ $1$ est racine ; avec des coefficients entiers, une racine entière divise $a_0$.
- Équation ou inéquation de degré $\ge 3$ : **racine apparente → factorisation → tableau de signes**.
- Fonction rationnelle : écrire l'ensemble de définition **avant** de simplifier.
:::

## 11. Pour aller plus loin

:::property[Somme et produit des racines (degré 3)]
Si $P(x) = ax^3 + bx^2 + cx + d$ ($a \neq 0$) admet trois racines $\alpha$, $\beta$, $\gamma$, alors $P(x) = a(x-\alpha)(x-\beta)(x-\gamma)$. En développant et en identifiant les coefficients :
$$
\alpha + \beta + \gamma = -\frac{b}{a}, \qquad \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}, \qquad \alpha\beta\gamma = -\frac{d}{a}.
$$
**Vérification** sur $P(x) = x^3 + 2x^2 - 5x - 6 = (x+3)(x+1)(x-2)$ : les racines sont $-3,\ -1,\ 2$. Leur somme vaut $-2 = -\frac{2}{1}$, la somme des produits deux à deux vaut $3 - 2 - 6 = -5$, et leur produit vaut $6 = -\frac{-6}{1}$. ✔
:::

::::challenge[Défi 1 — Trois nombres mystères]
Existe-t-il trois réels $\alpha$, $\beta$, $\gamma$ tels que $\alpha + \beta + \gamma = 5$, $\alpha\beta + \beta\gamma + \gamma\alpha = 3$ et $\alpha\beta\gamma = -1$ ?

:::answer
D'après la propriété précédente, ce seraient les racines de $x^3 - 5x^2 + 3x + 1$. La somme des coefficients est nulle, donc $1$ est racine, et $x^3 - 5x^2 + 3x + 1 = (x-1)(x^2 - 4x - 1)$. Les racines du trinôme sont $2 \pm \sqrt5$. Donc **oui** : $1$, $2 + \sqrt5$ et $2 - \sqrt5$. On vérifie : leur somme vaut $5$ et leur produit vaut $1 \times (4 - 5) = -1$.
:::
::::

::::challenge[Défi 2 — Factoriser sans chercher]
En utilisant l'identification de la [section 2](#2-egalite-de-deux-polynomes), factoriser $x^3 + 16x^2 + 86x + 156$.

:::answer
On a montré que ce polynôme vaut $X^3 + X^2 + X + 1$ avec $X = x + 5$. Or $X^3 + X^2 + X + 1 = X^2(X+1) + (X+1) = (X+1)(X^2+1)$. Donc
$$
x^3 + 16x^2 + 86x + 156 = (x+6)\big((x+5)^2 + 1\big) = (x+6)(x^2 + 10x + 26).
$$
Le second facteur est toujours strictement positif : $-6$ est la seule racine.
:::
::::

::::challenge[Défi 3 — La puissance de « au plus $n$ racines »]
Soient $a$, $b$, $c$ trois réels distincts. Montrer que, pour tout réel $x$,
$$
\frac{(x-b)(x-c)}{(a-b)(a-c)} + \frac{(x-c)(x-a)}{(b-c)(b-a)} + \frac{(x-a)(x-b)}{(c-a)(c-b)} = 1.
$$

:::answer
Appelons $f(x)$ le membre de gauche : c'est un polynôme de degré au plus $2$. On calcule $f(a) = 1 + 0 + 0 = 1$, de même $f(b) = 1$ et $f(c) = 1$. Le polynôme $f - 1$, de degré au plus $2$, a donc **trois** racines distinctes $a$, $b$, $c$. Un polynôme non nul de degré au plus $2$ a au plus $2$ racines : $f - 1$ est donc le polynôme nul, et $f(x) = 1$ pour tout $x$. Aucun développement n'a été nécessaire !
:::
::::

::::challenge[Défi 4 — La somme $1 + 2 + \dots + n$]
Trouver un polynôme $P$ de degré 2 tel que $P(x) - P(x-1) = x$ pour tout réel $x$, avec $P(0) = 0$. En déduire $1 + 2 + \dots + n$.

:::answer
On pose $P(x) = ax^2 + bx$ (car $P(0) = 0$). Alors $P(x) - P(x-1) = 2ax - a + b$. Par identification : $2a = 1$ et $b - a = 0$, donc $a = b = \tfrac12$ et $P(x) = \dfrac{x(x+1)}{2}$.

En remplaçant $x$ par $1, 2, \dots, n$ puis en additionnant, les termes se détruisent deux à deux (somme « télescopique ») :
$$
1 + 2 + \dots + n = P(n) - P(0) = \frac{n(n+1)}{2}.
$$
:::
::::

:::history[De Bagdad au tableur]
L'idée de traiter les polynômes **comme des nombres** (les additionner, les multiplier, les diviser) s'est développée dans l'algèbre arabe. Au Xᵉ siècle, **al-Karajī** (Bagdad) calcule sur les puissances de l'inconnue comme sur des nombres. Au XIIᵉ siècle, **al-Samaw'al al-Maghribī** décrit dans *al-Bāhir fī al-jabr* la division d'un polynôme par un autre, en rangeant les coefficients dans des tableaux. C'est l'ancêtre direct de la « disposition pratique » de la division de ce chapitre.

Le schéma qui porte le nom de **Horner** (1819) était déjà utilisé en Chine par **Qin Jiushao** en 1247. Aujourd'hui, c'est encore ainsi que les ordinateurs évaluent les polynômes : c'est la méthode qui demande le moins de multiplications.
:::
