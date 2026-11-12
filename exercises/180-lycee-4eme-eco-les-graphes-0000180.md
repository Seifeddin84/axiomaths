---
uid: "0000180"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Les graphes"
source: "Série 10 — Graphes (Bac Économie et Gestion)"
title: "Vocabulaire des graphes"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["graphes", "vocabulaire", "definitions", "nombre-chromatique", "chaine-eulerienne"]
---

Définir les termes suivants :

- Graphe complet.
- Graphe connexe.
- Graphe orienté.
- Graphe non orienté.
- Degré d'un sommet.
- Nombre chromatique $\gamma$.
- Matrice d'adjacence (ou matrice associée).
- Chaîne.
- Cycle.
- Chaîne eulérienne.
- Cycle eulérien.

---

## Solution

- **Graphe complet** : graphe dont les sommets sont deux à deux adjacents (reliés par une arête). Un graphe complet d'ordre $n$ a $\dfrac{n(n - 1)}{2}$ arêtes.

- **Graphe connexe** : graphe dans lequel deux sommets quelconques sont toujours reliés par au moins une chaîne. Tout graphe complet est connexe.

- **Graphe orienté** : graphe dont les arêtes (appelées arcs) ne peuvent être parcourues que dans un sens, indiqué par une flèche.

- **Graphe non orienté** : graphe dont les arêtes peuvent être parcourues dans les deux sens.

- **Degré d'un sommet** : nombre d'arêtes dont ce sommet est une extrémité (une boucle compte deux fois). Dans un graphe orienté, on distingue le degré sortant $d^+$ (arcs qui partent du sommet) et le degré entrant $d^-$ (arcs qui y arrivent).

- **Nombre chromatique** $\gamma(G)$ : plus petit nombre de couleurs permettant de colorier les sommets de $G$ de sorte que deux sommets adjacents n'aient jamais la même couleur.

- **Matrice d'adjacence** d'un graphe d'ordre $n$ dont les sommets sont numérotés : matrice carrée d'ordre $n$ dont le terme $a_{ij}$ vaut 1 si les sommets $i$ et $j$ sont adjacents (s'il existe un arc de $i$ vers $j$, si le graphe est orienté) et 0 sinon. Elle est symétrique pour un graphe non orienté.

- **Chaîne** : suite ordonnée de sommets dans laquelle chaque sommet est adjacent au suivant. Sa longueur est le nombre d'arêtes parcourues.

- **Cycle** : chaîne fermée (le premier et le dernier sommet sont confondus) dont les arêtes sont toutes distinctes.

- **Chaîne eulérienne** : chaîne qui passe une fois et une seule par chaque arête du graphe.

- **Cycle eulérien** : chaîne eulérienne fermée.

*Remarque.* Les conditions d'existence d'une chaîne ou d'un cycle eulérien (théorème d'Euler) font l'objet de l'[exercice n°181](/lycee/4eme/economie-et-gestion/les-graphes#ex-0000181).
