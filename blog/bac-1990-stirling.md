---
title: "Bac 1990 : le problème qui démontre la formule de Stirling"
date: "2026-11-11"
author: "AxioMath"
excerpt: "En juin 1990, les élèves de Math-Sciences ont démontré, en douze points et sans le savoir peut-être, que n! ≈ √(2πn)(n/e)ⁿ. Corrigé complet, question par question."
tags: ["bac", "stirling", "integrales", "suites", "logarithme"]
slug: "bac-1990-stirling"
---

Combien vaut $20!$ ? Exactement $2\,432\,902\,008\,176\,640\,000$. Et la formule de Stirling, avec une simple calculatrice, donne

$$
\sqrt{2\pi n}\left(\frac{n}{e}\right)^n \approx 2{,}4228 \times 10^{18}
$$

pour $n = 20$,

soit une erreur de $0{,}4\,\%$. D'où sort ce $\sqrt{2\pi}$ ? Un factoriel, c'est de l'arithmétique pure ; $\pi$, c'est un cercle. Le **problème du bac de juin 1990** (sections Math-Sciences et Math-Technique) répond à cette question en trois parties, avec uniquement les outils du programme : intégrales, logarithme, suites monotones. Le cercle apparaît en partie II, sous la forme d'un demi-disque.

Le sujet complet, l'original d'époque et la version PDF sont sur la page [Bac 1990 · session principale](/bac/1990-principale-maths).

**Le plan en une phrase.** On pose $u_n = \ln(n!) - \left(n + \tfrac12\right)\ln n + n$. La partie I montre que $(u_n)$ converge, la partie II calcule une famille d'intégrales liées à $\pi$, la partie III les relie et donne la limite : $\ln\sqrt{2\pi}$.

| $n$ | $n!$ | $\sqrt{2\pi n}\,(n/e)^n$ | rapport |
|---|---|---|---|
| 1 | 1 | 0,922 | 1,084 |
| 5 | 120 | 118,02 | 1,017 |
| 10 | 3 628 800 | 3 598 696 | 1,008 |
| 20 | $2{,}433\times10^{18}$ | $2{,}423\times10^{18}$ | 1,004 |

Le rapport tend vers $1$ : c'est exactement ce que le problème démontre.

---

## Partie I — Encadrer $\ln(n!)$ par des intégrales

