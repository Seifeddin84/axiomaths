---
uid: "0000121"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Axiomaths"
title: "Le pentagone régulier et cos 36°"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["pentagone-regulier", "angle-inscrit", "triangle-isocele", "nombre-d-or", "trigonometrie"]
---
Soit $ABCDE$ un pentagone régulier inscrit dans un cercle $(\mathscr{C})$ de centre $O$. Les diagonales $[AC]$ et $[BE]$ se coupent en $I$.

![Pentagone régulier ABCDE inscrit dans un cercle de centre O, avec les diagonales AC et BE qui se coupent en I](/exercises/images/121-lycee-1ere-angles-0000121.png)

1. a. Calculer la mesure de l'angle au centre $\widehat{AOB}$.

   b. En déduire la mesure de l'angle $\widehat{ABC}$.

2. Calculer les mesures des angles $\widehat{BAC}$, $\widehat{AEB}$ et $\widehat{EAC}$.

3. a. Montrer que le triangle $IAB$ est isocèle en $I$.

   b. Montrer que le triangle $EAI$ est isocèle en $E$.

4. On suppose que $AB = 1$ et on pose $c = \cos 36°$.

   a. En utilisant le triangle isocèle $ABE$, montrer que $BE = 2c$.

   b. En utilisant le triangle isocèle $IAB$, montrer que $IB = \dfrac{1}{2c}$.

   c. En écrivant $BE = BI + IE$, montrer que $4c^2 - 2c - 1 = 0$.

5. a. Vérifier que $4c^2 - 2c - 1 = 4\left(c - \dfrac{1}{4}\right)^2 - \dfrac{5}{4}$.

   b. En déduire que $\cos 36° = \dfrac{1 + \sqrt{5}}{4}$.

   c. En déduire la valeur exacte du rapport $\dfrac{BE}{AB}$ (le **nombre d'or**).

---

## Solution

1. a. Les cinq côtés du pentagone interceptent cinq arcs égaux : $\widehat{AOB} = \dfrac{360°}{5} = 72°$.

   b. $\widehat{ABC}$ est un angle inscrit qui intercepte l'arc $\overset{\frown}{AEDC}$ (trois arcs de $72°$) : $\widehat{ABC} = \dfrac{3 \times 72°}{2} = 108°$.

2. Un angle inscrit qui intercepte un arc de $72°$ mesure $36°$ :

   $\widehat{BAC}$ intercepte l'arc $\overset{\frown}{BC}$ : $\widehat{BAC} = 36°$ ; $\widehat{AEB}$ intercepte l'arc $\overset{\frown}{AB}$ : $\widehat{AEB} = 36°$.

   $\widehat{EAC}$ intercepte l'arc $\overset{\frown}{EDC}$ (deux arcs) : $\widehat{EAC} = 72°$.

3. a. $\widehat{IAB} = \widehat{CAB} = 36°$ et $\widehat{IBA} = \widehat{EBA} = 36°$ (il intercepte l'arc $\overset{\frown}{AE}$) : $IAB$ est isocèle en $I$.

   b. $\widehat{EAI} = \widehat{EAC} = 72°$ et $\widehat{AEI} = \widehat{AEB} = 36°$, donc $\widehat{AIE} = 180° - 72° - 36° = 72°$.

   Les angles en $A$ et en $I$ sont égaux : $EAI$ est isocèle en $E$, et $EI = EA = 1$.

4. a. $ABE$ est isocèle en $A$ ($AB = AE = 1$) avec $\widehat{ABE} = 36°$. Si $K$ est le milieu de $[BE]$, le triangle $ABK$ est rectangle en $K$ :

   $BK = AB\cos 36° = c$, donc $BE = 2c$.

   b. $IAB$ est isocèle en $I$ avec $\widehat{IBA} = 36°$. Si $L$ est le milieu de $[AB]$, le triangle $IBL$ est rectangle en $L$ :

   $BL = IB\cos 36°$, soit $\dfrac{1}{2} = IB \cdot c$, donc $IB = \dfrac{1}{2c}$.

   c. $I \in [BE]$, donc $BE = BI + IE$ : $2c = \dfrac{1}{2c} + 1$. On multiplie par $2c$ : $4c^2 = 1 + 2c$, soit $4c^2 - 2c - 1 = 0$.

5. a. $4\left(c - \dfrac{1}{4}\right)^2 - \dfrac{5}{4} = 4c^2 - 2c + \dfrac{1}{4} - \dfrac{5}{4} = 4c^2 - 2c - 1$.

   b. $\left(c - \dfrac{1}{4}\right)^2 = \dfrac{5}{16}$, donc $c = \dfrac{1}{4} + \dfrac{\sqrt{5}}{4}$ ou $c = \dfrac{1}{4} - \dfrac{\sqrt{5}}{4}$.

   Or $c = \cos 36° > 0$ et $\dfrac{1 - \sqrt{5}}{4} < 0$ : donc $\cos 36° = \dfrac{1 + \sqrt{5}}{4}$.

   c. $\dfrac{BE}{AB} = 2c = \dfrac{1 + \sqrt{5}}{2} \approx 1{,}618$.

*Remarque : $IB = \dfrac{1}{2c} = \dfrac{2}{1 + \sqrt{5}} = \dfrac{\sqrt{5} - 1}{2}$, donc $BE = 1 + IB$ et $\dfrac{BE}{AB} = \dfrac{AB}{IB}$ : la diagonale est au côté ce que le côté est au morceau $IB$. C'est la définition du nombre d'or.*
