---
uid: "0000301"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Gestion d'un stock : suite récurrente"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["suites", "suite-arithmetico-geometrique", "suite-auxiliaire", "modelisation"]
provenance: "own"
dressing: "stock avec vente proportionnelle et réapprovisionnement"
rung: 3
batch: "2026-11-20-suites-3eco-A"
---

Un entrepôt contient $4\,000$ articles au début du mois $0$. Chaque mois, $25\,\%$ du stock est vendu puis $2\,000$ articles sont livrés. On note $U_n$ le stock au début du mois $n$.

1. Montrer que $U_{n+1}=0{,}75\,U_n+2\,000$. Calculer $U_1$ et $U_2$.

2. On pose $V_n=U_n-8\,000$. Montrer que $(V_n)$ est géométrique ; préciser sa raison et son premier terme.

3. En déduire $U_n$ en fonction de $n$.

4. Déterminer la limite de $(U_n)$. Interpréter.

---

## Solution

1. Après la vente de $25\,\%$ du stock il reste $75\,\%$, soit $0{,}75\,U_n$ ; puis on ajoute $2\,000$ articles :

   $$\displaystyle U_{n+1}=0{,}75\,U_n+2\,000.$$

   $$\displaystyle U_1=0{,}75\times4\,000+2\,000=5\,000\qquad U_2=0{,}75\times5\,000+2\,000=5\,750.$$

2. **D'où vient $8\,000$ ?** C'est la valeur $\alpha$ pour laquelle le stock ne bougerait pas : $\alpha=0{,}75\,\alpha+2\,000\iff0{,}25\,\alpha=2\,000\iff\alpha=8\,000$.

   Calculons $V_{n+1}$ avec $V_n=U_n-8\,000$ :

   $$\displaystyle V_{n+1}=U_{n+1}-8\,000=0{,}75\,U_n+2\,000-8\,000=0{,}75\,U_n-6\,000=0{,}75\,(U_n-8\,000)=0{,}75\,V_n.$$

   $(V_n)$ est géométrique de raison $\boxed{0{,}75}$ et de premier terme $V_0=4\,000-8\,000=$ $\boxed{-4\,000}$.

3. $V_n=-4\,000\times0{,}75^n$, donc $U_n=V_n+8\,000$ :

   $$\displaystyle \boxed{U_n=8\,000-4\,000\times0{,}75^n}.$$

   *Vérification* : $U_1=8\,000-3\,000=5\,000$ $\checkmark$ $U_2=8\,000-4\,000\times0{,}5625=5\,750$ $\checkmark$

4. $0<0{,}75<1$, donc $0{,}75^n\to0$ et $U_n\to8\,000$.

   À long terme, le stock se stabilise à $8\,000$ articles (la valeur d'équilibre $\alpha$) : chaque mois, ce qu'on vend ($25\,\%$ de $8\,000=2\,000$) est exactement ce qu'on livre.

:::intuition
Le stock se rapproche de la valeur d'équilibre $\alpha$ où ce qui sort est égal à ce qui entre.
:::
