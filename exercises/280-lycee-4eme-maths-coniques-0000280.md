---
uid: "0000280"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Axiomaths"
title: "Le papillon d'une parabole quelconque"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["theoreme-du-papillon", "coniques", "parabole", "coordonnees"]
provenance: adapted
adapted_from: "résultat classique (théorème du papillon) ; énoncé, découpage en questions et solution Axiomaths"
idea: "papillon"
dressing: "papillon d'une parabole quelconque"
rung: 3
---
Le plan est muni d'un repère orthonormé $(O\,;\vec\imath,\vec\jmath)$. Soit $\mathcal P$ la parabole d'équation $x^2=2p\,(y-y_0)$, avec $p>0$ et $y_0<0$ : son sommet est $S(0,y_0)$ et son axe est l'axe $(Oy)$. Elle coupe l'axe $(Ox)$ en deux points $P$ et $Q$ ; on note $M$ le milieu de $[PQ]$.

Soient $[AB]$ et $[CD]$ deux cordes de $\mathcal P$ passant par $M$, non verticales, avec $A$ et $C$ au-dessus de $(PQ)$ et $B$, $D$ en dessous. On note $X=(AD)\cap(PQ)$ et $Y=(BC)\cap(PQ)$.

![Papillon de la parabole x² = 3,2 (y+1)](/exercises/images/280-lycee-4eme-maths-coniques-0000280.png)

La figure montre le cas $2p=3{,}2$, $y_0=-1$. On veut montrer que $M$ est le milieu de $[XY]$.

1. Montrer que $P(-a,0)$ et $Q(a,0)$ avec $a=\sqrt{-2py_0}$, donc que $M$ est l'origine $O$ du repère.

2. Soit $\theta$ un angle tel que $\cos\theta\neq0$. Montrer que le point $t\,(\cos\theta,\sin\theta)$ est sur $\mathcal P$ si et seulement si
$$\displaystyle \cos^2\theta\;t^2-2p\sin\theta\;t-a^2=0 .$$

