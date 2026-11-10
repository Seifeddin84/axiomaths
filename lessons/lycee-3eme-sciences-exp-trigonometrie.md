---
title: "Trigonométrie"
slug: "lycee-3eme-sciences-exp-trigonometrie"
school: "lycee"
level: "3eme"
sections: ["Sciences Expérimentales"]
chapter: "Trigonométrie"
summary: "Cosinus, sinus et tangente d'un réel sur le cercle trigonométrique, angles associés, équations et inéquations, coordonnées polaires, cosinus et sinus d'un angle orienté, formules d'addition et de duplication, et la forme a cos x + b sin x."
prerequisites: ["Angles orientés", "Produit scalaire", "Repère orthonormé direct"]
source: "Manuel officiel 3ème année Sciences expérimentales, Tome 2, chapitre 3"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Une roue de fête foraine tourne à vitesse constante. La **hauteur** de ta cabine au-dessus du sol, en fonction du temps, monte, redescend, remonte… avec la même période : c'est un phénomène **périodique**. Le courant alternatif de la prise, la marée, le mouvement d'un pendule suivent la même loi. Pour les décrire, on a besoin de deux fonctions : le **cosinus** et le **sinus**, que l'on lit sur un cercle.

:::intuition
Place un point $M$ sur le cercle de rayon $1$ et fais-le tourner de $x$ radians à partir de $I(1\,;0)$. Ses **coordonnées** sont $(\cos x\,;\sin x)$, et la **pente** de la droite $(OM)$ est $\tan x$. Presque toute la trigonométrie se lit sur ce cercle : les valeurs, les symétries, les équations, les inéquations. Quand une formule te semble difficile, dessine le cercle.
:::

## 1. Cosinus et sinus d'un réel

Le plan est muni d'un repère orthonormé direct $(O, \vec\imath, \vec\jmath)$. On note $\mathcal C$ le **cercle trigonométrique** de centre $O$ et de rayon $1$, et $I(1\,;0)$.

:::definition[Cosinus et sinus]
Soit $x$ un réel et $M$ le point de $\mathcal C$ tel que $(\overrightarrow{OI}, \overrightarrow{OM}) \equiv x\ [2\pi]$. Le **cosinus** de $x$ est l'abscisse de $M$ et le **sinus** de $x$ est son ordonnée :
$$
M(\cos x\,;\sin x).
$$
:::

:::property[Premières propriétés]
Pour tout réel $x$ et tout entier $k$ :

- $\cos^2 x + \sin^2 x = 1$ ; $-1 \leq \cos x \leq 1$ ; $-1 \leq \sin x \leq 1$ ;
- $\cos(x + 2k\pi) = \cos x$ et $\sin(x + 2k\pi) = \sin x$ (périodicité $2\pi$) ;
- $\cos(-x) = \cos x$ et $\sin(-x) = -\sin x$.
:::

:::theorem[Valeurs remarquables]
| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |
:::

Pour ne pas se tromper : de $0$ à $\frac\pi2$, le cosinus **diminue** de $1$ à $0$ et le sinus **augmente** de $0$ à $1$. Les trois valeurs $\frac{\sqrt{1}}{2}, \frac{\sqrt2}{2}, \frac{\sqrt3}{2}$ se rangent dans l'ordre croissant.

### Angles associés

![Les angles associés de θ](/lessons/images/trigo-angles-associes.svg "Les points M(θ), N(π − θ), P(−θ) et Q(π + θ) du cercle trigonométrique sont symétriques les uns des autres par rapport à l'axe des ordonnées, à l'axe des abscisses et à l'origine ; leurs coordonnées se déduisent de celles de M au signe près.")

:::theorem[Angles associés]
Pour tout réel $x$ :

| Angle | Cosinus | Sinus |
|---|---|---|
| $-x$ | $\cos x$ | $-\sin x$ |
| $\pi - x$ | $-\cos x$ | $\sin x$ |
| $\pi + x$ | $-\cos x$ | $-\sin x$ |
| $\dfrac\pi2 - x$ | $\sin x$ | $\cos x$ |
| $\dfrac\pi2 + x$ | $-\sin x$ | $\cos x$ |
:::

