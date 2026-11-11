---
title: "Statistiques : covariance, droite de régression et corrélation"
slug: "lycee-4eme-maths-statistiques"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Statistiques"
summary: "Deux mesures sur les mêmes individus : distributions marginales, covariance, droite de Mayer, droite des moindres carrés (avec démonstration), coefficient de corrélation et part de variance expliquée, puis redressement d'un nuage exponentiel avec le logarithme."
prerequisites: ["Moyenne, variance et écart-type", "Tableaux d'effectifs", "Équation d'une droite", "Sommet d'une parabole", "Fonction logarithme népérien", "Fonction exponentielle"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 10 « Statistiques »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une seule mesure, comme la note d'un élève, se résume par une moyenne et un écart-type. Deux mesures faites sur les **mêmes** élèves, par exemple les heures de révision et la note, posent une question nouvelle : **l'une dit-elle quelque chose de l'autre ?** Ce chapitre apprend à la poser en chiffres. La **covariance** dit si les deux grandeurs varient ensemble, la **droite des moindres carrés** permet de prévoir l'une à partir de l'autre, et le **coefficient de corrélation** dit si cette prévision mérite confiance.

![Six points donnant la note en fonction des heures de révision, leur point moyen G, la droite des moindres carrés en orange et les écarts verticaux entre les points et la droite.](/lessons/images/m4-sta-residus.svg "Six élèves (données fictives) : le point moyen G(7 ; 11), la droite des moindres carrés et les écarts verticaux qu'elle cherche à rendre aussi petits que possible.")

:::intuition
Imagine que tu poses une règle sur le nuage de points pour la faire passer « au mieux ». Chaque point est à une certaine distance verticale de la règle. La règle **des moindres carrés** est celle qui rend la somme des **carrés** de ces écarts la plus petite possible. Elle passe toujours par le point moyen $G$, et sa pente se calcule avec un seul nouveau nombre, la covariance. Le coefficient de corrélation répond ensuite à une question simple : la règle explique-t-elle beaucoup du nuage, ou presque rien ?
:::

## 1. Séries doubles et distributions marginales

:::definition[Série statistique double]
Une **série statistique double** $(X, Y)$ est la donnée de deux caractères numériques $X$ et $Y$ mesurés sur les $n$ individus d'un même échantillon : l'individu $i$ fournit le couple $(x_i, y_i)$. Le **nuage de points** est l'ensemble des points $M_i(x_i, y_i)$ dans un repère orthogonal.

Les **distributions marginales** sont celles de $X$ seul et de $Y$ seul. Si $X$ prend les valeurs distinctes $x_1, \dots, x_p$ avec les effectifs $n_1, \dots, n_p$ (centres de classes si $X$ est continue) :
$$
\begin{gathered}
\bar X = \frac1n\sum_{i=1}^{p} n_ix_i,\\
V(X) = \frac1n\sum_{i=1}^{p} n_ix_i^2 - \bar X^2,\\
\sigma(X) = \sqrt{V(X)}.
\end{gathered}
$$
Le **point moyen** du nuage est $G(\bar X, \bar Y)$.
:::

:::example[Six élèves : le fil rouge du chapitre]
Six élèves ont noté leurs heures de révision hebdomadaires $X$ et leur note $Y$ (données fictives, choisies pour que le calcul à la main reste court).

| élève | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $x_i$ (heures) | 2 | 4 | 6 | 8 | 10 | 12 |
| $y_i$ (note) | 5 | 9 | 10 | 12 | 14 | 16 |

Les sommes valent $\sum x_i = 42$ et $\sum y_i = 66$, donc $\bar X = 7$ et $\bar Y = 11$. Avec $\sum x_i^2 = 364$ et $\sum y_i^2 = 802$ :
$$
\begin{gathered}
V(X) = \frac{364}{6} - 49 = \frac{35}{3},\\
V(Y) = \frac{802}{6} - 121 = \frac{38}{3}.
\end{gathered}
$$
Donc $\sigma(X)\approx3{,}42$ et $\sigma(Y)\approx3{,}56$. Le point moyen est $G(7\,;11)$.
:::

:::definition[Tableau à double entrée]
Quand l'échantillon est grand, on regroupe. Le nombre $n_{ij}$ est l'effectif des individus pour lesquels $X = x_i$ et $Y = y_j$ (ou pour lesquels $X$ et $Y$ sont dans les classes de centres $x_i$ et $y_j$). Les **effectifs marginaux** sont les totaux des lignes et des colonnes :
$$
\begin{gathered}
n_{i\bullet} = \sum_{j} n_{ij},\\
n_{\bullet j} = \sum_{i} n_{ij},\\
\sum_{i,j} n_{ij} = n.
\end{gathered}
$$
La distribution marginale de $X$ est $(x_i, n_{i\bullet})$, celle de $Y$ est $(y_j, n_{\bullet j})$.
:::

:::example[Écran et sommeil : un tableau à double entrée]
Enquête fictive sur $20$ élèves : $X$ est le temps passé devant un écran par jour (en heures) et $Y$ la durée de sommeil par nuit (en heures).

| $X \backslash Y$ | $7$ | $8$ | $9$ | total |
|---|---|---|---|---|
| $1$ | $0$ | $2$ | $4$ | $6$ |
| $2$ | $3$ | $5$ | $2$ | $10$ |
| $3$ | $3$ | $1$ | $0$ | $4$ |
| total | $6$ | $8$ | $6$ | $20$ |

La dernière colonne est la marginale de $X$ ($1$ h pour $6$ élèves, $2$ h pour $10$, $3$ h pour $4$), la dernière ligne celle de $Y$. Donc
$$
\begin{gathered}
\bar X = \frac{6 + 20 + 12}{20} = 1{,}9,\\
\bar Y = \frac{42 + 64 + 54}{20} = 8.
\end{gathered}
$$
Pour les variances, $V(X) = \dfrac{6 + 40 + 36}{20} - 1{,}9^2 = 4{,}1 - 3{,}61 = 0{,}49$ et $V(Y) = \dfrac{294 + 512 + 486}{20} - 8^2 = 0{,}6$.
:::

## 2. La covariance

La variance dit comment **une** variable s'étale autour de sa moyenne. La covariance fait la même chose pour **deux** variables à la fois : au lieu d'élever un écart au carré, on multiplie l'écart de $X$ par l'écart de $Y$.

:::definition[Covariance]
La **covariance** de la série double $(X, Y)$ est
$$
\begin{gathered}
\operatorname{cov}(X, Y) =\\
\tfrac1n\sum_{i=1}^{n}(x_i - \bar X)(y_i - \bar Y).
\end{gathered}
$$
On a $\operatorname{cov}(X, Y) = \operatorname{cov}(Y, X)$ et $\operatorname{cov}(X, X) = V(X)$. Pour un tableau à double entrée, chaque couple est compté $n_{ij}$ fois.
:::

![Le nuage des six élèves partagé en quatre quadrants par deux droites qui se coupent en G, avec deux rectangles ayant G pour sommet.](/lessons/images/m4-sta-quadrants.svg "Chaque point forme avec G un rectangle. En haut à droite ou en bas à gauche, le produit des écarts est positif (+) ; en haut à gauche ou en bas à droite, il est négatif (−). La covariance est la moyenne de ces aires signées.")

:::intuition
Place-toi en $G$. Chaque point $M_i$ dessine avec $G$ un rectangle de côtés $\lvert x_i - \bar X\rvert$ et $\lvert y_i - \bar Y\rvert$, d'aire **signée** $(x_i - \bar X)(y_i - \bar Y)$. Elle est positive si $M_i$ est en haut à droite ou en bas à gauche de $G$ (les deux écarts ont le même signe), négative dans les deux autres quadrants. La covariance est la **moyenne de ces aires signées**. Un nuage qui monte remplit les quadrants $+$ : covariance positive. Un nuage qui descend remplit les quadrants $-$ : covariance négative. Un nuage « rond » mélange les deux : covariance proche de $0$.
:::

:::theorem[Formule de König-Huygens]
$$
\begin{gathered}
\operatorname{cov}(X, Y) =\\
\tfrac1n\sum_{i=1}^{n}x_iy_i - \bar X\,\bar Y.
\end{gathered}
$$
Pour un tableau à double entrée, la somme devient $\dfrac1n\sum_{i,j}n_{ij}\,x_iy_j$.
:::

:::proof[Formule de König-Huygens]
On note $\overline{xy} = \dfrac1n\sum x_iy_i$ la moyenne des produits.

| Étape | Justification |
|---|---|
| $(x_i - \bar X)(y_i - \bar Y) = x_iy_i - \bar Y x_i - \bar X y_i + \bar X\bar Y$ | on développe le produit |
| On fait la moyenne des $n$ termes | la moyenne d'une somme est la somme des moyennes |
| $\operatorname{cov}(X, Y) = \overline{xy} - \bar Y\bar X - \bar X\bar Y + \bar X\bar Y$ | la moyenne des $x_i$ est $\bar X$, celle des $y_i$ est $\bar Y$ ; $\bar X\bar Y$ est constant |
| $\operatorname{cov}(X, Y) = \overline{xy} - \bar X\bar Y$ | $-\bar X\bar Y - \bar X\bar Y + \bar X\bar Y = -\bar X\bar Y$ |
| Pour un tableau, $\sum x_iy_i$ devient $\sum n_{ij}x_iy_j$ | le couple $(x_i, y_j)$ est compté $n_{ij}$ fois |
:::

:::example[La covariance du fil rouge]
**Par les écarts à $G$.**

| $x_i - 7$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |
|---|---|---|---|---|---|---|
| $y_i - 11$ | $-6$ | $-2$ | $-1$ | $1$ | $3$ | $5$ |
| produit | $30$ | $6$ | $1$ | $1$ | $9$ | $25$ |

La somme des produits vaut $72$, donc $\operatorname{cov}(X, Y) = \dfrac{72}{6} = 12$. Les deux rectangles de la figure sont ceux de l'élève $6$ (aire $25$) et de l'élève $2$ (aire $6$).

**Par la formule de König-Huygens.** $\sum x_iy_i = 534$, donc $\dfrac{534}{6} - 7\times11 = 89 - 77 = 12$ ✓.

La covariance est positive : les heures de révision et la note varient dans le même sens.
:::

:::example[La covariance d'un tableau à double entrée]
Reprenons écran et sommeil. On calcule $\sum n_{ij}x_iy_j$ ligne par ligne :
- ligne $X = 1$ : $1\times(0\cdot7 + 2\cdot8 + 4\cdot9) = 52$ ;
- ligne $X = 2$ : $2\times(3\cdot7 + 5\cdot8 + 2\cdot9) = 2\times79 = 158$ ;
- ligne $X = 3$ : $3\times(3\cdot7 + 1\cdot8 + 0\cdot9) = 3\times29 = 87$.

Le total est $297$, donc
$$
\begin{gathered}
\operatorname{cov}(X, Y) = \tfrac{297}{20} - 1{,}9\times8\\
= 14{,}85 - 15{,}2\\
= -0{,}35.
\end{gathered}
$$
Covariance négative : plus on passe de temps devant l'écran, moins on dort (dans cette enquête fictive).
:::

:::property[Règles de calcul]
- $\operatorname{cov}(X + c, Y) = \operatorname{cov}(X, Y)$ : changer d'origine ne change rien, car les écarts à la moyenne sont les mêmes.
- $\operatorname{cov}(aX, bY) = ab\,\operatorname{cov}(X, Y)$ : changer d'échelle multiplie, car chaque écart est multiplié par $a$ (ou $b$).
:::

:::warning
La covariance a pour unité le **produit** des unités de $X$ et de $Y$ (ici des « heures × points »). Exprimer le temps en minutes au lieu d'heures multiplierait la covariance par $60$ sans que le nuage change d'allure : on ne peut donc pas dire si $12$ est « grand » ou « petit ». C'est pour cela que le paragraphe 5 la divise par les écarts-types.
:::

## 3. La méthode de Mayer

:::definition[Ajustement affine]
Quand le nuage a l'allure d'une droite, on cherche un modèle $Y = aX + b$. La variable $X$ est la **variable explicative**, $Y$ la **variable expliquée**, et la droite $y = ax + b$ est une **droite d'ajustement** de $Y$ en $X$. On s'en sert pour **prévoir** $Y$ quand on connaît $X$.
:::

:::method[La méthode de Mayer]
1. Calculer le point moyen $G(\bar X, \bar Y)$ du nuage.
2. Ranger les points par abscisses croissantes et les partager en **deux parties** ayant à peu près le même nombre de points.
3. Calculer les points moyens $G_1$ et $G_2$ des deux parties.
4. La **droite de Mayer** est la droite $(G_1G_2)$.

Elle passe par $G$ : la moyenne globale est la moyenne pondérée des moyennes des deux parties, donc $G$ est un barycentre de $G_1$ et $G_2$.
:::

![Le nuage des six élèves coupé en deux parties, les points moyens G1, G2 et G, et la droite de Mayer qui les relie.](/lessons/images/m4-sta-mayer.svg "Partie I (3 premiers points, en vert) et partie II (3 derniers, en orange) : leurs points moyens G1(4 ; 8) et G2(10 ; 14) définissent la droite de Mayer y = x + 4, qui passe par G(7 ; 11).")

:::example[Mayer sur les six élèves]
On prend les élèves $1$ à $3$ pour la partie I et $4$ à $6$ pour la partie II.
- Partie I : $\dfrac{2 + 4 + 6}{3} = 4$ et $\dfrac{5 + 9 + 10}{3} = 8$, donc $G_1(4, 8)$.
- Partie II : $\dfrac{8 + 10 + 12}{3} = 10$ et $\dfrac{12 + 14 + 16}{3} = 14$, donc $G_2(10, 14)$.

La pente est $\dfrac{14 - 8}{10 - 4} = 1$ et $y - 8 = x - 4$ : la droite de Mayer est $y = x + 4$. Contrôle : elle passe par $G(7, 11)$ puisque $7 + 4 = 11$ ✓. Pour $9$ heures de révision, elle prévoit la note $13$.
:::

:::remark
La méthode de Mayer est rapide à la main, mais pas canonique : deux personnes qui coupent le nuage à des endroits différents obtiennent deux droites différentes. Les moindres carrés lèvent cette ambiguïté.
:::

## 4. Les moindres carrés

:::definition[Écarts et somme des carrés]
Pour une droite $y = ax + b$, l'**écart** du point $M_i$ est $y_i - (ax_i + b)$, la distance **verticale** signée entre le point et la droite. On cherche $(a, b)$ qui rend minimale
$$
\begin{gathered}
S(a, b) =\\
\sum_{i=1}^{n}(y_i - ax_i - b)^2.
\end{gathered}
$$
:::

:::theorem[Droite de régression]
Si $V(X)\neq0$, la somme $S(a, b)$ est minimale pour
$$
\begin{gathered}
a = \frac{\operatorname{cov}(X, Y)}{V(X)},\\
b = \bar Y - a\bar X.
\end{gathered}
$$
La droite $y = ax + b$ est la **droite des moindres carrés** (ou droite de **régression**) de $Y$ en $X$. Elle passe par $G$, et la valeur minimale de $S$ est $n\,V(Y)\,(1 - \rho^2)$, où $\rho$ est le coefficient défini au paragraphe 5.
:::

:::proof[Droite de régression]
On pose $u_i = x_i - \bar X$ et $v_i = y_i - \bar Y$. Alors $\sum u_i = \sum v_i = 0$, $\frac1n\sum u_i^2 = V(X)$, $\frac1n\sum v_i^2 = V(Y)$ et $\frac1n\sum u_iv_i = \operatorname{cov}(X, Y)$.

| Étape | Justification |
|---|---|
| $y_i - ax_i - b = (v_i - au_i) - d$ avec $d = a\bar X + b - \bar Y$ | $y_i = \bar Y + v_i$ et $x_i = \bar X + u_i$ |
| $S = \sum(v_i - au_i)^2 - 2d\sum(v_i - au_i) + nd^2$ | on développe le carré d'une différence |
| $\sum(v_i - au_i) = 0$, donc $S = \sum(v_i - au_i)^2 + nd^2$ | $\sum u_i = \sum v_i = 0$ |
| Le terme $nd^2$ est nul, donc minimal, quand $d = 0$, c'est-à-dire $b = \bar Y - a\bar X$ | un carré est positif ou nul, et pour tout $a$ on peut choisir $b$ pour annuler $d$ |
| $\sum(v_i - au_i)^2 = n\left(V(Y) - 2a\operatorname{cov}(X, Y) + a^2V(X)\right)$ | on développe en utilisant les quatre moyennes ci-dessus |
| Ce trinôme en $a$ a un coefficient dominant $nV(X) > 0$ : il est minimal en $a = \dfrac{\operatorname{cov}(X, Y)}{V(X)}$ | sommet d'une parabole |
| Sa valeur minimale est $n\left(V(Y) - \dfrac{\operatorname{cov}(X, Y)^2}{V(X)}\right) = nV(Y)(1 - \rho^2)$ | on remplace $a$, puis on factorise $V(Y)$ |
:::

:::example[La droite des moindres carrés du fil rouge]
On a $a = \dfrac{12}{35/3} = \dfrac{36}{35}\approx1{,}03$ et $b = 11 - \dfrac{36}{35}\times7 = 11 - \dfrac{36}{5} = \dfrac{19}{5} = 3{,}8$. La droite est
$$
y = \frac{36}{35}\,x + 3{,}8.
$$
Chaque heure de révision supplémentaire rapporte en moyenne $1{,}03$ point. Pour $9$ heures, on prévoit $\dfrac{36\times9}{35} + 3{,}8\approx13{,}06$.

Les écarts $y_i - (ax_i + b)$ valent $-0{,}857$ ; $+1{,}086$ ; $+0{,}029$ ; $-0{,}029$ ; $-0{,}086$ ; $-0{,}143$. Leur somme est $0$ (la droite passe par $G$) et la somme de leurs carrés vaut $\dfrac{68}{35}\approx1{,}943$.

La droite de Mayer $y = x + 4$ donne les écarts $-1$, $+1$, puis quatre zéros : somme des carrés $2$. Les moindres carrés font mieux ($1{,}943 < 2$), comme promis.
:::

:::warning
**Interpoler, pas extrapoler.** Prévoir la note pour $9$ heures, à l'intérieur de l'intervalle observé $[2\,;12]$, est raisonnable. Prévoir pour $20$ heures donnerait $\dfrac{36\times20}{35} + 3{,}8\approx24{,}4$ **sur $20$** : absurde. Un modèle n'est valable que là où l'on a des données.
:::

:::property[Deux droites de régression]
En échangeant les rôles de $X$ et $Y$, on obtient la droite de $X$ en $Y$ : $x = a'y + b'$ avec $a' = \dfrac{\operatorname{cov}(X, Y)}{V(Y)}$ et $b' = \bar X - a'\bar Y$. Les deux droites passent par $G$. Dans le repère $(x, y)$, la première a pour pente $a$ et la seconde pour pente $\dfrac{1}{a'}$, et $a\,a' = \rho^2$. Elles sont confondues si et seulement si $\rho^2 = 1$.
:::

:::example[Deux droites pour un même nuage]
Écran et sommeil : $\operatorname{cov} = -0{,}35$, $V(X) = 0{,}49$, $V(Y) = 0{,}6$.
- De $Y$ en $X$ : $a = \dfrac{-0{,}35}{0{,}49} = -\dfrac57\approx-0{,}71$ et $b = 8 + \dfrac57\times1{,}9 = \dfrac{131}{14}\approx9{,}36$.
- De $X$ en $Y$ : $a' = \dfrac{-0{,}35}{0{,}6} = -\dfrac{7}{12}$, soit une pente $\dfrac1{a'} = -\dfrac{12}{7}\approx-1{,}71$ dans le repère $(x, y)$.

