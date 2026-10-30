---
uid: "0000034"
school: "lycee"
level: "1ere"
section: null
chapter: "Vecteurs et Translations"
source: "Lycée Rafeha MNIHLA - Devoir de Contrôle N°3"
title: "Configuration vectorielle dans un parallélogramme"
country: "Tunisie"
year: 2025
professor: "Ayari Lassaad"
difficulty: "Moyen"
points: 9
tags: ["vecteurs", "géométrie", "alignement", "milieu", "parallélogramme"]
---

Soit $ABCD$ un parallélogramme.
$I$ milieu de $[BC]$ et $J$ milieu de $[DC]$.

1.  Construire les points $H$ et $K$ tels que : $\vec{AC} = \vec{DH}$ et $\vec{IK} = \vec{AI}$.

2.  a) Montrer que $\vec{AB} = \vec{CK}$.

    b) En déduire que $C$ est le milieu de $[DK]$.

3.  Montrer que $\vec{DB} = \vec{HK}$.

4.  Soit $E$ le milieu de $[HK]$.
    Montrer que $A, C$ et $E$ sont alignés.

---

## Solution

2. a) $I$ est le milieu de $[BC]$ donc $\vec{AB} + \vec{AC} = 2\vec{AI}$.
   Or $\vec{IK} = \vec{AI}$ donc $\vec{AK} = \vec{AI} + \vec{IK} = 2\vec{AI} = \vec{AB} + \vec{AC}$.
   D'où $\vec{CK} = \vec{CA} + \vec{AK} = -\vec{AC} + \vec{AB} + \vec{AC} = \vec{AB}$.

   b) $ABCD$ est un parallélogramme donc $\vec{DC} = \vec{AB} = \vec{CK}$ : $C$ est le milieu de $[DK]$.

3. $\vec{HK} = \vec{HD} + \vec{DC} + \vec{CK} = -\vec{AC} + 2\vec{AB}$.
   $\vec{DB} = \vec{DA} + \vec{AB} = \vec{CB} + \vec{AB} = (\vec{AB} - \vec{AC}) + \vec{AB} = 2\vec{AB} - \vec{AC}$.
   Donc $\vec{DB} = \vec{HK}$.

4. $\vec{AH} = \vec{AD} + \vec{DH} = \vec{AD} + \vec{AC}$ et $\vec{AK} = \vec{AB} + \vec{AC}$.
   $E$ milieu de $[HK]$ : $\vec{AE} = \dfrac{1}{2}(\vec{AH} + \vec{AK}) = \dfrac{1}{2}(\vec{AB} + \vec{AD} + 2\vec{AC}) = \dfrac{1}{2}(3\vec{AC}) = \dfrac{3}{2}\vec{AC}$
   (car $\vec{AB} + \vec{AD} = \vec{AC}$). Les vecteurs $\vec{AE}$ et $\vec{AC}$ sont colinéaires : $A$, $C$ et $E$ sont alignés.