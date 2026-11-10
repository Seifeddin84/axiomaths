---
title: "Vecteurs et translations"
slug: "lycee-1ere-vecteurs-et-translations"
school: "lycee"
level: "1ere"
sections: []
chapter: "Vecteurs et Translations"
summary: "Un vecteur est un déplacement : on le définit par les milieux de deux segments, on en tire les règles d'égalité, puis on étudie la translation, qui conserve les distances et envoie une droite sur une parallèle."
prerequisites: ["Parallélogramme", "Milieu d'un segment", "Cercle", "Repère du plan"]
source: "Manuel officiel 1ère année, Tome 1, chapitre 4"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Fais glisser une équerre le long d'une règle. Chaque point de l'équerre se déplace de **la même distance**, dans **la même direction** et dans **le même sens**. Pour décrire ce glissement, une longueur ne suffit pas : il faut aussi une direction (celle de la règle) et un sens (vers la droite, vers la gauche).

Un segment $[AB]$ ne convient pas : c'est le même que $[BA]$. Une **flèche** de $A$ vers $B$, si. Et deux flèches distinctes, l'une de $A$ à $B$, l'autre de $C$ à $D$, peuvent décrire **le même déplacement** : on dit alors qu'elles représentent le même **vecteur**.

![Deux flèches qui représentent le même vecteur](/lessons/images/vecteur-egalite.svg "Dans le parallélogramme ABDC, les flèches AB et CD représentent le même vecteur. Les diagonales [AD] et [BC] se coupent en leur milieu O.")

:::intuition
Un vecteur, c'est un **déplacement** : une direction, un sens et une longueur, **sans point de départ imposé**. On le dessine par une flèche, mais toutes les flèches parallèles, de même sens et de même longueur désignent le même vecteur. Deux flèches $A \to B$ et $C \to D$ sont « le même déplacement » lorsque $ABDC$ est un parallélogramme (éventuellement aplati).
:::

## 1. Vecteurs et égalité vectorielle

Un **bipoint** $(A,B)$ est un couple de points, dans cet ordre : on part de $A$ pour arriver en $B$.

:::definition[Égalité de deux bipoints]
Soient $A$, $B$, $C$, $D$ quatre points. On dit que les bipoints $(A,B)$ et $(C,D)$ **représentent le même vecteur**, et on écrit $\overrightarrow{AB} = \overrightarrow{CD}$, lorsque les segments $[AD]$ et $[BC]$ ont **le même milieu**.

Les bipoints $(A,A)$, $(B,B)$, … représentent un même vecteur, le **vecteur nul** noté $\vec 0$.
:::

:::warning
Ce sont $[AD]$ et $[BC]$ qui ont le même milieu : les segments « croisés », ceux qui relient le départ du premier au bout du second, et le bout du premier au départ du second. Ce ne sont **pas** $[AB]$ et $[CD]$. Si $\overrightarrow{MN} = \overrightarrow{PQ}$, ce sont $[MQ]$ et $[NP]$ qui ont le même milieu.
:::

