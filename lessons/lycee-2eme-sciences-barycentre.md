---
title: "Barycentre"
slug: "lycee-2eme-sciences-barycentre"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Informatique"]
chapter: "Barycentre"
summary: "Le point d'équilibre de points pondérés : barycentre de deux puis de trois points, réduction d'une somme vectorielle, barycentre partiel, coordonnées, et comment s'en servir pour démontrer un alignement, une concurrence ou trouver un ensemble de points."
prerequisites: ["Calcul vectoriel", "Théorème de Thalès"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 6"
updated: "2026-11-12"
---

## Pourquoi ce chapitre ?

Une tige rigide de $30$ cm porte une masse de $1$ kg en $A$ et une masse de $2$ kg en $B$. Où faut-il la suspendre pour qu'elle reste horizontale ? Archimède a donné la réponse il y a plus de deux mille ans : au point $G$ tel que $1 \times GA = 2 \times GB$, c'est-à-dire à $20$ cm de $A$ et $10$ cm de $B$. Le point d'équilibre est **plus près de la masse la plus lourde**.

![Une tige en équilibre](/lessons/images/barycentre-balance.svg "1 kg en A, 2 kg en B : la tige est en équilibre quand elle est suspendue en G, deux fois plus près de B que de A.")

Le même calcul se cache dans ta moyenne. Avec $13$ au devoir de contrôle (coefficient $1$) et $10$ au devoir de synthèse (coefficient $2$), ta moyenne est $\dfrac{1 \times 13 + 2 \times 10}{3} = 11$ : plus près de la note qui « pèse » le plus.

:::intuition
Un barycentre, c'est une **moyenne pondérée de points**. On attache un poids (un coefficient) à chaque point et l'on cherche le point d'équilibre. Les coefficients peuvent même être négatifs : un poids négatif « repousse » au lieu d'attirer, et le point d'équilibre sort du segment.
:::

## 1. Barycentre de deux points

L'équilibre $1 \times GA = 2 \times GB$ porte sur des longueurs. Comme $G$ est entre $A$ et $B$, les vecteurs $\overrightarrow{GA}$ et $\overrightarrow{GB}$ sont de sens contraires, et l'égalité s'écrit $1\,\overrightarrow{GA} + 2\,\overrightarrow{GB} = \vec 0$. C'est cette forme vectorielle que l'on généralise.

:::definition[Barycentre de deux points pondérés]
Soient $A$ et $B$ deux points et $\alpha$, $\beta$ deux réels tels que $\alpha + \beta \neq 0$. Le point $G$ qui vérifie
$$
\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} = \vec 0
$$
est appelé **barycentre des points pondérés** $(A\,,\alpha)$ et $(B\,,\beta)$. On dit aussi que $G$ est le barycentre de $A$ et $B$ affectés des coefficients $\alpha$ et $\beta$.
:::

Encore faut-il qu'un tel point existe et qu'il soit unique : c'est le premier théorème du chapitre.

:::theorem[Existence et unicité du barycentre de deux points]
Si $\alpha + \beta \neq 0$, il existe un **unique** point $G$ tel que $\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} = \vec 0$, et il est donné par
$$
\overrightarrow{AG} = \frac{\beta}{\alpha + \beta}\,\overrightarrow{AB}.
$$
:::

