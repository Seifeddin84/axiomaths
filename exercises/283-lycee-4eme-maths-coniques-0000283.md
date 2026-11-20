---
uid: "0000283"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Le papillon et le faisceau de coniques (Desargues)"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["coniques", "faisceau", "espace-vectoriel", "polynomes", "papillon"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths ; preuve par le faisceau de coniques (point de vue de Desargues)"
idea: "papillon"
dressing: "faisceau"
rung: 5
---
*Exercice de prolongement : il sort du programme du lycée (espace vectoriel de dimension finie).*

Soit $\Gamma$ un cercle et $[PQ]$ une corde de milieu $M$. On munit le plan du repère orthonormé $(M\,;\vec\imath,\vec\jmath)$ où $\vec\imath$ dirige $(PQ)$ : $P(-a,0)$, $Q(a,0)$, $a>0$. Soient $[AB]$ et $[CD]$ deux cordes de $\Gamma$ passant par $M$, distinctes de $(PQ)$ et de directions différentes, avec $A$ et $C$ du même côté de $(PQ)$. On note $X(x,0)=(AD)\cap(PQ)$ et $Y(y,0)=(BC)\cap(PQ)$.

**Fonction affine d'une droite.** Si $E(x_E,y_E)$ et $F(x_F,y_F)$ sont deux points distincts, on pose
$$\displaystyle L_{EF}(x,y)=(y_F-y_E)(x-x_E)-(x_F-x_E)(y-y_E).$$

1. Montrer que $L_{EF}$ est une fonction affine de $(x,y)$ (de la forme $ux+vy+w$ avec $(u,v)\neq(0,0)$) et que $L_{EF}(x,y)=0$ si et seulement si $(x,y)\in(EF)$.

2. On note $V$ l'espace des fonctions polynomiales de degré $\leq2$ en $(x,y)$, de base $1,x,y,x^2,xy,y^2$ ($\dim V=6$). On pose $F_1=L_{AB}\,L_{CD}$ et $F_2=L_{AD}\,L_{BC}$. Montrer que $F_1,F_2\in V$, qu'elles s'annulent en $A,B,C,D$ et qu'elles ne sont pas proportionnelles.

3. Soit $\mathrm{ev}:V\to\mathbb R^4$, $G\mapsto\big(G(A),G(B),G(C),G(D)\big)$. Montrer qu'elle est linéaire et **surjective** (indication : $L_{BC}L_{BD}$). En déduire, par le théorème du rang, que son noyau $V_0$ est de dimension $2$, puis que $(F_1,F_2)$ en est une base.

4. Le cercle $\Gamma$ a pour équation $F_\Gamma(x,y)=0$ avec $F_\Gamma(x,y)=x^2+y^2+2fy-a^2$. Montrer que $F_\Gamma\in V_0$, donc qu'il existe $\lambda,\mu\in\mathbb R$ avec $F_\Gamma=\lambda F_1+\mu F_2$.

5. Restreindre à l'axe $(Mx)$ : calculer $F_\Gamma(t,0)$, $F_1(t,0)$, $F_2(t,0)$ pour $t\in\mathbb R$.

6. Identifier les coefficients et conclure que $x+y=0$.

---

## Solution

:::property[Fonctions affines et espace de polynômes]

- Une **fonction affine** de deux variables est $L(x,y)=ux+vy+w$. Si $d\neq(Ox)$ coupe l'axe $(Ox)$ au point d'abscisse $t_0$, alors $L_d(t,0)=u\,(t-t_0)$ avec $u\neq0$.

- **Théorème du rang :** pour une application linéaire $\varphi:V\to W$, $\ \boxed{\dim V=\dim\ker\varphi+\dim\mathrm{Im}\,\varphi}$.

:::

1. Les coefficients de $x$ et $y$ sont $u=y_F-y_E$ et $v=-(x_F-x_E)$, et $(u,v)\neq(0,0)$ car $E\neq F$ : $L_{EF}$ est affine.

   $L_{EF}(x_E,y_E)=0$ (évident) et $L_{EF}(x_F,y_F)=(y_F-y_E)(x_F-x_E)-(x_F-x_E)(y_F-y_E)=0$. Une droite étant déterminée par deux de ses points et l'ensemble $\{L_{EF}=0\}$ étant une droite (car $(u,v)\neq(0,0)$) contenant $E$ et $F$ :

   $$\displaystyle \{L_{EF}=0\}=(EF).$$

2. $F_1$ et $F_2$ sont des produits de deux fonctions affines, donc des polynômes de degré $\leq2$ : elles sont dans $V$.

   $L_{AB}(A)=L_{AB}(B)=0$ et $L_{CD}(C)=L_{CD}(D)=0$ : $F_1(A)=F_1(B)=F_1(C)=F_1(D)=0$ (par exemple $F_1(A)=L_{AB}(A)L_{CD}(A)=0$). De même, $F_2(A)=L_{AD}(A)L_{BC}(A)=0$, $F_2(D)=0$, $F_2(B)=F_2(C)=0$.

   **Non proportionnelles :** $F_1$ s'annule sur toute la droite $(AB)$. $F_2=L_{AD}L_{BC}$ s'annule sur $(AB)$ seulement aux points de $(AB)\cap\big((AD)\cup(BC)\big)=\{A,B\}$ ; en un autre point $N$ de $(AB)$, $F_2(N)\neq0$ alors que $F_1(N)=0$. Si on avait $F_2=kF_1$, on aurait $F_2(N)=0$ : contradiction.

