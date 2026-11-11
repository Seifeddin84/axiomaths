---
theorem: "Formules d'Euler"
---

:::proof[Additionner ou soustraire]
| Étape | Justification |
|---|---|
| $e^{ix} = \cos x + i\sin x$ | définition |
| $e^{-ix} = \cos(-x) + i\sin(-x) = \cos x - i\sin x$ | $\cos$ est paire, $\sin$ est impaire |
| $e^{ix} + e^{-ix} = 2\cos x$ | on additionne |
| $e^{ix} - e^{-ix} = 2i\sin x$ | on soustrait |
:::

:::redaction
Pour tout réel $x$, $e^{ix} = \cos x + i\sin x$.
Comme $\cos$ est paire et $\sin$ impaire, $e^{-ix} = \cos x - i\sin x$.
En additionnant, $e^{ix} + e^{-ix} = 2\cos x$, donc $\cos x = \dfrac{e^{ix} + e^{-ix}}{2}$.
En soustrayant, $e^{ix} - e^{-ix} = 2i\sin x$, donc $\sin x = \dfrac{e^{ix} - e^{-ix}}{2i}$.
:::
