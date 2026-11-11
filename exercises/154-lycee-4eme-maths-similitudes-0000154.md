---
uid: "0000154"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Similitudes"
source: "Bac 1988 principale, Ex. 2"
title: "Une famille d'applications : translation ou homothétie"
country: "Tunisie"
year: 1988
professor: null
difficulty: "Moyen"
points: 4
tags: ["bac", "barycentre", "homothetie", "translation", "point-invariant"]
bac: "1988-principale-maths"
---

Soit $A$, $B$, $C$ trois points non alignés d'un plan affine $\mathcal{P}$. Pour tout réel non nul $\alpha$, on considère l'application $f_\alpha$ de $\mathcal{P}$ dans $\mathcal{P}$ qui, à tout point $M$, associe le point $M'$ tel que :

$$\overrightarrow{MM'} = \overrightarrow{MA} - 2\alpha\,\overrightarrow{MB} + \alpha^2\,\overrightarrow{MC}.$$

1. Montrer qu'il existe un réel $\alpha_0$ pour lequel $f_{\alpha_0}$ est une translation dont on précisera le vecteur.

2. On suppose $\alpha \neq 1$. Montrer que $f_\alpha$ possède un point invariant $I_\alpha$ que l'on déterminera.

3. On suppose $\alpha \neq 1$ et $\alpha \neq 2$. Montrer que $f_\alpha$ est une homothétie dont on précisera le centre et le rapport.

---

## Solution

La somme des coefficients est $1 - 2\alpha + \alpha^2 = (1 - \alpha)^2$.

1. Pour $\alpha_0 = 1$ : $\overrightarrow{MM'} = \overrightarrow{MA} - 2\overrightarrow{MB} + \overrightarrow{MC} = \left(\overrightarrow{MB} + \overrightarrow{BA}\right) - 2\overrightarrow{MB} + \left(\overrightarrow{MB} + \overrightarrow{BC}\right) = \overrightarrow{BA} + \overrightarrow{BC}$.

   Ce vecteur ne dépend pas de $M$ : $f_1$ est la translation de vecteur $\overrightarrow{BA} + \overrightarrow{BC} = 2\overrightarrow{BK}$, où $K$ est le milieu de $[AC]$.

2. Pour $\alpha \neq 1$, la somme $(1 - \alpha)^2$ est non nulle : soit $I_\alpha$ le barycentre de $(A, 1)$, $(B, -2\alpha)$, $(C, \alpha^2)$.

   Alors $\overrightarrow{MA} - 2\alpha\,\overrightarrow{MB} + \alpha^2\,\overrightarrow{MC} = (1 - \alpha)^2\,\overrightarrow{MI_\alpha}$, d'où $\overrightarrow{MM'} = (1 - \alpha)^2\,\overrightarrow{MI_\alpha}$.

   $M$ est invariant $\iff \overrightarrow{MI_\alpha} = \vec{0} \iff M = I_\alpha$ : $f_\alpha$ a un unique point invariant, $I_\alpha$.

3. $\overrightarrow{I_\alpha M'} = \overrightarrow{I_\alpha M} + \overrightarrow{MM'} = \overrightarrow{I_\alpha M} - (1 - \alpha)^2\,\overrightarrow{I_\alpha M} = \left(1 - (1 - \alpha)^2\right)\overrightarrow{I_\alpha M}$.

   $1 - (1 - \alpha)^2 = \alpha(2 - \alpha)$, non nul pour $\alpha \neq 0$ et $\alpha \neq 2$.

   $f_\alpha$ est l'homothétie de centre $I_\alpha$ et de rapport $\alpha(2 - \alpha)$.

   *Remarque :* pour $\alpha = 2$, $f_2$ envoie tout le plan sur le point $I_2$ (application constante).
