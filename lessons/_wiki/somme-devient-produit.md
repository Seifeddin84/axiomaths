---
theorem: "Somme devient produit"
---

:::redaction
Soit $a$ et $b$ deux réels.
$e^a > 0$ et $e^b > 0$, donc $e^a \times e^b > 0$ et on peut prendre son logarithme.
$\ln\left(e^a \times e^b\right) = \ln e^a + \ln e^b = a + b$.
Or, pour $y > 0$, $\ln y = x$ équivaut à $y = e^x$.
D'où $e^a \times e^b = e^{a + b}$.
Avec $b = -a$ : $e^a \times e^{-a} = e^0 = 1$, donc $e^{-a} = \dfrac{1}{e^a}$.
Par suite $e^{a - b} = e^a \times e^{-b} = \dfrac{e^a}{e^b}$.
Enfin, par récurrence sur $n \geq 0$, $\left(e^a\right)^n = e^{na}$, et on passe aux entiers négatifs avec $e^{-x} = \dfrac{1}{e^x}$.
:::
