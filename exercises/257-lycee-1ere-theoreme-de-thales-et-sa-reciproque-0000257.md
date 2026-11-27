---
uid: "0000257"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Résultat classique (cas particulier du théorème de Routh). Pour l'histoire : Steinhaus, Mathematical Snapshots (1960) ; Cook & Wood, Mathematical Gazette 88 (2004)."
title: "Le triangle de Feynman"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: null
tags: ["thales", "triangle-de-feynman", "aires", "theoreme-de-routh", "fractions"]
provenance: adapted
source_url: "https://en.wikipedia.org/wiki/One-seventh_area_triangle"
adapted_from: "résultat classique, énoncé et chiffres Axiomaths"
source_checked: true
dressing: "triangle de Feynman : rapport d'aires"
rung: 5
---

Soit $ABC$ un triangle d'aire $\mathcal S$. On place $D\in[BC]$, $E\in[CA]$ et $F\in[AB]$ tels que $BD=\dfrac13BC$, $CE=\dfrac13CA$ et $AF=\dfrac13AB$. Les droites $(AD)$, $(BE)$ et $(CF)$ se coupent deux à deux en $Q=(AD)\cap(BE)$, $P=(BE)\cap(CF)$ et $R=(CF)\cap(AD)$.

![Figure de l'énoncé](/exercises/images/257-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000257.png)

1. La parallèle à $(BE)$ passant par $D$ coupe $(AC)$ en $H$. Montrer que $CH=\dfrac29CA$, puis que $\dfrac{AQ}{AD}=\dfrac67$. [Thalès dans $CBE$, puis dans $ADH$.]

2. La parallèle à $(CF)$ passant par $D$ coupe $(AB)$ en $K$. Montrer que $\dfrac{AR}{AD}=\dfrac37$. Que vaut $\dfrac{RQ}{AD}$ ?

3. Montrer que l'aire du triangle $ABQ$ vaut $\dfrac27\mathcal S$.

4. On admet que les mêmes calculs, en permutant les lettres $A\to B\to C\to A$ et $D\to E\to F\to D$, donnent aire$(BCP)=$ aire$(CAR)=\dfrac27\mathcal S$, et que $ABC$ est la réunion des triangles $ABQ$, $BCP$, $CAR$ et $PQR$, sans recouvrement. Montrer que aire$(PQR)=\dfrac17\mathcal S$.

5. Plus généralement, soit $t\in\left]0,\dfrac12\right[$ et $BD=t\,BC$, $CE=t\,CA$, $AF=t\,AB$. Montrer que $\dfrac{AQ}{AD}=\dfrac{1-t}{1-t+t^2}$, puis que

   $$\displaystyle \dfrac{\text{aire}(PQR)}{\mathcal S}=\dfrac{(1-2t)^2}{1-t+t^2}.$$

6. Pour quelle valeur de $t$ ce rapport vaut-il $\dfrac17$ ? Que se passe-t-il quand $t$ tend vers $\dfrac12$ ?

---

## Solution

> **Thalès, de sommet $X$.** Dans le triangle $XYZ$, si $U\in[XY]$, $V\in[XZ]$ et $(UV)\parallel(YZ)$, alors en partant du sommet $X$ :
>
> $$\boxed{\dfrac{XU}{XY}=\dfrac{XV}{XZ}=\dfrac{UV}{YZ}}$$

> **Aires et rapport des bases.** Deux triangles qui ont un sommet commun et dont les bases sont sur une même droite ont des aires dans le rapport de leurs bases : **aire $=\dfrac12\times\text{base}\times\text{hauteur}$**, la hauteur est la même.

1. **Le point $H$.** Dans le triangle $CBE$, on a $D\in[CB]$, $H\in[CE]$ et $(DH)\parallel(BE)$. Thalès de sommet $C$ :

   $$\displaystyle \dfrac{CD}{CB}=\dfrac{CH}{CE}=\dfrac{DH}{BE}$$

   Comme $BD=\dfrac13BC$, on a $CD=\dfrac23CB$. Donc :

   $$\displaystyle CH=\dfrac23\,CE=\dfrac23\times\dfrac13\,CA=\boxed{\dfrac29\,CA}$$

   Le point $H$ est bien dans $[CE]$ car $\dfrac29<\dfrac13$.

   **Les longueurs sur $[AC]$.**

   $$\displaystyle AE=CA-CE=\dfrac23\,CA\qquad AH=CA-CH=\dfrac79\,CA$$

   **Le point $Q$.** Dans le triangle $ADH$, on a $Q\in[AD]$, $E\in[AH]$ et $(QE)=(BE)\parallel(DH)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AQ}{AD}=\dfrac{AE}{AH}=\dfrac{2/3}{7/9}=\dfrac23\times\dfrac97=\boxed{\dfrac67}$$

