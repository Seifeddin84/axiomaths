---
theorem: "Composée de deux symétries orthogonales"
---

:::redaction
Cas des axes parallèles. On choisit un repère orthonormé d'origine $I$ où $\Delta$ est l'axe des ordonnées ; $\Delta'$ a pour équation $x = d$ et $J(d, 0)$.
Pour $M(x, y)$, $S_\Delta(M) = M_1(-x, y)$.
$M_2 = S_{\Delta'}(M_1)$ a la même ordonnée $y$, et le milieu de $[M_1M_2]$ est sur $\Delta'$, donc $\dfrac{-x + x_2}{2} = d$, soit $x_2 = x + 2d$.
Donc $\overrightarrow{MM_2} = (2d, 0) = 2\overrightarrow{IJ}$, qui ne dépend pas de $M$ : $S_{\Delta'}\circ S_\Delta$ est la translation de vecteur $2\overrightarrow{IJ}$.
Cas des axes sécants en $I$. On prend $I$ pour origine d'un repère orthonormé direct ; si $\vec u$ fait l'angle $\alpha$ avec l'axe réel, $S_\Delta(z) = e^{2i\alpha}\bar z$.
De même, si $\vec u\,'$ fait l'angle $\alpha'$, $S_{\Delta'}(z) = e^{2i\alpha'}\bar z$.
Donc $S_{\Delta'}\circ S_\Delta(z) = e^{2i\alpha'}\,\overline{e^{2i\alpha}\bar z} = e^{2i(\alpha' - \alpha)}\,z$ : c'est la rotation de centre $I$ et d'angle $2(\alpha' - \alpha) = 2(\vec u, \vec u\,')$.
Cas des axes perpendiculaires : $2(\vec u, \vec u\,') \equiv \pi$, donc la composée est la symétrie centrale de centre $I$.
Dans l'autre ordre, l'angle est $2(\vec u\,', \vec u) \equiv -\pi \equiv \pi$, d'où $S_{\Delta'}\circ S_\Delta = S_\Delta\circ S_{\Delta'}$.
:::
