---
title: "Identité de Bézout : PGCD, lemme de Gauss, PPCM et équations ax + by = c"
slug: "lycee-4eme-maths-identite-de-bezout"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Identité de Bézout"
summary: "Le PGCD et l'algorithme d'Euclide, les entiers premiers entre eux et le lemme de Gauss, le PPCM, l'inverse modulo b, l'identité de Bézout (il existe u et v avec au + bv = 1) et sa recherche par Euclide étendu, enfin la résolution complète de ax + by = c dans Z²."
prerequisites: ["Divisibilité dans Z (division euclidienne, congruences)", "Nombres premiers", "Raisonnement par l'absurde"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 8 « Identité de Bézout »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Tu as une cuve, un seau de $12$ litres et un seau de $7$ litres, sans aucune graduation. Peux-tu mesurer exactement **$1$ litre** ?

Oui. Verse trois seaux de $12$ L dans la cuve ($36$ L), puis retires-en cinq seaux de $7$ L ($35$ L) : il reste $1$ L. Tout est dans une égalité entre entiers :

$$
12 \times 3 + 7 \times (-5) = 1.
$$

Avec $12$ et $8$, au contraire, tu n'y arriverais jamais : les deux nombres sont pairs, donc toute combinaison $12x + 8y$ est paire. Ce chapitre répond à la question générale : **pour quels entiers $a$, $b$, $c$ l'équation $ax + by = c$ a-t-elle des solutions entières, et comment les trouver toutes ?**

Il y faut trois outils, qui s'appuient les uns sur les autres :

1. le **PGCD**, qu'on calcule par l'algorithme d'Euclide ;
2. le **lemme de Gauss**, qui permet de « simplifier » une divisibilité ;
3. l'**identité de Bézout**, qui dit que le PGCD de $a$ et $b$ s'écrit $au + bv$.

:::intuition
Fais la liste de tous les nombres $ax + by$ avec $x$ et $y$ entiers. Ce sont forcément des multiples de $d = \operatorname{PGCD}(a,b)$, puisque $d$ divise $a$ et $b$. Bézout dit l'essentiel : **tous** les multiples de $d$ sont atteints. Le PGCD n'est donc pas seulement le plus grand diviseur commun, c'est aussi le plus petit « pas » positif qu'on puisse réaliser avec $a$ et $b$.
:::

## 1. PGCD et algorithme d'Euclide

Lister les diviseurs marche pour de petits nombres. Ceux de $60$ sont $1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$ ; ceux de $84$ sont $1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84$. Les diviseurs communs sont $1, 2, 3, 4, 6, 12$ : le plus grand est $12$. Pour $4851$ et $616$, c'est pénible. Il faut une méthode.

:::definition[PGCD]
Soient $a$ et $b$ deux entiers relatifs non tous deux nuls. Leur **PGCD** (plus grand commun diviseur), noté $\operatorname{PGCD}(a,b)$ ou $a \wedge b$, est le plus grand entier qui divise à la fois $a$ et $b$.
:::

Il existe bien : $1$ est un diviseur commun, et si $a \neq 0$ aucun diviseur n'est plus grand que $\lvert a \rvert$. On a $a \wedge b = \lvert a \rvert \wedge \lvert b \rvert$ et $a \wedge 0 = \lvert a \rvert$.

:::intuition
Si $d$ divise $a$ et $b$, alors $d$ divise aussi le reste $r = a - bq$ de la division de $a$ par $b$. Chaque division remplace donc le couple $(a,b)$ par un couple **plus petit** $(b,r)$ sans changer ses diviseurs communs. On recommence jusqu'à ce que le reste soit nul.
:::

:::property[Le PGCD ne change pas quand on remplace $a$ par le reste]
Soient $a$ et $b$ des entiers naturels avec $b \neq 0$, et $a = bq + r$ la division euclidienne de $a$ par $b$. Les couples $(a,b)$ et $(b,r)$ ont **les mêmes diviseurs communs**, donc
$$
a \wedge b = b \wedge r.
$$
:::

:::proof[Le PGCD ne change pas quand on remplace $a$ par le reste]
| Étape | Justification |
|---|---|
| Soit $d$ un diviseur commun de $a$ et $b$ | hypothèse |
| $d \mid bq$, donc $d \mid a - bq = r$ | $d$ divise $b$ ; différence de deux multiples de $d$ |
| $d$ est donc un diviseur commun de $b$ et $r$ | $d \mid b$ et $d \mid r$ |
| Réciproquement, si $d \mid b$ et $d \mid r$, alors $d \mid bq + r = a$ | somme de deux multiples de $d$ |
| Les deux couples ont les mêmes diviseurs communs, donc le même plus grand | un ensemble, un seul maximum |
:::

:::method[Algorithme d'Euclide]
On divise $a$ par $b$, puis $b$ par le reste, puis ce reste par le nouveau reste, et ainsi de suite :
$$
\begin{aligned}
a &= bq_1 + r_1\\
b &= r_1 q_2 + r_2\\
r_1 &= r_2 q_3 + r_3\\
&\ \,\vdots
\end{aligned}
$$
Les restes sont des entiers naturels strictement décroissants : on finit par obtenir un reste nul. Le **dernier reste non nul** est le PGCD, car
$$
\begin{aligned}
a \wedge b &= b \wedge r_1\\
&= r_1 \wedge r_2 = \cdots\\
&= r_n \wedge 0 = r_n.
\end{aligned}
$$
:::

:::example[PGCD de 4851 et 616]
$$
\begin{aligned}
4851 &= 7 \times 616 + 539\\
616 &= 1 \times 539 + \textcolor{#ea580c}{77}\\
539 &= 7 \times 77 + 0
\end{aligned}
$$
Le dernier reste non nul est $77$, donc $4851 \wedge 616 = 77$.

Contrôle : $4851 = 77 \times 63$ et $616 = 77 \times 8$ ✓.
:::

![L'algorithme d'Euclide sur un rectangle 21 × 15 : un carré de côté 15, deux carrés de côté 6, deux carrés de côté 3. Le dernier carré donne le PGCD.](/lessons/images/m4-bez-carrelage.svg "Euclide en images : on pave un rectangle 21 × 15 avec les plus grands carrés possibles. 21 = 1 × 15 + 6, 15 = 2 × 6 + 3, 6 = 2 × 3 + 0, et le côté du dernier carré, 3, est le PGCD.")

Cette image donne le sens géométrique de l'algorithme : le PGCD de $a$ et $b$ est le côté du plus grand carré qui pave exactement un rectangle $a \times b$.

:::remark
Sur calculatrice, entre la fraction $\dfrac{4851}{616}$ : elle s'affiche $\dfrac{63}{8}$. Le PGCD est le dénominateur de départ divisé par le dénominateur réduit : $616 \div 8 = 77$. La calculatrice a divisé le haut et le bas par $d$ : c'est exactement ce qu'on fait en simplifiant une fraction.
:::

:::property[Les diviseurs communs sont les diviseurs du PGCD]
Un entier $m$ divise $a$ et $b$ **si et seulement si** $m$ divise $a \wedge b$.
:::

:::proof[Les diviseurs communs sont les diviseurs du PGCD]
| Étape | Justification |
|---|---|
| Les diviseurs communs de $(a,b)$ sont ceux de $(b,r_1)$, puis de $(r_1,r_2)$, etc. | propriété précédente, appliquée à chaque division |
| On arrive à ceux de $(r_n, 0)$ | dernier reste non nul $r_n = a \wedge b$ |
| Un entier divise $r_n$ et $0$ si et seulement si il divise $r_n$ | tout entier divise $0$ |
:::

:::property[Multiplier par k multiplie le PGCD par k]
Pour tout entier $k \geq 1$ :
$$
(ka) \wedge (kb) = k\,(a \wedge b).
$$
:::

:::proof[Multiplier par k multiplie le PGCD par k]
| Étape | Justification |
|---|---|
| Si $a = bq + r$ avec $0 \leq r < b$, alors $ka = (kb)\,q + kr$ avec $0 \leq kr < kb$ | on multiplie par $k > 0$ |
| C'est la division euclidienne de $ka$ par $kb$ : son reste est $kr$ | unicité de la division euclidienne |
| Tous les restes de l'algorithme appliqué à $(ka, kb)$ sont donc $k$ fois ceux de l'algorithme appliqué à $(a,b)$ | récurrence sur les divisions |
| Le dernier reste non nul est $k\,(a \wedge b)$ | algorithme d'Euclide |
:::

:::corollary[Forme réduite]
Si $d = a \wedge b$, on peut écrire $a = d a'$ et $b = d b'$ avec $a' \wedge b' = 1$.

En effet $d = (da') \wedge (db') = d\,(a' \wedge b')$, donc $a' \wedge b' = 1$.
:::

:::example[Forme réduite de 60 et 84]
$60 \wedge 84 = 12$, et $60 = 12 \times 5$, $84 = 12 \times 7$ avec $5 \wedge 7 = 1$. Autrement dit, la fraction $\dfrac{60}{84}$ se simplifie en $\dfrac{5}{7}$, qui ne peut plus l'être.
:::

## 2. Entiers premiers entre eux et lemme de Gauss

:::definition[Premiers entre eux]
Deux entiers $a$ et $b$ sont **premiers entre eux** si $a \wedge b = 1$, c'est-à-dire si leurs seuls diviseurs communs sont $1$ et $-1$.
:::

Premiers entre eux ne veut pas dire premiers : $8$ et $15$ ne sont ni l'un ni l'autre des nombres premiers, et pourtant $8 \wedge 15 = 1$. Deux entiers consécutifs $n$ et $n+1$ sont toujours premiers entre eux : un diviseur commun divise leur différence, qui vaut $1$.

:::intuition
Écrire $4 \mid 6c$ ne permet pas de « simplifier par 6 » : $4$ divise $6 \times 2 = 12$, mais ni $6$ ni $2$ n'est multiple de $4$. Le problème est que $4$ et $6$ partagent le facteur $2$. Si $a$ et $b$ **n'ont aucun facteur commun**, alors $a$ ne peut diviser $bc$ que par la part de $c$ : c'est le lemme de Gauss.
:::

:::theorem[Lemme de Gauss]
Soient $a$, $b$, $c$ des entiers. Si $a \mid bc$ et $a \wedge b = 1$, alors $a \mid c$.
:::

:::proof[Lemme de Gauss]
| Étape | Justification |
|---|---|
| On suppose $c \neq 0$ (sinon $a \mid 0$ est évident) | cas trivial écarté |
| $a \mid ac$ et $a \mid bc$ | $a$ divise $ac$ ; hypothèse |
| Donc $a$ divise $(ac) \wedge (bc)$ | les diviseurs communs divisent le PGCD |
| $(ac) \wedge (bc) = \lvert c \rvert\,(a \wedge b) = \lvert c \rvert$ | multiplication par $\lvert c \rvert$ ; $a \wedge b = 1$ |
| Donc $a \mid \lvert c \rvert$, c'est-à-dire $a \mid c$ | $a$ divise $c$ ou son opposé |
:::

:::warning
L'hypothèse $a \wedge b = 1$ est indispensable. Avec $a = 6$, $b = 4$, $c = 3$ : $6 \mid 4 \times 3 = 12$, mais $6 \nmid 4$ et $6 \nmid 3$. Ici $6 \wedge 4 = 2 \neq 1$.
:::

:::corollary[Produit de deux diviseurs]
Si $a \mid n$, $b \mid n$ et $a \wedge b = 1$, alors $ab \mid n$.
:::

:::proof[Produit de deux diviseurs]
| Étape | Justification |
|---|---|
| $n = ak$ avec $k$ entier | $a \mid n$ |
| $b \mid ak$ et $b \wedge a = 1$, donc $b \mid k$ | lemme de Gauss |
| $k = bm$, donc $n = (ab)\,m$ | substitution |
:::

:::example[Un nombre divisible par 221]
Montrer que $129285$ est divisible par $221$.

On a $129285 = 13 \times 9945$ et $129285 = 17 \times 7605$, donc $13 \mid 129285$ et $17 \mid 129285$. Comme $13$ et $17$ sont premiers distincts, $13 \wedge 17 = 1$, donc $13 \times 17 = 221$ divise $129285$ : $129285 = 221 \times 585$ ✓.
:::

:::property[L'équation ax + by = 0]
Si $a \wedge b = 1$, les solutions entières de $ax + by = 0$ sont les couples
$$
(x,y) = (bk,\ -ak),
$$
où $k$ décrit $\mathbb{Z}$.
:::

:::proof[L'équation ax + by = 0]
| Étape | Justification |
|---|---|
| $ax = -by$, donc $b \mid ax$ | $b$ divise $-by$ |
| $b \mid x$ car $b \wedge a = 1$ | lemme de Gauss |
| $x = bk$, puis $abk = -by$, donc $y = -ak$ | on simplifie par $b \neq 0$ |
| Réciproquement, $a \cdot bk + b \cdot (-ak) = 0$ | calcul direct |
:::

:::example[43x + 71y = 0]
$43$ et $71$ sont deux nombres premiers distincts, donc $43 \wedge 71 = 1$. Les solutions sont $(71k, -43k)$, $k \in \mathbb{Z}$ : $(0,0)$, $(71,-43)$, $(-71,43)$, $\dots$
:::

:::property[Premier avec chaque facteur, premier avec le produit]
Si $a \wedge b = 1$ et $a \wedge c = 1$, alors $a \wedge (bc) = 1$.
:::

:::proof[Premier avec chaque facteur, premier avec le produit]
| Étape | Justification |
|---|---|
| Soit $d = a \wedge (bc)$ | on appelle $d$ le PGCD cherché |
| $d \mid a$ et $a \wedge b = 1$, donc $d \wedge b = 1$ | un diviseur commun de $d$ et $b$ divise $a$ et $b$ |
| $d \mid bc$ et $d \wedge b = 1$, donc $d \mid c$ | lemme de Gauss |
| $d \mid a$ et $d \mid c$, donc $d \mid a \wedge c = 1$ | diviseurs communs de $a$ et $c$ |
| $d = 1$ | $d$ est positif |
:::

:::method[Démasquer le PGCD de deux expressions]
Un diviseur commun de $a$ et $b$ divise toute **combinaison** $au + bv$. On en fabrique une qui ne contient plus $n$ : le PGCD divise alors un nombre connu, et il n'y a plus qu'un petit nombre de cas.
:::

:::example[Le PGCD de 2n − 5 et n + 3]
Soit $n$ un entier et $d = (2n - 5) \wedge (n + 3)$.

$d$ divise $(2n - 5) - 2(n + 3) = -11$, donc $d \in \{1, 11\}$. De plus $d = 11$ si et seulement si $11 \mid n + 3$, c'est-à-dire $n \equiv 8\ [11]$. Dans ce cas $2n - 5 = 2(n+3) - 11$ est bien multiple de $11$.

Contrôle : $n = 8$ donne $11$ et $11$, PGCD $11$ ✓. $n = 1$ donne $-3$ et $4$, PGCD $1$ ✓.
:::

## 3. Le PPCM

:::definition[PPCM]
Soient $a$ et $b$ deux entiers non nuls. Leur **PPCM** (plus petit commun multiple), noté $\operatorname{PPCM}(a,b)$ ou $a \vee b$, est le plus petit entier strictement positif multiple de $a$ et de $b$.
:::

:::theorem[PGCD fois PPCM]
Pour $a$ et $b$ entiers naturels non nuls :
$$
(a \wedge b) \times (a \vee b) = ab.
$$
De plus, les multiples communs de $a$ et $b$ sont exactement les multiples de $a \vee b$.
:::

:::proof[PGCD fois PPCM]
| Étape | Justification |
|---|---|
| On écrit $a = da'$, $b = db'$ avec $d = a \wedge b$ et $a' \wedge b' = 1$ | forme réduite |
| Soit $n$ un multiple commun : $n = ak = bl$ | définition |
| $a'k = b'l$ | on divise par $d$ |
| $b' \mid a'k$ et $b' \wedge a' = 1$, donc $b' \mid k$ : $k = b't$ | lemme de Gauss |
| $n = ab't = d a' b'\,t$ | substitution |
| Réciproquement, $d a' b'$ est un multiple commun : $d a' b' = ab' = a'b$ | calcul |
| Les multiples communs sont donc les multiples de $d a' b'$, et $a \vee b = d a' b' = \dfrac{ab}{d}$ | plus petit multiple strictement positif : $t = 1$ |
:::

:::example[PGCD et PPCM de 495 et 2541]
$$
\begin{aligned}
2541 &= 5 \times 495 + 66\\
495 &= 7 \times 66 + \textcolor{#ea580c}{33}\\
66 &= 2 \times 33 + 0
\end{aligned}
$$
Donc $495 \wedge 2541 = 33$ et
$$
\begin{aligned}
495 \vee 2541 &= \frac{495 \times 2541}{33}\\
&= 495 \times 77\\
&= 38115.
\end{aligned}
$$
Contrôle : $38115 = 495 \times 77 = 2541 \times 15$ ✓.
:::

:::example[Retrouver deux nombres à partir de leur PGCD et de leur PPCM]
Trouver les entiers naturels $a$ et $b$ tels que $a \wedge b = 12$ et $a \vee b = 180$.

On écrit $a = 12a'$, $b = 12b'$ avec $a' \wedge b' = 1$. Alors $ab = 12 \times 180$, c'est-à-dire $144\,a'b' = 2160$, donc $a'b' = 15$. On cherche les façons d'écrire $15$ comme produit de deux entiers premiers entre eux :
$$
\begin{aligned}
(a', b') \in \{&(1, 15),\ (3, 5),\\
&(5, 3),\ (15, 1)\}.
\end{aligned}
$$
D'où $(a,b)$ vaut $(12, 180)$, $(36, 60)$, $(60, 36)$ ou $(180, 12)$.

Contrôle : pour $(36, 60)$, le PGCD est $12$ et le PPCM est $\dfrac{36 \times 60}{12} = 180$ ✓.
:::

## 4. L'inverse modulo b

Sur un cadran à $b$ positions, saute de $a$ en $a$ à partir de $0$. Où atterris-tu ? Cela dépend de $a \wedge b$.

Avec $b = 13$ et $a = 4$, les restes de $4u$ modulo $13$, pour $u = 0, 1, \dots, 12$, sont :
$$
\begin{aligned}
&0,\ 4,\ 8,\ 12,\ 3,\ 7,\ 11,\\
&2,\ 6,\ 10,\ \textcolor{#ea580c}{1},\ 5,\ 9.
\end{aligned}
$$
Les treize restes sont **tous différents** : on visite chaque position une fois, y compris la position $1$ (pour $u = 10$ : $4 \times 10 = 40 = 3 \times 13 + 1$).

Avec $b = 9$ et $a = 6$, en revanche, les restes de $6u$ sont
$$
0,\ 6,\ 3,\ 0,\ 6,\ 3,\ 0,\ 6,\ 3.
$$
On tourne en rond sur $\{0, 3, 6\}$ et on n'atteint jamais $1$. La différence : $4 \wedge 13 = 1$, mais $6 \wedge 9 = 3$.

:::theorem[Multiplier par a modulo b]
Soient $a$ et $b$ des entiers avec $b \geq 2$ et $a \wedge b = 1$. Les restes de $0 \cdot a,\ 1 \cdot a,\ \dots,\ (b-1)\,a$ dans la division par $b$ sont **deux à deux distincts**, donc ce sont exactement les entiers $0, 1, \dots, b-1$ dans un certain ordre.

En particulier, il existe un unique $u \in \{0, 1, \dots, b-1\}$ tel que $au \equiv 1\ [b]$. On l'appelle l'**inverse de $a$ modulo $b$**.
:::

:::proof[Multiplier par a modulo b]
| Étape | Justification |
|---|---|
| Supposons $ai \equiv aj\ [b]$ avec $0 \leq i \leq j \leq b-1$ | par l'absurde, on cherche $i = j$ |
| $b \mid a(j - i)$ | définition de la congruence |
| $b \mid j - i$ | lemme de Gauss, car $a \wedge b = 1$ |
| $0 \leq j - i \leq b - 1 < b$, donc $j - i = 0$ | seul multiple de $b$ dans cet intervalle |
| Les $b$ restes sont distincts et pris dans $\{0, \dots, b-1\}$, qui a $b$ éléments | principe des tiroirs |
| Le reste $1$ est donc atteint, une seule fois | surjectivité et unicité |
:::

:::example[Résoudre une congruence]
Résoudre $4x \equiv 5\ [13]$.

L'inverse de $4$ modulo $13$ est $10$. On multiplie les deux membres par $10$ :
$$
x \equiv 10 \times 5 = 50 \equiv 11\ [13].
$$
Contrôle : $4 \times 11 = 44 = 3 \times 13 + 5$ ✓.
:::

:::warning
Si $a \wedge b \neq 1$, il n'y a **pas** d'inverse : si $au \equiv 1\ [b]$, alors $au - bq = 1$ et tout diviseur commun de $a$ et $b$ divise $1$. C'est pourquoi $6$ n'a pas d'inverse modulo $9$.
:::

## 5. L'identité de Bézout

:::theorem[Identité de Bézout]
Soient $a$ et $b$ deux entiers relatifs non nuls. Alors
$$
a \wedge b = 1
$$
si et seulement si il existe $(u, v) \in \mathbb{Z}^2$ tels que
$$
au + bv = 1.
$$
:::

:::proof[Identité de Bézout]
| Étape | Justification |
|---|---|
| ($\Leftarrow$) Si $au + bv = 1$ et si $d$ divise $a$ et $b$ | hypothèse |
| alors $d \mid au + bv = 1$, donc $d = \pm 1$ | combinaison de multiples de $d$ |
| Ainsi $a \wedge b = 1$ | seuls diviseurs communs : $\pm 1$ |
| ($\Rightarrow$) Quitte à changer le signe de $u$ et de $v$, on suppose $a > 0$ et $b > 0$ | $a \wedge b = \lvert a \rvert \wedge \lvert b \rvert$ |
| Si $b = 1$, $(u,v) = (0, 1)$ convient | $a \cdot 0 + 1 \cdot 1 = 1$ |
| Si $b \geq 2$, il existe $u$ tel que $au \equiv 1\ [b]$ | inverse modulo $b$ (§4) |
| Donc $au - 1 = bq$ pour un entier $q$ | définition de la congruence |
| D'où $au + b\,(-q) = 1$ | $v = -q$ |
:::

:::corollary[Cas général]
Si $d = a \wedge b$, il existe $(u,v) \in \mathbb{Z}^2$ tel que $au + bv = d$. De plus, **les nombres $ax + by$ ($x, y$ entiers) sont exactement les multiples de $d$**.

En effet, avec $a = da'$, $b = db'$ et $a'u + b'v = 1$, on multiplie par $d$. Et tout multiple $kd$ s'écrit $a(ku) + b(kv)$.
:::

:::warning
La réciproque n'est vraie que pour la valeur $1$. Si $au + bv = 2$, on sait seulement que $a \wedge b$ **divise** $2$. Exemple : $3 \times 4 + 5 \times (-2) = 2$, et pourtant $3 \wedge 5 = 1$.
:::

:::remark
Le couple $(u, v)$ n'est jamais unique. Avec $12 \times 3 + 7 \times (-5) = 1$, on a aussi $12 \times (-4) + 7 \times 7 = 1$. En ajoutant $7$ à $u$ et en retirant $12$ à $v$, la somme ne bouge pas. Cette observation est le cœur du §6.
:::

:::method[Trouver u et v par Euclide étendu]
On déroule l'algorithme d'Euclide, puis on **remonte** : on exprime chaque reste à l'aide des deux nombres précédents, en partant du reste $1$.
:::

:::example[Bézout pour 27 et 10]
Descente :
$$
\begin{aligned}
27 &= 2 \times 10 + 7\\
10 &= 1 \times 7 + 3\\
7 &= 2 \times 3 + 1
\end{aligned}
$$
Remontée, en partant de $1$ :
$$
\begin{aligned}
1 &= 7 - 2 \cdot 3\\
&= 7 - 2\,(10 - 7)\\
&= 3 \cdot 7 - 2 \cdot 10\\
&= 3\,(27 - 2 \cdot 10) - 2 \cdot 10\\
&= \textcolor{#ea580c}{3} \cdot 27 \textcolor{#ea580c}{- 8} \cdot 10.
\end{aligned}
$$
Contrôle : $81 - 80 = 1$ ✓.
:::

Pour de grands nombres, la remontée devient lourde. On préfère un tableau qui calcule $u$ et $v$ **en même temps** que les restes. Chaque ligne est la combinaison « ligne d'avant-avant $-\ q \times$ ligne d'avant », sur les trois colonnes $r$, $u$, $v$.

:::example[Bézout pour 22826 et 537]
On part des lignes $(22826,\ 1,\ 0)$ et $(537,\ 0,\ 1)$, qui vérifient $22826\,u + 537\,v = r$. À chaque étape, on calcule le quotient $q$ de l'avant-dernier reste par le dernier, puis on soustrait $q$ fois la dernière ligne à l'avant-dernière.

| $q$ | $r$ | $u$ | $v$ |
|---|---|---|---|
| | $22826$ | $1$ | $0$ |
| | $537$ | $0$ | $1$ |
| $42$ | $272$ | $1$ | $-42$ |
| $1$ | $265$ | $-1$ | $43$ |
| $1$ | $7$ | $2$ | $-85$ |
| $37$ | $6$ | $-75$ | $3188$ |
| $1$ | $\textcolor{#ea580c}{1}$ | $\textcolor{#ea580c}{77}$ | $\textcolor{#ea580c}{-3273}$ |
| $6$ | $0$ | $-537$ | $22826$ |

Le dernier reste non nul est $1$, donc $22826 \wedge 537 = 1$, et la ligne correspondante donne
$$
\begin{aligned}
&22826 \times 77\\
{}+{}&537 \times (-3273) = 1.
\end{aligned}
$$
Contrôle : $22826 \times 77 = 1\,757\,602$ et $537 \times 3273 = 1\,757\,601$ ; la différence vaut bien $1$ ✓.
:::

:::tic[Euclide étendu en quatre colonnes]
On place $22826$ en `B2` et $537$ en `B3`, avec `C2 = 1`, `D2 = 0`, `C3 = 0`, `D3 = 1`. En ligne $4$ :

| cellule | formule |
|---|---|
| `A4` | `=QUOTIENT(B2;B3)` |
| `B4` | `=B2-A4*B3` |
| `C4` | `=C2-A4*C3` |
| `D4` | `=D2-A4*D3` |

On recopie la ligne $4$ vers le bas jusqu'à obtenir $0$ en colonne `B`. La ligne précédente contient le PGCD et les coefficients de Bézout. Pour vérifier le tableau, ajoute en `E4` la formule `=$B$2*C4+$B$3*D4` : elle doit toujours être égale à `B4`. C'est l'invariant de la méthode, et un tableau faux le trahit tout de suite.
:::

## 6. L'équation ax + by = c

:::intuition
Reprends la cuve. Avec des seaux de $a$ et $b$ litres, quelles quantités $c$ peut-on obtenir ? D'après le §5, ce sont les multiples de $d = a \wedge b$ et rien d'autre. Et quand c'est possible, il y a **plusieurs** façons de s'y prendre : si on remplit un seau de plus d'un côté, on peut le compenser de l'autre. Le décalage minimal est de $b/d$ seaux d'un côté et $a/d$ de l'autre.
:::

:::theorem[Équation ax + by = c]
Soient $a$ et $b$ deux entiers non nuls, $c$ un entier et $d = a \wedge b$. On considère l'équation $(E) : ax + by = c$ d'inconnues entières.

1. $(E)$ a des solutions **si et seulement si** $d \mid c$.
2. Si $(x_0, y_0)$ est une solution, alors les solutions de $(E)$ sont les couples $(x, y)$ donnés par
$$
\begin{aligned}
x &= x_0 + \frac{b}{d}\,k\\
y &= y_0 - \frac{a}{d}\,k
\end{aligned}
\qquad (k \in \mathbb{Z}).
$$
:::

:::proof[Condition d'existence]
| Étape | Justification |
|---|---|
| Si $(x,y)$ est solution, $d \mid a$ et $d \mid b$ donnent $d \mid ax + by = c$ | combinaison de multiples de $d$ |
| Réciproquement, supposons $c = dc'$ | $d \mid c$ |
| Bézout donne $au + bv = d$ | corollaire du §5 |
| $a\,(uc') + b\,(vc') = dc' = c$ | on multiplie par $c'$ |
| $(uc', vc')$ est solution de $(E)$ | par définition |
:::

:::proof[Toutes les solutions]
| Étape | Justification |
|---|---|
| Soient $(x_0, y_0)$ et $(x,y)$ deux solutions de $(E)$ | hypothèse |
| $a(x - x_0) + b(y - y_0) = 0$ | on soustrait les deux égalités |
| $a'(x - x_0) + b'(y - y_0) = 0$, avec $a = da'$ et $b = db'$ | on divise par $d$ |
| $a' \wedge b' = 1$ | forme réduite (§1) |
| $(x - x_0,\ y - y_0) = (b'k,\ -a'k)$ avec $k \in \mathbb{Z}$ | équation $a'X + b'Y = 0$ (§2) |
| Réciproquement, $a(x_0 + b'k) + b(y_0 - a'k) = c + k\,(ab' - ba') = c$ | car $ab' = da'b' = a'b$ |
:::

:::method[Résoudre ax + by = c dans les entiers]
1. Calculer $d = a \wedge b$ par l'algorithme d'Euclide.
2. Si $d \nmid c$ : **aucune solution**. Sinon, diviser par $d$ pour obtenir $a'x + b'y = c'$ avec $a' \wedge b' = 1$.
3. Trouver une solution particulière $(x_0, y_0)$ : à vue si les nombres sont petits, sinon par Euclide étendu (on multiplie $(u,v)$ par $c'$).
4. Écrire la solution générale $(x_0 + b'k,\ y_0 - a'k)$, $k \in \mathbb{Z}$.
5. Vérifier avec deux valeurs de $k$.
:::

:::example[7x + 11y = 2]
$7 \wedge 11 = 1$ divise $2$ : il y a des solutions. Une solution de $7u + 11v = 1$ est $(u,v) = (-3, 2)$ ($-21 + 22 = 1$), donc $(x_0, y_0) = (-6, 4)$ pour le second membre $2$. Les solutions sont
$$
\begin{aligned}
x &= -6 + 11k\\
y &= 4 - 7k
\end{aligned}
\qquad (k \in \mathbb{Z}).
$$
Contrôle avec $k = 1$ : $(5, -3)$ et $35 - 33 = 2$ ✓. Avec $k = -1$ : $(-17, 11)$ et $-119 + 121 = 2$ ✓.
:::

![Les points entiers de la droite 7x + 11y = 2 : ... (-17, 11), (-6, 4), (5, -3), (16, -10) ..., régulièrement espacés d'un pas (11, -7).](/lessons/images/m4-bez-solutions.svg "Les solutions entières de 7x + 11y = 2 sont des points de la droite, tous espacés du même vecteur (11, -7) : on passe de l'un au suivant en ajoutant 11 à x et en retirant 7 à y.")

:::example[25x + 80y = 3 : aucune solution]
$25 = 5 \times 5$ et $80 = 5 \times 16$, donc $25 \wedge 80 = 5$. Or $5 \nmid 3$ : le membre de gauche est toujours un multiple de $5$, jamais $3$. **L'équation n'a aucune solution entière.**
:::

:::example[46x + 115y = 69]
$46 = 23 \times 2$ et $115 = 23 \times 5$, donc $46 \wedge 115 = 23$, et $23 \mid 69 = 23 \times 3$. On divise par $23$ :
$$
2x + 5y = 3.
$$
$(x_0, y_0) = (-1, 1)$ convient ($-2 + 5 = 3$). Les solutions sont $(-1 + 5k,\ 1 - 2k)$, $k \in \mathbb{Z}$.

Contrôle avec $k = 1$ : $(4, -1)$ et $46 \times 4 - 115 = 184 - 115 = 69$ ✓.
:::

:::example[Un score de jeu]
À chaque manche, un joueur marque $5$ ou $7$ points. De combien de façons peut-il totaliser exactement $100$ points ? On cherche les couples d'**entiers naturels** $(x,y)$ tels que $5x + 7y = 100$.

$(20, 0)$ est une solution, donc la solution générale est $(20 + 7k,\ -5k)$. Il faut $-5k \geq 0$, c'est-à-dire $k \leq 0$, et $20 + 7k \geq 0$, c'est-à-dire $k \geq -2$ (car $-\dfrac{20}{7} \approx -2{,}86$). Donc $k$ vaut $-2$, $-1$ ou $0$, et les trois façons sont $(x, y) = (6, 10)$, $(13, 5)$ ou $(20, 0)$.

Contrôle : $30 + 70 = 100$ ✓, $65 + 35 = 100$ ✓.
:::

### Lecture géométrique

Pourquoi la solution des seaux est-elle $(3, 5)$ et pas $(30, 50)$ ? Regarde la droite $12x - 7y = 0$, qui passe par $O$ et par $A(7, 12)$. Pour un point à coordonnées entières $M(x,y)$, le nombre $12x - 7y$ est un entier, et la distance de $M$ à la droite vaut $\dfrac{\lvert 12x - 7y \rvert}{\sqrt{193}}$ (car $12^2 + 7^2 = 193$). Les distances possibles sont donc des multiples de $\dfrac{1}{\sqrt{193}} \approx 0{,}072$.

![Les points entiers autour de la droite 12x − 7y = 0 : I(3, 5) et J(4, 7) sont les points les plus proches de la droite, de part et d'autre, et le parallélogramme OIAJ a pour aire 1.](/lessons/images/m4-bez-reseau.svg "Dans le rectangle de la figure, les points entiers les plus proches de la droite 12x − 7y = 0 (sans être dessus) sont I(3, 5) et J(4, 7), de part et d'autre. Le parallélogramme OIAJ, avec A(7, 12), a une aire de 1 : la plus petite possible pour un parallélogramme à sommets entiers.")

Bézout dit que cette distance minimale est **atteinte** : $12 \times 3 - 7 \times 5 = 1$ pour $I(3,5)$, et $12 \times 4 - 7 \times 7 = -1$ pour $J(4,7)$. Comme $I + J = A$, le quadrilatère $OIAJ$ est un parallélogramme, d'aire $\lvert 3 \times 7 - 5 \times 4 \rvert = 1$. Avec $12x - 6y$ (PGCD $6$), les valeurs possibles seraient toutes multiples de $6$ et la droite n'aurait aucun point entier à moins de $\dfrac{6}{\sqrt{180}} \approx 0{,}45$.

## 7. Bilan et méthodes pour les exercices

:::summary
- $a \wedge b$ est le dernier reste non nul de l'algorithme d'Euclide. Les diviseurs communs de $a$ et $b$ sont les diviseurs de $a \wedge b$. On a $a = da'$, $b = db'$ avec $a' \wedge b' = 1$.
- **Gauss :** $a \mid bc$ et $a \wedge b = 1$ donnent $a \mid c$. Conséquences : $a \mid n$, $b \mid n$, $a \wedge b = 1$ donnent $ab \mid n$ ; et $ax + by = 0$ avec $a \wedge b = 1$ donne $(bk, -ak)$.
- $(a \wedge b)(a \vee b) = ab$.
- **Bézout :** $a \wedge b = 1 \iff$ il existe $u,v$ avec $au + bv = 1$. Les nombres $ax + by$ sont les multiples de $a \wedge b$.
- **$ax + by = c$** a des solutions si et seulement si $a \wedge b \mid c$ ; si $(x_0, y_0)$ en est une, toutes sont $\left(x_0 + \dfrac{b}{d}k,\ y_0 - \dfrac{a}{d}k\right)$.
:::

:::method[Quel outil pour quelle question ?]
- **Calculer un PGCD, un PPCM** : Euclide, puis $a \vee b = \dfrac{ab}{a \wedge b}$.
- **Montrer que $a \wedge b = 1$** : exhiber $u$, $v$ avec $au + bv = 1$ (Bézout), ou trouver une combinaison qui vaut $\pm 1$.
- **Montrer qu'un entier divise un produit, ou qu'un produit divise un entier** : lemme de Gauss et son corollaire.
- **Trouver un PGCD dépendant d'un paramètre $n$** : combinaison sans $n$, puis étude des cas.
- **Résoudre $ax + by = c$** : les cinq étapes du §6.
- **Résoudre $ax \equiv c\ [b]$** : inverse de $a$ modulo $b$ s'il existe, sinon voir si $a \wedge b$ divise $c$.
- **Retrouver deux nombres connaissant PGCD et PPCM** : forme réduite et $a'b' = \dfrac{\text{PPCM}}{\text{PGCD}}$.
:::

:::history
Euclide décrit l'algorithme qui porte son nom dans le livre VII des *Éléments*, vers $-300$ : c'est l'un des plus anciens algorithmes encore utilisés tels quels. Claude-Gaspard Bachet de Méziriac a démontré en 1624, dans ses *Problèmes plaisants et délectables*, que l'équation $ax + by = 1$ a des solutions entières quand $a \wedge b = 1$, à propos de problèmes de pesées. Étienne Bézout a établi vers 1779 l'énoncé analogue pour les polynômes ; son nom est resté attaché, par tradition, à la version sur les entiers. Cette identité est aussi à la base du chiffrement RSA, qui calcule des inverses modulaires avec exactement l'algorithme d'Euclide étendu de ce chapitre.
:::

## Vérifie-toi

::::check[PGCD et PPCM]
Calculer le PGCD et le PPCM de $1890$ et $5250$.

:::answer
$$
\begin{aligned}
5250 &= 2 \times 1890 + 1470\\
1890 &= 1 \times 1470 + 420\\
1470 &= 3 \times 420 + \textcolor{#ea580c}{210}\\
420 &= 2 \times 210 + 0
\end{aligned}
$$
$1890 \wedge 5250 = 210$ et $1890 \vee 5250 = \dfrac{1890 \times 5250}{210} = 9 \times 5250 = 47250$. Contrôle : $47250 = 1890 \times 25 = 5250 \times 9$ ✓.
:::
::::

::::check[Coefficients de Bézout]
Trouver $(u, v) \in \mathbb{Z}^2$ tel que $2007\,u + 2015\,v = 1$.

:::answer
$$
\begin{aligned}
2015 &= 1 \times 2007 + 8\\
2007 &= 250 \times 8 + 7\\
8 &= 1 \times 7 + 1
\end{aligned}
$$
Remontée :
$$
\begin{aligned}
1 &= 8 - 7\\
&= 8 - (2007 - 250 \cdot 8)\\
&= 251 \cdot 8 - 2007\\
&= 251\,(2015 - 2007)\\
&\quad - 2007\\
&= 251 \cdot 2015\\
&\quad - 252 \cdot 2007.
\end{aligned}
$$
Donc $(u, v) = (-252,\ 251)$. Contrôle : $2015 \times 251 = 505\,765$ et $2007 \times 252 = 505\,764$ ✓.
:::
::::

::::check[Une équation à deux inconnues]
Résoudre dans $\mathbb{Z}^2$ l'équation $391x + 323y = 204$.

:::answer
$391 = 17 \times 23$ et $323 = 17 \times 19$, donc $391 \wedge 323 = 17$, et $204 = 17 \times 12$ est multiple de $17$. On divise par $17$ :
$$
23x + 19y = 12.
$$
Comme $23 \times 5 - 19 \times 6 = 1$, une solution particulière est $(60, -72)$. La solution générale est $(60 + 19k,\ -72 - 23k)$. Avec $k = -3$, on obtient la solution plus petite $(3, -3)$ : $23 \times 3 - 19 \times 3 = 12$ ✓. Donc les solutions sont
$$
\begin{aligned}
x &= 3 + 19k\\
y &= -3 - 23k
\end{aligned}
$$
avec $k \in \mathbb{Z}$.
Contrôle avec $k = 1$ : $(22, -26)$ et $391 \times 22 - 323 \times 26 = 8602 - 8398 = 204$ ✓.
:::
::::

::::check[Divisibilité par 6]
Montrer que pour tout entier $n$, le nombre $N = n(n+1)(2n+1)$ est divisible par $6$.

:::answer
**Par $2$** : $n$ et $n+1$ sont consécutifs, l'un des deux est pair.

**Par $3$** : on regarde le reste de $n$ modulo $3$. Si $n \equiv 0$, alors $3 \mid n$. Si $n \equiv 1$, alors $2n + 1 \equiv 3 \equiv 0$. Si $n \equiv 2$, alors $n + 1 \equiv 0$. Dans les trois cas $3 \mid N$.

Comme $2 \mid N$, $3 \mid N$ et $2 \wedge 3 = 1$, on a $2 \times 3 = 6 \mid N$ (corollaire de Gauss). Contrôle : $n = 2$ donne $2 \times 3 \times 5 = 30 = 6 \times 5$ ✓.
:::
::::

::::check[Un inverse modulo 14]
Quels entiers de $\{0, \dots, 13\}$ ont un inverse modulo $14$ ? Résoudre $5x \equiv 3\ [14]$.

:::answer
Un inverse existe si et seulement si $a \wedge 14 = 1$ : $a \in \{1, 3, 5, 9, 11, 13\}$, soit six entiers, et leurs inverses sont $1 \to 1$, $3 \to 5$, $5 \to 3$, $9 \to 11$, $11 \to 9$, $13 \to 13$.

L'inverse de $5$ est $3$ ($5 \times 3 = 15 \equiv 1$). On multiplie $5x \equiv 3$ par $3$ : $x \equiv 9\ [14]$. Contrôle : $5 \times 9 = 45 = 3 \times 14 + 3$ ✓.
:::
::::

::::check[Somme et produit]
Soient $a$ et $b$ deux entiers premiers entre eux. Montrer que $a + b$ et $ab$ sont premiers entre eux.

:::answer
Un diviseur commun de $a + b$ et $a$ divise $(a + b) - a = b$, donc divise $a \wedge b = 1$ : ainsi $(a + b) \wedge a = 1$. De même $(a + b) \wedge b = 1$. Par la propriété « premier avec chaque facteur, premier avec le produit » (§2), $(a + b) \wedge (ab) = 1$. Contrôle : $a = 4$, $b = 9$ donnent $13$ et $36$, qui sont premiers entre eux ✓.
:::
::::

::::challenge
Avec des pièces de $a$ et de $b$ points ($a \wedge b = 1$), quelle est la plus grande somme qu'on ne peut **pas** obtenir ? Montrer que pour $a = 5$ et $b = 7$ c'est $23$, puis démontrer que pour $a$ et $b$ quelconques c'est $ab - a - b$.

:::answer
**Pour $5$ et $7$.** $23 - 7y$ vaut $23, 16, 9, 2$ pour $y = 0, 1, 2, 3$ : aucun n'est multiple de $5$, donc $23$ n'est pas atteint. Les entiers de $24$ à $28$ le sont : $24 = 2 \times 5 + 2 \times 7$, $25 = 5 \times 5$, $26 = 5 + 3 \times 7$, $27 = 4 \times 5 + 7$, $28 = 4 \times 7$. En ajoutant des pièces de $5$, on atteint ensuite tous les entiers suivants.

**Cas général, $ab - a - b$ n'est pas atteint.** Supposons $ab - a - b = ax + by$ avec $x, y \geq 0$. Alors $ab = a(x+1) + b(y+1)$, donc $a \mid b(y+1)$ et, par Gauss, $a \mid y + 1$. Comme $y + 1 \geq 1$, on a $y + 1 \geq a$. De même $x + 1 \geq b$. Alors $a(x+1) + b(y+1) \geq 2ab > ab$ : contradiction.

**Tout entier $n > ab - a - b$ est atteint.** Par Bézout, $ax + by = n$ a une solution. En ajoutant $(b, -a)$ à $(x,y)$, on peut ramener $y$ dans $\{0, \dots, a-1\}$. Alors
$$
\begin{aligned}
ax &= n - by\\
&\geq (ab - a - b + 1)\\
&\quad - b(a - 1)\\
&= 1 - a > -a,
\end{aligned}
$$
donc $x > -1$, c'est-à-dire $x \geq 0$ : $n$ est atteint avec des pièces.

Pour $5$ et $7$, les entiers non atteints sont $1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18, 23$ : il y en a $12 = \dfrac{(5-1)(7-1)}{2}$, un résultat de Sylvester valable pour tout couple d'entiers premiers entre eux.
:::
::::