:::proof[Existence et unicité]
| Étape | Justification |
|---|---|
| $\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} = \vec 0 \iff \alpha\,\overrightarrow{GA} + \beta\,(\textcolor{#ea580c}{\overrightarrow{GA} + \overrightarrow{AB}}) = \vec 0$ | relation de Chasles : $\overrightarrow{GB} = \overrightarrow{GA} + \overrightarrow{AB}$ |
| $\iff (\alpha + \beta)\,\overrightarrow{GA} + \beta\,\overrightarrow{AB} = \vec 0$ | on regroupe les termes en $\overrightarrow{GA}$ |
| $\iff (\alpha + \beta)\,\overrightarrow{AG} = \beta\,\overrightarrow{AB}$ | $\overrightarrow{GA} = -\overrightarrow{AG}$ |
| $\iff \overrightarrow{AG} = \dfrac{\beta}{\alpha + \beta}\,\overrightarrow{AB}$ | on divise par $\alpha + \beta \neq 0$ |
| Un point $A$ et un vecteur donnés déterminent un unique point $G$ | donc $G$ existe et il est unique |
:::

:::warning
Si $\alpha + \beta = 0$ (avec $\alpha \neq 0$ et $A \neq B$), la relation devient $\alpha\,(\overrightarrow{GA} - \overrightarrow{GB}) = \alpha\,\overrightarrow{BA} = \vec 0$, ce qui est impossible : **il n'y a pas de barycentre**. La condition $\alpha + \beta \neq 0$ n'est jamais facultative.
:::

:::example[Placer trois barycentres]
- $(A\,,2)$ et $(B\,,1)$ : $\overrightarrow{AG} = \frac{1}{3}\overrightarrow{AB}$, donc $G$ est sur $[AB]$, au tiers à partir de $A$.
- $(A\,,3)$ et $(B\,,-1)$ : $\overrightarrow{AG} = \frac{-1}{2}\overrightarrow{AB}$, donc $G$ est **de l'autre côté de $A$**.
- $(A\,,-1)$ et $(B\,,2)$ : $\overrightarrow{AG} = \frac{2}{1}\overrightarrow{AB} = 2\overrightarrow{AB}$, donc $G$ est **au-delà de $B$**.
:::

![Trois barycentres de A et B](/lessons/images/barycentre-deux-points.svg "Coefficients de même signe : G est entre A et B. Coefficients de signes contraires : G est à l'extérieur, du côté du coefficient le plus grand en valeur absolue.")

:::property[Homogénéité et milieu]
- Pour tout réel $k \neq 0$, le barycentre de $(A\,,k\alpha)$ et $(B\,,k\beta)$ est le même que celui de $(A\,,\alpha)$ et $(B\,,\beta)$ : on peut multiplier ou diviser tous les coefficients par un même réel non nul.
- Le barycentre de $(A\,,1)$ et $(B\,,1)$ est le **milieu** de $[AB]$. Plus généralement, quand les coefficients sont égaux, on parle d'**isobarycentre**.
:::

En effet, $k\alpha\,\overrightarrow{GA} + k\beta\,\overrightarrow{GB} = k\,(\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB})$, qui est nul si et seulement si $\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB}$ l'est. Ainsi le barycentre de $(A\,,6)$ et $(B\,,3)$ est celui de $(A\,,2)$ et $(B\,,1)$.

:::theorem[Position du barycentre de deux points]
Soient $A \neq B$, $\alpha$ et $\beta$ deux réels **non nuls** tels que $\alpha + \beta \neq 0$, et $G$ le barycentre de $(A\,,\alpha)$ et $(B\,,\beta)$.

- $G$ appartient à la droite $(AB)$ et $\lvert \alpha \rvert\, GA = \lvert \beta \rvert\, GB$.
- $G \in [AB]$ si et seulement si $\alpha$ et $\beta$ sont **de même signe**.
:::

:::proof[Position du barycentre]
| Étape | Justification |
|---|---|
| $\overrightarrow{AG} = t\,\overrightarrow{AB}$ avec $t = \dfrac{\beta}{\alpha + \beta}$, donc $G \in (AB)$ | théorème d'existence : $\overrightarrow{AG}$ et $\overrightarrow{AB}$ sont colinéaires |
| $\alpha\,\overrightarrow{GA} = -\beta\,\overrightarrow{GB}$, donc $\lvert \alpha \rvert\, GA = \lvert \beta \rvert\, GB$ | on passe aux normes dans la définition |
| $G \in [AB] \iff 0 \leq t \leq 1 \iff t \geq 0$ et $1 - t \geq 0$ | un point de $(AB)$ est sur $[AB]$ si et seulement si $0 \leq t \leq 1$ |
| $1 - t = \dfrac{\alpha}{\alpha + \beta}$ | on réduit au même dénominateur |
| Donc $G \in [AB] \iff \dfrac{\beta}{\alpha + \beta} > 0$ et $\dfrac{\alpha}{\alpha + \beta} > 0$ | $\alpha$ et $\beta$ sont non nuls : les inégalités sont strictes |
| $\iff \alpha$ et $\beta$ ont le **signe de $\alpha + \beta$** $\iff \alpha$ et $\beta$ sont de même signe | si $\alpha$ et $\beta$ sont de même signe, leur somme a ce signe ; sinon l'un des deux est de signe contraire à la somme |
:::

