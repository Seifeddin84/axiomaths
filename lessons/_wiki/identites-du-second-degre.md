---
theorem: "Identités du second degré"
---

:::proof[On développe avec la distributivité]
| Étape | Justification |
|---|---|
| $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$ | distributivité, puis $ba = ab$ |
| $(a - b)^2 = \big(a + (-b)\big)^2 = a^2 + 2a(-b) + (-b)^2 = a^2 - 2ab + b^2$ | la ligne précédente avec $-b$ à la place de $b$ |
| $(a - b)(a + b) = a^2 + ab - ba - b^2 = a^2 - b^2$ | distributivité ; $ab - ba = 0$ |
:::

:::redaction
Soient $a$ et $b$ deux réels.
Par distributivité, $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2$, et comme $ba = ab$, on obtient $(a + b)^2 = a^2 + 2ab + b^2$.
En remplaçant $b$ par $-b$ dans cette égalité : $(a - b)^2 = a^2 + 2a(-b) + (-b)^2 = a^2 - 2ab + b^2$.
Enfin, par distributivité, $(a - b)(a + b) = a^2 + ab - ba - b^2$.
D'où $(a - b)(a + b) = a^2 - b^2$.
:::
