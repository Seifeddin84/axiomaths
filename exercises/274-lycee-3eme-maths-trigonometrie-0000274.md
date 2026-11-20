---
uid: "0000274"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Trigonométrie"
source: "Axiomaths"
title: "L'identité du triple angle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["trigonometrie", "sinus", "triple-angle", "formules-d-addition"]
provenance: own
idea: "triple-angle"
rung: 1
---
1. Montrer que pour tout réel $x$ :
$$\displaystyle \sin3x=3\sin x-4\sin^3x .$$

2. En déduire que
$$\displaystyle \sin3x=4\sin x\,\sin(60^\circ-x)\,\sin(60^\circ+x).$$
(Indication : $\sin^2a-\sin^2b=\sin(a+b)\sin(a-b)$.)

3. **Applications.**

   a. Calculer $\sin20^\circ\,\sin40^\circ\,\sin80^\circ$.

   b. Calculer $\sin10^\circ\,\sin50^\circ\,\sin70^\circ$ (choisir judicieusement la valeur de $x$ dans la question 2).

---

## Solution

:::property[Formules d'addition]

$$\displaystyle \boxed{\sin(a+b)=\sin a\cos b+\cos a\sin b},\qquad \boxed{\cos2x=1-2\sin^2x},\qquad \sin2x=2\sin x\cos x .$$

:::

1. On écrit $3x=2x+x$ :

   $$\displaystyle \sin3x=\sin2x\cos x+\cos2x\sin x .$$

   On remplace $\sin2x$ et $\cos2x$ :

   $$\displaystyle \sin3x=2\sin x\cos^2x+(1-2\sin^2x)\sin x .$$

   On remplace $\cos^2x=1-\sin^2x$ :

   $$\displaystyle \sin3x=2\sin x(1-\sin^2x)+\sin x-2\sin^3x=2\sin x-2\sin^3x+\sin x-2\sin^3x .$$

   $$\displaystyle \boxed{\sin3x=3\sin x-4\sin^3x}$$

   **Contrôle :** pour $x=30^\circ$ : $3\cdot\tfrac12-4\cdot\tfrac18=1=\sin90^\circ$.

2. On factorise : $\sin3x=\sin x\,(3-4\sin^2x)=4\sin x\Big(\tfrac34-\sin^2x\Big)$.

   Or $\tfrac34=\sin^260^\circ$. Donc

   $$\displaystyle \sin3x=4\sin x\,\big(\sin^260^\circ-\sin^2x\big).$$

   Avec l'indication, $\sin^2a-\sin^2b=(\sin a-\sin b)(\sin a+\sin b)$ et, en utilisant les formules de factorisation, ce produit vaut $\sin(a+b)\sin(a-b)$. Avec $a=60^\circ$ et $b=x$ :

   $$\displaystyle \boxed{\sin3x=4\sin x\,\sin(60^\circ-x)\,\sin(60^\circ+x)}$$

   **Contrôle :** $x=10^\circ$ : $4\sin10^\circ\sin50^\circ\sin70^\circ=4(0{,}1736)(0{,}7660)(0{,}9397)=0{,}5000=\sin30^\circ$.

3. a. On applique la question 2 avec $x=20^\circ$ :

   $$\displaystyle \sin60^\circ=4\sin20^\circ\,\sin40^\circ\,\sin80^\circ\quad\text{donc}\quad \sin20^\circ\sin40^\circ\sin80^\circ=\frac{\sin60^\circ}4=\boxed{\frac{\sqrt3}8}.$$

   b. On applique la question 2 avec $x=10^\circ$ :

   $$\displaystyle \sin30^\circ=4\sin10^\circ\sin50^\circ\sin70^\circ\quad\text{donc}\quad \sin10^\circ\sin50^\circ\sin70^\circ=\frac{1/2}4=\boxed{\frac18}.$$

   Comme $\sin70^\circ=\cos20^\circ$, $\sin50^\circ=\cos40^\circ$ et $\sin10^\circ=\cos80^\circ$, on obtient aussi $\cos20^\circ\cos40^\circ\cos80^\circ=\dfrac18$.

:::remark[À quoi ça sert ?]

Cette identité est le moteur de la preuve trigonométrique du théorème de Morley ([exercice n°275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275)) : elle transforme $\sin3\alpha$, le sinus d'un angle du triangle, en un produit de sinus des tiers d'angles. Voir aussi l'[exercice n°284](/lycee/4eme/mathematiques/identite-de-bezout#ex-0000284), qui en déduit que $\cos 20^\circ$ est irrationnel.

:::

:::intuition

$\sin3x$ est un polynôme de degré 3 en $\sin x$ qui s'annule en $x=0$, $x=60^\circ$ et $x=-60^\circ$ : ses trois racines $\sin x=0,\ \pm\frac{\sqrt3}2$ donnent le produit $4\sin x\,(\sin60^\circ-\sin x)(\sin60^\circ+\sin x)$ — c'est la forme factorisée.

:::

:::trap

$\sin3x\neq3\sin x$ ! Le triplement de l'angle n'est **pas** linéaire : le terme correctif $-4\sin^3x$ est essentiel.

:::
