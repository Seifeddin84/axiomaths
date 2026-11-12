---
uid: "0000183"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Les graphes"
source: "Série 10 — Graphes (Bac Économie et Gestion)"
title: "Graphe d'ordre 8 : Euler, coloriage et chaînes de longueur 3"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["graphes", "chaine-eulerienne", "nombre-chromatique", "matrice-adjacence", "puissance-de-matrice"]
---

On considère le graphe $G$ suivant :

![Graphe G de sommets A, B, C, D, E, F, G, H](/exercises/images/183-lycee-4eme-eco-les-graphes-0000183.png)

1. Quel est l'ordre de $G$ ?

2. $G$ est-il complet ? connexe ?

3. $G$ admet-il un cycle eulérien ?

4. Montrer que $G$ admet une chaîne eulérienne.

5. Montrer que $\gamma(G) = 3$, où $\gamma(G)$ est le nombre chromatique de $G$.

6. Déterminer la matrice $M$ associée au graphe $G$ (sommets rangés dans l'ordre alphabétique).

7. On donne :

   $$
   M^3 = \begin{pmatrix} 4 & 10 & 3 & 12 & 7 & 8 & 3 & 12 \\ 10 & 0 & 11 & 1 & 8 & 1 & 11 & 1 \\ 3 & 11 & 0 & 14 & 3 & 11 & 0 & 14 \\ 12 & 1 & 14 & 2 & 12 & 1 & 14 & 2 \\ 7 & 8 & 3 & 12 & 4 & 10 & 3 & 12 \\ 8 & 1 & 11 & 1 & 10 & 0 & 11 & 1 \\ 3 & 11 & 0 & 14 & 3 & 11 & 0 & 14 \\ 12 & 1 & 14 & 2 & 12 & 1 & 14 & 2 \end{pmatrix}
   $$

   Déterminer le nombre de chaînes de longueur 3 partant du sommet $C$ et arrivant au sommet $E$, et les citer.

---

## Solution

1. $G$ a 8 sommets : il est d'ordre 8.

2. $G$ n'est pas complet : par exemple $A$ et $C$ ne sont pas adjacents.

   $G$ est connexe : le cycle $A - B - C - D - E - F - G - H - A$ (le « tour » de la figure) passe par tous les sommets.

3. Les degrés sont :

   | Sommet | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ | $G$ | $H$ |
   |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
   | Degré | 4 | 3 | 4 | 4 | 4 | 3 | 4 | 4 |

   $B$ et $F$ sont de degré impair : tous les degrés ne sont pas pairs, donc $G$ n'admet pas de cycle eulérien.

4. $G$ est connexe et possède exactement deux sommets de degré impair ($B$ et $F$) : il admet une chaîne eulérienne, d'extrémités $B$ et $F$.

   Exemple : $B - A - D - C - B - G - D - E - A - H - E - F - C - H - G - F$ (15 arêtes).

5. $A$, $D$, $E$ sont deux à deux adjacents (triangle), donc $\gamma(G) \geq 3$.

   Coloriage à 3 couleurs : couleur 1 : $A$, $C$, $G$ ; couleur 2 : $B$, $D$, $F$, $H$ ; couleur 3 : $E$.

   Aucun couple de sommets de même couleur n'est relié par une arête, donc $\gamma(G) = 3$.

6. Dans l'ordre $A, B, C, D, E, F, G, H$ :

   $$
   M = \begin{pmatrix} 0 & 1 & 0 & 1 & 1 & 0 & 0 & 1 \\ 1 & 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\ 1 & 0 & 0 & 1 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \end{pmatrix}
   $$

7. Le nombre de chaînes de longueur 3 reliant $C$ à $E$ est le terme de $M^3$ situé ligne 3 ($C$), colonne 5 ($E$) : il vaut **3**.

   Ce sont : $C - B - A - E$, $\quad C - D - A - E$, $\quad C - H - A - E$.

   *Remarque.* Les seuls voisins de $E$ sont $A$, $D$, $F$, $H$ ; une chaîne $C - X - Y - E$ demande $Y$ voisin de $E$ et $X$ voisin commun de $C$ et $Y$. Seul $Y = A$ convient, avec $X \in \{B, D, H\}$.
