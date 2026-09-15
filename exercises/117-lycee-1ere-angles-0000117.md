---
uid: "0000117"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Séries n° 1"
title: "Cercle circonscrit, angles inscrits et bissectrice"
country: "Tunisie"
year: null
professor: "M. Zh Messai"
difficulty: "Moyen"
points: null
tags: ["cercle", "angles-inscrits", "triangle-isocele"]
---

Soit $ABC$ un triangle isocèle en $A$ inscrit dans un cercle $(\mathcal{C})$ de centre $O$ tels que :

- $\widehat{BAC} = 50^{\circ}$
- $[DC]$ est un diamètre de cercle $(\mathcal{C})$
- $[OI)$ est la bissectrice de l'angle $\widehat{BOC}$

![Figure](exercises/images/117-lycee-1ere-angles-0000117.png)

1. Calculer $\widehat{ABC}$ et $\widehat{BOC}$.

2. a. Montrer que $DBC$ est un triangle rectangle en $B$.

   b. Calculer $\widehat{BDC}$ et $\widehat{IDC}$.

3. Montrer que $(OI) // (BD)$.

---

## Solution

1. **Calcul des angles :**
   - Le triangle $ABC$ est isocèle en $A$, donc les angles à la base sont égaux :
     $\widehat{ABC} = \widehat{ACB} = \frac{180^{\circ} - 50^{\circ}}{2} = 65^{\circ}$.
   - L'angle $\widehat{BOC}$ est l'angle au centre associé à l'angle inscrit $\widehat{BAC}$ qui intercepte le même arc $[BC]$.
     On a donc $\widehat{BOC} = 2 \times \widehat{BAC} = 2 \times 50^{\circ} = 100^{\circ}$.

2. a. **Nature du triangle $DBC$ :**
   Le triangle $DBC$ est inscrit dans le cercle $(\mathcal{C})$ et un de ses côtés, $[DC]$, est un diamètre de ce cercle.
   Tout triangle inscrit dans un cercle dont un côté est un diamètre est un triangle rectangle. Donc, le triangle $DBC$ est rectangle en $B$.

   b. **Calcul de $\widehat{BDC}$ et $\widehat{IDC}$ :**
   - L'angle inscrit $\widehat{BDC}$ et l'angle inscrit $\widehat{BAC}$ interceptent le même arc de cercle $[BC]$.
     Ils sont donc égaux : $\widehat{BDC} = \widehat{BAC} = 50^{\circ}$.
   - La demi-droite $[OI)$ est la bissectrice de $\widehat{BOC} = 100^{\circ}$, donc $\widehat{IOC} = 50^{\circ}$.
     L'angle inscrit $\widehat{IDC}$ intercepte le même arc $[IC]$ que l'angle au centre $\widehat{IOC}$.
     Donc $\widehat{IDC} = \frac{\widehat{IOC}}{2} = \frac{50^{\circ}}{2} = 25^{\circ}$.

3. **Parallélisme de $(OI)$ et $(BD)$ :**
   - Le triangle $OBC$ est isocèle en $O$ (car $OB$ et $OC$ sont des rayons). Dans un triangle isocèle, la bissectrice de l'angle au sommet principal est aussi la hauteur issue de ce sommet. Donc $(OI) \perp (BC)$.
   - Le triangle $DBC$ est rectangle en $B$, ce qui implique que $(DB) \perp (BC)$.
   - Les droites $(OI)$ et $(BD)$ sont toutes deux perpendiculaires à la droite $(BC)$. Deux droites perpendiculaires à une même droite sont parallèles entre elles.
   Ainsi, $(OI) // (BD)$.