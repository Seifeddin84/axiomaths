---
uid: "0000044"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Suites Arithmétiques et Géométriques"
source: "Devoir de synthèse N°2 - Lycée Pilote Sakiet Ezzit - Sfax 2"
schoolType: "pilote"
title: "Suites arithmétiques et géométriques"
country: "Tunisie"
year: 2026
professor: "H. Bouzid, N. Jalleli, M. Msekni, I. Chaabene, R. Fakhfekh"
difficulty: "Moyen"
points: 7
tags: ["suites", "suite-arithmetique", "suite-geometrique", "somme-de-termes"]
dressing: "raison déduite d'une somme et d'un produit"
rung: 3
---


Soit $(U_n)$ la suite arithmétique définie sur $\mathbb{N}$ et de raison $r < 0$ tels que $U_3 + U_7 = -10$ et $U_3 \cdot U_7 = 9$.

1. 
   a. Montrer que $U_3 = -1$ et $U_7 = -9$.

   b. Déduire que $r = -2$ puis déterminer le terme général de la suite $(U_n)$.

   c. Justifier que $U_n \in \mathbb{Z}$ pour tout $n \in \mathbb{N}$.

   d. On pose $S_n = U_0 + U_1 + \dots + U_n$ pour tout $n \in \mathbb{N}$.
      Justifier que $S_n = -n^2 + 4n + 5$.

2. Soit $(V_n)$ la suite définie sur $\mathbb{N}$ par $V_n = \left(\sqrt{5}\right)^{U_n}$.

   a. Calculer $V_0$.

   b. Montrer que la suite $(V_n)$ est géométrique de raison $\dfrac{1}{5}$.

   c. On pose $P_n = V_0 \cdot V_1 \cdot \dots \cdot V_n$ pour tout $n \in \mathbb{N}$.
      Déterminer $n$ pour que $P_n = 625\sqrt{5}$.

---
## Solution

:::property[Suite arithmétique]
$(U_n)$ est **arithmétique** de raison $r$ lorsque $U_{n+1} = U_n + r$ pour tout $n \in \mathbb{N}$.

Terme général, à partir de n'importe quel terme connu $U_p$ :

$$\boxed{U_n = U_p + (n - p)\,r}$$

Somme des $n+1$ premiers termes :

$$\boxed{U_0 + U_1 + \dots + U_n = (n+1)\,\dfrac{U_0 + U_n}{2}}$$
:::

:::property[Somme et produit de deux nombres]
Si deux nombres ont pour somme $S$ et pour produit $P$, ce sont les solutions de l'équation $X^2 - S\,X + P = 0$.
:::

1.
   a. $U_3$ et $U_7$ ont pour somme $U_3 + U_7 = -10$ et pour produit $U_3 \cdot U_7 = 9$.

      D'après le rappel, ce sont les solutions de l'équation $X^2 + 10X + 9 = 0$.

      $$\displaystyle \Delta = 10^2 - 4 \times 1 \times 9 = 100 - 36 = 64 = 8^2$$

      $$\displaystyle X_1 = \dfrac{-10 - 8}{2} = -9 \qquad X_2 = \dfrac{-10 + 8}{2} = -1$$

      Comme $r < 0$, la suite est décroissante : $U_3 > U_7$.

      Donc $U_3 = -1$ et $U_7 = -9$.

   b. On applique le terme général avec $p = 3$ et $n = 7$ :

      $$\displaystyle U_7 = U_3 + (7 - 3)\,r \implies -9 = -1 + 4r \implies 4r = -8$$

      $$\boxed{r = -2}$$

      On repart de $U_3 = -1$ pour écrire $U_n$ :

      $$\displaystyle U_n = U_3 + (n - 3)\,r = -1 - 2(n - 3) = -1 - 2n + 6$$

      $$\boxed{U_n = 5 - 2n}$$

      Contrôle : $U_3 = 5 - 6 = -1$ et $U_7 = 5 - 14 = -9$.

   c. $n$ est un entier, donc $2n$ est un entier, donc $5 - 2n$ est un entier.

      Ainsi $U_n \in \mathbb{Z}$ pour tout $n \in \mathbb{N}$.

   d. On a $U_0 = 5$ et $U_n = 5 - 2n$. On utilise la formule de la somme :

      $$\displaystyle S_n = (n+1)\,\dfrac{U_0 + U_n}{2} = (n+1)\,\dfrac{5 + 5 - 2n}{2} = (n+1)\,\dfrac{10 - 2n}{2}$$

      $$\displaystyle S_n = (n+1)(5 - n) = 5n - n^2 + 5 - n = -n^2 + 4n + 5$$

