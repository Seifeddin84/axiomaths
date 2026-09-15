---
uid: "0000121"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres complexes"
source: null
title: "Équations complexes et géométrie"
country: "Tunisie"
year: null
professor: "M Sadok Majdi"
difficulty: "Moyen"
points: null
tags: ["nombres-complexes", "equations", "geometrie", "trigonometrie"]
---

1. Résoudre dans $\mathbb{C}$ l'équation : $z^2 - \sqrt{3}z + 1 = 0$ et mettre les solutions sous forme trigonométrique.

2. Pour tout $\theta \in [0, 2\pi]$ on considère l'équation $(E_\theta): z^2 - \sqrt{3}e^{i\theta}z + e^{2i\theta} = 0$.

   a. Résoudre dans $\mathbb{C}$ l'équation $(E_\theta)$.

   b. Écrire les solutions de $(E_\theta)$ sous forme exponentielle.

3. Dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$ on considère les points $M_1$ et $M_3$ d'affixes respectives $z_1 = e^{i\left(\theta + \frac{\pi}{6}\right)}$ et $z_3 = e^{i\left(\theta - \frac{\pi}{6}\right)}$.

   a. Montrer que $OM_1M_3$ est un triangle équilatéral.

   b. Soit $M_2$ le point d'affixe $z_2$ tel que $OM_1M_2M_3$ soit un parallélogramme. Prouver que $OM_1M_2M_3$ est un losange et déterminer l'ensemble des points $M_2$ lorsque $\theta$ décrit $[0, 2\pi]$.

4. Soit $A$ le point du plan tel que $M_1$ est l'image de $M_3$ par la translation de vecteur $\overrightarrow{OA}$.

   a. Prouver que $A$ est d'affixe $e^{i\left(\theta + \frac{\pi}{2}\right)}$.

   b. Déterminer la nature et l'aire du triangle $OAM_1$.

---

## Solution

1. **Résolution de l'équation :**
   $z^2 - \sqrt{3}z + 1 = 0$
   Le discriminant est $\Delta = (-\sqrt{3})^2 - 4(1)(1) = 3 - 4 = -1 = i^2$.
   L'équation admet deux solutions complexes conjuguées :
   $z_1 = \frac{\sqrt{3} - i}{2} = \cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)$
   $z_2 = \frac{\sqrt{3} + i}{2} = \cos\left(\frac{\pi}{6}\right) + i\sin\left(\frac{\pi}{6}\right)$

2. a. **Résolution de $(E_\theta)$ :**
   $\Delta = (-\sqrt{3}e^{i\theta})^2 - 4(1)(e^{2i\theta}) = 3e^{2i\theta} - 4e^{2i\theta} = -e^{2i\theta} = (ie^{i\theta})^2$.
   Les solutions sont :
   $z'_1 = \frac{\sqrt{3}e^{i\theta} - ie^{i\theta}}{2} = e^{i\theta}\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)$
   $z'_2 = \frac{\sqrt{3}e^{i\theta} + ie^{i\theta}}{2} = e^{i\theta}\left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right)$

   b. **Forme exponentielle :**
   $z'_1 = e^{i\theta} e^{-i\frac{\pi}{6}} = e^{i\left(\theta - \frac{\pi}{6}\right)}$
   $z'_2 = e^{i\theta} e^{i\frac{\pi}{6}} = e^{i\left(\theta + \frac{\pi}{6}\right)}$

3. a. **Nature du triangle $OM_1M_3$ :**
   $OM_1 = |z_1| = \left|e^{i\left(\theta + \frac{\pi}{6}\right)}\right| = 1$.
   $OM_3 = |z_3| = \left|e^{i\left(\theta - \frac{\pi}{6}\right)}\right| = 1$.
   $M_1M_3 = |z_3 - z_1| = \left|e^{i\theta} \left(e^{-i\frac{\pi}{6}} - e^{i\frac{\pi}{6}}\right)\right| = \left|-2i \sin\left(\frac{\pi}{6}\right)\right| = |-i| = 1$.
   Comme $OM_1 = OM_3 = M_1M_3 = 1$, le triangle $OM_1M_3$ est équilatéral.

   b. **Nature de $OM_1M_2M_3$ et lieu de $M_2$ :**
   Puisque $OM_1M_2M_3$ est un parallélogramme, $\overrightarrow{OM_2} = \overrightarrow{OM_1} + \overrightarrow{OM_3}$.
   De plus, les côtés consécutifs $OM_1$ et $OM_3$ sont de même longueur ($OM_1 = OM_3 = 1$). Un parallélogramme ayant deux côtés consécutifs isométriques est un losange.
   L'affixe de $M_2$ est :
   $z_2 = z_1 + z_3 = e^{i\theta} \left( e^{i\frac{\pi}{6}} + e^{-i\frac{\pi}{6}} \right) = e^{i\theta} \left( 2\cos\left(\frac{\pi}{6}\right) \right) = \sqrt{3}e^{i\theta}$.
   Puisque $|z_2| = \sqrt{3}$, l'ensemble des points $M_2$ lorsque $\theta$ décrit $[0, 2\pi]$ est le cercle de centre $O$ et de rayon $\sqrt{3}$.

4. a. **Affixe de $A$ :**
   $M_1$ est l'image de $M_3$ par la translation de vecteur $\overrightarrow{OA} \iff \overrightarrow{M_3M_1} = \overrightarrow{OA}$.
   En affixes, $z_A = z_1 - z_3$.
   $z_A = e^{i\left(\theta + \frac{\pi}{6}\right)} - e^{i\left(\theta - \frac{\pi}{6}\right)} = e^{i\theta} \left( 2i\sin\left(\frac{\pi}{6}\right) \right) = i e^{i\theta} = e^{i\frac{\pi}{2}} e^{i\theta} = e^{i\left(\theta + \frac{\pi}{2}\right)}$.

   b. **Nature et aire de $OAM_1$ :**
   $OA = |z_A| = 1$.
   $OM_1 = |z_1| = 1$.
   $AM_1 = |z_1 - z_A| = |z_3| = 1$.
   Le triangle $OAM_1$ est donc équilatéral (ses trois côtés mesurent $1$).
   Son aire est $\mathcal{A} = \frac{\sqrt{3}}{4} \times c^2 = \frac{\sqrt{3}}{4}$.