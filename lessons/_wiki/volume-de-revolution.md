---
theorem: "Volume de révolution"
admis: true
---

:::proof[Le volume entre deux cylindres]
On admet que le solide a un volume, et que le volume $V(x)$ de la partie comprise entre les plans d'abscisses $a$ et $x$ est additif. On prend $h > 0$ ; le cas $h < 0$ est identique.

| Étape | Justification |
|---|---|
| $V(x + h) - V(x)$ est le volume de la tranche entre $x$ et $x + h$ | additivité |
| Sur $[x\,;x + h]$, $f^2$ a un minimum $m_h$ et un maximum $M_h$ | image d'un segment |
| La tranche est entre deux cylindres : $\pi m_h\,h \leq V(x + h) - V(x) \leq \pi M_h\,h$ | volume d'un cylindre $= \pi r^2 h$ |
| $\pi m_h \leq \dfrac{V(x + h) - V(x)}{h} \leq \pi M_h$, et $m_h, M_h \to f(x)^2$ | continuité de $f^2$ |
| Donc $V' = \pi f^2$ et $V(a) = 0$, d'où $V(b) = \pi\int_a^b f(x)^2\,dx$ | gendarmes ; définition de l'intégrale |
:::

:::redaction
Pour $x \in [a\,;b]$, on note $V(x)$ le volume de la partie du solide comprise entre les plans d'abscisses $a$ et $x$.
Soit $h > 0$ tel que $x + h \in [a\,;b]$ ; $V(x + h) - V(x)$ est le volume de la tranche comprise entre $x$ et $x + h$.
$f^2$ est continue sur $[x\,;x + h]$, donc elle y admet un minimum $m_h$ et un maximum $M_h$.
La tranche est comprise entre deux cylindres de hauteur $h$ et de rayons $\sqrt{m_h}$ et $\sqrt{M_h}$, donc $\pi m_h h \leq V(x + h) - V(x) \leq \pi M_h h$.
Par suite $\pi m_h \leq \dfrac{V(x + h) - V(x)}{h} \leq \pi M_h$.
Or $f^2$ est continue en $x$, donc $m_h$ et $M_h$ tendent vers $f(x)^2$ ; d'après le théorème des gendarmes, $V'(x) = \pi f(x)^2$.
Ainsi $V$ est la primitive de $\pi f^2$ qui s'annule en $a$, d'où $V(b) = \pi\displaystyle\int_a^b f(x)^2\,dx$.
:::
