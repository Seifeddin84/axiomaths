---
title: "Fonctions de référence"
slug: "lycee-2eme-sciences-fonctions-de-reference"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Informatique"]
chapter: "Fonctions de référence"
summary: "Trois courbes à connaître (parabole, racine carrée, hyperbole) et trois mouvements (translation, étirement, symétrie) suffisent pour tracer, lire et étudier toutes les fonctions du chapitre, du trinôme à la fonction homographique."
prerequisites: ["Polynômes", "Problèmes du premier et du second degré", "Translations", "Homothéties"]
source: "Manuel officiel 2ème année, Tome 2, chapitre 4"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

On lance une balle verticalement. Sa hauteur, en mètres, est approximativement $d(t) = -4{,}9\,t^2 + 14{,}7\,t$ où $t$ est le temps en secondes. Quand la balle est-elle le plus haut ? Combien de temps reste-t-elle en l'air ?

Sans tableur ni calculatrice, on peut répondre en une ligne si l'on reconnaît **une parabole déplacée** (réponse à la [section 5](#5-le-trinome-ax-2-bx-c) : $1{,}5$ s après le lancement, à $11{,}025$ m, et la balle retombe au bout de $3$ s).

:::intuition
Dans ce chapitre il n'y a **pas vingt fonctions à apprendre, mais trois courbes et trois mouvements**.

- Les courbes : la parabole $y = x^2$, la racine carrée $y = \sqrt{x}$, l'hyperbole $y = \frac{1}{x}$.
- Les mouvements : **translater** (on remplace $x$ par $x - \alpha$ ou on ajoute $\beta$), **étirer** (on multiplie par $a$), **retourner** (si $a < 0$).

Chaque fonction du chapitre est une des trois courbes, passée par une suite de ces mouvements. Pour l'étudier, on étudie la courbe de base, puis on déplace les résultats avec elle.
:::

![Parabole et hyperbole déplacées par translation](/lessons/images/fonctions-parabole-hyperbole.svg "À gauche : la parabole y = x² et son image par la translation de vecteur (2 ; 1). À droite : l'hyperbole y = 1/x et son image ; le centre et les asymptotes se déplacent avec elle.")

## 1. Lire un graphique et parler de variations

Soit $f$ une fonction et $C$ sa courbe dans un repère. Voici comment on traduit les phrases les plus fréquentes.

| En français | En symboles |
|---|---|
| $2$ a pour image $-5$ par $f$ | $f(2) = -5$ |
| Le point $A(-1\,;3)$ est sur $C$ | $f(-1) = 3$ |
| $-4$ est un antécédent de $1$ | $f(-4) = 1$ |
| $f$ admet un maximum égal à $4$ sur $[-1\,;3]$ | pour tout $x \in [-1\,;3]$, $f(x) \leq 4$, et $f(x_0) = 4$ pour au moins un $x_0$ |
| $f$ est décroissante sur $[2\,;5]$ | $2 \leq a < b \leq 5 \Longrightarrow f(a) \geq f(b)$ |
| Si $x$ est entre $-3$ et $-2$, alors $f(x)$ est entre $0$ et $3{,}4$ | $x \in [-3\,;-2] \Longrightarrow f(x) \in [0\,;3{,}4]$ |

:::definition[Croissante, décroissante]
Soit $I$ un intervalle. $f$ est **croissante** sur $I$ si pour tous $a < b$ de $I$ : $f(a) \leq f(b)$ ; **décroissante** si $f(a) \geq f(b)$. Avec des inégalités strictes, on dit **strictement** croissante ou décroissante.
:::

:::definition[Parité]
Soit $f$ de domaine $D$ **symétrique par rapport à $0$** (si $x \in D$ alors $-x \in D$).
- $f$ est **paire** si $f(-x) = f(x)$ : sa courbe est symétrique par rapport à l'axe des ordonnées.
- $f$ est **impaire** si $f(-x) = -f(x)$ : sa courbe est symétrique par rapport à l'origine.
:::

