---
uid: "0000181"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Les graphes"
source: "Série 10 — Graphes (Bac Économie et Gestion)"
title: "Théorème d'Euler : graphes orientés et non orientés"
country: "Tunisie"
year: null
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["graphes", "theoreme-d-euler", "chaine-eulerienne", "cycle-eulerien", "graphe-oriente"]
---

Donner les conditions pour qu'un graphe ait :

1. Une chaîne eulérienne.

2. Un cycle eulérien.

On distinguera les graphes orientés et les graphes non orientés.

---

## Solution

Dans tous les cas le graphe doit être **connexe** (sinon on ne peut pas parcourir toutes ses arêtes d'un seul trajet).

**Graphe non orienté** (théorème d'Euler) :

1. Un graphe connexe admet une chaîne eulérienne si et seulement si le nombre de sommets de degré impair vaut **0 ou 2**.

   S'il y en a 2, toute chaîne eulérienne a pour extrémités ces deux sommets.

2. Un graphe connexe admet un cycle eulérien si et seulement si **tous ses sommets sont de degré pair**.

**Graphe orienté** :

1. Un graphe orienté connexe admet une chaîne eulérienne (non fermée) si et seulement si il existe un sommet $X$ avec $d^+(X) - d^-(X) = 1$ (départ), un sommet $Y$ avec $d^+(Y) - d^-(Y) = -1$ (arrivée), et $d^+ = d^-$ pour tous les autres sommets.

2. Un graphe orienté connexe admet un cycle eulérien si et seulement si $d^+(X) = d^-(X)$ pour **tout** sommet $X$.

*Remarque.* Le nombre de sommets de degré impair est toujours pair : la somme des degrés vaut deux fois le nombre d'arêtes. C'est pourquoi on ne rencontre jamais « exactement 1 » sommet de degré impair.

Le vocabulaire est rappelé dans l'[exercice n°180](/lycee/4eme/economie-et-gestion/les-graphes#ex-0000180). Applications : l'[exercice n°183](/lycee/4eme/economie-et-gestion/les-graphes#ex-0000183) (graphe non orienté) et l'[exercice n°184](/lycee/4eme/economie-et-gestion/les-graphes#ex-0000184) (graphe orienté).