La relation $\lvert \alpha \rvert\, GA = \lvert \beta \rvert\, GB$ dit que $G$ est **plus près du point de plus grand coefficient** (en valeur absolue) : c'est la tige d'Archimède.

:::theorem[Réduction d'une somme vectorielle (deux points)]
Si $G$ est le barycentre de $(A\,,\alpha)$ et $(B\,,\beta)$, alors pour **tout** point $M$ du plan :
$$
\begin{aligned}
&\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB}\\
&\quad = (\alpha + \beta)\,\overrightarrow{MG}.
\end{aligned}
$$
:::

:::proof[Réduction pour deux points]
| Étape | Justification |
|---|---|
| $\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} = \alpha\,(\overrightarrow{MG} + \overrightarrow{GA}) + \beta\,(\overrightarrow{MG} + \overrightarrow{GB})$ | relation de Chasles, en passant par $G$ |
| $\phantom{\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB}} = (\alpha + \beta)\,\overrightarrow{MG} + \textcolor{#ea580c}{\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB}}$ | on développe et on regroupe |
| $\phantom{\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB}} = (\alpha + \beta)\,\overrightarrow{MG}$ | le terme en couleur est nul : définition de $G$ |
:::

C'est l'outil le plus utilisé du chapitre : une somme de **deux** vecteurs issus de $M$ devient **un seul** vecteur $\overrightarrow{MG}$.

:::example[Réduire]
Soit $G$ le barycentre de $(A\,,2)$ et $(B\,,1)$. Pour tout point $M$, $2\,\overrightarrow{MA} + \overrightarrow{MB} = 3\,\overrightarrow{MG}$. En prenant $M = A$ : $\overrightarrow{AB} = 3\,\overrightarrow{AG}$, et l'on retrouve $\overrightarrow{AG} = \frac13\overrightarrow{AB}$.
:::

:::corollary
Si $\alpha + \beta = 0$, la somme $\alpha\,\overrightarrow{MA} - \alpha\,\overrightarrow{MB} = \alpha\,(\overrightarrow{MA} + \overrightarrow{BM}) = \alpha\,\overrightarrow{BA}$ est un **vecteur constant** : elle ne dépend pas de $M$.
:::

## 2. Construire un barycentre

:::method[Avec la relation vectorielle]
On calcule $\overrightarrow{AG} = \dfrac{\beta}{\alpha + \beta}\,\overrightarrow{AB}$ et l'on reporte la fraction de $\overrightarrow{AB}$ à partir de $A$ (on peut aussi partir de $B$ : $\overrightarrow{BG} = \dfrac{\alpha}{\alpha + \beta}\,\overrightarrow{BA}$).
:::

:::method[Méthode des parallèles]
Pour le barycentre $G$ de $(A\,,\alpha)$ et $(B\,,\beta)$ avec $\alpha, \beta > 0$ : on trace deux droites parallèles passant par $A$ et par $B$, on porte $\beta$ unités sur la première à partir de $A$ (point $A'$) et $\alpha$ unités sur la seconde à partir de $B$, **en sens contraire** (point $B'$). La droite $(A'B')$ coupe $(AB)$ en $G$. En effet, d'après le théorème de Thalès, $\dfrac{GA}{GB} = \dfrac{AA'}{BB'} = \dfrac{\beta}{\alpha}$. Si l'un des coefficients est négatif, on porte les deux longueurs dans le **même** sens.
:::

:::example[Construire le barycentre de (A, 3) et (B, 4)]
Par la relation : $\overrightarrow{AG} = \frac{4}{7}\overrightarrow{AB}$. Par les parallèles : $AA' = 4$ carreaux vers le haut, $BB' = 3$ carreaux vers le bas ; $(A'B')$ coupe $[AB]$ en $G$, avec $\frac{GA}{GB} = \frac{4}{3}$.
:::

## 3. Barycentre de trois points

La moyenne annuelle avec trois trimestres de coefficients $1$, $2$ et $2$ se calcule de la même façon : on pondère **trois** points.

:::definition[Barycentre de trois points pondérés]
Soient $A$, $B$, $C$ trois points et $\alpha$, $\beta$, $\gamma$ trois réels tels que $\alpha + \beta + \gamma \neq 0$. Le point $G$ qui vérifie
$$
\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} + \gamma\,\overrightarrow{GC} = \vec 0
$$
est le **barycentre** de $(A\,,\alpha)$, $(B\,,\beta)$ et $(C\,,\gamma)$. Si $\alpha = \beta = \gamma$, c'est l'**isobarycentre** de $A$, $B$ et $C$.
:::

