---
uid: "0000281"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Le papillon des coniques : une équation commune"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["coniques", "ellipse", "parabole", "cercle", "papillon", "equation-reduite"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "famille-coniques"
rung: 3
---
Dans un repère orthonormé $(M\,;\vec\imath,\vec\jmath)$ d'origine $M$, on considère une conique $\Gamma$ de l'un des trois types suivants, dont l'axe de symétrie est l'axe $(My)$ :

- une **ellipse** de centre $\Omega(0,y_0)$ et de demi-axes $\alpha$ (sur $x$) et $\beta$ (sur $y$) : $\dfrac{x^2}{\alpha^2}+\dfrac{(y-y_0)^2}{\beta^2}=1$ ;

- une **parabole** de sommet $S(0,y_0)$ : $x^2=2p\,(y-y_0)$, $p>0$ ;

- un **cercle** (cas $\alpha=\beta=R$ de l'ellipse).

On suppose que $\Gamma$ coupe l'axe $(Mx)$ en deux points $P$ et $Q$ **symétriques par rapport à $M$**. Soient $[AB]$ et $[CD]$ deux cordes de $\Gamma$ passant par $M$ (non parallèles à l'axe $(My)$ dans le cas de la parabole), avec $A$ et $C$ au-dessus de $(PQ)$, $X=(AD)\cap(PQ)$, $Y=(BC)\cap(PQ)$.

