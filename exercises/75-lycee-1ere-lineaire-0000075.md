---
uid: "0000075"
school: "lycee"
level: "1ere"
section: null
chapter: "Fonctions linéaires et Affines"
source: "Lycée Pilote Monastir"
title: "Étude d'une fonction affine et aires"
country: "Tunisie"
year: 2013
professor: "Benzina & Azzaz"
difficulty: "Moyenne"
points: 6
tags: ["fonction-affine", "représentation-graphique", "alignement", "inéquations", "aire"]
---

On munit le plan d'un repère $(O, I, J)$ tel que $OI = OJ = 1$ et $(OI) \perp (OJ)$.
Soient les points $A(2, 0)$ et $B(-2, -2)$.
$f$ est la fonction affine telle que sa représentation graphique $\Delta_f$ passe par les points $A$ et $B$.

1. Vérifier que $f(x) = \frac{1}{2}x - 1$.

2. Tracer $\Delta_f$.

3. Soit $E(|t|, t^2 - 1)$, où $t$ est un réel. Déterminer $t$ pour que $A, B$ et $E$ soient alignés.

4. Calculer l'antécédent de $-3$ par $f$ puis résoudre graphiquement : $-3 \le f(x) < 0$.

5. Soit $x \in ]-\infty, 0[$. $M$ est un point de $\Delta_f$ d'abscisse $x$ et $H$ son projeté orthogonal sur la droite $(OI)$.

   a. Vérifier que l'aire du triangle $AMH$ est $A(x) = \frac{(x - 2)^2}{4}$.

   b. Déterminer les réels $x$ pour lesquels $A(x) \le 18$.

---

## Solution

1. On vérifie si les coordonnées de $A$ et $B$ satisfont l'équation $y = \frac{1}{2}x - 1$ :

   Pour $A(2, 0)$ : $\frac{1}{2}(2) - 1 = 1 - 1 = 0 = y_A$.

   Pour $B(-2, -2)$ : $\frac{1}{2}(-2) - 1 = -1 - 1 = -2 = y_B$.

   Donc $f(x) = \frac{1}{2}x - 1$.

2. $\Delta_f$ est la droite passant par les points $A(2, 0)$ et $B(-2, -2)$.

3. $A, B$ et $E$ sont alignés si et seulement si $E \in \Delta_f$, c'est-à-dire $y_E = f(x_E)$.

   $t^2 - 1 = \frac{1}{2}|t| - 1 \implies t^2 - \frac{1}{2}|t| = 0 \implies |t|(|t| - \frac{1}{2}) = 0$.

   Donc $|t| = 0$ ou $|t| = \frac{1}{2}$. Les solutions sont $t \in \{-\frac{1}{2}, 0, \frac{1}{2}\}$.

4. Antécédent de $-3$ : $f(x) = -3 \iff \frac{1}{2}x - 1 = -3 \iff \frac{1}{2}x = -2 \iff x = -4$.

   Résolution graphique de $-3 \le f(x) < 0$ : on cherche les abscisses des points de la droite situés entre les droites d'équation $y = -3$ et $y = 0$ (exclue). L'antécédent de $0$ est $2$. D'où $S = [-4, 2[$.

5. a. $M$ a pour coordonnées $(x, \frac{1}{2}x - 1)$. $H$ a pour coordonnées $(x, 0)$.
   Le triangle $AMH$ est rectangle en $H$.
   Comme $x < 0$, la distance $AH = |x_A - x_H| = |2 - x| = 2 - x$.
   La distance $MH = |y_M - y_H| = |\frac{1}{2}x - 1| = -(\frac{1}{2}x - 1) = 1 - \frac{1}{2}x$ (car $x < 0 \implies \frac{1}{2}x - 1 < 0$).
   L'aire est $A(x) = \frac{AH \times MH}{2} = \frac{(2 - x)(1 - \frac{1}{2}x)}{2} = \frac{(2 - x)(\frac{2 - x}{2})}{2} = \frac{(x - 2)^2}{4}$.
   
   b. $A(x) \le 18 \iff \frac{(x - 2)^2}{4} \le 18 \iff (x - 2)^2 \le 72 \iff -\sqrt{72} \le x - 2 \le \sqrt{72} \iff 2 - 6\sqrt{2} \le x \le 2 + 6\sqrt{2}$.
   Or $x \in ]-\infty, 0[$, donc l'ensemble des solutions est $S = [2 - 6\sqrt{2}, 0[$.