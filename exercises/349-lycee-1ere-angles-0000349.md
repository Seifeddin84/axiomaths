---
uid: "0000349"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Lycée Ibn Elbaitar Mdjez El Bab : série d'exercices Angles (2015-2016)"
title: "Trapèze, triangle isocèle et bissectrice"
country: "Tunisie"
year: 2015
professor: "M. Béchir Zdiri"
difficulty: "Facile"
points: null
tags: ["trapeze", "triangle-isocele", "bissectrice", "angles-alternes-internes"]
provenance: scan
---

Soit $ABCD$ un trapèze de bases $[AD]$ et $[BC]$ tel que $AB=AD$ et $\widehat{DAB}=120°$.

![Trapèze ABCD de bases [AD] et [BC] avec un angle de 120° en A](/exercises/images/349-lycee-1ere-angles-0000349.png)

1. Calculer $\widehat{ADB}$.

2. Montrer que $[BD)$ est la bissectrice de l'angle $\widehat{ABC}$.

---

## Solution

:::property[Triangle isocèle]
Si un triangle est isocèle en $A$ (c'est-à-dire $AB=AD$), alors ses deux angles à la base sont égaux :

$$\boxed{\widehat{ABD}=\widehat{ADB}}$$

La somme des angles d'un triangle vaut $180°$.
:::

:::property[Angles alternes-internes]
Si deux droites sont **parallèles**, les angles alternes-internes formés avec une sécante sont **égaux**.
:::

1. Le triangle $ABD$ est isocèle en $A$ ($AB=AD$), donc $\widehat{ABD}=\widehat{ADB}$.

   La somme des angles vaut $180°$ :

   $$\displaystyle \widehat{ABD}+\widehat{ADB}=180°-\widehat{DAB}=180°-120°=60°$$

   Les deux angles étant égaux :

   $$\boxed{\widehat{ADB}=\dfrac{60°}{2}=30°}$$

   (et aussi $\widehat{ABD}=30°$).

2. Les bases $[AD]$ et $[BC]$ du trapèze sont parallèles : $(AD)\parallel(BC)$.

   La sécante $(BD)$ forme les angles alternes-internes $\widehat{ADB}$ et $\widehat{DBC}$, donc :

   $$\displaystyle \widehat{DBC}=\widehat{ADB}=30°$$

   On a donc $\widehat{ABD}=30°=\widehat{DBC}$ : la demi-droite $[BD)$ partage l'angle $\widehat{ABC}$ en deux angles égaux.

   **$[BD)$ est la bissectrice de l'angle $\widehat{ABC}$.**

   Contrôle : $\widehat{ABC}=30°+30°=60°$ et $\widehat{DAB}+\widehat{ABC}=120°+60°=180°$ : les angles en $A$ et $B$ d'un trapèze de bases $[AD]$ et $[BC]$ sont bien supplémentaires.

:::intuition
Un triangle isocèle donne deux angles égaux, des parallèles en donnent deux autres égaux : en les mettant bout à bout, la diagonale $[BD]$ coupe l'angle en deux.
:::

:::trap
Ne pas dire « $\widehat{ABD}=\widehat{DBC}$ car $[BD)$ est la bissectrice » : c'est ce qu'il faut **démontrer** ! On justifie l'égalité par les parallèles, puis on conclut.
:::
