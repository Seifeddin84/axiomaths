---
theorem: "Signe de la dérivée et variations"
admis: true
---

:::proof[Par les accroissements finis]
| Étape | Justification |
|---|---|
| Si $f$ est croissante et $h \neq 0$, $\dfrac{f(x + h) - f(x)}{h} \geq 0$ | numérateur et $h$ de même signe |
| Donc $f'(x) \geq 0$ | passage à la limite quand $h \to 0$ |
| Réciproquement, soit $x < y$ dans $I$ : il existe $c \in\, ]x\,;y[$ tel que $f(y) - f(x) = f'(c)\,(y - x)$ | théorème des accroissements finis |
| Si $f' \geq 0$ : $f(y) - f(x) \geq 0$, donc $f$ est croissante | $f'(c) \geq 0$ et $y - x > 0$ |
| Si $f' = 0$ : $f(y) = f(x)$, donc $f$ est constante | $f'(c) = 0$ |
| Si $f' > 0$ sauf en des points isolés : $f$ est strictement croissante entre deux points isolés consécutifs, puis sur $I$ | $f'(c) > 0$ ; on recolle les morceaux |

Pourquoi est-ce admis en 3ème ? Parce que les accroissements finis reposent sur le théorème de Rolle, qui demande qu'une fonction continue sur un segment **atteigne** son maximum.
:::

:::redaction
Supposons $f$ croissante sur $I$ et soit $x \in I$.
Pour $h \neq 0$ tel que $x + h \in I$, $f(x + h) - f(x)$ a le signe de $h$, donc $\dfrac{f(x + h) - f(x)}{h} \geq 0$.
Or $f$ est dérivable en $x$, donc $f'(x) \geq 0$.
Réciproquement, supposons $f' \geq 0$ sur $I$ et soit $x < y$ deux éléments de $I$.
$f$ est continue sur $[x\,;y]$ et dérivable sur $]x\,;y[$, donc, d'après le théorème des accroissements finis, il existe $c \in\, ]x\,;y[$ tel que $f(y) - f(x) = f'(c)\,(y - x)$.
Or $f'(c) \geq 0$ et $y - x > 0$, donc $f(y) \geq f(x)$.
Par suite, $f$ est croissante sur $I$.
Si $f' = 0$ sur $I$, le même calcul donne $f(y) = f(x)$ : $f$ est constante.
Si $f' > 0$ sauf en des points isolés, on obtient $f(y) > f(x)$ entre deux tels points consécutifs, d'où la stricte croissance sur $I$.
:::
