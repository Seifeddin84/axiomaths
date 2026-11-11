---
theorem: "Expression analytique du produit vectoriel"
---

:::proof[On développe sur la base]
| Étape | Justification |
|---|---|
| $\vec\imath\wedge\vec\jmath = \vec k$, $\vec\jmath\wedge\vec k = \vec\imath$, $\vec k\wedge\vec\imath = \vec\jmath$ | base orthonormée directe : vecteur unitaire, orthogonal aux deux, sens direct |
| $\vec\imath\wedge\vec\imath = \vec\jmath\wedge\vec\jmath = \vec k\wedge\vec k = \vec 0$ et $\vec\jmath\wedge\vec\imath = -\vec k$, etc. | vecteurs colinéaires ; antisymétrie |
| $\vec u\wedge\vec v = (a\vec\imath + b\vec\jmath + c\vec k)\wedge(a'\vec\imath + b'\vec\jmath + c'\vec k)$ se développe en neuf termes | bilinéarité du produit vectoriel |
| Il reste $ab'\vec k - ac'\vec\jmath - ba'\vec k + bc'\vec\imath + ca'\vec\jmath - cb'\vec\imath$ | les trois termes $\vec\imath\wedge\vec\imath$, … sont nuls |
| $= (bc' - cb')\vec\imath + (ca' - ac')\vec\jmath + (ab' - ba')\vec k$ | on regroupe |
:::

:::redaction
Le repère est orthonormé direct, donc $\vec\imath\wedge\vec\jmath = \vec k$, $\vec\jmath\wedge\vec k = \vec\imath$ et $\vec k\wedge\vec\imath = \vec\jmath$.
Par antisymétrie, $\vec\jmath\wedge\vec\imath = -\vec k$, $\vec k\wedge\vec\jmath = -\vec\imath$, $\vec\imath\wedge\vec k = -\vec\jmath$, et $\vec\imath\wedge\vec\imath = \vec\jmath\wedge\vec\jmath = \vec k\wedge\vec k = \vec 0$.
Par bilinéarité, $\vec u\wedge\vec v = (a\vec\imath + b\vec\jmath + c\vec k)\wedge(a'\vec\imath + b'\vec\jmath + c'\vec k)$ se développe en neuf termes.
Il reste $\vec u\wedge\vec v = ab'\vec k - ac'\vec\jmath - ba'\vec k + bc'\vec\imath + ca'\vec\jmath - cb'\vec\imath$.
D'où $\vec u\wedge\vec v = (bc' - cb')\vec\imath + (ca' - ac')\vec\jmath + (ab' - ba')\vec k$.
:::
