---
theorem: 'Signe de $f(x) = ax^2 + bx + c$'
---

:::proof[La forme canonique]
| Étape | Justification |
|---|---|
| $f(x) = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$ avec $\Delta = b^2 - 4ac$ | forme canonique ($a \neq 0$) |
| Si $\Delta < 0$ : le crochet est $> 0$ pour tout $x$, donc $f(x)$ a le signe de $a$ | un carré est $\geq 0$ et $-\frac{\Delta}{4a^2} > 0$ |
| Si $\Delta = 0$ : $f(x) = a(x - x_0)^2$ avec $x_0 = -\dfrac{b}{2a}$, du signe de $a$ pour $x \neq x_0$ | $(x - x_0)^2 > 0$ pour $x \neq x_0$ |
| Si $\Delta > 0$ : $f(x) = a(x - x_1)(x - x_2)$ | le crochet est une différence de deux carrés |
| Avec $x_1 < x_2$ : $(x - x_1)(x - x_2) > 0$ à l'extérieur de $[x_1\,;x_2]$ et $< 0$ entre les racines | tableau de signes d'un produit |
| D'où $f(x)$ du signe de $a$ à l'extérieur des racines, de $-a$ entre elles | on multiplie par $a$ |
:::

:::redaction
Comme $a \neq 0$, on écrit $f(x) = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$ avec $\Delta = b^2 - 4ac$.
Si $\Delta < 0$, le crochet est la somme d'un carré et du nombre strictement positif $-\dfrac{\Delta}{4a^2}$, donc il est strictement positif et $f(x)$ a le signe de $a$ pour tout $x$.
Si $\Delta = 0$, $f(x) = a(x - x_0)^2$ avec $x_0 = -\dfrac{b}{2a}$, donc $f(x)$ a le signe de $a$ pour $x \neq x_0$ et s'annule en $x_0$.
Si $\Delta > 0$, le crochet est une différence de deux carrés, donc $f(x) = a(x - x_1)(x - x_2)$ où $x_1$ et $x_2$ sont les deux racines.
En notant $x_1 < x_2$, le produit $(x - x_1)(x - x_2)$ est strictement positif pour $x < x_1$ ou $x > x_2$ (deux facteurs de même signe) et strictement négatif pour $x_1 < x < x_2$.
D'où $f(x)$ a le signe de $a$ à l'extérieur des racines et le signe de $-a$ entre les racines.
:::
