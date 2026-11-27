---
uid: "0000359"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités algébriques"
source: "Axiomaths"
title: "Trois nombres de somme nulle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["identites-remarquables", "developpement", "factorisation"]
provenance: "own"
dressing: "trois nombres de somme nulle"
rung: 5
batch: "2026-11-22-revision-1ere-A"
---

1. Développer $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$. En déduire que, si $a+b+c=0$, alors $a^3+b^3+c^3=3abc$.

2. Calculer, sans calculatrice, $17^3-9^3-8^3$ puis $20^3-13^3-7^3$.

3. Factoriser $(x-y)^3+(y-z)^3+(z-x)^3$. En déduire la valeur de $\dfrac{(a-b)^3+(b-c)^3+(c-a)^3}{(a-b)(b-c)(c-a)}$ pour $a$, $b$, $c$ deux à deux distincts.

4. Résoudre dans $\mathbb R$ l'équation $(x-1)^3+(2x-3)^3+(4-3x)^3=0$.

---

## Solution

:::property[Développement]
Pour développer un produit de deux sommes, on multiplie **chaque** terme de la première par **chaque** terme de la seconde. Un produit est nul si et seulement si $\boxed{\text{l'un de ses facteurs est nul}}$.
:::

1. On multiplie la deuxième parenthèse par $a$, puis par $b$, puis par $c$ :

   $$\displaystyle a\,(\cdots)=a^3+ab^2+ac^2-a^2b-abc-a^2c$$

   $$\displaystyle b\,(\cdots)=a^2b+b^3+bc^2-ab^2-b^2c-abc$$

   $$\displaystyle c\,(\cdots)=a^2c+b^2c+c^3-abc-bc^2-ac^2$$

   On additionne : les termes $ab^2$, $ac^2$, $a^2b$, $a^2c$, $bc^2$, $b^2c$ se détruisent deux à deux, et il reste $-3abc$ :

   $$\displaystyle \boxed{(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=a^3+b^3+c^3-3abc}$$

   Si $a+b+c=0$, le membre de gauche est nul, donc :

   $$\displaystyle a^3+b^3+c^3-3abc=0\implies\boxed{a^3+b^3+c^3=3abc}$$

2. $17+(-9)+(-8)=0$ : on applique la question 1 avec $a=17$, $b=-9$, $c=-8$.

   $$\displaystyle 17^3-9^3-8^3=3\times17\times(-9)\times(-8)=3\times17\times72=\boxed{3672}$$

   $20+(-13)+(-7)=0$ :

   $$\displaystyle 20^3-13^3-7^3=3\times20\times(-13)\times(-7)=3\times20\times91=\boxed{5460}$$

3. Les trois nombres $x-y$, $y-z$ et $z-x$ ont pour somme

   $$\displaystyle (x-y)+(y-z)+(z-x)=0$$

   Donc, d'après la question 1 :

   $$\displaystyle (x-y)^3+(y-z)^3+(z-x)^3=\boxed{3(x-y)(y-z)(z-x)}$$

   Avec $x=a$, $y=b$, $z=c$ (le dénominateur n'est pas nul car $a,b,c$ sont distincts) :

   $$\displaystyle \dfrac{(a-b)^3+(b-c)^3+(c-a)^3}{(a-b)(b-c)(c-a)}=\dfrac{3(a-b)(b-c)(c-a)}{(a-b)(b-c)(c-a)}=\boxed{3}$$

4. On additionne les trois nombres qui sont élevés au cube :

   $$\displaystyle (x-1)+(2x-3)+(4-3x)=0$$

   La question 1 donne :

   $$\displaystyle (x-1)^3+(2x-3)^3+(4-3x)^3=3\,(x-1)(2x-3)(4-3x)$$

   L'équation devient $3\,(x-1)(2x-3)(4-3x)=0$, soit :

   $$\displaystyle x=1\qquad\text{ou}\qquad x=\dfrac32\qquad\text{ou}\qquad x=\dfrac43$$

   $$\displaystyle S=\boxed{\left\{1\,;\dfrac43\,;\dfrac32\right\}}$$

:::intuition
Repérer que les trois bases ont une somme nulle, avant de développer quoi que ce soit.
:::

:::trap
Appliquer $a^3+b^3+c^3=3abc$ sans vérifier que $a+b+c=0$.
:::
