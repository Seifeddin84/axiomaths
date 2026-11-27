---
uid: "0000366"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "PGCD et divisibilité par 2, 4, 8"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["arithmetique", "pgcd", "divisibilite", "demonstration"]
provenance: "own"
dressing: "PGCD de n+2 et n²+4"
rung: 5
batch: "2026-11-22-revision-1ere-A"
---

Pour tout entier naturel $n$, on pose $d_n=\mathrm{PGCD}(n+2,\ n^2+4)$.

1. Calculer $d_n$ pour $n=0,1,2,\dots,8$.

2. Montrer que $n^2+4=(n+2)(n-2)+8$. En déduire que $d_n=\mathrm{PGCD}(n+2,\ 8)$.

3. Montrer que $d_n=1$ si $n$ est impair, $d_n=2$ si $n$ est multiple de $4$, $d_n=4$ si $n=8q+2$ et $d_n=8$ si $n=8q+6$.

4. Calculer $d_{2026}$ et $d_{2030}$.

---

## Solution

:::property[PGCD]
Pour tous entiers $a$, $b$ et $q$ : $\boxed{\mathrm{PGCD}(a,b)=\mathrm{PGCD}(b,\,a-qb)}$. Les diviseurs de $8$ sont $1$, $2$, $4$ et $8$.
:::

1. On calcule les couples $(n+2,\,n^2+4)$ :

   $$
   \begin{array}{c|ccccccccc}
     n&0&1&2&3&4&5&6&7&8\\\hline
     (n+2,\,n^2+4)&(2,4)&(3,5)&(4,8)&(5,13)&(6,20)&(7,29)&(8,40)&(9,53)&(10,68)\\\hline
     d_n&2&1&4&1&2&1&8&1&2
     \end{array}
   $$

2. On développe :

   $$\displaystyle (n+2)(n-2)+8=n^2-4+8=n^2+4$$

   On applique la propriété du PGCD avec $a=n^2+4$, $b=n+2$ et $q=n-2$ :

   $$\displaystyle a-qb=(n^2+4)-(n-2)(n+2)=8$$

   $$\displaystyle d_n=\mathrm{PGCD}(n+2,\ n^2+4)=\boxed{\mathrm{PGCD}(n+2,\ 8)}$$

   (Un diviseur commun de $a$ et $b$ divise $a-qb$ ; réciproquement un diviseur commun de $b$ et $a-qb$ divise $a=(a-qb)+qb$.)

3. Le PGCD est un diviseur de $8$ : c'est le plus grand élément de $\{1,2,4,8\}$ qui divise $n+2$.

   **$n$ impair.** $n+2$ est impair : ni $2$, ni $4$, ni $8$ ne le divisent. Donc $d_n=\boxed{1}$.

   **$n=4q$.** $n+2=4q+2=2\,(2q+1)$ : divisible par $2$, mais pas par $4$ (le reste de la division par $4$ est $2$). Donc $d_n=\boxed{2}$.

   **$n=8q+2$.** $n+2=8q+4=4\,(2q+1)$ : divisible par $4$, mais pas par $8$ (le reste de la division par $8$ est $4$). Donc $d_n=\boxed{4}$.

   **$n=8q+6$.** $n+2=8q+8=8\,(q+1)$ : divisible par $8$. Donc $d_n=\boxed{8}$.

   Ces quatre cas épuisent tous les entiers : un entier pair est de la forme $8q$, $8q+2$, $8q+4$ ou $8q+6$, et $8q$ et $8q+4$ sont des multiples de $4$. Le tableau de la question 1 est cohérent ($d_6=8$, $d_2=4$, $d_0=d_4=d_8=2$).

4. $2026=8\times253+2$ : on est dans le cas $n=8q+2$.

   $$\displaystyle d_{2026}=\boxed{4}\qquad(2028=4\times507\ \text{et}\ 2028=8\times253+4)$$

   $2030=8\times253+6$ : on est dans le cas $n=8q+6$.

   $$\displaystyle d_{2030}=\boxed{8}\qquad(2032=8\times254)$$

:::intuition
Le reste $8$ de la division de $n^2+4$ par $n+2$ ramène le problème à des critères de divisibilité par $2$, $4$ et $8$.
:::

:::trap
Croire que $d_n=1$ pour tout $n$ (par exemple $d_6=8$).
:::
