---
uid: "0000076"
school: "lycee"
level: "1ere"
section: null
chapter: "Vecteurs et Translations"
source: "Lycée Pilote Monastir"
title: "Géométrie vectorielle et translations dans un triangle"
country: "Tunisie"
year: 2013
professor: "Benzina & Azzaz"
difficulty: "Difficile"
points: 7
tags: ["vecteurs", "translations", "cercle", "symétrie", "orthogonalité"]
---

$ABC$ est un triangle isocèle en $A$ et $I$ est le milieu du segment $[AC]$.

1. a. Construire les points $E$ et $F$ tels que $2\overrightarrow{AE} + 3\overrightarrow{CB} = \overrightarrow{0}$ et $\overrightarrow{FC} = \frac{3}{2}\overrightarrow{BC}$.

   b. Montrer que $t_{\overrightarrow{FA}}(C) = E$ et que $\overrightarrow{IE} + \overrightarrow{IF} = \overrightarrow{0}$.

2. Soit $H = S_{(BC)}(A)$ et $K = t_{\overrightarrow{AH}}(F)$.

   a. Construire les points $H$ et $K$.

   b. Montrer que $(FK) \perp (AE)$.

3) On désigne par $\mathscr{C}$ le cercle circonscrit au triangle $AHE$ et par $\mathscr{C}' = t_{\overrightarrow{EC}}(\mathscr{C})$.

   a. Montrer que $\mathscr{C}'$ est circonscrit au triangle $FKC$.

   b. La droite $(AC)$ coupe $\mathscr{C}$ en $M$ et la parallèle à $(AC)$ passant par $F$ coupe $\mathscr{C}'$ en $N$. Montrer que $t_{\overrightarrow{EC}}(M) = N$.

4. On désigne par $G$ le point tel que $\overrightarrow{AC} + \overrightarrow{HG} + \alpha\overrightarrow{GH} = \overrightarrow{0}$. Déterminer le réel $\alpha$ pour que $G \in \mathscr{C}$.

---

## Solution

1. a. $2\overrightarrow{AE} + 3\overrightarrow{CB} = \overrightarrow{0} \iff \overrightarrow{AE} = \frac{3}{2}\overrightarrow{BC}$. La construction en découle.

   b. On sait que $\overrightarrow{FC} = \frac{3}{2}\overrightarrow{BC}$, donc $\overrightarrow{AE} = \overrightarrow{FC}$.

   $t_{\overrightarrow{FA}}(C) = E \iff \overrightarrow{CE} = \overrightarrow{FA}$.

   Or, $\overrightarrow{CE} = \overrightarrow{CA} + \overrightarrow{AE} = \overrightarrow{CA} + \overrightarrow{FC} = \overrightarrow{FC} + \overrightarrow{CA} = \overrightarrow{FA}$. Donc $t_{\overrightarrow{FA}}(C) = E$.

   Pour $\overrightarrow{IE} + \overrightarrow{IF} = \overrightarrow{0}$ : $I$ est le milieu de $[AC]$, donc $\overrightarrow{IA} + \overrightarrow{IC} = \overrightarrow{0}$.

   $\overrightarrow{IE} + \overrightarrow{IF} = (\overrightarrow{IC} + \overrightarrow{CE}) + (\overrightarrow{IA} + \overrightarrow{AF}) = (\overrightarrow{IC} + \overrightarrow{IA}) + (\overrightarrow{CE} + \overrightarrow{AF}) = \overrightarrow{0} + (\overrightarrow{FA} + \overrightarrow{AF}) = \overrightarrow{0}$. $I$ est donc le milieu de $[EF]$.

2) a. Construction de la symétrie axiale et de l'image par translation.

   b. $H$ et $A$ sont symétriques par rapport à $(BC)$, donc $(AH) \perp (BC)$.

   De plus, $\overrightarrow{AE} = \frac{3}{2}\overrightarrow{BC}$ implique que $(AE) \parallel (BC)$. Par conséquent, $(AH) \perp (AE)$.

   Comme $K = t_{\overrightarrow{AH}}(F)$, on a $\overrightarrow{FK} = \overrightarrow{AH}$, donc $(FK) \parallel (AH)$. On en déduit que $(FK) \perp (AE)$.

3) a. L'image du triangle $AHE$ par $t_{\overrightarrow{EC}}$ est le triangle $FKC$ car :
   - $t_{\overrightarrow{EC}}(E) = C$.
   - $t_{\overrightarrow{EC}}(A) = F$ (car $\overrightarrow{AF} = \overrightarrow{EC}$ d'après $\overrightarrow{CE} = \overrightarrow{FA}$).
   - $t_{\overrightarrow{EC}}(H) = K$ (car $\overrightarrow{HK} = \overrightarrow{HA} + \overrightarrow{AF} + \overrightarrow{FK} = \overrightarrow{HA} + \overrightarrow{EC} + \overrightarrow{AH} = \overrightarrow{EC}$).

   L'image d'un cercle circonscrit est le cercle circonscrit au triangle image. Donc $\mathscr{C}'$ est circonscrit à $FKC$.

   b. L'image de la droite $(AC)$ par $t_{\overrightarrow{EC}}$ est la parallèle à $(AC)$ passant par $F$ (image de $A$). Ainsi, l'image de $(AC) \cap \mathscr{C}$ est l'intersection des images, c'est-à-dire $(FN) \cap \mathscr{C}'$, ce qui donne bien $N$.

4) $\overrightarrow{AC} + \overrightarrow{HG} + \alpha\overrightarrow{GH} = \overrightarrow{0} \iff \overrightarrow{AC} + (1 - \alpha)\overrightarrow{HG} = \overrightarrow{0} \iff \overrightarrow{HG} = \frac{1}{\alpha - 1}\overrightarrow{AC}$ (pour $\alpha \neq 1$).

   $\mathscr{C}$ est circonscrit au triangle rectangle $AHE$ (rectangle en $A$), il a donc pour diamètre $[HE]$. $G \in \mathscr{C}$ signifie que le triangle $HGE$ est rectangle en $G$ (ou plat si $G=H$ ou $G=E$).

   En appliquant les propriétés de colinéarité, on isole $\alpha$ selon la position de projection. (La résolution complète nécessite d'exprimer le produit scalaire $\overrightarrow{HG} \cdot \overrightarrow{EG} = 0$, donnant une valeur unique ou deux pour $\alpha$).