Les deux droites se coupent en $G(1{,}9\,;8)$ mais leurs pentes diffèrent beaucoup, et $a\,a' = \dfrac57\times\dfrac7{12} = \dfrac5{12}\approx0{,}42$ : c'est $\rho^2$, loin de $1$. Plus le nuage est mince autour d'une droite, plus les deux droites se rapprochent.
:::

![Un tableau à double entrée représenté par des bulles proportionnelles aux effectifs, avec la droite de Y en X, la droite de X en Y et le point moyen G.](/lessons/images/m4-sta-droites.svg "Écran et sommeil : chaque bulle porte son effectif. Les deux droites de régression se coupent en G mais restent bien distinctes : le nuage est épais, la corrélation est modérée.")

## 5. Le coefficient de corrélation

:::definition[Coefficient de corrélation linéaire]
Si $\sigma(X)\neq0$ et $\sigma(Y)\neq0$, le **coefficient de corrélation linéaire** de $(X, Y)$ est
$$
\rho = \frac{\operatorname{cov}(X, Y)}{\sigma(X)\,\sigma(Y)}.
$$
:::

:::theorem[Propriétés de $\rho$]
- $-1\leqslant\rho\leqslant1$.
- $\rho = \pm1$ si et seulement si tous les points du nuage sont **alignés**.
- $\rho$ a le signe de la covariance, et ne change pas quand on change d'unité ou d'origine : $\rho(aX + c, bY + d) = \rho(X, Y)$ si $a > 0$ et $b > 0$.
- La somme minimale des carrés des écarts vaut $n\,V(Y)\,(1 - \rho^2)$ : **$\rho^2$ est la part de la variance de $Y$ expliquée par la droite**.
:::

