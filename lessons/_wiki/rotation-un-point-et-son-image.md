---
theorem: "Un point et son image"
---

:::proof[Avec l'écriture complexe]
| Étape | Justification |
|---|---|
| Une rotation de centre $\Omega(\omega)$ et d'angle $\theta$ s'écrit $z' - \omega = e^{i\theta}(z - \omega)$ | $\Omega M' = \Omega M$ et $(\overrightarrow{\Omega M}, \overrightarrow{\Omega M'}) \equiv \theta$ |
| Elle envoie $A(a)$ sur $A'(a')$ si et seulement si $a' - \omega = e^{i\theta}(a - \omega)$ | on remplace |
| $\iff \omega\left(1 - e^{i\theta}\right) = a' - e^{i\theta}a$ | on regroupe |
| $\theta \not\equiv 0$ donc $e^{i\theta} \neq 1$ : $\omega = \dfrac{a' - e^{i\theta}a}{1 - e^{i\theta}}$, unique | on divise |
| Le centre vérifie $\Omega A' = \Omega A$ et $(\overrightarrow{\Omega A}, \overrightarrow{\Omega A'}) \equiv \theta$ | définition de la rotation |
:::

:::redaction
Une rotation de centre $\Omega$ d'affixe $\omega$ et d'angle $\theta$ s'écrit $z' - \omega = e^{i\theta}(z - \omega)$.
Elle envoie $A(a)$ sur $A'(a')$ si et seulement si $a' - \omega = e^{i\theta}(a - \omega)$, c'est-à-dire $\omega\left(1 - e^{i\theta}\right) = a' - e^{i\theta}a$.
Or $\theta \not\equiv 0\ [2\pi]$, donc $e^{i\theta} \neq 1$, et cette équation a une unique solution $\omega = \dfrac{a' - e^{i\theta}a}{1 - e^{i\theta}}$.
Par suite il existe une unique rotation d'angle $\theta$ qui envoie $A$ sur $A'$.
Son centre vérifie, par définition, $\Omega A' = \Omega A$ et $(\overrightarrow{\Omega A}, \overrightarrow{\Omega A'}) \equiv \theta\ [2\pi]$.
:::
