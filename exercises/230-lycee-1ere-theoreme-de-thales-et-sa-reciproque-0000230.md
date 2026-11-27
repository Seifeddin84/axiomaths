---
uid: "0000230"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa Réciproque"
source: "Axiomaths"
title: "Synthèse : milieux, diagonales et construction à la règle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "trapeze", "milieux", "diagonales"]
provenance: own
dressing: "synthèse : trapèze et construction à la règle"
rung: 5
---

Soit $ABCD$ un trapèze de bases $[AB]$ et $[DC]$, avec $AB<DC$. Ses côtés $(AD)$ et $(BC)$ se coupent en $S$, ses diagonales $[AC]$ et $[BD]$ en $O$. On note $I$ et $J$ les milieux de $[AB]$ et de $[DC]$.

![Figure de l'énoncé](/exercises/images/230-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000230.png)

1. La droite $(SI)$ coupe $(DC)$ en $J'$. Montrer que $\dfrac{AI}{DJ'}=\dfrac{SA}{SD}$ et $\dfrac{IB}{J'C}=\dfrac{SB}{SC}$, puis que $J'$ est le milieu de $[DC]$. Que peut-on dire des points $S$, $I$, $J$ ?

2. La droite $(IO)$ coupe $(DC)$ en $J''$. En utilisant deux configurations « papillon » de sommet $O$, montrer que $\dfrac{AI}{CJ''}=\dfrac{OI}{OJ''}=\dfrac{IB}{DJ''}$, puis que $J''=J$. Que peut-on dire des points $S$, $O$, $I$, $J$ ?

3. Application : $AB=4$, $DC=10$ et $SA=3$. Calculer $SD$ et $AD$, puis les rapports $\dfrac{SI}{SJ}$ et $\dfrac{OI}{OJ}$.

4. *Règle seule.* On donne un segment $[AB]$ et une droite $\Delta$ parallèle à $(AB)$. Expliquer comment construire le milieu de $[AB]$ en n'utilisant qu'une règle non graduée.

---

## Solution

> **Thalès et papillon.** $(MN)\parallel(BC)$ donne $\boxed{\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}}$. Si deux droites se coupent en $O$ et $(AB)\parallel(CD)$ : $\boxed{\dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac{AB}{CD}}$.

1. **Premier rapport.** Dans le triangle $SDJ'$ : $A\in[SD]$, $I\in[SJ']$ et $(AI)\parallel(DJ')$ (car $(AB)\parallel(DC)$). Thalès de sommet $S$ :

   $$\displaystyle \dfrac{SA}{SD}=\dfrac{SI}{SJ'}=\dfrac{AI}{DJ'}$$

   **Deuxième rapport.** Dans le triangle $SJ'C$ : $B\in[SC]$, $I\in[SJ']$ et $(IB)\parallel(J'C)$. Thalès de sommet $S$ :

   $$\displaystyle \dfrac{SB}{SC}=\dfrac{SI}{SJ'}=\dfrac{IB}{J'C}$$

   **Lien entre les deux.** Dans le triangle $SDC$, $(AB)\parallel(DC)$ donne $\dfrac{SA}{SD}=\dfrac{SB}{SC}$. Donc :

   $$\displaystyle \dfrac{AI}{DJ'}=\dfrac{IB}{J'C}$$

   Comme $I$ est le milieu de $[AB]$, on a $AI=IB$, donc $DJ'=J'C$.

   $J'$ est le milieu de $[DC]$ : c'est $J$. Les points $S$, $I$, $J$ sont **alignés**.

2. Les points $A,O,C$ sont alignés, les points $I,O,J''$ aussi, et $(AI)\parallel(CJ'')$ : triangles $OAI$ et $OCJ''$ de sommet $O$.

   $$\displaystyle \dfrac{OA}{OC}=\dfrac{OI}{OJ''}=\dfrac{AI}{CJ''}$$

   Les points $B,O,D$ sont alignés, les points $I,O,J''$ aussi, et $(IB)\parallel(DJ'')$ : triangles $OBI$ et $ODJ''$ de sommet $O$.

   $$\displaystyle \dfrac{OB}{OD}=\dfrac{OI}{OJ''}=\dfrac{IB}{DJ''}$$

   Les deux membres de gauche sont égaux à $\dfrac{OI}{OJ''}$ :

   $$\displaystyle \dfrac{AI}{CJ''}=\dfrac{IB}{DJ''}$$

   Avec $AI=IB$ : $CJ''=DJ''$. Donc $J''$ est le milieu de $[DC]$, c'est-à-dire $J''=J$.

   Les quatre points $S$, $O$, $I$, $J$ sont alignés : la droite $(SO)$ passe par les milieux des deux bases.

3. $(AB)\parallel(DC)$ dans le triangle $SDC$ :

   $$\displaystyle \dfrac{SA}{SD}=\dfrac{AB}{DC}=\dfrac4{10}=\dfrac25$$

   $$\displaystyle SD=\dfrac{SA\times5}2=\dfrac{3\times5}2=7{,}5\qquad AD=SD-SA=7{,}5-3=4{,}5$$

   Dans le triangle $SDJ$, $(AI)\parallel(DJ)$ :

   $$\displaystyle \dfrac{SI}{SJ}=\dfrac{SA}{SD}=\boxed{\dfrac25}$$

   Triangles $OAI$ et $OCJ$ de sommet $O$ (avec $AI=2$ et $CJ=5$) :

   $$\displaystyle \dfrac{OI}{OJ}=\dfrac{OA}{OC}=\dfrac{AI}{CJ}=\boxed{\dfrac25}$$

4. On construit le milieu de $[AB]$ avec la règle seule.

   **Étape 1 :** on choisit deux points $C$ et $D$ sur la droite $\Delta$ (avec $ABCD$ non croisé et $DC\neq AB$). Alors $ABCD$ est un trapèze de bases $[AB]$ et $[DC]$.

   **Étape 2 :** on trace $(AD)$ et $(BC)$ : leur point d'intersection est $S$.

   **Étape 3 :** on trace $(AC)$ et $(BD)$ : leur point d'intersection est $O$.

   **Étape 4 :** on trace $(SO)$. D'après 1) et 2), cette droite passe par le milieu de $[AB]$ : elle coupe $[AB]$ en son milieu $I$.

**Idée :** le même milieu $I$ est « vu » depuis $S$ et depuis $O$ ; on compare deux rapports égaux dont un numérateur est coupé en deux.    **Piège :** confondre $\dfrac{SI}{SJ}$ (rapport de Thalès, $\dfrac25$) avec $\dfrac{SI}{IJ}$.
