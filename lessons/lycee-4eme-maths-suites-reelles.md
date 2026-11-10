---
title: "Suites réelles : limites, suites monotones, suites adjacentes et suites récurrentes"
slug: "lycee-4eme-maths-suites-reelles"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Suites réelles"
summary: "Définition de la limite d'une suite, limites usuelles et suites géométriques, opérations, comparaison et théorème des gendarmes, convergence des suites monotones bornées, suites adjacentes, et la méthode complète pour une suite récurrente u(n+1) = f(u(n))."
prerequisites: ["Raisonnement par récurrence", "Suites arithmétiques et géométriques", "Limites de fonctions", "Fonctions continues"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Suites réelles »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Un capital placé à $1\,\%$ par an. Un calcul de $\sqrt 2$ que l'on affine à chaque étape. Une population qui se stabilise. Dans chaque cas, on regarde une **liste infinie de nombres** $u_0, u_1, u_2, \dots$ et on se demande **où elle va**.

:::intuition
Une suite est un film : $u_n$ est l'image à l'instant $n$. La question n'est pas « que vaut $u_{1000}$ ? » mais « **que devient-elle quand le temps passe** ? ». Elle peut se **stabiliser** près d'un réel $\ell$, **exploser** vers $+\infty$, ou **osciller** sans jamais se décider. Le chapitre donne les outils pour trancher, **sans calculer des milliers de termes** : des règles de calcul sur les limites, deux théorèmes d'encadrement, et un critère de convergence pour les suites qui « ne font que monter » en restant sous un plafond.
:::

## 1. Limite d'une suite

### Convergence

:::definition[Limite finie]
On dit que la suite $(u_n)$ **converge vers le réel $\ell$**, et on note $\displaystyle\lim_{n \to +\infty}u_n = \ell$, si
$$
\text{pour tout } \varepsilon > 0,\ \text{il existe un rang } N \text{ tel que } \lvert u_n - \ell\rvert < \varepsilon \text{ pour tout } n \geq N.
$$
:::

Traduction : **aussi mince que soit le tube** $]\ell - \varepsilon\,;\ell + \varepsilon[$ autour de $\ell$, la suite finit par y rentrer et n'en ressort plus. On dit que $(u_n)$ **converge**, ou qu'elle est **convergente** ; sinon, elle **diverge**.

:::example[Un $\varepsilon$ concret]
$u_n = \dfrac1n$ tend vers $0$. Pour $\varepsilon = 0{,}01$ : $\lvert u_n - 0\rvert = \dfrac1n < 0{,}01 \iff n > 100$, donc le rang $N = 101$ convient. Pour $\varepsilon = 10^{-6}$ : $N = 10^6 + 1$. Plus le tube est mince, plus il faut attendre, mais on y arrive toujours.
:::

:::definition[Limite infinie]
$\displaystyle\lim_{n \to +\infty}u_n = +\infty$ signifie : pour tout réel $A$, il existe un rang $N$ tel que $u_n > A$ pour tout $n \geq N$. De même pour $-\infty$ (avec $u_n < A$).
:::

:::property[Propriétés de base]
- **Unicité** : si $(u_n)$ a une limite (finie ou infinie), elle en a **une seule**.
- Une suite **convergente** est **bornée**. (La réciproque est fausse : $u_n = (-1)^n$ est bornée et ne converge pas.)
- Si $u_n \to \ell$ et si $f$ est continue en $\ell$, alors $f(u_n) \to f(\ell)$.
:::

### Les limites à connaître

| Suite | Limite |
|---|---|
| $\dfrac1n$, $\dfrac{1}{\sqrt n}$, $\dfrac{1}{n^2}$ | $0$ |
| $n$, $n^2$, $\sqrt n$ | $+\infty$ |
| $q^n$ avec $q > 1$ | $+\infty$ |
| $q^n$ avec $-1 < q < 1$ | $0$ |
| $q^n$ avec $q = 1$ | $1$ (constante) |
| $q^n$ avec $q \leq -1$ | pas de limite |

Les puissances de $q$ sont les plus importantes : elles décrivent tous les intérêts composés et toutes les décroissances exponentielles.

:::theorem[Inégalité de Bernoulli]
Pour tout réel $a \geq 0$ et tout entier $n$, $(1 + a)^n \geq 1 + na$.
:::

:::proof[Bernoulli, par récurrence]
| Étape | Justification |
|---|---|
| $n = 0$ : $(1 + a)^0 = 1 \geq 1 + 0$ | initialisation |
| On suppose $(1 + a)^n \geq 1 + na$ | hérédité |
| $(1 + a)^{n+1} = (1 + a)^n(1 + a) \geq (1 + na)(1 + a)$ | on multiplie par $1 + a \geq 0$ |
| $= 1 + (n + 1)a + \textcolor{#ea580c}{na^2} \geq 1 + (n + 1)a$ | $na^2 \geq 0$ |
:::

:::proof[$q^n \to +\infty$ pour $q > 1$, et $q^n \to 0$ pour $0 < q < 1$]
| Étape | Justification |
|---|---|
| Si $q > 1$, on écrit $q = 1 + a$ avec $a > 0$ | $a = q - 1$ |
| $q^n \geq 1 + na$ | Bernoulli |
| $1 + na \to +\infty$ car $a > 0$ | suite arithmétique de raison $a > 0$ |
| donc $q^n \to +\infty$ | comparaison (§2) |
| Si $0 < q < 1$, $\dfrac1q > 1$, donc $\left(\dfrac1q\right)^n \to +\infty$ | ce qui précède |
| donc $q^n = \dfrac{1}{(1/q)^n} \to 0$ | inverse d'une suite qui tend vers $+\infty$ |
:::

:::example[L'effet des intérêts composés]
$1{,}01^{1000} \approx 20\,959$ : mille mois d'intérêts à $1\,\%$ multiplient le capital par $20\,959$. Bernoulli annonce seulement $1{,}01^{1000} \geq 1 + 1000\times 0{,}01 = 11$ : vrai, mais très prudent. À l'inverse, $0{,}9^{50} \approx 0{,}0052$ : au bout de $50$ étapes, il ne reste que $0{,}5\,\%$.
:::

## 2. Opérations, comparaison, gendarmes

### Calculer avec les limites

:::property[Opérations sur les limites]
Si $u_n \to \ell$ et $v_n \to \ell'$ (réels), alors $u_n + v_n \to \ell + \ell'$, $u_n v_n \to \ell\ell'$, et $\dfrac{u_n}{v_n} \to \dfrac{\ell}{\ell'}$ si $\ell' \neq 0$.

Ces règles s'étendent aux limites infinies, sauf pour les quatre **formes indéterminées** :
$$
+\infty - \infty,\qquad 0 \times \infty,\qquad \dfrac{\infty}{\infty},\qquad \dfrac00.
$$
:::

:::method[Lever une forme indéterminée pour une fraction]
Pour une fraction de polynômes en $n$ (ou de puissances de $n$), on **factorise le terme de plus haut degré** en haut et en bas. Exemple : $\dfrac{3n^2 + n}{n^2 + 5} = \dfrac{n^2\left(3 + \frac1n\right)}{n^2\left(1 + \frac{5}{n^2}\right)} = \dfrac{3 + \frac1n}{1 + \frac{5}{n^2}} \to \dfrac{3 + 0}{1 + 0} = 3$.

Pour une différence de racines, on **multiplie par la quantité conjuguée** : $\sqrt{n + 1} - \sqrt n = \dfrac{1}{\sqrt{n + 1} + \sqrt n} \to 0$. Contrôle : pour $n = 10^6$, la différence vaut $0{,}0005$.
:::

### Comparer et encadrer

:::theorem[Comparaison]
Si $u_n \leq v_n$ à partir d'un certain rang, alors :

- si $u_n \to +\infty$, alors $v_n \to +\infty$ ;
- si $v_n \to -\infty$, alors $u_n \to -\infty$.
:::

:::theorem[Théorème des gendarmes]
Si $u_n \leq v_n \leq w_n$ à partir d'un certain rang et si $u_n \to \ell$ et $w_n \to \ell$, alors $v_n \to \ell$.
:::

:::proof[Gendarmes]
| Étape | Justification |
|---|---|
| Soit $\varepsilon > 0$. Il existe $N_1$ tel que $\ell - \varepsilon < u_n$ pour $n \geq N_1$ | $u_n \to \ell$ |
| Il existe $N_2$ tel que $w_n < \ell + \varepsilon$ pour $n \geq N_2$ | $w_n \to \ell$ |
| Pour $n \geq \max(N_1, N_2)$ : $\ell - \varepsilon < u_n \leq v_n \leq w_n < \ell + \varepsilon$ | encadrement |
| donc $\lvert v_n - \ell\rvert < \varepsilon$ | définition de la limite |
:::

:::example[Une suite qui oscille légèrement]
$a_n = \dfrac{2n + (-1)^n}{n + 1}$. Comme $-1 \leq (-1)^n \leq 1$,
$$
\dfrac{2n - 1}{n + 1} \leq a_n \leq \dfrac{2n + 1}{n + 1}.
$$
Les deux bornes tendent vers $2$ (on divise par $n$ en haut et en bas). Donc $a_n \to 2$. Contrôle : $a_{10} \approx 1{,}909$, $a_{100} \approx 1{,}990$, $a_{1000} \approx 1{,}999$.
:::

:::remark
Pour montrer qu'une suite tend vers $\ell$, on peut aussi la **majorer en valeur absolue** : si $\lvert u_n - \ell\rvert \leq w_n$ avec $w_n \to 0$, alors $u_n \to \ell$. Exemple : $\left\lvert\dfrac{\sin n}{n}\right\rvert \leq \dfrac1n \to 0$, donc $\dfrac{\sin n}{n} \to 0$.
:::

## 3. Suites monotones

Parfois on ne sait pas calculer la limite mais on sait **qu'elle existe**. C'est la situation d'un escalier qui monte, avec un plafond au-dessus de lui : il ne peut pas monter indéfiniment, il doit s'arrêter sous le plafond, à un palier précis.

:::theorem[Suites monotones]
- Une suite **croissante et majorée** converge.
- Une suite **décroissante et minorée** converge.
- Une suite **croissante non majorée** tend vers $+\infty$.
:::

Le premier point est **admis** : il traduit que les réels n'ont pas de « trou » (toute partie majorée de $\mathbb R$ a une borne supérieure). Le troisième se démontre.

:::proof[Croissante non majorée, donc $+\infty$]
| Étape | Justification |
|---|---|
| Soit $A$ un réel quelconque | on veut dépasser $A$ |
| $(u_n)$ non majorée : il existe $N$ avec $u_N > A$ | $A$ n'est pas un majorant |
| pour $n \geq N$, $u_n \geq u_N > A$ | la suite est croissante |
| donc $u_n \to +\infty$ | définition |
:::

:::method[Étudier la monotonie]
Trois outils, par ordre de fréquence :

1. le **signe de $u_{n+1} - u_n$** ;
2. si $u_n > 0$, comparer $\dfrac{u_{n+1}}{u_n}$ à $1$ ;
3. si $u_n = f(n)$, la **monotonie de la fonction** $f$.
:::

:::example[La série harmonique diverge]
$H_n = 1 + \dfrac12 + \dfrac13 + \cdots + \dfrac1n$ est **croissante** (on ajoute un terme positif). Est-elle majorée ? Chaque terme tend vers $0$, ça sent la convergence... mais non. Regardons $H_{2n} - H_n$ :
$$
H_{2n} - H_n = \dfrac{1}{n+1} + \dfrac{1}{n+2} + \cdots + \dfrac{1}{2n} \geq n\times\dfrac{1}{2n} = \dfrac12,
$$
car il y a $n$ termes, chacun $\geq \dfrac{1}{2n}$. Si $H_n$ convergeait vers $\ell$, alors $H_{2n} - H_n \to \ell - \ell = 0$, ce qui contredit $\geq \dfrac12$. Donc $H_n$ n'est pas convergente, et comme elle est croissante, elle n'est **pas majorée** : $H_n \to +\infty$.

Contrôle : $H_{2n} - H_n$ vaut $0{,}5$ pour $n = 1$, $0{,}6456$ pour $n = 5$ et $0{,}6882$ pour $n = 50$ (elle tend vers $\ln 2 \approx 0{,}6931$).
:::

## 4. Suites adjacentes

Deux suites que l'on peut **pincer** l'une contre l'autre : l'une monte, l'autre descend, et l'écart tend vers zéro. Elles se rejoignent forcément en un point.

:::definition[Suites adjacentes]
Deux suites $(u_n)$ et $(v_n)$ sont **adjacentes** si :

- $(u_n)$ est **croissante** ;
- $(v_n)$ est **décroissante** ;
- $v_n - u_n \to 0$.
:::

:::theorem[Suites adjacentes]
Deux suites adjacentes **convergent vers la même limite $\ell$**, et pour tout $n$,
$$
u_n \leq \ell \leq v_n.
$$
:::

:::proof[Adjacentes, donc même limite]
| Étape | Justification |
|---|---|
| $(v_n - u_n)$ est **décroissante** | $v$ décroît, $u$ croît |
| elle tend vers $0$, donc $v_n - u_n \geq 0$ pour tout $n$ | une suite décroissante qui tend vers $0$ ne passe jamais sous $0$ |
| donc $u_n \leq v_n \leq v_0$ : $(u_n)$ est croissante et **majorée** | $v$ est décroissante |
| donc $(u_n)$ converge, vers un réel $\ell$ | suite monotone |
| de même $v_n \geq u_n \geq u_0$ : $(v_n)$ est décroissante et **minorée**, donc converge, vers $\ell'$ | même argument |
| $\ell' - \ell = \lim(v_n - u_n) = 0$ | opérations sur les limites |
| donc $\ell = \ell'$, et $u_n \leq \ell \leq v_n$ | $u$ monte vers $\ell$, $v$ descend vers $\ell$ |
:::

:::example[Un encadrement d'une somme infinie]
Soit $u_n = \displaystyle\sum_{k=1}^n\dfrac{1}{k^2}$ et $v_n = u_n + \dfrac1n$.

- $(u_n)$ est **croissante** : $u_{n+1} - u_n = \dfrac{1}{(n+1)^2} > 0$.
- $(v_n)$ est **décroissante** : $v_{n+1} - v_n = \dfrac{1}{(n+1)^2} + \dfrac{1}{n+1} - \dfrac1n = \dfrac{n + n(n+1) - (n+1)^2}{n(n+1)^2} = -\dfrac{1}{n(n+1)^2} < 0$.
- $v_n - u_n = \dfrac1n \to 0$.

Elles sont adjacentes : elles convergent vers une même limite $\ell$, que l'on **encadre** :

| $n$ | $u_n$ | $v_n$ |
|---|---|---|
| $1$ | $1$ | $2$ |
| $2$ | $1{,}25$ | $1{,}75$ |
| $3$ | $1{,}3611$ | $1{,}6944$ |
| $1000$ | $1{,}64393$ | $1{,}64493$ |

Donc $1{,}6439 \leq \ell \leq 1{,}6449$. On n'a pas calculé $\ell$, mais on sait qu'elle existe et on la connaît à $10^{-3}$ près.
:::

:::history
Quelle est la valeur exacte de $\ell = 1 + \dfrac14 + \dfrac19 + \dfrac1{16} + \cdots$ ? La question a été posée par Pietro Mengoli en 1650 et a résisté aux plus grands mathématiciens, dont les Bernoulli, pendant près d'un siècle. Euler la résout vers 1735 : $\ell = \dfrac{\pi^2}{6} \approx 1{,}644934$. Le $\pi$ vient d'un problème qui n'a, en apparence, rien à voir avec les cercles.
:::

## 5. Suites récurrentes $u_{n+1} = f(u_n)$

Beaucoup de suites sont définies de proche en proche : on donne $u_0$ et une règle $f$ qui fabrique le terme suivant. Il n'y a pas de formule pour $u_n$, et pourtant on peut en trouver la limite.

:::method[Étudier $u_{n+1} = f(u_n)$ : le plan en quatre temps]
1. **Un intervalle stable.** Trouver un intervalle $I$ contenant $u_0$ et tel que $f(I) \subset I$. On en déduit **par récurrence** que $u_n \in I$ pour tout $n$ (donc $(u_n)$ est bornée).
2. **La monotonie.** Étudier le signe de $u_{n+1} - u_n = f(u_n) - u_n$. Si $f$ est croissante, la suite est **monotone** : elle est croissante si $u_1 \geq u_0$, décroissante si $u_1 \leq u_0$.
3. **La convergence.** Une suite monotone et bornée converge vers un réel $\ell \in I$.
4. **La limite.** Si $f$ est continue, $\ell$ vérifie $f(\ell) = \ell$ : on résout cette équation et on garde la solution **qui est dans $I$**.
:::

:::example[Une racine qui s'itère]
$u_0 = 0$ et $u_{n+1} = \sqrt{2 + u_n}$. Les premiers termes : $\sqrt2 \approx 1{,}41421$, puis $1{,}84776$, $1{,}96157$, $1{,}99037$, ... La suite semble monter vers $2$. Prouvons-le.

**1. Intervalle stable.** Montrons par récurrence que $0 \leq u_n \leq 2$. C'est vrai pour $n = 0$. Si $0 \leq u_n \leq 2$, alors $2 \leq 2 + u_n \leq 4$, donc $\sqrt2 \leq u_{n+1} \leq 2$, et en particulier $0 \leq u_{n+1} \leq 2$.

**2. Monotonie.** On multiplie par la quantité conjuguée :
$$
u_{n+1} - u_n = \sqrt{2 + u_n} - u_n = \dfrac{(2 + u_n) - u_n^2}{\sqrt{2 + u_n} + u_n} = \dfrac{(2 - u_n)(1 + u_n)}{\sqrt{2 + u_n} + u_n}.
$$
Comme $0 \leq u_n \leq 2$, tous les facteurs sont positifs : $u_{n+1} - u_n \geq 0$. La suite est **croissante**.

**3. Convergence.** Croissante et majorée par $2$ : elle converge vers un réel $\ell \in [0\,;2]$.

**4. Limite.** La fonction $x \mapsto \sqrt{2 + x}$ est continue, donc $\ell = \sqrt{2 + \ell}$, soit $\ell^2 = \ell + 2$, soit $(\ell - 2)(\ell + 1) = 0$. Comme $\ell \geq 0$, on garde $\ell = 2$ (et on **rejette** $-1$).
:::

![Suite récurrente en escalier pour u(n+1) = √(2+u(n)), u(0) = 0](/lessons/images/m4-suite-escalier.svg "Représentation en escalier : on monte de u_n jusqu'à la courbe y = √(2+x), on traverse horizontalement jusqu'à la droite y = x, et on lit u_{n+1}. Les marches raccourcissent et la suite se pose en ℓ = 2, point d'intersection de la courbe et de la droite.")

:::remark
**Pourquoi si vite ?** L'erreur $2 - u_n$ vaut $0{,}586$, $0{,}152$, $0{,}0384$, $0{,}0096$, ... : elle est divisée par $4$ à chaque étape. Ce n'est pas un hasard : $f'(x) = \dfrac{1}{2\sqrt{2 + x}}$ et $f'(2) = \dfrac14$. Quand $\lvert f'(\ell)\rvert < 1$, l'erreur est multipliée par environ $\lvert f'(\ell)\rvert$ à chaque pas. C'est le principe de nombreuses méthodes numériques.
:::

:::example[Le cas affine : une suite géométrique cachée]
$u_0 = 10$ et $u_{n+1} = \dfrac12 u_n + 3$. Le point fixe vérifie $\ell = \dfrac12\ell + 3$, soit $\ell = 6$. On pose $w_n = u_n - 6$. Alors
$$
w_{n+1} = u_{n+1} - 6 = \dfrac12 u_n - 3 = \dfrac12(u_n - 6) = \dfrac12 w_n.
$$
$(w_n)$ est **géométrique** de raison $\dfrac12$ et $w_0 = 4$, donc $w_n = 4\left(\dfrac12\right)^n$ et $u_n = 6 + 4\left(\dfrac12\right)^n \to 6$. Les premiers termes $10$, $8$, $7$, $6{,}5$ s'en rapprochent bien.
:::

:::warning
**Ne pas écrire « $\ell = f(\ell)$ » avant d'avoir prouvé que la suite converge.** Avec $u_0 = 1$ et $u_{n+1} = 2u_n$, l'équation $\ell = 2\ell$ donne $\ell = 0$, et pourtant $u_n = 2^n \to +\infty$. L'équation $f(\ell) = \ell$ donne les limites **possibles** ; elle ne garantit pas qu'il y en a une. D'où l'ordre du plan : bornée, monotone, **converge**, **puis** équation du point fixe.
:::

## 6. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Limite de $q^n$ | comparer $\lvert q\rvert$ à $1$ ; Bernoulli pour $q > 1$ |
| Fraction de polynômes en $n$ | factoriser le terme dominant, en haut et en bas |
| Différence de racines carrées | quantité conjuguée |
| Terme avec $(-1)^n$ ou $\sin n$ | encadrement et théorème des gendarmes |
| Montrer qu'une suite tend vers $+\infty$ | la minorer par une suite qui tend vers $+\infty$ |
| Montrer qu'une suite converge sans connaître $\ell$ | monotone et bornée, ou adjacente à une autre |
| Suites adjacentes | $u$ croissante, $v$ décroissante, $v_n - u_n \to 0$ |
| $u_{n+1} = f(u_n)$ | intervalle stable (récurrence), monotonie, convergence, puis $f(\ell) = \ell$ |
| $u_{n+1} = au_n + b$ | point fixe $\ell = \dfrac{b}{1 - a}$ et suite géométrique $u_n - \ell$ |
| Montrer qu'une suite diverge | deux sous-suites de limites différentes, ou croissante non majorée |

## Vérifie-toi

::::check[Suite géométrique]
Calculer $\displaystyle\lim_{n \to +\infty}\dfrac{2^n + 3^n}{3^n}$.

:::answer
$\dfrac{2^n + 3^n}{3^n} = \left(\dfrac23\right)^n + 1$. Comme $0 < \dfrac23 < 1$, $\left(\dfrac23\right)^n \to 0$, donc la limite est $1$.
:::
::::

::::check[Gendarmes]
Montrer que $\dfrac{\sin n}{n} \to 0$.

:::answer
Pour tout $n \geq 1$, $-1 \leq \sin n \leq 1$ donc $-\dfrac1n \leq \dfrac{\sin n}{n} \leq \dfrac1n$. Les deux bornes tendent vers $0$ : par les gendarmes, $\dfrac{\sin n}{n} \to 0$. Contrôle : $\dfrac{\sin 1000}{1000} \approx 0{,}0008$.
:::
::::

::::check[Suites adjacentes]
Montrer que $u_n = \dfrac{n}{n+1}$ et $v_n = \dfrac{n+2}{n+1}$ sont adjacentes. Quelle est leur limite commune ?

:::answer
$u_n = 1 - \dfrac{1}{n+1}$ est croissante, $v_n = 1 + \dfrac{1}{n+1}$ est décroissante, et $v_n - u_n = \dfrac{2}{n+1} \to 0$. Elles sont adjacentes, de limite commune $1$.
:::
::::

::::check[Une suite récurrente]
$u_0 = 1$ et $u_{n+1} = \sqrt{u_n + 6}$. Montrer que $u_n \in [0\,;3]$, que $(u_n)$ est croissante, puis trouver sa limite.

:::answer
**Stabilité.** Si $0 \leq u_n \leq 3$, alors $6 \leq u_n + 6 \leq 9$, donc $\sqrt6 \leq u_{n+1} \leq 3$. **Monotonie.** $u_{n+1} - u_n = \dfrac{6 + u_n - u_n^2}{\sqrt{u_n + 6} + u_n} = \dfrac{(3 - u_n)(2 + u_n)}{\sqrt{u_n + 6} + u_n} \geq 0$. **Limite.** Croissante et majorée, elle converge vers $\ell$ avec $\ell = \sqrt{\ell + 6}$, soit $\ell^2 - \ell - 6 = (\ell - 3)(\ell + 2) = 0$. Comme $\ell \geq 0$, $\ell = 3$. Contrôle : $u_1 \approx 2{,}646$, $u_2 \approx 2{,}940$, $u_3 \approx 2{,}990$.
:::
::::

::::challenge
Montrer que $H_{2^k} \geq 1 + \dfrac k2$ pour tout $k \in \mathbb N$. Combien de termes de la série harmonique suffisent, d'après cette borne, pour dépasser $10$ ?

:::answer
Par récurrence : $H_{2^0} = H_1 = 1 \geq 1$. Si $H_{2^k} \geq 1 + \dfrac k2$, alors $H_{2^{k+1}} = H_{2^k} + \big(H_{2\cdot 2^k} - H_{2^k}\big) \geq 1 + \dfrac k2 + \dfrac12 = 1 + \dfrac{k+1}{2}$, d'après le calcul du §3. Pour dépasser $10$ il suffit que $1 + \dfrac k2 \geq 10$, soit $k = 18$ : $2^{18} = 262\,144$ termes suffisent. En vérité, $12\,367$ termes suffisent (le plus petit $n$ avec $H_n \geq 10$). La borne est **correcte mais très pessimiste** : un énorme rang, pourtant fini, pour une suite qui ne s'arrête jamais de monter.
:::
::::

:::summary
- $u_n \to \ell$ : à partir d'un certain rang, tous les termes sont dans le tube $]\ell - \varepsilon\,;\ell + \varepsilon[$, aussi mince soit-il. Une limite est **unique**, une suite convergente est **bornée**.
- $q^n \to +\infty$ si $q > 1$, $\to 0$ si $\lvert q\rvert < 1$ ; Bernoulli : $(1 + a)^n \geq 1 + na$ pour $a \geq 0$.
- Les quatre formes indéterminées : $\infty - \infty$, $0 \times \infty$, $\dfrac\infty\infty$, $\dfrac00$. On les lève en factorisant le terme dominant ou avec la quantité conjuguée.
- **Comparaison** (pour $\pm\infty$) et **gendarmes** (pour une limite finie).
- **Monotone et bornée $\Rightarrow$ convergente**. Croissante non majorée $\Rightarrow +\infty$.
- **Adjacentes** ($u \nearrow$, $v \searrow$, $v_n - u_n \to 0$) : même limite $\ell$, et $u_n \leq \ell \leq v_n$.
- $u_{n+1} = f(u_n)$ : **intervalle stable**, **monotonie**, **convergence**, **puis** $f(\ell) = \ell$ (en gardant la solution de l'intervalle). Cas affine : $u_n - \ell$ est géométrique.
:::
