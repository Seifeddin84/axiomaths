---
uid: "0000401"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres Complexes"
source: "Bac 2001 principale, Ex. 1"
title: "Une homographie : points invariants et bissectrice"
country: "Tunisie"
year: 2001
professor: null
difficulty: "Moyen"
points: 5
tags: ["nombres-complexes", "bissectrice", "geometrie-complexe", "bac"]
bac: "2001-principale-maths"
dressing: "homographie complexe et points invariants"
rung: 3
---

Dans le plan complexe $\mathcal{P}$ rapporté à un repère orthonormé $(O,\vec{u},\vec{v})$ on considère les points $A$ et $B$ d'affixes respectives $a$ et $1$, où $a$ est un nombre complexe donné différent de $1$.

Soit $f$ l'application de $\mathcal{P}\setminus\{B\}$ dans $\mathcal{P}$ qui, à tout point $M$ d'affixe $z$, associe le point $M'$ d'affixe $z'$ telle que : $z'=\dfrac{z-a}{z-1}$.

1. Montrer que les affixes des points invariants par $f$ sont les solutions de l'équation

   $$E : \quad z^2-2z+a=0.$$

2. a. On suppose que $a=1+e^{i\theta}$ où $\theta\in\left]\dfrac{\pi}{2},\dfrac{3\pi}{2}\right[$. Résoudre l'équation $E$.

   b. Mettre sous forme trigonométrique chacune des solutions de $E$.

3. Dans cette question on suppose que $a=-1$. Soit $M$ un point de $\mathcal{P}\setminus\{B\}$ d'affixe $z$ et $M'$ le point d'affixe $z'=f(z)$.

   a. Montrer que $\left(\widehat{\vec{u},\overrightarrow{BM}}\right)+\left(\widehat{\vec{u},\overrightarrow{BM'}}\right)\equiv 0\ [2\pi]$.

      En déduire que la demi-droite $[BA)$ est une bissectrice de l'angle $\left(\widehat{\overrightarrow{BM},\overrightarrow{BM'}}\right)$.

   b. Montrer que $z'$ est imaginaire pur si et seulement si $|z|=1$.

   c. En déduire la construction du point $M'$ image d'un point $M$ du cercle trigonométrique privé du point $B$.

---

## Solution

:::property[Les trois outils de l'exercice]
**Angle et affixes.** Si $P\neq Q$ ont pour affixes $p$ et $q$, alors $\boxed{\left(\widehat{\vec{u},\overrightarrow{PQ}}\right)\equiv\arg(q-p)\ [2\pi]}$.

**Arguments.** $\arg\dfrac{1}{w}\equiv-\arg w$ et $\arg(kw)\equiv\arg w$ si $k>0$.

**Angle moitié.** $\boxed{1+e^{i\alpha}=e^{i\alpha/2}\left(e^{-i\alpha/2}+e^{i\alpha/2}\right)=2\cos\dfrac{\alpha}{2}\,e^{i\alpha/2}}$
:::

1. Un point $M(z)$, $z\neq 1$, est invariant par $f$ si et seulement si $z'=z$.

   Pour $z\neq1$ on peut multiplier par $z-1$ :

   $$\displaystyle \frac{z-a}{z-1}=z \iff z-a=z(z-1) \iff z^2-2z+a=0.$$

   Il reste à vérifier que les solutions de $E$ sont bien dans l'ensemble de définition de $f$, c'est-à-dire différentes de $1$. Or $1$ n'est pas solution : $1-2+a=a-1\neq0$ car $a\neq1$.

   Donc les affixes des points invariants sont exactement les solutions de $E$.

2. a. On écrit $E$ sous forme canonique :

   $$\displaystyle z^2-2z+a=(z-1)^2+(a-1)=(z-1)^2+e^{i\theta}.$$

   Donc $E\iff (z-1)^2=-e^{i\theta}$.

   Or $-e^{i\theta}=i^2\left(e^{i\theta/2}\right)^2=\left(i\,e^{i\theta/2}\right)^2$.

   Une équation $w^2=c^2$ a pour solutions $w=\pm c$, donc $z-1=\pm i\,e^{i\theta/2}$. Les solutions de $E$ sont

   $$\boxed{z_1=1-i\,e^{i\theta/2}\qquad\text{et}\qquad z_2=1+i\,e^{i\theta/2}.}$$

   *Contrôle* : pour $\theta=\pi$ on a $a=0$, $E : z(z-2)=0$ et $e^{i\theta/2}=i$, d'où $z_1=1+1=2$ et $z_2=1-1=0$. ✓

   b. On pose $\alpha=\dfrac{\theta}{2}-\dfrac{\pi}{2}$. Comme $\theta\in\left]\dfrac{\pi}{2},\dfrac{3\pi}{2}\right[$, on a $\alpha\in\left]-\dfrac{\pi}{4},\dfrac{\pi}{4}\right[$.

   Puisque $-i=e^{-i\pi/2}$ et $i=e^{i\pi/2}$ :

   $$\displaystyle z_1=1+e^{i\alpha},\qquad z_2=1-e^{i\alpha}.$$

   **Pour $z_1$.** D'après le rappel (angle moitié) :

   $$\displaystyle z_1=2\cos\frac{\alpha}{2}\;e^{i\alpha/2}.$$

   Ici $\dfrac{\alpha}{2}\in\left]-\dfrac{\pi}{8},\dfrac{\pi}{8}\right[$, donc $\cos\dfrac{\alpha}{2}>0$ : c'est bien un module. Avec $\dfrac{\alpha}{2}=\dfrac{\theta}{4}-\dfrac{\pi}{4}$ :

   $$\boxed{z_1=2\cos\left(\frac{\theta-\pi}{4}\right)\,e^{i\frac{\theta-\pi}{4}}.}$$

   **Pour $z_2$.** On factorise de la même façon :

   $$\displaystyle z_2=e^{i\alpha/2}\left(e^{-i\alpha/2}-e^{i\alpha/2}\right)=e^{i\alpha/2}\times\left(-2i\sin\frac{\alpha}{2}\right)=2\sin\left(-\frac{\alpha}{2}\right)\times i\,e^{i\alpha/2}.$$

   Comme $-\dfrac{\alpha}{2}=\dfrac{\pi-\theta}{4}$ et $i\,e^{i\alpha/2}=e^{i\left(\frac{\theta-\pi}{4}+\frac{\pi}{2}\right)}=e^{i\frac{\theta+\pi}{4}}$ :

   $$\displaystyle z_2=2\sin\left(\frac{\pi-\theta}{4}\right)\,e^{i\frac{\theta+\pi}{4}}.$$

   Ici le **signe de $\sin\dfrac{\pi-\theta}{4}$ dépend de $\theta$**, donc il faut distinguer trois cas :

   - si $\dfrac{\pi}{2}<\theta<\pi$ : $\sin\dfrac{\pi-\theta}{4}>0$, donc $\boxed{|z_2|=2\sin\dfrac{\pi-\theta}{4}\ \text{et}\ \arg z_2\equiv\dfrac{\theta+\pi}{4}}$ ;

   - si $\theta=\pi$ : $z_2=0$ (pas de forme trigonométrique) ;

   - si $\pi<\theta<\dfrac{3\pi}{2}$ : $\sin\dfrac{\pi-\theta}{4}<0$, on écrit $-1=e^{i\pi}$ et $\boxed{|z_2|=2\sin\dfrac{\theta-\pi}{4}\ \text{et}\ \arg z_2\equiv\dfrac{\theta+5\pi}{4}}$.

3. Pour $a=-1$ : $A$ a pour affixe $-1$, $B$ a pour affixe $1$, et $z'=\dfrac{z+1}{z-1}$.

   On calcule d'abord $z'-1$ (affixe de $\overrightarrow{BM'}$) :

   $$\displaystyle z'-1=\frac{z+1-(z-1)}{z-1}=\frac{2}{z-1}.$$

   Cette quantité est non nulle, donc $M'\neq B$ et l'angle $\left(\widehat{\vec{u},\overrightarrow{BM'}}\right)$ existe.

   a. D'après le rappel :

   $$\displaystyle \left(\widehat{\vec{u},\overrightarrow{BM}}\right)\equiv\arg(z-1),\qquad \left(\widehat{\vec{u},\overrightarrow{BM'}}\right)\equiv\arg\frac{2}{z-1}\equiv-\arg(z-1).$$

   La somme vaut donc $\boxed{0\ [2\pi]}$.

   *Déduction.* Notons $\varphi=\arg(z-1)$. Les demi-droites $[BM)$ et $[BM')$ font avec $(\vec{u})$ les angles $\varphi$ et $-\varphi$ : elles sont **symétriques par rapport à la droite $(Bu)=(BA)$** (l'axe des réels).

   Un axe de symétrie d'un angle porte sa bissectrice : la droite $(BA)$ porte donc la bissectrice de l'angle $\left(\widehat{\overrightarrow{BM},\overrightarrow{BM'}}\right)$ ; c'est la demi-droite $[BA)$ quand $M$ est du côté de $A$ ($\operatorname{Re}z<1$), et la demi-droite opposée sinon.

   b. On multiplie numérateur et dénominateur par le conjugué du dénominateur :

   $$\displaystyle z'=\frac{(z+1)(\bar z-1)}{|z-1|^2}=\frac{|z|^2-z+\bar z-1}{|z-1|^2}=\frac{(|z|^2-1)-2i\operatorname{Im}z}{|z-1|^2}.$$

   Donc $\boxed{\operatorname{Re}z'=\dfrac{|z|^2-1}{|z-1|^2}}$.

   Ainsi $z'$ est imaginaire pur $\iff \operatorname{Re}z'=0\iff |z|^2=1\iff|z|=1$.

   (Pour $z=-1$ on trouve $z'=0$, qui est bien imaginaire pur au sens $\operatorname{Re}z'=0$.)

   c. Soit $M$ sur le cercle trigonométrique, $M\neq B$. D'après b., $z'$ est imaginaire pur : **$M'$ est sur l'axe $(O,\vec{v})$**.

   D'après a., $M'$ est sur la demi-droite symétrique de $[BM)$ par rapport à $(OB)$. Cette droite passe par $B$ et par le symétrique $\bar M$ de $M$ par rapport à l'axe des réels.

   **Construction :** on trace le symétrique $\bar M$ de $M$ par rapport à $(Ou)$, puis la droite $(B\bar M)$ ; elle coupe l'axe $(O,\vec{v})$ en $M'$.

   *Contrôle* : pour $z=e^{it}$, $z'=\dfrac{e^{it}+1}{e^{it}-1}=-i\cot\dfrac{t}{2}$ ; la droite $(B\bar M)$ coupe bien l'axe imaginaire au point d'ordonnée $\dfrac{-\sin t}{1-\cos t}=-\cot\dfrac{t}{2}$. ✓

:::intuition
Le quotient $\dfrac{z-a}{z-1}=\dfrac{z_M-z_A}{z_M-z_B}$ porte l'angle $\left(\overrightarrow{MB},\overrightarrow{MA}\right)$. Il est imaginaire pur quand cet angle est droit, c'est-à-dire quand $M$ est sur le cercle de diamètre $[AB]$ : ici, le cercle trigonométrique.
:::

:::trap
Résoudre $z'=z$ sans vérifier que les solutions sont différentes de $1$, ou donner « le » module de $z_2$ sans regarder le signe du sinus (il change quand $\theta$ passe de part et d'autre de $\pi$).
:::
