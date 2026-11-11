---
theorem: "Limites aux bornes"
---

:::redaction
On a $2 > 1$, donc $\ln 2 > 0$.
Pour tout entier $n$, $\ln(2^n) = n\ln 2$, qui tend vers $+\infty$.
Soit $M$ un réel ; il existe un entier $n$ tel que $n\ln 2 > M$.
$\ln$ est croissante, donc, pour tout $x \geq 2^n$, $\ln x \geq \ln(2^n) = n\ln 2 > M$.
D'où $\lim\limits_{x \to +\infty} \ln x = +\infty$.
Pour $x > 0$, $\ln x = -\ln\dfrac1x$ ; or $\dfrac1x \to +\infty$ quand $x \to 0^+$.
Par suite $\lim\limits_{x \to 0^+} \ln x = -\infty$.
:::
