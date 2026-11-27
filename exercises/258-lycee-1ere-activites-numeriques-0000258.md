---
uid: "0000258"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Project Euler, problème 318 « 2011 Nines » (adapté)"
title: "Presque un entier"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: null
tags: ["radicaux", "conjugue", "puissances", "partie-entiere", "defi"]
provenance: adapted
source_url: "https://projecteuler.net/problem=318"
adapted_from: "Project Euler 318 (idée de départ) ; énoncé, chiffres et questions Axiomaths"
source_checked: true
idea: "conjugue-entier"
---

On pose $\alpha=3+2\sqrt2$, $\beta=3-2\sqrt2$ et, pour tout entier $n\geq0$, $s_n=\alpha^n+\beta^n$.

1. Calculer $\alpha+\beta$ et $\alpha\beta$. Montrer que $\beta=\dfrac1\alpha$ et que $0<\beta<\dfrac15$.

2. Montrer que $s_{n+2}=6\,s_{n+1}-s_n$. En déduire $s_2$, $s_3$, $s_4$, $s_5$ et $s_6$ (tous entiers), sachant que $s_0=2$.

3. Vérifier que $(1+\sqrt2)^2=\alpha$. Montrer que $39201{,}9999<(1+\sqrt2)^{12}<39202$. Quelle est la partie entière de $(1+\sqrt2)^{12}$ ?

4. Sans calculer $s_{12}$, montrer que $(1+\sqrt2)^{24}$ a au moins huit chiffres $9$ consécutifs juste après la virgule.

5. On pose $\gamma=5+2\sqrt6=(\sqrt2+\sqrt3)^2$ et $\delta=5-2\sqrt6$. Montrer que $\gamma+\delta=10$, $\gamma\delta=1$ et $0<\delta<\dfrac19$. En déduire que $(\sqrt2+\sqrt3)^8=9602-\delta^4$ et donner les trois premières décimales de $(\sqrt2+\sqrt3)^8$.

---

## Solution

> **Outils.** **Produit conjugué :** $\boxed{(a+b\sqrt c)(a-b\sqrt c)=a^2-b^2c}$.
>
> **Encadrement d'une racine :** si $x\geq0$ et $y\geq0$, alors $\boxed{x<y\iff x^2<y^2}$.

1. **Somme et produit.**

   $$\displaystyle \alpha+\beta=(3+2\sqrt2)+(3-2\sqrt2)=\boxed{6}$$

   $$\displaystyle \alpha\beta=3^2-(2\sqrt2)^2=9-8=\boxed{1}$$

   **Inverse.** Comme $\alpha\beta=1$ et $\alpha\neq0$ : $\beta=\dfrac1\alpha$.

   **Encadrement de $\beta$.** Comme $\sqrt2>1$, on a $2\sqrt2>2$, donc :

   $$\displaystyle \alpha=3+2\sqrt2>5$$

   Alors $\beta=\dfrac1\alpha$ est positif et :

   $$\displaystyle 0<\beta<\dfrac15$$

2. On développe le produit $(\alpha+\beta)(\alpha^{n+1}+\beta^{n+1})$ :

   $$\displaystyle (\alpha+\beta)(\alpha^{n+1}+\beta^{n+1})=\alpha^{n+2}+\beta^{n+2}+\alpha\beta^{n+1}+\beta\alpha^{n+1}$$

   On factorise les deux termes mixtes avec $\alpha\beta$ :

   $$\displaystyle \alpha\beta^{n+1}+\beta\alpha^{n+1}=\alpha\beta\left(\beta^n+\alpha^n\right)$$

   Avec $\alpha+\beta=6$ et $\alpha\beta=1$ :

   $$\displaystyle 6\,s_{n+1}=s_{n+2}+s_n\implies\boxed{s_{n+2}=6\,s_{n+1}-s_n}$$

   On a $s_0=2$ et $s_1=\alpha+\beta=6$. On applique la formule :

   $$\displaystyle s_2=6\times6-2=34\qquad s_3=6\times34-6=198\qquad s_4=6\times198-34=1154$$

   $$\displaystyle s_5=6\times1154-198=6726\qquad s_6=6\times6726-1154=\boxed{39202}$$

   Chaque $s_n$ est un entier, car il se calcule avec des produits et des différences d'entiers.

3. **Le carré.**

   $$\displaystyle (1+\sqrt2)^2=1+2\sqrt2+2=3+2\sqrt2=\alpha$$

   Donc $(1+\sqrt2)^{12}=\alpha^6$.

   **L'encadrement.** On écrit $\alpha^6=s_6-\beta^6$, donc :

   $$\displaystyle \alpha^6=39202-\beta^6$$

   Comme $0<\beta<\dfrac15$ :

   $$\displaystyle 0<\beta^6<\dfrac1{5^6}=\dfrac1{15625}<\dfrac1{10000}=0{,}0001$$

   On en déduit :

   $$\displaystyle 39202-0{,}0001<\alpha^6<39202$$

   $$\displaystyle \boxed{39201{,}9999<(1+\sqrt2)^{12}<39202}$$

   La partie entière de $(1+\sqrt2)^{12}$ est $\boxed{39201}$, et ses quatre premières décimales sont des $9$.

4. On a $(1+\sqrt2)^{24}=\alpha^{12}=s_{12}-\beta^{12}$, avec $s_{12}$ entier.

   Comme $0<\beta<\dfrac15$ :

   $$\displaystyle 0<\beta^{12}<\dfrac1{5^{12}}=\dfrac1{244\,140\,625}<\dfrac1{10^8}$$

   Donc $(1+\sqrt2)^{24}$ est un entier moins un nombre strictement compris entre $0$ et $10^{-8}$ :

   $$\displaystyle s_{12}-10^{-8}<(1+\sqrt2)^{24}<s_{12}$$

   La partie décimale est supérieure à $0{,}99999999$ : il y a **au moins huit $9$** après la virgule.

5. **Somme et produit.**

   $$\displaystyle \gamma+\delta=10\qquad\gamma\delta=25-24=1$$

   **Encadrement de $\delta$.** Comme $\sqrt6>2$, on a $2\sqrt6>4$ et $\gamma>9$. Alors $\delta=\dfrac1\gamma$ vérifie :

   $$\displaystyle 0<\delta<\dfrac19$$

   **La suite $t_n=\gamma^n+\delta^n$.** Le même calcul qu'à la question 2) donne :

   $$\displaystyle t_{n+2}=10\,t_{n+1}-t_n\qquad t_0=2\qquad t_1=10$$

   $$\displaystyle t_2=98\qquad t_3=970\qquad t_4=10\times970-98=9602$$

   **Conclusion.** Comme $(\sqrt2+\sqrt3)^2=\gamma$ :

   $$\displaystyle (\sqrt2+\sqrt3)^8=\gamma^4=t_4-\delta^4=\boxed{9602-\delta^4}$$

   Avec $0<\delta<\dfrac19$ :

   $$\displaystyle 0<\delta^4<\dfrac1{6561}<0{,}0002$$

   $$\displaystyle 9601{,}9998<(\sqrt2+\sqrt3)^8<9602$$

   Les trois premières décimales sont $\boxed{9,\ 9,\ 9}$.

**Idée :** le conjugué $\beta$ est minuscule, donc $\alpha^n$ est « presque » l'entier $s_n$.    **Piège :** dire que $\beta^6$ est « négligeable » sans l'encadrer : il faut une inégalité précise pour compter les $9$.
