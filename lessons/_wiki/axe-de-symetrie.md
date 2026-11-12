---
theorem: "Axe de symétrie"
---

:::proof[Le symétrique d'un point de la courbe]
| Étape | Justification |
|---|---|
| Le symétrique de $M(x\,;y)$ par rapport à $\Delta : x = a$ est $M'(2a - x\,;y)$ | $\Delta$ est la médiatrice de $[MM']$ : même ordonnée, abscisses de milieu $a$ |
| $\Delta$ est un axe de symétrie de $\mathcal C$ $\iff$ pour tout $M \in \mathcal C$, $M' \in \mathcal C$ | définition d'un axe de symétrie |
| Pour $M(x\,;f(x))$ avec $x \in D$ : $M' \in \mathcal C \iff 2a - x \in D$ et $f(2a - x) = f(x)$ | $M'(2a - x\,;f(x))$ est sur $\mathcal C$ si son abscisse est dans $D$ et son ordonnée est l'image de son abscisse |
:::

:::redaction
Soit $M(x\,;y)$ un point du plan ; son symétrique par rapport à la droite $\Delta : x = a$ est $M'(2a - x\,;y)$, car $\Delta$ est la médiatrice de $[MM']$.
Or $\Delta$ est un axe de symétrie de $\mathcal C$ si et seulement si le symétrique de tout point de $\mathcal C$ est encore sur $\mathcal C$.
Un point de $\mathcal C$ s'écrit $M(x\,;f(x))$ avec $x \in D$, et son symétrique est $M'(2a - x\,;f(x))$.
Donc $M' \in \mathcal C$ si et seulement si $2a - x \in D$ et $f(2a - x) = f(x)$.
D'où : $\Delta$ est un axe de symétrie de $\mathcal C$ si et seulement si, pour tout $x \in D$, $2a - x \in D$ et $f(2a - x) = f(x)$.
:::
