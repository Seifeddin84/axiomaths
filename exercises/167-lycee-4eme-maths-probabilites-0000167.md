---
uid: "0000167"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Probabilités"
source: "Bac 1977 principale, Ex. 2"
title: "Tirage de deux boules et nature d'une suite récurrente"
country: "Tunisie"
year: 1977
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "variable-aleatoire", "tirages-avec-remise", "suite-arithmetique", "suite-geometrique"]
bac: "1977-principale-maths"
recommended: true
---

Un sac contient dix boules indiscernables au toucher. Trois boules portent le numéro $0$ ; deux boules portent le numéro $1$ et cinq boules portent le numéro $3$. On tire au hasard, successivement et avec remise, deux boules. On désigne par $a$ le nombre inscrit sur la première boule tirée et par $b$ le nombre inscrit sur la deuxième.

1. Soit $X$ la variable aléatoire qui, à chaque épreuve, associe le nombre $\sup(a, b)$ (le plus grand des deux nombres). Déterminer la loi de probabilité de $X$.

2. On considère la suite $(U_n)$ définie par son premier terme non nul $U_0$ et la relation : $\forall n \in \mathbb{N}$, $U_{n+1} = a\,U_n + b$.

   a. Quelle est la probabilité pour que $(U_n)$ soit une suite géométrique non constante ?

   b. Quelle est la probabilité pour que $(U_n)$ soit une suite arithmétique non constante ?

---

## Solution

$P(0) = \dfrac{3}{10}$, $P(1) = \dfrac{2}{10}$, $P(3) = \dfrac{5}{10}$, et les deux tirages sont indépendants (avec remise).

1. $X$ prend les valeurs $0$, $1$, $3$.

   $P(X = 0) = P(a = 0 \text{ et } b = 0) = 0{,}3^2 = 0{,}09$.

   $P(X \leq 1) = P(a \leq 1)\,P(b \leq 1) = 0{,}5^2 = 0{,}25$, donc $P(X = 1) = 0{,}25 - 0{,}09 = 0{,}16$.

   $P(X = 3) = 1 - 0{,}25 = 0{,}75$.

2. On pose $c = \dfrac{b}{1 - a}$ quand $a \neq 1$ : $U_{n+1} - c = a\,(U_n - c)$, donc $U_n = c + (U_0 - c)\,a^n$.

   a. Si $b = 0$ : $U_n = U_0\,a^n$, géométrique de raison $a$, non constante dès que $a \neq 1$ (car $U_0 \neq 0$).

   Si $b \neq 0$ : pour $a = 1$, la suite est arithmétique non constante, donc pas géométrique ; pour $a \neq 1$, elle est géométrique seulement si $c = 0$, impossible, ou si elle est constante ($U_0 = c$).

   Donc $(U_n)$ est géométrique non constante $\iff b = 0$ et $a \in \{0, 3\}$ :

   $P = P(b = 0)\,P(a \in \{0, 3\}) = 0{,}3 \times 0{,}8 = 0{,}24$.

   (On compte la raison $0$, la suite $U_0, 0, 0, \dots$, comme géométrique non constante ; si on l'exclut, on trouve $0{,}3 \times 0{,}5 = 0{,}15$.)

   b. $U_{n+2} - U_{n+1} = a\,(U_{n+1} - U_n)$ : la différence est constante et non nulle seulement si $a = 1$ et $U_1 - U_0 = b \neq 0$.

   Donc $(U_n)$ est arithmétique non constante $\iff a = 1$ et $b \in \{1, 3\}$ :

   $P = 0{,}2 \times 0{,}7 = 0{,}14$.
