---
uid: "0000182"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Les graphes"
source: "Bac ES Amérique du Nord 2009 (Série 10 — Graphes)"
title: "Randonnée dans les Alpes : Euler, coloriage et Dijkstra"
country: "France"
year: 2009
professor: null
difficulty: "Moyen"
points: null
tags: ["graphes", "chaine-eulerienne", "nombre-chromatique", "dijkstra", "matrice-adjacence"]
recommended: true
---

Un groupe d'amis organise une randonnée dans les Alpes. On a représenté ci-dessous par un graphe $G$ les sommets par lesquels ils peuvent choisir de passer ; les arêtes sont pondérées par les durées des trajets.

![Graphe pondéré G de sommets B, C, D, F, N, T](/exercises/images/182-lycee-4eme-eco-les-graphes-0000182.png)

1. $G$ est-il complet ? connexe ?

2. Donner la matrice $M$ associée au graphe $G$ (sommets rangés dans l'ordre alphabétique).

3. Le groupe souhaite passer par les 6 sommets en empruntant une fois et une seule chaque trajet. Est-ce possible ?

4. On désire colorier ce graphe. On désigne par $\gamma(G)$ le nombre chromatique de $G$.

   a. Montrer que $4 \leq \gamma(G) \leq 6$.

   b. Calculer alors $\gamma(G)$.

5. Trouver le plus court chemin reliant le sommet $B$ au sommet $N$ en utilisant l'algorithme de Dijkstra.

---

## Solution

1. $G$ n'est pas complet : par exemple $B$ et $N$ ne sont pas adjacents.

   $G$ est connexe : la chaîne $B - C - D - T - N - F$ passe par tous les sommets, donc deux sommets quelconques sont reliés par une chaîne.

2. Dans l'ordre $B, C, D, F, N, T$ :

   $$
   M = \begin{pmatrix} 0 & 1 & 0 & 1 & 0 & 0 \\ 1 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 1 & 1 & 0 \end{pmatrix}
   $$

3. Il s'agit de savoir si $G$ admet une chaîne eulérienne. Les degrés sont :

   | Sommet | $B$ | $C$ | $D$ | $F$ | $N$ | $T$ |
   |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
   | Degré | 2 | 4 | 4 | 5 | 3 | 4 |

   $G$ est connexe et exactement deux sommets, $F$ et $N$, sont de degré impair : d'après le théorème d'Euler, $G$ admet une chaîne eulérienne d'extrémités $N$ et $F$. C'est donc possible, à condition de partir de $N$ (ou de $F$) et d'arriver à l'autre.

   Exemple : $N - D - C - B - F - C - T - D - F - T - N - F$ (11 arêtes, toutes différentes).

4. a. Les sommets $C$, $D$, $F$, $T$ sont deux à deux adjacents : ils forment un sous-graphe complet d'ordre 4, qui exige 4 couleurs. Donc $\gamma(G) \geq 4$.

   Le plus grand degré est $\Delta = 5$ (sommet $F$), donc $\gamma(G) \leq \Delta + 1 = 6$.

   b. Coloriage à 4 couleurs : couleur 1 : $F$ ; couleur 2 : $C$ et $N$ ; couleur 3 : $B$ et $T$ ; couleur 4 : $D$.

   On vérifie qu'aucune arête ne relie deux sommets de même couleur ($C$–$N$ et $B$–$T$ ne sont pas des arêtes). Donc $\gamma(G) = 4$.

5. Algorithme de Dijkstra à partir de $B$ (on note « durée (sommet précédent) » ; la valeur fixée à chaque étape est en gras) :

   | $B$ | $C$ | $D$ | $F$ | $N$ | $T$ | Sommet fixé |
   |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
   | **0** | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $B$ |
   | | **12 (B)** | $\infty$ | 15 (B) | $\infty$ | $\infty$ | $C$ |
   | | | **14 (C)** | 15 (B) | $\infty$ | 17 (C) | $D$ |
   | | | | **15 (B)** | 26 (D) | 17 (C) | $F$ |
   | | | | | 26 (D) | **17 (C)** | $T$ |
   | | | | | **24 (T)** | | $N$ |

   En remontant les prédécesseurs : $N \leftarrow T \leftarrow C \leftarrow B$.

   Le plus court chemin est $B - C - T - N$, de durée $12 + 5 + 7 = 24$.

   *Remarque.* Le chemin $B - C - D - T - N$ a aussi une durée de $12 + 2 + 3 + 7 = 24$ : le plus court chemin n'est pas unique.
