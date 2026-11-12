---
theorem: "Règles de dérivation"
---

:::proof[Chaque règle par le taux de variation]
| Étape | Justification |
|---|---|
| $\dfrac{(f+g)(x+h) - (f+g)(x)}{h} = \dfrac{f(x+h) - f(x)}{h} + \dfrac{g(x+h) - g(x)}{h} \to f'(x) + g'(x)$ ; de même $(\lambda f)' = \lambda f'$ | limite d'une somme, d'un produit par une constante |
| $\dfrac{f(x+h)g(x+h) - f(x)g(x)}{h} = \dfrac{f(x+h) - f(x)}{h}\,g(x+h) + f(x)\,\dfrac{g(x+h) - g(x)}{h} \to f'g + fg'$ | on ajoute et retranche $f(x)g(x+h)$ ; $g$ dérivable donc continue |
| $\dfrac{\frac{1}{g(x+h)} - \frac{1}{g(x)}}{h} = -\dfrac{g(x+h) - g(x)}{h} \cdot \dfrac{1}{g(x+h)\,g(x)} \to -\dfrac{g'}{g^2}$ | même dénominateur ; $g(x) \neq 0$ et $g$ continue |
| $\dfrac fg = f \times \dfrac1g$ donne $\left(\dfrac fg\right)' = \dfrac{f'}{g} - \dfrac{fg'}{g^2} = \dfrac{f'g - fg'}{g^2}$ | règles du produit et de l'inverse |
| $(f^n)' = n f' f^{n-1}$ par récurrence : $(f^{n+1})' = (f \cdot f^n)' = f' f^n + f \cdot n f' f^{n-1} = (n+1) f' f^n$ | règle du produit ; vrai pour $n = 2$ ($(f^2)' = 2ff'$) |
| $\left(\sqrt f\right)' = \dfrac{f'}{2\sqrt f}$ | quantité conjuguée (théorème « Dérivée d'une racine ») |
| $\dfrac{f(a(x+h) + b) - f(ax + b)}{h} = a\,\dfrac{f(ax + b + ah) - f(ax + b)}{ah} \to a\,f'(ax + b)$ | on pose $k = ah \to 0$ (pour $a \neq 0$ ; si $a = 0$ la fonction est constante) |
:::

:::redaction
Soit $x$ un point où $f$ et $g$ sont dérivables et $h \neq 0$ petit.
Le taux de variation de $f + g$ est la somme des taux de $f$ et de $g$, donc il tend vers $f'(x) + g'(x)$ ; de même celui de $\lambda f$ tend vers $\lambda f'(x)$.
Pour le produit, on ajoute et on retranche $f(x)g(x+h)$ : le taux s'écrit $\dfrac{f(x+h) - f(x)}{h}\,g(x+h) + f(x)\,\dfrac{g(x+h) - g(x)}{h}$.
Or $g$ est dérivable donc continue en $x$, donc ce taux tend vers $f'(x)g(x) + f(x)g'(x)$.
Pour l'inverse, avec $g(x) \neq 0$, le taux vaut $-\dfrac{g(x+h) - g(x)}{h} \times \dfrac{1}{g(x+h)\,g(x)}$, qui tend vers $-\dfrac{g'(x)}{g(x)^2}$.
Par suite $\left(\dfrac fg\right)' = \left(f \times \dfrac1g\right)' = \dfrac{f'}{g} - \dfrac{fg'}{g^2} = \dfrac{f'g - fg'}{g^2}$.
Par récurrence sur $n \geq 2$, la règle du produit donne $(f^{n+1})' = f' f^n + f \times n f' f^{n-1} = (n+1)f' f^n$.
Pour $\sqrt f$, on multiplie le taux par la quantité conjuguée et on obtient $\dfrac{f'}{2\sqrt f}$.
Enfin, pour $a \neq 0$, le taux de $x \mapsto f(ax + b)$ s'écrit $a \times \dfrac{f(ax + b + ah) - f(ax + b)}{ah}$, qui tend vers $a\,f'(ax + b)$ ; d'où toutes les règles du tableau.
:::