:::proof[Propriétés de $\rho$]
| Étape | Justification |
|---|---|
| La somme minimale $nV(Y)(1 - \rho^2)$ est une somme de carrés, donc positive ou nulle | théorème du paragraphe 4 |
| Donc $1 - \rho^2\geqslant0$, c'est-à-dire $-1\leqslant\rho\leqslant1$ | $nV(Y) > 0$ |
| $\rho^2 = 1$ si et seulement si la somme est nulle, donc si et seulement si tous les écarts sont nuls | une somme de carrés est nulle seulement si chaque terme l'est |
| Tous les écarts sont nuls si et seulement si les points sont sur la droite | un écart nul signifie que le point est sur la droite |
| Pour $a, b > 0$ : $\operatorname{cov}(aX + c, bY + d) = ab\operatorname{cov}(X, Y)$, $\sigma(aX + c) = a\sigma(X)$, $\sigma(bY + d) = b\sigma(Y)$ | règles de calcul de la covariance et de l'écart-type |
| Le quotient est inchangé | $ab$ se simplifie |
:::

:::intuition
$\rho^2$ est la fraction de la dispersion des $y_i$ que la droite « explique ». Pour le fil rouge, $\rho^2 = \dfrac{1296}{1330}\approx0{,}974$ : $97{,}4\ \%$ de la dispersion des notes est expliquée par les heures de révision, il reste $2{,}6\ \%$. Pour écran et sommeil, $\rho^2 = \dfrac{5}{12}\approx0{,}42$ : à peine $42\ \%$.
:::

