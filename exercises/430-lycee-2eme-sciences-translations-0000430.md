---
uid: "0000430"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Translations"
source: "Axiomaths"
title: "Propriété caractéristique d'une translation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["translation", "vecteurs", "demonstration"]
provenance: adapted
adapted_from: "Manuel 2ème année, Tome 1, chapitre 7 (activité sur la propriété caractéristique), reformulée en questions guidées"
dressing: "propriété caractéristique d'une translation"
rung: 3
---
Soit $\vec{u}$ un vecteur, $t$ la translation de vecteur $\vec{u}$, et soient $M$ et $N$ deux points du plan d'images respectives $M'$ et $N'$ par $t$.

1. a. Écrire les égalités vectorielles qui traduisent $M' = t(M)$ et $N' = t(N)$.

   b. En utilisant la relation de Chasles, montrer que $\overrightarrow{M'N'} = \overrightarrow{MN}$.

2. En déduire que $M'N' = MN$. Si $M \neq N$, que peut-on dire des droites $(MN)$ et $(M'N')$ ?

3. Soit $f$ une application du plan dans le plan telle que, pour tous points $M$ et $N$ d'images $M'$ et $N'$ par $f$, on ait $\overrightarrow{M'N'} = \overrightarrow{MN}$. On fixe un point $A$ et on note $A' = f(A)$.

   a. Montrer que, pour tout point $M$ d'image $M'$ par $f$, on a $\overrightarrow{AM'} = \overrightarrow{AA'} + \overrightarrow{AM}$.

   b. En déduire que $f$ est la translation de vecteur $\overrightarrow{AA'}$.

---

## Solution

:::theorem[Propriété caractéristique d'une translation]
Une application $f$ du plan dans le plan est une translation si et seulement si, pour tous points $M$ et $N$ d'images $M'$ et $N'$ :
$$\boxed{\overrightarrow{M'N'} = \overrightarrow{MN}}$$
:::

:::property[Outil : la relation de Chasles]
$$\boxed{\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}} \qquad \overrightarrow{BA} = -\overrightarrow{AB}$$
:::

1. a. $M' = t(M)$ signifie $\overrightarrow{MM'} = \vec{u}$, et $N' = t(N)$ signifie $\overrightarrow{NN'} = \vec{u}$.

   b. On passe de $M'$ à $N'$ en faisant le détour par $M$ puis $N$ :

   $$\displaystyle \overrightarrow{M'N'} = \overrightarrow{M'M} + \overrightarrow{MN} + \overrightarrow{NN'}$$

   Or $\overrightarrow{M'M} = -\overrightarrow{MM'} = -\vec{u}$ et $\overrightarrow{NN'} = \vec{u}$. Donc

   $$\displaystyle \overrightarrow{M'N'} = -\vec{u} + \overrightarrow{MN} + \vec{u} = \overrightarrow{MN}$$

2. Deux vecteurs égaux ont la même norme : $M'N' = MN$. **Une translation conserve les distances.**

   Si $M \neq N$, les vecteurs $\overrightarrow{M'N'}$ et $\overrightarrow{MN}$ sont égaux, donc les droites $(MN)$ et $(M'N')$ sont **parallèles** (ou confondues).

3. a. Appliquons l'hypothèse aux points $A$ et $M$, d'images $A'$ et $M'$ : $\overrightarrow{A'M'} = \overrightarrow{AM}$.

   Par Chasles, $\overrightarrow{AM'} = \overrightarrow{AA'} + \overrightarrow{A'M'}$. Donc

   $$\overrightarrow{AM'} = \overrightarrow{AA'} + \overrightarrow{AM}$$

   b. Par Chasles aussi, $\overrightarrow{AM'} = \overrightarrow{AM} + \overrightarrow{MM'}$.

   On égalise les deux écritures de $\overrightarrow{AM'}$ :

   $$\overrightarrow{AM} + \overrightarrow{MM'} = \overrightarrow{AA'} + \overrightarrow{AM} \implies \overrightarrow{MM'} = \overrightarrow{AA'}$$

   Ceci est vrai pour **tout** point $M$ : $f$ associe à $M$ le point $M'$ tel que $\overrightarrow{MM'} = \overrightarrow{AA'}$. C'est la translation de vecteur $\overrightarrow{AA'}$.

:::intuition
Une translation déplace **tous** les points du même vecteur. La propriété $\overrightarrow{M'N'} = \overrightarrow{MN}$ dit exactement cela : le vecteur entre deux points ne change pas.
:::

:::trap
Dans la relation de Chasles, les lettres du milieu doivent **s'enchaîner** : $\overrightarrow{M'M} + \overrightarrow{MN} + \overrightarrow{NN'}$ va de $M'$ à $N'$ en passant par $M$ puis $N$.
:::
