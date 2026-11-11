---
theorem: "Factoriser par z - z_0"
---

:::proof[Avec l'identité remarquable]
On écrit $P(z) = a_nz^n + \dots + a_1z + a_0$ avec $a_n \neq 0$.

| Étape | Justification |
|---|---|
| $P(z) = P(z) - P(z_0) = \displaystyle\sum_{k=1}^{n} a_k\big(z^k - z_0^k\big)$ | $P(z_0) = 0$ ; les termes constants s'éliminent |
| $z^k - z_0^k = (z - z_0)\big(z^{k-1} + z^{k-2}z_0 + \dots + z_0^{k-1}\big)$ | on développe le second membre : tout se télescope |
| donc $P(z) = (z - z_0)\,Q(z)$ avec $Q(z) = \displaystyle\sum_{k=1}^{n} a_k\big(z^{k-1} + \dots + z_0^{k-1}\big)$ | on factorise $z - z_0$ |
| le terme de plus haut degré de $Q$ est $a_nz^{n-1}$, donc $Q$ est de degré $n - 1$ | $a_n \neq 0$ |
:::

:::redaction
On écrit $P(z) = a_nz^n + \dots + a_1z + a_0$ avec $a_n \neq 0$.
Comme $P(z_0) = 0$, $P(z) = P(z) - P(z_0) = \displaystyle\sum_{k=1}^{n} a_k\big(z^k - z_0^k\big)$.
Or, pour tout $k \geq 1$, $z^k - z_0^k = (z - z_0)\big(z^{k-1} + z^{k-2}z_0 + \dots + z_0^{k-1}\big)$.
Donc $P(z) = (z - z_0)\,Q(z)$, avec $Q(z) = \displaystyle\sum_{k=1}^{n} a_k\big(z^{k-1} + \dots + z_0^{k-1}\big)$.
Le terme de plus haut degré de $Q$ est $a_nz^{n-1}$, et $a_n \neq 0$, d'où $Q$ est de degré $n - 1$.
:::
