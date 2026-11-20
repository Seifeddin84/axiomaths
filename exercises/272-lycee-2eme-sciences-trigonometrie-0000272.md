---
uid: "0000272"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Trigonométrie"
source: "Axiomaths"
title: "Morley par la preuve de Conway, à rebours"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["morley", "conway", "loi-du-sinus", "similitude", "trisectrices"]
recommended: true
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths ; preuve « à rebours » de J. H. Conway"
idea: "morley"
dressing: "a-rebours"
rung: 3
---
On pose $\alpha,\beta,\gamma>0$ avec $\alpha+\beta+\gamma=60^\circ$. On veut construire un triangle $A'B'C'$ d'angles $3\alpha$, $3\beta$, $3\gamma$ dont les trisectrices adjacentes se coupent en trois points $P,Q,R$ formant un triangle **équilatéral** (preuve de Conway, « à rebours »).

On part d'un triangle équilatéral $PQR$ de côté $1$ et l'on construit, à l'extérieur, trois triangles (les « ailes ») dont voici les angles à la base :

| Côté | Sommet extérieur | Angles à la base | Angle au sommet |
|---|---|---|---|
| $[QR]$ | $A'$ | en $Q$ : $60^\circ+\gamma$, en $R$ : $60^\circ+\beta$ | $\alpha$ |
| $[RP]$ | $B'$ | en $R$ : $60^\circ+\alpha$, en $P$ : $60^\circ+\gamma$ | $\beta$ |
| $[PQ]$ | $C'$ | en $P$ : $60^\circ+\beta$, en $Q$ : $60^\circ+\alpha$ | $\gamma$ |

![La construction de Conway](/exercises/images/272-lycee-2eme-sciences-trigonometrie-0000272.png)

1. Vérifier que ces trois triangles existent (somme des angles) et calculer l'angle restant autour de chacun des points $P$, $Q$, $R$ : par exemple $\widehat{A'RB'}$.

2. Avec la loi du sinus, calculer $RA'$, $QA'$, $RB'$, $PB'$, $PC'$, $QC'$ en fonction de $\alpha,\beta,\gamma$.

3. **Triangles de remplissage.** Montrer que $\dfrac{RA'}{RB'}=\dfrac{\sin\beta}{\sin\alpha}$. Soit $T$ un triangle d'angles $\alpha$, $\beta$ et $120^\circ+\gamma$. Montrer que les triangles $A'RB'$ et $T$ sont semblables et en déduire $\widehat{RA'B'}=\alpha$ et $\widehat{RB'A'}=\beta$.

4. Établir de même (sans refaire les calculs) $\widehat{PB'C'}=\beta$, $\widehat{PC'B'}=\gamma$, $\widehat{QC'A'}=\gamma$, $\widehat{QA'C'}=\alpha$.

5. Calculer les angles de $A'B'C'$ et montrer que les six droites $A'R$, $A'Q$, $B'R$, $B'P$, $C'P$, $C'Q$ sont des trisectrices. En déduire que **tout** triangle $ABC$ d'angles $3\alpha,3\beta,3\gamma$ a un triangle de Morley équilatéral.

---

## Solution

:::property[Trois outils]

- **Somme des angles :** $\ \widehat A+\widehat B+\widehat C=180^\circ$.

- **Loi du sinus :** $\ \boxed{\dfrac{a}{\sin\widehat A}=\dfrac b{\sin\widehat B}=\dfrac c{\sin\widehat C}}$.

- **Cas de similitude :** deux triangles ayant un angle égal compris entre deux côtés proportionnels sont semblables.

:::

1. Pour l'aile sur $[QR]$ : $(60^\circ+\gamma)+(60^\circ+\beta)+\alpha=120^\circ+(\alpha+\beta+\gamma)=180^\circ$. Même calcul pour les deux autres : les triangles existent.

   Autour de $R$, les angles déjà placés sont $60^\circ$ (triangle $PQR$), $60^\circ+\beta$ (aile $A'$) et $60^\circ+\alpha$ (aile $B'$). Il reste

   $$\displaystyle \widehat{A'RB'}=360^\circ-\big(60^\circ+(60^\circ+\beta)+(60^\circ+\alpha)\big)=180^\circ-\alpha-\beta=\boxed{120^\circ+\gamma}.$$

   De même $\widehat{B'PC'}=120^\circ+\alpha$ et $\widehat{C'QA'}=120^\circ+\beta$. Ces trois angles sont inférieurs à $180^\circ$ : la figure est celle qui est dessinée.

2. Triangle $A'QR$ de base $QR=1$, angle $\alpha$ en $A'$ (opposé à $QR$) :

   $$\displaystyle \frac{RA'}{\sin(60^\circ+\gamma)}=\frac{QA'}{\sin(60^\circ+\beta)}=\frac1{\sin\alpha}$$

   (en $Q$, l'angle $60^\circ+\gamma$ est opposé à $RA'$ ; en $R$, l'angle $60^\circ+\beta$ est opposé à $QA'$). Donc

   $$\displaystyle RA'=\frac{\sin(60^\circ+\gamma)}{\sin\alpha},\qquad QA'=\frac{\sin(60^\circ+\beta)}{\sin\alpha}.$$

   Par le même calcul pour les deux autres ailes :

   $$\displaystyle RB'=\frac{\sin(60^\circ+\gamma)}{\sin\beta},\quad PB'=\frac{\sin(60^\circ+\alpha)}{\sin\beta},\quad PC'=\frac{\sin(60^\circ+\alpha)}{\sin\gamma},\quad QC'=\frac{\sin(60^\circ+\beta)}{\sin\gamma}.$$

