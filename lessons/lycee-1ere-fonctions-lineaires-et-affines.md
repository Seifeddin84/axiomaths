---
title: "Fonctions linéaires et affines"
slug: "lycee-1ere-fonctions-lineaires-et-affines"
school: "lycee"
level: "1ere"
sections: []
chapter: "Fonctions linéaires et Affines"
summary: "De la proportionnalité à la fonction linéaire, puis à la fonction affine : définition, détermination du coefficient, représentation graphique, signe de ax + b, comparaison de tarifs et problèmes d'aires."
prerequisites: ["Proportionnalité", "Repère du plan", "Équations du premier degré"]
source: "Manuel officiel 1ère année, Tome 2, chapitres 12 et 14"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Un kilo de tomates coûte $2{,}4$ D. Deux kilos coûtent le double, dix kilos dix fois plus : le prix est **proportionnel** à la quantité. On le note $p(x) = 2{,}4\,x$, et c'est une **fonction linéaire**.

Un forfait de téléphone coûte $5$ D par mois, plus $0{,}1$ D par minute. Pour $100$ minutes, on paie $15$ D ; pour $200$ minutes, $25$ D : on a doublé le temps, mais pas la facture. Le prix n'est plus proportionnel, pourtant chaque minute de plus coûte toujours le même supplément. On le note $f(x) = 0{,}1\,x + 5$, et c'est une **fonction affine**.

