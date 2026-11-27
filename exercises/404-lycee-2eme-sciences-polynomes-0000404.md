---
uid: "0000404"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Degré, coefficients et opérations sur les polynômes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["polynomes", "degre", "operations"]
provenance: own
dressing: "degré et opérations sur les polynômes"
rung: 1
---
On considère les polynômes $P(x) = 3x^3 - 2x^2 + x - 5$, $Q(x) = x^3 - 2x^2 + 4x + 1$ et $R(x) = x^2 + 1$.

1. a. Donner le degré, le coefficient dominant et le terme constant de $P$.

   b. Calculer $P(0)$, $P(1)$, $P(-1)$ et $P(2)$.

2. a. Écrire $P(x) + Q(x)$ sous forme réduite. Quel est son degré ?

   b. Écrire $P(x) - 3Q(x)$ sous forme réduite. Quel est son degré ? Que remarque-t-on ?

3. a. Sans effectuer le produit, donner le degré, le coefficient dominant et le terme constant de $P(x) \times R(x)$.

   b. Développer $P(x) \times R(x)$ et vérifier les réponses de la question précédente.

---

## Solution

:::property[Lire un polynôme]
Pour $P(x) = a_nx^n + \dots + a_1x + a_0$ avec $a_n \neq 0$ :

- le **degré** est $n$ : c'est le plus grand exposant de $x$ ;
- le **coefficient dominant** est $a_n$ ;
- le **terme constant** est $a_0$, et $\boxed{P(0) = a_0}$.
:::

:::property[Degré d'une somme et d'un produit]
$$\boxed{d^\circ(P \times R) = d^\circ(P) + d^\circ(R)}$$

Pour une somme, le degré est au plus égal au plus grand des deux degrés. Il est **plus petit** quand les termes de plus haut degré se détruisent.
:::

1. a. Dans $P(x) = 3x^3 - 2x^2 + x - 5$, le plus grand exposant de $x$ est $3$.

   Donc $P$ est de **degré $3$**, son coefficient dominant est $3$ (le coefficient de $x^3$) et son terme constant est $-5$.

   b. On remplace $x$ par la valeur demandée. Pour une valeur négative, on met des parenthèses.

   $P(0) = -5$ : c'est le terme constant.

   $P(1) = 3 \times 1 - 2 \times 1 + 1 - 5 = 3 - 2 + 1 - 5 = -3$.

   $P(-1) = 3 \times (-1)^3 - 2 \times (-1)^2 + (-1) - 5 = -3 - 2 - 1 - 5 = -11$.

   $P(2) = 3 \times 8 - 2 \times 4 + 2 - 5 = 24 - 8 + 2 - 5 = 13$.

2. a. On additionne les termes de même degré :

   $$\displaystyle P(x) + Q(x) = (3+1)x^3 + (-2-2)x^2 + (1+4)x + (-5+1)$$

   $$\displaystyle P(x) + Q(x) = 4x^3 - 4x^2 + 5x - 4$$

   Ce polynôme est de degré $3$.

   b. On commence par calculer $3Q(x) = 3x^3 - 6x^2 + 12x + 3$. Puis :

   $$\displaystyle P(x) - 3Q(x) = (3-3)x^3 + (-2+6)x^2 + (1-12)x + (-5-3)$$

   $$\displaystyle P(x) - 3Q(x) = 4x^2 - 11x - 8$$

   Ce polynôme est de degré $2$, alors que $P$ et $3Q$ sont de degré $3$.

   On remarque que les termes en $x^3$ se sont **détruits** : $3 - 3 = 0$.

3. a. $P$ est de degré $3$ et $R$ de degré $2$. D'après le rappel, $P \times R$ est de degré $3 + 2 = 5$.

   Son coefficient dominant est le produit des coefficients dominants : $3 \times 1 = 3$.

   Son terme constant est le produit des termes constants : $(-5) \times 1 = -5$.

   b. On développe :

   $$\displaystyle P(x) \times R(x) = (3x^3 - 2x^2 + x - 5)(x^2 + 1)$$

   $$\displaystyle = 3x^5 - 2x^4 + x^3 - 5x^2 + 3x^3 - 2x^2 + x - 5$$

   $$\displaystyle = 3x^5 - 2x^4 + 4x^3 - 7x^2 + x - 5$$

   Le degré est $5$, le coefficient dominant $3$ et le terme constant $-5$ : c'est bien ce qu'on avait annoncé.

:::intuition
Pour un produit, les degrés s'**additionnent**. Pour une somme, on regarde les termes de plus haut degré : s'ils ne se détruisent pas, le degré ne change pas.
:::

:::trap
Ne pas répondre « degré $3$ » pour $P(x) - 3Q(x)$ sans calculer : les termes en $x^3$ se détruisent et le degré tombe à $2$.
:::
