---
title: "Nombres complexes"
slug: "lycee-3eme-nombres-complexes"
school: "lycee"
level: "3eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Nombres Complexes"
summary: "De la forme algébrique a + ib à la forme trigonométrique : opérations, conjugué, module, argument, interprétation géométrique (distances, cercles, médiatrices, translation, homothétie, rotation) et résolution d'équations dans ℂ."
prerequisites: ["Racines carrées", "Trigonométrie", "Angles orientés", "Coordonnées polaires"]
source: "Manuel officiel 3ème année (Mathématiques et Sciences expérimentales), Tome 2, chapitre « Nombres complexes »"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

L'équation $x^2 = -1$ n'a pas de solution réelle, puisqu'un carré est toujours positif. Pourtant, au XVIe siècle, Cardan osait écrire la racine carrée d'un nombre négatif pour résoudre des équations du troisième degré qui avaient, elles, des solutions réelles. Ces nombres « impossibles » se sont révélés d'une efficacité extraordinaire : ils ont fini par s'appeler **nombres complexes**.

L'idée : fabriquer un ensemble $\mathbb C$ qui contient $\mathbb R$, où le calcul se fait comme d'habitude, et où il existe un nombre $i$ tel que $i^2 = -1$. Mieux : on peut **dessiner** ces nombres dans un plan, et multiplier par un complexe revient alors à faire tourner et agrandir une figure.

:::intuition
Un nombre complexe $z = a + ib$ est **un point du plan** (ou un vecteur) de coordonnées $(a\,;b)$. L'addition est l'addition des vecteurs ; la multiplication fait **tourner** et **agrandir**. Le module, c'est la distance à l'origine ; l'argument, l'angle de rotation. Tout le chapitre traduit les mêmes idées sous trois formes : algébrique ($a + ib$), géométrique (le point $M$), trigonométrique ($r(\cos\theta + i\sin\theta)$).
:::

## 1. Forme algébrique et opérations

:::definition[Nombres complexes]
Il existe un ensemble $\mathbb C$ contenant $\mathbb R$, muni d'une addition et d'une multiplication qui suivent les mêmes règles que dans $\mathbb R$, et contenant un nombre $i$ tel que $i^2 = -1$. Tout nombre complexe $z$ s'écrit de façon **unique** $z = a + ib$ avec $a$ et $b$ réels : c'est la **forme algébrique** (ou cartésienne).

- $a = \operatorname{Re}(z)$ est la **partie réelle** ; $b = \operatorname{Im}(z)$ est la **partie imaginaire**.
- $z$ est **réel** si $b = 0$ ; **imaginaire pur** si $a = 0$.
:::

:::property[Égalité]
$a + ib = a' + ib' \iff a = a'$ et $b = b'$. En particulier $a + ib = 0 \iff a = b = 0$.
:::

