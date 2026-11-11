---
theorem: "Une isométrie conserve le produit scalaire"
---

:::redaction
Pour tous points $M$, $N$, $P$, $Q$, on a $\overrightarrow{MN}\cdot\overrightarrow{PQ} = \dfrac{MQ^2 + NP^2 - MP^2 - NQ^2}{2}$.
Supposons que $f$ est une isométrie : elle conserve les distances $MQ$, $NP$, $MP$ et $NQ$.
La même formule appliquée aux images donne $\overrightarrow{M'N'}\cdot\overrightarrow{P'Q'} = \dfrac{M'Q'^2 + N'P'^2 - M'P'^2 - N'Q'^2}{2} = \overrightarrow{MN}\cdot\overrightarrow{PQ}$.
Réciproquement, supposons que $f$ conserve le produit scalaire, et prenons $P = M$ et $Q = N$.
Alors $\overrightarrow{MN}\cdot\overrightarrow{MN} = \overrightarrow{M'N'}\cdot\overrightarrow{M'N'}$, c'est-à-dire $MN^2 = M'N'^2$.
D'où $M'N' = MN$ : $f$ est une isométrie.
:::