:::method[Quand un ajustement affine est-il justifié ?]
Convention du programme : l'ajustement affine est **justifié** lorsque
$$
\lvert\rho\rvert > \frac{\sqrt3}{2}\approx0{,}866,
$$
c'est-à-dire $\rho^2 > 0{,}75$ : la droite explique plus des trois quarts de la dispersion.
:::

:::example[Deux verdicts]
**Fil rouge.** $\rho = \dfrac{12}{\sqrt{\frac{35}{3}\times\frac{38}{3}}} = \dfrac{36}{\sqrt{1330}}\approx0{,}987$. Ajustement justifié.

**Écran et sommeil.** $\rho = \dfrac{-0{,}35}{0{,}7\times\sqrt{0{,}6}}\approx-0{,}645$, et $\lvert\rho\rvert < 0{,}866$ : ajustement **non justifié**. La prévision $\dfrac{-5}{7}\times3 + \dfrac{131}{14}\approx7{,}2$ heures de sommeil pour $3$ heures d'écran est à prendre avec des pincettes.
:::

:::warning
Deux pièges.
- **$\rho = 0$ ne veut pas dire « aucun lien ».** Le coefficient ne détecte que les liens **affines**. Avec $X = -2, -1, 0, 1, 2$ et $Y = X^2$ ($Y$ est une fonction exacte de $X$ !), on a $\bar X = 0$, $\bar Y = 2$ et $\frac15\sum x_iy_i = \frac{-8 - 1 + 0 + 1 + 8}{5} = 0$, donc $\operatorname{cov}(X, Y) = 0$ et $\rho = 0$.
- **Corrélation n'est pas causalité.** Les ventes de glaces et le nombre de noyades sont corrélés : la vraie cause est la chaleur. Un $\rho$ proche de $1$ dit que les variables varient ensemble, pas que l'une provoque l'autre.
:::

