---
theorem: "Centre d'une similitude directe"
---

:::proof[Avec les nombres complexes]
Soit $f$ une similitude directe de rapport $k$ et d'angle $\theta$, et $a = k\,e^{i\theta}$.

| Étape | Justification |
|---|---|
| Pour $M \neq N$ d'affixes $m$, $n$ : $\dfrac{n' - m'}{n - m}$ a pour module $k$ et pour argument $\theta$, donc vaut $a$ | rapport et angle de $f$ |
| On fixe $M$ : $n' = an + (m' - am)$ pour tout $N$, donc $f : z \mapsto az + b$ | $b = m' - am$ ne dépend pas de $N$ |
| $k \neq 1$ donc $a \neq 1$ : $z = az + b$ a l'unique solution $z_I = \dfrac{b}{1 - a}$ | point fixe |
| $z' - z_I = a(z - z_I)$, donc $IM' = k\,IM$ et $(\overrightarrow{IM}, \overrightarrow{IM'}) \equiv \theta$ | module et argument |
| Réciproquement, ces deux conditions s'écrivent $z' - z_I = k\,e^{i\theta}(z - z_I)$, qui est une similitude directe | écriture complexe |
:::

:::redaction
Soit $f$ une similitude directe de rapport $k \neq 1$ et d'angle $\theta$, et $a = k\,e^{i\theta}$.
Pour $M \neq N$ d'affixes $m$ et $n$, $\dfrac{n' - m'}{n - m}$ a pour module $k$ et pour argument $\theta$, donc vaut $a$.
En fixant $M$, on obtient $n' = an + (m' - am)$ pour tout $N$ : $f$ s'écrit $z \mapsto az + b$.
Comme $\lvert a\rvert = k \neq 1$, $a \neq 1$, donc l'équation $z = az + b$ a une unique solution $z_I = \dfrac{b}{1 - a}$ : $f$ a un unique point fixe $I$.
En soustrayant $z_I = az_I + b$, on obtient $z' - z_I = a(z - z_I)$.
Par suite, pour $M \neq I$, $IM' = k\,IM$ et $(\overrightarrow{IM}, \overrightarrow{IM'}) \equiv \arg a \equiv \theta$.
Réciproquement, si $IM' = k\,IM$ et $(\overrightarrow{IM}, \overrightarrow{IM'}) \equiv \theta$ pour tout $M \neq I$, alors $z' - z_I = k\,e^{i\theta}(z - z_I)$.
D'où $f$ est la similitude directe de centre $I$, de rapport $k$ et d'angle $\theta$.
:::