:::theorem[Existence et unicité du barycentre de trois points]
Si $s = \alpha + \beta + \gamma \neq 0$, il existe un unique point $G$ tel que $\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} + \gamma\,\overrightarrow{GC} = \vec 0$, et
$$
\overrightarrow{AG} = \frac{\beta}{s}\,\overrightarrow{AB} + \frac{\gamma}{s}\,\overrightarrow{AC}.
$$
:::

:::proof[Trois points]
On note $s = \alpha + \beta + \gamma \neq 0$.

| Étape | Justification |
|---|---|
| $\alpha\,\overrightarrow{GA} + \beta\,(\overrightarrow{GA} + \overrightarrow{AB}) + \gamma\,(\overrightarrow{GA} + \overrightarrow{AC}) = \vec 0$ | Chasles : $\overrightarrow{GB} = \overrightarrow{GA} + \overrightarrow{AB}$ et $\overrightarrow{GC} = \overrightarrow{GA} + \overrightarrow{AC}$ |
| $\iff \textcolor{#ea580c}{s}\,\overrightarrow{GA} + \beta\,\overrightarrow{AB} + \gamma\,\overrightarrow{AC} = \vec 0$ | on regroupe les termes en $\overrightarrow{GA}$ |
| $\iff s\,\overrightarrow{AG} = \beta\,\overrightarrow{AB} + \gamma\,\overrightarrow{AC}$ | $\overrightarrow{GA} = -\overrightarrow{AG}$ |
| $\iff \overrightarrow{AG} = \dfrac{\beta}{s}\,\overrightarrow{AB} + \dfrac{\gamma}{s}\,\overrightarrow{AC}$ | on divise par $s \neq 0$ ; ce vecteur fixe un unique point $G$ |
:::

:::theorem[Réduction d'une somme vectorielle (trois points)]
Si $G$ est le barycentre de $(A\,,\alpha)$, $(B\,,\beta)$ et $(C\,,\gamma)$, alors pour tout point $M$ :
$$
\begin{aligned}
&\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC}\\
&\quad = (\alpha + \beta + \gamma)\,\overrightarrow{MG}.
\end{aligned}
$$
:::

:::proof[Réduction pour trois points]
| Étape | Justification |
|---|---|
| $\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC} = (\alpha + \beta + \gamma)\,\overrightarrow{MG} + \textcolor{#ea580c}{\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} + \gamma\,\overrightarrow{GC}}$ | Chasles : $\overrightarrow{MA} = \overrightarrow{MG} + \overrightarrow{GA}$, de même pour $B$ et $C$ |
| $\phantom{\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC}} = (\alpha + \beta + \gamma)\,\overrightarrow{MG}$ | le terme en couleur est nul : définition de $G$ |
:::

:::property[Somme des coefficients nulle]
Si $\alpha + \beta + \gamma = 0$, le vecteur $\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC}$ **ne dépend pas de $M$**. On le calcule en choisissant $M$ commode (par exemple $M = A$).
:::

