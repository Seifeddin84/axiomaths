---
uid: "0000360"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Chiffres cachés"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["arithmetique", "criteres-de-divisibilite", "recherche-de-chiffres"]
provenance: "own"
dressing: "chiffres cachés et divisibilité"
rung: 2
batch: "2026-11-22-revision-1ere-A"
---

Dans chaque cas, déterminer tous les chiffres $a$ et $b$ tels que :

1. le nombre $\overline{2a56}$ soit divisible par $8$ ;

2. le nombre $\overline{7a4b}$ soit divisible par $8$ et par $9$ ;

3. le nombre $\overline{a3b5}$ soit un multiple de $75$ (avec $a\neq0$).

---

## Solution

:::property[Critères de divisibilité]
Un entier est divisible par **8** si le nombre formé par ses $\boxed{\text{trois derniers chiffres}}$ l'est, par **25** si ses $\boxed{\text{deux derniers chiffres}}$ forment $00$, $25$, $50$ ou $75$, par **3** (ou **9**) si la $\boxed{\text{somme de ses chiffres}}$ l'est.

Si deux entiers sont **premiers entre eux** et divisent $n$, alors leur produit divise $n$.
:::

1. Le critère de $8$ porte sur $\overline{a56}=100a+56$.

   On a $56=7\times8$ : il reste à avoir $8\mid100a$.

   On écrit $100a=96a+4a$, avec $96a=8\times12a$ :

   $$\displaystyle 8\mid100a\iff8\mid4a\iff a\ \text{est pair}$$

   Les chiffres possibles sont donc $\boxed{a\in\{0,2,4,6,8\}}$.

   Contrôle : $056=7\times8$, $256=32\times8$, $456=57\times8$, $656=82\times8$, $856=107\times8$.

2. **Condition pour $8$.** On regarde $\overline{a4b}=100a+40+b$.

   $$\displaystyle 100a+40+b=8\,(12a+5)+4a+b$$

   Donc $8\mid\overline{7a4b}\iff8\mid4a+b$.

   **Condition pour $9$.** La somme des chiffres est $7+a+4+b=11+a+b$, avec $11\leq11+a+b\leq29$.

   Elle est multiple de $9$ si elle vaut $18$ ou $27$ :

   $$\displaystyle a+b=7\qquad\text{ou}\qquad a+b=16$$

   On écrit $4a+b=3a+(a+b)$ pour chaque cas.

   **Cas $a+b=7$.** On veut $8\mid3a+7$ avec $0\leq a\leq7$ :

   $$\displaystyle 3a+7\in\{7,10,13,16,19,22,25,28\}$$

   Seul $16$ est un multiple de $8$ : $a=3$, donc $b=4$.

   **Cas $a+b=16$.** On veut $8\mid3a+16$, c'est-à-dire $8\mid3a$, donc $8\mid a$ (car $3$ et $8$ sont premiers entre eux).

   Avec $7\leq a\leq9$ (pour que $b=16-a\leq9$), on obtient $a=8$ et $b=8$.

   Les nombres sont $\boxed{7344}$ et $\boxed{7848}$.

   Contrôle : $7344=8\times918=9\times816$ et $7848=8\times981=9\times872$.

3. On a $75=3\times25$, avec $3$ et $25$ premiers entre eux : $\overline{a3b5}$ est multiple de $75$ si et seulement s'il est divisible par $25$ **et** par $3$.

   **Condition pour $25$.** Les deux derniers chiffres $\overline{b5}$ doivent valoir $25$ ou $75$ :

   $$\displaystyle b=2\qquad\text{ou}\qquad b=7$$

   **Condition pour $3$.** La somme des chiffres est $a+3+b+5=a+b+8$.

   **Si $b=2$ :** $a+10$ est multiple de $3$, avec $1\leq a\leq9$ : $a\in\{2,5,8\}$.

   **Si $b=7$ :** $a+15$ est multiple de $3$, donc $a$ est multiple de $3$ : $a\in\{3,6,9\}$.

   On obtient six nombres :

   $$\displaystyle \boxed{2325,\ 5325,\ 8325,\ 3375,\ 6375,\ 9375}$$

   Contrôle : $2325=31\times75$, $3375=45\times75$, $9375=125\times75$.

:::intuition
Ramener chaque critère à une condition sur les chiffres inconnus, puis croiser les conditions.
:::

:::trap
Oublier le deuxième multiple de $25$ ($25$ et $75$) ou accepter $a=0$ pour un chiffre de tête.
:::