:::property[Le dictionnaire de l'égalité vectorielle]
Soient $A$, $B$, $C$, $D$ quatre points.

- Si $A$, $B$, $C$ ne sont pas alignés : $\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC$ est un parallélogramme.
- $\overrightarrow{AB} = \overrightarrow{CD} \iff \overrightarrow{AC} = \overrightarrow{BD}$ (on échange les deux points du milieu).
- $\overrightarrow{AB} = \overrightarrow{CD} \iff \overrightarrow{BA} = \overrightarrow{DC}$ (on renverse les deux flèches).
- Si $\overrightarrow{AB} = \overrightarrow{CD}$, alors $AB = CD$ et $(AB) \parallel (CD)$ (ou les droites sont confondues).
- Si $\overrightarrow{AB} = \overrightarrow{CD}$ et si $A$, $B$, $C$ sont alignés, alors $A$, $B$, $C$, $D$ sont alignés.
- $\overrightarrow{AB} = \overrightarrow{BC} \iff B$ est le milieu de $[AC]$.
- $\overrightarrow{AB} = \overrightarrow{AM} \iff M = B$.
:::

Dans le parallélogramme $ABDC$, les diagonales sont $[AD]$ et $[BC]$ : c'est exactement la définition. Le reste se démontre à partir d'elle.

:::proof[Échanger les points du milieu]
| Étape | Justification |
|---|---|
| $\overrightarrow{AB} = \overrightarrow{CD}$ signifie que $[AD]$ et $[BC]$ ont le même milieu | définition |
| $\overrightarrow{AC} = \overrightarrow{BD}$ signifie que $[AD]$ et $[CB]$ ont le même milieu | définition appliquée aux bipoints $(A,C)$ et $(B,D)$ |
| les segments $[BC]$ et $[CB]$ sont le même segment | l'ordre des extrémités ne compte pas pour un segment |
| donc les deux conditions sont identiques | ce qui prouve l'équivalence |
:::

:::proof[$\overrightarrow{AB} = \overrightarrow{BC}$ équivaut à « $B$ est le milieu de $[AC]$ »]
| Étape | Justification |
|---|---|
| $\overrightarrow{AB} = \overrightarrow{BC}$ signifie que $[AC]$ et $[BB]$ ont le même milieu | définition avec les bipoints $(A,B)$ et $(B,C)$ |
| le milieu de $[BB]$ est $\textcolor{#ea580c}{B}$ | $[BB]$ est réduit au point $B$ |
| donc $B$ est le milieu de $[AC]$ | on identifie les deux milieux |
:::

:::example[Un parallélogramme et son centre]
Soit $ABCD$ un parallélogramme de centre $O$. Ses diagonales $[AC]$ et $[BD]$ ont le même milieu $O$.

- $\overrightarrow{AB} = \overrightarrow{DC}$, car la condition « $[AC]$ et $[DB]$ ont le même milieu » est vraie ;
- de même $\overrightarrow{AD} = \overrightarrow{BC}$ ;
- $\overrightarrow{AO} = \overrightarrow{OC}$ et $\overrightarrow{OB} = \overrightarrow{DO}$, car $O$ est le milieu de $[AC]$ et de $[BD]$.
:::

:::method[Démontrer qu'un quadrilatère est un parallélogramme]
Pour $ABCD$, il suffit de montrer $\overrightarrow{AB} = \overrightarrow{DC}$ (ou $\overrightarrow{AD} = \overrightarrow{BC}$). Réciproquement, un parallélogramme donne des égalités vectorielles à utiliser.
:::

## 2. La translation

:::definition[Translation]
Soient $A$ et $B$ deux points distincts. La **translation de vecteur $\overrightarrow{AB}$**, notée $t_{\overrightarrow{AB}}$, associe à tout point $M$ le point $M'$ tel que
$$
\overrightarrow{MM'} = \overrightarrow{AB}.
$$
$M'$ est l'**image** de $M$ ; $M$ est un **antécédent** de $M'$.
:::

![Image d'un triangle par une translation](/lessons/images/vecteur-translation.svg "Chaque point du triangle MNP glisse du même vecteur AB : les segments MM', NN' et PP' sont parallèles, de même longueur et de même sens, et le triangle M'N'P' est superposable à MNP.")

:::property[Premières conséquences]
- L'image de $A$ est $B$.
- L'image de $B$ est le point $B'$ **symétrique de $A$ par rapport à $B$** (car $\overrightarrow{BB'} = \overrightarrow{AB}$, donc $B$ est le milieu de $[AB']$).
- Si $M$ n'est pas sur $(AB)$, $M'$ est le quatrième sommet du parallélogramme $ABM'M$.
- $M'$ est l'image de $M$ par $t_{\overrightarrow{AB}}$ si et seulement si $M$ est l'image de $M'$ par $t_{\overrightarrow{BA}}$ (on renverse les flèches).
:::

:::method[Construire l'image d'un point au compas]
Pour $M$ hors de $(AB)$ : le cercle de centre $M$ et de rayon $AB$ et le cercle de centre $B$ et de rayon $AM$ se coupent en $M'$ (celui des deux points d'intersection pour lequel $ABM'M$ est un parallélogramme et non un quadrilatère croisé). En effet, dans un parallélogramme les côtés opposés ont la même longueur : $MM' = AB$ et $BM' = AM$.

Pour trouver l'**antécédent** d'un point $B$ par $t_{\overrightarrow{AJ}}$, on construit l'**image** de $B$ par $t_{\overrightarrow{JA}}$.
:::

### Ce que la translation conserve

:::theorem[Conservation des distances]
Si $M'$ et $N'$ sont les images de $M$ et $N$ par une translation, alors $M'N' = MN$.
:::

:::proof[$M'N' = MN$]
| Étape | Justification |
|---|---|
| $\overrightarrow{MM'} = \overrightarrow{AB}$ et $\overrightarrow{NN'} = \overrightarrow{AB}$ | définition de la translation |
| donc $\overrightarrow{MM'} = \overrightarrow{NN'}$ | deux vecteurs égaux à un troisième sont égaux |
| donc $\overrightarrow{MN} = \overrightarrow{M'N'}$ | on échange les points du milieu |
| donc $MN = M'N'$ | deux vecteurs égaux ont la même longueur |
:::

:::theorem[Images des figures usuelles]{wiki="Images des figures usuelles par une translation"}
Par une translation :

- l'image d'une **droite** est une droite **parallèle** (ou elle-même, si la droite a la direction du vecteur) ;
- l'image d'un **segment** $[EF]$ est le segment $[E'F']$, de même longueur ;
- l'image d'un **cercle** de centre $O$ et de rayon $r$ est le cercle de centre $O' = t(O)$ et de même rayon $r$ (admis) ;
- l'image d'un **polygone** lui est **superposable** : même périmètre, même aire, angles correspondants égaux.
:::

:::proof[L'image d'une droite est une droite parallèle]
Soient $\Delta$ une droite, $E \in \Delta$, $E'$ son image et $\Delta'$ la parallèle à $\Delta$ passant par $E'$.

| Étape | Justification |
|---|---|
| Soit $M \in \Delta$, $M \neq E$, d'image $M'$. On a $\overrightarrow{EE'} = \overrightarrow{MM'}$ | définition de la translation |
| donc $\overrightarrow{EM} = \overrightarrow{E'M'}$ | on échange les points du milieu |
| donc $(E'M') \parallel (EM) = \Delta$, et comme $E' \in \Delta'$, on a $M' \in \Delta'$ | deux vecteurs égaux ont des droites parallèles |
| Réciproquement, soit $N' \in \Delta'$ et $N$ son antécédent. Le même calcul donne $(EN) \parallel (E'N') = \Delta'$ | même raisonnement |
| donc $(EN)$ est la parallèle à $\Delta'$ passant par $E$, c'est $\Delta$, et $N \in \Delta$ | par $E$ il ne passe qu'une parallèle à $\Delta'$ |
| donc l'image de $\Delta$ est exactement $\Delta'$ | tout point de $\Delta'$ vient d'un point de $\Delta$ |
:::

:::method[Reconnaître une translation]
Une figure $\mathcal F'$ est l'image de $\mathcal F$ par une translation si et seulement si (a) elles sont **superposables** sans retourner la figure, (b) les côtés correspondants sont **parallèles et de même sens**, (c) les flèches qui joignent les points correspondants sont toutes **égales**. Une figure retournée (symétrique) ou tournée n'est pas l'image d'une translation.
:::

### En coordonnées

Dans un repère $(O, I, J)$, si $A(x_A\,;y_A)$ et $B(x_B\,;y_B)$, le vecteur $\overrightarrow{AB}$ a pour **composantes** $(x_B - x_A\,;\,y_B - y_A)$. Deux vecteurs égaux ont les mêmes composantes. La translation de vecteur $\overrightarrow{AB}$ de composantes $(p\,;q)$ envoie $M(x\,;y)$ sur $M'(x+p\,;\,y+q)$.

:::example[Images par une translation]
Soient $A(1\,;2)$ et $A'(4\,;3)$. La translation $t_{\overrightarrow{AA'}}$ a pour composantes $(4-1\,;\,3-2) = (3\,;1)$.

| Point | Image |
|---|---|
| $B(-2\,;0)$ | $B'(-2+3\,;\,0+1) = B'(1\,;1)$ |
| $C(0\,;-3)$ | $C'(0+3\,;\,-3+1) = C'(3\,;-2)$ |
| $A'(4\,;3)$ | $A''(7\,;4)$ |

L'antécédent de $N(0\,;0)$ est le point de coordonnées $(0-3\,;\,0-1) = (-3\,;-1)$.
:::

## 3. Méthodes de résolution

:::method[Démontrer une égalité de vecteurs]
1. **Par les milieux** : montrer que $[AD]$ et $[BC]$ ont le même milieu.
2. **Par un parallélogramme** : $\overrightarrow{AB} = \overrightarrow{DC}$ si $ABCD$ est un parallélogramme.
3. **Par une translation** : si $C = t(A)$ et $D = t(B)$, alors $\overrightarrow{AC} = \overrightarrow{BD}$, donc $\overrightarrow{AB} = \overrightarrow{CD}$.
4. **Par le dictionnaire** : combiner les règles (échanger, renverser) vues plus haut.
:::

:::example[Un point milieu par deux translations]
Soit $ABC$ un triangle, $D$ l'image de $C$ par $t_{\overrightarrow{BA}}$ et $E$ l'image de $B$ par $t_{\overrightarrow{CA}}$. On montre que $A$ est le milieu de $[DE]$.

| Étape | Justification |
|---|---|
| $\overrightarrow{CD} = \overrightarrow{BA}$, donc $\overrightarrow{CB} = \overrightarrow{DA}$ | définition, puis on échange les points du milieu |
| $\overrightarrow{BE} = \overrightarrow{CA}$, donc $\overrightarrow{BC} = \overrightarrow{EA}$, donc $\overrightarrow{CB} = \overrightarrow{AE}$ | on échange, puis on renverse les deux flèches |
| donc $\overrightarrow{DA} = \overrightarrow{AE}$ | les deux sont égaux à $\overrightarrow{CB}$ |
| donc $A$ est le milieu de $[DE]$ | $\overrightarrow{DA} = \overrightarrow{AE} \iff A$ milieu de $[DE]$ |

Contrôle numérique avec $A(0\,;0)$, $B(2\,;0)$, $C(1\,;2)$ : $D = C + \overrightarrow{BA} = (-1\,;2)$, $E = B + \overrightarrow{CA} = (1\,;-2)$, et le milieu de $[DE]$ est bien $(0\,;0) = A$.
:::

:::method[Construire une corde de même vecteur]
**Problème.** Soit $(C)$ un cercle de centre $O$ et de rayon $r$, $A$ et $B$ deux points tels que $AB < 2r$. Construire une corde $[A'B']$ avec $\overrightarrow{A'B'} = \overrightarrow{AB}$.

1. $B'$ est l'image de $A'$ par $t_{\overrightarrow{AB}}$.
2. Comme $A' \in (C)$, son image $B'$ est sur le cercle $(C')$ image de $(C)$ par $t_{\overrightarrow{AB}}$ ; de plus $B' \in (C)$ : donc $B' \in (C) \cap (C')$.
3. On construit $(C')$ (centre $O' = t(O)$, rayon $r$), on prend $B'$ à l'intersection de $(C)$ et de $(C')$.
4. On trouve $A'$ comme **antécédent** de $B'$, c'est-à-dire image de $B'$ par $t_{\overrightarrow{BA}}$.

Exemple chiffré : $O(0\,;0)$, $r = 5$, $A(-1\,;-2)$, $B(1\,;-2)$ ; $\overrightarrow{AB}$ a pour composantes $(2\,;0)$ et $O'(2\,;0)$. L'intersection de $x^2 + y^2 = 25$ et $(x-2)^2 + y^2 = 25$ donne $x = 1$ et $y = \pm 2\sqrt6$. Avec $B'(1\,;2\sqrt6)$ on trouve $A'(-1\,;2\sqrt6)$ : les deux points sont sur $(C)$ car $1 + 24 = 25$, et $\overrightarrow{A'B'} = (2\,;0) = \overrightarrow{AB}$ ✓.
:::

:::method[Chercher un lieu]
Si $M'$ est l'image de $M$ par une translation et si $M$ décrit une figure $\mathcal F$, alors $M'$ décrit l'image de $\mathcal F$ : un cercle devient un cercle de même rayon, une droite une droite parallèle.
:::

## Vérifie-toi

::::check[Dans un parallélogramme]
$EFGH$ est un parallélogramme. Quelle est l'image de $F$ par $t_{\overrightarrow{EH}}$ ? Quelle est l'image de $G$ par $t_{\overrightarrow{FE}}$ ?

:::answer
Dans le parallélogramme $EFGH$ : $\overrightarrow{EH} = \overrightarrow{FG}$, donc l'image de $F$ par $t_{\overrightarrow{EH}}$ est $G$. De même $\overrightarrow{GH} = \overrightarrow{FE}$, donc l'image de $G$ par $t_{\overrightarrow{FE}}$ est $H$.
:::
::::

::::check[Image du point $B$]
Montrer que l'image de $B$ par $t_{\overrightarrow{AB}}$ est le symétrique de $A$ par rapport à $B$.

:::answer
Soit $B'$ cette image : $\overrightarrow{BB'} = \overrightarrow{AB}$. Cette égalité s'écrit $\overrightarrow{AB} = \overrightarrow{BB'}$, ce qui signifie que $B$ est le milieu de $[AB']$ : $B'$ est le symétrique de $A$ par rapport à $B$.
:::
::::

::::check[Avec des coordonnées]
$A(1\,;2)$, $B(4\,;3)$. Quelle est l'image de $M(-2\,;5)$ par $t_{\overrightarrow{AB}}$ ? Quel est l'antécédent de $N(0\,;0)$ ?

:::answer
$\overrightarrow{AB}$ a pour composantes $(3\,;1)$. L'image de $M$ est $(-2+3\,;\,5+1) = (1\,;6)$. L'antécédent de $N$ est $(0-3\,;\,0-1) = (-3\,;-1)$.
:::
::::

::::check[Image d'un cercle]
Quelle est l'image du cercle de centre $O(1\,;1)$ et de rayon $2$ par la translation de composantes $(3\,;-1)$ ?

:::answer
Le cercle de centre $(1+3\,;\,1-1) = (4\,;0)$ et de rayon $2$.
:::
::::

::::challenge
Une translation envoie $B$, $I$, $C$ sur $B'$, $I'$, $C'$, et $I$ est le milieu de $[BC]$. Montrer que $I'$ est le milieu de $[B'C']$, en n'utilisant que les règles d'égalité vectorielle.

:::answer
Le vecteur de la translation donne $\overrightarrow{BB'} = \overrightarrow{II'} = \overrightarrow{CC'}$.

- De $\overrightarrow{BB'} = \overrightarrow{II'}$, on échange les points du milieu : $\overrightarrow{BI} = \overrightarrow{B'I'}$.
- De $\overrightarrow{II'} = \overrightarrow{CC'}$, on échange : $\overrightarrow{IC} = \overrightarrow{I'C'}$.
- Comme $I$ est le milieu de $[BC]$, $\overrightarrow{BI} = \overrightarrow{IC}$.

Donc $\overrightarrow{B'I'} = \overrightarrow{BI} = \overrightarrow{IC} = \overrightarrow{I'C'}$, c'est-à-dire $\overrightarrow{B'I'} = \overrightarrow{I'C'}$ : $I'$ est le milieu de $[B'C']$.
:::
::::

:::summary
- $\overrightarrow{AB} = \overrightarrow{CD}$ signifie que $[AD]$ et $[BC]$ ont le même milieu ; si $A$, $B$, $C$ ne sont pas alignés, c'est équivalent à « $ABDC$ est un parallélogramme ».
- On peut **échanger** les points du milieu ($\overrightarrow{AB} = \overrightarrow{CD} \iff \overrightarrow{AC} = \overrightarrow{BD}$) et **renverser** les flèches ($\iff \overrightarrow{BA} = \overrightarrow{DC}$) ; $\overrightarrow{AB} = \overrightarrow{BC} \iff B$ milieu de $[AC]$.
- $t_{\overrightarrow{AB}}(M) = M' \iff \overrightarrow{MM'} = \overrightarrow{AB}$ ; $t(A) = B$ ; l'antécédent s'obtient avec le vecteur opposé.
- Une translation conserve les distances ; elle envoie une droite sur une parallèle, un segment sur un segment de même longueur, un cercle sur un cercle de même rayon, un polygone sur un polygone superposable.
- En coordonnées : $M(x\,;y) \mapsto M'(x+p\,;\,y+q)$ si $\overrightarrow{AB}$ a pour composantes $(p\,;q)$.
:::

:::history[Le mot vecteur]
« Vecteur » vient du latin *vehere*, qui signifie « transporter ». Un vecteur est bien ce qui transporte un point d'une position à une autre.
:::