:::proof[D'où viennent ces formules]
Soit $M(\cos x\,;\sin x)$.

| Étape | Justification |
|---|---|
| Le point d'angle $-x$ est le symétrique de $M$ par rapport à $(Ox)$ : $(\cos x\,;\,-\sin x)$ | la symétrie change le signe de l'ordonnée |
| Le point d'angle $\pi - x$ est le symétrique de $M$ par rapport à $(Oy)$ : $(-\cos x\,;\,\sin x)$ | la symétrie change le signe de l'abscisse |
| Le point d'angle $\pi + x$ est le symétrique de $M$ par rapport à $O$ : $(-\cos x\,;\,-\sin x)$ | rotation d'un demi-tour |
| Le point d'angle $\frac\pi2 - x$ est le symétrique de $M$ par rapport à la droite $y = x$ : $(\sin x\,;\,\cos x)$ | la symétrie échange abscisse et ordonnée |
| Le point d'angle $\frac\pi2 + x$ est l'image de $M$ par le quart de tour direct : $(-\sin x\,;\,\cos x)$ | $(x\,;y) \mapsto (-y\,;x)$ |
:::

:::method[Ramener une valeur dans $\left[0\,;\frac\pi2\right]$]
1. Retirer des multiples de $2\pi$ pour avoir un angle dans $]-\pi\,;\pi]$.
2. Utiliser le tableau des angles associés pour se ramener à un angle de $\left[0\,;\frac\pi2\right]$.
3. Lire la valeur remarquable.

- $\cos\dfrac{5\pi}{6} = \cos\left(\pi - \dfrac\pi6\right) = -\cos\dfrac\pi6 = -\dfrac{\sqrt3}{2}$.
- $\sin\dfrac{7\pi}{6} = \sin\left(\pi + \dfrac\pi6\right) = -\sin\dfrac\pi6 = -\dfrac12$.
- $\cos\dfrac{25\pi}{4} = \cos\left(\dfrac\pi4 + 6\pi\right) = \cos\dfrac\pi4 = \dfrac{\sqrt2}{2}$.
- $\sin\left(-\dfrac{7\pi}{3}\right) = \sin\left(-\dfrac\pi3 - 2\pi\right) = -\sin\dfrac\pi3 = -\dfrac{\sqrt3}{2}$.
:::

## 2. La tangente

:::definition[Tangente]
Pour tout réel $x$ tel que $\cos x \neq 0$, c'est-à-dire $x \neq \dfrac\pi2 + k\pi$ ($k \in \mathbb Z$), on pose
$$
\tan x = \frac{\sin x}{\cos x}.
$$
:::

