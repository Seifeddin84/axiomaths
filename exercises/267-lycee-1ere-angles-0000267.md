---
uid: "0000267"
school: "lycee"
level: "1ere"
section: null
chapter: "Angles"
source: "Axiomaths"
title: "La règle à deux marques d'Archimède"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["regle-d-archimede", "angles", "cercle", "construction"]
provenance: adapted
adapted_from: "construction classique attribuée à Archimède ; énoncé et solution Axiomaths"
idea: "trisection"
dressing: "règle à deux marques d'Archimède"
rung: 5
---
Soit $\Gamma$ un cercle de centre $O$ et de rayon $r$, et soient $A$ et $B$ deux points de $\Gamma$. On prolonge le diamètre $[AO]$ au-delà de $O$ et l'on cherche un point $E$ de cette demi-droite, avec $O$ entre $A$ et $E$, tel que la droite $(BE)$ recoupe le cercle en un point $D$ (entre $B$ et $E$) vérifiant

$$\displaystyle DE=r .$$

(Matériellement : on pose en $B$ une règle portant deux marques distantes de $r$, et on la fait pivoter autour de $B$ jusqu'à ce que l'une des marques tombe sur le cercle et l'autre sur la droite $(AO)$.)

On pose $\varphi=\widehat{OED}$.

1. Montrer que $\widehat{DOE}=\varphi$.

2. Montrer que $\widehat{ODB}=2\varphi$.

3. Montrer que $\widehat{OBD}=2\varphi$.

4. Montrer que $\widehat{AOB}=3\varphi$. Que peut-on dire de l'angle $\widehat{OEB}$ par rapport à l'angle $\widehat{AOB}$ ?

5. Expliquer comment trisecter un angle $\widehat{AOB}$ donné avec une règle graduée (deux marques) et un compas.

---

## Solution

![La néusis d'Archimède](/exercises/images/267-lycee-1ere-angles-0000267.png)

:::property[Angles dans un triangle]

- Dans un triangle isocèle, les angles à la base sont égaux.

- La somme des angles d'un triangle vaut $180^\circ$.

- **Angle extérieur :** l'angle extérieur d'un triangle en un sommet est égal à la somme des deux angles intérieurs aux autres sommets : $\ \boxed{\text{ext}=\text{int}_1+\text{int}_2}$.

:::

1. Les points $O$, $D$ et $E$ forment un triangle $ODE$ avec $DO=r$ (rayon) et $DE=r$ (hypothèse). Il est isocèle en $D$.

   Les angles à la base d'un triangle isocèle sont égaux :

   $$\displaystyle \widehat{DOE}=\widehat{DEO}=\varphi .$$

2. Les points $B$, $D$, $E$ sont alignés, avec $D$ entre $B$ et $E$. L'angle $\widehat{ODB}$ est donc l'angle extérieur du triangle $ODE$ en $D$ :

   $$\displaystyle \widehat{ODB}=\widehat{DOE}+\widehat{DEO}=\varphi+\varphi=2\varphi .$$

3. Le triangle $OBD$ est isocèle en $O$ ($OB=OD=r$). Ses angles à la base sont égaux :

   $$\displaystyle \widehat{OBD}=\widehat{ODB}=2\varphi .$$

4. $A$, $O$, $E$ sont alignés avec $O$ entre $A$ et $E$, donc $\widehat{AOB}$ est l'angle extérieur du triangle $OBE$ en $O$. Or l'angle $\widehat{OBE}$ est l'angle $\widehat{OBD}=2\varphi$ (car $D\in[BE]$), et $\widehat{OEB}=\widehat{OED}=\varphi$ :

   $$\displaystyle \widehat{AOB}=\widehat{OBE}+\widehat{OEB}=2\varphi+\varphi=3\varphi .$$

   $$\displaystyle \boxed{\widehat{OEB}=\varphi=\tfrac13\,\widehat{AOB}}$$

   **Contrôle :** dans le triangle $OBE$ les trois angles valent $2\varphi$, $\varphi$ et $180^\circ-3\varphi$, de somme $180^\circ$.

5. Pour un angle $\widehat{AOB}$ donné : on trace le cercle de centre $O$ passant par $B$ (de rayon $r=OB$) et la droite $(AO)$. On règle la règle sur la longueur $r$ (deux marques) et on la fait pivoter autour de $B$ jusqu'à la position décrite plus haut. Alors la droite $(BE)$ fait avec $(AO)$ un angle $\widehat{OEB}$ égal au tiers de $\widehat{AOB}$ : le problème est résolu.

   Cette construction n'est **pas** à la règle non graduée : les deux marques sortent du cadre « règle et compas » (voir l'[exercice n°284](/lycee/4eme/mathematiques/identite-de-bezout#ex-0000284) sur l'impossibilité de la trisection).

:::remark[Archimède]

Cette construction est attribuée à Archimède (« néusis »). Avec une telle règle on peut tracer les trisectrices dont parle le théorème de Morley (voir l'[exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272), où l'on les évite grâce à une construction « à rebours »).

:::

:::intuition

Le segment de longueur $r$ « replié » deux fois (en $D$) fabrique deux triangles isocèles consécutifs : l'angle double apparaît, puis l'angle triple.

:::

:::trap

Ne pas confondre l'angle extérieur en $D$ avec l'angle intérieur $\widehat{ODE}$ : l'extérieur, qui vaut $2\varphi$, est celui qui vaut la somme des deux autres angles du triangle.

:::
