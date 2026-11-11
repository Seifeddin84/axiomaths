---
theorem: "Inégalité des accroissements finis"
---

:::redaction
Soit $a$ et $b$ dans $I$ ; si $a = b$, l'inégalité est évidente, et on peut supposer $a < b$.
$f$ est dérivable sur $I$, donc continue sur $[a\,;b]$ et dérivable sur $]a\,;b[$.
D'après le théorème des accroissements finis, il existe $c \in\, ]a\,;b[$ tel que $f(b) - f(a) = f'(c)\,(b - a)$.
Donc $\lvert f(b) - f(a)\rvert = \lvert f'(c)\rvert\,\lvert b - a\rvert$.
Or $\lvert f'(c)\rvert \leq k$, d'où $\lvert f(b) - f(a)\rvert \leq k\,\lvert b - a\rvert$.
:::
