---
title: "Déplacements et antidéplacements : orientation, angle, composition et écriture complexe"
slug: "lycee-4eme-maths-deplacements-antideplacements"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Déplacements - Antidéplacements"
summary: "Les isométries se rangent en deux familles : celles qui gardent le sens de rotation (identité, translations, rotations) et celles qui le renversent (symétries orthogonales et glissantes). On en tire l'angle d'un déplacement, la composée de deux rotations, la détermination par deux points et les écritures complexes z' = az + b et z' = a z barre + b avec a de module 1."
prerequisites: ["Isométries du plan", "Rotations et translations", "Nombres complexes (module, argument)", "Angles orientés"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Déplacements - Antidéplacements »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Pose un gant droit sur la table. Tu peux le glisser, le faire pivoter, autant que tu veux : tu n'en feras jamais un gant gauche. Pour changer de main, il faut le **retourner**, c'est-à-dire sortir de la table ou passer par un miroir.

Le plan a le même problème. Dans le chapitre précédent, tu as vu que les isométries sont de cinq sortes : l'identité, les translations, les rotations, les symétries orthogonales et les symétries glissantes. Ce chapitre les range en **deux familles** :

- les **déplacements** (identité, translations, rotations) : on garde le sens de rotation, comme un gant qu'on fait glisser ;
- les **antidéplacements** (symétries orthogonales et glissantes) : on renverse le sens, comme un gant qu'on retourne.

Cette séparation n'est pas décorative. Elle donne trois outils qui rendent les exercices presque mécaniques :

1. **l'angle** d'un déplacement, qui dit s'il s'agit d'une translation ou d'une rotation ;
2. **la détermination par deux points** : exactement un déplacement et un antidéplacement envoient $A$ sur $C$ et $B$ sur $D$ ;
3. **l'écriture complexe** : $z' = az + b$ pour les déplacements, $z' = a\bar z + b$ pour les antidéplacements, avec $\lvert a\rvert = 1$.

:::intuition
Imagine une feuille de calque posée sur ton dessin. Tu la fais glisser et tourner en la gardant à plat sur la table : c'est un **déplacement**. Tu la retournes face contre table avant de la reposer : c'est un **antidéplacement**. Le chapitre démontre qu'il n'y a pas d'autre possibilité, et apprend à reconnaître à quel cas on a affaire.
:::

## 1. Déplacement ou antidéplacement ?

Dans tout le chapitre, le plan est orienté dans le sens direct.

:::definition[Déplacement, antidéplacement]
Soit $f$ une isométrie. Pour $M \neq N$ et $P \neq Q$ d'images $M'$, $N'$, $P'$, $Q'$ :

- $f$ est un **déplacement** si elle conserve les mesures des angles orientés :
$$
(\overrightarrow{M'N'},\overrightarrow{P'Q'}) \equiv (\overrightarrow{MN},\overrightarrow{PQ})\quad [2\pi].
$$
- $f$ est un **antidéplacement** si elle les change en leurs opposées :
$$
(\overrightarrow{M'N'},\overrightarrow{P'Q'}) \equiv -(\overrightarrow{MN},\overrightarrow{PQ})\quad [2\pi].
$$
:::

Le premier exemple est le miroir, brique de base de toutes les isométries.

:::theorem[Une symétrie orthogonale renverse les angles]
Toute symétrie orthogonale est un antidéplacement.
:::

![Deux vecteurs et leurs images par une symétrie d'axe Δ](/lessons/images/thm-symetrie-angles.svg "Le miroir conserve les longueurs mais change le sens des angles : l'angle (u, v) devient (u', v') = −α.")

:::proof[Une symétrie orthogonale renverse les angles]
| Étape | Justification |
|---|---|
| On choisit un repère orthonormé direct dont l'axe des abscisses est l'axe $\Delta$ de la symétrie | origine sur $\Delta$, premier vecteur de base dirigeant $\Delta$ |
| Alors $S_\Delta : z \longmapsto \bar z$ | symétrie par rapport à l'axe réel |
| Si $\overrightarrow{MN}$ a pour affixe $n - m$, alors $\overrightarrow{M'N'}$ a pour affixe $\bar n - \bar m = \overline{n - m}$ | le conjugué d'une différence |
| $(\overrightarrow{M'N'},\overrightarrow{P'Q'}) \equiv \arg\dfrac{\overline{q - p}}{\overline{n - m}}$ | angle de deux vecteurs et argument d'un quotient |
| $= \arg \overline{\left(\dfrac{q - p}{n - m}\right)}$ | le conjugué d'un quotient est le quotient des conjugués |
| $\equiv -\arg\dfrac{q - p}{n - m} \equiv -(\overrightarrow{MN},\overrightarrow{PQ})$ | $\arg \bar w \equiv -\arg w$ |
:::

Chaque miroir multiplie donc les angles orientés par $-1$. Avec $n$ miroirs on multiplie par $(-1)^n$ : **un nombre pair de symétries orthogonales conserve les angles, un nombre impair les renverse**. Or toute isométrie est une composée d'au plus trois symétries.

:::theorem[Les deux familles]
Toute isométrie est un déplacement ou un antidéplacement, jamais les deux.

- Les **déplacements** sont les composées de deux symétries orthogonales : l'identité, les translations et les rotations.
- Les **antidéplacements** sont les symétries orthogonales et les composées de trois symétries orthogonales : les symétries orthogonales et les symétries glissantes.
:::

:::proof[Les deux familles]
| Étape | Justification |
|---|---|
| Toute isométrie est la composée de $0$, $1$, $2$ ou $3$ symétries orthogonales | décomposition vue au chapitre « Isométries du plan » |
| Avec $0$ ou $2$ symétries : déplacement ; avec $1$ ou $3$ : antidéplacement | parité du nombre de miroirs |
| Un déplacement est donc une composée de deux miroirs (l'identité est $S_\Delta \circ S_\Delta$) | deux symétries d'axes parallèles ou sécants : translation ou rotation |
| Un antidéplacement n'est ni l'identité, ni une translation, ni une rotation | ce sont des déplacements |
| S'il a un point fixe, c'est une symétrie orthogonale ; sinon, c'est une symétrie glissante | classification par les points fixes |
| Aucune isométrie n'est les deux à la fois | deux vecteurs formant un angle droit : $\dfrac\pi2 \not\equiv -\dfrac\pi2\ [2\pi]$ |
:::

| Isométrie | Famille | Points fixes |
|---|---|---|
| identité | déplacement | tout le plan |
| translation (non nulle) | déplacement | aucun |
| rotation (angle non nul) | déplacement | le centre |
| symétrie orthogonale | antidéplacement | l'axe |
| symétrie glissante | antidéplacement | aucun |

:::warning
**Un antidéplacement n'est pas forcément une symétrie orthogonale**, et un déplacement n'est pas forcément une translation. La symétrie glissante est un antidéplacement sans point fixe ; la rotation est un déplacement avec un point fixe. Mélanger « famille » et « type » est l'erreur la plus fréquente de ce chapitre.
:::

:::property[Règle des signes]
Notons $\varepsilon(f) = +1$ pour un déplacement et $\varepsilon(f) = -1$ pour un antidéplacement. Alors $f \circ g$ multiplie les angles orientés par $\varepsilon(f)\,\varepsilon(g)$, ce qui donne :

- déplacement $\circ$ déplacement : **déplacement** ;
- antidéplacement $\circ$ antidéplacement : **déplacement** ;
- déplacement $\circ$ antidéplacement, dans un sens ou dans l'autre : **antidéplacement**.

La réciproque d'un déplacement est un déplacement, celle d'un antidéplacement est un antidéplacement : si $f$ multiplie les angles par $\varepsilon = \pm 1$, $f^{-1}$ les multiplie par $1/\varepsilon = \varepsilon$.
:::

:::method[Reconnaître la famille d'une isométrie]
Choisir un triangle $ABC$ non aplati et son image $A'B'C'$, et comparer les signes des déterminants
$$
\det(\overrightarrow{AB},\overrightarrow{AC}) \quad\text{et}\quad \det(\overrightarrow{A'B'},\overrightarrow{A'C'}).
$$
**Même signe** : déplacement. **Signes opposés** : antidéplacement. Un seul triangle suffit : le signe de ce déterminant est celui du sinus de l'angle orienté $(\overrightarrow{AB},\overrightarrow{AC})$, qui n'est pas nul puisque le triangle n'est pas aplati, et l'angle de l'image est $\pm$ celui du triangle selon la famille.
:::

:::example[Deux isométries, un même triangle]
Soit $A(0,0)$, $B(2,0)$, $C(0,1)$, de déterminant $\det(\overrightarrow{AB},\overrightarrow{AC}) = 2\times 1 - 0\times 0 = 2 > 0$.

- $f(x,y) = (x + 3,\ -y + 2)$ donne $A'(3,2)$, $B'(5,2)$, $C'(3,1)$, de déterminant $2\times(-1) - 0\times 0 = -2 < 0$ : **antidéplacement**. Comme il n'a pas de point fixe ($x + 3 = x$ est impossible), c'est une symétrie glissante.
- $g(x,y) = (-y + 1,\ x + 2)$ donne $A'(1,2)$, $B'(1,4)$, $C'(0,2)$, de déterminant $0\times 0 - 2\times(-1) = 2 > 0$ : **déplacement**. Il fixe un seul point $\left(-\dfrac12,\dfrac32\right)$ : c'est une rotation.
:::

:::tic[Le détecteur d'orientation]
On saisit les trois points en `A2:B4` (colonne `A` pour $x$, colonne `B` pour $y$), puis leurs images par $f(x,y) = (x+3,\,-y+2)$ en `C2:D4` : `=A2+3` et `=-B2+2`, recopiées vers le bas. On calcule ensuite le déterminant du triangle de départ en `F2` et celui de l'image en `G2`, puis leur quotient :

| cellule | formule | valeur |
|---|---|---|
| `F2` | `=(A3-A2)*(B4-B2)-(B3-B2)*(A4-A2)` | $2$ |
| `G2` | `=(C3-C2)*(D4-D2)-(D3-D2)*(C4-C2)` | $-2$ |
| `H2` | `=G2/F2` | $-1$ |

Un quotient égal à $+1$ signale un déplacement, à $-1$ un antidéplacement. En remplaçant les formules par celles de $g$ (`=-B2+1` et `=A2+2`), on obtient $+1$. Et si l'on essaie une transformation qui change les longueurs, le quotient devient $\pm k^2$ (le facteur d'aire) : tu retrouveras cette idée au chapitre sur les similitudes.
:::

## 2. Deux points suffisent

:::intuition
Plante deux punaises dans ta feuille de calque pour imposer où vont $A$ et $B$. La feuille ne peut plus glisser ni pivoter. Il reste un seul degré de liberté, mais il est discret : la **retourner** ou non. D'où le résultat : deux points d'arrivée imposés laissent exactement deux isométries, un déplacement et un antidéplacement.
:::

:::theorem[Unicité]
Deux déplacements qui coïncident sur deux points distincts sont égaux. Deux antidéplacements qui coïncident sur deux points distincts sont égaux.
:::

:::proof[Unicité]
| Étape | Justification |
|---|---|
| Soit $f$ et $g$ deux déplacements avec $f(A) = g(A)$ et $f(B) = g(B)$, $A \neq B$ | hypothèse |
| $h = g^{-1}\circ f$ est un déplacement | règle des signes |
| $h$ fixe $A$ et $B$ | $g^{-1}\bigl(f(A)\bigr) = g^{-1}\bigl(g(A)\bigr) = A$, de même pour $B$ |
| donc $h = \mathrm{Id}$ ou $h = S_{(AB)}$ | une isométrie qui fixe deux points distincts |
| $S_{(AB)}$ est un antidéplacement, donc $h = \mathrm{Id}$ | $h$ est un déplacement |
| d'où $f = g$ | $f = g \circ h$ |
| Pour deux antidéplacements, $h = g^{-1}\circ f$ est encore un déplacement | antidéplacement $\circ$ antidéplacement |
| et la fin du raisonnement est identique | $h$ fixe $A$ et $B$ |
:::

:::theorem[Existence]
Soit $A$, $B$, $C$, $D$ quatre points tels que $AB = CD \neq 0$. Il existe un **unique déplacement** et un **unique antidéplacement** qui envoient $A$ sur $C$ et $B$ sur $D$.
:::

:::proof[Existence]
| Étape | Justification |
|---|---|
| Soit $S_1$ une symétrie orthogonale qui envoie $A$ sur $C$ : l'axe est la médiatrice de $[AC]$ si $A \neq C$, n'importe quelle droite passant par $A$ si $A = C$ | construction |
| On pose $M = S_1(B)$ ; alors $CM = AB = CD$ | $S_1$ conserve les distances et $S_1(A) = C$ |
| Soit $S_2$ une symétrie orthogonale qui fixe $C$ et envoie $M$ sur $D$ : l'axe est la médiatrice de $[MD]$ si $M \neq D$, n'importe quelle droite passant par $C$ si $M = D$ | cette médiatrice passe par $C$ car $CM = CD$ |
| $f = S_2 \circ S_1$ est un déplacement avec $f(A) = S_2(C) = C$ et $f(B) = S_2(M) = D$ | deux miroirs |
| $g = S_{(CD)}\circ f$ est un antidéplacement avec $g(A) = C$ et $g(B) = D$ | $S_{(CD)}$ fixe $C$ et $D$, et $C \neq D$ puisque $CD = AB \neq 0$ |
| Ils sont uniques | théorème d'unicité |
:::

:::remark
Un segment $[AB]$ est donc envoyé sur un segment $[CD]$ de même longueur par **exactement quatre isométries** : deux qui envoient $A$ sur $C$ et $B$ sur $D$ (un déplacement et un antidéplacement), et deux qui envoient $A$ sur $D$ et $B$ sur $C$. Ces quatre isométries sont distinctes puisqu'elles n'ont pas toutes la même image de $A$.
:::

## 3. L'angle d'un déplacement

:::intuition
Un déplacement garde la feuille à plat : tout ce qui est tracé dessus tourne **ensemble**, comme les aiguilles d'une horloge qu'on fait tourner d'un coup. Toutes les flèches tournent donc du même angle. Cet angle commun est la signature du déplacement, et il dit tout : s'il est nul, la feuille a seulement glissé ; sinon, elle a tourné.
:::

:::theorem[Angle d'un déplacement]
Soit $f$ un déplacement. Pour tous points $A \neq B$ d'images $A'$ et $B'$, la mesure de l'angle orienté $(\overrightarrow{AB},\overrightarrow{A'B'})$ modulo $2\pi$ **ne dépend pas** du choix de $A$ et $B$. Cette mesure $\theta$ s'appelle l'**angle** de $f$.
:::

:::proof[L'angle ne dépend pas des points]
| Étape | Justification |
|---|---|
| Soit $(A,B)$ et $(C,D)$ deux couples de points distincts, d'images $(A',B')$ et $(C',D')$ | on veut comparer les deux angles |
| $(\overrightarrow{AB},\overrightarrow{A'B'}) \equiv (\overrightarrow{AB},\overrightarrow{CD}) + (\overrightarrow{CD},\overrightarrow{C'D'}) + (\overrightarrow{C'D'},\overrightarrow{A'B'})$ | relation de Chasles |
| $(\overrightarrow{C'D'},\overrightarrow{A'B'}) \equiv -(\overrightarrow{A'B'},\overrightarrow{C'D'}) \equiv -(\overrightarrow{AB},\overrightarrow{CD})$ | $f$ conserve les angles orientés |
| donc $(\overrightarrow{AB},\overrightarrow{A'B'}) \equiv (\overrightarrow{CD},\overrightarrow{C'D'})$ | les termes en $(\overrightarrow{AB},\overrightarrow{CD})$ s'annulent |
:::

![L'angle d'un déplacement](/lessons/images/m4-dep-angle.svg "À gauche, une rotation de centre Ω et d'angle θ envoie les segments AB et CD sur A'B' et C'D'. À droite, les quatre vecteurs AB, CD, A'B' et C'D' sont ramenés à une même origine : le vecteur AB tourne de θ pour devenir A'B', et le vecteur CD tourne du même angle θ pour devenir C'D'.")

:::theorem[Nature d'un déplacement selon son angle]
Soit $f$ un déplacement d'angle $\theta$.

- Si $\theta \equiv 0\ [2\pi]$, $f$ est une translation (ou l'identité).
- Si $\theta \not\equiv 0\ [2\pi]$, $f$ est une rotation d'angle $\theta$.
:::

:::proof[Nature selon l'angle]
| Étape | Justification |
|---|---|
| $f$ est l'identité, une translation ou une rotation | classification des déplacements |
| Pour une translation, $\overrightarrow{A'B'} = \overrightarrow{AB}$, donc l'angle vaut $0$ | une translation conserve les vecteurs |
| Pour la rotation de centre d'affixe $\omega$ et d'angle $\alpha$ : $z' - \omega = e^{i\alpha}(z - \omega)$ | écriture complexe d'une rotation |
| en soustrayant, $\overrightarrow{A'B'}$ a pour affixe $e^{i\alpha}\,(z_B - z_A)$ | différence de deux images |
| donc $(\overrightarrow{AB},\overrightarrow{A'B'}) \equiv \arg e^{i\alpha} = \alpha$ | argument du quotient des affixes |
| Les deux cas $\theta \equiv 0$ et $\theta \not\equiv 0$ s'excluent, d'où l'équivalence | une rotation a un angle non nul |
:::

:::property[Composée et réciproque]
Si $f$ est un déplacement d'angle $\theta$ et $g$ un déplacement d'angle $\theta'$, alors $g \circ f$ est un déplacement d'angle $\theta + \theta'$ et $f^{-1}$ est un déplacement d'angle $-\theta$.
:::

La preuve tient en une ligne : $(\overrightarrow{AB},\overrightarrow{A''B''}) \equiv (\overrightarrow{AB},\overrightarrow{A'B'}) + (\overrightarrow{A'B'},\overrightarrow{A''B''}) \equiv \theta + \theta'$, par Chasles. Pour la réciproque, $f^{-1}$ envoie $A'$ sur $A$ et $B'$ sur $B$, et $(\overrightarrow{A'B'},\overrightarrow{AB}) \equiv -\theta$.

:::method[Identifier un déplacement donné par $A \mapsto A'$ et $B \mapsto B'$]
1. Vérifier $A'B' = AB$ (sinon aucun déplacement ne convient).
2. Calculer l'angle $\theta \equiv (\overrightarrow{AB},\overrightarrow{A'B'})$.
3. Si $\theta \equiv 0$ : c'est la **translation** de vecteur $\overrightarrow{AA'}$.
4. Sinon, c'est la **rotation** d'angle $\theta$. Son centre $\Omega$ est équidistant de $A$ et $A'$ et de $B$ et $B'$ : c'est l'intersection des médiatrices de $[AA']$ et $[BB']$ (si $A = A'$, le centre est $A$). Si ces deux médiatrices sont confondues, on passe par l'écriture complexe du paragraphe 5.
:::

:::example[Un carré]
Soit $ABCD$ un carré direct de centre $O$. Le déplacement $f$ qui envoie $A$ sur $C$ et $B$ sur $D$ existe, car $AB = CD$. On a $\overrightarrow{CD} = -\overrightarrow{AB}$, donc $\theta \equiv \pi$ et $f$ est une rotation d'angle $\pi$. Les médiatrices de $[AC]$ et de $[BD]$ sont les droites $(BD)$ et $(AC)$, qui se coupent en $O$. Donc $f$ est la **symétrie centrale de centre $O$**. En particulier $f$ n'est pas une translation.
:::

:::example[Un calcul avec des coordonnées]
Soit $A(0,0)$, $B(2,0)$, $A'(1,1)$ et $B'(1,3)$. On a $AB = A'B' = 2$ et $\overrightarrow{AB} = (2,0)$, $\overrightarrow{A'B'} = (0,2)$ : l'angle vaut $\dfrac\pi2$, c'est une rotation. La médiatrice de $[AA']$ a pour équation $x + y = 1$ ; celle de $[BB']$, de milieu $\left(\dfrac32,\dfrac32\right)$ et orthogonale à $(-1,3)$, a pour équation $-x + 3y = 3$. Leur intersection est $\Omega(0,1)$. Contrôle : $\Omega A = \Omega A' = 1$, $\Omega B = \Omega B' = \sqrt5$, et $\overrightarrow{\Omega A} = (0,-1)$ devient $\overrightarrow{\Omega A'} = (1,0)$ par un quart de tour direct ✓. C'est la **rotation de centre $\Omega(0,1)$ et d'angle $\dfrac\pi2$**.
:::

## 4. Composer des déplacements

:::intuition
On tourne de $\theta$ autour de $O$, puis de $\theta'$ autour de $O'$. Au total, la feuille a tourné de $\theta + \theta'$ : c'est encore une rotation, sauf quand ces deux angles se compensent. Alors la feuille revient dans sa direction de départ, et elle a seulement été **translatée**. Reste à savoir autour de quel point : les miroirs reviennent, et le miroir du milieu disparaît.
:::

:::theorem[Composée de deux rotations]
Soit $r$ et $r'$ deux rotations de centres distincts $O$ et $O'$ et d'angles $\theta$ et $\theta'$, non nuls modulo $2\pi$.

1. Si $\theta + \theta' \not\equiv 0\ [2\pi]$, $r' \circ r$ est une **rotation d'angle $\theta + \theta'$**.
2. Si $\theta + \theta' \equiv 0\ [2\pi]$, $r' \circ r$ est une **translation de vecteur non nul**.

Dans le cas 1, le centre $\Omega$ s'obtient ainsi. On note $D = (OO')$. Soit $\Delta$ la droite passant par $O$ telle que $(\Delta, D) \equiv \dfrac\theta2\ [\pi]$ et $\Delta'$ la droite passant par $O'$ telle que $(D, \Delta') \equiv \dfrac{\theta'}2\ [\pi]$. Alors $\Omega$ est le point d'intersection de $\Delta$ et $\Delta'$.
:::

![Construction du centre de la composée de deux rotations](/lessons/images/thm-composee-rotations.svg "Les droites Δ et Δ' font avec (OO') les angles θ/2 et θ'/2 : leur point d'intersection Ω est le centre de r' ∘ r.")

:::proof[Composée de deux rotations]
| Étape | Justification |
|---|---|
| Soit $\Delta$ et $\Delta'$ comme dans l'énoncé | construction |
| $r = S_D \circ S_\Delta$ | deux axes sécants en $O$ : rotation d'angle $2(\Delta, D) \equiv \theta$ |
| $r' = S_{\Delta'} \circ S_D$ | deux axes sécants en $O'$ : rotation d'angle $2(D, \Delta') \equiv \theta'$ |
| $r' \circ r = S_{\Delta'} \circ \textcolor{#ea580c}{S_D \circ S_D} \circ S_\Delta = S_{\Delta'} \circ S_\Delta$ | $S_D \circ S_D = \mathrm{Id}$ : le miroir du milieu disparaît |
| $(\Delta, \Delta') \equiv (\Delta, D) + (D, \Delta') \equiv \dfrac{\theta + \theta'}{2}\ [\pi]$ | relation de Chasles |
| Si $\theta + \theta' \not\equiv 0\ [2\pi]$, $\Delta$ et $\Delta'$ se coupent en $\Omega$ | $(\Delta, \Delta') \not\equiv 0\ [\pi]$ |
| donc $r' \circ r$ est la rotation de centre $\Omega$ et d'angle $2(\Delta, \Delta') \equiv \theta + \theta'$ | deux miroirs sécants |
| Si $\theta + \theta' \equiv 0\ [2\pi]$, $\Delta \parallel \Delta'$ | $(\Delta, \Delta') \equiv 0\ [\pi]$ |
| et $\Delta \neq \Delta'$ : sinon cette droite contiendrait $O$ et $O'$, donc serait $D$, et $\theta \equiv 0$ | $\theta \not\equiv 0$ par hypothèse |
| donc $r' \circ r$ est une translation de vecteur non nul | deux miroirs parallèles distincts |
:::

![Composée de deux rotations](/lessons/images/m4-dep-composition.svg "À gauche, la construction du centre Ω de la composée de deux rotations de centres O et O' : c'est le sommet du triangle O O' Ω dont les angles en O et en O' valent la moitié des angles θ et θ' des rotations (ici 45° et 30°). À droite, un point M est envoyé sur M₁ par la rotation de centre O, puis sur M₂ par la rotation de centre O' ; l'angle de ΩM à ΩM₂ vaut θ + θ' (ici 150°).")

:::example[Un calcul chiffré]
Dans un repère orthonormé direct, $O$ est l'origine et $O'$ le point d'affixe $4$. Soit $r$ la rotation de centre $O$ et d'angle $\dfrac\pi2$, et $r'$ la rotation de centre $O'$ et d'angle $\dfrac\pi3$. La composée est la rotation d'angle $\dfrac\pi2 + \dfrac\pi3 = \dfrac{5\pi}6$. Les demi-angles sont $\dfrac\pi4$ en $O$ et $\dfrac\pi6$ en $O'$ : le centre $\Omega$ est le sommet du triangle $OO'\Omega$ construit sous $[OO']$, avec ces angles à la base. La hauteur $h$ issue de $\Omega$ vérifie $h = x\tan\dfrac\pi4$ et $h = (4 - x)\tan\dfrac\pi6$, donc
$$
\begin{aligned}
x &= \frac{4\tan\frac\pi6}{\tan\frac\pi4 + \tan\frac\pi6}\\
&= \frac{4}{\sqrt3 + 1}\\
&= 2\left(\sqrt3 - 1\right) \approx 1{,}464,
\end{aligned}
$$
et $\Omega = 2(\sqrt3 - 1)\,(1 - i)$, d'affixe $\approx 1{,}464 - 1{,}464\,i$.

Contrôle avec le point $M(1,2)$. La rotation $r$ l'envoie sur $M_1(-2,1)$, puis $r'$ envoie $M_1$ sur $M_2\left(1 - \dfrac{\sqrt3}2,\ \dfrac12 - 3\sqrt3\right) \approx (0{,}134\,;\,-4{,}696)$. Les vecteurs $\overrightarrow{\Omega M} \approx (-0{,}464\,;\,3{,}464)$ et $\overrightarrow{\Omega M_2} \approx (-1{,}330\,;\,-3{,}232)$ forment bien un angle de $150^\circ = \dfrac{5\pi}6$ : $\Omega M = \Omega M_2 \approx 3{,}495$ ✓.
:::

:::theorem[Rotation et translation]
La composée d'une translation et d'une rotation d'angle $\theta \not\equiv 0$, dans un ordre ou dans l'autre, est une **rotation d'angle $\theta$**.
:::

Preuve : la composée est un déplacement d'angle $\theta + 0 = \theta \not\equiv 0$, donc une rotation d'angle $\theta$ (théorème sur la nature selon l'angle). Le centre se calcule avec l'écriture complexe du paragraphe suivant.

| Composée | Résultat |
|---|---|
| translation $\circ$ translation | translation (les vecteurs s'ajoutent), ou identité |
| rotation d'angle $\theta \not\equiv 0$ $\circ$ translation (ou l'inverse) | rotation d'angle $\theta$ |
| rotation d'angle $\theta$ $\circ$ rotation d'angle $\theta'$ | rotation d'angle $\theta + \theta'$ si $\theta + \theta' \not\equiv 0$, sinon translation (ou identité si les centres sont confondus) |

## 5. Écriture complexe d'un déplacement

:::intuition
Dans $\mathbb C$, une translation s'écrit « $+\,b$ » et une rotation autour de l'origine « $\times\, e^{i\theta}$ ». Un déplacement fait l'un puis l'autre : $z \longmapsto az + b$, avec un multiplicateur $a$ de module $1$ (une rotation ne change pas les longueurs). Et la règle « les angles s'ajoutent » devient la règle « les arguments s'ajoutent quand on multiplie » : les nombres complexes ont été fabriqués pour cela.
:::

:::theorem[Écriture complexe d'un déplacement]
Le plan est rapporté à un repère orthonormé direct. Une application $f : M(z) \longmapsto M'(z')$ est un déplacement si et seulement si
$$
z' = az + b
$$
avec $\lvert a\rvert = 1$ et $b \in \mathbb C$. Dans ce cas, l'angle de $f$ est $\arg a$, et :

- si $a = 1$, $f$ est la translation de vecteur d'affixe $b$ ;
- si $a \neq 1$, $f$ est la rotation de centre le point d'affixe $\omega = \dfrac{b}{1 - a}$ et d'angle $\arg a$.
:::

:::proof[Écriture complexe d'un déplacement]
| Étape | Justification |
|---|---|
| Si $a = 1$ : $z' = z + b$ | translation de vecteur d'affixe $b$ |
| Si $a \neq 1$ : $\omega = \dfrac{b}{1-a}$ vérifie $\omega = a\omega + b$ | on résout $\omega(1-a) = b$ |
| $z' - \omega = a\,(z - \omega)$ | soustraction des deux relations |
| Pour $M \neq \Omega$ : $\dfrac{z' - \omega}{z - \omega} = a$ | on divise |
| donc $\Omega M' = \lvert a\rvert\,\Omega M = \Omega M$ et $(\overrightarrow{\Omega M},\overrightarrow{\Omega M'}) \equiv \arg a$ | module et argument d'un quotient |
| $f$ est la rotation de centre $\Omega$ et d'angle $\arg a$ | définition d'une rotation |
| Réciproquement, un déplacement est l'identité, une translation $z + b$ ou une rotation $z' - \omega = e^{i\alpha}(z - \omega)$ | classification des déplacements |
| ce qui s'écrit $z' = az + b$ avec $a = e^{i\alpha}$ et $b = \omega\,(1 - a)$ | on développe |
:::

Deux conséquences immédiates, qui sont les règles du paragraphe 4 : la composée de $z \mapsto az + b$ puis de $z \mapsto a'z + b'$ est $z \mapsto a'a\,z + (a'b + b')$, avec $\arg(a'a) = \arg a' + \arg a$, et la réciproque est $z = \bar a\,(z' - b)$, car $a^{-1} = \bar a$ quand $\lvert a\rvert = 1$.

:::method[Le déplacement qui envoie $A$ sur $C$ et $B$ sur $D$]
Avec $AB = CD \neq 0$, on écrit $z_C = a z_A + b$ et $z_D = a z_B + b$, puis on soustrait :
$$
a = \frac{z_D - z_C}{z_B - z_A}\ \ (\text{de module } 1), \qquad b = z_C - a\,z_A.
$$
L'angle est $\arg a$ et, si $a \neq 1$, le centre est $\dfrac{b}{1-a}$.
:::

:::example[Lire une écriture complexe]
- $z' = z + 1 - i$ : $a = 1$, **translation** de vecteur d'affixe $1 - i$.
- $z' = -z + 2$ : $a = -1$ et $\omega = \dfrac{2}{2} = 1$ : rotation d'angle $\pi$, c'est-à-dire la **symétrie centrale de centre le point d'affixe $1$**.
- $z' = \dfrac{-1 + i\sqrt3}{2}\,z + 3$ : $a = e^{2i\pi/3}$ et $\omega = \dfrac{3}{1 - e^{2i\pi/3}} = \dfrac{3}{\frac32 - i\frac{\sqrt3}2} = \dfrac{3}{2} + i\dfrac{\sqrt3}{2}$. C'est la **rotation d'angle $\dfrac{2\pi}3$ de centre ce point**. Contrôle : $e^{2i\pi/3}\,\omega + 3 = \left(-\dfrac32 + i\dfrac{\sqrt3}{2}\right) + 3 = \omega$ ✓.
:::

:::example[Retrouver un déplacement]
On reprend le déplacement du paragraphe 3 qui envoie $A(0)$ sur $A'(1+i)$ et $B(2)$ sur $B'(1+3i)$. Alors
$$
a = \frac{(1 + 3i) - (1 + i)}{2 - 0} = i, \qquad b = (1 + i) - i\cdot 0 = 1 + i, \qquad \omega = \frac{1 + i}{1 - i} = \frac{(1+i)^2}{2} = i.
$$
C'est la rotation d'angle $\dfrac\pi2$ de centre le point d'affixe $i$, soit $(0,1)$ : le même résultat, en trois lignes de calcul et sans construire de médiatrices.
:::

:::example[Une rotation composée avec une translation]
Soit $r : z \mapsto iz$ (rotation d'angle $\dfrac\pi2$ autour de l'origine) et $t : z \mapsto z + 2$. Alors $t\circ r : z \mapsto iz + 2$ a pour centre $\dfrac{2}{1 - i} = 1 + i$. C'est la rotation d'angle $\dfrac\pi2$ de centre $1 + i$, comme annoncé par le théorème. Contrôle : $O$ est envoyé sur $2$, et $\dfrac{2 - (1 + i)}{0 - (1 + i)} = \dfrac{1 - i}{-1 - i} = i$ ✓.
:::

Les nombres complexes se prêtent bien aux configurations avec des angles droits : **tourner de $\dfrac\pi2$ autour d'un point, c'est multiplier par $i$ la différence des affixes.**

:::example[Triangles rectangles isocèles sur un parallélogramme]
Soit $ABCD$ un parallélogramme. On construit $F$ comme image de $C$ par la rotation de centre $D$ et d'angle $\dfrac\pi2$, et $E$ comme image de $C$ par la rotation de centre $B$ et d'angle $-\dfrac\pi2$. Montrons que le triangle $AEF$ est rectangle et isocèle en $A$.

On prend un repère orthonormé direct d'origine $A$, et on note $b = z_B$, $d = z_D$. Comme $ABCD$ est un parallélogramme, $z_C = b + d$. Alors
$$
\begin{aligned}
z_F &= d + i\,(z_C - d) = d + ib,\\
z_E &= b - i\,(z_C - b) = b - id.
\end{aligned}
$$
Donc $i\,z_E = ib + d = z_F$ : $F$ est l'image de $E$ par la rotation de centre $A$ et d'angle $\dfrac\pi2$. Ainsi $AE = AF$ et $(\overrightarrow{AE},\overrightarrow{AF}) \equiv \dfrac\pi2$.

Contrôle avec $B(3)$ et $D(1 + 2i)$ : $z_C = 4 + 2i$, $z_E = 3 - i(1 + 2i) = 5 - i$ et $z_F = (1 + 2i) + 3i = 1 + 5i$. On a $i\,z_E = 5i + 1 = z_F$ ✓ et $AE = AF = \sqrt{26}$.
:::

## 6. Antidéplacements

:::intuition
Un antidéplacement, c'est : **retourner la feuille, puis la faire glisser**. Rien d'autre. Si la feuille est ensuite glissée dans la direction de l'axe de retournement, on obtient une symétrie glissante ; si elle ne glisse pas du tout, une symétrie orthogonale.
:::

:::theorem[Forme d'un antidéplacement]
Une isométrie est un antidéplacement si et seulement si c'est la composée d'une symétrie orthogonale et d'une translation.
:::

:::proof[Forme d'un antidéplacement]
| Étape | Justification |
|---|---|
| Une symétrie orthogonale est un antidéplacement, une translation un déplacement : leur composée est un antidéplacement | règle des signes |
| Réciproquement, soit $f$ un antidéplacement, $A$ un point et $A' = f(A)$ | point de départ |
| $g = t_{\overrightarrow{A'A}} \circ f$ est un antidéplacement qui fixe $A$ | règle des signes, et $g(A) = A$ |
| un antidéplacement qui fixe un point est une symétrie orthogonale $S$ | une isométrie qui fixe un point est l'identité, une symétrie ou une rotation ; seule la symétrie est un antidéplacement |
| donc $f = t_{\overrightarrow{AA'}} \circ S$ | on compose par $t_{\overrightarrow{AA'}}$ |
:::

Une symétrie glissante s'écrit $g = t_{\vec u}\circ S_\Delta$ avec $\vec u \neq \vec 0$ **parallèle** à l'axe $\Delta$ (c'est sa forme réduite, définie au chapitre précédent). Voici comment lire son axe et son vecteur sur une paire de points.

:::property[Éléments d'une symétrie glissante]
Soit $g = t_{\vec u}\circ S_\Delta$ une symétrie glissante et $M$ un point d'image $M'$.

1. Le milieu de $[MM']$ est sur l'axe $\Delta$.
2. Le vecteur $\vec u$ est la composante de $\overrightarrow{MM'}$ sur la direction de $\Delta$ ; si $M \in \Delta$, $\overrightarrow{MM'} = \vec u$.
3. $g \circ g$ est la translation de vecteur $2\vec u$.
:::

:::proof[Éléments d'une symétrie glissante]
| Étape | Justification |
|---|---|
| Soit $M_1 = S_\Delta(M)$ et $H$ le milieu de $[MM_1]$ ; $H \in \Delta$ et $\overrightarrow{MM_1} \perp \Delta$ | symétrie orthogonale |
| $M' = M_1 + \vec u$, donc le milieu de $[MM']$ est $H + \dfrac12\vec u$ | milieu de $M$ et de $M_1 + \vec u$ |
| ce point est sur $\Delta$ car $\vec u \parallel \Delta$ | propriété 1 |
| $\overrightarrow{MM'} = \overrightarrow{MM_1} + \vec u$, avec $\overrightarrow{MM_1} \perp \Delta$ et $\vec u \parallel \Delta$ | propriété 2 : décomposition orthogonale |
| $t_{\vec u}$ et $S_\Delta$ commutent, donc $g\circ g = t_{2\vec u}\circ S_\Delta\circ S_\Delta = t_{2\vec u}$ | propriété 3 |
:::

:::method[L'antidéplacement qui envoie $A$ sur $C$ et $B$ sur $D$]
Avec $AB = CD \neq 0$, il en existe un seul, $g$.

1. Si $A = C$ ou $B = D$, $g$ a un point fixe : c'est une **symétrie orthogonale**.
2. Si les médiatrices de $[AC]$ et de $[BD]$ sont confondues, $g$ est la **symétrie orthogonale** d'axe cette droite (par unicité).
3. Sinon, $g$ est une **symétrie glissante**. Son axe passe par le milieu $I$ de $[AC]$ et le milieu $J$ de $[BD]$ : c'est $(IJ)$ si $I \neq J$, et la perpendiculaire à $(AB)$ passant par $I$ si $I = J$. Son vecteur est la composante de $\overrightarrow{AC}$ sur la direction de l'axe.
:::

![Une symétrie glissante dans un carré](/lessons/images/m4-dep-carre.svg "Le carré ABCD de milieux I, J, K, L. L'antidéplacement g qui envoie B sur K et K sur A est une symétrie glissante : son axe est la droite (JL), qui passe par les milieux M₁ de [BK] et M₂ de [KA], et son vecteur u est la moitié du vecteur BA.")

:::example[Un carré et trois antidéplacements]
Soit $ABCD$ un carré direct, de côté $1$, et $I$, $J$, $K$, $L$ les milieux de $[AB]$, $[BC]$, $[CD]$, $[DA]$. Dans le repère $(A,\overrightarrow{AB},\overrightarrow{AD})$ : $A(0,0)$, $B(1,0)$, $C(1,1)$, $D(0,1)$, $I\left(\dfrac12,0\right)$, $J\left(1,\dfrac12\right)$, $K\left(\dfrac12,1\right)$, $L\left(0,\dfrac12\right)$.

1. **$g(J) = I$ et $g(K) = L$.** On a $JI = KL$. Les médiatrices de $[JI]$ et de $[KL]$ sont toutes deux la droite $x + y = 1$, c'est-à-dire $(BD)$. Donc $g = S_{(BD)}$.
2. **$g(B) = K$ et $g(K) = A$.** On a $BK = KA = \dfrac{\sqrt5}2$ et les médiatrices sont distinctes : c'est une symétrie glissante. Les milieux de $[BK]$ et de $[KA]$ sont $\left(\dfrac34,\dfrac12\right)$ et $\left(\dfrac14,\dfrac12\right)$ : l'axe est la droite $y = \dfrac12$, soit $(JL)$. Comme $\overrightarrow{BK} = \left(-\dfrac12,1\right)$, sa composante sur l'axe est $\left(-\dfrac12,0\right) = \dfrac12\overrightarrow{BA}$ : c'est le vecteur de $g$.
3. **$g(A) = C$ et $g(D) = B$.** On a $AD = CB = 1$ et les médiatrices $(BD)$ et $(AC)$ de $[AC]$ et $[DB]$ sont distinctes : symétrie glissante. Les milieux de $[AC]$ et de $[DB]$ sont confondus en $O\left(\dfrac12,\dfrac12\right)$, donc l'axe est la perpendiculaire en $O$ à $(AD)$, soit $(JL)$. La composante de $\overrightarrow{AC} = (1,1)$ sur l'axe est $(1,0) = \overrightarrow{AB}$ : c'est le vecteur de $g$.

Contrôle du cas 3 : $S_{(JL)}(x,y) = (x, 1 - y)$, puis $+\,(1,0)$. Alors $A(0,0) \mapsto (0,1) \mapsto (1,1) = C$ ✓ et $D(0,1) \mapsto (0,0) \mapsto (1,0) = B$ ✓. Contrôle du cas 1 : $S_{(BD)}(x,y) = (1 - y,\,1 - x)$ envoie $J\left(1,\dfrac12\right)$ sur $\left(\dfrac12,0\right) = I$ ✓ et $K$ sur $L$ ✓.
:::

### Écriture complexe d'un antidéplacement

:::theorem[Écriture complexe d'un antidéplacement]
Une application $f : M(z) \longmapsto M'(z')$ est un antidéplacement si et seulement si
$$
z' = a\bar z + b
$$
avec $\lvert a\rvert = 1$ et $b \in \mathbb C$. On écrit $a = e^{i\theta}$ et on pose $c = a\bar b + b$. Alors :

- si $c = 0$, $f$ est la **symétrie orthogonale** d'axe la droite passant par le point d'affixe $\dfrac b2$, de vecteur directeur $e^{i\theta/2}$ ;
- si $c \neq 0$, $f$ est la **symétrie glissante** de même axe, de vecteur d'affixe $\dfrac c2$.
:::

:::proof[Écriture complexe d'un antidéplacement]
| Étape | Justification |
|---|---|
| Pour l'axe $\Delta$ passant par $p$ et dirigé par $e^{i\varphi}$ : $S_\Delta(z) = p + e^{2i\varphi}\,\overline{(z - p)}$ | on se ramène à l'axe réel par $z \mapsto e^{-i\varphi}(z - p)$, on conjugue, puis on revient |
| Avec $p = \dfrac b2$ et $\varphi = \dfrac\theta2$ : $S_\Delta(z) = \dfrac b2 + a\bar z - \dfrac{a\bar b}2$ | $e^{2i\varphi} = a$ |
| $f(z) - S_\Delta(z) = b - \dfrac b2 + \dfrac{a\bar b}2 = \dfrac c2$ | on soustrait |
| $c = e^{i\theta/2}\left(e^{i\theta/2}\bar b + e^{-i\theta/2}b\right) = e^{i\theta/2}\cdot 2\,\mathrm{Re}\left(e^{-i\theta/2}b\right)$ | $e^{i\theta/2}\bar b$ est le conjugué de $e^{-i\theta/2}b$ |
| donc $\dfrac c2$ est un vecteur parallèle à $\Delta$, éventuellement nul, et $f = t_{c/2}\circ S_\Delta$ | multiple réel de $e^{i\theta/2}$ |
| Si $c = 0$, $f = S_\Delta$ ; sinon $f$ est une symétrie glissante | définition |
| Réciproquement, un antidéplacement est $t_{\vec w}\circ S_\Delta$, soit $z \mapsto e^{2i\varphi}\bar z + \left(p - e^{2i\varphi}\bar p + w\right)$ | forme de $S_\Delta$ ci-dessus |
| ce qui est bien de la forme $a\bar z + b$ avec $\lvert a\rvert = 1$ | $\lvert e^{2i\varphi}\rvert = 1$ |
:::

:::example[Trois antidéplacements en complexes]
- $z' = \bar z$ : $a = 1$, $b = 0$, $c = 0$ : la **symétrie d'axe réel**.
- $z' = i\bar z + 1 - i$ : $a = i = e^{i\pi/2}$, $b = 1 - i$ et $c = i\,(1 + i) + 1 - i = 0$. C'est la **symétrie orthogonale** d'axe la droite passant par $\dfrac{1-i}2$ de direction $e^{i\pi/4}$, soit la droite $y = x - 1$. Contrôle : $f(0) = 1 - i$ est bien le symétrique de $O$ par rapport à $y = x - 1$, soit $(1,-1)$ ✓.
- $z' = i\bar z + 1 + i$ : même $a$, $b = 1 + i$ et $c = i\,(1 - i) + 1 + i = 2 + 2i \neq 0$. C'est une **symétrie glissante** d'axe la droite $y = x$ (par $\dfrac{1+i}2$, direction $e^{i\pi/4}$) et de vecteur d'affixe $1 + i$. Contrôle : $f(1) = i + 1 + i = 1 + 2i$, et le symétrique de $1$ par rapport à $y = x$ est $i$, qu'on décale de $1 + i$ ✓.
:::

:::method[L'antidéplacement qui envoie $A$ sur $C$ et $B$ sur $D$, en complexes]
On écrit $z_C = a\bar z_A + b$ et $z_D = a\bar z_B + b$, puis on soustrait :
$$
a = \frac{z_D - z_C}{\overline{z_B - z_A}}, \qquad b = z_C - a\,\bar z_A.
$$
On calcule ensuite $c = a\bar b + b$ pour connaître la nature.

**Exemple (le carré du paragraphe précédent, cas $B \mapsto K$ et $K \mapsto A$).** Avec $z_B = 1$, $z_K = \dfrac12 + i$ et $z_A = 0$ :
$$
a = \frac{0 - \left(\frac12 + i\right)}{\overline{\frac12 + i - 1}} = \frac{-\frac12 - i}{-\frac12 - i} = 1, \qquad b = \left(\tfrac12 + i\right) - 1 = -\tfrac12 + i, \qquad c = a\bar b + b = -1.
$$
Donc $f(z) = \bar z - \dfrac12 + i$ : $c \neq 0$, symétrie glissante, d'axe passant par $\dfrac b2 = -\dfrac14 + \dfrac i2$ avec la direction $e^{i0}$ (soit $y = \dfrac12$) et de vecteur d'affixe $\dfrac c2 = -\dfrac12$. C'est exactement le résultat géométrique ✓.
:::

:::remark
**Lien avec les similitudes.** Pour une similitude indirecte $z' = a\bar z + b$ avec $\lvert a\rvert \neq 1$, le centre est $\dfrac{a\bar b + b}{1 - \lvert a\rvert^2}$. Quand $\lvert a\rvert = 1$, le dénominateur s'annule et le numérateur est exactement $c$. Si $c \neq 0$, $f\circ f$ est la translation de vecteur d'affixe $c$ : $f$ n'a aucun point fixe, c'est une symétrie glissante. Si $c = 0$, $f\circ f = \mathrm{Id}$ et $f$ fixe toute une droite, c'est une symétrie orthogonale.
:::

## 7. Bilan et méthodes pour les exercices

| Isométrie | Famille | Écriture complexe | Éléments |
|---|---|---|---|
| translation | déplacement, angle $0$ | $z' = z + b$ | vecteur d'affixe $b$ |
| rotation | déplacement, angle $\theta \not\equiv 0$ | $z' = az + b$, $a = e^{i\theta}$ | centre $\dfrac{b}{1-a}$, angle $\theta$ |
| symétrie orthogonale | antidéplacement | $z' = a\bar z + b$, $a\bar b + b = 0$ | axe par $\dfrac b2$, de direction $e^{i\theta/2}$ |
| symétrie glissante | antidéplacement | $z' = a\bar z + b$, $a\bar b + b \neq 0$ | même axe, vecteur d'affixe $\dfrac{a\bar b + b}2$ |

:::method[Quelle est cette transformation ?]
1. **L'écriture est $z' = az + b$ avec $\lvert a\rvert = 1$** : $a = 1$ donne une translation, $a \neq 1$ une rotation de centre $\dfrac b{1-a}$ et d'angle $\arg a$.
2. **L'écriture est $z' = a\bar z + b$ avec $\lvert a\rvert = 1$** : on calcule $c = a\bar b + b$ ; $c = 0$ donne une symétrie orthogonale, $c \neq 0$ une symétrie glissante.
3. **La transformation est donnée par $A \mapsto C$ et $B \mapsto D$** : vérifier $AB = CD$ ; il y a un déplacement ($a = \dfrac{z_D - z_C}{z_B - z_A}$) et un antidéplacement ($a = \dfrac{z_D - z_C}{\overline{z_B - z_A}}$) ; l'énoncé précise lequel est voulu.
4. **La transformation est donnée par une composée de miroirs** : compter les miroirs (pair : déplacement, impair : antidéplacement), puis appliquer les règles « deux miroirs ».
5. **Contrôler** en calculant l'image d'un point, à la main.
:::

:::method[Prouver qu'une figure a une propriété d'angle ou de longueur]
Placer l'origine du repère en un sommet bien choisi. Exprimer chaque point construit par une rotation avec la formule « $z' - \omega = e^{i\alpha}(z - \omega)$ ». Comparer les affixes : un rapport égal à $e^{i\alpha}$ donne à la fois l'égalité de longueurs et l'angle (voir l'exemple du parallélogramme).
:::

:::history
On attribue à Michel Chasles (vers 1830) le théorème sur le déplacement d'un solide dans l'espace : il se ramène toujours à un vissage, c'est-à-dire une rotation autour d'un axe combinée à une translation le long de cet axe. Dans le plan, il n'y a plus d'axe pour glisser le long de lui-même. Le vissage s'aplatit : il ne reste que la rotation ou la translation, ce que tu viens de démontrer. La relation « de Chasles » des angles et des vecteurs porte le même nom.
:::

## Vérifie-toi

::::check[Cinq miroirs]
Une isométrie est la composée de cinq symétries orthogonales. Peut-elle être une rotation ?

:::answer
Non. Cinq est impair, donc c'est un antidéplacement. Une rotation est un déplacement : angle conservé, aucun renversement. C'est donc une symétrie orthogonale ou une symétrie glissante (selon qu'elle a un point fixe ou non).
:::
::::

::::check[Lire une rotation]
Identifier $z' = \dfrac{1 + i}{\sqrt2}\,z + 1$ et donner son centre.

:::answer
$a = \dfrac{1 + i}{\sqrt2} = e^{i\pi/4}$ est de module $1$ et $a \neq 1$ : rotation d'angle $\dfrac\pi4$. Centre : $\omega = \dfrac1{1 - e^{i\pi/4}} = \dfrac12 + \dfrac i2\cot\dfrac\pi8 = \dfrac12 + \dfrac{1 + \sqrt2}2\,i \approx 0{,}5 + 1{,}207\,i$. Contrôle : $f(\omega) = \omega$ se vérifie numériquement, et $\lvert \omega - 0\rvert = \lvert \omega - 1\rvert \approx 1{,}31$ : le centre voit $O$ et $f(O) = 1$ à la même distance ✓.
:::
::::

::::check[Un antidéplacement]
Identifier $z' = -\bar z + 2i$.

:::answer
$a = -1 = e^{i\pi}$ et $b = 2i$, donc $c = a\bar b + b = -(-2i) + 2i = 4i \neq 0$ : symétrie glissante. L'axe passe par $\dfrac b2 = i$ avec la direction $e^{i\pi/2} = i$ : c'est l'axe des ordonnées. Le vecteur a pour affixe $\dfrac c2 = 2i$. Contrôle avec $3 + i$ : $f(3+i) = -(3 - i) + 2i = -3 + 3i$ ; la symétrie par rapport à l'axe des ordonnées donne $-3 + i$, puis le décalage $+2i$ donne $-3 + 3i$ ✓.
:::
::::

::::check[Deux rotations qui se compensent]
$r$ est la rotation de centre $O$ (origine) et d'angle $\dfrac\pi3$, $r'$ celle de centre $O'$ (affixe $2$) et d'angle $-\dfrac\pi3$. Que vaut $r'\circ r$ ?

:::answer
Les angles se compensent : $\dfrac\pi3 - \dfrac\pi3 = 0$ et les centres sont distincts, donc c'est une translation de vecteur non nul. Calcul : $r'\bigl(r(z)\bigr) = e^{-i\pi/3}\left(e^{i\pi/3}z - 2\right) + 2 = z + 2\left(1 - e^{-i\pi/3}\right) = z + 1 + i\sqrt3$. C'est la translation de vecteur d'affixe $1 + i\sqrt3$, de norme $2$. Contrôle : $O \mapsto e^{-i\pi/3}(0 - 2) + 2 = 1 + i\sqrt3$ ✓.
:::
::::

::::check[Réciproque d'une symétrie glissante]
Quelle est la réciproque de la symétrie glissante d'axe $\Delta$ et de vecteur $\vec u$ ?

:::answer
C'est la symétrie glissante de même axe $\Delta$ et de vecteur $-\vec u$. Car $(t_{\vec u}\circ S_\Delta)^{-1} = S_\Delta \circ t_{-\vec u} = t_{-\vec u}\circ S_\Delta$ : la translation de vecteur $-\vec u$, parallèle à l'axe, commute avec $S_\Delta$. Contrôle avec $z' = \bar z + 1$ (axe réel, vecteur $1$) : $z = \overline{z' - 1} = \bar z' - 1$ ✓, axe réel, vecteur $-1$.
:::
::::

::::challenge
Combien d'isométries laissent globalement invariant (a) un carré, (b) un rectangle non carré, (c) un triangle équilatéral ? Les décrire.

:::answer
Soit $ABCD$ la figure. Une isométrie qui la laisse invariante envoie un côté $[AB]$ sur un côté de même longueur, et le **couple** $(A, B)$ sur un couple de sommets $(C, D)$ voisins. Pour chaque couple possible, il y a exactement deux isométries qui conviennent (un déplacement et un antidéplacement, théorème du paragraphe 2), et elles diffèrent par la symétrie d'axe $(CD)$ : elles envoient la figure de part et d'autre de $(CD)$. Une seule la renvoie du bon côté, donc **une seule isométrie par couple**.

**(a) Carré** : $4$ choix pour l'image de $A$, $2$ voisins pour celle de $B$ : $8$ isométries, soit $4$ déplacements (identité, quarts de tour de centre $O$ dans les deux sens, symétrie centrale) et $4$ symétries orthogonales (deux médiatrices, deux diagonales). **(b) Rectangle non carré** : un côté de longueur $AB = a$ a $2$ positions ($[AB]$ ou le côté opposé), chacune dans $2$ sens : $4$ isométries, soit l'identité, la symétrie centrale et les deux symétries d'axes les médiatrices des côtés. **(c) Triangle équilatéral** : $3\times 2 = 6$ couples, soit $6$ isométries : $3$ déplacements (identité et deux rotations d'angle $\pm\dfrac{2\pi}3$ de centre le centre du triangle) et $3$ symétries d'axes les hauteurs. Contrôle numérique : en testant les $8$, $4$ et $6$ candidates avec les formules $z' = az + b$ et $z' = a\bar z + b$, on retrouve bien $8$, $4$ et $6$ isométries qui conservent la figure.
:::
::::
