---
uid: "0000234"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Le carré inscrit"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "triangle", "hauteur", "equation"]
provenance: own
dressing: "carré inscrit dans un triangle"
rung: 3
---

Soit $ABC$ un triangle, $a=BC$ et $h=AH$ la hauteur issue de $A$ ($H\in[BC]$). On inscrit dans $ABC$ un carré $PQRS$ de côté $s$, avec $P,Q\in[BC]$, $S\in[AB]$ et $R\in[AC]$ ; la hauteur $[AH]$ coupe $[SR]$ en $K$.

![Figure de l'énoncé](/exercises/images/234-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000234.png)

1. Justifier que $(SR)\parallel(BC)$ et que $AK=h-s$.

2. Écrire Thalès dans le triangle $ABC$ pour montrer que $\dfrac sa=\dfrac{h-s}h$, puis que $s=\dfrac{ah}{a+h}$.

3. Calculer $s$ pour $a=15$ et $h=10$.

4. Le triangle $ABC$ a pour côtés $13$, $14$ et $15$ (aire $84$). On inscrit un carré sur chacun des trois côtés. Calculer les trois côtés (valeurs exactes) et les ranger.

5. Montrer que l'aire du carré inscrit est au plus la moitié de l'aire du triangle, avec égalité si et seulement si $a=h$.

---

## Solution

> **Thalès.** Si $(SR)\parallel(BC)$ avec $S\in[AB]$, $R\in[AC]$ et $K=(SR)\cap(AH)$ : $\boxed{\dfrac{SR}{BC}=\dfrac{AS}{AB}=\dfrac{AK}{AH}}$.

1. $PQRS$ est un carré : ses côtés opposés sont parallèles, donc $(SR)\parallel(PQ)=(BC)$.

   Les droites $(AH)$ et $(SP)$ sont perpendiculaires à $(BC)$ : $(AH)\parallel(SP)$. Les points $S$, $K$ sont à la même hauteur : $KH=SP=s$.

   $$\displaystyle AK=AH-KH=\boxed{h-s}$$

2. On sort du sommet $A$ dans le triangle $ABC$, avec $S\in[AB]$, $R\in[AC]$ et $(SR)\parallel(BC)$ :

   $$\displaystyle \dfrac{AS}{AB}=\dfrac{AR}{AC}=\dfrac{SR}{BC}=\dfrac sa$$

   Dans le triangle $ABH$, on a $S\in[AB]$, $K\in[AH]$ et $(SK)\parallel(BH)$. Thalès, toujours de sommet $A$ :

   $$\displaystyle \dfrac{AS}{AB}=\dfrac{AK}{AH}=\dfrac{h-s}h$$

   Les deux rapports sont égaux à $\dfrac{AS}{AB}$ :

   $$\displaystyle \boxed{\dfrac sa=\dfrac{h-s}h}$$

   On calcule en croix, puis on isole $s$ :

   $$\displaystyle sh=a(h-s)\iff sh+as=ah\iff s(a+h)=ah\iff\boxed{s=\dfrac{ah}{a+h}}$$

3. Avec $a=15$ et $h=10$ :

   $$\displaystyle s=\dfrac{15\times10}{15+10}=\dfrac{150}{25}=6$$

4. L'aire vaut $84$, donc $\dfrac12\,a\,h=84$, soit $ah=168$ pour chaque côté. Ainsi $h=\dfrac{168}a$ et $s=\dfrac{168}{a+h}$.

   **Côté $13$ :** $h=\dfrac{168}{13}$, $a+h=13+\dfrac{168}{13}=\dfrac{337}{13}$ :

   $$\displaystyle s=168\times\dfrac{13}{337}=\dfrac{2184}{337}\approx6{,}481$$

   **Côté $14$ :** $h=12$, $a+h=26$ :

   $$\displaystyle s=\dfrac{168}{26}=\dfrac{84}{13}\approx6{,}462$$

   **Côté $15$ :** $h=\dfrac{56}5$, $a+h=15+\dfrac{56}5=\dfrac{131}5$ :

   $$\displaystyle s=168\times\dfrac5{131}=\dfrac{840}{131}\approx6{,}412$$

   On range : $\dfrac{337}{13}\approx25{,}9<26<\dfrac{131}5=26{,}2$. Plus $a+h$ est petit, plus $s$ est grand :

   $$\displaystyle s_{13}>s_{14}>s_{15}$$

   Le plus grand carré est inscrit sur le plus petit côté.

5. L'aire du triangle est $\dfrac{ah}2$. On compare $s^2$ avec la moitié de cette aire :

   $$\displaystyle s^2\leq\dfrac12\times\dfrac{ah}2\iff\dfrac{a^2h^2}{(a+h)^2}\leq\dfrac{ah}4\iff4ah\leq(a+h)^2$$

   (on a divisé par $ah>0$ et multiplié par $4(a+h)^2>0$).

   $$\displaystyle 4ah\leq(a+h)^2\iff0\leq(a+h)^2-4ah=(a-h)^2$$

   Cette dernière inégalité est toujours vraie, avec égalité si et seulement si $a=h$.

**Idée :** la parallèle $(SR)$ détermine un triangle $ASR$ réduit de $ABC$, et $\dfrac1s=\dfrac1a+\dfrac1h$.    **Piège :** croire que $K$ est le milieu de $[AH]$.
