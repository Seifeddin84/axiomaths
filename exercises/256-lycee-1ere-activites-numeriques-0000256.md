---
uid: "0000256"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Vietnam : High School for Gifted Students (HNUE), Second Entrance Mock test (test blanc), 13/04/2025 (adapté)"
title: "Sous la racine, un carré caché"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: null
tags: ["radicaux", "denestage", "carre-cache", "defi"]
provenance: adapted
source_url: "https://artofproblemsolving.com/community/c6h3547577_vietnam_mock_test"
adapted_from: "inspiré de ce test blanc HNUE (13/04/2025) ; problème exact non confirmé, énoncé et chiffres Axiomaths"
source_checked: true
idea: "carre-cache"
---

Pour tout entier $n\geq1$, on pose $A_n=n^2+(n+1)^2+n^2(n+1)^2$.

1. Calculer $A_1$, $A_2$ et $A_3$. Que remarque-t-on ?

2. Montrer que $A_n=\big(n^2+n+1\big)^2$.

3. En déduire que $\sqrt{1+\dfrac1{n^2}+\dfrac1{(n+1)^2}}=1+\dfrac1n-\dfrac1{n+1}$.

4. Calculer, sous forme décimale exacte,

   $$\displaystyle T=\sqrt{1+\dfrac1{1^2}+\dfrac1{2^2}}+\sqrt{1+\dfrac1{2^2}+\dfrac1{3^2}}+\cdots+\sqrt{1+\dfrac1{99^2}+\dfrac1{100^2}}.$$

5. Montrer que $n(n+1)(n+2)(n+3)+1=\big(n^2+3n+1\big)^2$, puis calculer sans calculatrice $\sqrt{2022\times2023\times2024\times2025+1}$. [Poser $m=n(n+3)$ et calculer $(n+1)(n+2)$ avec $m$.]

---

## Solution

> **Outils.** **Identité remarquable :** $\boxed{(m+1)^2=m^2+2m+1}$.
>
> **Racine d'un carré :** si $x\geq0$, alors $\boxed{\sqrt{x^2}=x}$.

1. On calcule les trois valeurs :

   $$\displaystyle A_1=1+4+4=9\qquad A_2=4+9+36=49\qquad A_3=9+16+144=169$$

   Ce sont des carrés parfaits :

   $$\displaystyle A_1=3^2\qquad A_2=7^2\qquad A_3=13^2$$

   Les nombres $3$, $7$, $13$ valent $n^2+n+1$ pour $n=1,2,3$. On conjecture la formule de la question 2.

2. On pose $m=n(n+1)=n^2+n$.

   Le premier morceau se développe :

   $$\displaystyle n^2+(n+1)^2=2n^2+2n+1=2m+1$$

   Le second morceau est un carré :

   $$\displaystyle n^2(n+1)^2=m^2$$

   On additionne :

   $$\displaystyle A_n=m^2+2m+1=(m+1)^2=\boxed{\big(n^2+n+1\big)^2}$$

3. On met $1+\dfrac1{n^2}+\dfrac1{(n+1)^2}$ au même dénominateur $n^2(n+1)^2$ :

   $$\displaystyle 1+\dfrac1{n^2}+\dfrac1{(n+1)^2}=\dfrac{n^2(n+1)^2+(n+1)^2+n^2}{n^2(n+1)^2}=\dfrac{A_n}{n^2(n+1)^2}$$

   On remplace $A_n$ par le résultat de la question 2 :

   $$\displaystyle 1+\dfrac1{n^2}+\dfrac1{(n+1)^2}=\left(\dfrac{n^2+n+1}{n(n+1)}\right)^2$$

   Le nombre entre parenthèses est positif : on prend la racine.

   $$\displaystyle \sqrt{1+\dfrac1{n^2}+\dfrac1{(n+1)^2}}=\dfrac{n^2+n+1}{n(n+1)}=1+\dfrac1{n(n+1)}$$

   Enfin $\dfrac1n-\dfrac1{n+1}=\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}$ :

   $$\displaystyle \sqrt{1+\dfrac1{n^2}+\dfrac1{(n+1)^2}}=\boxed{1+\dfrac1n-\dfrac1{n+1}}$$

4. Chaque terme de $T$ est donné par la question 3, avec $n=1,2,\dots,99$ :

   $$\displaystyle T=\left(1+\dfrac11-\dfrac12\right)+\left(1+\dfrac12-\dfrac13\right)+\cdots+\left(1+\dfrac1{99}-\dfrac1{100}\right)$$

   Il y a $99$ fois le nombre $1$ :

   $$\displaystyle T=99+\left(\dfrac11-\dfrac12\right)+\left(\dfrac12-\dfrac13\right)+\cdots+\left(\dfrac1{99}-\dfrac1{100}\right)$$

   Dans la deuxième somme, chaque fraction apparaît deux fois, avec des signes opposés : seuls restent le premier et le dernier terme.

   $$\displaystyle T=99+1-\dfrac1{100}=99+0{,}99=\boxed{99{,}99}$$

5. On pose $m=n(n+3)=n^2+3n$. Alors :

   $$\displaystyle (n+1)(n+2)=n^2+3n+2=m+2$$

   Le produit de quatre entiers consécutifs devient :

   $$\displaystyle n(n+1)(n+2)(n+3)+1=m(m+2)+1=m^2+2m+1=(m+1)^2$$

   $$\displaystyle n(n+1)(n+2)(n+3)+1=\boxed{\big(n^2+3n+1\big)^2}$$

   Pour $n=2022$ :

   $$\displaystyle n^2+3n+1=2022^2+3\times2022+1=4\,088\,484+6\,066+1=4\,094\,551$$

   Le nombre sous la racine est le carré de $4\,094\,551$ :

   $$\displaystyle \sqrt{2022\times2023\times2024\times2025+1}=\boxed{4\,094\,551}$$

**Idée :** derrière chaque racine se cache un carré parfait $(m+1)^2$ ; la somme se télescope ensuite.    **Piège :** écrire $\sqrt{a+b}=\sqrt a+\sqrt b$ au lieu de chercher un carré.
