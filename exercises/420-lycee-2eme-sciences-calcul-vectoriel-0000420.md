---
uid: "0000420"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Le quadrilatère des milieux (théorème de Varignon)"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["vecteurs", "quadrilatere-des-milieux", "theoreme-de-varignon", "parallelogramme", "demonstration"]
provenance: own
dressing: "théorème de Varignon par les vecteurs"
rung: 5
---
Soit $ABCD$ un quadrilatère quelconque. On note $I$, $J$, $K$ et $L$ les milieux respectifs des côtés $[AB]$, $[BC]$, $[CD]$ et $[DA]$.

**Partie A : le cas général**

1. a. Exprimer $\overrightarrow{IJ}$ en fonction de $\overrightarrow{AC}$ en utilisant la relation de Chasles.

   b. Exprimer de même $\overrightarrow{LK}$ en fonction de $\overrightarrow{AC}$. En déduire la nature de $IJKL$.

2. Exprimer $\overrightarrow{AI}$, $\overrightarrow{AK}$, $\overrightarrow{AJ}$ et $\overrightarrow{AL}$ en fonction de $\overrightarrow{AB}$, $\overrightarrow{AC}$ et $\overrightarrow{AD}$. En déduire que $[IK]$ et $[JL]$ ont le même milieu.

**Partie B : le cas d'un rectangle**

Dans cette partie, $ABCD$ est un rectangle. On munit le plan d'un repère orthonormé $(A, \vec{i}, \vec{j})$ tel que $B(a, 0)$ et $D(0, b)$, avec $a > 0$ et $b > 0$.

1. Donner les coordonnées de $C$, $I$, $J$, $K$ et $L$.

2. Calculer les composantes de $\overrightarrow{IJ}$ et de $\overrightarrow{IL}$. Montrer que $IJ = IL$. En déduire la nature de $IJKL$.

3. À quelle condition sur $a$ et $b$ le quadrilatère $IJKL$ est-il un carré ?

---

## Solution

:::property[Outils]
- **Milieu** : $I$ milieu de $[AB] \iff \overrightarrow{AI} = \dfrac{1}{2}\overrightarrow{AB}$ et $\overrightarrow{IB} = \dfrac{1}{2}\overrightarrow{AB}$.
- **Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- $IJKL$ est un parallélogramme $\iff \overrightarrow{IJ} = \overrightarrow{LK}$.
- Parallélogramme avec deux côtés consécutifs égaux : **losange**. Losange avec un angle droit : **carré**.
- Base orthonormée : $\|\vec{u}\| = \sqrt{x^2 + y^2}$ et $\vec{u} \perp \vec{v} \iff xx' + yy' = 0$.
:::

**Partie A**

1. a. On passe par $B$ : $\overrightarrow{IJ} = \overrightarrow{IB} + \overrightarrow{BJ}$.

   $I$ est le milieu de $[AB]$, donc $\overrightarrow{IB} = \dfrac{1}{2}\overrightarrow{AB}$. $J$ est le milieu de $[BC]$, donc $\overrightarrow{BJ} = \dfrac{1}{2}\overrightarrow{BC}$.

   $$\overrightarrow{IJ} = \frac{1}{2}\overrightarrow{AB} + \frac{1}{2}\overrightarrow{BC} = \frac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{BC}\right) = \frac{1}{2}\overrightarrow{AC}$$

   b. On passe par $D$ : $\overrightarrow{LK} = \overrightarrow{LD} + \overrightarrow{DK}$, avec $\overrightarrow{LD} = \dfrac{1}{2}\overrightarrow{AD}$ et $\overrightarrow{DK} = \dfrac{1}{2}\overrightarrow{DC}$.

   $$\overrightarrow{LK} = \frac{1}{2}\left(\overrightarrow{AD} + \overrightarrow{DC}\right) = \frac{1}{2}\overrightarrow{AC}$$

   Donc $\overrightarrow{IJ} = \overrightarrow{LK}$. Si $I$, $J$, $L$ ne sont pas alignés, $IJKL$ est un **parallélogramme**, et ceci pour **tout** quadrilatère $ABCD$.

