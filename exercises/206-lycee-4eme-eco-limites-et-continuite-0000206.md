---
uid: "0000206"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 3"
title: "Fonction définie par morceaux : continuité à gauche et à droite en 2"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["continuite", "fonction-definie-par-morceaux", "continuite-a-droite-et-a-gauche", "domaine-de-definition"]
---

Soit la fonction $f$ définie par :

$$
f(x) = \begin{cases} \dfrac{x+1}{x-1} & \text{si } x \leq 2 \\ -x + 1 & \text{si } x > 2 \end{cases}
$$

1. Déterminer le domaine de définition de $f$.

2. Étudier la continuité de $f$ à droite et à gauche en $2$.

3. $f$ est-elle continue en $2$ ?

4. Déterminer le domaine de continuité de $f$.

---

## Solution

**Rappel.** $f$ est continue en $a$ si $\displaystyle\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$. Elle est continue à gauche en $a$ si $\displaystyle\lim_{x \to a^-} f(x) = f(a)$ et continue à droite si $\displaystyle\lim_{x \to a^+} f(x) = f(a)$.

1. On regarde chaque morceau.

   - Pour $x \leq 2$ : $\dfrac{x+1}{x-1}$ existe si $x \neq 1$. Cela donne $]-\infty, 1[ \,\cup\, ]1, 2]$.

   - Pour $x > 2$ : $-x + 1$ existe pour tout $x$ : cela donne $]2, +\infty[$.

   En réunissant : $D_f = \mathbb{R} \setminus \{1\}$.

2. **Valeur en $2$.** $2 \leq 2$, on utilise le premier morceau : $f(2) = \dfrac{2+1}{2-1} = 3$.

   **À gauche** ($x \to 2^-$, donc $x < 2$ : premier morceau). La fraction est définie en $2$, on remplace : $\displaystyle\lim_{x \to 2^-} f(x) = \dfrac{3}{1} = 3 = f(2)$.

   Donc $f$ est **continue à gauche** en $2$.

   **À droite** ($x \to 2^+$, donc $x > 2$ : deuxième morceau). $\displaystyle\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (-x + 1) = -2 + 1 = -1$.

   Or $-1 \neq 3 = f(2)$, donc $f$ n'est **pas continue à droite** en $2$.

3. Pour être continue en $2$, $f$ doit l'être à gauche **et** à droite. Ce n'est pas le cas : les limites à gauche ($3$) et à droite ($-1$) sont différentes.

   $f$ **n'est pas continue en $2$**. Sa courbe fait un « saut » de $3$ à $-1$.

4. - Sur $]-\infty, 1[$ et sur $]1, 2[$ : $f(x) = \dfrac{x+1}{x-1}$ est une fonction rationnelle, continue là où son dénominateur n'est pas nul ;

   - sur $]2, +\infty[$ : $f(x) = -x + 1$ est un polynôme, donc continue ;

   - en $1$ : $f$ n'est pas définie ;

   - en $2$ : $f$ n'est pas continue (question 3).

   Le domaine de continuité de $f$ est donc $\mathbb{R} \setminus \{1, 2\} = ]-\infty, 1[ \,\cup\, ]1, 2[ \,\cup\, ]2, +\infty[$.
