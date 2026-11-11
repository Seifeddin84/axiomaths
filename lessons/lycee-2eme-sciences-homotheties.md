---
title: "Homothéties"
slug: "lycee-2eme-sciences-homotheties"
school: "lycee"
level: "2eme"
sections: ["Sciences"]
chapter: "Homothéties"
summary: "Agrandir ou réduire une figure sans la déformer : définition, propriété caractéristique, image d'une droite, d'un cercle, d'un polygone, et comment s'en servir pour démontrer un alignement ou trouver un lieu."
prerequisites: ["Calcul vectoriel", "Barycentre", "Translations"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 8"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Tu passes une photographie à la photocopieuse à $200\ \%$. Que devient-elle ? Les angles ne changent pas, la forme est la même, mais chaque longueur est multipliée par $2$ et l'aire par… $4$.

Dans un triangle $ABC$, on place les milieux $I$ de $[AB]$ et $J$ de $[AC]$. Le petit triangle $AIJ$ ressemble en tout point à $ABC$ : c'est une **réduction**. Mais aucune des transformations que tu connais ne l'envoie sur $ABC$ :

- une translation, une symétrie ou une rotation **conservent les longueurs**, or $AI = \frac12 AB$ ;
- il faut donc une transformation qui **change l'échelle** tout en gardant la forme : la **homothétie**.

![Deux homothéties de centre I](/lessons/images/homothetie-triangle.svg "Le triangle ABC et ses images par les homothéties de centre I, de rapport 2 (agrandissement) et de rapport −1/2 (réduction retournée).")

:::intuition
Une homothétie, c'est un **zoom** autour d'un point fixe $I$ appelé son centre. Chaque point s'éloigne ou se rapproche de $I$ le long de sa droite, dans le même rapport. Si le rapport est négatif, on passe de l'autre côté du centre.
:::

## 1. Définition

:::definition[Homothétie]
Soient $I$ un point et $k$ un réel **non nul**. L'**homothétie de centre $I$ et de rapport $k$**, notée $h_{(I,\,k)}$, associe à tout point $M$ l'unique point $M'$ tel que
$$
\overrightarrow{IM'} = k\,\overrightarrow{IM}.
$$
$M'$ est l'**image** de $M$ ; $M$ est un **antécédent** de $M'$.
:::

| Rapport $k$ | Effet | Position de $M'$ |
|---|---|---|
| $k > 1$ | agrandissement | sur la demi-droite $[IM)$, plus loin que $M$ |
| $0 < k < 1$ | réduction | sur $[IM]$, entre $I$ et $M$ |
| $k < 0$ | retournement | de l'autre côté de $I$ |
| $k = 1$ | ne fait rien | $M' = M$ (identité) |
| $k = -1$ | symétrie centrale | $I$ milieu de $[MM']$ |

:::property[Conséquences immédiates]
- Un point, son image et le centre sont **alignés**.
- Le centre est **invariant** : $h(I) = I$.
- Tout point $M'$ a **un seul** antécédent : $\overrightarrow{IM} = \dfrac{1}{k}\overrightarrow{IM'}$.
:::

### En coordonnées

Si $I(x_I\,;y_I)$, la relation $\overrightarrow{IM'} = k\overrightarrow{IM}$ s'écrit
$$
x' - x_I = k\,(x - x_I), \qquad y' - y_I = k\,(y - y_I).
$$

:::example[Calculer une image]
Soit $h$ l'homothétie de centre $I(1\,;1)$ et de rapport $-2$, et $M(3\,;2)$. Alors $\overrightarrow{IM} = (2\,;1)$, donc $\overrightarrow{IM'} = (-4\,;-2)$ et $M'(1-4\,;\,1-2) = M'(-3\,;-1)$.
:::

:::method[Reconnaître une homothétie dans une formule]
Une application $x' = ax + b$, $y' = ay + c$ avec $a \neq 1$ est une **homothétie de rapport $a$**. Son centre est le point invariant, solution de $x = ax + b$ et $y = ay + c$.
:::

:::example[Le centre se lit sur le point invariant]
$x' = -2x + 3$ et $y' = -2y + 6$. On résout $x = -2x + 3$, d'où $x = 1$, et $y = -2y + 6$, d'où $y = 2$. C'est l'homothétie de centre $(1\,;2)$ et de rapport $-2$. (Si $a = 1$, il n'y a plus de point invariant : c'est une translation.)
:::

## 2. Propriété caractéristique

:::theorem[Propriété caractéristique]
Soit $h$ une homothétie de rapport $k$. Pour tous points $M$ et $N$ d'images $M'$ et $N'$,
$$
\overrightarrow{M'N'} = k\,\overrightarrow{MN}.
$$
:::

:::proof[$\overrightarrow{M'N'} = k\overrightarrow{MN}$]
| Étape | Justification |
|---|---|
| $\overrightarrow{M'N'} = \overrightarrow{M'I} + \overrightarrow{IN'}$ | relation de Chasles |
| $\phantom{\overrightarrow{M'N'}} = -k\,\overrightarrow{IM} + k\,\overrightarrow{IN}$ | $\overrightarrow{IM'} = k\overrightarrow{IM}$ et $\overrightarrow{IN'} = k\overrightarrow{IN}$ |
| $\phantom{\overrightarrow{M'N'}} = \textcolor{#ea580c}{k}\,(\overrightarrow{MI} + \overrightarrow{IN})$ | on factorise $k$ et on utilise $-\overrightarrow{IM} = \overrightarrow{MI}$ |
| $\phantom{\overrightarrow{M'N'}} = k\,\overrightarrow{MN}$ | Chasles à nouveau |
:::

:::corollary
La droite $(M'N')$ est **parallèle** à $(MN)$, et $M'N' = \lvert k \rvert\, MN$. Une homothétie multiplie donc toutes les longueurs par $\lvert k \rvert$.
:::

C'est exactement ce qu'on voit sur $AIJ$ et $ABC$ : $(IJ) \parallel (BC)$ et $IJ = \frac12 BC$.

## 3. Trouver le centre

Si l'on sait que $h(A) = B$ avec un rapport $k \neq 1$, alors $\overrightarrow{IB} = k\overrightarrow{IA}$, c'est-à-dire $k\,\overrightarrow{IA} - \overrightarrow{IB} = \vec 0$ : **$I$ est le barycentre de $(A\,,k)$ et $(B\,,-1)$.**

:::example[Construire le centre]
Soit $h$ de rapport $\frac23$ avec $h(A) = B$. Alors $\overrightarrow{IB} = \frac23\overrightarrow{IA}$, soit $2\overrightarrow{IA} - 3\overrightarrow{IB} = \vec 0$ : $I$ est le barycentre de $(A\,,2)$ et $(B\,,-3)$, situé sur la droite $(AB)$, **du côté de $A$** (les coefficients sont de signes contraires, donc $I$ est hors de $[AB]$).
:::

:::method[Avec deux points et leurs images]
Si $h(A) = A'$ et $h(B) = B'$, le centre est l'intersection des droites $(AA')$ et $(BB')$. Si ces droites sont parallèles, $h$ est une translation, pas une homothétie.
:::

## 4. Ce que l'homothétie transforme

:::theorem[Images des figures usuelles]{wiki="Images des figures usuelles par une homothétie"}
Soit $h$ une homothétie de centre $I$ et de rapport $k$.

- L'image d'une **droite** est une droite **parallèle**.
- L'image d'un **segment** $[AB]$ est le segment $[A'B']$.
- L'image d'un **cercle** de centre $O$ et de rayon $R$ est le cercle de centre $O' = h(O)$ et de rayon $\lvert k \rvert R$.
- L'image d'un polygone de périmètre $p$ et d'aire $a$ est un polygone de périmètre $\lvert k \rvert\,p$ et d'aire $k^2\,a$.
:::

![Un segment et un cercle avec leurs images par une homothétie de rapport 2](/lessons/images/thm-homothetie-images.svg "Rapport 2 : le segment image est parallèle et deux fois plus long, le cercle image a un rayon deux fois plus grand.")

:::proof[Image d'un cercle]
Soit $C$ le cercle de centre $O$ et de rayon $R$, $O' = h(O)$ et $C'$ le cercle de centre $O'$ et de rayon $\lvert k \rvert R$.

| Étape | Justification |
|---|---|
| Soit $M \in C$ et $M' = h(M)$. Alors $O'M' = \lvert k \rvert\,OM = \lvert k \rvert R$ | propriété caractéristique appliquée à $O$ et $M$ |
| Donc $M' \in C'$ | définition du cercle $C'$ |
| Réciproquement, soit $N' \in C'$ et $N$ son antécédent. Alors $ON = \dfrac{O'N'}{\lvert k \rvert} = R$ | même relation lue à l'envers |
| Donc $N \in C$ : $C' = h(C)$ | tout point de $C'$ vient d'un point de $C$ |
:::

:::example[Périmètre et aire]
Un polygone a pour périmètre $12$ et pour aire $6$. Son image par l'homothétie de rapport $-3$ a pour périmètre $\lvert -3 \rvert \times 12 = 36$ et pour aire $(-3)^2 \times 6 = 54$. Le signe de $k$ n'a **aucun effet** sur les longueurs ni les aires.
:::

:::property[Ce qu'une homothétie conserve]
L'alignement, le milieu, le barycentre, les **angles**, le parallélisme, l'orthogonalité et le contact (une droite tangente à un cercle a pour image une droite tangente à l'image du cercle). Elle ne conserve **ni** les longueurs ni les aires, sauf si $k = \pm 1$.
:::

## 5. Deux cercles : tangentes communes

Deux cercles de rayons différents $R$ et $R'$ sont **toujours** homothétiques, de deux façons :

- avec le rapport $\dfrac{R'}{R} > 0$ (centre $I$, à l'extérieur) ;
- avec le rapport $-\dfrac{R'}{R} < 0$ (centre $J$, entre les cercles).

:::example[Quatre tangentes communes]
Soient $C(O\,;1)$ avec $O(0\,;0)$ et $C'(O'\,;2)$ avec $O'(6\,;0)$. Le rapport est $\pm 2$.

- Rapport $2$ : $\overrightarrow{IO'} = 2\overrightarrow{IO}$ donne $I = 2O - O' = (-6\,;0)$.
- Rapport $-2$ : $\overrightarrow{JO'} = -2\overrightarrow{JO}$ donne $J = \dfrac{O' + 2O}{3} = (2\,;0)$.

Les tangentes à $C$ menées depuis $I$ ou $J$ sont aussi tangentes à $C'$ (conservation du contact). Depuis $I$, l'angle avec l'axe $(OO')$ vérifie $\sin\theta = \frac{1}{6}$ ; depuis $J$, $\sin\theta = \frac{1}{2}$, donc $\theta = 30°$. On obtient **quatre** tangentes communes : deux « extérieures » issues de $I$ et deux « intérieures » issues de $J$.
:::

## 6. Méthodes pour les problèmes

:::method[Démontrer un alignement]
Trouver une homothétie qui envoie deux points $A$ et $D$ ou deux points $B$ et $C$ l'un sur l'autre ; le centre, un point et son image sont alignés.
:::

:::example[Droite des milieux d'un trapèze]
$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$ ; $I$ et $J$ sont les milieux de $[AB]$ et $[CD]$ ; $O = (AD) \cap (BC)$.

Comme $(AB) \parallel (CD)$, l'homothétie $h$ de centre $O$ qui envoie $A$ sur $D$ envoie aussi $B$ sur $C$ (la droite $(AB)$ a pour image la parallèle à $(AB)$ passant par $D$, c'est $(CD)$). Elle conserve le milieu : $h(I) = J$. Donc $O$, $I$, $J$ sont alignés.
:::

:::example[Chercher un lieu]
$A$ est fixé, $M$ décrit le cercle $C(\Omega\,;R)$ et $I$ est le barycentre de $(A\,,2)$ et $(M\,,3)$. Alors $\overrightarrow{AI} = \frac35\overrightarrow{AM}$ : $I$ est l'image de $M$ par l'homothétie de centre $A$ et de rapport $\frac35$. Donc $I$ décrit le cercle de centre $h(\Omega)$ et de rayon $\frac35R$. Avec $A(0\,;0)$, $\Omega(5\,;0)$ et $R = 2$ : centre $(3\,;0)$ et rayon $\frac65$.
:::

:::example[Réduction dans un triangle]
Dans $ABC$, $M \in [AB]$ et $N \in [AC]$ avec $(MN) \parallel (BC)$. Le triangle $AMN$ est l'image de $ABC$ par l'homothétie de centre $A$ et de rapport $k = \frac{AM}{AB}$.

- Périmètre de $AMN$ égal au **tiers** de celui de $ABC$ : $k = \frac13$, donc $AM = \frac13 AB$.
- Aire de $AMN$ égale au **quart** : $k^2 = \frac14$, donc $k = \frac12$ et $M$ est le milieu de $[AB]$.
:::

:::method[Construire à l'aide d'une homothétie]
Pour construire une figure demandant une condition de taille (un carré inscrit dans un triangle, un cercle tangent à deux droites et passant par un point…), on **oublie** d'abord la condition de taille, on construit une figure de bonne forme, puis on l'agrandit ou la réduit par une homothétie bien choisie. Exemple : pour inscrire un carré dans $ABC$ avec un côté sur $[AB]$, on trace un carré $MPQR$ avec $M \in [AC]$ et $P, Q \in [AB]$, puis on envoie $R$ sur $R' = (AR) \cap (BC)$ par l'homothétie de centre $A$.
:::

## 7. Pour aller plus loin : la droite d'Euler

Soit $ABC$ un triangle, $G$ son centre de gravité, $O$ le centre de son cercle circonscrit et $H$ son orthocentre. Soit $h$ l'homothétie de centre $G$ et de rapport $-\frac12$ ; elle envoie $A$, $B$, $C$ sur les milieux $A'$, $B'$, $C'$ des côtés opposés.

- La hauteur issue de $A$ (perpendiculaire à $(BC)$ passant par $A$) a pour image la perpendiculaire à $(B'C') \parallel (BC)$ passant par $A'$ : c'est la **médiatrice de $[BC]$**. De même pour les deux autres hauteurs.
- Les hauteurs se coupent en $H$ ; les médiatrices en $O$. Donc $h(H) = O$, ce qui donne $\overrightarrow{GO} = -\frac12\overrightarrow{GH}$ et finalement $\overrightarrow{OH} = 3\,\overrightarrow{OG}$.

Les points $O$, $G$, $H$ sont **alignés** : c'est la droite d'Euler. Vérification numérique avec $A(0\,;0)$, $B(4\,;0)$, $C(1\,;3)$ : $G\left(\frac53\,;1\right)$, $O(2\,;1)$, $H(1\,;1)$, donc $\overrightarrow{OH} = (-1\,;0)$ et $\overrightarrow{OG} = \left(-\frac13\,;0\right)$, soit bien $\overrightarrow{OH} = 3\overrightarrow{OG}$.

## Vérifie-toi

::::check[Image d'un point]
Soit $h$ l'homothétie de centre $I(1\,;0)$ et de rapport $3$. Quelle est l'image de $M(2\,;2)$ ?

:::answer
$\overrightarrow{IM} = (1\,;2)$, donc $\overrightarrow{IM'} = (3\,;6)$ et $M'(4\,;6)$.
:::
::::

::::check[Périmètre et aire]
Un polygone a un périmètre de $15$ et une aire de $20$. Que valent le périmètre et l'aire de son image par l'homothétie de rapport $-2$ ?

:::answer
Périmètre : $\lvert -2 \rvert \times 15 = 30$. Aire : $(-2)^2 \times 20 = 80$.
:::
::::

::::check[Existe-t-elle ?]
Existe-t-il une homothétie qui envoie $A(0\,;0)$ sur $A'(1\,;1)$ et $B(2\,;0)$ sur $B'(5\,;1)$ ?

:::answer
$\overrightarrow{AB} = (2\,;0)$ et $\overrightarrow{A'B'} = (4\,;0) = 2\overrightarrow{AB}$ : le rapport serait $2$. Le centre vérifie $I = 2A - A' = (-1\,;-1)$, et l'on contrôle $2B - I = (4\,;0) - (-1\,;-1) = (5\,;1) = B'$ ✓. Oui, c'est l'homothétie de centre $(-1\,;-1)$ et de rapport $2$.
:::
::::

::::challenge
Montrer qu'aucune homothétie n'envoie $A(0\,;0)$ sur $A'(1\,;1)$ et $B(2\,;0)$ sur $B'(3\,;2)$.

:::answer
Une homothétie envoie une droite sur une droite **parallèle** : on aurait $\overrightarrow{A'B'} = k\overrightarrow{AB}$. Or $\overrightarrow{A'B'} = (2\,;1)$ n'est pas colinéaire à $\overrightarrow{AB} = (2\,;0)$.
:::
::::

:::summary
- $h_{(I,k)}(M) = M'$ signifie $\overrightarrow{IM'} = k\overrightarrow{IM}$ ; $I$ est invariant, $M$, $M'$, $I$ sont alignés.
- **Propriété caractéristique** : $\overrightarrow{M'N'} = k\overrightarrow{MN}$, donc $(M'N') \parallel (MN)$ et $M'N' = \lvert k \rvert MN$.
- Centre : $I$ barycentre de $(A\,,k)$ et $(B\,,-1)$ quand $h(A) = B$ ; ou intersection de $(AA')$ et $(BB')$.
- Image d'un cercle $(O, R)$ : le cercle $(h(O),\ \lvert k \rvert R)$. Périmètre $\times \lvert k \rvert$, aire $\times k^2$.
- Conserve alignement, milieu, barycentre, angles, parallélisme, orthogonalité, contact.
- Deux cercles de rayons différents : deux homothéties, de rapports $\pm\frac{R'}{R}$.
:::
