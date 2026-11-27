---
uid: "0000273"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Produit Scalaire dans le Plan"
source: "Axiomaths"
title: "Le théorème du papillon en coordonnées polaires"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["theoreme-du-papillon", "produit-scalaire", "cercle", "coordonnees"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "papillon par le produit scalaire"
rung: 5
---
Soit $\Gamma$ un cercle et $[PQ]$ une corde de $\Gamma$ de milieu $M$. On munit le plan du repère orthonormé $(M\,;\vec\imath,\vec\jmath)$ où $\vec\imath$ dirige $(PQ)$ : ainsi $P(-a,0)$ et $Q(a,0)$ avec $a>0$.

Soient $[AB]$ et $[CD]$ deux cordes passant par $M$, de directions différentes et distinctes de $(PQ)$, avec $A$ et $C$ du même côté de $(PQ)$. On note $X=(AD)\cap(PQ)$ et $Y=(BC)\cap(PQ)$. On veut montrer que $M$ est le milieu de $[XY]$ (**théorème du papillon**).

On note $u(\theta)=(\cos\theta,\sin\theta)$ : les points de la droite passant par $M$ de direction $u(\theta)$ sont les points $t\,u(\theta)$, $t\in\mathbb R$. On écrit $A=t_A\,u(\theta_1)$, $B=t_B\,u(\theta_1)$, $C=t_C\,u(\theta_2)$, $D=t_D\,u(\theta_2)$, avec $\theta_1\not\equiv\theta_2\pmod\pi$.

![Le repère centré en M](/exercises/images/273-lycee-3eme-maths-produit-scalaire-dans-le-plan-0000273.png)

1. **Équation du cercle.** Le cercle $\Gamma$ a une équation de la forme $x^2+y^2+2gx+2fy+c=0$. Montrer que $g=0$ et $c=-a^2$.

2. **Une relation clé.** Soit $\theta\in\mathbb R$. Montrer que les valeurs de $t$ pour lesquelles $t\,u(\theta)\in\Gamma$ sont les racines de $t^2+2f\sin\theta\;t-a^2=0$. Si $t$ et $t'$ sont ces deux racines, montrer que
$$\displaystyle \frac1t+\frac1{t'}=\frac{2f\sin\theta}{a^2}.\qquad(\star)$$

3. **Abscisse de $X$.** Montrer que la droite passant par $E(x_1,y_1)$ et $F(x_2,y_2)$, avec $y_1\neq y_2$, coupe l'axe $(Ox)$ au point d'abscisse $\dfrac{x_1y_2-x_2y_1}{y_2-y_1}$. En déduire que
$$\displaystyle \frac1{x_X}=\frac1{\sin(\theta_2-\theta_1)}\Big(\frac{\sin\theta_2}{t_A}-\frac{\sin\theta_1}{t_D}\Big).$$
Donner l'expression analogue de $\dfrac1{x_Y}$ (avec $B$ et $C$).

4. **Conclusion.** Montrer que $\dfrac1{x_X}+\dfrac1{x_Y}=0$ et conclure.

---

## Solution

:::property[Outils du chapitre]

- **Équation de cercle :** $x^2+y^2+2gx+2fy+c=0$ est l'équation d'un cercle quand $g^2+f^2-c>0$.

- **Relations coefficients–racines :** si $t$ et $t'$ sont les racines de $\alpha t^2+\beta t+\gamma=0$, alors $\ \boxed{t+t'=-\dfrac\beta\alpha,\quad tt'=\dfrac\gamma\alpha}$.

- **Formule du sinus de la différence :** $\ \boxed{\sin(\theta_2-\theta_1)=\sin\theta_2\cos\theta_1-\cos\theta_2\sin\theta_1}$.

:::

1. $P(-a,0)$ et $Q(a,0)$ sont sur $\Gamma$ : en posant $y=0$ dans l'équation, les nombres $-a$ et $a$ sont les racines de $x^2+2gx+c=0$.

   Somme des racines : $-a+a=0=-2g$, donc $g=0$. Produit : $-a\cdot a=c$, donc $c=-a^2$.

   $$\displaystyle \boxed{\Gamma:\ x^2+y^2+2fy-a^2=0}$$

2. Le point $t\,u(\theta)=(t\cos\theta,t\sin\theta)$ est sur $\Gamma$ si et seulement si

   $$\displaystyle t^2\cos^2\theta+t^2\sin^2\theta+2f\,t\sin\theta-a^2=0\iff t^2+2f\sin\theta\;t-a^2=0 .$$

   Les relations coefficients–racines donnent $t+t'=-2f\sin\theta$ et $tt'=-a^2$. Donc

   $$\displaystyle \frac1t+\frac1{t'}=\frac{t+t'}{tt'}=\frac{-2f\sin\theta}{-a^2}=\boxed{\frac{2f\sin\theta}{a^2}}\qquad(\star)$$

   (L'équation a deux racines car son discriminant $4f^2\sin^2\theta+4a^2>0$.)

3. Un point de la droite $(EF)$ vérifie $(x-x_1)(y_2-y_1)=(y-y_1)(x_2-x_1)$. Pour $y=0$ :

   $$\displaystyle (x-x_1)(y_2-y_1)=-y_1(x_2-x_1)\iff x=x_1-\frac{y_1(x_2-x_1)}{y_2-y_1}=\frac{x_1y_2-x_2y_1}{y_2-y_1}.$$

   Pour la droite $(AD)$, on prend $E=A$ et $F=D$, de coordonnées $A(t_A\cos\theta_1,\,t_A\sin\theta_1)$ et $D(t_D\cos\theta_2,\,t_D\sin\theta_2)$ :

   $$\displaystyle x_X=\frac{t_At_D(\cos\theta_1\sin\theta_2-\cos\theta_2\sin\theta_1)}{t_D\sin\theta_2-t_A\sin\theta_1}=\frac{t_At_D\sin(\theta_2-\theta_1)}{t_D\sin\theta_2-t_A\sin\theta_1}.$$

   En passant à l'inverse :

   $$\displaystyle \frac1{x_X}=\frac{t_D\sin\theta_2-t_A\sin\theta_1}{t_At_D\sin(\theta_2-\theta_1)}=\boxed{\frac1{\sin(\theta_2-\theta_1)}\Big(\frac{\sin\theta_2}{t_A}-\frac{\sin\theta_1}{t_D}\Big)}$$

   Avec $B$ et $C$ à la place de $A$ et $D$ :

   $$\displaystyle \frac1{x_Y}=\frac1{\sin(\theta_2-\theta_1)}\Big(\frac{\sin\theta_2}{t_B}-\frac{\sin\theta_1}{t_C}\Big).$$

4. On additionne en regroupant :

   $$\displaystyle \frac1{x_X}+\frac1{x_Y}=\frac1{\sin(\theta_2-\theta_1)}\Big[\sin\theta_2\Big(\frac1{t_A}+\frac1{t_B}\Big)-\sin\theta_1\Big(\frac1{t_D}+\frac1{t_C}\Big)\Big].$$

   $t_A$ et $t_B$ sont les deux racines pour la direction $\theta_1$, et $t_D$, $t_C$ les deux racines pour la direction $\theta_2$. D'après $(\star)$ :

   $$\displaystyle \frac1{t_A}+\frac1{t_B}=\frac{2f\sin\theta_1}{a^2},\qquad \frac1{t_C}+\frac1{t_D}=\frac{2f\sin\theta_2}{a^2}.$$

   On remplace :

   $$\displaystyle \frac1{x_X}+\frac1{x_Y}=\frac{1}{\sin(\theta_2-\theta_1)}\cdot\frac{2f}{a^2}\big[\sin\theta_2\sin\theta_1-\sin\theta_1\sin\theta_2\big]=0 .$$

   Donc $x_Y=-x_X$ : $X$ et $Y$ sont sur $(Ox)$ avec des abscisses opposées.

   $$\displaystyle \boxed{M\text{ (l'origine) est le milieu de }[XY]}$$

   **Contrôle :** avec le cercle de l'[exercice 268](/lycee/2eme/sciences/geometrie-analytique#ex-0000268) ($f=-\tfrac32$, $a=2$), on trouvait $x_X=\tfrac47=-x_Y$.

:::remark[Ce que cette preuve a de beau]

Le cercle n'intervient qu'**une seule fois** : dans la relation $(\star)$. Tout le reste est de la trigonométrie de droites. Il suffit donc de retrouver $(\star)$ pour une autre courbe pour que le théorème reste vrai : c'est l'objet des exercices [279](/lycee/4eme/mathematiques/coniques#ex-0000279) à [282](/lycee/4eme/mathematiques/coniques#ex-0000282) sur les coniques.

:::

:::intuition

Dans ces coordonnées, la somme $\frac1t+\frac1{t'}$ ne dépend de la direction que par $\sin\theta$ : les deux droites « se compensent » exactement dans la somme $\frac1{x_X}+\frac1{x_Y}$.

:::

:::trap

La formule de $x_X$ suppose $y_1\neq y_2$ (la droite $(AD)$ n'est pas parallèle à $(Ox)$) : c'est le cas ici car $A$ et $D$ sont de part et d'autre de $(PQ)$.

:::

:::remark[Pour aller plus loin]

La même idée avec des distances et la loi du sinus, sans coordonnées : [exercice n°269](/lycee/2eme/sciences/trigonometrie#ex-0000269). La relation $(\star)$ s'obtient aussi pour une parabole ([exercice n°280](/lycee/4eme/mathematiques/coniques#ex-0000280)), pour une ellipse ou une parabole avec $M$ sur un axe ([exercice n°281](/lycee/4eme/mathematiques/coniques#ex-0000281)), et pour toutes les coniques d'un coup avec un faisceau ([exercice n°283](/lycee/4eme/mathematiques/coniques#ex-0000283)).

:::