## 6. Quand le nuage n'est pas une droite

:::intuition
Un nuage courbe n'est pas une défaite : on **change de variable** pour le redresser. Si $y = A\,q^x$ (croissance exponentielle), alors $\ln y = \ln A + x\ln q$ est une fonction **affine** de $x$. On pose $Z = \ln Y$, on ajuste $Z$ en $X$ par les moindres carrés, puis on revient à $Y$ avec l'exponentielle. De même, si $y = kx^2$, on pose $X' = x^2$ et $y$ est affine en $X'$.
:::

:::example[Un site qui décolle]
Nombre de visiteurs d'un site, en centaines, pendant six mois (données fictives) :

| mois $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| visiteurs $y$ | 100 | 135 | 180 | 245 | 330 | 450 |
| $z = \ln y$ | 4,605 | 4,905 | 5,193 | 5,501 | 5,799 | 6,109 |

**Directement.** $\rho(X, Y)\approx0{,}976 > 0{,}866$ : le critère accepte la droite. Celle-ci est $y\approx68{,}6\,x + 68{,}6$ et prévoit, pour le mois $8$, $617$ centaines.

**Après changement de variable.** $\rho(X, Z)\approx0{,}99995$. La droite de $Z$ en $X$ est $z\approx0{,}300\,x + 4{,}601$, donc
$$
\begin{gathered}
y = e^{4{,}601}\,e^{0{,}300\,x}\\
\approx99{,}6\times1{,}350^{\,x},
\end{gathered}
$$
soit environ $35\ \%$ de croissance par mois. Pour le mois $8$ : environ $1\,101$ centaines (calcul avec les valeurs non arrondies). Contrôle : $100\times1{,}35^8\approx1\,103$ ✓.

