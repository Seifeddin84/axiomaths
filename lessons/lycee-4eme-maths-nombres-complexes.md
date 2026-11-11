---
title: "Nombres complexes : angles, forme exponentielle, racines et équations"
slug: "lycee-4eme-maths-nombres-complexes"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Nombres Complexes"
summary: "Angles orientés et arguments, forme exponentielle e^{iθ} et formule de Moivre, racines n-ièmes, équations du second degré à coefficients complexes, équations de degré 3, puis formules d'Euler et linéarisation."
prerequisites: ["Nombres complexes de 3ème année (forme algébrique, module, argument)", "Trigonométrie", "Angles orientés", "Équation du second degré réelle"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 1 « Nombres complexes »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

En 3ème année, un nombre complexe était un point du plan, et on savait lire son module (la distance à l'origine) et son argument (l'angle). Cette année, on exploite une idée unique : **multiplier par un complexe de module 1, c'est tourner**. Si on note ce complexe $e^{i\theta}$, alors les règles de la rotation deviennent les règles des puissances : $e^{i\theta}\,e^{i\theta'} = e^{i(\theta+\theta')}$. Les angles s'additionnent comme les exposants.

:::intuition
Une fois qu'on a compris que « angle » veut dire « argument d'un quotient » et que « tourner » veut dire « multiplier par $e^{i\theta}$ », presque tout le chapitre en découle : alignements et orthogonalités se lisent sur un quotient, les puissances deviennent des multiplications d'angles, et résoudre $z^n = a$ revient à couper un cercle en $n$ parts égales.
:::

On suppose connus : $z = a + ib$, $\bar z$, $\lvert z\rvert = \sqrt{a^2+b^2}$, et l'écriture trigonométrique $z = r(\cos\theta + i\sin\theta)$ avec $r = \lvert z\rvert$ et $\theta = \arg z$. Le plan est muni d'un repère orthonormé direct $(O,\vec u,\vec v)$.

## 1. Angles orientés et nombres complexes

### Les règles de l'argument

:::property[Argument d'un produit, d'un quotient, d'une puissance]
Pour tous complexes **non nuls** $z$ et $z'$ et tout entier $n$, modulo $2\pi$ :

- $\arg(zz') = \arg z + \arg z'$ ;
- $\arg\dfrac{1}{z} = -\arg z$ et $\arg\dfrac{z}{z'} = \arg z - \arg z'$ ;
- $\arg(z^n) = n\arg z$ ;
- $\arg(\bar z) = -\arg z$ et $\arg(-z) = \arg z + \pi$ ;
- $\arg(kz) = \arg z$ si $k > 0$ réel, et $\arg z + \pi$ si $k < 0$.
:::

Le module, lui, se multiplie : $\lvert zz'\rvert = \lvert z\rvert\lvert z'\rvert$. **Le module multiplie, l'argument additionne.** C'est tout le secret de ce chapitre.

### Mesurer un angle avec un quotient

:::theorem[Angle de deux vecteurs]
Soit $A$, $B$, $C$, $D$ quatre points d'affixes $z_A$, $z_B$, $z_C$, $z_D$, avec $A \neq B$ et $C \neq D$. Alors, modulo $2\pi$ :
$$
(\vec u,\overrightarrow{AB}) = \arg(z_B - z_A)
\qquad\text{et}\qquad
(\overrightarrow{AB},\overrightarrow{CD}) = \arg\frac{z_D - z_C}{z_B - z_A}.
$$
:::

:::proof[Angle de deux vecteurs]
| Étape | Justification |
|---|---|
| Soit $E$ le point tel que $\overrightarrow{OE} = \overrightarrow{AB}$ ; son affixe est $z_B - z_A$ | l'affixe de $\overrightarrow{AB}$ est $z_B - z_A$ |
| $(\vec u,\overrightarrow{AB}) = (\vec u,\overrightarrow{OE}) = \arg(z_B - z_A)$ | vecteurs égaux, définition de l'argument |
| $(\overrightarrow{AB},\overrightarrow{CD}) = (\overrightarrow{AB},\vec u) + (\vec u,\overrightarrow{CD})$ | relation de Chasles |
| $\phantom{(\overrightarrow{AB},\overrightarrow{CD})} = -\arg(z_B - z_A) + \arg(z_D - z_C)$ | premier résultat, et $(\overrightarrow{AB},\vec u) = -(\vec u,\overrightarrow{AB})$ |
| $\phantom{(\overrightarrow{AB},\overrightarrow{CD})} = \arg\dfrac{z_D - z_C}{z_B - z_A}$ | argument d'un quotient |
:::

On en tire la longueur **et** l'angle d'un seul coup : le quotient $Q = \dfrac{z_D - z_C}{z_B - z_A}$ a pour module $\dfrac{CD}{AB}$ et pour argument $(\overrightarrow{AB},\overrightarrow{CD})$.

:::method[Reconnaître une configuration]
Pour trois points $A$, $B$, $C$ distincts, on calcule $Q = \dfrac{z_C - z_A}{z_B - z_A}$, qui décrit l'angle $(\overrightarrow{AB},\overrightarrow{AC})$ et le rapport $\dfrac{AC}{AB}$.

| Ce que dit $Q$ | Conclusion |
|---|---|
| $Q$ réel | $A$, $B$, $C$ alignés |
| $Q$ imaginaire pur | $(AB)$ et $(AC)$ perpendiculaires |
| $\lvert Q\rvert = 1$ | $AB = AC$ : isocèle en $A$ |
| $Q = i$ ou $Q = -i$ | isocèle et rectangle en $A$ |
| $Q = e^{i\pi/3}$ ou $Q = e^{-i\pi/3}$ | équilatéral |
:::

:::example[Un triangle isocèle rectangle]
Soit $A(2+i)$, $B(5+2i)$ et $C(1+4i)$. Alors
$$
Q = \frac{z_C - z_A}{z_B - z_A} = \frac{-1+3i}{3+i} = \frac{(-1+3i)(3-i)}{10} = \frac{-3 + i + 9i + 3}{10} = i.
$$
Donc $AC = AB$ (car $\lvert i\rvert = 1$) et $(\overrightarrow{AB},\overrightarrow{AC}) = \dfrac{\pi}{2}$ : le triangle $ABC$ est isocèle et rectangle en $A$.
:::

### Ensembles de points définis par un argument

Soit $A$ et $B$ deux points distincts et $M$ un point distinct de $A$ et $B$, d'affixe $z$. Le quotient $\dfrac{z_B - z}{z_A - z}$ a pour argument l'angle $(\overrightarrow{MA},\overrightarrow{MB})$. Imposer la valeur de cet argument impose l'angle sous lequel on voit $[AB]$ depuis $M$ : l'ensemble cherché est un **arc de cercle** passant par $A$ et $B$.

![Arc capable](/lessons/images/m4-arc-capable.svg "Pour A(1) et B(-1), les points M tels que l'angle orienté (MA, MB) vaut pi/3 forment l'arc AB en trait plein. L'arc en pointillé correspond à l'angle -2pi/3 : même cercle, mais l'autre côté de la corde.")

:::example[Un arc de cercle]
Soit $A(1)$ et $B(-1)$. Les points $M(z)$ tels que $\arg\dfrac{-1-z}{1-z} = \dfrac{\pi}{3}\ [2\pi]$ sont ceux vus sous l'angle orienté $\dfrac{\pi}{3}$. Un angle **orienté** impose un côté de la corde : $M$ est sur l'arc situé sous l'axe des réels. Le cercle a pour rayon $\dfrac{AB}{2\sin(\pi/3)} = \dfrac{2}{\sqrt 3}$ et pour centre le point d'affixe $-\dfrac{i}{\sqrt 3}$.

Un contrôle sur le point le plus bas de l'arc, $M\left(-i\sqrt 3\right)$ : $\dfrac{-1+i\sqrt 3}{1+i\sqrt 3} = \dfrac{(-1+i\sqrt 3)(1-i\sqrt 3)}{4} = \dfrac{2 + 2i\sqrt 3}{4} = e^{i\pi/3}$ ✓.
:::

:::warning
Un argument n'existe que pour un complexe **non nul**. Dans $\arg\dfrac{z_B - z}{z_A - z}$, on exclut donc $M = A$ et $M = B$ : l'ensemble des points est un arc **privé de ses deux extrémités**.
:::

## 2. La forme exponentielle

### Une notation qui fait le travail

:::definition[Notation $e^{i\theta}$]
Pour tout réel $\theta$, on pose
$$
e^{i\theta} = \cos\theta + i\sin\theta.
$$
C'est le point du **cercle trigonométrique** repéré par l'angle $\theta$. Tout complexe $z$ non nul s'écrit alors, de façon unique à $2\pi$ près sur l'argument, sous la **forme exponentielle**
$$
z = r\,e^{i\theta},\qquad r = \lvert z\rvert > 0,\quad \theta = \arg z\ [2\pi].
$$
:::

Quelques valeurs à connaître : $e^{i0} = 1$, $e^{i\pi/2} = i$, $e^{i\pi} = -1$, $e^{-i\pi/2} = -i$, et $e^{i(\theta+2k\pi)} = e^{i\theta}$ pour tout entier $k$.

:::property[Règles de calcul]
Pour tous réels $\theta$, $\theta'$ et tout entier $n$ :

- $e^{i\theta}\,e^{i\theta'} = e^{i(\theta+\theta')}$ ;
- $\dfrac{1}{e^{i\theta}} = e^{-i\theta} = \overline{e^{i\theta}}$ ;
- $\dfrac{e^{i\theta}}{e^{i\theta'}} = e^{i(\theta-\theta')}$ ;
- $(e^{i\theta})^n = e^{in\theta}$.
:::

:::proof[Le produit $e^{i\theta}e^{i\theta'}$]
| Étape | Justification |
|---|---|
| $e^{i\theta}e^{i\theta'} = (\cos\theta + i\sin\theta)(\cos\theta' + i\sin\theta')$ | définition de la notation |
| $= (\cos\theta\cos\theta' - \sin\theta\sin\theta') + i(\sin\theta\cos\theta' + \cos\theta\sin\theta')$ | on développe, avec $i^2 = -1$ |
| $= \cos(\theta+\theta') + i\sin(\theta+\theta')$ | formules d'addition du cosinus et du sinus |
| $= e^{i(\theta+\theta')}$ | définition de la notation |
:::

Les trois autres règles s'en déduisent : $\dfrac{1}{e^{i\theta}}$ est le complexe qui multiplié par $e^{i\theta}$ donne $e^{i0} = 1$, c'est $e^{-i\theta}$ ; la puissance se démontre par récurrence sur $n$.

:::example[Passer d'une forme à l'autre]
$1 + i\sqrt 3$ a pour module $2$ et pour argument $\dfrac{\pi}{3}$ : $1 + i\sqrt 3 = 2e^{i\pi/3}$.
Et $1 - i$ a pour module $\sqrt 2$ et pour argument $-\dfrac{\pi}{4}$ : $1 - i = \sqrt 2\,e^{-i\pi/4}$.

Calculons $\left(\dfrac{1 + i\sqrt 3}{1 - i}\right)^{12}$. Le quotient vaut $\dfrac{2e^{i\pi/3}}{\sqrt 2\,e^{-i\pi/4}} = \sqrt 2\,e^{i\left(\frac{\pi}{3}+\frac{\pi}{4}\right)} = \sqrt 2\,e^{7i\pi/12}$. On élève à la puissance $12$ :
$$
\left(\sqrt 2\right)^{12} e^{12\cdot 7i\pi/12} = 64\,e^{7i\pi} = 64\,e^{i\pi} = -64.
$$
En forme algébrique, ce calcul serait un cauchemar : douze produits de complexes. En forme exponentielle, c'est trois lignes.
:::

### La formule de Moivre

:::theorem[Formule de Moivre]
Pour tout réel $\theta$ et tout entier $n$ :
$$
(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta.
$$
C'est la règle $(e^{i\theta})^n = e^{in\theta}$ écrite avec cosinus et sinus.
:::

![Puissances de 1+i](/lessons/images/m4-puissances.svg "Les points M_n d'affixe (1+i)^n pour n de 1 à 8. À chaque étape, le point tourne de pi/4 et s'éloigne de l'origine d'un facteur racine de 2. Les points M_1, M_5 sont sur la droite y = x ; M_4 et M_8 sont sur l'axe des réels.")

:::example[Une suite de points qui tournent]
Soit $z = 1 + i = \sqrt 2\,e^{i\pi/4}$ et $M_n$ le point d'affixe $z^n$. Alors $z^n = 2^{n/2}\,e^{in\pi/4}$ : on tourne de $\dfrac{\pi}{4}$ et on multiplie la distance par $\sqrt 2$ à chaque étape.

Quand $M_n$ est-il sur la droite $y = x$ ? Il faut que $\arg z^n = \dfrac{n\pi}{4}$ soit congru à $\dfrac{\pi}{4}$ ou à $\dfrac{5\pi}{4}$ modulo $2\pi$, soit $n \equiv 1$ ou $n \equiv 5 \pmod 8$. Par exemple $M_5$ est sur la droite : $z^5 = 4\sqrt 2\,e^{5i\pi/4} = -4 - 4i$.
:::

:::method[Le facteur d'angle moitié]
Pour factoriser une somme $1 + e^{i\theta}$, on fait apparaître le milieu des deux angles :
$$
1 + e^{i\theta} = e^{i\theta/2}\left(e^{-i\theta/2} + e^{i\theta/2}\right) = 2\cos\frac{\theta}{2}\;e^{i\theta/2},
\qquad
1 - e^{i\theta} = -2i\sin\frac{\theta}{2}\;e^{i\theta/2}.
$$
Pour $\theta \in\,]-\pi\,;\pi[$, $\cos\dfrac{\theta}{2} > 0$, donc $2\cos\dfrac{\theta}{2}$ est le **module** et $\dfrac{\theta}{2}$ l'**argument** de $1 + e^{i\theta}$.

Exemple : $\theta = \dfrac{\pi}{3}$. Alors $1 + e^{i\pi/3} = \dfrac{3}{2} + i\dfrac{\sqrt 3}{2}$ a pour module $2\cos\dfrac{\pi}{6} = \sqrt 3$ et pour argument $\dfrac{\pi}{6}$.
:::

## 3. Racines $n$-ièmes

### Racines de l'unité

:::theorem[Racines $n$-ièmes de l'unité]
Pour tout entier $n \geq 1$, l'équation $z^n = 1$ possède exactement $n$ solutions dans $\mathbb C$ :
$$
z_k = e^{2ik\pi/n},\qquad k = 0,\,1,\,\dots,\,n-1.
$$
Pour $n \geq 3$, leurs images sont les sommets d'un **polygone régulier à $n$ côtés** inscrit dans le cercle trigonométrique, dont l'un des sommets est $1$.
:::

:::proof[Racines de l'unité]
| Étape | Justification |
|---|---|
| Si $z^n = 1$ alors $\lvert z\rvert^n = 1$, donc $\lvert z\rvert = 1$ | le module d'une puissance, et $\lvert z\rvert > 0$ |
| On écrit $z = e^{i\theta}$ ; alors $z^n = e^{in\theta}$ | forme exponentielle, formule de Moivre |
| $e^{in\theta} = 1 \iff n\theta = 2k\pi,\ k\in\mathbb Z$ | $e^{i\alpha} = 1 \iff \alpha \equiv 0\ [2\pi]$ |
| donc $\theta = \dfrac{2k\pi}{n}$ | on divise par $n$ |
| $k$ et $k+n$ donnent le même complexe ; $k = 0,\dots,n-1$ donnent $n$ valeurs distinctes | $e^{2i(k+n)\pi/n} = e^{2ik\pi/n}e^{2i\pi}$ |
:::

![Racines n-ièmes](/lessons/images/m4-racines.svg "À gauche, les cinq racines cinquièmes de l'unité : un pentagone régulier inscrit dans le cercle trigonométrique. À droite, les trois solutions de z^3 = 8i : un triangle équilatéral inscrit dans le cercle de rayon 2.")

:::property[Somme des racines de l'unité]
Pour $n \geq 2$, la somme des $n$ racines $n$-ièmes de l'unité est nulle : si $\omega = e^{2i\pi/n}$, alors $1 + \omega + \omega^2 + \dots + \omega^{n-1} = 0$.
:::

:::proof[La somme est nulle]
| Étape | Justification |
|---|---|
| $\omega \neq 1$ et $\omega^n = 1$ | $n \geq 2$ : $\dfrac{2\pi}{n}$ n'est pas multiple de $2\pi$ |
| $1 + \omega + \dots + \omega^{n-1} = \dfrac{1 - \omega^n}{1 - \omega}$ | somme des termes d'une suite géométrique de raison $\omega \neq 1$ |
| $= \dfrac{1 - 1}{1 - \omega} = 0$ | car $\omega^n = 1$ |
:::

Géométriquement : le centre de gravité d'un polygone régulier centré en $O$ est $O$ lui-même.

:::example[Une valeur exacte du cosinus]
Les solutions de $z^4 + z^3 + z^2 + z + 1 = 0$ sont les racines cinquièmes de l'unité **autres que 1**. En effet, $z^5 - 1 = (z-1)(z^4 + z^3 + z^2 + z + 1)$.

Posons $z = e^{2i\pi/5}$ et utilisons $z^5 = 1$. Alors $u = z + z^4 = z + \bar z = 2\cos\dfrac{2\pi}{5}$ et $v = z^2 + z^3 = 2\cos\dfrac{4\pi}{5}$. On a
$$
u + v = z + z^2 + z^3 + z^4 = -1,
\qquad
uv = z^3 + z^4 + z^6 + z^7 = z^3 + z^4 + z + z^2 = -1.
$$
Donc $u$ et $v$ sont les racines de $t^2 + t - 1 = 0$, soit $\dfrac{-1\pm\sqrt 5}{2}$. Comme $u > 0$ (car $\cos\dfrac{2\pi}{5} > 0$) :
$$
\cos\frac{2\pi}{5} = \frac{\sqrt 5 - 1}{4}.
$$
Un pentagone régulier se construit donc à la règle et au compas, parce que $\sqrt 5$ est constructible.
:::

### Racines $n$-ièmes d'un complexe

:::theorem[Racines $n$-ièmes d'un nombre complexe]
Soit $a = \lvert a\rvert\,e^{i\alpha}$ un complexe non nul et $n \geq 1$ un entier. L'équation $z^n = a$ possède exactement $n$ solutions :
$$
z_k = r\,e^{i\left(\frac{\alpha}{n} + \frac{2k\pi}{n}\right)},\qquad k = 0,\dots,n-1,\qquad r = \lvert a\rvert^{1/n}.
$$
Pour $n \geq 3$, leurs images sont les sommets d'un polygone régulier inscrit dans le cercle de centre $O$ et de rayon $r$.
:::

:::proof[Racines $n$-ièmes de $a$]
| Étape | Justification |
|---|---|
| Soit $r = \lvert a\rvert^{1/n}$ et $z_0 = r\,e^{i\alpha/n}$ ; alors $z_0^n = r^n e^{i\alpha} = a$ | formule de Moivre |
| $z^n = a \iff z^n = z_0^n \iff \left(\dfrac{z}{z_0}\right)^n = 1$ | $z_0 \neq 0$, on divise |
| $\dfrac{z}{z_0}$ est une racine $n$-ième de l'unité, donc $z = z_0\,e^{2ik\pi/n}$ | théorème précédent |
:::

:::method[Résoudre $z^n = a$]
1. Écrire $a$ en forme exponentielle $\lvert a\rvert e^{i\alpha}$.
2. Prendre $r = \sqrt[n]{\lvert a\rvert}$ et le premier angle $\dfrac{\alpha}{n}$.
3. Ajouter à chaque étape $\dfrac{2\pi}{n}$, $n$ fois.
:::

:::example[$z^3 = 8i$ et $z^4 = -4$]
**$z^3 = 8i$.** On a $8i = 8e^{i\pi/2}$, $r = 2$ et le premier angle est $\dfrac{\pi}{6}$. Les trois angles sont $\dfrac{\pi}{6}$, $\dfrac{\pi}{6} + \dfrac{2\pi}{3} = \dfrac{5\pi}{6}$ et $\dfrac{\pi}{6} + \dfrac{4\pi}{3} = \dfrac{3\pi}{2}$ :
$$
z_0 = 2e^{i\pi/6} = \sqrt 3 + i,\qquad z_1 = 2e^{5i\pi/6} = -\sqrt 3 + i,\qquad z_2 = 2e^{3i\pi/2} = -2i.
$$
**$z^4 = -4$.** On a $-4 = 4e^{i\pi}$, $r = \sqrt[4]{4} = \sqrt 2$, premier angle $\dfrac{\pi}{4}$, pas $\dfrac{\pi}{2}$ : les solutions sont $1+i$, $-1+i$, $-1-i$ et $1-i$, les sommets d'un carré. Ce résultat factorise un polynôme réel :
$$
z^4 + 4 = (z^2 + 2z + 2)(z^2 - 2z + 2).
$$
:::

## 4. Équations du second degré dans $\mathbb C$

### Racines carrées d'un complexe

Le plan d'attaque dépend de la forme dont on dispose. Si $u$ est sous forme exponentielle, la racine carrée se lit directement ($\sqrt r\,e^{i\alpha/2}$, et son opposé). Si $u = a + ib$ est donné en forme algébrique, avec un argument qui n'est pas un angle remarquable, on cherche $z = x + iy$ directement.

:::method[Racine carrée en forme algébrique]
Pour résoudre $z^2 = u = a + ib$ avec $z = x + iy$, on écrit trois relations :
$$
\begin{cases}
x^2 - y^2 = a & (\text{partie réelle de } z^2),\\
2xy = b & (\text{partie imaginaire de } z^2),\\
x^2 + y^2 = \lvert u\rvert & (\text{car } \lvert z\rvert^2 = \lvert u\rvert).
\end{cases}
$$
Les deux premières donnent $x^2$ et $y^2$ ; le signe de $2xy$ dit si $x$ et $y$ ont le même signe.
:::

:::example[Racine carrée de $3+4i$]
Ici $\lvert u\rvert = 5$. Le système donne $x^2 - y^2 = 3$ et $x^2 + y^2 = 5$, donc $x^2 = 4$ et $y^2 = 1$. Comme $2xy = 4 > 0$, $x$ et $y$ ont le même signe : les racines carrées de $3 + 4i$ sont $2 + i$ et $-2 - i$. Vérification : $(2+i)^2 = 4 + 4i - 1 = 3 + 4i$.
:::

### Le théorème

:::theorem[Équation $az^2 + bz + c = 0$]
Soit $a$, $b$, $c$ des complexes avec $a \neq 0$, $\Delta = b^2 - 4ac$ et $\delta$ une racine carrée de $\Delta$ (c'est-à-dire $\delta^2 = \Delta$). L'équation $az^2 + bz + c = 0$ admet dans $\mathbb C$ les solutions
$$
z_1 = \frac{-b - \delta}{2a}\qquad\text{et}\qquad z_2 = \frac{-b + \delta}{2a},
$$
confondues si $\Delta = 0$. De plus $az^2 + bz + c = a(z - z_1)(z - z_2)$, $\ z_1 + z_2 = -\dfrac{b}{a}$ et $z_1 z_2 = \dfrac{c}{a}$.
:::

:::proof[Résolution du second degré]
| Étape | Justification |
|---|---|
| $az^2 + bz + c = a\left[\left(z + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$ | forme canonique, comme dans $\mathbb R$ |
| $= a\left(z + \dfrac{b}{2a} - \dfrac{\delta}{2a}\right)\left(z + \dfrac{b}{2a} + \dfrac{\delta}{2a}\right)$ | $\dfrac{\Delta}{4a^2} = \left(\dfrac{\delta}{2a}\right)^2$ et $A^2 - B^2 = (A-B)(A+B)$ |
| donc $az^2+bz+c = 0 \iff z = \dfrac{-b+\delta}{2a}$ ou $z = \dfrac{-b-\delta}{2a}$ | un produit est nul si et seulement si l'un des facteurs l'est |
:::

La différence avec le cours de 2ème année : il n'y a plus de cas « $\Delta < 0$, pas de solution ». Il y a **toujours** deux racines complexes (éventuellement confondues). Si les coefficients sont réels, on retrouve des racines conjuguées ; avec des coefficients complexes, il n'y a plus de raison que ce soit le cas.

:::example[Un trinôme à coefficients complexes]
Résolvons $z^2 - (3 + i)z + 2 + 2i = 0$. Le discriminant vaut
$$
\Delta = (3+i)^2 - 4(2+2i) = 9 + 6i - 1 - 8 - 8i = -2i.
$$
On cherche $\delta$ tel que $\delta^2 = -2i$ : $\delta = 1 - i$ convient car $(1-i)^2 = 1 - 2i - 1 = -2i$. Alors
$$
z_1 = \frac{(3+i) - (1-i)}{2} = \frac{2 + 2i}{2} = 1 + i,
\qquad
z_2 = \frac{(3+i) + (1-i)}{2} = \frac{4}{2} = 2.
$$
Contrôle par la somme et le produit : $1 + i + 2 = 3 + i$ ✓ et $(1+i)\cdot 2 = 2 + 2i$ ✓.
:::

:::method[Quel cas ?]
- Si $c = 0$ : $z(az + b) = 0$, solutions $0$ et $-\dfrac{b}{a}$.
- Si $b = 0$ : $z^2 = -\dfrac{c}{a}$ : on cherche les racines carrées du complexe $-\dfrac{c}{a}$.
- Sinon : on calcule $\Delta$, une racine carrée $\delta$ de $\Delta$, puis $\dfrac{-b\pm\delta}{2a}$.
:::

### Quand le degré dépasse 2

:::theorem[Factoriser par $z - z_0$]
Si $P$ est un polynôme à coefficients complexes de degré $n \geq 2$ et si $z_0$ est une racine de $P$ (c'est-à-dire $P(z_0) = 0$), alors $P(z) = (z - z_0)\,Q(z)$ où $Q$ est un polynôme de degré $n - 1$.
:::

Pour trouver une première racine, on devine : un nombre entier, ou un imaginaire pur $iy$, pour lequel la partie réelle et la partie imaginaire de $P(iy)$ doivent **s'annuler en même temps**. Le reste est un second degré.

:::example[Une racine imaginaire pure]
Soit $P(z) = z^3 - (2+2i)z^2 + (2+4i)z - 4i$. Pour $z = iy$ avec $y$ réel :
$$
P(iy) = \underbrace{(2y^2 - 4y)}_{\text{partie réelle}} + i\underbrace{(-y^3 + 2y^2 + 2y - 4)}_{\text{partie imaginaire}}.
$$
La partie réelle s'annule pour $y = 0$ ou $y = 2$. Pour $y = 0$ la partie imaginaire vaut $-4$ ; pour $y = 2$ elle vaut $-8 + 8 + 4 - 4 = 0$. Donc $z_0 = 2i$ est racine. On écrit $P(z) = (z - 2i)(z^2 + bz + c)$ et on identifie les coefficients : $b = -2$ et $c = 2$. Il reste à résoudre $z^2 - 2z + 2 = 0$, de discriminant $-4 = (2i)^2$ :
$$
z = \frac{2 \pm 2i}{2} = 1 \pm i.
$$
L'ensemble des solutions de $P(z) = 0$ est $\{2i,\ 1+i,\ 1-i\}$.
:::

## 5. Nombres complexes et trigonométrie

:::theorem[Formules d'Euler]
Pour tout réel $x$ :
$$
\cos x = \frac{e^{ix} + e^{-ix}}{2}
\qquad\text{et}\qquad
\sin x = \frac{e^{ix} - e^{-ix}}{2i}.
$$
Elles se démontrent en écrivant $e^{ix} = \cos x + i\sin x$ et $e^{-ix} = \cos x - i\sin x$, puis en additionnant ou en soustrayant.
:::

La formule de Moivre et les formules d'Euler servent à deux choses :

- **développer** : exprimer $\cos nx$ ou $\sin nx$ avec des puissances de $\cos x$ et $\sin x$ ;
- **linéariser** : transformer une puissance de $\cos x$ ou $\sin x$ en une somme de $\cos kx$ et $\sin kx$, ce qui est utile pour intégrer.

:::example[Développer : $\cos 3x$ et $\sin 3x$]
On développe $(\cos x + i\sin x)^3$ avec la formule du binôme et $i^2 = -1$, $i^3 = -i$ :
$$
\cos^3 x + 3i\cos^2 x\sin x - 3\cos x\sin^2 x - i\sin^3 x.
$$
Par Moivre, c'est aussi $\cos 3x + i\sin 3x$. En identifiant les parties réelles et imaginaires :
$$
\cos 3x = \cos^3 x - 3\cos x\sin^2 x = 4\cos^3 x - 3\cos x,
\qquad
\sin 3x = 3\cos^2 x\sin x - \sin^3 x = 3\sin x - 4\sin^3 x.
$$
:::

:::example[Linéariser $\cos^4 x$]
On écrit $\cos x$ avec Euler et on développe par le binôme :
$$
\cos^4 x = \frac{1}{16}\left(e^{ix} + e^{-ix}\right)^4
= \frac{1}{16}\left(e^{4ix} + 4e^{2ix} + 6 + 4e^{-2ix} + e^{-4ix}\right).
$$
On regroupe les exponentielles conjuguées : $e^{4ix} + e^{-4ix} = 2\cos 4x$ et $4(e^{2ix} + e^{-2ix}) = 8\cos 2x$. D'où
$$
\cos^4 x = \frac{\cos 4x + 4\cos 2x + 3}{8}.
$$
Contrôle en $x = 0$ : $\dfrac{1 + 4 + 3}{8} = 1$ ✓ et en $x = \dfrac{\pi}{2}$ : $\dfrac{1 - 4 + 3}{8} = 0$ ✓.
:::

:::history
L'identité $e^{i\pi} + 1 = 0$, qui relie $e$, $i$, $\pi$, $1$ et $0$, est une conséquence directe de la définition $e^{i\theta} = \cos\theta + i\sin\theta$. Euler publie cette relation dans son *Introductio in analysin infinitorum* en 1748.
:::

## 6. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Montrer que trois points sont alignés ou qu'un angle est droit | le quotient $\dfrac{z_C - z_A}{z_B - z_A}$ est réel ou imaginaire pur |
| Nature d'un triangle | module et argument de ce quotient |
| Calculer une grande puissance de $a + ib$ | forme exponentielle puis Moivre |
| Résoudre $z^n = a$ | $r = \sqrt[n]{\lvert a\rvert}$, angle $\dfrac{\alpha}{n}$, pas $\dfrac{2\pi}{n}$ |
| Résoudre $az^2 + bz + c = 0$ | $\Delta$, puis une racine carrée $\delta$ de $\Delta$ |
| Équation de degré 3 ou 4 | chercher une racine évidente ou imaginaire pure, factoriser |
| Exprimer $\cos nx$, $\sin nx$ | Moivre et binôme |
| Linéariser $\cos^p x$ ou $\sin^p x$ | Euler et binôme |

## Vérifie-toi

::::check[Forme exponentielle et puissance]
Écrire $1 - i\sqrt 3$ sous forme exponentielle, puis calculer $(1 - i\sqrt 3)^6$.

:::answer
$\lvert 1 - i\sqrt 3\rvert = 2$ et l'argument est $-\dfrac{\pi}{3}$, donc $1 - i\sqrt 3 = 2e^{-i\pi/3}$. Alors $(1 - i\sqrt 3)^6 = 2^6 e^{-2i\pi} = 64$.
:::
::::

::::check[Nature d'un triangle]
Quelle est la nature du triangle $OBC$ avec $B(1+i)$ et $C(1-i)$ ?

:::answer
Le quotient $\dfrac{z_C - z_O}{z_B - z_O} = \dfrac{1-i}{1+i} = \dfrac{(1-i)^2}{2} = \dfrac{-2i}{2} = -i$ est imaginaire pur de module $1$ : le triangle est rectangle et isocèle en $O$.
:::
::::

::::check[Un second degré complexe]
Résoudre dans $\mathbb C$ : $z^2 - (1 - i)z + 2 - 2i = 0$.

:::answer
$\Delta = (1-i)^2 - 4(2-2i) = -2i - 8 + 8i = -8 + 6i$. Et $(1 + 3i)^2 = 1 + 6i - 9 = -8 + 6i$, donc $\delta = 1 + 3i$. Les solutions sont $z = \dfrac{(1-i) \pm (1+3i)}{2}$, soit $z = 1 + i$ et $z = -2i$. Contrôle : la somme $1 + i - 2i = 1 - i$ ✓ et le produit $(1+i)(-2i) = 2 - 2i$ ✓.
:::
::::

::::check[Linéariser]
Linéariser $\sin^3 x$.

:::answer
On développe le cube avec la formule d'Euler ($\sin x = \dfrac{e^{ix} - e^{-ix}}{2i}$, et $(2i)^3 = -8i$) :
$$
\sin^3 x = \dfrac{(e^{ix} - e^{-ix})^3}{-8i} = \dfrac{(e^{3ix} - e^{-3ix}) - 3(e^{ix} - e^{-ix})}{-8i}.
$$
Or $e^{3ix} - e^{-3ix} = 2i\sin 3x$ et $e^{ix} - e^{-ix} = 2i\sin x$, d'où
$$
\sin^3 x = \dfrac{2i\sin 3x - 6i\sin x}{-8i} = \dfrac{3\sin x - \sin 3x}{4}.
$$
:::
::::
