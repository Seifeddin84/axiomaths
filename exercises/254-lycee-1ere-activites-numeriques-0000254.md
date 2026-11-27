---
uid: "0000254"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Challenge : l'inégalité de Nesbitt"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["inegalites", "demonstration", "moyennes"]
provenance: own
dressing: "challenge : l'inégalité de Nesbitt"
rung: 5
---

1. Montrer que pour tous réels $x,y>0$ : $\dfrac xy+\dfrac yx\ge2$, avec égalité si et seulement si $x=y$.

2. Soit $a,b,c>0$. On pose $x=b+c$, $y=c+a$, $z=a+b$. Exprimer $a$, $b$, $c$ en fonction de $x$, $y$, $z$.

3. Montrer que

   $$\displaystyle \dfrac a{b+c}+\dfrac b{c+a}+\dfrac c{a+b}=\dfrac12\left[\Big(\dfrac xy+\dfrac yx\Big)+\Big(\dfrac yz+\dfrac zy\Big)+\Big(\dfrac zx+\dfrac xz\Big)\right]-\dfrac32.$$

4. En déduire que $\dfrac a{b+c}+\dfrac b{c+a}+\dfrac c{a+b}\ge\dfrac32$, avec égalité si et seulement si $a=b=c$.

5. Si $a$, $b$, $c$ sont les longueurs des côtés d'un triangle, montrer que cette somme est strictement inférieure à $2$.

---

## Solution

1.
   > **Carré toujours positif.** $\boxed{(x-y)^2\geq0}$, avec égalité si et seulement si $x=y$.

   On réduit au même dénominateur :

   $$\displaystyle \dfrac xy+\dfrac yx-2=\dfrac{x^2+y^2-2xy}{xy}=\dfrac{(x-y)^2}{xy}$$

   Le numérateur est $\geq0$ et $xy>0$ : la fraction est $\geq0$, donc $\dfrac xy+\dfrac yx\geq2$.

   L'égalité a lieu si et seulement si $(x-y)^2=0$, c'est-à-dire $x=y$.

2. On a le système :

   $$\displaystyle \left\{\begin{aligned}x&=b+c\\y&=c+a\\z&=a+b\end{aligned}\right.$$

   On additionne les équations deux à deux, en retranchant la troisième :

   $$\displaystyle y+z-x=(c+a)+(a+b)-(b+c)=2a$$

   $$\displaystyle z+x-y=(a+b)+(b+c)-(c+a)=2b$$

   $$\displaystyle x+y-z=(b+c)+(c+a)-(a+b)=2c$$

   $$\displaystyle \boxed{a=\dfrac{y+z-x}2}\qquad\boxed{b=\dfrac{z+x-y}2}\qquad\boxed{c=\dfrac{x+y-z}2}$$

3. On remplace $a$ et $b+c$ :

   $$\displaystyle \dfrac a{b+c}=\dfrac{y+z-x}{2x}=\dfrac12\left(\dfrac yx+\dfrac zx-1\right)=\dfrac12\left(\dfrac yx+\dfrac zx\right)-\dfrac12$$

   De la même façon :

   $$\displaystyle \dfrac b{c+a}=\dfrac12\left(\dfrac zy+\dfrac xy\right)-\dfrac12\qquad\dfrac c{a+b}=\dfrac12\left(\dfrac xz+\dfrac yz\right)-\dfrac12$$

   On additionne : le terme $-\dfrac12$ apparaît trois fois, soit $-\dfrac32$. On regroupe $\dfrac yx$ avec $\dfrac xy$, $\dfrac zy$ avec $\dfrac yz$, $\dfrac xz$ avec $\dfrac zx$ :

   $$\displaystyle \dfrac a{b+c}+\dfrac b{c+a}+\dfrac c{a+b}=\dfrac12\left[\left(\dfrac xy+\dfrac yx\right)+\left(\dfrac yz+\dfrac zy\right)+\left(\dfrac zx+\dfrac xz\right)\right]-\dfrac32$$

4. Chaque parenthèse est $\geq2$ d'après 1), car $x,y,z>0$ :

   $$\displaystyle \text{somme}\geq\dfrac12\times(2+2+2)-\dfrac32=3-\dfrac32=\dfrac32$$

   **Égalité :** chaque parenthèse vaut $2$, donc $x=y$, $y=z$, $z=x$, c'est-à-dire $b+c=c+a=a+b$, d'où $a=b=c$.

5.
   > **Inégalité triangulaire dans un triangle.** Dans un triangle de côtés $a$, $b$, $c$ : $\boxed{a<b+c}$, $\boxed{b<c+a}$, $\boxed{c<a+b}$.

   On ajoute $a$ aux deux membres de $a<b+c$ : $2a<a+b+c$ et $a+b+c<2(b+c)$. Donc :

   $$\displaystyle \dfrac a{b+c}<\dfrac{2a}{a+b+c}$$

   De même :

   $$\displaystyle \dfrac b{c+a}<\dfrac{2b}{a+b+c}\qquad\dfrac c{a+b}<\dfrac{2c}{a+b+c}$$

   On additionne :

   $$\displaystyle \text{somme}<\dfrac{2(a+b+c)}{a+b+c}=2$$

**Idée :** le changement de variables $x=b+c$, $y=c+a$, $z=a+b$ ramène tout à des sommes $\dfrac uv+\dfrac vu\geq2$.    **Piège :** vouloir minorer chaque fraction séparément : seule la somme est minorée.
