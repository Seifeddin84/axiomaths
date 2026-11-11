---
title: "Coniques : parabole, ellipse, hyperbole et la règle foyer-directrice"
slug: "lycee-4eme-maths-coniques"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Coniques"
summary: "Une seule règle (la distance au foyer vaut e fois la distance à la directrice) engendre parabole, ellipse et hyperbole : équations réduites, sommets, tangentes, propriété du miroir, propriété bifocale, asymptotes, puis équations non réduites par changement d'origine."
prerequisites: ["Barycentre de deux points pondérés", "Distance dans un repère orthonormé", "Dérivée et tangente à une courbe", "Asymptotes d'une courbe", "Forme canonique d'un trinôme"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 5 « Coniques »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une antenne parabolique, l'orbite de la Terre, la trajectoire d'une comète qui ne reviendra jamais : **parabole**, **ellipse**, **hyperbole**. On les appelle les **coniques**. Tu en connais déjà deux sans le savoir : la courbe de $x \mapsto x^2$ est une parabole, celle de $x \mapsto \frac1x$ est une hyperbole.

Ce chapitre montre qu'elles ont **la même recette**, et qu'un seul nombre $e$, l'**excentricité**, décide laquelle on obtient.

![Une ellipse, une parabole et une hyperbole construites avec le même foyer F et la même directrice D, pour les excentricités 0,6 ; 1 et 1,6.](/lessons/images/m4-con-trois.svg "Même foyer F, même directrice D, trois valeurs de l'excentricité e : e = 0,6 donne une ellipse (courbe fermée), e = 1 une parabole, e = 1,6 une hyperbole (on ne voit ici que la branche qui entoure F).")

:::intuition
Place un point $F$ (le **foyer**) et une droite $D$ (la **directrice**). Pour chaque point $M$ du plan, compare sa distance $MF$ au foyer et sa distance $MH$ à la droite. Si le rapport $\dfrac{MF}{MH}$ vaut toujours le même nombre $e$, le point $M$ trace une conique. Quand $e < 1$, le foyer « gagne » et la courbe se referme sur lui (**ellipse**). Quand $e = 1$, c'est l'égalité (**parabole**). Quand $e > 1$, la directrice « gagne » et la courbe s'écarte du foyer en deux branches (**hyperbole**). Tout le chapitre consiste à écrire cette règle en coordonnées.
:::

## 1. La règle commune : foyer, directrice, excentricité

:::definition[Conique]
Soit $D$ une droite, $F$ un point qui n'est pas sur $D$ et $e$ un réel strictement positif. Pour tout point $M$, on note $H$ son projeté orthogonal sur $D$. La **conique de foyer $F$, de directrice $D$ et d'excentricité $e$** est l'ensemble des points $M$ tels que
$$
MF = e \cdot MH.
$$
- $e < 1$ : c'est une **ellipse** ;
- $e = 1$ : c'est une **parabole** ;
- $e > 1$ : c'est une **hyperbole**.

La perpendiculaire à $D$ passant par $F$ est l'**axe focal**. On note $K$ le projeté orthogonal de $F$ sur $D$.
:::

:::property[Symétrie et sommets]
- La conique est **symétrique par rapport à son axe focal**.
- Elle coupe l'axe focal en un seul point si $e = 1$ (le milieu de $[FK]$), en **deux points**, appelés **sommets**, si $e \neq 1$ : les barycentres de $(F, 1), (K, e)$ et de $(F, 1), (K, -e)$.
:::

:::proof[Symétrie et sommets]
| Étape | Justification |
|---|---|
| La symétrie $s$ d'axe $(FK)$ laisse $F$ fixe et conserve la droite $D$ | $D$ est perpendiculaire à l'axe |
| Donc $s(M)F = MF$ et $s(M)H' = MH$, où $H'$ est le projeté de $s(M)$ | une symétrie orthogonale conserve les distances |
| $M$ est sur la conique si et seulement si $s(M)$ l'est | la relation $MF = e \cdot MH$ ne change pas |
| Pour $M$ sur $(FK)$, le projeté de $M$ sur $D$ est $K$ | $(FK)$ est perpendiculaire à $D$ |
| La condition devient $MF = e \cdot MK$ | on remplace $MH$ par $MK$ |
| Les points de $(FK)$ tels que $MF = e \cdot MK$ sont les barycentres de $(F, 1), (K, e)$ et, si $e \neq 1$, de $(F, 1), (K, -e)$ | pour un barycentre $G$ de $(F, \alpha), (K, \beta)$, on a $\dfrac{GF}{GK} = \left\lvert \dfrac{\beta}{\alpha} \right\rvert$ |
:::

## 2. La parabole ($e = 1$)

:::definition[Parabole]
La **parabole** de foyer $F$ et de directrice $D$ est l'ensemble des points $M$ tels que $MF = MH$. Le **paramètre** de la parabole est la distance $p = FK$ du foyer à la directrice. Son **sommet** $S$ est le milieu de $[FK]$.
:::

:::theorem[Équation réduite d'une parabole]
Soit $\mathcal{P}$ une parabole de paramètre $p$ et de sommet $S$. Dans le repère orthonormé $(S, \vec\imath, \vec\jmath)$ où $\vec\imath$ est le vecteur unitaire de $\overrightarrow{SF}$, la parabole a pour équation
$$
y^2 = 2px,
$$
son foyer est $F\left(\dfrac p2, 0\right)$ et sa directrice est la droite $x = -\dfrac p2$.

Réciproquement, pour $p > 0$, l'ensemble des points $M(x, y)$ tels que $y^2 = 2px$ est la parabole de foyer $\left(\dfrac p2, 0\right)$ et de directrice $x = -\dfrac p2$.
:::

:::proof[Équation réduite d'une parabole]
| Étape | Justification |
|---|---|
| $S$ est le milieu de $[FK]$ et $FK = p$, donc $SF = \dfrac p2$ et $K\left(-\dfrac p2, 0\right)$ | définition du sommet |
| $F\left(\dfrac p2, 0\right)$ et $D : x = -\dfrac p2$ | $D$ est perpendiculaire à l'axe focal en $K$ |
| Pour $M(x, y)$, $H\left(-\dfrac p2, y\right)$, donc $MH^2 = \left(x + \dfrac p2\right)^2$ | projection sur $D$ |
| $MF^2 = \left(x - \dfrac p2\right)^2 + y^2$ | distance dans un repère orthonormé |
| $MF = MH \iff \left(x - \dfrac p2\right)^2 + y^2 = \left(x + \dfrac p2\right)^2$ | les deux distances sont positives : on compare leurs carrés |
| $\iff y^2 = \left(x + \dfrac p2\right)^2 - \left(x - \dfrac p2\right)^2 = 2px$ | identité remarquable $a^2 - b^2$ |
:::

Toutes les équivalences sont des équivalences : le raisonnement se lit aussi dans l'autre sens, ce qui donne la réciproque.

:::example[Une parabole que tu connais]
La courbe de $x \mapsto x^2$ a pour équation $x^2 = y$, soit $x^2 = 2py$ avec $p = \tfrac12$ (on a échangé les rôles de $x$ et $y$). Son foyer est $F\left(0, \tfrac14\right)$ et sa directrice la droite $y = -\tfrac14$. Vérification directe, pour $M(x, x^2)$ et $H\left(x, -\tfrac14\right)$ :
$$
\begin{aligned}
MF^2 &= x^2 + \left(x^2 - \tfrac14\right)^2\\
&= x^4 + \tfrac12 x^2 + \tfrac1{16}\\
&= \left(x^2 + \tfrac14\right)^2 = MH^2.
\end{aligned}
$$
:::

En échangeant $x$ et $y$ (symétrie par rapport à la droite $y = x$) ou en changeant le signe de $x$ ou de $y$ (symétries par rapport aux axes), on obtient les quatre orientations.

:::property[Les quatre orientations]
Pour $p > 0$ :

| équation | s'ouvre vers | foyer | directrice |
|---|---|---|---|
| $y^2 = 2px$ | la droite | $\left(\frac p2, 0\right)$ | $x = -\frac p2$ |
| $y^2 = -2px$ | la gauche | $\left(-\frac p2, 0\right)$ | $x = \frac p2$ |
| $x^2 = 2py$ | le haut | $\left(0, \frac p2\right)$ | $y = -\frac p2$ |
| $x^2 = -2py$ | le bas | $\left(0, -\frac p2\right)$ | $y = \frac p2$ |

Le carré indique l'**axe de la parabole** (celui dont la lettre n'est pas au carré) et le signe indique le **sens**.
:::

:::example[Lire une parabole]
- $y^2 = 12x$ : $2p = 12$ donc $p = 6$ ; sommet $O$, foyer $(3, 0)$, directrice $x = -3$.
- $x^2 = -6y$ : $2p = 6$ donc $p = 3$ ; la parabole s'ouvre vers le bas, foyer $\left(0, -\tfrac32\right)$, directrice $y = \tfrac32$.
:::

### Tangente et propriété du miroir

:::theorem[Tangente à une parabole]
La tangente à la parabole d'équation $y^2 = 2px$ en un point $M_0(x_0, y_0)$ a pour équation
$$
y\,y_0 = p\,(x + x_0).
$$
De même, pour $x^2 = 2py$ : $x\,x_0 = p\,(y + y_0)$.
:::

:::proof[Tangente à une parabole]
| Étape | Justification |
|---|---|
| On dérive $y^2 = 2px$ en voyant $y$ comme fonction de $x$ : $2y\,y' = 2p$ | dérivée d'une composée |
| Pour $y_0 \neq 0$, la pente de la tangente est $\dfrac{p}{y_0}$ | $y' = \dfrac py$ |
| $y - y_0 = \dfrac{p}{y_0}(x - x_0)$, soit $y\,y_0 - y_0^2 = px - px_0$ | on multiplie par $y_0$ |
| $y\,y_0 = px - px_0 + 2px_0 = p(x + x_0)$ | $y_0^2 = 2px_0$ car $M_0$ est sur la parabole |
| Pour $y_0 = 0$ (le sommet), la formule donne $x = 0$ | c'est bien la tangente au sommet (verticale) |
:::

:::example[Une tangente]
Sur $y^2 = 8x$ (donc $p = 4$), le point $M_0(2, 4)$ est bien sur la parabole ($16 = 8 \times 2$). La tangente est $4y = 4(x + 2)$, soit $y = x + 2$ : en effet elle passe par $(2, 4)$ et sa pente $\dfrac{p}{y_0} = 1$ est celle de $y = \sqrt{8x}$ en $x = 2$.
:::

:::theorem[Propriété du miroir]
Soit $M_0 \neq S$ un point d'une parabole de foyer $F$, et $H_0$ son projeté sur la directrice. La tangente en $M_0$ est la **médiatrice du segment $[FH_0]$**. C'est donc la bissectrice de l'angle $\widehat{FM_0H_0}$ : un rayon parallèle à l'axe qui arrive en $M_0$ est réfléchi **vers le foyer**.
:::

:::proof[Propriété du miroir]
| Étape | Justification |
|---|---|
| Dans $y^2 = 2px$, $F\left(\dfrac p2, 0\right)$ et $H_0\left(-\dfrac p2, y_0\right)$, donc $\overrightarrow{FH_0} = (-p, y_0)$ | coordonnées |
| La tangente $-p\,x + y_0\,y - p\,x_0 = 0$ a pour vecteur normal $(-p, y_0)$ | équation cartésienne |
| Donc la tangente est perpendiculaire à $(FH_0)$ | $\overrightarrow{FH_0}$ est ce vecteur normal |
| $M_0F = M_0H_0$, donc $M_0$ est sur la médiatrice de $[FH_0]$ | $M_0$ est sur la parabole |
| La perpendiculaire à $(FH_0)$ passant par $M_0$ est cette médiatrice : c'est la tangente | unicité de la perpendiculaire |
| Dans le triangle isocèle $M_0FH_0$, la médiatrice de la base est la bissectrice de l'angle au sommet | triangle isocèle en $M_0$ |
:::

![Parabole y² = 8x avec son foyer F, sa directrice D, un point M0, son projeté H0, la tangente en M0 et un rayon horizontal réfléchi vers F.](/lessons/images/m4-con-parabole.svg "La parabole y² = 8x. Les distances M0F et M0H0 valent toutes les deux 6,5. La tangente en M0 (bleu) coupe l'angle en deux : le rayon horizontal qui arrive en M0 repart exactement vers le foyer F.")

:::example[Une antenne parabolique]
Sur $y^2 = 8x$ ($p = 4$), $F(2, 0)$ et $D : x = -2$. Prenons $M_0\left(\tfrac92, 6\right)$ : $y_0^2 = 36 = 8 \times \tfrac92$ ✓, et
$$
\begin{aligned}
M_0F &= \sqrt{\tfrac{25}{4} + 36}\\
&= \tfrac{13}{2},\\
M_0H_0 &= \tfrac92 + 2 = \tfrac{13}{2}.
\end{aligned}
$$
La tangente est $6y = 4\left(x + \tfrac92\right)$, soit $y = \tfrac23 x + 3$, de vecteur directeur $\vec t = (3, 2)$. Un rayon horizontal vers la gauche, $\vec u = (-1, 0)$, est réfléchi suivant
$$
\begin{aligned}
\vec r &= \frac{2\,(\vec u \cdot \vec t)}{\vec t \cdot \vec t}\,\vec t - \vec u\\
&= \frac{2 \cdot (-3)}{13}\,(3, 2) + (1, 0)\\
&= \left(-\tfrac{5}{13}, -\tfrac{12}{13}\right),
\end{aligned}
$$
colinéaire à $\overrightarrow{M_0F} = \left(-\tfrac52, -6\right)$ ✓. C'est pour cela qu'une antenne, un phare ou un four solaire ont une section parabolique : tous les rayons parallèles à l'axe se concentrent au foyer (ou en partent).
:::

## 3. Ellipse et hyperbole : l'équation réduite

Pour $e \neq 1$ la conique a **deux sommets** $S$ et $S'$ sur l'axe focal. On appelle **centre** leur milieu $O$ : on va voir que c'est un centre de symétrie. On place l'origine en $O$ et l'axe des abscisses sur l'axe focal, orienté de $O$ vers $F$.

:::theorem[Équation réduite]
Soit $\mathcal{C}$ une conique de foyer $F(c, 0)$ et d'excentricité $e \neq 1$, de sommet $S(a, 0)$, avec $a > 0$ et $c > 0$. Alors
$$
e = \frac ca, \qquad D : x = \frac{a^2}{c},
$$
et $\mathcal{C}$ a pour équation :
- **ellipse** ($e < 1$, soit $c < a$) : $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$, avec $b^2 = a^2 - c^2$ ;
- **hyperbole** ($e > 1$, soit $c > a$) : $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$, avec $b^2 = c^2 - a^2$.
:::

:::proof[Équation réduite]
| Étape | Justification |
|---|---|
| On note $D : x = k$. Les sommets $S(a, 0)$ et $S'(-a, 0)$ vérifient $MF = e \cdot MK$, avec $K(k, 0)$ | ce sont des points de la conique sur l'axe focal |
| Hyperbole ($c > a > k > 0$) : $c - a = e(a - k)$ et $c + a = e(a + k)$ | on lève les valeurs absolues selon la position des points |
| Ellipse ($k > a > c > 0$) : $a - c = e(k - a)$ et $a + c = e(k + a)$ | même raisonnement |
| En ajoutant puis en retranchant les deux relations : $c = ea$ et $k = \dfrac ae = \dfrac{a^2}{c}$ | calcul direct dans chaque cas |
| Pour $M(x, y)$ et $H(k, y)$ : $MF^2 = e^2 MH^2 \iff (x - c)^2 + y^2 = \dfrac{c^2}{a^2}\left(x - \dfrac{a^2}{c}\right)^2$ | on remplace $e$ et $k$ |
| Le second membre vaut $\left(\dfrac{cx}{a} - a\right)^2 = \dfrac{c^2x^2}{a^2} - 2cx + a^2$ | on développe |
| Donc $x^2 - 2cx + c^2 + y^2 = \dfrac{c^2x^2}{a^2} - 2cx + a^2$ | les termes en $-2cx$ se simplifient |
| $\iff \left(1 - \dfrac{c^2}{a^2}\right)x^2 + y^2 = a^2 - c^2$ | on regroupe |
| $\iff \dfrac{x^2}{a^2} + \dfrac{y^2}{a^2 - c^2} = 1$ | on divise par $a^2 - c^2 \neq 0$ |
| Ellipse : $a^2 - c^2 = b^2 > 0$. Hyperbole : $a^2 - c^2 = -b^2 < 0$, d'où $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ | signe de $a^2 - c^2$ |
:::

L'équation ne change pas quand on remplace $x$ par $-x$ ou $y$ par $-y$ : le point $O$ est bien un **centre de symétrie**, et les deux axes (l'axe focal et sa perpendiculaire en $O$) sont des axes de symétrie. Le symétrique de $(F, D)$ par rapport à $O$ donne un **second foyer** $F'(-c, 0)$ et une **seconde directrice** $D' : x = -\dfrac{a^2}{c}$.

:::property[Réciproque : lire une équation réduite]
Soit $a, b > 0$ et $c > 0$. Dans un repère orthonormé :

| équation | foyers | directrices | excentricité |
|---|---|---|---|
| $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $a > b$, $c^2 = a^2 - b^2$ | $(\pm c, 0)$ | $x = \pm\frac{a^2}{c}$ | $\frac ca$ |
| $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $b > a$, $c^2 = b^2 - a^2$ | $(0, \pm c)$ | $y = \pm\frac{b^2}{c}$ | $\frac cb$ |
| $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, $c^2 = a^2 + b^2$ | $(\pm c, 0)$ | $x = \pm\frac{a^2}{c}$ | $\frac ca$ |
| $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$, $c^2 = a^2 + b^2$ | $(0, \pm c)$ | $y = \pm\frac{b^2}{c}$ | $\frac cb$ |
:::

:::warning
Dans l'**ellipse**, le plus grand des trois nombres est $a$ : $a^2 = b^2 + c^2$. Dans l'**hyperbole**, c'est $c$ : $c^2 = a^2 + b^2$. Le « Pythagore » change de sens, et c'est une source classique d'erreurs. Pour ne pas se tromper : dans l'ellipse, le foyer est **à l'intérieur** de la courbe, avant le sommet ($c < a$) ; dans l'hyperbole, il est **au-delà** du sommet ($c > a$).
:::

## 4. L'ellipse

:::property[Éléments de l'ellipse]
Pour $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ avec $a > b$ :
- les **sommets principaux** $(\pm a, 0)$ et les **sommets secondaires** $(0, \pm b)$ ;
- $a$ est le demi-grand axe, $b$ le demi-petit axe, $c = \sqrt{a^2 - b^2}$ la demi-distance focale ;
- l'excentricité $e = \dfrac ca$ mesure l'aplatissement : $e$ proche de $0$, presque un cercle ; $e$ proche de $1$, très allongée.
:::

:::example[L'ellipse 25 et 9]
Soit $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$. Ici $a = 5$, $b = 3$ et $c = \sqrt{25 - 9} = 4$. Les foyers sont $F(4, 0)$ et $F'(-4, 0)$, les directrices $x = \pm\dfrac{25}{4}$, l'excentricité $e = \dfrac45$. Les sommets sont $(\pm 5, 0)$ et $(0, \pm 3)$.
:::

:::remark
Dans le triangle $OBF$ (avec $B(0, b)$ un sommet secondaire), $OB = b$, $OF = c$ et $BF = a$, car $b^2 + c^2 = a^2$. Pour construire les foyers d'une ellipse dont on connaît les sommets, on trace le cercle de centre $B$ et de rayon $a$ : il coupe l'axe focal en $F$ et $F'$. Si $a = b$, alors $c = 0$ et $e = 0$ : c'est un **cercle**, cas limite d'une ellipse.
:::

:::theorem[Propriété bifocale de l'ellipse]
Pour tout point $M$ d'une ellipse de foyers $F$ et $F'$ et de grand axe $2a$ :
$$
MF + MF' = 2a.
$$
:::

:::proof[Propriété bifocale de l'ellipse]
| Étape | Justification |
|---|---|
| $MF = e\cdot MH$ et $MF' = e\cdot MH'$, où $H$ et $H'$ sont les projetés de $M$ sur $D$ et $D'$ | la règle foyer-directrice vaut pour $(F, D)$ et, par symétrie centrale, pour $(F', D')$ |
| $\lvert x \rvert \leq a < \dfrac{a^2}{c}$, donc $M$ est entre les droites $D'$ et $D$ | $\dfrac{a}{c} = \dfrac1e > 1$ |
| $MH + MH' = HH' = \dfrac{2a^2}{c}$ | $D$ et $D'$ sont parallèles |
| $MF + MF' = e\,(MH + MH') = \dfrac ca \cdot \dfrac{2a^2}{c} = 2a$ | on remplace |
:::

![Ellipse x²/25 + y²/9 = 1 avec ses foyers F et F', sa directrice D et un point M à distances 2,6 et 7,4 des foyers.](/lessons/images/m4-con-ellipse.svg "L'ellipse x²/25 + y²/9 = 1. Au point M(3 ; 2,4), les distances aux foyers sont 2,6 et 7,4 : leur somme vaut 10 = 2a. La distance à la directrice est 3,25 et 2,6 / 3,25 = 0,8 = e.")

:::intuition
C'est la **construction du jardinier** : on plante deux piquets en $F$ et $F'$, on y attache une corde de longueur $2a$ et on la tend avec un piquet mobile $M$. La somme $MF + MF'$ est la longueur de la corde, donc constante : le piquet décrit une ellipse. On peut montrer que la réciproque est vraie : tout point dont la somme des distances à deux points fixes est constante (et plus grande que $FF'$) est sur une ellipse.
:::

:::theorem[Tangente à une ellipse]
La tangente à l'ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ en un point $M_0(x_0, y_0)$ a pour équation
$$
\frac{x\,x_0}{a^2} + \frac{y\,y_0}{b^2} = 1.
$$
:::

:::proof[Tangente à une ellipse]
| Étape | Justification |
|---|---|
| On dérive $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ : $\dfrac{2x}{a^2} + \dfrac{2y\,y'}{b^2} = 0$ | $y$ est une fonction de $x$ |
| Pour $y_0 \neq 0$, la pente est $y' = -\dfrac{b^2 x_0}{a^2 y_0}$ | on isole $y'$ |
| $y - y_0 = -\dfrac{b^2 x_0}{a^2 y_0}(x - x_0)$ | tangente en $M_0$ |
| En multipliant par $\dfrac{y_0}{b^2}$ : $\dfrac{y\,y_0}{b^2} - \dfrac{y_0^2}{b^2} = -\dfrac{x\,x_0}{a^2} + \dfrac{x_0^2}{a^2}$ | on distribue |
| $\dfrac{x\,x_0}{a^2} + \dfrac{y\,y_0}{b^2} = \dfrac{x_0^2}{a^2} + \dfrac{y_0^2}{b^2} = 1$ | $M_0$ est sur l'ellipse |
| Pour $y_0 = 0$, on trouve $x = \pm a$ : la tangente verticale au sommet | la formule reste valable |
:::

:::example[Une tangente à l'ellipse]
Le point $M\left(3, \tfrac{12}{5}\right)$ est sur $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ : $\dfrac{9}{25} + \dfrac{144}{25 \cdot 9} = \dfrac{9}{25} + \dfrac{16}{25} = 1$ ✓. La tangente est $\dfrac{3x}{25} + \dfrac{12y}{5 \cdot 9} = 1$, soit en multipliant par $225$ :
$$
\begin{aligned}
27x + 60y &= 225\\
9x + 20y &= 75.
\end{aligned}
$$
:::

:::property[L'ellipse est un cercle écrasé]
Le point $M(a\cos\theta, b\sin\theta)$ décrit l'ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ quand $\theta$ parcourt $[0, 2\pi[$. On passe du cercle de rayon $a$, $(a\cos\theta, a\sin\theta)$, à l'ellipse en multipliant les ordonnées par $\dfrac ba$ : une ellipse est un cercle comprimé dans une direction.
:::

En effet $\dfrac{(a\cos\theta)^2}{a^2} + \dfrac{(b\sin\theta)^2}{b^2} = \cos^2\theta + \sin^2\theta = 1$.

## 5. L'hyperbole

:::property[Éléments de l'hyperbole]
Pour $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ :
- deux **sommets** $(\pm a, 0)$ ; la courbe n'a **aucun point** pour $\lvert x \rvert < a$ ;
- $c = \sqrt{a^2 + b^2}$, foyers $(\pm c, 0)$, directrices $x = \pm\dfrac{a^2}{c}$, $e = \dfrac ca > 1$ ;
- deux **branches**, symétriques par rapport à $O$, et deux **asymptotes** (voir plus bas).
:::

:::example[L'hyperbole 9 et 16]
Soit $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$. Ici $a = 3$, $b = 4$ et $c = \sqrt{9 + 16} = 5$. Les foyers sont $(\pm 5, 0)$, les directrices $x = \pm\dfrac95$, l'excentricité $e = \dfrac53$, les sommets $(\pm 3, 0)$.
:::

:::theorem[Propriété bifocale de l'hyperbole]
Pour tout point $M$ d'une hyperbole de foyers $F$ et $F'$ et de sommets distants de $2a$ :
$$
\lvert MF - MF' \rvert = 2a.
$$
:::

:::proof[Propriété bifocale de l'hyperbole]
| Étape | Justification |
|---|---|
| $MF = e\cdot MH$ et $MF' = e\cdot MH'$ | règle foyer-directrice pour $(F, D)$ et $(F', D')$ |
| $\lvert x \rvert \geq a > \dfrac{a^2}{c}$, donc $M$ est du même côté de $D$ et de $D'$ | $a > \dfrac{a^2}{c} \iff c > a$, vrai pour une hyperbole |
| $\lvert MH - MH' \rvert = HH' = \dfrac{2a^2}{c}$ | $D$ et $D'$ sont parallèles |
| $\lvert MF - MF' \rvert = e\,\lvert MH - MH' \rvert = \dfrac ca \cdot \dfrac{2a^2}{c} = 2a$ | on remplace |
:::

![Hyperbole x²/9 − y²/16 = 1 avec ses foyers, ses sommets, ses asymptotes en pointillés et un point M à distances 16/3 et 34/3 des foyers.](/lessons/images/m4-con-hyperbole.svg "L'hyperbole x²/9 − y²/16 = 1. Au point M(5 ; 16/3), les distances aux foyers sont 16/3 et 34/3 : leur différence vaut 6 = 2a. Les droites en tirets sont les asymptotes y = ±(4/3)x, les pointillés fins sont les directrices x = ±9/5.")

:::theorem[Asymptotes d'une hyperbole]
L'hyperbole d'équation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ a pour **asymptotes** les droites
$$
\begin{aligned}
y &= \frac ba\,x\\
y &= -\frac ba\,x.
\end{aligned}
$$
:::

:::proof[Asymptotes d'une hyperbole]
| Étape | Justification |
|---|---|
| $M(x, y)$ est sur l'hyperbole $\iff y^2 = \dfrac{b^2}{a^2}(x^2 - a^2) \iff y = \pm\dfrac ba\sqrt{x^2 - a^2}$ | on résout en $y$ |
| Pour $x \geq a$, la branche supérieure est la courbe de $f(x) = \dfrac ba\sqrt{x^2 - a^2}$ | on garde le signe $+$ |
| $f(x) - \dfrac ba x = -\dfrac ba\left(x - \sqrt{x^2 - a^2}\right)$ | on factorise $\dfrac ba$ |
| $= -\dfrac ba \cdot \dfrac{a^2}{x + \sqrt{x^2 - a^2}}$ | on multiplie par la quantité conjuguée |
| Cette différence tend vers $0$ quand $x \to +\infty$ | le dénominateur tend vers $+\infty$ |
| Donc $y = \dfrac ba x$ est asymptote ; par symétrie, les trois autres bouts de courbe donnent les deux asymptotes | symétries d'axes $Ox$ et $Oy$ |
:::

:::remark
Les asymptotes sont les diagonales du **rectangle de base** de côtés $2a$ et $2b$ centré en $O$. Leur intersection avec la tangente au sommet $x = a$ est $(a, \pm b)$, à distance $\sqrt{a^2 + b^2} = c$ de $O$ : le cercle de centre $O$ et de rayon $OF$ coupe donc la tangente au sommet exactement sur les asymptotes. C'est une construction à la règle et au compas.
:::

:::theorem[Tangente à une hyperbole]
La tangente à l'hyperbole $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ en un point $M_0(x_0, y_0)$ a pour équation
$$
\frac{x\,x_0}{a^2} - \frac{y\,y_0}{b^2} = 1.
$$
:::

La démonstration est la même que pour l'ellipse, avec un signe changé : on dérive $\dfrac{2x}{a^2} - \dfrac{2y\,y'}{b^2} = 0$ et on obtient $y' = \dfrac{b^2 x_0}{a^2 y_0}$. En particulier, la tangente au sommet $(a, 0)$ est $x = a$.

:::example[Une tangente à l'hyperbole]
Le point $M\left(5, \tfrac{16}{3}\right)$ est sur $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$ : $\dfrac{25}{9} - \dfrac{256}{9 \cdot 16} = \dfrac{25}{9} - \dfrac{16}{9} = 1$ ✓. La tangente est $\dfrac{5x}{9} - \dfrac{16y}{3 \cdot 16} = 1$, soit $\dfrac{5x}{9} - \dfrac y3 = 1$, c'est-à-dire
$$
5x - 3y = 9.
$$
:::

:::remark
**Règle de dédoublement.** Les trois formules de tangente se retiennent d'un coup : on remplace dans l'équation $x^2$ par $x\,x_0$, $y^2$ par $y\,y_0$, $x$ par $\dfrac{x + x_0}{2}$ et $y$ par $\dfrac{y + y_0}{2}$. Pour $y^2 = 2px$ on obtient $y\,y_0 = 2p \cdot \dfrac{x + x_0}{2} = p(x + x_0)$ ✓.
:::

### L'hyperbole équilatère

:::definition[Hyperbole équilatère]
Une hyperbole est **équilatère** si ses asymptotes sont perpendiculaires. Dans $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$, cela se produit exactement quand $\dfrac ba \cdot \left(-\dfrac ba\right) = -1$, c'est-à-dire $a = b$. Son excentricité vaut alors $e = \dfrac{\sqrt{2}\,a}{a} = \sqrt2$.
:::

:::theorem[Équation rapportée aux asymptotes]
Dans un repère $(O, \vec u, \vec v)$ dont les axes portent les asymptotes d'une hyperbole, l'équation de l'hyperbole est de la forme
$$
XY = k, \qquad k \neq 0.
$$
:::

:::proof[Équation rapportée aux asymptotes]
| Étape | Justification |
|---|---|
| L'hyperbole est $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ dans $(O, \vec\imath, \vec\jmath)$ | repère de l'équation réduite |
| On prend $\vec u = a\vec\imath + b\vec\jmath$ et $\vec v = a\vec\imath - b\vec\jmath$ | ce sont des vecteurs directeurs des asymptotes $y = \pm\dfrac ba x$ |
| Un point de coordonnées $(X, Y)$ dans $(O, \vec u, \vec v)$ a pour coordonnées $x = a(X + Y)$ et $y = b(X - Y)$ dans $(O, \vec\imath, \vec\jmath)$ | $\overrightarrow{OM} = X\vec u + Y\vec v$ |
| $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = (X + Y)^2 - (X - Y)^2 = 4XY$ | identité remarquable |
| L'équation devient $4XY = 1$, soit $XY = \dfrac14$ | on remplace |
:::

:::example[La courbe de 1 sur x]
La courbe d'équation $xy = 1$, dans un repère **orthonormé**, a pour asymptotes les axes, qui sont perpendiculaires : c'est une hyperbole équilatère. Ses sommets sont $(1, 1)$ et $(-1, -1)$, donc $a = OS = \sqrt2$, $c = a\sqrt2 = 2$ et $e = \sqrt2$. Le foyer $F(\sqrt2, \sqrt2)$ est à distance $2$ de $O$ sur l'axe $y = x$, et la directrice $D : x + y = \sqrt2$ est à distance $\dfrac{a^2}{c} = 1$ de $O$.

Vérifions que $MF = \sqrt2\,MH$ équivaut à $xy = 1$. Comme $MH = \dfrac{\lvert x + y - \sqrt2 \rvert}{\sqrt2}$, on a $MF^2 = 2\,MH^2$ si et seulement si
$$
\begin{aligned}
&(x - \sqrt2)^2 + (y - \sqrt2)^2\\
&= (x + y - \sqrt2)^2.
\end{aligned}
$$
En développant, les termes $x^2 + y^2$ et $-2\sqrt2\,(x + y)$ sont les mêmes des deux côtés. Il reste $4 = 2xy + 2$, c'est-à-dire $xy = 1$ ✓.

![La courbe y = 1/x avec ses deux branches, son foyer F, son second foyer F', la directrice D et un point M.](/lessons/images/m4-con-inverse.svg "La courbe y = 1/x est une hyperbole équilatère : foyers (√2 ; √2) et (−√2 ; −√2), directrices x + y = ±√2, excentricité √2. Ses asymptotes sont les axes.")
:::

## 6. Équations non réduites

Si on **déplace l'origine** du repère, l'équation de la courbe change, mais pas la courbe. Soit $\Omega(\alpha, \beta)$ un point. Dans le repère $(\Omega, \vec\imath, \vec\jmath)$, un point $M(x, y)$ a pour coordonnées $X = x - \alpha$ et $Y = y - \beta$.

:::theorem[Équations avec un centre ou un sommet déplacé]
- $(y - \beta)^2 = 2p\,(x - \alpha)$ est la parabole de sommet $\Omega(\alpha, \beta)$, de foyer $\left(\alpha + \dfrac p2, \beta\right)$ et de directrice $x = \alpha - \dfrac p2$ (même chose pour les trois autres orientations).
- $\dfrac{(x - \alpha)^2}{a^2} + \dfrac{(y - \beta)^2}{b^2} = 1$ est une ellipse de centre $\Omega$ ; avec le signe $-$, c'est une hyperbole de centre $\Omega$. Leurs foyers, sommets, directrices sont ceux de la forme réduite, **décalés** de $(\alpha, \beta)$.
:::

![Ellipse centrée en Ω(1 ; −2) avec les axes (O, x, y) en gris et les axes (Ω, X, Y) en bleu, ses deux foyers F et F'.](/lessons/images/m4-con-translation.svg "L'ellipse (x − 1)²/9 + (y + 2)²/4 = 1. Dans le repère (Ω, X, Y), de même direction que (O, x, y) mais d'origine Ω(1 ; −2), elle prend sa forme réduite X²/9 + Y²/4 = 1.")

:::method[Reconnaître une courbe Ax² + By² + Cx + Dy + E = 0]
1. **Regrouper** les termes en $x$ d'un côté, ceux en $y$ de l'autre, et mettre le coefficient de chaque carré en facteur.
2. **Compléter les carrés** : $x^2 + 2ux = (x + u)^2 - u^2$.
3. **Isoler la constante**, puis diviser pour avoir $1$ à droite.
4. **Lire** : centre ou sommet, $a$, $b$, $c$, $e$, foyers, directrices.

On sait d'avance la famille d'après le produit $AB$ :

| $AB$ | courbe |
|---|---|
| $AB = 0$ | parabole (ou deux droites parallèles, une droite, rien) |
| $AB < 0$ | hyperbole (ou deux droites sécantes) |
| $AB > 0$ | ellipse (ou un cercle, un point, rien) |
:::

:::example[Une parabole décalée]
$y^2 - 2y + 4x + 4 = 0$. Ici $AB = 0$ (pas de terme en $x^2$). En complétant le carré : $(y - 1)^2 - 1 + 4x + 4 = 0$, soit
$$
(y - 1)^2 = -4\left(x + \tfrac34\right).
$$
Donc $2p = 4$, $p = 2$ : la parabole s'ouvre vers la **gauche**, son sommet est $\left(-\tfrac34, 1\right)$, son foyer $\left(-\tfrac34 - 1, 1\right) = \left(-\tfrac74, 1\right)$ et sa directrice $x = -\tfrac34 + 1 = \tfrac14$.
:::

:::example[Une hyperbole décalée, et son cas dégénéré]
$x^2 - 9y^2 + 8x + 36y - 56 = 0$. Ici $AB = -9 < 0$.
On complète les carrés : $x^2 + 8x = (x + 4)^2 - 16$ et $-9y^2 + 36y = -9\,(y - 2)^2 + 36$. Il reste
$$
\begin{gathered}
(x + 4)^2 - 9\,(y - 2)^2 = 36\\
\tfrac{(x + 4)^2}{36} - \tfrac{(y - 2)^2}{4} = 1.
\end{gathered}
$$
C'est une hyperbole de centre $\Omega(-4, 2)$ avec $a = 6$, $b = 2$, $c = \sqrt{36 + 4} = 2\sqrt{10}$ et $e = \dfrac{\sqrt{10}}{3}$. Les sommets sont $(2, 2)$ et $(-10, 2)$, les foyers $(-4 \pm 2\sqrt{10}, 2)$, les asymptotes $y - 2 = \pm\dfrac13\,(x + 4)$.

**Même membre de gauche, autre constante.** Avec $-20$ au lieu de $-56$, on obtient $(x + 4)^2 - 9(y - 2)^2 = 0$, c'est-à-dire $(x + 4 - 3(y - 2))\,(x + 4 + 3(y - 2)) = 0$ : la courbe est la réunion de **deux droites sécantes** (les asymptotes). L'hyperbole se réduit à ses asymptotes quand la constante tend vers $0$.
:::

:::example[Une ellipse décalée]
$4x^2 + 9y^2 - 8x + 36y + 4 = 0$. Ici $AB = 36 > 0$.
On complète les carrés : $4x^2 - 8x = 4\,(x - 1)^2 - 4$ et $9y^2 + 36y = 9\,(y + 2)^2 - 36$. L'équation devient $4\,(x - 1)^2 + 9\,(y + 2)^2 = 36$, soit en divisant par $36$ :
$$
\frac{(x - 1)^2}{9} + \frac{(y + 2)^2}{4} = 1.
$$
C'est une ellipse de centre $\Omega(1, -2)$ avec $a = 3$, $b = 2$, $c = \sqrt5$ et $e = \dfrac{\sqrt5}{3}$. Les sommets sont $(4, -2)$, $(-2, -2)$, $(1, 0)$ et $(1, -4)$, les foyers $(1 \pm \sqrt5, -2)$. Si la constante à droite valait $0$, on aurait un seul point $\Omega$ ; si elle était négative, aucun point.
:::

:::warning
Cette méthode ne marche que s'il n'y a **pas de terme en $xy$**. Une équation comme $x^2 + y^2 + 2xy + \dots$ décrit une conique dont les axes sont inclinés : il faut d'abord **tourner** le repère, par exemple avec une similitude (la courbe $xy = 1$ en est l'exemple : ses axes sont la droite $y = x$ et sa perpendiculaire).
:::

## 7. Bilan et méthodes pour les exercices

:::summary
| | parabole | ellipse | hyperbole |
|---|---|---|---|
| excentricité | $e = 1$ | $e < 1$ | $e > 1$ |
| équation réduite | $y^2 = 2px$ | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ |
| relation | | $a^2 = b^2 + c^2$ | $c^2 = a^2 + b^2$ |
| foyers | $\left(\frac p2, 0\right)$ | $(\pm c, 0)$ | $(\pm c, 0)$ |
| directrices | $x = -\frac p2$ | $x = \pm\frac{a^2}{c}$ | $x = \pm\frac{a^2}{c}$ |
| tangente en $M_0$ | $y\,y_0 = p(x + x_0)$ | $\frac{x\,x_0}{a^2} + \frac{y\,y_0}{b^2} = 1$ | $\frac{x\,x_0}{a^2} - \frac{y\,y_0}{b^2} = 1$ |
| propriété | miroir : rayon $\parallel$ axe $\to F$ | $MF + MF' = 2a$ | $\lvert MF - MF' \rvert = 2a$, asymptotes $y = \pm\frac ba x$ |

**Toujours** : $e = \dfrac ca$ (ellipse, hyperbole) ; conique $= \{M : MF = e\,MH\}$.
:::

:::method[Quel outil pour quelle question ?]
- **Foyer, directrice et $e$ donnés** : écrire $MF^2 = e^2\,MH^2$ en coordonnées et développer.
- **Équation réduite donnée** : lire $a$, $b$ ; calculer $c$ par $\sqrt{a^2 - b^2}$ (ellipse) ou $\sqrt{a^2 + b^2}$ (hyperbole), puis $e = \dfrac ca$, foyers, directrices.
- **Équation avec des termes en $x$ et en $y$** : compléter les carrés pour trouver le centre ou le sommet.
- **Tangente en un point de la courbe** : règle de dédoublement.
- **Hyperbole** : asymptotes $y = \pm\dfrac ba x$ ; si $a = b$, équilatère, et $XY = k$ dans le repère des asymptotes.
- **Distance aux foyers** : $MF + MF' = 2a$ (ellipse), $\lvert MF - MF' \rvert = 2a$ (hyperbole).
:::

:::tic[Une ellipse, point par point]
On trace $x = 5\cos t$, $y = 3\sin t$ (l'ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ vue comme un cercle écrasé) et on vérifie que $MF + MF'$ est constant, avec $F(4, 0)$ et $F'(-4, 0)$.

| cellule | formule | rôle |
|---|---|---|
| `A2` | `0` | premier angle $t$ |
| `A3` | `=A2+0,1` | on recopie jusqu'à `A64` |
| `B2` | `=5*COS(A2)` | abscisse de $M$ |
| `C2` | `=3*SIN(A2)` | ordonnée de $M$ |
| `D2` | `=RACINE((B2-4)^2+C2^2)+RACINE((B2+4)^2+C2^2)` | $MF + MF'$ |

On recopie ces formules vers le bas. La colonne `D` affiche $10$ sur **chaque ligne** (à l'arrondi près), et le nuage de points `B`–`C`, avec courbes lisses, est l'ellipse. Essaie $b = 4$ à la place de $3$ : les foyers sont alors en $\pm 3$ (car $c^2 = 25 - 16$) ; remplace les $4$ de la colonne `D` par $3$ et la somme vaut toujours $10 = 2a$.
:::

:::history
Le mot « conique » vient de la façon dont les Grecs les ont rencontrées : en coupant un cône par un plan. Apollonios de Perga (vers 200 av. J.-C.) en fait une théorie complète dans ses *Coniques* et leur donne leurs noms : ellipse, parabole, hyperbole, du grec pour « par défaut », « égalité » et « par excès », d'après la comparaison de deux aires. La propriété foyer-directrice est attribuée à Pappus d'Alexandrie (IVe siècle). En 1609, Kepler découvre que les planètes décrivent des **ellipses** dont le Soleil occupe un foyer. Galilée (1638) montre qu'un projectile suit une **parabole**. Newton explique ensuite pourquoi : sous une force en $\frac{1}{r^2}$, les trajectoires sont des coniques, et une comète qui passe trop vite suit une branche d'hyperbole.
:::

## Vérifie-toi

::::check[Une parabole et sa tangente]
Donner l'équation réduite de la parabole de foyer $F(0, 2)$ et de directrice $y = -2$. Écrire l'équation de la tangente au point $M_0(4, 2)$.

:::answer
La distance du foyer à la directrice vaut $4$, donc $p = 4$, et la parabole s'ouvre vers le haut : $x^2 = 2py$, soit $x^2 = 8y$. On vérifie que $M_0(4, 2)$ en fait partie : $16 = 8 \times 2$ ✓. La tangente est
$$
\begin{aligned}
x\,x_0 &= p\,(y + y_0)\\
4x &= 4\,(y + 2)\\
y &= x - 2.
\end{aligned}
$$
Contrôle : pente de $y = \tfrac{x^2}{8}$ en $x = 4$ : $\tfrac{x}{4} = 1$ ✓.
:::
::::

::::check[Une ellipse définie par un foyer et e]
Une ellipse de centre $O$ a un foyer $F(0, 4)$ et pour excentricité $0{,}2$. Donner son équation réduite et ses directrices.

:::answer
Le foyer est sur l'axe des ordonnées : le grand axe est vertical, d'équation $\dfrac{x^2}{b'^2} + \dfrac{y^2}{a'^2} = 1$ avec $a'$ le demi-grand axe. On a $c = 4$ et $e = \dfrac{c}{a'} = 0{,}2$, donc $a' = 20$. Alors
$$
\begin{aligned}
b'^2 &= a'^2 - c^2\\
&= 400 - 16 = 384,
\end{aligned}
$$
d'où l'équation $\dfrac{x^2}{384} + \dfrac{y^2}{400} = 1$. Les directrices sont $y = \pm\dfrac{a'^2}{c} = \pm 100$.
:::
::::

::::check[Les éléments d'une hyperbole]
Pour $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$, donner les foyers, l'excentricité, les asymptotes, puis la tangente au point d'abscisse $5$ et d'ordonnée positive.

:::answer
$a = 3$, $b = 4$, $c = \sqrt{9 + 16} = 5$. Foyers $(\pm 5, 0)$, $e = \dfrac53$, asymptotes $y = \pm\dfrac43 x$. Pour $x_0 = 5$ : $\dfrac{25}{9} - \dfrac{y_0^2}{16} = 1$ donne $y_0^2 = \dfrac{256}{9}$, donc $y_0 = \dfrac{16}{3}$. La tangente est
$$
\begin{aligned}
\tfrac{5x}{9} - \tfrac{16}{3} \cdot \tfrac{y}{16} &= 1\\
\tfrac{5x}{9} - \tfrac y3 &= 1\\
5x - 3y &= 9.
\end{aligned}
$$
:::
::::

::::check[Retrouver une hyperbole]
Trouver l'équation réduite de l'hyperbole de centre $O$, de sommet $S(5, 0)$ et dont une asymptote est la droite $5y = 3x$. Donner ses foyers.

:::answer
Le sommet donne $a = 5$. L'asymptote $y = \dfrac35 x$ donne $\dfrac ba = \dfrac35$, donc $b = 3$. L'équation est $\dfrac{x^2}{25} - \dfrac{y^2}{9} = 1$. Alors $c = \sqrt{25 + 9} = \sqrt{34}$, les foyers sont $(\pm\sqrt{34}, 0)$ et $e = \dfrac{\sqrt{34}}{5} \approx 1{,}17$.
:::
::::

::::check[Reconnaître une conique]
Déterminer la nature de la courbe $x^2 + 4y^2 - 6x + 8y - 3 = 0$ et donner ses éléments.

:::answer
$AB = 4 > 0$ : ellipse, sauf cas dégénéré (la constante à droite le dira).
On complète les carrés : $x^2 - 6x = (x - 3)^2 - 9$ et $4y^2 + 8y = 4\,(y + 1)^2 - 4$. L'équation devient $(x - 3)^2 + 4\,(y + 1)^2 = 16$, soit en divisant par $16$ :
$$
\tfrac{(x - 3)^2}{16} + \tfrac{(y + 1)^2}{4} = 1.
$$
Centre $(3, -1)$, $a = 4$, $b = 2$, $c = \sqrt{16 - 4} = 2\sqrt3$, $e = \dfrac{\sqrt3}{2}$, foyers $(3 \pm 2\sqrt3, -1)$.
:::
::::

::::check[Une autre hyperbole équilatère]
Montrer que la courbe d'équation $xy = 2$ est l'ensemble des points $M$ tels que $MF = \sqrt2\,MH$, où $F(2, 2)$ et $H$ est le projeté de $M$ sur la droite $D : x + y = 2$. Quelle est sa nature ?

:::answer
Comme $MH = \dfrac{\lvert x + y - 2 \rvert}{\sqrt2}$, la condition $MF^2 = 2\,MH^2$ s'écrit
$$
\begin{aligned}
&(x - 2)^2 + (y - 2)^2\\
&= (x + y - 2)^2.
\end{aligned}
$$
En développant, les termes $x^2 + y^2$ et $-4\,(x + y)$ sont les mêmes des deux côtés. Il reste $8 = 2xy + 4$, c'est-à-dire $xy = 2$. L'excentricité est $\sqrt2 > 1$ : c'est une **hyperbole**, équilatère (asymptotes : les axes). Plus généralement $xy = k > 0$ a pour foyer $(\sqrt{2k}, \sqrt{2k})$.
:::
::::

::::challenge
**Les tangentes aux extrémités d'une corde focale.** Une droite passe par le foyer $F\left(\dfrac p2, 0\right)$ de la parabole $y^2 = 2px$ et la coupe en $M_1(x_1, y_1)$ et $M_2(x_2, y_2)$. Montrer que les tangentes en $M_1$ et $M_2$ sont **perpendiculaires** et se coupent **sur la directrice**.

:::answer
La droite non horizontale a pour équation $x = my + \dfrac p2$. En remplaçant dans $y^2 = 2px$ :
$$
\begin{gathered}
y^2 = 2p\left(my + \tfrac p2\right)\\
y^2 - 2pm\,y - p^2 = 0,
\end{gathered}
$$
donc $y_1\,y_2 = -p^2$ (produit des racines).

**Perpendiculaires.** Les tangentes $y\,y_i = p\,(x + x_i)$ ont pour pentes $\dfrac{p}{y_i}$ ; le produit des pentes est $\dfrac{p^2}{y_1 y_2} = -1$.

**Sur la directrice.** En retranchant les deux équations, avec $p\,x_i = \dfrac{y_i^2}{2}$ :
$$
\begin{aligned}
y\,(y_1 - y_2) &= \tfrac{y_1^2 - y_2^2}{2}\\
y &= \tfrac{y_1 + y_2}{2}.
\end{aligned}
$$
Puis la première équation donne
$$
\begin{aligned}
p\,x &= y\,y_1 - \tfrac{y_1^2}{2}\\
&= \tfrac{y_1(y_1 + y_2)}{2} - \tfrac{y_1^2}{2}\\
&= \tfrac{y_1 y_2}{2} = -\tfrac{p^2}{2},
\end{aligned}
$$
soit $x = -\dfrac p2$ : le point d'intersection est sur la directrice. Si la droite est horizontale, elle ne coupe la parabole qu'en un point : le cas est exclu.
:::
::::
