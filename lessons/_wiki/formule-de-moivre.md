---
theorem: "Formule de Moivre"
---

:::proof[Par récurrence]
| Étape | Justification |
|---|---|
| $e^{ia}\,e^{ib} = e^{i(a + b)}$ | formules d'addition : $\cos(a + b)$ et $\sin(a + b)$ |
| $n = 0$ : $(e^{i\theta})^0 = 1 = e^{0}$ | initialisation |
| Si $(e^{i\theta})^n = e^{in\theta}$, alors $(e^{i\theta})^{n+1} = e^{in\theta}e^{i\theta} = e^{i(n+1)\theta}$ | hérédité, avec la règle du produit |
| Pour $n < 0$ : $(e^{i\theta})^n = \dfrac{1}{(e^{i\theta})^{-n}} = \dfrac{1}{e^{-in\theta}} = e^{in\theta}$ | $e^{ix}\,e^{-ix} = e^0 = 1$ |
:::

:::redaction
Pour tous réels $a$ et $b$, $(\cos a + i\sin a)(\cos b + i\sin b) = \cos a\cos b - \sin a\sin b + i(\sin a\cos b + \cos a\sin b)$.
D'après les formules d'addition, ce produit vaut $\cos(a + b) + i\sin(a + b)$ : $e^{ia}e^{ib} = e^{i(a + b)}$.
Montrons par récurrence que, pour tout entier $n \geq 0$, $(e^{i\theta})^n = e^{in\theta}$.
Pour $n = 0$, les deux membres valent $1$.
Si $(e^{i\theta})^n = e^{in\theta}$, alors $(e^{i\theta})^{n+1} = e^{in\theta}\,e^{i\theta} = e^{i(n + 1)\theta}$.
Pour $n < 0$, $e^{-in\theta}\,e^{in\theta} = e^0 = 1$, donc $(e^{i\theta})^n = \dfrac{1}{(e^{i\theta})^{-n}} = \dfrac{1}{e^{-in\theta}} = e^{in\theta}$.
D'où, pour tout entier $n$, $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$.
:::
