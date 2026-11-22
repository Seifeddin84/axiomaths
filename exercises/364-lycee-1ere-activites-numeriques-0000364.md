---
uid: "0000364"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Racines irrationnelles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["racines-carrees", "irrationalite", "raisonnement-par-l-absurde", "parite"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

Un nombre est *rationnel* s'il s'écrit $\dfrac pq$ avec $p$, $q$ entiers, $q\neq0$, la fraction étant irréductible ($p$ et $q$ n'ont pas de diviseur commun autre que $1$).

1. Montrer que si le carré d'un entier $n$ est pair, alors $n$ est pair. [Étudier le cas $n$ impair.]

2. On suppose que $\sqrt2=\dfrac pq$ (fraction irréductible). Montrer que $p^2=2q^2$, puis que $p$ et $q$ sont pairs. Conclure que $\sqrt2$ n'est pas rationnel.

3. Montrer de même que $\sqrt6$ n'est pas rationnel.

4. En calculant $(\sqrt2+\sqrt3)^2$, montrer que $\sqrt2+\sqrt3$ n'est pas rationnel.

5. En déduire que $\sqrt3-\sqrt2$ n'est pas rationnel.

---

## Solution

:::property[Raisonnement par l'absurde]
Pour montrer qu'une propriété est vraie, on suppose qu'elle est **fausse** et on aboutit à une $\boxed{\text{contradiction}}$. Un entier est pair s'il s'écrit $2m$, impair s'il s'écrit $2m+1$ ; le produit de deux entiers impairs est impair.
:::

1. On montre : « $n$ impair $\implies n^2$ impair ».

   Si $n=2m+1$ :

   $$\displaystyle n^2=4m^2+4m+1=2\,(2m^2+2m)+1$$

   $n^2$ est impair. Donc, si $n^2$ est pair, $n$ ne peut pas être impair : **$n$ est pair**.

2. On élève $\sqrt2=\dfrac pq$ au carré : $2=\dfrac{p^2}{q^2}$, soit

   $$\displaystyle p^2=2q^2$$

   Donc $p^2$ est pair, et d'après la question 1, $p$ est pair : $p=2m$.

   On remplace : $4m^2=2q^2$, donc

   $$\displaystyle q^2=2m^2$$

   Donc $q^2$ est pair, et $q$ est pair.

   $p$ et $q$ sont tous deux pairs : $2$ est un diviseur commun, ce qui contredit « fraction irréductible ». L'hypothèse est fausse :

   $$\displaystyle \boxed{\sqrt2\text{ n'est pas rationnel}}$$

3. On suppose $\sqrt6=\dfrac pq$ (irréductible). Alors $p^2=6q^2$ : $p^2$ est pair, donc $p=2m$.

   On remplace : $4m^2=6q^2$, soit

   $$\displaystyle 2m^2=3q^2$$

   Le nombre $3q^2$ est pair. Si $q^2$ était impair, $3q^2$ serait un produit de deux impairs, donc impair : c'est faux. Donc $q^2$ est pair, et $q$ est pair.

   $p$ et $q$ sont pairs : contradiction. $\boxed{\sqrt6\text{ n'est pas rationnel.}}$

4. On développe :

   $$\displaystyle (\sqrt2+\sqrt3)^2=2+2\sqrt6+3=5+2\sqrt6$$

   Supposons $\sqrt2+\sqrt3=r$ rationnel. Alors $r^2=5+2\sqrt6$, donc

   $$\displaystyle \sqrt6=\dfrac{r^2-5}2$$

   Ce nombre est rationnel (opérations sur des rationnels) : cela contredit la question 3.

   $\boxed{\sqrt2+\sqrt3\text{ n'est pas rationnel.}}$

5. On calcule le produit conjugué :

   $$\displaystyle (\sqrt3-\sqrt2)(\sqrt3+\sqrt2)=3-2=1\implies\sqrt3-\sqrt2=\dfrac1{\sqrt3+\sqrt2}$$

   Supposons $\sqrt3-\sqrt2=s$ rationnel. Comme $s>0$, $\sqrt3+\sqrt2=\dfrac1s$ serait rationnel : cela contredit la question 4.

   $\boxed{\sqrt3-\sqrt2\text{ n'est pas rationnel.}}$

:::intuition
Supposer le contraire et chercher un diviseur commun caché dans la fraction « irréductible ».
:::

:::trap
Pour $\sqrt6$, on aboutit à $2m^2=3q^2$ : il faut encore justifier que $q$ est pair (le facteur $3$ est impair).
:::
