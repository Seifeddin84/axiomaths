---
uid: "0000239"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Challenge : de Ménélaüs à Céva"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "menelaus", "ceva", "challenge"]
provenance: own
---

Soit $ABC$ un triangle. Une droite $d$, qui ne passe par aucun sommet et n'est parallèle à aucun côté, coupe $(BC)$ en $D$, $(CA)$ en $E$ et $(AB)$ en $F$. Toutes les longueurs sont des nombres positifs.

![Figure de l'énoncé](/exercises/images/239-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000239.png)

1. La parallèle à $(BC)$ passant par $A$ coupe $d$ en $K$. Montrer que $\dfrac{FA}{FB}=\dfrac{AK}{BD}$ et $\dfrac{EC}{EA}=\dfrac{DC}{AK}$.

2. En déduire le théorème de Ménélaüs : $\dfrac{FA}{FB}\times\dfrac{DB}{DC}\times\dfrac{EC}{EA}=1$.

3. Application : $F\in[AB]$ avec $AF=\dfrac13AB$, $E\in[AC]$ avec $AE=\dfrac34AC$, et $BC=10$. Calculer $\dfrac{DB}{DC}$ puis $DC$. Où se trouve $D$ ?

4. *Théorème de Céva.* Soit $D\in[BC]$, $E\in[CA]$, $F\in[AB]$ tels que $(AD)$, $(BE)$ et $(CF)$ soient concourantes en $G$. Appliquer Ménélaüs au triangle $ABD$ avec la droite $(CF)$, puis au triangle $ADC$ avec la droite $(BE)$, pour montrer que $\dfrac{AF}{FB}\times\dfrac{BD}{DC}\times\dfrac{CE}{EA}=1$.

5. On admet la réciproque (si ce produit vaut $1$, les trois droites sont concourantes). Montrer que les trois médianes d'un triangle sont concourantes, puis que les trois bissectrices le sont, sachant que le pied $D$ de la bissectrice issue de $A$ vérifie $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

---

## Solution

> **Papillon (Thalès).** Si deux droites se coupent en $X$ avec $P,S$ sur l'une, $Q,R$ sur l'autre et $(PQ)\parallel(SR)$ : on part du sommet $X$ $\boxed{\dfrac{XP}{XS}=\dfrac{XQ}{XR}=\dfrac{PQ}{SR}}$.

1. $F=(AB)\cap(KD)$ et $(AK)\parallel(BD)$ : triangles $FAK$ et $FBD$ de sommet $F$.

   $$\displaystyle \dfrac{FA}{FB}=\dfrac{FK}{FD}=\dfrac{AK}{BD}$$

   $E=(AC)\cap(KD)$ et $(AK)\parallel(DC)$ : triangles $EAK$ et $ECD$ de sommet $E$.

   $$\displaystyle \dfrac{EA}{EC}=\dfrac{EK}{ED}=\dfrac{AK}{DC}\implies\dfrac{EC}{EA}=\dfrac{DC}{AK}$$

2. On multiplie les deux égalités de la question 1) :

   $$\displaystyle \dfrac{FA}{FB}\times\dfrac{EC}{EA}=\dfrac{AK}{BD}\times\dfrac{DC}{AK}=\dfrac{DC}{BD}$$

   On multiplie par $\dfrac{DB}{DC}$ (avec $BD=DB$) :

   $$\displaystyle \boxed{\dfrac{FA}{FB}\times\dfrac{DB}{DC}\times\dfrac{EC}{EA}=1}$$

3. $AF=\dfrac13\,AB$ donc $FB=\dfrac23\,AB$ et $\dfrac{FA}{FB}=\dfrac{1/3}{2/3}=\dfrac12$.

   $AE=\dfrac34\,AC$ donc $EC=\dfrac14\,AC$ et $\dfrac{EC}{EA}=\dfrac{1/4}{3/4}=\dfrac13$.

   Ménélaüs :

   $$\displaystyle \dfrac12\times\dfrac{DB}{DC}\times\dfrac13=1\implies\dfrac{DB}{DC}=6$$

   $D$ est à l'extérieur de $[BC]$ (la droite $d$ coupe deux côtés du triangle, donc le troisième à l'extérieur) et $DB>DC$ : $D$ est au-delà de $C$. Donc $DB=DC+10$ :

   $$\displaystyle DC+10=6\,DC\implies5\,DC=10\implies\boxed{DC=2}\qquad DB=12$$

4. **Triangle $ABD$ et droite $(CF)$.** Elle coupe $(AB)$ en $F$, $(BD)$ en $C$ et $(AD)$ en $G$. Ménélaüs (dans l'ordre $A\to B\to D\to A$) :

   $$\displaystyle \dfrac{FA}{FB}\times\dfrac{CB}{CD}\times\dfrac{GD}{GA}=1$$

   **Triangle $ADC$ et droite $(BE)$.** Elle coupe $(AD)$ en $G$, $(DC)$ en $B$ et $(CA)$ en $E$. Ménélaüs (dans l'ordre $A\to D\to C\to A$) :

   $$\displaystyle \dfrac{GA}{GD}\times\dfrac{BD}{BC}\times\dfrac{EC}{EA}=1$$

   On multiplie membre à membre. Les produits $\dfrac{GD}{GA}\times\dfrac{GA}{GD}$ et $\dfrac{CB}{BC}$ valent $1$ et disparaissent :

   $$\displaystyle \boxed{\dfrac{AF}{FB}\times\dfrac{BD}{DC}\times\dfrac{CE}{EA}=1}$$

5. **Médianes.** $D$, $E$, $F$ sont les milieux des côtés : chaque rapport vaut $1$, le produit vaut $1$. D'après la réciproque de Céva, les trois médianes sont concourantes.

   **Bissectrices.** Avec $a=BC$, $b=CA$, $c=AB$ et le théorème de la bissectrice :

   $$\displaystyle \dfrac{BD}{DC}=\dfrac cb\qquad\dfrac{CE}{EA}=\dfrac ac\qquad\dfrac{AF}{FB}=\dfrac ba$$

   $$\displaystyle \dfrac{AF}{FB}\times\dfrac{BD}{DC}\times\dfrac{CE}{EA}=\dfrac ba\times\dfrac cb\times\dfrac ac=1$$

   Les trois bissectrices sont concourantes : leur point commun est le centre du cercle inscrit.

**Idée :** la parallèle à $(BC)$ menée par $A$ fait apparaître le segment $AK$ qui s'élimine dans le produit.    **Piège :** écrire les rapports dans un ordre non cyclique : on lit chaque côté dans le sens $A\to B\to C\to A$.
