---
title: "Statistiques"
slug: "lycee-3eme-economie-statistiques"
school: "lycee"
level: "3eme"
sections: ["Economie et Gestion"]
chapter: "Statistiques"
summary: "Résumer une série par quelques nombres bien choisis, comparer deux séries sans se faire piéger par une valeur extrême, puis étudier deux caractères à la fois : nuage de points, point moyen et distributions marginales."
prerequisites: ["Moyenne et médiane (2ème année)", "Lecture de tableaux et de graphiques"]
source: "Manuel officiel 3ème année Économie et Gestion, Tome 1, chapitre 1"
updated: "2026-11-06"
---

## Pourquoi ce chapitre ?

Une petite entreprise verse à ses dix employés les primes suivantes (en dizaines de dinars) :

$$
3 \quad 4 \quad 5 \quad 8 \quad 9 \quad 12 \quad 13 \quad 15 \quad 16 \quad \textcolor{#ea580c}{50}
$$

La prime **moyenne** est $13{,}5$. Pourtant, $7$ employés sur $10$ touchent moins que cette « moyenne ». Le responsable de la prime à $50$ part en retraite : la moyenne tombe à $9{,}4$. La **médiane**, elle, passe seulement de $10{,}5$ à $9$.

Un seul salarié a déplacé la moyenne de plus de $4$ points. **Quel nombre résume honnêtement cette série ?** Toute la première partie du chapitre répond à cette question. La seconde partie passe à deux caractères à la fois, par exemple la note d'économie et la note de maths d'un même élève.

:::intuition
Résumer une série, c'est répondre à deux questions :
1. **Où** se trouvent les valeurs ? On utilise un indicateur de **position** : moyenne, médiane.
2. **À quel point** sont-elles étalées ? On utilise un indicateur de **dispersion** : écart type, écart interquartile.

Il existe deux « couples » d'indicateurs. Le couple $(\overline{x}\,;\,\sigma)$ est facile à calculer mais sensible aux valeurs extrêmes. Le couple $(M_e\,;\,Q_3 - Q_1)$ est robuste mais demande de ranger les données.
:::

## 1. Vocabulaire

| Mot | Sens | Exemple |
|---|---|---|
| Population | ensemble étudié | les $100$ ménages d'un quartier |
| Caractère | ce qu'on mesure sur chaque individu | la dépense mensuelle |
| Valeurs $x_i$ ou classes | ce que peut valoir le caractère | $[100\,;200[$, $[200\,;300[$, … |
| Effectif $n_i$ | nombre d'individus ayant la valeur $x_i$ | $15$ ménages |
| Effectif total $N$ | $N = n_1 + n_2 + \dots + n_p$ | $100$ |
| Fréquence $f_i$ | $f_i = \dfrac{n_i}{N}$ | $0{,}15$ soit $15\,\%$ |
| Centre d'une classe | milieu de $[a\,;b[$, soit $\dfrac{a+b}{2}$ | $150$ pour $[100\,;200[$ |

:::remark[Données groupées en classes]
Quand les données sont groupées en classes, on ne connaît plus les valeurs exactes. On remplace alors chaque classe par son **centre**. Les calculs qui suivent donnent donc des **valeurs approchées**.
:::

## 2. Indicateurs de position

:::definition[Moyenne]
La **moyenne** d'une série de valeurs $x_1, \dots, x_p$ d'effectifs $n_1, \dots, n_p$ est
$$
\overline{x} = \frac{n_1x_1 + n_2x_2 + \dots + n_px_p}{N} = \frac{1}{N}\sum_{i=1}^{p} n_i x_i = \sum_{i=1}^{p} f_i x_i.
$$
:::

:::definition[Médiane]
Les valeurs étant rangées par ordre croissant, la **médiane** $M_e$ partage la série en deux groupes de même effectif :
- si $N$ est impair, $M_e$ est la valeur de rang $\dfrac{N+1}{2}$ ;
- si $N$ est pair, $M_e$ est la moyenne des valeurs de rangs $\dfrac{N}{2}$ et $\dfrac{N}{2} + 1$.
:::

:::example[Dépenses de 100 ménages]
| Dépense (dinars) | $[100\,;200[$ | $[200\,;300[$ | $[300\,;400[$ | $[400\,;500[$ | $[500\,;600[$ |
|---|---|---|---|---|---|
| Centre $x_i$ | $150$ | $250$ | $350$ | $450$ | $550$ |
| Effectif $n_i$ | $15$ | $20$ | $30$ | $20$ | $15$ |

$$
\overline{x} = \frac{15 \times 150 + 20 \times 250 + 30 \times 350 + 20 \times 450 + 15 \times 550}{100} = \frac{35\,000}{100} = 350 \text{ dinars.}
$$

La série est **symétrique** autour de la classe $[300\,;400[$ : la moyenne tombe au centre.
:::

:::property[Changement d'unité ou d'origine]
Si on transforme chaque valeur par $y_i = a\,x_i + b$, alors
$$
\overline{y} = a\,\overline{x} + b.
$$
Par exemple, si toutes les primes augmentent de $20\,\%$ puis de $5$ dinars, la prime moyenne devient $1{,}2\,\overline{x} + 5$. Pas besoin de tout recalculer.
:::

## 3. Indicateurs de dispersion

Deux séries peuvent avoir la même moyenne et ne pas se ressembler du tout. Par exemple, $\{9, 10, 11\}$ et $\{0, 10, 20\}$ ont toutes les deux pour moyenne $10$. Il faut donc mesurer l'**écart à la moyenne**.

:::definition[Étendue, variance, écart type]
- L'**étendue** est la différence entre la plus grande et la plus petite valeur.
- La **variance** est la moyenne des carrés des écarts à la moyenne :
$$
V = \frac{1}{N}\sum_{i=1}^{p} n_i\,(x_i - \overline{x})^2.
$$
- L'**écart type** est $\sigma = \sqrt{V}$.
:::

:::intuition[Pourquoi des carrés, puis une racine ?]
La moyenne des écarts $x_i - \overline{x}$ vaut toujours $0$ : les écarts positifs compensent les écarts négatifs. On élève donc au carré pour que tous les écarts comptent. Mais alors l'unité devient des « dinars au carré ». La racine carrée nous ramène en dinars. Retiens que **$\sigma$ est une distance typique à la moyenne, dans l'unité des données.**
:::

En pratique, on calcule presque toujours avec la formule suivante.

:::theorem[Formule de calcul de la variance]
$$
V = \frac{1}{N}\sum_{i=1}^{p} n_i\,x_i^2 \;-\; \overline{x}^{\,2}
$$
La variance est donc « la moyenne des carrés moins le carré de la moyenne ».
:::

:::proof
| Étape | Justification |
|---|---|
| $V = \dfrac{1}{N}\sum n_i\,(x_i^2 - 2\overline{x}\,x_i + \overline{x}^{\,2})$ | identité $(a-b)^2 = a^2 - 2ab + b^2$ |
| $= \dfrac{1}{N}\sum n_i x_i^2 - 2\overline{x}\cdot\dfrac{1}{N}\sum n_i x_i + \overline{x}^{\,2}\cdot\dfrac{1}{N}\sum n_i$ | on sépare les trois sommes ; $\overline{x}$ est une constante |
| $= \dfrac{1}{N}\sum n_i x_i^2 - 2\overline{x}\cdot\overline{x} + \overline{x}^{\,2}\cdot 1$ | $\frac1N \sum n_ix_i = \overline{x}$ et $\sum n_i = N$ |
| $= \dfrac{1}{N}\sum n_i x_i^2 - \overline{x}^{\,2}$ | on réduit |
:::

:::example[Dispersion des dépenses]
Avec les $100$ ménages ($\overline{x} = 350$) :
$$
\frac{1}{N}\sum n_i x_i^2 = \frac{15 \times 150^2 + 20 \times 250^2 + 30 \times 350^2 + 20 \times 450^2 + 15 \times 550^2}{100} = 138\,500.
$$
Donc $V = 138\,500 - 350^2 = 138\,500 - 122\,500 = 16\,000$ et $\sigma = \sqrt{16\,000} \approx 126{,}5$ dinars.

**Lecture :** une dépense « typique » s'écarte d'environ $126$ dinars de la moyenne de $350$ dinars.
:::

:::property[Effet d'une transformation sur l'écart type]
Si $y_i = a\,x_i + b$, alors $\sigma_y = \lvert a \rvert\,\sigma_x$. **Ajouter une même constante ne change pas la dispersion** : tout le nuage glisse d'un bloc.
:::

:::tic[Calculatrice et tableur]
- Calculatrice en mode statistique : on saisit les valeurs $x_i$ et les effectifs $n_i$. L'écart type du cours est noté $\sigma_x$ (ou $\sigma_n$).
- Tableur : `=MOYENNE(A2:A41)` et `=ECARTYPE.PEARSON(A2:A41)`. **Attention :** la fonction `ECARTYPE.STANDARD` divise par $N - 1$ au lieu de $N$. Ce n'est pas l'écart type de ce cours.
:::

::::check[Faut-il régler la machine ?]
Une machine fabrique des pièces de $5$ cm de diamètre. Sur un échantillon de $40$ pièces, on mesure :

| Diamètre (cm) | $4{,}5$ | $4{,}6$ | $4{,}7$ | $4{,}8$ | $4{,}9$ | $5{,}0$ | $5{,}1$ | $5{,}2$ | $5{,}3$ | $5{,}4$ |
|---|---|---|---|---|---|---|---|---|---|---|
| Effectif | $1$ | $1$ | $4$ | $10$ | $10$ | $4$ | $4$ | $2$ | $3$ | $1$ |

La machine est bien réglée si $\overline{x} \in [4{,}88\,;5{,}12]$ **et** $\sigma \in [0{,}13\,;0{,}25]$. Faut-il la régler ?

:::answer
- $\sum n_ix_i = 197$, donc $\overline{x} = \dfrac{197}{40} = 4{,}925$, qui appartient bien à $[4{,}88\,;5{,}12]$.
- $\dfrac1N \sum n_i x_i^2 = \dfrac{971{,}82}{40} = 24{,}2955$, donc $V = 24{,}2955 - 4{,}925^2 = 0{,}039875$ et $\sigma \approx 0{,}20$, qui appartient bien à $[0{,}13\,;0{,}25]$.

Les deux conditions sont vérifiées : on **poursuit la production**.
:::
::::

## 4. Médiane et quartiles

### Séries de données individuelles

:::definition[Quartiles (règle du manuel)]
Les $N$ valeurs étant rangées par ordre croissant $x_1 \le x_2 \le \dots \le x_N$ :
- si $N$ est un multiple de $4$, $Q_1$ est la valeur de rang $\dfrac{N}{4}$ et $Q_3$ celle de rang $\dfrac{3N}{4}$ ;
- sinon, $Q_1$ (respectivement $Q_3$) est la valeur dont le rang est l'entier **immédiatement supérieur** à $\dfrac{N}{4}$ (respectivement $\dfrac{3N}{4}$).

L'**écart interquartile** est $Q_3 - Q_1$.
:::

**Ce que cela signifie :** au moins $25\,\%$ des valeurs sont inférieures ou égales à $Q_1$, et au moins $75\,\%$ sont inférieures ou égales à $Q_3$. L'intervalle $[Q_1\,;Q_3]$ contient donc environ la **moitié centrale** de la série.

:::example[Taux d'hémoglobine de 60 adultes]
Les $60$ taux (en g/L), déjà rangés :

> 105 · 110 · 112 · 112 · 118 · 119 · 120 · 120 · 125 · 126 · 127 · 128 · 130 · 132 · **133** · 134 · 135 · 138 · 138 · 138 · 138 · 141 · 142 · 144 · 145 · 146 · 148 · 148 · 148 · **149** · **150** · 150 · 150 · 151 · 151 · 153 · 153 · 153 · 154 · 154 · 154 · 156 · 156 · 156 · **158** · 160 · 160 · 160 · 163 · 164 · 164 · 165 · 166 · 168 · 168 · 170 · 172 · 172 · 176 · 179

| Indicateur | Calcul du rang | Valeur |
|---|---|---|
| $Q_1$ | $\frac{60}{4} = 15$ ($N$ multiple de 4) | $x_{15} = 133$ |
| $M_e$ | $N$ pair : rangs $30$ et $31$ | $\frac{149 + 150}{2} = 149{,}5$ |
| $Q_3$ | $\frac{3 \times 60}{4} = 45$ | $x_{45} = 158$ |
| Écart interquartile | | $158 - 133 = 25$ |
:::

:::warning[Le tableur ne suit pas la règle du manuel]
La fonction `QUARTILE` d'un tableur calcule les quartiles autrement (par interpolation) : sur cette série, elle donne $Q_1 = 133{,}75$ et $Q_3 = 158{,}5$. Les deux méthodes sont légitimes, mais **au devoir, applique la règle des rangs du cours**.
:::

### Le diagramme en boîte

On résume la série par cinq nombres : $\min$, $Q_1$, $M_e$, $Q_3$, $\max$.

![Diagramme en boîte des taux d'hémoglobine](/lessons/images/statistiques-boite.svg "La boîte va de Q₁ à Q₃ et contient la moitié centrale des valeurs ; les « moustaches » vont jusqu'au minimum et au maximum.")

:::example[Lire une boîte]
- La partie gauche de la boîte ($Q_1 \to M_e$) mesure $149{,}5 - 133 = 16{,}5$, soit $66\,\%$ de la largeur de la boîte. La partie droite ($M_e \to Q_3$) mesure $8{,}5$, soit $34\,\%$.
- Chaque partie contient pourtant environ $25\,\%$ des valeurs. Les valeurs sont donc **plus étalées à gauche de la médiane** : les taux faibles sont plus dispersés que les taux élevés.
:::

### Séries groupées en classes : effectifs cumulés

:::definition[Effectifs et fréquences cumulés croissants]
L'**effectif cumulé croissant** associé à une valeur $b$ est le nombre d'individus dont la valeur est **strictement inférieure** à $b$. On le note $\text{ECC}(b)$. En divisant par $N$, on obtient la **fréquence cumulée croissante**.

En reliant les points $\big(b\,;\text{ECC}(b)\big)$ placés aux bornes des classes, on obtient le **polygone des effectifs cumulés croissants**.
:::

:::example[Chiffre d'affaires de 50 entreprises]
| Chiffre d'affaires (milliers de dinars) | $[100;150[$ | $[150;200[$ | $[200;250[$ | $[250;300[$ | $[300;350[$ | $[350;400[$ | $[400;450[$ | $[450;500[$ |
|---|---|---|---|---|---|---|---|---|
| Effectif | $4$ | $5$ | $6$ | $7$ | $10$ | $8$ | $6$ | $4$ |
| ECC (borne de droite) | $4$ | $9$ | $15$ | $22$ | $32$ | $40$ | $46$ | $50$ |

Avec $N = 50$, on cherche les valeurs correspondant aux effectifs cumulés $\frac{N}{4} = 12{,}5$, $\frac{N}{2} = 25$ et $\frac{3N}{4} = 37{,}5$.
:::

![Polygone des effectifs cumulés croissants](/lessons/images/statistiques-ecc.svg "On lit Q₁, Mₑ et Q₃ en partant des effectifs 12,5 ; 25 et 37,5 sur l'axe vertical.")

Le graphique donne une lecture approchée. Pour un calcul précis, on suppose que les valeurs sont **réparties uniformément** à l'intérieur de chaque classe : le polygone y est alors un segment, et on applique la proportionnalité.

:::method[Interpolation linéaire dans une classe]
$Q_1$ correspond à l'effectif cumulé $12{,}5$, qui se trouve entre $\text{ECC}(200) = 9$ et $\text{ECC}(250) = 15$. Donc $Q_1 \in [200\,;250[$.

| Chiffre d'affaires | $200$ | $Q_1$ | $250$ |
|---|---|---|---|
| ECC | $9$ | $12{,}5$ | $15$ |

On écrit l'égalité des rapports, comme dans le théorème de Thalès :
$$
\frac{Q_1 - 200}{250 - 200} = \frac{12{,}5 - 9}{15 - 9}
\quad\Longrightarrow\quad
Q_1 = 200 + 50 \times \frac{3{,}5}{6} \approx 229{,}2.
$$
:::

::::check[À toi : la médiane et Q₃]
Calculer de la même façon $M_e$ et $Q_3$.

:::answer
- $M_e$ : l'effectif $25$ est entre $\text{ECC}(300) = 22$ et $\text{ECC}(350) = 32$, d'où $M_e = 300 + 50 \times \dfrac{25 - 22}{32 - 22} = 315$.
- $Q_3$ : l'effectif $37{,}5$ est entre $\text{ECC}(350) = 32$ et $\text{ECC}(400) = 40$, d'où $Q_3 = 350 + 50 \times \dfrac{37{,}5 - 32}{40 - 32} \approx 384{,}4$.

L'écart interquartile vaut environ $384{,}4 - 229{,}2 = 155{,}2$ milliers de dinars.
:::
::::

## 5. Comparer deux séries

### Sensibilité aux valeurs extrêmes

Revenons aux primes du début. On appelle $S_1$ la série complète et $S_2$ la série sans la valeur $50$.

| Indicateur | $S_1$ ($N = 10$) | $S_2$ ($N = 9$) | Variation |
|---|---|---|---|
| Moyenne $\overline{x}$ | $13{,}5$ | $\approx 9{,}44$ | **forte** |
| Écart type $\sigma$ | $\approx 12{,}9$ | $\approx 4{,}55$ | **forte** |
| Étendue | $47$ | $13$ | **forte** |
| Médiane $M_e$ | $10{,}5$ | $9$ | faible |
| Écart interquartile $Q_3 - Q_1$ | $15 - 5 = 10$ | $13 - 5 = 8$ | faible |

:::property[Choisir son résumé]
- Le couple $(\overline{x}\,;\,\sigma)$ utilise **toutes** les valeurs : il est sensible aux valeurs extrêmes.
- Le couple $(M_e\,;\,Q_3 - Q_1)$ ne dépend que des rangs : il est **robuste**.

Un candidat à l'embauche qui veut savoir « combien gagne un employé ordinaire » doit regarder la **médiane**, pas la moyenne.
:::

### Coefficient de variation

Comparer deux écarts types n'a de sens que si les moyennes sont du même ordre. Un écart de $100$ dinars est énorme sur des salaires de $200$ dinars, et négligeable sur des salaires de $5\,000$ dinars.

:::definition[Coefficient de variation]
Pour une série de moyenne $\overline{x} > 0$, le **coefficient de variation** est
$$
CV = \frac{\sigma}{\overline{x}}.
$$
C'est une dispersion **relative**, sans unité : on peut donc comparer des séries d'échelles différentes.
:::

:::example[Salaires des hommes et des femmes]
Rémunérations mensuelles de $40$ hommes et de $40$ femmes d'une entreprise (en centaines de dinars) :

| Rémunération | $[0\,;2[$ | $[2\,;4[$ | $[4\,;6[$ | $[6\,;8[$ |
|---|---|---|---|---|
| Centre | $1$ | $3$ | $5$ | $7$ |
| Hommes $n_H$ | $6$ | $10$ | $22$ | $2$ |
| Femmes $n_F$ | $25$ | $10$ | $5$ | $0$ |

| | Moyenne | $\frac1N\sum n_ix_i^2$ | Variance | Écart type | $CV$ |
|---|---|---|---|---|---|
| Hommes | $\frac{160}{40} = 4$ | $\frac{744}{40} = 18{,}6$ | $2{,}6$ | $\approx 1{,}61$ | $\approx 0{,}40$ |
| Femmes | $\frac{80}{40} = 2$ | $\frac{240}{40} = 6$ | $2$ | $\approx 1{,}41$ | $\approx 0{,}71$ |

L'écart type des hommes est **plus grand**, mais relativement à leur salaire moyen, ce sont les salaires des femmes qui sont **les plus dispersés** ($71\,\%$ contre $40\,\%$). Les deux indicateurs ne répondent pas à la même question.
:::

::::check[Le tireur le plus régulier]
Deux tireurs X et Y font chacun $25$ tirs. Voici le nombre de tirs par score obtenu :

| Score | $0$ | $10$ | $20$ | $30$ | $50$ |
|---|---|---|---|---|---|
| X | $2$ | $5$ | $6$ | $7$ | $5$ |
| Y | $4$ | $4$ | $6$ | $4$ | $7$ |

Les deux tireurs ont-ils la même moyenne ? Lequel est le plus régulier ?

:::answer
- Moyennes : $\overline{x}_X = \dfrac{630}{25} = 25{,}2$ et $\overline{x}_Y = \dfrac{630}{25} = 25{,}2$. Elles sont égales, et les médianes aussi (le 13ᵉ tir vaut $20$ dans les deux cas).
- $V_X = \dfrac{21\,700}{25} - 25{,}2^2 = 232{,}96$, donc $\sigma_X \approx 15{,}3$. $V_Y = \dfrac{23\,900}{25} - 25{,}2^2 = 320{,}96$, donc $\sigma_Y \approx 17{,}9$.

Le tireur **X** est le plus régulier. La moyenne et la médiane ne permettaient pas de départager les deux tireurs : l'écart type, si.
:::
::::

## 6. Séries statistiques doubles

Jusqu'ici, on mesurait **un** caractère par individu. On en mesure maintenant **deux**, par exemple la note d'économie $X$ et la note de maths $Y$ d'un même élève. Une question nouvelle apparaît : les deux caractères sont-ils **liés** ?

### Données individuelles : nuage de points et point moyen

:::definition[Série double, nuage, point moyen]
- Une **série statistique double** est la donnée de $N$ couples $(x_1\,;y_1), \dots, (x_N\,;y_N)$.
- Dans un repère orthogonal, l'ensemble des points $M_i(x_i\,;y_i)$ est le **nuage de points** de la série.
- Le point $G(\overline{x}\,;\overline{y})$ est le **point moyen** du nuage.
:::

:::example[Notes d'économie et de maths de 10 élèves]
| $x_i$ (économie) | $5$ | $7$ | $9$ | $9$ | $10$ | $10$ | $11$ | $12$ | $13$ | $14$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $y_i$ (maths) | $6$ | $7$ | $8$ | $10$ | $11$ | $13$ | $10$ | $13$ | $12$ | $16$ |

$$
\overline{x} = \frac{100}{10} = 10, \qquad \overline{y} = \frac{106}{10} = 10{,}6, \qquad G(10\,;10{,}6).
$$
:::

:::remark[Lire la forme d'un nuage]
- Si les points se regroupent autour d'une **droite**, on parle de relation affine (c'est le cas ici : les points « montent » ensemble).
- S'ils se regroupent autour d'une **parabole**, on parle de relation parabolique.
- S'ils forment une tache sans direction, il n'y a **pas de relation** visible.
:::

### Ajustement affine : la droite de Mayer

Si le nuage est allongé, on peut le résumer par une droite. Cela permet ensuite de faire des **prévisions**.

:::method[Droite de Mayer]
1. On range les points par abscisses croissantes ; à abscisses égales, par ordonnées croissantes.
2. On partage le nuage en deux sous-nuages $N_1$ et $N_2$ de même effectif.
3. On calcule les points moyens $G_1$ de $N_1$ et $G_2$ de $N_2$.
4. La droite $(G_1G_2)$ est la **droite de Mayer**.
:::

:::example[Droite de Mayer des notes]
- $N_1$ : $(5;6)$, $(7;7)$, $(9;8)$, $(9;10)$, $(10;11)$, d'où $G_1\left(\frac{40}{5}\,;\frac{42}{5}\right) = G_1(8\,;8{,}4)$.
- $N_2$ : $(10;13)$, $(11;10)$, $(12;13)$, $(13;12)$, $(14;16)$, d'où $G_2\left(\frac{60}{5}\,;\frac{64}{5}\right) = G_2(12\,;12{,}8)$.

Le coefficient directeur est $a = \dfrac{12{,}8 - 8{,}4}{12 - 8} = 1{,}1$, puis $b = 8{,}4 - 1{,}1 \times 8 = -0{,}4$. La droite de Mayer a pour équation
$$
\boxed{\,y = 1{,}1\,x - 0{,}4\,}
$$
**Prévision :** un élève qui obtient $15$ en économie aurait « environ » $1{,}1 \times 15 - 0{,}4 = 16{,}1$ en maths.
:::

![Nuage de points, point moyen et droite de Mayer](/lessons/images/statistiques-nuage.svg "Le point moyen G se trouve sur la droite de Mayer : c'est le milieu de [G₁G₂].")

:::property[La droite de Mayer passe par le point moyen]
Si les deux sous-nuages ont le même effectif, $G$ est le **milieu** de $[G_1G_2]$. Donc $G \in (G_1G_2)$.
:::

:::proof
Soit $N = 2k$, et notons $S_1$, $S_2$ les sommes des abscisses de $N_1$ et de $N_2$.

| Étape | Justification |
|---|---|
| $x_{G_1} = \dfrac{S_1}{k}$ et $x_{G_2} = \dfrac{S_2}{k}$ | définition du point moyen d'un sous-nuage |
| $\overline{x} = \dfrac{S_1 + S_2}{2k} = \dfrac{1}{2}\left(\dfrac{S_1}{k} + \dfrac{S_2}{k}\right) = \dfrac{x_{G_1} + x_{G_2}}{2}$ | on fait apparaître les deux moyennes partielles |
| de même, $\overline{y} = \dfrac{y_{G_1} + y_{G_2}}{2}$ | même calcul sur les ordonnées |
| $G$ est le milieu de $[G_1G_2]$ | coordonnées du milieu |

Vérification sur l'exemple : $1{,}1 \times 10 - 0{,}4 = 10{,}6 = \overline{y}$. ✔
:::

:::warning[Une droite n'est pas une explication]
1. **Corrélation n'est pas causalité.** Les bonnes notes d'économie ne *causent* pas les bonnes notes de maths. Un troisième facteur, comme le travail régulier, peut expliquer les deux.
2. **Ne pas extrapoler trop loin.** La droite donne $1{,}1 \times 20 - 0{,}4 = 21{,}6$ pour un $20$ en économie, ce qui est impossible sur $20$. Un ajustement ne vaut que dans la zone des données.
:::

### Données groupées : tableau à double entrée

Quand il y a beaucoup d'individus, on regroupe les couples dans un **tableau à double entrée**. Le nombre $n_{ij}$ placé à la ligne $i$ et à la colonne $j$ est le nombre d'individus pour lesquels $X = x_i$ **et** $Y = y_j$.

:::definition[Distributions marginales]
- En faisant la somme de chaque **ligne**, on obtient la distribution des **effectifs marginaux** de $X$. En faisant la somme de chaque **colonne**, on obtient celle de $Y$.
- En divisant ces effectifs par $N$, on obtient les **fréquences marginales**.
- Le nuage est formé des points $M_{ij}(x_i\,;y_j)$ affectés du **poids** $n_{ij}$ (lorsque $n_{ij} \neq 0$). Son point moyen est $G(\overline{x}\,;\overline{y})$, où $\overline{x}$ et $\overline{y}$ sont les moyennes des distributions marginales.
:::

:::example[21 appartements : personnes et pièces]
On a relevé, pour les $21$ appartements d'un immeuble, le nombre $X$ de personnes et le nombre $Y$ de pièces.

| $X \backslash Y$ | $2$ pièces | $3$ pièces | $4$ pièces | **Total (marge de $X$)** |
|---|---|---|---|---|
| $2$ personnes | $1$ | $3$ | $0$ | $\mathbf{4}$ |
| $3$ personnes | $0$ | $2$ | $1$ | $\mathbf{3}$ |
| $4$ personnes | $1$ | $4$ | $4$ | $\mathbf{9}$ |
| $5$ personnes | $2$ | $1$ | $2$ | $\mathbf{5}$ |
| **Total (marge de $Y$)** | $\mathbf{4}$ | $\mathbf{10}$ | $\mathbf{7}$ | $\mathbf{21}$ |

**Lecture :** $n_{32} = 4$ signifie que $4$ appartements abritent $4$ personnes dans $3$ pièces.

Les moyennes se calculent **sur les marges** :
$$
\overline{x} = \frac{2 \times 4 + 3 \times 3 + 4 \times 9 + 5 \times 5}{21} = \frac{78}{21} \approx 3{,}71,
\qquad
\overline{y} = \frac{2 \times 4 + 3 \times 10 + 4 \times 7}{21} = \frac{66}{21} \approx 3{,}14.
$$
:::

![Nuage pondéré des appartements](/lessons/images/statistiques-nuage-pondere.svg "Chaque disque est proportionnel à l'effectif nᵢⱼ ; l'étoile est le point moyen G.")

::::check[Fréquences marginales]
Donner la distribution des fréquences marginales de $Y$ (nombre de pièces), puis la proportion d'appartements qui ont strictement moins de pièces que d'habitants.

:::answer
- Fréquences marginales de $Y$ : $\frac{4}{21} \approx 0{,}19$ ; $\frac{10}{21} \approx 0{,}48$ ; $\frac{7}{21} \approx 0{,}33$. Leur somme vaut $1$.
- Il y a moins de pièces que d'habitants dans les cases où $y_j < x_i$ : $(3\text{ pers.}, 2\text{ p.})$ : $0$ ; $(4, 2)$ : $1$ ; $(4, 3)$ : $4$ ; $(5, 2)$ : $2$ ; $(5, 3)$ : $1$ ; $(5, 4)$ : $2$. Soit $10$ appartements sur $21$, environ $48\,\%$.
:::
::::

## 7. Quand les moyennes se contredisent

::::challenge[Quel patron a raison ?]
Deux entreprises versent les salaires mensuels suivants (en dinars ; on utilise les centres de classes $300$, $375$ et $450$).

| Catégorie | E₁ · $[250;350[$ | E₁ · $[350;400[$ | E₁ · $[400;500[$ | E₂ · $[250;350[$ | E₂ · $[350;400[$ | E₂ · $[400;500[$ |
|---|---|---|---|---|---|---|
| Ouvriers | $170$ | $100$ | $0$ | $280$ | $140$ | $0$ |
| Cadres | $0$ | $10$ | $20$ | $0$ | $40$ | $40$ |

Le patron de E₂ affirme : « Mes employés sont mieux payés que les vôtres. » Celui de E₁ répond : « Faux : mes ouvriers sont mieux payés, et mes cadres aussi. » **Les deux peuvent-ils avoir raison ?**

:::answer
| Salaire moyen | E₁ | E₂ |
|---|---|---|
| Ouvriers | $\frac{170 \times 300 + 100 \times 375}{270} \approx 327{,}8$ | $\frac{280 \times 300 + 140 \times 375}{420} = 325$ |
| Cadres | $\frac{10 \times 375 + 20 \times 450}{30} = 425$ | $\frac{40 \times 375 + 40 \times 450}{80} = 412{,}5$ |
| **Tous** | $\frac{101\,250}{300} = \mathbf{337{,}5}$ | $\frac{169\,500}{500} = \mathbf{339}$ |

**Oui, les deux ont raison !** E₁ paie mieux *dans chaque catégorie*, mais E₂ a une moyenne globale plus élevée. L'explication est la **composition** des deux entreprises : E₂ compte $16\,\%$ de cadres (les mieux payés), contre $10\,\%$ seulement pour E₁. La moyenne globale est une moyenne des moyennes de catégories, **pondérée par les effectifs**.

Ce phénomène s'appelle le **paradoxe de Simpson**. Il apparaît dans les statistiques médicales, scolaires ou électorales. Avant de comparer deux moyennes globales, demande-toi toujours : *les deux populations ont-elles la même composition ?*
:::
::::

## 8. Les pièges classiques

| Erreur | Ce qu'il faut faire |
|---|---|
| Faire la moyenne des centres de classes sans les effectifs | $\overline{x} = \frac1N\sum n_ix_i$ : chaque centre est pondéré par son effectif |
| Oublier de ranger les valeurs avant de chercher $M_e$, $Q_1$, $Q_3$ | toujours ranger d'abord par ordre croissant |
| Calculer $V = \frac1N\sum n_ix_i^2 - \overline{x}$ | c'est $\overline{x}^{\,2}$, au carré ! (et une variance n'est jamais négative) |
| Donner la variance comme mesure de dispersion « en dinars » | l'unité de $V$ est le dinar au carré ; c'est $\sigma$ qui est en dinars |
| Comparer deux écarts types de séries d'échelles différentes | utiliser le coefficient de variation $\sigma / \overline{x}$ |
| Conclure à une cause à partir d'un nuage | un nuage montre un lien, pas une cause |
| Comparer des moyennes globales de populations de compositions différentes | comparer catégorie par catégorie (paradoxe de Simpson) |

## 9. Synthèse

:::summary[À retenir]
**Une variable**
- Moyenne : $\overline{x} = \dfrac{1}{N}\sum n_ix_i$. Variance : $V = \dfrac1N\sum n_ix_i^2 - \overline{x}^{\,2}$. Écart type : $\sigma = \sqrt V$.
- Si $y = ax + b$ : $\overline{y} = a\overline{x} + b$ et $\sigma_y = \lvert a\rvert\,\sigma_x$.
- Quartiles (rangs) : $\frac N4$ et $\frac{3N}4$, ou l'entier immédiatement supérieur si $N$ n'est pas un multiple de 4. Écart interquartile : $Q_3 - Q_1$.
- Données en classes : polygone des effectifs cumulés croissants et interpolation linéaire dans la classe.
- Diagramme en boîte : $\min$, $Q_1$, $M_e$, $Q_3$, $\max$.
- $(\overline{x}\,;\sigma)$ est sensible aux valeurs extrêmes ; $(M_e\,;Q_3 - Q_1)$ est robuste. $CV = \sigma / \overline{x}$ mesure une dispersion relative.

**Deux variables**
- Nuage de points $M_i(x_i\,;y_i)$ et point moyen $G(\overline{x}\,;\overline{y})$.
- Droite de Mayer : la droite $(G_1G_2)$, qui passe par $G$.
- Tableau à double entrée : effectifs $n_{ij}$, marges en ligne et en colonne, fréquences marginales $= \dfrac{\text{effectif marginal}}{N}$.
:::

:::history[Compter, puis comprendre]
Les recensements sont très anciens : on en trouve en Égypte et en Chine dès le IIᵉ millénaire avant J.-C., puis à Rome. Mais **inférer** quelque chose à partir de fréquences est une idée plus récente. Au IXᵉ siècle, à Bagdad, **al-Kindī** décrit l'**analyse des fréquences** : pour casser un message chiffré, on compare la fréquence de chaque symbole à la fréquence des lettres dans la langue. C'est l'une des premières utilisations connues de la statistique pour raisonner.

En 1662, à Londres, **John Graunt** étudie les registres de naissances et de décès. Il remarque que le rapport entre naissances de garçons et de filles est remarquablement stable d'une année à l'autre. Aujourd'hui, le travail du statisticien n'est plus seulement de collecter et de présenter les données : c'est surtout de les **interpréter**, sans tomber dans les pièges de ce chapitre.
:::
