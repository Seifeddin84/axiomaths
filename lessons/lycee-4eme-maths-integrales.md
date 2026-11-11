---
title: "Intégrales : aire, propriétés, intégration par parties, aires, volumes et sommes de Riemann"
slug: "lycee-4eme-maths-integrales"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Intégrales"
summary: "L'intégrale d'une fonction continue comme différence de primitives et comme aire, ses propriétés (linéarité, Chasles, positivité, valeur moyenne), l'intégration par parties, le calcul d'aires entre courbes et de volumes de révolution, les sommes de Riemann et les suites d'intégrales."
prerequisites: ["Primitives", "Dérivation", "Fonctions réciproques"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Intégrales »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Combien de peinture faut-il pour recouvrir la face d'une voile courbe ? Quelle distance un train a-t-il parcourue, connaissant seulement sa vitesse à chaque instant ? Dans les deux cas, on additionne une infinité de morceaux infiniment fins. C'est une **aire sous une courbe**.

:::intuition
Il y a deux idées et elles se rejoignent. La première est **géométrique** : l'intégrale $\displaystyle\int_a^b f(x)\,dx$ est l'aire du domaine situé sous la courbe de $f$, entre $a$ et $b$. La seconde est **algébrique** : si on connaît une **primitive** $F$ de $f$, cette aire vaut simplement $F(b) - F(a)$. Pourquoi ? Parce que $F$ **accumule** : $F'(x) = f(x)$ dit que l'aire s'accroît, à chaque pas, de la hauteur $f(x)$. Tout le chapitre est le va-et-vient entre ces deux visions.
:::

## 1. L'intégrale

### Définition

:::definition[Intégrale d'une fonction continue]
Soit $f$ une fonction **continue** sur un intervalle $I$, $a$ et $b$ deux éléments de $I$, et $F$ une primitive de $f$ sur $I$. L'**intégrale de $a$ à $b$ de $f$** est le réel
$$
\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b.
$$
:::

Le résultat ne dépend pas de la primitive choisie.

:::proof[Indépendance de la primitive]
| Étape | Justification |
|---|---|
| Soit $F$ et $G$ deux primitives de $f$ sur $I$ | hypothèse |
| $(G - F)' = f - f = 0$ sur l'intervalle $I$ | dérivée de la différence |
| donc $G = F + c$ avec $c$ constant | une dérivée nulle sur un intervalle donne une constante |
| $G(b) - G(a) = (F(b) + c) - (F(a) + c) = F(b) - F(a)$ | la constante $\textcolor{#ea580c}{c}$ s'annule |
:::

La variable $x$ est **muette** : $\displaystyle\int_a^b f(x)\,dx = \int_a^b f(t)\,dt$. Et deux conventions : $\displaystyle\int_a^a f(x)\,dx = 0$ et $\displaystyle\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$.

:::example[Un premier calcul]
$\displaystyle\int_0^1 x^2\,dx$ : une primitive de $x^2$ est $\dfrac{x^3}{3}$, donc
$$
\int_0^1 x^2\,dx = \left[\dfrac{x^3}{3}\right]_0^1 = \dfrac13 - 0 = \dfrac13.
$$
De même $\displaystyle\int_0^\pi \sin x\,dx = \Big[-\cos x\Big]_0^\pi = -\cos\pi + \cos 0 = 1 + 1 = 2$ : l'aire sous **une arche** de sinusoïde vaut exactement $2$.
:::

### Le lien avec l'aire

:::property[Intégrale et aire]
Si $f$ est continue et **positive** sur $[a\,;b]$ avec $a \leq b$, alors $\displaystyle\int_a^b f(x)\,dx$ est l'**aire** du domaine
$$
\mathcal D = \{(x\,;y) : a \leq x \leq b,\ 0 \leq y \leq f(x)\},
$$
exprimée en **unités d'aire** (u.a.) : l'aire du rectangle construit sur les vecteurs unités $\vec\imath$ et $\vec\jmath$ du repère.
:::

:::example[L'aire d'un triangle, par intégrale]
Pour $f(x) = 2x$ sur $[0\,;3]$, le domaine est un triangle de base $3$ et de hauteur $6$ : aire $\dfrac{3\times 6}{2} = 9$. L'intégrale donne $\displaystyle\int_0^3 2x\,dx = \Big[x^2\Big]_0^3 = 9$ ✓. Les deux points de vue s'accordent.
:::

## 2. Propriétés

:::theorem[Linéarité, relation de Chasles]
Soit $f$ et $g$ continues sur $I$, $a$, $b$, $c$ dans $I$ et $\lambda$ un réel.

- $\displaystyle\int_a^b \big(f + g\big)(x)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$ ;
- $\displaystyle\int_a^b \lambda f(x)\,dx = \lambda\int_a^b f(x)\,dx$ ;
- $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$ (**Chasles**).
:::

:::proof[Les trois relations]
| Étape | Justification |
|---|---|
| Si $F$ et $G$ sont des primitives de $f$ et $g$, alors $F + G$ est une primitive de $f + g$ | la dérivée d'une somme est la somme des dérivées |
| donc $\int_a^b (f + g) = (F + G)(b) - (F + G)(a) = \big[F(b) - F(a)\big] + \big[G(b) - G(a)\big]$ | on regroupe |
| de même, $\lambda F$ est une primitive de $\lambda f$ | la dérivée de $\lambda F$ est $\lambda F'$ |
| $F(b) - F(a) = \big[F(c) - F(a)\big] + \big[F(b) - F(c)\big]$ | $F(c)$ se compense |
:::

:::theorem[Positivité et comparaison]
Soit $f$ et $g$ continues sur $[a\,;b]$, avec $a \leq b$.

- Si $f \geq 0$ sur $[a\,;b]$, alors $\displaystyle\int_a^b f(x)\,dx \geq 0$.
- Si $f \leq g$ sur $[a\,;b]$, alors $\displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.
- Si $m \leq f \leq M$ sur $[a\,;b]$, alors $\displaystyle m(b - a) \leq \int_a^b f(x)\,dx \leq M(b - a)$.
- $\displaystyle\left\lvert \int_a^b f(x)\,dx\right\rvert \leq \int_a^b \lvert f(x)\rvert\,dx$.
:::

:::proof[Positivité et comparaison]
| Étape | Justification |
|---|---|
| Si $f \geq 0$, une primitive $F$ vérifie $F' = f \geq 0$ : $F$ est croissante | signe de la dérivée |
| donc $F(b) \geq F(a)$, soit $\int_a^b f \geq 0$ | $a \leq b$ |
| Si $f \leq g$, alors $g - f \geq 0$ et $\int_a^b (g - f) \geq 0$ | positivité |
| par linéarité $\int_a^b g - \int_a^b f \geq 0$ | on développe |
| Avec $m \leq f \leq M$, on compare avec les constantes : $\int_a^b m\,dx = m(b - a)$ | comparaison, constantes |
:::

:::example[Encadrer sans calculer]
Sur $[0\,;1]$, $1 \leq 1 + x^2 \leq 2$, donc $\dfrac12 \leq \dfrac{1}{1 + x^2} \leq 1$, et par la troisième propriété
$$
\dfrac12 \leq \int_0^1 \dfrac{dx}{1 + x^2} \leq 1.
$$
La vraie valeur est $\dfrac\pi4 \approx 0{,}785$ (on a $\arctan' = \dfrac{1}{1 + x^2}$) : elle est bien dans la fourchette.
:::

### Valeur moyenne

:::definition[Valeur moyenne]
La **valeur moyenne** d'une fonction continue $f$ sur $[a\,;b]$ ($a < b$) est
$$
\mu = \dfrac{1}{b - a}\int_a^b f(x)\,dx.
$$
C'est la hauteur du **rectangle de base $[a\,;b]$ qui a la même aire** que le domaine sous la courbe.
:::

Comme $m \leq f \leq M$ donne $m \leq \mu \leq M$, le théorème des valeurs intermédiaires fournit un réel $c \in [a\,;b]$ avec $f(c) = \mu$ : la moyenne est **atteinte**.

:::example[Deux moyennes]
- Pour $f(x) = x^2$ sur $[0\,;3]$ : $\displaystyle\int_0^3 x^2\,dx = \dfrac{27}{3} = 9$, donc $\mu = \dfrac93 = 3$. Elle est atteinte en $c = \sqrt3 \approx 1{,}73$ (car $c^2 = 3$).
- Pour $\sin$ sur $[0\,;\pi]$ : $\mu = \dfrac{2}{\pi} \approx 0{,}637$. C'est aussi la valeur moyenne d'un signal sinusoïdal redressé d'amplitude $1$.
:::

:::warning
- **L'intégrale n'est une aire que si $f \geq 0$.** Si $f$ change de signe, les parties sous l'axe comptent **négativement**. $\displaystyle\int_0^{2\pi}\sin x\,dx = 0$ car l'arche positive ($+2$) et l'arche négative ($-2$) s'annulent, alors que l'aire du domaine est $\displaystyle\int_0^{2\pi}\lvert\sin x\rvert\,dx = 4$. Pour une aire, on **coupe aux zéros** de $f$ et on prend la valeur absolue de chaque morceau.
- **$\displaystyle\int_a^b f(x)g(x)\,dx$ n'est pas $\displaystyle\int_a^b f\times\int_a^b g$.** L'intégrale est linéaire, pas multiplicative. Avec $f = g = 1$ sur $[0\,;2]$ : $\int fg = 2$ mais $\int f\times\int g = 4$.
:::

## 3. Intégration par parties

Comment calculer $\displaystyle\int_0^{\pi/2} x\cos x\,dx$ ? On ne reconnaît pas de primitive. Mais $x\cos x$ est un **produit** d'une fonction que la dérivation simplifie ($x \to 1$) et d'une que l'on sait intégrer ($\cos \to \sin$).

:::theorem[Intégration par parties]
Soit $u$ et $v$ deux fonctions dérivables sur $[a\,;b]$, de dérivées **continues**. Alors
$$
\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,dx.
$$
:::

:::proof[Intégration par parties]
| Étape | Justification |
|---|---|
| $(uv)' = u'v + uv'$ | dérivée d'un produit |
| $uv$ est donc une primitive de $u'v + uv'$ | $u'v + uv'$ est continue |
| $\int_a^b (u'v + uv') = \Big[uv\Big]_a^b$ | définition de l'intégrale |
| $\int_a^b uv' = \Big[uv\Big]_a^b - \int_a^b u'v$ | linéarité |
:::

:::method[Intégrer par parties]
1. **Choisir** : dans $\int f\,g$, on pose $u$ = le facteur qui **se simplifie en dérivant** (un polynôme, $\ln$, $\arctan$), et $v'$ = celui dont on connaît une primitive ($\cos$, $\sin$, une puissance).
2. **Calculer** $u'$ et $v$, puis écrire la formule.
3. **Vérifier** que la nouvelle intégrale $\int u'v$ est plus simple que l'ancienne.
:::

:::example[Intégrer $x\cos x$ entre $0$ et $\pi/2$]
On pose $u(x) = x$ et $v'(x) = \cos x$, donc $u'(x) = 1$ et $v(x) = \sin x$ :
$$
\int_0^{\pi/2} x\cos x\,dx = \Big[x\sin x\Big]_0^{\pi/2} - \int_0^{\pi/2}\sin x\,dx = \dfrac\pi2 - \Big[-\cos x\Big]_0^{\pi/2} = \dfrac\pi2 - 1.
$$
Soit environ $0{,}571$. Contrôle numérique : la courbe de $x\cos x$ monte à $0{,}56$ vers $x \approx 0{,}86$ puis retombe à $0$ en $\dfrac\pi2$ ; une aire de $0{,}57$ est plausible.
:::

:::example[Intégrer $x\sin x$ entre $0$ et $\pi$]
On pose $u = x$ et $v' = \sin x$, donc $v = -\cos x$ :
$$
\int_0^\pi x\sin x\,dx = \Big[-x\cos x\Big]_0^\pi + \int_0^\pi\cos x\,dx = \pi + \Big[\sin x\Big]_0^\pi = \pi.
$$
:::

:::remark
Avec le logarithme (chapitre suivant), on intègre aussi $\ln$ par parties, en posant $u = \ln x$ et $v' = 1$ : $\displaystyle\int_1^e \ln x\,dx = \Big[x\ln x\Big]_1^e - \int_1^e 1\,dx = e - (e - 1) = 1$. Et $\displaystyle\int_1^e x\ln x\,dx = \dfrac{e^2 + 1}{4} \approx 2{,}097$ avec $u = \ln x$, $v' = x$.
:::

:::method[Linéariser pour intégrer]
$\cos^2 x$ n'a pas de primitive évidente, mais $\cos^2 x = \dfrac{1 + \cos 2x}{2}$. Alors
$$
\int_0^\pi \cos^2 x\,dx = \int_0^\pi \dfrac{1 + \cos 2x}{2}\,dx = \left[\dfrac x2 + \dfrac{\sin 2x}{4}\right]_0^\pi = \dfrac\pi2.
$$
Même principe avec $\sin^2 x = \dfrac{1 - \cos 2x}{2}$ ; $\displaystyle\int_0^{\pi/2}\sin^2 x\,dx = \dfrac\pi4$. On linéarise (ou on utilise l'écriture complexe, voir le chapitre sur les nombres complexes) pour se ramener à des $\cos(kx)$ et $\sin(kx)$.
:::

## 4. Aires et volumes

### Aire entre deux courbes

:::theorem[Aire entre deux courbes]
Si $f$ et $g$ sont continues sur $[a\,;b]$ avec $f \geq g$, l'aire du domaine compris entre les courbes $\mathcal C_f$ et $\mathcal C_g$ et les droites $x = a$ et $x = b$ est
$$
\mathcal A = \int_a^b \big(f(x) - g(x)\big)\,dx\quad\text{(en unités d'aire).}
$$
:::

On soustrait « le haut moins le bas » : si les deux courbes sont au-dessus de l'axe, on retire de l'aire sous $f$ celle sous $g$. Et ça marche même si $g$ passe sous l'axe : la différence $f - g$ reste positive.

:::example[Entre une droite et une parabole]
Les courbes de $f(x) = x$ et $g(x) = x^2$ se coupent en $x = 0$ et $x = 1$ (car $x = x^2 \iff x(1 - x) = 0$). Sur $[0\,;1]$, $x \geq x^2$ (par exemple en $x = \dfrac12$ : $\dfrac12 \geq \dfrac14$), donc
$$
\mathcal A = \int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac12 - \dfrac13 = \dfrac16\ \text{u.a.}
$$
:::

:::method[Calculer une aire]
1. **Dessiner** (même grossièrement) pour voir qui est au-dessus.
2. **Trouver les bornes** : résoudre $f(x) = g(x)$.
3. **Découper** aux points où les courbes se croisent ou où $f$ change de signe.
4. **Intégrer** « haut moins bas », et convertir l'unité d'aire si l'énoncé donne $\lVert\vec\imath\rVert$ et $\lVert\vec\jmath\rVert$ (par exemple $2$ cm et $1$ cm : $1$ u.a. $= 2$ cm$^2$).
:::

### Volume d'un solide de révolution

On fait tourner la courbe de $f$ ($f \geq 0$ sur $[a\,;b]$) autour de l'axe des abscisses. Chaque tranche, d'épaisseur $dx$ à l'abscisse $x$, est un **disque** de rayon $f(x)$, donc d'aire $\pi f(x)^2$.

:::theorem[Volume de révolution]
Si $f$ est continue sur $[a\,;b]$, le volume du solide engendré par la rotation autour de $(Ox)$ de la région comprise entre $\mathcal C_f$ et l'axe est
$$
V = \pi\int_a^b \big(f(x)\big)^2\,dx\quad\text{(en unités de volume).}
$$
:::

:::example[Un paraboloïde]
La courbe de $f(x) = \sqrt x$ sur $[0\,;4]$ tourne autour de $(Ox)$. Comme $f(x)^2 = x$,
$$
V = \pi\int_0^4 x\,dx = \pi\left[\dfrac{x^2}{2}\right]_0^4 = 8\pi \approx 25{,}13\ \text{u.v.}
$$
:::

:::example[La formule retrouve le cône]
$f(x) = \dfrac rh\,x$ sur $[0\,;h]$ engendre un cône de hauteur $h$ et de rayon de base $r$. La formule donne $V = \pi\displaystyle\int_0^h \dfrac{r^2}{h^2}x^2\,dx = \pi\dfrac{r^2}{h^2}\cdot\dfrac{h^3}{3} = \dfrac{\pi r^2 h}{3}$ : le volume classique du cône ✓. La formule généralise ce que l'on savait.
:::

## 5. Sommes de Riemann

On a défini l'intégrale avec une primitive. Mais l'intuition de l'aire disait autre chose : **additionner des rectangles fins**. Les deux points de vue coïncident, et le second sert à calculer des **limites de sommes**.

On découpe $[a\,;b]$ en $n$ intervalles de même largeur $\dfrac{b - a}{n}$, d'extrémités $x_k = a + k\,\dfrac{b - a}{n}$ pour $k = 0, \dots, n$.

![Sommes de Riemann pour x² sur [0 ; 1] avec 5 rectangles](/lessons/images/m4-riemann.svg "Pour f(x) = x² sur [0 ; 1] avec n = 5 : les rectangles inférieurs donnent 0,24 et les rectangles supérieurs 0,44. L'aire exacte, 1/3, est coincée entre les deux.")

:::theorem[Sommes de Riemann]
Si $f$ est continue sur $[a\,;b]$, alors
$$
\dfrac{b - a}{n}\sum_{k=0}^{n-1} f(x_k)\ \longrightarrow\ \int_a^b f(x)\,dx
\qquad\text{et}\qquad
\dfrac{b - a}{n}\sum_{k=1}^{n} f(x_k)\ \longrightarrow\ \int_a^b f(x)\,dx
$$
quand $n \to +\infty$.
:::

Ce théorème est admis. Pour une fonction **monotone**, on le voit : si $f$ est croissante, la première somme (hauteurs prises à gauche) est une **valeur par défaut** et la seconde (hauteurs prises à droite) une **valeur par excès**. Leur écart est
$$
\dfrac{b - a}{n}\big(f(b) - f(a)\big) \xrightarrow[n \to +\infty]{} 0,
$$
donc l'aire est coincée.

:::curious[L'idée de la preuve]{theorem="Sommes de Riemann"}
L'idée : sur chaque petit intervalle de largeur $h$, $f$ varie de moins de $M h$ si $\lvert f'\rvert \leq M$. L'erreur totale est au plus $n\,\dfrac{Mh^2}{2} = \dfrac{M(b - a)^2}{2n}$, qui tend vers $0$.
:::


:::example[Calculer $\int_0^1 x^2\,dx$ sans primitive]
Avec $a = 0$, $b = 1$, $x_k = \dfrac kn$ et la formule $\displaystyle\sum_{k=1}^{n}k^2 = \dfrac{n(n+1)(2n+1)}{6}$, les deux sommes sont
$$
\underbrace{\dfrac1n\sum_{k=0}^{n-1}\dfrac{k^2}{n^2}}_{\text{défaut}} = \dfrac{(n-1)(2n-1)}{6n^2}
\qquad\text{et}\qquad
\underbrace{\dfrac1n\sum_{k=1}^{n}\dfrac{k^2}{n^2}}_{\text{excès}} = \dfrac{(n+1)(2n+1)}{6n^2}.
$$
Pour $n = 5$ : $0{,}24$ et $0{,}44$. Pour $n = 10$ : $0{,}285$ et $0{,}385$. Les deux tendent vers $\dfrac{2n^2}{6n^2} = \dfrac13$, qui est bien $\displaystyle\int_0^1 x^2\,dx$ ✓.
:::

:::method[Limite d'une somme de la forme $\frac1n\sum f(k/n)$]
1. **Factoriser** $\dfrac1n$ et faire apparaître $\dfrac kn$ dans chaque terme.
2. **Reconnaître** $f\!\left(\dfrac kn\right)$ : le terme générique ne dépend de $k$ et de $n$ que par le rapport $\dfrac kn$.
3. **Conclure** : la limite est $\displaystyle\int_0^1 f(x)\,dx$.

Exemple : $S_n = \displaystyle\sum_{k=1}^n\dfrac{n}{n^2 + k^2}$. Chaque terme vaut $\dfrac1n\cdot\dfrac{1}{1 + (k/n)^2}$, donc $S_n = \dfrac1n\displaystyle\sum_{k=1}^n f\!\left(\dfrac kn\right)$ avec $f(x) = \dfrac{1}{1 + x^2}$. Donc $S_n \to \displaystyle\int_0^1\dfrac{dx}{1 + x^2} = \dfrac\pi4$. Contrôle : $S_{10} \approx 0{,}760$, $S_{100} \approx 0{,}783$, $S_{1000} \approx 0{,}78515$, et $\dfrac\pi4 \approx 0{,}78540$ ✓.
:::

## 6. Suites d'intégrales

Les exercices de bac aiment les suites $(J_n)$ définies par une intégrale. Le plan est presque toujours le même : **sens de variation**, **relation de récurrence**, **encadrement**, **limite**.

:::example[Une suite d'intégrales]
Pour $n \in \mathbb N$, on pose $\displaystyle J_n = \int_0^1\dfrac{x^n}{1 + x^2}\,dx$.

**Valeurs.** $J_0 = \displaystyle\int_0^1\dfrac{dx}{1 + x^2} = \arctan 1 - \arctan 0 = \dfrac\pi4 \approx 0{,}7854$.

**Positivité et monotonie.** Sur $[0\,;1]$, $x^n \geq 0$ et $1 + x^2 > 0$, donc $J_n \geq 0$. De plus $x^{n+1} \leq x^n$ (car $0 \leq x \leq 1$), donc $\dfrac{x^{n+1}}{1 + x^2} \leq \dfrac{x^n}{1 + x^2}$ et, en intégrant, $J_{n+1} \leq J_n$. La suite est **décroissante et minorée** par $0$ : elle converge.

**Récurrence.** $J_n + J_{n+2} = \displaystyle\int_0^1\dfrac{x^n(1 + x^2)}{1 + x^2}\,dx = \int_0^1 x^n\,dx = \dfrac{1}{n+1}$. Pour $n = 0$ : $J_2 = 1 - J_0 = 1 - \dfrac\pi4 \approx 0{,}2146$ ; puis $J_4 = \dfrac13 - J_2 \approx 0{,}1187$.

**Encadrement.** Sur $[0\,;1]$, $1 \leq 1 + x^2 \leq 2$, donc $\dfrac{x^n}{2} \leq \dfrac{x^n}{1 + x^2} \leq x^n$. On intègre :
$$
\dfrac{1}{2(n+1)} \leq J_n \leq \dfrac{1}{n+1}.
$$
Pour $n = 4$ : $0{,}1 \leq J_4 \approx 0{,}1187 \leq 0{,}2$ ✓.

**Limite.** Les deux membres tendent vers $0$ : par le théorème des gendarmes, $J_n \to 0$.
:::

:::warning
Dans « $\int_a^b f \leq \int_a^b g$ », il faut **$a \leq b$** et **$f \leq g$ sur tout $[a\,;b]$**. Si $a > b$, l'inégalité s'**inverse**. Et le contraire ne marche pas : $\int f \leq \int g$ n'implique pas $f \leq g$ en tout point.
:::

## 7. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Calculer $\int_a^b f$ | trouver une primitive $F$, calculer $F(b) - F(a)$ |
| $f$ est un produit ($x\cos x$, $x\sin x$, $x\ln x$) | intégration par parties, $u$ = facteur qui se simplifie en dérivant |
| $\cos^2$, $\sin^2$, $\cos\times\sin$ | linéariser |
| Encadrer une intégrale | $m \leq f \leq M$ donne $m(b-a) \leq \int \leq M(b-a)$ |
| Aire entre deux courbes | résoudre $f = g$, découper, intégrer « haut moins bas » |
| Aire quand $f$ change de signe | découper aux zéros, prendre la valeur absolue de chaque morceau |
| Volume de révolution autour de $(Ox)$ | $V = \pi\int_a^b f^2$ |
| Limite de $\frac1n\sum f(k/n)$ | somme de Riemann : $\int_0^1 f$ |
| Suite d'intégrales | monotonie, relation de récurrence, encadrement, limite |

## Vérifie-toi

::::check[Calcul direct]
Calculer $\displaystyle\int_0^1\left(3x^2 - 2x + 1\right)dx$.

:::answer
Une primitive est $x^3 - x^2 + x$. Donc l'intégrale vaut $(1 - 1 + 1) - 0 = 1$.
:::
::::

::::check[Linéarisation]
Calculer $\displaystyle\int_0^{\pi/2}\sin^2 x\,dx$.

:::answer
$\sin^2 x = \dfrac{1 - \cos 2x}{2}$, donc l'intégrale vaut $\left[\dfrac x2 - \dfrac{\sin 2x}{4}\right]_0^{\pi/2} = \dfrac\pi4 - 0 = \dfrac\pi4$.
:::
::::

::::check[Intégration par parties]
Calculer $\displaystyle\int_0^\pi x\sin x\,dx$ en posant $u = x$, $v' = \sin x$.

:::answer
$u' = 1$, $v = -\cos x$. Donc $\displaystyle\int_0^\pi x\sin x\,dx = \Big[-x\cos x\Big]_0^\pi + \int_0^\pi\cos x\,dx = \pi + 0 = \pi$ : le premier crochet vaut $-\pi\cos\pi - 0 = \pi$, et $\int_0^\pi\cos x\,dx = \sin\pi - \sin 0 = 0$.
:::
::::

::::check[Une aire]
Calculer l'aire du domaine compris entre les courbes de $f(x) = 2x$ et $g(x) = x^2$.

:::answer
$2x = x^2 \iff x(x - 2) = 0$, donc $x = 0$ ou $x = 2$. Sur $[0\,;2]$, $2x \geq x^2$ (en $x = 1$ : $2 \geq 1$). L'aire est $\displaystyle\int_0^2(2x - x^2)\,dx = \left[x^2 - \dfrac{x^3}{3}\right]_0^2 = 4 - \dfrac83 = \dfrac43$ u.a.
:::
::::

::::check[Valeur moyenne]
Quelle est la valeur moyenne de $f(x) = x^2$ sur $[0\,;3]$ ? En quel point est-elle atteinte ?

:::answer
$\mu = \dfrac13\displaystyle\int_0^3 x^2\,dx = \dfrac13\times 9 = 3$. Elle est atteinte quand $c^2 = 3$, soit $c = \sqrt3 \approx 1{,}73 \in [0\,;3]$.
:::
::::

::::challenge
Pour $n \in \mathbb N$, on pose $I_n = \displaystyle\int_0^1\dfrac{x^n}{1 + x}\,dx$ (on utilise ici le logarithme : $\displaystyle\int_0^1\dfrac{dx}{1 + x} = \ln 2$). Montrer que $I_n + I_{n+1} = \dfrac{1}{n+1}$, puis que $\dfrac{1}{2(n+1)} \leq I_n \leq \dfrac{1}{n+1}$. En déduire la limite de $(I_n)$.

:::answer
$I_n + I_{n+1} = \displaystyle\int_0^1\dfrac{x^n(1 + x)}{1 + x}\,dx = \int_0^1 x^n\,dx = \dfrac{1}{n+1}$. Pour l'encadrement : sur $[0\,;1]$, $1 \leq 1 + x \leq 2$, donc $\dfrac{x^n}{2} \leq \dfrac{x^n}{1 + x} \leq x^n$ ; on intègre. Les deux bornes tendent vers $0$ : $I_n \to 0$. Valeurs : $I_0 = \ln 2 \approx 0{,}6931$, puis $I_1 = 1 - I_0 = 1 - \ln 2 \approx 0{,}3069$, $I_2 = \dfrac12 - I_1 \approx 0{,}1931$.
:::
::::

:::summary
- $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$ pour une primitive $F$ de $f$ continue ; si $f \geq 0$ et $a \leq b$, c'est l'**aire** sous la courbe.
- **Linéarité**, **Chasles**, **positivité** ($f \leq g \Rightarrow \int f \leq \int g$) et **encadrement** $m(b-a) \leq \int_a^b f \leq M(b-a)$.
- **Valeur moyenne** $\mu = \dfrac1{b-a}\displaystyle\int_a^b f$ ; elle est atteinte par $f$.
- **Intégration par parties** : $\displaystyle\int_a^b uv' = \Big[uv\Big]_a^b - \int_a^b u'v$ ; $u$ est le facteur qui se simplifie en dérivant.
- **Aire** entre deux courbes : $\displaystyle\int_a^b (f - g)$ avec $f \geq g$ ; si $f$ change de signe, découper aux zéros. **Volume** de révolution autour de $(Ox)$ : $V = \pi\displaystyle\int_a^b f^2$.
- **Sommes de Riemann** : $\dfrac{b-a}{n}\displaystyle\sum f(x_k) \to \int_a^b f$ ; pour $f$ croissante, la somme à gauche est un défaut et celle à droite un excès.
- **Suites d'intégrales** : positivité, monotonie, relation de récurrence, encadrement, limite.
:::
