---
theorem: "Suites adjacentes"
---

:::redaction
Soit $(u_n)$ croissante et $(v_n)$ décroissante avec $\lim (v_n - u_n) = 0$.
$v_{n+1} - u_{n+1} \leq v_n - u_n$, donc $(v_n - u_n)$ est décroissante.
Une suite décroissante de limite $0$ reste positive, donc $v_n - u_n \geq 0$ pour tout $n$.
Par suite $u_n \leq v_n \leq v_0$ : $(u_n)$ est croissante et majorée, donc elle converge vers un réel $\ell$.
De même $v_n \geq u_n \geq u_0$ : $(v_n)$ est décroissante et minorée, donc elle converge vers un réel $\ell'$.
Or $\ell' - \ell = \lim (v_n - u_n) = 0$, donc $\ell = \ell'$.
Enfin $(u_n)$ croît vers $\ell$ et $(v_n)$ décroît vers $\ell$, d'où $u_n \leq \ell \leq v_n$ pour tout $n$.
:::
