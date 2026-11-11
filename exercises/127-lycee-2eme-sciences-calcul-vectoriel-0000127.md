---
uid: "0000127"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Alignement de trois points dans un triangle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["vecteurs", "colinearite", "alignement", "base", "determinant"]
---
Soit $ABC$ un triangle. On note :

- $R$ le milieu de $[BC]$ ;
- $P$ le point tel que $\overrightarrow{AP} = \dfrac{2}{3}\overrightarrow{AB}$ ;
- $Q$ le symétrique de $A$ par rapport à $C$.

1. Faire une figure.

2. a. Exprimer $\overrightarrow{AQ}$ et $\overrightarrow{AR}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.

   b. Exprimer $\overrightarrow{PR}$ et $\overrightarrow{PQ}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.

   c. En déduire que $\overrightarrow{PQ} = 4\overrightarrow{PR}$. Que peut-on dire des points $P$, $Q$ et $R$ ?

3. On munit le plan du repère $\left(A, \overrightarrow{AB}, \overrightarrow{AC}\right)$.

   a. Donner les coordonnées des points $P$, $Q$ et $R$.

   b. Retrouver le résultat de la question 2.c à l'aide d'un déterminant.

4. Soit $x$ un réel et $M$ le point défini par $\overrightarrow{BM} = x\,\overrightarrow{BC}$.

   a. Montrer que $M$ a pour coordonnées $(1 - x, x)$ dans le repère $\left(A, \overrightarrow{AB}, \overrightarrow{AC}\right)$.

   b. Déterminer $x$ pour que les points $P$, $Q$ et $M$ soient alignés. Interpréter le résultat.

---

## Solution

2. a. $C$ est le milieu de $[AQ]$, donc $\overrightarrow{AQ} = 2\overrightarrow{AC}$.

   $R$ est le milieu de $[BC]$, donc $\overrightarrow{AR} = \dfrac{1}{2}\overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{AC}$.

   b. $\overrightarrow{PR} = \overrightarrow{AR} - \overrightarrow{AP} = \left(\dfrac{1}{2} - \dfrac{2}{3}\right)\overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{AC} = -\dfrac{1}{6}\overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{AC}$.

   $\overrightarrow{PQ} = \overrightarrow{AQ} - \overrightarrow{AP} = -\dfrac{2}{3}\overrightarrow{AB} + 2\overrightarrow{AC}$.

   c. $4\overrightarrow{PR} = -\dfrac{4}{6}\overrightarrow{AB} + 2\overrightarrow{AC} = -\dfrac{2}{3}\overrightarrow{AB} + 2\overrightarrow{AC} = \overrightarrow{PQ}$.

   Les vecteurs $\overrightarrow{PQ}$ et $\overrightarrow{PR}$ sont colinéaires : $P$, $Q$ et $R$ sont **alignés** (et $R$ est entre $P$ et $Q$, avec $PR = \dfrac{1}{4}PQ$).

3. a. $P\left(\dfrac{2}{3}, 0\right)$, $Q(0, 2)$ et $R\left(\dfrac{1}{2}, \dfrac{1}{2}\right)$.

   b. $\overrightarrow{PR} \begin{pmatrix} -\frac{1}{6} \\ \frac{1}{2} \end{pmatrix}$ et $\overrightarrow{PQ} \begin{pmatrix} -\frac{2}{3} \\ 2 \end{pmatrix}$ : $\det(\overrightarrow{PR}, \overrightarrow{PQ}) = -\dfrac{1}{6} \times 2 - \dfrac{1}{2} \times \left(-\dfrac{2}{3}\right) = -\dfrac{1}{3} + \dfrac{1}{3} = 0$.

4. a. $\overrightarrow{AM} = \overrightarrow{AB} + \overrightarrow{BM} = \overrightarrow{AB} + x(\overrightarrow{AC} - \overrightarrow{AB}) = (1 - x)\overrightarrow{AB} + x\overrightarrow{AC}$.

   b. $\overrightarrow{PM} \begin{pmatrix} \frac{1}{3} - x \\ x \end{pmatrix}$. $P$, $Q$, $M$ alignés $\iff \det(\overrightarrow{PM}, \overrightarrow{PQ}) = 0$ :

   $2\left(\dfrac{1}{3} - x\right) + \dfrac{2}{3}x = 0 \iff \dfrac{2}{3} - \dfrac{4}{3}x = 0 \iff x = \dfrac{1}{2}$.

   Le seul point de $(BC)$ aligné avec $P$ et $Q$ est le milieu $R$ de $[BC]$ : la droite $(PQ)$ coupe $(BC)$ en $R$.
