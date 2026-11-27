---
uid: "0000252"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Synthèse : l'inégalité triangulaire en action"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["inegalite-triangulaire", "valeur-absolue", "demonstration"]
provenance: own
dressing: "synthèse : l'inégalité triangulaire en action"
rung: 5
---

1. Montrer que pour tous réels $a$ et $b$ : $|a+b|\le|a|+|b|$. [Comparer les carrés.] Quand y a-t-il égalité ?

2. En déduire que $\big||a|-|b|\big|\le|a-b|$.

3. Soit $x$ et $y$ deux réels tels que $|x-2|<0{,}1$ et $|y-3|<0{,}2$. Montrer que :

   a. $|x+y-5|<0{,}3$ ;

   b. $|y|<3{,}2$, puis $|xy-6|<0{,}72$ [écrire $xy-6=(x-2)y+2(y-3)$] ;

   c. $|y|>2{,}8$, puis $\left|\dfrac1y-\dfrac13\right|<0{,}024$.

4. Calculer $2{,}099\times3{,}199-6$. Que dire de la majoration obtenue en 3) b) ?

---

## Solution

1.
   > **Comparer deux nombres positifs.** Si $A\geq0$ et $B\geq0$ : $\boxed{A\leq B\iff A^2\leq B^2}$.

   On compare les carrés de $|a|+|b|$ et de $|a+b|$ (tous deux positifs), avec $|a|^2=a^2$ et $|a||b|=|ab|$ :

   $$\displaystyle (|a|+|b|)^2-(a+b)^2=a^2+2|ab|+b^2-a^2-2ab-b^2$$

   $$\displaystyle (|a|+|b|)^2-(a+b)^2=2\big(|ab|-ab\big)\geq0$$

   car $|ab|\geq ab$ (un nombre est toujours inférieur ou égal à sa valeur absolue). Donc :

   $$\displaystyle \boxed{|a+b|\leq|a|+|b|}$$

   **Égalité :** $|ab|=ab\iff ab\geq0$, c'est-à-dire $a$ et $b$ de même signe (ou l'un d'eux nul).

2. On applique l'inégalité triangulaire à $a=(a-b)+b$ :

   $$\displaystyle |a|=|(a-b)+b|\leq|a-b|+|b|\implies|a|-|b|\leq|a-b|$$

   On échange les rôles de $a$ et $b$ (et $|b-a|=|a-b|$) :

   $$\displaystyle |b|-|a|\leq|a-b|$$

   Le nombre $|a|-|b|$ et son opposé sont tous les deux $\leq|a-b|$. Donc :

   $$\displaystyle \boxed{\big||a|-|b|\big|\leq|a-b|}$$

3. On utilise l'inégalité triangulaire en faisant apparaître $x-2$ et $y-3$.

   a. $x+y-5=(x-2)+(y-3)$, donc :

   $$\displaystyle |x+y-5|\leq|x-2|+|y-3|<0{,}1+0{,}2=0{,}3$$

   b. $y=(y-3)+3$, donc :

   $$\displaystyle |y|\leq|y-3|+3<0{,}2+3=3{,}2$$

   On écrit $xy-6=(x-2)y+2(y-3)$. En effet $(x-2)y+2(y-3)=xy-2y+2y-6=xy-6$.

   $$\displaystyle |xy-6|\leq|x-2|\,|y|+2\,|y-3|<0{,}1\times3{,}2+2\times0{,}2$$

   $$\displaystyle |xy-6|<0{,}32+0{,}4=0{,}72$$

   c. D'après la question 2 :

   $$\displaystyle \big||y|-3\big|\leq|y-3|<0{,}2\implies-0{,}2<|y|-3<0{,}2\implies|y|>2{,}8$$

   On réduit au même dénominateur :

   $$\displaystyle \dfrac1y-\dfrac13=\dfrac{3-y}{3y}\implies\left|\dfrac1y-\dfrac13\right|=\dfrac{|y-3|}{3|y|}$$

   Le numérateur est $<0{,}2$ et le dénominateur est $>3\times2{,}8=8{,}4$ :

   $$\displaystyle \left|\dfrac1y-\dfrac13\right|<\dfrac{0{,}2}{8{,}4}\approx0{,}0238<0{,}024$$

4. On prend $x=2{,}099$ et $y=3{,}199$ (ils vérifient bien $|x-2|<0{,}1$ et $|y-3|<0{,}2$) :

   $$\displaystyle 2{,}099\times3{,}199-6=6{,}714701-6=0{,}714701$$

   C'est très proche de $0{,}72$. En prenant $x$ proche de $2{,}1$ et $y$ proche de $3{,}2$, on s'approche autant qu'on veut de $0{,}72$ : la majoration de la question 3) b) est donc **optimale**.

**Idée :** écrire $xy-6$ comme une combinaison des écarts $x-2$ et $y-3$ avant de majorer.    **Piège :** majorer $|y|$ par $3$ au lieu de $3{,}2$ : on oublie l'erreur sur $y$.