On pose, pour $x \in\ ]-1, 1[$, $f(x) = \displaystyle\int_0^x \frac{t^2}{1 - t^2}\, dt$.

### 1. a) Existence de $f$

La fonction $t \mapsto \dfrac{t^2}{1-t^2}$ est continue sur $]-1, 1[$, intervalle qui contient $0$.

Elle y admet donc une unique primitive qui s'annule en $0$ : c'est $f$.

### 1. b) Décomposition

Pour $t \neq \pm 1$ :

$$
\begin{aligned}
\frac{t^2}{1-t^2} &= \frac{t^2 - 1 + 1}{1-t^2} \\
&= -1 + \frac{1}{(1-t)(1+t)} \\
&= -1 + \frac{1/2}{1-t} + \frac{1/2}{1+t}.
\end{aligned}
$$

Donc $\alpha = -1$, $\beta = \gamma = \dfrac12$.

### 1. c) Expression de $f$

Une primitive de $t \mapsto \dfrac{1}{1-t}$ sur $]-1, 1[$ est $t \mapsto -\ln(1-t)$, et une primitive de $t \mapsto \dfrac{1}{1+t}$ est $t \mapsto \ln(1+t)$.

Donc
$$
\begin{aligned}
f(x) &= \Big[-t - \tfrac12\ln(1-t) + \tfrac12\ln(1+t)\Big]_0^x \\
&= \frac12\ln\left(\frac{1+x}{1-x}\right) - x .
\end{aligned}
$$

### 2. Variations de $f$

$f$ est dérivable sur $]-1,1[$ et $f'(x) = \dfrac{x^2}{1-x^2} \geqslant 0$, nul seulement en $0$.

Donc $f$ est strictement croissante sur $]-1, 1[$.

$f$ est impaire : $f(-x) = \frac12\ln\frac{1-x}{1+x} + x = -f(x)$.

Quand $x \to 1^-$, $\dfrac{1+x}{1-x} \to +\infty$, donc $\lim\limits_{x\to1^-} f(x) = +\infty$ ; par imparité $\lim\limits_{x\to-1^+} f(x) = -\infty$.

Les droites $x = 1$ et $x = -1$ sont asymptotes verticales.

$f(0) = 0$ et $f'(0) = 0$ : tangente horizontale en $O$. De plus $f''(x) = \dfrac{2x}{(1-x^2)^2}$ change de signe en $0$ : $O$ est un point d'inflexion (la courbe traverse sa tangente).

### 3. a) Une inégalité de concavité

Soit $k \in \mathbb{N}^*$ et $g(x) = \ln x - \dfrac{x}{k} + 1 - \ln k$ sur $]0, +\infty[$.

$g'(x) = \dfrac1x - \dfrac1k$, positif sur $]0, k]$ et négatif sur $[k, +\infty[$.

Donc $g$ admet un maximum en $k$, et $g(k) = \ln k - 1 + 1 - \ln k = 0$.

D'où $g(x) \leqslant 0$, c'est-à-dire $\ln x \leqslant \dfrac{x}{k} - 1 + \ln k$ pour tout $x > 0$.

*Lecture géométrique :* la droite $y = \frac{x}{k} - 1 + \ln k$ est la tangente à la courbe de $\ln$ au point d'abscisse $k$, et $\ln$ est concave : sa courbe est sous ses tangentes.

### 3. b) Intégration

Pour $k \geqslant 1$, l'intervalle $\left[k - \frac12, k + \frac12\right]$ est inclus dans $]0, +\infty[$. On intègre l'inégalité précédente :

$$
\begin{aligned}
&\int_{k-\frac12}^{k+\frac12} \ln x \, dx \\
&\leqslant \frac1k \cdot \frac{(k+\frac12)^2 - (k-\frac12)^2}{2} - 1 + \ln k \\
&= \frac1k \cdot k - 1 + \ln k = \ln k .
\end{aligned}
$$

On somme pour $k = 1, \dots, n$ ; par la relation de Chasles :

$$
\int_{\frac12}^{n+\frac12} \ln x \, dx \leqslant \sum_{k=1}^{n} \ln k = \ln(n!) .
$$

### 3. c) Calcul de l'intégrale

Une primitive de $\ln$ est $x \mapsto x\ln x - x$. Donc

$$
\begin{aligned}
&\int_{\frac12}^{n+\frac12} \ln x \, dx \\
&= \left(n+\tfrac12\right)\ln\left(n+\tfrac12\right) - \left(n + \tfrac12\right) \\
&\quad - \left(\tfrac12 \ln \tfrac12 - \tfrac12\right) \\
&= \left(n+\tfrac12\right)\ln\left(n+\tfrac12\right) - n + \tfrac12\ln 2 .
\end{aligned}
$$

D'où $\ln(n!) \geqslant \left(n+\frac12\right)\ln\left(n+\frac12\right) - n + \frac12\ln 2$.

### 4. a) Minoration de $u_n$

$$
\begin{aligned}
u_n &= \ln(n!) - \left(n+\tfrac12\right)\ln n + n \\
&\geqslant \left(n+\tfrac12\right)\big(\ln(n+\tfrac12) - \ln n\big) + \tfrac12 \ln 2 .
\end{aligned}
$$

Or $\ln\left(n + \frac12\right) > \ln n$, donc $u_n \geqslant \dfrac12 \ln 2$.

### 4. b) La différence $u_n - u_{n+1}$

$$
\begin{aligned}
u_n - u_{n+1} &= -\ln(n+1) - \left(n+\tfrac12\right)\ln n \\
&\quad + \left(n+\tfrac32\right)\ln(n+1) - 1 \\
&= \left(n+\tfrac12\right)\ln\frac{n+1}{n} - 1 .
\end{aligned}
$$

Avec $x = \dfrac{1}{2n+1} \in\ ]0, 1[$ : $\dfrac{1+x}{1-x} = \dfrac{2n+2}{2n} = \dfrac{n+1}{n}$, donc

$$
\begin{aligned}
&(2n+1)\, f\!\left(\tfrac{1}{2n+1}\right) \\
&= (2n+1)\left[\frac12 \ln\frac{n+1}{n} - \frac{1}{2n+1}\right] \\
&= \left(n + \tfrac12\right)\ln\frac{n+1}{n} - 1 \\
&= u_n - u_{n+1}.
\end{aligned}
$$

### 4. c) Convergence

$f$ est strictement croissante et $f(0) = 0$, donc $f\left(\frac{1}{2n+1}\right) > 0$.

Par suite $u_n - u_{n+1} > 0$ : la suite $(u_n)$ est strictement décroissante.

Elle est minorée par $\frac12\ln 2$, donc elle converge. On note $\ell$ sa limite.

![La suite u_n décroît vers ln √(2π)](/blog/images/stirling-un.png)

*Ce que la partie I ne dit pas :* la minoration donne seulement $\ell \geqslant \frac12\ln 2 \approx 0{,}35$, alors que la vraie limite vaut $0{,}9189\ldots$. Pour trouver $\ell$, il faut une autre idée : c'est la partie II.

---

## Partie II — Les intégrales $v_n = \int_0^1 x^{n/2}\sqrt{1-x}\, dx$

### 1. Calcul de $v_0$

$$
\begin{aligned}
v_0 &= \int_0^1 (1-x)^{\frac12}\, dx \\
&= \Big[-\tfrac23 (1-x)^{\frac32}\Big]_0^1 = \frac23 .
\end{aligned}
$$

### 2. a) Un cercle caché

$y^2 - x(1-x) = 0 \iff x^2 - x + y^2 = 0 \iff \left(x - \tfrac12\right)^2 + y^2 = \tfrac14$.

C'est le cercle de centre $\Omega\left(\frac12, 0\right)$ et de rayon $\frac12$.

### 2. b) $v_1 = \dfrac{\pi}{8}$

$v_1 = \displaystyle\int_0^1 \sqrt{x(1-x)}\, dx$ est l'aire du domaine compris entre l'axe des abscisses et la courbe $y = \sqrt{x(1-x)}$, c'est-à-dire la moitié supérieure du cercle précédent.

C'est l'aire d'un demi-disque de rayon $\frac12$ : $v_1 = \dfrac12\, \pi \left(\dfrac12\right)^2 = \dfrac{\pi}{8}$.

![Le demi-disque d'aire π/8](/blog/images/stirling-demi-disque.png)

**Voilà d'où vient le $\pi$ de Stirling.**

### 3. Monotonie et convergence

Pour $x \in [0, 1]$, $x^{\frac{n+1}{2}} = x^{\frac n2}\sqrt{x} \leqslant x^{\frac n2}$, donc $x^{\frac{n+1}{2}}\sqrt{1-x} \leqslant x^{\frac n2}\sqrt{1-x}$.

Par positivité de l'intégrale, $v_{n+1} \leqslant v_n$ : la suite $(v_n)$ est décroissante.

Elle est minorée par $0$ (intégrale d'une fonction positive), donc elle converge.

### 4. a) Relation de récurrence

On intègre par parties $v_{n+2} = \displaystyle\int_0^1 x^{\frac n2 + 1}(1-x)^{\frac12}\, dx$ en posant
$u(x) = x^{\frac n2 + 1}$ et $w'(x) = (1-x)^{\frac12}$, $w(x) = -\frac23(1-x)^{\frac32}$ :

$$
\begin{aligned}
v_{n+2} &= \Big[-\tfrac23 x^{\frac n2+1}(1-x)^{\frac32}\Big]_0^1 \\
&\quad + \frac23\left(\frac n2 + 1\right)\int_0^1 x^{\frac n2}(1-x)^{\frac32}\, dx .
\end{aligned}
$$

Le crochet est nul. Et $(1-x)^{\frac32} = (1-x)(1-x)^{\frac12}$, donc $\displaystyle\int_0^1 x^{\frac n2}(1-x)^{\frac32}\, dx = v_n - v_{n+2}$.

D'où $v_{n+2} = \dfrac{n+2}{3}\,(v_n - v_{n+2})$, soit $(n+5)\, v_{n+2} = (n+2)\, v_n$ :

$$
v_{n+2} = \frac{n+2}{n+5}\, v_n .
$$

### 4. b) Le rapport $\dfrac{v_{n+1}}{v_n}$ tend vers $1$

$(v_n)$ est décroissante et $v_n > 0$, donc $v_{n+2} \leqslant v_{n+1} \leqslant v_n$.

En divisant par $v_n$ : $\dfrac{n+2}{n+5} = \dfrac{v_{n+2}}{v_n} \leqslant \dfrac{v_{n+1}}{v_n} \leqslant 1$.

Comme $\dfrac{n+2}{n+5} \to 1$, le théorème des gendarmes donne $\lim\limits_{n\to+\infty} \dfrac{v_{n+1}}{v_n} = 1$.

### 5. a) Le produit $v_n v_{n+1}$

On pose $w_n = v_n v_{n+1}$.

Pour $n = 0$ : $w_0 = \dfrac23 \cdot \dfrac{\pi}{8} = \dfrac{\pi}{12} = \dfrac{2\pi}{2 \times 3 \times 4}$. La formule est vraie.

Supposons $w_n = \dfrac{2\pi}{(n+2)(n+3)(n+4)}$. Alors, par 4. a),

$$
\begin{aligned}
w_{n+1} &= v_{n+1}\, v_{n+2} = \frac{n+2}{n+5}\, v_n v_{n+1} \\
&= \frac{n+2}{n+5} \cdot \frac{2\pi}{(n+2)(n+3)(n+4)} \\
&= \frac{2\pi}{(n+3)(n+4)(n+5)} .
\end{aligned}
$$

La formule est donc vraie pour tout $n \in \mathbb{N}$.

### 5. b) L'équivalent de $v_n$

$$
\begin{aligned}
n^3 v_n^2 &= n^3\, \frac{v_n v_{n+1}}{v_{n+1}/v_n} \\
&= \frac{2\pi\, n^3}{(n+2)(n+3)(n+4)} \cdot \frac{1}{v_{n+1}/v_n} .
\end{aligned}
$$

Le premier facteur tend vers $2\pi$, le second vers $1$, donc $n^3 v_n^2 \to 2\pi$.

Comme $v_n > 0$ : $\lim\limits_{n\to+\infty} n^{\frac32}\, v_n = \sqrt{2\pi}$.

### 6. Formule de $v_{2p}$

On raisonne par récurrence sur $p$. Pour $p = 0$ : $\dfrac{2}{1 \times 3} \cdot \dfrac{1}{1} = \dfrac23 = v_0$.

Si la formule est vraie au rang $p$, alors par 4. a) avec $n = 2p$ :

$$
\begin{aligned}
v_{2p+2} &= \frac{2p+2}{2p+5}\, v_{2p} \\
&= \frac{2(p+1)}{2p+5} \cdot \frac{2}{(2p+1)(2p+3)} \\
&\quad \times \frac{(2^p p!)^2}{(2p)!} .
\end{aligned}
$$

Or

$$
\begin{aligned}
\frac{(2^{p+1}(p+1)!)^2}{(2p+2)!} &= \frac{(2^p p!)^2 \cdot 4(p+1)^2}{(2p)!\,(2p+1)(2p+2)} \\
&= \frac{(2^p p!)^2}{(2p)!} \cdot \frac{2(p+1)}{2p+1},
\end{aligned}
$$

donc

$$
\begin{aligned}
&\frac{2}{(2p+3)(2p+5)} \cdot \frac{(2^{p+1}(p+1)!)^2}{(2p+2)!} \\
&= \frac{2}{(2p+3)(2p+5)} \cdot \frac{2(p+1)}{2p+1} \cdot \frac{(2^p p!)^2}{(2p)!} \\
&= v_{2p+2} .
\end{aligned}
$$

La formule est vraie au rang $p+1$, donc pour tout $p \in \mathbb{N}$.

---

## Partie III — La limite : $\ell = \ln\sqrt{2\pi}$

### 1. $e^{u_n}$

$$
\begin{aligned}
e^{u_n} &= e^{\ln(n!)} \cdot e^{-(n+\frac12)\ln n} \cdot e^{n} \\
&= \frac{n!}{n^{n+\frac12}}\, e^n .
\end{aligned}
$$

### 2. Le rapport $e^{2u_p - u_{2p}}$

$$
\begin{aligned}
e^{2u_p - u_{2p}} &= \frac{(p!)^2\, e^{2p}}{p^{2p+1}} \cdot \frac{(2p)^{2p+\frac12}}{(2p)!\, e^{2p}} \\
&= \frac{(p!)^2\, 2^{2p}\sqrt{2}\, p^{2p+\frac12}}{(2p)!\, p^{2p+1}} \\
&= \frac{\sqrt2}{\sqrt p} \cdot \frac{(2^p p!)^2}{(2p)!} .
\end{aligned}
$$

Par II. 6, $\dfrac{(2^p p!)^2}{(2p)!} = \dfrac{(2p+1)(2p+3)}{2}\, v_{2p}$, donc

$$
e^{2u_p - u_{2p}} = \frac{(2p+1)(2p+3)}{\sqrt{2p}}\, v_{2p} .
$$

### 3. La limite

On fait apparaître la quantité de II. 5 b) au rang $n = 2p$ :

