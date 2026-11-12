---
theorem: "Tangente"
---

:::proof[La position limite des sécantes]
| Étape | Justification |
|---|---|
| Pour $h \neq 0$, la sécante $(AM)$ avec $M(a + h\,;f(a+h))$ a pour coefficient directeur $\dfrac{f(a+h) - f(a)}{h}$ | coefficient directeur d'une droite par deux points |
| Quand $h \to 0$, ce coefficient tend vers $f'(a)$ | $f$ est dérivable en $a$ |
| La tangente en $A$ est la droite passant par $A$ de coefficient directeur $f'(a)$ | position limite des sécantes $(AM)$ |
| Son équation est $y - f(a) = f'(a)(x - a)$, soit $y = f'(a)(x - a) + f(a)$ | droite de pente $m$ passant par $(a\,;f(a))$ |
| $\vec u(1\,;f'(a))$ dirige cette droite | une droite de coefficient directeur $m$ est dirigée par $(1\,;m)$ |
:::

:::redaction
Pour $h \neq 0$, soit $M(a + h\,;f(a + h))$ un point de $\mathcal C_f$ ; la sécante $(AM)$ a pour coefficient directeur $\dfrac{f(a + h) - f(a)}{h}$.
Or $f$ est dérivable en $a$, donc ce coefficient directeur tend vers $f'(a)$ quand $h$ tend vers $0$.
Par suite les sécantes $(AM)$ tendent vers la droite passant par $A$ de coefficient directeur $f'(a)$ : c'est la tangente à $\mathcal C_f$ en $A$.
Une droite de coefficient directeur $f'(a)$ passant par $A(a\,;f(a))$ a pour équation $y - f(a) = f'(a)(x - a)$.
D'où l'équation $y = f'(a)(x - a) + f(a)$, et le vecteur $\vec u(1\,;f'(a))$ dirige la tangente.
:::
