---
theorem: "Théorème de Fermat"
admis: true
---

:::proof[Multiplier les restes par a]
L'idée : multiplier par $a$ **mélange** les restes $1, 2, \dots, p - 1$ sans en perdre un seul. Avec $p = 7$ et $a = 3$, les restes de $3, 6, 9, 12, 15, 18$ sont $3, 6, 2, 5, 1, 4$ : les mêmes nombres, dans un autre ordre.

| Étape | Justification |
|---|---|
| Pour $1 \leq r \leq p - 1$, $p$ ne divise pas $ar$ | $p$ premier ne divise ni $a$ ni $r$ (lemme de Gauss) |
| Si $ar \equiv as \pmod p$ avec $1 \leq s < r \leq p - 1$, alors $p \mid a(r - s)$, donc $p \mid r - s$ : impossible car $0 < r - s < p$ | lemme de Gauss |
| Les restes de $a, 2a, \dots, (p - 1)a$ sont donc $1, 2, \dots, p - 1$ dans un autre ordre | $p - 1$ restes non nuls, deux à deux distincts |
| En multipliant : $a^{p-1}\,(p - 1)! \equiv (p - 1)! \pmod p$ | même produit, à l'ordre près |
| $p$ divise $\big(a^{p-1} - 1\big)\,(p - 1)!$ et est premier avec $(p - 1)!$ | tous les facteurs de $(p - 1)!$ sont $< p$ |
| Donc $p \mid a^{p-1} - 1$ | lemme de Gauss |
:::

:::redaction
Soit $r$ un entier tel que $1 \leq r \leq p - 1$.
$p$ est premier et ne divise ni $a$ ni $r$, donc $p$ est premier avec $a$ et avec $r$, par suite $p$ ne divise pas $ar$.
Soit $r$ et $s$ tels que $1 \leq s < r \leq p - 1$ et $ar \equiv as \pmod p$.
Alors $p \mid a(r - s)$ ; or $p$ est premier avec $a$, donc, d'après le lemme de Gauss, $p \mid r - s$.
Or $0 < r - s < p$ : contradiction.
Donc les restes de $a, 2a, \dots, (p - 1)a$ modulo $p$ sont non nuls et deux à deux distincts : ce sont $1, 2, \dots, p - 1$ dans un autre ordre.
En faisant le produit, $a \cdot 2a \cdots (p - 1)a \equiv 1 \cdot 2 \cdots (p - 1) \pmod p$, c'est-à-dire $a^{p-1}\,(p - 1)! \equiv (p - 1)! \pmod p$.
Ainsi $p$ divise $\big(a^{p-1} - 1\big)\,(p - 1)!$.
Or chaque facteur de $(p - 1)!$ est compris entre $1$ et $p - 1$, donc $p$ est premier avec $(p - 1)!$.
D'après le lemme de Gauss, $p$ divise $a^{p-1} - 1$, d'où $a^{p-1} \equiv 1 \pmod p$.
:::
