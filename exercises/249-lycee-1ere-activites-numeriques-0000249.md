---
uid: "0000249"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Synthèse : intervalles, valeur absolue et paramètre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["valeur-absolue", "parametre", "inequations", "ensembles-de-points"]
provenance: own
dressing: "synthèse : intervalles, valeur absolue et paramètre"
rung: 5
---

On pose $A=\{x\in\mathbb{R}\ :\ |x-1|\le2\}$ et $B=\{x\in\mathbb{R}\ :\ |2x+1|>3\}$.

1. Écrire $A$ et $B$ sous forme d'intervalles ou de réunions d'intervalles.

2. Déterminer $A\cap B$ et $A\cup B$.

3. Pour $m\in\mathbb{R}$, on pose $I_m=[m-1,m+2]$. Déterminer les réels $m$ pour lesquels $I_m\subset A$.

4. Déterminer les réels $m$ pour lesquels $I_m\cap B=\varnothing$.

5. Résoudre dans $\mathbb{R}$ l'inéquation $|x-1|<|2x+1|$. [Comparer les carrés.]

---

## Solution

1.
   > **Valeur absolue et inégalités.** Pour $r>0$ : $\boxed{|u|\leq r\iff-r\leq u\leq r}$    et    **$|u|>r\iff u>r$ ou $u<-r$**.

   Pour $A$ :

   $$\displaystyle |x-1|\leq2\iff-2\leq x-1\leq2\iff-1\leq x\leq3\qquad A=[-1,3]$$

   Pour $B$ :

   $$\displaystyle |2x+1|>3\iff2x+1>3\ \text{ou}\ 2x+1<-3\iff x>1\ \text{ou}\ x<-2$$

   $$\displaystyle B=\,]-\infty,-2[\,\cup\,]1,+\infty[$$

2. Sur une droite graduée : $A$ va de $-1$ à $3$, $B$ est l'extérieur de $[-2,1]$.

   Intersection : les points qui sont dans $A$ *et* dans $B$.

   $$\displaystyle A\cap B=\,]1,3]$$

   Réunion : les points qui sont dans $A$ *ou* dans $B$.

   $$\displaystyle A\cup B=\,]-\infty,-2[\,\cup\,[-1,+\infty[$$

3. $I_m=[m-1,m+2]$ est contenu dans $A=[-1,3]$ si sa borne gauche est $\geq-1$ et sa borne droite est $\leq3$ :

   $$\displaystyle m-1\geq-1\iff m\geq0\qquad\text{et}\qquad m+2\leq3\iff m\leq1$$

   $$\displaystyle m\in[0,1]$$

4. $I_m\cap B=\varnothing$ signifie que $I_m$ est contenu dans le complémentaire de $B$, qui est $[-2,1]$ :

   $$\displaystyle m-1\geq-2\iff m\geq-1\qquad\text{et}\qquad m+2\leq1\iff m\leq-1$$

   Les deux conditions donnent $m=-1$ (alors $I_{-1}=[-2,1]$).

5.
   > **Comparer des valeurs absolues.** $\boxed{|u|<|v|\iff u^2<v^2}$, et $\boxed{v^2-u^2=(v-u)(v+u)}$.

   $$\displaystyle |x-1|<|2x+1|\iff(x-1)^2<(2x+1)^2\iff(2x+1)^2-(x-1)^2>0$$

   $$\displaystyle \big[(2x+1)-(x-1)\big]\big[(2x+1)+(x-1)\big]>0\iff(x+2)(3x)>0$$

   Les racines sont $-2$ et $0$ ; le trinôme $3x^2+6x$ est positif à l'extérieur des racines :

   $$\displaystyle \mathcal S=\,]-\infty,-2[\,\cup\,]0,+\infty[$$

**Idée :** $|x-a|\leq r$ signifie $x\in[a-r,a+r]$.    **Piège :** $|2x+1|>3$ donne une *réunion* (deux cas), pas une intersection.
