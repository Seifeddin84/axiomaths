---
theorem: "Équations avec un centre ou un sommet déplacé"
---

:::proof[Changement d'origine]
| Étape | Justification |
|---|---|
| Dans le repère $(\Omega, \vec\imath, \vec\jmath)$, un point $M(x, y)$ a pour coordonnées $X = x - \alpha$, $Y = y - \beta$ | $\overrightarrow{\Omega M} = \overrightarrow{OM} - \overrightarrow{O\Omega}$ |
| $(y - \beta)^2 = 2p(x - \alpha)$ s'écrit $Y^2 = 2pX$ | on remplace |
| Dans $(\Omega, \vec\imath, \vec\jmath)$, c'est la parabole de sommet $\Omega$, de foyer $X = \dfrac p2$ et de directrice $X = -\dfrac p2$ | équation réduite d'une parabole |
| En revenant à $(x, y)$ : foyer $\left(\alpha + \dfrac p2, \beta\right)$, directrice $x = \alpha - \dfrac p2$ | $x = X + \alpha$, $y = Y + \beta$ |
| De même, $\dfrac{(x - \alpha)^2}{a^2} \pm \dfrac{(y - \beta)^2}{b^2} = 1$ s'écrit $\dfrac{X^2}{a^2} \pm \dfrac{Y^2}{b^2} = 1$ : ellipse ou hyperbole de centre $\Omega$ | équation réduite ; éléments décalés de $(\alpha, \beta)$ |
:::

:::redaction
On considère le repère $(\Omega, \vec\imath, \vec\jmath)$, d'origine $\Omega(\alpha, \beta)$ et de mêmes vecteurs que $(O, \vec\imath, \vec\jmath)$.
Un point $M(x, y)$ y a pour coordonnées $X = x - \alpha$ et $Y = y - \beta$, car $\overrightarrow{\Omega M} = \overrightarrow{OM} - \overrightarrow{O\Omega}$.
L'équation $(y - \beta)^2 = 2p(x - \alpha)$ s'écrit donc $Y^2 = 2pX$.
D'après l'équation réduite d'une parabole, c'est la parabole de sommet $\Omega$, de foyer $\left(\dfrac p2, 0\right)$ et de directrice $X = -\dfrac p2$ dans ce repère.
En revenant aux coordonnées $x = X + \alpha$ et $y = Y + \beta$, le foyer est $\left(\alpha + \dfrac p2, \beta\right)$ et la directrice $x = \alpha - \dfrac p2$.
De même, $\dfrac{(x - \alpha)^2}{a^2} \pm \dfrac{(y - \beta)^2}{b^2} = 1$ s'écrit $\dfrac{X^2}{a^2} \pm \dfrac{Y^2}{b^2} = 1$.
D'où c'est une ellipse (signe $+$) ou une hyperbole (signe $-$) de centre $\Omega$, dont tous les éléments sont ceux de la forme réduite, décalés de $(\alpha, \beta)$.
:::
