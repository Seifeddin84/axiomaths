---
theorem: 'Solutions de $ax^2+bx+c=0$'
---

:::proof[La forme canonique]
| Étape | Justification |
|---|---|
| $ax^2 + bx + c = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$ | on complète le carré : $x^2 + \frac ba x = \left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}$ |
| L'équation équivaut à $\left(x + \dfrac{b}{2a}\right)^2 = \dfrac{\Delta}{4a^2}$ | $a \neq 0$ |
| Si $\Delta < 0$ : aucune solution | un carré n'est jamais strictement négatif |
| Si $\Delta = 0$ : $x + \dfrac{b}{2a} = 0$, une seule solution $x_0 = -\dfrac{b}{2a}$ | un carré est nul si et seulement si le nombre est nul |
| Si $\Delta > 0$ : $x + \dfrac{b}{2a} = \dfrac{\sqrt\Delta}{2a}$ ou $-\dfrac{\sqrt\Delta}{2a}$, soit $x = \dfrac{-b \pm \sqrt\Delta}{2a}$ | $X^2 = A^2 \iff X = \pm A$, avec $\frac{\Delta}{4a^2} = \left(\frac{\sqrt\Delta}{2a}\right)^2$ |
:::

:::redaction
Comme $a \neq 0$, on complète le carré : $ax^2 + bx + c = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$, avec $\Delta = b^2 - 4ac$.
Donc l'équation équivaut à $\left(x + \dfrac{b}{2a}\right)^2 = \dfrac{\Delta}{4a^2}$.
Si $\Delta < 0$, le membre de droite est strictement négatif alors qu'un carré est positif : l'équation n'a pas de solution.
Si $\Delta = 0$, elle équivaut à $x + \dfrac{b}{2a} = 0$ : une seule solution, $x_0 = -\dfrac{b}{2a}$.
Si $\Delta > 0$, on a $\dfrac{\Delta}{4a^2} = \left(\dfrac{\sqrt\Delta}{2a}\right)^2$, donc $x + \dfrac{b}{2a} = \dfrac{\sqrt\Delta}{2a}$ ou $x + \dfrac{b}{2a} = -\dfrac{\sqrt\Delta}{2a}$.
D'où deux solutions : $x_1 = \dfrac{-b - \sqrt\Delta}{2a}$ et $x_2 = \dfrac{-b + \sqrt\Delta}{2a}$.
:::