Le critère $\lvert\rho\rvert > 0{,}866$ est un garde-fou minimal, pas une preuve que la droite est le bon modèle : **regarde toujours le nuage**.
:::

![Six points de croissance exponentielle, la courbe exponentielle ajustée et la droite de régression, avec leurs prévisions pour le mois 8.](/lessons/images/m4-sta-exp.svg "La droite de régression suit bien les six points mais prévoit 617 pour le mois 8 ; le modèle exponentiel en prévoit environ 1 101. Les deux ont un coefficient de corrélation supérieur à 0,87 : seul le nuage montre qui a raison.")

## 7. Bilan et méthodes pour les exercices

:::summary
| Notion | Formule |
|---|---|
| moyenne, variance | $\bar X = \frac1n\sum x_i$, $V(X) = \frac1n\sum x_i^2 - \bar X^2$ |
| point moyen | $G(\bar X, \bar Y)$ |
| covariance | $\frac1n\sum x_iy_i - \bar X\bar Y$ |
| droite de Mayer | $(G_1G_2)$, passe par $G$ |
| droite de $Y$ en $X$ | $y - \bar Y = \dfrac{\operatorname{cov}}{V(X)}(x - \bar X)$ |
| corrélation | $\rho = \dfrac{\operatorname{cov}}{\sigma(X)\sigma(Y)}$, $\lvert\rho\rvert\leqslant1$ |
| ajustement justifié | $\lvert\rho\rvert > \frac{\sqrt3}{2}$ |
| part expliquée | $\rho^2$ |
| nuage exponentiel | $Z = \ln Y$ est affine en $X$ |
:::

:::method[Quel outil pour quelle question ?]
- **Les deux grandeurs varient-elles dans le même sens ?** Signe de $\operatorname{cov}(X, Y)$.
- **Le lien est-il fort ?** Calculer $\rho$ : proche de $\pm1$, oui ; en dessous de $0{,}866$ en valeur absolue, l'ajustement n'est pas justifié.
- **Prévoir $Y$ pour une valeur $x_0$ de $X$** : droite de régression de $Y$ en $X$, à condition que $\lvert\rho\rvert > 0{,}866$ et que $x_0$ soit dans l'intervalle observé.
- **Tableau à double entrée à la main** : trois colonnes pour les marginales ($n_ix_i$, $n_ix_i^2$) et la somme $\sum n_{ij}x_iy_j$ ligne par ligne.
- **Méthode au choix de l'énoncé** : Mayer (deux points moyens) ou moindres carrés (formules du théorème).
- **Nuage qui se courbe** : tester $\ln Y$, ou $X^2$, et recalculer $\rho$.
:::

:::tic[Un nuage en sept formules]
On place les $x_i$ du fil rouge en `A2:A7` et les $y_i$ en `B2:B7`.

