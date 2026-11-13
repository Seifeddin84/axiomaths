---
uid: "0000216"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 11"
title: "Fonction donnée par son tableau de variations : bornée, bijection, solutions"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["tableau-de-variations", "fonction-bornee", "bijection", "theoreme-des-valeurs-intermediaires", "tangente"]
---

Soit la fonction $f$ dont le tableau de variations est le suivant :

| $x$ | $-\infty$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f(x)$ | $0$ | ↗ | $1$ | ↘ | $-1$ |

1. Dégager du tableau de variations les limites suivantes : $\displaystyle\lim_{x \to -\infty} f(x)$ et $\displaystyle\lim_{x \to +\infty} f(x)$. Interpréter les résultats graphiquement.

2. Montrer que $f$ est bornée.

3. Est-ce que $f$ est bijective sur $\mathbb{R}$ ?

4. Montrer que l'équation $f(x) = 0{,}5$ admet exactement deux solutions $\alpha$ et $\beta$ sur $\mathbb{R}$ telles que $\alpha < \beta$.

5. On s'intéresse à l'équation $f(x) = 0$.

   a. Montrer que l'équation $f(x) = 0$ admet une solution unique $a$ dans $\mathbb{R}$ et vérifier que $a \in ]3, +\infty[$.

   b. Donner alors le tableau de signe de $f$.

6. Donner une équation de la tangente $T$ à $\mathcal{C}_f$ en $3$.

7. Soit $g$ la restriction de $f$ à $]-\infty, 3]$. Montrer que $g$ réalise une bijection de $]-\infty, 3]$ sur un intervalle $J$ à déterminer.

---

## Solution

**Comment lire le tableau.** Les valeurs écrites aux extrémités ($0$ en $-\infty$ et $-1$ en $+\infty$) sont des **limites**. Les flèches indiquent que $f$ est **continue** et **strictement monotone** sur chaque intervalle : strictement croissante sur $]-\infty, 3]$ et strictement décroissante sur $[3, +\infty[$. C'est ce qui permet d'utiliser le théorème des valeurs intermédiaires plus bas.

1. On lit directement les valeurs aux extrémités du tableau :

   $\displaystyle\lim_{x \to -\infty} f(x) = 0$ et $\displaystyle\lim_{x \to +\infty} f(x) = -1$.

   Interprétation graphique :

   - la droite $y = 0$ (l'axe des abscisses) est asymptote horizontale à $\mathcal{C}_f$ au voisinage de $-\infty$ ;

   - la droite $y = -1$ est asymptote horizontale à $\mathcal{C}_f$ au voisinage de $+\infty$.

2. Être bornée, c'est être **encadrée** entre deux nombres fixes. On regarde les valeurs prises par $f$ sur chaque intervalle.

   - Sur $]-\infty, 3]$ : $f$ croît de $0$ (valeur limite, jamais atteinte) jusqu'à $1$. Donc $0 < f(x) \leq 1$.

   - Sur $[3, +\infty[$ : $f$ décroît de $1$ jusqu'à $-1$ (valeur limite, jamais atteinte). Donc $-1 < f(x) \leq 1$.

   Dans les deux cas, pour tout réel $x$ :

   $-1 < f(x) \leq 1$.

   $f$ est donc **bornée** (minorée par $-1$ et majorée par $1$). Son maximum est $f(3) = 1$.

3. **Non**, $f$ n'est pas bijective sur $\mathbb{R}$. Pour qu'une fonction soit bijective de $\mathbb{R}$ sur $\mathbb{R}$, il faut que chaque réel $y$ ait **exactement un** antécédent. Ici deux défauts apparaissent :

   - le nombre $0{,}5$ a **deux** antécédents (voir la question 4) : $f$ n'est pas injective ;

   - les nombres supérieurs à $1$ n'ont **aucun** antécédent (puisque $f(x) \leq 1$) : $f$ n'est pas surjective.

   Un seul de ces deux défauts suffit pour que $f$ ne soit pas bijective.

4. On cherche les antécédents de $0{,}5$ sur chacune des deux « moitiés » du tableau.

   - Sur $]-\infty, 3[$ : $f$ est continue et strictement croissante, et prend ses valeurs dans $]0, 1[$. Comme $0 < 0{,}5 < 1$, il y a **exactement une** solution $\alpha$ dans $]-\infty, 3[$.

   - Sur $]3, +\infty[$ : $f$ est continue et strictement décroissante, et prend ses valeurs dans $]-1, 1[$. Comme $-1 < 0{,}5 < 1$, il y a **exactement une** solution $\beta$ dans $]3, +\infty[$.

   - Enfin $x = 3$ n'est pas solution, car $f(3) = 1 \neq 0{,}5$.

   L'équation $f(x) = 0{,}5$ a donc **exactement deux** solutions $\alpha$ et $\beta$, et comme $\alpha < 3 < \beta$, on a bien $\alpha < \beta$.

5. a. On procède de la même façon.

   - Sur $]-\infty, 3]$ : $0 < f(x) \leq 1$, donc $f(x) > 0$ : **pas** de solution.

   - Sur $[3, +\infty[$ : $f$ est continue, strictement décroissante, et passe de $f(3) = 1$ à la limite $-1$. Comme $-1 < 0 < 1$, l'équation $f(x) = 0$ a **exactement une** solution $a$ dans $]3, +\infty[$. Elle ne vaut pas $3$ puisque $f(3) = 1 \neq 0$.

   Conclusion : $f(x) = 0$ a une unique solution $a$ dans $\mathbb{R}$, et $a \in ]3, +\infty[$.

   b. On utilise le sens de variation de chaque côté de $a$ :

   - pour $x < a$ : $f(x) > 0$ (sur $]-\infty, 3]$ on a vu $f > 0$ ; sur $[3, a[$, $f$ décroît vers $0$, donc reste positive) ;

   - $f(a) = 0$ ;

   - pour $x > a$ : $f$ continue à décroître, donc $f(x) < 0$.

   | $x$ | $-\infty$ | | $a$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f(x)$ | | $+$ | $0$ | $-$ | |

6. $f$ admet un **maximum** en $3$ (égal à $1$). Si $f$ est dérivable en $3$ — c'est ce que suppose la question — la tangente en un extremum est **horizontale** : $f'(3) = 0$.

   Équation de la tangente : $y = f'(3)(x - 3) + f(3) = 0 \times (x - 3) + 1$, soit

   $T : y = 1$.

7. La restriction $g$ de $f$ à $]-\infty, 3]$ est :

   - **continue** sur $]-\infty, 3]$ ;

   - **strictement croissante** sur $]-\infty, 3]$.

   Une fonction continue et strictement monotone sur un intervalle réalise une **bijection** de cet intervalle sur l'intervalle image. Ici :

   $J = g(]-\infty, 3]) = \left] \displaystyle\lim_{x \to -\infty} f(x)\,,\, f(3) \right] = ]0, 1]$.

   Donc $g$ est une bijection de $]-\infty, 3]$ sur $J = ]0, 1]$.
