---
theorem: "Écriture complexe d'une similitude indirecte"
---

:::redaction
Soit $f : z \mapsto a\bar z + b$ avec $a \neq 0$.
Pour $M \neq N$, $n' - m' = a\,\overline{(n - m)}$, donc $M'N' = \lvert a\rvert\,MN$ : $f$ est une similitude de rapport $\lvert a\rvert$.
De plus $\dfrac{q' - p'}{n' - m'} = \overline{\left(\dfrac{q - p}{n - m}\right)}$, donc $f$ renverse les angles orientés : elle est indirecte.
En appliquant $f$ deux fois, $z'' = a\,\overline{(a\bar z + b)} + b = \lvert a\rvert^2 z + (a\bar b + b)$.
Si $\lvert a\rvert \neq 1$, $f\circ f$ est une similitude directe de rapport $\lvert a\rvert^2 \neq 1$, de centre $z_I = \dfrac{a\bar b + b}{1 - \lvert a\rvert^2}$.
Or le centre de $f$ est un point fixe de $f$, donc de $f\circ f$, qui n'en a qu'un.
D'où le centre de $f$ est le point d'affixe $\dfrac{a\bar b + b}{1 - \lvert a\rvert^2}$.
:::
