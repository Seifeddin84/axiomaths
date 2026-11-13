---
title: "Les graphes"
slug: "lycee-4eme-economie-les-graphes"
school: "lycee"
level: "4eme"
sections: ["Economie et Gestion"]
chapter: "Les graphes"
summary: "Le vocabulaire des graphes, les chaînes et les cycles, la matrice associée, le théorème d'Euler, la coloration et le plus court chemin (algorithme de Dijkstra)."
prerequisites: ["Matrices et systèmes"]
source: "Fiche 8 « Graphes » de S. Talbi, reprise et complétée"
updated: "2026-11-13"
---

## Pourquoi ce chapitre ?

Un plan de métro, des routes entre des villes, des amis qui se connaissent : à chaque fois on ne garde que **qui est relié à qui**. On dessine des points et des traits, c'est un **graphe**. Et on pose des questions concrètes : peut-on parcourir toutes les routes sans repasser deux fois par la même ? Combien de fréquences faut-il pour que deux antennes voisines n'interfèrent pas ? Quel est le trajet le plus court ?

:::summary[L'essentiel]
- **Degré** d'un sommet : nombre d'arêtes qui y aboutissent. **Ordre** du graphe : nombre de sommets.
- **Chaîne** : suite de sommets adjacents deux à deux. **Cycle** : chaîne fermée, aux arêtes toutes distinctes.
- **Matrice associée** $M$ : $m_{ij} = 1$ si $i$ et $j$ sont adjacents, $0$ sinon. Le nombre de chaînes de longueur $p$ de $i$ à $j$ est le terme $(M^p)_{ij}$.
- **Euler** (graphe connexe) : un cycle eulérien existe $\iff$ tous les degrés sont pairs ; une chaîne eulérienne existe $\iff$ $0$ ou $2$ degrés impairs.
- **Coloration** : $N \le \gamma(G) \le \Delta + 1$.
- **Graphe pondéré** : le plus court chemin se trouve avec l'algorithme de Dijkstra.
:::

## 1. Vocabulaire

:::definition[Graphe]
Un **graphe** est un ensemble de **sommets** reliés par des **arêtes**. Deux sommets reliés par une arête sont **adjacents**.

- Une **boucle** est une arête dont l'origine et l'extrémité sont le même sommet.
- L'**ordre** du graphe est son nombre de sommets.
- Le **degré** d'un sommet est le nombre d'arêtes dont il est une extrémité (une boucle compte **deux fois**).
- Un graphe est **complet** si tous ses sommets sont adjacents deux à deux.
- Un **sous-graphe** est formé de certains sommets et de certaines arêtes du graphe.
- Un graphe est **connexe** si deux sommets quelconques sont toujours reliés par une chaîne. Tout graphe complet est connexe.
:::

![Une boucle, un graphe complet, un graphe non connexe](/lessons/images/eco-graphes-vocabulaire.svg "(a) La boucle en B compte pour 2 dans le degré de B. (b) Les 4 sommets sont adjacents deux à deux. (c) Aucune chaîne ne relie A à D : le graphe n'est pas connexe.")

Dans toute la suite, on travaille sur le graphe $G$ ci-dessous.

![Le graphe G, d'ordre 5](/lessons/images/eco-graphes-exemple.svg "Le graphe G : 5 sommets et 9 arêtes (AB, AC, AE, BC, BD, BE, CD, CE, DE).")

:::example
$G$ est d'ordre $5$. Il est connexe, mais pas complet : $A$ et $D$ ne sont pas adjacents.

| Sommet | $A$ | $B$ | $C$ | $D$ | $E$ |
|---|---|---|---|---|---|
| Degré | $3$ | $4$ | $4$ | $3$ | $4$ |
:::

:::remark
La somme des degrés vaut le **double** du nombre d'arêtes (chaque arête a deux extrémités). Ici $3 + 4 + 4 + 3 + 4 = 18 = 2 \times 9$ : bon moyen de vérifier ses degrés.
:::

## 2. Chaînes, cycles, distance

:::definition[Chaîne, cycle, distance, diamètre]
- Une **chaîne** est une liste ordonnée de sommets où chaque sommet est adjacent au suivant. Sa **longueur** est le nombre d'arêtes parcourues.
- Un **cycle** est une chaîne **fermée** (elle revient à son point de départ) dont les arêtes sont toutes distinctes.
- La **distance** entre deux sommets est la longueur de la plus courte chaîne qui les relie.
- Le **diamètre** du graphe est la plus grande distance entre deux sommets.
:::

:::example
Dans $G$ :

- $A - B - E - C - D$ est une chaîne de longueur $4$ ;
- $A - C - B - D - E - A$ est un cycle ;
- la distance de $A$ à $D$ est $2$ (par exemple $A - B - D$), car $A$ et $D$ ne sont pas adjacents ;
- tous les autres couples de sommets sont adjacents, donc le diamètre de $G$ est $2$.
:::

## 3. Matrice associée

:::definition[Matrice associée à un graphe]
On numérote les sommets. La **matrice associée** est la matrice carrée $M$ telle que $m_{ij} = 1$ si les sommets $i$ et $j$ sont adjacents, $m_{ij} = 0$ sinon.

Pour un graphe **non orienté**, elle est **symétrique**.
:::

:::example
Pour $G$, avec les sommets dans l'ordre $A, B, C, D, E$ :

$$M = \begin{pmatrix} 0 & 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 & 1 \\ 1 & 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 & 1 \\ 1 & 1 & 1 & 1 & 0 \end{pmatrix}.$$

La somme d'une ligne est le degré du sommet correspondant.
:::

:::property[Nombre de chaînes de longueur p]
Le nombre de chaînes de longueur $p$ entre les sommets $i$ et $j$ est le terme $(M^p)_{ij}$ de la matrice $M^p$.

Le diamètre d'un graphe connexe est le plus petit entier $d$ tel que la matrice $(M + I_n)^d$ **n'a aucun terme nul**.
:::

:::example
Le terme de $M^2$ en ligne $A$, colonne $D$ vaut $3$ : il y a $3$ chaînes de longueur $2$ entre $A$ et $D$, à savoir $A-B-D$, $A-C-D$ et $A-E-D$.

Pour le diamètre : $M + I_5$ a des zéros (en $AD$ et en $DA$), donc le diamètre est supérieur à $1$ ; $(M + I_5)^2$ n'en a plus, donc le diamètre est $2$. On retrouve le résultat du paragraphe 2.
:::

## 4. Graphes eulériens

:::definition[Chaîne et cycle eulériens]
Une **chaîne eulérienne** contient **une fois et une seule** chaque arête du graphe. Un **cycle eulérien** est une chaîne eulérienne **fermée**.
:::

:::theorem[Théorème d'Euler pour un graphe non orienté]
Soit $G$ un graphe **connexe**.

- $G$ admet un **cycle eulérien** si et seulement si **tous** ses degrés sont pairs.
- $G$ admet une **chaîne eulérienne** si et seulement si le nombre de sommets de degré impair vaut $0$ ou $2$. S'il y en a deux, la chaîne commence à l'un et finit à l'autre.

Ce théorème est admis.
:::

:::example
Dans $G$, seuls $A$ et $D$ ont un degré impair. Il y a donc une chaîne eulérienne, de $A$ à $D$ :

$$A - B - C - E - D - B - E - A - C - D.$$

Elle utilise bien les $9$ arêtes une seule fois chacune. Il n'y a pas de cycle eulérien. Si on ajoute l'arête $AD$, tous les degrés deviennent pairs et la chaîne se referme en cycle : $A - B - C - E - D - B - E - A - C - D - A$.
:::

Pour un graphe **orienté**, on compte le **degré sortant** $d^+(X)$ (nombre d'arcs qui partent de $X$) et le **degré entrant** $d^-(X)$ (nombre d'arcs qui arrivent en $X$).

![Un graphe orienté](/lessons/images/eco-graphes-oriente.svg "Arcs : B vers C, C vers A, A vers B, B vers E, A vers E, E vers D, D vers B, E vers C, C vers D.")

:::theorem[Théorème d'Euler pour un graphe orienté]
Soit $G$ un graphe orienté **connexe**.

- $G$ admet un **cycle eulérien** si et seulement si $d^+(X) = d^-(X)$ pour tout sommet $X$.
- $G$ admet une **chaîne eulérienne non fermée** si et seulement si $d^+(X) - d^-(X) = 1$ pour **un seul** sommet $X$ (le départ), $d^+(Y) - d^-(Y) = -1$ pour **un seul** sommet $Y$ (l'arrivée), et $d^+ = d^-$ pour tous les autres.

Ce théorème est admis.
:::

:::example
| Sommet | $A$ | $B$ | $C$ | $D$ | $E$ |
|---|---|---|---|---|---|
| $d^+$ | $2$ | $2$ | $2$ | $1$ | $2$ |
| $d^-$ | $1$ | $2$ | $2$ | $2$ | $2$ |
| $d^+ - d^-$ | $1$ | $0$ | $0$ | $-1$ | $0$ |

Seuls $A$ (différence $1$) et $D$ (différence $-1$) sont « déséquilibrés » : il y a une chaîne eulérienne qui part de $A$ et arrive en $D$, par exemple $A - E - D - B - E - C - A - B - C - D$.
:::

:::history[Math et culture]
En 1736, Euler a montré qu'on ne peut pas traverser une seule fois chacun des sept ponts de Königsberg (aujourd'hui Kaliningrad) : le graphe correspondant a quatre sommets de degrés $5, 3, 3, 3$, tous impairs. C'est la naissance de la théorie des graphes.
:::

## 5. Coloration

:::definition[Coloration et nombre chromatique]
**Colorer** un graphe, c'est donner une couleur à chaque sommet de sorte que **deux sommets adjacents n'aient jamais la même couleur**. Le plus petit nombre de couleurs nécessaires est le **nombre chromatique** $\gamma(G)$.
:::

:::property[Encadrement du nombre chromatique]
$$N \le \gamma(G) \le \Delta + 1,$$
où $N$ est l'ordre du plus grand **sous-graphe complet** de $G$ et $\Delta$ le plus grand degré des sommets.

Cette propriété est admise.
:::

![Une coloration de G avec 4 couleurs](/lessons/images/eco-graphes-coloration.svg "Quatre « couleurs » : blanc, noir, gris, hachuré. A et D, non adjacents, sont tous deux blancs.")

:::example
Dans $G$, les sommets $A, B, C, E$ sont adjacents deux à deux : c'est un sous-graphe complet d'ordre $4$, donc $N \ge 4$. Le plus grand degré est $\Delta = 4$. Ainsi $4 \le \gamma(G) \le 5$.

On colore $B$, $C$, $E$ de trois couleurs différentes, puis $A$ d'une quatrième. Le sommet $D$ n'est pas adjacent à $A$ : il peut prendre **la couleur de $A$**. Quatre couleurs suffisent, donc $\gamma(G) = 4$.
:::

## 6. Graphes pondérés, plus court chemin

:::definition[Graphe pondéré]
Un graphe est **pondéré** si chaque arête porte un nombre, son **poids** (une distance, un coût, une durée). Le **poids d'une chaîne** est la somme des poids de ses arêtes. On cherche la chaîne de **poids minimal** entre deux sommets.
:::

![Un graphe pondéré](/lessons/images/eco-graphes-pondere.svg "Le plus court chemin de C à E est C - A - B - E, tracé en trait épais : 7 + 5 + 6 = 18.")

:::method[Algorithme de Dijkstra]
1. **Départ** : on met $0$ sur le sommet de départ et « $\infty$ » sur tous les autres.
2. **On fixe** le sommet non fixé qui porte la plus petite valeur : elle ne changera plus.
3. **On met à jour** ses voisins : nouvelle valeur = valeur fixée + poids de l'arête. On garde la plus petite, avec son sommet précédent entre parenthèses.
4. On recommence au 2 jusqu'à fixer le sommet d'arrivée.
5. On **remonte** les sommets précédents pour lire le chemin.
:::

:::example[De C à E]
Chaque ligne indique la valeur de chaque sommet non fixé (le tiret signifie « déjà fixé »).

| Sommet fixé | $A$ | $B$ | $D$ | $E$ |
|---|---|---|---|---|
| $C\ (0)$ | $7\ (C)$ | $13\ (C)$ | $10\ (C)$ | $20\ (C)$ |
| $A\ (7)$ | — | $12\ (A)$ | $10\ (C)$ | $20\ (C)$ |
| $D\ (10)$ | — | $12\ (A)$ | — | $20\ (C)$ |
| $B\ (12)$ | — | — | — | $18\ (B)$ |
| $E\ (18)$ | — | — | — | — |

- Ligne 2 : en passant par $A$, on atteint $B$ avec $7 + 5 = 12 < 13$ : on corrige. Par $A$, $E$ vaudrait $7 + 15 = 22 > 20$ : on ne change pas.
- Ligne 3 : par $D$, $B$ vaudrait $21$ et $E$ vaudrait $22$ : rien ne change.
- Ligne 4 : en passant par $B$, on atteint $E$ avec $12 + 6 = 18 < 20$.

On remonte : $E \leftarrow B \leftarrow A \leftarrow C$. Le plus court chemin est $C - A - B - E$, de poids $7 + 5 + 6 = 18$.
:::

## Vérifie-toi

::::check[Euler]
Un graphe connexe a $6$ sommets de degrés $2, 2, 3, 3, 4, 4$. Admet-il une chaîne eulérienne ? un cycle eulérien ?

:::answer
Il y a **deux** sommets de degré impair (les deux de degré $3$) : le graphe admet une chaîne eulérienne, qui commence à l'un de ces deux sommets et finit à l'autre.

Il n'admet **pas** de cycle eulérien, car tous les degrés ne sont pas pairs.
:::
::::

::::check[Nombre chromatique]
Un graphe a pour plus grand degré $3$ et contient un triangle (trois sommets adjacents deux à deux). Que peut-on dire de $\gamma(G)$ ?

:::answer
Le triangle est un sous-graphe complet d'ordre $3$, donc $N \ge 3$ et $\gamma(G) \ge 3$. Comme $\Delta = 3$, on a $\gamma(G) \le \Delta + 1 = 4$. Donc $3 \le \gamma(G) \le 4$.
:::
::::
