---
theorem: "Rappel : bijection et réciproque"
admis: true
---

:::proof[Injective par la monotonie, l'image est un intervalle]
| Étape | Justification |
|---|---|
| Si $x \neq x'$ dans $I$, alors $f(x) \neq f(x')$ | $f$ strictement monotone |
| $f$ est une bijection de $I$ sur $J = f(I)$ | injective, et tout élément de $f(I)$ a un antécédent |
| $J$ est un intervalle | image d'un intervalle par une fonction continue (théorème des valeurs intermédiaires) |
| Si $f$ est croissante et $y < y'$ dans $J$, alors $f^{-1}(y) < f^{-1}(y')$ | sinon $f^{-1}(y) \geq f^{-1}(y')$ donnerait $y \geq y'$ |
| $f^{-1}$ est continue sur $J$ | une fonction monotone dont l'image est l'intervalle $I$ n'a pas de saut |
:::

:::redaction
Si $x \neq x'$ dans $I$, alors $f(x) \neq f(x')$ car $f$ est strictement monotone : $f$ est injective.
Tout élément de $J = f(I)$ a, par définition, un antécédent dans $I$, donc $f$ réalise une bijection de $I$ sur $J$.
Or $f$ est continue sur l'intervalle $I$, donc, d'après le théorème des valeurs intermédiaires, $J$ est un intervalle.
Supposons $f$ strictement croissante et soient $y < y'$ dans $J$ ; si l'on avait $f^{-1}(y) \geq f^{-1}(y')$, on aurait $y \geq y'$ en appliquant $f$, ce qui est faux.
Par suite $f^{-1}(y) < f^{-1}(y')$ : $f^{-1}$ est strictement croissante ; on raisonne de même si $f$ est décroissante.
Enfin, $f^{-1}$ est monotone sur $J$ et son image est l'intervalle $I$ : elle ne peut pas faire de saut (un saut laisserait un trou dans $I$), donc elle est continue sur $J$.
:::
