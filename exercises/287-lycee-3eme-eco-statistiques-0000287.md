---
uid: "0000287"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Temps de trajet domicile-bureau"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "serie-individuelle", "moyenne", "mediane", "quartiles", "ecart-type"]
provenance: "own"
dressing: "série individuelle"
rung: 1
batch: "2026-11-20-stat-3eco-A"
---

Un employé a relevé, en minutes, la durée de ses $10$ derniers trajets pour aller au bureau :

$$8\ ;\ 10\ ;\ 12\ ;\ 12\ ;\ 14\ ;\ 15\ ;\ 16\ ;\ 18\ ;\ 20\ ;\ 25.$$

1. Calculer la moyenne $\overline{x}$ et l'étendue de la série.

2. Déterminer la médiane $M_e$ et les quartiles $Q_1$ et $Q_3$.

3. Calculer la variance $V$ puis l'écart type $\sigma$ (arrondi à $10^{-2}$).

4. Un jour de forte circulation, chaque trajet dure $20\,\%$ de plus qu'à l'habitude, auquel s'ajoutent $2$ minutes d'attente au parking : la durée devient $y=1{,}2\,x+2$. Donner sans nouveau calcul la moyenne et l'écart type des durées $y$.

---

## Solution

1. **Moyenne.** $\displaystyle\sum x_i=8+10+12+12+14+15+16+18+20+25=150$, donc

   $$\displaystyle \overline{x}=\frac{150}{10}=\boxed{15}\text{ minutes.}$$

   **Étendue** $=x_{\max}-x_{\min}=25-8=$ $\boxed{17}$ minutes.

2. **Rappel.**

   :::property[Médiane et quartiles d'une série de $N$ valeurs rangées]
   - $M_e$ : si $N$ est pair, moyenne des termes de rang $\frac N2$ et $\frac N2+1$ ; si $N$ est impair, terme de rang $\frac{N+1}2$.

   - $Q_1$ : terme dont le rang est le *premier entier supérieur ou égal* à $\frac N4$ ; $Q_3$ : même chose avec $\frac{3N}4$.
   :::

   La série est déjà rangée et $N=10$.

   *Médiane* : $N$ pair, les termes de rang $5$ et $6$ valent $14$ et $15$ : $M_e=\dfrac{14+15}2=$ $\boxed{14{,}5}$.

   *$Q_1$* : $\dfrac N4=2{,}5$, premier entier au-dessus : $3$. Le $3^{\text{e}}$ terme est $12$ : $Q_1=$ $\boxed{12}$.

   *$Q_3$* : $\dfrac{3N}4=7{,}5$, premier entier au-dessus : $8$. Le $8^{\text{e}}$ terme est $18$ : $Q_3=$ $\boxed{18}$.

   :::trap
   On arrondit *vers le haut* le rang ($2{,}5\to3$) ; on ne prend pas la moyenne de deux termes pour les quartiles.
   :::

3. **Rappel.**

   :::property[Variance et écart type]
   $$\displaystyle V=\frac1N\sum x_i^2-\overline{x}^{\,2}\qquad\sigma=\sqrt V .$$
   :::

   Calcul des carrés : $64+100+144+144+196+225+256+324+400+625=2\,478$. Donc

   $$\displaystyle V=\frac{2\,478}{10}-15^2=247{,}8-225=22{,}8\qquad\sigma=\sqrt{22{,}8}\approx\boxed{4{,}78}.$$

4. Les durées $y$ se déduisent de $x$ par la transformation affine $y=1{,}2\,x+2$. D'après la propriété du cours :

   $$\displaystyle \overline{y}=1{,}2\times15+2=20\text{ min}\qquad \sigma_y=1{,}2\times\sigma\approx1{,}2\times4{,}775\approx5{,}73\text{ min}.$$

   Les $2$ minutes d'attente décalent les durées mais ne changent pas leur dispersion.

:::intuition
Médiane et quartiles se lisent sur la série rangée ; la variance se calcule par « moyenne des carrés moins carré de la moyenne ».
:::
