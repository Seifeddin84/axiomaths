---
theorem: 'Dérivable en $a$ équivaut à dérivable des deux côtés avec la même valeur'
---

:::proof[Une limite et ses deux limites latérales]
| Étape | Justification |
|---|---|
| On pose $\tau(h) = \dfrac{f(a + h) - f(a)}{h}$ pour $h \neq 0$ | taux de variation de $f$ en $a$ |
| $f$ dérivable en $a$ $\iff$ $\tau$ a une limite finie en $0$ ; dérivable à droite (à gauche) $\iff$ limite finie en $0^+$ (en $0^-$) | définitions |
| Une fonction a une limite $\ell$ en $0$ $\iff$ elle a en $0^+$ et en $0^-$ la même limite $\ell$ | limite et limites latérales |
| D'où l'équivalence, et $f'(a) = f'_d(a) = f'_g(a)$ | les trois limites sont égales |
:::

:::redaction
Pour $h \neq 0$, on pose $\tau(h) = \dfrac{f(a + h) - f(a)}{h}$.
Par définition, $f$ est dérivable en $a$ si et seulement si $\tau$ admet une limite finie en $0$, et cette limite est $f'(a)$.
De même, $f$ est dérivable à droite (resp. à gauche) en $a$ si et seulement si $\tau$ admet une limite finie en $0^+$ (resp. en $0^-$), notée $f'_d(a)$ (resp. $f'_g(a)$).
Or une fonction admet une limite $\ell$ en $0$ si et seulement si elle admet en $0^+$ et en $0^-$ la même limite $\ell$.
Donc $f$ est dérivable en $a$ si et seulement si $f'_d(a)$ et $f'_g(a)$ existent et sont égales.
D'où $f'(a) = f'_d(a) = f'_g(a)$.
:::