Géométriquement, $\tan x$ est la **pente de la droite $(OM)$**, et c'est l'ordonnée du point où cette droite coupe la tangente au cercle en $I$ (d'où le nom).

:::property[Propriétés]
Pour $x \neq \frac\pi2 + k\pi$ :

- $\tan(x + \pi) = \tan x$ : la tangente est **$\pi$-périodique** ;
- $\tan(-x) = -\tan x$ et $\tan(\pi - x) = -\tan x$ ;
- $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ ;
- $\tan\dfrac\pi6 = \dfrac{\sqrt3}{3}$, $\ \tan\dfrac\pi4 = 1$, $\ \tan\dfrac\pi3 = \sqrt3$.
:::

## 3. Équations trigonométriques élémentaires

:::theorem[Égalité de cosinus, de sinus, de tangentes]
Pour tous réels $a$ et $b$ et tout entier $k$ :

- $\cos a = \cos b \iff a = b + 2k\pi$ ou $a = -b + 2k\pi$ ;
- $\sin a = \sin b \iff a = b + 2k\pi$ ou $a = \pi - b + 2k\pi$ ;
- $\tan a = \tan b \iff a = b + k\pi$ (avec $\cos a \neq 0$ et $\cos b \neq 0$).
:::

:::proof[Cas du sinus]
Soient $M$ et $N$ les points du cercle d'angles $a$ et $b$.

| Étape | Justification |
|---|---|
| $\sin a = \sin b$ signifie que $M$ et $N$ ont la même ordonnée | définition du sinus |
| Sur le cercle, deux points de même ordonnée sont confondus ou symétriques par rapport à $(Oy)$ | la droite horizontale d'ordonnée donnée coupe le cercle en au plus deux points, symétriques |
| Confondus : $a = b + 2k\pi$ | mêmes points, angles égaux à $2\pi$ près |
| Symétriques par rapport à $(Oy)$ : $a = \pi - b + 2k\pi$ | angle associé $\pi - b$ |
:::

:::method[Résoudre une équation]
1. **Se ramener à une équation élémentaire** $\cos x = \alpha$, $\sin x = \alpha$ ou $\tan x = \alpha$, en n'utilisant qu'une seule ligne ($\cos$ ou $\sin$).
2. **Reconnaître** $\alpha$ comme la valeur d'un angle connu (ou utiliser la calculatrice).
3. Appliquer le théorème : **toutes** les solutions dans $\mathbb R$, avec $k \in \mathbb Z$.
4. Si on demande les solutions dans un intervalle, **donner à $k$ les valeurs qui conviennent**.
:::

:::example[$\sin x = -\dfrac{\sqrt2}{2}$]
$-\dfrac{\sqrt2}{2} = \sin\left(-\dfrac\pi4\right)$, donc $x = -\dfrac\pi4 + 2k\pi$ ou $x = \pi + \dfrac\pi4 + 2k\pi = \dfrac{5\pi}{4} + 2k\pi$. Dans $[0\,;2\pi[$ : $x = \dfrac{5\pi}{4}$ ou $x = \dfrac{7\pi}{4}$ (en prenant $k = 1$ pour la première famille).
:::

:::example[Deux cosinus égaux]
$\cos 2x = \cos\left(x + \dfrac\pi3\right) \iff 2x = x + \dfrac\pi3 + 2k\pi$ ou $2x = -x - \dfrac\pi3 + 2k\pi$, soit $x = \dfrac\pi3 + 2k\pi$ ou $x = -\dfrac\pi9 + \dfrac{2k\pi}{3}$.
:::

:::example[Une équation du second degré en $\sin x$]
$2\sin^2 x - \sin x - 1 = 0$. On pose $t = \sin x$ avec $t \in [-1\,;1]$ : $2t^2 - t - 1 = (2t + 1)(t - 1) = 0$, donc $t = 1$ ou $t = -\dfrac12$, qui sont bien dans $[-1\,;1]$.

- $\sin x = 1 \iff x = \dfrac\pi2 + 2k\pi$.
- $\sin x = -\dfrac12 \iff x = -\dfrac\pi6 + 2k\pi$ ou $x = \dfrac{7\pi}{6} + 2k\pi$.

Dans $[0\,;2\pi[$ : $x \in \left\{\dfrac\pi2,\ \dfrac{7\pi}{6},\ \dfrac{11\pi}{6}\right\}$.
:::

:::example[Un produit nul]
$\sin 2x = \cos x \iff 2\sin x\cos x - \cos x = 0 \iff \cos x\,(2\sin x - 1) = 0$. Donc $\cos x = 0$ (soit $x = \dfrac\pi2 + k\pi$) ou $\sin x = \dfrac12$ (soit $x = \dfrac\pi6 + 2k\pi$ ou $x = \dfrac{5\pi}{6} + 2k\pi$).
:::

:::warning
Quand on pose $t = \cos x$ ou $t = \sin x$, **toute racine $t$ hors de $[-1\,;1]$ est à rejeter** : par exemple $\cos x = 2$ n'a aucune solution. Ne divise jamais par $\cos x$ sans vérifier qu'il n'est pas nul : tu perdrais des solutions (ici $x = \frac\pi2 + k\pi$).
:::

## 4. Inéquations et équations de la forme $\sin(x + a) = \alpha$

:::method[Résoudre une inéquation avec le cercle]
1. Repérer sur le cercle les points $M$ dont l'abscisse (pour $\cos$) ou l'ordonnée (pour $\sin$) vérifie l'inéquation : c'est un **arc**.
2. Lire les angles des extrémités de l'arc.
3. Exprimer l'ensemble des $x$ dans l'intervalle demandé (en $]-\pi\,;\pi]$ ou $[0\,;2\pi[$), puis dans $\mathbb R$ en ajoutant $2k\pi$.
:::

![Les points du cercle tels que sin x ≥ 1/2](/lessons/images/trigo-inequation.svg "Les points du cercle dont l'ordonnée est supérieure ou égale à 1/2 forment l'arc compris entre M(π/6) et N(5π/6) : sin x ≥ 1/2 équivaut à x ∈ [π/6 ; 5π/6] à 2π près.")

:::example[Deux inéquations]
- $\sin x \geq \dfrac12$ dans $[0\,;2\pi[$ : l'arc au-dessus de la droite $y = \frac12$ va de $\frac\pi6$ à $\frac{5\pi}{6}$ ; donc $x \in \left[\dfrac\pi6\,;\dfrac{5\pi}{6}\right]$.
- $\cos x < -\dfrac{\sqrt3}{2}$ dans $[0\,;2\pi[$ : l'arc situé à gauche de la droite $x = -\frac{\sqrt3}{2}$ va de $\frac{5\pi}{6}$ à $\frac{7\pi}{6}$ ; donc $x \in \left]\dfrac{5\pi}{6}\,;\dfrac{7\pi}{6}\right[$.
:::

:::property[Translation de l'inconnue]
$x_0$ est solution de $\sin(x + a) = \alpha$ si et seulement si $x_0 + a$ est solution de $\sin X = \alpha$. Même principe pour les inéquations.
:::

:::example[$\sin\left(x + \dfrac\pi4\right)$]
Posons $X = x + \dfrac\pi4$.

- $\sin X = \dfrac12 \iff X = \dfrac\pi6 + 2k\pi$ ou $X = \dfrac{5\pi}{6} + 2k\pi$, donc $x = -\dfrac{\pi}{12} + 2k\pi$ ou $x = \dfrac{7\pi}{12} + 2k\pi$.
- $\sin X \geq \dfrac12 \iff X \in \left[\dfrac\pi6\,;\dfrac{5\pi}{6}\right] + 2k\pi$, donc $x \in \left[-\dfrac\pi{12}\,;\dfrac{7\pi}{12}\right] + 2k\pi$. Dans $[0\,;2\pi[$ : $x \in \left[0\,;\dfrac{7\pi}{12}\right] \cup \left[\dfrac{23\pi}{12}\,;2\pi\right[$.
:::

## 5. Coordonnées polaires

:::definition[Coordonnées polaires]
Soit $M \neq O$. Le couple $(r, \theta)$ est un couple de **coordonnées polaires** de $M$ si $r = OM > 0$ et $\theta$ est une mesure de l'angle $(\overrightarrow{OI}, \overrightarrow{OM})$. Avec $\theta \in ]-\pi\,;\pi]$ (**mesure principale**), le couple est unique.
:::

:::property[Passage polaire $\leftrightarrow$ cartésien]
Si $M$ a pour coordonnées cartésiennes $(x\,;y)$ et polaires $(r, \theta)$ :
$$
x = r\cos\theta,\quad y = r\sin\theta, \qquad r = \sqrt{x^2 + y^2},\quad \cos\theta = \frac{x}{r},\quad \sin\theta = \frac{y}{r}.
$$
:::

:::method[Des cartésiennes aux polaires]
1. $r = \sqrt{x^2 + y^2}$.
2. Calculer $\cos\theta = \frac{x}{r}$ **et** $\sin\theta = \frac{y}{r}$, et trouver l'angle de $]-\pi\,;\pi]$ qui a ces deux valeurs. Ne pas se fier à $\tan\theta$ seul : il ne donne l'angle qu'à $\pi$ près.

- $P(-1\,;1)$ : $r = \sqrt2$, $\cos\theta = -\dfrac{\sqrt2}{2}$, $\sin\theta = \dfrac{\sqrt2}{2}$, donc $\theta = \dfrac{3\pi}{4}$. (La tangente $-1$ donnerait aussi $-\frac\pi4$ : faux.)
- $Q(1\,;-\sqrt3)$ : $r = 2$, $\cos\theta = \dfrac12$, $\sin\theta = -\dfrac{\sqrt3}{2}$, donc $\theta = -\dfrac\pi3$.
- $R(0\,;-2)$ : $r = 2$, $\cos\theta = 0$, $\sin\theta = -1$, donc $\theta = -\dfrac\pi2$.
:::

:::example[Des polaires aux cartésiennes]
$\left(3, \dfrac\pi6\right)$ : $x = 3\cos\dfrac\pi6 = \dfrac{3\sqrt3}{2}$ et $y = 3\sin\dfrac\pi6 = \dfrac32$.

$\left(2, -\dfrac{2\pi}{3}\right)$ : $x = 2\cos\left(-\dfrac{2\pi}{3}\right) = -1$ et $y = 2\sin\left(-\dfrac{2\pi}{3}\right) = -\sqrt3$, soit le point $(-1\,;-\sqrt3)$.
:::

:::property[Des figures simples]
L'ensemble des points de coordonnées polaires $(r_0, \theta)$ avec $r_0$ fixé est le **cercle** de centre $O$ et de rayon $r_0$ ; avec $\theta_0$ fixé, c'est une **demi-droite** d'origine $O$ (privée de $O$).
:::

## 6. Cosinus et sinus d'un angle orienté de vecteurs

:::definition[Cosinus et sinus d'un angle orienté]
Pour deux vecteurs non nuls $\vec u$ et $\vec v$, on note $\cos(\vec u, \vec v)$ et $\sin(\vec u, \vec v)$ le cosinus et le sinus d'une mesure quelconque de l'angle orienté $(\vec u, \vec v)$.
:::

:::theorem[En fonction des composantes]
Dans une base orthonormée directe, si $\vec u(x\,;y)$ et $\vec v(x'\,;y')$ sont non nuls :
$$
\cos(\vec u, \vec v) = \frac{xx' + yy'}{\lVert\vec u\rVert\,\lVert\vec v\rVert}, \qquad \sin(\vec u, \vec v) = \frac{xy' - x'y}{\lVert\vec u\rVert\,\lVert\vec v\rVert}.
$$
:::

:::example[Calculer un angle et une aire]
Soit $A(0\,;0)$, $B(4\,;1)$, $C(1\,;3)$. Alors $\overrightarrow{AB}(4\,;1)$, $\overrightarrow{AC}(1\,;3)$, $\lVert\overrightarrow{AB}\rVert = \sqrt{17}$, $\lVert\overrightarrow{AC}\rVert = \sqrt{10}$, et
$$
\cos(\overrightarrow{AB}, \overrightarrow{AC}) = \frac{4 + 3}{\sqrt{170}} = \frac{7}{\sqrt{170}}, \qquad \sin(\overrightarrow{AB}, \overrightarrow{AC}) = \frac{4 \times 3 - 1 \times 1}{\sqrt{170}} = \frac{11}{\sqrt{170}}.
$$
Le sinus est positif : l'angle est dans $]0\,;\pi[$ (sens direct), et $\tan = \frac{11}{7}$ donne environ $1{,}00$ rad. L'aire du triangle est $\dfrac12 \lvert xy' - x'y \rvert = \dfrac{11}{2}$.
:::

## 7. Formules d'addition et de duplication

:::theorem[Formules d'addition]
Pour tous réels $a$ et $b$ :
$$
\begin{aligned}
\cos(a - b) &= \cos a\cos b + \sin a\sin b, & \cos(a + b) &= \cos a\cos b - \sin a\sin b,\\
\sin(a + b) &= \sin a\cos b + \cos a\sin b, & \sin(a - b) &= \sin a\cos b - \cos a\sin b.
\end{aligned}
$$
:::

:::proof[Formule de $\cos(a - b)$ et ses conséquences]
Soient $A(\cos a\,;\sin a)$ et $B(\cos b\,;\sin b)$ deux points du cercle.

| Étape | Justification |
|---|---|
| $(\overrightarrow{OA}, \overrightarrow{OB}) \equiv b - a\ [2\pi]$ | relation de Chasles pour les angles orientés |
| $\cos(b - a) = \dfrac{\cos a\cos b + \sin a\sin b}{1 \times 1}$ | formule du cosinus d'un angle orienté, avec $\lVert\overrightarrow{OA}\rVert = \lVert\overrightarrow{OB}\rVert = 1$ |
| Comme $\cos(b - a) = \cos(a - b)$, on obtient $\cos(a - b) = \cos a\cos b + \sin a\sin b$ | le cosinus est pair |
| En remplaçant $b$ par $-b$ : $\cos(a + b) = \cos a\cos b - \sin a\sin b$ | $\cos(-b) = \cos b$ et $\sin(-b) = -\sin b$ |
| $\sin(a + b) = \cos\left(\dfrac\pi2 - a - b\right) = \cos\left(\left(\dfrac\pi2 - a\right) - b\right)$ | angle associé |
| $\phantom{\sin(a+b)} = \sin a\cos b + \cos a\sin b$ | on applique la formule de $\cos(a-b)$ |
:::

:::theorem[Duplication et linéarisation]
Pour tout réel $a$ :
$$
\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a, \qquad \sin 2a = 2\sin a\cos a,
$$
$$
\cos^2 a = \frac{1 + \cos 2a}{2}, \qquad \sin^2 a = \frac{1 - \cos 2a}{2}.
$$
:::

:::example[Valeurs exactes]
- $\dfrac{7\pi}{12} = \dfrac\pi3 + \dfrac\pi4$ :
$$
\cos\dfrac{7\pi}{12} = \cos\dfrac\pi3\cos\dfrac\pi4 - \sin\dfrac\pi3\sin\dfrac\pi4 = \dfrac12 \cdot \dfrac{\sqrt2}{2} - \dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt2}{2} = \dfrac{\sqrt2 - \sqrt6}{4},
$$
et $\sin\dfrac{7\pi}{12} = \dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt2}{2} + \dfrac12\cdot\dfrac{\sqrt2}{2} = \dfrac{\sqrt6 + \sqrt2}{4}$.
- $\cos^2\dfrac\pi8 = \dfrac{1 + \cos\frac\pi4}{2} = \dfrac{2 + \sqrt2}{4}$ et $\cos\dfrac\pi8 > 0$, donc $\cos\dfrac\pi8 = \dfrac{\sqrt{2 + \sqrt2}}{2}$.
:::

### La forme $a\cos x + b\sin x$

:::theorem[Une somme de cosinus et de sinus est un cosinus décalé]
Soient $a$ et $b$ deux réels non tous deux nuls et $r = \sqrt{a^2 + b^2}$. Il existe un réel $\varphi$ tel que $\cos\varphi = \dfrac ar$ et $\sin\varphi = \dfrac br$, et pour tout $x$ :
$$
a\cos x + b\sin x = r\cos(x - \varphi).
$$
:::

:::proof[Mise sous la forme $r\cos(x - \varphi)$]
| Étape | Justification |
|---|---|
| $\left(\dfrac ar\right)^2 + \left(\dfrac br\right)^2 = \dfrac{a^2 + b^2}{r^2} = 1$ | définition de $r$ |
| donc le point $\left(\dfrac ar\,;\dfrac br\right)$ est sur le cercle trigonométrique : il existe $\varphi$ avec $\cos\varphi = \dfrac ar$ et $\sin\varphi = \dfrac br$ | tout point du cercle a des coordonnées $(\cos\varphi\,;\sin\varphi)$ |
| $a\cos x + b\sin x = r\left(\cos\varphi\cos x + \sin\varphi\sin x\right)$ | on remplace $a = r\cos\varphi$ et $b = r\sin\varphi$ |
| $\phantom{a\cos x + b\sin x} = r\cos(x - \varphi)$ | formule de $\cos(a - b)$ |
:::

:::example[Résoudre $\sqrt3\cos x - \sin x = 1$]
Ici $a = \sqrt3$, $b = -1$, $r = 2$, $\cos\varphi = \dfrac{\sqrt3}{2}$ et $\sin\varphi = -\dfrac12$, donc $\varphi = -\dfrac\pi6$ et $\sqrt3\cos x - \sin x = 2\cos\left(x + \dfrac\pi6\right)$. L'équation devient
$$
\cos\left(x + \frac\pi6\right) = \frac12 = \cos\frac\pi3 \iff x + \frac\pi6 = \pm\frac\pi3 + 2k\pi \iff x = \frac\pi6 + 2k\pi \text{ ou } x = -\frac\pi2 + 2k\pi.
$$
Contrôle : pour $x = \frac\pi6$, $\sqrt3 \cdot \frac{\sqrt3}{2} - \frac12 = 1$ ✓ ; pour $x = -\frac\pi2$, $0 - (-1) = 1$ ✓.
:::

:::example[Optimiser avec $a\cos\theta + b\sin\theta$]
Un triangle $ABC$ rectangle en $A$ a une hypoténuse $BC = 1$ et un angle $\widehat B = \theta \in \left]0\,;\frac\pi2\right[$. Son périmètre est
$$
P(\theta) = 1 + \cos\theta + \sin\theta = 1 + \sqrt2\cos\left(\theta - \frac\pi4\right).
$$
Il est maximal quand $\cos\left(\theta - \frac\pi4\right) = 1$, c'est-à-dire $\theta = \frac\pi4$ : le triangle isocèle, de périmètre $1 + \sqrt2$.
:::

## Vérifie-toi

::::check[Valeurs exactes]
Calculer $\sin\dfrac{5\pi}{6}$, $\cos\left(-\dfrac{2\pi}{3}\right)$ et $\tan\left(-\dfrac\pi3\right)$.

:::answer
$\sin\dfrac{5\pi}{6} = \sin\left(\pi - \dfrac\pi6\right) = \dfrac12$ ; $\cos\left(-\dfrac{2\pi}{3}\right) = \cos\dfrac{2\pi}{3} = -\dfrac12$ ; $\tan\left(-\dfrac\pi3\right) = -\sqrt3$.
:::
::::

::::check[Une équation]
Résoudre $\cos x = -\dfrac12$ dans $[0\,;2\pi[$.

:::answer
$-\dfrac12 = \cos\dfrac{2\pi}{3}$, donc $x = \dfrac{2\pi}{3} + 2k\pi$ ou $x = -\dfrac{2\pi}{3} + 2k\pi$. Dans $[0\,;2\pi[$ : $\dfrac{2\pi}{3}$ et $\dfrac{4\pi}{3}$.
:::
::::

::::check[Coordonnées polaires]
Donner les coordonnées polaires de $M(-\sqrt3\,;1)$.

:::answer
$r = 2$, $\cos\theta = -\dfrac{\sqrt3}{2}$, $\sin\theta = \dfrac12$, donc $\theta = \dfrac{5\pi}{6}$ : $\left(2, \dfrac{5\pi}{6}\right)$.
:::
::::

::::check[Duplication]
Calculer $\sin\dfrac\pi8$.

:::answer
$\sin^2\dfrac\pi8 = \dfrac{1 - \cos\frac\pi4}{2} = \dfrac{2 - \sqrt2}{4}$ et $\sin\dfrac\pi8 > 0$, donc $\sin\dfrac\pi8 = \dfrac{\sqrt{2 - \sqrt2}}{2}$.
:::
::::

::::check[Forme $a\cos + b\sin$]
Résoudre $\cos x + \sin x = 1$.

:::answer
$\cos x + \sin x = \sqrt2\cos\left(x - \dfrac\pi4\right)$ ; l'équation s'écrit $\cos\left(x - \dfrac\pi4\right) = \dfrac{\sqrt2}{2}$, soit $x - \dfrac\pi4 = \pm\dfrac\pi4 + 2k\pi$ : $x = \dfrac\pi2 + 2k\pi$ ou $x = 2k\pi$.
:::
::::

::::challenge
Montrer que $\cos 3x = 4\cos^3 x - 3\cos x$.

:::answer
$\cos 3x = \cos(2x + x) = \cos 2x\cos x - \sin 2x\sin x = (2\cos^2 x - 1)\cos x - 2\sin^2 x\cos x$. Comme $\sin^2 x = 1 - \cos^2 x$ :
$\cos 3x = 2\cos^3 x - \cos x - 2\cos x + 2\cos^3 x = 4\cos^3 x - 3\cos x$.
:::
::::

:::summary
- $M(\cos x\,;\sin x)$ sur le cercle trigonométrique ; $\cos^2 + \sin^2 = 1$ ; $\tan x = \frac{\sin x}{\cos x}$, $\pi$-périodique.
- Angles associés : $-x$, $\pi - x$, $\pi + x$, $\frac\pi2 - x$, $\frac\pi2 + x$ (se lisent sur le cercle).
- $\cos a = \cos b \iff a = \pm b + 2k\pi$ ; $\sin a = \sin b \iff a = b$ ou $\pi - b$ $(+2k\pi)$ ; $\tan a = \tan b \iff a = b + k\pi$.
- Inéquations : on lit un **arc** sur le cercle ; $\sin(x + a) = \alpha$ se ramène à $\sin X = \alpha$ avec $X = x + a$.
- Polaires : $x = r\cos\theta$, $y = r\sin\theta$ ; chercher $\theta$ avec $\cos$ **et** $\sin$.
- $\cos(a \mp b)$, $\sin(a \pm b)$, $\cos 2a$, $\sin 2a$ ; $a\cos x + b\sin x = r\cos(x - \varphi)$ avec $r = \sqrt{a^2+b^2}$.
:::
