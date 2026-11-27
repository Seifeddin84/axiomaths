---
uid: "0000300"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Dons décroissants d'une association"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["suites", "suite-geometrique", "somme-de-termes", "modelisation"]
provenance: "own"
dressing: "dons annuels décroissants d'une association"
rung: 2
batch: "2026-11-20-suites-3eco-A"
---

Une association reçoit d'un mécène un don de $600$ dinars la première année ($D_0=600$). Chaque année suivante, le don est égal à $75\,\%$ du don de l'année précédente. On note $D_n$ le don de l'année $n$ et $C_n=D_0+D_1+\dots+D_n$ le total reçu.

1. Exprimer $D_n$ en fonction de $n$.

2. Montrer que $C_n=2\,400\,\bigl(1-0{,}75^{\,n+1}\bigr)$.

3. Déterminer $\displaystyle\lim_{n\to+\infty}C_n$. L'association peut-elle espérer recevoir $2\,500$ dinars au total ?

4. À partir de quelle année le total dépasse-t-il $2\,300$ dinars ?

---

## Solution

1. Chaque don est $75\,\%$ du précédent : $D_{n+1}=0{,}75\,D_n$. La suite $(D_n)$ est géométrique de raison $0{,}75$ et de premier terme $600$ :

   $$\displaystyle \boxed{D_n=600\times0{,}75^n}.$$

2. $C_n=D_0+D_1+\dots+D_n$ est la somme de $n+1$ termes d'une suite géométrique de raison $q=0{,}75\neq1$ :

   :::property[Somme géométrique]
   $u_0+\dots+u_n=u_0\,\dfrac{1-q^{\,n+1}}{1-q}$.
   :::

   $$\displaystyle C_n=600\times\frac{1-0{,}75^{\,n+1}}{1-0{,}75}=\frac{600}{0{,}25}\bigl(1-0{,}75^{\,n+1}\bigr)=\boxed{2\,400\bigl(1-0{,}75^{\,n+1}\bigr)}.$$

3. $0<0{,}75<1$, donc $0{,}75^{\,n+1}\to0$ et $C_n\to2\,400\times(1-0)=$ $\boxed{2\,400}$.

   Comme $C_n=2\,400\bigl(1-0{,}75^{\,n+1}\bigr)<2\,400$ pour tout $n$, le total ne dépassera *jamais* $2\,400$ dinars : l'association ne peut pas espérer $2\,500$ dinars.

4. Le total est croissant (on ajoute des dons positifs). On calcule :

   $$\displaystyle C_{10}=2\,400\bigl(1-0{,}75^{11}\bigr)\approx2\,298{,}6\qquad C_{11}=2\,400\bigl(1-0{,}75^{12}\bigr)\approx2\,324{,}0.$$

   $C_{10}<2\,300<C_{11}$ : le total dépasse $2\,300$ dinars à partir de l'année $n=11$.

   **Remarque :** algébriquement, $C_n>2\,300\iff0{,}75^{\,n+1}<\dfrac1{96}$.

:::intuition
La somme cumulée d'une suite géométrique de raison $q\in]0\,;1[$ reste inférieure à $\dfrac{u_0}{1-q}$.
:::
