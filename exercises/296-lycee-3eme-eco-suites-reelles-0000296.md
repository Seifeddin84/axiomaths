---
uid: "0000296"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "QCM : limites de suites usuelles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["qcm", "suites", "limite", "suite-geometrique", "somme"]
provenance: "own"
dressing: "limite d'une suite géométrique"
rung: 1
batch: "2026-11-20-suites-3eco-A"
---

Pour chaque question, une seule réponse est correcte. Cocher la bonne réponse.

1. La suite $u_n=3\times(0{,}5)^n$ a pour limite :

   - [ ] A) $0$

   - [ ] B) $3$

   - [ ] C) $+\infty$

   - [ ] D) $1{,}5$


2. La suite $u_n=2\times(1{,}1)^n$ a pour limite :

   - [ ] A) $2$

   - [ ] B) $0$

   - [ ] C) $+\infty$

   - [ ] D) $1{,}1$


3. La suite $u_n=5-2\times(0{,}9)^n$ a pour limite :

   - [ ] A) $5$

   - [ ] B) $3$

   - [ ] C) $-\infty$

   - [ ] D) $0$


4. La suite $u_n=(-2)^n$ :

   - [ ] A) tend vers $+\infty$

   - [ ] B) tend vers $-\infty$

   - [ ] C) tend vers $0$

   - [ ] D) n'a pas de limite


5. La suite $u_n=-3\times(1{,}5)^n$ a pour limite :

   - [ ] A) $-\infty$

   - [ ] B) $0$

   - [ ] C) $+\infty$

   - [ ] D) $-3$


6. Quand $n\to+\infty$, la somme $1+\dfrac12+\dfrac14+\dots+\left(\dfrac12\right)^n$ tend vers :

   - [ ] A) $1$

   - [ ] B) $2$

   - [ ] C) $+\infty$

   - [ ] D) $\dfrac32$

---

## Solution

:::property[Limite de $q^n$]
- $q>1\Rightarrow q^n\to+\infty$ ;

- $-1<q<1\Rightarrow q^n\to0$ ;

- $q\le-1\Rightarrow$ pas de limite.
:::

1. $u_n=3\times0{,}5^n$ : $0<0{,}5<1$, donc $0{,}5^n\to0$ et $u_n\to3\times0=0$. **Réponse A.**

2. $u_n=2\times1{,}1^n$ : $1{,}1>1$, donc $1{,}1^n\to+\infty$, et comme $2>0$, $u_n\to+\infty$. **Réponse C.**

3. $u_n=5-2\times0{,}9^n$ : $0{,}9^n\to0$, donc $u_n\to5-2\times0=5$. **Réponse A.** (Le « $3$ » est la valeur de $u_0$, pas la limite.)

4. $u_n=(-2)^n$ vaut $1,\,-2,\,4,\,-8,\,16,\dots$ : les signes alternent et la valeur absolue grandit. La raison $-2\le-1$ : **pas de limite**. **Réponse D.**

5. $u_n=-3\times1{,}5^n$ : $1{,}5^n\to+\infty$ et $-3<0$, donc $u_n\to-\infty$. **Réponse A.**

6. Somme géométrique de premier terme $1$ et de raison $\frac12$ :

   $$\displaystyle S_n=1\times\frac{1-\left(\frac12\right)^{n+1}}{1-\frac12}=2\left(1-\left(\tfrac12\right)^{n+1}\right)\longrightarrow2.$$

   **Réponse B.**

:::intuition
Pour une suite géométrique tout se joue sur la raison $q$ (et sur le signe du premier terme quand $q>1$).
:::
