---
theorem: 'Hyperbole de centre $I\left(-\frac{d}{c}\,;\frac{a}{c}\right)$'
---

:::proof[On se ramène à la fonction inverse]
| Étape | Justification |
|---|---|
| $ax + b = \dfrac ac\,(cx + d) + b - \dfrac{ad}{c}$, donc $f(x) = \dfrac ac + \dfrac{k}{x + \frac dc}$ avec $k = \dfrac{bc - ad}{c^2} \neq 0$ | division : $c \neq 0$ et $bc - ad \neq 0$ |
| Dans le repère $\left(I\,;\vec\imath, \vec\jmath\right)$, $X = x + \dfrac dc$ et $Y = y - \dfrac ac$ | changement d'origine en $I\left(-\frac dc\,;\frac ac\right)$ |
| $M(x\,;y) \in \mathcal C_f \iff Y = \dfrac kX$ | on remplace dans $y = f(x)$ |
| C'est l'hyperbole de la fonction $X \mapsto \dfrac kX$ : centre $I$, asymptotes $X = 0$ et $Y = 0$, soit $x = -\dfrac dc$ et $y = \dfrac ac$ | courbe de référence |
| $f$ est décroissante sur chaque intervalle si $k > 0$, croissante si $k < 0$, et $k$ a le signe de $bc - ad$ | $X \mapsto \frac1X$ est décroissante sur chaque intervalle ; $c^2 > 0$ |
:::

:::redaction
Comme $c \neq 0$, on écrit $ax + b = \dfrac ac\,(cx + d) + b - \dfrac{ad}{c}$, donc, pour $x \neq -\dfrac dc$, $f(x) = \dfrac ac + \dfrac{k}{x + \frac dc}$ avec $k = \dfrac{bc - ad}{c^2}$.
Or $bc - ad \neq 0$, donc $k \neq 0$.
On se place dans le repère d'origine $I\left(-\frac dc\,;\frac ac\right)$ : $X = x + \dfrac dc$ et $Y = y - \dfrac ac$.
Par suite $M(x\,;y) \in \mathcal C_f \iff Y = \dfrac kX$ : $\mathcal C_f$ est l'hyperbole de centre $I$ et d'asymptotes $X = 0$ et $Y = 0$, c'est-à-dire $x = -\dfrac dc$ et $y = \dfrac ac$.
La fonction $X \mapsto \dfrac 1X$ est décroissante sur chaque intervalle de son domaine, donc $X \mapsto \dfrac kX$ l'est si $k > 0$ et est croissante si $k < 0$.
D'où, $c^2 > 0$ donnant à $k$ le signe de $bc - ad$ : $f$ est décroissante sur chaque intervalle si $bc - ad > 0$, croissante si $bc - ad < 0$.
:::