3. Quotient des deux premières longueurs :

   $$\displaystyle \frac{RA'}{RB'}=\frac{\sin(60^\circ+\gamma)/\sin\alpha}{\sin(60^\circ+\gamma)/\sin\beta}=\boxed{\frac{\sin\beta}{\sin\alpha}}.$$

   Le triangle $T$ existe : $\alpha+\beta+(120^\circ+\gamma)=180^\circ$. Notons $T_1,T_2,T_3$ ses sommets d'angles $\alpha$, $\beta$, $120^\circ+\gamma$. Sa loi du sinus donne $\dfrac{T_3T_1}{T_3T_2}=\dfrac{\sin\beta}{\sin\alpha}$ : c'est **le même quotient** que $\dfrac{RA'}{RB'}$.

   Les triangles $A'RB'$ (angle $120^\circ+\gamma$ en $R$ entre les côtés $RA'$ et $RB'$) et $T$ (angle $120^\circ+\gamma$ en $T_3$ entre $T_3T_1$ et $T_3T_2$) ont un angle égal compris entre deux côtés proportionnels : ils sont semblables, donc leurs autres angles sont égaux :

   $$\displaystyle \boxed{\widehat{RA'B'}=\alpha},\qquad \boxed{\widehat{RB'A'}=\beta}.$$

4. Le raisonnement est le même en $P$ (angle $120^\circ+\alpha$ entre $PB'$ et $PC'$, avec $\dfrac{PB'}{PC'}=\dfrac{\sin\gamma}{\sin\beta}$) et en $Q$ (angle $120^\circ+\beta$ entre $QC'$ et $QA'$, avec $\dfrac{QC'}{QA'}=\dfrac{\sin\alpha}{\sin\gamma}$). On obtient :

   $$\displaystyle \widehat{PB'C'}=\beta,\ \ \widehat{PC'B'}=\gamma,\qquad \widehat{QC'A'}=\gamma,\ \ \widehat{QA'C'}=\alpha .$$

5. En $A'$, l'angle de $A'B'C'$ se décompose en trois angles :

   $$\displaystyle \widehat{B'A'C'}=\widehat{B'A'R}+\widehat{RA'Q}+\widehat{QA'C'}=\alpha+\alpha+\alpha=3\alpha$$

   (le milieu est l'angle au sommet de l'aile $A'QR$, qui vaut $\alpha$). De même $3\beta$ en $B'$ et $3\gamma$ en $C'$.

   Les droites $A'R$ et $A'Q$ partagent l'angle en $A'$ en trois angles égaux à $\alpha$ : ce sont ses trisectrices. Idem en $B'$ ($B'R,B'P$) et en $C'$ ($C'P,C'Q$). $R$, $P$, $Q$ sont les intersections de trisectrices adjacentes : $PQR$ est le triangle de Morley de $A'B'C'$, **équilatéral** par construction.

   Enfin, soit $ABC$ un triangle d'angles $3\alpha,3\beta,3\gamma$. Il est semblable à $A'B'C'$ (mêmes angles), et une similitude envoie trisectrices sur trisectrices : le triangle de Morley de $ABC$ est l'image de $PQR$, donc équilatéral.

   $$\displaystyle \boxed{\text{Le triangle de Morley de tout triangle est équilatéral.}}$$

:::method[Prouver « à rebours »]

Quand on ne sait rien de $P,Q,R$ « vus du triangle », on **fabrique** la figure à partir de la conclusion (le triangle équilatéral) et on montre que c'est bien la figure cherchée. Il reste à dire que toutes les figures possibles sont semblables à celle-là.

:::

:::remark[Pour aller plus loin]

La même construction, pour $\alpha=\beta=15^\circ$ et $\gamma=30^\circ$, est détaillée numériquement dans l'[exercice n°271](/lycee/2eme/sciences/trigonometrie#ex-0000271) ; une autre preuve, par le calcul, est l'[exercice n°275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275) ; la preuve purement géométrique de Naraniengar est l'[exercice n°278](/lycee/3eme/mathematiques/angles-orientes#ex-0000278). Le cas équilatéral est traité à l'[exercice n°270](/lycee/2eme/sciences/rotations#ex-0000270).

:::

:::intuition

Quand une figure est « trop dure » à attaquer de face, on la reconstruit à partir de son résultat : trois ailes, trois triangles de remplissage, et tout s'emboîte.

:::

:::trap

Ne pas confondre l'angle en $R$ du triangle de remplissage ($120^\circ+\gamma$, qui sert à appliquer le cas de similitude) avec l'angle de l'aile en $R$ ($60^\circ+\beta$ ou $60^\circ+\alpha$) : ce sont des angles différents au même point.

:::

:::remark[Pour aller plus loin]

Tracer les trisectrices d'un angle quelconque demande une règle graduée (la « néusis » d'Archimède) : [exercice n°267](/lycee/1ere/toutes-sections/angles#ex-0000267). Avec la règle et le compas seuls c'est impossible, par exemple pour $60^\circ$ : [exercice n°284](/lycee/4eme/mathematiques/identite-de-bezout#ex-0000284). C'est pourquoi cette preuve construit le triangle à rebours.

:::
