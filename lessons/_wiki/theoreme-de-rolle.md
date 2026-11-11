---
theorem: "Théorème de Rolle"
admis: true
---

:::proof[Par le maximum]
| Étape | Justification |
|---|---|
| $f([a\,;b]) = [m\,;M]$, et $m$ et $M$ sont **atteints** | image d'un segment par une fonction continue |
| Si $m = M$, $f$ est constante et $f'(c) = 0$ pour tout $c \in\, ]a\,;b[$ | dérivée d'une constante |
| Sinon, l'un des deux, disons $M$, diffère de $f(a) = f(b)$ ; il est atteint en un $c$ qui n'est ni $a$ ni $b$ | (si c'est $m$, même raisonnement) |
| Pour $h > 0$ petit : $\dfrac{f(c + h) - f(c)}{h} \leq 0$ ; pour $h < 0$ : $\dfrac{f(c + h) - f(c)}{h} \geq 0$ | $f(c + h) \leq M = f(c)$ |
| À la limite : $f'(c) \leq 0$ et $f'(c) \geq 0$, donc $f'(c) = 0$ | $f$ est dérivable en $c$ |

La seule pièce admise est que $M$ est **atteint**, résultat qui repose sur la complétude de $\mathbb R$.
:::

:::redaction
$f$ est continue sur le segment $[a\,;b]$, donc $f([a\,;b]) = [m\,;M]$ avec $m$ et $M$ atteints.
Si $m = M$, alors $f$ est constante sur $[a\,;b]$, donc $f'(c) = 0$ pour tout $c \in\, ]a\,;b[$.
Sinon, $m < M$, donc l'un des deux est différent de $f(a) = f(b)$ ; supposons que ce soit $M$.
Il existe $c \in [a\,;b]$ tel que $f(c) = M$, et $c \neq a$, $c \neq b$ car $f(a) = f(b) \neq M$ ; donc $c \in\, ]a\,;b[$.
Pour tout $h > 0$ tel que $c + h \in [a\,;b]$, on a $f(c + h) \leq f(c)$, donc $\dfrac{f(c + h) - f(c)}{h} \leq 0$.
Or $f$ est dérivable en $c$, par suite $f'(c) \leq 0$.
De même, pour $h < 0$, $\dfrac{f(c + h) - f(c)}{h} \geq 0$, donc $f'(c) \geq 0$.
D'où $f'(c) = 0$.
Si c'est $m$ qui diffère de $f(a)$, on applique ce qui précède à $-f$.
:::
