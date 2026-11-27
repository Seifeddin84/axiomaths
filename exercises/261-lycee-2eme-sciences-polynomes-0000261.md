---
uid: "0000261"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Polynôme et fonction rationnelle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: 7
tags: ["polynomes", "racine", "identification", "fonction-rationnelle", "factorisation"]
provenance: own
dressing: "identification après une racine donnée"
rung: 1
---

Soit $P(x)=2x^3-5x^2-x+6$.

1.
   a. Vérifier que $-1$ est une racine de $P$.  *(0,5 pt)*

   b. Déterminer les réels $a$, $b$, $c$ tels que, pour tout réel $x$, $P(x)=(x+1)(ax^2+bx+c)$.  *(1 pt)*

   c. Factoriser $P(x)$, puis résoudre dans $\mathbb{R}$ l'équation $P(x)=0$.  *(1 pt)*

2. Résoudre dans $\mathbb{R}$ l'inéquation $P(x)\geq0$.  *(1 pt)*

3. Soit $f$ la fonction définie par $f(x)=\dfrac{P(x)}{x^2+x-6}$.

   a. Déterminer l'ensemble de définition $D$ de $f$.  *(1 pt)*

   b. Simplifier $f(x)$ pour $x\in D$.  *(0,5 pt)*

   c. Résoudre dans $D$ l'équation $f(x)=2$.  *(1 pt)*

   d. Résoudre dans $\mathbb{R}$ l'inéquation $f(x)\geq0$.  *(1 pt)*

---

## Solution

