---
uid: "0000395"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Chiffre d'affaires d'une boutique en ligne"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "serie-double", "droite-de-mayer", "prevision"]
provenance: "own"
batch: "2026-11-19-3eco-statistiques-n5"
---

Chiffre d'affaires $y$ (en milliers de dinars) d'une boutique en ligne au cours de ses six premiers mois ($x$ est le rang du mois) :

| Rang $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $y_i$ | $7$ | $8$ | $12$ | $16$ | $17$ | $21$ |

1. Représenter le nuage de points et calculer les coordonnées du point moyen $G$.

2. Soient $G_1$ le point moyen des trois premiers points et $G_2$ celui des trois derniers. Calculer leurs coordonnées.

3. Montrer qu'une équation de la droite $(G_1G_2)$ est $y=3x+3$, puis vérifier que $G$ appartient à cette droite.

4. En utilisant cet ajustement, estimer le chiffre d'affaires du $9^{\text{e}}$ mois.

5. À partir de quel mois peut-on prévoir un chiffre d'affaires supérieur à $40$ milliers de dinars ?

---

## Solution

1.
   ![Nuage de six points croissant, points moyens G1(2 ; 9), G2(5 ; 18), G(3,5 ; 13,5) et droite y = 3x + 3.](/exercises/images/395-lycee-3eme-eco-statistiques-0000395.png)

   $$\displaystyle \overline x=\dfrac{1+2+3+4+5+6}{6}=\dfrac{21}{6}=3{,}5\qquad\overline y=\dfrac{7+8+12+16+17+21}{6}=\dfrac{81}{6}=13{,}5$$

   $$\displaystyle G(3{,}5\,;13{,}5)$$

2.
   $$\displaystyle G_1\left(\dfrac{1+2+3}{3}\,;\dfrac{7+8+12}{3}\right)=(2\,;9)\qquad G_2\left(\dfrac{4+5+6}{3}\,;\dfrac{16+17+21}{3}\right)=(5\,;18)$$

3.
   :::property[Droite passant par deux points]
   Le coefficient directeur de $(G_1G_2)$ est $\boxed{a=\dfrac{y_{G_2}-y_{G_1}}{x_{G_2}-x_{G_1}}}$, puis on trouve $b$ en écrivant que $G_1$ est sur la droite $y=ax+b$.
   :::

   $$\displaystyle a=\dfrac{18-9}{5-2}=\dfrac93=3\qquad9=3\times2+b\iff b=3$$

   Donc $(G_1G_2)$ : $y=3x+3$.

   Pour $x=3{,}5$ : $3\times3{,}5+3=13{,}5=\overline y$. Donc $G$ appartient à $(G_1G_2)$.

4. $x=9$ : $y=3\times9+3=30$ milliers de dinars.

5. On résout $3x+3>40\iff3x>37\iff x>\dfrac{37}{3}\approx12{,}3$.

   Le rang est un entier : à partir du **$13^{\text{e}}$ mois**.

   (Ces prévisions sont faites hors de la période observée : elles supposent que la tendance continue.)
