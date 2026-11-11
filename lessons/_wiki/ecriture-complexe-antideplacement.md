---
theorem: "Écriture complexe d'un antidéplacement"
---

:::redaction
Pour l'axe $\Delta$ passant par $p$ et dirigé par $e^{i\varphi}$, on a $S_\Delta(z) = p + e^{2i\varphi}\,\overline{(z - p)}$.
Avec $p = \dfrac b2$ et $\varphi = \dfrac\theta2$, $e^{2i\varphi} = a$ et $S_\Delta(z) = \dfrac b2 + a\bar z - \dfrac{a\bar b}{2}$.
Donc $f(z) - S_\Delta(z) = \dfrac b2 + \dfrac{a\bar b}{2} = \dfrac c2$.
Or $c = e^{i\theta/2}\big(e^{i\theta/2}\bar b + e^{-i\theta/2}b\big) = e^{i\theta/2}\cdot 2\,\mathrm{Re}\big(e^{-i\theta/2}b\big)$.
Par suite $\dfrac c2$ est un multiple réel de $e^{i\theta/2}$ : c'est un vecteur parallèle à $\Delta$, et $f = t_{c/2}\circ S_\Delta$.
Si $c = 0$, $f = S_\Delta$ ; sinon, $f$ est la symétrie glissante d'axe $\Delta$ et de vecteur d'affixe $\dfrac c2$.
Réciproquement, un antidéplacement est $t_{\vec w}\circ S_\Delta$, c'est-à-dire $z \mapsto e^{2i\varphi}\bar z + \big(p - e^{2i\varphi}\bar p + w\big)$.
D'où il s'écrit $z' = a\bar z + b$ avec $\lvert a\rvert = 1$.
:::
