---
theorem: "Racines n-ièmes de l'unité"
---

:::redaction
Soit $z$ tel que $z^n = 1$ ; alors $\lvert z\rvert^n = 1$, et comme $\lvert z\rvert > 0$, $\lvert z\rvert = 1$.
On écrit $z = e^{i\theta}$ ; d'après la formule de Moivre, $z^n = e^{in\theta}$.
Or $e^{in\theta} = 1 \iff n\theta \equiv 0\ [2\pi] \iff \theta = \dfrac{2k\pi}{n}$ avec $k \in \mathbb Z$.
Les entiers $k$ et $k + n$ donnent le même complexe, car $e^{2i(k + n)\pi/n} = e^{2ik\pi/n}e^{2i\pi}$.
Pour $k = 0, \dots, n - 1$, les arguments $\dfrac{2k\pi}{n}$ sont distincts dans $[0\,;2\pi[$, donc les $z_k$ sont distincts.
D'où l'équation $z^n = 1$ a exactement $n$ solutions $z_k = e^{2ik\pi/n}$, qui pour $n \geq 3$ sont les sommets d'un polygone régulier inscrit dans le cercle trigonométrique.
:::