2. On exprime tout à partir de $A$ :

   $$\overrightarrow{AI} = \frac{1}{2}\overrightarrow{AB} \qquad \overrightarrow{AJ} = \overrightarrow{AB} + \frac{1}{2}\overrightarrow{BC} = \frac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$$

   $$\overrightarrow{AK} = \frac{1}{2}\left(\overrightarrow{AC} + \overrightarrow{AD}\right) \qquad \overrightarrow{AL} = \frac{1}{2}\overrightarrow{AD}$$

   (Pour $\overrightarrow{AJ}$, on utilise que le milieu de $[BC]$ vérifie $\overrightarrow{AJ} = \dfrac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$ ; de même pour $K$.)

   Si $M$ est le milieu de $[IK]$ :

   $$\overrightarrow{AM} = \frac{1}{2}\left(\overrightarrow{AI} + \overrightarrow{AK}\right) = \frac{1}{4}\left(\overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}\right)$$

   Si $N$ est le milieu de $[JL]$ :

   $$\overrightarrow{AN} = \frac{1}{2}\left(\overrightarrow{AJ} + \overrightarrow{AL}\right) = \frac{1}{4}\left(\overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}\right)$$

   Donc $\overrightarrow{AM} = \overrightarrow{AN}$, c'est-à-dire $M = N$ : les segments $[IK]$ et $[JL]$ ont le **même milieu**. On retrouve que $IJKL$ est un parallélogramme (ses diagonales se coupent en leur milieu).

**Partie B**

1. $ABCD$ est un rectangle : $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$, donc $C(a, b)$.

   $$I\left(\frac{a}{2}, 0\right) \quad J\left(a, \frac{b}{2}\right) \quad K\left(\frac{a}{2}, b\right) \quad L\left(0, \frac{b}{2}\right)$$

2. $\overrightarrow{IJ} \begin{pmatrix} a - \frac{a}{2} \\ \frac{b}{2} - 0 \end{pmatrix} = \begin{pmatrix} \frac{a}{2} \\ \frac{b}{2} \end{pmatrix}$ et $\overrightarrow{IL} \begin{pmatrix} 0 - \frac{a}{2} \\ \frac{b}{2} - 0 \end{pmatrix} = \begin{pmatrix} -\frac{a}{2} \\ \frac{b}{2} \end{pmatrix}$.

   $$IJ = \sqrt{\frac{a^2}{4} + \frac{b^2}{4}} = \frac{\sqrt{a^2 + b^2}}{2} \qquad IL = \sqrt{\frac{a^2}{4} + \frac{b^2}{4}} = \frac{\sqrt{a^2 + b^2}}{2}$$

   Donc $IJ = IL$. $IJKL$ est un parallélogramme (partie A) dont deux côtés consécutifs sont égaux : c'est un **losange**.

3. $IJKL$ est un carré si et seulement si l'angle en $I$ est droit, c'est-à-dire $\overrightarrow{IJ} \perp \overrightarrow{IL}$ :

   $$\frac{a}{2} \times \left(-\frac{a}{2}\right) + \frac{b}{2} \times \frac{b}{2} = -\frac{a^2}{4} + \frac{b^2}{4} = \frac{b^2 - a^2}{4}$$

   Cette quantité est nulle $\iff b^2 = a^2 \iff b = a$ (car $a, b > 0$).

   $IJKL$ est un carré si et seulement si $a = b$, c'est-à-dire si $ABCD$ est lui-même un **carré**.

:::intuition
Le segment qui joint les milieux de deux côtés consécutifs est « la moitié de la diagonale » : $\overrightarrow{IJ} = \frac{1}{2}\overrightarrow{AC}$. Les deux côtés opposés $IJ$ et $LK$ sont donc égaux, quelle que soit la forme de $ABCD$.
:::

:::trap
Dans la partie B, $IJ = IL$ ne signifie pas que $ABCD$ est un carré : un rectangle quelconque donne toujours un **losange**. Le carré demande en plus $a = b$.
:::
