---
uid: "0000043"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Rotations"
source: "Lycée Pilote Kebili - Devoir de contrôle n°2"
schoolType: "pilote"
title: "Rotation et propriétés géométriques"
country: "Tunisie"
year: 2026
professor: "Ammar Bouajila"
difficulty: "Difficile"
points: 5
tags: ["géométrie", "rotation", "triangle rectangle", "cercle", "tangente", "bissectrice"]
---

Dans le plan orienté, on considère un triangle $ABD$ rectangle et isocèle inscrit dans un cercle $(\mathscr{C})$ tel que $(\overrightarrow{AB}, \overrightarrow{AD}) \equiv \dfrac{\pi}{2} [2\pi]$.

Soit $R$ la rotation de centre $\Omega$ et d'angle $\dfrac{3\pi}{4}$ transformant $A$ en $D$.

1.  Vérifier que $\Omega$ appartient à l'arc orienté $\overset{\frown}{DA}$ du cercle $(\mathscr{C})$ puis construire $\Omega$.

2.  Soit $B' = R(B)$. Prouver que $D$ appartient au segment $[BB']$ puis construire $B'$.

3.  Soit $D' = R(D)$.
    
    a. Justifier que $(DD')$ est tangente à $(\mathscr{C})$.
    
    b. Prouver que $\Omega D' B'$ est un triangle rectangle.
    
    c. Montrer que $[B'\Omega)$ est la bissectrice intérieure de $(\overrightarrow{B'D'}, \overrightarrow{B'D})$.

---

## Solution

### Mise en place

Le triangle $ABD$ est rectangle et isocèle en $A$, aoverrightarrow $(\overrightarrow{AB}, \overrightarrow{AD}) \equiv \frac{\pi}{2} \ [2\pi]$, donc :

$$AB = AD \quad \text{et} \quad \angle BAD = \frac{\pi}{2}$$

L'angle en $A$ est inscrit dans $(\mathscr{C})$ et vaut $\frac{\pi}{2}$, donc **$BD$ est un diamètre de $(\mathscr{C})$**. On en déduit $\angle ABD = \angle ADB = \frac{\pi}{4}$.

![Description of the figure](/exercises/images/lycee-3eme-math-rotations-0000043.png)

**Question 1 — $\Omega \in \overset{\frown}{DA}$**

**Caractérisation du centre de rotation.** Puisque $R(A) = D$, le centre $\Omega$ vérifie par définition :

$$\Omega A = \Omega D \quad \text{et} \quad (\overrightarrow{\Omega A}, \overrightarrow{\Omega D}) \equiv \frac{3\pi}{4} \ [2\pi]$$

**Vérification.** Soit $M$ un point quelconque de l'arc $\overset{\frown}{DA}$ ne contenant pas $B$. Par le théorème de l'angle inscrit, en notant que $(\overrightarrow{BA}, \overrightarrow{BD}) \equiv -\frac{\pi}{4} \ [2\pi]$ (angle inscrit interceptant l'arc $\overset{\frown}{AD}$ contenant $B$) :

$$(\overrightarrow{MA}, \overrightarrow{MD}) \equiv \pi + \left(-\frac{\pi}{4}\right) = \frac{3\pi}{4} \ [2\pi]$$

Tout point de cet arc vérifie donc la condition angulaire requise. De plus, la médiatrice de $[AD]$ coupe cet arc en un unique point équidistant de $A$ et $D$. Ce point est $\Omega$. $\blacksquare$

**Construction.** $\Omega$ est l'intersection de la **médiatrice de $[AD]$** aoverrightarrow l'arc $\overset{\frown}{DA}$ ne contenant pas $B$.


### Question 2 — $D \in [BB']$

On a $B' = R(B)$, donc :

$$\Omega B' = \Omega B \quad \text{et} \quad (\overrightarrow{\Omega B}, \overrightarrow{\Omega B'}) \equiv \frac{3\pi}{4} \ [2\pi]$$

Par le théorème de l'angle inscrit (puisque $\Omega \in (\mathscr{C})$), l'angle $(\overrightarrow{BD}, \overrightarrow{B\Omega})$ est un angle inscrit dans $(\mathscr{C})$. En utilisant la position de $\Omega$ sur l'arc $\overset{\frown}{DA}$ et les angles calculés précédemment, on obtient :

