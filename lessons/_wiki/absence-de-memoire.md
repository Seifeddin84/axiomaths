---
theorem: "Absence de mémoire"
---

:::redaction
Soit $s, t \geq 0$.
Comme $t \geq 0$, $(X \geq s + t) \subset (X \geq s)$, donc $(X \geq s + t) \cap (X \geq s) = (X \geq s + t)$.
Par définition, $p_{(X \geq s)}(X \geq s + t) = \dfrac{p(X \geq s + t)}{p(X \geq s)}$.
Or, pour tout $u \geq 0$, $p(X \geq u) = e^{-\lambda u}$.
Donc $p_{(X \geq s)}(X \geq s + t) = \dfrac{e^{-\lambda(s + t)}}{e^{-\lambda s}} = e^{-\lambda t}$.
D'où $p_{(X \geq s)}(X \geq s + t) = p(X \geq t)$.
:::
