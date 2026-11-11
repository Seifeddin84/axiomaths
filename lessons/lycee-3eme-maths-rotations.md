---
title: "Rotations"
slug: "lycee-3eme-maths-rotations"
school: "lycee"
level: "3eme"
sections: ["Mathématiques"]
chapter: "Rotations"
summary: "Définition d'une rotation par son centre et son angle, comment la déterminer à partir d'un point et de son image, ses propriétés (isométrie, angles, parallélisme, cercles), la méthode qui consiste à trouver LA rotation d'une configuration, la composée de deux rotations de même centre et la recherche de lieux."
prerequisites: ["Angles orientés", "Trigonométrie", "Produit scalaire", "Translations"]
source: "Manuel officiel 3ème année Mathématiques, Tome 2, chapitre 4"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Plante une punaise dans une feuille et fais-la pivoter autour de la punaise : chaque point de la feuille décrit un arc de cercle, tous du même angle. La punaise ne bouge pas. C'est une **rotation**.

Tu connais déjà la symétrie centrale, qui est un demi-tour. La rotation généralise : on tourne d'un angle quelconque. Et c'est surtout un **outil de démonstration** : quand tu dois montrer que deux segments sont égaux **et** perpendiculaires, ou qu'un triangle est équilatéral, la bonne idée est presque toujours de trouver **la rotation** qui envoie une figure sur l'autre.

![Un triangle et son image par une rotation](/lessons/images/rotation-triangle.svg "Une rotation de centre Ω et d'angle 70° : chaque point reste à la même distance de Ω et tourne du même angle, le triangle ABC est envoyé sur le triangle A'B'C' qui lui est superposable.")

:::intuition
Une rotation est déterminée par son **centre** $\Omega$ (le point qui ne bouge pas) et son **angle** $\theta$ (de combien on tourne, avec un signe pour le sens). Elle **conserve** les distances, les angles, l'alignement ; elle **fait tourner** chaque droite de l'angle $\theta$.
:::

## 1. Définition

Le plan est orienté dans le sens direct (le sens contraire des aiguilles d'une montre).

:::definition[Rotation]
Soit $\Omega$ un point et $\theta$ un réel. La **rotation de centre $\Omega$ et d'angle $\theta$**, notée $R(\Omega\,;\theta)$, est l'application du plan dans lui-même qui :

- fixe $\Omega$ ;
- associe à tout point $M \neq \Omega$ le point $M'$ tel que
$$
\Omega M' = \Omega M \quad \text{et} \quad (\overrightarrow{\Omega M}, \overrightarrow{\Omega M'}) \equiv \theta\ [2\pi].
$$
Le point $\Omega$ et le réel $\theta$ sont les **éléments caractéristiques** de la rotation.
:::

:::property[Cas particuliers et vocabulaire]
- $\theta \equiv 0\ [2\pi]$ : la rotation est l'**identité**.
- $\theta \equiv \pi\ [2\pi]$ : c'est la **symétrie centrale** de centre $\Omega$.
- $\theta = \pm\dfrac\pi2$ : un **quart de tour**.
- Avec $\theta \in ]-\pi\,;\pi]$, la rotation est **directe** si $\theta \geq 0$, **indirecte** si $\theta < 0$.
:::

:::property[Rotation réciproque]
Pour tous points $M$ et $M'$ : $R(\Omega\,;\theta)(M) = M' \iff R(\Omega\,;-\theta)(M') = M$. La rotation $R(\Omega\,;-\theta)$ est la **réciproque** de $R(\Omega\,;\theta)$ : on tourne dans l'autre sens pour revenir.
:::

### Avec des coordonnées

Dans un repère orthonormé direct, la rotation de centre $\Omega(a\,;b)$ et d'angle $\theta$ envoie $M(x\,;y)$ sur $M'(x'\,;y')$ avec
$$
x' - a = (x - a)\cos\theta - (y - b)\sin\theta, \qquad y' - b = (x - a)\sin\theta + (y - b)\cos\theta.
$$
(c'est le vecteur $\overrightarrow{\Omega M}$ tourné de $\theta$.)

:::example[Une rotation numérique]
Soit $R$ la rotation de centre $\Omega(2\,;-1)$ et d'angle $\dfrac\pi2$ : $x' - 2 = -(y + 1)$ et $y' + 1 = x - 2$. Pour $A(5\,;-1)$ : $x' = 2 - 0 = 2$ et $y' = -1 + 3 = 2$, donc $R(A) = A'(2\,;2)$. Pour $B(5\,;0)$ : $x' = 2 - 1 = 1$ et $y' = -1 + 3 = 2$, donc $B'(1\,;2)$.
:::

## 2. Déterminer une rotation

:::theorem[Un point et son image]
Soit $A \neq A'$ et $\theta \not\equiv 0\ [2\pi]$. Il existe **une unique** rotation d'angle $\theta$ qui transforme $A$ en $A'$. Son centre $\Omega$ vérifie
$$
\Omega A = \Omega A' \quad \text{et} \quad (\overrightarrow{\Omega A}, \overrightarrow{\Omega A'}) \equiv \theta\ [2\pi].
$$
:::

