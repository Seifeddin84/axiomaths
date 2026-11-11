---
theorem: "Distance d'un point à un plan"
---

:::redaction
Soit $\vec n = (a, b, c)$, $H$ le projeté orthogonal de $A$ sur $\mathcal P$, et $M(x_M, y_M, z_M)$ un point de $\mathcal P$.
D'après la relation de Chasles, $\overrightarrow{MA} = \overrightarrow{MH} + \overrightarrow{HA}$.
$\overrightarrow{MH}$ est dans le plan, donc orthogonal à $\vec n$ : $\vec n\cdot\overrightarrow{MA} = \vec n\cdot\overrightarrow{HA}$.
Or $\overrightarrow{HA}$ et $\vec n$ sont colinéaires, donc $\lvert\vec n\cdot\overrightarrow{HA}\rvert = \lVert\vec n\rVert\cdot AH$.
Par suite $AH = \dfrac{\lvert\vec n\cdot\overrightarrow{MA}\rvert}{\lVert\vec n\rVert}$.
De plus $\vec n\cdot\overrightarrow{MA} = ax_0 + by_0 + cz_0 - (ax_M + by_M + cz_M) = ax_0 + by_0 + cz_0 + d$, car $M \in \mathcal P$.
D'où $d(A, \mathcal P) = \dfrac{\lvert ax_0 + by_0 + cz_0 + d\rvert}{\sqrt{a^2 + b^2 + c^2}}$.
:::
