---
uid: "0000290"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Un salaire extrême : moyenne ou médiane ?"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["statistiques", "moyenne", "mediane"]
provenance: "own"
dressing: "un salaire extrême : moyenne ou médiane ?"
rung: 4
batch: "2026-11-20-stat-3eco-A"
---

Dans une petite entreprise, les $10$ salaires mensuels (en dinars) sont :

$$420\ ;\ 450\ ;\ 450\ ;\ 480\ ;\ 500\ ;\ 520\ ;\ 540\ ;\ 560\ ;\ 600\ ;\ 2\,000.$$

Le dernier est celui du directeur. On note $S_1$ la série complète et $S_2$ la série des $9$ autres salaires.

1. Pour $S_1$ : calculer la moyenne, la médiane, les quartiles, l'écart type et le coefficient de variation $CV=\dfrac{\sigma}{\overline{x}}$.

2. Mêmes calculs pour $S_2$.

3. Compléter : le salaire du directeur fait passer la moyenne de … à …, alors que la médiane ne varie que de … à ….

4. Pour présenter « le salaire typique » à un candidat, quel indicateur de position choisir pour $S_1$ ? Justifier.

---

## Solution

1. **Série complète $S_1$** ($N=10$).

   *Moyenne* : $\sum x_i=6\,520$, donc $\overline{x}=652$.

   *Médiane* : rangs $5$ et $6$ : $500$ et $520$, donc $M_e=510$.

   *Quartiles* : $\dfrac{10}4=2{,}5\to$ rang $3$ : $Q_1=450$ ; $\dfrac{3\times10}4=7{,}5\to$ rang $8$ : $Q_3=560$.

   *Écart type* : $\sum x_i^2=6\,297\,400$ (le seul carré $2\,000^2=4\,000\,000$ en pèse plus de la moitié), donc

   $$\displaystyle V=\frac{6\,297\,400}{10}-652^2=629\,740-425\,104=204\,636\qquad\sigma\approx452{,}4.$$

   *Coefficient de variation* : $CV=\dfrac{452{,}4}{652}\approx$ $\boxed{0{,}69}$.

2. **Série $S_2$** ($N=9$ : on retire $2\,000$).

   *Moyenne* : $\dfrac{4\,520}9\approx502{,}2$. *Médiane* : rang $5$, donc $M_e=500$.

   *Quartiles* : $\dfrac94=2{,}25\to$ rang $3$ : $Q_1=450$ ; $\dfrac{27}4=6{,}75\to$ rang $7$ : $Q_3=540$.

   *Écart type* : $\sum x_i^2=2\,297\,400$ donc $V=\dfrac{2\,297\,400}{9}-\left(\dfrac{4\,520}9\right)^2\approx255\,266{,}7-252\,227{,}2\approx3\,039{,}5$ et $\sigma\approx55{,}1$.

   $\boxed{CV\approx\dfrac{55{,}1}{502{,}2}\approx0{,}11}$.

3. Un seul salaire fait passer la moyenne de $502{,}2$ à $652$ (hausse de près de $150$ dinars), la médiane de $500$ à $510$ seulement. L'écart type passe de $55$ à $452$ : il est multiplié par plus de $8$.

4. **Rappel.**

   :::property[Choisir un indicateur de position]
   La *moyenne* utilise toutes les valeurs : une valeur extrême la déplace beaucoup. La *médiane* ne dépend que du rang : elle est *robuste*. En présence d'une valeur extrême, on préfère le couple $(M_e\,;Q_3-Q_1)$ à $(\overline{x}\,;\sigma)$.
   :::

   Pour présenter « le salaire typique » on choisit donc la **médiane** ($510$ dinars) : $9$ salaires sur $10$ sont inférieurs ou égaux à $600$. La moyenne de $652$ dépasse $9$ salaires sur $10$ : elle ne décrit personne.

   :::trap
   Cela ne veut pas dire que la moyenne est fausse, mais qu'elle répond à une autre question (« combien l'entreprise verse-t-elle en moyenne par salarié ? »).
   :::

:::intuition
Une valeur extrême tire la moyenne et l'écart type, mais presque pas la médiane : on choisit l'indicateur selon la série.
:::
