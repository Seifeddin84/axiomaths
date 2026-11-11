---
theorem: "Solutions de y'' + omega^2 y = 0"
---

:::redaction
Si $f(x) = A\cos\omega x + B\sin\omega x$, alors $f''(x) = -\omega^2\big(A\cos\omega x + B\sin\omega x\big) = -\omega^2 f(x)$ : c'est une solution.
Réciproquement, soit $f$ une solution ; $f$ est deux fois dérivable.
On pose $g = f\cos\omega x - \dfrac{f'}{\omega}\sin\omega x$ et $h = f\sin\omega x + \dfrac{f'}{\omega}\cos\omega x$.
En dérivant, les termes en $f'$ se compensent : $g' = -\dfrac{\sin\omega x}{\omega}\big(f'' + \omega^2 f\big)$ et $h' = \dfrac{\cos\omega x}{\omega}\big(f'' + \omega^2 f\big)$.
Or $f'' + \omega^2 f = 0$, donc $g' = h' = 0$ : $g$ et $h$ sont des constantes $A$ et $B$.
Par ailleurs $g\cos\omega x + h\sin\omega x = f\big(\cos^2\omega x + \sin^2\omega x\big) = f$.
D'où $f(x) = A\cos\omega x + B\sin\omega x$.
:::
