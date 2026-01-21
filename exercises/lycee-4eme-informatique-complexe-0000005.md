---
uid: "0000005"
school: "lycee"
level: "4eme"
section: "Informatique"
chapter: "Nombres Complexes"
source: "Révision hiver 2025"
title: "Affixes et représentation géométrique"
country: "Tunisie"
year: 2025
professor: "Axiomaths"
difficulty: "Facile"
points: 4
tags: ["module", "cercle", "affixe"]
---

Dans le plan rapporté à un repère orthonormé $(O,\vec{u},\vec{v})$, on considère les points A, B, C et D d'affixes respectives $a=-1+i$,

$b=-1-i$, $c=2i$ et $d=2-2i$.

1. Placer les points A, B, C et D dans le plan.
2. Calculer $\dfrac{c-a}{d-a}$ et en déduire la nature du triangle ACD.
3. Montrer que les points A, B, C et D sont cocycliques.
 

---

## Solution

1. Placement des points dans le plan complexe
![Description of the figure](/exercises/images/lycee-4eme-informatique-complexe-0000005.png)

2.  $$\dfrac{c-a}{d-a}=\dfrac{2i-(-1+i)}{(2-2i)-(-1+i)}=\dfrac{2i+1-i}{2-2i+1-i}=\dfrac{1+i}{3-3i}=\dfrac{(1+i)(3+3i)}{|3-3i|^2}$$

    $$=\dfrac{3+3i+3i-3}{\sqrt{3^2+3^2}^2}=\dfrac{6i}{18}=\dfrac{1}{3}i$$

    $$\dfrac{c-a}{d-a}=\dfrac{1}{3}i \in i\mathbb{R}$$ est un imagnaire pure, donc les droites $(AC)$ et $(AD)$ sont perpendiculaires,

    Alors le triangle $ACD$ est un triangle rectangle en $A$

3.  Les points A, B, C et D sont cocycliques si et seulement si $\dfrac{c-a}{c-b}\times\dfrac{d-a}{d-b} \in \mathbb{R}$.

    Soit $$Z_1 = \dfrac{c-a}{c-b}$$

    $$Z_1 = \dfrac{2i - (-1+i)}{2i - (-1-i)} = \dfrac{1+i}{1+3i}$$

    $$Z_1 = \dfrac{(1+i)(1-3i)}{1^2 + 3^2} = \dfrac{1 - 3i + i - 3i^2}{10}$$

    $$Z_1 = \dfrac{1 - 2i + 3}{10} = \dfrac{4 - 2i}{10} = \dfrac{2-i}{5}$$


    $$Z_2 = \dfrac{d-a}{d-b}$$

    $$Z_2 = \dfrac{(2-2i) - (-1+i)}{(2-2i) - (-1-i)} = \dfrac{3-3i}{3-i}$$

    $$Z_2 = \dfrac{(3-3i)(3+i)}{3^2 + (-1)^2} = \dfrac{9 + 3i - 9i - 3i^2}{10}$$

    $$Z_2 = \dfrac{9 - 6i + 3}{10} = \dfrac{12 - 6i}{10} = \dfrac{6-3i}{5}$$

    On remarque que $Z_2 = 3 \times \left(\dfrac{2-i}{5}\right) = 3Z_1 \Longrightarrow \dfrac{Z_1}{Z_2} = \dfrac{1}{3} \in \mathbb{R}$.

    Donc les points $A, B, C$ et $D$ sont donc **cocycliques**.