En effet, en remplaçant $M$ par $M'$, chaque terme change de $\overrightarrow{M'M}$ multiplié par son coefficient, et la somme de ces changements est $(\alpha + \beta + \gamma)\,\overrightarrow{M'M} = \vec 0$.

:::example[Un vecteur constant]
Pour tout $M$, $\overrightarrow{MA} + 2\,\overrightarrow{MB} - 3\,\overrightarrow{MC}$ est constant. Avec $M = C$ il vaut $\overrightarrow{CA} + 2\,\overrightarrow{CB}$.
:::

## 4. Barycentre partiel

On peut remplacer deux des points par **leur** barycentre, affecté de la somme de leurs coefficients : c'est le regroupement que tu fais quand tu calcules d'abord la moyenne de deux trimestres, puis la moyenne annuelle.

:::theorem[Barycentre partiel]
Soit $G$ le barycentre de $(A\,,\alpha)$, $(B\,,\beta)$ et $(C\,,\gamma)$. Si $\beta + \gamma \neq 0$ et si $H$ est le barycentre de $(B\,,\beta)$ et $(C\,,\gamma)$, alors $G$ est le barycentre de $(A\,,\alpha)$ et $(H\,,\beta + \gamma)$.
:::

:::proof[Barycentre partiel]
| Étape | Justification |
|---|---|
| $\beta\,\overrightarrow{GB} + \gamma\,\overrightarrow{GC} = (\beta + \gamma)\,\overrightarrow{GH}$ | réduction pour deux points, avec $M = G$ |
| $\alpha\,\overrightarrow{GA} + \textcolor{#ea580c}{(\beta + \gamma)\,\overrightarrow{GH}} = \alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} + \gamma\,\overrightarrow{GC} = \vec 0$ | définition de $G$ |
| $\alpha + (\beta + \gamma) \neq 0$ | c'est la somme $\alpha + \beta + \gamma$ |
| Donc $G$ est le barycentre de $(A\,,\alpha)$ et $(H\,,\beta + \gamma)$ | définition du barycentre de deux points |
:::

:::remark
On peut toujours regrouper deux des trois points : si les trois sommes $\alpha + \beta$, $\beta + \gamma$, $\gamma + \alpha$ étaient nulles, leur somme $2(\alpha + \beta + \gamma)$ le serait aussi, ce qui est exclu.
:::

:::example[G milieu d'une médiane]
Soit $G$ le barycentre de $(A\,,2)$, $(B\,,1)$, $(C\,,1)$ et $I$ le milieu de $[BC]$, barycentre de $(B\,,1)$ et $(C\,,1)$. Alors $G$ est le barycentre de $(A\,,2)$ et $(I\,,2)$ : c'est le **milieu de $[AI]$**.
:::

![Barycentre partiel dans un triangle](/lessons/images/barycentre-partiel.svg "On regroupe B et C en leur milieu I, affecté du coefficient 1 + 1 = 2 : G est le milieu de [AI].")

:::theorem[Isobarycentre de trois points non alignés]
L'isobarycentre de trois points non alignés $A$, $B$, $C$ est le **centre de gravité** du triangle $ABC$ : c'est le point $G$ tel que $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec 0$.
:::

:::proof[Isobarycentre et centre de gravité]
Soient $I$, $J$, $K$ les milieux de $[BC]$, $[CA]$, $[AB]$ et $G$ l'isobarycentre de $A$, $B$, $C$.

| Étape | Justification |
|---|---|
| $G$ est le barycentre de $(A\,,1)$ et $(I\,,2)$ | barycentre partiel : $I$ est le barycentre de $(B\,,1)$ et $(C\,,1)$ |
| $\overrightarrow{AG} = \dfrac{2}{3}\,\overrightarrow{AI}$ | existence et unicité pour deux points |
| De même $\overrightarrow{BG} = \dfrac{2}{3}\,\overrightarrow{BJ}$ et $\overrightarrow{CG} = \dfrac{2}{3}\,\overrightarrow{CK}$ | on regroupe $(C, A)$ puis $(A, B)$ |
| $G$ est sur les trois médianes, aux deux tiers à partir de chaque sommet : c'est le centre de gravité | définition du centre de gravité |
:::

:::method[Démontrer que trois droites sont concourantes]
On écrit un point $G$ comme barycentre de trois points de **trois façons** différentes grâce au barycentre partiel : $G$ est alors sur chacune des trois droites.
:::

:::example[Les céviennes de (A, 1), (B, 2), (C, 3)]
Soit $G$ le barycentre de $(A\,,1)$, $(B\,,2)$, $(C\,,3)$, et $I$, $J$, $K$ les barycentres de $(B\,,2)$ et $(C\,,3)$, de $(A\,,1)$ et $(C\,,3)$, de $(A\,,1)$ et $(B\,,2)$. Par regroupement, $G$ est le barycentre de $(A\,,1)$ et $(I\,,5)$, de $(B\,,2)$ et $(J\,,4)$, de $(C\,,3)$ et $(K\,,3)$ : il est sur $(AI)$, $(BJ)$ et $(CK)$, qui sont donc concourantes en $G$.
:::

## 5. Coordonnées du barycentre

:::theorem[Coordonnées du barycentre]
Dans un repère $(O, \vec i, \vec j)$, le barycentre $G$ de $(A\,,\alpha)$, $(B\,,\beta)$ et $(C\,,\gamma)$, avec $s = \alpha + \beta + \gamma \neq 0$, a pour coordonnées
$$
x_G = \frac{\alpha\,x_A + \beta\,x_B + \gamma\,x_C}{s}
$$
$$
y_G = \frac{\alpha\,y_A + \beta\,y_B + \gamma\,y_C}{s}
$$
Pour deux points, on prend $\gamma = 0$.
:::

:::proof[Coordonnées]
On note $s = \alpha + \beta + \gamma \neq 0$.

| Étape | Justification |
|---|---|
| $s\,\overrightarrow{OG} = \alpha\,\overrightarrow{OA} + \beta\,\overrightarrow{OB} + \gamma\,\overrightarrow{OC}$ | réduction avec $M = O$ |
| $\overrightarrow{OG} = \dfrac{\alpha}{s}\,\overrightarrow{OA} + \dfrac{\beta}{s}\,\overrightarrow{OB} + \dfrac{\gamma}{s}\,\overrightarrow{OC}$ | on divise par $s \neq 0$ |
| Les composantes de $\overrightarrow{OG}$ sont $(x_G\,;y_G)$, celles de $\overrightarrow{OA}$ sont $(x_A\,;y_A)$, etc. | définition des coordonnées d'un point |
| On lit les deux formules composante par composante | composantes d'une combinaison de vecteurs |
:::

C'est exactement une **moyenne pondérée** des abscisses et des ordonnées.

:::example[Calculer des coordonnées]
$A(1\,;2)$, $B(4\,;-1)$, $C(-2\,;5)$ et $G$ barycentre de $(A\,,1)$, $(B\,,2)$, $(C\,,-1)$. La somme des coefficients vaut $2$ :
$$
x_G = \frac{1 + 8 + 2}{2} = \frac{11}{2}
$$
$$
y_G = \frac{2 - 2 - 5}{2} = -\frac{5}{2}
$$
:::

## 6. Ensembles de points

:::method[Trouver un ensemble de points avec des normes]
1. On **réduit** chaque somme vectorielle : $\lVert \alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} \rVert = \lvert \alpha + \beta \rvert\, MG$ (ou un vecteur constant si la somme des coefficients est nulle).
2. On reconnaît :
   - $MG = r$ ($r > 0$) : le **cercle** de centre $G$ et de rayon $r$ ;
   - $MG = MG'$ : la **médiatrice** de $[GG']$ ;
   - $MG = 0$ : le point $G$ seul.
:::

:::example[Le cercle inscrit et le cercle circonscrit]
$ABC$ est équilatéral de côté $a$, de centre de gravité $G$. Pour tout $M$, $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\,\overrightarrow{MG}$.

- $\lVert \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} \rVert = \dfrac{a\sqrt3}{2} \iff MG = \dfrac{a\sqrt3}{6}$ : c'est le **cercle inscrit** dans $ABC$.
- $\lVert \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} \rVert = a\sqrt3 \iff MG = \dfrac{a\sqrt3}{3}$ : c'est le **cercle circonscrit**.

