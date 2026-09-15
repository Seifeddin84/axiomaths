---
uid: "0000001"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: null
title: "PGCD, PPCM et division euclidienne"
country: "Tunisie"
year: 2026
professor: "M. Zh Messai"
difficulty: "Facile"
points: null
tags: ["arithmetique", "pgcd", "ppcm", "fraction"]
---

1. Soit $a=864$ et $b=594$, sans calculer le PGCD vérifier que $a$ et $b$ ne sont pas premier entre eux.

2. a. Calculer $PGCD(864 ; 594)$.

   b. Déduire $PPCM(864 ; 594)$.

3. a. Calculer $Y = \frac{11}{864} + \frac{8}{594}$ donner l'écriture irréductible de $Y$.

   b. Donner l'écriture scientifique de $Y$.

4. a. Donner les restes possibles de la division d'un entier naturel par 3.

   b. Montrer que si $a=3q$ ; $b=3q+1$ et $c=3q+2$ avec $q$ un entier naturel alors $b^2 > ac$.

---

## Solution

1. **Vérification sans calcul :**
   Les nombres $a=864$ et $b=594$ sont tous deux pairs (ils se terminent par 4). Ils sont donc divisibles par 2. Leur PGCD est au moins égal à 2, ce qui signifie qu'ils ne sont pas premiers entre eux.

2. a. **Calcul du PGCD par l'algorithme d'Euclide :**
   $864 = 594 \times 1 + 270$
   $594 = 270 \times 2 + 54$
   $270 = 54 \times 5 + 0$
   Le dernier reste non nul est 54, donc $PGCD(864 ; 594) = 54$.

   b. **Déduction du PPCM :**
   On utilise la relation $PGCD(a;b) \times PPCM(a;b) = a \times b$.
   $PPCM(864 ; 594) = \frac{864 \times 594}{54} = 9504$.

3. a. **Calcul et simplification de $Y$ :**
   Pour additionner, on réduit au même dénominateur qui est le PPCM calculé précédemment (9504).
   $Y = \frac{11 \times 11}{864 \times 11} + \frac{8 \times 16}{594 \times 16}$
   $Y = \frac{121}{9504} + \frac{128}{9504} = \frac{249}{9504}$
   En simplifiant par 3, on obtient l'écriture irréductible : $Y = \frac{83}{3168}$.

   b. **Écriture scientifique de $Y$ :**
   $Y \approx 0,026199...$
   L'écriture scientifique approchée est $2,62 \times 10^{-2}$.

4. a. **Restes modulo 3 :**
   Les restes possibles de la division euclidienne d'un entier naturel par 3 sont $0$, $1$ et $2$.

   b. **Démonstration de l'inégalité :**
   Calculons $b^2$ : $b^2 = (3q+1)^2 = 9q^2 + 6q + 1$.
   Calculons $ac$ : $ac = (3q)(3q+2) = 9q^2 + 6q$.
   On remarque que $b^2 = ac + 1$. Puisque $1 > 0$, on a bien $b^2 > ac$.