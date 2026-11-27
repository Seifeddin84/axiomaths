---
uid: "0000299"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites Réelles"
source: "Axiomaths"
title: "Écritures décimales périodiques et fractions"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["suites", "fractions", "somme-de-termes"]
provenance: "own"
dressing: "écritures décimales périodiques en fractions"
rung: 3
batch: "2026-11-20-suites-3eco-A"
---

1. On pose $S_n=0{,}18+0{,}0018+0{,}000018+\dots$ où le $n$-ième terme (pour $n\ge0$) est $0{,}18\times(0{,}01)^n$.

   a. Calculer $S_n=\sum_{k=0}^{n}0{,}18\times(0{,}01)^k$ en fonction de $n$.

   b. En déduire la limite de $S_n$ et montrer que $0{,}181818\ldots=\dfrac2{11}$.

2. Écrire de même $0{,}2777\ldots$ sous forme de fraction irréductible. On pourra écrire $0{,}2777\ldots=0{,}2+0{,}0777\ldots$

---

## Solution

1.
   a. **Rappel.**

      :::property[Somme géométrique]
      Si $q\neq1$ : $u_0+u_1+\dots+u_n=u_0\,\dfrac{1-q^{\,n+1}}{1-q}$ (il y a $n+1$ termes).
      :::

      Ici $u_0=0{,}18$ et $q=0{,}01$ :

      $$\displaystyle S_n=0{,}18\times\frac{1-0{,}01^{\,n+1}}{1-0{,}01}=\frac{0{,}18}{0{,}99}\bigl(1-0{,}01^{\,n+1}\bigr)=\boxed{\dfrac2{11}\bigl(1-0{,}01^{\,n+1}\bigr)}.$$

      (On a simplifié $\dfrac{0{,}18}{0{,}99}=\dfrac{18}{99}=\dfrac2{11}$.)

   b. Comme $-1<0{,}01<1$, $0{,}01^{\,n+1}\to0$, donc $S_n\to\dfrac2{11}$.

      Le développement décimal $0{,}1818\ldots$ est exactement cette somme « infinie » : $0{,}181818\ldots=$ $\boxed{\dfrac2{11}}$.

      *Vérification* : $2\div11=0{,}181818\ldots$ $\checkmark$

2. $0{,}2777\ldots=0{,}2+0{,}07+0{,}007+0{,}0007+\dots$

   Les termes à partir de $0{,}07$ forment une somme géométrique de premier terme $0{,}07$ et de raison $0{,}1$ :

   :::property[Somme infinie]
   Si $-1<q<1$, $u_0+u_0q+\dots+u_0q^n\to\dfrac{u_0}{1-q}$.
   :::

   $$\displaystyle 0{,}07+0{,}007+\dots=\frac{0{,}07}{1-0{,}1}=\frac{0{,}07}{0{,}9}=\frac7{90}.$$

   $$\displaystyle 0{,}2777\ldots=\frac15+\frac7{90}=\frac{18}{90}+\frac7{90}=\frac{25}{90}=\boxed{\dfrac5{18}}.$$

   *Vérification* : $5\div18=0{,}27777\ldots$ $\checkmark$

   :::trap
   La raison est $0{,}1$ (et non $0{,}01$) pour $0{,}0777\ldots$ : chaque terme est dix fois plus petit que le précédent.
   :::

:::intuition
Une écriture décimale périodique est la somme infinie d'une suite géométrique de raison comprise entre $0$ et $1$.
:::
