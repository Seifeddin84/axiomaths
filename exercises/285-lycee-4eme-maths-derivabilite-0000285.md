---
uid: "0000285"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Dérivabilité"
source: "Axiomaths"
title: "Quand le triangle de Morley est-il le plus grand ?"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["theoreme-de-morley", "optimisation", "derivabilite", "trigonometrie", "triangle"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths ; maximum par l'inégalité de la tangente, rédigé par Axiomaths"
idea: "inegalite-de-la-tangente"
dressing: "maximiser le triangle de Morley"
rung: 5
---
On fixe un réel $\rho>0$. Pour un triangle $ABC$ de rayon circonscrit $\rho$ et d'angles $3\alpha,3\beta,3\gamma$ (avec $\alpha,\beta,\gamma\in\,]0,\tfrac\pi3[$ et $\alpha+\beta+\gamma=\tfrac\pi3$), le triangle de Morley est équilatéral de côté (exercice [275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275))
$$\displaystyle c_M=8\rho\,\sin\alpha\,\sin\beta\,\sin\gamma .$$

On veut montrer que **$c_M$ est maximal exactement lorsque $ABC$ est équilatéral**, et calculer ce maximum.

1. Soit $g(x)=\ln(\sin x)$ pour $x\in\,]0,\pi[$. Montrer que $g'(x)=\dfrac{\cos x}{\sin x}$. On note $\cot x=\dfrac{\cos x}{\sin x}$ ; montrer que $\cot$ est strictement décroissante sur $]0,\pi[$.

2. Soit $x_0\in\,]0,\pi[$. On pose $h(x)=g(x)-\cot(x_0)\,x$. Étudier le signe de $h'(x)$ et en déduire que pour tout $x\in\,]0,\pi[$ :
$$\displaystyle g(x)\leq g(x_0)+\cot(x_0)\,(x-x_0),\quad\text{avec égalité si et seulement si }x=x_0 .$$

3. Appliquer la question 2 avec $x_0=\dfrac\pi9$ à $\alpha$, $\beta$ et $\gamma$, puis additionner. En déduire que $\sin\alpha\sin\beta\sin\gamma\leq\sin^3\dfrac\pi9$, avec égalité si et seulement si $\alpha=\beta=\gamma$.

4. Conclure : donner le maximum de $c_M$ en fonction de $\rho$ (valeur approchée à $10^{-4}$ près) et le cas d'égalité.

---

## Solution

:::property[Dérivées et variations]

- $\ \boxed{(\ln u)'=\dfrac{u'}u}$ et $(\sin)'=\cos$, $(\cos)'=-\sin$.

- Si $f'>0$ sur $I_1$ et $f'<0$ sur $I_2$ (avec $I_1$ à gauche de $I_2$), $f$ admet un **maximum** au point qui sépare les deux intervalles.

:::

1. Sur $]0,\pi[$, $\sin x>0$ donc $g$ est bien définie, et

   $$\displaystyle g'(x)=\frac{(\sin x)'}{\sin x}=\frac{\cos x}{\sin x}=\cot x .$$

   Dérivée de $\cot$ :

   $$\displaystyle (\cot x)'=\frac{-\sin x\cdot\sin x-\cos x\cdot\cos x}{\sin^2x}=-\frac1{\sin^2x}<0 .$$

   $\cot$ est donc strictement décroissante sur $]0,\pi[$.

2. $h'(x)=g'(x)-\cot(x_0)=\cot x-\cot x_0$.

   - Si $x<x_0$ : $\cot$ strictement décroissante donne $\cot x>\cot x_0$, donc $h'(x)>0$.

   - Si $x>x_0$ : $\cot x<\cot x_0$, donc $h'(x)<0$.

   $h$ est strictement croissante sur $]0,x_0]$ puis strictement décroissante sur $[x_0,\pi[$ : son maximum est atteint **uniquement** en $x_0$. Donc $h(x)\leq h(x_0)$, soit

   $$\displaystyle g(x)-\cot(x_0)x\leq g(x_0)-\cot(x_0)x_0 \iff \boxed{g(x)\leq g(x_0)+\cot(x_0)(x-x_0)}$$

   avec égalité si et seulement si $x=x_0$.

3. Avec $x_0=\dfrac\pi9$, la question 2 appliquée à $x=\alpha,\beta,\gamma$ donne :

   $$\displaystyle g(\alpha)\leq g\big(\tfrac\pi9\big)+\cot\big(\tfrac\pi9\big)\big(\alpha-\tfrac\pi9\big),\quad g(\beta)\leq\dots,\quad g(\gamma)\leq\dots$$

   On additionne les trois inégalités :

   $$\displaystyle g(\alpha)+g(\beta)+g(\gamma)\leq3g\big(\tfrac\pi9\big)+\cot\big(\tfrac\pi9\big)\Big(\alpha+\beta+\gamma-\tfrac{3\pi}9\Big).$$

   Or $\alpha+\beta+\gamma=\tfrac\pi3=\tfrac{3\pi}9$ : le dernier terme est **nul**. Donc

   $$\displaystyle \ln\big(\sin\alpha\sin\beta\sin\gamma\big)\leq3\ln\big(\sin\tfrac\pi9\big)=\ln\big(\sin^3\tfrac\pi9\big).$$

   La fonction $\ln$ est strictement croissante :

   $$\displaystyle \boxed{\sin\alpha\sin\beta\sin\gamma\leq\sin^3\tfrac\pi9}$$

   L'égalité exige l'égalité dans les trois inégalités, c'est-à-dire $\alpha=\beta=\gamma=\tfrac\pi9$.

4. $c_M=8\rho\sin\alpha\sin\beta\sin\gamma\leq8\rho\sin^3\tfrac\pi9$, avec égalité si et seulement si $\alpha=\beta=\gamma=20^\circ$, c'est-à-dire si $ABC$ est équilatéral.

   $$\displaystyle \boxed{c_M^{\max}=8\rho\sin^320^\circ\approx0{,}3201\,\rho}$$

   **Contrôle :** pour le triangle équilatéral de côté $1$ ($\rho=\tfrac1{\sqrt3}$), $c_M=0{,}3201\times0{,}5774\approx0{,}1848$ : valeur de l'[exercice n°276](/lycee/3eme/mathematiques/trigonometrie#ex-0000276).

:::method[Inégalité de la tangente]

Pour maximiser une somme $\sum g(x_i)$ sous la contrainte $\sum x_i=S$ fixée, on majore chaque $g(x_i)$ par sa **droite tangente** au point $x_0=S/n$ : la somme des termes en $(x_i-x_0)$ s'annule grâce à la contrainte. C'est l'inégalité de Jensen, redémontrée ici sans la nommer.

:::

:::remark[Concavité]

Le fait que $g'=\cot$ soit décroissante signifie que $g$ est **concave** : sa courbe est sous ses tangentes. C'est exactement ce que dit la question 2.

:::

:::intuition

Avec la contrainte « somme fixée », le produit de sinus est le plus grand quand les trois angles sont égaux : c'est le principe « le plus équilibré gagne », comme pour le produit de nombres de somme fixe.

:::

:::trap

Ne pas oublier que $\alpha,\beta,\gamma$ sont les **tiers** des angles (de somme $60^\circ=\tfrac\pi3$), pas les angles eux-mêmes. Avec les angles du triangle (somme $\pi$), on aurait $x_0=\tfrac\pi3$ et une autre inégalité.

:::
