---
uid: "0000373"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Placer des barycentres sur une droite"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "construction", "points-ponderes"]
provenance: "own"
dressing: "placer des barycentres sur une droite"
rung: 1
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Soient $A$ et $B$ deux points tels que $AB=6$ cm.

1. Construire les points suivants, après avoir exprimé $\overrightarrow{AG_k}$ en fonction de $\overrightarrow{AB}$ :

   a. $G_1$ barycentre de $(A,1)$ et $(B,3)$ ;

   b. $G_2$ barycentre de $(A,2)$ et $(B,-1)$ ;

   c. $G_3$ barycentre de $(A,-1)$ et $(B,3)$ ;

   d. $G_4$ barycentre de $(A,5)$ et $(B,5)$.

2. Montrer que $A$ est le barycentre de $(G_1,4)$ et $(B,-3)$.

3. Montrer que $B$ est le barycentre de $(A,1)$ et $(G_3,2)$.

---

## Solution

![Droite (AB) graduée en centimètres avec les points G2, A, G4, G1, B, G3.](/exercises/images/373-lycee-2eme-sciences-barycentre-0000373.png)

:::property[Position du barycentre de deux points]
Si $\alpha+\beta\neq0$ et si $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$, alors $\boxed{\overrightarrow{AG}=\dfrac{\beta}{\alpha+\beta}\,\overrightarrow{AB}}$.
:::

1.
   a. $\alpha+\beta=1+3=4\neq0$ : $\overrightarrow{AG_1}=\dfrac34\overrightarrow{AB}$. $G_1\in[AB]$, à $4{,}5$ cm de $A$.

   b. $\alpha+\beta=2-1=1\neq0$ : $\overrightarrow{AG_2}=\dfrac{-1}{1}\overrightarrow{AB}=-\overrightarrow{AB}$. $G_2$ est le symétrique de $B$ par rapport à $A$.

   c. $\alpha+\beta=-1+3=2\neq0$ : $\overrightarrow{AG_3}=\dfrac32\overrightarrow{AB}$. $G_3$ est sur la demi-droite $[AB)$, à $9$ cm de $A$ (donc $3$ cm après $B$).

   d. $\alpha+\beta=10\neq0$ : $\overrightarrow{AG_4}=\dfrac{5}{10}\overrightarrow{AB}=\dfrac12\overrightarrow{AB}$. $G_4$ est le milieu de $[AB]$.

   **Remarque :** des coefficients égaux donnent toujours le milieu ; des coefficients de signes contraires placent le point *hors* du segment.

2.
   :::property[Reconnaître un barycentre]
   Si $\boxed{\alpha\overrightarrow{GA}+\beta\overrightarrow{GB}=\vec0}$ avec $\alpha+\beta\neq0$, alors $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$.
   :::

   On part de $\overrightarrow{AG_1}=\dfrac34\overrightarrow{AB}$ et on multiplie par $4$ :

   $$\displaystyle 4\overrightarrow{AG_1}=3\overrightarrow{AB}\qquad\text{soit}\qquad4\overrightarrow{AG_1}-3\overrightarrow{AB}=\vec0$$

   C'est une relation écrite *à partir du point $A$*, avec la somme $4+(-3)=1\neq0$ :

   $$\displaystyle \boxed{A\text{ est le barycentre de }(G_1,4)\text{ et }(B,-3)\text{.}}$$

3. On part de $\overrightarrow{AG_3}=\dfrac32\overrightarrow{AB}$, donc

   $$\displaystyle \overrightarrow{AB}=\dfrac23\overrightarrow{AG_3}=\dfrac{2}{1+2}\overrightarrow{AG_3}$$

   D'après la propriété de position (avec $\alpha=1$ et $\beta=2$) : $B$ est le barycentre de $(A,1)$ et $(G_3,2)$.
