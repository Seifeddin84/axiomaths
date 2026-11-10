---
title: "Isométries du plan : conservation, composition, points fixes et symétries"
slug: "lycee-4eme-maths-isometries-du-plan"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Isométries du plan"
summary: "Les transformations qui conservent les distances : ce qu'elles conservent (produit scalaire, angles, milieux, cercles), comment deux symétries se composent (translation ou rotation), la classification par les points fixes (identité, symétrie, rotation, translation, symétrie glissante) et la décomposition en au plus trois symétries orthogonales."
prerequisites: ["Produit scalaire dans le plan", "Translations et rotations", "Nombres complexes"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Isométries du plan »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Un animateur de jeu vidéo déplace un personnage sur l'écran sans le déformer. Un menuisier découpe des pièces identiques, qu'il retourne parfois pour économiser le bois. Un architecte répète un motif le long d'une frise. Tous utilisent des **déplacements rigides** : la figure est glissée, tournée ou retournée, mais jamais étirée ni écrasée.

Tu connais déjà quatre de ces mouvements : la translation, la rotation, la symétrie axiale et la symétrie centrale. Trois questions se posent :

1. Quelle propriété commune les caractérise ? (les distances sont conservées)
2. Que donne l'enchaînement de deux ou trois d'entre eux ?
3. En existe-t-il d'autres ?

Réponse en avance : **il n'y en a que cinq types** (l'identité, les symétries orthogonales, les rotations, les translations et un cinquième que tu n'as jamais vu, la *symétrie glissante*), et **tous se fabriquent avec au plus trois symétries orthogonales**. Les miroirs sont les briques de base.

:::intuition
Pose une feuille de calque sur un dessin et reproduis-le. Tu peux la **glisser**, la **tourner**, la **retourner**. Tu ne peux pas l'étirer ni la froisser : c'est exactement ce que veut dire « conserver les distances ». Et tout mouvement de calque, aussi compliqué soit-il, revient à une suite de retournements autour de bonnes droites.
:::

## 1. Qu'est-ce qu'une isométrie ?

:::definition[Isométrie]
Une **isométrie** du plan est une application $f$ du plan dans lui-même qui **conserve les distances** : pour tous points $M$ et $N$ d'images $M' = f(M)$ et $N' = f(N)$,
$$
M'N' = MN.
$$
:::

L'identité, les translations, les rotations, les symétries orthogonales et les symétries centrales sont des isométries. Deux points distincts ont des images distinctes : si $M \neq N$, alors $M'N' = MN > 0$.

:::example[Une symétrie orthogonale conserve les distances]
Dans un repère orthonormé où l'axe $\Delta$ est l'axe des abscisses, la symétrie envoie $M(x, y)$ sur $M'(x, -y)$. Pour $N(x_1, y_1)$ d'image $N'(x_1, -y_1)$ :
$$
M'N'^2 = (x_1 - x)^2 + (-y_1 + y)^2 = (x_1 - x)^2 + (y_1 - y)^2 = MN^2.
$$
Pour un axe quelconque, on choisit simplement un repère orthonormé dont l'axe est un axe de coordonnées.
:::

:::method[Montrer qu'une application est une isométrie]
1. **Avec des coordonnées** dans un repère orthonormé : comparer $M'N'^2$ et $MN^2$.
2. **Avec les nombres complexes** : $z \longmapsto z'$ est une isométrie si $\lvert z_2' - z_1'\rvert = \lvert z_2 - z_1\rvert$ pour tous $z_1$, $z_2$.
3. **Par composition** d'isométries déjà connues (voir le paragraphe 3).

**Exemple.** $f(x, y) = (-y + 1,\ x + 2)$. Pour $M(x, y)$ et $N(x_1, y_1)$ :
$$
M'N'^2 = (-y_1 + y)^2 + (x_1 - x)^2 = MN^2,
$$
donc $f$ est une isométrie. Les points fixes vérifient $x = -y + 1$ et $y = x + 2$, donc $x = -(x + 2) + 1$, soit $x = -\dfrac12$ et $y = \dfrac32$ : **un seul** point fixe $I\left(-\dfrac12, \dfrac32\right)$. On verra au paragraphe 4 qu'une isométrie qui fixe un seul point est une rotation. Contrôle avec $M(0, 0)$, d'image $M'(1, 2)$ : $IM^2 = \dfrac14 + \dfrac94 = \dfrac52$, $IM'^2 = \dfrac94 + \dfrac14 = \dfrac52$ ✓, et $\overrightarrow{IM}\cdot\overrightarrow{IM'} = \dfrac12\times\dfrac32 + \left(-\dfrac32\right)\times\dfrac12 = 0$ : l'angle est droit, c'est la rotation de centre $I$ et d'angle $\dfrac\pi2$.
:::

## 2. Ce qu'une isométrie conserve

:::intuition
Une isométrie conserve les distances. Or presque toute la géométrie plane se dit avec des distances : un angle, un milieu, un cercle, l'alignement, le parallélisme. Il suffit donc de trouver **l'outil qui traduit tout cela en distances**. C'est le produit scalaire, parce que la formule de polarisation écrit un produit scalaire comme une combinaison de carrés de distances.
:::

:::theorem[Une isométrie conserve le produit scalaire]
Une application $f$ du plan dans lui-même est une isométrie **si et seulement si**, pour tous points $M$, $N$, $P$, $Q$ d'images $M'$, $N'$, $P'$, $Q'$,
$$
\overrightarrow{MN}\cdot\overrightarrow{PQ} = \overrightarrow{M'N'}\cdot\overrightarrow{P'Q'}.
$$
:::

:::proof[Une isométrie conserve le produit scalaire]
| Étape | Justification |
|---|---|
| Pour tous points $M$, $N$, $P$, $Q$ : $\overrightarrow{MN}\cdot\overrightarrow{PQ} = \dfrac{MQ^2 + NP^2 - MP^2 - NQ^2}{2}$ | développement avec un point origine $O$ (détail ci-dessous) |
| Si $f$ est une isométrie, les quatre distances $MQ$, $NP$, $MP$, $NQ$ sont égales à celles de leurs images | définition |
| donc $\overrightarrow{M'N'}\cdot\overrightarrow{P'Q'} = \dfrac{M'Q'^2 + N'P'^2 - M'P'^2 - N'Q'^2}{2} = \overrightarrow{MN}\cdot\overrightarrow{PQ}$ | même formule dans l'image |
| Réciproquement, si $f$ conserve le produit scalaire, on prend $P = M$ et $Q = N$ | hypothèse |
| alors $\overrightarrow{MN}\cdot\overrightarrow{MN} = \overrightarrow{M'N'}\cdot\overrightarrow{M'N'}$, soit $MN^2 = M'N'^2$ | $\vec u\cdot\vec u = \lVert\vec u\rVert^2$ |
:::

Le développement : posons $\vec m = \overrightarrow{OM}$, $\vec n = \overrightarrow{ON}$, $\vec p = \overrightarrow{OP}$ et $\vec q = \overrightarrow{OQ}$. Comme $MQ^2 = \lVert\vec q - \vec m\rVert^2$ et de même pour les trois autres carrés, les termes $\lVert\vec m\rVert^2$, $\lVert\vec n\rVert^2$, $\lVert\vec p\rVert^2$ et $\lVert\vec q\rVert^2$ s'annulent deux à deux, et il reste
$$
\begin{aligned}
MQ^2 + NP^2 - MP^2 - NQ^2 &= 2\left(\vec n\cdot\vec q - \vec n\cdot\vec p - \vec m\cdot\vec q + \vec m\cdot\vec p\right)\\
&= 2\,(\vec n - \vec m)\cdot(\vec q - \vec p) = 2\,\overrightarrow{MN}\cdot\overrightarrow{PQ}.
\end{aligned}
$$

Contrôle de la formule avec $M(0, 0)$, $N(2, 1)$, $P(1, 1)$, $Q(3, 3)$ : $\overrightarrow{MN}\cdot\overrightarrow{PQ} = (2, 1)\cdot(2, 2) = 6$ et $\dfrac{MQ^2 + NP^2 - MP^2 - NQ^2}{2} = \dfrac{18 + 1 - 2 - 5}{2} = 6$ ✓.

:::property[Conséquences immédiates]
Soit $f$ une isométrie.
- Elle conserve les **angles géométriques** : $\widehat{B'A'C'} = \widehat{BAC}$ (le cosinus est $\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\times AC}$, et l'angle est dans $[0\,;\pi]$).
- Elle envoie trois points non alignés sur trois points non alignés (l'angle n'est ni $0$ ni $\pi$).
- Elle conserve l'**orthogonalité** : $\overrightarrow{MN}\cdot\overrightarrow{PQ} = 0$ reste vrai pour les images.
:::

:::warning
**Les angles géométriques sont conservés, pas toujours les angles orientés.** Une symétrie orthogonale renverse le sens de rotation : le triangle $ABC$ tourné dans le sens direct a pour image un triangle $A'B'C'$ tourné dans le sens indirect (regarde les petites flèches de la figure du paragraphe suivant). Cette distinction fera l'objet du chapitre « Déplacements – Antidéplacements ».
:::

On a mieux : une isométrie conserve toute **relation linéaire** entre vecteurs.

:::theorem[Conservation des combinaisons linéaires]
Soit $f$ une isométrie. Si $\overrightarrow{MN} = a\,\overrightarrow{PQ} + b\,\overrightarrow{RS}$ avec $a$ et $b$ réels, alors $\overrightarrow{M'N'} = a\,\overrightarrow{P'Q'} + b\,\overrightarrow{R'S'}$.
:::

:::proof[Conservation des combinaisons linéaires]
| Étape | Justification |
|---|---|
| Posons $\vec w = \overrightarrow{MN} - a\overrightarrow{PQ} - b\overrightarrow{RS}$ et $\vec w' = \overrightarrow{M'N'} - a\overrightarrow{P'Q'} - b\overrightarrow{R'S'}$ | on veut montrer que $\vec w' = \vec 0$ |
| $\lVert\vec w\rVert^2$ et $\lVert\vec w'\rVert^2$ se développent avec **les mêmes** produits scalaires de $\overrightarrow{MN}$, $\overrightarrow{PQ}$, $\overrightarrow{RS}$ entre eux, ou de leurs images | développement de $\lVert \vec x - a\vec y - b\vec z\rVert^2$ |
| or tous ces produits scalaires sont conservés | théorème précédent |
| donc $\lVert\vec w'\rVert^2 = \lVert\vec w\rVert^2 = 0$ | $\vec w = \vec 0$ par hypothèse |
| d'où $\vec w' = \vec 0$ | une norme nulle |
:::

D'où le tableau de ce que devient une configuration :

| Objet | Son image par une isométrie |
|---|---|
| milieu, barycentre de deux points | le milieu, le barycentre des images (avec les mêmes poids) |
| droite, segment | une droite, un segment de même longueur |
| deux droites parallèles, perpendiculaires | deux droites parallèles, perpendiculaires |
| parallélogramme | un parallélogramme |
| cercle de centre $\Omega$ et de rayon $r$ | le cercle de centre $\Omega'$ et de rayon $r$ |
| tangente à un cercle en $M$ | la tangente au cercle image en $M'$ |

Par exemple, $I$ milieu de $[AB]$ s'écrit $\overrightarrow{AI} = \dfrac12\overrightarrow{AB}$, donc $\overrightarrow{A'I'} = \dfrac12\overrightarrow{A'B'}$ : $I'$ est le milieu de $[A'B']$. Et $M$ est sur le cercle $\mathcal C(\Omega, r)$ si et seulement si $\Omega M = r$, c'est-à-dire $\Omega'M' = r$.

### Bijection et réciproque

:::theorem[Une isométrie est une bijection]
Toute isométrie $f$ est une **bijection** du plan sur lui-même, et son application réciproque $f^{-1}$ est encore une isométrie.
:::

:::proof[Une isométrie est une bijection]
| Étape | Justification |
|---|---|
| $f$ est injective : $M \neq N$ donne $M'N' = MN > 0$ | définition |
| Soit $A, B, C$ non alignés ; leurs images $A', B', C'$ le sont aussi | conséquence ci-dessus |
| Tout point $N$ s'écrit $\overrightarrow{A'N} = x\overrightarrow{A'B'} + y\overrightarrow{A'C'}$ | $(A', A'B', A'C')$ est un repère |
| Soit $M$ défini par $\overrightarrow{AM} = x\overrightarrow{AB} + y\overrightarrow{AC}$ | $(A, AB, AC)$ est un repère |
| alors $\overrightarrow{A'M'} = x\overrightarrow{A'B'} + y\overrightarrow{A'C'}$, donc $M' = N$ : tout point a un antécédent | conservation des combinaisons linéaires |
| Pour $f^{-1}$ : si $N = f(M)$ et $N_1 = f(M_1)$, alors $f^{-1}(N)f^{-1}(N_1) = MM_1 = NN_1$ | $f$ est une isométrie |
:::

| Isométrie $f$ | Sa réciproque $f^{-1}$ |
|---|---|
| symétrie orthogonale d'axe $\Delta$ | elle-même |
| symétrie centrale de centre $I$ | elle-même |
| translation de vecteur $\vec u$ | translation de vecteur $-\vec u$ |
| rotation de centre $I$ et d'angle $\theta$ | rotation de centre $I$ et d'angle $-\theta$ |

## 3. Composer des isométries

:::theorem[Composée]
La composée de deux isométries est une isométrie.
:::

La preuve tient en une ligne : si $f$ et $g$ sont des isométries, la distance entre $g\bigl(f(M)\bigr)$ et $g\bigl(f(N)\bigr)$ est celle entre $f(M)$ et $f(N)$ (car $g$ conserve les distances), qui est $MN$ (car $f$ aussi).

:::property[Réciproque d'une composée]
Pour deux isométries $f$ et $g$ : $f\circ g = \mathrm{Id} \iff g = f^{-1}$, et
$$
(f\circ g)^{-1} = g^{-1}\circ f^{-1}.
$$
:::

C'est la règle des chaussettes et des chaussures : pour annuler « mettre les chaussettes, puis les chaussures », on enlève d'abord les chaussures. Et l'ordre compte en général : avec la translation $t$ de vecteur $(0, 1)$ et la symétrie $S$ d'axe $(Ox)$, le point $O(0, 0)$ est envoyé sur $S(t(O)) = (0, -1)$ par $S\circ t$, mais sur $t(S(O)) = (0, 1)$ par $t\circ S$.

### Deux miroirs

C'est le résultat central du chapitre : **deux symétries orthogonales font soit une translation, soit une rotation**.

:::theorem[Composée de deux symétries orthogonales]
Soient $\Delta$ et $\Delta'$ deux droites, $S_\Delta$ et $S_{\Delta'}$ les symétries orthogonales d'axes $\Delta$ et $\Delta'$.
1. **Axes parallèles.** $S_{\Delta'}\circ S_\Delta$ est la translation de vecteur $2\overrightarrow{IJ}$, où $I$ est un point de $\Delta$ et $J$ son projeté orthogonal sur $\Delta'$.
2. **Axes sécants en $I$**, de vecteurs directeurs $\vec u$ et $\vec u'$. $S_{\Delta'}\circ S_\Delta$ est la rotation de centre $I$ et d'angle $2(\vec u, \vec u')$.
3. **Axes perpendiculaires en $I$.** $S_{\Delta'}\circ S_\Delta$ est la symétrie centrale de centre $I$ (c'est le cas $2(\vec u,\vec u') = \pi$), et $S_{\Delta'}\circ S_\Delta = S_\Delta\circ S_{\Delta'}$.
:::

![Deux symétries orthogonales : translation ou rotation](/lessons/images/m4-iso-miroirs.svg "À gauche, deux axes parallèles Δ et Δ' à la distance d : la figure F est envoyée sur F₁ par S_Δ puis sur F₂ par S_Δ', et F₂ se déduit de F par la translation de vecteur 2·IJ, de longueur 2d. À droite, deux axes sécants en I faisant l'angle θ : M est envoyé sur M₁ puis sur M₂, et M₂ se déduit de M par la rotation de centre I et d'angle 2θ.")

:::proof[Axes parallèles : une translation]
| Étape | Justification |
|---|---|
| On choisit un repère orthonormé d'origine $I$ où $\Delta$ est l'axe des ordonnées ; alors $\Delta'$ a pour équation $x = d$ et $J(d, 0)$ | $\Delta' \parallel \Delta$, $J$ projeté orthogonal de $I$ sur $\Delta'$ |
| Pour $M(x, y)$ : $S_\Delta(M) = M_1(-x, y)$ | symétrie par rapport à l'axe des ordonnées |
| $M_2 = S_{\Delta'}(M_1)$ a la même ordonnée $y$, et son abscisse $x_2$ vérifie $\dfrac{-x + x_2}{2} = d$ | le milieu de $[M_1M_2]$ est sur $\Delta'$, et $(M_1M_2)$ est horizontale |
| donc $x_2 = x + 2d$ et $\overrightarrow{MM_2} = (2d, 0) = 2\overrightarrow{IJ}$ | $\overrightarrow{IJ} = (d, 0)$ |
| le vecteur $\overrightarrow{MM_2}$ ne dépend pas de $M$ : c'est une translation | définition |
:::

:::proof[Axes sécants : une rotation]
| Étape | Justification |
|---|---|
| On place l'origine en $I$, et on note $\beta$ et $\beta'$ des mesures de $(\vec i, \vec u)$ et $(\vec i, \vec u')$ | repère orthonormé direct $(I, \vec i, \vec j)$ |
| $S_\Delta(z) = e^{2i\beta}\,\bar z$ | le point d'argument $\gamma$ a pour symétrique le point de même module d'argument $2\beta - \gamma$ |
| de même $S_{\Delta'}(z) = e^{2i\beta'}\,\bar z$ | même raisonnement |
| $S_{\Delta'}\bigl(S_\Delta(z)\bigr) = e^{2i\beta'}\,\overline{e^{2i\beta}\bar z} = e^{2i\beta'}\,e^{-2i\beta}\,z$ | $\overline{e^{i\theta}} = e^{-i\theta}$ et $\bar{\bar z} = z$ |
| $= e^{2i(\beta' - \beta)}\,z$ | on regroupe |
| c'est la rotation de centre $I$ et d'angle $2(\beta' - \beta) \equiv 2(\vec u, \vec u')$ | $z \longmapsto e^{i\theta}z$ est la rotation de centre $O$ et d'angle $\theta$ |
:::

Le point 3 est le cas $\beta' - \beta = \dfrac\pi2$, donc $e^{i\pi} = -1$ : $z \longmapsto -z$, la symétrie centrale.

:::example[Trois compositions]
- **Parallèles.** $\Delta : x = 1$ et $\Delta' : x = 4$. Alors $I(1, 0)$, $J(4, 0)$ et $2\overrightarrow{IJ} = (6, 0)$. Contrôle avec $M(0, 5)$ : $S_\Delta(M) = (2, 5)$, puis $S_{\Delta'}(2, 5) = (6, 5)$ ✓, soit $M + (6, 0)$. Dans l'autre ordre, $S_\Delta\circ S_{\Delta'}$ est la translation de vecteur $(-6, 0)$ : c'est la réciproque.
- **Sécantes.** $\Delta = (Ox)$ et $\Delta' : y = x$, avec $2(\vec u,\vec u') = 2\times\dfrac\pi4 = \dfrac\pi2$. Donc $S_{\Delta'}\circ S_\Delta$ est la rotation de centre $O$ et d'angle $\dfrac\pi2$. Contrôle : $(3, 1) \longmapsto (3, -1) \longmapsto (-1, 3)$ ✓, c'est bien $(3,1)$ tourné d'un quart de tour.
- **Perpendiculaires.** Dans un rectangle $ABCD$, les droites $(DC)$ et $(DA)$ sont perpendiculaires en $D$, donc $S_{(DC)}\circ S_{(DA)}$ est la symétrie centrale de centre $D$.
:::

:::method[Composer deux symétries orthogonales]
1. **Les axes sont-ils parallèles ?** Alors c'est une translation, de vecteur orthogonal aux axes, de longueur **le double de la distance entre les axes**, dirigé du **premier** axe vers le **second**.
2. **Sont-ils sécants en $I$ ?** Alors c'est une rotation de centre $I$ et d'angle **le double** de l'angle entre les deux droites, mesuré **du premier axe vers le second**.
3. **L'ordre compte** : inverser l'ordre donne l'isométrie réciproque (translation opposée, rotation d'angle opposé).
4. **Contrôler** avec un point : l'image doit être à la bonne distance, du bon côté.
:::

## 4. Les points fixes classent les isométries

:::intuition
Imagine que tu **punaises** des points d'une feuille de calque sur la table. Avec **trois** punaises non alignées, la feuille ne peut plus bouger : c'est l'identité. Avec **deux**, il reste un seul mouvement possible : la retourner autour de la droite qui les joint. Avec **une**, tu peux encore la faire pivoter autour de la punaise. Et **sans** punaise, la feuille peut glisser, ou glisser en se retournant. Plus on punaise de points, moins il reste de liberté, et c'est tout le plan des isométries que cette échelle classe.
:::

:::theorem[Quatre résultats sur les points fixes]
Soit $f$ une isométrie.
1. **Médiatrice.** Si $A$ n'est pas fixe, d'image $A'$, tout point fixe de $f$ est sur la médiatrice de $[AA']$.
2. **Trois points.** Si $f$ fixe trois points non alignés, alors $f = \mathrm{Id}$.
3. **Deux points.** Si $f$ fixe deux points distincts $A$ et $B$, alors elle fixe tous les points de la droite $(AB)$, et si de plus $f \neq \mathrm{Id}$, alors $f = S_{(AB)}$.
4. **Un seul point.** Si $f$ fixe un unique point $I$, alors $f$ est une rotation de centre $I$, d'angle non nul.
:::

:::proof[Résultats 1, 2 et 3]
| Étape | Justification |
|---|---|
| **(1)** Si $M$ est fixe : $MA' = f(M)f(A) = MA$, donc $M$ est équidistant de $A$ et $A'$ | $f(M) = M$, $f(A) = A'$ et $f$ conserve les distances |
| **(2)** Soit $A, B, C$ fixes non alignés et $M$ un point : $\overrightarrow{AM} = x\overrightarrow{AB} + y\overrightarrow{AC}$ | $(A, AB, AC)$ est un repère |
| $\overrightarrow{AM'} = x\overrightarrow{AB} + y\overrightarrow{AC} = \overrightarrow{AM}$, donc $M' = M$ | conservation des combinaisons linéaires, avec $A' = A$, $B' = B$, $C' = C$ |
| **(3)** Si $M \in (AB)$ : $\overrightarrow{AM} = x\overrightarrow{AB}$, donc $\overrightarrow{AM'} = x\overrightarrow{AB}$ et $M' = M$ | même argument |
| Si $f \neq \mathrm{Id}$ et $M \notin (AB)$, alors $M' \neq M$ | sinon $f$ fixerait $A$, $B$, $M$, donc serait l'identité par (2) |
| $AM' = AM$ et $BM' = BM$, donc $A$ et $B$ sont sur la médiatrice de $[MM']$ | $A$ et $B$ sont fixes |
| cette médiatrice est donc la droite $(AB)$, et $M' = S_{(AB)}(M)$ | une droite est déterminée par deux points distincts |
:::

:::proof[Résultat 4 : un seul point fixe]
| Étape | Justification |
|---|---|
| Soit $A \neq I$ et $A' = f(A)$ ; $A' \neq A$ puisque $I$ est le seul point fixe | hypothèse |
| Soit $\Delta$ la médiatrice de $[AA']$ ; elle contient $I$ | résultat (1) |
| $g = S_\Delta\circ f$ fixe $I$ (car $I \in \Delta$) et $A$ (car $S_\Delta(A') = A$) | $S_\Delta$ échange $A$ et $A'$ |
| donc $g = \mathrm{Id}$ ou $g = S_{(IA)}$ | résultat (3) |
| $g = \mathrm{Id}$ est impossible : on aurait $f = S_\Delta$, qui fixe toute la droite $\Delta$ | $S_\Delta^{-1} = S_\Delta$, et $f$ n'a qu'un point fixe |
| donc $f = S_\Delta\circ S_{(IA)}$, avec $\Delta$ et $(IA)$ sécantes en $I$ | $\Delta \neq (IA)$ car $A \notin \Delta$ (sinon $AA' = 0$) |
| c'est une rotation de centre $I$ | composée de deux symétries d'axes sécants (paragraphe 3) |
:::

Une conséquence utile : **une isométrie est déterminée par les images de trois points non alignés.** En effet, si $f$ et $g$ coïncident sur $A$, $B$, $C$, alors $g^{-1}\circ f$ fixe ces trois points, donc $g^{-1}\circ f = \mathrm{Id}$ et $f = g$.

### Sans point fixe : la symétrie glissante

Reste le cas où $f$ n'a **aucun** point fixe. Les translations en sont. En voici une autre, que tu n'as jamais rencontrée : marche dans le sable.

:::definition[Symétrie glissante]
Une **symétrie glissante** est la composée $t_{\vec u}\circ S_\Delta$ d'une symétrie orthogonale d'axe $\Delta$ et d'une translation de vecteur **non nul** $\vec u$ **parallèle à $\Delta$**.
:::

Comme $\vec u$ est parallèle à l'axe, la translation et la symétrie **commutent**, et en conséquence $g\circ g = t_{\vec u}\,S_\Delta\,t_{\vec u}\,S_\Delta = t_{2\vec u}\,S_\Delta S_\Delta = t_{2\vec u}$ : deux pas de la même jambe font une translation.

![Une symétrie glissante comme des empreintes de pas](/lessons/images/m4-iso-pas.svg "Les empreintes F₀, F₁, F₂, ... d'un marcheur sont obtenues les unes à partir des autres par la même symétrie glissante g d'axe Δ et de vecteur u. Le pied droit F₀ devient le pied gauche F₁ (la figure est retournée), qui redevient un pied droit F₂. Appliquer g deux fois donne la translation de vecteur 2u.")

:::theorem[Une isométrie sans point fixe]
Une isométrie qui n'a **aucun** point fixe est soit une translation de vecteur non nul, soit une symétrie glissante.
:::

:::proof[Une isométrie sans point fixe]
| Étape | Justification |
|---|---|
| Soit $O$ un point, $O' = f(O)$ et $\vec u = \overrightarrow{OO'}$ ; $g = t_{-\vec u}\circ f$ fixe $O$ | $g(O) = O' - \vec u = O$ |
| donc $f = t_{\vec u}\circ g$, où $g$ est une isométrie qui fixe $O$ | $t_{\vec u}\circ t_{-\vec u} = \mathrm{Id}$ |
| $g$ est donc l'identité, une symétrie d'axe passant par $O$, ou une rotation de centre $O$ | résultats (2), (3), (4) |
| **Cas $g = \mathrm{Id}$** : $f = t_{\vec u}$, avec $\vec u \neq \vec 0$ puisque $f$ n'a pas de point fixe | translation |
| **Cas $g$ rotation** d'angle $\alpha \not\equiv 0$ : en prenant $O$ pour origine, $f(z) = e^{i\alpha}z + u$ | écriture complexe |
| $f(z) = z \iff z\left(1 - e^{i\alpha}\right) = u \iff z = \dfrac{u}{1 - e^{i\alpha}}$ : $f$ a un point fixe, ce qui est exclu | $e^{i\alpha} \neq 1$ |
| **Cas $g = S_\Delta$** avec $O \in \Delta$ : on décompose $\vec u = \vec u_\parallel + \vec u_\perp$, parallèle et orthogonal à $\Delta$ | projection sur $\Delta$ et sur sa normale |
| $t_{\vec u_\perp} = S_{\Delta'}\circ S_\Delta$, où $\Delta'$ est la parallèle à $\Delta$ décalée de $\tfrac12\vec u_\perp$ | deux axes parallèles (paragraphe 3) |
| donc $t_{\vec u_\perp}\circ S_\Delta = S_{\Delta'}\circ S_\Delta\circ S_\Delta = S_{\Delta'}$ | $S_\Delta\circ S_\Delta = \mathrm{Id}$ |
| donc $f = t_{\vec u_\parallel}\circ S_{\Delta'}$ ; si $\vec u_\parallel = \vec 0$, $f = S_{\Delta'}$ aurait des points fixes, exclu | les translations commutent |
| donc $\vec u_\parallel \neq \vec 0$ : $f$ est une symétrie glissante d'axe $\Delta'$ | définition |
:::

![Les quatre isométries non triviales](/lessons/images/m4-iso-types.svg "Le même triangle ABC (en vert) et son image A'B'C' (en orange) par une symétrie orthogonale, une rotation d'angle π/3, une translation et une symétrie glissante. Les petites flèches circulaires montrent le sens de parcours A → B → C : il est conservé par la rotation et la translation, renversé par la symétrie orthogonale et la symétrie glissante.")

## 5. Décomposition en symétries orthogonales

La classification est faite. Il reste à voir pourquoi les symétries orthogonales sont les briques de tout l'édifice.

:::theorem[Au plus trois symétries]
Toute isométrie est la composée d'**au plus trois** symétries orthogonales.
:::

:::proof[Au plus trois symétries]
| Étape | Justification |
|---|---|
| Soit $A, B, C$ non alignés, d'images $A', B', C'$ par $f$. On note $\sigma_1$ la symétrie d'axe la médiatrice de $[AA']$ (l'identité si $A = A'$) ; elle envoie $A$ sur $A'$ | médiatrice, ou rien à faire |
| On pose $B_1 = \sigma_1(B)$ ; $A'B_1 = AB = A'B'$, donc $A'$ est sur la médiatrice de $[B_1B']$ | $\sigma_1$ et $f$ conservent les distances |
| $\sigma_2$ : symétrie d'axe cette médiatrice (identité si $B_1 = B'$) ; elle **fixe $A'$** et envoie $B_1$ sur $B'$ | $A'$ est sur l'axe |
| On pose $C_2 = \sigma_2\sigma_1(C)$ ; $A'C_2 = AC = A'C'$ et $B'C_2 = BC = B'C'$ | $\sigma_2\sigma_1$ envoie $A$ sur $A'$ et $B$ sur $B'$ |
| donc $A'$ et $B'$ sont sur la médiatrice de $[C_2C']$, qui est donc $(A'B')$ | $A' \neq B'$ |
| $\sigma_3 = S_{(A'B')}$ (identité si $C_2 = C'$) fixe $A'$ et $B'$ et envoie $C_2$ sur $C'$ | symétrie par rapport à la médiatrice |
| $\sigma_3\sigma_2\sigma_1$ et $f$ coïncident sur $A$, $B$, $C$ | construction |
| donc $f = \sigma_3\circ\sigma_2\circ\sigma_1$ | une isométrie est déterminée par trois points non alignés |
:::

Chaque type d'isométrie correspond à un nombre de miroirs :

| Nature de l'isométrie | Décomposition en symétries orthogonales | Points fixes |
|---|---|---|
| Identité | $S_\Delta\circ S_\Delta$ | tout le plan |
| Symétrie orthogonale d'axe $\Delta$ | $S_\Delta$ | la droite $\Delta$ |
| Rotation de centre $I$ et d'angle $\theta \not\equiv 0$ | $S_{\Delta'}\circ S_\Delta$ avec $\Delta \cap \Delta' = \{I\}$ | $\{I\}$ |
| Translation de vecteur $\vec u \neq \vec 0$ | $S_{\Delta'}\circ S_\Delta$ avec $\Delta \parallel \Delta'$ | aucun |
| Symétrie glissante | $S_{\Delta_2}\circ S_{\Delta_1}\circ S_\Delta$ avec $\Delta_1 \parallel \Delta_2$ et $\Delta \perp \Delta_1$ | aucun |

Les décompositions se construisent explicitement : une rotation d'angle $\theta$ est $S_{\Delta'}\circ S_\Delta$ où $\Delta$ est **n'importe quelle** droite passant par $I$ et $\Delta'$ est la droite qui s'en déduit par la rotation d'angle $\dfrac\theta2$ ; une translation de vecteur $\vec u$ est $S_{\Delta'}\circ S_\Delta$ où $\Delta$ est **n'importe quelle** droite orthogonale à $\vec u$ et $\Delta'$ s'en déduit par la translation de vecteur $\dfrac12\vec u$.

:::example[Décomposer]
- **Une rotation.** $r$ de centre $O$ et d'angle $\dfrac{2\pi}{3}$. On prend $\Delta = (Ox)$ et $\Delta'$ la droite de pente $\sqrt3$ (angle $\dfrac\pi3$ avec $(Ox)$). Alors $S_{\Delta'}\circ S_\Delta = r$. Contrôle : $(1, 0) \mapsto (1, 0) \mapsto \left(-\dfrac12, \dfrac{\sqrt3}{2}\right)$, qui est bien $(1, 0)$ tourné de $\dfrac{2\pi}{3}$ (le symétrique de $(1,0)$ par rapport à la droite d'angle $\dfrac\pi3$ a pour argument $\dfrac{2\pi}{3} - 0$).
- **La symétrie centrale de centre $I$** est la composée des symétries d'axes deux droites quelconques perpendiculaires en $I$.
- **Une symétrie glissante** demande trois miroirs, pas moins. Avec un ou deux miroirs on obtient l'identité, une symétrie orthogonale, une rotation ou une translation, et $t_{\vec u}\circ S_\Delta$ n'est aucune de celles-ci : elle n'a pas de point fixe, donc ce n'est ni l'identité, ni une symétrie, ni une rotation ; et si c'était une translation $t_{\vec v}$, la symétrie $S_\Delta = t_{\vec v - \vec u}$ aurait des points fixes, ce qui force $\vec v = \vec u$ et $S_\Delta = \mathrm{Id}$, absurde.
:::

:::remark
Si tu regardes le tableau, une règle apparaît : le nombre de miroirs est **pair** pour l'identité, la rotation et la translation (qui conservent le sens de parcours), **impair** pour la symétrie orthogonale et la symétrie glissante (qui le renversent). Les deux familles s'appellent les **déplacements** et les **antidéplacements** : c'est le sujet du chapitre suivant.
:::

## 6. Méthodes pour les exercices

:::method[Identifier une isométrie]
1. **Résoudre $f(M) = M$.** Le nombre de solutions décide :
   - le plan entier : $f = \mathrm{Id}$ ;
   - une droite : $f$ est la symétrie orthogonale d'axe cette droite ;
   - un seul point $I$ : $f$ est une rotation de centre $I$ ; l'angle se lit sur un point $M \neq I$ et son image $M'$ ($\overrightarrow{IM}\cdot\overrightarrow{IM'} = IM^2\cos\theta$ donne $\cos\theta$) ;
   - aucun : si $\overrightarrow{MM'}$ est un vecteur **constant**, $f$ est une translation ; sinon, c'est une symétrie glissante, dont l'axe passe par les milieux des segments $[MM']$.
2. **Pour une composée**, appliquer les règles des deux miroirs, et décomposer en miroirs pour simplifier.
3. **Contrôler** en calculant l'image d'un ou deux points.
:::

:::example[Une symétrie glissante en coordonnées]
$f(x, y) = (x + 3,\ -y + 2)$. C'est une isométrie : $M'N'^2 = (x_1 - x)^2 + (y - y_1)^2 = MN^2$. Points fixes : $x = x + 3$ est impossible, donc $f$ n'a aucun point fixe. Ce n'est pas une translation : $\overrightarrow{MM'} = (3,\ 2 - 2y)$ dépend de $y$. C'est donc une symétrie glissante. L'axe passe par les milieux des $[MM']$ : ce milieu a pour ordonnée $\dfrac{y + (-y + 2)}{2} = 1$, donc **l'axe est la droite $y = 1$** et le vecteur est $(3, 0)$ (le décalage de $x$). Contrôle : $f = t_{(3,0)}\circ S_{y=1}$, car $S_{y=1}(x, y) = (x, 2 - y)$ puis $+(3, 0)$ donne $(x + 3, 2 - y)$ ✓, et $(3, 0)$ est bien parallèle à l'axe.
:::

| Situation | Outil |
|---|---|
| Montrer qu'une application est une isométrie | $M'N'^2 = MN^2$ en coordonnées, ou $\lvert z_2' - z_1'\rvert = \lvert z_2 - z_1\rvert$ |
| Image d'un milieu, d'un cercle, d'une droite | conservation des combinaisons linéaires et des distances |
| Deux symétries d'axes parallèles | translation de vecteur $2\overrightarrow{IJ}$, de $\Delta$ vers $\Delta'$ |
| Deux symétries d'axes sécants en $I$ | rotation de centre $I$, d'angle $2(\vec u, \vec u')$ |
| Identifier $f$ à partir de ses points fixes | $1$ point : rotation ; $2$ points : droite fixée, symétrie ; $3$ points non alignés : identité |
| Prouver que deux isométries sont égales | elles coïncident sur trois points non alignés |
| Écrire une rotation ou une translation avec des miroirs | choisir un premier axe commode, puis déduire le second |
| Isométrie sans point fixe | translation si $\overrightarrow{MM'}$ est constant, sinon symétrie glissante |

## Vérifie-toi

::::check[Isométrie ou pas ?]
Parmi les applications $a(x, y) = (2x, y)$ et $b(x, y) = (y + 1,\ x - 1)$, laquelle est une isométrie ? L'identifier.

:::answer
Pour $a$ : avec $M(0, 0)$ et $N(1, 0)$, $MN = 1$ mais $a(M) = (0, 0)$ et $a(N) = (2, 0)$ donnent $M'N' = 2$. Ce n'est pas une isométrie. Pour $b$ : $M'N'^2 = (y_1 - y)^2 + (x_1 - x)^2 = MN^2$, c'est une isométrie. Points fixes : $x = y + 1$ et $y = x - 1$, deux équations équivalentes, donc la **droite** $y = x - 1$ est fixée. Ce n'est pas l'identité (le point $O$ a pour image $(1, -1)$), donc $b$ est la symétrie orthogonale d'axe la droite $y = x - 1$. Contrôle : le milieu de $[OO']$ est $\left(\dfrac12, -\dfrac12\right)$, qui vérifie $y = x - 1$ ✓, et $\overrightarrow{OO'} = (1, -1)$ est orthogonal au vecteur directeur $(1, 1)$ ✓.
:::
::::

::::check[Deux miroirs parallèles]
Soient $\Delta : x = 1$ et $\Delta' : x = 4$. Quelle est la composée $S_\Delta\circ S_{\Delta'}$ ? Calculer l'image de $(5, 2)$.

:::answer
On applique d'abord $S_{\Delta'}$ puis $S_\Delta$. L'ordre est celui de l'exercice précédent **inversé** : c'est la translation de vecteur $-2\overrightarrow{IJ} = (-6, 0)$ (de $\Delta'$ vers $\Delta$). Contrôle : $S_{\Delta'}(5, 2) = (3, 2)$ car $2\times 4 - 5 = 3$, puis $S_\Delta(3, 2) = (-1, 2)$ car $2\times 1 - 3 = -1$ ; et $(5, 2) + (-6, 0) = (-1, 2)$ ✓.
:::
::::

::::check[Une rotation avec deux miroirs]
Écrire la rotation de centre $O$ et d'angle $-\dfrac\pi2$ comme composée de deux symétries orthogonales.

:::answer
On prend l'angle $2(\vec u,\vec u') = -\dfrac\pi2$, donc $(\vec u,\vec u') = -\dfrac\pi4$. Par exemple $\Delta = (Ox)$ et $\Delta'$ la droite $y = -x$ : $S_{\Delta'}\circ S_\Delta$. Contrôle avec $(3, 1)$ : $S_\Delta(3, 1) = (3, -1)$, puis $S_{y=-x}(a, b) = (-b, -a)$ donne $(1, -3)$. La rotation d'angle $-\dfrac\pi2$ envoie $(x, y)$ sur $(y, -x)$, donc $(3, 1)$ sur $(1, -3)$ ✓.
:::
::::

::::check[Un point fixe ou deux ?]
Une isométrie peut-elle avoir **exactement deux** points fixes ?

:::answer
Non. Si $f$ fixe deux points distincts $A$ et $B$, elle fixe tous les points de la droite $(AB)$ : elle en a donc une infinité. Les seuls cas possibles pour le nombre de points fixes sont donc $0$, $1$, une droite entière, ou le plan entier.
:::
::::

::::check[Identifier]
Une isométrie $f$ fixe $A(0, 0)$ et $B(2, 0)$ et envoie $C(0, 1)$ sur $C'(0, -1)$. Que vaut $f$ ?

:::answer
$f$ fixe deux points distincts, donc toute la droite $(AB) = (Ox)$. Elle n'est pas l'identité puisque $C' \neq C$. Donc $f = S_{(Ox)}$. Contrôle : $S_{(Ox)}(0, 1) = (0, -1)$ ✓.
:::
::::

::::challenge
Soient $\Delta_1$, $\Delta_2$, $\Delta_3$ trois droites distinctes. Montrer que $S_{\Delta_1}\circ S_{\Delta_2}\circ S_{\Delta_3}$ est une symétrie orthogonale si et seulement si les trois droites sont parallèles ou concourantes.

:::answer
**Sens direct.** Supposons $S_{\Delta_1}S_{\Delta_2}S_{\Delta_3} = S_\Delta$. Alors $S_{\Delta_1}S_{\Delta_2} = S_\Delta S_{\Delta_3}$. Si $\Delta_1 \parallel \Delta_2$, le membre de gauche est une translation, donc $S_\Delta S_{\Delta_3}$ aussi : $\Delta \parallel \Delta_3$, et la translation est dirigée par la normale commune, donc $\Delta_3$ est parallèle à $\Delta_1$ et $\Delta_2$. Si $\Delta_1$ et $\Delta_2$ se coupent en $I$, le membre de gauche est une rotation de centre $I$, donc $S_\Delta S_{\Delta_3}$ aussi : $\Delta$ et $\Delta_3$ se coupent en $I$, donc $\Delta_3$ passe par $I$ : les trois droites sont concourantes. **Réciproque.** Si les trois droites sont parallèles (resp. concourantes en $I$), $S_{\Delta_1}S_{\Delta_2}$ est une translation (resp. une rotation de centre $I$), et une translation (resp. rotation) s'écrit $S_\Delta S_{\Delta_3}$ avec $\Delta$ parallèle (resp. passant par $I$) bien choisie, donc $S_{\Delta_1}S_{\Delta_2}S_{\Delta_3} = S_\Delta S_{\Delta_3}S_{\Delta_3} = S_\Delta$. Contrôle avec $\Delta_1 : x = 0$, $\Delta_2 : x = 1$, $\Delta_3 : x = 3$ : $S_{\Delta_3}(x) = 6 - x$, $S_{\Delta_2}$ donne $2 - (6 - x) = x - 4$, $S_{\Delta_1}$ donne $-(x - 4) = 4 - x$ : c'est la symétrie d'axe $x = 2$ ✓.
:::
::::
