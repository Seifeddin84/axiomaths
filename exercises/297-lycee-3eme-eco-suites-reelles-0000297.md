---
uid: "0000297"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Placement à intérêts simples"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["suites", "suite-arithmetique", "interets-simples", "terme-general", "seuil"]
provenance: "own"
dressing: "suite arithmétique"
rung: 1
batch: "2026-11-20-suites-3eco-A"
---

Une personne place $2\,000$ dinars à intérêts simples au taux annuel de $4\,\%$ : chaque année, l'intérêt est calculé sur le capital de départ. On note $U_n$ le capital (en dinars) au bout de $n$ années, donc $U_0=2\,000$.

1. Calculer $U_1$ et $U_2$. Montrer que $(U_n)$ est une suite arithmétique dont on donnera la raison.

2. Exprimer $U_n$ en fonction de $n$. Calculer $U_{10}$.

3. À partir de quelle année le capital dépasse-t-il $3\,000$ dinars ?

---

## Solution

1. L'intérêt annuel est toujours calculé sur $2\,000$ : $4\,\%\times2\,000=80$ dinars.

   $$\displaystyle U_1=2\,000+80=2\,080\qquad U_2=2\,080+80=2\,160.$$

   Pour tout $n$, $U_{n+1}=U_n+80$ : on ajoute toujours le même nombre. $(U_n)$ est donc arithmétique de raison $\boxed{r=80}$.

2. **Rappel.**

   :::property[Terme général d'une suite arithmétique]
   $u_n=u_0+n\,r$.
   :::

   $$\displaystyle \boxed{U_n=2\,000+80\,n}\qquad U_{10}=2\,000+800=2\,800\text{ dinars}.$$

3. On résout l'inéquation $U_n>3\,000$ :

   $$\displaystyle 2\,000+80\,n>3\,000\iff80\,n>1\,000\iff n>12{,}5.$$

   Le plus petit entier est $n=13$. *Vérification* : $U_{12}=2\,960<3\,000$ et $U_{13}=3\,040>3\,000$ $\checkmark$

   Le capital dépasse $3\,000$ dinars à partir de la $13^{\text{e}}$ année.

   :::trap
   À intérêts *composés* le capital serait multiplié par $1{,}04$ chaque année : suite géométrique, croissance plus rapide.
   :::

:::intuition
Montant constant chaque année : on ajoute toujours le même nombre, c'est une suite arithmétique.
:::
