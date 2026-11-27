---
uid: "0000374"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Barycentre"
source: "Axiomaths"
title: "Barycentres dans un repère"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["barycentre", "coordonnees", "repere", "calcul"]
provenance: "own"
dressing: "coordonnées dans un repère"
rung: 1
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Le plan est muni d'un repère $(O,\vec i,\vec j)$. On donne $A(-1\,;3)$, $B(3\,;1)$ et $C(1\,;-3)$.

1. Calculer les coordonnées du point $G$, barycentre de $(A,1)$ et $(B,3)$.

2. Montrer que le point $E(5\,;0)$ est le barycentre de $(A,-1)$ et $(B,3)$.

3. Calculer les coordonnées du point $K$, barycentre de $(A,1)$, $(B,3)$ et $(C,4)$.

4. Montrer de deux façons que $K$ est le milieu du segment $[GC]$ : par les coordonnées, puis avec le barycentre partiel.

---

## Solution

![Repère avec les points A, B, C, G, E, K ; G et E sur la droite (AB), K milieu de [GC].](/exercises/images/374-lycee-2eme-sciences-barycentre-0000374.png)

:::property[Coordonnées du barycentre]
Si $G$ est le barycentre de $(A,\alpha)$, $(B,\beta)$, $(C,\gamma)$ avec $\alpha+\beta+\gamma\neq0$, alors $\boxed{x_G=\dfrac{\alpha x_A+\beta x_B+\gamma x_C}{\alpha+\beta+\gamma}}$ et $\boxed{y_G=\dfrac{\alpha y_A+\beta y_B+\gamma y_C}{\alpha+\beta+\gamma}}$ (même formule sans $C$ pour deux points).
:::

1. Somme des coefficients : $1+3=4$.

   $$\displaystyle x_G=\dfrac{1\times(-1)+3\times3}{4}=\dfrac84=2\qquad y_G=\dfrac{1\times3+3\times1}{4}=\dfrac64=\dfrac32\qquad G\left(2\,;\dfrac32\right)$$

2. Somme des coefficients : $-1+3=2\neq0$, le barycentre existe. On calcule ses coordonnées :

   $$\displaystyle x=\dfrac{(-1)\times(-1)+3\times3}{2}=\dfrac{10}{2}=5\qquad y=\dfrac{(-1)\times3+3\times1}{2}=\dfrac02=0$$

   On retrouve $(5\,;0)$ : $E$ est bien le barycentre de $(A,-1)$ et $(B,3)$.

3. Somme des coefficients : $1+3+4=8$.

   $$\displaystyle x_K=\dfrac{-1+9+4}{8}=\dfrac{12}{8}=\dfrac32\qquad y_K=\dfrac{3+3-12}{8}=-\dfrac68=-\dfrac34\qquad K\left(\dfrac32\,;-\dfrac34\right)$$

4. **Méthode 1 (coordonnées).** Le milieu de $[GC]$ a pour coordonnées

   $$\displaystyle \left(\dfrac{2+1}{2}\,;\dfrac{\frac32-3}{2}\right)=\left(\dfrac32\,;-\dfrac34\right)$$

   Ce sont les coordonnées de $K$.

   **Méthode 2 (barycentre partiel).**

   :::property[Associativité]
   Dans un système de points pondérés, on peut $\boxed{\text{remplacer deux points par leur barycentre}}$, affecté de la somme de leurs coefficients (si elle est non nulle).
   :::

   $G$ est le barycentre de $(A,1)$ et $(B,3)$ : on remplace ces deux points par $(G,4)$.

   Donc $K$ est le barycentre de $(G,4)$ et $(C,4)$ : deux coefficients égaux, $K$ est le milieu de $[GC]$.
