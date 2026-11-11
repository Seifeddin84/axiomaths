---
theorem: "Aire entre deux courbes"
---

:::proof[On remonte les deux courbes]
| Étape | Justification |
|---|---|
| $g$ est continue sur $[a\,;b]$, donc minorée : il existe $c$ tel que $g + c \geq 0$ | image d'un segment |
| La translation verticale de vecteur $c\,\vec\jmath$ conserve les aires | une translation conserve les aires |
| Le domaine devient celui compris entre $\mathcal C_{f + c}$ et $\mathcal C_{g + c}$, toutes deux au-dessus de l'axe | $f + c \geq g + c \geq 0$ |
| Son aire est l'aire sous $\mathcal C_{f + c}$ moins l'aire sous $\mathcal C_{g + c}$ | le domaine est la différence des deux |
| $\mathcal A = \int_a^b (f + c) - \int_a^b (g + c) = \int_a^b (f - g)$ | intégrale d'une fonction positive = aire ; linéarité |
:::

:::redaction
$g$ est continue sur le segment $[a\,;b]$, donc elle y est minorée : il existe un réel $c$ tel que $g(x) + c \geq 0$ pour tout $x \in [a\,;b]$.
La translation de vecteur $c\,\vec\jmath$ conserve les aires et transforme le domaine en celui compris entre les courbes de $f + c$ et de $g + c$.
Or $f + c \geq g + c \geq 0$, donc ce domaine est le domaine sous la courbe de $f + c$, privé du domaine sous la courbe de $g + c$.
Par suite $\mathcal A = \displaystyle\int_a^b \big(f(x) + c\big)\,dx - \int_a^b \big(g(x) + c\big)\,dx$.
Par linéarité, d'où $\mathcal A = \displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx$.
:::
