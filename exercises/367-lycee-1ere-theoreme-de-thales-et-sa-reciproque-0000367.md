---
uid: "0000367"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "La charpente"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["thales", "segments-paralleles", "somme-de-termes", "figure"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

Le toit d'un hangar est un triangle $ABC$ avec $BC=12$ m et une hauteur $AH=6$ m ($H\in[BC]$). On fixe cinq barres horizontales $[M_kN_k]$ ($k=1,2,3,4,5$), avec $M_k\in[AB]$, $N_k\in[AC]$ et $(M_kN_k)\parallel(BC)$, de sorte que les points $M_k$ partagent $[AB]$ en six parties égales : $AM_k=\dfrac k6\,AB$.

![Triangle ABC de base 12 m avec cinq barres horizontales M_kN_k qui partagent AB en six parties égales](/exercises/images/367-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000367.png)

1. Montrer que $M_kN_k=2k$ m pour chaque $k$.

2. À quelle hauteur au-dessus de $[BC]$ se trouve la barre $[M_kN_k]$ ?

3. Calculer la longueur totale des cinq barres.

4. Pour $n$ barres qui partagent $[AB]$ en $n+1$ parties égales, on note $S$ la longueur totale. Montrer que $M_kN_k+M_{n+1-k}N_{n+1-k}=BC$, puis que $S=\dfrac n2\,BC$. [Écrire $S$ deux fois : dans l'ordre $k=1,\dots,n$, puis dans l'ordre inverse.]

5. On dispose de $99$ m de barre pour un toit de base $BC=11$ m. Combien de barres peut-on poser au maximum ?

---

## Solution

:::property[Thalès]
Si $M\in[AB]$, $N\in[AC]$ et $(MN)\parallel(BC)$, on part du sommet $A$ : $\boxed{\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}}$.
:::

1. Dans le triangle $ABC$, on a $M_k\in[AB]$, $N_k\in[AC]$ et $(M_kN_k)\parallel(BC)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AM_k}{AB}=\dfrac{AN_k}{AC}=\dfrac{M_kN_k}{BC}$$

   Or $\dfrac{AM_k}{AB}=\dfrac k6$ :

   $$\displaystyle M_kN_k=\dfrac k6\times12=\boxed{2k}\ \text{m}$$

   Soit $2$, $4$, $6$, $8$ et $10$ m.

2. La droite $(AH)$ est perpendiculaire à $(BC)$, donc à chaque barre. Elle coupe $[M_kN_k]$ en $K_k$.

   Dans le triangle $ABH$, on a $M_k\in[AB]$, $K_k\in[AH]$ et $(M_kK_k)\parallel(BH)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AM_k}{AB}=\dfrac{AK_k}{AH}\implies\dfrac{AK_k}6=\dfrac k6\implies AK_k=k$$

   La barre $[M_kN_k]$ est à la hauteur

   $$\displaystyle K_kH=AH-AK_k=\boxed{6-k}\ \text{m}$$

   Les barres sont à $5$, $4$, $3$, $2$ et $1$ m du sol.

3. On additionne les longueurs de la question 1 :

   $$\displaystyle 2+4+6+8+10=\boxed{30}\ \text{m}$$

4. **Longueur d'une barre.** Même raisonnement qu'à la question 1, avec $AM_k=\dfrac k{n+1}\,AB$ :

   $$\displaystyle \ell_k=M_kN_k=\dfrac k{n+1}\,BC$$

   **Deux barres symétriques.** La barre numéro $n+1-k$ a pour longueur $\ell_{n+1-k}=\dfrac{n+1-k}{n+1}\,BC$. Donc :

   $$\displaystyle \ell_k+\ell_{n+1-k}=\dfrac{k+n+1-k}{n+1}\,BC=\boxed{BC}$$

   **La somme.** On écrit $S$ dans les deux ordres :

   $$\displaystyle S=\ell_1+\ell_2+\cdots+\ell_n$$

   $$\displaystyle S=\ell_n+\ell_{n-1}+\cdots+\ell_1$$

   On additionne terme à terme : chaque paire $\ell_k+\ell_{n+1-k}$ vaut $BC$, et il y a $n$ paires.

   $$\displaystyle 2S=n\times BC\implies\boxed{S=\dfrac n2\,BC}$$

   Contrôle avec $n=5$ et $BC=12$ : $\dfrac52\times12=30$ m.

5. La longueur totale pour $n$ barres est $S=\dfrac n2\times11$.

   $$\displaystyle \dfrac{11\,n}2\leq99\iff n\leq18$$

   On peut donc poser $\boxed{18\text{ barres}}$, qui utilisent exactement $\dfrac{18}2\times11=99$ m.

:::intuition
Associer chaque barre à sa symétrique : leurs longueurs ont pour somme $BC$.
:::

:::trap
Écrire $M_kN_k=\dfrac k6\,AB$ : le rapport de Thalès s'applique à $BC$, pas à $AB$.
:::
