---
theorem: "Dérivable implique continue"
---

:::redaction
Pour tout $x \neq a$, on a $f(x) - f(a) = \dfrac{f(x) - f(a)}{x - a} \times (x - a)$.
Or $f$ est dérivable en $a$, donc $\lim\limits_{x \to a} \dfrac{f(x) - f(a)}{x - a} = f'(a)$.
De plus, $\lim\limits_{x \to a} (x - a) = 0$.
Par produit, $\lim\limits_{x \to a} \big(f(x) - f(a)\big) = f'(a) \times 0 = 0$.
D'où $\lim\limits_{x \to a} f(x) = f(a)$ : $f$ est continue en $a$.
:::
