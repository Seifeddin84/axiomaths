---
theorem: "Comparaison"
---

:::proof[Avec la définition]
| Étape | Justification |
|---|---|
| Soit $A$ un réel ; il existe $N_1$ tel que $u_n > A$ pour $n \geq N_1$ | $u_n \to +\infty$ |
| Il existe $N_2$ tel que $u_n \leq v_n$ pour $n \geq N_2$ | hypothèse |
| Pour $n \geq \max(N_1, N_2)$ : $v_n \geq u_n > A$ | on enchaîne |
| Donc $v_n \to +\infty$ | définition |
| Le second point s'obtient en appliquant le premier à $-v_n \leq -u_n$ | $-v_n \to +\infty$ |
:::

:::redaction
Soit $A$ un réel.
Comme $u_n \to +\infty$, il existe un entier $N_1$ tel que, pour tout $n \geq N_1$, $u_n > A$.
Par hypothèse, il existe un entier $N_2$ tel que, pour tout $n \geq N_2$, $u_n \leq v_n$.
Donc, pour tout $n \geq \max(N_1, N_2)$, $v_n \geq u_n > A$.
Par suite $v_n \to +\infty$.
Si $v_n \to -\infty$, alors $-v_n \to +\infty$ et $-v_n \leq -u_n$ à partir d'un certain rang ; d'après ce qui précède, $-u_n \to +\infty$, d'où $u_n \to -\infty$.
:::