:::method[Prouver un sens de variation : la méthode de la différence]
1. Prendre deux réels $a < b$ **dans l'intervalle étudié**.
2. Calculer $f(a) - f(b)$ et le **factoriser** (c'est ici que se joue tout le travail).
3. Étudier le signe de chaque facteur sachant que $a < b$, donc $a - b < 0$ et $b - a > 0$.
4. Conclure : $f(a) - f(b) \geq 0$ signifie $f(a) \geq f(b)$, donc $f$ décroissante.
:::

:::warning[Une fonction n'est pas « décroissante sur son domaine » parce qu'elle décroît par morceaux]
Le sens de variation ne se dit **que sur un intervalle**. L'hyperbole $y = \frac{1}{x}$ est décroissante sur $]-\infty\,;0[$ et sur $]0\,;+\infty[$, mais **pas** sur $\mathbb{R}^*$ : $-1 < 1$ et pourtant $f(-1) = -1 < f(1) = 1$.
:::

## 2. La parabole $y = x^2$

Soit $f(x) = x^2$ sur $\mathbb{R}$.

- **Paire** : $f(-x) = (-x)^2 = x^2$, donc la courbe est symétrique par rapport à l'axe des ordonnées.
- **Variations** : décroissante sur $]-\infty\,;0]$ et croissante sur $[0\,;+\infty[$. Minimum $0$, atteint en $0$.

:::proof[$x^2$ est croissante pour $x \geq 0$]
Soit $0 \leq a < b$.

| Étape | Justification |
|---|---|
| $f(a) - f(b) = a^2 - b^2$ | définition de $f$ |
| $\phantom{f(a) - f(b)} = \textcolor{#ea580c}{(a-b)(a+b)}$ | identité remarquable |
| $a - b < 0$ et $a + b > 0$ | car $a < b$, et $0 \leq a$, $0 < b$ |
| Donc $f(a) - f(b) < 0$, c'est-à-dire $f(a) < f(b)$ | un produit d'un négatif et d'un positif est négatif |
:::

Par parité, $f$ est décroissante sur $]-\infty\,;0]$.

:::definition[Parabole, sommet, axe]
La courbe de $x \mapsto x^2$ est la **parabole** d'équation $y = x^2$. Son **sommet** est $O$ et son **axe** (de symétrie) la droite $x = 0$.
:::

**Que se passe-t-il à l'infini ?** Pour tout réel $A > 0$, dès que $x > \sqrt{A}$ on a $x^2 > A$ : $x^2$ dépasse n'importe quel nombre aussi grand que l'on veut. On dit que $x^2$ **tend vers $+\infty$** quand $x$ tend vers $+\infty$ (et aussi vers $-\infty$). Exemple : pour dépasser $10^{30}$, il suffit de $x > 10^{15}$.

## 3. Étirer et retourner : $f(x) = a x^2$

Pour $a \neq 0$, la courbe de $ax^2$ s'obtient en **multipliant chaque ordonnée** de la parabole $y = x^2$ par $a$.

La preuve du manuel utilise une homothétie : soit $h$ l'homothétie de centre $O$ et de rapport $\frac{1}{a}$, et $M(x\,;x^2)$ un point de la parabole. Son image est $M'\left(\frac{x}{a}\,;\frac{x^2}{a}\right)$. Posons $x' = \frac{x}{a}$ : alors $y' = \frac{x^2}{a} = a\,x'^2$. Donc $M'$ est sur la courbe de $ax^2$, et réciproquement tout point de cette courbe est l'image d'un point de la parabole : **la courbe de $ax^2$ est l'image de la parabole $y = x^2$ par $h$**.

:::property[Effet du coefficient $a$]
- $a > 0$ : branches vers le **haut**, minimum $0$ en $x = 0$ ; **décroissante** sur $]-\infty\,;0]$ et **croissante** sur $[0\,;+\infty[$.
- $a < 0$ : branches vers le **bas**, maximum $0$ en $x = 0$ ; **croissante** sur $]-\infty\,;0]$ et **décroissante** sur $[0\,;+\infty[$.
- $\lvert a \rvert$ grand : parabole **étroite** ; $\lvert a \rvert$ petit : parabole **évasée**.
:::

:::example[$-3x^2$]
Pour $f(x) = -3x^2$ : $f(1) = -3$, $f(2) = -12$, $f(-2) = -12$. Variations : si $0 \leq a < b$ alors $a^2 < b^2$, et en multipliant par $-3 < 0$ on **renverse** l'inégalité : $-3a^2 > -3b^2$. Donc $f$ est décroissante sur $[0\,;+\infty[$, et $f(x)$ tend vers $-\infty$ : pour tout $A > 0$, si $x > \sqrt{A/3}$ alors $f(x) < -A$.
:::

## 4. Translater : $f(x) = a(x-\alpha)^2 + \beta$

:::theorem[Parabole de sommet $S(\alpha\,;\beta)$]
La courbe $C$ de $f(x) = a(x-\alpha)^2 + \beta$ est l'image de la parabole $P : y = ax^2$ par la translation de vecteur $\vec{u}(\alpha\,;\beta)$. C'est une parabole de **sommet** $S(\alpha\,;\beta)$ et d'**axe** la droite $x = \alpha$.
:::

:::proof[La translation]
| Étape | Justification |
|---|---|
| $M(x\,;y) \in C \iff y = a(x-\alpha)^2 + \beta$ | équation de $C$ |
| $\phantom{M(x\,;y) \in C} \iff \textcolor{#ea580c}{y - \beta} = a(x - \alpha)^2$ | on isole $\beta$ |
| $\phantom{M(x\,;y) \in C} \iff N(x - \alpha\,;\ y - \beta) \in P$ | $N$ a pour coordonnées $(x-\alpha\,;y-\beta)$ et $P$ a pour équation $y = ax^2$ |
| Or $\overrightarrow{NM} = \vec{u}(\alpha\,;\beta)$, donc $M$ est l'image de $N$ par la translation de vecteur $\vec{u}$ | définition des coordonnées de $\overrightarrow{NM}$ |
:::

Les variations se **décalent** de la même façon : pour $a > 0$, $f$ est décroissante sur $]-\infty\,;\alpha]$, croissante sur $[\alpha\,;+\infty[$, avec le minimum $\beta$ en $x = \alpha$.

:::example[Une parabole à partir de son sommet]
Quelle parabole a pour sommet $S(2\,;-3)$, pour axe $x = 2$ et passe par $A(0\,;-1)$ ? On écrit $y = a(x-2)^2 - 3$. Comme $A$ est sur la courbe, $-1 = 4a - 3$, donc $a = \frac12$ et
$$
y = \tfrac12 (x-2)^2 - 3 = \tfrac12 x^2 - 2x - 1 .
$$
Contrôle : pour $x = 0$, on retrouve bien $-1$ ✓.
:::

## 5. Le trinôme $ax^2 + bx + c$

Une fonction du type $f(x) = ax^2 + bx + c$ avec $a \neq 0$ est une fonction **trinôme**. La clé du chapitre : la mettre sous la forme **canonique** $a(x-\alpha)^2 + \beta$, ce qui permet d'appliquer la section 4. On a déjà vu comment (chapitre « Polynômes ») :
$$
\begin{aligned}
ax^2 + bx + c &= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a},\\
\text{donc}\quad \alpha &= -\frac{b}{2a}, \qquad \beta = f(\alpha) = -\frac{\Delta}{4a} .
\end{aligned}
$$

:::example[$2x^2 + 4x - 1$]
$2x^2 + 4x - 1 = 2\left(x^2 + 2x\right) - 1 = 2(x+1)^2 - 2 - 1 = 2(x+1)^2 - 3$. Sommet $S(-1\,;-3)$, axe $x = -1$, minimum $-3$ (car $a = 2 > 0$). Les racines se lisent : $2(x+1)^2 = 3$, donc $x = -1 \pm \sqrt{\frac32}$, soit environ $0{,}22$ et $-2{,}22$. Contrôle avec $\Delta = 16 + 8 = 24$ : $-\frac{b}{2a} = -1$ et $-\frac{\Delta}{4a} = -3$ ✓.
:::

:::example[La balle du début]
$d(t) = -4{,}9t^2 + 14{,}7t = -4{,}9\,(t - 1{,}5)^2 + 4{,}9 \times 2{,}25$, soit $d(t) = -4{,}9\,(t-1{,}5)^2 + 11{,}025$. Le sommet est $S(1{,}5\,;\,11{,}025)$ et $a < 0$ : c'est un **maximum**. La balle monte pendant $1{,}5$ s jusqu'à $11{,}025$ m. Elle retombe quand $d(t) = 0$, c'est-à-dire $t(14{,}7 - 4{,}9t) = 0$, donc $t = 3$ s : **la descente dure autant que la montée** ($1{,}5$ s), c'est la symétrie de l'axe $t = 1{,}5$ ✓.
:::

:::method[Lire une parabole sur un graphique]
Soit $C$ la courbe de $f(x) = ax^2 + bx + c$ et $S(\alpha\,;\beta)$ son sommet.

| On regarde… | On en déduit… |
|---|---|
| Les branches vers le haut / le bas | $a > 0$ / $a < 0$ |
| L'ordonnée du point de $C$ sur l'axe des ordonnées | $c = f(0)$ |
| L'abscisse $\alpha$ du sommet | $b = -2a\alpha$ : $b$ a le signe de $-a\alpha$ |
| La position du sommet par rapport à l'axe des abscisses | $a > 0$ et $\beta < 0$, ou $a < 0$ et $\beta > 0$ : **deux** racines ; $\beta = 0$ : **une** racine ; sinon **aucune** |
:::

Exemple : $f(x) = -x^2 + 2x + 3 = -(x-1)^2 + 4$ a pour sommet $S(1\,;4)$ : branches vers le bas ($a = -1$), $c = f(0) = 3$, deux racines ($\beta = 4 > 0$ et $a < 0$) qui sont $-1$ et $3$, et $b = -2a\alpha = 2 > 0$ ✓.

## 6. La racine carrée

Soit $g(x) = \sqrt{x}$, définie sur $[0\,;+\infty[$.

:::proof[$\sqrt{x}$ est croissante]
Soit $0 \leq a < b$.

| Étape | Justification |
|---|---|
| $\sqrt{a} - \sqrt{b} = \dfrac{(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b})}{\sqrt{a} + \sqrt{b}}$ | on multiplie par la **quantité conjuguée** (on a $\sqrt{b} > 0$, donc le dénominateur est non nul) |
| $\phantom{\sqrt{a} - \sqrt{b}} = \dfrac{\textcolor{#ea580c}{a - b}}{\sqrt{a} + \sqrt{b}}$ | identité remarquable $(u-v)(u+v) = u^2 - v^2$ |
| $a - b < 0$ et $\sqrt{a} + \sqrt{b} > 0$ | car $a < b$ |
| Donc $\sqrt{a} < \sqrt{b}$ | un quotient négatif donne $\sqrt{a} - \sqrt{b} < 0$ |
:::

La racine carrée **tend vers $+\infty$** (si $x > A^2$ alors $\sqrt{x} > A$), mais **très lentement** : pour atteindre $1000$ il faut $x > 10^6$.

Si $f(x) = \sqrt{x + b}$, sa courbe est l'image de celle de $\sqrt{x}$ par la translation de vecteur $-b\,\vec{\imath}$. Son domaine est $[-b\,;+\infty[$, et $f$ est croissante.

:::example[$\sqrt{x + 3}$]
Domaine $[-3\,;+\infty[$. La courbe démarre au point $(-3\,;0)$ et passe par $(1\,;2)$ et $(6\,;3)$, images de $(0\,;0)$, $(4\,;2)$ et $(9\,;3)$ de la courbe de $\sqrt{x}$ par la translation de vecteur $(-3\,;0)$.
:::

## 7. L'hyperbole $y = \dfrac{1}{x}$ et ses cousines

Soit $f(x) = \dfrac{1}{x}$, définie sur $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$.

- **Impaire** : $f(-x) = -\frac{1}{x} = -f(x)$, donc la courbe est symétrique par rapport à l'origine $O$.
- **Décroissante sur $]0\,;+\infty[$** (et, par imparité, sur $]-\infty\,;0[$).

:::proof[$\frac{1}{x}$ est décroissante pour $x > 0$]
Soit $0 < a < b$.

| Étape | Justification |
|---|---|
| $\dfrac1a - \dfrac1b = \dfrac{b - a}{\textcolor{#ea580c}{ab}}$ | on réduit au même dénominateur |
| $b - a > 0$ et $ab > 0$ | car $0 < a < b$ |
| Donc $\dfrac1a > \dfrac1b$ | la différence est positive |
:::

**Aux bords.** Quand $x \to +\infty$, $\frac{1}{x}$ se rapproche de $0$ : pour $a > 0$ donné, si $x > \frac1a$ alors $0 < \frac1x < a$. Quand $x \to 0^+$, $\frac{1}{x}$ **explose** : pour tout $A > 0$, si $0 < x < \frac{1}{A}$ alors $\frac1x > A$.

:::definition[Hyperbole, centre, asymptotes]
La courbe de $x \mapsto \frac{1}{x}$ est une **hyperbole**, formée de deux **branches**. Son **centre** est $O$ ; les droites $x = 0$ et $y = 0$ sont ses **asymptotes** : la courbe s'en approche indéfiniment sans jamais les toucher.
:::

On déplace maintenant l'hyperbole exactement comme la parabole.

| Fonction | Courbe | Centre | Asymptotes | Domaine |
|---|---|---|---|---|
| $\dfrac{a}{x}$, $a \neq 0$ | étirée par $a$ (retournée si $a < 0$) | $O(0\,;0)$ | $x = 0$ et $y = 0$ | $\mathbb{R}^*$ |
| $\dfrac{a}{x} + \beta$ | translation de vecteur $\beta\,\vec{\jmath}$ | $I(0\,;\beta)$ | $x = 0$ et $y = \beta$ | $\mathbb{R}^*$ |
| $\dfrac{a}{x + \alpha}$ | translation de vecteur $-\alpha\,\vec{\imath}$ | $I(-\alpha\,;0)$ | $x = -\alpha$ et $y = 0$ | $\mathbb{R} \setminus \{-\alpha\}$ |

Pour $a > 0$ la fonction $\frac{a}{x}$ est décroissante sur chacun des deux intervalles ; pour $a < 0$, **croissante** sur chacun.

:::example[Une hyperbole et une droite]
Soit $H : y = \dfrac{1}{x} + 1$, de centre $I(0\,;1)$ et d'asymptotes $x = 0$ et $y = 1$, et $D : y = x$. Où se coupent-elles ? Pour $x \neq 0$,
$$
\begin{aligned}
\frac1x + 1 = x &\iff 1 + x = x^2 \iff x^2 - x - 1 = 0\\
&\iff x = \frac{1 \pm \sqrt{5}}{2} .
\end{aligned}
$$
Les deux points d'intersection ont pour abscisses $\frac{1 + \sqrt5}{2} \approx 1{,}618$ (le nombre d'or) et $\frac{1 - \sqrt5}{2} \approx -0{,}618$. Contrôle : $\frac{1}{1{,}618} + 1 = 0{,}618 + 1 = 1{,}618$ ✓.
:::

## 8. La fonction homographique $\dfrac{ax + b}{cx + d}$

Pour $c \neq 0$, la fonction $f(x) = \dfrac{ax + b}{cx + d}$ est définie sur $\mathbb{R} \setminus \left\{-\frac{d}{c}\right\}$. Pour la ramener à l'hyperbole, on **fait apparaître le dénominateur au numérateur** :

$$
\frac{ax + b}{cx + d} = \frac{a}{c} + \frac{k}{x + \frac{d}{c}}, \qquad k = \frac{bc - ad}{c^2} .
$$

:::theorem[Hyperbole de centre $I\left(-\frac{d}{c}\,;\frac{a}{c}\right)$]
Si $c \neq 0$ et $bc - ad \neq 0$, la courbe de $f(x) = \dfrac{ax+b}{cx+d}$ est une **hyperbole** de centre $I\left(-\dfrac dc\,;\dfrac ac\right)$ et d'asymptotes les droites $x = -\dfrac dc$ et $y = \dfrac ac$. Sur chaque intervalle du domaine, $f$ est **décroissante** si $bc - ad > 0$ et **croissante** si $bc - ad < 0$.
:::

:::example[$\dfrac{2x+1}{x-3}$]
Ici $a = 2$, $b = 1$, $c = 1$, $d = -3$ : $bc - ad = 1 + 6 = 7 > 0$. En pratique on écrit simplement $2x + 1 = 2(x - 3) + 7$, d'où
$$
f(x) = \frac{2(x-3) + 7}{x - 3} = 2 + \frac{7}{x - 3} .
$$
Centre $I(3\,;2)$, asymptotes $x = 3$ et $y = 2$, domaine $\mathbb{R}\setminus\{3\}$. Contrôle : $f(4) = 9 = 2 + 7$ ✓, $f(5) = \frac{11}{2} = 2 + \frac72$ ✓, $f(0) = -\frac13 = 2 - \frac73$ ✓.

**Variations par la différence** : pour $a < b$ dans le même intervalle ($]3\,;+\infty[$ ou $]-\infty\,;3[$),
$$
f(a) - f(b) = \frac{7}{a-3} - \frac{7}{b-3} = \frac{7\,(b - a)}{(a-3)(b-3)} > 0 ,
$$
car $b - a > 0$ et $(a-3)(b-3) > 0$ (deux facteurs de même signe). Donc $f$ est décroissante sur chaque intervalle ✓.
:::

:::warning[Le cas $bc - ad = 0$]
Si $bc = ad$, la fraction se **simplifie** : par exemple $\frac{2x + 4}{x + 2} = 2$ pour $x \neq -2$. La « fonction » est constante, sa courbe est une droite privée d'un point, et il n'y a plus d'hyperbole.
:::

## 9. Comparer et encadrer grâce aux variations

:::property[Encadrer avec un sens de variation]
Si $f$ est croissante sur $[u\,;v]$, alors pour tout $x \in [u\,;v]$ : $f(u) \leq f(x) \leq f(v)$. Si $f$ est décroissante, c'est $f(v) \leq f(x) \leq f(u)$.

Une **somme de deux fonctions décroissantes** (ou croissantes) sur $I$ est décroissante (croissante) sur $I$ : si $a < b$, $f(a) \geq f(b)$ et $g(a) \geq g(b)$, donc en additionnant $f(a) + g(a) \geq f(b) + g(b)$. Pour une **différence** ou un **produit**, ce n'est plus vrai en général.
:::

:::example[$\frac1x - \sqrt{x}$ pour $1 \leq x \leq 4$]
Sur $]0\,;+\infty[$, $\frac{1}{x}$ est décroissante et $-\sqrt{x}$ aussi (opposée d'une croissante). Leur somme $s(x) = \frac1x - \sqrt{x}$ est donc décroissante. Pour $x \in [1\,;4]$ : $s(4) \leq s(x) \leq s(1)$ avec $s(1) = 1 - 1 = 0$ et $s(4) = \frac14 - 2 = -\frac74$, d'où
$$
-\frac74 \leq \frac1x - \sqrt{x} \leq 0 .
$$
Contrôle : $s(2) = 0{,}5 - 1{,}414\ldots \approx -0{,}91$, qui est bien dans $\left[-\frac74\,;0\right]$ ✓.
:::

:::property[Ranger $x$, $x^2$, $\sqrt{x}$, $\frac1x$]
Pour $x > 0$ :
- si $0 < x < 1$ : $\ x^2 < x < \sqrt{x} < \dfrac1x$ ;
- si $x > 1$ : $\ \dfrac1x < \sqrt{x} < x < x^2$.

Pour le voir : $x - \sqrt{x} = \sqrt{x}\,(\sqrt{x} - 1)$ est du signe de $x - 1$, et $x^2 - x = x(x-1)$ aussi.
:::

Contrôle avec $x = \frac14$ : $\frac1{16} < \frac14 < \frac12 < 4$ ✓ ; avec $x = 4$ : $\frac14 < 2 < 4 < 16$ ✓.

## Vérifie-toi

::::check[Forme canonique]
Mettre $f(x) = -3x^2 + 6x + 1$ sous forme canonique. Donner le sommet et l'extremum.

:::answer
$f(x) = -3(x^2 - 2x) + 1 = -3(x-1)^2 + 3 + 1 = -3(x - 1)^2 + 4$. Sommet $S(1\,;4)$ ; comme $a = -3 < 0$, $4$ est un **maximum**, atteint en $x = 1$.
:::
::::

::::check[Une hyperbole déplacée]
Soit $g(x) = \dfrac{3}{x+2} - 1$. Donner son domaine, le centre et les asymptotes de sa courbe, et son sens de variation.

:::answer
Domaine $\mathbb{R}\setminus\{-2\}$. La courbe est l'hyperbole de $\frac3x$ translatée de vecteur $(-2\,;-1)$ : centre $I(-2\,;-1)$, asymptotes $x = -2$ et $y = -1$. Comme $a = 3 > 0$, $g$ est décroissante sur $]-\infty\,;-2[$ et sur $]-2\,;+\infty[$.
:::
::::

::::check[Trouver la parabole]
Déterminer la parabole de sommet $S(1\,;2)$, d'axe $x = 1$, qui passe par $A(3\,;-6)$.

:::answer
$y = a(x-1)^2 + 2$ et $-6 = 4a + 2$, donc $a = -2$ : $y = -2(x-1)^2 + 2 = -2x^2 + 4x$. Contrôle en $x = 3$ : $-18 + 12 = -6$ ✓.
:::
::::

::::challenge
Montrer que pour tout $x > 0$, $x + \dfrac1x \geq 2$, avec égalité seulement pour $x = 1$.

:::answer
$x + \dfrac1x - 2 = \dfrac{x^2 - 2x + 1}{x} = \dfrac{(x-1)^2}{x} \geq 0$, car un carré est positif et $x > 0$. Il y a égalité si et seulement si $(x - 1)^2 = 0$, soit $x = 1$.
:::
::::

:::summary
- Trois courbes : $y = x^2$, $y = \sqrt{x}$, $y = \frac1x$. Trois mouvements : translater, étirer, retourner.
- $f(x) = a(x-\alpha)^2 + \beta$ : parabole de sommet $S(\alpha\,;\beta)$, axe $x = \alpha$. $\ ax^2 + bx + c$ : $\alpha = -\frac{b}{2a}$, $\beta = f(\alpha)$.
- $a > 0$ : minimum $\beta$ ; $a < 0$ : maximum $\beta$. On lit $a$, $c = f(0)$, le signe de $b$ et le nombre de racines sur le graphique.
- $\sqrt{x}$ croissante sur $[0\,;+\infty[$ ; $\sqrt{x + b}$ : domaine $[-b\,;+\infty[$.
- $\frac{a}{x + \alpha} + \beta$ : hyperbole de centre $(-\alpha\,;\beta)$, asymptotes $x = -\alpha$ et $y = \beta$ ; $\frac{ax+b}{cx+d} = \frac ac + \frac{k}{x + d/c}$, $k = \frac{bc - ad}{c^2}$.
- Monotonie : **intervalle par intervalle**, par la différence $f(a) - f(b)$ factorisée ; somme de deux fonctions de même sens = même sens.
- Pour $x > 1$ : $\frac1x < \sqrt{x} < x < x^2$ ; pour $0 < x < 1$ l'ordre est inversé.
:::
