---
theorem: "Tangente à une hyperbole"
---

:::proof[Comme pour l'ellipse, avec un signe moins]
| Étape | Justification |
|---|---|
| On dérive $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ : $\dfrac{2x}{a^2} - \dfrac{2y\,y'}{b^2} = 0$ | $y$ est une fonction de $x$ près de $M_0$ ($y_0 \neq 0$) |
| La pente en $M_0$ est $y' = \dfrac{b^2x_0}{a^2y_0}$ | on isole $y'$ |
| $y - y_0 = \dfrac{b^2x_0}{a^2y_0}(x - x_0)$ | tangente en $M_0$ |
| En multipliant par $\dfrac{y_0}{b^2}$ : $\dfrac{y\,y_0}{b^2} - \dfrac{y_0^2}{b^2} = \dfrac{x\,x_0}{a^2} - \dfrac{x_0^2}{a^2}$ | on distribue |
| $\dfrac{x\,x_0}{a^2} - \dfrac{y\,y_0}{b^2} = \dfrac{x_0^2}{a^2} - \dfrac{y_0^2}{b^2} = 1$ | $M_0$ est sur l'hyperbole |
| Pour $y_0 = 0$, on trouve $x = \pm a$ : la tangente verticale au sommet | la formule reste valable |
:::

:::redaction
Près de $M_0$ avec $y_0 \neq 0$, l'hyperbole est la courbe d'une fonction $x \mapsto y(x)$.
En dérivant $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$, on obtient $\dfrac{2x}{a^2} - \dfrac{2y\,y'}{b^2} = 0$, donc la pente en $M_0$ est $\dfrac{b^2x_0}{a^2y_0}$.
La tangente a pour équation $y - y_0 = \dfrac{b^2x_0}{a^2y_0}(x - x_0)$.
En multipliant par $\dfrac{y_0}{b^2}$, $\dfrac{y\,y_0}{b^2} - \dfrac{y_0^2}{b^2} = \dfrac{x\,x_0}{a^2} - \dfrac{x_0^2}{a^2}$.
Donc $\dfrac{x\,x_0}{a^2} - \dfrac{y\,y_0}{b^2} = \dfrac{x_0^2}{a^2} - \dfrac{y_0^2}{b^2}$.
Or $M_0$ est sur l'hyperbole, d'où $\dfrac{x\,x_0}{a^2} - \dfrac{y\,y_0}{b^2} = 1$.
Si $y_0 = 0$, $x_0 = \pm a$ et la formule donne la tangente verticale $x = \pm a$.
:::
