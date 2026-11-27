---
uid: "0000421"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Images et antécédents dans un parallélogramme"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "parallelogramme", "images", "antecedents"]
provenance: own
dressing: "images et antécédents dans un parallélogramme"
rung: 1
---
Soit $ABCD$ un parallélogramme de centre $O$ : ses diagonales $[AC]$ et $[BD]$ se coupent en leur milieu $O$.

![Parallélogramme ABCD de centre O](/exercises/images/421-lycee-2eme-sciences-translations-0000421.png)

1. Déterminer, en justifiant, l'image de chacun des points $A$ et $D$ par la translation $t_{\overrightarrow{AB}}$.

2. Déterminer l'image du point $B$ par la translation $t_{\overrightarrow{AD}}$.

3. Déterminer l'image du point $O$ par la translation $t_{\overrightarrow{AO}}$.

4. Déterminer l'antécédent du point $C$ par la translation $t_{\overrightarrow{AB}}$.

5. Déterminer l'antécédent du point $A$ par la translation $t_{\overrightarrow{AB}}$.

---

## Solution

:::definition[Image et antécédent par une translation]
Soit $\vec{u}$ un vecteur. L'**image** d'un point $M$ par la translation $t_{\vec{u}}$ est l'unique point $M'$ tel que
$$\boxed{\overrightarrow{MM'} = \vec{u}}$$
On dit que $M$ est l'**antécédent** de $M'$. Tout point $M'$ a un seul antécédent.
:::

:::property[Dans un parallélogramme]
Si $ABCD$ est un parallélogramme : $\boxed{\overrightarrow{AB} = \overrightarrow{DC}}$ et $\boxed{\overrightarrow{AD} = \overrightarrow{BC}}$.

Si $O$ est le milieu de $[AC]$ : $\overrightarrow{AO} = \overrightarrow{OC}$.
:::

1. **Image de $A$.** On cherche $A'$ tel que $\overrightarrow{AA'} = \overrightarrow{AB}$. On a immédiatement $A' = B$.

   L'image de $A$ par $t_{\overrightarrow{AB}}$ est $B$.

   **Image de $D$.** On cherche $D'$ tel que $\overrightarrow{DD'} = \overrightarrow{AB}$.

   Or $ABCD$ est un parallélogramme, donc $\overrightarrow{AB} = \overrightarrow{DC}$. On a donc $\overrightarrow{DD'} = \overrightarrow{DC}$, d'où $D' = C$.

   L'image de $D$ par $t_{\overrightarrow{AB}}$ est $C$.

2. On cherche $B'$ tel que $\overrightarrow{BB'} = \overrightarrow{AD}$.

   Dans le parallélogramme, $\overrightarrow{AD} = \overrightarrow{BC}$. Donc $\overrightarrow{BB'} = \overrightarrow{BC}$ et $B' = C$.

   L'image de $B$ par $t_{\overrightarrow{AD}}$ est $C$.

3. On cherche $O'$ tel que $\overrightarrow{OO'} = \overrightarrow{AO}$.

   $O$ est le milieu de $[AC]$, donc $\overrightarrow{AO} = \overrightarrow{OC}$. Alors $\overrightarrow{OO'} = \overrightarrow{OC}$ et $O' = C$.

   L'image de $O$ par $t_{\overrightarrow{AO}}$ est $C$.

4. On cherche $M$ tel que $t_{\overrightarrow{AB}}(M) = C$, c'est-à-dire $\overrightarrow{MC} = \overrightarrow{AB}$.

   Or $\overrightarrow{AB} = \overrightarrow{DC}$. Donc $\overrightarrow{MC} = \overrightarrow{DC}$ et $M = D$.

   L'antécédent de $C$ par $t_{\overrightarrow{AB}}$ est $D$. (On le savait déjà : la question 1 dit que l'image de $D$ est $C$.)

5. On cherche $M$ tel que $\overrightarrow{MA} = \overrightarrow{AB}$.

   Cette égalité signifie que $A$ est le milieu de $[MB]$. Donc $M$ est le **symétrique de $B$ par rapport à $A$**.

   L'antécédent de $A$ par $t_{\overrightarrow{AB}}$ est le symétrique de $B$ par rapport à $A$.

:::intuition
Pour trouver l'image d'un point, on cherche un point qui « fait le même déplacement » : on **repère un vecteur égal** au vecteur de la translation, souvent grâce au parallélogramme.
:::

:::trap
L'image de $B$ par $t_{\overrightarrow{AB}}$ n'est pas $A$ : c'est le symétrique de $A$ par rapport à $B$. Pour retrouver $A$ à partir de $B$, il faut la translation de vecteur $\overrightarrow{BA}$.
:::