3. Montrer que si $t$ et $t'$ sont les deux racines, alors
$$\displaystyle \frac1t+\frac1{t'}=-\frac{2p\sin\theta}{a^2}.\qquad(\star\star)$$

4. Soient $\theta_1$, $\theta_2$ les directions de $(AB)$ et de $(CD)$ et $A=t_Au_1$, $B=t_Bu_1$, $C=t_Cu_2$, $D=t_Du_2$ (avec $u_i=(\cos\theta_i,\sin\theta_i)$). On admet (calcul de l'[exercice n°273](/lycee/3eme/mathematiques/produit-scalaire-dans-le-plan#ex-0000273)) que
$$\displaystyle \frac1{x_X}=\frac{1}{\sin(\theta_2-\theta_1)}\Big(\frac{\sin\theta_2}{t_A}-\frac{\sin\theta_1}{t_D}\Big),\qquad \frac1{x_Y}=\frac{1}{\sin(\theta_2-\theta_1)}\Big(\frac{\sin\theta_2}{t_B}-\frac{\sin\theta_1}{t_C}\Big).$$
Conclure que $M$ est le milieu de $[XY]$.

---

## Solution

:::property[Parabole et racines d'une équation du second degré]

- La parabole $x^2=2p(y-y_0)$ est l'ensemble des points dont les coordonnées vérifient cette équation.

- Si $t$, $t'$ sont les racines de $\alpha t^2+\beta t+\gamma=0$ : $\ \boxed{t+t'=-\dfrac\beta\alpha,\quad tt'=\dfrac\gamma\alpha}$.

:::

1. Pour $y=0$ : $x^2=-2py_0>0$ (car $p>0$, $y_0<0$). Donc $x=\pm a$ avec $a=\sqrt{-2py_0}$, et $P(-a,0)$, $Q(a,0)$ : le milieu de $[PQ]$ est $(0,0)=M$.

   De plus $a^2=-2py_0$, c'est-à-dire $-2p\,y_0=a^2$.

2. Le point $(t\cos\theta,t\sin\theta)$ est sur $\mathcal P$ si et seulement si

   $$\displaystyle t^2\cos^2\theta=2p\,(t\sin\theta-y_0)=2p\,t\sin\theta-2py_0=2p\,t\sin\theta+a^2 .$$

   On met tout dans le même membre :

   $$\displaystyle \boxed{\cos^2\theta\;t^2-2p\sin\theta\;t-a^2=0}$$

   Comme $\cos\theta\neq0$ (direction non verticale), c'est une équation du second degré, de discriminant $4p^2\sin^2\theta+4a^2\cos^2\theta>0$ : il y a deux racines.

3. Relations coefficients–racines avec $\alpha=\cos^2\theta$, $\beta=-2p\sin\theta$, $\gamma=-a^2$ :

   $$\displaystyle t+t'=\frac{2p\sin\theta}{\cos^2\theta},\qquad tt'=-\frac{a^2}{\cos^2\theta}.$$

   On divise (le facteur $\cos^2\theta$ disparaît) :

   $$\displaystyle \frac1t+\frac1{t'}=\frac{t+t'}{tt'}=\frac{2p\sin\theta}{\cos^2\theta}\cdot\Big(-\frac{\cos^2\theta}{a^2}\Big)=\boxed{-\frac{2p\sin\theta}{a^2}}$$

   La somme des inverses ne dépend de la corde que par $\sin\theta$ : c'est la même relation que pour le cercle ($2f\sin\theta/a^2$ avec ici $f=-p$).

4. D'après $(\star\star)$ appliquée à la droite $(AB)$ puis à $(CD)$ :

   $$\displaystyle \frac1{t_A}+\frac1{t_B}=-\frac{2p\sin\theta_1}{a^2},\qquad \frac1{t_C}+\frac1{t_D}=-\frac{2p\sin\theta_2}{a^2}.$$

   On additionne les deux formules admises :

   $$\displaystyle \frac1{x_X}+\frac1{x_Y}=\frac1{\sin(\theta_2-\theta_1)}\Big[\sin\theta_2\Big(\frac1{t_A}+\frac1{t_B}\Big)-\sin\theta_1\Big(\frac1{t_C}+\frac1{t_D}\Big)\Big].$$

   On remplace :

   $$\displaystyle \frac1{x_X}+\frac1{x_Y}=\frac{1}{\sin(\theta_2-\theta_1)}\cdot\Big(-\frac{2p}{a^2}\Big)\big[\sin\theta_2\sin\theta_1-\sin\theta_1\sin\theta_2\big]=0 .$$

   Donc $x_Y=-x_X$ : $X$ et $Y$ sont sur $(Ox)$ à des abscisses opposées.

   $$\displaystyle \boxed{M\text{ est le milieu de }[XY]}$$

   **Contrôle numérique :** pour $x^2=4(y+1)$, $2p=4$, $y_0=-1$, $a^2=4$ : l'exercice [279](/lycee/4eme/mathematiques/coniques#ex-0000279) donne $x_X=-\tfrac74$, $x_Y=\tfrac74$.

:::remark[Le cas où la direction est verticale]

Une droite parallèle à l'axe $(Oy)$ ne coupe la parabole qu'en un seul point : elle ne porte pas de corde, c'est pourquoi on suppose $\cos\theta\neq0$.

:::

:::intuition

Avec le cercle, c'est la relation $\frac1t+\frac1{t'}=\frac{2f\sin\theta}{a^2}$ qui fait tout. La parabole la vérifie aussi, avec un autre nombre $f$ : le papillon n'a besoin de rien d'autre.

:::

:::trap

Pour la parabole, le coefficient de $t^2$ est $\cos^2\theta$ (et non $1$ comme pour le cercle) : on ne peut pas lire directement la somme des racines. Mais le facteur disparaît quand on forme $\frac{t+t'}{tt'}$.

:::