:::example[Calculer avec $i$]
$(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$. De même $(1 + i)^2 = 1 + 2i + i^2 = 2i$, donc $(1+i)^8 = (2i)^4 = 16$.

Les puissances de $i$ se répètent par cycle de longueur $4$ : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, puis on recommence. Pour $i^{58}$, on divise $58$ par $4$ : $58 = 4 \times 14 + 2$, donc $i^{58} = i^2 = -1$.
:::

### Conjugué et inverse

:::definition[Conjugué]
Le **conjugué** de $z = a + ib$ est $\bar z = a - ib$.
:::

:::property[Propriétés du conjugué]
Pour tous complexes $z$, $z'$ et tout entier $n \geq 1$ :

- $\overline{z + z'} = \bar z + \bar z'$, $\ \overline{z\,z'} = \bar z\,\bar z'$, $\ \overline{z^n} = (\bar z)^n$, $\ \overline{\left(\dfrac{z}{z'}\right)} = \dfrac{\bar z}{\bar z'}$ ($z' \neq 0$) ;
- $z + \bar z = 2\operatorname{Re}(z)$ et $z - \bar z = 2i\operatorname{Im}(z)$ ;
- $z\bar z = a^2 + b^2$, un **réel positif**, nul seulement si $z = 0$ ;
- $z$ est réel $\iff z = \bar z$ ; $z$ est imaginaire pur $\iff z = -\bar z$.
:::

:::method[Inverse et quotient]
Pour $z = a + ib \neq 0$, on multiplie numérateur et dénominateur par le **conjugué** du dénominateur, pour le rendre réel :
$$
\frac{1}{z} = \frac{\bar z}{z\bar z} = \frac{a - ib}{a^2 + b^2}.
$$
- $\dfrac{1}{2 + 3i} = \dfrac{2 - 3i}{13}$.
- $\dfrac{1 + 2i}{3 - i} = \dfrac{(1 + 2i)(3 + i)}{(3 - i)(3 + i)} = \dfrac{3 + i + 6i - 2}{10} = \dfrac{1 + 7i}{10}$.
:::

### Équations dans $\mathbb C$

:::theorem[Équation $z^2 = \alpha$]
Pour tout réel $\alpha \neq 0$ :

- si $\alpha > 0$, les solutions de $z^2 = \alpha$ sont $z = \sqrt\alpha$ et $z = -\sqrt\alpha$ ;
- si $\alpha < 0$, ce sont $z = i\sqrt{-\alpha}$ et $z = -i\sqrt{-\alpha}$.
:::

:::property[Carré égal à un carré]
$z^2 = w^2 \iff (z - w)(z + w) = 0 \iff z = w$ ou $z = -w$. C'est exactement le même raisonnement que dans $\mathbb R$.
:::

:::method[Résoudre $z^2 + bz + c = 0$ à coefficients réels]
On met le trinôme sous **forme canonique**, puis on utilise $z^2 = \alpha$ :

- $z^2 - 2z + 5 = (z - 1)^2 + 4 = 0 \iff (z - 1)^2 = -4 \iff z - 1 = \pm 2i \iff z = 1 \pm 2i$.
- $z^2 + 2z + 10 = (z + 1)^2 + 9 = 0 \iff z + 1 = \pm 3i \iff z = -1 \pm 3i$.

Les deux solutions sont **conjuguées**. Si le trinôme a un discriminant $\Delta < 0$, les solutions sont $\dfrac{-b \pm i\sqrt{-\Delta}}{2}$.
:::

:::example[Reconnaître un carré]
$z^2 - 2z + 1 = -3 + 4i$. Le membre de gauche est $(z-1)^2$ et $-3 + 4i = (1 + 2i)^2$ (car $1 + 4i + 4i^2 = -3 + 4i$). Donc $(z - 1)^2 = (1 + 2i)^2$, soit $z - 1 = \pm(1 + 2i)$ : $z = 2 + 2i$ ou $z = -2i$.
:::

## 2. Interprétation géométrique

Le plan est muni d'un repère orthonormé direct $(O, \vec u, \vec v)$ : c'est le **plan complexe**.

:::definition[Affixe]
Au nombre complexe $z = a + ib$ on associe le point $M(a\,;b)$, appelé **image** de $z$ ; $z$ est l'**affixe** de $M$ (et du vecteur $\overrightarrow{OM}$), noté $M(z)$. L'**affixe du vecteur** $\overrightarrow{AB}$ est $z_B - z_A$.
:::

![Un nombre complexe dans le plan](/lessons/images/complexes-plan.svg "Le point M a pour affixe z = a + ib. Son module r est la distance OM, son argument θ l'angle orienté entre l'axe des réels et OM. Le point d'affixe z̄ est son symétrique par rapport à l'axe des réels.")

:::property[Le dictionnaire]
- $M'(\bar z)$ est le symétrique de $M(z)$ par rapport à l'axe des réels ; $M''(-z)$ est son symétrique par rapport à $O$.
- Le milieu de $[AB]$ a pour affixe $\dfrac{z_A + z_B}{2}$.
- $ABDC$ est un parallélogramme $\iff \overrightarrow{AB} = \overrightarrow{CD} \iff z_B - z_A = z_D - z_C$.
- $O$, $A$, $B$ sont alignés $\iff z_B = k z_A$ avec $k$ réel (si $z_A \neq 0$).
:::

### Module

:::definition[Module]
Le **module** de $z = a + ib$ est le réel positif $\lvert z\rvert = \sqrt{a^2 + b^2} = \sqrt{z\bar z}$. C'est la distance $OM$ ; et pour deux points $A$ et $B$, $AB = \lvert z_B - z_A\rvert$.
:::

:::property[Propriétés du module]
Pour tous complexes $z$, $z'$, tout réel $\lambda$ et tout entier $n$ :

- $\lvert z\rvert = 0 \iff z = 0$ ; $\ \lvert\bar z\rvert = \lvert z\rvert$ ; $\ \lvert\lambda z\rvert = \lvert\lambda\rvert\,\lvert z\rvert$ ;
- $\lvert zz'\rvert = \lvert z\rvert\,\lvert z'\rvert$ ; $\ \left\lvert\dfrac{z}{z'}\right\rvert = \dfrac{\lvert z\rvert}{\lvert z'\rvert}$ ; $\ \lvert z^n\rvert = \lvert z\rvert^n$ ;
- inégalité triangulaire : $\lvert z + z'\rvert \leq \lvert z\rvert + \lvert z'\rvert$.
:::

:::proof[Module d'un produit]
| Étape | Justification |
|---|---|
| $\lvert zz'\rvert^2 = (zz')\,\overline{(zz')}$ | $\lvert w\rvert^2 = w\bar w$ |
| $\phantom{\lvert zz'\rvert^2} = z z' \bar z \bar z' = (z\bar z)(z'\bar z')$ | conjugué d'un produit, commutativité |
| $\phantom{\lvert zz'\rvert^2} = \lvert z\rvert^2\lvert z'\rvert^2$ | définition du module |
| donc $\lvert zz'\rvert = \lvert z\rvert\lvert z'\rvert$ | racine carrée de nombres positifs |
:::

:::method[Cercles, disques et médiatrices]
Soient $A(a)$ et $B(b)$ deux points et $M(z)$ un point variable.

| Condition sur $z$ | Ensemble des points $M$ |
|---|---|
| $\lvert z - a\rvert = r$ ($r > 0$) | cercle de centre $A$ et de rayon $r$ |
| $\lvert z - a\rvert \leq r$ | disque fermé de centre $A$ et de rayon $r$ |
| $\lvert z - a\rvert = \lvert z - b\rvert$ | médiatrice de $[AB]$ |

Exemples. $\lvert z - 1 + 2i\rvert = 3$ s'écrit $\lvert z - (1 - 2i)\rvert = 3$ : le cercle de centre $(1\,;-2)$ et de rayon $3$. Et $\lvert z - 2\rvert = \lvert z + i\rvert$ : avec $z = x + iy$, $(x-2)^2 + y^2 = x^2 + (y+1)^2$, soit $-4x + 4 = 2y + 1$ : c'est la droite $y = -2x + \dfrac32$, médiatrice de $[AB]$ pour $A(2)$ et $B(-i)$.
:::

## 3. Argument et forme trigonométrique

:::definition[Argument]
Soit $z \neq 0$ et $M$ son image. Un **argument** de $z$ est une mesure de l'angle orienté $(\vec u, \overrightarrow{OM})$ ; on le note $\arg(z)$, défini à $2\pi$ près. Un argument de $z$ est aussi l'**angle polaire** de $M$.
:::

:::theorem[Forme trigonométrique]
Si $z \neq 0$, de module $r$ et d'argument $\theta$,
$$
z = r(\cos\theta + i\sin\theta), \qquad \text{avec} \quad r = \lvert z\rvert,\ \ \cos\theta = \frac{a}{r},\ \ \sin\theta = \frac{b}{r}.
$$
Réciproquement, toute écriture $z = r(\cos\theta + i\sin\theta)$ avec $r > 0$ est la forme trigonométrique de $z$ : $\lvert z\rvert = r$ et $\arg(z) \equiv \theta\ [2\pi]$.
:::

:::method[Passer de la forme algébrique à la forme trigonométrique]
1. Calculer le module $r = \sqrt{a^2 + b^2}$.
2. Mettre $r$ en facteur : $z = r\left(\dfrac ar + i\dfrac br\right)$.
3. Reconnaître l'angle $\theta$ dont le cosinus est $\dfrac ar$ **et** le sinus $\dfrac br$.

- $-1 + i$ : $r = \sqrt2$, $\cos\theta = -\dfrac{\sqrt2}{2}$, $\sin\theta = \dfrac{\sqrt2}{2}$, donc $-1 + i = \sqrt2\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$.
- $\sqrt3 - i$ : $r = 2$, $\cos\theta = \dfrac{\sqrt3}{2}$, $\sin\theta = -\dfrac12$, donc $\sqrt3 - i = 2\left(\cos\left(-\dfrac\pi6\right) + i\sin\left(-\dfrac\pi6\right)\right)$.
- $-3 = 3(\cos\pi + i\sin\pi)$ ; $\ 4i = 4\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$.
:::

:::warning
On ne peut pas écrire une forme trigonométrique avec un module négatif, ni avec « $-\cos\theta + i\sin\theta$ » tel quel : $-\cos\theta + i\sin\theta = \cos(\pi - \theta) + i\sin(\pi - \theta)$. Et les arguments ne sont connus qu'à $2\pi$ près.
:::

### Argument d'un produit, d'un quotient, d'une puissance

![Le produit de deux complexes](/lessons/images/complexes-produit.svg "Les modules se multiplient (2 × 3/2 = 3) et les arguments s'additionnent (π/6 + π/3 = π/2) : le point P d'affixe zz' est sur l'axe imaginaire, à distance 3 de O.")

:::theorem[Propriétés de l'argument]
Pour $z$ et $z'$ non nuls et $n \in \mathbb N$ :
$$
\arg(zz') \equiv \arg z + \arg z', \quad \arg\frac1z \equiv -\arg z, \quad \arg\frac z{z'} \equiv \arg z - \arg z', \quad \arg(z^n) \equiv n\arg z,
$$
toutes les congruences étant modulo $2\pi$. En particulier $\arg\bar z \equiv -\arg z$, $\arg(-z) \equiv \arg z + \pi$ et $\arg(\lambda z) \equiv \arg z$ pour $\lambda > 0$.
:::

:::proof[Argument d'un produit]
Soient $z = r(\cos\theta + i\sin\theta)$ et $z' = r'(\cos\theta' + i\sin\theta')$.

| Étape | Justification |
|---|---|
| $zz' = rr'\big[(\cos\theta\cos\theta' - \sin\theta\sin\theta') + i(\sin\theta\cos\theta' + \cos\theta\sin\theta')\big]$ | on développe le produit, avec $i^2 = -1$ |
| $zz' = rr'\big[\cos(\theta + \theta') + i\sin(\theta + \theta')\big]$ | formules d'addition |
| donc $\lvert zz'\rvert = rr'$ et $\arg(zz') \equiv \theta + \theta'$ | unicité de la forme trigonométrique |
:::

:::corollary
**Formule de Moivre.** Pour tout entier $n \geq 1$ : $\ (\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$.
:::

:::example[Calculer avec la forme trigonométrique]
- $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$, donc $(1+i)^8 = (\sqrt2)^8\left(\cos 2\pi + i\sin 2\pi\right) = 16$.
- $\sqrt3 - i = 2\left(\cos\left(-\dfrac\pi6\right) + i\sin\left(-\dfrac\pi6\right)\right)$, donc $(\sqrt3 - i)^6 = 2^6\left(\cos(-\pi) + i\sin(-\pi)\right) = -64$.
:::

:::example[Valeurs exactes de cosinus et sinus]
On calcule le produit $(1 + i)(1 + i\sqrt3)$ de **deux façons**.

- **Algébrique** : $1 + i\sqrt3 + i - \sqrt3 = (1 - \sqrt3) + i(1 + \sqrt3)$.
- **Trigonométrique** : $1 + i = \sqrt2\,(\cos\frac\pi4 + i\sin\frac\pi4)$ et $1 + i\sqrt3 = 2(\cos\frac\pi3 + i\sin\frac\pi3)$, donc le produit a pour module $2\sqrt2$ et pour argument $\frac\pi4 + \frac\pi3 = \frac{7\pi}{12}$.

En comparant : $2\sqrt2\cos\dfrac{7\pi}{12} = 1 - \sqrt3$ et $2\sqrt2\sin\dfrac{7\pi}{12} = 1 + \sqrt3$, donc
$$
\cos\frac{7\pi}{12} = \frac{1 - \sqrt3}{2\sqrt2} = \frac{\sqrt2 - \sqrt6}{4}, \qquad \sin\frac{7\pi}{12} = \frac{\sqrt6 + \sqrt2}{4}.
$$
:::

## 4. Transformations du plan en complexes

:::theorem[Quatre transformations]
Soit $M(z)$ et $M'(z')$ son image.

| Transformation | Formule | Nature |
|---|---|---|
| $z' = z + b$ | translation de vecteur d'affixe $b$ | déplace tout du même vecteur |
| $z' = kz$, $k$ réel non nul | homothétie de centre $O$ et de rapport $k$ | agrandit, retourne si $k < 0$ |
| $z' = (\cos\theta + i\sin\theta)\,z$ | rotation de centre $O$ et d'angle $\theta$ | module inchangé, argument $+\theta$ |
| $z' = \bar z$ | symétrie par rapport à l'axe des réels | |
:::

:::property[Rotation de centre quelconque]
La rotation de centre $\Omega(\omega)$ et d'angle $\theta$ a pour écriture complexe
$$
z' - \omega = (\cos\theta + i\sin\theta)(z - \omega).
$$
:::

:::example[Appliquer une rotation]
- Multiplier par $i = \cos\frac\pi2 + i\sin\frac\pi2$ est le quart de tour direct de centre $O$ : $i(2 + i) = -1 + 2i$, le point $(2\,;1)$ devient $(-1\,;2)$.
- La rotation de centre $\Omega(1)$ et d'angle $\frac\pi2$ : $z' = 1 + i(z - 1)$. Le point $M(3)$ a pour image $1 + i \times 2 = 1 + 2i$, soit $(1\,;2)$ : en effet $\overrightarrow{\Omega M} = (2\,;0)$ tourne en $(0\,;2)$.
- $z' = -3z$ est l'homothétie de centre $O$ et de rapport $-3$.
:::

:::example[Le produit de deux complexes]
Si $z_B$ a pour module $1$, alors $z_C = z_A z_B$ a le même module que $z_A$ et un argument augmenté de $\arg z_B$ : $C$ est l'image de $A$ par la rotation de centre $O$ et d'angle $\arg z_B$.
:::

## 5. Méthodes pour les exercices

:::method[Résoudre une équation avec un carré]
- $z^2 = \alpha$ : voir le théorème.
- $z^2 + bz + c = 0$ : forme canonique, puis $z^2 = \alpha$.
- $z^2 = w^2$ : $z = \pm w$ (on factorise $(z-w)(z+w)$).
- $z^3 = 1$ : $z^3 - 1 = (z - 1)(z^2 + z + 1)$, donc $z = 1$ ou $z^2 + z + 1 = 0$, soit $z = \dfrac{-1 \pm i\sqrt3}{2}$.
:::

:::example[Le nombre $j$]
Posons $j = \dfrac{-1 + i\sqrt3}{2} = \cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3}$. Alors $\lvert j\rvert = 1$, $j^3 = 1$ et $1 + j + j^2 = 0$. Pour $a$ réel non nul, les points $A(a)$, $B(aj)$, $C(aj^2)$ sont les sommets d'un triangle **équilatéral** : $\lvert aj - a\rvert = \lvert a\rvert\lvert j - 1\rvert = \lvert a\rvert\sqrt3$, et de même $\lvert aj^2 - aj\rvert = \lvert a\rvert\lvert j\rvert\lvert j - 1\rvert = \lvert a\rvert\sqrt3$ et $\lvert a - aj^2\rvert = \lvert a\rvert\sqrt3$.
:::

:::method[Lieu d'un point avec les modules]
Quand $z' = \dfrac{z - b}{z - a}$, on a $\lvert z'\rvert = \dfrac{\lvert z - b\rvert}{\lvert z - a\rvert} = \dfrac{MB}{MA}$ : le module de $z'$ est un **rapport de distances**.

Exemple. $A(-1)$, $B(i)$ et $z' = \dfrac{z - i}{z + 1}$ pour $z \neq -1$. Alors $OM' = \dfrac{MB}{MA}$. Si $M$ décrit la **médiatrice** de $[AB]$, alors $MA = MB$ et $OM' = 1$ : $M'$ est sur le cercle de centre $O$ et de rayon $1$. Contrôle : $M(1 - i)$ est sur la médiatrice ($MA = \sqrt5 = MB$), et $z' = \dfrac{1 - 2i}{2 - i} = \dfrac{4 - 3i}{5}$ a pour module $1$ ✓.
:::

:::method[Montrer que trois points sont alignés ou qu'un triangle est rectangle]
- $A$, $B$, $C$ alignés $\iff \dfrac{z_C - z_A}{z_B - z_A}$ est **réel**.
- Longueurs : $AB = \lvert z_B - z_A\rvert$ ; réciproque de Pythagore : $\lvert z_B - z_A\rvert^2 + \lvert z_C - z_A\rvert^2 = \lvert z_C - z_B\rvert^2$.
- Centre du cercle circonscrit : point $I$ tel que $\lvert z_I - z_A\rvert = \lvert z_I - z_B\rvert = \lvert z_I - z_C\rvert$.
:::

:::history[Du « nombre impossible » au nombre complexe]
Au XVIe siècle, Jérôme Cardan utilisait déjà la racine carrée d'un nombre négatif. C'est Gauss qui a donné une définition précise des nombres complexes (et préféré le mot « complexe » à « imaginaire »), l'écriture $a + bi$ et leur représentation géométrique, que l'on doit aussi à Argand. Au XXe siècle, Gaston Julia a étudié les suites $z_{n+1} = z_n^2 + c$ dans le plan complexe : ses ensembles et l'ensemble de Mandelbrot sont de célèbres fractales.
:::

## Vérifie-toi

::::check[Calculs]
Écrire sous forme algébrique $(2 - i)(3 + 2i)$ et $\dfrac{1 - i}{1 + 2i}$.

:::answer
$(2 - i)(3 + 2i) = 6 + 4i - 3i - 2i^2 = 8 + i$. Puis $\dfrac{(1 - i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \dfrac{1 - 2i - i + 2i^2}{5} = \dfrac{-1 - 3i}{5}$.
:::
::::

::::check[Équation]
Résoudre dans $\mathbb C$ : $z^2 + 4z + 13 = 0$.

:::answer
$z^2 + 4z + 13 = (z + 2)^2 + 9 = 0 \iff (z + 2)^2 = -9 \iff z + 2 = \pm 3i$, soit $z = -2 \pm 3i$.
:::
::::

::::check[Forme trigonométrique]
Écrire $-\sqrt3 + i$ sous forme trigonométrique.

:::answer
$r = 2$, $\cos\theta = -\dfrac{\sqrt3}{2}$, $\sin\theta = \dfrac12$ : $\theta = \dfrac{5\pi}{6}$, donc $-\sqrt3 + i = 2\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right)$.
:::
::::

::::check[Un ensemble de points]
Déterminer l'ensemble des points $M(z)$ tels que $\lvert z - i\rvert = \lvert z + 1\rvert$.

:::answer
C'est la médiatrice de $[AB]$ avec $A(i)$ et $B(-1)$. Avec $z = x + iy$ : $x^2 + (y - 1)^2 = (x+1)^2 + y^2 \iff -2y + 1 = 2x + 1 \iff y = -x$ : la droite $y = -x$.
:::
::::

::::check[Une rotation]
Quelle est l'image de $M(1 + i)$ par la rotation de centre $O$ et d'angle $\dfrac\pi2$ ?

:::answer
$i(1 + i) = i + i^2 = -1 + i$ : le point $(-1\,;1)$.
:::
::::

::::challenge
Montrer que pour tout complexe $z$, $\lvert 1 + z\rvert^2 + \lvert 1 - z\rvert^2 = 2\left(1 + \lvert z\rvert^2\right)$, et interpréter avec un parallélogramme.

:::answer
$\lvert 1 + z\rvert^2 = (1 + z)(1 + \bar z) = 1 + z + \bar z + z\bar z$ et $\lvert 1 - z\rvert^2 = 1 - z - \bar z + z\bar z$. En additionnant : $2 + 2z\bar z = 2(1 + \lvert z\rvert^2)$. Pour le parallélogramme de sommets $O$, d'affixes $1$, $z$ et $1 + z$, les diagonales ont pour longueurs $\lvert 1 + z\rvert$ et $\lvert 1 - z\rvert$ : la somme des carrés des diagonales est égale à la somme des carrés des quatre côtés ($2\cdot 1 + 2\lvert z\rvert^2$).
:::
::::

:::summary
- $\mathbb C$ : $z = a + ib$, $i^2 = -1$ ; $\bar z = a - ib$ ; $z\bar z = a^2 + b^2$ ; $\frac1z = \frac{\bar z}{\lvert z\rvert^2}$.
- $z^2 = \alpha$ ; $z^2 + bz + c = 0$ par la forme canonique ; $z^2 = w^2 \iff z = \pm w$.
- Plan complexe : affixe $z_B - z_A$ de $\overrightarrow{AB}$, milieu $\frac{z_A + z_B}{2}$ ; $AB = \lvert z_B - z_A\rvert$.
- $\lvert z - a\rvert = r$ : cercle ; $\lvert z - a\rvert = \lvert z - b\rvert$ : médiatrice.
- $z = r(\cos\theta + i\sin\theta)$ avec $r = \lvert z\rvert$ ; $\lvert zz'\rvert = \lvert z\rvert\lvert z'\rvert$, $\arg(zz') = \arg z + \arg z'$ ; Moivre : $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$.
- $z \mapsto z + b$ : translation ; $z \mapsto kz$ : homothétie ; $z \mapsto (\cos\theta + i\sin\theta)z$ : rotation de centre $O$.
:::
