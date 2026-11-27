---
uid: "0000255"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Challenge : la partie entière d'une somme de 1/√k"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["sommes", "encadrement", "radicaux"]
provenance: own
idea: "telescopage"
dressing: "challenge : partie entière d'une somme de 1/√k"
rung: 5
---

1. Montrer que pour tout entier $k\ge1$ : $\dfrac1{2\sqrt{k+1}}<\sqrt{k+1}-\sqrt k<\dfrac1{2\sqrt k}$.

2. En déduire que $2\big(\sqrt{k+1}-\sqrt k\big)<\dfrac1{\sqrt k}$ pour $k\ge1$, et que $\dfrac1{\sqrt k}<2\big(\sqrt k-\sqrt{k-1}\big)$ pour $k\ge2$.

3. On pose $S_n=1+\dfrac1{\sqrt2}+\dfrac1{\sqrt3}+\dots+\dfrac1{\sqrt n}$. Montrer que $2\big(\sqrt{n+1}-1\big)<S_n<2\sqrt n-1$.

4. Montrer que $18<S_{100}<19$.

5. Déterminer la partie entière de $S_{10\,000}$.

---

## Solution

1.
   > **Quantité conjuguée.** $\boxed{\sqrt{k+1}-\sqrt k=\dfrac1{\sqrt{k+1}+\sqrt k}}$, car $(\sqrt{k+1}-\sqrt k)(\sqrt{k+1}+\sqrt k)=(k+1)-k=1$.

   On encadre le dénominateur : $\sqrt k<\sqrt{k+1}$ donc

   $$\displaystyle 2\sqrt k<\sqrt k+\sqrt{k+1}<2\sqrt{k+1}$$

   L'inverse change l'ordre :

   $$\displaystyle \dfrac1{2\sqrt{k+1}}<\dfrac1{\sqrt{k+1}+\sqrt k}<\dfrac1{2\sqrt k}$$

   C'est exactement :

   $$\displaystyle \dfrac1{2\sqrt{k+1}}<\sqrt{k+1}-\sqrt k<\dfrac1{2\sqrt k}$$

2. L'inégalité de droite de 1), multipliée par $2$, donne :

   $$\displaystyle 2\left(\sqrt{k+1}-\sqrt k\right)<\dfrac1{\sqrt k}\qquad(k\geq1)$$

   L'inégalité de gauche de 1), appliquée avec $k-1$ à la place de $k$ (possible si $k-1\geq1$, soit $k\geq2$) :

   $$\displaystyle \dfrac1{2\sqrt k}<\sqrt k-\sqrt{k-1}\implies\dfrac1{\sqrt k}<2\left(\sqrt k-\sqrt{k-1}\right)\qquad(k\geq2)$$

3.
   > **Somme télescopique.** $\boxed{\sum_{k=1}^n\left(\sqrt{k+1}-\sqrt k\right)=\sqrt{n+1}-1}$

   **Minoration.** On ajoute la première inégalité de 2) pour $k=1,2,\dots,n$ :

   $$\displaystyle 2\sqrt{n+1}-2<S_n\implies2\left(\sqrt{n+1}-1\right)<S_n$$

   **Majoration.** On ajoute la seconde inégalité de 2) pour $k=2,\dots,n$ (le terme $k=1$ n'est pas concerné) :

   $$\displaystyle S_n-1<2\left(\sqrt n-\sqrt1\right)=2\sqrt n-2\implies S_n<2\sqrt n-1$$

4. Pour $n=100$ :

   $$\displaystyle S_{100}<2\times10-1=19$$

   $$\displaystyle S_{100}>2\left(\sqrt{101}-1\right)>2(10-1)=18\quad\text{car }\sqrt{101}>10$$

   $$\displaystyle 18<S_{100}<19$$

5. Pour $n=10\,000$ :

   $$\displaystyle S_{10\,000}<2\times100-1=199$$

   $$\displaystyle S_{10\,000}>2\left(\sqrt{10\,001}-1\right)>2(100-1)=198$$

   Donc $198<S_{10\,000}<199$ : la partie entière est $\boxed{198}$.

**Idée :** encadrer chaque terme $\dfrac1{\sqrt k}$ par deux différences de racines qui se télescopent.    **Piège :** sommer la majoration depuis $k=1$ : elle n'est pas valable pour $k=1$, on isole le premier terme.
