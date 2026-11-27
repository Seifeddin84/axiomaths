---
uid: "0000422"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Recopier et compléter"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "definition", "vecteurs", "proprietes"]
provenance: own
dressing: "compléter les propriétés de la translation"
rung: 1
---
$A$ et $B$ sont deux points distincts. Recopier et compléter chacune des phrases suivantes.

1. Si les points $M$ et $M'$ vérifient $\overrightarrow{MM'} = \overrightarrow{AB}$, alors $M'$ est l'image de $M$ par la translation de vecteur $\dots$

2. Si $ABM'M$ est un parallélogramme (non aplati), alors $M'$ est l'image de $M$ par la translation de vecteur $\dots$

3. Si $ABCD$ est un parallélogramme, alors $C$ est l'image de $D$ par la translation de vecteur $\dots$ et $D$ est l'image de $A$ par la translation de vecteur $\dots$

4. Si $I$ est le milieu de $[AB]$, alors la translation de vecteur $\dots$ envoie $A$ sur $I$ et $I$ sur $B$.

5. Si $M'$ est l'image de $M$ par la translation de vecteur $\vec{u}$, alors $M$ est l'image de $M'$ par la translation de vecteur $\dots$

6. Si $C$ est l'image de $B$ par la translation de vecteur $\overrightarrow{AB}$, alors $B$ est le milieu du segment $\dots$

---

## Solution

:::definition[Translation de vecteur $\vec{u}$]
$$\boxed{M' = t_{\vec{u}}(M) \iff \overrightarrow{MM'} = \vec{u}}$$
:::

:::property[Rappels]
- $\overrightarrow{AB} = \overrightarrow{DC} \iff ABCD$ parallélogramme (points non alignés).
- $\overrightarrow{AI} = \overrightarrow{IB} \iff I$ milieu de $[AB]$.
- $\overrightarrow{BA} = -\overrightarrow{AB}$.
:::

1. $\overrightarrow{MM'} = \overrightarrow{AB}$ est exactement la définition : $M'$ est l'image de $M$ par la translation de vecteur $\overrightarrow{AB}$, notée $t_{\overrightarrow{AB}}$.

2. Dans le parallélogramme $ABM'M$ (sommets dans cet ordre), les côtés opposés $[AB]$ et $[MM']$ vérifient $\overrightarrow{AB} = \overrightarrow{MM'}$.

   Donc $M'$ est l'image de $M$ par la translation de vecteur $\overrightarrow{AB}$.

3. Dans le parallélogramme $ABCD$, $\overrightarrow{AB} = \overrightarrow{DC}$, donc $C$ est l'image de $D$ par la translation de vecteur $\overrightarrow{AB}$.

   De plus, $\overrightarrow{AD} = \overrightarrow{BC}$ dans le parallélogramme. Le vecteur qui envoie $A$ sur $D$ est $\overrightarrow{AD}$ : $D$ est l'image de $A$ par la translation de vecteur $\overrightarrow{AD}$ (qui est aussi $\overrightarrow{BC}$).

4. $I$ milieu de $[AB]$ signifie $\overrightarrow{AI} = \overrightarrow{IB}$. La translation de vecteur $\overrightarrow{AI}$ envoie $A$ sur $I$ (car $\overrightarrow{AI} = \overrightarrow{AI}$), et $I$ sur $B$ (car $\overrightarrow{II'} = \overrightarrow{AI} = \overrightarrow{IB}$ donne $I' = B$).

5. $\overrightarrow{MM'} = \vec{u}$ équivaut à $\overrightarrow{M'M} = -\vec{u}$. Donc $M$ est l'image de $M'$ par la translation de vecteur $-\vec{u}$.

6. $C = t_{\overrightarrow{AB}}(B)$ signifie $\overrightarrow{BC} = \overrightarrow{AB}$, c'est-à-dire $\overrightarrow{AB} = \overrightarrow{BC}$. Donc $B$ est le milieu du segment $[AC]$.

:::intuition
Retourner une translation, c'est **changer le signe de son vecteur** : on revient au point de départ en faisant le déplacement inverse.
:::

:::trap
Le sens compte : $t_{\overrightarrow{AB}}$ envoie $A$ sur $B$, pas $B$ sur $A$. L'ordre des lettres dans $\overrightarrow{AB}$ dit d'où l'on part et où l'on arrive.
:::
