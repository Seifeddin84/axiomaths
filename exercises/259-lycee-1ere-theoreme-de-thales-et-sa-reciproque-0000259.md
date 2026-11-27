---
uid: "0000259"
school: "lycee"
level: "1ere"
section: null
chapter: "Théorème de Thalès et sa réciproque"
source: "URSS : Olympiade 1990, classe de 9e (B. Chinik, Kichinev)"
title: "Trois parallèles par un point"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: null
tags: ["thales", "trois-paralleles", "triangle", "point-interieur"]
provenance: adapted
source_url: "https://www.cut-the-knot.org/triangle/PleasantProportionsInTriangle.shtml"
adapted_from: "Olympiade URSS 1990 (B. Chinik) ; énoncé, chiffres et questions Axiomaths"
source_checked: true
dressing: "trois parallèles par un point intérieur"
rung: 5
---

Soit $ABC$ un triangle avec $BC=a$, $CA=b$, $AB=c$, et $P$ un point intérieur. Les parallèles aux côtés menées par $P$ coupent les côtés en six points : la parallèle à $(BC)$ coupe $[AB]$ en $U$ et $[AC]$ en $V$ ; la parallèle à $(CA)$ coupe $[BC]$ en $W$ et $[BA]$ en $X$ ; la parallèle à $(AB)$ coupe $[CA]$ en $Y$ et $[CB]$ en $Z$. Sur chaque côté, les points se suivent dans l'ordre $B,Z,W,C$ ; $C,V,Y,A$ ; $A,X,U,B$.

![Figure de l'énoncé](/exercises/images/259-lycee-1ere-theoreme-de-thales-et-sa-reciproque-0000259.png)

1. Montrer que $UBZP$ et $PVCW$ sont des parallélogrammes. En déduire que $UV=BZ+WC$.

2. Montrer que les rapports $u=\dfrac{UV}{BC}$, $w=\dfrac{XW}{CA}$ et $z=\dfrac{YZ}{AB}$ vérifient $u=\dfrac{AU}{AB}=\dfrac{AV}{AC}$, $w=\dfrac{BX}{BA}=\dfrac{BW}{BC}$ et $z=\dfrac{CY}{CA}=\dfrac{CZ}{CB}$.

3. Montrer que $u+w+z=2$.

4. Exprimer les neuf segments $BZ,ZW,WC$ ; $CV,VY,YA$ ; $AX,XU,UB$ avec $a,b,c,u,w,z$. En déduire que

   $$\displaystyle BZ\times CV\times AX=ZW\times VY\times XU=WC\times YA\times UB.$$

5. On suppose que les trois segments $[UV]$, $[XW]$, $[YZ]$ ont la même longueur $d$. Montrer que $d=\dfrac{2abc}{ab+bc+ca}$. Calculer $d$ pour $a=15$, $b=12$, $c=10$, puis les neuf segments et la valeur commune des trois produits.

---

## Solution

> **Thalès, de sommet $X$.** Dans le triangle $XYZ$, si $U\in[XY]$, $V\in[XZ]$ et $(UV)\parallel(YZ)$ :
>
> $$\boxed{\dfrac{XU}{XY}=\dfrac{XV}{XZ}=\dfrac{UV}{YZ}}$$

> **Parallélogramme.** Un quadrilatère dont les côtés opposés sont parallèles deux à deux est un parallélogramme : **ses côtés opposés sont égaux**.

1. **Le quadrilatère $UBZP$.** Les côtés $(UP)$ et $(BZ)$ sont parallèles, car $(UP)$ est la parallèle à $(BC)$ et $(BZ)=(BC)$.

   Les côtés $(UB)$ et $(PZ)$ sont parallèles, car $(UB)=(AB)$ et $(PZ)$ est la parallèle à $(AB)$.

   Les côtés opposés sont parallèles : $UBZP$ est un parallélogramme, donc $\boxed{UP=BZ}$.

   **Le quadrilatère $PVCW$.** Les côtés $(PV)$ et $(WC)$ sont parallèles, car $(PV)$ est la parallèle à $(BC)$.

   Les côtés $(VC)$ et $(PW)$ sont parallèles, car $(VC)=(AC)$ et $(PW)$ est la parallèle à $(CA)$.

   Donc $PVCW$ est un parallélogramme et $\boxed{PV=WC}$.

   **Conclusion.** Le point $P$ est entre $U$ et $V$ :

   $$\displaystyle UV=UP+PV=\boxed{BZ+WC}$$

2. **Sommet $A$.** Dans le triangle $ABC$, on a $U\in[AB]$, $V\in[AC]$ et $(UV)\parallel(BC)$ :

   $$\displaystyle \dfrac{AU}{AB}=\dfrac{AV}{AC}=\dfrac{UV}{BC}=u$$

   **Sommet $B$.** Dans le triangle $BAC$, on a $X\in[BA]$, $W\in[BC]$ et $(XW)\parallel(CA)$ :

   $$\displaystyle \dfrac{BX}{BA}=\dfrac{BW}{BC}=\dfrac{XW}{CA}=w$$

   **Sommet $C$.** Dans le triangle $CAB$, on a $Y\in[CA]$, $Z\in[CB]$ et $(YZ)\parallel(AB)$ :

   $$\displaystyle \dfrac{CY}{CA}=\dfrac{CZ}{CB}=\dfrac{YZ}{AB}=z$$

3. On exprime chaque longueur de la question 1) avec $a$ :

   $$\displaystyle UV=u\,a\qquad BZ=BC-CZ=(1-z)\,a\qquad WC=BC-BW=(1-w)\,a$$

   On remplace dans $UV=BZ+WC$ :

   $$\displaystyle u\,a=(1-z)\,a+(1-w)\,a$$

   On divise par $a$ :

   $$\displaystyle u=2-z-w\implies\boxed{u+w+z=2}$$

