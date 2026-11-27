---
uid: "0000250"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Encadrements : attention aux pièges"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["encadrements", "inegalites", "pieges", "carres"]
provenance: own
dressing: "encadrements : pièges sur les signes"
rung: 4
---

Soit $x$ un réel de l'intervalle $[-2,3]$. Donner le meilleur encadrement possible de chacun des nombres :

1. $x^2$ ;

2. $|x-1|$ ;

3. $\dfrac1{x^2+1}$ ;

4. $\dfrac{x+1}{x+3}$ [écrire $\dfrac{x+1}{x+3}=1-\dfrac2{x+3}$] ;

5. $x^2-2x$ [écrire $x^2-2x=(x-1)^2-1$].

Un élève encadre $x^2-2x$ ainsi : $0\le x^2\le9$ et $-6\le-2x\le4$, donc $-6\le x^2-2x\le13$. Cet encadrement est-il vrai ? Est-il optimal ? Pourquoi ?

---

## Solution

> **Méthode.** Pour encadrer une expression en $x$, on suit les variations en partant de l'intervalle de $x$. On vérifie **quels extrêmes sont réellement atteints**.

On a $x\in[-2,3]$.

1. Un carré est toujours positif : $x^2\geq0$, et $x^2=0$ pour $x=0$ qui est dans l'intervalle. Le maximum est atteint à une extrémité : $(-2)^2=4$ et $3^2=9$.

   $$\displaystyle 0\leq x^2\leq9$$

   (Attention : ce n'est pas $[4,9]$.)

2. On encadre $x-1$ : $-3\leq x-1\leq2$. La valeur absolue vaut $0$ pour $x=1$ et au plus $|-3|=3$.

   $$\displaystyle 0\leq|x-1|\leq3$$

3. On encadre le dénominateur : $0\leq x^2\leq9$, donc $1\leq x^2+1\leq10$.

   L'inverse change l'ordre :

   $$\displaystyle \dfrac1{10}\leq\dfrac1{x^2+1}\leq1$$

4. On suit l'indication : $\dfrac{x+1}{x+3}=1-\dfrac2{x+3}$.

   $$\displaystyle -2\leq x\leq3\implies1\leq x+3\leq6\implies\dfrac16\leq\dfrac1{x+3}\leq1\implies\dfrac13\leq\dfrac2{x+3}\leq2$$

   On multiplie par $-1$ (le sens change), puis on ajoute $1$ :

   $$\displaystyle -2\leq-\dfrac2{x+3}\leq-\dfrac13\implies-1\leq1-\dfrac2{x+3}\leq\dfrac23$$

   $$\displaystyle -1\leq\dfrac{x+1}{x+3}\leq\dfrac23$$

5. On suit l'indication : $x^2-2x=(x-1)^2-1$. Comme $-3\leq x-1\leq2$, on a $0\leq(x-1)^2\leq9$ (le carré vaut $0$ en $x=1$ et $9$ en $x=-2$).

   $$\displaystyle -1\leq x^2-2x\leq8$$

**L'encadrement de l'élève :** $0\leq x^2\leq9$ et $-6\leq-2x\leq4$ donnent bien $-6\leq x^2-2x\leq13$ : il est **vrai**. Mais il n'est pas optimal : $x^2=9$ seulement pour $x=3$, alors que $-2x=4$ seulement pour $x=-2$. Les deux extrêmes ne sont jamais atteints en même temps. Le meilleur encadrement est $-1\leq x^2-2x\leq8$.

**Idée :** ramener l'expression à une seule apparition de $x$, puis suivre les variations.    **Piège :** encadrer terme à terme une expression où $x$ apparaît plusieurs fois.
