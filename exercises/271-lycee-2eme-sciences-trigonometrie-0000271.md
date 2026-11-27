---
uid: "0000271"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Trigonométrie"
source: "Axiomaths"
title: "Un triangle rectangle isocèle avec ses trisectrices (Conway)"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["theoreme-de-conway", "trisectrices", "trigonometrie", "construction"]
provenance: adapted
adapted_from: "résultat classique (théorème de Morley, 1899) ; énoncé, découpage en questions et solution Axiomaths"
idea: "morley"
dressing: "construction de Conway, cas isocèle rectangle"
rung: 3
---
On veut construire un triangle rectangle isocèle muni de ses six trisectrices, en suivant la méthode de Conway (voir l'[exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272)). Les angles du triangle seront $3\alpha$, $3\beta$, $3\gamma$ avec

$$\displaystyle \alpha=15^\circ,\qquad\beta=15^\circ,\qquad\gamma=30^\circ .$$

On part d'un triangle **équilatéral** $PQR$ de côté $1$. On construit, à l'extérieur de $PQR$ :

- sur $[QR]$ un triangle $A'QR$ avec $\widehat{A'QR}=60^\circ+\gamma$ et $\widehat{A'RQ}=60^\circ+\beta$ ;
- sur $[RP]$ un triangle $B'RP$ avec $\widehat{B'RP}=60^\circ+\alpha$ et $\widehat{B'PR}=60^\circ+\gamma$ ;
- sur $[PQ]$ un triangle $C'PQ$ avec $\widehat{C'PQ}=60^\circ+\beta$ et $\widehat{C'QP}=60^\circ+\alpha$.

1. Calculer les six angles à la base ci-dessus. Pourquoi sont-ils constructibles à la règle et au compas ?

2. Calculer les angles en $A'$, $B'$, $C'$ des trois triangles. Calculer aussi les angles $\widehat{A'RB'}$, $\widehat{B'PC'}$ et $\widehat{C'QA'}$ « autour » de $PQR$.

3. Avec la loi du sinus, calculer (valeurs exactes) $QC'$ et $QA'$.

4. On admet que $A'B'C'$ est rectangle isocèle en $C'$, que $\widehat{QC'A'}=\gamma$ et $\widehat{QA'C'}=\alpha$. Calculer $A'C'$, puis $A'B'$ et le rapport $\dfrac{A'B'}{PQ}$.

---

## Solution

![Construction de Conway pour 15°, 15°, 30°](/exercises/images/271-lycee-2eme-sciences-trigonometrie-0000271.png)

:::property[Loi du sinus]

Dans un triangle $ABC$ de côtés $a=BC$, $b=CA$, $c=AB$ :

$$\displaystyle \boxed{\frac a{\sin\widehat A}=\frac b{\sin\widehat B}=\frac c{\sin\widehat C}}$$

:::

1. On remplace $\alpha=\beta=15^\circ$ et $\gamma=30^\circ$ :

   - sur $[QR]$ : en $Q$, $60^\circ+30^\circ=90^\circ$ ; en $R$, $60^\circ+15^\circ=75^\circ$ ;

   - sur $[RP]$ : en $R$, $60^\circ+15^\circ=75^\circ$ ; en $P$, $60^\circ+30^\circ=90^\circ$ ;

   - sur $[PQ]$ : en $P$, $60^\circ+15^\circ=75^\circ$ ; en $Q$, $60^\circ+15^\circ=75^\circ$.

   $90^\circ$ s'obtient avec une perpendiculaire. $75^\circ=60^\circ+15^\circ$ et $15^\circ=60^\circ-45^\circ$, où $45^\circ$ est la moitié d'un angle droit (bissectrice) : tout est constructible à la règle et au compas.

2. Dans le triangle $A'QR$, l'angle en $A'$ vaut $180^\circ-90^\circ-75^\circ=15^\circ=\alpha$. Dans $B'RP$, en $B'$ : $180^\circ-75^\circ-90^\circ=15^\circ=\beta$. Dans $C'PQ$, en $C'$ : $180^\circ-75^\circ-75^\circ=30^\circ=\gamma$.

   Autour de $R$ il reste $360^\circ-60^\circ-75^\circ-75^\circ=150^\circ$ : $\widehat{A'RB'}=150^\circ=120^\circ+\gamma$.

   Autour de $P$ : $\widehat{B'PC'}=360^\circ-60^\circ-90^\circ-75^\circ=135^\circ=120^\circ+\alpha$.

   Autour de $Q$ : $\widehat{C'QA'}=360^\circ-60^\circ-75^\circ-90^\circ=135^\circ=120^\circ+\beta$.

3. Triangle $C'PQ$ : isocèle en $C'$ (angles en $P$ et $Q$ égaux), de base $PQ=1$ et d'angle au sommet $30^\circ$. Loi du sinus :

   $$\displaystyle \frac{QC'}{\sin75^\circ}=\frac{PQ}{\sin30^\circ}\quad\text{donc}\quad QC'=\frac{\sin75^\circ}{\sin30^\circ}=2\sin75^\circ=\boxed{\frac{\sqrt6+\sqrt2}2} .$$

   Triangle $A'QR$ : en $A'$, $15^\circ$ ; en $R$, $75^\circ$ ; côté $QR=1$ opposé à $A'$ :

   $$\displaystyle \frac{QA'}{\sin75^\circ}=\frac{QR}{\sin15^\circ}\quad\text{donc}\quad QA'=\frac{\sin75^\circ}{\sin15^\circ}=\frac{\cos15^\circ}{\sin15^\circ}=\boxed{2+\sqrt3} .$$

4. Dans le triangle $A'QC'$ : angle en $C'$ égal à $30^\circ$, angle en $A'$ égal à $15^\circ$, donc l'angle en $Q$ vaut $135^\circ$. Loi du sinus ($A'C'$ est opposé à l'angle en $Q$) :

   $$\displaystyle \frac{A'C'}{\sin135^\circ}=\frac{QC'}{\sin15^\circ}\quad\text{donc}\quad A'C'=2\sin75^\circ\cdot\frac{\sin135^\circ}{\sin15^\circ}=2(2+\sqrt3)\cdot\frac{\sqrt2}2=\sqrt2\,(2+\sqrt3).$$

   Le triangle $A'B'C'$ est rectangle isocèle en $C'$ : $A'B'=\sqrt2\,A'C'=2(2+\sqrt3)$.

   $$\displaystyle \boxed{\frac{A'B'}{PQ}=4+2\sqrt3\approx7{,}464}$$

   **Contrôle :** l'inverse $\dfrac{PQ}{A'B'}=\dfrac{1}{4+2\sqrt3}=\dfrac{2-\sqrt3}2\approx0{,}134$, ce qui est $\dfrac{8\rho\sin15^\circ\sin15^\circ\sin30^\circ}{2\rho}$ avec $\rho$ le rayon circonscrit à $A'B'C'$ (formule du côté de Morley, [exercice n°275](/lycee/3eme/mathematiques/trigonometrie#ex-0000275)).

:::remark[Un triangle équilatéral dans un triangle rectangle isocèle]

On a ainsi construit à la règle et au compas un triangle rectangle isocèle avec ses six trisectrices. Pour la même idée avec un triangle quelconque, voir l'[exercice n°272](/lycee/2eme/sciences/trigonometrie#ex-0000272).

:::

:::intuition

On ne trisecte aucun angle : on construit un triangle qui *possède* des trisectrices, en bâtissant autour d'un triangle équilatéral.

:::

:::trap

La loi du sinus relie un côté à l'angle **opposé** : dans $A'QC'$, $A'C'$ est opposé à l'angle en $Q$ (et non en $C'$).

:::
