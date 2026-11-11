---
theorem: "Forme réduite"
---

:::proof[Les deux écritures complexes]
| Étape | Justification |
|---|---|
| $h(z) = z_I + k(z - z_I)$ et $r(z) = z_I + e^{i\theta}(z - z_I)$ | homothétie et rotation de centre $I$ |
| $h\big(r(z)\big) = z_I + k\,e^{i\theta}(z - z_I)$ | on remplace |
| $r\big(h(z)\big) = z_I + e^{i\theta}k(z - z_I)$, la même chose | le produit des complexes est commutatif |
| c'est l'écriture de $f$ : $z' - z_I = k\,e^{i\theta}(z - z_I)$ | centre d'une similitude directe |
:::

:::redaction
Soit $z_I$ l'affixe de $I$.
On a $h : z \mapsto z_I + k(z - z_I)$ et $r : z \mapsto z_I + e^{i\theta}(z - z_I)$.
Donc $h\circ r : z \mapsto z_I + k\,e^{i\theta}(z - z_I)$.
De même $r\circ h : z \mapsto z_I + e^{i\theta}k(z - z_I)$, qui est la même application.
Or $f$ s'écrit $z' - z_I = k\,e^{i\theta}(z - z_I)$.
D'où $f = h\circ r = r\circ h$.
:::
