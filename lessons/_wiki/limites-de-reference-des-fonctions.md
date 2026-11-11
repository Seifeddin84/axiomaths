---
theorem: "Limites de référence des fonctions"
---

:::redaction
Soit $x \in \left]0\,;\dfrac\pi2\right[$.
En comparant les aires du triangle, du secteur et du grand triangle sur le cercle trigonométrique, on a $\sin x < x < \tan x$.
Comme $\sin x > 0$, on obtient $1 < \dfrac{x}{\sin x} < \dfrac{1}{\cos x}$, donc $\cos x < \dfrac{\sin x}{x} < 1$.
Or $\lim\limits_{x \to 0} \cos x = 1$, donc, d'après le théorème des gendarmes, $\lim\limits_{x \to 0^+} \dfrac{\sin x}{x} = 1$.
La fonction $x \mapsto \dfrac{\sin x}{x}$ est paire, par suite $\lim\limits_{x \to 0^-} \dfrac{\sin x}{x} = 1$ aussi.
Ensuite $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \times \dfrac{1}{\cos x}$, donc $\lim\limits_{x \to 0} \dfrac{\tan x}{x} = 1 \times 1 = 1$.
Enfin $1 - \cos x = 2\sin^2\dfrac x2$, donc $\dfrac{1 - \cos x}{x^2} = \dfrac12\left(\dfrac{\sin\frac x2}{\frac x2}\right)^2$.
Or $\dfrac x2 \to 0$, d'où $\lim\limits_{x \to 0} \dfrac{1 - \cos x}{x^2} = \dfrac12 \times 1^2 = \dfrac12$.
:::
