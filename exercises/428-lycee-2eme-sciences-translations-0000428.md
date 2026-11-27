---
uid: "0000428"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Images de droites, de segments et de demi-droites"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["translation", "parallelogramme", "droites"]
provenance: own
dressing: "images de droites, segments et demi-droites"
rung: 2
---
Soit $ABCD$ un parallélogramme. Faire une figure, puis déterminer, en justifiant :

1. l'image de la droite $(AB)$ par la translation $t_{\overrightarrow{AD}}$ ;

2. l'image de la droite $(AD)$ par la translation $t_{\overrightarrow{AB}}$ ;

3. l'image de la droite $(BC)$ par la translation $t_{\overrightarrow{BA}}$ ;

4. l'image de la droite $(AB)$ par la translation $t_{\overrightarrow{DC}}$ ;

5. l'image du segment $[AD]$ par la translation $t_{\overrightarrow{AB}}$ ;

6. l'image de la demi-droite $[AB)$ par la translation $t_{\overrightarrow{AB}}$.

---

## Solution

![Parallélogramme ABCD, droites (AB) et (DC) prolongées](/exercises/images/428-lycee-2eme-sciences-translations-0000428.png)

:::property[Images de figures simples par une translation]
- L'image d'une **droite** est la droite **parallèle** qui passe par l'image d'un de ses points (ou la même droite).
- L'image d'un **segment** $[EF]$ est le segment $[E'F']$, de même longueur.
- L'image d'une **demi-droite** $[EF)$ est la demi-droite $[E'F')$.
- Dans un parallélogramme $ABCD$ : $\overrightarrow{AB} = \overrightarrow{DC}$ et $\overrightarrow{AD} = \overrightarrow{BC}$.
:::

1. L'image de $A$ par $t_{\overrightarrow{AD}}$ est $D$ (car $\overrightarrow{AA'} = \overrightarrow{AD}$).

   L'image de $(AB)$ est la parallèle à $(AB)$ passant par $D$. Comme $(DC) \parallel (AB)$, c'est la droite $(DC)$.

2. L'image de $A$ par $t_{\overrightarrow{AB}}$ est $B$. L'image de $(AD)$ est la parallèle à $(AD)$ passant par $B$. Comme $(BC) \parallel (AD)$, c'est la droite $(BC)$.

3. L'image de $B$ par $t_{\overrightarrow{BA}}$ est $A$. L'image de $(BC)$ est la parallèle à $(BC)$ passant par $A$. Comme $(AD) \parallel (BC)$, c'est la droite $(AD)$.

4. $\overrightarrow{DC} = \overrightarrow{AB}$, donc $t_{\overrightarrow{DC}} = t_{\overrightarrow{AB}}$. L'image de $A$ est $B$, qui est sur $(AB)$.

   L'image de $(AB)$ est la parallèle à $(AB)$ passant par $B$, c'est-à-dire la droite $(AB)$ **elle-même**. La droite $(AB)$ a la direction du vecteur de la translation : elle est globalement conservée.

5. L'image de $A$ par $t_{\overrightarrow{AB}}$ est $B$ et l'image de $D$ est $C$ (car $\overrightarrow{DC} = \overrightarrow{AB}$).

   L'image du segment $[AD]$ est donc le segment $[BC]$.

6. L'image de $A$ est $B$. L'image de $B$ est le point $B'$ tel que $\overrightarrow{BB'} = \overrightarrow{AB}$, c'est-à-dire le symétrique de $A$ par rapport à $B$.

   L'image de la demi-droite $[AB)$ est la demi-droite $[BB')$ : c'est la demi-droite d'origine $B$, portée par $(AB)$ et de même sens que $[AB)$.

:::intuition
Pour l'image d'une droite, **un seul point suffit** : on cherche où il va, puis on trace la parallèle passant par ce point.
:::

:::trap
Dans la question 4, il ne faut pas répondre « une droite parallèle à $(AB)$ » comme s'il s'agissait d'une autre droite : ici, c'est **la même droite**.
:::
