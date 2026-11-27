---
uid: "0000304"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Un prêt remboursé par annuités constantes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["suites", "suite-arithmetico-geometrique", "modelisation"]
provenance: "own"
dressing: "remboursement d'un prêt par annuités"
rung: 5
batch: "2026-11-20-suites-3eco-A"
---

On emprunte $10\,000$ dinars à $6\,\%$ par an. Chaque année, la banque ajoute les intérêts à la dette puis on verse une annuité de $1\,200$ dinars. On note $D_n$ la dette restante après $n$ versements ($D_0=10\,000$).

1. Montrer que $D_{n+1}=1{,}06\,D_n-1\,200$. Calculer $D_1$ et $D_2$.

2. Trouver $\alpha$ tel que $\alpha=1{,}06\,\alpha-1\,200$, puis exprimer $D_n$ en fonction de $n$ à l'aide de $E_n=D_n-\alpha$.

3. Au bout de combien d'années le prêt est-il remboursé ? On donne $1{,}06^{11}\approx1{,}898$ et $1{,}06^{12}\approx2{,}012$.

4. Que se passerait-il avec une annuité de $600$ dinars seulement ?

---

## Solution

1. Les intérêts de $6\,\%$ multiplient la dette par $1{,}06$, puis on retire l'annuité :

   $$\displaystyle D_{n+1}=1{,}06\,D_n-1\,200.$$

   $$\displaystyle D_1=1{,}06\times10\,000-1\,200=9\,400\qquad D_2=1{,}06\times9\,400-1\,200=9\,964-1\,200=8\,764.$$

2. $\alpha=1{,}06\,\alpha-1\,200\iff0{,}06\,\alpha=1\,200\iff\alpha=20\,000$.

   $E_{n+1}=D_{n+1}-20\,000=1{,}06\,D_n-21\,200=1{,}06\,(D_n-20\,000)=1{,}06\,E_n$.

   $(E_n)$ est géométrique de raison $1{,}06$, de premier terme $E_0=10\,000-20\,000=-10\,000$. Donc

   $$\displaystyle \boxed{D_n=20\,000-10\,000\times1{,}06^n}.$$

3. Le prêt est remboursé quand $D_n\le0$ :

   $$\displaystyle 20\,000-10\,000\times1{,}06^n\le0\iff1{,}06^n\ge2.$$

   On a $1{,}06^{11}\approx1{,}898<2$ et $1{,}06^{12}\approx2{,}012\ge2$ : le prêt est remboursé après $\boxed{12\text{ ans}}$.

   Au $12^{\text{e}}$ versement, $D_{12}\approx-122$ : le dernier versement est inférieur de $122$ dinars environ à $1\,200$.

4. Avec $600$ dinars : $\alpha=\dfrac{600}{0{,}06}=10\,000=D_0$. La suite est *constante* : $D_n=10\,000$ pour tout $n$. L'annuité de $600$ paie exactement les intérêts ($6\,\%$ de $10\,000$) : la dette ne diminue jamais.

   :::trap
   Avec une annuité inférieure à $600$, la dette *augmenterait*.
   :::

:::intuition
Une annuité qui ne couvre pas les intérêts ne rembourse jamais la dette.
:::
