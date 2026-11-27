---
uid: "0000386"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Rotations"
source: "Axiomaths"
title: "Bonus : le théorème de Pompeiu"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["theoreme-de-pompeiu", "rotation", "triangle-equilateral", "inegalite-triangulaire", "defi"]
provenance: "adapted"
dressing: "bonus : PA, PB, PC forment un triangle"
rung: 3
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Soit $ABC$ un triangle équilatéral et $P$ un point quelconque du plan. On veut montrer que **$PA$, $PB$, $PC$ sont les longueurs des côtés d'un triangle, et que ce triangle est aplati si et seulement si $P$ est sur le cercle circonscrit à $ABC$.**

![Triangle équilatéral ABC, son cercle circonscrit en pointillés et un point P quelconque](/exercises/images/386-lycee-3eme-maths-rotations-0000386.png)

1. On suppose $ABC$ direct. Soit $\rho$ la rotation de centre $B$ qui envoie $A$ sur $C$ et $P'=\rho(P)$.

   a. Montrer que le triangle $BPP'$ est équilatéral et que $P'C=PA$.

   b. En déduire que $PA\leq PB+PC$, $PB\leq PC+PA$ et $PC\leq PA+PB$ : les trois nombres sont les longueurs des côtés d'un triangle (éventuellement aplati).

2. On munit le plan d'un repère orthonormé direct d'origine le centre de $ABC$, tel que $A$, $B$, $C$ aient pour affixes $1$, $j$, $j^2$, où $j=e^{2i\pi/3}$. Soit $p$ l'affixe de $P$.

   a. Montrer que $(p-1)+j(p-j)+j^2(p-j^2)=0$.

   b. En déduire que le triangle de côtés $PA$, $PB$, $PC$ est aplati si et seulement si les nombres $p-1$, $j(p-j)$, $j^2(p-j^2)$ sont « alignés » (leurs images sont sur une même droite passant par $O$).

   c. Montrer que $\mathrm{Im}\left[\bar j\,(p-1)\,\overline{(p-j)}\right]=\dfrac{\sqrt3}{2}\left(1-|p|^2\right)$, puis que le triangle est aplati si et seulement si $|p|=1$.

---

## Solution

1.
   a.
      :::property[Rotation]
      Une rotation conserve les distances. Si une rotation de centre $B$ envoie $P$ sur $P'$ , alors $BP'=BP$ et $\widehat{PBP'}$ est égal à l'amplitude de la rotation.
      :::

      $\rho$ envoie $A$ sur $C$ avec $BA=BC$ et $\widehat{ABC}=60^\circ$ : c'est une rotation d'amplitude $60^\circ$.

      Donc $BP'=BP$ et $\widehat{PBP'}=60^\circ$ : le triangle $BPP'$ est isocèle avec un angle de $60^\circ$ en $B$, donc équilatéral, et $PP'=PB$.

      $\rho(A)=C$ et $\rho(P)=P'$ ; une rotation conserve les distances : $CP'=AP$.

   b. Dans le triangle $PCP'$ (éventuellement aplati), les côtés sont

      $$\displaystyle PC,\qquad CP'=PA,\qquad PP'=PB.$$

      :::property[Inégalité triangulaire]
      Pour trois points $U,V,W$ : $\boxed{UV\leq UW+WV}$, avec égalité si et seulement si $W\in[UV]$.
      :::

      Donc $PP'\leq PC+CP'$, soit $PB\leq PC+PA$ ; et $PC\leq PP'+P'C=PB+PA$ ; et $CP'\leq CP+PP'$, soit $PA\leq PC+PB$.

2.
   a. $p(1+j+j^2)-(1+j\cdot j+j^2\cdot j^2)=p\times0-(1+j^2+j^4)$.

      Comme $j^3=1$ : $j^4=j$, et $1+j+j^2=0$. Donc $1+j^2+j=0$ et la somme est nulle.

   b. Posons $x=p-1$, $y=j(p-j)$, $z=j^2(p-j^2)$ : $|x|=PA$, $|y|=PB$, $|z|=PC$ (car $|j|=1$) et $x+y+z=0$.

      Les trois nombres forment un triangle fermé de côtés $PA,PB,PC$ (on place $y$ puis $z$ bout à bout à partir de $x$). Ce triangle est aplati si et seulement si $x,y,z$ sont parallèles (sur une même droite), c'est-à-dire :

      $$\displaystyle x\bar y\in\mathbb{R}\quad(\text{si }x,y\neq0).$$

   c. $x\bar y=(p-1)\,\bar j\,\overline{(p-j)}$. On développe :

      $$\displaystyle (p-1)\overline{(p-j)}=|p|^2-\bar j\,p-\bar p+\bar j.$$

      On multiplie par $\bar j$ (avec $\bar j^2=j$) : $\ \bar j|p|^2-j\,p-\bar j\,\bar p+j$.

      Le nombre $j\,p+\bar j\,\bar p=2\,\mathrm{Re}(jp)$ est réel : il n'a pas de partie imaginaire. Reste

      $$\displaystyle \mathrm{Im}\left(\bar j\,|p|^2+j\right)=-\dfrac{\sqrt3}{2}|p|^2+\dfrac{\sqrt3}{2}=\boxed{\dfrac{\sqrt3}{2}\left(1-|p|^2\right)}.$$

      Donc $x\bar y\in\mathbb{R}\iff|p|^2=1\iff|p|=1$.

      *Conclusion.* Si $P$ est sur le cercle circonscrit ($|p|=1$), $x\parallel y$ ; et $z=-x-y$ est parallèle aussi : le triangle est aplati. Si $|p|\neq1$, $x\bar y\notin\mathbb{R}$, donc $x$ et $y$ ne sont pas parallèles (ils sont non nuls car $P\neq A,B$ quand $|p|\neq1$) : le triangle n'est pas aplati. $\blacksquare$

**Remarque.** Dans le cas aplati, l'une des trois longueurs est la somme des deux autres : c'est le théorème de Ptolémée appliqué au quadrilatère $ABPC$ ou à l'un de ses analogues.

:::intuition
Une seule rotation de $60^\circ$ rassemble $PA$, $PB$, $PC$ en un triangle $PCP'$ ; la version complexe est la même idée : $1+j+j^2=0$ ferme le triangle de côtés $p-1$, $j(p-j)$, $j^2(p-j^2)$.
:::

:::trap
Quand $P$ est un sommet (par exemple $P=A$), la longueur $PA=0$ ; le « triangle » a un côté nul, mais reste un cas d'aplatissement ($|p|=1$).
:::
