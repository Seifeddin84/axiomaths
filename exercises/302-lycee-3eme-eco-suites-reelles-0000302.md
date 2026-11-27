---
uid: "0000302"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites Réelles"
source: "Axiomaths"
title: "Un étang et la pêche : selon la population de départ"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["suites", "suite-arithmetico-geometrique", "modelisation"]
provenance: "own"
dressing: "selon la population de départ, l'étang se vide ou se remplit"
rung: 5
batch: "2026-11-20-suites-3eco-A"
---

Dans un étang, la population de poissons augmente de $20\,\%$ par an, mais on pêche $10$ poissons à la fin de chaque année. On note $U_n$ la population au bout de $n$ années : $U_{n+1}=1{,}2\,U_n-10$.

1. Trouver le réel $\alpha$ tel que $\alpha=1{,}2\,\alpha-10$.

2. On pose $V_n=U_n-\alpha$. Montrer que $(V_n)$ est géométrique.

3. Cas $U_0=40$ : exprimer $U_n$ et déterminer sa limite. Que devient l'étang ?

4. Cas $U_0=60$ : même question.

5. Quel est le seuil $U_0$ séparant les deux comportements ?

---

## Solution

:::property[Méthode pour $u_{n+1}=a\,u_n+b$]
On cherche $\alpha$ tel que $\alpha=a\alpha+b$, on pose $v_n=u_n-\alpha$ : $(v_n)$ est géométrique de raison $a$ et $u_n=\alpha+(u_0-\alpha)\,a^n$.
:::

1. $\alpha=1{,}2\,\alpha-10\iff10=0{,}2\,\alpha\iff$ $\boxed{\alpha=50}$.

2. $V_{n+1}=U_{n+1}-50=1{,}2\,U_n-10-50=1{,}2\,U_n-60=1{,}2\,(U_n-50)=1{,}2\,V_n$.

   $(V_n)$ est géométrique de raison $1{,}2$ et de premier terme $V_0=U_0-50$.

3. $U_0=40$ : $V_0=-10$, donc $V_n=-10\times1{,}2^n$ et

   $$\displaystyle U_n=50-10\times1{,}2^n.$$

   $1{,}2>1$ donc $1{,}2^n\to+\infty$ et $U_n\to-\infty$. Dans le modèle, la population devient négative : en réalité **l'étang est vidé** en un nombre fini d'années. $10\times1{,}2^9\approx51{,}6>50$ : dès $n=9$ on a $U_n<0$.

4. $U_0=60$ : $V_0=10$, $U_n=50+10\times1{,}2^n\to+\infty$ : la population croît sans limite (dans le modèle).

5. Le seuil est $U_0=\alpha=50$ : alors $V_0=0$, $U_n=50$ pour tout $n$ (la pêche compense exactement la croissance).

   **Conclusion :** $U_0<50$ : extinction ; $U_0=50$ : équilibre ; $U_0>50$ : croissance. L'équilibre est *instable*, contrairement à celui du stock de l'exercice précédent (raison $0{,}75$).

:::intuition
Selon que $U_0$ est au-dessus ou en dessous de l'équilibre $\alpha$, la suite s'en éloigne dans un sens ou dans l'autre.
:::
