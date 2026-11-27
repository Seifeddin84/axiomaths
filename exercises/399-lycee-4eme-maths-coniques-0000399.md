---
uid: "0000399"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Trois tangentes à une parabole"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["parabole", "tangentes", "coniques", "coordonnees", "defi"]
provenance: "adapted"
dressing: "trois tangentes à une parabole"
rung: 3
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Le plan est rapporté à un repère orthonormé. On considère la parabole $\mathcal P$ d'équation $x^2=4y$, de foyer $F(0,1)$ et de directrice $\mathcal D:\ y=-1$. Pour tout réel $u$, on note $T_u$ la tangente à $\mathcal P$ au point d'abscisse $2u$.

Soient $u$, $v$, $w$ trois réels distincts. On note $A=T_v\cap T_w$, $B=T_w\cap T_u$, $C=T_u\cap T_v$ ; ces trois points sont les sommets d'un triangle dont les côtés $(BC)$, $(CA)$, $(AB)$ sont portés par $T_u$, $T_v$, $T_w$. On pose $\sigma_1=u+v+w$, $\sigma_2=uv+vw+wu$, $\sigma_3=uvw$.

![Parabole x²=4y, foyer F, directrice D, trois tangentes formant un triangle ABC, cercle circonscrit passant par F, orthocentre H sur D](/exercises/images/399-lycee-4eme-maths-coniques-0000399.png)

1.
   a. Montrer que $T_u$ a pour équation $y=ux-u^2$.

   b. Montrer que $T_u$ et $T_v$ se coupent au point $(u+v,\,uv)$.

2. Montrer que **l'orthocentre de $ABC$ est le point $H(\sigma_1+\sigma_3,\,-1)$**, qui appartient donc à la directrice $\mathcal D$.

3. Montrer que **le cercle circonscrit à $ABC$ passe par le foyer $F$**. (On pourra chercher une équation de ce cercle de la forme $x^2+y^2+Dx+Ey+G=0$ et exprimer $D$, $E$, $G$ à l'aide de $\sigma_1,\sigma_2,\sigma_3$.)

---

## Solution

1.
   a. $\mathcal P$ est la courbe de $y=\dfrac{x^2}4$ ; $y'=\dfrac x2$.

      :::property[Tangente]
      La tangente à la courbe de $f$ en $x_0$ a pour équation $\boxed{y=f'(x_0)(x-x_0)+f(x_0)}$.
      :::

      En $x_0=2u$ : $f'(2u)=u$ et $f(2u)=u^2$. Donc $y=u(x-2u)+u^2$, soit $\boxed{y=ux-u^2}$.

   b. $T_u\cap T_v$ : $ux-u^2=vx-v^2\iff(u-v)x=u^2-v^2\iff x=u+v$ (car $u\neq v$).

      Alors $y=u(u+v)-u^2=uv$ : le point d'intersection est $(u+v,\,uv)$.

2. Les sommets sont $A(v+w,\,vw)$, $B(w+u,\,wu)$, $C(u+v,\,uv)$.

   La droite $(BC)=T_u$ a pour vecteur directeur $\vec d=(1,u)$.

   :::property[Droite perpendiculaire]
   La droite passant par $A(x_A,y_A)$ et perpendiculaire à un vecteur directeur $(1,u)$ a pour équation $\boxed{(x-x_A)+u\,(y-y_A)=0}$.
   :::

   Hauteur issue de $A$ : $(x-v-w)+u\,(y-vw)=0$.

   On la coupe avec la directrice $y=-1$ : $x=v+w+u(1+vw)=u+v+w+uvw=\sigma_1+\sigma_3$.

   Ce résultat est symétrique en $u,v,w$ : les hauteurs issues de $B$ et de $C$ coupent aussi $\mathcal D$ au même point.

   Les trois hauteurs passent donc par $H(\sigma_1+\sigma_3,-1)$ : **$H$ est l'orthocentre, et $H\in\mathcal D$**.

3. *Équation du cercle.* Le cercle $x^2+y^2+Dx+Ey+G=0$ passe par $B(w+u,wu)$ et $C(u+v,uv)$. On soustrait les deux équations :

   $$\displaystyle \big[(u+v)^2-(u+w)^2\big]+\big[(uv)^2-(uw)^2\big]+D(v-w)+E\,u(v-w)=0.$$

   Or $(u+v)^2-(u+w)^2=(v-w)(2u+v+w)$ et $(uv)^2-(uw)^2=u^2(v-w)(v+w)$. On divise par $v-w\neq0$ :

   $$\displaystyle (2u+v+w)+u^2(v+w)+D+Eu=0.\qquad(1)$$

   En échangeant les rôles de $u$ et $v$ (points $A$ et $C$) :

   $$\displaystyle (2v+w+u)+v^2(w+u)+D+Ev=0.\qquad(2)$$

   $(1)-(2)$ : $(u-v)+(u-v)\sigma_2+E(u-v)=0$, car $u^2(v+w)-v^2(w+u)=(u-v)(uv+vw+wu)$. Donc $\boxed{E=-(1+\sigma_2)}$. Dans $(1)$ : $D=-(2u+v+w)-u^2(v+w)+u(1+\sigma_2)=-\sigma_1+u\big[\sigma_2-u(v+w)\big]=-\sigma_1+u\,vw$, donc $\boxed{D=\sigma_3-\sigma_1}$. Enfin, avec $C$ : $G=-(u+v)^2-u^2v^2-D(u+v)-Euv$. On remplace $D$ et $E$ et on utilise $\sigma_2=uv+w(u+v)$ :

   $$\displaystyle G=-u^2v^2-uvw(u+v)+w(u+v)+uv+uv\,\sigma_2=w(u+v)+uv=\sigma_2,$$

   puisque $uv\,\sigma_2=u^2v^2+uvw(u+v)$. Ainsi $\boxed{G=\sigma_2}$.

   *Le foyer.* Pour $F(0,1)$ :

   $$\displaystyle 0^2+1^2+D\times0+E\times1+G=1-(1+\sigma_2)+\sigma_2=0.$$

   $F$ vérifie l'équation du cercle : **le cercle circonscrit à $ABC$ passe par $F$**. $\blacksquare$

**Remarque (autre démonstration).** Le projeté orthogonal de $F$ sur $T_u$ est $(u,0)$ : il est sur la tangente au sommet $y=0$. Les trois projetés de $F$ sur les côtés sont donc alignés, et la réciproque de la droite de Simson donne directement $F\in$ cercle circonscrit.

:::intuition
Tout se fait avec le paramètre de tangence : les sommets sont $(u+v,uv)$, les formules sont des polynômes symétriques en $u,v,w$, et l'orthocentre sort sur $y=-1$.
:::

:::trap
La tangente en $(2u,u^2)$ a pour pente $u$ (et non $2u$) ; avec le paramètre $2u$ pour l'abscisse, tout est plus propre.
:::
