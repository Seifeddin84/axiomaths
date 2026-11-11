---
theorem: "Dérivée de arctan"
---

:::redaction
$\tan$ est continue et strictement croissante sur $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$, de réciproque $\arctan$.
Pour tout $t$, $\tan'(t) = 1 + \tan^2 t \geq 1$, donc $\tan'(t) \neq 0$.
D'après le théorème de dérivation d'une réciproque, $\arctan$ est dérivable sur $\mathbb R$ et $\arctan'(x) = \dfrac{1}{\tan'(\arctan x)} = \dfrac{1}{1 + \tan^2(\arctan x)}$.
Or $\tan(\arctan x) = x$.
D'où $\arctan'(x) = \dfrac{1}{1 + x^2}$.
:::
