---
uid: "0000410"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Vrai ou faux : les pièges du chapitre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "vrai-faux", "degre", "racines", "identification"]
provenance: own
dressing: "vrai-faux avec contre-exemples"
rung: 4
---
Pour chacune des affirmations suivantes, dire si elle est vraie ou fausse, puis justifier (par une preuve, ou par un contre-exemple si elle est fausse).

1. Si deux polynômes $P$ et $Q$ vérifient $P(1) = Q(1)$ et $P(2) = Q(2)$, alors $P = Q$.

2. Le polynôme $(x - 1)^3 - x^3$ est de degré $3$.

3. Un polynôme de degré $3$ admet toujours exactement trois racines réelles.

4. Un polynôme de degré $3$ admet au plus trois racines réelles.

5. L'équation $x^3 = 4x$ a pour ensemble de solutions $\{-2\,;\,2\}$.

6. Si $P(x) = (x - 3)\,Q(x)$ pour tout réel $x$, où $Q$ est un polynôme, alors $3$ est une racine de $P$.

7. La somme de deux polynômes de degré $3$ est un polynôme de degré $3$.

---

## Solution

:::property[Les trois faits utilisés]
- **Égalité** : $P = Q$ signifie que les coefficients de **chaque** puissance de $x$ sont égaux (et non seulement que $P$ et $Q$ ont deux ou trois valeurs communes).
- **Racines** : $\alpha$ est une racine de $P$ lorsque $P(\alpha) = 0$ ; un polynôme de degré $n$ a **au plus $n$** racines.
- **Degré** : pour un produit, les degrés s'additionnent ; pour une somme, les termes de plus haut degré peuvent se détruire.
:::

1. **Faux.** Contre-exemple : $P(x) = x^2$ et $Q(x) = 3x - 2$. On a $P(1) = 1 = Q(1)$ et $P(2) = 4 = Q(2)$, mais $P \neq Q$ : ils n'ont pas les mêmes coefficients (le degré de $P$ est $2$, celui de $Q$ est $1$).

2. **Faux.** On développe : $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$, donc

   $$\displaystyle (x - 1)^3 - x^3 = -3x^2 + 3x - 1.$$

   Les termes en $x^3$ se détruisent : le degré est $2$.

3. **Faux.** Contre-exemple : $P(x) = x^3 + x = x(x^2 + 1)$. Comme $x^2 + 1 > 0$, la seule racine réelle est $0$.

4. **Vrai.** C'est le résultat du cours : un polynôme de degré $n$ a au plus $n$ racines. Pour le degré $3$, il en a donc $0$, $1$, $2$ ou $3$ au plus.

5. **Faux.** On ne peut pas diviser par $x$ sans savoir si $x \neq 0$ : on perd la solution $x = 0$. Il faut factoriser :

   $$\displaystyle x^3 = 4x \iff x^3 - 4x = 0 \iff x(x^2 - 4) = 0 \iff x(x - 2)(x + 2) = 0$$

   donc $S = \{-2\,;\,0\,;\,2\}$.

6. **Vrai.** Si $P(x) = (x - 3)\,Q(x)$ pour tout $x$, alors $P(3) = (3 - 3)\,Q(3) = 0 \times Q(3) = 0$.

7. **Faux.** Contre-exemple : $P(x) = x^3 + x^2$ et $Q(x) = -x^3 + 1$ sont de degré $3$, mais $P(x) + Q(x) = x^2 + 1$ est de degré $2$.

:::intuition
Pour montrer qu'une affirmation est **fausse**, un seul contre-exemple suffit. Pour montrer qu'elle est **vraie**, il faut un argument valable pour tous les cas.
:::

:::trap
Diviser par $x$ dans $x^3 = 4x$ fait perdre la solution $0$. On **factorise** au lieu de diviser.
:::
