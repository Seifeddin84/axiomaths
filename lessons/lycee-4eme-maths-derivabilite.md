---
title: "Dérivabilité : nombre dérivé, tangente, règles de dérivation, théorème des accroissements finis"
slug: "lycee-4eme-maths-derivabilite"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Dérivabilité"
summary: "Le nombre dérivé comme limite du taux d'accroissement, tangente et demi-tangentes, dérivabilité et continuité, règles de dérivation et dérivée d'une composée, théorème de Rolle et des accroissements finis, inégalité des accroissements finis et application aux suites récurrentes, dérivées successives."
prerequisites: ["Limites et continuité", "Fonctions usuelles", "Trigonométrie"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Dérivabilité »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une voiture parcourt $100$ km en $1$ h. Sa vitesse **moyenne** est $100$ km/h. Mais que dit le compteur à l'instant précis $t = 0{,}5$ h ? Pour répondre, on mesure la vitesse moyenne sur des intervalles de plus en plus courts autour de cet instant. La limite de ces vitesses moyennes, c'est la **vitesse instantanée**, et en mathématiques, c'est le **nombre dérivé**.

:::intuition
Une courbe, vue de très près, ressemble à une droite. La **tangente** est cette droite, et sa pente est le nombre dérivé. Pour la construire, on part d'une **sécante** (une droite qui coupe la courbe en deux points) et on rapproche le second point du premier. La sécante tourne et se stabilise sur la tangente. Le calcul de la pente de la sécante, puis sa limite, s'appelle un **taux d'accroissement**.
:::

## 1. Nombre dérivé

### Définition

:::definition[Nombre dérivé]
Soit $f$ définie sur un intervalle $I$ et $a \in I$. On dit que $f$ est **dérivable en $a$** si le taux d'accroissement
$$
\tau(x) = \dfrac{f(x) - f(a)}{x - a}\qquad(x \neq a)
$$
a une **limite finie** quand $x \to a$. Cette limite est le **nombre dérivé** de $f$ en $a$, noté $f'(a)$ :
$$
f'(a) = \lim_{x \to a}\dfrac{f(x) - f(a)}{x - a} = \lim_{h \to 0}\dfrac{f(a + h) - f(a)}{h}.
$$
:::

![Sécantes qui tendent vers la tangente](/lessons/images/m4-secantes-tangente.svg "Pour f(x) = x² en A(1 ; 1), la sécante vers le point d'abscisse 1 + h a pour pente 2 + h : 3 pour h = 1, 2,5 pour h = 0,5, 2,2 pour h = 0,2. Quand h tend vers 0, elle tend vers la tangente, de pente f'(1) = 2.")

:::example[Calculer un nombre dérivé par la définition]
$f(x) = x^2$ en $a = 1$ : $\dfrac{f(1 + h) - f(1)}{h} = \dfrac{(1 + h)^2 - 1}{h} = \dfrac{2h + h^2}{h} = 2 + h \to 2$. Donc $f'(1) = 2$, comme la figure l'annonce.

$f(x) = \sqrt x$ en $a = 4$ : $\dfrac{\sqrt x - 2}{x - 4} = \dfrac{\sqrt x - 2}{(\sqrt x - 2)(\sqrt x + 2)} = \dfrac{1}{\sqrt x + 2} \to \dfrac14$. Donc $f'(4) = \dfrac14$. Contrôle : en $x = 4{,}001$, le taux vaut $0{,}249984$.
:::

### La tangente

:::property[Tangente]
Si $f$ est dérivable en $a$, la courbe $\mathcal C_f$ a une **tangente** au point $A(a\,;f(a))$, de coefficient directeur $f'(a)$. Son équation est
$$
y = f(a) + f'(a)\,(x - a).
$$
:::

:::example[Équation d'une tangente]
Pour $\sqrt x$ en $a = 4$ : $f(4) = 2$ et $f'(4) = \dfrac14$, donc la tangente est $y = 2 + \dfrac14(x - 4)$. Elle sert d'**approximation** : $\sqrt{4{,}1} \approx 2 + \dfrac14\times 0{,}1 = 2{,}025$, et la vraie valeur est $2{,}02485$.
:::

### Dérivabilité à gauche et à droite

:::definition[Dérivées à gauche et à droite]
$f$ est **dérivable à droite** en $a$ si $\lim\limits_{x \to a^+}\dfrac{f(x) - f(a)}{x - a}$ existe et est finie ; on la note $f'_d(a)$. De même à gauche, $f'_g(a)$. $f$ est dérivable en $a$ **si et seulement si** $f'_d(a)$ et $f'_g(a)$ existent et sont **égales**.
:::

:::example[Trois cas en zéro : anguleux, vertical, dérivable]
**$f(x) = \lvert x\rvert$ en $0$.** Le taux est $\dfrac{\lvert x\rvert}{x}$, qui vaut $+1$ pour $x > 0$ et $-1$ pour $x < 0$. Donc $f'_d(0) = 1 \neq f'_g(0) = -1$ : **pas dérivable** en $0$. La courbe a un **point anguleux** avec deux demi-tangentes.

**$f(x) = \sqrt x$ en $0$.** Le taux est $\dfrac{\sqrt x - 0}{x - 0} = \dfrac{1}{\sqrt x} \to +\infty$. La limite est **infinie** : $f$ n'est pas dérivable en $0$, mais la courbe a une **demi-tangente verticale** (c'est l'axe des ordonnées).

**$f(x) = x\lvert x\rvert$ en $0$.** Le taux est $\dfrac{x\lvert x\rvert}{x} = \lvert x\rvert \to 0$ des deux côtés : $f$ est dérivable en $0$, avec $f'(0) = 0$. Même avec une valeur absolue dedans, une fonction peut être dérivable.
:::

### Dérivabilité et continuité

:::theorem[Dérivable implique continue]
Si $f$ est dérivable en $a$, alors $f$ est **continue** en $a$.
:::

:::proof[Dérivable implique continue]
| Étape | Justification |
|---|---|
| Pour $x \neq a$ : $f(x) - f(a) = \dfrac{f(x) - f(a)}{x - a}\times (x - a)$ | on multiplie et divise par $x - a$ |
| Quand $x \to a$, le premier facteur tend vers $f'(a)$ et le second vers $\textcolor{#ea580c}{0}$ | $f$ est dérivable en $a$ |
| donc $f(x) - f(a) \to f'(a)\times 0 = 0$ | produit de limites |
| donc $f(x) \to f(a)$ | $f$ est continue en $a$ |
:::

:::warning
**La réciproque est fausse.** $\lvert x\rvert$ et $\sqrt x$ sont continues en $0$ sans y être dérivables. En revanche, **une fonction non continue ne peut pas être dérivable** : si l'on rencontre un saut, on sait déjà qu'il n'y a pas de tangente.
:::

## 2. Règles de dérivation

### Les formules de base

Soit $f$ et $g$ dérivables, $\lambda$ un réel.

| Fonction | Dérivée |
|---|---|
| $f + g$ | $f' + g'$ |
| $\lambda f$ | $\lambda f'$ |
| $fg$ | $f'g + fg'$ |
| $\dfrac fg$ ($g \neq 0$) | $\dfrac{f'g - fg'}{g^2}$ |
| $\dfrac1g$ | $-\dfrac{g'}{g^2}$ |
| $f^n$ ($n$ entier) | $n\,f'\,f^{n-1}$ |
| $\sqrt f$ ($f > 0$) | $\dfrac{f'}{2\sqrt f}$ |

| Fonction usuelle | Dérivée |
|---|---|
| $x^n$ | $n\,x^{n-1}$ |
| $\sqrt x$ | $\dfrac{1}{2\sqrt x}$ sur $]0\,;+\infty[$ |
| $\sin x$ ; $\cos x$ | $\cos x$ ; $-\sin x$ |
| $\tan x$ | $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ |

### La dérivée d'une composée

:::theorem[Dérivée d'une composée]
Si $u$ est dérivable en $x_0$ et $f$ est dérivable en $u(x_0)$, alors $f\circ u$ est dérivable en $x_0$ et
$$
(f\circ u)'(x_0) = f'\big(u(x_0)\big)\times u'(x_0).
$$
:::

Autrement dit : **on dérive « de l'extérieur », puis on multiplie par la dérivée de l'intérieur**. Si $f$ transforme $u$ à la vitesse $f'$ et $u$ évolue à la vitesse $u'$, les vitesses se multiplient.

:::example[Trois dérivées composées]
- $f(x) = \sqrt{x^2 + 1}$ : $f'(x) = \dfrac{2x}{2\sqrt{x^2 + 1}} = \dfrac{x}{\sqrt{x^2 + 1}}$. En $x = 1$ : $\dfrac{1}{\sqrt2} \approx 0{,}7071$.
- $g(x) = \sin^2(3x)$ : l'extérieur est « au carré », l'intérieur $\sin(3x)$ dont l'intérieur est $3x$. $g'(x) = 2\sin(3x)\times 3\cos(3x) = 3\sin(6x)$. En $x = 0{,}2$ : $3\sin 1{,}2 \approx 2{,}796$.
- $h(x) = \cos(x^2)$ : $h'(x) = -\sin(x^2)\times 2x = -2x\sin(x^2)$. En $x = 1$ : $-2\sin 1 \approx -1{,}683$.
:::

:::method[Dériver sans se tromper]
1. **Identifier la structure** : somme, produit, quotient, composée ?
2. **Dériver l'extérieur**, en laissant l'intérieur tel quel.
3. **Multiplier par la dérivée de l'intérieur.**
4. **Simplifier** et **contrôler** en un point (calculer à la main le taux d'accroissement pour un petit $h$).
:::

### Signe de la dérivée et variations

:::theorem[Variations]{wiki="Signe de la dérivée et variations"}
Soit $f$ dérivable sur un intervalle $I$.

- $f' \geq 0$ sur $I$ $\iff$ $f$ est **croissante** sur $I$ ; $f' \leq 0$ $\iff$ décroissante ; $f' = 0$ $\iff$ constante.
- Si $f' > 0$ sur $I$ (sauf peut-être en des points isolés), $f$ est **strictement croissante**.
- Si $f'$ s'annule en $a$ **en changeant de signe**, $f$ admet un **extremum local** en $a$.
:::

:::curious[Par les accroissements finis]
Le sens « $f$ croissante $\Rightarrow f' \geq 0$ » vient du signe des taux d'accroissement. Pour l'autre sens, prends $x < y$ dans $I$ : le théorème des accroissements finis (paragraphe suivant) donne $c \in\, ]x\,;y[$ avec $f(y) - f(x) = f'(c)\,(y - x)$, qui est $\geq 0$ si $f' \geq 0$, nul si $f' = 0$, et $> 0$ si $f'(c) > 0$. Pour « $f' > 0$ sauf en des points isolés », on applique ce résultat entre deux points isolés consécutifs, puis on recolle.
:::


:::warning
$f'(a) = 0$ n'implique **pas** un extremum. $f(x) = x^3$ a $f'(0) = 0$ mais est strictement croissante sur $\mathbb R$ : la tangente est horizontale, la courbe la **traverse**. L'extremum exige que $f'$ **change de signe**.
:::

## 3. Les accroissements finis

### Rolle, puis le cas général

Si $f$ monte puis redescend (ou l'inverse) en retrouvant la même valeur aux extrémités, quelque part la tangente est horizontale.

:::theorem[Théorème de Rolle]
Soit $f$ **continue** sur $[a\,;b]$, **dérivable** sur $]a\,;b[$, avec $f(a) = f(b)$. Alors il existe $c \in\, ]a\,;b[$ tel que $f'(c) = 0$.
:::

Ce théorème est admis. Il sert à montrer le résultat central.

:::curious[Par le maximum]
| Étape | Justification |
|---|---|
| $f([a\,;b]) = [m\,;M]$, et $m$ et $M$ sont **atteints** | image d'un segment par une fonction continue |
| Si $m = M$, $f$ est constante et $f'(c) = 0$ pour tout $c \in\, ]a\,;b[$ | dérivée d'une constante |
| Sinon, l'un des deux, disons $M$, diffère de $f(a) = f(b)$ ; il est atteint en un $c$ qui n'est ni $a$ ni $b$ | (si c'est $m$, même raisonnement) |
| Pour $h > 0$ petit : $\dfrac{f(c + h) - f(c)}{h} \leq 0$ ; pour $h < 0$ : $\dfrac{f(c + h) - f(c)}{h} \geq 0$ | $f(c + h) \leq M = f(c)$ |
| À la limite : $f'(c) \leq 0$ et $f'(c) \geq 0$, donc $f'(c) = 0$ | $f$ est dérivable en $c$ |

La seule pièce admise est que $M$ est **atteint**, résultat qui repose comme le théorème des valeurs intermédiaires sur la complétude de $\mathbb R$.
:::


:::theorem[Théorème des accroissements finis]
Soit $f$ **continue** sur $[a\,;b]$ et **dérivable** sur $]a\,;b[$. Il existe $c \in\, ]a\,;b[$ tel que
$$
f(b) - f(a) = f'(c)\,(b - a),\qquad\text{soit}\qquad f'(c) = \dfrac{f(b) - f(a)}{b - a}.
$$
:::

:::proof[Accroissements finis à partir de Rolle]
| Étape | Justification |
|---|---|
| On pose $\varphi(x) = f(x) - f(a) - m\,(x - a)$ avec $m = \dfrac{f(b) - f(a)}{b - a}$ | on retire la **corde** $AB$ |
| $\varphi$ est continue sur $[a\,;b]$ et dérivable sur $]a\,;b[$ | différence de fonctions qui le sont |
| $\varphi(a) = 0$ et $\varphi(b) = f(b) - f(a) - m(b - a) = 0$ | définition de $m$ |
| Par Rolle, il existe $c \in\, ]a\,;b[$ avec $\varphi'(c) = 0$ | $\varphi(a) = \varphi(b)$ |
| $\varphi'(c) = f'(c) - m = 0$, donc $f'(c) = m$ | on dérive $\varphi$ |
:::

Géométriquement : **il existe un point où la tangente est parallèle à la corde** qui joint les extrémités. Physiquement : si la vitesse moyenne vaut $100$ km/h, à un instant le compteur indiquait **exactement $100$ km/h**.

:::example[Trouver le point $c$]
$f(x) = x^2$ sur $[1\,;3]$ : la pente de la corde est $\dfrac{9 - 1}{3 - 1} = 4$. On résout $f'(c) = 2c = 4$ : $c = 2$, le milieu de l'intervalle.

$f(x) = x^3$ sur $[0\,;2]$ : la pente de la corde est $\dfrac{8 - 0}{2} = 4$, et $f'(c) = 3c^2 = 4$ donne $c = \dfrac{2}{\sqrt3} \approx 1{,}155 \in\, ]0\,;2[$. Ce n'est pas le milieu (qui serait $1$) : $c$ existe, mais n'est pas toujours simple à placer.
:::

### L'inégalité des accroissements finis

L'outil le plus utile : **borner la dérivée** pour **borner l'écart**.

:::theorem[Inégalité des accroissements finis]
Soit $f$ dérivable sur un intervalle $I$ avec $\lvert f'(x)\rvert \leq k$ pour tout $x \in I$. Alors pour tous $a$, $b$ dans $I$,
$$
\lvert f(b) - f(a)\rvert \leq k\,\lvert b - a\rvert.
$$
:::

:::proof[Inégalité des accroissements finis]
| Étape | Justification |
|---|---|
| Pour $a < b$ : il existe $c \in\, ]a\,;b[$ avec $f(b) - f(a) = f'(c)(b - a)$ | accroissements finis |
| $\lvert f(b) - f(a)\rvert = \lvert f'(c)\rvert\,\lvert b - a\rvert$ | valeur absolue |
| $\lvert f'(c)\rvert \leq k$ | hypothèse |
| donc $\lvert f(b) - f(a)\rvert \leq k\,\lvert b - a\rvert$ | on majore |
:::

:::example[Sinus : un écart qui ne grossit jamais]
$\lvert\sin'\rvert = \lvert\cos\rvert \leq 1$, donc $\lvert\sin b - \sin a\rvert \leq \lvert b - a\rvert$ pour tous réels. Avec $a = 0$ et $b = x \geq 0$ : $\sin x \leq x$. Contrôle : $\sin 1{,}2 - \sin 1 \approx 0{,}0906 \leq 0{,}2$ ✓.
:::

### Application aux suites : la vitesse de convergence

Dans le chapitre « Suites réelles », on a montré $u_n \to 2$ pour $u_{n+1} = \sqrt{2 + u_n}$, $u_0 = 0$. L'inégalité des accroissements finis donne la **vitesse**.

:::example[Une erreur qui s'effondre]
$f(x) = \sqrt{2 + x}$ vérifie $f'(x) = \dfrac{1}{2\sqrt{2 + x}} \leq \dfrac{1}{2\sqrt2} =: k \approx 0{,}354$ sur $[0\,;2]$. Comme $f(2) = 2$ (le point fixe), pour tout $n$ :
$$
\lvert u_{n+1} - 2\rvert = \lvert f(u_n) - f(2)\rvert \leq k\,\lvert u_n - 2\rvert.
$$
Par récurrence, $\lvert u_n - 2\rvert \leq k^n\,\lvert u_0 - 2\rvert = 2k^n$. Comparons la **borne** à l'**erreur réelle** :

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| borne $2k^n$ | $0{,}707$ | $0{,}250$ | $0{,}0884$ | $0{,}0313$ | $0{,}0110$ |
| erreur réelle $2 - u_n$ | $0{,}586$ | $0{,}152$ | $0{,}0384$ | $0{,}0096$ | $0{,}0024$ |

La borne est toujours au-dessus, comme il se doit. Elle prouve **sans calcul** que $u_5$ est à moins de $0{,}011$ de $2$.
:::

:::method[Suite $u_{n+1} = f(u_n)$ avec $\lvert f'\rvert \leq k < 1$]
Si $I$ est un intervalle stable contenant les $u_n$ et le point fixe $\ell$, et si $\lvert f'\rvert \leq k < 1$ sur $I$, alors $\lvert u_{n+1} - \ell\rvert \leq k\lvert u_n - \ell\rvert$, donc $\lvert u_n - \ell\rvert \leq k^n\lvert u_0 - \ell\rvert \to 0$ : **la suite converge vers $\ell$**. Cette méthode remplace l'étude de monotonie quand la suite n'est pas monotone.
:::

## 4. Dérivées successives

:::definition[Dérivées successives]
Si $f'$ est elle-même dérivable, sa dérivée est la **dérivée seconde** $f''$. On définit de même $f'''$, et la **dérivée $n$-ième** $f^{(n)}$.
:::

:::example[Des dérivées de tous les ordres]
- $f(x) = x^4$ : $f' = 4x^3$, $f'' = 12x^2$, $f''' = 24x$, $f^{(4)} = 24$, et $f^{(5)} = 0$. En $x = 2$ : $f''(2) = 48$.
- $\sin$ : $\sin' = \cos$, $\sin'' = -\sin$, $\sin''' = -\cos$, $\sin^{(4)} = \sin$ : **période $4$**. On a $\sin^{(n)}(x) = \sin\!\left(x + \dfrac{n\pi}{2}\right)$, par exemple $\sin^{(3)}(x) = \sin\!\left(x + \dfrac{3\pi}{2}\right) = -\cos x$.
:::

Physiquement, si $x(t)$ est la position, $x'$ est la vitesse et $x''$ l'**accélération**. Géométriquement, le signe de $f''$ dit si la courbe tourne sa concavité vers le haut ($f'' \geq 0$) ou vers le bas ($f'' \leq 0$) : c'est l'objet du chapitre « Étude de fonctions ».

## 5. Méthodes pour les exercices

| Question | Outil |
|---|---|
| $f$ est-elle dérivable en $a$ ? | étudier la limite du taux $\dfrac{f(x) - f(a)}{x - a}$, à gauche et à droite |
| Limite infinie du taux | demi-tangente verticale (la fonction n'est pas dérivable) |
| Limites finies différentes à gauche et à droite | point anguleux : deux demi-tangentes |
| Équation de la tangente en $a$ | $y = f(a) + f'(a)(x - a)$ |
| Dériver une composée | extérieur, puis intérieur : $(f\circ u)' = f'(u)\,u'$ |
| Trouver un extremum | $f'$ s'annule **et change de signe** |
| Prouver une inégalité $\lvert f(b) - f(a)\rvert \leq \dots$ | inégalité des accroissements finis, avec une borne de $\lvert f'\rvert$ |
| Vitesse de convergence d'une suite récurrente | $\lvert u_n - \ell\rvert \leq k^n\lvert u_0 - \ell\rvert$ avec $k$ une borne de $\lvert f'\rvert$ |
| Existence d'un point à tangente horizontale | théorème de Rolle |

## Vérifie-toi

::::check[Nombre dérivé par la définition]
Calculer $f'(2)$ pour $f(x) = x^2 - 3x$ en utilisant la définition.

:::answer
$f(2 + h) - f(2) = (2 + h)^2 - 3(2 + h) - (4 - 6) = 4 + 4h + h^2 - 6 - 3h + 2 = h + h^2$. Donc le taux est $\dfrac{h + h^2}{h} = 1 + h \to 1$ : $f'(2) = 1$. Contrôle : $f'(x) = 2x - 3$ donne $f'(2) = 1$ ✓.
:::
::::

::::check[Dérivabilité en 0]
La fonction $f(x) = x\lvert x\rvert$ est-elle dérivable en $0$ ? Et $g(x) = \lvert x\rvert$ ?

:::answer
Pour $f$ : le taux est $\dfrac{x\lvert x\rvert}{x} = \lvert x\rvert \to 0$ des deux côtés, donc $f$ est dérivable en $0$, avec $f'(0) = 0$. Pour $g$ : le taux est $\dfrac{\lvert x\rvert}{x}$, qui vaut $1$ à droite et $-1$ à gauche : $g$ n'est **pas** dérivable en $0$.
:::
::::

::::check[Dérivée d'une composée]
Dériver $f(x) = \cos(x^2)$ et donner la valeur de $f'(1)$.

:::answer
$f'(x) = -\sin(x^2)\times 2x = -2x\sin(x^2)$, donc $f'(1) = -2\sin 1 \approx -1{,}683$.
:::
::::

::::check[Accroissements finis]
Trouver le réel $c$ du théorème des accroissements finis pour $f(x) = x^3$ sur $[0\,;2]$.

:::answer
La pente de la corde est $\dfrac{8 - 0}{2 - 0} = 4$. On résout $f'(c) = 3c^2 = 4$ : $c = \dfrac{2}{\sqrt3} \approx 1{,}155$, qui appartient à $]0\,;2[$ (on rejette $-\dfrac{2}{\sqrt3}$).
:::
::::

::::check[Une inégalité]
Montrer que pour tout $x \geq 0$, $\sin x \leq x$.

:::answer
$\lvert\sin'\rvert = \lvert\cos\rvert \leq 1$ sur $\mathbb R$. Par l'inégalité des accroissements finis entre $0$ et $x$ : $\lvert\sin x - \sin 0\rvert \leq 1\times\lvert x - 0\rvert$, soit $\sin x \leq \lvert\sin x\rvert \leq x$.
:::
::::

::::challenge
Soit $f$ une fonction dérivable sur $\mathbb R$ telle que $\lvert f'(x)\rvert \leq \dfrac12$ pour tout $x$. Montrer que $f$ a **au plus un point fixe**.

:::answer
Supposons deux points fixes $a$ et $b$ : $f(a) = a$ et $f(b) = b$. Par l'inégalité des accroissements finis, $\lvert b - a\rvert = \lvert f(b) - f(a)\rvert \leq \dfrac12\lvert b - a\rvert$. Donc $\dfrac12\lvert b - a\rvert \leq 0$, soit $a = b$. (L'existence d'un point fixe est une autre question : avec $f(x) = \dfrac x2 + 1$ on en a un, en $x = 2$.)
:::
::::

:::summary
- $f'(a) = \lim\limits_{x \to a}\dfrac{f(x) - f(a)}{x - a}$ (limite **finie**). Tangente : $y = f(a) + f'(a)(x - a)$. Limite infinie du taux : demi-tangente verticale ; limites différentes à gauche et à droite : point anguleux.
- **Dérivable $\Rightarrow$ continue** (la réciproque est fausse : $\lvert x\rvert$ en $0$).
- $(fg)' = f'g + fg'$, $\left(\dfrac fg\right)' = \dfrac{f'g - fg'}{g^2}$, $(f\circ u)' = f'(u)\,u'$, $\left(\sqrt u\right)' = \dfrac{u'}{2\sqrt u}$.
- $f' \geq 0$ sur un intervalle $\iff$ $f$ croissante. $f'(a) = 0$ ne suffit pas pour un extremum : il faut un **changement de signe** (contre-exemple $x^3$).
- **Rolle** : $f(a) = f(b)$ $\Rightarrow$ $f'(c) = 0$. **Accroissements finis** : $f(b) - f(a) = f'(c)(b - a)$, tangente parallèle à la corde.
- **Inégalité des accroissements finis** : $\lvert f'\rvert \leq k$ $\Rightarrow$ $\lvert f(b) - f(a)\rvert \leq k\lvert b - a\rvert$. Pour $u_{n+1} = f(u_n)$ avec $\lvert f'\rvert \leq k < 1$ : $\lvert u_n - \ell\rvert \leq k^n\lvert u_0 - \ell\rvert$.
- $f''$ est la dérivée de $f'$ ; $\sin^{(n)}(x) = \sin\!\left(x + \dfrac{n\pi}{2}\right)$.
:::
