---
theorem: "Inégalité de Bernoulli"
---

:::redaction
Soit $a \geq 0$. Montrons par récurrence que, pour tout entier $n$, $(1 + a)^n \geq 1 + na$.
Initialisation : pour $n = 0$, $(1 + a)^0 = 1 \geq 1 + 0 \times a$.
Hérédité : supposons $(1 + a)^n \geq 1 + na$ pour un entier $n$.
Comme $1 + a \geq 0$, on a $(1 + a)^{n+1} = (1 + a)^n(1 + a) \geq (1 + na)(1 + a)$.
Or $(1 + na)(1 + a) = 1 + (n + 1)a + na^2$ et $na^2 \geq 0$, donc $(1 + a)^{n+1} \geq 1 + (n + 1)a$.
Conclusion : pour tout entier $n$, $(1 + a)^n \geq 1 + na$.
:::
