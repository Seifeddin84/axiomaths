---
theorem: "Écriture complexe d'une homothétie"
---

:::proof[Par le point fixe]
| Étape | Justification |
|---|---|
| Si $f$ est l'homothétie de centre $I(z_I)$ et de rapport $k$ : $\overrightarrow{IM'} = k\,\overrightarrow{IM}$, soit $z' - z_I = k(z - z_I)$ | définition, en affixes |
| donc $z' = kz + b$ avec $b = (1 - k)\,z_I$ | on développe |
| Réciproquement, si $z' = kz + b$ avec $k \neq 1$, $z_I = \dfrac{b}{1 - k}$ vérifie $z_I = kz_I + b$ | on résout $z = kz + b$ |
| en soustrayant : $z' - z_I = k(z - z_I)$, donc $\overrightarrow{IM'} = k\,\overrightarrow{IM}$ | $f$ est l'homothétie de centre $I$ et de rapport $k$ |
:::

:::redaction
Soit $f$ l'homothétie de centre $I$ d'affixe $z_I$ et de rapport $k \neq 1$.
Pour tout $M$, $\overrightarrow{IM'} = k\,\overrightarrow{IM}$, donc $z' - z_I = k(z - z_I)$, c'est-à-dire $z' = kz + (1 - k)z_I$.
Réciproquement, soit $f : z \mapsto kz + b$ avec $k \neq 1$, et $z_I = \dfrac{b}{1 - k}$.
On a $z_I(1 - k) = b$, donc $z_I = kz_I + b$.
En soustrayant, $z' - z_I = k(z - z_I)$, c'est-à-dire $\overrightarrow{IM'} = k\,\overrightarrow{IM}$.
D'où $f$ est l'homothétie de centre le point d'affixe $\dfrac{b}{1 - k}$ et de rapport $k$.
:::
