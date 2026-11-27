---
uid: "0000251"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Synthèse : mesures et erreurs relatives"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["encadrements", "pourcentages", "mesures"]
provenance: own
dressing: "erreur relative sur une vitesse mesurée"
rung: 5
---

Lors d'un test, un coureur parcourt $d=100$ m, mesurés à $1\,\%$ près, en $t=12{,}5$ s, mesurées à $2\,\%$ près. Sa vitesse moyenne est $v=\dfrac dt$.

1. Encadrer $d$ et $t$, puis encadrer $v$ (bornes à $10^{-2}$ près).

2. En déduire que l'erreur relative $\left|\dfrac{v-8}8\right|$ est inférieure à $3{,}1\,\%$.

3. *Cas général.* Deux grandeurs positives $a=a_0(1+\varepsilon)$ et $b=b_0(1+\eta)$ sont connues avec $|\varepsilon|\le p$ et $|\eta|\le q$ ($q<1$). Montrer que $|ab-a_0b_0|\le(p+q+pq)\,a_0b_0$ et que $\left|\dfrac ab-\dfrac{a_0}{b_0}\right|\le\dfrac{p+q}{1-q}\cdot\dfrac{a_0}{b_0}$.

4. Les côtés d'un rectangle sont connus à $1\,\%$ et à $3\,\%$ près. Avec quelle erreur relative maximale l'aire est-elle connue ?

---

## Solution

> **Erreur relative.** Si une valeur exacte $a_0$ est approchée par $a$, l'erreur relative est $\boxed{\dfrac{|a-a_0|}{|a_0|}}$.

1. $1\,\%$ de $100$ vaut $1$ : $99\leq d\leq101$. $2\,\%$ de $12{,}5$ vaut $0{,}25$ : $12{,}25\leq t\leq12{,}75$.

   Pour $v=\dfrac dt$ : la plus petite valeur vient du plus petit numérateur et du plus grand dénominateur ; la plus grande, du plus grand numérateur et du plus petit dénominateur.

   $$\displaystyle \dfrac{99}{12{,}75}\leq v\leq\dfrac{101}{12{,}25}$$

   $$\displaystyle 7{,}7647\ldots\leq v\leq8{,}2449\ldots\quad\text{donc}\quad7{,}76\leq v\leq8{,}25$$

2. On calcule l'écart par rapport à $8$ aux deux bornes :

   $$\displaystyle \dfrac{99}{12{,}75}\approx7{,}765=8(1-0{,}0294)\qquad\dfrac{101}{12{,}25}\approx8{,}245=8(1+0{,}0306)$$

   L'erreur relative maximale est $0{,}0306=3{,}06\,\%$, donc inférieure à $3{,}1\,\%$.

3. **Produit.**

   $$\displaystyle ab-a_0b_0=a_0b_0\big[(1+\varepsilon)(1+\eta)-1\big]=a_0b_0(\varepsilon+\eta+\varepsilon\eta)$$

   Avec l'inégalité triangulaire et $|\varepsilon|\leq p$, $|\eta|\leq q$ :

   $$\displaystyle |ab-a_0b_0|\leq a_0b_0(|\varepsilon|+|\eta|+|\varepsilon||\eta|)\leq(p+q+pq)\,a_0b_0$$

   **Quotient.**

   $$\displaystyle \dfrac ab-\dfrac{a_0}{b_0}=\dfrac{a_0}{b_0}\left(\dfrac{1+\varepsilon}{1+\eta}-1\right)=\dfrac{a_0}{b_0}\times\dfrac{\varepsilon-\eta}{1+\eta}$$

   On a $|\varepsilon-\eta|\leq p+q$ et $1+\eta\geq1-q>0$, donc $\dfrac1{1+\eta}\leq\dfrac1{1-q}$ :

   $$\displaystyle \left|\dfrac ab-\dfrac{a_0}{b_0}\right|\leq\dfrac{p+q}{1-q}\times\dfrac{a_0}{b_0}$$

4. L'aire est le produit des côtés : $p=0{,}01$ et $q=0{,}03$.

   $$\displaystyle p+q+pq=0{,}01+0{,}03+0{,}0003=0{,}0403$$

   L'aire est connue à $4{,}03\,\%$ près (et non $3\,\%$).

**Idée :** écrire $a=a_0(1+\varepsilon)$ fait apparaître directement les erreurs relatives.    **Piège :** additionner naïvement les erreurs relatives pour un quotient : la borne est $\dfrac{p+q}{1-q}$.
