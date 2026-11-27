---
uid: "0000241"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Radicaux : simplifier"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["radicaux", "simplification", "calcul", "nombres-reels", "conjugue"]
provenance: own
dressing: "simplifier des radicaux, dénominateur sans racine"
rung: 1
---

Simplifier chacun des nombres suivants (sans radical au dénominateur) :

1. $A=\sqrt{75}-2\sqrt{12}+\sqrt{27}$ ;

2. $B=(\sqrt5+2)^2-(\sqrt5-2)^2$ ;

3. $C=\dfrac1{\sqrt5-2}+\dfrac1{\sqrt5+2}$ ;

4. $D=(3\sqrt2-2\sqrt3)(3\sqrt2+2\sqrt3)$ ;

5. $E=\dfrac6{\sqrt7-1}$ ;

6. $F=\dfrac1{\sqrt3-\sqrt2}-\dfrac1{\sqrt3+\sqrt2}$ ;

7. $G=\sqrt{(2-\sqrt5)^2}+\sqrt{(\sqrt5-3)^2}$.

---

## Solution

> **Règles sur les racines.** Pour $a,b\geq0$ : $\boxed{\sqrt{ab}=\sqrt a\sqrt b}$    et    $\boxed{(a-b)(a+b)=a^2-b^2}$ (quantité conjuguée).

1. On décompose chaque racine avec un carré parfait :

   $$\displaystyle \sqrt{75}=\sqrt{25\times3}=5\sqrt3\qquad\sqrt{12}=\sqrt{4\times3}=2\sqrt3\qquad\sqrt{27}=\sqrt{9\times3}=3\sqrt3$$

   $$\displaystyle A=5\sqrt3-2\times2\sqrt3+3\sqrt3=(5-4+3)\sqrt3=4\sqrt3$$

2. On développe chaque carré avec $(a\pm b)^2=a^2\pm2ab+b^2$ :

   $$\displaystyle (\sqrt5+2)^2=5+4\sqrt5+4=9+4\sqrt5\qquad(\sqrt5-2)^2=5-4\sqrt5+4=9-4\sqrt5$$

   $$\displaystyle B=(9+4\sqrt5)-(9-4\sqrt5)=8\sqrt5$$

3. On multiplie chaque fraction par la quantité conjuguée de son dénominateur :

   $$\displaystyle \dfrac1{\sqrt5-2}=\dfrac{\sqrt5+2}{(\sqrt5-2)(\sqrt5+2)}=\dfrac{\sqrt5+2}{5-4}=\sqrt5+2$$

   $$\displaystyle \dfrac1{\sqrt5+2}=\dfrac{\sqrt5-2}{5-4}=\sqrt5-2$$

   $$\displaystyle C=(\sqrt5+2)+(\sqrt5-2)=2\sqrt5$$

4. On reconnaît $(a-b)(a+b)=a^2-b^2$ avec $a=3\sqrt2$ et $b=2\sqrt3$ :

   $$\displaystyle D=(3\sqrt2)^2-(2\sqrt3)^2=9\times2-4\times3=18-12=6$$

5. Conjuguée de $\sqrt7-1$ : $\sqrt7+1$.

   $$\displaystyle E=\dfrac{6(\sqrt7+1)}{(\sqrt7-1)(\sqrt7+1)}=\dfrac{6(\sqrt7+1)}{7-1}=\dfrac{6(\sqrt7+1)}{6}=\sqrt7+1$$

6. On rationalise chaque fraction :

   $$\displaystyle \dfrac1{\sqrt3-\sqrt2}=\dfrac{\sqrt3+\sqrt2}{3-2}=\sqrt3+\sqrt2\qquad\dfrac1{\sqrt3+\sqrt2}=\dfrac{\sqrt3-\sqrt2}{3-2}=\sqrt3-\sqrt2$$

   $$\displaystyle F=(\sqrt3+\sqrt2)-(\sqrt3-\sqrt2)=2\sqrt2$$

7.
   > **Rappel.** $\boxed{\sqrt{u^2}=|u|}$, et $|u|=u$ si $u\geq0$, $|u|=-u$ si $u<0$.

   On étudie le signe de chaque nombre : $\sqrt5>2$ car $5>4$, donc $2-\sqrt5<0$. Et $\sqrt5<3$ car $5<9$, donc $\sqrt5-3<0$.

   $$\displaystyle \sqrt{(2-\sqrt5)^2}=|2-\sqrt5|=-(2-\sqrt5)=\sqrt5-2$$

   $$\displaystyle \sqrt{(\sqrt5-3)^2}=|\sqrt5-3|=-(\sqrt5-3)=3-\sqrt5$$

   $$\displaystyle G=(\sqrt5-2)+(3-\sqrt5)=1$$

**Idée :** la conjuguée supprime les racines au dénominateur.    **Piège :** $\sqrt{(2-\sqrt5)^2}=\sqrt5-2$ et non $2-\sqrt5$.
