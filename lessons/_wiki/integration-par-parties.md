---
theorem: "Intégration par parties"
---

:::redaction
$u$ et $v$ sont dérivables sur $[a\,;b]$, donc $uv$ l'est aussi et $(uv)' = u'v + uv'$.
Les fonctions $u'v$ et $uv'$ sont continues, donc $uv$ est une primitive de la fonction continue $u'v + uv'$.
Par définition de l'intégrale, $\displaystyle\int_a^b \big(u'(x)v(x) + u(x)v'(x)\big)\,dx = \Big[u(x)\,v(x)\Big]_a^b$.
Par linéarité, $\displaystyle\int_a^b u'(x)v(x)\,dx + \int_a^b u(x)v'(x)\,dx = \Big[u(x)\,v(x)\Big]_a^b$.
D'où $\displaystyle\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,dx$.
:::
