---
theorem: "Quatre transformations"
---

:::proof[On lit chaque formule sur les affixes]
| Étape | Justification |
|---|---|
| $z' = z + b$ : $\overrightarrow{MM'}$ a pour affixe $z' - z = b$, le même vecteur pour tout $M$ | translation de vecteur d'affixe $b$ |
| $z' = kz$, $k$ réel non nul : $\overrightarrow{OM'}$ a pour affixe $k$ fois celle de $\overrightarrow{OM}$, donc $\overrightarrow{OM'} = k\,\overrightarrow{OM}$ | homothétie de centre $O$ et de rapport $k$ |
| $z' = (\cos\theta + i\sin\theta)\,z$ : $\lvert z'\rvert = \lvert z\rvert$, donc $OM' = OM$ ; pour $z \neq 0$, $\arg z' \equiv \arg z + \theta$, donc $\left(\overrightarrow{OM}, \overrightarrow{OM'}\right) \equiv \theta$ ; et $O$ est fixe | rotation de centre $O$ et d'angle $\theta$ : module d'un produit, argument d'un produit |
| $z' = \bar z$ : $M(x\,;y)$ a pour image $M'(x\,;-y)$ | symétrie par rapport à l'axe des réels |
:::

:::redaction
Soit $M$ d'affixe $z$ et $M'$ d'affixe $z'$.
Si $z' = z + b$, alors $\overrightarrow{MM'}$ a pour affixe $z' - z = b$ pour tout $M$ : c'est la translation de vecteur d'affixe $b$.
Si $z' = kz$ avec $k$ réel non nul, alors $\overrightarrow{OM'} = k\,\overrightarrow{OM}$ : c'est l'homothétie de centre $O$ et de rapport $k$.
Si $z' = (\cos\theta + i\sin\theta)\,z$, alors $\lvert z'\rvert = \lvert z\rvert$, donc $OM' = OM$.
De plus, pour $z \neq 0$, $\arg z' \equiv \arg z + \theta\ [2\pi]$, donc $\left(\overrightarrow{OM}, \overrightarrow{OM'}\right) \equiv \theta\ [2\pi]$, et $O$ est invariant : c'est la rotation de centre $O$ et d'angle $\theta$.
Enfin, si $z' = \bar z$, le point $M(x\,;y)$ a pour image $M'(x\,;-y)$ : c'est la symétrie par rapport à l'axe des réels.
:::
