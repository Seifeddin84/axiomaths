---
uid: "0000203"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 6"
title: "Lecture graphique de limites : asymptotes en 1, en 2 et en l'infini"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["limites", "lecture-graphique", "asymptote-verticale", "asymptote-horizontale"]
---

On donne ci-dessous la courbe représentative d'une fonction $f$ ; les droites en pointillés sont les droites d'équations $x = 1$ et $x = 2$.

![Courbe de f avec deux asymptotes verticales x = 1 et x = 2 et l'axe des abscisses comme asymptote horizontale](/exercises/images/203-lycee-4eme-eco-limites-et-continuite-0000203.png)

Déterminer graphiquement les limites suivantes : $\displaystyle\lim_{x \to \pm\infty} f(x)$, $\displaystyle\lim_{x \to 1^-} f(x)$, $\displaystyle\lim_{x \to 1^+} f(x)$, $\displaystyle\lim_{x \to 2^-} f(x)$ et $\displaystyle\lim_{x \to 2^+} f(x)$.

---

## Solution

**Comment lire une limite sur un graphique.** On suit la courbe en se rapprochant de la valeur de $x$ demandée, **du côté indiqué** : à gauche pour $x \to a^-$, à droite pour $x \to a^+$. On regarde alors où va la courbe : vers le haut ($+\infty$), vers le bas ($-\infty$), ou vers une hauteur précise.

**En $\pm\infty$.** Quand on s'éloigne vers la droite ou vers la gauche, la courbe se rapproche de l'axe des abscisses (de la hauteur $y = 0$) :

- à gauche, elle reste **au-dessus** de l'axe et s'en rapproche ;

- à droite, elle reste **au-dessous** de l'axe et s'en rapproche.

$\displaystyle\lim_{x \to -\infty} f(x) = 0$ et $\displaystyle\lim_{x \to +\infty} f(x) = 0$.

**En $1$.**

- À gauche de $1$ ($x \to 1^-$) : la courbe monte le long de la droite pointillée $x = 1$ : $\displaystyle\lim_{x \to 1^-} f(x) = +\infty$.

- À droite de $1$ ($x \to 1^+$) : la courbe descend le long de la droite pointillée : $\displaystyle\lim_{x \to 1^+} f(x) = -\infty$.

**En $2$.**

- À gauche de $2$ ($x \to 2^-$) : la courbe (celle qui monte entre les deux pointillés) monte vers le haut : $\displaystyle\lim_{x \to 2^-} f(x) = +\infty$.

- À droite de $2$ ($x \to 2^+$) : la courbe repart du bas : $\displaystyle\lim_{x \to 2^+} f(x) = -\infty$.

**Conclusion.** Les droites $x = 1$ et $x = 2$ sont des **asymptotes verticales** et l'axe des abscisses est une **asymptote horizontale** en $+\infty$ et en $-\infty$. Comme les limites à gauche et à droite sont différentes en $1$ et en $2$, $f$ n'a pas de limite en $1$ ni en $2$.
