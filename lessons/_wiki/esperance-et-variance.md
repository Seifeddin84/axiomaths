---
theorem: "Espérance et variance"
---

:::redaction
Par définition, $E(X) = \displaystyle\sum_{k=0}^{n} k\,C_n^k\,p^k q^{n-k}$, avec $q = 1 - p$.
Pour $k \geq 1$, $k\,C_n^k = n\,C_{n-1}^{k-1}$.
Donc $E(X) = np\displaystyle\sum_{k=1}^{n} C_{n-1}^{k-1}\,p^{k-1}q^{(n-1)-(k-1)} = np\,(p + q)^{n-1}$ d'après la formule du binôme.
Or $p + q = 1$, d'où $E(X) = np$.
De même, pour $k \geq 2$, $k(k-1)\,C_n^k = n(n-1)\,C_{n-2}^{k-2}$, donc $E\big(X(X - 1)\big) = n(n-1)\,p^2$.
Par linéarité, $E(X^2) = E\big(X(X - 1)\big) + E(X) = n(n-1)\,p^2 + np$.
D'après la formule de König-Huygens, $V(X) = E(X^2) - E(X)^2 = n(n-1)\,p^2 + np - n^2p^2 = np(1 - p)$.
Enfin $\sigma(X) = \sqrt{V(X)} = \sqrt{np(1 - p)}$.
:::