1.
   a.

   > **Définition.** $\alpha$ est une racine de $P$ si et seulement si $\boxed{P(\alpha)=0}$.

   On remplace $x$ par $-1$ dans $P(x)$ :

   $$\displaystyle P(-1)=2\times(-1)^3-5\times(-1)^2-(-1)+6$$

   $$\displaystyle P(-1)=-2-5+1+6=0$$

   $P(-1)=0$ : $-1$ est une racine de $P$.

   b.

   > **Identification.** Deux polynômes sont égaux si et seulement si les coefficients de chaque puissance de $x$ sont égaux.

   **Étape 1 : développer.**

   $$\displaystyle (x+1)(ax^2+bx+c)=ax^3+bx^2+cx+ax^2+bx+c$$

   $$\displaystyle (x+1)(ax^2+bx+c)=ax^3+(a+b)x^2+(b+c)x+c$$

   **Étape 2 : identifier** avec $P(x)=2x^3-5x^2-x+6$, puissance par puissance :

   $$\displaystyle \left\{ \begin{aligned} a&=2 &&\text{(coefficient de }x^3\text{)}\\ a+b&=-5 &&\text{(coefficient de }x^2\text{)}\\ b+c&=-1 &&\text{(coefficient de }x\text{)}\\ c&=6 &&\text{(terme constant)} \end{aligned} \right.$$

   **Étape 3 : résoudre.**

   La première équation donne $a=2$. La deuxième donne $2+b=-5$, donc $b=-7$. La quatrième donne $c=6$.

   **Vérification** avec la troisième équation : $b+c=-7+6=-1$ ✓

   **Conclusion :**

   $$\displaystyle P(x)=(x+1)(2x^2-7x+6)$$

   c.

   > **Trinôme du second degré.** Pour $ax^2+bx+c$, on calcule $\boxed{\Delta=b^2-4ac}$. Si $\Delta>0$, il y a deux racines $x_1=\dfrac{-b-\sqrt\Delta}{2a}$ et $x_2=\dfrac{-b+\sqrt\Delta}{2a}$, et $ax^2+bx+c=a(x-x_1)(x-x_2)$.

   Pour $2x^2-7x+6$ : $a=2$, $b=-7$, $c=6$.

   $$\displaystyle \Delta=(-7)^2-4\times2\times6=49-48=1$$

   $$\displaystyle x_1=\dfrac{7-1}{4}=\dfrac32\qquad x_2=\dfrac{7+1}{4}=2$$

   $$\displaystyle 2x^2-7x+6=2\left(x-\dfrac32\right)(x-2)=(2x-3)(x-2)$$

   On en déduit la factorisation complète :

   $$\displaystyle P(x)=(x+1)(x-2)(2x-3)$$

   > **Produit nul.** Un produit de facteurs est nul si et seulement si **l'un des facteurs est nul**.

   $$\displaystyle x+1=0\iff x=-1\qquad x-2=0\iff x=2\qquad 2x-3=0\iff x=\dfrac32$$

   $$\displaystyle \mathcal S=\left\{-1\,;\,\dfrac32\,;\,2\right\}$$

2.
   > **Signe de $ax+b$.** Un facteur $ax+b$ s'annule en $-\dfrac ba$ ; il a le signe de $a$ **après** sa racine et le signe contraire **avant**.

   > **Règle des signes.** Dans un produit, le signe est $+$ s'il y a un nombre pair de facteurs négatifs, et $-$ s'il y en a un nombre impair.

   Les racines rangées dans l'ordre sont $-1<\dfrac32<2$.

   | $x$ | $-\infty$ |  | $-1$ |  | $\dfrac32$ |  | $2$ |  | $+\infty$ |
   |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
   | $x+1$ |  | $-$ | $0$ | $+$ | $+$ | $+$ | $+$ | $+$ |  |
   | $2x-3$ |  | $-$ | $-$ | $-$ | $0$ | $+$ | $+$ | $+$ |  |
   | $x-2$ |  | $-$ | $-$ | $-$ | $-$ | $-$ | $0$ | $+$ |  |
   | $P(x)$ |  | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |  |

   On cherche $P(x)\geq0$ : on garde les zones $+$ et les zéros (crochets fermés).

   $$\displaystyle \mathcal S=\left[-1\,;\,\dfrac32\right]\cup[\,2\,;+\infty[$$

3.
   a.

   > **Ensemble de définition d'une fraction.** Une fraction n'existe que si son dénominateur est **différent de $0$**.

   On cherche quand $x^2+x-6=0$ : $\Delta=1^2-4\times1\times(-6)=25$, donc

   $$\displaystyle x_1=\dfrac{-1-5}{2}=-3\qquad x_2=\dfrac{-1+5}{2}=2\qquad x^2+x-6=(x+3)(x-2)$$

   Les valeurs interdites sont $-3$ et $2$ :

   $$\displaystyle D=\mathbb R\setminus\{-3\,;\,2\}$$

   b.

   > **Simplification.** On factorise le numérateur et le dénominateur, puis on simplifie les facteurs communs **pour les $x$ de $D$**.

   $$\displaystyle f(x)=\dfrac{(x+1)(x-2)(2x-3)}{(x-2)(x+3)}$$

   Le facteur $x-2$ est non nul sur $D$, donc on le simplifie :

   $$\displaystyle f(x)=\dfrac{(x+1)(2x-3)}{x+3}\qquad\text{pour }x\in D$$

   c. On part de la forme simplifiée. Comme $x+3\neq0$, on peut multiplier les deux membres par $x+3$ :

   $$\displaystyle \dfrac{(x+1)(2x-3)}{x+3}=2\iff(x+1)(2x-3)=2(x+3)$$

   On développe chaque côté :

   $$\displaystyle 2x^2-3x+2x-3=2x+6$$

   $$\displaystyle 2x^2-x-3=2x+6$$

   On met tout du même côté :

   $$\displaystyle 2x^2-3x-9=0$$

   $$\displaystyle \Delta=(-3)^2-4\times2\times(-9)=9+72=81=9^2$$

   $$\displaystyle x_1=\dfrac{3-9}{4}=-\dfrac32\qquad x_2=\dfrac{3+9}{4}=3$$

   Ces deux valeurs sont différentes de $-3$ et de $2$ : elles sont dans $D$.

   **Vérification :** $f(3)=\dfrac{4\times3}{6}=2$ ✓    $f\!\left(-\dfrac32\right)=\dfrac{\left(-\dfrac12\right)(-6)}{\dfrac32}=\dfrac{3}{\dfrac32}=2$ ✓

   $$\displaystyle \mathcal S=\left\{-\dfrac32\,;\,3\right\}$$

   d.

   > **Signe d'un quotient.** Le quotient $\dfrac AB$ a le même signe que le produit $A\times B$, et la valeur qui annule $B$ est **interdite** (double barre $||$).

   Les valeurs importantes, dans l'ordre : $-3<-1<\dfrac32$.

   | $x$ | $-\infty$ |  | $-3$ |  | $-1$ |  | $\dfrac32$ |  | $+\infty$ |
   |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
   | $x+1$ |  | $-$ | $-$ | $-$ | $0$ | $+$ | $+$ | $+$ |  |
   | $2x-3$ |  | $-$ | $-$ | $-$ | $-$ | $-$ | $0$ | $+$ |  |
   | $x+3$ |  | $-$ | $0$ | $+$ | $+$ | $+$ | $+$ | $+$ |  |
   | $f(x)$ |  | $-$ | $||$ | $+$ | $0$ | $-$ | $0$ | $+$ |  |

   On cherche $f(x)\geq0$ : zones $+$ et zéros, mais jamais la valeur interdite $-3$ (crochet ouvert).

   **Attention :** $2$ n'apparaît pas dans le tableau, car on a simplifié par $x-2$. Pourtant $2\notin D$ : il faut l'enlever de la solution.

   $$\displaystyle \mathcal S=\left]-3\,;-1\right]\cup\left[\dfrac32\,;2\right[\cup\,]\,2\,;+\infty[$$

**Piège :** $2$ est une racine de $P$, mais $2$ annule aussi le dénominateur : après simplification, $2$ reste une valeur interdite.