![Centre d'une rotation sur la médiatrice de [AA']](/lessons/images/thm-rotation-point-image.svg "Le centre Ω est sur la médiatrice de [AA'], à l'endroit où l'angle AΩA' vaut θ.")

:::method[Construire le centre]
$\Omega$ est sur la **médiatrice de $[AA']$** (car $\Omega A = \Omega A'$) et le triangle $\Omega AA'$ est isocèle de sommet $\Omega$, avec un angle au sommet de mesure $\lvert\theta\rvert$ (pour $\lvert\theta\rvert < \pi$). On place donc $\Omega$ sur la médiatrice, du côté où l'angle $(\overrightarrow{\Omega A}, \overrightarrow{\Omega A'})$ a le **bon signe** (côté direct si $\theta > 0$).

Plus généralement, l'ensemble des points $M$ tels que $(\overrightarrow{MA}, \overrightarrow{MA'}) \equiv \theta\ [2\pi]$ est un **arc de cercle** d'extrémités $A$ et $A'$ ; le centre cherché est l'intersection de cet arc avec la médiatrice. Pour $\theta = \pi$, c'est simplement le milieu de $[AA']$.

Exemple. Rotation d'angle $\dfrac{3\pi}{4}$ qui envoie $A(1\,;0)$ sur $D(0\,;1)$ : $\Omega$ est sur la médiatrice $y = x$, soit $\Omega(t\,;t)$. Avec $\overrightarrow{\Omega A}(1 - t\,;-t)$ et $\overrightarrow{\Omega D}(-t\,;1 - t)$, le déterminant vaut $1 - 2t$ et le produit scalaire $-2t(1 - t)$. Pour un angle de $\dfrac{3\pi}{4}$ ($\cos < 0$ et $\sin > 0$), on a $\tan = -1$, d'où $1 - 2t = 2t(1 - t)$, soit $2t^2 - 4t + 1 = 0$ et, avec $\sin > 0$ ($t < \frac12$), $t = 1 - \dfrac{\sqrt2}{2}$. Donc $\Omega\left(1 - \dfrac{\sqrt2}{2}\,;1 - \dfrac{\sqrt2}{2}\right)$.
:::

:::theorem[Deux points et leurs images]
Soit $A \neq B$ et $C \neq D$ avec $AB = CD$.

- Si $\overrightarrow{AB} = \overrightarrow{CD}$, la **translation** de vecteur $\overrightarrow{AC}$ envoie $A$ sur $C$ et $B$ sur $D$ (et il n'y a pas de rotation d'angle non nul qui le fasse).
- Sinon, il existe **une unique rotation** qui envoie $A$ sur $C$ et $B$ sur $D$ : son angle est $\theta \equiv (\overrightarrow{AB}, \overrightarrow{CD})\ [2\pi]$ et son centre est à l'intersection des médiatrices de $[AC]$ et de $[BD]$.
:::

![Le centre d'une rotation à l'intersection de deux médiatrices](/lessons/images/rotation-centre.svg "Pour la rotation qui envoie A sur A' et B sur B', le centre Ω est équidistant de A et A', et de B et B' : il est à l'intersection des médiatrices de [AA'] et de [BB'].")

:::example[Centre et angle]
Avec $A(5\,;-1) \mapsto A'(2\,;2)$ et $B(5\,;0) \mapsto B'(1\,;2)$ : $\overrightarrow{AB}(0\,;1)$ et $\overrightarrow{A'B'}(-1\,;0)$. Leur produit scalaire est $0$ et leur déterminant $0 \times 0 - 1 \times (-1) = 1 > 0$ : $\cos = 0$, $\sin = 1$, l'angle est $\dfrac\pi2$. La médiatrice de $[AA']$ a pour équation $y = x - 3$ et celle de $[BB']$ a pour équation $y = 2x - 5$ ; elles se coupent en $x - 3 = 2x - 5$, soit $\Omega(2\,;-1)$ : on retrouve la rotation de l'exemple précédent.
:::

## 3. Propriétés d'une rotation

:::theorem[Isométrie]
Une rotation **conserve les distances** : si $A'$ et $B'$ sont les images de $A$ et $B$, alors $A'B' = AB$. On dit que c'est une **isométrie**. Elle conserve aussi le produit scalaire.
:::

:::proof[Conservation des distances]
Soit $R = R(\Omega\,;\theta)$, avec $A$ et $B$ distincts de $\Omega$ et $\Omega$, $A$, $B$ non alignés.

| Étape | Justification |
|---|---|
| $\Omega A' = \Omega A$ et $\Omega B' = \Omega B$ | définition de la rotation |
| $(\overrightarrow{\Omega A'}, \overrightarrow{\Omega B'}) \equiv (\overrightarrow{\Omega A'}, \overrightarrow{\Omega A}) + (\overrightarrow{\Omega A}, \overrightarrow{\Omega B}) + (\overrightarrow{\Omega B}, \overrightarrow{\Omega B'})$ | relation de Chasles pour les angles orientés |
| $\phantom{(\overrightarrow{\Omega A'}, \overrightarrow{\Omega B'})} \equiv -\theta + (\overrightarrow{\Omega A}, \overrightarrow{\Omega B}) + \theta \equiv (\overrightarrow{\Omega A}, \overrightarrow{\Omega B})$ | $(\overrightarrow{\Omega A}, \overrightarrow{\Omega A'}) \equiv \theta$ et $(\overrightarrow{\Omega B}, \overrightarrow{\Omega B'}) \equiv \theta$ |
| Les triangles $\Omega AB$ et $\Omega A'B'$ ont un angle égal compris entre deux côtés égaux : ils sont **isométriques** | cas d'égalité « côté-angle-côté » |
| donc $A'B' = AB$ | côtés correspondants |
:::

:::theorem[Ce que conserve une rotation]
Une rotation $R(\Omega\,;\theta)$ conserve les milieux, le barycentre de deux points, l'alignement, le parallélisme, l'orthogonalité, les angles orientés de vecteurs et le contact. De plus :

- l'image d'une **droite** est une droite ; celle d'un **segment** est un segment isométrique ;
- l'image d'un **cercle** de centre $O$ et de rayon $r$ est le cercle de centre $R(O)$ et de rayon $r$ ;
- une tangente à un cercle a pour image la tangente au cercle image ;
- **pour tous points $A \neq B$ d'images $A'$ et $B'$ : $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \theta\ [2\pi]$.**
:::

La dernière propriété est la plus utile : le vecteur $\overrightarrow{A'B'}$ est le vecteur $\overrightarrow{AB}$ **tourné de $\theta$**. Une droite et son image font donc un angle $\theta$ (à $\pi$ près).

:::property[Droite et image]
Si $D'$ est l'image de $D$ par une rotation d'angle $\theta$, alors $D' \parallel D$ si $\theta \equiv 0\ [\pi]$, et $D' \perp D$ si $\theta \equiv \dfrac\pi2\ [\pi]$.
:::

## 4. Rotations et configurations

:::method[Trouver LA rotation]
Pour montrer que deux segments sont **égaux et perpendiculaires** (ou que deux droites font un angle donné), on cherche :

1. un **centre** commun, sommet d'un angle connu ;
2. l'**angle** : $\frac\pi2$ pour un carré ou un angle droit avec deux côtés égaux, $\frac\pi3$ pour un triangle équilatéral, $\frac{2\pi}{n}$ pour un polygone régulier à $n$ côtés ;
3. les **images** des deux extrémités d'un segment ;
4. on conclut : l'image d'un segment est un segment de même longueur, et le vecteur image est le vecteur tourné de $\theta$.
:::

:::example[Deux carrés qui partagent un sommet]
$ABCD$ et $AEFG$ sont deux carrés **de même sens** (ici directs) de sommet commun $A$. Soit $R = R\left(A\,;\dfrac\pi2\right)$. Comme $AB = AD$ et $(\overrightarrow{AB}, \overrightarrow{AD}) \equiv \dfrac\pi2$, on a $R(B) = D$ ; de même $R(E) = G$. Donc $R$ envoie $[BE]$ sur $[DG]$ : $BE = DG$ et $(\overrightarrow{BE}, \overrightarrow{DG}) \equiv \dfrac\pi2$, donc $(BE) \perp (DG)$.

Contrôle avec $A(0\,;0)$, $B(2\,;0)$, $C(2\,;2)$, $D(0\,;2)$ et $E(1\,;1)$, $G(-1\,;1)$, $F(0\,;2)$ : $\overrightarrow{BE} = (-1\,;1)$ et $\overrightarrow{DG} = (-1\,;-1)$ ont la même norme $\sqrt2$ et un produit scalaire nul ✓.
:::

:::example[Triangle équilatéral]
Si $ABC$ est équilatéral direct, $AB = AC$ et $(\overrightarrow{AB}, \overrightarrow{AC}) \equiv \dfrac\pi3$ : la rotation $R\left(A\,;\dfrac\pi3\right)$ envoie $B$ sur $C$. Pour tout point $M$, si $N = R(M)$, le triangle $AMN$ est équilatéral direct, et $MN = AM$.
:::

:::method[Prouver un alignement]
Pour montrer que $B$, $D$ et $B'$ sont alignés, il suffit de montrer que $(\overrightarrow{DB}, \overrightarrow{DB'}) \equiv \pi\ [2\pi]$, en calculant ces angles avec la relation de Chasles et les angles que la rotation fait tourner.
:::