(Dans un triangle équilatéral, $G$ est aussi le centre des deux cercles, de rayons $\frac{a\sqrt3}{6}$ et $\frac{a\sqrt3}{3}$.)
:::

![Deux ensembles de points](/lessons/images/barycentre-lieux.svg "Dans le triangle équilatéral ABC, les deux conditions donnent le cercle inscrit (orange) et le cercle circonscrit (bleu), tous deux de centre G.")

:::warning
La médiatrice n'apparaît que si les **deux** sommes ont des coefficients de même somme en valeur absolue : $\lVert 2\overrightarrow{MA} + \overrightarrow{MB} \rVert = \lVert 4\overrightarrow{MC} - \overrightarrow{MD} \rVert$ donne $3MG = 3MG'$, donc $MG = MG'$. Avec $3MG = 2MG'$, l'ensemble n'est plus une droite (et sort du programme).
:::

## 7. Méthodes pour les problèmes

:::method[Écrire un point comme barycentre]
- Si $\overrightarrow{AG} = t\,\overrightarrow{AB}$, alors $G$ est le barycentre de $(A\,,1 - t)$ et $(B\,,t)$.
- Si l'on a une relation $a\,\overrightarrow{LA} = b\,\overrightarrow{LB}$ (avec $a \neq b$), on la réécrit $a\,\overrightarrow{LA} - b\,\overrightarrow{LB} = \vec 0$ : $L$ est le barycentre de $(A\,,a)$ et $(B\,,-b)$.
:::

