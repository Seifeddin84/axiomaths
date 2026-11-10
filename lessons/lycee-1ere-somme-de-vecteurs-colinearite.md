---
title: "Somme de deux vecteurs, vecteurs colinéaires"
slug: "lycee-1ere-somme-de-vecteurs-colinearite"
school: "lycee"
level: "1ere"
sections: []
chapter: "Somme de deux vecteurs - Vecteurs colinéaires"
summary: "Enchaîner deux déplacements (relation de Chasles, règle du parallélogramme), les multiplier par un réel, puis reconnaître des vecteurs colinéaires pour démontrer un alignement ou un parallélisme."
prerequisites: ["Vecteurs et translations", "Droite graduée", "Parallélogramme"]
source: "Manuel officiel 1ère année, Tome 1, chapitres 5 et 6"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Un bateau veut traverser un fleuve : il avance de $A$ à $B$ grâce à son moteur, puis le courant l'emporte de $B$ à $C$. Au total, il est allé de $A$ à $C$, et on s'attend à ce que
$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.
$$

Maintenant le moteur tourne deux fois plus vite : le déplacement $\overrightarrow{AB}$ devient deux fois plus long, on le note $2\overrightarrow{AB}$. Si le bateau fait demi-tour, c'est $-\overrightarrow{AB}$.

![Chasles et règle du parallélogramme](/lessons/images/vecteur-somme.svg "À gauche, on enchaîne deux déplacements : AB puis BC donnent AC. À droite, deux déplacements qui partent du même point A : leur somme est la diagonale du parallélogramme.")

:::intuition
- **Additionner** deux vecteurs, c'est **enchaîner** deux déplacements : la fin du premier est le début du second.
- **Multiplier** un vecteur par un réel, c'est le répéter, l'allonger, le raccourcir ou le retourner.
- Deux vecteurs **colinéaires** sont deux déplacements sur la **même direction** : l'un est un multiple de l'autre. C'est le test qui prouve qu'un point est sur une droite ou que deux droites sont parallèles.
:::

## 1. Somme de deux vecteurs

:::definition[Somme de deux vecteurs]
Soient $A$ un point et $\vec u = \overrightarrow{AB}$, $\vec v = \overrightarrow{AD}$ deux vecteurs. La **somme** $\vec u + \vec v$ est le vecteur $\overrightarrow{AC}$, où $C$ est le point tel que les segments $[AC]$ et $[BD]$ ont le même milieu.
:::

On reconnaît le parallélogramme : si $A$, $B$, $D$ ne sont pas alignés, $C$ est son quatrième sommet.

:::property[Règle du parallélogramme]
Si $A$, $B$, $C$, $D$ ne sont pas alignés :
$$
ABCD \text{ est un parallélogramme} \iff \overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}.
$$
:::

:::theorem[Relation de Chasles]
Pour tous points $A$, $B$, $C$ :
$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.
$$
:::

:::proof[Relation de Chasles]
| Étape | Justification |
|---|---|
| Soit $D$ le point tel que $\overrightarrow{AD} = \overrightarrow{BC}$ | existence et unicité de $D$ (translation) |
| Alors $[AC]$ et $[DB]$ ont le même milieu | définition de l'égalité $\overrightarrow{AD} = \overrightarrow{BC}$ |
| Donc $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$ | définition de la somme |
| Donc $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ | on remplace $\overrightarrow{AD}$ par $\overrightarrow{BC}$ |
:::

:::property[Règles de l'addition]
Pour tous vecteurs $\vec u$, $\vec v$, $\vec w$ :

- $\vec u + \vec v = \vec v + \vec u$ (la règle du parallélogramme est symétrique) ;
- $(\vec u + \vec v) + \vec w = \vec u + (\vec v + \vec w)$ : on peut écrire $\vec u + \vec v + \vec w$. Avec Chasles, $\big(\overrightarrow{AB} + \overrightarrow{BC}\big) + \overrightarrow{CD} = \overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$ ;
- $\vec u + \vec 0 = \vec u$ ;
- $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec 0$ : le vecteur $\overrightarrow{BA}$ est l'**opposé** de $\overrightarrow{AB}$, noté $-\overrightarrow{AB}$.
:::

La **différence** $\vec u - \vec v$ est la somme $\vec u + (-\vec v)$. Par exemple $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{CA} = \overrightarrow{CA} + \overrightarrow{AB} = \overrightarrow{CB}$.

:::method[Simplifier avec Chasles]
On cherche à **enchaîner** les vecteurs : la lettre qui termine l'un doit commencer le suivant. Si besoin, on change l'ordre (addition commutative) ou on remplace un vecteur par son opposé.

- $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}$.
- $\overrightarrow{MA} + \overrightarrow{AB} - \overrightarrow{MB} = \overrightarrow{MB} - \overrightarrow{MB} = \vec 0$.
- $\overrightarrow{AB} - \overrightarrow{CB} = \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- Un trajet fermé : $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \overrightarrow{AA} = \vec 0$.

