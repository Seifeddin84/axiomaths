---
theorem: 'Équation $z^2 = \alpha$'
---

:::proof[Une différence de deux carrés]
| Étape | Justification |
|---|---|
| Si $\alpha > 0$ : $z^2 = \alpha \iff z^2 - (\sqrt\alpha)^2 = 0 \iff (z - \sqrt\alpha)(z + \sqrt\alpha) = 0$ | $\alpha = (\sqrt\alpha)^2$ ; identité $A^2 - B^2 = (A - B)(A + B)$ |
| Donc $z = \sqrt\alpha$ ou $z = -\sqrt\alpha$ | un produit est nul si et seulement si un facteur est nul |
| Si $\alpha < 0$ : $\left(i\sqrt{-\alpha}\right)^2 = i^2(-\alpha) = \alpha$ | $i^2 = -1$ et $-\alpha > 0$ |
| $z^2 = \alpha \iff \left(z - i\sqrt{-\alpha}\right)\left(z + i\sqrt{-\alpha}\right) = 0 \iff z = \pm i\sqrt{-\alpha}$ | même factorisation |
| Les deux solutions sont distinctes | $\alpha \neq 0$ |
:::

:::redaction
Si $\alpha > 0$, alors $\alpha = (\sqrt\alpha)^2$, donc $z^2 = \alpha \iff z^2 - (\sqrt\alpha)^2 = 0 \iff (z - \sqrt\alpha)(z + \sqrt\alpha) = 0$.
Or un produit de nombres complexes est nul si et seulement si l'un des facteurs est nul.
Donc $z = \sqrt\alpha$ ou $z = -\sqrt\alpha$.
Si $\alpha < 0$, alors $-\alpha > 0$ et $\left(i\sqrt{-\alpha}\right)^2 = i^2 \times (-\alpha) = \alpha$.
Par suite $z^2 = \alpha \iff \left(z - i\sqrt{-\alpha}\right)\left(z + i\sqrt{-\alpha}\right) = 0$.
D'où $z = i\sqrt{-\alpha}$ ou $z = -i\sqrt{-\alpha}$ ; dans les deux cas, les deux solutions sont distinctes car $\alpha \neq 0$.
:::
