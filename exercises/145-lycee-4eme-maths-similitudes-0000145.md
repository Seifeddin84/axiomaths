---
uid: "0000145"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Similitudes"
source: "Bac 1990 contrôle, Ex. 2"
title: "Similitude, homothétie et rotation de même centre"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "similitude-directe", "homothetie", "rotation", "image-d-une-droite"]
bac: "1990-controle-maths"
---

Le plan $P$ est rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$.

1. Soit $g$ l'application de $P$ dans $P$ qui, au point $M$ d'affixe $z$, associe le point $M'$ d'affixe $z'$ tel que $z' = \left(1 - i\sqrt3\right)z + (1 + i)\sqrt3$. Déterminer la nature et les éléments caractéristiques de $g$.

2. Soit, dans le plan $P$, l'homothétie $h$ de centre $\Omega(1, -1)$ et de rapport $\dfrac12$. On pose $f = h \circ g$. Déterminer la nature et les éléments caractéristiques de l'application $f$.

3. Soit $D$ la droite dont une équation est $y = x$. Déterminer et construire l'image de $D$ par l'application $f$.

---

## Solution

1. $g$ est de la forme $z' = az + b$ avec $a = 1 - i\sqrt3 \neq 1$ : c'est une similitude directe.

   $|a| = 2$ et $a = 2\left(\dfrac12 - i\dfrac{\sqrt3}{2}\right) = 2e^{-i\pi/3}$ : rapport $2$, angle $-\dfrac{\pi}{3}$.

   Centre : $z = az + b \iff i\sqrt3\,z = (1 + i)\sqrt3 \iff z = \dfrac{1 + i}{i} = 1 - i$.

   $g$ est la similitude directe de centre $\Omega(1, -1)$, de rapport $2$ et d'angle $-\dfrac{\pi}{3}$.

2. $g$ et $h$ ont le même centre $\Omega$. Donc $f = h \circ g$ est la similitude directe de centre $\Omega$, de rapport $\dfrac12 \times 2 = 1$ et d'angle $-\dfrac{\pi}{3} + 0$.

   $f$ est la rotation de centre $\Omega(1, -1)$ et d'angle $-\dfrac{\pi}{3}$.

   Écriture complexe : $z' = e^{-i\pi/3}(z - 1 + i) + 1 - i = \dfrac{1 - i\sqrt3}{2}\,z + \dfrac{(\sqrt3 + 1) + i(\sqrt3 - 1)}{2}$.

3. L'image d'une droite par une rotation est une droite. On calcule deux images :

   $f(O)$ a pour affixe $\dfrac{(\sqrt3 + 1) + i(\sqrt3 - 1)}{2}$ et $f(1 + i) = 1 + \sqrt3$ (réel).

   $D' = f(D)$ passe par $f(O)\left(\dfrac{1 + \sqrt3}{2}, \dfrac{\sqrt3 - 1}{2}\right)$ et par $K(1 + \sqrt3, 0)$.

   Sa direction fait l'angle $\dfrac{\pi}{4} - \dfrac{\pi}{3} = -\dfrac{\pi}{12}$ avec $\vec{u}$ ; sa pente est $\tan\left(-\dfrac{\pi}{12}\right) = \sqrt3 - 2$.

   $D' : y = (\sqrt3 - 2)\left(x - 1 - \sqrt3\right)$.

   Construction : on trace $\Omega$, la droite $D$, et l'image de deux de ses points par la rotation (par exemple $O$ et le point $(1, 1)$, tourné de $60°$ dans le sens indirect autour de $\Omega$).
