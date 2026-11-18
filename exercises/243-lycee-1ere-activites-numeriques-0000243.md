---
uid: "0000243"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Radicaux imbriqués"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["radicaux", "denestage", "identites-remarquables"]
provenance: own
idea: "denestage"
---

1. Vérifier que $(2+\sqrt5)^2=9+4\sqrt5$ et que $(\sqrt5-2)^2=9-4\sqrt5$. En déduire $\sqrt{9+4\sqrt5}$ et $\sqrt{9-4\sqrt5}$.

2. Calculer $A=\sqrt{9+4\sqrt5}-\sqrt{9-4\sqrt5}$ et $B=\sqrt{9+4\sqrt5}\times\sqrt{9-4\sqrt5}$.

3. *Méthode.* Soit $a,b>0$ et $x,y>0$ tels que $x+y=a$ et $xy=b$. Montrer que $\sqrt{a+2\sqrt b}=\sqrt x+\sqrt y$ et que $\sqrt{a-2\sqrt b}=\big|\sqrt x-\sqrt y\big|$. Simplifier $\sqrt{7+2\sqrt{10}}$ et $\sqrt{8-2\sqrt{15}}$.

4. Sans dénicher : soit $u=\sqrt{4+\sqrt7}-\sqrt{4-\sqrt7}$. Calculer $u^2$, puis $u$.

5. Montrer que $\sqrt{3+\sqrt5}=\dfrac{\sqrt{10}+\sqrt2}2$, puis calculer $\sqrt{7+4\sqrt3}+\sqrt{7-4\sqrt3}$.

---

## Solution

1.
   > **Carré d'une somme.** $\boxed{(a\pm b)^2=a^2\pm2ab+b^2}$, et **si $A\geq0$ alors $\sqrt{A^2}=A$**.

   On développe :

   $$\displaystyle (2+\sqrt5)^2=2^2+2\times2\times\sqrt5+(\sqrt5)^2=4+4\sqrt5+5=9+4\sqrt5$$

   $$\displaystyle (\sqrt5-2)^2=5-4\sqrt5+4=9-4\sqrt5$$

   Les nombres $2+\sqrt5$ et $\sqrt5-2$ sont positifs (car $\sqrt5>2$). Donc :

   $$\displaystyle \sqrt{9+4\sqrt5}=2+\sqrt5\qquad\sqrt{9-4\sqrt5}=\sqrt5-2$$

2. On utilise les valeurs trouvées :

   $$\displaystyle A=(2+\sqrt5)-(\sqrt5-2)=4$$

   $$\displaystyle B=(2+\sqrt5)(\sqrt5-2)=(\sqrt5)^2-2^2=5-4=1$$

3. On développe $(\sqrt x+\sqrt y)^2$ :

   $$\displaystyle (\sqrt x+\sqrt y)^2=x+2\sqrt x\sqrt y+y=(x+y)+2\sqrt{xy}=a+2\sqrt b$$

   Comme $\sqrt x+\sqrt y>0$, on obtient $\sqrt{a+2\sqrt b}=\sqrt x+\sqrt y$.

   De même $(\sqrt x-\sqrt y)^2=(x+y)-2\sqrt{xy}=a-2\sqrt b$. Un carré a pour racine la valeur absolue : $\sqrt{a-2\sqrt b}=\big|\sqrt x-\sqrt y\big|$.

   **Application 1 :** $\sqrt{7+2\sqrt{10}}$. On cherche $x+y=7$ et $xy=10$ : ce sont $5$ et $2$ (car $5+2=7$ et $5\times2=10$).

   $$\displaystyle \sqrt{7+2\sqrt{10}}=\sqrt5+\sqrt2$$

   **Application 2 :** $\sqrt{8-2\sqrt{15}}$. On cherche $x+y=8$ et $xy=15$ : ce sont $5$ et $3$.

   $$\displaystyle \sqrt{8-2\sqrt{15}}=\big|\sqrt5-\sqrt3\big|=\sqrt5-\sqrt3$$

4. On calcule le carré de $u$, avec $(a-b)^2=a^2-2ab+b^2$ :

   $$\displaystyle u^2=(4+\sqrt7)+(4-\sqrt7)-2\sqrt{(4+\sqrt7)(4-\sqrt7)}$$

   $$\displaystyle u^2=8-2\sqrt{16-7}=8-2\sqrt9=8-6=2$$

   Comme $4+\sqrt7>4-\sqrt7$, le nombre $u$ est positif. Donc $u=\sqrt2$.

5. On calcule le carré du nombre proposé :

   $$\displaystyle \left(\dfrac{\sqrt{10}+\sqrt2}2\right)^2=\dfrac{10+2\sqrt{20}+2}4=\dfrac{12+4\sqrt5}4=3+\sqrt5$$

   Il est positif, donc $\sqrt{3+\sqrt5}=\dfrac{\sqrt{10}+\sqrt2}2$.

   Pour la somme : $(2+\sqrt3)^2=7+4\sqrt3$ et $(2-\sqrt3)^2=7-4\sqrt3$, avec $2-\sqrt3>0$. Donc :

   $$\displaystyle \sqrt{7+4\sqrt3}+\sqrt{7-4\sqrt3}=(2+\sqrt3)+(2-\sqrt3)=4$$

**Idée :** reconnaître un carré parfait sous la racine, ou élever au carré.    **Piège :** $\sqrt{(\sqrt3-2)^2}=2-\sqrt3$ : une racine carrée n'est jamais négative.
