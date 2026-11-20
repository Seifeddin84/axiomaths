---
uid: "0000303"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Modèle de revenu : approche d'un niveau d'équilibre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["suites", "suite-recurrente", "economie", "seuil", "limite", "revenu"]
provenance: "own"
dressing: "U(n+1)=aU(n)+b, seuil"
rung: 4
batch: "2026-11-20-suites-3eco-A"
---

Dans une économie simple, le revenu national $Y_n$ (en milliards de dinars) de l'année $n$ vérifie $Y_n=0{,}8\,Y_{n-1}+400$ pour $n\ge1$, avec $Y_0=1\,500$.

1. Calculer $Y_1$ et $Y_2$.

2. Montrer que $Z_n=Y_n-2\,000$ est une suite géométrique. En déduire $Y_n$ en fonction de $n$.

3. Déterminer la limite de $(Y_n)$ et l'interpréter.

4. À partir de quelle année le revenu dépasse-t-il $1\,990$ milliards ?

---

## Solution

1. $Y_1=0{,}8\times1\,500+400=1\,200+400=1\,600$ et $Y_2=0{,}8\times1\,600+400=1\,680$.

2. Le niveau d'équilibre $\alpha$ vérifie $\alpha=0{,}8\,\alpha+400$, soit $0{,}2\,\alpha=400$, $\alpha=2\,000$ : c'est le nombre de l'énoncé.

   $$\displaystyle Z_n=Y_n-2\,000=0{,}8\,Y_{n-1}+400-2\,000=0{,}8\,Y_{n-1}-1\,600=0{,}8\,(Y_{n-1}-2\,000)=0{,}8\,Z_{n-1}.$$

   $(Z_n)$ est géométrique de raison $0{,}8$, avec $Z_0=1\,500-2\,000=-500$. Donc $Z_n=-500\times0{,}8^n$ et

   $$\displaystyle \boxed{Y_n=2\,000-500\times0{,}8^n}.$$

3. $0<0{,}8<1$ donc $0{,}8^n\to0$ et $Y_n\to2\,000$ : le revenu s'approche du niveau d'équilibre de $2\,000$ milliards, par en dessous, sans jamais l'atteindre.

4. $Y_n>1\,990\iff500\times0{,}8^n<10\iff0{,}8^n<0{,}02$.

   $0{,}8^{17}\approx0{,}0225>0{,}02$ et $0{,}8^{18}\approx0{,}0180<0{,}02$. Comme $0{,}8^n$ décroît, la condition est vérifiée dès $\boxed{n=18}$. *Vérification* : $Y_{18}\approx2\,000-9{,}01=1\,990{,}99>1\,990$ $\checkmark$

:::intuition
Le revenu s'approche du niveau d'équilibre sans jamais l'atteindre.
:::
