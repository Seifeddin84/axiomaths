---
uid: "0000362"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Le nombre d'or"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["nombre-d-or", "racines-carrees", "identites-remarquables", "puissances"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

On pose $\varphi=\dfrac{1+\sqrt5}2$.

1. Montrer que $\varphi^2=\varphi+1$ et que $\dfrac1\varphi=\varphi-1$.

2. Calculer $\varphi+\dfrac1\varphi$, puis $\varphi^2+\dfrac1{\varphi^2}$ et $\varphi^4+\dfrac1{\varphi^4}$.

3. Montrer que $\varphi^3=2+\sqrt5$ et que $\dfrac1{\varphi^3}=\sqrt5-2$. En déduire, de deux façons différentes, que $\varphi^6+\dfrac1{\varphi^6}=18$.

4. Calculer la valeur exacte de $\varphi^6-\dfrac1{\varphi^6}$.

5. Écrire $\varphi^5$ sous la forme $p\varphi+q$, puis sous la forme $\dfrac{r+s\sqrt5}2$ ($p,q,r,s$ entiers).

---

## Solution

:::property[Identités remarquables]
$\boxed{(a+b)^2=a^2+2ab+b^2}$, $\boxed{a^2-b^2=(a-b)(a+b)}$ et, en conséquence, $(a+b)^2-2ab=a^2+b^2$.
:::

1. **Premier résultat.**

   $$\displaystyle \varphi^2=\dfrac{(1+\sqrt5)^2}4=\dfrac{1+2\sqrt5+5}4=\dfrac{6+2\sqrt5}4=\dfrac{3+\sqrt5}2$$

   $$\displaystyle \varphi+1=\dfrac{1+\sqrt5}2+\dfrac22=\dfrac{3+\sqrt5}2$$

   Donc $\boxed{\varphi^2=\varphi+1}$.

   **Second résultat.** On divise $\varphi^2=\varphi+1$ par $\varphi$ (non nul) :

   $$\displaystyle \varphi=1+\dfrac1\varphi\implies\dfrac1\varphi=\boxed{\varphi-1}$$

2. D'après la question 1 :

   $$\displaystyle \varphi+\dfrac1\varphi=\varphi+(\varphi-1)=2\varphi-1=1+\sqrt5-1=\boxed{\sqrt5}$$

   On élève au carré : $\left(\varphi+\dfrac1\varphi\right)^2=\varphi^2+2+\dfrac1{\varphi^2}$, donc :

   $$\displaystyle \varphi^2+\dfrac1{\varphi^2}=5-2=\boxed{3}$$

   On recommence avec $\varphi^2$ :

   $$\displaystyle \varphi^4+\dfrac1{\varphi^4}=\left(\varphi^2+\dfrac1{\varphi^2}\right)^2-2=9-2=\boxed{7}$$

3. **Calcul de $\varphi^3$.** On utilise $\varphi^2=\varphi+1$ :

   $$\displaystyle \varphi^3=\varphi\times\varphi^2=\varphi(\varphi+1)=\varphi^2+\varphi=2\varphi+1=1+\sqrt5+1=\boxed{2+\sqrt5}$$

   **Calcul de $\dfrac1{\varphi^3}$.** On calcule le produit :

   $$\displaystyle (2+\sqrt5)(\sqrt5-2)=(\sqrt5)^2-2^2=5-4=1$$

   Donc $\dfrac1{2+\sqrt5}=\sqrt5-2$, c'est-à-dire $\dfrac1{\varphi^3}=\boxed{\sqrt5-2}$.

   **Première méthode pour $\varphi^6+\dfrac1{\varphi^6}$.** On a $\varphi^6=(2+\sqrt5)^2$ et $\dfrac1{\varphi^6}=(\sqrt5-2)^2$ :

   $$\displaystyle (2+\sqrt5)^2=4+4\sqrt5+5=9+4\sqrt5\qquad(\sqrt5-2)^2=5-4\sqrt5+4=9-4\sqrt5$$

   $$\displaystyle \varphi^6+\dfrac1{\varphi^6}=(9+4\sqrt5)+(9-4\sqrt5)=18$$

   **Seconde méthode.** On développe le produit des deux résultats de la question 2 :

   $$\displaystyle \left(\varphi^2+\dfrac1{\varphi^2}\right)\left(\varphi^4+\dfrac1{\varphi^4}\right)=\varphi^6+\dfrac1{\varphi^2}+\varphi^2+\dfrac1{\varphi^6}$$

   $$\displaystyle 3\times7=\left(\varphi^6+\dfrac1{\varphi^6}\right)+3\implies\varphi^6+\dfrac1{\varphi^6}=21-3=\boxed{18}$$

4. On factorise une différence de carrés avec $a=2+\sqrt5$ et $b=\sqrt5-2$ :

   $$\displaystyle \varphi^6-\dfrac1{\varphi^6}=a^2-b^2=(a-b)(a+b)$$

   $$\displaystyle a-b=(2+\sqrt5)-(\sqrt5-2)=4\qquad a+b=(2+\sqrt5)+(\sqrt5-2)=2\sqrt5$$

   $$\displaystyle \varphi^6-\dfrac1{\varphi^6}=\boxed{8\sqrt5}$$

5. À chaque étape, on utilise $\varphi^2=\varphi+1$ :

   $$\displaystyle \varphi^3=2\varphi+1$$

   $$\displaystyle \varphi^4=\varphi\,\varphi^3=2\varphi^2+\varphi=2\varphi+2+\varphi=3\varphi+2$$

   $$\displaystyle \varphi^5=\varphi\,\varphi^4=3\varphi^2+2\varphi=3\varphi+3+2\varphi=\boxed{5\varphi+3}$$

   Puis, avec $\varphi=\dfrac{1+\sqrt5}2$ :

   $$\displaystyle \varphi^5=\dfrac{5+5\sqrt5}2+\dfrac62=\boxed{\dfrac{11+5\sqrt5}2}$$

:::intuition
La relation $\varphi^2=\varphi+1$ ramène toute puissance de $\varphi$ à la forme $p\varphi+q$ (les coefficients $1,1,2,3,5$ se suivent).
:::

:::trap
Écrire $\left(\varphi+\dfrac1\varphi\right)^2=\varphi^2+\dfrac1{\varphi^2}$ : on oublie le double produit $2$.
:::
