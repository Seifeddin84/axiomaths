---
uid: "0000237"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Un parallélogramme inscrit dans un triangle"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "parallelogramme-inscrit", "aire", "optimisation"]
provenance: own
---

Soit $ABC$ un triangle, $a=BC$ et $c=BA$. Pour $0<x<1$, on place $M\in[AB]$ tel que $AM=x\,AB$, puis $N\in[AC]$ tel que $(MN)\parallel(BC)$ et $P\in[BC]$ tel que $(NP)\parallel(AB)$.

![Figure de l'énoncé](/exercises/images/237-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000237.png)

1. Montrer que $MBPN$ est un parallélogramme et que $MN=BP=x\,a$. Exprimer $MB$ en fonction de $x$ et $c$.

2. Exprimer le périmètre $p(x)$ de $MBPN$. À quelle condition sur $a$ et $c$ ce périmètre ne dépend-il pas de $x$ ?

3. On suppose désormais $BA=BC=8$ et l'aire de $ABC$ égale à $24$. Calculer la hauteur $h$ issue de $A$, puis montrer que l'aire de $MBPN$ vaut $48\,x(1-x)$. [La distance entre $(MN)$ et $(BC)$ est $(1-x)\,h$.]

4. Pour quelles valeurs de $x$ l'aire de $MBPN$ vaut-elle $9$ ? $13$ ? Quelle est l'aire maximale ? [Écrire $x(1-x)=\dfrac14-\big(x-\dfrac12\big)^2$.]

5. Pour quelle valeur de $x$ le parallélogramme $MBPN$ est-il un losange ? Que remarque-t-on ?

---

## Solution

> **Thalès et parallélogramme.** $(MN)\parallel(BC)$ donne, depuis le sommet $A$ : $\boxed{\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}}$. Un quadrilatère dont les côtés opposés sont parallèles deux à deux est un parallélogramme : **ses côtés opposés sont égaux**.

1. $(MN)\parallel(BC)=(BP)$ et $(NP)\parallel(AB)=(MB)$ : les côtés opposés de $MBPN$ sont parallèles deux à deux, c'est un parallélogramme. Donc $MN=BP$.

   Thalès de sommet $A$ dans le triangle $ABC$ :

   $$\displaystyle \dfrac{MN}{BC}=\dfrac{AM}{AB}=x\implies MN=BP=\boxed{x\,a}$$

   Enfin :

   $$\displaystyle MB=AB-AM=c-x\,c=\boxed{(1-x)\,c}$$

2. Le périmètre est deux fois la somme de deux côtés consécutifs :

   $$\displaystyle p(x)=2\big(x\,a+(1-x)\,c\big)=2c+2x\,(a-c)$$

   Il ne dépend pas de $x$ si et seulement si le coefficient de $x$ est nul : $a=c$. Alors $p(x)=2c$ (le triangle est isocèle en $B$).

3. Avec $BA=BC=8$ et aire $24$ :

   $$\displaystyle \dfrac12\times8\times h=24\implies4h=24\implies h=6$$

   Soit $H$ le pied de la hauteur issue de $A$ et $K=(AH)\cap(MN)$. Thalès de sommet $A$ dans le triangle $ABH$ :

   $$\displaystyle \dfrac{AK}{AH}=\dfrac{AM}{AB}=x\implies AK=x\,h$$

   La distance entre $(MN)$ et $(BC)$ est donc :

   $$\displaystyle KH=AH-AK=(1-x)\,h=6(1-x)$$

   L'aire d'un parallélogramme est base $\times$ hauteur, avec la base $BP=8x$ :

   $$\displaystyle \text{aire}(MBPN)=8x\times6(1-x)=\boxed{48\,x(1-x)}$$

4. **Aire $9$.**

   $$\displaystyle 48x(1-x)=9\iff48x^2-48x+9=0\iff x^2-x+\dfrac3{16}=0\iff\left(x-\dfrac14\right)\left(x-\dfrac34\right)=0$$

   $$\displaystyle x=\dfrac14\quad\text{ou}\quad x=\dfrac34$$

   **Aire $13$.** On utilise l'indication :

   $$\displaystyle x(1-x)=\dfrac14-\left(x-\dfrac12\right)^2\leq\dfrac14$$

   Donc l'aire est au plus $48\times\dfrac14=12<13$ : **aucune solution**. (Le discriminant de $48x^2-48x+13$ vaut $-192<0$.)

   **Aire maximale :** $12$, atteinte pour $x=\dfrac12$ (quand $\left(x-\dfrac12\right)^2=0$).

5. Un parallélogramme est un losange si deux côtés consécutifs sont égaux :

   $$\displaystyle MB=BP\iff(1-x)\times8=x\times8\iff1-x=x\iff x=\dfrac12$$

   On retrouve la valeur du maximum : $M$, $N$, $P$ sont les milieux des côtés, le périmètre est $16$ et l'aire $12$ est la moitié de celle de $ABC$.

**Idée :** le périmètre est une fonction affine de $x$ de pente $2(a-c)$ ; l'aire est un produit $x(1-x)$, maximal quand les deux facteurs sont égaux.    **Piège :** oublier que $x$ reste dans $]0,1[$ et chercher une valeur $x>1$ pour l'aire $13$.