2. **Le point $K$.** Dans le triangle $BCF$, on a $D\in[BC]$, $K\in[BF]$ et $(DK)\parallel(CF)$. Thalès de sommet $B$ :

   $$\displaystyle \dfrac{BD}{BC}=\dfrac{BK}{BF}=\dfrac13$$

   Or $BF=AB-AF=\dfrac23AB$. Donc :

   $$\displaystyle BK=\dfrac13\times\dfrac23\,AB=\dfrac29\,AB\qquad AK=AB-BK=\dfrac79\,AB$$

   **Le point $R$.** Dans le triangle $ADK$, on a $R\in[AD]$, $F\in[AK]$ et $(RF)=(CF)\parallel(DK)$. Thalès de sommet $A$ :

   $$\displaystyle \dfrac{AR}{AD}=\dfrac{AF}{AK}=\dfrac{1/3}{7/9}=\dfrac13\times\dfrac97=\boxed{\dfrac37}$$

   **Le segment $[RQ]$.**

   $$\displaystyle \dfrac{RQ}{AD}=\dfrac{AQ}{AD}-\dfrac{AR}{AD}=\dfrac67-\dfrac37=\dfrac37$$

   Sur $[AD]$, les segments $AR$, $RQ$, $QD$ sont dans le rapport $3:3:1$.

3. Les triangles $ABD$ et $ABC$ ont le sommet $A$ en commun et leurs bases $[BD]$ et $[BC]$ sont sur $(BC)$ :

   $$\displaystyle \text{aire}(ABD)=\dfrac{BD}{BC}\,\mathcal S=\dfrac13\,\mathcal S$$

   Les triangles $ABQ$ et $ABD$ ont le sommet $B$ en commun et leurs bases $[AQ]$ et $[AD]$ sont sur $(AD)$ :

   $$\displaystyle \text{aire}(ABQ)=\dfrac{AQ}{AD}\,\text{aire}(ABD)=\dfrac67\times\dfrac13\,\mathcal S=\boxed{\dfrac27\,\mathcal S}$$

4. Les quatre triangles recouvrent $ABC$ sans se chevaucher :

   $$\displaystyle \text{aire}(ABQ)+\text{aire}(BCP)+\text{aire}(CAR)+\text{aire}(PQR)=\mathcal S$$

   On remplace les trois premières aires :

   $$\displaystyle 3\times\dfrac27\,\mathcal S+\text{aire}(PQR)=\mathcal S$$

   $$\displaystyle \text{aire}(PQR)=\mathcal S-\dfrac67\,\mathcal S=\boxed{\dfrac17\,\mathcal S}$$

5. On refait les questions 1) à 3) avec la lettre $t$ à la place de $\dfrac13$.

   **Le point $H$.** Thalès de sommet $C$ dans $CBE$ : $\dfrac{CH}{CE}=\dfrac{CD}{CB}=1-t$. Comme $CE=t\,CA$ :

   $$\displaystyle CH=t(1-t)\,CA\qquad AH=CA-CH=(1-t+t^2)\,CA\qquad AE=CA-CE=(1-t)\,CA$$

   **Le point $Q$.** Thalès de sommet $A$ dans $ADH$ :

   $$\displaystyle \dfrac{AQ}{AD}=\dfrac{AE}{AH}=\boxed{\dfrac{1-t}{1-t+t^2}}$$

   **L'aire de $ABQ$.** On a aire$(ABD)=t\,\mathcal S$ (même raisonnement qu'à la question 3). Donc :

   $$\displaystyle \text{aire}(ABQ)=\dfrac{1-t}{1-t+t^2}\times t\,\mathcal S=\dfrac{t(1-t)}{1-t+t^2}\,\mathcal S$$

   **L'aire de $PQR$.** Par permutation circulaire, les trois triangles $ABQ$, $BCP$, $CAR$ ont la même aire :

   $$\displaystyle \text{aire}(PQR)=\mathcal S-\dfrac{3t(1-t)}{1-t+t^2}\,\mathcal S=\dfrac{1-t+t^2-3t+3t^2}{1-t+t^2}\,\mathcal S$$

   Le numérateur est $1-4t+4t^2=(1-2t)^2$ :

   $$\displaystyle \boxed{\dfrac{\text{aire}(PQR)}{\mathcal S}=\dfrac{(1-2t)^2}{1-t+t^2}}$$

   Contrôle pour $t=\dfrac13$ : $\dfrac{(1/3)^2}{1-\frac13+\frac19}=\dfrac{1/9}{7/9}=\dfrac17$.

6. On résout $\dfrac{(1-2t)^2}{1-t+t^2}=\dfrac17$. Le dénominateur est positif :

   $$\displaystyle 7(1-2t)^2=1-t+t^2\iff7-28t+28t^2=1-t+t^2\iff27t^2-27t+6=0$$

   On divise par $3$ :

   $$\displaystyle 9t^2-9t+2=0\iff(3t-1)(3t-2)=0\iff t=\dfrac13\ \text{ ou }\ t=\dfrac23$$

   Seule la valeur $\dfrac13$ est dans $\left]0,\dfrac12\right[$ : $\boxed{t=\dfrac13}$.

   Quand $t$ tend vers $\dfrac12$, le numérateur $(1-2t)^2$ tend vers $0$ : le triangle $PQR$ se réduit à un point. Pour $t=\dfrac12$, les trois droites sont les médianes, qui sont concourantes.

**Idée :** pour atteindre un point situé sur deux céviennes, on « transporte » une droite par une parallèle menée par $D$, puis on lit Thalès depuis le sommet $A$.    **Piège :** écrire $\dfrac{AQ}{QD}$ au lieu de $\dfrac{AQ}{AD}$ : Thalès porte sur les côtés entiers.
