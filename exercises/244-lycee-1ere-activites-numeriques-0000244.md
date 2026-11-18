---
uid: "0000244"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Une somme qui se télescope"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["telescopage", "conjugue", "somme", "radicaux"]
provenance: own
idea: "telescopage"
dressing: "conjugue"
---

Pour tout entier $k\ge1$, on pose $u_k=\dfrac1{\sqrt k+\sqrt{k+1}}$.

1. Montrer que $u_k=\sqrt{k+1}-\sqrt k$.

2. Pour $n\ge1$, on pose $S_n=u_1+u_2+\dots+u_n$. Montrer que $S_n=\sqrt{n+1}-1$.

3. Calculer $S_{24}$, puis déterminer l'entier $n$ tel que $S_n=9$.

4. Pour quelles valeurs de $n\in\{1,\dots,100\}$ le nombre $S_n$ est-il un entier ?

5. Calculer $T=\dfrac1{1+\sqrt3}+\dfrac1{\sqrt3+\sqrt5}+\dfrac1{\sqrt5+\sqrt7}+\dots+\dfrac1{\sqrt{79}+\sqrt{81}}$.

---

## Solution

1.
   > **Quantité conjuguée.** $\boxed{(a-b)(a+b)=a^2-b^2}$. On multiplie le numérateur et le dénominateur par $\sqrt{k+1}-\sqrt k$.

   $$\displaystyle u_k=\dfrac{1}{\sqrt k+\sqrt{k+1}}\times\dfrac{\sqrt{k+1}-\sqrt k}{\sqrt{k+1}-\sqrt k}=\dfrac{\sqrt{k+1}-\sqrt k}{(k+1)-k}=\sqrt{k+1}-\sqrt k$$

2.
   > **Somme télescopique.** Quand chaque terme est une différence $v_{k+1}-v_k$, presque tout se simplifie : $\boxed{\sum_{k=1}^n(v_{k+1}-v_k)=v_{n+1}-v_1}$.

   On écrit les premiers termes :

   $$\displaystyle S_n=(\sqrt2-\sqrt1)+(\sqrt3-\sqrt2)+(\sqrt4-\sqrt3)+\dots+(\sqrt{n+1}-\sqrt n)$$

   Chaque racine apparaît une fois avec $+$ et une fois avec $-$, sauf la première et la dernière :

   $$\displaystyle S_n=\sqrt{n+1}-\sqrt1=\sqrt{n+1}-1$$

3. Pour $n=24$ : $S_{24}=\sqrt{25}-1=5-1=4$.

   Pour $S_n=9$ :

   $$\displaystyle \sqrt{n+1}-1=9\iff\sqrt{n+1}=10\iff n+1=100\iff n=99$$

4. $S_n=\sqrt{n+1}-1$ est un entier si et seulement si $\sqrt{n+1}$ est un entier, c'est-à-dire si $n+1$ est un carré parfait.

   Pour $1\leq n\leq100$, on a $2\leq n+1\leq101$. Les carrés parfaits de cet intervalle sont $4,9,16,25,36,49,64,81,100$. Donc :

   $$\displaystyle n\in\{3\,;8\,;15\,;24\,;35\,;48\,;63\,;80\,;99\}$$

   (neuf valeurs, pour lesquelles $S_n=1,2,\dots,9$).

5. Les dénominateurs sont de la forme $\sqrt{2j-1}+\sqrt{2j+1}$ : $j=1$ donne $1+\sqrt3$ et $j=40$ donne $\sqrt{79}+\sqrt{81}$. On rationalise un terme :

   $$\displaystyle \dfrac1{\sqrt{2j-1}+\sqrt{2j+1}}=\dfrac{\sqrt{2j+1}-\sqrt{2j-1}}{(2j+1)-(2j-1)}=\dfrac{\sqrt{2j+1}-\sqrt{2j-1}}{2}$$

   On somme de $j=1$ à $40$ (télescopage) :

   $$\displaystyle T=\dfrac12\left(\sqrt{81}-\sqrt1\right)=\dfrac{9-1}2=4$$

**Idée :** la conjuguée transforme chaque terme en une différence qui se télescope.    **Piège :** oublier le facteur $\dfrac12$ quand la différence des carrés vaut $2$.
