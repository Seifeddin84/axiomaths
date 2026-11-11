---
uid: "0000143"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Bac 1990 principale, Problème"
title: "La formule de Stirling : ln(n!), intégrales de Wallis et √(2π)"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Difficile"
points: 12
tags: ["bac", "stirling", "integrales", "suites", "logarithme", "integration-par-parties"]
bac: "1990-principale-maths"
recommended: true
---

### Partie I

Soit la fonction $f : \,]-1, 1[ \longrightarrow \mathbb{R}$, $x \longmapsto f(x) = \displaystyle\int_0^x \dfrac{t^2}{1 - t^2}\,dt$.

1. a. Justifier l'existence de $f$.

   b. Montrer qu'il existe trois réels $\alpha$, $\beta$, $\gamma$ tels que : $\forall t \in \mathbb{R} \setminus \{-1, 1\}$, $\dfrac{t^2}{1 - t^2} = \alpha + \dfrac{\beta}{1 - t} + \dfrac{\gamma}{1 + t}$.

   c. En déduire que : $\forall x \in \,]-1, 1[$, $f(x) = \dfrac{1}{2}\ln\left(\dfrac{1 + x}{1 - x}\right) - x$.

2. Étudier les variations de $f$ et construire sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

3. a. Montrer que : $\forall x \in \mathbb{R}^*_+$, $\forall k \in \mathbb{N}^*$, $\ln x \leq \dfrac{x}{k} - 1 + \ln k$.

   b. En déduire que : $\forall k \in \mathbb{N}^*$, $\displaystyle\int_{k - \frac12}^{k + \frac12} \ln x\,dx \leq \ln k$, et par suite : $\forall n \in \mathbb{N}^*$, $\displaystyle\int_{\frac12}^{n + \frac12} \ln x\,dx \leq \ln(n!)$.

   c. Montrer que : $\forall n \in \mathbb{N}^*$, $\ln(n!) \geq \left(n + \frac12\right)\ln\left(n + \frac12\right) - n + \frac12\ln 2$.

4. Soit $(u_n)$ la suite définie sur $\mathbb{N}^*$ par : $u_n = \ln(n!) - \left(n + \frac12\right)\ln n + n$.

   a. Montrer que : $\forall n \in \mathbb{N}^*$, $u_n \geq \frac12\ln 2$.

   b. Vérifier que : $\forall n \in \mathbb{N}^*$, $u_n - u_{n+1} = (2n + 1)\,f\left(\dfrac{1}{2n + 1}\right)$.

   c. En déduire que $(u_n)$ est convergente.

### Partie II

Soit la suite $(v_n)$ définie par $v_0 = \displaystyle\int_0^1 (1 - x)^{\frac12}\,dx$ et, $\forall n \in \mathbb{N}^*$, $v_n = \displaystyle\int_0^1 x^{\frac{n}{2}}(1 - x)^{\frac12}\,dx$.

1. Calculer $v_0$.

2. a. Le plan étant muni du repère orthonormé $(O, \vec{i}, \vec{j})$, déterminer l'ensemble des points $M(x, y)$ tels que : $y^2 - x(1 - x) = 0$.

   b. En déduire que $v_1 = \dfrac{\pi}{8}$.

3. a. Montrer que la suite $(v_n)$ est décroissante.

   b. En déduire qu'elle est convergente.

4. a. Prouver, à l'aide d'une intégration par parties, que : $\forall n \in \mathbb{N}$, $v_{n+2} = \dfrac{n + 2}{n + 5}\,v_n$.

   b. En déduire que : $\forall n \in \mathbb{N}$, $\dfrac{n + 2}{n + 5} \leq \dfrac{v_{n+1}}{v_n} \leq 1$ et $\lim\limits_{n \to +\infty} \dfrac{v_{n+1}}{v_n} = 1$.

5. a. Montrer, par récurrence, que : $\forall n \in \mathbb{N}$, $v_n \cdot v_{n+1} = \dfrac{2\pi}{(n + 2)(n + 3)(n + 4)}$.

   b. En faisant apparaître le rapport $\dfrac{v_{n+1}}{v_n}$, montrer que $\lim\limits_{n \to +\infty} n^{\frac32}\,v_n = \sqrt{2\pi}$.

6. Montrer que : $\forall p \in \mathbb{N}$, $v_{2p} = \dfrac{2}{(2p + 1)(2p + 3)} \cdot \dfrac{\left(2^p\,p!\right)^2}{(2p)!}$.

### Partie III

$(u_n)$ étant la suite définie dans I. 4).