## 5. Composée de rotations de même centre, polygones réguliers

:::theorem[Composée de deux rotations de même centre]
$R(\Omega\,;\theta') \circ R(\Omega\,;\theta) = R(\Omega\,;\theta + \theta')$. En particulier, si $\theta + \theta' \equiv 0\ [2\pi]$, la composée est l'identité.
:::

![Deux rotations successives de même centre](/lessons/images/thm-rotations-meme-centre.svg "Tourner de θ puis de θ' autour du même centre revient à tourner de θ + θ'.")

En coordonnées, tourner de $\theta$ puis de $\theta'$ revient, avec les formules d'addition de $\cos$ et de $\sin$, à tourner de $\theta + \theta'$.

:::example[Polygone régulier et indices]
Soit $R = R\left(O\,;\dfrac{2\pi}{5}\right)$, $A$ distinct de $O$, $A_0 = A$ et $A_{k+1} = R(A_k)$. Alors $A_k = R^k(A)$ est l'image de $A$ par la rotation d'angle $\dfrac{2k\pi}{5}$ : $A_5 = A$ car $5 \times \dfrac{2\pi}{5} = 2\pi$. Les points $A_0, A_1, \dots, A_4$ forment un **pentagone régulier**. Pour trouver $A_{23}$ : $23 = 4 \times 5 + 3$ donc $A_{23} = A_3$ ; pour $A_{2006}$ : $2006 = 401 \times 5 + 1$ donc $A_{2006} = A_1$.

