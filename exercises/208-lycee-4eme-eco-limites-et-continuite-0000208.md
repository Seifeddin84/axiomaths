---
uid: "0000208"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 5"
title: "Un paramètre a : raccordement en −1 d'une fraction et d'une racine"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["continuite", "parametre", "fonction-definie-par-morceaux", "forme-indeterminee", "racine-carree"]
---

Soit $a$ un réel et soit $f$ la fonction définie par :

$$
f(x) = \begin{cases} \dfrac{x^2 - x - 2}{x + 1} & \text{si } x < -1 \\ \sqrt{x + 1} - a & \text{si } x \geq -1 \end{cases}
$$

1. Calculer $\displaystyle\lim_{x \to -\infty} f(x)$ et $\displaystyle\lim_{x \to +\infty} f(x)$.

2. Étudier la continuité de $f$ sur les intervalles $]-\infty, -1[$ et $]-1, +\infty[$.

3. Déterminer $a$ pour que $f$ soit continue en $-1$.

---

## Solution

1. **En $-\infty$** : on est dans le cas $x < -1$, $f(x) = \dfrac{x^2 - x - 2}{x + 1}$. C'est la forme $\dfrac{\infty}{\infty}$.

   On peut factoriser : $x^2 - x - 2 = (x - 2)(x + 1)$ (racines $2$ et $-1$). Pour $x < -1$, on a $x + 1 \neq 0$ et on simplifie :

   $$f(x) = \dfrac{(x-2)(x+1)}{x+1} = x - 2$$

   Donc $\displaystyle\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} (x - 2) = -\infty$.

   **En $+\infty$** : on est dans le cas $x \geq -1$, $f(x) = \sqrt{x + 1} - a$. Quand $x \to +\infty$, $\sqrt{x+1} \to +\infty$ et $a$ est une constante.

   $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

2. **Sur $]-\infty, -1[$** : $f(x) = \dfrac{x^2 - x - 2}{x + 1}$ est une fraction rationnelle dont le dénominateur ne s'annule pas sur cet intervalle (il ne s'annule qu'en $-1$) : elle est continue. (On peut aussi dire que $f(x) = x - 2$ est un polynôme.)

   **Sur $]-1, +\infty[$** : $x \mapsto x + 1$ est continue et strictement positive sur cet intervalle ; la racine carrée est continue sur $[0, +\infty[$, donc $x \mapsto \sqrt{x+1}$ est continue ; en retranchant la constante $a$ on garde la continuité. Donc $f$ est continue sur $]-1, +\infty[$.

3. Le seul point à vérifier est $x = -1$, où la formule change. $f$ est continue en $-1$ si et seulement si $\displaystyle\lim_{x \to -1^-} f(x) = \lim_{x \to -1^+} f(x) = f(-1)$.

   - Valeur : $-1 \geq -1$, on utilise le second morceau : $f(-1) = \sqrt{0} - a = -a$.

   - À droite : $\displaystyle\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} \left(\sqrt{x+1} - a\right) = -a$.

   - À gauche : $\displaystyle\lim_{x \to -1^-} f(x) = \lim_{x \to -1^-} (x - 2) = -3$ (par la simplification de la question 1).

   Il faut donc que $-3 = -a$, c'est-à-dire $a = 3$.

   **Conclusion.** $f$ est continue en $-1$ si et seulement si $a = 3$ ; dans ce cas $f$ est continue sur $\mathbb{R}$.
