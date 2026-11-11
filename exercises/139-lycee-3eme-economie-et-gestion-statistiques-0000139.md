---
uid: "0000139"
school: "lycee"
level: "3eme"
section: ["Economie et Gestion"]
chapter: "Statistiques"
source: "Axiomaths"
title: "Publicité et ventes, enfants et logement : séries doubles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["statistiques", "serie-double", "point-moyen", "droite-de-mayer", "tableau-a-double-entree", "distributions-marginales"]
---

**Partie A : publicité et chiffre d'affaires**

Une entreprise a relevé, sur $8$ mois, ses dépenses publicitaires $x_i$ et son chiffre d'affaires $y_i$ (en milliers de dinars).

| Mois | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| $y_i$ | $12$ | $15$ | $17$ | $20$ | $22$ | $25$ | $27$ | $30$ |

1. Représenter le nuage de points $M_i(x_i\,;\,y_i)$ dans un repère orthogonal. Un ajustement affine vous paraît-il justifié ?

2. Calculer les coordonnées du point moyen $G$ du nuage.

3. On partage le nuage en deux sous-nuages : les mois 1 à 4 et les mois 5 à 8.

   a. Calculer les coordonnées des points moyens $G_1$ et $G_2$ des deux sous-nuages.

   b. Déterminer une équation de la droite de Mayer $(G_1G_2)$. Vérifier qu'elle passe par $G$.

4. a. Estimer le chiffre d'affaires pour des dépenses publicitaires de $10$ milliers de dinars.

   b. Le directeur veut atteindre un chiffre d'affaires de $40$ milliers de dinars. Quelle dépense publicitaire le modèle propose-t-il ? Peut-on faire confiance à cette estimation ? Donner deux raisons.

**Partie B : enfants et nombre de pièces**

On a interrogé $50$ familles sur leur nombre d'enfants $X$ et le nombre de pièces $Y$ de leur logement. Deux effectifs, notés $a$ et $b$, ont été effacés.

| $X \backslash Y$ | $2$ pièces | $3$ pièces | $4$ pièces |
|---|---|---|---|
| $0$ enfant | $6$ | $4$ | $0$ |
| $1$ enfant | $5$ | $8$ | $2$ |
| $2$ enfants | $2$ | $a$ | $6$ |
| $3$ enfants | $0$ | $3$ | $b$ |

1. Sachant que le nombre moyen de pièces est $\overline{y} = 3$, montrer que $a = 9$ et $b = 5$.

2. Donner les distributions marginales des effectifs de $X$ et de $Y$, puis la distribution des fréquences marginales de $X$.

3. Calculer le nombre moyen d'enfants $\overline{x}$. En déduire le point moyen $G$ du nuage pondéré.

4. Quel est le pourcentage des familles qui ont au moins $2$ enfants et vivent dans un logement de $3$ pièces au plus ?

---

## Solution

**Partie A**

1. Les points sont presque alignés et « montent » régulièrement : un ajustement affine est justifié.

2. $\overline{x} = \dfrac{1 + 2 + \dots + 8}{8} = \dfrac{36}{8} = 4{,}5$ et $\overline{y} = \dfrac{168}{8} = 21$. Donc $G(4{,}5\,;\,21)$.

3. a. $G_1\left(\dfrac{1 + 2 + 3 + 4}{4}\,;\,\dfrac{12 + 15 + 17 + 20}{4}\right) = G_1(2{,}5\,;\,16)$.

   $G_2\left(\dfrac{5 + 6 + 7 + 8}{4}\,;\,\dfrac{22 + 25 + 27 + 30}{4}\right) = G_2(6{,}5\,;\,26)$.

   b. Le coefficient directeur est $a = \dfrac{26 - 16}{6{,}5 - 2{,}5} = \dfrac{10}{4} = 2{,}5$. On écrit l'équation sous la forme $y = 2{,}5x + b$ ; comme $G_1$ est sur la droite, $16 = 2{,}5 \times 2{,}5 + b$, donc $b = 9{,}75$.

   La droite de Mayer a pour équation $y = 2{,}5x + 9{,}75$.

   Vérification : $2{,}5 \times 4{,}5 + 9{,}75 = 11{,}25 + 9{,}75 = 21 = \overline{y}$, donc $G$ est bien sur la droite. C'est normal : les deux sous-nuages ont le même effectif, donc $G$ est le milieu de $[G_1G_2]$.

4. a. Pour $x = 10$ : $y = 2{,}5 \times 10 + 9{,}75 = 34{,}75$, soit environ $34\,750$ dinars.

   b. $2{,}5x + 9{,}75 = 40 \iff x = \dfrac{40 - 9{,}75}{2{,}5} = 12{,}1$ milliers de dinars.

   Cette estimation est fragile :
   - c'est une **extrapolation** : $12{,}1$ est loin des dépenses observées (de $1$ à $8$), et rien ne garantit que la relation reste affine au-delà (saturation du marché, par exemple) ;
   - un ajustement montre une **liaison**, pas une **cause** : les ventes peuvent aussi dépendre de la saison, des prix ou de la concurrence.

**Partie B**

1. Effectif total : $10 + 15 + (8 + a) + (3 + b) = 50$, donc $a + b = 14$.

   Les effectifs marginaux de $Y$ sont $13$, $15 + a$ et $8 + b$. Comme $\overline{y} = 3$ :
   $$\frac{2 \times 13 + 3(15 + a) + 4(8 + b)}{50} = 3 \iff 103 + 3a + 4b = 150 \iff 3a + 4b = 47.$$
   Avec $b = 14 - a$ : $3a + 56 - 4a = 47$, donc $a = 9$ et $b = 5$.

2. Tableau complété avec les marges :

   | $X \backslash Y$ | $2$ | $3$ | $4$ | Effectif marginal de $X$ | Fréquence marginale de $X$ |
   |---|---|---|---|---|---|
   | $0$ | $6$ | $4$ | $0$ | $10$ | $0{,}20$ |
   | $1$ | $5$ | $8$ | $2$ | $15$ | $0{,}30$ |
   | $2$ | $2$ | $9$ | $6$ | $17$ | $0{,}34$ |
   | $3$ | $0$ | $3$ | $5$ | $8$ | $0{,}16$ |
   | Effectif marginal de $Y$ | $13$ | $24$ | $13$ | $50$ | $1$ |

3. $\overline{x} = \dfrac{0 \times 10 + 1 \times 15 + 2 \times 17 + 3 \times 8}{50} = \dfrac{73}{50} = 1{,}46$. Le point moyen est $G(1{,}46\,;\,3)$.

4. Il faut $X \geq 2$ et $Y \leq 3$. Les cases concernées sont $(2\,;\,2)$, $(2\,;\,3)$, $(3\,;\,2)$ et $(3\,;\,3)$, d'effectifs $2 + 9 + 0 + 3 = 14$.

   Pourcentage : $\dfrac{14}{50} = 28\,\%$.
