---
theorem: "Écriture complexe d'un déplacement"
---

:::redaction
Si $a = 1$, $z' = z + b$ : $f$ est la translation de vecteur d'affixe $b$.
Si $a \neq 1$, on pose $\omega = \dfrac{b}{1 - a}$ ; alors $\omega = a\omega + b$.
En soustrayant, $z' - \omega = a(z - \omega)$.
Pour $M \neq \Omega$, $\dfrac{z' - \omega}{z - \omega} = a$, donc $\Omega M' = \lvert a\rvert\,\Omega M = \Omega M$ et $(\overrightarrow{\Omega M}, \overrightarrow{\Omega M'}) \equiv \arg a$.
Par suite $f$ est la rotation de centre $\Omega$ et d'angle $\arg a$.
Réciproquement, un déplacement est l'identité, une translation $z \mapsto z + b$, ou une rotation $z' - \omega = e^{i\alpha}(z - \omega)$.
D'où il s'écrit $z' = az + b$, avec $a = e^{i\alpha}$ (donc $\lvert a\rvert = 1$) et $b = \omega(1 - a)$.
:::
