---
theorem: "Limite d'une composée"
---

:::proof[Avec la définition de la limite]
On utilise la définition : $\lim\limits_{x \to a} f(x) = b$ signifie que **tout intervalle ouvert contenant $b$** (de la forme $]A\,;+\infty[$ si $b = +\infty$) contient $f(x)$ dès que $x$ est assez proche de $a$.

| Étape | Justification |
|---|---|
| Soit $J$ un intervalle ouvert contenant $\ell$ | on veut $g\big(f(x)\big) \in J$ pour $x$ proche de $a$ |
| Il existe un intervalle ouvert $K$ contenant $b$ tel que $g(y) \in J$ pour $y \in K$ (et $y$ dans le domaine de $g$) | $\lim\limits_{y \to b} g(y) = \ell$ |
| Pour $x$ assez proche de $a$, $f(x) \in K$ | $\lim\limits_{x \to a} f(x) = b$ |
| Pour ces $x$, $g\big(f(x)\big) \in J$ | on enchaîne les deux étapes |
| Donc $\lim\limits_{x \to a} g\big(f(x)\big) = \ell$ | définition de la limite |
:::

:::redaction
Soit $J$ un intervalle ouvert contenant $\ell$.
Comme $\lim\limits_{y \to b} g(y) = \ell$, il existe un intervalle ouvert $K$ contenant $b$ tel que, pour tout $y \in K$, $g(y) \in J$.
Or $\lim\limits_{x \to a} f(x) = b$, donc il existe un voisinage $V$ de $a$ tel que, pour tout $x \in V$, $f(x) \in K$.
Par suite, pour tout $x \in V$, $g\big(f(x)\big) \in J$.
Ceci étant vrai pour tout intervalle ouvert $J$ contenant $\ell$, on a $\lim\limits_{x \to a} g\big(f(x)\big) = \ell$.
:::
