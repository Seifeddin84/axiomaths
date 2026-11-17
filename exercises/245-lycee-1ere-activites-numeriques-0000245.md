---
uid: "0000245"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Puissances : ne pas calculer, factoriser"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["puissances", "factorisation", "comparaison", "chiffre-des-unites"]
provenance: own
---

1. Ranger par ordre croissant $3^{40}$, $4^{30}$ et $5^{20}$ (sans calculatrice).

2. Montrer que $A_n=\dfrac{3^{n+1}+3^n}{3^n-3^{n-1}}$ ne dépend pas de l'entier $n\ge1$.

3. Développer $(x-1)(x^2+x+1)$ ; on admet que $(x-1)(x^{n-1}+\dots+x+1)=x^n-1$. En déduire que $2^{100}-1$ est un multiple de $15$ et que $2^{2025}-1$ est un multiple de $7$.

4. Donner le chiffre des unités de $7^{2026}$.

5. Combien de chiffres a l'entier $2^{100}\times5^{97}$ ?

---

## Solution

1.
   > **Puissances.** $\boxed{(a^m)^n=a^{mn}}$. Et si $0<a<b$ alors $\boxed{a^n<b^n}$ : à exposant égal, la plus petite base donne la plus petite puissance.

   On met tout avec l'exposant $20$ :

   $$\displaystyle 3^{40}=(3^2)^{20}=9^{20}\qquad4^{30}=(2^2)^{30}=2^{60}=(2^3)^{20}=8^{20}$$

   Comme $5<8<9$ :

   $$\displaystyle 5^{20}<8^{20}<9^{20}\quad\text{c'est-à-dire}\quad5^{20}<4^{30}<3^{40}$$

2. On factorise en haut et en bas par $3^{n-1}$ :

   $$\displaystyle 3^{n+1}+3^n=3^{n-1}(3^2+3)=12\times3^{n-1}\qquad3^n-3^{n-1}=3^{n-1}(3-1)=2\times3^{n-1}$$

   $$\displaystyle A_n=\dfrac{12\times3^{n-1}}{2\times3^{n-1}}=6$$

   Le résultat $6$ ne dépend pas de $n$.

3. On développe :

   $$\displaystyle (x-1)(x^2+x+1)=x^3+x^2+x-x^2-x-1=x^3-1$$

   > **Admis.** Pour un entier $x$, **$x^n-1$ est un multiple de $x-1$**, car $x^n-1=(x-1)(x^{n-1}+\dots+x+1)$.

   $2^{100}=(2^4)^{25}=16^{25}$ : $2^{100}-1=16^{25}-1$ est un multiple de $16-1=15$.

   $2025=3\times675$ donc $2^{2025}=(2^3)^{675}=8^{675}$ : $2^{2025}-1=8^{675}-1$ est un multiple de $8-1=7$.

4. On cherche la période des chiffres des unités de $7^n$ :

   $$\displaystyle 7^1=7\qquad7^2=49\qquad7^3=343\qquad7^4=2401\qquad7^5=16807$$

   Les unités sont $7,9,3,1$ puis cela recommence : période $4$.

   On divise l'exposant par $4$ : $2026=4\times506+2$. Donc $7^{2026}=(7^4)^{506}\times7^2$, qui se termine comme $1\times49$ : chiffre des unités $9$.

5. On sépare $2^{100}=2^3\times2^{97}$ pour former des $10=2\times5$ :

   $$\displaystyle 2^{100}\times5^{97}=2^3\times2^{97}\times5^{97}=8\times(2\times5)^{97}=8\times10^{97}$$

   C'est le chiffre $8$ suivi de $97$ zéros : $98$ chiffres.

**Idée :** mettre les puissances sous un même exposant, ou factoriser la plus petite.    **Piège :** comparer $3^{40}$ et $4^{30}$ en comparant seulement les exposants $40$ et $30$.
