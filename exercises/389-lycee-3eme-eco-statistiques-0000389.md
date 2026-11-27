---
uid: "0000389"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Quartiles d'une liste"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "quartiles", "mediane", "diagramme-en-boite"]
provenance: "own"
batch: "2026-11-19-3eco-statistiques-n5"
---

Voici l'âge des $15$ joueurs d'une équipe de handball :

$$22\quad19\quad30\quad17\quad25\quad21\quad33\quad19\quad24\quad28\quad18\quad22\quad26\quad20\quad23$$

1. Ranger ces âges par ordre croissant, puis donner l'étendue.

2. Déterminer la médiane, le premier quartile $Q_1$ et le troisième quartile $Q_3$. En déduire l'écart interquartile.

3. Construire le diagramme en boîte de cette série.

4. Quel pourcentage des joueurs a au moins $26$ ans ?

---

## Solution

1. Série rangée (rang au-dessus de chaque valeur) :

   | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ | $13$ | $14$ | $15$ |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
   | $17$ | $18$ | $19$ | $\mathbf{19}$ | $20$ | $21$ | $22$ | $\mathbf{22}$ | $23$ | $24$ | $25$ | $\mathbf{26}$ | $28$ | $30$ | $33$ |

   Étendue : $33-17=16$ ans.

2.
   :::property[Médiane et quartiles (convention du manuel)]
   $n$ impair : la médiane est la valeur de rang $\boxed{\dfrac{n+1}{2}}$. $Q_1$ est la valeur de rang $\dfrac n4$, $Q_3$ celle de rang $\dfrac{3n}{4}$ si ces nombres sont entiers ; sinon on prend $\boxed{\text{le rang immédiatement supérieur}}$.
   :::

   $n=15$ : médiane de rang $8$ : $\text{Me}=22$.

   $\dfrac{15}{4}=3{,}75$, donc $Q_1$ est de rang $4$ : $Q_1=19$.

   $\dfrac{3\times15}{4}=11{,}25$, donc $Q_3$ est de rang $12$ : $Q_3=26$.

   $$\displaystyle \text{Écart interquartile : }Q_3-Q_1=26-19=7\text{ ans}$$

3.
   ![Diagramme en boîte : minimum 17, Q1 19, médiane 22, Q3 26, maximum 33.](/exercises/images/389-lycee-3eme-eco-statistiques-0000389.png)

   Boîte de $19$ à $26$, trait à $22$, moustaches de $17$ à $33$.

4. Les joueurs d'au moins $26$ ans : $26$, $28$, $30$, $33$, soit $4$ joueurs sur $15$ :

   $$\displaystyle \dfrac{4}{15}\approx26{,}7\,\%$$
