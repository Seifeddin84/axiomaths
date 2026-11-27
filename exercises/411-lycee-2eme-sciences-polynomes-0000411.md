---
uid: "0000411"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "Boîte sans couvercle : un problème de volume"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["polynomes", "probleme-concret", "volume", "modelisation", "degre-3"]
provenance: own
dressing: "boîte sans couvercle et polynôme de degré 3"
rung: 5
---
Une feuille de carton rectangulaire a pour longueur $30$ cm et pour largeur $20$ cm. On découpe, dans chacun des quatre coins, un carré de côté $x$ cm, puis on relève les bords pour obtenir une boîte sans couvercle (un parallélépipède rectangle).

1. Entre quelles valeurs $x$ peut-il varier ?

2. Montrer que le volume de la boîte, en cm$^3$, est $V(x) = 4x^3 - 100x^2 + 600x$.

3. On veut une boîte de volume $1\,008$ cm$^3$.

   a. Montrer que $V(x) = 1\,008$ équivaut à $x^3 - 25x^2 + 150x - 252 = 0$.

   b. Vérifier que $3$ est une solution de cette équation.

   c. Résoudre l'équation dans $\mathbb{R}$, puis donner les valeurs de $x$ qui conviennent pour le problème.

4. Pour quelles valeurs de $x$ le volume de la boîte dépasse-t-il $1\,008$ cm$^3$ ?

---

## Solution

:::property[Volume d'un parallélépipède rectangle]
$$\boxed{V = \text{longueur} \times \text{largeur} \times \text{hauteur}}$$
:::

1. On enlève $x$ à chaque bout de la longueur et de la largeur : les dimensions de la base sont $30 - 2x$ et $20 - 2x$. La hauteur est $x$.

   Toutes ces dimensions doivent être strictement positives :

   - $x > 0$ ;
   - $30 - 2x > 0$, soit $x < 15$ ;
   - $20 - 2x > 0$, soit $x < 10$.

   Les trois conditions sont vraies en même temps si et seulement si $0 < x < 10$.

2. La base mesure $(30 - 2x)$ sur $(20 - 2x)$ et la hauteur est $x$ :

   $$\displaystyle V(x) = x(30 - 2x)(20 - 2x)$$

   On développe d'abord le produit : $(30 - 2x)(20 - 2x) = 600 - 60x - 40x + 4x^2 = 4x^2 - 100x + 600$.

   $$\displaystyle V(x) = x(4x^2 - 100x + 600) = 4x^3 - 100x^2 + 600x$$

3. a. $V(x) = 1\,008 \iff 4x^3 - 100x^2 + 600x - 1\,008 = 0$.

   On divise les deux membres par $4$ :

   $$\displaystyle V(x) = 1\,008 \iff x^3 - 25x^2 + 150x - 252 = 0$$

   b. Soit $P(x) = x^3 - 25x^2 + 150x - 252$.

   $$\displaystyle P(3) = 27 - 25 \times 9 + 150 \times 3 - 252 = 27 - 225 + 450 - 252 = 0$$

   Donc $3$ est une racine de $P$.

   c. Schéma de Horner avec $\alpha = 3$ :

   | | $x^3$ | $x^2$ | $x$ | constante |
   |---|---|---|---|---|
   | coefficients de $P$ | $1$ | $-25$ | $150$ | $-252$ |
   | $\times 3$ puis $+$ | | $3$ | $-66$ | $252$ |
   | résultat | $1$ | $-22$ | $84$ | $0$ |

   Donc $P(x) = (x - 3)(x^2 - 22x + 84)$.

   Pour $x^2 - 22x + 84$ : $\Delta = 484 - 336 = 148 = 4 \times 37$, donc les racines sont

   $$\displaystyle x = \frac{22 - 2\sqrt{37}}{2} = 11 - \sqrt{37} \qquad \text{et} \qquad x = 11 + \sqrt{37}$$

   Donc $S = \{3\,;\,11 - \sqrt{37}\,;\,11 + \sqrt{37}\}$.

   On garde les solutions de $]0\,;\,10[$. Comme $6 < \sqrt{37} < 7$ (car $36 < 37 < 49$) :

   - $3 \in ]0\,;\,10[$ : convient ;
   - $11 - \sqrt{37} \approx 4{,}9$ est dans $]0\,;\,10[$ : convient ;
   - $11 + \sqrt{37} \approx 17{,}1 > 10$ : ne convient pas.

   Le volume vaut $1\,008$ cm$^3$ pour $x = 3$ cm et pour $x = 11 - \sqrt{37} \approx 4{,}9$ cm.

4. D'après 3. a., $V(x) - 1\,008 = 4P(x)$, avec

   $$\displaystyle P(x) = (x - 3)\bigl(x - (11 - \sqrt{37})\bigr)\bigl(x - (11 + \sqrt{37})\bigr).$$

   On a $3 < 11 - \sqrt{37} < 10 < 11 + \sqrt{37}$. Tableau de signes sur $]0\,;\,10[$ :

   | $x$ | $0$ | | $3$ | | $11 - \sqrt{37}$ | | $10$ |
   |---|---|---|---|---|---|---|---|
   | $x - 3$ | | $-$ | $0$ | $+$ | | $+$ | |
   | $x - (11 - \sqrt{37})$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $x - (11 + \sqrt{37})$ | | $-$ | | $-$ | | $-$ | |
   | $P(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |

   $V(x) > 1\,008 \iff P(x) > 0 \iff 3 < x < 11 - \sqrt{37}$.

   Le volume dépasse $1\,008$ cm$^3$ pour $x \in \,]3\,;\,11 - \sqrt{37}[$, soit environ $3 < x < 4{,}9$.

   Contrôle : pour $x = 4$, $V(4) = 4 \times 64 - 100 \times 16 + 600 \times 4 = 256 - 1\,600 + 2\,400 = 1\,056 > 1\,008$.

:::intuition
Un problème de géométrie devient une équation de **degré $3$** : on trouve une racine « apparente » ($3$), puis il reste un trinôme à résoudre.
:::

:::trap
Après avoir résolu l'équation, **vérifier que chaque solution est possible** pour le problème : ici $x$ doit être dans $]0\,;\,10[$, ce qui élimine $11 + \sqrt{37}$.
:::
