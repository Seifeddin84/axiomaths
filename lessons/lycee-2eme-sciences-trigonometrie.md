---
title: "Trigonométrie"
slug: "lycee-2eme-sciences-trigonometrie"
school: "lycee"
level: "2eme"
sections: ["Sciences"]
chapter: "Trigonométrie"
summary: "Du radian au demi-cercle trigonométrique : cosinus, sinus, tangente, relations fondamentales, angles supplémentaires et complémentaires, puis mesure dans le triangle (aire, loi des sinus, théorème d'El Kashi) et formules de l'angle double."
prerequisites: ["Triangle rectangle", "Théorème de Pythagore", "Calcul vectoriel"]
source: "Manuel officiel 2ème année, Tome 2, chapitre 5"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Une échelle de $6$ m est appuyée contre un mur vertical de $7$ m de haut, en faisant un angle de $65°$ avec le sol. À quelle distance du mur est son pied ? À quelle distance du sommet du mur arrive-t-elle ?

On connaît l'hypoténuse ($6$ m) et un angle, mais ni Pythagore ni Thalès ne donnent les autres côtés. Il manque un outil qui **relie les angles aux longueurs** : le cosinus, le sinus et la tangente. Réponse à la [section 6](#6-dans-le-triangle-rectangle) : le pied est à $6\cos 65° \approx 2{,}54$ m du mur, et l'échelle arrive à $6\sin 65° \approx 5{,}44$ m de haut, donc à $1{,}56$ m du sommet.

:::intuition
Dans un triangle rectangle, **la forme ne dépend que de l'angle** : deux triangles rectangles qui ont le même angle aigu sont semblables, donc les rapports de côtés sont les mêmes quelle que soit la taille. Ces rapports, qui ne dépendent que de l'angle, s'appellent cosinus, sinus, tangente. Le demi-cercle trigonométrique sert à les définir aussi pour les angles obtus.
:::

## 1. Le radian

On a l'habitude des degrés, mais en mathématiques on préfère mesurer un angle par la **longueur de l'arc** qu'il intercepte sur un cercle de rayon $1$.

:::definition[Radian]
Soit $\widehat{AOB}$ un angle et $C$ un cercle de centre $O$ et de rayon $r$. Le rapport $\dfrac{L}{r}$, où $L$ est la longueur de l'arc $\overset{\frown}{AB}$ intercepté, **ne dépend pas de $r$** : c'est la mesure de l'angle en **radians**.
:::

L'angle plat correspond à un demi-cercle, de longueur $\pi r$ : il mesure $\pi$ radians. D'où la règle de conversion

$$
\pi\ \text{rad} = 180° .
$$

Un arc de rayon $r$ et d'angle $\alpha$ (en radians) a pour longueur $L = r\alpha$.

| Degrés | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $120°$ | $135°$ | $150°$ | $180°$ |
|---|---|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$ | $\frac{3\pi}{4}$ | $\frac{5\pi}{6}$ | $\pi$ |

Exemple : un angle de $30°$ sur un cercle de rayon $3$ intercepte un arc de longueur $3 \times \frac{\pi}{6} = \frac{\pi}{2}$. Et $1\ \text{rad} = \frac{180}{\pi}° \approx 57{,}3°$.

## 2. Le demi-cercle trigonométrique : cosinus et sinus

Le plan est muni d'un repère orthonormé $(O\,;\overrightarrow{OA},\overrightarrow{OB})$. Le **demi-cercle trigonométrique** $C$ est le demi-cercle de diamètre $[AA']$, avec $A'$ symétrique de $A$ par rapport à $O$, situé du côté de $B$.

![Demi-cercle trigonométrique](/lessons/images/trigo-demi-cercle.svg "Le point M du demi-cercle repéré par l'angle α : son abscisse est cos α, son ordonnée sin α, et AT mesure tan α.")

:::definition[Cosinus et sinus]
Soit $\alpha \in [0\,;\pi]$ et $M$ l'unique point du demi-cercle $C$ tel que $\widehat{AOM} = \alpha$. Le **cosinus** de $\alpha$, noté $\cos\alpha$, est l'**abscisse** de $M$ ; le **sinus** de $\alpha$, noté $\sin\alpha$, est son **ordonnée** :
$$
M\,(\cos\alpha\,;\ \sin\alpha).
$$
:::

