---
theorem: "Théorème des gendarmes"
---

:::redaction
Soit $\varepsilon > 0$.
Comme $u_n \to \ell$, il existe $N_1$ tel que, pour tout $n \geq N_1$, $\ell - \varepsilon < u_n$.
Comme $w_n \to \ell$, il existe $N_2$ tel que, pour tout $n \geq N_2$, $w_n < \ell + \varepsilon$.
Par hypothèse, il existe $N_3$ tel que, pour tout $n \geq N_3$, $u_n \leq v_n \leq w_n$.
Donc, pour tout $n \geq \max(N_1, N_2, N_3)$, $\ell - \varepsilon < u_n \leq v_n \leq w_n < \ell + \varepsilon$, c'est-à-dire $\lvert v_n - \ell\rvert < \varepsilon$.
D'où $v_n \to \ell$.
:::
