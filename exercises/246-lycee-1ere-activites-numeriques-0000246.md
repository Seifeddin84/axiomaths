---
uid: "0000246"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Comparer sans calculatrice"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["comparaison", "radicaux", "sans-calculatrice", "carres"]
provenance: own
dressing: "comparer des sommes de racines"
rung: 3
---

1. Comparer $a=\sqrt7+\sqrt{10}$ et $b=\sqrt5+\sqrt{13}$. [Comparer les carrés, puis montrer que $2(\sqrt{70}-\sqrt{65})<1$ à l'aide de la quantité conjuguée.]

2. Comparer $\sqrt{2026}-\sqrt{2025}$ et $\sqrt{2027}-\sqrt{2026}$.

3. Montrer que $\sqrt{2+\sqrt3}=\dfrac{\sqrt6+\sqrt2}2$.

4. Montrer que pour tout entier $n\ge1$ : $\sqrt n+\sqrt{n+2}<2\sqrt{n+1}$. Comparer alors $\sqrt{2025}+\sqrt{2027}$ et $2\sqrt{2026}$.

---

## Solution

> **Comparer deux nombres positifs.** Si $A>0$ et $B>0$ : $\boxed{A<B\iff A^2<B^2}$. Et si $0<A<B$ alors $\boxed{\dfrac1A>\dfrac1B}$.

1. On compare les carrés (les deux nombres sont positifs) :

   $$\displaystyle a^2=7+2\sqrt{70}+10=17+2\sqrt{70}\qquad b^2=5+2\sqrt{65}+13=18+2\sqrt{65}$$

   $$\displaystyle a<b\iff17+2\sqrt{70}<18+2\sqrt{65}\iff2\left(\sqrt{70}-\sqrt{65}\right)<1$$

   On utilise la quantité conjuguée :

   $$\displaystyle \sqrt{70}-\sqrt{65}=\dfrac{70-65}{\sqrt{70}+\sqrt{65}}=\dfrac5{\sqrt{70}+\sqrt{65}}$$

   Or $\sqrt{70}>8$ et $\sqrt{65}>8$ (car $64<65<70$), donc $\sqrt{70}+\sqrt{65}>16$ et :

   $$\displaystyle \sqrt{70}-\sqrt{65}<\dfrac5{16}\quad\text{donc}\quad2\left(\sqrt{70}-\sqrt{65}\right)<\dfrac58<1$$

   Conclusion : $a<b$.

2. On écrit chaque différence avec la conjuguée :

   $$\displaystyle \sqrt{2026}-\sqrt{2025}=\dfrac1{\sqrt{2026}+\sqrt{2025}}\qquad\sqrt{2027}-\sqrt{2026}=\dfrac1{\sqrt{2027}+\sqrt{2026}}$$

   Le premier dénominateur est plus petit que le second ($\sqrt{2025}<\sqrt{2027}$). L'inverse d'un plus petit nombre est plus grand :

   $$\displaystyle \sqrt{2026}-\sqrt{2025}>\sqrt{2027}-\sqrt{2026}$$

3. On calcule le carré du nombre proposé :

   $$\displaystyle \left(\dfrac{\sqrt6+\sqrt2}2\right)^2=\dfrac{6+2\sqrt{12}+2}4=\dfrac{8+4\sqrt3}4=2+\sqrt3$$

   Il est positif, donc $\sqrt{2+\sqrt3}=\dfrac{\sqrt6+\sqrt2}2$.

4. Les deux membres sont positifs : on élève au carré.

   $$\displaystyle \left(\sqrt n+\sqrt{n+2}\right)^2=2n+2+2\sqrt{n(n+2)}\qquad\left(2\sqrt{n+1}\right)^2=4n+4$$

   $$\displaystyle 2n+2+2\sqrt{n(n+2)}<4n+4\iff\sqrt{n(n+2)}<n+1$$

   On élève encore au carré (positifs) :

   $$\displaystyle n(n+2)<(n+1)^2\iff n^2+2n<n^2+2n+1$$

   Cette inégalité est vraie. Avec $n=2025$ : $\sqrt{2025}+\sqrt{2027}<2\sqrt{2026}$.

**Idée :** passer par les carrés ou par la conjuguée.    **Piège :** élever une inégalité au carré sans avoir vérifié que les deux membres sont positifs.
