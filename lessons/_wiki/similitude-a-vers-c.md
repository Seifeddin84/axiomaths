---
theorem: "Une similitude de A vers C et de B vers D"
---

:::proof[Un déplacement, puis une homothétie]
On pose $k = \dfrac{CD}{AB}$.

| Étape | Justification |
|---|---|
| Soit $B_1$ le point de la demi-droite $[CD)$ tel que $CB_1 = AB$ | $C \neq D$ |
| Il existe un déplacement $\varphi$ tel que $\varphi(A) = C$ et $\varphi(B) = B_1$ | $AB = CB_1 \neq 0$ |
| Soit $h$ l'homothétie de centre $C$ et de rapport $k > 0$ : $h(C) = C$ et $h(B_1) = D$ | $\overrightarrow{CD} = k\,\overrightarrow{CB_1}$ : même sens et $CD = k\,CB_1$ |
| $h\circ\varphi$ est une similitude directe qui envoie $A$ sur $C$ et $B$ sur $D$ | $h$ ($k > 0$) et $\varphi$ conservent les angles orientés |
| Avec un antidéplacement $\psi$ à la place de $\varphi$, $h\circ\psi$ est une similitude indirecte qui convient | $\psi$ renverse les angles |
| Si $f$ et $g$ conviennent et sont de même nature, $g^{-1}\circ f$ est une similitude directe de rapport $1$ qui fixe $A$ et $B$ | rapport $\dfrac1k\times k$ ; directe∘directe ou indirecte∘indirecte |
| C'est un déplacement qui fixe deux points distincts : c'est l'identité, donc $f = g$ | unicité des déplacements |
:::

:::redaction
On pose $k = \dfrac{CD}{AB}$ et on note $B_1$ le point de la demi-droite $[CD)$ tel que $CB_1 = AB$.
Comme $AB = CB_1 \neq 0$, il existe un déplacement $\varphi$ tel que $\varphi(A) = C$ et $\varphi(B) = B_1$.
Soit $h$ l'homothétie de centre $C$ et de rapport $k$ ; on a $\overrightarrow{CD} = k\,\overrightarrow{CB_1}$, donc $h(B_1) = D$, et $h(C) = C$.
$h$ est de rapport $k > 0$ et $\varphi$ est un déplacement : tous deux conservent les angles orientés.
Donc $h\circ\varphi$ est une similitude directe, et elle envoie $A$ sur $C$ et $B$ sur $D$.
De même, avec un antidéplacement $\psi$ tel que $\psi(A) = C$ et $\psi(B) = B_1$, $h\circ\psi$ est une similitude indirecte qui convient.
Soit $f$ et $g$ deux similitudes de même nature qui conviennent.
$g^{-1}\circ f$ est une similitude directe de rapport $1$, donc un déplacement, qui fixe $A$ et $B$.
Or un déplacement qui fixe deux points distincts est l'identité, d'où $f = g$.
:::
