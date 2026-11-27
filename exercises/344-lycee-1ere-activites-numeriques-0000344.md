---
uid: "0000344"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Lycée Farhat Hached Makthar : série d'exercices n°1 (2019-2020)"
title: "PGCD, fraction irréductible et nombre décimal"
country: "Tunisie"
year: 2019
professor: "M. Ghorbeli Med Hedi"
difficulty: "Facile"
points: null
tags: ["pgcd", "fraction-irreductible", "nombre-decimal", "arrondi"]
provenance: scan
---

1. Calculer $\mathrm{PGCD}(630\,;\,3300)$, puis mettre sous forme irréductible la fraction $a=\dfrac{630}{3300}$.

2. Le nombre rationnel $a$ est-il un nombre décimal ? Justifier.

3. Donner l'arrondi au dixième, puis au millième, de $a$.

---

## Solution

:::method[Algorithme d'Euclide]
On divise $a$ par $b$ ($a>b$) : $a=bq+r$ avec $0\le r<b$. On recommence avec $(b\,;r)$.

$$\boxed{\text{le PGCD est le dernier reste non nul}}$$
:::

:::property[Fraction irréductible et nombre décimal]
Un nombre décimal est un nombre qui s'écrit $\dfrac{p}{10^k}$ ($p$ entier, $k$ entier naturel).

$$\boxed{\text{Une fraction irréductible est décimale}\iff\text{son dénominateur n'a que }2\text{ et }5\text{ comme facteurs premiers}}$$
:::

1. On applique l'algorithme d'Euclide :

   $$\displaystyle 3300=630\times5+150$$

   $$\displaystyle 630=150\times4+30$$

   $$\displaystyle 150=30\times5+0$$

   Le dernier reste non nul est $30$ : $\boxed{\mathrm{PGCD}(630\,;3300)=30}$.

   On divise le numérateur et le dénominateur par $30$ :

   $$\displaystyle a=\dfrac{630}{3300}=\dfrac{30\times21}{30\times110}=\boxed{\dfrac{21}{110}}$$

   Contrôle : $\mathrm{PGCD}(21\,;110)=1$ car $21=3\times7$ et $110=2\times5\times11$.

2. La fraction $\dfrac{21}{110}$ est irréductible et $110=2\times5\times11$.

   Le dénominateur contient le facteur premier $11$, différent de $2$ et de $5$ : il ne peut pas diviser une puissance de $10$.

   **Donc $a$ n'est pas un nombre décimal.**

3. On pose la division de $21$ par $110$ :

   $$\displaystyle a=\dfrac{21}{110}=0{,}190909\ldots$$

   - Au dixième : $0{,}19$ est plus proche de $0{,}2$ que de $0{,}1$, donc $\boxed{a\approx0{,}2}$.

   - Au millième : $0{,}1909\ldots$ est plus proche de $0{,}191$ que de $0{,}190$, donc $\boxed{a\approx0{,}191}$.

:::intuition
Un nombre décimal a un développement qui **s'arrête**. Ici le développement est périodique ($0{,}1\overline{90}$) : on ne peut donc que l'arrondir.
:::

:::trap
Regarder le dénominateur **avant** de simplifier. Par exemple $\dfrac{14}{35}$ a un dénominateur divisible par $7$, et pourtant $\dfrac{14}{35}=\dfrac25=0{,}4$ est décimal : il faut **toujours simplifier d'abord**.
:::
