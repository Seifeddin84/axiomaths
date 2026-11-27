---
uid: "0000426"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Translation et parallélogramme"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "parallelogramme", "milieu", "vecteurs-egaux", "coordonnees"]
provenance: own
dressing: "caractériser un parallélogramme par une translation"
rung: 2
---
Soient $A$, $B$ et $C$ trois points non alignés. On note $D$ l'image de $C$ par la translation $t_{\overrightarrow{AB}}$.

1. Montrer que $ABDC$ est un parallélogramme.

2. Réciproquement, soit $PQRS$ un parallélogramme. Montrer que $R$ est l'image de $S$ par la translation $t_{\overrightarrow{PQ}}$.

3. Soit $E$ l'image de $D$ par $t_{\overrightarrow{AB}}$. Montrer que $D$ est le milieu de $[CE]$.

4. Le plan est muni d'un repère $(O, \vec{i}, \vec{j})$ et $A(0, 0)$, $B(3, 1)$, $C(1, 2)$. Calculer les coordonnées de $D$ et de $E$ et vérifier que $D$ est le milieu de $[CE]$.

---

## Solution

:::definition[Translation]
$M' = t_{\vec{u}}(M) \iff \overrightarrow{MM'} = \vec{u}$.
:::

:::property[Parallélogramme et vecteurs égaux]
Si $A$, $B$, $C$ ne sont pas alignés :
$$\boxed{\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC \text{ est un parallélogramme}}$$

$I$ est le milieu de $[CE]$ $\iff \overrightarrow{CI} = \overrightarrow{IE}$.
:::

1. $D = t_{\overrightarrow{AB}}(C)$ signifie $\overrightarrow{CD} = \overrightarrow{AB}$.

   Comme $A$, $B$, $C$ ne sont pas alignés, cette égalité vectorielle signifie que $ABDC$ est un parallélogramme (les côtés opposés $[AB]$ et $[CD]$ sont égaux et parallèles).

2. Dans le parallélogramme $PQRS$, les côtés opposés $[PQ]$ et $[SR]$ vérifient $\overrightarrow{PQ} = \overrightarrow{SR}$.

   Cela s'écrit $\overrightarrow{SR} = \overrightarrow{PQ}$ : $R$ est l'image de $S$ par $t_{\overrightarrow{PQ}}$.

3. $E = t_{\overrightarrow{AB}}(D)$ signifie $\overrightarrow{DE} = \overrightarrow{AB}$.

   D'après 1., $\overrightarrow{CD} = \overrightarrow{AB}$. Donc $\overrightarrow{CD} = \overrightarrow{DE}$ : $D$ est le milieu de $[CE]$.

4. Le vecteur de la translation est $\overrightarrow{AB} \begin{pmatrix} 3 - 0 \\ 1 - 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$.

   $D = t_{\overrightarrow{AB}}(C)$ : $D(1 + 3,\ 2 + 1) = D(4, 3)$.

   $E = t_{\overrightarrow{AB}}(D)$ : $E(4 + 3,\ 3 + 1) = E(7, 4)$.

   Milieu de $[CE]$ : $\left(\dfrac{1 + 7}{2},\ \dfrac{2 + 4}{2}\right) = (4, 3)$, ce sont bien les coordonnées de $D$. ✓

:::intuition
Un parallélogramme, c'est deux côtés qui « font le même déplacement » : $[AB]$ et $[CD]$ sont reliés par la **translation** de vecteur $\overrightarrow{AB}$ ou $\overrightarrow{CD}$.
:::

:::trap
Dans le parallélogramme $ABDC$, les sommets se suivent dans l'ordre $A$, $B$, $D$, $C$ : les côtés opposés sont $[AB]$ et $[DC]$, et l'égalité s'écrit $\overrightarrow{AB} = \overrightarrow{CD}$ (départs $A$ et $C$, arrivées $B$ et $D$). Le « $ABCD$ » habituel n'est **pas** le bon ordre ici.
:::
