---
theorem: "Racines n-ièmes d'un nombre complexe"
---

:::redaction
Soit $r = \lvert a\rvert^{1/n}$ et $z_0 = r\,e^{i\alpha/n}$.
D'après la formule de Moivre, $z_0^n = r^n e^{i\alpha} = \lvert a\rvert\,e^{i\alpha} = a$.
Comme $z_0 \neq 0$, $z^n = a \iff z^n = z_0^n \iff \left(\dfrac{z}{z_0}\right)^n = 1$.
Donc $\dfrac{z}{z_0}$ est une racine $n$-ième de l'unité : $\dfrac{z}{z_0} = e^{2ik\pi/n}$ avec $k \in \{0, \dots, n - 1\}$.
D'où les solutions sont les $n$ complexes distincts $z_k = r\,e^{i\left(\frac\alpha n + \frac{2k\pi}{n}\right)}$, $k = 0, \dots, n - 1$.
Ils ont tous pour module $r$ et deux consécutifs diffèrent d'un angle $\dfrac{2\pi}{n}$ : pour $n \geq 3$, ce sont les sommets d'un polygone régulier.
:::
