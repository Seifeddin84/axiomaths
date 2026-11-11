---
theorem: "En fonction des composantes"
---

:::proof[Avec le produit scalaire]
| Étape | Justification |
|---|---|
| $\vec u\cdot\vec v = \lVert\vec u\rVert\,\lVert\vec v\rVert\cos(\vec u, \vec v)$ et $\vec u\cdot\vec v = xx' + yy'$ | deux expressions du produit scalaire |
| donc $\cos(\vec u, \vec v) = \dfrac{xx' + yy'}{\lVert\vec u\rVert\,\lVert\vec v\rVert}$ | on divise |
| Soit $\vec w(-y\,;x)$ : c'est $\vec u$ tourné de $\dfrac\pi2$, donc $\lVert\vec w\rVert = \lVert\vec u\rVert$ et $(\vec w, \vec v) \equiv (\vec u, \vec v) - \dfrac\pi2$ | quart de tour direct ; relation de Chasles |
| $\vec w\cdot\vec v = \lVert\vec u\rVert\,\lVert\vec v\rVert\cos\left((\vec u, \vec v) - \dfrac\pi2\right) = \lVert\vec u\rVert\,\lVert\vec v\rVert\sin(\vec u, \vec v)$ | angles associés |
| Or $\vec w\cdot\vec v = -yx' + xy'$ | expression analytique |
:::

:::redaction
D'une part $\vec u\cdot\vec v = \lVert\vec u\rVert\,\lVert\vec v\rVert\cos(\vec u, \vec v)$, d'autre part $\vec u\cdot\vec v = xx' + yy'$.
Donc $\cos(\vec u, \vec v) = \dfrac{xx' + yy'}{\lVert\vec u\rVert\,\lVert\vec v\rVert}$.
Soit $\vec w(-y\,;x)$, image de $\vec u$ par le quart de tour direct : $\lVert\vec w\rVert = \lVert\vec u\rVert$ et $(\vec u, \vec w) \equiv \dfrac\pi2$.
D'après la relation de Chasles, $(\vec w, \vec v) \equiv (\vec u, \vec v) - \dfrac\pi2$.
Par suite $\vec w\cdot\vec v = \lVert\vec u\rVert\,\lVert\vec v\rVert\cos\left((\vec u, \vec v) - \dfrac\pi2\right) = \lVert\vec u\rVert\,\lVert\vec v\rVert\sin(\vec u, \vec v)$.
Or $\vec w\cdot\vec v = -yx' + xy'$.
D'où $\sin(\vec u, \vec v) = \dfrac{xy' - x'y}{\lVert\vec u\rVert\,\lVert\vec v\rVert}$.
:::