| cellule | formule | résultat |
|---|---|---|
| `D2` | `=MOYENNE(A2:A7)` | $\bar X = 7$ |
| `D3` | `=MOYENNE(B2:B7)` | $\bar Y = 11$ |
| `D4` | `=ECARTYPE.PEARSON(A2:A7)` | $\sigma(X)\approx3{,}416$ |
| `D5` | `=COVARIANCE.PEARSON(A2:A7;B2:B7)` | $\operatorname{cov} = 12$ |
| `D6` | `=COEFFICIENT.CORRELATION(A2:A7;B2:B7)` | $\rho\approx0{,}987$ |
| `D7` | `=PENTE(B2:B7;A2:A7)` | $a\approx1{,}029$ |
| `D8` | `=ORDONNEE.ORIGINE(B2:B7;A2:A7)` | $b = 3{,}8$ |

**Attention :** `ECARTYPE` (sans `.PEARSON`) et `COVARIANCE.STANDARD` divisent par $n - 1$, pas par $n$ : ce ne sont pas les formules du cours, et les résultats diffèrent. Utilise les versions `.PEARSON`. Pour la figure, insère un nuage de points, ajoute une **courbe de tendance linéaire** et coche « afficher le $R^2$ » : tu y lis $0{,}9744$, soit $\rho^2$.
:::

:::history
Le mot « régression » vient de Francis Galton, qui remarque en 1886 que les fils de pères très grands sont en moyenne grands, mais **moins** que leurs pères : leur taille « régresse » vers la moyenne. Pour la droite des moindres carrés, la première publication est celle de Legendre (1805) ; Gauss affirme l'utiliser depuis 1795 et la publie en 1809, d'où une célèbre querelle de priorité. Karl Pearson donne vers 1896 sa forme actuelle au coefficient de corrélation, en s'appuyant sur les travaux de Galton. La méthode de Mayer porte le nom de l'astronome allemand Tobias Mayer, qui en 1750 combinait ainsi ses équations d'observations de la Lune : il les regroupait par paquets avant de les additionner.
:::

## Vérifie-toi

::::check[Un petit nuage]
Cinq points : $X = 1, 2, 3, 4, 5$ et $Y = 2, 4, 5, 4, 5$. Calculer la covariance, le coefficient de corrélation et la droite de régression de $Y$ en $X$. L'ajustement est-il justifié ?

