---
uid: "0000142"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Déplacements - Antidéplacements"
source: "Bac 1990 principale, Ex. 2"
title: "Rotation, antidéplacement et lieu de milieux"
country: "Tunisie"
year: 1990
professor: null
difficulty: "Difficile"
points: 4
tags: ["bac", "rotation", "antideplacement", "symetrie-glissee", "lieu-geometrique"]
bac: "1990-principale-maths"
---

Dans le plan orienté, on considère un triangle $ABC$ non isocèle tel que $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \dfrac{\pi}{2}\ [2\pi]$. À tout point $M$ de la droite $(AB)$ on associe le point $N$ de la droite $(AC)$ tel que $M$ et $N$ soient dans un même demi-plan de bord $(BC)$ et $BM = CN$.

1. Montrer qu'il existe une unique rotation $\mathcal{R}$ telle que, pour tout point $M$ de $(AB)$, on a : $\mathcal{R}(M) = N$ et $\mathcal{R}(B) = C$. Préciser une mesure de son angle et construire son centre $\Omega$.

2. Soit $O$ le milieu du segment $[BC]$. On désigne par $S_{(O\Omega)}$ la symétrie orthogonale d'axe $(O\Omega)$ et on pose : $f = S_{(O\Omega)} \circ \mathcal{R}$.

   a. Déterminer $f(B)$ et $f(\Omega)$.

   b. Préciser la nature et les éléments caractéristiques de $f$.

3. Soit $I$ le milieu du segment $[MN]$.

   a. Quel est l'ensemble $D$ des points $I$ lorsque $M$ décrit la droite $(AB)$ ?

   b. Construire $D$.

---

## Solution

1. $BC \neq 0$, donc il existe une unique rotation $\mathcal{R}$ d'angle $\theta = \left(\widehat{\overrightarrow{BA}, \overrightarrow{CA}}\right)$ qui envoie $B$ sur $C$.

   Or $\left(\widehat{\overrightarrow{BA}, \overrightarrow{CA}}\right) = \left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \dfrac{\pi}{2}\ [2\pi]$ (on change le sens des deux vecteurs).

   Soit $M \in (AB)$ et $N$ le point associé. $M$ et $N$ sont du même côté de $(BC)$ : si $M$ est sur la demi-droite $[BA)$, alors $N$ est sur $[CA)$, et sinon $M$ et $N$ sont tous les deux de l'autre côté. Dans les deux cas $\left(\widehat{\overrightarrow{BM}, \overrightarrow{CN}}\right) \equiv \dfrac{\pi}{2}\ [2\pi]$ et $BM = CN$.

   Donc $\overrightarrow{CN}$ est l'image de $\overrightarrow{BM}$ par la rotation vectorielle d'angle $\dfrac{\pi}{2}$ : $\mathcal{R}(M) = N$. L'unicité vient de $\mathcal{R}(B) = C$.

   Le centre $\Omega$ vérifie $\Omega B = \Omega C$ et $\left(\widehat{\overrightarrow{\Omega B}, \overrightarrow{\Omega C}}\right) \equiv \dfrac{\pi}{2}\ [2\pi]$ : le triangle $B\Omega C$ est rectangle isocèle en $\Omega$, direct.

   Construction : $\Omega$ est sur la médiatrice de $[BC]$ et sur le cercle de diamètre $[BC]$ (qui passe par $A$), du même côté de $(BC)$ que $A$. C'est le point de ce cercle tel que $(A\Omega)$ soit la bissectrice extérieure de l'angle $\widehat{BAC}$.

2. a. La médiatrice de $[BC]$ est $(O\Omega)$, donc $S_{(O\Omega)}$ échange $B$ et $C$ :

   $f(B) = S_{(O\Omega)}(C) = B$ et $f(\Omega) = S_{(O\Omega)}(\Omega) = \Omega$.

   b. $f$ est la composée d'un déplacement et d'un antidéplacement : c'est un antidéplacement.

   Il fixe deux points distincts $B$ et $\Omega$ : c'est la symétrie orthogonale d'axe $(B\Omega)$.

3. a. Dans le repère complexe de centre $\Omega$, $\mathcal{R}$ s'écrit $z \mapsto iz$. Le milieu $I$ de $[M\,\mathcal{R}(M)]$ a pour affixe $\dfrac{z + iz}{2} = \dfrac{1 + i}{2}\,z$.

   $I$ est donc l'image de $M$ par la similitude directe $\sigma$ de centre $\Omega$, de rapport $\dfrac{\sqrt2}{2}$ et d'angle $\dfrac{\pi}{4}$.

   Quand $M$ décrit la droite $(AB)$, $I$ décrit la droite $D = \sigma\big((AB)\big)$.

   b. $D$ passe par $\sigma(B) = O$ (milieu de $[B\,\mathcal{R}(B)] = [BC]$) et fait un angle de $\dfrac{\pi}{4}$ avec $(AB)$ : c'est la parallèle à la bissectrice intérieure de $\widehat{BAC}$ passant par $O$ (perpendiculaire à $(A\Omega)$).

   On peut aussi placer un second point : $\sigma(A)$, milieu de $[A\,\mathcal{R}(A)]$.
