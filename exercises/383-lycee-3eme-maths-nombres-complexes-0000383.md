---
uid: "0000383"
school: "lycee"
level: "3eme"
section: "Mathématiques"
chapter: "Nombres complexes"
source: "Axiomaths"
title: "Droite de Simson, droite de Steiner"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["nombres-complexes", "droite-de-simson", "droite-de-steiner", "cercle-unite", "geometrie-complexe", "defi"]
provenance: "adapted"
dressing: "Simson et Steiner dans le plan complexe"
rung: 5
batch: "2026-11-20-defis-geometrie-A"
defi: true
---

Le plan est identifié à $\mathbb{C}$. Soit $ABC$ un triangle inscrit dans le cercle unité $\{z\in\mathbb{C},\ |z|=1\}$ ; $a$, $b$, $c$ sont les affixes de $A$, $B$, $C$ (distincts, de module $1$). On rappelle que $\bar z=\dfrac1z$ lorsque $|z|=1$. Soit $P$ un point du cercle, distinct de $A$, $B$, $C$, d'affixe $p$.

![Cercle circonscrit, point P du cercle, projetés orthogonaux D, E, F sur les trois côtés alignés (droite de Simson)](/exercises/images/383-lycee-3eme-maths-nombres-complexes-0000383.png)

1. **Projeté orthogonal.** Montrer qu'un point $M(z)$ appartient à la droite $(BC)$ si et seulement si $z+bc\,\bar z=b+c$.

2. Montrer que le projeté orthogonal $D$ de $P$ sur $(BC)$ a pour affixe $d=\dfrac12\left(p+b+c-bc\,\bar p\right)$. On note $E$ et $F$ les projetés orthogonaux de $P$ sur $(CA)$ et $(AB)$ : donner leurs affixes $e$ et $f$.

3. **Droite de Simson.** Calculer $d-e$ et $d-f$, puis montrer que **les projetés $D$, $E$, $F$ de $P$ sur les trois côtés sont alignés**.

4. **Droite de Steiner.** Soient $P_a$, $P_b$, $P_c$ les symétriques de $P$ par rapport aux droites $(BC)$, $(CA)$, $(AB)$. Montrer que **$P_a$, $P_b$, $P_c$ sont alignés**.

5.
   a. Vérifier que le point $H$ d'affixe $h=a+b+c$ est l'orthocentre de $ABC$.

   b. Montrer que **la droite $(P_aP_b)$ passe par $H$.**

*Remarque (sans démonstration demandée).* Lorsque $P$ décrit le cercle, les droites de Simson enveloppent une deltoïde (hypocycloïde à trois rebroussements) dont le cercle inscrit est le cercle d'Euler de $ABC$.

---

## Solution

1.
   :::property[Alignement et perpendicularité en complexes]
   $M(z)$, $B(b)$, $C(c)$ sont alignés si et seulement si $\boxed{\dfrac{z-b}{c-b}\in\mathbb{R}}$.

   Les vecteurs d'affixes $u$ et $v\neq0$ sont orthogonaux si et seulement si $\boxed{\dfrac uv\in i\mathbb{R}}$ (imaginaire pur).

   Un nombre $w$ est réel si et seulement si $\bar w=w$ ; il est imaginaire pur si et seulement si $\bar w=-w$.
   :::

   $M\in(BC)\iff\dfrac{z-b}{c-b}=\overline{\left(\dfrac{z-b}{c-b}\right)}=\dfrac{\bar z-\bar b}{\bar c-\bar b}$.

   Or $\bar c-\bar b=\dfrac1c-\dfrac1b=\dfrac{b-c}{bc}$ et $\bar b=\dfrac1b$. Donc

   $$\displaystyle \dfrac{z-b}{c-b}=\dfrac{\bar z-\frac1b}{\frac{b-c}{bc}}=-bc\,\dfrac{\bar z-\frac1b}{c-b}.$$

   On simplifie par $c-b\neq0$ : $z-b=-bc\,\bar z+c$, c'est-à-dire $\boxed{z+bc\,\bar z=b+c}$.

2. Le projeté $D(d)$ vérifie deux conditions.

   *(i) $D\in(BC)$ :* $d+bc\,\bar d=b+c$.

   *(ii) $(PD)\perp(BC)$ :* $\dfrac{p-d}{b-c}$ est imaginaire pur. Son conjugué vaut

   $$\displaystyle \dfrac{\bar p-\bar d}{\bar b-\bar c}=\dfrac{\bar p-\bar d}{\frac{c-b}{bc}}=-bc\,\dfrac{\bar p-\bar d}{b-c},$$

   et il doit être l'opposé de $\dfrac{p-d}{b-c}$ : $p-d=bc\,(\bar p-\bar d)$, soit $d-bc\,\bar d=p-bc\,\bar p$.

   On additionne (i) et (ii) : $2d=p+b+c-bc\,\bar p$, donc **$d=\dfrac12\left(p+b+c-bc\,\bar p\right)$**.

   Par permutation circulaire $(a,b,c)\to(b,c,a)$ :

   $$\displaystyle e=\dfrac12\left(p+c+a-ca\,\bar p\right),\qquad f=\dfrac12\left(p+a+b-ab\,\bar p\right).$$

