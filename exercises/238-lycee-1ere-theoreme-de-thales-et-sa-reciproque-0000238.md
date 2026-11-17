---
uid: "0000238"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "Axiomaths"
title: "Challenge : trois moyennes dans un trapèze"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["thales", "trapeze", "moyennes", "challenge"]
provenance: own
---

$ABCD$ est un trapèze de bases $[AB]$ et $[DC]$, avec $AB=a<DC=b$. Les droites $(AD)$ et $(BC)$ se coupent en $S$. On s'intéresse à des segments $[PQ]$, avec $P\in[AD]$ et $Q\in[BC]$, parallèles aux bases.

![Figure de l'énoncé](/exercises/images/238-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000238.png)

1. *Moyenne arithmétique.* Si $P_1$ et $Q_1$ sont les milieux de $[AD]$ et de $[BC]$, montrer que $P_1Q_1=\dfrac{a+b}2$. [Utiliser le milieu $K$ de $[AC]$.]

2. *Moyenne harmonique.* Les diagonales se coupent en $O$ ; la parallèle aux bases passant par $O$ coupe $[AD]$ en $P_2$ et $[BC]$ en $Q_2$. Montrer que $OP_2=OQ_2=\dfrac{ab}{a+b}$, puis que $P_2Q_2=\dfrac{2ab}{a+b}$.

3. *Moyenne quadratique.* Soit $[P_3Q_3]$ le segment parallèle aux bases qui partage le trapèze en deux trapèzes de même aire. Montrer que $P_3Q_3=\sqrt{\dfrac{a^2+b^2}2}$. [Si $[PQ]$ est parallèle aux bases et $PQ=x$, montrer par Thalès que l'aire du triangle $SPQ$ est de la forme $\lambda x^2$, avec $\lambda$ constant.]

4. Calculer les trois longueurs pour $a=2$ et $b=14$.

5. Montrer que $\dfrac{2ab}{a+b}<\dfrac{a+b}2<\sqrt{\dfrac{a^2+b^2}2}$ pour $0<a<b$. Dans quel ordre ces trois segments se succèdent-ils de la petite base à la grande ?

---

## Solution

> **Outils.** **Droite des milieux :** **$(IJ)\parallel(BC)$ et $IJ=\dfrac{BC}2$**. **Thalès :** $\boxed{\dfrac{DO}{DB}=\dfrac{OP}{AB}}$ si $(OP)\parallel(AB)$. **Aire d'un triangle** réduit dans le rapport $k$ : multipliée par $k^2$.

1. Soit $K$ le milieu de $[AC]$.

   Dans le triangle $ADC$ : $P_1$ et $K$ sont les milieux de $[AD]$ et $[AC]$, donc $(P_1K)\parallel(DC)$ et $P_1K=\dfrac b2$.

   Dans le triangle $ABC$ : $K$ et $Q_1$ sont les milieux de $[AC]$ et $[BC]$, donc $(KQ_1)\parallel(AB)$ et $KQ_1=\dfrac a2$.

   Comme $(AB)\parallel(DC)$, les droites $(P_1K)$ et $(KQ_1)$ sont parallèles et passent par $K$ : elles sont confondues. Donc $P_1$, $K$, $Q_1$ sont alignés :

   $$\displaystyle P_1Q_1=P_1K+KQ_1=\dfrac b2+\dfrac a2=\boxed{\dfrac{a+b}2}$$

2. Triangles $OAB$ et $OCD$ de sommet $O$, avec $(AB)\parallel(DC)$ :

   $$\displaystyle \dfrac{OB}{OD}=\dfrac{OA}{OC}=\dfrac{AB}{DC}=\dfrac ab\implies\dfrac{DO}{DB}=\dfrac b{a+b}$$

   Dans le triangle $DAB$, $O\in[DB]$, $P_2\in[DA]$ et $(OP_2)\parallel(AB)$. Thalès de sommet $D$ :

   $$\displaystyle \dfrac{DO}{DB}=\dfrac{DP_2}{DA}=\dfrac{OP_2}{AB}\implies OP_2=a\times\dfrac b{a+b}=\dfrac{ab}{a+b}$$

   De même $\dfrac{CO}{CA}=\dfrac b{a+b}$ et, dans le triangle $CAB$ avec $(OQ_2)\parallel(AB)$ :

   $$\displaystyle OQ_2=\dfrac{ab}{a+b}$$

   $$\displaystyle P_2Q_2=OP_2+OQ_2=\boxed{\dfrac{2ab}{a+b}}$$

3. Soit $[PQ]$ un segment parallèle aux bases, de longueur $x$, et $d_x$ la distance de $S$ à $(PQ)$. Soit $H$ le pied de la hauteur issue de $S$ sur $(AB)$ ; elle coupe $(PQ)$ en $H'$, et $d_x=SH'$, $d_a=SH$. Thalès de sommet $S$ (triangles $SAB$ et $SPQ$) : $\dfrac{SH'}{SH}=\dfrac{SP}{SA}=\dfrac{PQ}{AB}$, soit $\dfrac{d_x}{d_a}=\dfrac xa$ : $d_x=\mu\,x$ avec $\mu=\dfrac{d_a}a$ constant.

   L'aire du triangle $SPQ$ est :

   $$\displaystyle \dfrac12\times x\times\mu x=\lambda x^2\qquad\left(\lambda=\dfrac\mu2\text{ est constant}\right)$$

   L'aire d'un trapèze compris entre deux segments de longueurs $x<y$ est une différence de deux triangles : $\lambda(y^2-x^2)$.

   On cherche $x=P_3Q_3$ tel que les deux trapèzes aient la même aire :

   $$\displaystyle \lambda(x^2-a^2)=\lambda(b^2-x^2)\implies2x^2=a^2+b^2\implies\boxed{x=\sqrt{\dfrac{a^2+b^2}2}}$$

4. Pour $a=2$ et $b=14$ :

   $$\displaystyle \dfrac{2ab}{a+b}=\dfrac{2\times2\times14}{16}=\dfrac{56}{16}=\dfrac72=3{,}5$$

   $$\displaystyle \dfrac{a+b}2=\dfrac{16}2=8\qquad\sqrt{\dfrac{a^2+b^2}2}=\sqrt{\dfrac{4+196}2}=\sqrt{100}=10$$

5. **Première inégalité :** les deux membres sont positifs.

   $$\displaystyle \dfrac{a+b}2>\dfrac{2ab}{a+b}\iff(a+b)^2>4ab\iff(a-b)^2>0$$

   C'est vrai car $a\neq b$.

   **Seconde inégalité :** les deux membres sont positifs, on compare leurs carrés.

   $$\displaystyle \left(\dfrac{a+b}2\right)^2<\dfrac{a^2+b^2}2\iff(a+b)^2<2a^2+2b^2\iff0<a^2-2ab+b^2=(a-b)^2$$

   C'est vrai aussi.

   **Encadrement par les bases :** $\dfrac{2ab}{a+b}>a\iff2b>a+b\iff b>a$, et $\sqrt{\dfrac{a^2+b^2}2}<b\iff a^2+b^2<2b^2\iff a<b$.

   Ordre, de la petite à la grande base :

   $$\displaystyle a<\text{harmonique}<\text{arithmétique}<\text{quadratique}<b$$

**Idée :** l'aire d'un triangle de sommet $S$ est proportionnelle au carré de sa base, donc les aires se « lisent » avec des carrés.    **Piège :** croire que le segment qui partage l'aire en deux est la médiane (moyenne arithmétique).
