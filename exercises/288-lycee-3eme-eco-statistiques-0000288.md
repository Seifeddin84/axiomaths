---
uid: "0000288"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Nombre d'enfants par famille"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "tableau-d-effectifs", "moyenne", "ecart-type", "quartiles"]
provenance: "own"
dressing: "tableau d'effectifs"
rung: 2
batch: "2026-11-20-stat-3eco-A"
---

On a interrogé $50$ familles d'un quartier sur leur nombre d'enfants $x$ :

| Nombre d'enfants $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Effectif $n_i$ | $6$ | $14$ | $15$ | $9$ | $4$ | $2$ |

1. Calculer le nombre moyen d'enfants par famille.

2. Calculer la variance puis l'écart type (arrondi à $10^{-2}$).

3. Déterminer la médiane et les quartiles $Q_1$, $Q_3$.

4. Quel pourcentage de familles a au plus $2$ enfants ?

---

## Solution

On commence par compléter le tableau de calcul.

| $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | Total |
|---|---|---|---|---|---|---|---|
| $n_i$ | $6$ | $14$ | $15$ | $9$ | $4$ | $2$ | $50$ |
| $n_ix_i$ | $0$ | $14$ | $30$ | $27$ | $16$ | $10$ | $97$ |
| $n_ix_i^2$ | $0$ | $14$ | $60$ | $81$ | $64$ | $50$ | $269$ |
| ECC | $6$ | $20$ | $35$ | $44$ | $48$ | $50$ |  |

1. **Rappel.**

   :::property[Moyenne d'une série à effectifs]
   $\displaystyle\overline{x}=\frac{1}{N}\sum n_ix_i$.
   :::

   $$\displaystyle \overline{x}=\frac{97}{50}=\boxed{1{,}94}\text{ enfant par famille.}$$

2. $\displaystyle\frac1N\sum n_ix_i^2=\frac{269}{50}=5{,}38$, donc

   $$\displaystyle V=5{,}38-1{,}94^2=5{,}38-3{,}7636=1{,}6164\qquad\sigma=\sqrt{1{,}6164}\approx\boxed{1{,}27}.$$

3. $N=50$.

   *Médiane* : $N$ pair, termes de rang $25$ et $26$. Les effectifs cumulés $20<25$ et $35\ge26$ montrent que ces deux termes valent $2$ : $M_e=2$.

   *$Q_1$* : $\dfrac{50}4=12{,}5\to$ rang $13$. ECC$(0)=6<13\le$ ECC$(1)=20$ : $Q_1=1$.

   *$Q_3$* : $\dfrac{3\times50}4=37{,}5\to$ rang $38$. ECC$(2)=35<38\le$ ECC$(3)=44$ : $Q_3=3$.

4. Au plus $2$ enfants signifie $x\le2$ : c'est l'effectif cumulé en $2$, soit $35$ familles.

   $$\displaystyle \frac{35}{50}=0{,}70=\boxed{70\,\%}.$$

:::intuition
Un tableau d'effectifs est une série où chaque valeur est répétée : on pondère chaque valeur par son effectif.
:::
