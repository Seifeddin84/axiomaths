---
title: "Translations"
slug: "lycee-2eme-sciences-translations"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Informatique"]
chapter: "Translations"
summary: "Faire glisser une figure sans la tourner ni la déformer : définition par un vecteur, propriété caractéristique, images des droites, cercles et polygones, composition, et comment s'en servir pour démontrer un alignement ou un chemin le plus court."
prerequisites: ["Calcul vectoriel", "Barycentre"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 7"
updated: "2026-11-27"
---

::::summary[À retenir]
- $t_{\vec{u}}(M) = M' \iff \overrightarrow{MM'} = \vec{u}$ ; $t_{\overrightarrow{AB}}$ envoie $A$ sur $B$ ; l'antécédent de $M'$ s'obtient avec $-\vec{u}$.
- **Propriété caractéristique** : $\overrightarrow{M'N'} = \overrightarrow{MN}$ pour tous points $M$, $N$.
- Une translation conserve distances, alignement, milieu, barycentre, parallélisme, orthogonalité, angles et contact.
- Image d'une droite : une **parallèle** (ou la même droite). Image d'un cercle $(\Omega, r)$ : le cercle $(\Omega', r)$.
- En coordonnées : $\vec{u}\,(a\,;b)$ envoie $M(x\,;y)$ sur $M'(x+a\,;\,y+b)$.
- $t_{\overrightarrow{BC}} \circ t_{\overrightarrow{AB}} = t_{\overrightarrow{AC}}$ ; $S_J \circ S_I = t_{2\overrightarrow{IJ}}$.
::::

## 1. Définition et premières propriétés

Fais glisser une équerre sur une table : tous ses points avancent **du même déplacement**. C'est exactement ce que décrit une translation.

:::definition[Translation de vecteur $\vec{u}$]
Soit $\vec{u}$ un vecteur. La **translation de vecteur $\vec{u}$**, notée $t_{\vec{u}}$, associe à tout point $M$ du plan le point $M'$ tel que
$$\overrightarrow{MM'} = \vec{u}.$$
$M'$ est l'**image** de $M$ ; $M$ est l'**antécédent** de $M'$.
:::

![Image d'un triangle par une translation](/lessons/images/vecteur-translation.svg "Chaque point du triangle glisse du même vecteur : les segments qui joignent un point à son image sont parallèles, de même longueur et de même sens.")

:::property[Premières conséquences]
- $t_{\overrightarrow{AB}}$ envoie $A$ sur $B$ ; elle envoie $B$ sur le **symétrique de $A$ par rapport à $B$**.
- Si $ABCD$ est un parallélogramme, $t_{\overrightarrow{AB}}$ envoie $D$ sur $C$ et $t_{\overrightarrow{AD}}$ envoie $B$ sur $C$.
- $M' = t_{\vec{u}}(M) \iff M = t_{-\vec{u}}(M')$ : pour trouver un **antécédent**, on utilise le vecteur opposé.
- Si $\vec{u} \neq \vec{0}$, aucun point n'est invariant.
:::

:::example[En coordonnées]
Soient $A(2\,;-1)$ et $A'(5\,;1)$. Le vecteur $\overrightarrow{AA'}$ a pour composantes $(5-2\,;\,1-(-1)) = (3\,;2)$.

L'image de $B(-1\,;3)$ par $t_{\overrightarrow{AA'}}$ est $B'(-1+3\,;\,3+2) = B'(2\,;5)$. L'antécédent de $E(0\,;0)$ est $(0-3\,;\,0-2) = (-3\,;-2)$.
:::

## 2. Propriété caractéristique