2.
   :::property[Suite géométrique et puissances]
   $(V_n)$ est **géométrique** de raison $q$ lorsque $\dfrac{V_{n+1}}{V_n} = q$ pour tout $n$.

   Règles sur les puissances ($a > 0$) :

   $$\boxed{a^m \times a^n = a^{m+n}} \qquad \boxed{\dfrac{a^m}{a^n} = a^{m-n}}$$
   :::

   a. $V_0 = \left(\sqrt{5}\right)^{U_0} = \left(\sqrt{5}\right)^{5}$.

      On sait que $\left(\sqrt{5}\right)^{2} = 5$. On découpe l'exposant :

      $$\displaystyle \left(\sqrt{5}\right)^{5} = \left(\sqrt{5}\right)^{2} \times \left(\sqrt{5}\right)^{2} \times \sqrt{5} = 5 \times 5 \times \sqrt{5} = 25\sqrt{5}$$

   b. Pour tout $n \in \mathbb{N}$, on divise deux termes consécutifs :

      $$\displaystyle \dfrac{V_{n+1}}{V_n} = \dfrac{\left(\sqrt{5}\right)^{U_{n+1}}}{\left(\sqrt{5}\right)^{U_n}} = \left(\sqrt{5}\right)^{U_{n+1} - U_n}$$

      Or $U_{n+1} - U_n = r = -2$. Donc :

      $$\displaystyle \dfrac{V_{n+1}}{V_n} = \left(\sqrt{5}\right)^{-2} = \dfrac{1}{\left(\sqrt{5}\right)^{2}} = \dfrac{1}{5}$$

      Le quotient ne dépend pas de $n$ : $(V_n)$ est géométrique de raison $\dfrac15$.

   c. $P_n$ est un produit de puissances de $\sqrt{5}$. On additionne les exposants :

      $$\displaystyle P_n = \left(\sqrt{5}\right)^{U_0} \times \left(\sqrt{5}\right)^{U_1} \times \dots \times \left(\sqrt{5}\right)^{U_n} = \left(\sqrt{5}\right)^{U_0 + U_1 + \dots + U_n} = \left(\sqrt{5}\right)^{S_n}$$

      On écrit $625\sqrt{5}$ comme une puissance de $\sqrt{5}$. Comme $5 = \left(\sqrt{5}\right)^{2}$ :

      $$\displaystyle 625 = 5^4 = \left(\sqrt{5}\right)^{8} \qquad\text{donc}\qquad 625\sqrt{5} = \left(\sqrt{5}\right)^{8} \times \sqrt{5} = \left(\sqrt{5}\right)^{9}$$

      Deux puissances de $\sqrt{5}$ (qui est plus grand que $1$) sont égales si et seulement si leurs exposants sont égaux :

      $$\displaystyle P_n = 625\sqrt{5} \iff \left(\sqrt{5}\right)^{S_n} = \left(\sqrt{5}\right)^{9} \iff S_n = 9$$

      On utilise le résultat de 1. d. :

      $$\displaystyle -n^2 + 4n + 5 = 9 \iff n^2 - 4n + 4 = 0 \iff (n - 2)^2 = 0 \iff \boxed{n = 2}$$

      Contrôle : $V_1 = \dfrac{V_0}{5} = 5\sqrt{5}$ et $V_2 = \dfrac{V_1}{5} = \sqrt{5}$, donc $P_2 = 25\sqrt{5} \times 5\sqrt{5} \times \sqrt{5} = 625\sqrt{5}$.

:::intuition
Un produit de puissances de même base devient une puissance dont l'exposant est la **somme** des exposants : la question 2. c. se ramène à la somme $S_n$ calculée en 1. d.
:::

:::trap
Ne pas confondre $a^m \times a^n = a^{m+n}$ (on additionne les exposants) avec $a^m + a^n$, qui ne se simplifie pas.
:::
