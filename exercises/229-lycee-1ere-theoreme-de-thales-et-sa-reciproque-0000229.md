---
uid: "0000229"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa Réciproque"
source: "Axiomaths"
title: "La bissectrice et Thalès"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "bissectrice", "theoreme-de-la-bissectrice", "proportionnalite", "droites-paralleles"]
provenance: own
dressing: "démontrer le théorème de la bissectrice avec Thalès"
rung: 5
---

Soit $ABC$ un triangle et $D\in[BC]$ le pied de la bissectrice de $\widehat{BAC}$. La parallèle à $(AD)$ passant par $C$ coupe la droite $(AB)$ en $E$ ; on admet que $A$ est entre $B$ et $E$.

![Figure de l'énoncé](/exercises/images/229-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000229.png)

1.
   a. Montrer que $\widehat{AEC}=\widehat{BAD}$ et $\widehat{ACE}=\widehat{CAD}$.

   b. En déduire que $AE=AC$. [triangle isocèle]

2. Par Thalès dans le triangle $BCE$, montrer que $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

3. Application : $AB=6$, $AC=9$ et $BC=10$. Calculer $DB$ et $DC$.

4. Soit $I$ le point d'intersection de $[AD]$ et de la bissectrice de $\widehat{ABC}$. En appliquant 2) au triangle $ABD$, montrer que $\dfrac{IA}{ID}=\dfrac{BA}{BD}$, puis que $\dfrac{IA}{ID}=\dfrac{AB+AC}{BC}$. Calculer $\dfrac{IA}{ID}$ avec les données de 3).

5. Montrer que $I$ n'est jamais le milieu de $[AD]$.

---

## Solution

> **Angles et parallèles.** Si deux droites sont parallèles, une sécante forme avec elles des angles **alternes-internes égaux** et des angles **correspondants égaux**.

> **Triangle isocèle.** Un triangle qui a deux angles égaux est isocèle : **les côtés opposés à ces angles sont égaux**.

1.
   a. $(CE)\parallel(AD)$.

   Avec la sécante $(AC)$, les angles $\widehat{ACE}$ et $\widehat{CAD}$ sont **alternes-internes** : ils sont égaux.

   Avec la sécante $(BE)$, les angles $\widehat{AEC}$ et $\widehat{BAD}$ sont **correspondants** : ils sont égaux.

   b. $(AD)$ est la bissectrice de $\widehat{BAC}$ : $\widehat{BAD}=\widehat{CAD}$. On enchaîne :

   $$\displaystyle \widehat{AEC}=\widehat{BAD}=\widehat{CAD}=\widehat{ACE}$$

   Le triangle $ACE$ a deux angles égaux (en $E$ et en $C$) : il est isocèle en $A$, donc $\boxed{AE=AC}$.

2.
   > **Théorème de Thalès.** Dans le triangle $BCE$, si $D\in[BC]$, $A\in[BE]$ et $(AD)\parallel(CE)$, alors en partant du sommet $B$ :
   >
   > $$\displaystyle \boxed{\dfrac{BC}{BD}=\dfrac{BE}{BA}=\dfrac{CE}{AD}}$$

   On sort du sommet $B$ et on le garde dans les deux rapports :

   $$\displaystyle \dfrac{BC}{BD}=\dfrac{BE}{BA}$$

   Le point $A$ est entre $B$ et $E$, et $AE=AC$ d'après la question 1) b) :

   $$\displaystyle BE=BA+AE=AB+AC$$

   On décompose chaque côté :

   $$\displaystyle \dfrac{BD+DC}{BD}=\dfrac{AB+AC}{AB}\implies1+\dfrac{DC}{BD}=1+\dfrac{AC}{AB}$$

   On retire $1$ des deux côtés :

   $$\displaystyle \dfrac{DC}{BD}=\dfrac{AC}{AB}$$

   On inverse les deux rapports :

   $$\displaystyle \dfrac{DB}{DC}=\boxed{\dfrac{AB}{AC}}$$

3. D'après la question 2) :

   $$\displaystyle \dfrac{BC}{BD}=\dfrac{AB+AC}{AB}=\dfrac{6+9}6=\dfrac{15}6$$

   $$\displaystyle BD=BC\times\dfrac6{15}=10\times\dfrac25=\boxed{4}\qquad DC=BC-BD=10-4=\boxed{6}$$

   Contrôle : $\dfrac{DB}{DC}=\dfrac46=\dfrac23=\dfrac69=\dfrac{AB}{AC}$.

4. Comme $D\in[BC]$, la bissectrice de $\widehat{ABC}$ est aussi celle de $\widehat{ABD}$. Dans le triangle $ABD$, la droite $(BI)$ est donc la bissectrice de $\widehat{ABD}$ et coupe $[AD]$ en $I$. La question 2), appliquée à ce triangle (sommet $B$ à la place de $A$), donne :

   $$\displaystyle \dfrac{IA}{ID}=\dfrac{BA}{BD}$$

   On écrit $\dfrac{BA}{BD}$ à partir du rapport $\dfrac{BC}{BD}=\dfrac{AB+AC}{AB}$ de la question 2) :

   $$\displaystyle \dfrac{BA}{BD}=\dfrac{BC}{BD}\times\dfrac{BA}{BC}=\dfrac{AB+AC}{AB}\times\dfrac{AB}{BC}=\boxed{\dfrac{AB+AC}{BC}}$$

   Avec les données : $\dfrac{6+9}{10}=\dfrac32$. Contrôle : $\dfrac{BA}{BD}=\dfrac64=\dfrac32$.

5.
   > **Inégalité triangulaire.** Dans un triangle, **un côté est plus petit que la somme des deux autres** : $BC<AB+AC$.

   Donc $\dfrac{IA}{ID}=\dfrac{AB+AC}{BC}>1$, c'est-à-dire $IA>ID$.

   $I$ est donc toujours plus proche de $D$ que de $A$ : ce n'est jamais le milieu de $[AD]$.

**Idée :** une parallèle à la bissectrice transforme les angles égaux en un triangle isocèle ; on applique ensuite Thalès depuis le sommet $B$.    **Piège :** écrire $\dfrac{DB}{DC}=\dfrac{AC}{AB}$ : le rapport est inversé.
