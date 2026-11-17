---
uid: "0000253"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Synthèse : approximations rationnelles de √2"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["racine-de-2", "approximations", "fractions", "synthese"]
provenance: own
---

On écrit $(1+\sqrt2)^n=a_n+b_n\sqrt2$ avec $a_n$ et $b_n$ entiers.

1. Calculer $a_n$ et $b_n$ pour $n=1,2,3,4$.

2. On admet que $(1-\sqrt2)^n=a_n-b_n\sqrt2$ (même calcul en remplaçant $\sqrt2$ par $-\sqrt2$). Montrer que $a_n^2-2b_n^2=(-1)^n$ et vérifier pour $n=4$.

3. Calculer $a_5,b_5,a_6,b_6$ [$(a+b\sqrt2)(1+\sqrt2)=(a+2b)+(a+b)\sqrt2$] et vérifier que $99^2-2\times70^2=1$.

4. Pour $a,b$ entiers positifs, montrer que $\left|\dfrac ab-\sqrt2\right|=\dfrac{|a^2-2b^2|}{b^2\big(\dfrac ab+\sqrt2\big)}$. En déduire que $\left|\dfrac{99}{70}-\sqrt2\right|<10^{-4}$.

5. Quelle est la première fraction $\dfrac{a_n}{b_n}$ qui approche $\sqrt2$ à $10^{-6}$ près ?

---

## Solution

1. On calcule les puissances de proche en proche :

   $$\displaystyle (1+\sqrt2)^1=1+\sqrt2$$

   $$\displaystyle (1+\sqrt2)^2=1+2\sqrt2+2=3+2\sqrt2$$

   $$\displaystyle (1+\sqrt2)^3=(3+2\sqrt2)(1+\sqrt2)=3+3\sqrt2+2\sqrt2+4=7+5\sqrt2$$

   $$\displaystyle (1+\sqrt2)^4=(7+5\sqrt2)(1+\sqrt2)=7+7\sqrt2+5\sqrt2+10=17+12\sqrt2$$

   $$\displaystyle (a_n,b_n)=(1,1),\ (3,2),\ (7,5),\ (17,12)$$

2.
   > **Différence de deux carrés.** $\boxed{(a+b)(a-b)=a^2-b^2}$, et $\boxed{(uv)^n=u^nv^n}$.

   On multiplie les deux égalités :

   $$\displaystyle a_n^2-2b_n^2=(a_n+b_n\sqrt2)(a_n-b_n\sqrt2)=(1+\sqrt2)^n(1-\sqrt2)^n$$

   $$\displaystyle a_n^2-2b_n^2=\big[(1+\sqrt2)(1-\sqrt2)\big]^n=(1-2)^n=(-1)^n$$

   Vérification pour $n=4$ :

   $$\displaystyle 17^2-2\times12^2=289-288=1=(-1)^4$$

3. On multiplie par $(1+\sqrt2)$ pour passer de $n$ à $n+1$ :

   $$\displaystyle (a+b\sqrt2)(1+\sqrt2)=a+a\sqrt2+b\sqrt2+2b=(a+2b)+(a+b)\sqrt2$$

   Donc $a_{n+1}=a_n+2b_n$ et $b_{n+1}=a_n+b_n$.

   $$\displaystyle a_5=17+24=41\qquad b_5=17+12=29$$

   $$\displaystyle a_6=41+58=99\qquad b_6=41+29=70$$

   Vérification : $99^2-2\times70^2=9801-9800=1=(-1)^6$.

4. Pour $a,b>0$ :

   $$\displaystyle \dfrac ab-\sqrt2=\dfrac{a-b\sqrt2}b=\dfrac{(a-b\sqrt2)(a+b\sqrt2)}{b(a+b\sqrt2)}=\dfrac{a^2-2b^2}{b(a+b\sqrt2)}$$

   On factorise $b$ dans $a+b\sqrt2=b\left(\dfrac ab+\sqrt2\right)$ :

   $$\displaystyle \left|\dfrac ab-\sqrt2\right|=\dfrac{|a^2-2b^2|}{b^2\left(\dfrac ab+\sqrt2\right)}$$

   Pour $\dfrac{99}{70}$ : $|a^2-2b^2|=1$, $b^2=4900$ et $\dfrac{99}{70}+\sqrt2>1{,}4+1{,}4=2{,}8$ :

   $$\displaystyle \left|\dfrac{99}{70}-\sqrt2\right|<\dfrac1{4900\times2{,}8}=\dfrac1{13\,720}\approx7{,}3\times10^{-5}<10^{-4}$$

5. On continue la récurrence :

   $$\displaystyle (a_7,b_7)=(99+140,\,99+70)=(239,169)$$

   $$\displaystyle (a_8,b_8)=(239+338,\,239+169)=(577,408)$$

   $$\displaystyle (a_9,b_9)=(577+816,\,577+408)=(1393,985)$$

   L'erreur vaut $\dfrac1{b^2\left(\dfrac ab+\sqrt2\right)}$, avec $\dfrac ab+\sqrt2\approx2{,}83$.

   Pour $b=408$ : $\dfrac1{166\,464\times2{,}83}\approx2{,}1\times10^{-6}>10^{-6}$ : pas assez précis.

   Pour $b=985$ : $\dfrac1{970\,225\times2{,}83}\approx3{,}6\times10^{-7}<10^{-6}$ : suffisant.

   La première fraction est $\boxed{\dfrac{1393}{985}}$.

**Idée :** le conjugué $1-\sqrt2$ donne $a_n^2-2b_n^2=\pm1$, donc une erreur de l'ordre de $\dfrac1{b^2}$.    **Piège :** oublier de vérifier que $(1-\sqrt2)^n=a_n-b_n\sqrt2$ : c'est la propriété admise en 2).