:::example[De la relation au barycentre]
$3\,\overrightarrow{LA} = 5\,\overrightarrow{LB}$ s'écrit $3\,\overrightarrow{LA} - 5\,\overrightarrow{LB} = \vec 0$ : $L$ est le barycentre de $(A\,,3)$ et $(B\,,-5)$, et $\overrightarrow{AL} = \frac{-5}{-2}\,\overrightarrow{AB} = \frac52\,\overrightarrow{AB}$.
:::

:::method[Démontrer un alignement]
Trois points sont alignés dès que l'un est le barycentre des deux autres. On cherche donc des coefficients, souvent grâce au barycentre partiel ; ou bien on calcule une relation du type $\overrightarrow{A'P} + 2\,\overrightarrow{A'Q} = \vec 0$.
:::

:::method[Démontrer que des droites sont parallèles]
Si la somme des coefficients est nulle, $\vec u = \alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC}$ est constant. En le calculant avec $M = A$, $M = B$, $M = C$, on obtient trois vecteurs colinéaires à $\vec u$ : les droites qu'ils dirigent sont parallèles.
:::

Ces méthodes sont mises en œuvre dans les exercices du chapitre : alignement dans l'[exercice n°189](/lycee/2eme/sciences/barycentre#ex-0000189), parallélisme dans l'[exercice n°190](/lycee/2eme/sciences/barycentre#ex-0000190), ensembles de points dans l'[exercice n°191](/lycee/2eme/sciences/barycentre#ex-0000191), concurrence dans l'[exercice n°192](/lycee/2eme/sciences/barycentre#ex-0000192).

## 8. Pour aller plus loin : le centre du cercle inscrit

Dans un triangle $ABC$, on note $a = BC$, $b = CA$ et $c = AB$. Le centre du cercle inscrit (point de concours des bissectrices) est le barycentre de $(A\,,a)$, $(B\,,b)$ et $(C\,,c)$ : **chaque sommet est pondéré par la longueur du côté opposé**.

Exemple : $A(0\,;0)$, $B(4\,;0)$, $C(0\,;3)$. Alors $a = 5$, $b = 3$, $c = 4$ et le centre est $\left(\frac{5 \times 0 + 3 \times 4 + 4 \times 0}{12}\,;\frac{5 \times 0 + 3 \times 0 + 4 \times 3}{12}\right) = (1\,;1)$, à distance $1$ des trois côtés. La démonstration, guidée, est l'[exercice n°193](/lycee/2eme/sciences/barycentre#ex-0000193).

:::history
Archimède de Syracuse (vers 287-212 av. J.-C.) a énoncé la loi du levier : deux masses s'équilibrent quand leurs distances au point d'appui sont inversement proportionnelles aux masses. On lui prête la phrase : « Donnez-moi un point d'appui et je soulèverai le monde. » Le barycentre en est la version vectorielle.
:::

## Vérifie-toi

::::check[Un barycentre sur un segment]
$AB = 6$. Où est le barycentre $G$ de $(A\,,1)$ et $(B\,,2)$ ? Et celui $H$ de $(A\,,1)$ et $(B\,,-2)$ ?

:::answer
$\overrightarrow{AG} = \frac{2}{3}\overrightarrow{AB}$ : $G \in [AB]$ avec $AG = 4$. $\overrightarrow{AH} = \frac{-2}{-1}\overrightarrow{AB} = 2\overrightarrow{AB}$ : $H$ est au-delà de $B$, avec $AH = 12$ (et $BH = 6$).
:::
::::

::::check[Réduire]
$G$ est le barycentre de $(A\,,3)$, $(B\,,-1)$, $(C\,,2)$. Réduire $3\,\overrightarrow{MA} - \overrightarrow{MB} + 2\,\overrightarrow{MC}$, puis donner l'ensemble des points $M$ tels que $\lVert 3\,\overrightarrow{MA} - \overrightarrow{MB} + 2\,\overrightarrow{MC} \rVert = 8$.

:::answer
La somme vaut $4\,\overrightarrow{MG}$. La condition devient $4MG = 8$, soit $MG = 2$ : le cercle de centre $G$ et de rayon $2$.
:::
::::

::::check[Coordonnées]
$A(2\,;0)$ et $B(-1\,;3)$. Coordonnées du barycentre $G$ de $(A\,,2)$ et $(B\,,1)$ ?

:::answer
$x_G = \dfrac{4 - 1}{3} = 1$ et $y_G = \dfrac{0 + 3}{3} = 1$ : $G(1\,;1)$.
:::
::::

::::challenge
Soit $ABC$ un triangle et $G$ son centre de gravité. Montrer que, pour tout point $M$, $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\,\overrightarrow{MG}$, puis en déduire que si $A'$, $B'$, $C'$ sont les milieux des côtés, les triangles $ABC$ et $A'B'C'$ ont le même centre de gravité.

:::answer
La première égalité est la réduction pour trois points (coefficients $1$, $1$, $1$). Ensuite $\overrightarrow{MA'} + \overrightarrow{MB'} + \overrightarrow{MC'} = \frac12(\overrightarrow{MB} + \overrightarrow{MC}) + \frac12(\overrightarrow{MC} + \overrightarrow{MA}) + \frac12(\overrightarrow{MA} + \overrightarrow{MB}) = \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\,\overrightarrow{MG}$. Avec $M = G$ : $\overrightarrow{GA'} + \overrightarrow{GB'} + \overrightarrow{GC'} = \vec 0$, donc $G$ est aussi le centre de gravité de $A'B'C'$.
:::
::::

:::summary
- $G$ barycentre de $(A\,,\alpha)$, $(B\,,\beta)$ avec $\alpha + \beta \neq 0$ : $\alpha\,\overrightarrow{GA} + \beta\,\overrightarrow{GB} = \vec 0 \iff \overrightarrow{AG} = \dfrac{\beta}{\alpha + \beta}\,\overrightarrow{AB}$. $G \in (AB)$ ; $G \in [AB]$ si et seulement si $\alpha$ et $\beta$ sont de même signe.
- On peut multiplier tous les coefficients par un même réel non nul. Coefficients égaux : milieu, isobarycentre.
- **Réduction** : $\alpha\,\overrightarrow{MA} + \beta\,\overrightarrow{MB} + \gamma\,\overrightarrow{MC} = (\alpha + \beta + \gamma)\,\overrightarrow{MG}$ ; si la somme des coefficients est nulle, le vecteur est constant.
- **Barycentre partiel** : on remplace deux points par leur barycentre, affecté de la somme de leurs coefficients.
- L'isobarycentre de trois points non alignés est le centre de gravité.
- Coordonnées : moyenne pondérée des coordonnées.
- Ensembles de points : $MG = r$ (cercle), $MG = MG'$ (médiatrice).
:::
