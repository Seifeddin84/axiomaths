---
uid: "0000305"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Suites réelles"
source: "Axiomaths"
title: "Piège : raison négative, pas de limite"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["suites", "suite-arithmetico-geometrique", "divergence", "pieges"]
provenance: "own"
dressing: "raison négative : pas de limite"
rung: 4
batch: "2026-11-20-suites-3eco-A"
---

Soit $(U_n)$ la suite définie par $U_0=1$ et $U_{n+1}=-1{,}5\,U_n+5$.

1. Calculer $U_1$ et $U_2$.

2. Une élève affirme : « si $(U_n)$ a une limite $\ell$, alors $\ell=-1{,}5\,\ell+5$, donc $\ell=2$. » Que vaut ce raisonnement ?

3. Trouver $\alpha$ tel que $\alpha=-1{,}5\,\alpha+5$ et poser $V_n=U_n-\alpha$. Montrer que $(V_n)$ est géométrique et exprimer $U_n$.

4. La suite $(U_n)$ a-t-elle une limite ? Conclure sur l'affirmation de l'élève.

---

## Solution

1. $U_1=-1{,}5\times1+5=3{,}5$ et $U_2=-1{,}5\times3{,}5+5=-5{,}25+5=-0{,}25$.

2. Si $(U_n)$ converge vers $\ell$, alors $U_{n+1}\to\ell$ aussi et on obtient $\ell=-1{,}5\,\ell+5$, soit $\ell=2$. C'est donc le *seul candidat possible*.

   Mais ce raisonnement **suppose** que la limite existe : il ne le prouve pas.

3. $\alpha=-1{,}5\,\alpha+5\iff2{,}5\,\alpha=5\iff\alpha=2$.

   $$\displaystyle V_{n+1}=U_{n+1}-2=-1{,}5\,U_n+3=-1{,}5\,(U_n-2)=-1{,}5\,V_n.$$

   $(V_n)$ est géométrique de raison $-1{,}5$ avec $V_0=1-2=-1$. Donc $V_n=-(-1{,}5)^n$ et

   $$\displaystyle \boxed{U_n=2-(-1{,}5)^n}.$$

   *Vérification* : $U_1=2+1{,}5=3{,}5$ $\checkmark$ $U_2=2-2{,}25=-0{,}25$ $\checkmark$

4. La raison $-1{,}5\le-1$ : $(-1{,}5)^n$ vaut $1;\,-1{,}5;\,2{,}25;\,-3{,}375;\dots$ Les signes alternent et les valeurs absolues tendent vers $+\infty$. Donc $(U_n)$ **n'a pas de limite**.

   L'élève avait trouvé le bon *candidat* ($2$ est le point d'équilibre : si $U_0=2$ alors $U_n=2$ pour tout $n$), mais la suite ne s'en approche pas, elle s'en éloigne en oscillant.

   :::trap
   Résoudre $\ell=a\ell+b$ ne démontre jamais l'existence de la limite. Il faut étudier la raison $a$ : si $|a|<1$ la limite existe et vaut $\alpha$ ; si $a\le-1$ elle n'existe pas (sauf $U_0=\alpha$).
   :::

:::intuition
$\alpha$ n'est qu'un candidat : c'est la raison $a$ qui décide si la suite s'en approche.
:::
