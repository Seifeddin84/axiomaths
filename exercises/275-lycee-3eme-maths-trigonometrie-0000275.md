---
uid: "0000275"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Trigonométrie"
source: "Axiomaths"
title: "Morley par le calcul trigonométrique"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["morley", "trigonometrie", "loi-du-sinus", "triple-angle", "similitude"]
recommended: true
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths ; démonstration trigonométrique rédigée par Axiomaths"
idea: "morley"
dressing: "calcul-trigonometrique"
rung: 3
---
Soit $ABC$ un triangle d'angles $\widehat A=3\alpha$, $\widehat B=3\beta$, $\widehat C=3\gamma$, de rayon circonscrit $\rho$. On trace les trisectrices et l'on note $P$, $Q$, $R$ les points du théorème de Morley :

- $P$ : intersection des trisectrices de $B$ et $C$ les plus proches de $[BC]$,
- $Q$ : celles de $C$ et $A$ les plus proches de $[CA]$,
- $R$ : celles de $A$ et $B$ les plus proches de $[AB]$.

On admet l'identité de l'[exercice n°274](/lycee/3eme/mathematiques/trigonometrie#ex-0000274) : $\sin3x=4\sin x\,\sin(60^\circ-x)\sin(60^\circ+x)$. Il s'agit de montrer que **$PQR$ est équilatéral**, de côté $8\rho\sin\alpha\sin\beta\sin\gamma$.

![Le triangle de Morley](/exercises/images/275-lycee-3eme-maths-trigonometrie-0000275.png)

1. Montrer que $\alpha+\beta+\gamma=60^\circ$. Calculer $\widehat{BPC}$, puis $\sin\widehat{BPC}$ en fonction de $\alpha$.

2. Dans le triangle $BPC$ : montrer que $BC=2\rho\sin3\alpha$, puis que
$$\displaystyle BP=8\rho\,\sin\alpha\,\sin\gamma\,\sin(60^\circ+\alpha).$$

3. Dans le triangle $ARB$ : montrer que $\widehat{ARB}=120^\circ+\gamma$ et que
$$\displaystyle BR=8\rho\,\sin\alpha\,\sin\gamma\,\sin(60^\circ+\gamma).$$

4. Posons $k=8\rho\sin\alpha\sin\gamma$. Les nombres $60^\circ+\alpha$, $60^\circ+\gamma$, $\beta$ ont pour somme $180^\circ$ : ce sont les angles d'un triangle $V_1V_2V_3$ (en $V_1,V_2,V_3$ respectivement) inscrit dans un cercle de diamètre $1$. Exprimer ses côtés avec des sinus.

5. Montrer que les triangles $BPR$ et $V_3V_2V_1$ sont semblables, de rapport $k$, puis que $PR=8\rho\sin\alpha\sin\beta\sin\gamma$.

6. Conclure que $PQR$ est équilatéral.

---

## Solution

:::property[Trois outils]

- **Loi du sinus :** $\ \dfrac{a}{\sin\widehat A}=\dfrac b{\sin\widehat B}=\dfrac c{\sin\widehat C}=2R$ (rayon du cercle circonscrit) : $\ \boxed{BC=2\rho\sin\widehat A}$.

- **Identité du triple angle** (exercice 274) : $\ \boxed{\sin3x=4\sin x\,\sin(60^\circ-x)\sin(60^\circ+x)}$.

- **Similitude :** un angle égal compris entre deux côtés proportionnels suffit pour que deux triangles soient semblables.

:::

1. $3\alpha+3\beta+3\gamma=180^\circ$ donc $\alpha+\beta+\gamma=60^\circ$.

   Dans $BPC$, les angles en $B$ et $C$ valent $\beta$ et $\gamma$ (trisectrices les plus proches de $[BC]$) :

   $$\displaystyle \widehat{BPC}=180^\circ-\beta-\gamma=180^\circ-(60^\circ-\alpha)=\boxed{120^\circ+\alpha}.$$

   Le sinus d'un angle est celui de son supplémentaire : $\sin(120^\circ+\alpha)=\sin\big(180^\circ-(120^\circ+\alpha)\big)=\sin(60^\circ-\alpha)$.

2. $BC$ est opposé à l'angle $3\alpha$ dans $ABC$ : $BC=2\rho\sin3\alpha=8\rho\sin\alpha\sin(60^\circ-\alpha)\sin(60^\circ+\alpha)$.

   Loi du sinus dans $BPC$ ($BP$ est opposé à l'angle en $C$, qui vaut $\gamma$) :

   $$\displaystyle \frac{BP}{\sin\gamma}=\frac{BC}{\sin\widehat{BPC}}=\frac{BC}{\sin(60^\circ-\alpha)}.$$

   Donc, en remplaçant $BC$ :

   $$\displaystyle BP=\frac{BC\sin\gamma}{\sin(60^\circ-\alpha)}=\frac{8\rho\sin\alpha\,\sin(60^\circ-\alpha)\sin(60^\circ+\alpha)\sin\gamma}{\sin(60^\circ-\alpha)}=\boxed{8\rho\sin\alpha\sin\gamma\sin(60^\circ+\alpha)}$$

3. Dans $ARB$, les angles en $A$ et $B$ valent $\alpha$ et $\beta$ : $\widehat{ARB}=180^\circ-\alpha-\beta=120^\circ+\gamma$, de sinus $\sin(60^\circ-\gamma)$.

   $AB=2\rho\sin3\gamma$ (opposé à l'angle $C=3\gamma$) $=8\rho\sin\gamma\sin(60^\circ-\gamma)\sin(60^\circ+\gamma)$. $BR$ est opposé à l'angle en $A$ ($\alpha$) :

   $$\displaystyle BR=\frac{AB\sin\alpha}{\sin\widehat{ARB}}=\frac{8\rho\sin\gamma\sin(60^\circ-\gamma)\sin(60^\circ+\gamma)\sin\alpha}{\sin(60^\circ-\gamma)}=\boxed{8\rho\sin\alpha\sin\gamma\sin(60^\circ+\gamma)}$$

   Avec $k=8\rho\sin\alpha\sin\gamma$ : $\ BP=k\sin(60^\circ+\alpha)$ et $BR=k\sin(60^\circ+\gamma)$.

4. Un triangle inscrit dans un cercle de diamètre $1$ (rayon $\tfrac12$) a des côtés $2\cdot\tfrac12\sin(\text{angle opposé})=\sin(\text{angle opposé})$ :

   $$\displaystyle V_2V_3=\sin(60^\circ+\alpha),\qquad V_1V_3=\sin(60^\circ+\gamma),\qquad V_1V_2=\sin\beta .$$

5. Dans $BPR$, l'angle en $B$ est $\widehat{PBR}=\beta$ (la trisectrice $(BP)$ et la trisectrice $(BR)$ sont séparées par un tiers de l'angle $B$) et il est compris entre $BP=k\,V_2V_3$ et $BR=k\,V_1V_3$.

   Dans $V_3V_2V_1$ (angle en $V_3$ égal à $\beta$), les côtés qui comprennent cet angle sont $V_3V_2=\sin(60^\circ+\alpha)$ et $V_3V_1=\sin(60^\circ+\gamma)$.

   Même angle, côtés proportionnels de rapport $k$ : les triangles sont semblables. Donc

   $$\displaystyle PR=k\,V_2V_1=k\sin\beta=\boxed{8\rho\sin\alpha\sin\beta\sin\gamma}.$$

6. Cette expression est **symétrique** en $\alpha,\beta,\gamma$. Les mêmes calculs, avec les rôles permutés, donnent $PQ=QR=8\rho\sin\alpha\sin\beta\sin\gamma$ :

   $$\displaystyle \boxed{PQ=QR=RP=8\rho\sin\alpha\sin\beta\sin\gamma}$$

   Le triangle $PQR$ est équilatéral. **Contrôle :** pour un triangle équilatéral de côté $1$, $\rho=\tfrac1{\sqrt3}$, $\alpha=\beta=\gamma=20^\circ$ et $PQ=\tfrac8{\sqrt3}\sin^320^\circ\approx0{,}1848$ : c'est la valeur de l'[exercice n°270](/lycee/2eme/sciences/rotations#ex-0000270).

:::remark[Le côté de Morley]

On a gagné une formule : $\ \text{côté}=8\rho\sin\frac{\widehat A}3\sin\frac{\widehat B}3\sin\frac{\widehat C}3$. Elle est utilisée dans l'[exercice n°276](/lycee/3eme/mathematiques/trigonometrie#ex-0000276) (trois triangles) et dans l'[exercice n°285](/lycee/4eme/mathematiques/derivabilite#ex-0000285) (le plus grand triangle de Morley). Une autre preuve du théorème sans aucun calcul : [exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272).

:::

:::intuition

Les longueurs $BP$ et $BR$ sont proportionnelles à deux sinus d'un triangle $V_1V_2V_3$ qui a justement l'angle $\beta$ en $V_3$ : le triangle $BPR$ est donc une version agrandie de $V_3V_2V_1$, et son côté $PR$ se lit tout de suite.

:::

:::trap

Ne pas oublier que $\sin(120^\circ+\alpha)=\sin(60^\circ-\alpha)$ (supplémentaires). C'est cette simplification qui fait disparaître $\sin(60^\circ-\alpha)$ de $BP$.

:::

:::remark[Pour aller plus loin]

Cas particuliers : le triangle rectangle isocèle avec ses trisectrices dans l'[exercice n°271](/lycee/2eme/sciences/trigonometrie#ex-0000271). Une preuve de Morley sans aucun calcul trigonométrique, seulement avec des angles et des symétries : [exercice n°278](/lycee/3eme/mathematiques/angles-orientes#ex-0000278).

:::
