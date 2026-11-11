---
theorem: "Limites de référence de ln"
---

:::redaction
Pour tout $t > 0$, $\ln t \leq t - 1$.
Soit $x > 1$ ; avec $t = \sqrt x$, on obtient $\ln x = 2\ln\sqrt x \leq 2(\sqrt x - 1) < 2\sqrt x$.
Comme $\ln x > 0$, on a $0 < \dfrac{\ln x}{x} < \dfrac{2}{\sqrt x}$.
Or $\dfrac{2}{\sqrt x} \to 0$, donc, d'après le théorème des gendarmes, $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x} = 0$.
Pour $x > 0$, on pose $t = \dfrac1x$ : $x\ln x = -\dfrac{\ln t}{t}$, et $t \to +\infty$ quand $x \to 0^+$.
Par suite $\lim\limits_{x \to 0^+} x\ln x = 0$.
Enfin $\dfrac{\ln(1 + x)}{x} = \dfrac{\ln(1 + x) - \ln 1}{x}$ est le taux d'accroissement de $\ln$ en $1$.
$\ln$ est dérivable en $1$ et $\ln'(1) = 1$, d'où $\lim\limits_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1$.
:::