:::theorem[Propriété caractéristique d'une translation]
Une application $f$ du plan dans le plan est une translation si et seulement si, pour tous points $M$ et $N$ d'images $M'$ et $N'$,
$$\overrightarrow{M'N'} = \overrightarrow{MN}.$$
:::

:::proof[Une translation vérifie $\overrightarrow{M'N'} = \overrightarrow{MN}$]
| Étape | Justification |
|---|---|
| $\overrightarrow{MM'} = \vec{u}$ et $\overrightarrow{NN'} = \vec{u}$ | définition de $t_{\vec{u}}$ |
| $\overrightarrow{M'N'} = \overrightarrow{M'M} + \overrightarrow{MN} + \overrightarrow{NN'}$ | relation de Chasles |
| $\overrightarrow{M'N'} = -\vec{u} + \overrightarrow{MN} + \vec{u}$ | $\overrightarrow{M'M} = -\overrightarrow{MM'}$ |
| donc $\overrightarrow{M'N'} = \overrightarrow{MN}$ | les $\vec{u}$ s'annulent |
:::

:::proof[Réciproque]
Soit $f$ telle que $\overrightarrow{M'N'} = \overrightarrow{MN}$ pour tous $M$, $N$. On fixe $A$ et $A' = f(A)$.

| Étape | Justification |
|---|---|
| $\overrightarrow{A'M'} = \overrightarrow{AM}$ | hypothèse appliquée à $A$ et $M$ |
| $\overrightarrow{AM'} = \overrightarrow{AA'} + \overrightarrow{A'M'} = \overrightarrow{AA'} + \overrightarrow{AM}$ | Chasles |
| $\overrightarrow{AM'} = \overrightarrow{AM} + \overrightarrow{MM'}$ | Chasles |
| donc $\overrightarrow{MM'} = \overrightarrow{AA'}$ pour tout $M$ | on égalise les deux écritures |
| donc $f = t_{\overrightarrow{AA'}}$ | définition |
:::

:::theorem[Conservation des distances]
Si $M'$ et $N'$ sont les images de $M$ et $N$ par une translation, alors $M'N' = MN$.
:::

Cela découle de $\overrightarrow{M'N'} = \overrightarrow{MN}$ : deux vecteurs égaux ont la même longueur.

## 3. Images des figures usuelles

:::theorem[Images des figures usuelles]{wiki="Images des figures usuelles par une translation"}
Par une translation :

- l'image d'une **droite** est une droite **parallèle** (ou elle-même, si la droite a la direction du vecteur) ;
- l'image d'un **segment** $[EF]$ est le segment $[E'F']$, de même longueur ;
- l'image d'une **demi-droite** $[EF)$ est la demi-droite $[E'F')$ ;
- l'image d'un **cercle** de centre $O$ et de rayon $r$ est le cercle de centre $O' = t(O)$ et de même rayon $r$ ;
- l'image d'un **polygone** lui est **superposable** : mêmes côtés, mêmes angles.
:::

![Une figure et une droite avec leurs images par une translation](/lessons/images/thm-translation-images.svg "La figure glisse sans tourner ni se déformer ; la droite image est parallèle.")

:::proof[L'image d'une droite est une droite parallèle]
Soit $\Delta$ une droite, $E \in \Delta$ et $E'$ son image. Pour $M \in \Delta$, $M \neq E$, d'image $M'$ :

| Étape | Justification |
|---|---|
| $\overrightarrow{E'M'} = \overrightarrow{EM}$ | propriété caractéristique |
| donc $(E'M') \parallel (EM) = \Delta$ | deux vecteurs égaux ont des droites parallèles |
| donc $M'$ est sur la parallèle à $\Delta$ passant par $E'$ | c'est la seule parallèle à $\Delta$ qui passe par $E'$ |
:::

:::proof[Cas du cercle]
Soit $\mathcal{C}$ le cercle de centre $\Omega$ et de rayon $r$, et $M \in \mathcal{C}$ d'image $M'$.

| Étape | Justification |
|---|---|
| $\Omega'M' = \Omega M$ | conservation des distances |
| donc $\Omega'M' = r$ | $M \in \mathcal{C}$ |
| donc $M' \in \mathcal{C}'$, cercle de centre $\Omega'$ et de rayon $r$ | définition du cercle |
:::

:::method[Trouver l'image d'une droite]
On cherche l'image **d'un seul point** de la droite, puis on trace la **parallèle** à la droite passant par ce point. En coordonnées, on garde le même coefficient directeur et on détermine l'ordonnée à l'origine avec ce point.
:::

## 4. Ce que la translation conserve

:::property[Conservation]
Une translation conserve :

- l'**alignement** : $A$, $B$, $C$ alignés $\Rightarrow$ $A'$, $B'$, $C'$ alignés ;
- le **milieu** : $I$ milieu de $[AB]$ $\Rightarrow$ $I'$ milieu de $[A'B']$ ;
- le **barycentre** (par exemple le centre de gravité d'un triangle) ;
- le **parallélisme**, l'**orthogonalité**, les **angles** ;
- le **contact** : une droite tangente à un cercle a pour image une droite tangente à l'image du cercle.
:::

:::proof[Le milieu est conservé]
| Étape | Justification |
|---|---|
| $\overrightarrow{AI} = \overrightarrow{IB}$ | $I$ milieu de $[AB]$ |
| $\overrightarrow{A'I'} = \overrightarrow{AI}$ et $\overrightarrow{I'B'} = \overrightarrow{IB}$ | propriété caractéristique |
| donc $\overrightarrow{A'I'} = \overrightarrow{I'B'}$ | transitivité de l'égalité |
| donc $I'$ est le milieu de $[A'B']$ | définition |
:::

Toute relation entre vecteurs est transportée sur les images, puisque $\overrightarrow{M'N'} = \overrightarrow{MN}$ pour tous $M$, $N$.

## 5. Composition

:::theorem[Composée de deux translations]
$$t_{\vec{v}} \circ t_{\vec{u}} = t_{\vec{u} + \vec{v}}.$$
En particulier $t_{\overrightarrow{BC}} \circ t_{\overrightarrow{AB}} = t_{\overrightarrow{AC}}$ et $t_{-\vec{u}} \circ t_{\vec{u}}$ est l'identité.
:::

:::proof[$t_{\overrightarrow{BC}} \circ t_{\overrightarrow{AB}} = t_{\overrightarrow{AC}}$]
Soit $M_1 = t_{\overrightarrow{AB}}(M)$ et $M_2 = t_{\overrightarrow{BC}}(M_1)$.

| Étape | Justification |
|---|---|
| $\overrightarrow{MM_1} = \overrightarrow{AB}$ et $\overrightarrow{M_1M_2} = \overrightarrow{BC}$ | définition |
| $\overrightarrow{MM_2} = \overrightarrow{MM_1} + \overrightarrow{M_1M_2} = \overrightarrow{AB} + \overrightarrow{BC}$ | Chasles |
| donc $\overrightarrow{MM_2} = \overrightarrow{AC}$ | Chasles |
:::

:::theorem[Composée de deux symétries centrales]
Soient $I$ et $J$ deux points. $S_J \circ S_I = t_{2\overrightarrow{IJ}}$.
:::

:::proof[$\overrightarrow{MM_2} = 2\overrightarrow{IJ}$]
Soit $M_1 = S_I(M)$ et $M_2 = S_J(M_1)$, donc $\overrightarrow{IM_1} = -\overrightarrow{IM}$ et $\overrightarrow{JM_2} = -\overrightarrow{JM_1}$.

| Étape | Justification |
|---|---|
| $\overrightarrow{MM_2} = \overrightarrow{MI} + \overrightarrow{IJ} + \overrightarrow{JM_2}$ | Chasles |
| $\overrightarrow{JM_2} = \overrightarrow{M_1J} = \overrightarrow{M_1I} + \overrightarrow{IJ} = \overrightarrow{IM} + \overrightarrow{IJ}$ | $J$ milieu de $[M_1M_2]$ puis Chasles |
| $\overrightarrow{MM_2} = \overrightarrow{MI} + \overrightarrow{IJ} + \overrightarrow{IM} + \overrightarrow{IJ} = 2\overrightarrow{IJ}$ | $\overrightarrow{MI} + \overrightarrow{IM} = \vec{0}$ |
:::

:::warning
$S_J \circ S_I$ et $S_I \circ S_J$ sont des translations de vecteurs **opposés** : l'ordre compte pour les symétries centrales, pas pour les translations.
:::

## 6. Méthodes

:::method[Démontrer un alignement]
Si $M$ est sur une droite $(\Delta)$ et si $(\Delta')$ est l'image de $(\Delta)$ par $t$, alors $t(M)$ est sur $(\Delta')$. On identifie $(\Delta')$ grâce aux images de **deux** points de $(\Delta)$.
:::

:::method[Chemin le plus court avec un pont]
Quand une longueur est **fixée** (la largeur d'un pont), on la fait disparaître avec une translation de ce vecteur. Il reste à minimiser une somme de deux distances $PQ + QR$, ce qui se fait avec l'inégalité triangulaire : le minimum est $PR$, atteint quand $Q$ est sur $[PR]$.
:::

## Vérifie-toi

::::check[Dans un parallélogramme]
$ABCD$ est un parallélogramme. Quelle est l'image de $D$ par $t_{\overrightarrow{AB}}$ ? Quelle est l'image de $B$ par $t_{\overrightarrow{AD}}$ ?

:::answer
Dans le parallélogramme, $\overrightarrow{AB} = \overrightarrow{DC}$ : l'image de $D$ est $C$. De même $\overrightarrow{AD} = \overrightarrow{BC}$ : l'image de $B$ est $C$.
:::
::::

::::check[Avec des coordonnées]
Soit $t$ la translation de vecteur $\vec{u}\,(-2\,;3)$. Quelle est l'image de $M(1\,;1)$ ? Quel est l'antécédent de $N(0\,;0)$ ?

:::answer
L'image de $M$ est $(1-2\,;\,1+3) = (-1\,;4)$. L'antécédent de $N$ est $(0-(-2)\,;\,0-3) = (2\,;-3)$.
:::
::::

::::check[Image d'une droite]
Quelle est l'image de la droite $y = 2x+1$ par la translation de vecteur $(-2\,;3)$ ?

:::answer
Le point $(0\,;1)$ de la droite a pour image $(-2\,;4)$. L'image est parallèle, de coefficient directeur $2$ : $y = 2x + p$ avec $4 = 2 \times (-2) + p$, donc $p = 8$. L'image est la droite $y = 2x + 8$.
:::
::::

::::check[Image d'un cercle]
Quelle est l'image du cercle de centre $O(1\,;2)$ et de rayon $3$ par la translation de vecteur $(2\,;-1)$ ?

:::answer
Le cercle de centre $(1+2\,;\,2-1) = (3\,;1)$ et de rayon $3$.
:::
::::

::::check[Composée]
Quelle est la composée de $t_{(2\,;-1)}$ puis $t_{(-3\,;4)}$ ?

:::answer
C'est la translation de vecteur $(2-3\,;\,-1+4) = (-1\,;3)$.
:::
::::

::::challenge
Montrer que l'image du milieu de $[AB]$ par une translation est le milieu de l'image de $[AB]$, en n'utilisant que la propriété caractéristique $\overrightarrow{M'N'} = \overrightarrow{MN}$.

:::answer
Soit $I$ le milieu de $[AB]$ : $\overrightarrow{AI} = \overrightarrow{IB}$. La propriété caractéristique donne $\overrightarrow{A'I'} = \overrightarrow{AI}$ et $\overrightarrow{I'B'} = \overrightarrow{IB}$. Donc $\overrightarrow{A'I'} = \overrightarrow{I'B'}$ et $I'$ est le milieu de $[A'B']$.
:::
::::

:::history[Le mot translation]
« Translation » vient du latin *translatio*, « action de transporter d'un lieu à un autre » : on transporte la figure sans la changer. Le même mot latin a donné « traduction » : on transporte un texte d'une langue dans une autre.
:::