4. **Côté $[BC]$.** On a $BZ=(1-z)a$, $WC=(1-w)a$ et $BW=w\,a$. Donc :

   $$\displaystyle ZW=BW-BZ=(w+z-1)\,a=(1-u)\,a$$

   car $w+z=2-u$ d'après la question 3).

   **Côté $[CA]$.** On a $AV=u\,b$, donc $CV=(1-u)\,b$. Puis $CY=z\,b$ et $YA=(1-z)\,b$ :

   $$\displaystyle VY=CY-CV=(z+u-1)\,b=(1-w)\,b$$

   **Côté $[AB]$.** On a $BX=w\,c$, donc $AX=(1-w)\,c$. Puis $AU=u\,c$ et $UB=(1-u)\,c$ :

   $$\displaystyle XU=AU-AX=(u+w-1)\,c=(1-z)\,c$$

   On range les neuf longueurs :

   $$\displaystyle \begin{array}{c|ccc} {[BC]} & BZ=(1-z)\,a & ZW=(1-u)\,a & WC=(1-w)\,a\\ {[CA]} & CV=(1-u)\,b & VY=(1-w)\,b & YA=(1-z)\,b\\ {[AB]} & AX=(1-w)\,c & XU=(1-z)\,c & UB=(1-u)\,c \end{array}$$

   On multiplie les colonnes :

   $$\displaystyle BZ\times CV\times AX=(1-z)(1-u)(1-w)\,abc$$

   $$\displaystyle ZW\times VY\times XU=(1-u)(1-w)(1-z)\,abc$$

   $$\displaystyle WC\times YA\times UB=(1-w)(1-z)(1-u)\,abc$$

   Les trois produits sont égaux à $\boxed{abc\,(1-u)(1-w)(1-z)}$.

5. On a $UV=XW=YZ=d$, donc :

   $$\displaystyle u=\dfrac da\qquad w=\dfrac db\qquad z=\dfrac dc$$

   On remplace dans $u+w+z=2$ :

   $$\displaystyle d\left(\dfrac1a+\dfrac1b+\dfrac1c\right)=2\implies d=\dfrac{2}{\dfrac1a+\dfrac1b+\dfrac1c}=\boxed{\dfrac{2abc}{ab+bc+ca}}$$

   **Application.** Pour $a=15$, $b=12$, $c=10$ :

   $$\displaystyle abc=1800\qquad ab+bc+ca=180+120+150=450$$

   $$\displaystyle d=\dfrac{2\times1800}{450}=\boxed{8}$$

   Alors $u=\dfrac8{15}$, $w=\dfrac8{12}=\dfrac23$ et $z=\dfrac8{10}=\dfrac45$. Contrôle : $\dfrac8{15}+\dfrac{10}{15}+\dfrac{12}{15}=\dfrac{30}{15}=2$.

   **Les neuf segments.**

   $$\displaystyle BZ=\dfrac15\times15=3\qquad ZW=\dfrac7{15}\times15=7\qquad WC=\dfrac13\times15=5$$

   $$\displaystyle CV=\dfrac7{15}\times12=\dfrac{28}5\qquad VY=\dfrac13\times12=4\qquad YA=\dfrac15\times12=\dfrac{12}5$$

   $$\displaystyle AX=\dfrac13\times10=\dfrac{10}3\qquad XU=\dfrac15\times10=2\qquad UB=\dfrac7{15}\times10=\dfrac{14}3$$

   **Les trois produits.**

   $$\displaystyle 3\times\dfrac{28}5\times\dfrac{10}3=56\qquad7\times4\times2=56\qquad5\times\dfrac{12}5\times\dfrac{14}3=56$$

   Valeur commune : $\boxed{56}$. Contrôle : $abc\,(1-u)(1-w)(1-z)=1800\times\dfrac7{15}\times\dfrac13\times\dfrac15=56$.

**Idée :** les deux parallélogrammes transforment l'égalité $UV=BZ+WC$ en une relation entre trois rapports de Thalès pris de trois sommets différents.    **Piège :** confondre $\dfrac{AU}{AB}$ (Thalès, côté entier) avec $\dfrac{AU}{UB}$.
