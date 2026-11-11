---
theorem: "Composée de deux rotations de même centre"
---

:::proof[Les angles s'ajoutent]
| Étape | Justification |
|---|---|
| $R(\Omega\,;\theta) : z' - \omega = e^{i\theta}(z - \omega)$ | écriture complexe |
| $R(\Omega\,;\theta') : z'' - \omega = e^{i\theta'}(z' - \omega)$ | idem |
| $z'' - \omega = e^{i\theta'}e^{i\theta}(z - \omega) = e^{i(\theta + \theta')}(z - \omega)$ | on remplace ; $e^{ia}e^{ib} = e^{i(a + b)}$ |
| c'est $R(\Omega\,;\theta + \theta')$ ; si $\theta + \theta' \equiv 0$, $z'' = z$ | écriture complexe ; $e^{i\cdot 0} = 1$ |
:::

:::redaction
La rotation $R(\Omega\,;\theta)$ s'écrit $z' - \omega = e^{i\theta}(z - \omega)$, et $R(\Omega\,;\theta')$ s'écrit $z'' - \omega = e^{i\theta'}(z' - \omega)$.
En remplaçant, $z'' - \omega = e^{i\theta'}e^{i\theta}(z - \omega) = e^{i(\theta + \theta')}(z - \omega)$.
Donc $R(\Omega\,;\theta')\circ R(\Omega\,;\theta) = R(\Omega\,;\theta + \theta')$.
Si $\theta + \theta' \equiv 0\ [2\pi]$, $e^{i(\theta + \theta')} = 1$, d'où $z'' = z$ : la composée est l'identité.
:::
