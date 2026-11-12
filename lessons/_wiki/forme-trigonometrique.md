---
theorem: "Forme trigonométrique"
---

:::proof[Un point du cercle trigonométrique]
| Étape | Justification |
|---|---|
| $z = a + ib \neq 0$, $r = \lvert z\rvert = \sqrt{a^2 + b^2} > 0$ | définition du module |
| $\left(\dfrac ar\right)^2 + \left(\dfrac br\right)^2 = \dfrac{a^2 + b^2}{r^2} = 1$ | le point $\left(\frac ar\,;\frac br\right)$ est sur le cercle trigonométrique |
| Il existe $\theta$ tel que $\cos\theta = \dfrac ar$ et $\sin\theta = \dfrac br$ ; c'est un argument de $z$ | tout point du cercle trigonométrique s'écrit $(\cos\theta\,;\sin\theta)$ |
| $z = a + ib = r\cos\theta + ir\sin\theta = r(\cos\theta + i\sin\theta)$ | $a = r\cos\theta$ et $b = r\sin\theta$ |
| Réciproque : si $z = r(\cos\theta + i\sin\theta)$ avec $r > 0$, alors $\lvert z\rvert = r\sqrt{\cos^2\theta + \sin^2\theta} = r$ | module d'un nombre de parties réelle et imaginaire $r\cos\theta$, $r\sin\theta$ |
| et $\cos\theta = \dfrac{a}{\lvert z\rvert}$, $\sin\theta = \dfrac{b}{\lvert z\rvert}$, donc $\arg(z) \equiv \theta\ [2\pi]$ | définition de l'argument |
:::

:::redaction
Soit $z = a + ib$ un nombre complexe non nul et $r = \lvert z\rvert = \sqrt{a^2 + b^2}$, donc $r > 0$.
On a $\left(\dfrac ar\right)^2 + \left(\dfrac br\right)^2 = \dfrac{a^2 + b^2}{r^2} = 1$, donc le point $\left(\dfrac ar\,;\dfrac br\right)$ est sur le cercle trigonométrique.
Par suite il existe un réel $\theta$ tel que $\cos\theta = \dfrac ar$ et $\sin\theta = \dfrac br$ : c'est un argument de $z$.
D'où $z = r\cos\theta + ir\sin\theta = r(\cos\theta + i\sin\theta)$.
Réciproquement, si $z = r(\cos\theta + i\sin\theta)$ avec $r > 0$, alors $\lvert z\rvert = \sqrt{r^2\cos^2\theta + r^2\sin^2\theta} = r$.
Donc $\cos\theta = \dfrac{a}{\lvert z\rvert}$ et $\sin\theta = \dfrac{b}{\lvert z\rvert}$, c'est-à-dire $\arg(z) \equiv \theta\ [2\pi]$.
:::
