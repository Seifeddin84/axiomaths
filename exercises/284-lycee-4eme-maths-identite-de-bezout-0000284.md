---
uid: "0000284"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Identité de Bezout"
source: "Axiomaths"
title: "Le polynôme de la trisection : cos 20° est irrationnel"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "irrationalite", "triple-angle", "trigonometrie"]
provenance: adapted
adapted_from: "résultat classique (impossibilité de la trisection, P.-L. Wantzel, 1837) ; énoncé et solution Axiomaths"
idea: "trisection"
dressing: "polynôme de la trisection et irrationalité"
rung: 5
---
On considère le polynôme $\Pi(x)=8x^3-6x-1$.

1. Montrer que $\cos3\theta=4\cos^3\theta-3\cos\theta$ pour tout réel $\theta$ (comparer avec l'identité sur $\sin3\theta$ de l'[exercice n°274](/lycee/3eme/mathematiques/trigonometrie#ex-0000274)). En déduire que $\cos20^\circ$ est une racine de $\Pi$.

2. Soit $\dfrac pq$ une racine **rationnelle** de $\Pi$, avec $p\in\mathbb Z$, $q\in\mathbb N^*$ et $\operatorname{pgcd}(p,q)=1$. Montrer que $8p^3-6pq^2-q^3=0$, puis que $q$ divise $8$ et que $p$ divise $1$.

3. Dresser la liste des rationnels possibles et montrer qu'aucun n'est racine de $\Pi$.

4. En déduire que $\cos20^\circ$ est irrationnel.

5. **Pour aller plus loin** (théorème de Wantzel, admis) : un nombre constructible à la règle et au compas est racine d'un polynôme irréductible dont le degré est une puissance de $2$. Que conclut-on pour la trisection de l'angle de $60^\circ$ ?

---

## Solution

:::property[Théorème de Gauss]

Si $a$ divise $bc$ et si $\operatorname{pgcd}(a,b)=1$, alors $\ \boxed{a\mid c}$.

:::

1. On écrit $3\theta=2\theta+\theta$ :

   $$\displaystyle \cos3\theta=\cos2\theta\cos\theta-\sin2\theta\sin\theta=(2\cos^2\theta-1)\cos\theta-2\sin^2\theta\cos\theta .$$

   On remplace $\sin^2\theta=1-\cos^2\theta$ :

   $$\displaystyle \cos3\theta=2\cos^3\theta-\cos\theta-2\cos\theta(1-\cos^2\theta)=4\cos^3\theta-3\cos\theta .$$

   Avec $\theta=20^\circ$ et $x=\cos20^\circ$ : $\ \cos60^\circ=\tfrac12=4x^3-3x$, donc

   $$\displaystyle 8x^3-6x-1=0 .$$

   $$\displaystyle \boxed{\Pi(\cos20^\circ)=0}$$

2. Si $\Pi\big(\tfrac pq\big)=0$ : $8\dfrac{p^3}{q^3}-6\dfrac pq-1=0$. On multiplie par $q^3$ :

   $$\displaystyle \boxed{8p^3-6pq^2-q^3=0}.$$

   - **$q$ divise $8$.** On écrit $8p^3=6pq^2+q^3=q\,(6pq+q^2)$ : $q\mid8p^3$. Comme $\operatorname{pgcd}(p,q)=1$, on a $\operatorname{pgcd}(q,p^3)=1$ et le théorème de Gauss donne $q\mid8$.

   - **$p$ divise $1$.** On écrit $q^3=8p^3-6pq^2=p\,(8p^2-6q^2)$ : $p\mid q^3$. Comme $\operatorname{pgcd}(p,q^3)=1$, le théorème de Gauss (avec $p\mid q^3\cdot1$) donne $p\mid1$, donc $p=\pm1$.

3. $q\mid8$ donne $q\in\{1,2,4,8\}$ et $p=\pm1$. Les rationnels possibles sont

   $$\displaystyle \pm1,\ \pm\tfrac12,\ \pm\tfrac14,\ \pm\tfrac18 .$$

   On calcule $\Pi$ :

   | $x$ | $1$ | $-1$ | $\tfrac12$ | $-\tfrac12$ | $\tfrac14$ | $-\tfrac14$ | $\tfrac18$ | $-\tfrac18$ |
   |---|---|---|---|---|---|---|---|---|
   | $\Pi(x)$ | $1$ | $-3$ | $-3$ | $1$ | $-\tfrac{19}8$ | $\tfrac38$ | $-\tfrac{111}{64}$ | $-\tfrac{17}{64}$ |

   Exemple de calcul : $\Pi\big(\tfrac18\big)=8\cdot\tfrac1{512}-\tfrac68-1=\tfrac1{64}-\tfrac{48}{64}-\tfrac{64}{64}=-\tfrac{111}{64}$.

   Aucune valeur n'est nulle : **$\Pi$ n'a aucune racine rationnelle.**

4. $\cos20^\circ$ est une racine de $\Pi$ (question 1) et $\Pi$ n'a pas de racine rationnelle (question 3) : $\cos20^\circ\notin\mathbb Q$.

   $$\displaystyle \boxed{\cos20^\circ\text{ est irrationnel}}$$

5. Un polynôme de degré $3$ sans racine rationnelle est irréductible sur $\mathbb Q$ (s'il se factorisait, l'un des facteurs serait de degré $1$ et donnerait une racine rationnelle). Donc $\cos20^\circ$ est de degré $3$, qui n'est pas une puissance de $2$ : le nombre $\cos20^\circ$ n'est pas constructible, et l'angle de $20^\circ$ non plus.

   $$\displaystyle \boxed{\text{On ne peut pas trisecter l'angle de }60^\circ\text{ à la règle et au compas}}$$

:::remark[Ce que cela dit sur Morley]

Le théorème de Morley parle des trisectrices d'un triangle ; pour un triangle équilatéral, ce sont des angles de $20^\circ$, et l'on vient de voir qu'on ne sait pas les construire. La preuve de Conway ([exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272)) contourne le problème en construisant le triangle « à rebours ». Avec une règle à deux marques, l'angle se trisecte : voir l'[exercice n°267](/lycee/1ere/toutes-sections/angles#ex-0000267).

:::

:::intuition

Un rationnel $\tfrac pq$ qui annule un polynôme à coefficients entiers a un numérateur qui divise le terme constant et un dénominateur qui divise le coefficient dominant : la liste de candidats est **finie**, on les teste tous.

:::

:::trap

L'énoncé « $\Pi$ n'a pas de racine **rationnelle** » ne dit pas que $\Pi$ n'a pas de racine réelle : $\cos20^\circ$ en est une. Il dit qu'elle est irrationnelle, et même (grâce à Wantzel) non constructible.

:::
