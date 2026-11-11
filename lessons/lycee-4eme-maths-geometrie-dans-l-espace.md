---
title: "Géométrie dans l'espace : produits, plans, sphères, translation et homothétie"
slug: "lycee-4eme-maths-geometrie-dans-l-espace"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Géométrie dans l'espace"
summary: "Le calcul remplace le dessin : produit scalaire et produit vectoriel de l'espace, aire et volume, équations de droites, de plans et de sphères, distances, puis translation et homothétie, avec un cube comme fil rouge."
prerequisites: ["Vecteurs de l'espace", "Produit scalaire dans le plan", "Repère orthonormé de l'espace", "Droites et plans de l'espace", "Déterminant et système linéaire", "Distance d'un point à une droite dans le plan"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 6 « Géométrie dans l'espace »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Sur une feuille, un dessin en perspective **ment** : les angles droits ne sont pas droits, les points alignés peuvent ne pas l'être, deux droites qui se croisent sur le dessin peuvent passer l'une au-dessus de l'autre. La parade : se donner un repère, et remplacer le dessin par du **calcul**. Un plan, une droite, une sphère deviennent des équations, et « est-ce perpendiculaire ? » devient « ce nombre vaut-il $0$ ? ».

Dans tout le chapitre, l'espace est muni d'un repère orthonormé direct $(O\,;\vec\imath,\vec\jmath,\vec k)$.

![Un cube ABCDEFGH dans lequel on a tracé le triangle EBD et la diagonale AG, qui perce ce triangle en un point L.](/lessons/images/m4-esp-cube.svg "Notre fil rouge : le cube d'arête 1 avec le repère (A ; AB, AD, AE). La diagonale (AG) est perpendiculaire au plan (EBD) et le coupe en L(1/3 ; 1/3 ; 1/3).")

:::intuition
Dans le plan, la droite $ax + by + c = 0$ admet le vecteur $(a, b)$ comme vecteur perpendiculaire. Dans l'espace, la même recette marche pour un **plan** : $ax + by + cz + d = 0$ admet le vecteur $(a, b, c)$ comme vecteur **normal**. Une **droite**, elle, se décrit par un point et une direction, et une **sphère** par un centre et un rayon. Deux outils font le lien entre tout cela : le **produit scalaire** (« ces vecteurs sont-ils perpendiculaires ? ») et le **produit vectoriel** (« donne-moi un vecteur perpendiculaire à ces deux-là »). À la fin, la **translation** et l'**homothétie** déplacent et agrandissent les figures sans les déformer.
:::

## 1. Le produit scalaire dans l'espace

:::definition[Produit scalaire]
Pour deux vecteurs non nuls $\vec u = \overrightarrow{AB}$ et $\vec v = \overrightarrow{AC}$,
$$
\vec u\cdot\vec v = \lVert\vec u\rVert\,\lVert\vec v\rVert\cos\widehat{BAC}.
$$
Si l'un des vecteurs est nul, le produit est $0$. En particulier $\vec u\cdot\vec u = \lVert\vec u\rVert^2$. Les règles de calcul sont celles du plan : $\vec u\cdot\vec v = \vec v\cdot\vec u$, $\vec u\cdot(\vec v + \vec w) = \vec u\cdot\vec v + \vec u\cdot\vec w$ et $(\lambda\vec u)\cdot\vec v = \lambda\,(\vec u\cdot\vec v)$.
:::

:::theorem[Expression analytique]
Dans un repère orthonormé, si $\vec u = (x, y, z)$ et $\vec v = (x', y', z')$, alors
$$
\begin{gathered}
\vec u\cdot\vec v = xx' + yy' + zz',\\
\lVert\vec u\rVert^2 = x^2 + y^2 + z^2.
\end{gathered}
$$
La distance de $A(x_A, y_A, z_A)$ à $B(x_B, y_B, z_B)$ est la norme de $\overrightarrow{AB}$ :
$$
\begin{aligned}
AB^2 &= (x_B - x_A)^2\\
&\quad + (y_B - y_A)^2\\
&\quad + (z_B - z_A)^2.
\end{aligned}
$$
:::

:::proof[Expression analytique]
| Étape | Justification |
|---|---|
| On écrit $\vec u = x\vec\imath + y\vec\jmath + z\vec k$ et $\vec v = x'\vec\imath + y'\vec\jmath + z'\vec k$ | définition des coordonnées |
| $\vec u\cdot\vec v$ est une somme de neuf termes, comme $xx'\,(\vec\imath\cdot\vec\imath)$ ou $xy'\,(\vec\imath\cdot\vec\jmath)$ | bilinéarité |
| $\vec\imath\cdot\vec\imath = \vec\jmath\cdot\vec\jmath = \vec k\cdot\vec k = 1$ | la base est orthonormée : vecteurs unitaires |
| $\vec\imath\cdot\vec\jmath = \vec\imath\cdot\vec k = \vec\jmath\cdot\vec k = 0$ | la base est orthonormée : vecteurs orthogonaux |
| Il reste $xx' + yy' + zz'$ | seuls trois termes ne sont pas nuls |
:::

:::property[Orthogonalité, angle, droite perpendiculaire à un plan]
- $\vec u\perp\vec v$ si et seulement si $\vec u\cdot\vec v = 0$.
- Si $\vec u$ et $\vec v$ sont non nuls et forment l'angle $\theta$, alors $\cos\theta = \dfrac{\vec u\cdot\vec v}{\lVert\vec u\rVert\,\lVert\vec v\rVert}$.
- Une droite de vecteur directeur $\vec u$ est **perpendiculaire à un plan** si et seulement si $\vec u$ est orthogonal à **deux vecteurs non colinéaires** $\vec a$ et $\vec b$ de ce plan. En effet tout vecteur du plan s'écrit $\alpha\vec a + \beta\vec b$, et $\vec u\cdot(\alpha\vec a + \beta\vec b) = \alpha\,\vec u\cdot\vec a + \beta\,\vec u\cdot\vec b = 0$.
:::

:::example[Dans le cube : un angle et une perpendiculaire]
Cube $ABCDEFGH$ d'arête $1$, repère $(A\,;\overrightarrow{AB},\overrightarrow{AD},\overrightarrow{AE})$. Les sommets sont $A(0,0,0)$, $B(1,0,0)$, $D(0,1,0)$, $E(0,0,1)$, $F(1,0,1)$, $H(0,1,1)$ et $G(1,1,1)$.

**Un angle.** $\overrightarrow{AF} = (1, 0, 1)$ et $\overrightarrow{AH} = (0, 1, 1)$, donc $\overrightarrow{AF}\cdot\overrightarrow{AH} = 1$ et $AF = AH = \sqrt2$ :
$$
\cos\widehat{FAH} = \frac{1}{\sqrt2\cdot\sqrt2} = \frac12.
$$
L'angle vaut $60^\circ$ : le triangle $AFH$ est équilatéral (ses trois côtés sont des diagonales de faces).

**Une perpendiculaire.** $\overrightarrow{AG} = (1, 1, 1)$, et $\overrightarrow{EB} = (1, 0, -1)$, $\overrightarrow{ED} = (0, 1, -1)$ sont deux vecteurs non colinéaires du plan $(EBD)$. Or $\overrightarrow{AG}\cdot\overrightarrow{EB} = 1 + 0 - 1 = 0$ et $\overrightarrow{AG}\cdot\overrightarrow{ED} = 0 + 1 - 1 = 0$. Donc $(AG)\perp(EBD)$, comme le suggère la figure ✓.
:::

## 2. Le produit vectoriel

Le produit scalaire de deux vecteurs est un **nombre**. Le produit vectoriel est un **vecteur** : celui qui est perpendiculaire aux deux, avec une longueur bien choisie.

:::definition[Produit vectoriel]
L'espace est orienté (une base directe a été choisie). Soit $\vec u$ et $\vec v$ deux vecteurs. Leur **produit vectoriel** $\vec u\wedge\vec v$ est le vecteur défini ainsi :
- si $\vec u$ et $\vec v$ sont colinéaires, $\vec u\wedge\vec v = \vec 0$ ;
- sinon, $\vec u\wedge\vec v$ est **orthogonal** à $\vec u$ et à $\vec v$, la base $(\vec u, \vec v, \vec u\wedge\vec v)$ est **directe**, et
$$
\lVert\vec u\wedge\vec v\rVert = \lVert\vec u\rVert\,\lVert\vec v\rVert\sin\theta,
$$
où $\theta$ est l'angle géométrique de $\vec u$ et $\vec v$.
:::

![Deux vecteurs u et v, le parallélogramme qu'ils engendrent et leur produit vectoriel, vertical.](/lessons/images/m4-esp-vectoriel.svg "Le produit vectoriel de u et v est perpendiculaire au plan qui les contient. Sa longueur est l'aire du parallélogramme construit sur u et v.")

:::intuition
**Règle de la main droite.** Le pouce suit $\vec u$, l'index suit $\vec v$ : le majeur indique le sens de $\vec u\wedge\vec v$. Échanger les deux facteurs retourne la flèche : $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$. La longueur $\lVert\vec u\rVert\,\lVert\vec v\rVert\sin\theta$ est l'**aire du parallélogramme** construit sur $\vec u$ et $\vec v$ : maximale quand ils sont perpendiculaires, nulle quand ils sont alignés.
:::

:::theorem[Expression analytique]
Dans un repère orthonormé **direct**, si $\vec u = (a, b, c)$ et $\vec v = (a', b', c')$, alors
$$
\vec u\wedge\vec v = \begin{pmatrix} bc' - cb' \\ ca' - ac' \\ ab' - ba' \end{pmatrix}.
$$
:::

:::method[Ne pas se tromper dans la formule]
Chaque composante est un déterminant $2\times2$ construit avec les **deux autres** lignes, dans l'ordre circulaire $x \to y \to z \to x$ :
- première composante : lignes $y$ et $z$, soit $bc' - cb'$ ;
- deuxième composante : lignes $z$ et $x$, soit $ca' - ac'$ ;
- troisième composante : lignes $x$ et $y$, soit $ab' - ba'$.

**Contrôle systématique** : le résultat doit être orthogonal aux deux vecteurs de départ (deux produits scalaires qui valent $0$).
:::

:::proof[Pourquoi cette formule ?]
On note $\vec w$ le vecteur de composantes $(bc' - cb',\ ca' - ac',\ ab' - ba')$.

| Étape | Justification |
|---|---|
| $\vec u\cdot\vec w = a(bc' - cb') + b(ca' - ac') + c(ab' - ba')$ | expression analytique du produit scalaire |
| $= (abc' - bac') + (bca' - cba') + (cab' - acb')$ | on regroupe les six termes deux par deux |
| $= 0$ | chaque parenthèse vaut $0$ |
| De même $\vec v\cdot\vec w = 0$ | même calcul avec $a', b', c'$ |
| $\lVert\vec w\rVert^2 = \lVert\vec u\rVert^2\lVert\vec v\rVert^2 - (\vec u\cdot\vec v)^2$ | identité de Lagrange : en développant les deux membres on trouve les mêmes termes |
| $= \lVert\vec u\rVert^2\lVert\vec v\rVert^2\,(1 - \cos^2\theta) = \lVert\vec u\rVert^2\lVert\vec v\rVert^2\sin^2\theta$ | $\vec u\cdot\vec v = \lVert\vec u\rVert\lVert\vec v\rVert\cos\theta$ |
| Le sens est le bon : $\vec\imath\wedge\vec\jmath = (0, 0, 1) = \vec k$ | $(\vec\imath, \vec\jmath, \vec k)$ est directe, et le signe ne change pas tant que $\vec u$ et $\vec v$ ne deviennent pas colinéaires |
:::

:::property[Règles de calcul]
- $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$ (**anticommutatif**) et $\vec u\wedge\vec u = \vec 0$.
- $\vec u\wedge(\vec v + \vec w) = \vec u\wedge\vec v + \vec u\wedge\vec w$ et $(\lambda\vec u)\wedge\vec v = \lambda\,(\vec u\wedge\vec v)$.
- $\vec u\wedge\vec v = \vec 0$ si et seulement si $\vec u$ et $\vec v$ sont **colinéaires**.
:::

:::warning
Le produit vectoriel n'est **pas associatif** : $\vec\imath\wedge(\vec\imath\wedge\vec\jmath) = \vec\imath\wedge\vec k = -\,\vec\jmath$, alors que $(\vec\imath\wedge\vec\imath)\wedge\vec\jmath = \vec 0$. Les parenthèses comptent.
:::

:::example[Un produit vectoriel pas à pas]
Soit $\vec u = (1, 2, 3)$ et $\vec v = (-1, 0, 2)$.
- première composante : $2\cdot2 - 3\cdot0 = 4$ ;
- deuxième composante : $3\cdot(-1) - 1\cdot2 = -5$ ;
- troisième composante : $1\cdot0 - 2\cdot(-1) = 2$.

$$
\vec u\wedge\vec v = \begin{pmatrix} 4 \\ -5 \\ 2 \end{pmatrix}.
$$
Contrôle : $\vec u\cdot(\vec u\wedge\vec v) = 4 - 10 + 6 = 0$ ✓ et $\vec v\cdot(\vec u\wedge\vec v) = -4 + 0 + 4 = 0$ ✓. La norme vérifie $\lVert\vec u\wedge\vec v\rVert^2 = 16 + 25 + 4 = 45$, et la formule de Lagrange donne $14\times5 - 5^2 = 45$ ✓. L'aire du parallélogramme construit sur $\vec u$ et $\vec v$ est donc $\sqrt{45} = 3\sqrt5$.
:::

:::property[Aire d'un triangle]
Si $A$, $B$, $C$ sont non alignés, l'aire du triangle $ABC$ est
$$
\tfrac12\,\lVert\overrightarrow{AB}\wedge\overrightarrow{AC}\rVert.
$$
C'est la moitié de l'aire du parallélogramme, et aussi $\tfrac12\,AB\cdot AC\sin\widehat{BAC}$.
:::

:::theorem[Volume d'un parallélépipède]
Le volume du parallélépipède construit sur $\vec u$, $\vec v$, $\vec w$ est
$$
\begin{gathered}
V = \lvert(\vec u\wedge\vec v)\cdot\vec w\rvert\\
= \lvert\det(\vec u, \vec v, \vec w)\rvert.
\end{gathered}
$$
Le tétraèdre construit sur les mêmes vecteurs a pour volume $\dfrac V6$.
:::

![Un parallélépipède construit sur trois vecteurs u, v, w, avec le produit vectoriel de u et v et la hauteur h.](/lessons/images/m4-esp-parallelepipede.svg "Le volume est (aire de la base) × (hauteur). La hauteur h est la composante de w dans la direction du produit vectoriel de u et v.")

:::proof[Volume d'un parallélépipède]
| Étape | Justification |
|---|---|
| La base est le parallélogramme construit sur $\vec u$ et $\vec v$ : son aire est $\mathcal A = \lVert\vec u\wedge\vec v\rVert$ | aire d'un parallélogramme |
| $\vec n = \dfrac{\vec u\wedge\vec v}{\lVert\vec u\wedge\vec v\rVert}$ est unitaire et orthogonal à la base | définition du produit vectoriel |
| La hauteur est $h = \lvert\vec n\cdot\vec w\rvert$ | projection de $\vec w$ sur la direction orthogonale à la base (figure) |
| $V = \mathcal A\cdot h = \lVert\vec u\wedge\vec v\rVert\cdot\dfrac{\lvert(\vec u\wedge\vec v)\cdot\vec w\rvert}{\lVert\vec u\wedge\vec v\rVert}$ | volume $=$ aire de la base $\times$ hauteur |
| $V = \lvert(\vec u\wedge\vec v)\cdot\vec w\rvert$ | on simplifie |
| Le tétraèdre vaut $\dfrac V6$ | volume d'une pyramide $= \tfrac13\times$ base $\times$ hauteur, et la base est ici la moitié du parallélogramme |
:::

:::example[Un volume]
Soit $\vec u = (1, 2, 0)$, $\vec v = (0, 1, 3)$ et $\vec w = (2, 0, 1)$. On calcule $\vec u\wedge\vec v = (2\cdot3 - 0\cdot1,\ 0\cdot0 - 1\cdot3,\ 1\cdot1 - 2\cdot0) = (6, -3, 1)$, puis
$$
\begin{gathered}
(\vec u\wedge\vec v)\cdot\vec w = 12 + 0 + 1\\
= 13.
\end{gathered}
$$
Le parallélépipède a pour volume $13$, et le tétraèdre construit sur les mêmes vecteurs $\dfrac{13}{6}$.
:::

:::remark
Le produit mixte $(\vec u\wedge\vec v)\cdot\vec w$ est **nul** si et seulement si $\vec w$ est dans le plan de $\vec u$ et $\vec v$ : le parallélépipède est « aplati ». Quatre points $A, B, C, D$ sont donc **coplanaires** si et seulement si $\det(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}) = 0$.
:::

## 3. Droites et plans : les équations

:::definition[Représentation paramétrique d'une droite]
Soit $A(x_A, y_A, z_A)$ un point et $\vec u = (a, b, c)$ un vecteur non nul. La droite $\mathcal D$ passant par $A$ et de vecteur directeur $\vec u$ est l'ensemble des points $M$ tels que $\overrightarrow{AM} = t\,\vec u$, avec $t$ réel. En coordonnées :
$$
\begin{cases}
x = x_A + at\\
y = y_A + bt\\
z = z_A + ct
\end{cases}
$$
:::

:::example[Deux droites sécantes, ou pas]
Soit $A(1, -1, 2)$ et $B(3, 0, -1)$. Alors $\overrightarrow{AB} = (2, 1, -3)$ et la droite $(AB)$ a pour représentation paramétrique $x = 1 + 2t$, $y = -1 + t$, $z = 2 - 3t$. Le point $(5, 1, -4)$ y est (pour $t = 2$).

Dans le plan, deux droites non parallèles se coupent toujours. Dans l'espace, **non**. Soit $\mathcal D'$ la droite $x = 4 + s$, $y = 2 - s$, $z = -6 + 2s$, de vecteur directeur $(1, -1, 2)$, non colinéaire à $(2, 1, -3)$. Un point commun vérifie :
- $1 + 2t = 4 + s$ donne $s = 2t - 3$ ;
- $-1 + t = 2 - s$ donne alors $-1 + t = 5 - 2t$, donc $t = 2$ et $s = 1$ ;
- la troisième équation $2 - 3t = -6 + 2s$ devient $-4 = -4$ ✓.

Les droites se coupent en $I(5, 1, -4)$. Si l'on remplaçait la troisième coordonnée de $\mathcal D'$ par $z = -5 + 2s$, on aurait $-4 \neq -3$ : aucun point commun, et pourtant pas parallèles. Les droites seraient alors **non coplanaires**.
:::

:::theorem[Équation cartésienne d'un plan]
Soit $\vec n = (a, b, c)$ un vecteur non nul et $A(x_A, y_A, z_A)$ un point. L'ensemble des points $M$ tels que $\vec n\cdot\overrightarrow{AM} = 0$ est le plan passant par $A$ et de **vecteur normal** $\vec n$. Il a pour équation $ax + by + cz + d = 0$, où $d = -(ax_A + by_A + cz_A)$.
Réciproquement, toute équation $ax + by + cz + d = 0$ avec $(a, b, c)\neq(0, 0, 0)$ est celle d'un plan de vecteur normal $(a, b, c)$.
:::

:::proof[Équation cartésienne d'un plan]
| Étape | Justification |
|---|---|
| $M$ est dans le plan si et seulement si $\overrightarrow{AM}\perp\vec n$ | le plan de vecteur normal $\vec n$ passant par $A$ est formé des points $M$ tels que $\overrightarrow{AM}\perp\vec n$ |
| $\vec n\cdot\overrightarrow{AM} = a(x - x_A) + b(y - y_A) + c(z - z_A)$ | expression analytique du produit scalaire |
| $= ax + by + cz + d$ avec $d = -(ax_A + by_A + cz_A)$ | on développe |
| Réciproquement, l'équation $ax + by + cz + d = 0$ admet une solution $A$ | par exemple $A\left(-\tfrac da, 0, 0\right)$ si $a\neq0$ |
| En soustrayant l'équation vérifiée par $A$, on retrouve $\vec n\cdot\overrightarrow{AM} = 0$ | on se ramène au premier cas |
:::

:::method[Équation du plan passant par trois points non alignés]
1. Calculer $\overrightarrow{AB}$ et $\overrightarrow{AC}$ (non colinéaires).
2. Calculer $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$ : il est orthogonal aux deux vecteurs, donc normal au plan. On peut le simplifier par un facteur commun.
3. Écrire $ax + by + cz + d = 0$ avec $(a, b, c) = \vec n$.
4. Trouver $d$ avec les coordonnées de $A$, puis **vérifier avec $B$ et $C$**.

Variante : le plan passant par $A$ et dirigé par $\vec u$ et $\vec v$ est l'ensemble des $M$ tels que $\det(\overrightarrow{AM}, \vec u, \vec v) = 0$ (les trois vecteurs sont coplanaires).
:::

:::example[Le plan (ABC)]
Soit $A(2, 0, -1)$, $B(1, -1, 0)$ et $C(0, 1, 4)$.
- $\overrightarrow{AB} = (-1, -1, 1)$ et $\overrightarrow{AC} = (-2, 1, 5)$ ne sont pas colinéaires.
- $\overrightarrow{AB}\wedge\overrightarrow{AC} = (-6, 3, -3) = -3\,(2, -1, 1)$ : on prend $\vec n = (2, -1, 1)$.
- L'équation est $2x - y + z + d = 0$ ; avec $A$ : $4 - 0 - 1 + d = 0$, donc $d = -3$.

Le plan $(ABC)$ a pour équation $2x - y + z - 3 = 0$. Contrôle : pour $B$, $2 + 1 + 0 - 3 = 0$ ✓ ; pour $C$, $0 - 1 + 4 - 3 = 0$ ✓.
:::

:::example[La diagonale perce le plan]
Dans le cube, $E(0,0,1)$, $B(1,0,0)$ et $D(0,1,0)$ vérifient $x + y + z = 1$ : le plan $(EBD)$ a pour équation $x + y + z - 1 = 0$, de vecteur normal $(1, 1, 1) = \overrightarrow{AG}$, ce qui retrouve $(AG)\perp(EBD)$.

Pour **couper une droite et un plan**, on remplace la représentation paramétrique dans l'équation. La droite $(AG)$ est $x = y = z = t$, donc $3t - 1 = 0$ et $t = \tfrac13$ : le point d'intersection est $L\left(\tfrac13, \tfrac13, \tfrac13\right)$. Ainsi $AL = \dfrac{\sqrt3}{3}$ et $LG = \dfrac{2\sqrt3}{3}$ : le plan $(EBD)$ coupe la diagonale au **tiers**.
:::

:::theorem[Deux plans]
Soit $\mathcal P : ax + by + cz + d = 0$ et $\mathcal P' : a'x + b'y + c'z + d' = 0$, de vecteurs normaux $\vec n$ et $\vec n'$.
- Si $\vec n$ et $\vec n'$ sont colinéaires, les plans sont **parallèles** (confondus ou strictement parallèles).
- Sinon ils sont **sécants** suivant une droite de vecteur directeur $\vec n\wedge\vec n'$ (un vecteur orthogonal à la fois à $\vec n$ et à $\vec n'$).
- Ils sont **perpendiculaires** si et seulement si $\vec n\cdot\vec n' = 0$.
:::

:::example[L'intersection de deux plans]
Soit $\mathcal P : x + 2y - z = 3$ et $\mathcal Q : 2x - y + z = 0$, de vecteurs normaux $\vec n = (1, 2, -1)$ et $\vec n' = (2, -1, 1)$, non colinéaires. Les plans sont donc sécants, suivant une droite de vecteur directeur
$$
\vec n\wedge\vec n' = (1, -3, -5).
$$
Pour un point commun, on pose $x = 0$ : $2y - z = 3$ et $-y + z = 0$ donnent $y = z = 3$. La droite d'intersection est donc
$$
\begin{cases}
x = t\\
y = 3 - 3t\\
z = 3 - 5t
\end{cases}
$$
Contrôle avec $t = 1$, soit $(1, 0, -2)$ : $1 + 0 + 2 = 3$ ✓ et $2 - 0 - 2 = 0$ ✓. Les plans ne sont pas perpendiculaires : $\vec n\cdot\vec n' = 2 - 2 - 1 = -1\neq0$.
:::

## 4. Distances

:::theorem[Distance d'un point à un plan]
Soit $\mathcal P : ax + by + cz + d = 0$ et $A(x_0, y_0, z_0)$. La distance $d(A, \mathcal P)$, c'est-à-dire la distance $AH$ où $H$ est le projeté orthogonal de $A$ sur $\mathcal P$, vaut
$$
\frac{\lvert ax_0 + by_0 + cz_0 + d\rvert}{\sqrt{a^2 + b^2 + c^2}}.
$$
:::

![Un plan P, un point A au-dessus, son projeté orthogonal H et un point M du plan.](/lessons/images/m4-esp-distance.svg "La distance de A au plan est AH. Si M est un point quelconque du plan, AH est la longueur de la projection du vecteur MA sur la normale n.")

:::proof[Distance d'un point à un plan]
Soit $\vec n = (a, b, c)$ et $M(x_M, y_M, z_M)$ un point quelconque de $\mathcal P$.

| Étape | Justification |
|---|---|
| $\overrightarrow{MA} = \overrightarrow{MH} + \overrightarrow{HA}$ | relation de Chasles |
| $\vec n\cdot\overrightarrow{MA} = \vec n\cdot\overrightarrow{MH} + \vec n\cdot\overrightarrow{HA} = \vec n\cdot\overrightarrow{HA}$ | $\overrightarrow{MH}$ est dans le plan, donc orthogonal à $\vec n$ |
| $\lvert\vec n\cdot\overrightarrow{HA}\rvert = \lVert\vec n\rVert\cdot AH$ | $\overrightarrow{HA}$ et $\vec n$ sont colinéaires : le cosinus vaut $\pm1$ |
| $AH = \dfrac{\lvert\vec n\cdot\overrightarrow{MA}\rvert}{\lVert\vec n\rVert}$ | on divise par $\lVert\vec n\rVert$ |
| $\vec n\cdot\overrightarrow{MA} = ax_0 + by_0 + cz_0 - (ax_M + by_M + cz_M)$ | expression analytique |
| $= ax_0 + by_0 + cz_0 + d$ | $M\in\mathcal P$ donne $ax_M + by_M + cz_M = -d$ |
:::

:::example[Deux distances dans le cube]
Le plan $(EBD)$ a pour équation $x + y + z - 1 = 0$ et $\sqrt{1 + 1 + 1} = \sqrt3$.
- Pour $A(0, 0, 0)$ : $d = \dfrac{\lvert -1\rvert}{\sqrt3} = \dfrac{\sqrt3}{3}$.
- Pour $G(1, 1, 1)$ : $d = \dfrac{\lvert 3 - 1\rvert}{\sqrt3} = \dfrac{2\sqrt3}{3}$.

Les deux distances s'additionnent en $\sqrt3 = AG$ : $A$ et $G$ sont de part et d'autre du plan, et on retrouve $AL$ et $LG$ du paragraphe précédent ✓.
:::

:::theorem[Distance d'un point à une droite]
Soit $\mathcal D$ la droite passant par $A$ de vecteur directeur $\vec u$, et $M$ un point. Alors
$$
d(M, \mathcal D) = \frac{\lVert\overrightarrow{AM}\wedge\vec u\rVert}{\lVert\vec u\rVert}.
$$
:::

:::proof[Distance d'un point à une droite]
Soit $H$ le projeté orthogonal de $M$ sur $\mathcal D$.

| Étape | Justification |
|---|---|
| $\overrightarrow{AM} = \overrightarrow{AH} + \overrightarrow{HM}$ | relation de Chasles |
| $\overrightarrow{AM}\wedge\vec u = \overrightarrow{AH}\wedge\vec u + \overrightarrow{HM}\wedge\vec u$ | bilinéarité |
| $\overrightarrow{AH}\wedge\vec u = \vec 0$ | $\overrightarrow{AH}$ et $\vec u$ sont colinéaires |
| $\lVert\overrightarrow{AM}\wedge\vec u\rVert = HM\cdot\lVert\vec u\rVert\cdot\sin90^\circ$ | $\overrightarrow{HM}\perp\vec u$ |
| $HM = \dfrac{\lVert\overrightarrow{AM}\wedge\vec u\rVert}{\lVert\vec u\rVert}$ | on divise |
:::

:::example[Un sommet et une arête]
Distance de $E(0,0,1)$ à la droite $(BD)$, avec $B(1,0,0)$ et $D(0,1,0)$. On prend $B$ comme point de la droite et $\vec u = \overrightarrow{BD} = (-1, 1, 0)$, avec $\overrightarrow{BE} = (-1, 0, 1)$ :
$$
\overrightarrow{BE}\wedge\overrightarrow{BD} = (-1, -1, -1).
$$
Sa norme est $\sqrt3$, celle de $\vec u$ est $\sqrt2$, donc $d(E, (BD)) = \dfrac{\sqrt3}{\sqrt2} = \dfrac{\sqrt6}{2}$. C'est bien la hauteur du triangle équilatéral $EBD$ de côté $\sqrt2$ : $\sqrt2\cdot\dfrac{\sqrt3}{2} = \dfrac{\sqrt6}{2}$ ✓.
:::

## 5. Les sphères

:::definition[Sphère]
La sphère de centre $I(a, b, c)$ et de rayon $R > 0$ est l'ensemble des points $M$ tels que $IM = R$. Son équation est
$$
\begin{gathered}
(x - a)^2 + (y - b)^2\\
+ (z - c)^2 = R^2.
\end{gathered}
$$
:::

:::property[Reconnaître une sphère]
Soit $\Sigma$ l'ensemble des points vérifiant $x^2 + y^2 + z^2 + \alpha x + \beta y + \gamma z + \delta = 0$. On complète les carrés avec $x^2 + \alpha x = \left(x + \tfrac\alpha2\right)^2 - \tfrac{\alpha^2}{4}$, et de même pour $y$ et $z$. Posons
$$
k = \frac{\alpha^2 + \beta^2 + \gamma^2}{4} - \delta.
$$
- Si $k > 0$, $\Sigma$ est la sphère de centre $\left(-\tfrac\alpha2, -\tfrac\beta2, -\tfrac\gamma2\right)$ et de rayon $\sqrt k$.
- Si $k = 0$, $\Sigma$ est réduit au centre ; si $k < 0$, $\Sigma$ est vide.
:::

:::example[Une sphère, un point, un plan tangent]
Soit $\Sigma : x^2 + y^2 + z^2 - 2x + 4y - 2z - 3 = 0$. On regroupe et on complète les carrés. Le second membre est $3 + 1 + 4 + 1 = 9$ (la constante déplacée, puis les $1$, $4$ et $1$ ajoutés pour compléter) :
$$
\begin{gathered}
(x - 1)^2 + (y + 2)^2\\
+ (z - 1)^2 = 9.
\end{gathered}
$$
C'est la sphère $S$ de centre $I(1, -2, 1)$ et de rayon $3$. Le point $A(3, -1, 3)$ lui appartient : $2^2 + 1^2 + 2^2 = 9$ ✓.

Le plan tangent en $A$ est le plan passant par $A$ et de vecteur normal $\overrightarrow{IA} = (2, 1, 2)$ :
$$
\begin{gathered}
2(x - 3) + (y + 1)\\
+ 2(z - 3) = 0,
\end{gathered}
$$
soit $2x + y + 2z - 11 = 0$. Contrôle : $d(I, \text{plan}) = \dfrac{\lvert 2 - 2 + 2 - 11\rvert}{3} = 3 = R$ ✓.
:::

:::property[Plan tangent]
Soit $A$ un point de la sphère de centre $I$ et de rayon $R$. Le plan passant par $A$ et orthogonal à $(IA)$ ne rencontre la sphère qu'en $A$ : pour tout autre point $M$ de ce plan, $IM^2 = IA^2 + AM^2 > R^2$ (théorème de Pythagore). C'est le **plan tangent** en $A$.
:::

:::property[Sphère de diamètre AB]
Un point $M$ est sur la sphère de diamètre $[AB]$ si et seulement si $\overrightarrow{MA}\cdot\overrightarrow{MB} = 0$.

En effet, avec $I$ milieu de $[AB]$ : $\overrightarrow{MA}\cdot\overrightarrow{MB} = (\overrightarrow{MI} + \overrightarrow{IA})\cdot(\overrightarrow{MI} - \overrightarrow{IA}) = MI^2 - IA^2$, qui est nul si et seulement si $MI = IA = \dfrac{AB}{2}$.
:::

:::example[La sphère qui passe par les huit sommets du cube]
Prenons la sphère de diamètre $[AG]$ : avec $\overrightarrow{MA} = (-x, -y, -z)$ et $\overrightarrow{MG} = (1 - x, 1 - y, 1 - z)$,
$$
\begin{aligned}
\overrightarrow{MA}\cdot\overrightarrow{MG} &= (x^2 - x)\\
&\quad + (y^2 - y)\\
&\quad + (z^2 - z).
\end{aligned}
$$
La sphère a donc pour équation $x^2 + y^2 + z^2 - x - y - z = 0$, de centre $\Omega\left(\tfrac12, \tfrac12, \tfrac12\right)$ et de rayon $\dfrac{\sqrt3}{2}$. Les huit sommets du cube ont leurs coordonnées dans $\{0, 1\}$, et $x^2 - x = 0$ pour $x\in\{0, 1\}$ : tous sont sur la sphère ✓.
:::

:::theorem[Plan et sphère]
Soit $S$ une sphère de centre $I$ et de rayon $R$, $\mathcal P$ un plan, $h = d(I, \mathcal P)$ et $H$ le projeté orthogonal de $I$ sur $\mathcal P$. L'intersection de $S$ et $\mathcal P$ est
- **vide** si $h > R$ ;
- **réduite au point $H$** si $h = R$ (le plan est tangent) ;
- le **cercle de centre $H$ et de rayon $r = \sqrt{R^2 - h^2}$** si $h < R$.
:::

![Une sphère de centre I coupée par un plan : l'intersection est un cercle de centre H et de rayon r, et IHM est un triangle rectangle en H.](/lessons/images/m4-esp-sphere-plan.svg "Le triangle IHM est rectangle en H, d'hypoténuse R : r² = R² − h². Dans l'exemple traité plus bas, R = 5, h = 3 et r = 4.")

:::proof[Plan et sphère]
| Étape | Justification |
|---|---|
| Pour $M$ dans $\mathcal P$, le triangle $IHM$ est rectangle en $H$ (ou $M = H$) | $(IH)$ est orthogonale au plan et $\overrightarrow{HM}$ est dans le plan |
| $IM^2 = IH^2 + HM^2 = h^2 + HM^2$ | théorème de Pythagore |
| $M\in S$ si et seulement si $IM^2 = R^2$, c'est-à-dire $HM^2 = R^2 - h^2$ | définition de la sphère |
| Si $h > R$, $R^2 - h^2 < 0$ : aucun point | un carré n'est pas négatif |
| Si $h = R$, $HM = 0$ : seul $H$ convient | $HM^2 = 0$ |
| Si $h < R$, $HM = \sqrt{R^2 - h^2}$ : cercle de centre $H$ dans le plan $\mathcal P$ | définition du cercle |
:::

:::example[Un cercle de rayon 4]
Soit $S : x^2 + y^2 + z^2 = 25$ (centre $O$, $R = 5$) et $\mathcal P : 3x + 4y - 15 = 0$. Alors
$$
h = \frac{\lvert -15\rvert}{\sqrt{9 + 16}} = 3 < 5,
$$
donc l'intersection est un cercle de rayon $r = \sqrt{25 - 9} = 4$. Son centre $H$ est le projeté de $O$ sur $\mathcal P$ : $H = t\,(3, 4, 0)$ avec $3\cdot3t + 4\cdot4t = 15$, soit $t = \tfrac35$ et $H\left(\tfrac95, \tfrac{12}5, 0\right)$. Contrôle : le point $\left(\tfrac95, \tfrac{12}5, 4\right)$ est dans $\mathcal P$ et $\tfrac{81}{25} + \tfrac{144}{25} + 16 = 9 + 16 = 25$ ✓.
:::

:::example[La sphère du cube coupe le plan (EBD)]
La sphère circonscrite au cube a pour centre $\Omega\left(\tfrac12, \tfrac12, \tfrac12\right)$ et pour rayon $R = \tfrac{\sqrt3}{2}$. Le plan $(EBD)$ est $x + y + z - 1 = 0$. Alors
$$
h = \frac{\left\lvert\tfrac32 - 1\right\rvert}{\sqrt3} = \frac{\sqrt3}{6},
$$
puis $r^2 = \tfrac34 - \tfrac1{12} = \tfrac23$, donc $r = \dfrac{\sqrt6}{3}$. Le projeté de $\Omega$ sur le plan est sur la droite $(AG)$ de direction $(1, 1, 1)$ : c'est $L\left(\tfrac13, \tfrac13, \tfrac13\right)$. Le cercle d'intersection passe par $E$, $B$ et $D$ (sommets du cube, donc sur la sphère) : c'est le cercle circonscrit au triangle équilatéral $EBD$, de côté $\sqrt2$. Le calcul redonne le résultat de géométrie plane : rayon $=$ côté $\div\sqrt3 = \dfrac{\sqrt2}{\sqrt3} = \dfrac{\sqrt6}{3}$ ✓.
:::

## 6. La translation

:::definition[Translation]
Soit $\vec u$ un vecteur. La **translation de vecteur $\vec u$**, notée $t_{\vec u}$, associe à tout point $M$ l'unique point $M'$ tel que $\overrightarrow{MM'} = \vec u$.
:::

:::theorem[Propriétés de la translation]
- $t_{\vec u}$ est **bijective** et sa réciproque est $t_{-\vec u}$.
- **Caractérisation** : une application $f$ de l'espace dans lui-même est une translation si et seulement si, pour tous points $M$ et $N$ d'images $M'$ et $N'$, $\overrightarrow{M'N'} = \overrightarrow{MN}$.
- Une translation conserve la **distance**, le **produit scalaire**, le **milieu**, le **parallélisme** et l'**orthogonalité**.
- L'image d'une droite est une droite parallèle, celle d'un plan est un plan parallèle, celle d'une sphère est une sphère de même rayon, de centre l'image du centre.
:::

:::proof[Propriété caractéristique]
| Étape | Justification |
|---|---|
| Si $f = t_{\vec u}$ : $\overrightarrow{M'N'} = \overrightarrow{M'M} + \overrightarrow{MN} + \overrightarrow{NN'}$ | relation de Chasles |
| $\overrightarrow{M'N'} = -\vec u + \overrightarrow{MN} + \vec u = \overrightarrow{MN}$ | $\overrightarrow{MM'} = \overrightarrow{NN'} = \vec u$ |
| Réciproquement, on fixe $A$ et on note $A' = f(A)$. Pour tout $M$, $\overrightarrow{A'M'} = \overrightarrow{AM}$ | hypothèse appliquée à $A$ et $M$ |
| $\overrightarrow{MM'} = \overrightarrow{MA} + \overrightarrow{AA'} + \overrightarrow{A'M'} = \overrightarrow{MA} + \overrightarrow{AA'} + \overrightarrow{AM} = \overrightarrow{AA'}$ | relation de Chasles |
| $f$ est la translation de vecteur $\overrightarrow{AA'}$ | $\overrightarrow{MM'}$ ne dépend pas de $M$ |
:::

:::theorem[Expression analytique]
Dans un repère, soit $\vec u = (u_1, u_2, u_3)$. La translation $t_{\vec u}$ envoie $M(x, y, z)$ sur $M'(x', y', z')$ avec
$$
\begin{gathered}
x' = x + u_1,\\
y' = y + u_2,\\
z' = z + u_3.
\end{gathered}
$$
Réciproquement, ces trois égalités définissent la translation de vecteur $(u_1, u_2, u_3)$.
:::

:::theorem[Image d'un plan par une translation]
Soit $\mathcal P : ax + by + cz + d = 0$ et $\vec n = (a, b, c)$. L'image de $\mathcal P$ par $t_{\vec u}$ est le plan
$$
\begin{gathered}
ax + by + cz + d' = 0,\\
d' = d - \vec n\cdot\vec u.
\end{gathered}
$$
Elle a le même vecteur normal : c'est un plan **parallèle**. Elle est égale à $\mathcal P$ si et seulement si $\vec n\cdot\vec u = 0$, c'est-à-dire si $\vec u$ est parallèle à $\mathcal P$.
:::

:::proof[Image d'un plan par une translation]
| Étape | Justification |
|---|---|
| $M'(x', y', z')$ est l'image d'un point de $\mathcal P$ si et seulement si $M(x' - u_1, y' - u_2, z' - u_3)$ est dans $\mathcal P$ | $M = t_{-\vec u}(M')$ |
| $a(x' - u_1) + b(y' - u_2) + c(z' - u_3) + d = 0$ | équation de $\mathcal P$ |
| $ax' + by' + cz' + d - (au_1 + bu_2 + cu_3) = 0$ | on développe |
| Le terme $au_1 + bu_2 + cu_3$ est $\vec n\cdot\vec u$ | expression analytique du produit scalaire |
:::

:::example[Une sphère, son plan tangent et leurs images]
Reprenons la sphère $S$ de centre $I(1, -2, 1)$ et de rayon $3$, et son plan tangent $2x + y + 2z - 11 = 0$ en $A(3, -1, 3)$. Soit $\vec u = (1, 2, 0)$.
- La sphère image a pour centre $I'(2, 0, 1)$ et pour rayon $3$ : $(x - 2)^2 + y^2 + (z - 1)^2 = 9$.
- Le plan image a pour équation $2x + y + 2z + d' = 0$ avec $d' = -11 - (2 + 2 + 0) = -15$.
- $A' = (4, 1, 3)$ vérifie $8 + 1 + 6 - 15 = 0$ ✓, et $d(I', \text{plan image}) = \dfrac{\lvert 4 + 0 + 2 - 15\rvert}{3} = 3$ ✓.

Le plan image est tangent à la sphère image en $A'$ : une translation **conserve le contact**.
:::

## 7. L'homothétie

:::definition[Homothétie]
Soit $\Omega$ un point et $k$ un réel non nul. L'**homothétie de centre $\Omega$ et de rapport $k$**, notée $h(\Omega, k)$, associe à tout point $M$ l'unique point $M'$ tel que
$$
\overrightarrow{\Omega M'} = k\,\overrightarrow{\Omega M}.
$$
:::

![Deux sphères vues en coupe, la petite de centre I et de rayon R, la grande de centre I' et de rayon 2R, et deux droites tangentes issues du point Omega.](/lessons/images/m4-esp-homothetie.svg "L'homothétie de centre Ω et de rapport 2 envoie la sphère de centre I et de rayon R sur la sphère de centre I' et de rayon 2R. Les droites tangentes issues de Ω restent tangentes : le contact est conservé.")

:::theorem[Propriétés de l'homothétie]
Soit $h$ une homothétie de rapport $k$.
- $h$ est **bijective** et sa réciproque est l'homothétie de même centre et de rapport $\dfrac1k$.
- Pour tous points $M$ et $N$ d'images $M'$ et $N'$ : $\overrightarrow{M'N'} = k\,\overrightarrow{MN}$, donc $M'N' = \lvert k\rvert\,MN$. Réciproquement, une application vérifiant cette relation avec $k\neq1$ est une homothétie de rapport $k$ (admis).
- L'image d'une droite est une droite parallèle, celle d'un plan est un plan parallèle. L'homothétie conserve le parallélisme, l'orthogonalité et le milieu.
- L'image d'une sphère de centre $I$ et de rayon $R$ est la sphère de centre $h(I)$ et de rayon $\lvert k\rvert R$.
- Les aires sont multipliées par $k^2$ et les volumes par $\lvert k\rvert^3$.
- Dans un repère, si $\Omega(a, b, c)$ : $x' = kx + (1 - k)a$, $y' = ky + (1 - k)b$, $z' = kz + (1 - k)c$.
:::

:::proof[Distances et sphères]
| Étape | Justification |
|---|---|
| $\overrightarrow{M'N'} = \overrightarrow{\Omega N'} - \overrightarrow{\Omega M'}$ | relation de Chasles |
| $= k\,\overrightarrow{\Omega N} - k\,\overrightarrow{\Omega M} = k\,\overrightarrow{MN}$ | définition de l'homothétie, puis Chasles |
| Donc $M'N' = \lvert k\rvert\,MN$ | on prend les normes |
| Soit $S$ la sphère de centre $I$ et de rayon $R$, et $I' = h(I)$ | |
| $M\in S$ si et seulement si $IM = R$, donc si et seulement si $I'M' = \lvert k\rvert R$ | le résultat précédent avec $(I, M)$ |
| Toute $M'$ est l'image d'un point $M$ (bijectivité), donc l'image de $S$ est la sphère de centre $I'$ et de rayon $\lvert k\rvert R$ | |
:::

:::proof[Volumes et expression analytique]
| Étape | Justification |
|---|---|
| Un tétraèdre $ABCD$ a pour volume $\tfrac16\lvert\det(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD})\rvert$ | théorème du volume |
| Son image $A'B'C'D'$ a pour volume $\tfrac16\lvert\det(k\overrightarrow{AB}, k\overrightarrow{AC}, k\overrightarrow{AD})\rvert$ | $\overrightarrow{A'B'} = k\overrightarrow{AB}$, etc. |
| Ce volume vaut $\tfrac16\,\lvert k\rvert^3\lvert\det(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD})\rvert = \lvert k\rvert^3 V$ | le déterminant est linéaire en chaque vecteur |
| $\overrightarrow{\Omega M'} = k\,\overrightarrow{\Omega M}$ s'écrit $x' - a = k(x - a)$, et de même pour $y$ et $z$ | coordonnées |
| Donc $x' = kx + (1 - k)a$ | on isole $x'$ |
:::

:::example[Un petit tétraèdre dans un grand]
Dans un tétraèdre $ABCD$, soit $I$, $J$, $K$ les milieux de $[BA]$, $[BD]$, $[BC]$. L'homothétie de centre $B$ et de rapport $\tfrac12$ envoie $A, D, C$ sur $I, J, K$ et $B$ sur lui-même : le tétraèdre $IJKB$ est l'image de $ABCD$. Son volume vaut $\left(\tfrac12\right)^3 V = \tfrac V8$ : on a coupé le coin sans toucher à un seul calcul de hauteur.
:::

:::example[Expression analytique et image d'un plan]
Soit $\Omega(1, -1, 2)$ et $k = 3$. Alors $x' = 3x - 2$, $y' = 3y + 2$, $z' = 3z - 4$. Le point $M(2, 0, 1)$ a pour image $M'(4, 2, -1)$, et $\overrightarrow{\Omega M'} = (3, 3, -3) = 3\,\overrightarrow{\Omega M}$ ✓.

Image du plan $\mathcal P : x - y + 2z = 1$. On exprime $x, y, z$ en fonction de $x', y', z'$ : $x = \tfrac{x' + 2}{3}$, $y = \tfrac{y' - 2}{3}$, $z = \tfrac{z' + 4}{3}$. En reportant et en multipliant par $3$ :
$$
\begin{gathered}
(x' + 2) - (y' - 2)\\
+ 2(z' + 4) = 3,\\
x' - y' + 2z' + 9 = 0.
\end{gathered}
$$
C'est un plan de même vecteur normal $(1, -1, 2)$ : parallèle à $\mathcal P$ ✓. Contrôle : le point $(1, 0, 0)$ de $\mathcal P$ a pour image $(1, 2, -4)$, et $1 - 2 - 8 + 9 = 0$ ✓.
:::

:::example[Une sphère et son image]
Soit la sphère $S$ de centre $I(1, -2, 1)$ et de rayon $3$, et l'homothétie de centre $\Omega(-1, 1, 0)$ et de rapport $-2$. Ici $x' = -2x - 3$, $y' = -2y + 3$, $z' = -2z$. Le centre devient $I'(-5, 7, -2)$ et le rayon $\lvert -2\rvert\times3 = 6$ :
$$
\begin{gathered}
(x + 5)^2 + (y - 7)^2\\
+ (z + 2)^2 = 36.
\end{gathered}
$$
Un rapport négatif retourne la figure (« de l'autre côté » du centre) mais ne change pas la forme : le rayon utilise $\lvert k\rvert$.
:::

## 8. Bilan et méthodes pour les exercices

:::summary
| Objet ou outil | Formule |
|---|---|
| produit scalaire | $\vec u\cdot\vec v = xx' + yy' + zz'$ |
| produit vectoriel | $\vec u\wedge\vec v = (bc' - cb',\ ca' - ac',\ ab' - ba')$ |
| aire du triangle $ABC$ | $\tfrac12\lVert\overrightarrow{AB}\wedge\overrightarrow{AC}\rVert$ |
| volume du parallélépipède | $\lvert(\vec u\wedge\vec v)\cdot\vec w\rvert = \lvert\det(\vec u, \vec v, \vec w)\rvert$ |
| droite $(A, \vec u)$ | $\overrightarrow{AM} = t\,\vec u$ |
| plan de normale $\vec n$ | $ax + by + cz + d = 0$, $\vec n = (a, b, c)$ |
| distance point-plan | $\dfrac{\lvert ax_0 + by_0 + cz_0 + d\rvert}{\sqrt{a^2 + b^2 + c^2}}$ |
| distance point-droite | $\dfrac{\lVert\overrightarrow{AM}\wedge\vec u\rVert}{\lVert\vec u\rVert}$ |
| sphère $(I, R)$ | $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ |
| plan $\cap$ sphère | cercle de rayon $\sqrt{R^2 - h^2}$ si $h < R$ |
| translation $t_{\vec u}$ | $x' = x + u_1$, $y' = y + u_2$, $z' = z + u_3$ |
| homothétie $h(\Omega, k)$ | $x' = kx + (1 - k)a$, etc. ; longueurs $\times\lvert k\rvert$, volumes $\times\lvert k\rvert^3$ |
:::

:::method[Quel outil pour quelle question ?]
- **Montrer qu'une droite est perpendiculaire à un plan** : son vecteur directeur est orthogonal à deux vecteurs non colinéaires du plan (deux produits scalaires nuls), ou colinéaire à un vecteur normal.
- **Équation d'un plan par trois points** : $\overrightarrow{AB}\wedge\overrightarrow{AC}$ comme vecteur normal, puis $d$ avec $A$, puis contrôle avec $B$ et $C$.
- **Intersection de deux plans** : direction $\vec n\wedge\vec n'$ et un point commun obtenu en fixant une coordonnée.
- **Droite et plan** : remplacer $x, y, z$ de la droite dans l'équation du plan et résoudre en $t$.
- **Distance** : point-plan avec la formule ; point-droite avec le produit vectoriel.
- **Sphère** : compléter les carrés ; pour un plan, calculer $h$, comparer à $R$, puis $r = \sqrt{R^2 - h^2}$.
- **Aire, volume, coplanarité** : produit vectoriel, produit mixte, déterminant.
- **Transformations** : écrire l'expression analytique, ou utiliser « même vecteur normal, autre constante $d$ » pour l'image d'un plan.
:::

:::tic[Un produit vectoriel en trois cellules]
On place $\vec u = (1, 2, 3)$ en `A2:C2` et $\vec v = (-1, 0, 2)$ en `A3:C3`, puis on calcule $\vec u\wedge\vec v$ ligne 5.

| cellule | formule | rôle |
|---|---|---|
| `A5` | `=B2*C3-C2*B3` | première composante |
| `B5` | `=C2*A3-A2*C3` | deuxième composante |
| `C5` | `=A2*B3-B2*A3` | troisième composante |
| `D5` | `=SOMMEPROD(A2:C2;A5:C5)` | $\vec u\cdot(\vec u\wedge\vec v)$, doit valoir $0$ |
| `E5` | `=SOMMEPROD(A3:C3;A5:C5)` | $\vec v\cdot(\vec u\wedge\vec v)$, doit valoir $0$ |
| `F5` | `=RACINE(SOMMEPROD(A5:C5;A5:C5))` | aire du parallélogramme |

Le tableur affiche $(4, -5, 2)$, deux zéros et $6{,}708$, soit $3\sqrt5$. Change $\vec u$ et $\vec v$ : les colonnes `D` et `E` restent à $0$ quoi qu'il arrive. Prends $\vec v = 2\vec u$ : le produit devient le vecteur nul, et l'aire est $0$.
:::

:::history
Descartes introduit les coordonnées en 1637, ce qui permet de traiter la géométrie de l'espace par le calcul. Mais les deux produits du chapitre naissent plus tard, d'une quête de William Rowan Hamilton : multiplier des triplets de nombres comme on multiplie des nombres complexes. Le 16 octobre 1843, en longeant le Royal Canal à Dublin, il comprend qu'il lui faut une quatrième dimension et grave sur le pont de Brougham la formule $i^2 = j^2 = k^2 = ijk = -1$ : ce sont les **quaternions**. Le produit de deux quaternions « purs » contient à la fois $-\,\vec u\cdot\vec v$ et $\vec u\wedge\vec v$. Vers 1880, Josiah Willard Gibbs (Yale) et Oliver Heaviside (Angleterre) jugent les quaternions trop encombrants, en extraient les deux produits et créent l'**analyse vectorielle** que tu utilises aujourd'hui.
:::

## Vérifie-toi

::::check[Aire et plan]
Soit $A(1, 2, 0)$, $B(3, 2, 1)$ et $C(1, 4, 3)$. Calculer $\overrightarrow{AB}\wedge\overrightarrow{AC}$, l'aire du triangle $ABC$, puis une équation du plan $(ABC)$.

:::answer
$\overrightarrow{AB} = (2, 0, 1)$ et $\overrightarrow{AC} = (0, 2, 3)$. Composantes du produit vectoriel : $0\cdot3 - 1\cdot2 = -2$, puis $1\cdot0 - 2\cdot3 = -6$, puis $2\cdot2 - 0\cdot0 = 4$ :
$$
\begin{gathered}
\overrightarrow{AB}\wedge\overrightarrow{AC}\\
= (-2, -6, 4).
\end{gathered}
$$
Sa norme au carré est $4 + 36 + 16 = 56$, donc l'aire vaut $\tfrac12\sqrt{56} = \sqrt{14}$. Le vecteur $(1, 3, -2) = -\tfrac12(-2, -6, 4)$ est normal au plan : $x + 3y - 2z + d = 0$, et $A$ donne $1 + 6 + d = 0$, donc $d = -7$ :
$$
x + 3y - 2z - 7 = 0.
$$
Contrôle : $B$ donne $3 + 6 - 2 - 7 = 0$ ✓ et $C$ donne $1 + 12 - 6 - 7 = 0$ ✓.
:::
::::

::::check[Deux distances]
1. Distance du point $M(1, 2, 3)$ au plan $2x - 2y + z + 3 = 0$.
2. Distance du point $M(1, 1, 2)$ à la droite passant par $A(0, 1, 0)$ de vecteur directeur $\vec u = (1, 2, 2)$.

:::answer
1. Le numérateur est $\lvert 2 - 4 + 3 + 3\rvert = 4$ et le dénominateur $\sqrt{4 + 4 + 1} = 3$ : la distance vaut $\dfrac43$.
2. $\overrightarrow{AM} = (1, 0, 2)$. Composantes de $\overrightarrow{AM}\wedge\vec u$ : $0\cdot2 - 2\cdot2 = -4$, puis $2\cdot1 - 1\cdot2 = 0$, puis $1\cdot2 - 0\cdot1 = 2$ :
$$
\overrightarrow{AM}\wedge\vec u = (-4, 0, 2).
$$
La norme est $\sqrt{20} = 2\sqrt5$ et $\lVert\vec u\rVert = 3$ : la distance vaut $\dfrac{2\sqrt5}{3}$.
:::
::::

::::check[Un plan coupe une sphère]
Montrer que $x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ est une sphère dont on donnera le centre et le rayon. Déterminer son intersection avec le plan $x = 3$.

:::answer
On complète : $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 1 + 4 + 9 - 5 = 9$. C'est la sphère de centre $I(1, -2, 3)$ et de rayon $3$.

Le plan $x = 3$ est de vecteur normal $(1, 0, 0)$ ; sa distance à $I$ est $h = \lvert 1 - 3\rvert = 2 < 3$. L'intersection est un cercle de rayon $r = \sqrt{9 - 4} = \sqrt5$, de centre le projeté de $I$ sur le plan, soit $H(3, -2, 3)$.
:::
::::

::::check[Image d'un plan par une translation]
Déterminer l'image du plan $\mathcal P : x + 2y - z - 3 = 0$ par la translation de vecteur $(1, 1, 1)$.

:::answer
Avec $\vec n = (1, 2, -1)$ et $\vec u = (1, 1, 1)$, $\vec n\cdot\vec u = 1 + 2 - 1 = 2$, donc $d' = d - \vec n\cdot\vec u = -3 - 2 = -5$. L'image est le plan
$$
x + 2y - z - 5 = 0.
$$
Contrôle : $A(3, 0, 0)$ est dans $\mathcal P$, son image est $A'(4, 1, 1)$ et $4 + 2 - 1 - 5 = 0$ ✓.
:::
::::

::::check[Une sphère et son image par une homothétie]
Soit la sphère $S : x^2 + y^2 + z^2 = 4$ et l'homothétie $h$ de centre $\Omega(3, 0, 0)$ et de rapport $-\tfrac12$. Donner l'expression analytique de $h$, puis l'équation de $h(S)$.

:::answer
Avec $k = -\tfrac12$ et $\Omega(3, 0, 0)$ : $x' = -\tfrac12\,x + \tfrac32\cdot3 = -\tfrac x2 + \tfrac92$, $y' = -\tfrac y2$, $z' = -\tfrac z2$. Le centre $O(0, 0, 0)$ de $S$ a pour image $I'\left(\tfrac92, 0, 0\right)$ et le rayon vaut $\tfrac12\times2 = 1$ :
$$
\left(x - \tfrac92\right)^2 + y^2 + z^2 = 1.
$$
Contrôle : $(2, 0, 0)$ est sur $S$, son image est $\left(-1 + \tfrac92, 0, 0\right) = \left(\tfrac72, 0, 0\right)$ et $\left(\tfrac72 - \tfrac92\right)^2 = 1$ ✓.
:::
::::

::::check[Vrai ou faux ?]
Dire si chaque affirmation est vraie ou fausse.
1. Une homothétie de rapport $-2$ multiplie les volumes par $-8$.
2. L'image d'un cube d'arête $a$ par une homothétie de rapport $a$ a pour volume $a^6$.

:::answer
1. **Faux.** Un volume est positif : il est multiplié par $\lvert k\rvert^3 = 8$. Le signe de $k$ retourne la figure mais ne change pas le volume.
2. **Vrai** (pour $a > 0$). L'arête devient $a\cdot a = a^2$, donc le volume est $(a^2)^3 = a^6$. On retrouve aussi $\lvert k\rvert^3\cdot a^3 = a^3\cdot a^3 = a^6$ ✓.
:::
::::

::::challenge
**Pythagore dans l'espace.** Soit $OABC$ un tétraèdre « trirectangle » : $O(0, 0, 0)$, $A(a, 0, 0)$, $B(0, b, 0)$, $C(0, 0, c)$ avec $a, b, c > 0$.
1. Montrer que le plan $(ABC)$ a pour équation $\dfrac xa + \dfrac yb + \dfrac zc = 1$.
2. Soit $h$ la distance de $O$ à $(ABC)$. Montrer que $\dfrac1{h^2} = \dfrac1{a^2} + \dfrac1{b^2} + \dfrac1{c^2}$.
3. Calculer l'aire $S$ du triangle $ABC$ et montrer que $S^2$ est la somme des carrés des aires des trois faces rectangles.

:::answer
1. Les coordonnées de $A$, $B$, $C$ vérifient l'équation (une seule fraction vaut $1$, les autres $0$), et c'est bien l'équation d'un plan. Elle équivaut à $bc\,x + ac\,y + ab\,z - abc = 0$.

2. La formule de distance, avec le vecteur normal $(bc, ac, ab)$, donne $h$ :
$$
\frac{abc}{\sqrt{b^2c^2 + a^2c^2 + a^2b^2}}.
$$
Donc $\dfrac1{h^2} = \dfrac{b^2c^2 + a^2c^2 + a^2b^2}{a^2b^2c^2} = \dfrac1{a^2} + \dfrac1{b^2} + \dfrac1{c^2}$. Contrôle avec $a = 1$, $b = 2$, $c = 3$ : $h = \tfrac67$ et $\tfrac{49}{36} = 1 + \tfrac14 + \tfrac19$ ✓.

3. $\overrightarrow{AB} = (-a, b, 0)$ et $\overrightarrow{AC} = (-a, 0, c)$, donc $\overrightarrow{AB}\wedge\overrightarrow{AC} = (bc, ac, ab)$ et
$$
\begin{gathered}
S^2 = \left(\tfrac{bc}2\right)^2 + \left(\tfrac{ac}2\right)^2\\
+ \left(\tfrac{ab}2\right)^2.
\end{gathered}
$$
Les trois termes sont les carrés des aires des faces rectangles $OBC$, $OAC$ et $OAB$. C'est le théorème de Pythagore, une dimension plus haut (théorème de de Gua).
:::
::::
