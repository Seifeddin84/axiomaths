---
uid: "0000354"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Orthocentre et cercle circonscrit : une bissectrice"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Difficile"
points: null
tags: ["angles", "orthocentre", "cercle-circonscrit", "bissectrice", "demonstration"]
provenance: scan
dressing: "orthocentre et bissectrice"
rung: 5
---

$ABC$ est un triangle inscrit dans un cercle $(\mathscr{C})$ de centre $O$.

On trace les hauteurs $[AA']$ et $[CC']$. Soit $H$ l'orthocentre du triangle $ABC$. La hauteur $[AA']$ recoupe $(\mathscr{C})$ en $D$.

![Triangle ABC inscrit dans un cercle de centre O, avec les hauteurs [AA'] et [CC'], l'orthocentre H et le point D](/exercises/images/354-lycee-1ere-angles-0000354.png)

Démontrer que la demi-droite $[CB)$ est la bissectrice de l'angle $\widehat{HCD}$.

---

## Solution

:::property[Angles d'un triangle rectangle]
Dans un triangle rectangle, les deux angles aigus sont **complémentaires** (leur somme vaut $90°$).
:::

:::property[Angles inscrits]
Deux angles inscrits qui interceptent le même arc, avec leurs sommets du **même côté** de la corde, sont **égaux**.
:::

:::method[Montrer qu'une demi-droite est une bissectrice]
On montre que les deux angles qu'elle forme avec les côtés de l'angle sont **égaux**, et que les deux côtés sont de part et d'autre de la demi-droite.
:::

On traite la figure donnée : le triangle $ABC$ a ses trois angles **aigus**, donc $H$ est à l'intérieur du triangle et $A'\in[BC]$, $C'\in[AB]$.

**Étape 1 : l'angle $\widehat{HCB}$.**

$H$ est sur la hauteur $(CC')$, donc $\widehat{HCB}=\widehat{C'CB}$.

Le triangle $CC'B$ est rectangle en $C'$ et son angle en $B$ est $\widehat{C'BC}=\widehat{ABC}$ (car $C'\in[AB]$). Les angles aigus sont complémentaires :

$$\displaystyle \widehat{HCB}=90°-\widehat{ABC}$$

**Étape 2 : l'angle $\widehat{BAD}$.**

$D$ est sur la hauteur $(AA')$, donc $\widehat{BAD}=\widehat{BAA'}$.

Le triangle $ABA'$ est rectangle en $A'$ et son angle en $B$ est $\widehat{ABA'}=\widehat{ABC}$ (car $A'\in[BC]$) :

$$\displaystyle \widehat{BAD}=90°-\widehat{ABC}$$

**Étape 3 : l'angle $\widehat{BCD}$.**

$\widehat{BAD}$ et $\widehat{BCD}$ sont deux angles inscrits qui interceptent le même arc $BD$ ; les points $A$ et $C$ sont du même côté de la corde $[BD]$ (les points sont dans l'ordre $A$, $B$, $D$, $C$ sur le cercle). Donc :

$$\displaystyle \widehat{BCD}=\widehat{BAD}=90°-\widehat{ABC}$$

**Conclusion.**

D'après les étapes 1 et 3 :

$$\boxed{\widehat{HCB}=90°-\widehat{ABC}=\widehat{BCD}}$$

De plus $H$ et $D$ sont de part et d'autre de la droite $(BC)$ : $H$ est à l'intérieur du triangle et $D$ est sur la hauteur $(AA')$, au-delà de $A'$.

**La demi-droite $[CB)$ est donc la bissectrice de l'angle $\widehat{HCD}$.**

:::intuition
La droite $(BC)$ est un « miroir » : le symétrique de l'orthocentre $H$ par rapport à $(BC)$ est le point $D$ du cercle circonscrit. C'est pourquoi les angles en $C$ sont égaux.
:::

:::trap
Dans l'étape 3, ne pas oublier de vérifier que $A$ et $C$ sont du **même côté** de $[BD]$ : sinon les deux angles inscrits seraient supplémentaires et non égaux.
:::
