---
theorem: "Limites de référence"
---

:::redaction
Pour tout réel $x$, $e^x \geq 1 + x$ ; or $1 + x \to +\infty$, donc $\lim\limits_{x \to +\infty} e^x = +\infty$.
Pour $x \to -\infty$, $e^x = \dfrac{1}{e^{-x}}$ et $e^{-x} \to +\infty$, donc $\lim\limits_{x \to -\infty} e^x = 0$.
On pose $t = e^x$ : quand $x \to +\infty$, $t \to +\infty$ et $x = \ln t$.
Donc $\dfrac{x}{e^x} = \dfrac{\ln t}{t} \to 0$, et comme $\dfrac{e^x}{x} > 0$ pour $x > 0$, $\lim\limits_{x \to +\infty} \dfrac{e^x}{x} = +\infty$.
Pour $x \to -\infty$, on pose $y = -x \to +\infty$ : $x\,e^x = -\dfrac{y}{e^y} \to 0$.
Enfin $\dfrac{e^x - 1}{x} = \dfrac{e^x - e^0}{x - 0}$ est le taux d'accroissement de $\exp$ en $0$.
$\exp$ est dérivable en $0$ et $\exp'(0) = e^0 = 1$, d'où $\lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = 1$.
:::