Pour faire apparaître un point $M$ de son choix, on **passe par** $M$ : $\overrightarrow{AB} = \overrightarrow{AM} + \overrightarrow{MB} = \overrightarrow{MB} - \overrightarrow{MA}$.
:::

## 2. Produit d'un vecteur par un réel

:::definition[Produit d'un vecteur par un réel]
Soit $\vec u = \overrightarrow{AB}$ un vecteur non nul et $\alpha$ un réel. On munit la droite $(AB)$ du repère $(A,B)$ (le point $A$ a pour abscisse $0$ et $B$ pour abscisse $1$). Soit $M$ le point d'abscisse $\alpha$. Alors
$$
\alpha\,\vec u = \overrightarrow{AM}.
$$
On a $\overrightarrow{AM} = \alpha\overrightarrow{AB}$ si et seulement si $A$, $B$, $M$ sont alignés et $M$ a pour abscisse $\alpha$ dans $(A,B)$. De plus $0 \cdot \vec u = \vec 0$, $\alpha\vec 0 = \vec 0$ et $(-1)\vec u = -\vec u$.
:::

![Plusieurs multiples du vecteur AB](/lessons/images/vecteur-produit.svg "Les vecteurs AB, 2AB et (3/2)AB ont le même sens ; (-1/2)AB et -AB ont le sens contraire. La longueur de kAB est la valeur absolue de k fois AB.")

:::property[Sens et longueur]
Si $\alpha > 0$, $\alpha\vec u$ a le **même sens** que $\vec u$ ; si $\alpha < 0$, il a le **sens contraire**. La longueur de $\alpha\overrightarrow{AB}$ est $\lvert \alpha \rvert \times AB$.
:::

:::property[Règles de calcul]
Pour tous vecteurs $\vec u$, $\vec v$ et tous réels $\alpha$, $\beta$ (règles admises, qui se vérifient sur une droite graduée) :

- $\alpha(\vec u + \vec v) = \alpha\vec u + \alpha\vec v$ ;
- $(\alpha + \beta)\vec u = \alpha\vec u + \beta\vec u$ ;
- $\alpha(\beta\vec u) = (\alpha\beta)\vec u$ ;
- $\alpha\vec u = \vec 0 \iff \alpha = 0$ ou $\vec u = \vec 0$.
:::

:::example[Placer un point]
- $\overrightarrow{AM} = -\dfrac12\overrightarrow{AB}$ : $M$ est sur $(AB)$, du côté opposé à $B$ par rapport à $A$, à une demi-longueur de $AB$ (abscisse $-\frac12$).
- $\overrightarrow{AP} = \dfrac32\overrightarrow{AB}$ : $P$ est sur $(AB)$, au-delà de $B$ (abscisse $\frac32$).
- Avec les règles : $2\overrightarrow{AB} + 3\overrightarrow{AB} = 5\overrightarrow{AB}$ (les abscisses s'additionnent).
:::

:::method[Définir un point par une relation vectorielle]
Pour placer $M$ tel que $3\overrightarrow{AM} + 2\overrightarrow{BC} = \vec 0$, on **isole** le vecteur inconnu :
$$
\overrightarrow{AM} = -\frac23\,\overrightarrow{BC}.
$$
$M$ est alors sur la parallèle à $(BC)$ passant par $A$, du côté **opposé** au sens de $\overrightarrow{BC}$, à une distance de $A$ égale aux deux tiers de $BC$ (on partage $[BC]$ en trois avec le théorème de Thalès).

Contrôle avec $A(0\,;0)$, $B(1\,;0)$, $C(4\,;3)$ : $\overrightarrow{BC} = (3\,;3)$, donc $\overrightarrow{AM} = (-2\,;-2)$ et $M(-2\,;-2)$. Vérification : $3\overrightarrow{AM} + 2\overrightarrow{BC} = (-6\,;-6) + (6\,;6) = (0\,;0)$ ✓.
:::

## 3. Milieu, centre de gravité

:::property[Milieu d'un segment]
Soient $A$, $B$ deux points et $I$ un point. On a
$$
I \text{ milieu de } [AB] \iff \overrightarrow{IA} + \overrightarrow{IB} = \vec 0 \iff \overrightarrow{AB} = 2\overrightarrow{AI}.
$$
Et si $I$ est le milieu de $[AB]$, alors pour tout point $M$ : $\overrightarrow{MA} + \overrightarrow{MB} = 2\overrightarrow{MI}$.
:::

:::proof[$\overrightarrow{MA} + \overrightarrow{MB} = 2\overrightarrow{MI}$]
| Étape | Justification |
|---|---|
| $\overrightarrow{MA} + \overrightarrow{MB} = (\overrightarrow{MI} + \overrightarrow{IA}) + (\overrightarrow{MI} + \overrightarrow{IB})$ | relation de Chasles, en passant par $I$ |
| $\phantom{\overrightarrow{MA} + \overrightarrow{MB}} = 2\overrightarrow{MI} + (\overrightarrow{IA} + \overrightarrow{IB})$ | commutativité et associativité |
| $\phantom{\overrightarrow{MA} + \overrightarrow{MB}} = 2\overrightarrow{MI} + \textcolor{#ea580c}{\vec 0}$ | $I$ est le milieu de $[AB]$ |
| $\phantom{\overrightarrow{MA} + \overrightarrow{MB}} = 2\overrightarrow{MI}$ | |
:::

:::theorem[Centre de gravité]
Si $G$ est le centre de gravité du triangle $ABC$, alors $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec 0$.
:::

:::proof[Centre de gravité]
Soit $C'$ le milieu de $[AB]$ et $G'$ le symétrique de $G$ par rapport à $C'$.

| Étape | Justification |
|---|---|
| $[AB]$ et $[GG']$ ont le même milieu $C'$, donc $GAG'B$ est un parallélogramme | un quadrilatère dont les diagonales ont le même milieu |
| donc $\overrightarrow{GA} + \overrightarrow{GB} = \overrightarrow{GG'}$ | règle du parallélogramme |
| $\overrightarrow{GG'} = 2\overrightarrow{GC'}$ | $C'$ est le milieu de $[GG']$ |
| $G$ est sur la médiane $[CC']$ aux deux tiers à partir de $C$ : $\overrightarrow{GC} = -2\overrightarrow{GC'}$ | propriété du centre de gravité |
| donc $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = 2\overrightarrow{GC'} - 2\overrightarrow{GC'} = \vec 0$ | on remplace |
:::

Contrôle avec $A(0\,;0)$, $B(6\,;0)$, $C(0\,;6)$ : $G(2\,;2)$, donc $\overrightarrow{GA} = (-2\,;-2)$, $\overrightarrow{GB} = (4\,;-2)$, $\overrightarrow{GC} = (-2\,;4)$, et la somme est bien $(0\,;0)$.

## 4. Vecteurs colinéaires

:::definition[Vecteurs colinéaires]
Deux vecteurs $\vec u$ et $\vec v$ sont **colinéaires** si l'un est le produit de l'autre par un réel : $\vec u = k\vec v$ ou $\vec v = k\vec u$. Si $\vec u = k\vec v$ avec $k > 0$, ils sont de **même sens** ; avec $k < 0$, de **sens contraires**. Le vecteur nul est colinéaire à tout vecteur.
:::

:::theorem[Colinéarité, parallélisme et alignement]
Soient $A$, $B$, $C$, $D$ quatre points ($A \neq B$, $C \neq D$) et $\alpha$ un réel non nul.

1. Si $\overrightarrow{CD} = \alpha\overrightarrow{AB}$, alors $(AB) \parallel (CD)$ (elles sont confondues si les quatre points sont alignés) et $CD = \lvert \alpha \rvert\,AB$.
2. Si $(AB) \parallel (CD)$, alors $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires (réciproque, admise).
3. $A$, $B$, $C$ sont **alignés** si et seulement si $\overrightarrow{AC} = k\overrightarrow{AB}$ pour un réel $k$.
:::

:::proof[Premier point]
| Étape | Justification |
|---|---|
| Soit $M$ le point tel que $\overrightarrow{AM} = \alpha\overrightarrow{AB}$ | définition du produit par un réel |
| $M$ est sur la droite $(AB)$ | $M$ est le point d'abscisse $\alpha$ de $(AB)$ |
| $\overrightarrow{CD} = \overrightarrow{AM}$, donc $(CD) \parallel (AM) = (AB)$ | deux vecteurs égaux ont des droites parallèles |
| $CD = AM = \lvert \alpha \rvert\,AB$ | longueur de $\alpha\overrightarrow{AB}$ |
:::

Le troisième point est la définition du produit : $\overrightarrow{AC} = k\overrightarrow{AB}$ signifie que $C$ est sur $(AB)$, d'abscisse $k$.

:::method[Deux outils à retenir]
- **Trois points alignés** : exprimer $\overrightarrow{AC}$ comme un multiple de $\overrightarrow{AB}$.
- **Deux droites parallèles** : exprimer $\overrightarrow{CD}$ comme un multiple de $\overrightarrow{AB}$. Si de plus $A \notin (CD)$, les droites ne sont pas confondues.
:::

:::warning
« Colinéaires » ne veut pas dire « égaux » : $2\overrightarrow{AB}$ et $\overrightarrow{AB}$ sont colinéaires mais différents. Et $\overrightarrow{CD} = k\overrightarrow{AB}$ montre que $(AB) \parallel (CD)$ **ou confondues** : pour une vraie parallèle, vérifier qu'un point de l'une n'est pas sur l'autre.
:::

### Travailler dans un parallélogramme

:::method[Prendre une base]
Dans un parallélogramme $ABCD$, on a $\overrightarrow{DC} = \overrightarrow{AB}$, donc $\overrightarrow{CD} = -\overrightarrow{AB}$, et $\overrightarrow{BC} = \overrightarrow{AD}$. On écrit **tous** les vecteurs en fonction de deux d'entre eux, par exemple $\overrightarrow{AB}$ et $\overrightarrow{AD}$ (on dit qu'on les prend pour **base**), puis on compare.
:::

:::example[Trois points alignés]
Soit $ABCD$ un parallélogramme, $I$ le milieu de $[BC]$ et $E$ le point tel que $\overrightarrow{DE} = 2\overrightarrow{AB}$. Montrons que $A$, $I$, $E$ sont alignés.

- $\overrightarrow{BI} = \dfrac12\overrightarrow{BC} = \dfrac12\overrightarrow{AD}$, donc $\overrightarrow{AI} = \overrightarrow{AB} + \overrightarrow{BI} = \overrightarrow{AB} + \dfrac12\overrightarrow{AD}$.
- $\overrightarrow{AE} = \overrightarrow{AD} + \overrightarrow{DE} = \overrightarrow{AD} + 2\overrightarrow{AB} = 2\left(\overrightarrow{AB} + \dfrac12\overrightarrow{AD}\right) = 2\overrightarrow{AI}$.

Donc $A$, $I$, $E$ sont alignés. Contrôle avec $A(0\,;0)$, $B(4\,;1)$, $D(1\,;3)$ : $C(5\,;4)$, $I(4{,}5\,;2{,}5)$, $E = D + 2\overrightarrow{AB} = (9\,;5) = 2I$ ✓.
:::

:::example[Reconnaître un multiple]
Dans un parallélogramme $ABCD$, soient $P$ et $Q$ les points tels que $\overrightarrow{AP} = 3\overrightarrow{AB} - \overrightarrow{AD}$ et $\overrightarrow{AQ} = -6\overrightarrow{AB} + 2\overrightarrow{AD}$. Alors
$$
\overrightarrow{AQ} = -2\left(3\overrightarrow{AB} - \overrightarrow{AD}\right) = -2\,\overrightarrow{AP}.
$$
Les vecteurs $\overrightarrow{AP}$ et $\overrightarrow{AQ}$ sont colinéaires, de sens contraires, et $A$, $P$, $Q$ sont alignés avec $A$ entre $P$ et $Q$.
:::

## 5. Avec des coordonnées

Dans un repère, si $\vec u(x\,;y)$ et $\vec v(x'\,;y')$ :
$$
\vec u + \vec v = (x + x'\,;\,y + y'), \qquad \alpha\vec u = (\alpha x\,;\,\alpha y).
$$
Deux vecteurs sont **colinéaires** si leurs composantes sont **proportionnelles**. Le test pratique : $xy' - x'y = 0$ (si $\vec v = k\vec u$ alors $x' = kx$ et $y' = ky$, donc $x \cdot ky - kx \cdot y = 0$).

:::example[Alignés ou pas ?]
- $\vec u(2\,;-3)$ et $\vec v(-6\,;9)$ : $\vec v = -3\vec u$ ; colinéaires, de sens contraires.
- $A(1\,;2)$, $B(3\,;-1)$, $C(-1\,;5)$ : $\overrightarrow{AB} = (2\,;-3)$ et $\overrightarrow{AC} = (-2\,;3) = -\overrightarrow{AB}$. Les points sont alignés, et même $A$ est le milieu de $[BC]$.
- $A(1\,;2)$, $B(3\,;-1)$, $D(0\,;0)$ : $\overrightarrow{AB} = (2\,;-3)$ et $\overrightarrow{AD} = (-1\,;-2)$. Le test donne $2 \times (-2) - (-1)(-3) = -7 \neq 0$ : ils ne sont pas colinéaires, donc $A$, $B$, $D$ ne sont pas alignés.
:::

:::history[Michel Chasles]
Michel Chasles (1793-1880) est un mathématicien français dont les travaux ont préparé le calcul vectoriel. La relation $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, et toute relation du même genre sur les mesures algébriques, porte son nom en hommage.
:::

## Vérifie-toi

::::check[Un trajet fermé]
Simplifier $\overrightarrow{MN} + \overrightarrow{PQ} + \overrightarrow{NP} + \overrightarrow{QM}$.

:::answer
On enchaîne : $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ} + \overrightarrow{QM} = \overrightarrow{MM} = \vec 0$.
:::
::::

::::check[Règle du parallélogramme]
$ABCD$ est un parallélogramme. Donner un vecteur égal à $\overrightarrow{BA} + \overrightarrow{BC}$.

:::answer
Dans le parallélogramme $ABCD$ la diagonale issue de $B$ est $[BD]$ : $\overrightarrow{BA} + \overrightarrow{BC} = \overrightarrow{BD}$.
:::
::::

::::check[Colinéaires ?]
$\vec u(3\,;-6)$ et $\vec v(-1\,;2)$ sont-ils colinéaires ? De même sens ?

:::answer
$\vec u = -3\vec v$ : ils sont colinéaires, de **sens contraires** (le coefficient $-3$ est négatif).
:::
::::

::::check[Placer un point]
Où se trouve $M$ tel que $\overrightarrow{AM} = -\dfrac12\overrightarrow{AB}$ ?

:::answer
Sur la droite $(AB)$, du côté de $A$ opposé à $B$, à une distance de $A$ égale à la moitié de $AB$ (abscisse $-\frac12$ dans le repère $(A,B)$).
:::
::::

::::challenge
Les points $A$ et $B$ sont distincts et $G$ vérifie $\overrightarrow{GA} + 2\overrightarrow{GB} = \vec 0$. Exprimer $\overrightarrow{AG}$ en fonction de $\overrightarrow{AB}$.

:::answer
On passe par $A$ : $\overrightarrow{GB} = \overrightarrow{GA} + \overrightarrow{AB}$, donc $\overrightarrow{GA} + 2\overrightarrow{GA} + 2\overrightarrow{AB} = \vec 0$, soit $3\overrightarrow{GA} = -2\overrightarrow{AB}$, donc $\overrightarrow{AG} = \dfrac23\overrightarrow{AB}$. Contrôle sur la droite graduée $(A,B)$ : $G$ d'abscisse $\frac23$ donne $\overrightarrow{GA} = -\frac23$ et $\overrightarrow{GB} = \frac13$, et $-\frac23 + 2\times\frac13 = 0$ ✓.
:::
::::

:::summary
- **Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$. **Parallélogramme** : $ABCD$ parallélogramme $\iff \overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$.
- $\overrightarrow{AB} + \overrightarrow{BA} = \vec 0$ ; $-\overrightarrow{AB} = \overrightarrow{BA}$ ; $\overrightarrow{AB} = \overrightarrow{MB} - \overrightarrow{MA}$ pour tout $M$.
- $\alpha\overrightarrow{AB} = \overrightarrow{AM}$ où $M$ a pour abscisse $\alpha$ dans $(A,B)$ ; la longueur de $\alpha\overrightarrow{AB}$ est $\lvert \alpha \rvert AB$ ; sens contraire si $\alpha < 0$.
- $I$ milieu de $[AB]$ $\iff \overrightarrow{IA} + \overrightarrow{IB} = \vec 0 \iff \overrightarrow{AB} = 2\overrightarrow{AI}$ ; alors $\overrightarrow{MA} + \overrightarrow{MB} = 2\overrightarrow{MI}$.
- **Colinéaires** : l'un est un multiple de l'autre. $\overrightarrow{AC} = k\overrightarrow{AB}$ prouve un **alignement** ; $\overrightarrow{CD} = k\overrightarrow{AB}$ prouve un **parallélisme**.
- En coordonnées, colinéaires $\iff xy' - x'y = 0$.
:::
