---
uid: "0000248"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Axiomaths"
title: "Valeur absolue : sommes de distances"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["valeur-absolue", "fonction-par-morceaux", "minimum"]
provenance: own
idea: "valeur-absolue-distance"
dressing: "somme de trois valeurs absolues"
rung: 3
---

Pour tout réel $x$, on pose $f(x)=|x+2|+|x-1|+|x-4|$.

1. Écrire $f(x)$ sans valeur absolue sur chacun des intervalles $]-\infty,-2]$, $[-2,1]$, $[1,4]$ et $[4,+\infty[$.

2. Interpréter $f(x)$ comme une somme de distances sur une droite graduée. Quelle est la valeur minimale de $f$ ? En quel(s) point(s) est-elle atteinte ?

3. Résoudre l'inéquation $f(x)\le10$.

4. Discuter, suivant le réel $m$, le nombre de solutions de l'équation $f(x)=m$.

5. Soit $g(x)=|x+2|+|x-1|+|x-4|+|x-6|$. Montrer que $g(x)=11$ pour tout $x\in[1,4]$ et que $g(x)>11$ ailleurs.

---

## Solution

1.
   > **Valeur absolue.** **$|u|=u$ si $u\geq0$**    et    **$|u|=-u$ si $u<0$**.

   Les valeurs importantes, dans l'ordre : $-2<1<4$. On étudie le signe de chaque expression :

   | $x$ | $-\infty$ |  | $-2$ | $1$ | $4$ |  | $+\infty$ |
   |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
   | $x+2$ |  | $-$ | $0$ | $+$ | $+$ | $+$ |  |
   | $x-1$ |  | $-$ | $-$ | $0$ | $+$ | $+$ |  |
   | $x-4$ |  | $-$ | $-$ | $-$ | $0$ | $+$ |  |

   **Sur $]-\infty,-2]$ :** les trois sont négatifs, on change tous les signes.

   $$\displaystyle f(x)=-(x+2)-(x-1)-(x-4)=-3x+3$$

   **Sur $[-2,1]$ :** $x+2\geq0$, les deux autres sont négatifs.

   $$\displaystyle f(x)=(x+2)-(x-1)-(x-4)=-x+7$$

   **Sur $[1,4]$ :** seul $x-4$ est négatif.

   $$\displaystyle f(x)=(x+2)+(x-1)-(x-4)=x+5$$

   **Sur $[4,+\infty[$ :** les trois sont positifs.

   $$\displaystyle f(x)=(x+2)+(x-1)+(x-4)=3x-3$$

   Contrôle : les valeurs se raccordent ($f(-2)=9$, $f(1)=6$, $f(4)=9$).

2.
   > **Distance.** **$|x-a|$ est la distance entre les points d'abscisses $x$ et $a$.**

   Soit $M$ le point d'abscisse $x$, $A(-2)$, $B(1)$, $C(4)$. Alors $f(x)=MA+MB+MC$.

   Sur $]-\infty,1]$ la fonction est décroissante (pentes $-3$ puis $-1$), sur $[1,+\infty[$ elle est croissante (pentes $1$ puis $3$).

   Le minimum est donc $f(1)=6$, atteint **uniquement** en $x=1$ : c'est le point du milieu $B$.

3. On résout $f(x)\leq10$ intervalle par intervalle.

   Sur $]-\infty,-2]$ : $-3x+3\leq10\iff-3x\leq7\iff x\geq-\dfrac73$ (on divise par $-3$ : le sens change). Comme $-\dfrac73\approx-2{,}33<-2$, on garde $\left[-\dfrac73,-2\right]$.

   Sur $[-2,1]$ : $-x+7\leq10\iff x\geq-3$, toujours vrai : on garde $[-2,1]$.

   Sur $[1,4]$ : $x+5\leq10\iff x\leq5$, toujours vrai : on garde $[1,4]$.

   Sur $[4,+\infty[$ : $3x-3\leq10\iff x\leq\dfrac{13}3\approx4{,}33$ : on garde $\left[4,\dfrac{13}3\right]$.

   $$\displaystyle \mathcal S=\left[-\dfrac73\,;\dfrac{13}3\right]$$

4. On utilise le minimum et les variations de la question 2.

   **Si $m<6$ :** aucune solution, car $f(x)\geq6$.

   **Si $m=6$ :** une seule solution, $x=1$.

   **Si $m>6$ :** exactement deux solutions, une de chaque côté de $1$. Elles sont données par :

   |  | côté gauche | côté droit |
   |:---:|:---:|:---:|
   | $6<m\leq9$ | $-x+7=m$, soit $x=7-m$ | $x+5=m$, soit $x=m-5$ |
   | $m\geq9$ | $-3x+3=m$, soit $x=\dfrac{3-m}3$ | $3x-3=m$, soit $x=\dfrac{m+3}3$ |

   (Pour $m=9$, les deux formules donnent les mêmes valeurs $-2$ et $4$.)

5.
   a. On étudie $g(x)=|x+2|+|x-1|+|x-4|+|x-6|$ avec les valeurs importantes $-2<1<4<6$.

   **Sur $]-\infty,-2]$ :** $g(x)=(-x-2)+(1-x)+(4-x)+(6-x)=9-4x\geq17$.

   **Sur $[-2,1]$ :** $g(x)=(x+2)+(1-x)+(4-x)+(6-x)=13-2x\geq11$ (égalité en $x=1$).

   **Sur $[1,4]$ :** $g(x)=(x+2)+(x-1)+(4-x)+(6-x)=11$.

   **Sur $[4,6]$ :** $g(x)=(x+2)+(x-1)+(x-4)+(6-x)=2x+3\geq11$ (égalité en $x=4$).

   **Sur $[6,+\infty[$ :** $g(x)=4x-9\geq15$.

   Conclusion : $g(x)=11$ pour tout $x\in[1,4]$ et $g(x)>11$ partout ailleurs.

**Idée :** une somme de distances à des points fixes est minimale au « milieu » (médiane) des points.    **Piège :** croire que le minimum est toujours atteint en un seul point : avec un nombre pair de points, il l'est sur tout un intervalle.
