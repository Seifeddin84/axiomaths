---
uid: "0000266"
school: "lycee"
level: "1ere"
section: null
chapter: "Rapports trigonométriques d'un angle aigu et Relations métriques dans un triangle rectangle"
source: "Axiomaths"
title: "Le produit des deux morceaux d'une corde"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["cercle", "corde", "rapports-trigonometriques"]
provenance: adapted
adapted_from: "résultat classique (puissance d'un point par rapport à un cercle) ; énoncé et solution Axiomaths"
idea: "produit-des-cordes"
dressing: "produit des deux morceaux d'une corde"
rung: 5
---
Soit $\Gamma$ un cercle de centre $O$ et de rayon $R$. Soit $T$ un point **intérieur** à $\Gamma$ et $[UV]$ une corde de $\Gamma$ qui contient $T$. On note $I$ le milieu de $[UV]$ et l'on suppose que $T\in[IV]$ (l'autre cas est symétrique) et que $I\neq O$.

![Une corde, son milieu et le centre](/exercises/images/266-lycee-1ere-rapports-trigonometriques-d-un-angle-aigu-et-relations-metriques-dans-un-triangle-rectangle-0000266.png)

1. Montrer que $(OI)\perp(UV)$.

2. En appliquant le théorème de Pythagore dans les triangles $OIU$ et $OIT$, exprimer $IU^2$ et $IT^2$.

3. Exprimer $TU$ et $TV$ à l'aide de $IU$ et $IT$, puis montrer que
$$\displaystyle TU\cdot TV=R^2-OT^2 .$$

4. **Application.** Le cercle $\Gamma$ a pour rayon $R=5$ et la corde $[PQ]$ a pour milieu $M$ avec $OM=3$.

   a. Calculer $MP$.

   b. Soit $T$ le point de $[PQ]$ tel que $MT=2$. Calculer $TP\cdot TQ$ de deux façons : directement, puis avec la formule de la question 3. Que remarque-t-on ?

   c. En déduire la valeur de $TU\cdot TV$ pour **toute** corde $[UV]$ passant par $T$.

---

## Solution

:::property[Pythagore et médiatrice]

- **Pythagore :** dans un triangle rectangle en $H$, $\ \boxed{AB^2=AH^2+HB^2}$ où $[AB]$ est l'hypoténuse.

- Si $OU=OV$, le point $O$ est sur la médiatrice de $[UV]$ ; la médiatrice passe par le milieu $I$ de $[UV]$ et lui est perpendiculaire.

:::

1. $OU=OV=R$ (rayons) : $O$ est équidistant de $U$ et $V$, donc $O$ est sur la médiatrice de $[UV]$.

   Cette médiatrice contient aussi $I$, milieu de $[UV]$. Comme $I\neq O$, c'est la droite $(OI)$ :

   $$\displaystyle \boxed{(OI)\perp(UV)}$$

2. Le triangle $OIU$ est rectangle en $I$, d'hypoténuse $[OU]$ :

   $$\displaystyle OU^2=OI^2+IU^2\quad\text{donc}\quad IU^2=R^2-OI^2 .$$

   Le point $T$ est sur $(UV)$, donc le triangle $OIT$ est rectangle en $I$, d'hypoténuse $[OT]$ :

   $$\displaystyle OT^2=OI^2+IT^2\quad\text{donc}\quad IT^2=OT^2-OI^2 .$$

3. $T\in[IV]$ et $I$ est le milieu de $[UV]$, donc :

   $$\displaystyle TU=TI+IU=IU+IT,\qquad TV=IV-IT=IU-IT .$$

   On reconnaît une identité remarquable $(a+b)(a-b)=a^2-b^2$ :

   $$\displaystyle TU\cdot TV=(IU+IT)(IU-IT)=IU^2-IT^2 .$$

   On remplace par les résultats de la question 2 :

   $$\displaystyle TU\cdot TV=\big(R^2-OI^2\big)-\big(OT^2-OI^2\big)=R^2-OT^2 .$$

   $$\displaystyle \boxed{TU\cdot TV=R^2-OT^2}$$

   Le nombre $R^2-OT^2$ ne dépend que de $T$, pas de la corde choisie.

4. a. Le triangle $OMP$ est rectangle en $M$ (la médiatrice $(OM)$ de $[PQ]$ est perpendiculaire à $(PQ)$), d'hypoténuse $[OP]=R=5$ :

   $$\displaystyle MP^2=OP^2-OM^2=25-9=16\quad\text{donc}\quad MP=4 .$$

   b. $M$ est le milieu de $[PQ]$ : $MP=MQ=4$. Avec $MT=2$, le point $T$ est entre $M$ et $Q$ (par exemple) :

   $$\displaystyle TP=MP+MT=6,\qquad TQ=MQ-MT=2,\qquad TP\cdot TQ=12 .$$

   Avec la formule : $OT^2=OM^2+MT^2=9+4=13$ (Pythagore dans $OMT$), donc

   $$\displaystyle R^2-OT^2=25-13=12 .$$

   On trouve bien $12$ des deux façons. **Contrôle :** les deux calculs sont indépendants et concordent.

   c. D'après la question 3, pour toute corde $[UV]$ passant par $T$ :

   $$\displaystyle \boxed{TU\cdot TV=12}$$

   Plus généralement, si $T\in(PQ)$ est à la distance $t$ de $M$, alors $TU\cdot TV=a^2-t^2$ avec $a=MP$ : ici $16-4=12$.

:::remark[Le produit est constant]

Pour un point $T$ fixé, le produit $TU\cdot TV$ ne dépend pas de la corde qui passe par $T$. C'est ce résultat, très utile, qui sert dans la preuve du théorème du papillon : voir l'[exercice n°269](/lycee/2eme/sciences/trigonometrie#ex-0000269).

:::

:::intuition

Une corde qui passe par $T$ est « coupée en deux morceaux » dont le produit est toujours le même, comme si chaque morceau compensait l'autre.

:::

:::trap

Attention à ne pas écrire $TU\cdot TV=R^2-OT$ (sans le carré) ni $TU+TV=\dots$ : seule la **différence de carrés** $IU^2-IT^2$ apparaît.

:::
