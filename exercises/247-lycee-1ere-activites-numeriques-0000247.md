---
uid: "0000247"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Synthèse : produits et sommes télescopiques"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["somme-telescopique", "factorisation", "fractions", "identites-remarquables"]
provenance: own
idea: "telescopage"
dressing: "synthèse : produits et sommes télescopiques"
rung: 5
---

1. Factoriser $1-\dfrac1{k^2}$ et $\dfrac1{k^2-1}$ pour $k\ge2$.

2. Pour $n\ge2$, on pose $P_n=\Big(1-\dfrac14\Big)\Big(1-\dfrac19\Big)\cdots\Big(1-\dfrac1{n^2}\Big)$. Calculer $P_2$, $P_3$, $P_4$ et conjecturer $P_n$ ; démontrer la conjecture.

3. Pour quelles valeurs de $n$ a-t-on $P_n<0{,}5001$ ?

4. On pose $S_n=\dfrac1{2^2-1}+\dfrac1{3^2-1}+\dots+\dfrac1{n^2-1}$. Montrer que $\dfrac1{k^2-1}=\dfrac12\Big(\dfrac1{k-1}-\dfrac1{k+1}\Big)$, puis que $S_n=\dfrac34-\dfrac{2n+1}{2n(n+1)}$. Calculer $S_{10}$.

---

## Solution

1.
   > **Différence de deux carrés.** $\boxed{a^2-b^2=(a-b)(a+b)}$.

   $$\displaystyle 1-\dfrac1{k^2}=\dfrac{k^2-1}{k^2}=\dfrac{(k-1)(k+1)}{k\times k}\qquad\dfrac1{k^2-1}=\dfrac1{(k-1)(k+1)}$$

2. On calcule les premiers produits :

   $$\displaystyle P_2=1-\dfrac14=\dfrac34\qquad P_3=\dfrac34\times\dfrac89=\dfrac23\qquad P_4=\dfrac23\times\dfrac{15}{16}=\dfrac58$$

   Conjecture : $P_n=\dfrac{n+1}{2n}$ (on vérifie : $\dfrac34$, $\dfrac46=\dfrac23$, $\dfrac58$).

   **Preuve.** D'après 1), $P_n$ est le produit de deux produits :

   $$\displaystyle P_n=\prod_{k=2}^n\dfrac{k-1}k\times\prod_{k=2}^n\dfrac{k+1}k$$

   Le premier se simplifie : $\dfrac12\times\dfrac23\times\dfrac34\times\dots\times\dfrac{n-1}n=\dfrac1n$.

   Le second aussi : $\dfrac32\times\dfrac43\times\dfrac54\times\dots\times\dfrac{n+1}n=\dfrac{n+1}2$.

   $$\displaystyle P_n=\dfrac1n\times\dfrac{n+1}2=\dfrac{n+1}{2n}$$

3. On écrit $P_n=\dfrac{n+1}{2n}=\dfrac12+\dfrac1{2n}$ et $0{,}5001=\dfrac12+\dfrac1{10\,000}$.

   $$\displaystyle P_n<0{,}5001\iff\dfrac1{2n}<\dfrac1{10\,000}\iff2n>10\,000\iff n>5000$$

   Donc $n\geq5001$.

4. On calcule le membre de droite :

   $$\displaystyle \dfrac12\left(\dfrac1{k-1}-\dfrac1{k+1}\right)=\dfrac12\times\dfrac{(k+1)-(k-1)}{(k-1)(k+1)}=\dfrac12\times\dfrac2{k^2-1}=\dfrac1{k^2-1}$$

   On somme de $k=2$ à $n$ :

   $$\displaystyle S_n=\dfrac12\left[\left(1-\dfrac13\right)+\left(\dfrac12-\dfrac14\right)+\left(\dfrac13-\dfrac15\right)+\dots+\left(\dfrac1{n-1}-\dfrac1{n+1}\right)\right]$$

   Tout se simplifie sauf $1$, $\dfrac12$, $-\dfrac1n$ et $-\dfrac1{n+1}$ :

   $$\displaystyle S_n=\dfrac12\left(1+\dfrac12-\dfrac1n-\dfrac1{n+1}\right)=\dfrac34-\dfrac{2n+1}{2n(n+1)}$$

   Pour $n=10$ :

   $$\displaystyle S_{10}=\dfrac34-\dfrac{21}{220}=\dfrac{165}{220}-\dfrac{21}{220}=\dfrac{144}{220}=\dfrac{36}{55}$$

**Idée :** la factorisation $(k-1)(k+1)$ fait apparaître deux produits (ou deux sommes) qui se simplifient presque entièrement.    **Piège :** décalage d'indices : $\displaystyle\prod_{k=2}^n\dfrac{k+1}k=\dfrac{n+1}2$ et non $n+1$.
