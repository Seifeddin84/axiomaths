---
uid: "0000202"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 5"
title: "Fonction définie par morceaux : limites en l'infini et en 2"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "fonction-definie-par-morceaux", "racine-carree", "limite-a-gauche-et-a-droite", "continuite"]
---

Soit la fonction $f$ définie par le système suivant :

$$
f(x) = \begin{cases} 3x^2 - 5x - 2 & \text{si } x \leq 2 \\ \sqrt{x^2 + 2x - 8} & \text{si } x > 2 \end{cases}
$$

1. Vérifier que le domaine de $f$ est $\mathbb{R}$.

2. Calculer les limites suivantes : $\displaystyle\lim_{x \to \pm\infty} f(x)$ et $\displaystyle\lim_{x \to \pm\infty} \dfrac{f(x)}{x}$.

3. a. Calculer $\displaystyle\lim_{x \to 2^+} f(x)$ et $\displaystyle\lim_{x \to 2^-} f(x)$.

   b. $f$ admet-elle une limite en $2$ ?

---

## Solution

1. $f$ est définie par deux formules ; il faut vérifier que chacune a un sens sur son intervalle.

   - Pour $x \leq 2$ : $f(x) = 3x^2 - 5x - 2$ est un polynôme, défini pour tout réel, donc sur $]-\infty, 2]$.

   - Pour $x > 2$ : $f(x) = \sqrt{x^2 + 2x - 8}$ n'existe que si $x^2 + 2x - 8 \geq 0$. Le discriminant est $\Delta = 4 + 32 = 36$, donc les racines sont $\dfrac{-2 - 6}{2} = -4$ et $\dfrac{-2 + 6}{2} = 2$ et $x^2 + 2x - 8 = (x - 2)(x + 4)$.

     Pour $x > 2$, on a $x - 2 > 0$ et $x + 4 > 0$ : le produit est strictement positif, la racine existe.

   Les deux intervalles $]-\infty, 2]$ et $]2, +\infty[$ recouvrent $\mathbb{R}$ : le domaine de $f$ est bien $\mathbb{R}$.

2. **Limites de $f$.**

   - En $-\infty$, on est dans le cas $x \leq 2$ : $f(x) = 3x^2 - 5x - 2$. Le terme dominant est $3x^2 \to +\infty$ et $-5x \to +\infty$ aussi : on ajoute des $+\infty$.

     $\displaystyle\lim_{x \to -\infty} f(x) = +\infty$.

   - En $+\infty$, on est dans le cas $x > 2$ : $f(x) = \sqrt{x^2 + 2x - 8}$. Sous la racine, $x^2 + 2x - 8 = x^2\left(1 + \dfrac{2}{x} - \dfrac{8}{x^2}\right) \to +\infty$.

     $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

   **Limites de $\dfrac{f(x)}{x}$.**

   - En $-\infty$ : $\dfrac{f(x)}{x} = \dfrac{3x^2 - 5x - 2}{x} = 3x - 5 - \dfrac{2}{x}$. Comme $3x \to -\infty$ et $\dfrac{2}{x} \to 0$ :

     $\displaystyle\lim_{x \to -\infty} \dfrac{f(x)}{x} = -\infty$.

   - En $+\infty$ ($x > 0$, donc $x = \sqrt{x^2}$) :

     $$\dfrac{f(x)}{x} = \dfrac{\sqrt{x^2 + 2x - 8}}{\sqrt{x^2}} = \sqrt{\dfrac{x^2 + 2x - 8}{x^2}} = \sqrt{1 + \dfrac{2}{x} - \dfrac{8}{x^2}}$$

     Quand $x \to +\infty$ : $\dfrac{2}{x} \to 0$ et $\dfrac{8}{x^2} \to 0$.

     $\displaystyle\lim_{x \to +\infty} \dfrac{f(x)}{x} = \sqrt{1} = 1$.

3. a. **À droite de $2$** ($x > 2$) : $f(x) = \sqrt{x^2 + 2x - 8}$. Quand $x \to 2^+$, $x^2 + 2x - 8 \to 4 + 4 - 8 = 0$ (par valeurs positives), donc la racine tend vers $0$.

   $\displaystyle\lim_{x \to 2^+} f(x) = 0$.

   **À gauche de $2$** ($x < 2$) : $f(x) = 3x^2 - 5x - 2$ est un polynôme, on remplace : $3 \times 4 - 5 \times 2 - 2 = 12 - 10 - 2 = 0$.

   $\displaystyle\lim_{x \to 2^-} f(x) = 0$.

   b. Les limites à gauche et à droite en $2$ existent et sont **égales** (à $0$) : $f$ admet une limite en $2$, et

   $\displaystyle\lim_{x \to 2} f(x) = 0$.

   De plus, $f(2) = 3 \times 4 - 5 \times 2 - 2 = 0$ : la limite est égale à la valeur de la fonction, donc $f$ est continue en $2$.

*Remarque.* Ce raccordement n'est pas un hasard : $3x^2 - 5x - 2 = (3x + 1)(x - 2)$ et $x^2 + 2x - 8 = (x - 2)(x + 4)$ s'annulent tous deux en $2$. Avec un autre polynôme à gauche (par exemple $3x^2 - 5x$), les deux limites auraient été différentes et $f$ n'aurait pas eu de limite en $2$.
