---
theorem: "Une isométrie sans point fixe"
---

:::redaction
Soit $O$ un point, $O' = f(O)$ et $\vec u = \overrightarrow{OO'}$ ; alors $g = t_{-\vec u}\circ f$ est une isométrie qui fixe $O$, et $f = t_{\vec u}\circ g$.
Donc $g$ est l'identité, une rotation de centre $O$ ou une symétrie d'axe passant par $O$.
Si $g = \mathrm{Id}$, $f = t_{\vec u}$, et $\vec u \neq \vec 0$ car $f$ n'a pas de point fixe.
Si $g$ est une rotation d'angle $\alpha \not\equiv 0$, avec $O$ pour origine, $f(z) = e^{i\alpha}z + u$.
Or $f(z) = z$ équivaut à $z = \dfrac{u}{1 - e^{i\alpha}}$, donc $f$ aurait un point fixe : ce cas est exclu.
Si $g = S_\Delta$ avec $O \in \Delta$, on écrit $\vec u = \vec u_\parallel + \vec u_\perp$, parallèle et orthogonal à $\Delta$.
$t_{\vec u_\perp} = S_{\Delta'}\circ S_\Delta$, où $\Delta'$ est l'image de $\Delta$ par $t_{\frac12\vec u_\perp}$, donc $t_{\vec u_\perp}\circ S_\Delta = S_{\Delta'}$.
Par suite $f = t_{\vec u_\parallel}\circ S_{\Delta'}$.
Si $\vec u_\parallel = \vec 0$, $f = S_{\Delta'}$ aurait des points fixes ; d'où $\vec u_\parallel \neq \vec 0$ et $f$ est une symétrie glissante.
:::
