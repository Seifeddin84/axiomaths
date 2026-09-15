---
uid: "0000120"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Nombres complexes"
source: null
title: "Transformations complexes et parabole"
country: "Tunisie"
year: null
professor: null
difficulty: "Difficile"
points: null
tags: ["nombres-complexes", "coniques", "parabole", "lieux-geometriques"]
---

Le plan $\mathcal{P}$ est muni d'un repère orthonormé direct $(O, \overrightarrow{OA}, \overrightarrow{OB})$. Soit $M(z)$ un point de $\mathcal{P}$ distinct de $B$ et $M'(z')$ le point tel que $z' = \frac{iz}{\overline{z} + i}$.

1. a. Vérifier que pour tout $z \in \mathbb{C} \setminus \{i\}$, $z' - i = \frac{1 - 2\text{Im}(z)}{|z - i|^2}(z - i)$.

   b. En déduire que pour tout $M \in \mathcal{P} \setminus \{B\}$ ; $B$, $M$ et $M'$ sont alignés.

2. Soit $\Delta$ la droite d'équation $y = \frac{1}{2}$ et $(\Gamma)$ l'ensemble des points $M$ du plan tel que $BM = HM$ où $H$ est le projeté orthogonal de $M$ sur $\Delta$.

   a. Montrer que $(\Gamma)$ est la parabole d'équation $y = x^2 + \frac{3}{4}$ puis tracer $(\Gamma)$.

   b. Montrer que pour tout $M \in \mathcal{P} \setminus \{B\}$ ; $BM' \cdot BM = 2HM$.

   c. Montrer que $M'$ varie sur un cercle $(\mathcal{C})$ que l'on précisera lorsque $M$ varie sur $(\Gamma)$.

   d. Trouver alors une construction géométrique du point $M'$ à partir d'un point $M$ de $(\Gamma)$.

---

## Solution

1. a. **Vérification de l'égalité :**
   Calculons $z' - i$ :
   $z' - i = \frac{iz}{\overline{z} + i} - i = \frac{iz - i(\overline{z} + i)}{\overline{z} + i} = \frac{iz - i\overline{z} - i^2}{\overline{z} + i} = \frac{i(z - \overline{z}) + 1}{\overline{z} + i}$.
   On sait que $z - \overline{z} = 2i\text{Im}(z)$.
   Donc, $i(z - \overline{z}) = i(2i\text{Im}(z)) = -2\text{Im}(z)$.
   L'expression devient : $z' - i = \frac{1 - 2\text{Im}(z)}{\overline{z} + i}$.
   En multipliant le numérateur et le dénominateur par $(z - i)$, on obtient :
   $z' - i = \frac{1 - 2\text{Im}(z)}{\overline{z} + i} \times \frac{z - i}{z - i}$.
   Or, le dénominateur est $(\overline{z} + i)(z - i) = \overline{(z - i)}(z - i) = |z - i|^2$.
   D'où, $z' - i = \frac{1 - 2\text{Im}(z)}{|z - i|^2}(z - i)$.

   b. **Alignement des points :**
   Dans le repère $(O, \overrightarrow{OA}, \overrightarrow{OB})$, le point $B$ a pour affixe $z_B = i$.
   L'égalité précédente s'écrit $z_{M'} - z_B = k(z_M - z_B)$ avec $k = \frac{1 - 2\text{Im}(z)}{|z - i|^2}$.
   Puisque $\text{Im}(z) \in \mathbb{R}$ et $|z - i|^2 \in \mathbb{R}^*$, $k$ est un réel.
   Ceci traduit la relation vectorielle $\overrightarrow{BM'} = k\overrightarrow{BM}$.
   Les vecteurs $\overrightarrow{BM'}$ et $\overrightarrow{BM}$ sont colinéaires, donc les points $B$, $M$ et $M'$ sont alignés.

2. a. **Équation de $(\Gamma)$ :**
   Soit $M(x, y)$. Le point $B$ a pour coordonnées $(0, 1)$ et $H$, projeté de $M$ sur $\Delta : y = 1/2$, a pour coordonnées $(x, 1/2)$.
   $BM = \sqrt{x^2 + (y - 1)^2}$ et $HM = |y - 1/2|$.
   $M \in (\Gamma) \iff BM = HM \iff x^2 + (y - 1)^2 = (y - 1/2)^2$.
   En développant : $x^2 + y^2 - 2y + 1 = y^2 - y + 1/4$.
   On obtient $x^2 - y + 3/4 = 0$, soit $y = x^2 + \frac{3}{4}$.
   C'est l'équation d'une parabole de sommet $S(0, 3/4)$ et d'axe de symétrie l'axe des ordonnées.

   b. **Produit des distances :**
   À partir de la question 1.a, en passant au module :
   $BM' = |z' - i| = \left| \frac{1 - 2y}{BM^2} \right| BM = \frac{|1 - 2y|}{BM}$.
   Donc $BM' \cdot BM = |1 - 2y|$.
   Or, $|1 - 2y| = 2\left|\frac{1}{2} - y\right| = 2HM$.
   Ainsi, $BM' \cdot BM = 2HM$.

   c. **Lieu de $M'$ :**
   Si $M \in (\Gamma)$, alors $BM = HM$.
   L'égalité $BM' \cdot BM = 2HM$ devient $BM' \cdot HM = 2HM$.
   Puisque $M \in (\Gamma)$, son ordonnée $y \ge 3/4$, donc $y \neq 1/2$ et $HM \neq 0$.
   On peut simplifier par $HM$ pour obtenir $BM' = 2$.
   Le point $M'$ varie donc sur le cercle $(\mathcal{C})$ de centre $B$ et de rayon $2$.

   d. **Construction géométrique :**
   Pour $M \in (\Gamma)$, $y = x^2 + 3/4 \ge 3/4$.
   Le coefficient de colinéarité $k = \frac{1 - 2y}{BM^2}$ est donc strictement négatif (car $1 - 2(3/4) = -1/2 < 0$).
   Cela signifie que $\overrightarrow{BM'}$ et $\overrightarrow{BM}$ sont de sens contraires, c'est-à-dire que $B$ appartient au segment $[MM']$.
   **Construction :** Pour un point $M$ donné sur $(\Gamma)$, on trace la droite $(BM)$. Le point $M'$ est le point d'intersection de la droite $(BM)$ avec le cercle $(\mathcal{C})$ de centre $B$ et de rayon $2$, situé tel que $B$ soit entre $M$ et $M'$ (sur la demi-droite d'origine $B$ opposée à $[BM)$).