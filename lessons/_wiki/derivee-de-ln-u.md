---
theorem: "Dérivée de ln u"
---

:::proof[Une dérivée composée]
| Étape | Justification |
|---|---|
| $\ln u = \ln\circ u$, avec $u(x) > 0$ pour tout $x \in I$ | $\ln$ est définie sur $]0\,;+\infty[$ |
| $u$ est dérivable en $x$ et $\ln$ est dérivable en $u(x) > 0$ | hypothèses |
| $(\ln\circ u)'(x) = \ln'\big(u(x)\big)\times u'(x)$ | dérivée d'une composée |
| $= \dfrac{1}{u(x)}\times u'(x) = \dfrac{u'(x)}{u(x)}$ | $\ln'(y) = \dfrac1y$ |
:::

:::redaction
Soit $x \in I$.
$u$ est dérivable en $x$, et $u(x) > 0$, donc $\ln$ est dérivable en $u(x)$.
D'après le théorème de dérivation d'une composée, $\ln\circ u$ est dérivable en $x$ et $(\ln\circ u)'(x) = \ln'\big(u(x)\big) \times u'(x)$.
Or $\ln'(y) = \dfrac1y$ pour $y > 0$.
D'où $(\ln u)'(x) = \dfrac{u'(x)}{u(x)}$.
:::
