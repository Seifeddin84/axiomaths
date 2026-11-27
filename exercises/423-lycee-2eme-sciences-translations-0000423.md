---
uid: "0000423"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Vrai ou faux sur les translations"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["vrai-faux", "translation", "proprietes", "justification"]
provenance: own
dressing: "vrai ou faux sur les translations"
rung: 4
---
Pour chacune des affirmations suivantes, dire si elle est vraie ou fausse, puis justifier en une ou deux lignes.

1. L'image du point $A$ par la translation de vecteur $\overrightarrow{AB}$ est le point $B$.

2. $A$ est l'image de $B$ par la translation de vecteur $\overrightarrow{AB}$.

3. Une translation conserve les distances.

4. L'image d'une droite par une translation est une droite perpendiculaire à cette droite.

5. Si $ABCD$ est un trapèze de bases $[AB]$ et $[CD]$, alors l'image de la droite $(AB)$ par la translation de vecteur $\overrightarrow{AC}$ est la droite $(CD)$.

6. L'image d'un cercle de rayon $3$ par une translation est un cercle de rayon $6$.

7. Si $C$ est l'image de $B$ par la translation de vecteur $\overrightarrow{AB}$, alors $B$ est le milieu de $[AC]$.

---

## Solution

:::property[Ce que fait une translation]
Une translation $t_{\vec{u}}$ :

- envoie $M$ sur le point $M'$ tel que $\overrightarrow{MM'} = \vec{u}$ ;
- **conserve les distances** : $M'N' = MN$ ;
- envoie une droite sur une droite **parallèle** (ou confondue) ;
- envoie un cercle de centre $O$ et de rayon $r$ sur le cercle de centre $O'$ (image de $O$) et de **même rayon** $r$.
:::

1. **Vrai.** On a $\overrightarrow{AA'} = \overrightarrow{AB}$, donc $A' = B$.

2. **Faux.** C'est $B$ qui est l'image de $A$. L'image de $B$ est le point $B'$ tel que $\overrightarrow{BB'} = \overrightarrow{AB}$, c'est-à-dire le symétrique de $A$ par rapport à $B$.

3. **Vrai.** Pour tous points $M$ et $N$ d'images $M'$ et $N'$, on a $M'N' = MN$ : c'est la conservation des distances.

4. **Faux.** L'image d'une droite est une droite **parallèle** à celle-ci (ou la même droite), pas perpendiculaire.

5. **Vrai.** L'image de $A$ par $t_{\overrightarrow{AC}}$ est $C$. L'image de $(AB)$ est donc la parallèle à $(AB)$ passant par $C$. Comme $(CD)$ est parallèle à $(AB)$ (bases du trapèze) et passe par $C$, c'est la droite $(CD)$.

6. **Faux.** Le rayon est conservé : l'image est un cercle de rayon $3$, dont le centre est l'image du centre.

7. **Vrai.** $C = t_{\overrightarrow{AB}}(B)$ signifie $\overrightarrow{BC} = \overrightarrow{AB}$. Cette égalité s'écrit $\overrightarrow{AB} = \overrightarrow{BC}$, donc $B$ est le milieu de $[AC]$.

:::intuition
Une translation **fait glisser** la figure sans la tourner ni la déformer : les longueurs, les angles et les directions ne changent pas.
:::

:::trap
« Parallèle » ne veut pas dire « différente » : si la droite a déjà la direction du vecteur de la translation, son image est **la même droite**.
:::