3. $\mathrm{ev}$ est linéaire car $(G+kH)(A)=G(A)+kH(A)$.

   **Surjective.** Les points $A,B,C,D$ sont distincts et sur un cercle : trois d'entre eux ne sont jamais alignés (une droite coupe un cercle en au plus deux points). La fonction $G_A=L_{BC}\,L_{BD}$ s'annule en $B$ (car $L_{BC}(B)=0$), en $C$ ($L_{BC}(C)=0$) et en $D$ ($L_{BD}(D)=0$), mais pas en $A$ (car $A\notin(BC)$ et $A\notin(BD)$). Donc $\mathrm{ev}(G_A)=(\ne0,0,0,0)$. On divise $G_A$ par $G_A(A)$ : on obtient $\mathrm{ev}=(1,0,0,0)$. On fait de même pour $B$, $C$ et $D$ (avec $L_{AC}L_{AD}$, $L_{AB}L_{AD}$, $L_{AB}L_{AC}$ respectivement) : les quatre vecteurs de la base canonique de $\mathbb R^4$ sont atteints, donc $\mathrm{ev}$ est surjective.

   **Dimension.** Théorème du rang : $\dim\ker\mathrm{ev}=\dim V-\dim\mathrm{Im}=6-4=2$.

   $F_1$ et $F_2$ sont dans $V_0=\ker\mathrm{ev}$ (question 2), non nulles et non proportionnelles : elles sont indépendantes. Deux vecteurs indépendants dans un espace de dimension $2$ en forment une base :

   $$\displaystyle \boxed{V_0=\mathrm{Vect}(F_1,F_2)}$$

4. $F_\Gamma\in V$ (polynôme de degré $2$) et $F_\Gamma(A)=\dots=F_\Gamma(D)=0$ car $A,B,C,D\in\Gamma$. Donc $F_\Gamma\in V_0$ et

   $$\displaystyle F_\Gamma=\lambda F_1+\mu F_2\qquad(\lambda,\mu\in\mathbb R).$$

5. $F_\Gamma(t,0)=t^2-a^2$.

   $(AB)$ et $(CD)$ passent par $M(0,0)$ et ne sont pas horizontales : $L_{AB}(t,0)=u_1t$ et $L_{CD}(t,0)=u_2t$ avec $u_1,u_2\neq0$, donc $F_1(t,0)=u_1u_2\,t^2=c\,t^2$ avec $c\neq0$.

   $(AD)$ coupe $(Ox)$ en $X(x,0)$ et $(BC)$ en $Y(y,0)$ : $L_{AD}(t,0)=u_3(t-x)$ et $L_{BC}(t,0)=u_4(t-y)$ avec $u_3,u_4\neq0$ (les droites ne sont pas horizontales : $A$ et $D$ sont de part et d'autre de $(PQ)$), donc $F_2(t,0)=c'(t-x)(t-y)$ avec $c'=u_3u_4\neq0$.

6. Pour tout réel $t$ :

   $$\displaystyle t^2-a^2=\lambda c\,t^2+\mu c'\big(t^2-(x+y)\,t+xy\big).$$

   Deux polynômes égaux pour tout $t$ ont les mêmes coefficients.

   - **Terme constant :** $-a^2=\mu c'\,xy$. Comme $a\neq0$, $\mu c'\neq0$.

   - **Coefficient de $t$ :** $0=-\mu c'(x+y)$.

   Comme $\mu c'\neq0$ :

   $$\displaystyle \boxed{x+y=0}$$

   $X$ et $Y$ sont de part et d'autre de $M$ à la même distance : $M$ est le milieu de $[XY]$.

:::remark[Où est passé le cercle ?]

Nulle part, sauf pour $F_\Gamma(t,0)=t^2-a^2$ (et pour « trois points non alignés »). Pour **n'importe quelle conique** d'équation $F_\Gamma=0$ passant par $A,B,C,D$ et coupant $(PQ)$ en deux points symétriques par rapport à $M$, on a $F_\Gamma(t,0)=k(t^2-a^2)$ avec $k\neq0$ et la preuve est identique. Elle donne donc le théorème du papillon pour l'ellipse, l'hyperbole et la parabole, dans une position quelconque.

:::

:::remark[Les autres preuves]

Le même théorème a été démontré avec les outils de chaque niveau : [exercice 264](/college/7eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%AD%D9%88%D8%B1%D9%8A#ex-0000264) et [265](/college/8eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A#ex-0000265) (symétries), [269](/lycee/2eme/sciences/trigonometrie#ex-0000269) (distances et loi du sinus), [273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273) (coordonnées polaires), [281](/lycee/4eme/mathematiques/coniques#ex-0000281) (coniques symétriques) et [282](/lycee/4eme/mathematiques/coniques#ex-0000282) (ellipse par une application affine).

:::

:::intuition

Les coniques qui passent par quatre points forment une « droite » (un espace de dimension 2) ; trois de ses membres sont connus ($\Gamma$ et les deux paires de droites). Restreintes à $(PQ)$ elles donnent trois polynômes du second degré liés par une relation linéaire : cette relation force $x+y=0$.

:::

:::trap

La surjectivité de $\mathrm{ev}$ demande que **trois des quatre points ne soient jamais alignés** ; pour des points quelconques elle peut tomber en défaut. C'est pourquoi on a utilisé que $A,B,C,D$ sont sur un cercle.

:::
