---
uid: "0000282"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Le papillon d'une ellipse par une application affine"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["coniques", "ellipse", "application-affine", "papillon"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "application-affine"
rung: 5
---
Soit $\mathcal E$ l'ellipse d'équation $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ avec $a>b>0$, dans un repère orthonormé $(O\,;\vec\imath,\vec\jmath)$. On considère l'application
$$\displaystyle f:\ (x,y)\longmapsto\Big(x,\ \frac ab\,y\Big).$$

On considère aussi une corde $[PQ]$ de $\mathcal E$ de milieu $M$ **quelconque** (pas nécessairement sur un axe), deux cordes $[AB]$ et $[CD]$ de $\mathcal E$ passant par $M$, avec $A$ et $C$ du même côté de $(PQ)$, et les points $X=(AD)\cap(PQ)$, $Y=(BC)\cap(PQ)$.

![Papillon d'une ellipse en position quelconque](/exercises/images/282-lycee-4eme-maths-coniques-0000282.png)

1. Montrer que $f$ envoie $\mathcal E$ sur le cercle $\mathcal C$ de centre $O$ et de rayon $a$.

2. Montrer que $f$ est bijective, qu'elle transforme toute droite en une droite, qu'elle conserve les milieux et qu'elle conserve les « côtés » d'une droite (deux points de part et d'autre d'une droite ont des images de part et d'autre de la droite image).

3. En déduire le théorème du papillon pour l'ellipse $\mathcal E$ : $M$ est le milieu de $[XY]$.

4. **Illustration.** On prend $a=3$, $b=2$ et $M\big(1,\tfrac12\big)$ (comme sur la figure). Vérifier que $M$ est à l'intérieur de $\mathcal E$, puis que la droite d'équation $16x+18y=25$ passe par $M$ et coupe $\mathcal E$ en deux points $P$ et $Q$ dont $M$ est le milieu.

---

## Solution

:::property[Application affine]

Une application $f:(x,y)\mapsto(\alpha x+\beta y+\gamma,\ \alpha'x+\beta'y+\gamma')$ avec $\alpha\beta'-\beta\alpha'\neq0$ est une **application affine bijective**. Elle transforme une droite en une droite, un milieu en un milieu et conserve l'alignement et le parallélisme.

:::

1. Posons $(x',y')=f(x,y)$. Alors $x=x'$ et $y=\dfrac bay'$. Donc

   $$\displaystyle (x,y)\in\mathcal E\iff \frac{x'^2}{a^2}+\frac{(b y'/a)^2}{b^2}=1\iff\frac{x'^2}{a^2}+\frac{y'^2}{a^2}=1\iff x'^2+y'^2=a^2 .$$

   $$\displaystyle \boxed{f(\mathcal E)=\mathcal C(O,a)}$$

2. **Bijective** : $f^{-1}(x',y')=\big(x',\tfrac bay'\big)$.

   **Droites** : la droite d'équation $ux+vy+w=0$ a pour image la droite d'équation $ux'+\dfrac{bv}ay'+w=0$ (même calcul que ci-dessus).

   **Milieux** : si $I=\dfrac{U+V}2$, les coordonnées de $f$ sont linéaires, donc $f(I)=\dfrac{f(U)+f(V)}2$.

   **Côtés** : si $U$ et $V$ sont de part et d'autre d'une droite $d$, le segment $[UV]$ coupe $d$ ; son image $[f(U)f(V)]$ coupe $f(d)$ : $f(U)$ et $f(V)$ sont de part et d'autre de $f(d)$.

3. On note $P',Q',A',B',C',D',M'$ les images des points. Par la question 1 : $P',Q',A',B',C',D'$ sont sur le cercle $\mathcal C$. Par la question 2 :

   - $M'$ est le milieu de $[P'Q']$ ;

   - $A',M',B'$ sont alignés avec $M'\in[A'B']$ (conservation de l'alignement et des milieux/ordre), de même $C',M',D'$ ;

   - $A'$ et $C'$ sont du même côté de $(P'Q')$ ;

   - $X'=f(X)=(A'D')\cap(P'Q')$ et $Y'=f(Y)=(B'C')\cap(P'Q')$.

   Ce sont exactement les hypothèses du théorème du papillon pour le cercle $\mathcal C$ (exercices [268](/lycee/2eme/sciences/geometrie-analytique#ex-0000268), [269](/lycee/2eme/sciences/trigonometrie#ex-0000269), [273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273)) : $M'$ est le milieu de $[X'Y']$.

   Comme $f^{-1}$ conserve les milieux, $M=f^{-1}(M')$ est le milieu de $[XY]$.

   $$\displaystyle \boxed{M\text{ est le milieu de }[XY]}$$

4. **Intérieur :** $\dfrac{1^2}9+\dfrac{(1/2)^2}4=\dfrac19+\dfrac1{16}=\dfrac{25}{144}<1$ : $M$ est dans l'ellipse.

   **Droite :** en $M$, $16\cdot1+18\cdot\tfrac12=16+9=25$ ✓.

   **Points d'intersection :** de $16x+18y=25$ on tire $y=\dfrac{25-16x}{18}$. L'ellipse s'écrit $4x^2+9y^2=36$ :

   $$\displaystyle 4x^2+\frac{(25-16x)^2}{36}=36\iff 144x^2+625-800x+256x^2=1296\iff 400x^2-800x-671=0 .$$

   Le discriminant est positif ($800^2+4\cdot400\cdot671>0$) : deux points $P$, $Q$. La somme des racines vaut $\dfrac{800}{400}=2$, donc l'abscisse du milieu est $1=x_M$ ; comme $P,Q$ et $M$ sont sur la droite, le milieu de $[PQ]$ est le point de la droite d'abscisse $1$, c'est-à-dire $M$.

   **Contrôle :** pour une ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$, la corde de milieu $(x_0,y_0)$ a pour équation $\frac{x_0x}{a^2}+\frac{y_0y}{b^2}=\frac{x_0^2}{a^2}+\frac{y_0^2}{b^2}$ ; ici $\frac x9+\frac y8=\frac{25}{144}$, soit $16x+18y=25$.

:::remark[Même idée pour d'autres coniques]

Les ellipses sont des « cercles étirés » : tout ce que le cercle vérifie avec des droites, des milieux et des intersections, l'ellipse le vérifie. Le cas où $M$ est sur l'axe de symétrie a été traité avec des coordonnées dans l'[exercice 281](/lycee/4eme/mathematiques/coniques#ex-0000281) ; le cas général (hyperbole, parabole quelconque) fait l'objet de l'[exercice 283](/lycee/4eme/mathematiques/coniques#ex-0000283).

:::

:::intuition

On étire verticalement le plan d'un facteur $\frac ab$ : l'ellipse devient un cercle, et les droites, les milieux, les intersections restent des droites, des milieux, des intersections. On résout dans le cercle puis on « détire ».

:::

:::trap

Une application qui change les rapports (comme $f$) ne conserve pas les **angles** ni les **distances** : ne pas dire que « $MX=M'X'$ ». Seuls les milieux, l'alignement et les rapports de longueurs sur une même droite sont conservés.

:::