3. On calcule :

   $$\displaystyle d-e=\dfrac12\left[(b-a)-c(b-a)\bar p\right]=\dfrac12(b-a)(1-c\,\bar p),\qquad d-f=\dfrac12(c-a)(1-b\,\bar p).$$

   Comme $\bar p=\dfrac1p$ : $1-c\bar p=\dfrac{p-c}{p}$ et $1-b\bar p=\dfrac{p-b}{p}$. Donc

   $$\displaystyle Z=\dfrac{d-e}{d-f}=\dfrac{(b-a)(p-c)}{(c-a)(p-b)}.$$

   Pour des nombres de module $1$ : $\overline{u-v}=\dfrac1u-\dfrac1v=\dfrac{v-u}{uv}$. On conjugue chaque facteur :

   $$\displaystyle \bar Z=\dfrac{\frac{a-b}{ab}\cdot\frac{c-p}{cp}}{\frac{a-c}{ac}\cdot\frac{b-p}{bp}}=\dfrac{(a-b)(c-p)}{(a-c)(b-p)}\times\dfrac{ac\cdot bp}{ab\cdot cp}=\dfrac{(a-b)(c-p)}{(a-c)(b-p)}=Z.$$

   $Z$ est réel : $\boxed{D\text{, }E\text{, }F\text{ sont alignés}}$.

4.
   :::property[Symétrie et homothétie]
   Le symétrique de $P$ par rapport à une droite est l'image de $P$ par l'homothétie de centre $P$ et de rapport $2$ appliquée au projeté orthogonal de $P$ sur cette droite. Une homothétie conserve l'alignement.
   :::

   $D$ est le milieu de $[PP_a]$ : $P_a=2d-p=b+c-bc\,\bar p$. De même $P_b=2e-p$ et $P_c=2f-p$.

   Ainsi $P_a$, $P_b$, $P_c$ sont les images de $D$, $E$, $F$ par l'homothétie $h(P,2)$. Comme $D$, $E$, $F$ sont alignés, $\boxed{P_a\text{, }P_b\text{, }P_c\text{ sont alignés}}$.

5.
   a. $\dfrac{h-a}{b-c}=\dfrac{b+c}{b-c}$. Son conjugué est $\dfrac{\frac1b+\frac1c}{\frac1b-\frac1c}=\dfrac{c+b}{c-b}=-\dfrac{b+c}{b-c}$ : ce nombre est imaginaire pur, donc $(AH)\perp(BC)$.

      Les affixes sont symétriques en $a,b,c$ : $H$ est aussi sur les hauteurs issues de $B$ et $C$. $H$ est l'orthocentre.

   b. Avec $P_a=b+c-\dfrac{bc}p$ et $P_b=c+a-\dfrac{ca}p$ :

      $$\displaystyle h-P_a=a+\dfrac{bc}p=\dfrac{ap+bc}{p},\qquad h-P_b=b+\dfrac{ca}p=\dfrac{bp+ca}{p}.$$

      Soit $W=\dfrac{h-P_a}{h-P_b}=\dfrac{ap+bc}{bp+ca}$. On conjugue :

      $$\displaystyle \overline{ap+bc}=\dfrac1{ap}+\dfrac1{bc}=\dfrac{bc+ap}{abcp},\qquad\overline{bp+ca}=\dfrac1{bp}+\dfrac1{ca}=\dfrac{ca+bp}{abcp}.$$

      Donc $\bar W=W$ : $W$ est réel, et $\boxed{H\in(P_aP_b)}$. $\blacksquare$

**Remarque (réciproque de Simson).** Pour $p$ quelconque, $d-e=\dfrac12(b-a)(1-c\bar p)$ et $d-f=\dfrac12(c-a)(1-b\bar p)$. En conjuguant comme ci-dessus (seuls $a,b,c$ sont de module $1$), $\bar Z=\dfrac{b-a}{c-a}\cdot\dfrac{c-p}{b-p}$. Donc $Z$ est réel si et seulement si $(b-p)(1-c\bar p)=(c-p)(1-b\bar p)$, soit $(b-c)(1-|p|^2)=0$ : *les projetés de $P$ sont alignés si et seulement si $P$ est sur le cercle circonscrit.*

:::intuition
Avec $\bar z=\dfrac1z$ sur le cercle unité, la géométrie devient de l'algèbre. La droite de Simson est l'image de la droite de Steiner par l'homothétie de centre $P$ et de rapport $\dfrac12$ ; elle passe donc par le milieu de $[PH]$, qui est sur le cercle d'Euler.
:::

:::trap
La formule $d=\dfrac12(p+b+c-bc\bar p)$ est vraie pour tout $p$, mais la simplification $1-c\bar p=\dfrac{p-c}{p}$ n'est valable que si $|p|=1$.
:::