1. Montrer que : $\forall n \in \mathbb{N}^*$, $e^{u_n} = \dfrac{n!}{n^{n + \frac12}}\,e^n$.

2. Exprimer $e^{2u_p - u_{2p}}$ en fonction de $p$ et de $v_{2p}$ ($p \in \mathbb{N}^*$).

3. Soit $\ell$ la limite de la suite $(u_n)$. Déduire de ce qui précède que $\ell = \ln\sqrt{2\pi}$. (On admettra que $\lim\limits_{p \to +\infty} u_{2p} = \lim\limits_{p \to +\infty} u_p = \ell$.)

---

## Solution

Le corrigé détaillé, ligne par ligne, avec les figures, est sur le blog : [Bac 1990 : le problème qui démontre la formule de Stirling](/blog/bac-1990-stirling). Voici les étapes clés.

### Partie I

1. a. $t \mapsto \dfrac{t^2}{1 - t^2}$ est continue sur $]-1, 1[$, qui contient $0$ : $f$ en est la primitive nulle en $0$.

   b. $\dfrac{t^2}{1 - t^2} = -1 + \dfrac{1}{1 - t^2} = -1 + \dfrac{1/2}{1 - t} + \dfrac{1/2}{1 + t}$ : $\alpha = -1$, $\beta = \gamma = \dfrac12$.

   c. $f(x) = \left[-t - \dfrac12\ln(1 - t) + \dfrac12\ln(1 + t)\right]_0^x = \dfrac12\ln\dfrac{1 + x}{1 - x} - x$.

2. $f'(x) = \dfrac{x^2}{1 - x^2} \geq 0$ (nul seulement en $0$) : $f$ strictement croissante. $f$ est impaire, $\lim\limits_{x \to 1^-} f(x) = +\infty$, $\lim\limits_{x \to -1^+} f(x) = -\infty$ (asymptotes $x = \pm 1$).

   $f(0) = f'(0) = 0$ et $f''(x) = \dfrac{2x}{(1 - x^2)^2}$ change de signe en $0$ : tangente horizontale et point d'inflexion en $O$.

3. a. $g(x) = \ln x - \dfrac{x}{k} + 1 - \ln k$ : $g'(x) = \dfrac1x - \dfrac1k$, maximum en $k$ et $g(k) = 0$, donc $g \leq 0$ (la courbe de $\ln$ est sous sa tangente en $k$).

   b. On intègre sur $\left[k - \frac12, k + \frac12\right] \subset \,]0, +\infty[$ : $\displaystyle\int_{k-\frac12}^{k+\frac12} \ln x\,dx \leq \dfrac1k \cdot \dfrac{(k + \frac12)^2 - (k - \frac12)^2}{2} - 1 + \ln k = \ln k$.

   On somme de $k = 1$ à $n$ (Chasles) : $\displaystyle\int_{\frac12}^{n+\frac12} \ln x\,dx \leq \ln(n!)$.

   c. Avec la primitive $x\ln x - x$ : $\displaystyle\int_{\frac12}^{n+\frac12} \ln x\,dx = \left(n + \tfrac12\right)\ln\left(n + \tfrac12\right) - n + \tfrac12\ln 2$.

4. a. $u_n \geq \left(n + \frac12\right)\left(\ln(n + \frac12) - \ln n\right) + \frac12\ln 2 \geq \frac12\ln 2$.

   b. $u_n - u_{n+1} = \left(n + \frac12\right)\ln\dfrac{n + 1}{n} - 1$, et pour $x = \dfrac{1}{2n + 1}$, $\dfrac{1 + x}{1 - x} = \dfrac{n + 1}{n}$, d'où $(2n + 1)f(x) = \left(n + \frac12\right)\ln\dfrac{n + 1}{n} - 1$.

   c. $f$ croissante et $f(0) = 0$ : $u_n - u_{n+1} > 0$. $(u_n)$ est décroissante, minorée par $\frac12\ln 2$ : elle converge vers $\ell$.

### Partie II

1. $v_0 = \left[-\dfrac23(1 - x)^{\frac32}\right]_0^1 = \dfrac23$.

2. a. $\left(x - \frac12\right)^2 + y^2 = \frac14$ : cercle de centre $\left(\frac12, 0\right)$ et de rayon $\frac12$.

   b. $v_1 = \displaystyle\int_0^1 \sqrt{x(1 - x)}\,dx$ est l'aire du demi-disque supérieur : $v_1 = \dfrac12\,\pi\left(\dfrac12\right)^2 = \dfrac{\pi}{8}$.

3. a. Sur $[0, 1]$, $x^{\frac{n+1}{2}} \leq x^{\frac{n}{2}}$, donc $v_{n+1} \leq v_n$.

   b. $(v_n)$ est décroissante et minorée par $0$ : elle converge.

4. a. IPP avec $u = x^{\frac n2 + 1}$, $w = -\frac23(1 - x)^{\frac32}$ : $v_{n+2} = \dfrac{n + 2}{3}\displaystyle\int_0^1 x^{\frac n2}(1 - x)^{\frac32}\,dx = \dfrac{n + 2}{3}\left(v_n - v_{n+2}\right)$, d'où $(n + 5)\,v_{n+2} = (n + 2)\,v_n$.

   b. $v_{n+2} \leq v_{n+1} \leq v_n$ et $v_n > 0$ ; on divise par $v_n$ et on applique le théorème des gendarmes.

5. a. $v_0 v_1 = \dfrac{\pi}{12} = \dfrac{2\pi}{2 \cdot 3 \cdot 4}$ ; et $v_{n+1}v_{n+2} = \dfrac{n + 2}{n + 5}\,v_n v_{n+1}$ donne l'hérédité.

   b. $n^3 v_n^2 = \dfrac{2\pi\,n^3}{(n + 2)(n + 3)(n + 4)} \cdot \dfrac{1}{v_{n+1}/v_n} \to 2\pi$, et $v_n > 0$ : $n^{\frac32} v_n \to \sqrt{2\pi}$.

6. Récurrence : vrai pour $p = 0$ ($v_0 = \frac23$) ; $v_{2p+2} = \dfrac{2p + 2}{2p + 5}\,v_{2p}$ et $\dfrac{(2^{p+1}(p + 1)!)^2}{(2p + 2)!} = \dfrac{(2^p p!)^2}{(2p)!} \cdot \dfrac{2(p + 1)}{2p + 1}$.

### Partie III

1. $e^{u_n} = e^{\ln(n!)} \cdot e^{-(n + \frac12)\ln n} \cdot e^n = \dfrac{n!}{n^{n + \frac12}}\,e^n$.

2. $e^{2u_p - u_{2p}} = \dfrac{(p!)^2\,(2p)^{2p + \frac12}}{(2p)!\,p^{2p + 1}} = \dfrac{\sqrt2}{\sqrt p} \cdot \dfrac{(2^p p!)^2}{(2p)!} = \dfrac{(2p + 1)(2p + 3)}{\sqrt{2p}}\,v_{2p}$.

3. $e^{2u_p - u_{2p}} = \dfrac{(2p + 1)(2p + 3)}{(2p)^2} \cdot (2p)^{\frac32} v_{2p} \to 1 \cdot \sqrt{2\pi}$, et $e^{2u_p - u_{2p}} \to e^{2\ell - \ell} = e^\ell$.

   Donc $e^\ell = \sqrt{2\pi}$ : $\ell = \ln\sqrt{2\pi}$.

*Remarque :* $u_n \to \ln\sqrt{2\pi}$ s'écrit $n! \sim \sqrt{2\pi n}\left(\dfrac{n}{e}\right)^n$ : c'est la **formule de Stirling**. Pour $n = 20$, elle donne $n!$ à $0{,}4\,\%$ près.