![Papillon d'une ellipse](/exercises/images/281-lycee-4eme-maths-coniques-0000281.png)

![Papillon d'une parabole](/exercises/images/281-lycee-4eme-maths-coniques-0000281-2.png)

1. **Une équation commune.** Montrer que dans chaque cas, $\Gamma$ a une équation de la forme

   $$\displaystyle x^2+\lambda y^2+2fy-a^2=0\qquad(\lambda\geq0)\qquad(\mathrm{E})$$

   et donner $\lambda$, $f$ et $a^2$ en fonction de $\alpha,\beta,y_0,p,R$.

2. Montrer que $P(-a,0)$ et $Q(a,0)$.

3. Soit $\theta$ une direction (avec $\cos\theta\neq0$ si $\lambda=0$). Montrer que $t\,(\cos\theta,\sin\theta)\in\Gamma$ si et seulement si

   $$\displaystyle D(\theta)\,t^2+2f\sin\theta\;t-a^2=0,\qquad D(\theta)=\cos^2\theta+\lambda\sin^2\theta,$$

   puis que les deux racines $t,t'$ vérifient

   $$\displaystyle \frac1t+\frac1{t'}=\frac{2f\sin\theta}{a^2}.\qquad(\star\star)$$

4. Conclure que $M$ est le milieu de $[XY]$ (on admet les formules de $1/x_X$ et $1/x_Y$ de l'[exercice n°273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273)).

---

## Solution

:::property[Équations réduites]

- **Ellipse :** $\ \boxed{\dfrac{X^2}{\alpha^2}+\dfrac{Y^2}{\beta^2}=1}$ dans le repère centré en son centre.

- **Parabole :** $\ \boxed{X^2=2pY}$ dans le repère centré en son sommet.

- **Changement de repère par translation :** si $\Omega(0,y_0)$ est la nouvelle origine, $X=x$ et $Y=y-y_0$.

:::

1. **Ellipse.** Dans le repère centré en $\Omega$ : $\dfrac{x^2}{\alpha^2}+\dfrac{(y-y_0)^2}{\beta^2}=1$. On multiplie par $\alpha^2$ et on pose $\lambda=\dfrac{\alpha^2}{\beta^2}>0$ :

   $$\displaystyle x^2+\lambda(y-y_0)^2-\alpha^2=0\iff x^2+\lambda y^2-2\lambda y_0\,y+\lambda y_0^2-\alpha^2=0 .$$

   C'est (E) avec $\ \boxed{\lambda=\tfrac{\alpha^2}{\beta^2},\ f=-\lambda y_0,\ a^2=\alpha^2-\lambda y_0^2}$.

   **Parabole.** $x^2=2p(y-y_0)\iff x^2-2py+2py_0=0$. C'est (E) avec $\ \boxed{\lambda=0,\ f=-p,\ a^2=-2py_0}$.

   **Cercle.** C'est l'ellipse avec $\alpha=\beta=R$, donc $\lambda=1$, $f=-y_0$, $a^2=R^2-y_0^2$.

   Récapitulatif :

   | | $\lambda$ | $f$ | $a^2$ |
   |---|---|---|---|
   | ellipse | $\alpha^2/\beta^2$ | $-\lambda y_0$ | $\alpha^2-\lambda y_0^2$ |
   | parabole | $0$ | $-p$ | $-2py_0$ |
   | cercle | $1$ | $-y_0$ | $R^2-y_0^2$ |

2. Pour $y=0$, (E) devient $x^2=a^2$. Comme $\Gamma$ coupe $(Mx)$ en deux points, $a^2>0$ et les points sont $(\pm a,0)$ : $P(-a,0)$, $Q(a,0)$, donc $M$ est bien leur milieu.

3. Le point $(t\cos\theta,t\sin\theta)$ est sur $\Gamma$ si et seulement si

   $$\displaystyle t^2\cos^2\theta+\lambda t^2\sin^2\theta+2f\,t\sin\theta-a^2=0\iff D(\theta)\,t^2+2f\sin\theta\;t-a^2=0 .$$

   $D(\theta)>0$ (somme de deux termes positifs, avec $\lambda\geq0$ ; pour la parabole $D=\cos^2\theta\neq0$). Le discriminant $4f^2\sin^2\theta+4D(\theta)a^2$ est strictement positif : deux racines $t$, $t'$.

   $$\displaystyle t+t'=-\frac{2f\sin\theta}{D(\theta)},\qquad tt'=-\frac{a^2}{D(\theta)}.$$

   $$\displaystyle \frac1t+\frac1{t'}=\frac{t+t'}{tt'}=\frac{2f\sin\theta}{D(\theta)}\cdot\frac{D(\theta)}{a^2}=\boxed{\frac{2f\sin\theta}{a^2}}\qquad(\star\star)$$

   Les nombres $\lambda$ et $D(\theta)$ ont **disparu** : la conique n'intervient plus que par le nombre $K=\dfrac{2f}{a^2}$.

4. Pour $(AB)$ de direction $\theta_1$ et $(CD)$ de direction $\theta_2$ :

   $$\displaystyle \frac1{t_A}+\frac1{t_B}=K\sin\theta_1,\qquad \frac1{t_C}+\frac1{t_D}=K\sin\theta_2 .$$

   Avec les formules admises pour $1/x_X$ et $1/x_Y$ :

   $$\displaystyle \frac1{x_X}+\frac1{x_Y}=\frac{1}{\sin(\theta_2-\theta_1)}\Big[\sin\theta_2\cdot K\sin\theta_1-\sin\theta_1\cdot K\sin\theta_2\Big]=0 .$$

   $$\displaystyle \boxed{x_Y=-x_X:\ M\text{ est le milieu de }[XY]}$$

   **Contrôle :** sur les figures, on mesure $MX=MY\approx1{,}89$ pour l'ellipse de centre $(0\,;-0{,}8)$ et de demi-axes $3{,}2$ et $2{,}2$, et $MX=MY\approx1{,}56$ pour la parabole $x^2=3{,}2(y+1)$.

:::remark[Retenir]

Pour toutes les coniques de la famille (E), $\frac1t+\frac1{t'}=\frac{2f}{a^2}\sin\theta$ : cette somme ne dépend de la corde que par son angle. C'est la même idée que dans les exercices classiques où l'on montre que $\frac1{FM}+\frac1{FN}$ est constant pour une corde $[MN]$ passant par un foyer $F$. Pour l'hyperbole, il faut un autre outil : voir l'[exercice n°283](/lycee/4eme/mathematiques/coniques#ex-0000283).

:::

:::intuition

Ellipse, parabole et cercle ont **la même forme d'équation** une fois le repère centré en $M$ : $x^2+\lambda y^2+2fy-a^2=0$. Le papillon ne voit que $f/a^2$.

:::

:::trap

Pour la parabole ($\lambda=0$), il faut exclure la direction de l'axe ($\cos\theta=0$) : une droite parallèle à l'axe ne coupe la parabole qu'en un seul point, ce n'est pas une corde.

:::
