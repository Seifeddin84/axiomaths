---
theorem: "Multiplier par a modulo b"
---

:::redaction
Soit $i$ et $j$ tels que $0 \leq i \leq j \leq b - 1$ et $ai \equiv aj\ [b]$.
Alors $b \mid a(j - i)$ ; or $a \wedge b = 1$, donc, d'après le lemme de Gauss, $b \mid j - i$.
Comme $0 \leq j - i \leq b - 1 < b$, on a $j - i = 0$, c'est-à-dire $i = j$.
Donc les restes de $0\cdot a, 1\cdot a, \dots, (b - 1)a$ dans la division par $b$ sont deux à deux distincts.
Ce sont $b$ éléments distincts de $\{0, 1, \dots, b - 1\}$, qui a $b$ éléments : ils sont donc tous atteints.
En particulier, le reste $1$ est atteint une seule fois : il existe un unique $u \in \{0, \dots, b - 1\}$ tel que $au \equiv 1\ [b]$.
:::
