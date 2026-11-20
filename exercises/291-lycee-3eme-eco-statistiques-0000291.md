---
uid: "0000291"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Ventes mensuelles et droite de Mayer"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "serie-double", "nuage-de-points", "point-moyen", "droite-de-mayer", "prevision"]
provenance: "own"
dressing: "droite de Mayer"
rung: 3
batch: "2026-11-20-stat-3eco-A"
---

Une boutique en ligne a relevé ses ventes $y$ (en centaines d'articles) pendant les $8$ premiers mois de l'année ($x$ = numéro du mois) :

| Mois $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| Ventes $y_i$ | $14$ | $16$ | $18$ | $20$ | $24$ | $26$ | $28$ | $30$ |

1. Représenter le nuage de points $M_i(x_i\,;y_i)$ et calculer les coordonnées du point moyen $G$.

2. On partage le nuage en deux sous-nuages : les $4$ premiers mois et les $4$ derniers. Calculer les points moyens $G_1$ et $G_2$.

3. Déterminer l'équation de la droite de Mayer $(G_1G_2)$ et vérifier qu'elle passe par $G$.

4. Prévoir les ventes du mois $10$.

---

## Solution

1. Le nuage est formé des points $(1;14)$, $(2;16)$, $\dots$, $(8;30)$ : il est croissant et presque aligné.

   Point moyen : $\overline{x}=\dfrac{1+2+\dots+8}8=\dfrac{36}8=4{,}5$ et $\overline{y}=\dfrac{14+16+18+20+24+26+28+30}8=\dfrac{176}8=22$.

   $$\displaystyle \boxed{G(4{,}5\,;\,22)}.$$

2. **Rappel.**

   :::property[Méthode de Mayer]
   On range les points par abscisses croissantes, on les partage en deux sous-nuages de même effectif, on calcule leurs points moyens $G_1$ et $G_2$ : la droite d'ajustement est $(G_1G_2)$.
   :::

   Mois $1$ à $4$ : $\overline{x}_1=\dfrac{1+2+3+4}4=2{,}5$, $\overline{y}_1=\dfrac{14+16+18+20}4=\dfrac{68}4=17$ : $G_1(2{,}5\,;17)$.

   Mois $5$ à $8$ : $\overline{x}_2=\dfrac{5+6+7+8}4=6{,}5$, $\overline{y}_2=\dfrac{24+26+28+30}4=\dfrac{108}4=27$ : $G_2(6{,}5\,;27)$.

3. Pente : $a=\dfrac{y_{G_2}-y_{G_1}}{x_{G_2}-x_{G_1}}=\dfrac{27-17}{6{,}5-2{,}5}=\dfrac{10}4=2{,}5$.

   La droite passe par $G_1$ : $17=2{,}5\times2{,}5+b$, donc $b=17-6{,}25=10{,}75$.

   $$\displaystyle \boxed{y=2{,}5\,x+10{,}75}.$$

   *Vérification* : $2{,}5\times4{,}5+10{,}75=11{,}25+10{,}75=22=\overline{y}$ $\checkmark$. $G$ appartient à la droite, ce qui est normal : $G$ est le milieu de $[G_1G_2]$ (même effectif dans les deux sous-nuages).

4. Pour $x=10$ : $y=2{,}5\times10+10{,}75=35{,}75$ : environ $3\,575$ articles.

   :::trap
   $x=10$ est proche des données ($1\le x\le8$), la prévision est raisonnable ; on se méfierait d'une prévision à $x=40$.
   :::

:::intuition
La droite de Mayer passe par les deux points moyens des sous-nuages, donc aussi par le point moyen du nuage.
:::
