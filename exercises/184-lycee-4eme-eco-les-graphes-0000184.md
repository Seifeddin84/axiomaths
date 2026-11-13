---
uid: "0000184"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Les graphes"
source: "Série 10 — Graphes (Bac Économie et Gestion)"
title: "Graphe orienté défini par sa matrice d'adjacence"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["graphes", "graphe-oriente", "matrice-adjacence", "chaine-eulerienne", "cycle-eulerien"]
---

Soit un graphe $G$ dont la matrice d'adjacence est la suivante :

$$
M = \begin{pmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 & 0 \end{pmatrix}
$$

1. $G$ est-il orienté ou non orienté ? Justifier.

2. Quel est l'ordre de $G$ ?

3. Représenter $G$.

4. $G$ admet-il un cycle eulérien ? Justifier.

5. $G$ admet-il une chaîne eulérienne ? Justifier.

---

## Solution

1. $M$ n'est pas symétrique : par exemple $m_{12} = 1$ mais $m_{21} = 0$. Il y a un arc du sommet 1 vers le sommet 2 mais pas de retour : $G$ est **orienté**.

2. $M$ est d'ordre 5, donc $G$ a 5 sommets : il est d'ordre 5.

3. Notons $A$, $B$, $C$, $D$, $E$ les sommets correspondant aux lignes (et colonnes) 1 à 5. Le terme $m_{ij} = 1$ donne un arc de la ligne $i$ vers la colonne $j$ :

   $A \to B$, $\quad B \to C$, $\quad C \to B$, $C \to D$, $C \to E$, $\quad D \to B$, $D \to C$, $D \to E$, $\quad E \to A$, $E \to C$.

   ![Graphe orienté G à 5 sommets et 10 arcs](/exercises/images/184-lycee-4eme-eco-les-graphes-0000184.png)

4. Degrés sortants (sommes des lignes) et entrants (sommes des colonnes) :

   | Sommet | $A$ | $B$ | $C$ | $D$ | $E$ |
   |:-:|:-:|:-:|:-:|:-:|:-:|
   | $d^+$ | 1 | 1 | 3 | 3 | 2 |
   | $d^-$ | 1 | 3 | 3 | 1 | 2 |
   | $d^+ - d^-$ | 0 | $-2$ | 0 | 2 | 0 |

   $d^+(B) \neq d^-(B)$ : la condition « $d^+ = d^-$ pour tout sommet » n'est pas vérifiée, donc $G$ n'admet pas de cycle eulérien.

5. Pour une chaîne eulérienne il faudrait un sommet avec $d^+ - d^- = 1$, un sommet avec $d^+ - d^- = -1$ et $d^+ = d^-$ ailleurs. Ici $d^+(D) - d^-(D) = 2$ et $d^+(B) - d^-(B) = -2$ : $G$ n'admet pas de chaîne eulérienne.

   *Remarque.* Intuitivement, $B$ reçoit trois arcs mais n'en émet qu'un : on y entrerait deux fois « de trop » sans pouvoir en ressortir. Les conditions sont rappelées dans l'[exercice n°181](/lycee/4eme/economie-et-gestion/les-graphes#ex-0000181).
