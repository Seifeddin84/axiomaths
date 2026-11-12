---
theorem: "Dérivée d'une racine"
---

:::proof[Multiplier par la quantité conjuguée]
| Étape | Justification |
|---|---|
| Pour $x \in I$ et $h \neq 0$ avec $x + h \in I$ : $\dfrac{\sqrt{u(x+h)} - \sqrt{u(x)}}{h} = \dfrac{u(x+h) - u(x)}{h} \cdot \dfrac{1}{\sqrt{u(x+h)} + \sqrt{u(x)}}$ | on multiplie par la quantité conjuguée $\sqrt{u(x+h)} + \sqrt{u(x)} > 0$ |
| $\dfrac{u(x+h) - u(x)}{h} \to u'(x)$ | $u$ est dérivable en $x$ |
| $\sqrt{u(x+h)} \to \sqrt{u(x)}$ | $u$ dérivable donc continue, et $\sqrt{\ }$ continue |
| Le taux tend vers $\dfrac{u'(x)}{2\sqrt{u(x)}}$ | $\sqrt{u(x)} > 0$, limite d'un produit et d'un quotient |
:::

:::redaction
Soit $x \in I$ et $h \neq 0$ tel que $x + h \in I$.
On multiplie par la quantité conjuguée $\sqrt{u(x+h)} + \sqrt{u(x)}$, strictement positive car $u > 0$ :
$\dfrac{\sqrt{u(x+h)} - \sqrt{u(x)}}{h} = \dfrac{u(x+h) - u(x)}{h} \times \dfrac{1}{\sqrt{u(x+h)} + \sqrt{u(x)}}$.
Or $u$ est dérivable en $x$, donc $\dfrac{u(x+h) - u(x)}{h}$ tend vers $u'(x)$ quand $h \to 0$.
De plus $u$ est continue en $x$, donc $\sqrt{u(x+h)}$ tend vers $\sqrt{u(x)}$.
Par suite le taux de variation tend vers $\dfrac{u'(x)}{2\sqrt{u(x)}}$, qui est fini car $u(x) > 0$.
D'où $\sqrt u$ est dérivable sur $I$ et $\left(\sqrt u\right)' = \dfrac{u'}{2\sqrt u}$.
:::