Avec $R\left(O\,;\dfrac\pi3\right)$ et $A(1\,;0)$ on obtient l'hexagone régulier de sommets $(1\,;0)$, $\left(\frac12\,;\frac{\sqrt3}{2}\right)$, $\left(-\frac12\,;\frac{\sqrt3}{2}\right)$, $(-1\,;0)$, $\left(-\frac12\,;-\frac{\sqrt3}{2}\right)$, $\left(\frac12\,;-\frac{\sqrt3}{2}\right)$.
:::

:::property[Rotations qui laissent une figure invariante]
Une rotation qui laisse globalement invariant un polygone régulier a pour centre le centre du polygone. Pour un **carré** de centre $O$ : les rotations d'angles $0$, $\frac\pi2$, $\pi$ et $-\frac\pi2$. Pour un **triangle équilatéral** de centre $O$ : les rotations d'angles $0$, $\frac{2\pi}{3}$ et $-\frac{2\pi}{3}$.
:::

## 6. Recherche d'ensembles de points

:::method[Lieu d'un point image]
Si $M' = R(M)$ et si $M$ décrit une figure $\mathcal F$, alors $M'$ décrit **l'image de $\mathcal F$ par $R$** : un cercle de centre $O$ et de rayon $r$ devient le cercle de centre $R(O)$ et de rayon $r$ ; une droite devient une droite.

Exemple. $A(0\,;0)$, $\mathcal C$ le cercle de centre $O_1(2\,;0)$ et de rayon $1$. Pour $M \in \mathcal C$, soit $N$ le point tel que $AMN$ soit **rectangle isocèle direct en $A$**. Alors $N = R\left(A\,;\dfrac\pi2\right)(M)$, et $N$ décrit le cercle de centre $R(O_1) = (0\,;2)$ et de rayon $1$.
:::

## Vérifie-toi

::::check[Image d'un point]
Quelle est l'image de $M(3\,;2)$ par la rotation de centre $\Omega(1\,;0)$ et d'angle $\pi$ ? Et par la rotation de centre $O$ et d'angle $\dfrac\pi2$ ?

:::answer
Angle $\pi$ : symétrie centrale de centre $\Omega$, $M' = 2\Omega - M = (2 - 3\,;\,0 - 2) = (-1\,;-2)$. Quart de tour direct de centre $O$ : $(x\,;y) \mapsto (-y\,;x)$, donc $(3\,;2) \mapsto (-2\,;3)$.
:::
::::

::::check[Composée]
Soit $R = R\left(O\,;\dfrac\pi3\right)$. Que valent $R \circ R$ et $R^6$ (six rotations successives) ?

:::answer
$R \circ R = R\left(O\,;\dfrac{2\pi}{3}\right)$ et $R^6 = R(O\,;2\pi) = $ l'identité.
:::
::::

::::check[Angle d'une rotation]
Une rotation transforme une droite $D$ en une droite $D'$ perpendiculaire à $D$. Que peut-on dire de son angle ?

:::answer
$D'$ fait avec $D$ l'angle $\theta$ à $\pi$ près : si $D \perp D'$, alors $\theta \equiv \dfrac\pi2\ [\pi]$, c'est-à-dire $\theta = \dfrac\pi2$ **ou** $\theta = -\dfrac\pi2$ (modulo $2\pi$).
:::
::::

::::check[Centre de rotation]
La rotation d'angle $\dfrac\pi2$ envoie $A(1\,;1)$ sur $A'(-1\,;1)$. Où est son centre ?

:::answer
$\Omega$ est sur la médiatrice de $[AA']$, l'axe $(Oy)$ : $\Omega(0\,;t)$. Le vecteur $\overrightarrow{\Omega A}(1\,;1 - t)$ tourné de $\frac\pi2$ donne $(-(1 - t)\,;1)$, qui doit être égal à $\overrightarrow{\Omega A'}(-1\,;1 - t)$ : d'où $1 - t = 1$ et $t = 0$. Le centre est $O$.
:::
::::

::::challenge
Une rotation $R$ transforme $A$ en $B$ et $B$ en $A$, avec $A \neq B$. Montrer que $R$ est la symétrie centrale de centre le milieu de $[AB]$.

:::answer
$R \circ R$ fixe $A$ (car $R(R(A)) = R(B) = A$) et fixe $B$. C'est une rotation d'angle $2\theta$. Une rotation qui n'est pas l'identité n'a qu'**un** point fixe, son centre ; ayant deux points fixes distincts, $R \circ R$ est l'identité : $2\theta \equiv 0\ [2\pi]$, donc $\theta \equiv 0$ ou $\theta \equiv \pi\ [2\pi]$. Si $\theta \equiv 0$, $R$ est l'identité et $A = B$ : impossible. Donc $\theta \equiv \pi$ : $R$ est la symétrie centrale qui échange $A$ et $B$, c'est-à-dire de centre le milieu de $[AB]$.
:::
::::

:::summary
- $R(\Omega\,;\theta)$ : $\Omega$ fixe ; $M \mapsto M'$ avec $\Omega M' = \Omega M$ et $(\overrightarrow{\Omega M}, \overrightarrow{\Omega M'}) \equiv \theta$. $\theta = \pi$ : symétrie centrale ; réciproque : $R(\Omega\,;-\theta)$.
- Un point $A \neq A'$ et un angle $\theta$ déterminent le centre : médiatrice de $[AA']$ et arc capable. Avec $\overrightarrow{AB} \neq \overrightarrow{CD}$ : angle $(\overrightarrow{AB}, \overrightarrow{CD})$, centre à l'intersection des médiatrices de $[AC]$ et $[BD]$.
- Une rotation conserve distances, milieux, alignement, parallélisme, orthogonalité, angles orientés, cercles et tangentes ; $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \theta$.
- Méthode : chercher **la** rotation (centre commun, angle $\frac\pi2$, $\frac\pi3$, $\frac{2\pi}{n}$), calculer les images des extrémités, conclure par égalité et angle.
- $R(\Omega\,;\theta') \circ R(\Omega\,;\theta) = R(\Omega\,;\theta + \theta')$ ; $R(O\,;\frac{2\pi}{n})$ engendre un polygone régulier à $n$ côtés.
- Lieu : si $M$ décrit $\mathcal F$, $R(M)$ décrit $R(\mathcal F)$.
:::
