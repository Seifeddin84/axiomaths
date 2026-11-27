---
uid: "0000402"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Coniques"
source: "Bac 2001 principale, Ex. 2"
title: "Parabole, tangentes perpendiculaires et lieu du sommet"
country: "Tunisie"
year: 2001
professor: null
difficulty: "Difficile"
points: 5
tags: ["parabole", "coniques", "lieu-geometrique", "defi", "bac"]
bac: "2001-principale-maths"
dressing: "tangentes perpendiculaires à une parabole"
rung: 5
---

Soient $F$ et $H$ deux points distincts, $\Delta$ la médiatrice de $[FH]$ et $J$ le milieu de $[FH]$.

Soit $M$ un point de $\Delta$ et $D$ la droite passant par $H$ et perpendiculaire à la droite $(MH)$.

On désigne par $\mathcal{P}$ la parabole de foyer $F$ et de directrice $D$.

1. a. Montrer que $\Delta$ est la tangente à $\mathcal{P}$ au point $M$.

   b. Vérifier que les droites $D$ et $\Delta$ sont parallèles si et seulement si $M=J$.

2. Dans le cas où le point $M$ est différent de $J$, la droite $D$ coupe $\Delta$ en $I$. Soit $E$ le symétrique de $H$ par rapport à $I$ et $\Delta'$ la perpendiculaire à $\Delta$ en $I$.

   a. Montrer que $\Delta'$ est tangente à la parabole $\mathcal{P}$.

   b. Construire le point de contact $N$ de la parabole $\mathcal{P}$ et de la droite $\Delta'$ et montrer que les points $M$, $F$ et $N$ sont alignés.

3. a. Soit $S$ le sommet de la parabole $\mathcal{P}$. Montrer que le point $J$ appartient à la tangente au sommet à la parabole $\mathcal{P}$ et en déduire que $S$ appartient au cercle $\mathcal{C}$ de diamètre $[FJ]$.

   b. Soit $R$ un point de $\mathcal{C}$ distinct de $F$. Montrer que la parabole de foyer $F$ et de sommet $R$ est tangente à $\Delta$ en un point que l'on déterminera.

      (Il est conseillé de faire une figure séparée pour cette question.)

   c. Déterminer alors l'ensemble des points $S$ quand le point $M$ varie sur $\Delta$.

---

## Solution

:::property[Parabole, tangente, sommet]
La parabole de foyer $F$ et de directrice $D$ ($F\notin D$) est l'ensemble des points $X$ tels que $\boxed{XF=d(X,D)}$.

**Tangente.** Si $X\in\mathcal{P}$ et si $X_0$ est son projeté orthogonal sur $D$, la tangente à $\mathcal{P}$ en $X$ est $\boxed{\text{la médiatrice de }[FX_0]}$.

**Sommet.** Si $K$ est le projeté orthogonal de $F$ sur $D$, le sommet est le milieu de $[FK]$ ; l'axe est $(FK)$ et la tangente au sommet est la perpendiculaire à l'axe en ce point, donc **parallèle à $D$**.
:::

:::property[Symétries axiales]
Si $s_\Delta$ est la symétrie orthogonale d'axe $\Delta$ et si $X\in\Delta$, alors $\overrightarrow{XY'}=\vec{s}_\Delta\left(\overrightarrow{XY}\right)$ où $Y'=s_\Delta(Y)$.

