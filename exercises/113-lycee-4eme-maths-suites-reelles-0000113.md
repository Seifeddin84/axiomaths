---
uid: "0000003"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Suites réelles"
source: "MS Maths"
title: "Étude d'une suite définie par une relation de récurrence non linéaire"
country: "Tunisie"
year: null
professor: "M. MS Maths"
difficulty: "Moyen"
points: null
tags: ["suites", "suite-geometrique", "raisonnement-par-recurrence"]
---

On définit pour tout entier naturel $n$, les suites $(u_n)$ et $(v_n)$ respectivement par :
$u_0 = \frac{1}{2}$, $\quad u_{n+1} = \frac{2}{3}(u_n)^2 \quad$ et $\quad v_n = \ln\left(\frac{2}{3}u_n\right)$

1. Démontrer par récurrence que pour tout entier $n$, $u_n > 0$.

2. a. Calculer $v_0$.

   b. Démontrer que $(v_n)$ est une suite géométrique de raison 2.

3. Exprimer $v_n$ puis $u_n$ en fonction de $n$.

4. On pose : $S = v_0 + v_1 + \dots + v_n$ et $S' = u_0 \times u_1 \times \dots \times u_n$.

   a. Calculer $S$ en fonction de $n$.

   b. Prouver que $S' = \left(\frac{3}{2}\right)^{n+1} e^S$ puis exprimer $S'$ en fonction de $n$.

---

## Solution

1. **Démonstration par récurrence :**
   - **Initialisation :** Pour $n=0$, $u_0 = \frac{1}{2} > 0$. La propriété est vraie pour $n=0$.
   - **Hérédité :** Supposons que pour un certain entier $n$, $u_n > 0$.
     Montrons que $u_{n+1} > 0$.
     $u_{n+1} = \frac{2}{3}(u_n)^2$. Puisque $u_n > 0$, son carré $(u_n)^2 > 0$. En multipliant par $\frac{2}{3} > 0$, on obtient bien $u_{n+1} > 0$.
   - **Conclusion :** Par le principe de récurrence, pour tout entier $n \in \mathbb{N}$, $u_n > 0$.

2. a. **Calcul de $v_0$ :**
   $v_0 = \ln\left(\frac{2}{3}u_0\right) = \ln\left(\frac{2}{3} \times \frac{1}{2}\right) = \ln\left(\frac{1}{3}\right) = -\ln 3$.

   b. **Nature de la suite $(v_n)$ :**
   $v_{n+1} = \ln\left(\frac{2}{3}u_{n+1}\right) = \ln\left(\frac{2}{3} \times \frac{2}{3}(u_n)^2\right)$
   $v_{n+1} = \ln\left(\left(\frac{2}{3}u_n\right)^2\right) = 2 \ln\left(\frac{2}{3}u_n\right) = 2v_n$.
   Ainsi, $(v_n)$ est une suite géométrique de raison $q = 2$ et de premier terme $v_0 = -\ln 3$.

3. **Expressions en fonction de $n$ :**
   Pour une suite géométrique, $v_n = v_0 \times q^n$.
   Donc, $v_n = -\ln(3) \times 2^n = -2^n \ln 3$.
   Pour exprimer $u_n$ :
   $v_n = \ln\left(\frac{2}{3}u_n\right) \iff e^{v_n} = \frac{2}{3}u_n \iff u_n = \frac{3}{2}e^{v_n}$.
   En remplaçant $v_n$ : $u_n = \frac{3}{2}e^{-2^n \ln 3} = \frac{3}{2}\left(e^{\ln 3}\right)^{-2^n} = \frac{3}{2} \times 3^{-2^n}$.

4. a. **Calcul de la somme $S$ :**
   $S$ est la somme des $n+1$ premiers termes d'une suite géométrique.
   $S = v_0 \frac{1 - q^{n+1}}{1 - q} = (-\ln 3) \frac{1 - 2^{n+1}}{1 - 2} = (-\ln 3) \frac{1 - 2^{n+1}}{-1} = \ln(3) \times (1 - 2^{n+1}) = (1 - 2^{n+1})\ln 3$.

   b. **Calcul du produit $S'$ :**
   $S' = u_0 \times u_1 \times \dots \times u_n$.
   Sachant que $u_k = \frac{3}{2}e^{v_k}$ pour tout $k$,
   $S' = \left(\frac{3}{2}e^{v_0}\right) \times \left(\frac{3}{2}e^{v_1}\right) \times \dots \times \left(\frac{3}{2}e^{v_n}\right)$.
   En regroupant les termes :
   $S' = \left(\frac{3}{2}\right)^{n+1} e^{v_0 + v_1 + \dots + v_n} = \left(\frac{3}{2}\right)^{n+1} e^S$.
   En remplaçant $S$ par son expression :
   $S' = \left(\frac{3}{2}\right)^{n+1} e^{(1 - 2^{n+1})\ln 3} = \left(\frac{3}{2}\right)^{n+1} \left(e^{\ln 3}\right)^{1 - 2^{n+1}} = \left(\frac{3}{2}\right)^{n+1} 3^{1 - 2^{n+1}}$.