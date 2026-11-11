---
theorem: "Comparaison et gendarmes"
---

:::proof[Avec la définition de la limite]
On écrit la preuve en $+\infty$ ; en un réel $a$, on remplace « $x$ assez grand » par « $x$ assez proche de $a$ ».

| Étape | Justification |
|---|---|
| Comparaison : soit $A$ réel ; pour $x$ assez grand, $f(x) > A$, donc $g(x) \geq f(x) > A$ | $f \to +\infty$ et $f \leq g$ |
| Gendarmes : soit $\varepsilon > 0$ ; pour $x$ assez grand, $f(x) > \ell - \varepsilon$ et $h(x) < \ell + \varepsilon$ | $f \to \ell$ et $h \to \ell$ |
| Pour ces $x$ : $\ell - \varepsilon < f(x) \leq g(x) \leq h(x) < \ell + \varepsilon$ | encadrement |
| donc $\lvert g(x) - \ell\rvert < \varepsilon$ : $g \to \ell$ | définition de la limite |
| Majoration : $\ell - h(x) \leq f(x) \leq \ell + h(x)$ et $\ell \pm h(x) \to \ell$ | cas particulier des gendarmes |
:::

:::redaction
Comparaison. Soit $A$ un réel.
Comme $\lim\limits_{x \to +\infty} f(x) = +\infty$, il existe $x_0$ tel que, pour tout $x > x_0$, $f(x) > A$.
Or $g(x) \geq f(x)$, donc $g(x) > A$ pour tout $x > x_0$ : $\lim\limits_{x \to +\infty} g(x) = +\infty$.
Gendarmes. Soit $\varepsilon > 0$.
Comme $f \to \ell$ et $h \to \ell$, il existe $x_1$ tel que, pour tout $x > x_1$, $\ell - \varepsilon < f(x)$ et $h(x) < \ell + \varepsilon$.
Or $f(x) \leq g(x) \leq h(x)$, donc $\ell - \varepsilon < g(x) < \ell + \varepsilon$ pour tout $x > x_1$.
D'où $\lim\limits_{x \to +\infty} g(x) = \ell$.
Enfin, si $\lvert f(x) - \ell\rvert \leq h(x)$, alors $\ell - h(x) \leq f(x) \leq \ell + h(x)$, et les deux membres tendent vers $\ell$ : on conclut par les gendarmes.
:::
