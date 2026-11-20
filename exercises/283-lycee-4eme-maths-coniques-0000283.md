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
tags: ["coniques", "faisceau", "polynomes", "division", "papillon"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths ; preuve par le faisceau de coniques (point de vue de Desargues)"
idea: "papillon"
dressing: "faisceau"
rung: 5
---
*Exercice de prolongement : du calcul algébrique sur des polynômes à deux variables, un peu au-delà du programme, mais sans aucune notion nouvelle.*

Soit $\Gamma$ un cercle et $[PQ]$ une corde de milieu $M$. On munit le plan du repère orthonormé $(M\,;\vec\imath,\vec\jmath)$ où $\vec\imath$ dirige $(PQ)$ : $P(-a,0)$, $Q(a,0)$, $a>0$. Soient $[AB]$ et $[CD]$ deux cordes de $\Gamma$ passant par $M$, distinctes de $(PQ)$ et de directions différentes, avec $A$ et $C$ du même côté de $(PQ)$. On note $X(x,0)=(AD)\cap(PQ)$ et $Y(y,0)=(BC)\cap(PQ)$.

Au plus une des deux cordes est verticale. Si c'est $[AB]$, on échange les noms $A\leftrightarrow C$ et $B\leftrightarrow D$ (cela échange seulement $X$ et $Y$). On suppose donc que $(AB)$ **n'est pas verticale** : elle a pour équation $y=mx$ avec $m\neq0$ (car $(AB)\neq(PQ)$).

**Fonction affine d'une droite.** Si $E(x_E,y_E)$ et $F(x_F,y_F)$ sont deux points distincts, on pose
$$\displaystyle L_{EF}(x,y)=(y_F-y_E)(x-x_E)-(x_F-x_E)(y-y_E).$$

Le cercle $\Gamma$ a pour équation $F_\Gamma(x,y)=0$ avec $F_\Gamma(x,y)=x^2+y^2+2fy-a^2$. On pose
$$\displaystyle F_1=L_{AB}\,L_{CD},\qquad F_2=L_{AD}\,L_{BC}.$$

**But : montrer que $F_\Gamma=\lambda F_1+\mu F_2$ pour deux réels $\lambda,\mu$, puis en déduire que $M$ est le milieu de $[XY]$.**

1. Montrer que $L_{EF}$ est une fonction affine de $(x,y)$ (de la forme $ux+vy+w$ avec $(u,v)\neq(0,0)$) et que $L_{EF}(x,y)=0$ si et seulement si $(x,y)\in(EF)$.

2. Montrer que $F_1$ et $F_2$ s'annulent en $A$, $B$, $C$ et $D$.

3. **Sur la droite $(AB)$.** On note $x_A\neq x_B$ les abscisses de $A$ et $B$, et l'on pose, pour tout réel $x$, $\varphi(x)=F_\Gamma(x,mx)$ et $\psi(x)=F_2(x,mx)$.

   a. Montrer que $\varphi(x)=k\,(x-x_A)(x-x_B)$ pour un réel $k$.

   b. Montrer que $L_{AD}(x,mx)$ et $L_{BC}(x,mx)$ sont des fonctions affines de $x$, non identiquement nulles, qui s'annulent respectivement en $x_A$ et $x_B$. En déduire que $\psi(x)=k'(x-x_A)(x-x_B)$ avec $k'\neq0$.

   c. On pose $\mu=\dfrac{k}{k'}$ et $G=F_\Gamma-\mu F_2$. Montrer que $G(x,mx)=0$ pour tout réel $x$.

4. **Division par $y-mx$.** On écrit $G(x,y)=\alpha y^2+(\beta x+\gamma)y+(\delta x^2+\varepsilon x+\zeta)$. Vérifier que
$$\displaystyle G(x,y)=(y-mx)\big(\alpha y+(\beta+m\alpha)x+\gamma\big)+G(x,mx),$$
   puis en déduire que $G(x,y)=(y-mx)\,H(x,y)$ où $H$ est une fonction affine.

5. Montrer que $H(C)=H(D)=0$, puis que $H$ est proportionnelle à $L_{CD}$. Conclure qu'il existe $\lambda\in\mathbb R$ tel que $F_\Gamma=\lambda F_1+\mu F_2$.

6. Restreindre à l'axe $(Mx)$ : calculer $F_\Gamma(t,0)$, $F_1(t,0)$, $F_2(t,0)$ pour $t\in\mathbb R$.

7. Identifier les coefficients et conclure que $x+y=0$.

---

## Solution

:::property[Trois outils algébriques]

- **Fonction affine :** $L(x,y)=ux+vy+w$. Si une droite $d\neq(Ox)$ coupe l'axe $(Ox)$ au point d'abscisse $t_0$, alors $L_d(t,0)=u\,(t-t_0)$ avec $u\neq0$.

- **Théorème du facteur :** si un polynôme $\varphi$ s'annule en $x_0$, alors $\varphi(x)=(x-x_0)\,\varphi_1(x)$ avec $\deg\varphi_1=\deg\varphi-1$.

- **Égalité de polynômes :** deux polynômes égaux pour tout $t$ ont les mêmes coefficients.

:::

1. Les coefficients de $x$ et $y$ sont $u=y_F-y_E$ et $v=-(x_F-x_E)$, et $(u,v)\neq(0,0)$ car $E\neq F$ : $L_{EF}$ est affine.

   $L_{EF}(x_E,y_E)=0$ (évident) et $L_{EF}(x_F,y_F)=(y_F-y_E)(x_F-x_E)-(x_F-x_E)(y_F-y_E)=0$. L'ensemble $\{L_{EF}=0\}$ est une droite (car $(u,v)\neq(0,0)$) qui contient $E$ et $F$ ; une droite étant déterminée par deux de ses points :

   $$\displaystyle \{L_{EF}=0\}=(EF).$$

2. $L_{AB}(A)=L_{AB}(B)=0$ et $L_{CD}(C)=L_{CD}(D)=0$, donc chacun des quatre points $A,B,C,D$ annule l'un des deux facteurs de $F_1$ : $F_1(A)=F_1(B)=F_1(C)=F_1(D)=0$. Par exemple $F_1(A)=L_{AB}(A)\,L_{CD}(A)=0$.

   De même $L_{AD}(A)=L_{AD}(D)=0$ et $L_{BC}(B)=L_{BC}(C)=0$ : $F_2(A)=F_2(B)=F_2(C)=F_2(D)=0$.

3. a. Sur la droite $(AB)$ le point d'abscisse $x$ est $(x,mx)$. Dans $F_\Gamma(x,mx)=x^2+m^2x^2+2fmx-a^2$ on lit un polynôme de degré $\leq2$ en $x$ :

   $$\displaystyle \varphi(x)=(1+m^2)x^2+2fm\,x-a^2.$$

   $A$ et $B$ sont sur $\Gamma$ et sur $(AB)$ : $\varphi(x_A)=\varphi(x_B)=0$.

   Théorème du facteur : $\varphi(x)=(x-x_A)\varphi_1(x)$ avec $\varphi_1$ de degré $\leq1$. Comme $\varphi(x_B)=0$ et $x_B\neq x_A$, $\varphi_1(x_B)=0$, donc $\varphi_1(x)=k\,(x-x_B)$ :

   $$\displaystyle \varphi(x)=k\,(x-x_A)(x-x_B).$$

   b. Si $L_{AD}(x,y)=u_3x+v_3y+w_3$, alors $L_{AD}(x,mx)=(u_3+mv_3)\,x+w_3$ est affine en $x$. Elle s'annule en $x_A$ car $A\in(AD)$.

   Elle n'est pas identiquement nulle : sinon tous les points de $(AB)$ seraient sur $(AD)$, donc $(AB)=(AD)$ et $D\in(AB)$, ce qui est faux ($D$ est sur $(CD)$, qui coupe $(AB)$ seulement en $M\neq D$). Une fonction affine non nulle qui s'annule en $x_A$ s'écrit $k_3(x-x_A)$ avec $k_3\neq0$.

   Même raisonnement pour $L_{BC}(x,mx)=k_4(x-x_B)$, $k_4\neq0$ ($C\notin(AB)$). D'où

   $$\displaystyle \psi(x)=k_3k_4\,(x-x_A)(x-x_B)=k'\,(x-x_A)(x-x_B),\qquad k'=k_3k_4\neq0.$$

   c. $G(x,mx)=\varphi(x)-\mu\,\psi(x)=(k-\mu k')(x-x_A)(x-x_B)=0$ pour tout $x$, par le choix $\mu=\dfrac k{k'}$.

   **Contrôle :** $G=F_\Gamma-\mu F_2$ s'annule sur **toute** la droite $(AB)$, et pas seulement en $A$ et $B$ : c'est ce que le choix de $\mu$ vient d'obtenir.

4. Développons $(y-mx)\big(\alpha y+(\beta+m\alpha)x+\gamma\big)$ :

   $$\displaystyle \alpha y^2+(\beta+m\alpha)xy+\gamma y-m\alpha xy-m(\beta+m\alpha)x^2-m\gamma x=\alpha y^2+(\beta x+\gamma)y-m(\beta+m\alpha)x^2-m\gamma x.$$

   Il reste, pour retrouver $G(x,y)$, le terme $G(x,mx)$ : en effet

   $$\displaystyle G(x,mx)=\alpha m^2x^2+(\beta x+\gamma)mx+\delta x^2+\varepsilon x+\zeta,$$

   et la somme des deux expressions redonne bien $\alpha y^2+(\beta x+\gamma)y+\delta x^2+\varepsilon x+\zeta$ : le coefficient de $x^2$ est $-m\beta-m^2\alpha+\alpha m^2+\beta m+\delta=\delta$ et celui de $x$ est $-m\gamma+\gamma m+\varepsilon=\varepsilon$. D'où la formule demandée (c'est une division euclidienne par $y-mx$, en voyant $G$ comme un polynôme en $y$).

   Comme $G(x,mx)=0$ pour tout $x$ (question 3.c) :

   $$\displaystyle G(x,y)=(y-mx)\,H(x,y),\qquad H(x,y)=\alpha y+(\beta+m\alpha)x+\gamma,$$

   et $H$ est une fonction affine.

5. $G(C)=F_\Gamma(C)-\mu F_2(C)=0$ ($C\in\Gamma$ et question 2). Or $G(C)=(y_C-mx_C)\,H(C)$ et $y_C-mx_C\neq0$ car $C\notin(AB)$. Donc $H(C)=0$. De même $H(D)=0$.

   $H=px+qy+r$ est affine et s'annule en $C$ et $D$, deux points distincts.

   - Si $(p,q)=(0,0)$, $H$ est constante, égale à $H(C)=0$ : $H=0\cdot L_{CD}$.

   - Sinon $\{H=0\}$ est une droite qui contient $C$ et $D$ : c'est $(CD)=\{L_{CD}=0\}$. Deux équations d'une même droite sont proportionnelles : $H=\lambda_0\,L_{CD}$.

   Dans les deux cas $H=\lambda_0L_{CD}$. Par ailleurs $L_{AB}=\kappa\,(y-mx)$ avec $\kappa\neq0$ (même droite $(AB)$). Donc

   $$\displaystyle F_\Gamma=\mu F_2+(y-mx)\,\lambda_0L_{CD}=\mu F_2+\frac{\lambda_0}{\kappa}\,L_{AB}L_{CD}=\lambda F_1+\mu F_2,\qquad\lambda=\frac{\lambda_0}\kappa.$$

6. $F_\Gamma(t,0)=t^2-a^2$.

   $(AB)$ et $(CD)$ passent par $M(0,0)$ et ne sont pas horizontales : $L_{AB}(t,0)=u_1t$ et $L_{CD}(t,0)=u_2t$ avec $u_1,u_2\neq0$, donc $F_1(t,0)=u_1u_2\,t^2=c\,t^2$ avec $c\neq0$.

   $(AD)$ coupe $(Ox)$ en $X(x,0)$ et $(BC)$ en $Y(y,0)$ : $L_{AD}(t,0)=u_3(t-x)$ et $L_{BC}(t,0)=u_4(t-y)$ avec $u_3,u_4\neq0$ (les droites ne sont pas horizontales : $A$ et $D$ sont de part et d'autre de $(PQ)$), donc $F_2(t,0)=c'(t-x)(t-y)$ avec $c'=u_3u_4\neq0$.

7. Pour tout réel $t$ :

   $$\displaystyle t^2-a^2=\lambda c\,t^2+\mu c'\big(t^2-(x+y)\,t+xy\big).$$

   Deux polynômes égaux pour tout $t$ ont les mêmes coefficients.

   - **Terme constant :** $-a^2=\mu c'\,xy$. Comme $a\neq0$, $\mu c'\neq0$.

   - **Coefficient de $t$ :** $0=-\mu c'(x+y)$.

   Comme $\mu c'\neq0$ :

   $$\displaystyle \boxed{x+y=0}$$

   $X$ et $Y$ sont de part et d'autre de $M$ à la même distance : $M$ est le milieu de $[XY]$.

:::remark[Où est passé le cercle ?]

Nulle part, sauf dans $F_\Gamma(t,0)=t^2-a^2$ (et dans le fait que $F_\Gamma$ est un polynôme de degré $2$ qui s'annule en $A,B,C,D$). Pour **n'importe quelle conique** d'équation $F_\Gamma=0$ passant par $A,B,C,D$ et coupant $(PQ)$ en deux points symétriques par rapport à $M$, on a $F_\Gamma(t,0)=k(t^2-a^2)$ avec $k\neq0$ et la preuve est identique. Elle donne donc le théorème du papillon pour l'ellipse, l'hyperbole et la parabole, dans une position quelconque.

:::

:::remark[Les autres preuves]

Le même théorème a été démontré avec les outils de chaque niveau : [exercice 264](/college/7eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%AD%D9%88%D8%B1%D9%8A#ex-0000264) et [265](/college/8eme/%D8%A7%D9%84%D8%AA%D9%86%D8%A7%D8%B8%D8%B1-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A#ex-0000265) (symétries), [269](/lycee/2eme/sciences/trigonometrie#ex-0000269) (distances et loi du sinus), [273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273) (coordonnées polaires), [281](/lycee/4eme/mathematiques/coniques#ex-0000281) (coniques symétriques) et [282](/lycee/4eme/mathematiques/coniques#ex-0000282) (ellipse par une application affine).

:::

:::intuition

Une conique qui passe par $A,B,C,D$ se « fabrique » avec les deux paires de droites $(AB)(CD)$ et $(AD)(BC)$ : $F=\lambda F_1+\mu F_2$. Restreintes à $(PQ)$, ces trois courbes donnent trois polynômes du second degré liés par une relation, et cette relation force $x+y=0$.

:::

:::trap

Pour diviser par $y-mx$ il ne suffit pas que $G$ s'annule en $A$ et $B$ : il faut que $G$ s'annule sur **toute** la droite $(AB)$. C'est pour cela qu'on ajuste $\mu$ à la question 3 ; sans ce choix, le reste de la division n'est pas nul.

:::