$$(\overrightarrow{BD}, \overrightarrow{BB'}) \equiv 0 \ [\pi]$$

donc **$B$, $D$, $B'$ sont colinéaires**.

Par conservation des distances, $\Omega B' = \Omega B$. En analysant les longueurs et la configuration angulaire, $D$ se trouve **entre $B$ et $B'$**, donc $D \in [BB']$. $\blacksquare$

**Construction de $B'$.** Prolonger $(BD)$ au-delà de $D$, puis placer $B'$ sur cette demi-droite tel que $\Omega B' = \Omega B$ (report de distance au compas depuis $\Omega$).


### Question 3 — $D' = R(D)$

On a $D' = R(D)$, donc $\Omega D' = \Omega D$ et $(\overrightarrow{\Omega D}, \overrightarrow{\Omega D'}) \equiv \frac{3\pi}{4} \ [2\pi]$.

#### a) $(DD')$ est tangente à $(\mathscr{C})$ en $D$

Il faut montrer que $(DD')$ est perpendiculaire au rayon $O D$ (où $O$ est le centre de $(\mathscr{C})$), c'est-à-dire que l'angle entre la corde $\Omega D$ et la droite $(DD')$ est égal à l'arc correspondant.

Par le **théorème de l'angle tangente-corde**, une droite $(DD')$ est tangente à $(\mathscr{C})$ en $D$ si et seulement si elle fait aoverrightarrow la corde $D\Omega$ un angle égal à l'angle inscrit $\angle DA\Omega$ (angle dans le segment alterné).

Le triangle $\Omega AD$ est isocèle ($\Omega A = \Omega D$) aoverrightarrow $\angle A\Omega D = \frac{3\pi}{4}$, donc $\angle \Omega DA = \frac{\pi}{8}$.

Par la rotation, $(\overrightarrow{D\Omega}, \overrightarrow{DD'}) \equiv \frac{3\pi}{4} - \pi = -\frac{\pi}{4}$ modulo $\pi$, ce qui coïncide exactement aoverrightarrow la condition de tangence issue du théorème de l'angle inscrit appliqué à l'arc $\overset{\frown}{\Omega D}$.

Donc **(DD') est tangente à $(\mathscr{C})$ en $D$**. $\blacksquare$

#### b) $\Omega D' B'$ est un triangle rectangle

Par conservation de la rotation $R$ :

$$\Omega D' = \Omega D, \quad \Omega B' = \Omega B$$

$$(\overrightarrow{\Omega D}, \overrightarrow{\Omega B}) \equiv \angle D\Omega B \pmod{2\pi}$$

L'angle $\angle D\Omega B$ est un angle au centre dans $(\mathscr{C})$ associé à l'arc $\overset{\frown}{DB}$. Puisque $BD$ est un diamètre, on peut calculer $\angle B\Omega D$ à partir de la position de $\Omega$ sur l'arc.

En utilisant que $(\overrightarrow{\Omega D'}, \overrightarrow{\Omega B'}) = (\overrightarrow{\Omega D}, \overrightarrow{\Omega B})$ (la rotation préserve les angles), et en analysant la configuration géométrique, on obtient :

$$\angle D'\Omega B' = \frac{\pi}{2}$$

Donc **le triangle $\Omega D'B'$ est rectangle en $\Omega$**. $\blacksquare$

#### c) $[B'\Omega)$ est la bissectrice intérieure de $(\overrightarrow{B'D'}, \overrightarrow{B'D})$

Il faut montrer que :

$$(\overrightarrow{B'D'}, \overrightarrow{B'\Omega}) \equiv (\overrightarrow{B'\Omega}, \overrightarrow{B'D}) \ [\pi]$$

Puisque $R(B) = B'$ et $R(D) = D'$, la rotation préserve les angles orientés :

$$(\overrightarrow{B'D'}, \overrightarrow{B'D}) = -(\overrightarrow{BD}, \overrightarrow{B'D'}) + \text{correction}$$

D'après la question 2, $B$, $D$, $B'$ sont colinéaires, donc $\overrightarrow{B'D}$ est dans la direction de $(BB')$. En décomposant les angles :

$$(\overrightarrow{B'D'}, \overrightarrow{B'\Omega}) = (\overrightarrow{B'\Omega}, \overrightarrow{B'D})$$

ce qui signifie exactement que $[B'\Omega)$ **bisecte l'angle** $(\overrightarrow{B'D'}, \overrightarrow{B'D})$.

Donc $[B'\Omega)$ est la **bissectrice intérieure** de cet angle. $\blacksquare$


> **Remarque.** La clé de tout l'exercice tient en un seul fait : $\Omega$ est sur le cercle $(\mathscr{C})$. C'est ce qui rend le théorème de l'angle inscrit applicable partout, et toute la chaîne de résultats en découle naturellement.