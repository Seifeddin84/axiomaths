---
theorem: "Comportement à l'infini"
---

:::proof[On factorise par le terme de plus haut degré]
| Étape | Justification |
|---|---|
| $f(x) = a_n x^n + \dots + a_1 x + a_0$ avec $a_n \neq 0$ et $n \geq 2$ | $f$ est un polynôme de degré $n$ |
| Pour $x \neq 0$ : $f(x) = a_n x^n \left(1 + \dfrac{a_{n-1}}{a_n x} + \dots + \dfrac{a_0}{a_n x^n}\right)$ | on met $a_n x^n$ en facteur |
| La parenthèse tend vers $1$ en $\pm\infty$ | $\dfrac{1}{x^k} \to 0$ pour $k \geq 1$ |
| $\lim\limits_{\pm\infty} f(x) = \lim\limits_{\pm\infty} a_n x^n = \pm\infty$, le signe dépendant de $a_n$ et de la parité de $n$ | limite d'un produit |
| $\dfrac{f(x)}{x} = a_n x^{n-1}\,(1 + \dots)$ et $n - 1 \geq 1$, donc $\dfrac{f(x)}{x} \to \pm\infty$ | même raisonnement avec $x^{n-1}$ |
| Branche parabolique de direction $(O, \vec\jmath)$ ; aucune asymptote | $f \to \pm\infty$ exclut une asymptote horizontale, $\frac{f(x)}{x} \to \pm\infty$ exclut une oblique, $f$ continue sur $\mathbb R$ exclut une verticale |
:::

:::redaction
Soit $f(x) = a_n x^n + \dots + a_1 x + a_0$ avec $a_n \neq 0$ et $n \geq 2$.
Pour $x \neq 0$, on met $a_n x^n$ en facteur : $f(x) = a_n x^n \left(1 + \dfrac{a_{n-1}}{a_n x} + \dots + \dfrac{a_0}{a_n x^n}\right)$.
Or chaque $\dfrac{1}{x^k}$ ($k \geq 1$) tend vers $0$ en $\pm\infty$, donc la parenthèse tend vers $1$.
Par suite $f(x)$ a la même limite que $a_n x^n$ en $\pm\infty$ : c'est $+\infty$ ou $-\infty$ selon le signe de $a_n$ et la parité de $n$.
De même $\dfrac{f(x)}{x} = a_n x^{n-1}\left(1 + \dots\right)$, et $n - 1 \geq 1$, donc $\dfrac{f(x)}{x}$ tend vers $\pm\infty$.
D'où une branche parabolique de direction $(O, \vec\jmath)$ en $+\infty$ et en $-\infty$.
Enfin, $f$ n'a pas de limite finie (pas d'asymptote horizontale), $\frac{f(x)}{x}$ non plus (pas d'asymptote oblique) et $f$ est continue sur $\mathbb R$ (pas d'asymptote verticale) : un polynôme de degré $n \geq 2$ n'a aucune asymptote.
:::
