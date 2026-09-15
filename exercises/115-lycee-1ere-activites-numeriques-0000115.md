---
uid: "0000115"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Séries n° 1"
title: "Détermination d'entiers et diviseurs"
country: "Tunisie"
year: null
professor: "M. Zh Messai"
difficulty: "Moyen"
points: null
tags: ["diviseurs", "entiers-naturels", "fraction"]
---

1. Soit $a$ et $b$ deux entiers naturels.
   Déterminer tous les couples $(a ; b)$ tel que $(a - 2)(b - 3) = 21$.

2. Soit $F = \frac{n + 15}{n - 6}$ où $n$ est un entier strictement supérieur à $6$.

   a. Démontrer que $F = 1 + \frac{21}{n - 6}$.

   b. En déduire toutes les valeurs de $n$ pour lesquelles $F$ est un entier.

---

## Solution

1. **Recherche des couples $(a;b)$ :**
   Les diviseurs entiers naturels de $21$ sont $\{1, 3, 7, 21\}$.
   Puisque $a$ et $b$ sont des entiers naturels, les facteurs $(a-2)$ et $(b-3)$ sont des entiers. On étudie les paires de diviseurs positifs dont le produit est $21$ :
   - Si $a-2 = 1$ et $b-3 = 21$, alors $a = 3$ et $b = 24$.
   - Si $a-2 = 3$ et $b-3 = 7$, alors $a = 5$ et $b = 10$.
   - Si $a-2 = 7$ et $b-3 = 3$, alors $a = 9$ et $b = 6$.
   - Si $a-2 = 21$ et $b-3 = 1$, alors $a = 23$ et $b = 4$.
   Les couples possibles sont donc : $(3; 24), (5; 10), (9; 6), (23; 4)$.

2. a. **Démonstration de l'expression de $F$ :**
   $1 + \frac{21}{n - 6} = \frac{n - 6}{n - 6} + \frac{21}{n - 6} = \frac{n - 6 + 21}{n - 6} = \frac{n + 15}{n - 6} = F$.
   L'égalité est donc vérifiée.

   b. **Valeurs de $n$ pour que $F$ soit entier :**
   Pour que $F$ soit un entier, il faut que $\frac{21}{n-6}$ soit un entier.
   Cela signifie que $(n - 6)$ doit être un diviseur de $21$. Comme $n > 6$, on a $n-6 > 0$. Les diviseurs positifs de $21$ sont $1, 3, 7$ et $21$.
   - $n - 6 = 1 \implies n = 7$
   - $n - 6 = 3 \implies n = 9$
   - $n - 6 = 7 \implies n = 13$
   - $n - 6 = 21 \implies n = 27$
   Les valeurs possibles pour $n$ sont $7, 9, 13$ et $27$.