![Une droite par l'origine et sa translatée](/lessons/images/fonctions-lineaire-affine.svg "La représentation graphique de y = ax passe par l'origine et par le point A(1 ; a). Celle de y = ax + b est la même droite montée de b : elle passe par (0 ; b) et lui est parallèle.")

:::intuition
- Une fonction **linéaire** $x \mapsto ax$ est la proportionnalité mise en formule. Le nombre $a$ est « le prix d'une unité » : quand $x$ augmente de $1$, le résultat augmente de $a$.
- Une fonction **affine** $x \mapsto ax + b$ est une fonction linéaire à laquelle on ajoute une quantité fixe $b$, comme des frais de dossier.
- Graphiquement, la première est une droite qui passe par l'origine ; la seconde est la **même droite, décalée de $b$**.
:::

## 1. Fonction linéaire

:::definition[Fonction linéaire]
Soit $a$ un réel. La fonction $f : x \mapsto ax$ est la **fonction linéaire de coefficient $a$**.

On dit que $f(x)$ est l'**image** de $x$ par $f$, et que $x$ est un **antécédent** de $f(x)$.
:::

:::property[Ce qu'on peut en dire]
Pour une fonction linéaire $f$ de coefficient $a$ :

- $f(0) = 0$ et $f(1) = a$ ;
- pour tous réels $x$ et $x'$ : $f(x + x') = f(x) + f(x')$ ;
- pour tous réels $k$ et $x$ : $f(kx) = k\,f(x)$ ;
- pour $x \neq 0$ : $\dfrac{f(x)}{x} = a$, le quotient est constant (c'est la proportionnalité).
:::

L'égalité $f(x+x') = f(x) + f(x')$ n'est que la distributivité : $a(x+x') = ax + ax'$.

:::example[Images et antécédents]
Soit $f$ la fonction linéaire telle que $f(-2) = 1$. Alors $a = \dfrac{f(-2)}{-2} = -\dfrac12$, donc $f(x) = -\dfrac{x}{2}$.

- L'image de $6$ est $f(6) = -3$.
- L'antécédent de $5$ vérifie $-\dfrac{x}{2} = 5$, d'où $x = -10$.
- Sans connaître $a$ : $f(-6) = f\big(3 \times (-2)\big) = 3\,f(-2) = 3$.
:::

:::method[Trouver le coefficient]
Si l'on connaît **une** image non triviale, $f(x_0) = y_0$ avec $x_0 \neq 0$, alors $a = \dfrac{y_0}{x_0}$.

Quand la donnée est une **équation** sur $f(x_0)$, on la résout d'abord. Par exemple $\big(f(2)\big)^2 - 6f(2) + 9 = 0$ s'écrit $\big(f(2) - 3\big)^2 = 0$, donc $f(2) = 3$ et $a = \dfrac32$.
:::

:::warning
Une fonction linéaire vérifie toujours $f(0) = 0$ : il n'existe **aucune** fonction linéaire telle que $f(0) = -1$. De même, si $f(2) = 0$, alors $a = 0$ et $f$ est la fonction nulle. Quand on donne deux images, elles doivent être compatibles : $f(3) = 1$ et $f(-6) = -2$ conviennent (les deux donnent $a = \frac13$), mais $f(3) = 1$ et $f(-6) = 2$ sont impossibles.
:::

### Les pourcentages sont des fonctions linéaires

:::example[Multiplier, c'est évoluer]
| Évolution du prix $x$ | Fonction | Calcul |
|---|---|---|
| baisse de $20\,\%$ | $x \mapsto 0{,}8\,x$ | $x - 0{,}2x$ |
| hausse de $8\,\%$ | $x \mapsto 1{,}08\,x$ | $x + 0{,}08x$ |
| baisse de $10\,\%$ puis hausse de $10\,\%$ | $x \mapsto 1{,}1 \times 0{,}9\,x = 0{,}99\,x$ | on **compose** les deux |

La dernière ligne surprend : une baisse de $10\,\%$ suivie d'une hausse de $10\,\%$ ne ramène **pas** au prix de départ, elle laisse une baisse de $1\,\%$. Les pourcentages ne s'additionnent pas, leurs coefficients se multiplient.
:::

## 2. Représentation graphique d'une fonction linéaire

:::theorem[Admis]{wiki="Représentation graphique d'une fonction linéaire (admis)"}
Dans un repère $(O, I, J)$, la représentation graphique de $f : x \mapsto ax$ est la **droite $\Delta$ d'équation $y = ax$**. Elle passe par l'origine $O$ et par le point $A(1\,;\,a)$. Si $a = 0$, c'est la droite $(OI)$.
:::

:::property[Appartenance]
Un point $M(x\,;\,y)$ appartient à $\Delta$ si et seulement si $y = ax$.
:::

:::example[Un point est-il sur la droite ?]
Soit $\Delta$ la droite d'équation $y = 2x$.

- $P(\sqrt3 - 1\,;\,2\sqrt3 - 2)$ : $2(\sqrt3 - 1) = 2\sqrt3 - 2$, donc $P \in \Delta$ ✓.

Soit maintenant $\Delta'$ la droite d'équation $y = (\sqrt2 - 1)x$.

- $Q(\sqrt2 + 1\,;\,1)$ : $(\sqrt2 - 1)(\sqrt2 + 1) = 2 - 1 = 1$, donc $Q \in \Delta'$ ✓ (on a utilisé $(a-b)(a+b) = a^2 - b^2$).
:::

:::method[Points alignés avec l'origine]
Soit $E \neq O$ un point de $\Delta$. Alors $O$, $E$ et $M$ sont **alignés** si et seulement si $M \in (OE) = \Delta$, c'est-à-dire $y_M = a\,x_M$.

Exemple. $\Delta : y = 3x$ et $M(m^2\,;\,2m+1)$. On cherche $m$ tel que $O$, un point de $\Delta$ et $M$ soient alignés :
$$
2m + 1 = 3m^2 \iff 3m^2 - 2m - 1 = 0 \iff (3m+1)(m-1) = 0 \iff m = -\frac13 \text{ ou } m = 1.
$$
Contrôle : pour $m = 1$, $M(1\,;\,3)$ et $3 = 3 \times 1$ ✓. Pour $m = -\frac13$, $M\left(\frac19\,;\,\frac13\right)$ et $3 \times \frac19 = \frac13$ ✓.
:::

### Lire un graphique et comparer

:::property[Comparer deux images]
Pour $f : x \mapsto ax$ et tous réels $x$, $x'$ :
$$
f(x) - f(x') = a\,(x - x').
$$
- Si $a > 0$, $f$ **conserve l'ordre** : $x < x' \Rightarrow f(x) < f(x')$ ($f$ est croissante).
- Si $a < 0$, $f$ **renverse l'ordre** : $x < x' \Rightarrow f(x) > f(x')$ ($f$ est décroissante).
- $f(x)$ a le signe de $a\,x$ : pour $a > 0$, négatif quand $x < 0$ et positif quand $x > 0$ ; l'inverse pour $a < 0$.
:::

:::example[Comparer sans calculer]
Soit $f(x) = -2x$ et deux réels $a$ et $b$ tels que $a - b = 1 - \sqrt3$. Comme $\sqrt3 > 1$, on a $a - b < 0$. Alors
$$
f(a) - f(b) = -2\,(a - b) = -2 + 2\sqrt3 > 0,
$$
donc $f(a) > f(b)$.
:::

:::example[Lecture graphique]
Soit $f(x) = -\dfrac32\,x$.

- $f(x) = 6 \iff x = -4$ : l'antécédent de $6$ est $-4$.
- $f(x) \leq 3 \iff -\dfrac32 x \leq 3 \iff x \geq -2$ : on a divisé par $-\dfrac32 < 0$, donc le sens de l'inégalité **change**. Graphiquement : les points de la droite situés sous la droite $y = 3$ sont ceux d'abscisse supérieure ou égale à $-2$.
:::

## 3. Fonction affine

:::definition[Fonction affine]
Soient $a$ et $b$ deux réels. La fonction $f : x \mapsto ax + b$ est une **fonction affine**.

- $a$ est son **coefficient** (on dit aussi le coefficient directeur de sa droite) ;
- $b = f(0)$ est son **ordonnée à l'origine**.

Si $b = 0$, $f$ est linéaire. Si $a = 0$, $f$ est **constante**.
:::

:::property[Le taux d'accroissement]
Pour tous réels distincts $x$ et $x'$ :
$$
\frac{f(x) - f(x')}{x - x'} = a.
$$
:::

:::proof[Le taux d'accroissement d'une fonction affine est constant]
| Étape | Justification |
|---|---|
| $f(x) - f(x') = (ax + b) - (ax' + b)$ | définition de $f$ |
| $\phantom{f(x) - f(x')} = ax + b - ax' - b$ | on enlève la parenthèse précédée de $-$ |
| $\phantom{f(x) - f(x')} = \textcolor{#ea580c}{a}\,(x - x')$ | $b$ disparaît, on factorise |
| donc $\dfrac{f(x) - f(x')}{x - x'} = a$ | on divise par $x - x' \neq 0$ |
:::

C'est la phrase « chaque minute supplémentaire coûte le même prix » traduite en formule : le supplément $f(x) - f(x')$ est proportionnel à l'écart $x - x'$, quelle que soit l'origine.

:::method[Déterminer une fonction affine à partir de deux images]
Si $f(x_1) = y_1$ et $f(x_2) = y_2$ avec $x_1 \neq x_2$ :

1. $a = \dfrac{y_2 - y_1}{x_2 - x_1}$ ;
2. $b = y_1 - a\,x_1$.
:::

:::example[Deux images]
Soit $f$ affine avec $f(-1) = 4$ et $f(3) = -4$. Alors $a = \dfrac{-4 - 4}{3 - (-1)} = -2$ et $b = 4 - (-2)(-1) = 2$. Donc $f(x) = -2x + 2$. Contrôle : $f(3) = -6 + 2 = -4$ ✓.
:::

:::example[Température en degrés Fahrenheit]
La mesure en $°F$ est une fonction affine $F$ de la mesure $x$ en $°C$. L'eau gèle à $0\,°C$ ($32\,°F$) et bout à $100\,°C$ ($212\,°F$). Donc $b = F(0) = 32$ et $a = \dfrac{212 - 32}{100 - 0} = 1{,}8$ : $F(x) = 1{,}8\,x + 32$. Pour $x = 37$ : $F(37) = 98{,}6\,°F$.
:::

## 4. Représentation graphique d'une fonction affine

:::theorem[Représentation graphique]
Dans un repère $(O, I, J)$, la représentation graphique de $f : x \mapsto ax + b$ est la **droite $D$ d'équation $y = ax + b$**. Elle passe par le point $(0\,;\,b)$ et elle est **parallèle** à la droite $\Delta$ d'équation $y = ax$.
:::

:::proof[$D$ est parallèle à $\Delta$]
| Étape | Justification |
|---|---|
| $M(x\,;\,y) \in D \iff y = ax + b$ | définition de $D$ |
| $\phantom{M(x\,;\,y) \in D} \iff y - b = ax$ | on soustrait $b$ |
| $\phantom{M(x\,;\,y) \in D} \iff M_0(x\,;\,y - b) \in \Delta$ | définition de $\Delta$ |
| $M$ est l'image de $M_0$ par la translation de vecteur $b\,\overrightarrow{OJ}$ | même abscisse, ordonnée augmentée de $b$ |
| donc $D$ est l'image de $\Delta$ par cette translation | tout point de $D$ en vient, et réciproquement |
| donc $D \parallel \Delta$ | l'image d'une droite par une translation lui est parallèle |
:::

:::property[Droites parallèles ou sécantes]
Soient $f : x \mapsto ax + b$ et $g : x \mapsto a'x + b'$.

- Si $a = a'$ et $b \neq b'$, les droites sont **parallèles** et ne se coupent pas (si de plus $b = b'$, elles sont confondues).
- Si $a \neq a'$, elles se coupent en **un seul point**, d'abscisse $x = \dfrac{b' - b}{a - a'}$.
:::

:::example[Point d'intersection]
$f(x) = 2x + 1$ et $g(x) = -x + 7$. On résout $2x + 1 = -x + 7$, d'où $3x = 6$ et $x = 2$. Le point d'intersection est $(2\,;\,5)$ : $f(2) = 5$ et $g(2) = 5$ ✓.

Au contraire $y = -3x + 1$ et $y = -3x - 5$ ont le même coefficient : $-3x + 1 = -3x - 5$ donne $1 = -5$, impossible. Elles sont parallèles.
:::

:::method[Tracer la droite et trouver les points d'intersection avec les axes]
- Avec l'axe des ordonnées : $x = 0$ donne le point $(0\,;\,b)$.
- Avec l'axe des abscisses (si $a \neq 0$) : $ax + b = 0$ donne $x = -\dfrac{b}{a}$, d'où le point $\left(-\dfrac ba\,;\,0\right)$.

Pour $f(x) = 5 - \dfrac52 x$ : on trouve $(0\,;\,5)$ et, avec $5 - \dfrac52 x = 0$, le point $(2\,;\,0)$. On trace la droite qui passe par ces deux points.
:::

:::example[Restreindre l'intervalle]
Soit $g(x) = -\dfrac{x}{2} + 1$. On cherche les $x$ tels que $-3 \leq g(x) < 0$.
$$
-3 \leq -\frac{x}{2} + 1 < 0 \iff -4 \leq -\frac{x}{2} < -1 \iff 2 < x \leq 8.
$$
La dernière équivalence s'obtient en multipliant par $-2$, ce qui **inverse** les inégalités. Les points de la droite entre $y = -3$ et $y = 0$ ont donc leur abscisse dans $]2\,;\,8]$.
:::

## 5. Équations, inéquations et signe de $ax + b$

:::theorem[Équation du premier degré]
Si $a \neq 0$, l'équation $ax + b = 0$ admet une unique solution : $x = -\dfrac{b}{a}$.
:::

:::theorem[Signe de $ax + b$]
Soit $a \neq 0$. L'expression $ax + b$ s'annule en $-\dfrac ba$ et elle a le **signe de $a$ à droite** de ce nombre, le signe **opposé** à gauche.
:::

![Le signe de ax+b selon le signe de a](/lessons/images/fonctions-signe-ax-b.svg "Pour a positif, ax + b est négatif à gauche de la racine et positif à droite ; pour a négatif, c'est l'inverse.")

:::proof[Signe de $ax + b$ quand $a < 0$]
| Étape | Justification |
|---|---|
| $ax + b > 0 \iff ax > -b$ | on retire $b$ |
| $\phantom{ax + b > 0} \iff x < -\dfrac{b}{a}$ | on divise par $a < 0$ : le sens change |
| donc $ax + b < 0 \iff x > -\dfrac ba$ | même calcul avec $<$ |
:::

:::warning
Multiplier ou diviser les deux membres d'une **inéquation** par un nombre **négatif** change le sens de l'inégalité. Pour une équation, rien ne change.
:::

::::example[Signe d'un produit]
Étudions le signe de $(2x-1)(-x+3)$. Le premier facteur s'annule en $\dfrac12$ (coefficient $2 > 0$), le second en $3$ (coefficient $-1 < 0$).

:::signs
| $x$ | $-\infty$ | | $\frac12$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $2x-1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $-x+3$ | | $+$ | | $+$ | $0$ | $-$ | |
| $(2x-1)(-x+3)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
:::

Donc $(2x-1)(-x+3) > 0 \iff x \in \left]\dfrac12\,;\,3\right[$. Contrôle : pour $x = 0$, le produit vaut $-3 < 0$ ; pour $x = 1$ il vaut $2 > 0$ ; pour $x = 4$ il vaut $7 \times (-1) < 0$.
::::

:::example[Avec une valeur absolue]
Soit $f(x) = -2x$. Résoudre $f\big(\lvert x - 1 \rvert\big) \geq -3$.

$-2\,\lvert x-1 \rvert \geq -3 \iff \lvert x-1 \rvert \leq \dfrac32$ (on divise par $-2$ : le sens change)
$\iff -\dfrac32 \leq x - 1 \leq \dfrac32 \iff -\dfrac12 \leq x \leq \dfrac52$.

On rappelle que $\lvert t \rvert \leq c \iff -c \leq t \leq c$ pour $c \geq 0$. Contrôle : pour $x = 0$, $f(\lvert -1 \rvert) = f(1) = -2 \geq -3$ ✓ ; pour $x = 3$, $f(2) = -4 < -3$, et $3 > \frac52$ ✓.
:::

### Comparer deux tarifs

:::example[Location de vélo]
Option A : $4$ D par heure. Option B : un forfait de $15$ D plus $1{,}5$ D par heure. Pour $x$ heures :
$$
A(x) = 4x, \qquad B(x) = 1{,}5\,x + 15.
$$
On étudie le signe de $A(x) - B(x) = 2{,}5\,x - 15$. Il s'annule pour $x = 6$ et il est positif à droite (coefficient $2{,}5 > 0$).

- Pour $x < 6$ h : $A(x) < B(x)$, l'option A est moins chère.
- Pour $x = 6$ h : les deux coûtent $24$ D (c'est le point d'intersection des deux droites).
- Pour $x > 6$ h : l'option B est moins chère.
:::

## 6. Problèmes d'aire dans un repère

:::method[Aire du triangle $OMH$]
Soit $\Delta$ la représentation de $f : x \mapsto ax$, $M(x\,;\,f(x))$ un point de $\Delta$ et $H(x\,;\,0)$ son projeté orthogonal sur $(OI)$. Le triangle $OMH$ est **rectangle en $H$**, avec $OH = \lvert x \rvert$ et $MH = \lvert f(x) \rvert$. Son aire est
$$
S = \frac12\,\lvert x \rvert\,\lvert f(x) \rvert = \frac12\,\lvert a \rvert\,x^2.
$$
:::

:::example[Résoudre une condition sur l'aire]
Avec $f(x) = \dfrac52 x$ et $x > 0$ : $S = \dfrac12 \times x \times \dfrac52 x = \dfrac54\,x^2$. Alors
$$
S \leq 20 \iff x^2 \leq 16 \iff 0 < x \leq 4.
$$
:::

:::warning
Une longueur est **toujours positive** : on écrit des valeurs absolues, pas des différences au hasard. Si $x < 0$, alors $OH = \lvert x \rvert = -x$.

Exemple. $g(x) = -x + 4$ coupe l'axe des abscisses en $A(4\,;\,0)$. Pour $M(x\,;\,g(x))$ avec $x < 0$ et $H(x\,;\,0)$ : $AH = 4 - x$ et $MH = \lvert -x + 4 \rvert = 4 - x$. Le triangle $AMH$ a pour aire $\dfrac12 (4 - x)^2$, et
$$
\frac12 (4-x)^2 \leq 50 \iff \lvert 4 - x \rvert \leq 10 \iff -6 \leq x \leq 14,
$$
qui, avec $x < 0$, donne $x \in [-6\,;\,0[$.
:::

:::example[Un trapèze entre deux droites]
Les droites $y = x$ et $y = -x$. Deux parallèles à l'axe $(OJ)$, d'abscisses $x$ et $x + 3$ avec $x > 0$, coupent la première en $M$ et $N$, la seconde en $Q$ et $P$. Les côtés $[MQ]$ et $[NP]$ sont parallèles (ce sont les bases), distants de $3$.
$$
MQ = x - (-x) = 2x, \qquad NP = 2(x+3), \qquad \text{aire} = \frac{MQ + NP}{2} \times 3 = \frac{2x + 2x + 6}{2} \times 3 = 6x + 9.
$$
Contrôle pour $x = 1$ : $MQ = 2$, $NP = 8$, aire $= \frac{10}{2} \times 3 = 15$ et $6 + 9 = 15$ ✓.
:::

## Vérifie-toi

::::check[Fonction linéaire]
$f$ est linéaire et $f(-4) = 10$. Donner $f(x)$, puis $f(2)$.

:::answer
$a = \dfrac{10}{-4} = -\dfrac52$, donc $f(x) = -\dfrac52 x$ et $f(2) = -5$.
:::
::::

::::check[Fonction affine]
$f$ est affine, $f(1) = 5$ et $f(4) = -1$. Déterminer $f$.

:::answer
$a = \dfrac{-1 - 5}{4 - 1} = -2$ et $b = 5 - (-2)(1) = 7$. Donc $f(x) = -2x + 7$. Contrôle : $f(4) = -8 + 7 = -1$ ✓.
:::
::::

::::check[Inéquation]
Résoudre $3x - 2 \leq 5x + 4$.

:::answer
$3x - 5x \leq 4 + 2 \iff -2x \leq 6 \iff x \geq -3$ (on divise par $-2$ : le sens change). Contrôle : pour $x = -3$ les deux membres valent $-11$.
:::
::::

::::check[Deux droites]
Les droites $y = -3x + 1$ et $y = -3x - 5$ sont-elles parallèles ou sécantes ?

:::answer
Elles ont le même coefficient $-3$ et des ordonnées à l'origine différentes : elles sont **parallèles**, sans point commun.
:::
::::

::::challenge
Montrer que si $f$ est affine, alors $f\!\left(\dfrac{x_1 + x_2}{2}\right) = \dfrac{f(x_1) + f(x_2)}{2}$ : l'image du milieu est le milieu des images.

:::answer
$f\!\left(\dfrac{x_1 + x_2}{2}\right) = a\,\dfrac{x_1 + x_2}{2} + b = \dfrac{a x_1 + a x_2 + 2b}{2} = \dfrac{(a x_1 + b) + (a x_2 + b)}{2} = \dfrac{f(x_1) + f(x_2)}{2}$.
:::
::::

:::summary
- **Linéaire** : $f(x) = ax$ ; $f(0) = 0$, $f(1) = a$ ; droite par $O$ et $A(1\,;\,a)$ ; on cherche $a$ avec $a = f(x_0)/x_0$.
- **Affine** : $f(x) = ax + b$ ; $b = f(0)$ ; $a = \dfrac{f(x) - f(x')}{x - x'}$ ; droite par $(0\,;\,b)$, parallèle à $y = ax$.
- Deux droites de même coefficient sont parallèles ; sinon elles se coupent en un point, d'abscisse $\dfrac{b' - b}{a - a'}$.
- $ax + b = 0 \iff x = -\dfrac ba$ ; $ax + b$ a le signe de $a$ à droite de $-\dfrac ba$ ; **diviser par un négatif change le sens** d'une inégalité.
- Pour un produit, on dresse un tableau de signes avec une ligne par facteur.
- Un problème d'aire se traite en écrivant les longueurs avec des valeurs absolues.
:::
