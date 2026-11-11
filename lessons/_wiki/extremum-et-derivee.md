---
theorem: "Extremum et dérivée"
admis: true
---

:::proof[Pourquoi la tangente est horizontale]
Supposons que $f$ admet un maximum local en $a$ : $f(x) \leq f(a)$ pour $x$ dans un intervalle ouvert $J$ contenant $a$.

| Étape | Justification |
|---|---|
| Pour $x \in J$ et $x > a$ : $\dfrac{f(x) - f(a)}{x - a} \leq 0$ | numérateur $\leq 0$, dénominateur $> 0$ |
| Pour $x \in J$ et $x < a$ : $\dfrac{f(x) - f(a)}{x - a} \geq 0$ | numérateur $\leq 0$, dénominateur $< 0$ |
| Quand $x \to a$, les deux quotients tendent vers $f'(a)$ | $f$ est dérivable en $a$ |
| Donc $f'(a) \leq 0$ et $f'(a) \geq 0$, soit $f'(a) = 0$ | une limite de nombres $\leq 0$ est $\leq 0$ |

Pour un minimum, on remplace $f$ par $-f$. La réciproque (changement de signe de $f'$) découle du théorème sur le signe de la dérivée : $f$ croît avant $a$ et décroît après.
:::

:::redaction
Soit $J$ un intervalle ouvert contenant $a$ tel que $f(x) \leq f(a)$ pour tout $x \in J$.
Pour $x \in J$ avec $x > a$, on a $f(x) - f(a) \leq 0$ et $x - a > 0$, donc $\dfrac{f(x) - f(a)}{x - a} \leq 0$.
Or $f$ est dérivable en $a$, donc en faisant tendre $x$ vers $a$ par la droite, $f'(a) \leq 0$.
Pour $x \in J$ avec $x < a$, on a $x - a < 0$, donc $\dfrac{f(x) - f(a)}{x - a} \geq 0$.
Par suite, en faisant tendre $x$ vers $a$ par la gauche, $f'(a) \geq 0$.
D'où $f'(a) = 0$.
Pour un minimum local, on applique ce résultat à $-f$, qui admet alors un maximum local en $a$.
:::
