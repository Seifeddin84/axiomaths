---
theorem: "Dérivée de la réciproque"
---

:::redaction
Soit $y \in J$ avec $y \neq y_0$, et $x = f^{-1}(y)$.
$f^{-1}$ est injective, donc $x \neq x_0$ ; de plus $y = f(x)$ et $y_0 = f(x_0)$.
Donc $\dfrac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \dfrac{x - x_0}{f(x) - f(x_0)} = \dfrac{1}{\tau(x)}$, où $\tau(x) = \dfrac{f(x) - f(x_0)}{x - x_0}$.
Or $f^{-1}$ est continue en $y_0$, donc $x \to x_0$ quand $y \to y_0$.
$f$ est dérivable en $x_0$, par suite $\tau(x) \to f'(x_0)$.
Si $f'(x_0) \neq 0$, alors $\dfrac{1}{\tau(x)} \to \dfrac{1}{f'(x_0)}$ : $f^{-1}$ est dérivable en $y_0$ et $(f^{-1})'(y_0) = \dfrac{1}{f'(x_0)}$.
Si $f'(x_0) = 0$, alors $\tau(x) \to 0$ en gardant un signe constant, car $f$ est strictement monotone.
Donc $\dfrac{1}{\tau(x)} \to \pm\infty$ : $f^{-1}$ n'est pas dérivable en $y_0$ et sa courbe a une tangente verticale.
:::
