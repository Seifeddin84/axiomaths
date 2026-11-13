---
uid: "0000214"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Dérivation - Primitives"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 15"
title: "Lecture graphique : demi-tangentes, dérivabilité et tableau de variations"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["derivation", "lecture-graphique", "demi-tangente", "derivabilite", "tableau-de-variations"]
---

Soit la fonction $f$ dont la courbe représentative $\mathcal{C}_f$ est la suivante. Les flèches représentent des tangentes ou des demi-tangentes à la courbe.

![Courbe de f : elle part du point (−1, 0) avec une demi-tangente verticale, monte jusqu'au point A d'abscisse −2/3 où la tangente est horizontale, redescend vers l'origine, puis remonte vers la droite](/exercises/images/214-lycee-4eme-eco-derivation-primitives-0000214.png)

1. Déterminer graphiquement $f(-1)$, $f(0)$, $f\left(-\dfrac{2}{3}\right)$ et $\displaystyle\lim_{x \to +\infty} f(x)$.

2. Par lecture graphique, déterminer $f'\left(-\dfrac{2}{3}\right)$.

3. La courbe admet en $0$ deux demi-tangentes. Calculer $\displaystyle\lim_{x \to 0^-} \dfrac{f(x)}{x}$ et $\displaystyle\lim_{x \to 0^+} \dfrac{f(x)}{x}$. $f$ est-elle dérivable en $0$ ?

4. La demi-tangente à $\mathcal{C}_f$ en $-1$ est verticale, dirigée vers le haut : déterminer alors $\displaystyle\lim_{x \to -1^+} \dfrac{f(x)}{x + 1}$.

5. Dresser le tableau de variations de $f$.

---

## Solution

1. On lit les ordonnées des points de la courbe.

   - La courbe commence au point d'abscisse $-1$, sur l'axe des abscisses : $f(-1) = 0$.

   - Elle passe par l'origine : $f(0) = 0$.

   - Le point $A$ a pour coordonnées $\left(-\dfrac{2}{3}, \sqrt{\dfrac{4}{27}}\right)$ : $f\left(-\dfrac{2}{3}\right) = \sqrt{\dfrac{4}{27}} = \dfrac{2}{3\sqrt{3}} \approx 0{,}385$.

   - À droite de $0$, la courbe monte de plus en plus vite et ne s'arrête pas : $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

2. En $A$, la tangente est **horizontale** : son coefficient directeur est $0$. Comme le coefficient directeur de la tangente est le nombre dérivé :

   $f'\left(-\dfrac{2}{3}\right) = 0$.

3. Le quotient $\dfrac{f(x)}{x}$ est le taux d'accroissement de $f$ en $0$ : comme $f(0) = 0$, on a $\dfrac{f(x) - f(0)}{x - 0} = \dfrac{f(x)}{x}$. Sa limite est le **coefficient directeur de la demi-tangente** correspondante.

   - **À gauche de $0$** : la demi-tangente passe par l'origine et par le point $(-0{,}5\,;\,0{,}5)$ (sa flèche). Son coefficient directeur est $\dfrac{0{,}5 - 0}{-0{,}5 - 0} = -1$.

     $\displaystyle\lim_{x \to 0^-} \dfrac{f(x)}{x} = -1$.

   - **À droite de $0$** : la demi-tangente passe par l'origine et par le point $(0{,}5\,;\,0{,}5)$. Son coefficient directeur est $\dfrac{0{,}5}{0{,}5} = 1$.

     $\displaystyle\lim_{x \to 0^+} \dfrac{f(x)}{x} = 1$.

   Les limites à gauche ($-1$) et à droite ($1$) sont différentes : le taux d'accroissement n'a pas de limite en $0$, donc **$f$ n'est pas dérivable en $0$**. La courbe a en $0$ un **point anguleux**.

4. Comme $f(-1) = 0$, on a $\dfrac{f(x)}{x + 1} = \dfrac{f(x) - f(-1)}{x - (-1)}$ : c'est le taux d'accroissement de $f$ en $-1$ (à droite, car $f$ n'est définie que pour $x \geq -1$).

   Une demi-tangente **verticale dirigée vers le haut** correspond à un taux d'accroissement qui tend vers $+\infty$ :

   $\displaystyle\lim_{x \to -1^+} \dfrac{f(x)}{x + 1} = +\infty$.

5. On lit les variations sur la courbe :

   - de $-1$ à $-\dfrac{2}{3}$ : la courbe monte, de $0$ jusqu'à $\sqrt{\dfrac{4}{27}}$ (maximum local, tangente horizontale) ;

   - de $-\dfrac{2}{3}$ à $0$ : elle redescend jusqu'à $0$ ;

   - de $0$ à $+\infty$ : elle remonte indéfiniment, jusqu'à $+\infty$.

   | $x$ | $-1$ | | $-\dfrac{2}{3}$ | | $0$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f(x)$ | $0$ | ↗ | $\sqrt{\dfrac{4}{27}}$ | ↘ | $0$ | ↗ | $+\infty$ |

   *Remarque.* En $-\dfrac{2}{3}$ la dérivée s'annule et change de signe (elle passe de $+$ à $-$) ; en $0$, la dérivée n'existe pas (point anguleux) mais $f$ passe quand même de la décroissance à la croissance.