:::answer
$\bar X = 3$ et $\bar Y = 4$. Avec $\sum x_i^2 = 55$, $\sum y_i^2 = 86$ et $\sum x_iy_i = 66$ :
$$
\begin{gathered}
V(X) = 11 - 9 = 2\\
V(Y) = 17{,}2 - 16\\
= 1{,}2\\
\operatorname{cov}(X, Y) =\\
13{,}2 - 12 = 1{,}2
\end{gathered}
$$
La droite : $a = \dfrac{1{,}2}{2} = 0{,}6$ et $b = 4 - 0{,}6\times3 = 2{,}2$, soit $y = 0{,}6x + 2{,}2$. Le coefficient est $\rho = \dfrac{1{,}2}{\sqrt{2\times1{,}2}} = \sqrt{0{,}6}\approx0{,}775 < 0{,}866$ : l'ajustement n'est **pas** justifié ($\rho^2 = 0{,}6$, la droite n'explique que $60\ \%$ de la dispersion).
:::
::::

::::check[Un tableau à double entrée]
Sur $10$ individus, le tableau donne les effectifs $n_{ij}$ :

| $X \backslash Y$ | $1$ | $2$ |
|---|---|---|
| $0$ | $4$ | $1$ |
| $1$ | $1$ | $4$ |

Calculer $\operatorname{cov}(X, Y)$ et $\rho$, puis interpréter.

:::answer
Marginales : $X$ vaut $0$ pour $5$ individus et $1$ pour $5$ ; $Y$ vaut $1$ pour $5$ et $2$ pour $5$. Donc $\bar X = 0{,}5$ et $\bar Y = 1{,}5$, puis $V(X) = 0{,}5 - 0{,}25 = 0{,}25$ et $V(Y) = 2{,}5 - 2{,}25 = 0{,}25$.

Seule la ligne $X = 1$ compte dans $\sum n_{ij}x_iy_j$ : $1\cdot1\cdot1 + 4\cdot1\cdot2 = 9$. Donc $\operatorname{cov}(X, Y) = \frac{9}{10} - 0{,}5\times1{,}5$, c'est-à-dire
$$
0{,}9 - 0{,}75 = 0{,}15.
$$
Alors $\rho = \dfrac{0{,}15}{0{,}5\times0{,}5} = 0{,}6$. La covariance est positive (les grandes valeurs vont ensemble), mais $\rho = 0{,}6 < 0{,}866$ : le lien est modéré et l'ajustement affine n'est pas justifié.
:::
::::

::::check[Mayer]
Six points : $X = 1, 2, 3, 4, 5, 6$ et $Y = 3, 5, 6, 8, 9, 12$. Donner la droite de Mayer en séparant les trois premiers points des trois derniers, et vérifier qu'elle passe par $G$. Que prévoit-elle pour $x = 8$ ?

:::answer
$G_1 = \left(2, \tfrac{14}{3}\right)$ et $G_2 = \left(5, \tfrac{29}{3}\right)$. La pente est $\dfrac{29/3 - 14/3}{5 - 2} = \dfrac53$, et $b = \dfrac{14}{3} - \dfrac53\times2 = \dfrac43$ :
$$
y = \frac53\,x + \frac43.
$$
Le point moyen est $G\left(3{,}5, \tfrac{43}{6}\right)$ et $\dfrac53\times3{,}5 + \dfrac43 = \dfrac{35}{6} + \dfrac86 = \dfrac{43}{6}$ ✓. Pour $x = 8$ : $\dfrac{40}{3} + \dfrac43 = \dfrac{44}{3}\approx14{,}7$ (une légère extrapolation).
:::
::::

::::check[Lire un coefficient]
Une série vérifie $\sigma(X) = 2$, $\sigma(Y) = 3$ et $\operatorname{cov}(X, Y) = -5{,}4$. Calculer $\rho$, la pente de la droite de $Y$ en $X$ et interpréter.

:::answer
$\rho = \dfrac{-5{,}4}{2\times3} = -0{,}9$. Comme $\lvert\rho\rvert = 0{,}9 > 0{,}866$, l'ajustement affine est justifié. La pente est $a = \dfrac{-5{,}4}{2^2} = -1{,}35$ : quand $X$ augmente de $1$, $Y$ diminue en moyenne de $1{,}35$. Enfin $\rho^2 = 0{,}81$ : la droite explique $81\ \%$ de la dispersion de $Y$.
:::
::::

::::check[Revenir de $\ln y$ à $y$]
Un ajustement par les moindres carrés donne $z = 0{,}2\,x + 3$ avec $z = \ln y$. Écrire $y$ en fonction de $x$, de combien $y$ croît-il à chaque unité de $x$, et que vaut $y$ pour $x = 10$ ?

:::answer
$y = e^{z} = e^{3}\,e^{0{,}2x}\approx20{,}09\times1{,}2214^{\,x}$. Comme $e^{0{,}2}\approx1{,}2214$, $y$ augmente d'environ $22{,}1\ \%$ à chaque unité de $x$. Pour $x = 10$, $z = 5$ donc $y = e^5\approx148{,}4$.
:::
::::

::::check[Changer d'unité]
La covariance de la taille $X$ (en cm) et du poids $Y$ (en kg) de $30$ élèves vaut $24$, avec $\sigma(X) = 6$ et $\sigma(Y) = 5$. Que deviennent la covariance et le coefficient de corrélation si l'on exprime la taille en mètres ?

:::answer
Avec $X' = 0{,}01\,X$, la covariance est multipliée par $0{,}01$ : $\operatorname{cov}(X', Y) = 0{,}24$. Mais $\sigma(X')$ est aussi multiplié par $0{,}01$, donc $\rho$ ne change pas :
$$
\rho = \tfrac{24}{6\times5} = \tfrac{0{,}24}{0{,}06\times5} = 0{,}8.
$$
La covariance dépend des unités, **pas** $\rho$. Ici $\rho = 0{,}8 < 0{,}866$ : l'ajustement affine n'est pas justifié.
:::
::::

::::challenge
**La régression vers la moyenne.** Galton a observé que les fils de pères très grands sont en moyenne grands, mais moins que leurs pères. Modélisons : les tailles des pères $X$ et des fils $Y$ sont **centrées réduites** ($\bar X = \bar Y = 0$, $\sigma(X) = \sigma(Y) = 1$) avec $\rho = 0{,}5$.
1. Écrire la droite de régression de $Y$ en $X$ et celle de $X$ en $Y$.
2. Un père mesure $2$ écarts-types de plus que la moyenne : quelle taille prévoit-on pour son fils ? Et pour le père d'un fils qui mesure $2$ écarts-types de plus ?
3. Paradoxe : les fils régressent vers la moyenne, mais les pères aussi. Comment est-ce possible ?

:::answer
1. Ici $V(X) = V(Y) = 1$ et $\operatorname{cov}(X, Y) = \rho\,\sigma(X)\sigma(Y) = \rho$. La droite de $Y$ en $X$ est $y = \rho\,x = 0{,}5\,x$ et celle de $X$ en $Y$ est $x = \rho\,y = 0{,}5\,y$.

2. Pour $x = 2$ : $y = 1$, le fils est prévu à $1$ écart-type au-dessus de la moyenne. Pour un fils à $y = 2$ : $x = 1$, le père est prévu à $1$ écart-type au-dessus de la moyenne.

3. Il n'y a aucun paradoxe, car la régression vers la moyenne **ne dit rien du temps ni de la causalité**. Elle vient du seul fait que $\lvert\rho\rvert < 1$ : un écart à la moyenne est prédit **plus petit** dans les deux sens. Dans le repère $(x, y)$, la deuxième droite s'écrit $y = \dfrac{x}{\rho} = 2x$ : elle est plus raide que la première (pente $0{,}5$), et les deux se coupent en $G$. Elles ne coïncideraient que pour $\rho = \pm1$. Enfin $\rho^2 = 0{,}25$ : seule $25\ \%$ de la dispersion de la taille des fils est expliquée par celle des pères.
:::
::::