Pour un angle aigu, ceci coïncide avec les rapports du triangle rectangle : si $P$ est le projeté de $M$ sur $(OA)$, alors $OM = 1$, $OP = \cos\alpha$ et $PM = \sin\alpha$.

:::property[Valeurs et bornes]
Pour tout $\alpha \in [0\,;\pi]$ : $-1 \leq \cos\alpha \leq 1$ et $0 \leq \sin\alpha \leq 1$.

| $\alpha$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\alpha$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ | $-1$ |
| $\sin\alpha$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $0$ |
| $\tan\alpha$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | $\Vert$ | $0$ |
:::

Un moyen mnémotechnique pour les lignes $\sin$ de $0$ à $\frac{\pi}{2}$ : $\frac{\sqrt0}{2},\ \frac{\sqrt1}{2},\ \frac{\sqrt2}{2},\ \frac{\sqrt3}{2},\ \frac{\sqrt4}{2}$. La ligne des $\cos$ se lit à l'envers.

:::warning[Un angle, deux nombres]
Pour **chaque** réel $c \in [-1\,;1]$ il y a un seul point du demi-cercle d'abscisse $c$, donc un seul angle de $[0\,;\pi]$ dont le cosinus est $c$. Pour le sinus, c'est faux : un sinus $s \in\, ]0\,;1[$ est atteint par **deux** angles, un aigu et un obtus (par exemple $\sin\frac{\pi}{6} = \sin\frac{5\pi}{6} = \frac12$).
:::

## 3. Tangente et cotangente

:::definition[Tangente et cotangente]
- Pour $\alpha \in [0\,;\pi]$, $\alpha \neq \frac{\pi}{2}$ : $\ \tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$.
- Pour $\alpha \in\, ]0\,;\pi[$ : $\ \cot\alpha = \dfrac{\cos\alpha}{\sin\alpha}$.
:::

Le nom « tangente » a une image : si $T$ est le point où la droite $(OM)$ coupe la tangente au demi-cercle en $A$, alors $\tan\alpha = AT$ (c'est Thalès dans le triangle $OAT$, voir la figure). Pour un angle obtus, $\cos\alpha < 0$ donc $\tan\alpha < 0$.

## 4. Relations fondamentales

:::theorem[Relations fondamentales]
Pour tout $\alpha \in [0\,;\pi]$ :
$$
\cos^2\alpha + \sin^2\alpha = 1 .
$$
Pour $\alpha \neq \frac{\pi}{2}$ : $\ 1 + \tan^2\alpha = \dfrac{1}{\cos^2\alpha}$. Pour $\alpha \neq 0, \pi$ : $\ 1 + \cot^2\alpha = \dfrac{1}{\sin^2\alpha}$.
:::

:::proof[Les trois relations]
| Étape | Justification |
|---|---|
| $M(\cos\alpha\,;\sin\alpha)$ est sur le cercle de rayon $1$ : $OM^2 = \cos^2\alpha + \sin^2\alpha = 1$ | distance dans un repère orthonormé |
| $1 + \tan^2\alpha = 1 + \dfrac{\sin^2\alpha}{\cos^2\alpha}$ | définition de $\tan$ |
| $\phantom{1 + \tan^2\alpha} = \dfrac{\textcolor{#ea580c}{\cos^2\alpha + \sin^2\alpha}}{\cos^2\alpha} = \dfrac{1}{\cos^2\alpha}$ | on met au même dénominateur, puis on applique la première relation |
| De même, $1 + \cot^2\alpha = \dfrac{\sin^2\alpha + \cos^2\alpha}{\sin^2\alpha} = \dfrac{1}{\sin^2\alpha}$ | même calcul avec $\cot$ |
:::

:::method[Connaître un rapport, trouver les autres]
1. Écrire le rapport connu et placer l'angle dans $[0\,;\pi]$ (aigu ou obtus ?).
2. Déduire le carré de l'autre rapport avec les relations fondamentales.
3. **Choisir le signe** : $\sin \geq 0$ toujours, $\cos < 0$ si l'angle est obtus.
:::

:::example[Trois situations]
- $x \in \left[\frac{\pi}{2}\,;\pi\right]$ et $\sin x = \frac35$. Alors $\cos^2 x = 1 - \frac{9}{25} = \frac{16}{25}$, et comme $x$ est obtus, $\cos x = -\frac45$. Puis $\tan x = -\frac34$ et $\cot x = -\frac43$.
- $\tan\alpha = 10$. Alors $\cos^2\alpha = \dfrac{1}{1 + 100} = \dfrac{1}{101}$ ; $\tan > 0$ donc $\alpha$ est aigu : $\cos\alpha = \dfrac{1}{\sqrt{101}}$ et $\sin\alpha = \dfrac{10}{\sqrt{101}}$.
- $\cot\alpha = -2$. Alors $\sin^2\alpha = \dfrac{1}{1+4} = \dfrac15$, donc $\sin\alpha = \dfrac{1}{\sqrt5}$ (jamais négatif), et $\cos\alpha = \cot\alpha \cdot \sin\alpha = -\dfrac{2}{\sqrt5}$ : l'angle est obtus.
:::

## 5. Angles supplémentaires et complémentaires

Deux angles sont **supplémentaires** si leur somme vaut $\pi$ et **complémentaires** si elle vaut $\frac{\pi}{2}$.

Le point $M'$ de $C$ qui correspond à $\pi - \alpha$ est le **symétrique de $M$ par rapport à l'axe $(OB)$** : on garde l'ordonnée, on change le signe de l'abscisse. De même, échanger $\alpha$ et $\frac{\pi}{2} - \alpha$ revient à échanger abscisse et ordonnée (symétrie par rapport à la première bissectrice).

:::theorem[Angles supplémentaires et complémentaires]
| | Supplémentaire : $\pi - \alpha$ | Complémentaire : $\frac{\pi}{2} - \alpha$ |
|---|---|---|
| cosinus | $\cos(\pi - \alpha) = -\cos\alpha$ | $\cos\left(\frac{\pi}{2} - \alpha\right) = \sin\alpha$ |
| sinus | $\sin(\pi - \alpha) = \sin\alpha$ | $\sin\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha$ |
| tangente | $\tan(\pi - \alpha) = -\tan\alpha$ | $\tan\left(\frac{\pi}{2} - \alpha\right) = \cot\alpha$ |
:::

:::example[Valeurs exactes sans calculatrice]
$\sin\dfrac{5\pi}{6} = \sin\left(\pi - \dfrac{\pi}{6}\right) = \dfrac12$, $\ \cos\dfrac{3\pi}{4} = -\cos\dfrac{\pi}{4} = -\dfrac{\sqrt2}{2}$, $\ \tan\dfrac{5\pi}{6} = -\tan\dfrac{\pi}{6} = -\dfrac{\sqrt3}{3}$.

Somme astucieuse : $\cos^2\frac{\pi}{8} + \cos^2\frac{3\pi}{8} + \cos^2\frac{5\pi}{8} + \cos^2\frac{7\pi}{8}$. Comme $\frac{3\pi}{8} = \frac{\pi}{2} - \frac{\pi}{8}$, on a $\cos\frac{3\pi}{8} = \sin\frac{\pi}{8}$, et $\cos\frac{5\pi}{8} = -\cos\frac{3\pi}{8}$, $\cos\frac{7\pi}{8} = -\cos\frac{\pi}{8}$. La somme vaut donc $2\left(\cos^2\frac{\pi}{8} + \sin^2\frac{\pi}{8}\right) = 2$.
:::

## 6. Dans le triangle rectangle

Dans un triangle $ABC$ rectangle en $A$, pour l'angle aigu $\widehat{B}$ :

$$
\begin{aligned}
\cos\widehat{B} &= \frac{\text{côté adjacent}}{\text{hypoténuse}} = \frac{AB}{BC},\\
\sin\widehat{B} &= \frac{\text{côté opposé}}{\text{hypoténuse}} = \frac{AC}{BC},\\
\tan\widehat{B} &= \frac{\text{côté opposé}}{\text{côté adjacent}} = \frac{AC}{AB}.
\end{aligned}
$$

:::example[L'échelle]
Dans le triangle $ABC$ rectangle en $C$ (pied de l'échelle en $B$, hypoténuse $AB = 6$, angle en $B$ de $65°$) : $BC = 6\cos 65° \approx 2{,}54$ m et la hauteur atteinte est $6\sin 65° \approx 5{,}44$ m, donc à $7 - 5{,}44 \approx 1{,}56$ m du sommet du mur.
:::

:::example[Retrouver un angle]
Dans $ABC$ rectangle en $A$ avec $AC = 6$ et $BC = 9$ : $AB = \sqrt{81 - 36} = 3\sqrt5$, $\cos\widehat{B} = \dfrac{3\sqrt5}{9} = \dfrac{\sqrt5}{3}$, $\sin\widehat{B} = \dfrac{6}{9} = \dfrac23$, $\tan\widehat{B} = \dfrac{6}{3\sqrt5} = \dfrac{2\sqrt5}{5}$. À la calculatrice, $\widehat{B} \approx 0{,}73$ rad ($\approx 41{,}8°$) et $\widehat{C} \approx 0{,}84$ rad.
:::

:::property[Relations métriques]
Soit $ABC$ rectangle en $A$ et $H$ le pied de la hauteur issue de $A$.
$$
\begin{aligned}
AB^2 &= BH \cdot BC, & AC^2 &= CH \cdot CB,\\
AH^2 &= HB \cdot HC, & AH \cdot BC &= AB \cdot AC .
\end{aligned}
$$
:::

Exemple : $HB = 3$ et $HC = 12$ donnent $BC = 15$, $AH^2 = 36$ donc $AH = 6$, puis $AB^2 = 3 \times 15 = 45$ et $AC^2 = 12 \times 15 = 180$ ; on vérifie $45 + 180 = 225 = 15^2$ ✓.

## 7. Dans un triangle quelconque

Soit $ABC$ un triangle ; on note $a = BC$, $b = AC$, $c = AB$, $S$ son aire et $R$ le rayon de son cercle circonscrit.

:::theorem[Aire, loi des sinus]
$$
\begin{aligned}
S &= \tfrac12\,bc\sin\widehat{A} = \tfrac12\,ac\sin\widehat{B} = \tfrac12\,ab\sin\widehat{C},\\
\frac{a}{\sin\widehat{A}} &= \frac{b}{\sin\widehat{B}} = \frac{c}{\sin\widehat{C}} = 2R .
\end{aligned}
$$
:::

:::proof[L'aire et la loi des sinus]
Soit $H$ le pied de la hauteur issue de $C$.

| Étape | Justification |
|---|---|
| $CH = b\sin\widehat{A}$ | triangle $AHC$ rectangle en $H$ (aussi vrai si $\widehat{A}$ est obtus, car $\sin(\pi - \alpha) = \sin\alpha$) |
| $CH = a\sin\widehat{B}$ | triangle $BHC$ rectangle en $H$ |
| Donc $b\sin\widehat{A} = a\sin\widehat{B}$, soit $\dfrac{a}{\sin\widehat{A}} = \dfrac{b}{\sin\widehat{B}}$ | on égale les deux expressions de $CH$ et on divise |
| $S = \tfrac12 \cdot AB \cdot CH = \tfrac12\,c\,b\sin\widehat{A}$ | aire $= \frac12$ base $\times$ hauteur |
:::

:::theorem[Théorème d'El Kashi (loi des cosinus)]
$$
\begin{aligned}
a^2 &= b^2 + c^2 - 2bc\cos\widehat{A},\\
b^2 &= a^2 + c^2 - 2ac\cos\widehat{B},\\
c^2 &= a^2 + b^2 - 2ab\cos\widehat{C}.
\end{aligned}
$$
:::

:::proof[$a^2 = b^2 + c^2 - 2bc\cos\widehat{A}$]
On place $A$ à l'origine, $B(c\,;0)$ ; alors $C(b\cos\widehat{A}\,;\ b\sin\widehat{A})$.

| Étape | Justification |
|---|---|
| $BC^2 = (b\cos\widehat{A} - c)^2 + (b\sin\widehat{A})^2$ | distance dans un repère orthonormé |
| $\phantom{BC^2} = b^2\cos^2\widehat{A} - 2bc\cos\widehat{A} + c^2 + b^2\sin^2\widehat{A}$ | on développe |
| $\phantom{BC^2} = b^2\textcolor{#ea580c}{(\cos^2\widehat{A} + \sin^2\widehat{A})} + c^2 - 2bc\cos\widehat{A}$ | on regroupe |
| $\phantom{BC^2} = b^2 + c^2 - 2bc\cos\widehat{A}$ | relation fondamentale |
:::

Si $\widehat{A} = \frac{\pi}{2}$, $\cos\widehat{A} = 0$ et on retrouve Pythagore ; si $\widehat{A}$ est obtus, $\cos\widehat{A} < 0$ et $a^2 > b^2 + c^2$.

:::example[Un triangle $5$, $8$, angle $60°$]
$AB = 5$, $AC = 8$, $\widehat{A} = 60°$. Alors $BC^2 = 25 + 64 - 2\cdot 5\cdot 8\cdot\frac12 = 49$, donc $BC = 7$. L'aire est $S = \frac12\cdot 5\cdot 8\cdot\sin 60° = 10\sqrt3$.

**Contrôle avec la formule de Héron.** Les côtés sont $5$, $7$, $8$, le demi-périmètre est $p = 10$ et $S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{10 \cdot 5 \cdot 3 \cdot 2} = \sqrt{300} = 10\sqrt3$ ✓.
:::

:::example[Résoudre un triangle avec une hauteur]
Dans $ABC$, $\widehat{B} = 60°$, $\widehat{C} = 45°$ et la hauteur $AH = 3$. Alors $AB = \dfrac{AH}{\sin 60°} = 2\sqrt3$, $AC = \dfrac{AH}{\sin 45°} = 3\sqrt2$, $BH = AB\cos 60° = \sqrt3$, $CH = \dfrac{AH}{\tan 45°} = 3$, donc $BC = 3 + \sqrt3$.
:::

## 8. Pour aller plus loin : l'angle double

Cette section **dépasse le chapitre du manuel**, mais les exercices d'identités l'utilisent tout le temps. On l'obtient avec le demi-cercle trigonométrique et un triangle isocèle.

Soit $\alpha \in\, \left]0\,;\frac{\pi}{2}\right[$, $M$ le point du demi-cercle tel que $\widehat{AOM} = 2\alpha$ et $I$ le milieu de $[AM]$. Le triangle $OAM$ est isocèle en $O$ ($OA = OM = 1$), donc $(OI)$ est à la fois médiane, hauteur et bissectrice : $\widehat{AOI} = \alpha$.

- Dans le triangle rectangle $OIA$ : $OI = \cos\alpha$ et $AI = \sin\alpha$, donc $AM = 2\sin\alpha$.
- Aire de $OAM$, de deux façons : $\frac12\cdot OA\cdot OM\cdot\sin 2\alpha = \frac12\sin 2\alpha$ et $\frac12\cdot AM\cdot OI = \frac12\cdot 2\sin\alpha\cdot\cos\alpha$.
- El Kashi dans $OAM$ : $AM^2 = 1 + 1 - 2\cos 2\alpha$, soit $4\sin^2\alpha = 2 - 2\cos 2\alpha$.

:::theorem[Formules de l'angle double]
$$
\begin{aligned}
\sin 2\alpha &= 2\sin\alpha\cos\alpha,\\
\cos 2\alpha &= \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha .
\end{aligned}
$$
:::

:::example[Un calcul qui sert tout le temps]
Si $\cos\alpha + \sin\alpha = \frac75$ avec $\alpha$ aigu, on élève au carré : $1 + 2\sin\alpha\cos\alpha = \frac{49}{25}$, donc $\sin 2\alpha = \frac{24}{25}$. Les nombres $\cos\alpha$ et $\sin\alpha$ ont pour somme $\frac75$ et pour produit $\frac{12}{25}$ : ce sont $\frac35$ et $\frac45$.

Contrôle avec $\alpha = 75°$ : $\sin 75° = \frac{\sqrt6 + \sqrt2}{4}$, $\cos 75° = \frac{\sqrt6 - \sqrt2}{4}$, d'où $2\sin 75°\cos 75° = 2 \cdot \frac{6 - 2}{16} = \frac12 = \sin 150°$ ✓ et $1 - 2\sin^2 75° = -\frac{\sqrt3}{2} = \cos 150°$ ✓.
:::

## Vérifie-toi

::::check[Rapport connu]
Soit $\alpha \in [0\,;\pi]$ avec $\cos\alpha = -\dfrac{5}{13}$. Calculer $\sin\alpha$ et $\tan\alpha$.

:::answer
$\sin^2\alpha = 1 - \frac{25}{169} = \frac{144}{169}$ et $\sin\alpha \geq 0$, donc $\sin\alpha = \frac{12}{13}$ et $\tan\alpha = \frac{12/13}{-5/13} = -\frac{12}{5}$.
:::
::::

::::check[Loi des cosinus]
Un triangle a pour côtés $AB = 7$, $AC = 8$ et $BC = 13$. Montrer que l'angle $\widehat{A}$ est obtus.

:::answer
$a^2 = 169$ et $b^2 + c^2 = 64 + 49 = 113 < 169$. Or $a^2 = b^2 + c^2 - 2bc\cos\widehat{A}$, donc $\cos\widehat{A} = \frac{113 - 169}{2 \cdot 56} = -\frac12 < 0$ : l'angle est obtus ($\widehat{A} = 120°$).
:::
::::

::::check[Triangle rectangle]
Dans $ABC$ rectangle en $A$ avec $BC = 10$ et $\widehat{B} = 30°$, calculer $AB$, $AC$ et l'aire.

:::answer
$AB = 10\cos 30° = 5\sqrt3$, $AC = 10\sin 30° = 5$, aire $= \frac12 \cdot 5\sqrt3 \cdot 5 = \frac{25\sqrt3}{2}$.
:::
::::

::::challenge
Montrer que $\tan\alpha + \cot\alpha = \dfrac{2}{\sin 2\alpha}$ pour $\alpha \in\, \left]0\,;\frac{\pi}{2}\right[$.

:::answer
$\tan\alpha + \cot\alpha = \dfrac{\sin^2\alpha + \cos^2\alpha}{\sin\alpha\cos\alpha} = \dfrac{1}{\sin\alpha\cos\alpha} = \dfrac{2}{2\sin\alpha\cos\alpha} = \dfrac{2}{\sin 2\alpha}$.
:::
::::

:::summary
- $\pi$ rad $= 180°$ ; longueur d'un arc : $L = r\alpha$.
- $M(\cos\alpha\,;\sin\alpha)$ sur le demi-cercle trigonométrique ; $-1 \leq \cos \leq 1$, $0 \leq \sin \leq 1$ ; $\tan = \frac{\sin}{\cos}$, $\cot = \frac{\cos}{\sin}$.
- $\cos^2 + \sin^2 = 1$ ; $1 + \tan^2 = \frac{1}{\cos^2}$ ; $1 + \cot^2 = \frac{1}{\sin^2}$. **Le signe** : $\sin \geq 0$, $\cos < 0$ si l'angle est obtus.
- $\cos(\pi - \alpha) = -\cos\alpha$, $\sin(\pi - \alpha) = \sin\alpha$ ; $\cos(\frac{\pi}{2} - \alpha) = \sin\alpha$, $\sin(\frac{\pi}{2} - \alpha) = \cos\alpha$.
- Triangle rectangle : adjacent/hypoténuse, opposé/hypoténuse, opposé/adjacent ; $AH^2 = HB \cdot HC$.
- Triangle quelconque : $S = \frac12 bc\sin\widehat{A}$, $\frac{a}{\sin\widehat{A}} = \cdots = 2R$, $a^2 = b^2 + c^2 - 2bc\cos\widehat{A}$.
- Angle double : $\sin 2\alpha = 2\sin\alpha\cos\alpha$, $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha$.
:::