Si $\Delta\perp\Delta'$ en $I$, alors $s_\Delta\circ s_{\Delta'}=s_I$ (symétrie centrale) et, pour les vecteurs, $\boxed{\vec{s}_{\Delta'}=-\vec{s}_\Delta}$.
:::

**Remarque préliminaire.** $F\notin D$. En effet, si $F\in D$, comme $H\in D$ on aurait $D=(FH)$ donc $(MH)\perp(FH)$ : $M$ serait sur la perpendiculaire à $(FH)$ en $H$, qui est parallèle à $\Delta$ et distincte de $\Delta$. Impossible puisque $M\in\Delta$. La parabole $\mathcal{P}$ est donc bien définie.

1. a. $M\in\Delta$, médiatrice de $[FH]$, donc $MF=MH$.

   La droite $D$ est perpendiculaire à $(MH)$ en $H$ : $H$ est le projeté orthogonal de $M$ sur $D$, donc $d(M,D)=MH$.

   Ainsi $MF=d(M,D)$ : $M\in\mathcal{P}$, et $H$ est son projeté sur $D$.

   D'après le rappel, la tangente en $M$ est la médiatrice de $[FH]$, c'est-à-dire $\boxed{\Delta}$.

   b. $D\perp(MH)$ et $\Delta\perp(FH)$. Deux droites sont parallèles si et seulement si leurs perpendiculaires le sont :

   $$\displaystyle D\parallel\Delta\iff(MH)\parallel(FH)\iff(MH)=(FH)\quad(\text{elles passent par }H).$$

   Cela signifie $M\in(FH)$. Comme $M\in\Delta$ et que $\Delta\cap(FH)=\{J\}$, on obtient $\boxed{M=J}$.

2. Désormais $M\neq J$, donc $D$ et $\Delta$ sont sécantes en $I$ (d'après 1.b.).

   a. **$E$ appartient à $D$** : $H$ et $I$ sont sur $D$, donc leur symétrique de $H$ par rapport à $I$ aussi.

   **$\Delta'$ est la médiatrice de $[FE]$.** Comme $\Delta\perp\Delta'$ en $I$, on a $s_I=s_{\Delta'}\circ s_\Delta$ (rappel). Donc

   $$\displaystyle E=s_I(H)=s_{\Delta'}\left(s_\Delta(H)\right)=s_{\Delta'}(F),$$

   car $s_\Delta(H)=F$. Ainsi $E$ est le symétrique de $F$ par rapport à $\Delta'$ : $\Delta'$ est la médiatrice de $[FE]$.

   **Le point $N$.** Soit $\Delta''$ la perpendiculaire à $D$ en $E$. Les droites $\Delta''$ et $\Delta'$ sont sécantes : elles seraient parallèles si $\Delta'\perp D$, c'est-à-dire si $D\parallel\Delta$, ce qui est exclu pour $M\neq J$. Notons $N$ leur point commun.

   - $N\in\Delta'$ : $NF=NE$.
   - $N\in\Delta''$ : $E$ est le projeté orthogonal de $N$ sur $D$, donc $NE=d(N,D)$.

   Donc $NF=d(N,D)$ : $N\in\mathcal{P}$ et son projeté sur $D$ est $E$.

   D'après le rappel, la tangente à $\mathcal{P}$ en $N$ est la médiatrice de $[FE]$, c'est-à-dire $\boxed{\Delta'}$. **$\Delta'$ est donc tangente à $\mathcal{P}$, en $N$.**

   b. **Construction de $N$.** On construit successivement : $D$ (perpendiculaire à $(MH)$ en $H$), $I=D\cap\Delta$, $E$ (symétrique de $H$ par rapport à $I$), $\Delta'$ (perpendiculaire à $\Delta$ en $I$), la perpendiculaire à $D$ en $E$ ; leur intersection avec $\Delta'$ est $N$.

   ![Parabole de foyer F, tangentes Δ en M et Δ' en N, points M, F, N alignés](/exercises/images/402-lycee-4eme-maths-coniques-0000402.png)

   **Alignement.** $M\in\Delta$ et $F=s_\Delta(H)$, donc $\overrightarrow{MF}=\vec{s}_\Delta\left(\overrightarrow{MH}\right)$.

   De même $N\in\Delta'$ et $F=s_{\Delta'}(E)$, donc $\overrightarrow{NF}=\vec{s}_{\Delta'}\left(\overrightarrow{NE}\right)$.

   Les droites $(MH)$ et $(NE)$ sont toutes deux perpendiculaires à $D$, donc parallèles : il existe un réel $\lambda$ tel que $\overrightarrow{NE}=\lambda\overrightarrow{MH}$. Alors, avec $\vec{s}_{\Delta'}=-\vec{s}_\Delta$ :

   $$\displaystyle \overrightarrow{NF}=\lambda\,\vec{s}_{\Delta'}\left(\overrightarrow{MH}\right)=-\lambda\,\vec{s}_{\Delta}\left(\overrightarrow{MH}\right)=\boxed{-\lambda\,\overrightarrow{MF}}.$$

   Les vecteurs $\overrightarrow{NF}$ et $\overrightarrow{MF}$ sont colinéaires : **$M$, $F$, $N$ sont alignés** ($[MN]$ est une corde focale).

   *Contrôle* avec $F(-1,0)$, $H(1,0)$, $M(0,m)$, $m\neq0$ : $I\left(0,-\dfrac1m\right)$, $E\left(-1,-\dfrac2m\right)$, $N\left(-1-\dfrac1{m^2},-\dfrac1m\right)$ et $\overrightarrow{FN}=-\dfrac{1}{m^2}\overrightarrow{FM}$. ✓

3. a. Soit $K$ le projeté orthogonal de $F$ sur $D$ : $S$ est le milieu de $[FK]$ et la tangente au sommet $t_S$ est la parallèle à $D$ passant par $S$ (rappel).

   Si $K\neq H$, dans le triangle $FKH$ le point $S$ est le milieu de $[FK]$ et $J$ le milieu de $[FH]$. D'après la droite des milieux, $(SJ)\parallel(KH)=D$ : donc $(SJ)=t_S$ et $\boxed{J\in t_S}$.

   Si $K=H$ (c'est le cas $M=J$), $S$ est le milieu de $[FH]$, donc $S=J\in t_S$.

   **Déduction.** La tangente au sommet est perpendiculaire à l'axe $(FS)$. Si $S\neq J$, on a $(SF)\perp(SJ)$ : le triangle $FSJ$ est rectangle en $S$, donc $S$ est sur le cercle de diamètre $[FJ]$. Si $S=J$, c'est évident. Dans tous les cas $\boxed{S\in\mathcal{C}}$.

   b. Soit $\mathcal{P}_R$ la parabole de foyer $F$ et de sommet $R$ ($R\neq F$), $D_R$ sa directrice et $t_R$ sa tangente au sommet. Alors $t_R$ est la perpendiculaire en $R$ à l'axe $(FR)$.

   **Étape 1 : $J\in t_R$.** Si $R\neq J$, comme $R\in\mathcal{C}$ le triangle $FRJ$ est rectangle en $R$, donc $(RJ)\perp(FR)$ : $(RJ)=t_R$. Si $R=J$, $t_R$ est la perpendiculaire à $(FJ)$ en $J$, c'est-à-dire $\Delta$, qui contient $J$.

   **Étape 2 : $H\in D_R$.** $t_R$ est l'image de $D_R$ par l'homothétie de centre $F$ et de rapport $\dfrac12$ (le sommet est le milieu de $[FK_R]$ et $t_R\parallel D_R$). L'homothétie de centre $F$ et de rapport $2$ envoie donc $t_R$ sur $D_R$ et $J$ sur $H$ : on a $H\in D_R$.

   **Étape 3 : le point de contact.** Notons $T$ l'intersection de $\Delta$ avec la parallèle à $(FR)$ passant par $H$. Cette intersection existe : $(FR)\parallel\Delta$ signifierait $(FR)\perp(FJ)$, impossible dans le triangle $FRJ$ rectangle en $R$ (l'angle en $F$ est aigu ; si $R=J$, $(FR)=(FH)\perp\Delta$).

   - $T\in\Delta$ : $TF=TH$.
   - $(TH)\parallel(FR)\perp D_R$ et $H\in D_R$ : $H$ est le projeté orthogonal de $T$ sur $D_R$, donc $TH=d(T,D_R)$.

   Donc $TF=d(T,D_R)$ : $T\in\mathcal{P}_R$, de projeté $H$. La tangente en $T$ est la médiatrice de $[FH]$, c'est-à-dire $\boxed{\Delta}$.

   **La parabole $\mathcal{P}_R$ est tangente à $\Delta$ au point $T$, intersection de $\Delta$ et de la parallèle à $(FR)$ passant par $H$.**

   *Contrôle* avec $F(-1,0)$, $H(1,0)$, $J=O$ et $R\left(-\sin^2\dfrac t2,\ \sin\dfrac t2\cos\dfrac t2\right)\in\mathcal{C}$ : on trouve $T\left(0,-\tan\dfrac t2\right)$.

   c. **Première inclusion.** D'après 3.a., $S\in\mathcal{C}$. De plus $S\neq F$ : $S$ est le milieu de $[FK]$ avec $K\in D$ et $F\notin D$.

   **Réciproque.** Soit $R\in\mathcal{C}$, $R\neq F$. Prenons $M=T$, le point de $\Delta$ trouvé en 3.b.

   La directrice $D$ associée à $M=T$ est la perpendiculaire en $H$ à $(TH)$. Or $D_R$ passe par $H$ et est perpendiculaire à $(FR)\parallel(TH)$ : donc $D=D_R$.

   La parabole associée à $M=T$ a donc pour foyer $F$ et pour directrice $D_R$ : c'est $\mathcal{P}_R$, de sommet $R$. Ainsi $S=R$.

   **Conclusion :** l'ensemble des points $S$ est le cercle $\boxed{\mathcal{C}\text{ privé du point }F}$.

:::intuition
Quand $M$ parcourt $\Delta$, la directrice $D$ pivote autour de $H$. Le projeté $K$ de $F$ sur $D$ décrit le cercle de diamètre $[FH]$, et $S$, milieu de $[FK]$, en est l'image par l'homothétie de centre $F$ et de rapport $\dfrac12$ : le cercle de diamètre $[FJ]$. Le point $F$ lui-même correspond à la position limite $D=(FH)$, jamais atteinte.
:::

:::trap
Dire « $N$ existe » sans voir que cela exige $M\neq J$ (sinon $\Delta'\perp D$ et la perpendiculaire à $D$ en $E$ est parallèle à $\Delta'$), ou oublier d'exclure $F$ de l'ensemble final.
:::
