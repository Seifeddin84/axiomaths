---
uid: "0000376"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Synthèse : barycentre partiel et droites concourantes"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["barycentre", "barycentre-partiel", "droites-concourantes"]
provenance: "own"
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soit $ABC$ un triangle. On considère : $I$ le barycentre de $(B,1)$ et $(C,2)$ ; $J$ le barycentre de $(A,3)$ et $(C,2)$ ; $K$ le barycentre de $(A,3)$ et $(B,1)$ ; $G$ le barycentre de $(A,3)$, $(B,1)$ et $(C,2)$.

![Triangle ABC.](/exercises/images/376-lycee-2eme-sciences-barycentre-0000376-1.png)

1. Exprimer $\overrightarrow{BI}$, $\overrightarrow{AJ}$ et $\overrightarrow{AK}$ à l'aide de $\overrightarrow{BC}$, $\overrightarrow{AC}$ et $\overrightarrow{AB}$, puis construire $I$, $J$ et $K$.

2. Montrer que $G$ est le milieu du segment $[AI]$.

3. Montrer que $G$ appartient aux droites $(BJ)$ et $(CK)$. Que peut-on dire des droites $(AI)$, $(BJ)$ et $(CK)$ ?

4. Montrer que $\overrightarrow{AG}=\dfrac16\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$.

---

## Solution

![Triangle ABC avec I sur [BC], J sur [AC], K sur [AB] et les droites (AI), (BJ), (CK) concourantes en G.](/exercises/images/376-lycee-2eme-sciences-barycentre-0000376-2.png)

1.
   :::property[Position du barycentre de deux points]
   Si $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$, $\alpha+\beta\neq0$ : $\boxed{\overrightarrow{AG}=\dfrac{\beta}{\alpha+\beta}\overrightarrow{AB}}$.
   :::

   $$\displaystyle \overrightarrow{BI}=\dfrac{2}{1+2}\overrightarrow{BC}=\dfrac23\overrightarrow{BC}\qquad\overrightarrow{AJ}=\dfrac{2}{3+2}\overrightarrow{AC}=\dfrac25\overrightarrow{AC}\qquad\overrightarrow{AK}=\dfrac{1}{3+1}\overrightarrow{AB}=\dfrac14\overrightarrow{AB}$$

   $I$ est aux deux tiers de $[BC]$ à partir de $B$, $J$ aux deux cinquièmes de $[AC]$ à partir de $A$, $K$ au quart de $[AB]$ à partir de $A$.

2.
   :::property[Barycentre partiel]
   On peut remplacer deux des points par leur barycentre affecté de la $\boxed{\text{somme de leurs coefficients}}$.
   :::

   On remplace $(B,1)$ et $(C,2)$ par $(I,3)$ : $G$ est le barycentre de $(A,3)$ et $(I,3)$.

   Les coefficients sont égaux : $G$ est le milieu de $[AI]$.

3. On remplace $(A,3)$ et $(C,2)$ par $(J,5)$ : $G$ est le barycentre de $(B,1)$ et $(J,5)$, donc $G\in(BJ)$, avec $\overrightarrow{BG}=\dfrac56\overrightarrow{BJ}$.

   On remplace $(A,3)$ et $(B,1)$ par $(K,4)$ : $G$ est le barycentre de $(C,2)$ et $(K,4)$, donc $G\in(CK)$, avec $\overrightarrow{CG}=\dfrac46\overrightarrow{CK}=\dfrac23\overrightarrow{CK}$.

   **Conclusion :** les trois droites $(AI)$, $(BJ)$ et $(CK)$ sont **concourantes** en $G$.

4.
   :::property[Relation vectorielle du barycentre]
   $G$ barycentre de $(A,\alpha)$, $(B,\beta)$, $(C,\gamma)$ : $\boxed{\overrightarrow{AG}=\dfrac{\beta\overrightarrow{AB}+\gamma\overrightarrow{AC}}{\alpha+\beta+\gamma}}$.
   :::

   Ici $\alpha+\beta+\gamma=6$ :

   $$\displaystyle \overrightarrow{AG}=\dfrac{1\times\overrightarrow{AB}+2\times\overrightarrow{AC}}{6}=\dfrac16\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$$

   **Contrôle** avec 2) : $\overrightarrow{AG}=\dfrac12\overrightarrow{AI}=\dfrac12\left(\overrightarrow{AB}+\dfrac23\overrightarrow{BC}\right)=\dfrac12\overrightarrow{AB}+\dfrac13\left(\overrightarrow{AC}-\overrightarrow{AB}\right)=\dfrac16\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$ (vérifié)

:::intuition
Chaque droite joint un sommet au barycentre des deux autres points : l'associativité met $G$ sur les trois droites en même temps.
:::

:::trap
$G$ n'est pas le centre de gravité : les coefficients ne sont pas égaux, donc $G$ n'est pas aux deux tiers des droites.
:::