$$
\begin{aligned}
e^{2u_p - u_{2p}} &= \frac{(2p+1)(2p+3)}{(2p)^2} \\
&\quad \times (2p)^{\frac32}\, v_{2p} .
\end{aligned}
$$

Quand $p \to +\infty$, le premier facteur tend vers $1$ et le second vers $\sqrt{2\pi}$.

À gauche, $u_p \to \ell$ et $u_{2p} \to \ell$, donc $e^{2u_p - u_{2p}} \to e^{2\ell - \ell} = e^{\ell}$ (continuité de l'exponentielle).

Par unicité de la limite : $e^{\ell} = \sqrt{2\pi}$, c'est-à-dire

$$
\boxed{\ \ell = \ln\sqrt{2\pi}\ }
$$

---

## Ce qu'on vient de démontrer

$u_n \to \ln\sqrt{2\pi}$ s'écrit, en passant à l'exponentielle (III. 1) :

$$
\frac{n!}{n^{n+\frac12}\, e^{-n}} \xrightarrow[n\to+\infty]{} \sqrt{2\pi},
$$

c'est-à-dire

$$
n! \sim \sqrt{2\pi n}\left(\frac{n}{e}\right)^n .
$$

C'est la **formule de Stirling** (James Stirling, 1730 ; Abraham de Moivre avait trouvé la forme $C\sqrt n\,(n/e)^n$ sans connaître la constante $C$). Le problème suit exactement ce chemin historique : la partie I prouve l'existence de la constante (de Moivre), les parties II et III l'identifient (Stirling), grâce aux intégrales de Wallis déguisées en $v_n$.

**Trois idées à retenir pour vos propres copies :**

- *Encadrer une somme par une intégrale* (I. 3) : la concavité de $\ln$ transforme $\sum \ln k$ en $\int \ln x\,dx$, qu'on sait calculer.
- *Une suite monotone bornée converge* (I. 4) : on prouve l'existence de $\ell$ bien avant de savoir la calculer.
- *Une intégrale peut être une aire connue* (II. 2) : $v_1$ ne se calcule pas par primitive au programme, mais c'est un demi-disque.

*Pour aller plus loin :* le même problème est découpé en trois exercices corrigés dans la banque (lien sur la [page du sujet](/bac/1990-principale-maths)).
