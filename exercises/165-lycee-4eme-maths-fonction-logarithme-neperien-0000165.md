---
uid: "0000165"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Bac 1978 principale, Problème (parties A et C)"
title: "Les fonctions x²(a + b ln x) : étude et intégrales de t⁴ ln t, t⁴(ln t)²"
country: "Tunisie"
year: 1978
professor: null
difficulty: "Moyen"
points: null
tags: ["bac", "logarithme", "derivabilite-en-0", "integration-par-parties", "limite-d-integrale"]
bac: "1978-principale-maths"
---

Pour tout couple de réels $(a, b)$, on considère la fonction $f_{(a,b)}$ de $\mathbb{R}^+$ dans $\mathbb{R}$ définie par $f_{(a,b)}(x) = x^2(a + b\ln x)$ si $x > 0$ et $f_{(a,b)}(0) = 0$.

### Partie A

On pose $g = f_{(1,-1)}$.

1. Montrer que la fonction $g$ est continue au point $0$ et qu'elle est dérivable en ce point.

2. Étudier les variations de $g$ et tracer sa courbe représentative dans un repère orthonormé. (On donne : $e \approx 2{,}71$ ; $\sqrt{e} \approx 1{,}68$.)

### Partie B

Soit $s$ un réel de l'intervalle $]0, 1[$.

1. a. Calculer $I(s) = \displaystyle\int_s^1 t^4\ln t\,dt$ ; en déduire $\lim\limits_{s \to 0^+} I(s)$.

   b. On pose $J(s) = \displaystyle\int_s^1 t^4(\ln t)^2\,dt$. Trouver une relation entre $I(s)$ et $J(s)$ ; en déduire $\lim\limits_{s \to 0^+} J(s)$.

2. On pose $K(s) = \displaystyle\int_s^1 \left[f_{(a,b)}(t)\right]^2 dt$. Déterminer $\lim\limits_{s \to 0^+} K(s)$.

*La partie B du sujet d'origine (l'espace vectoriel des fonctions $f_{(a,b)}$ et un endomorphisme) n'est plus au programme ; la partie B ci-dessus est la partie C du sujet. Voir la [page du sujet](/bac/1978-principale-maths).*

---

## Solution

### Partie A

1. $g(x) = x^2(1 - \ln x)$ pour $x > 0$. $\lim\limits_{x \to 0^+} x^2\ln x = 0$, donc $\lim\limits_{0^+} g = 0 = g(0)$ : $g$ est continue en $0$.

   $\dfrac{g(x) - g(0)}{x} = x(1 - \ln x) = x - x\ln x \to 0$ : $g$ est dérivable en $0$ et $g'(0) = 0$ (tangente horizontale).

2. Pour $x > 0$ : $g'(x) = 2x(1 - \ln x) - x = x(1 - 2\ln x)$, positif sur $]0, \sqrt{e}]$, négatif sur $[\sqrt{e}, +\infty[$.

   Maximum $g(\sqrt e) = e\left(1 - \dfrac12\right) = \dfrac{e}{2} \approx 1{,}36$. $g$ s'annule en $0$ et en $e$.

   $\lim\limits_{x \to +\infty} g(x) = -\infty$ et $\dfrac{g(x)}{x} = x(1 - \ln x) \to -\infty$ : branche parabolique de direction $(O\vec{j})$.

### Partie B

1. a. Par parties, $u = \ln t$, $v' = t^4$ : $I(s) = \left[\dfrac{t^5}{5}\ln t\right]_s^1 - \displaystyle\int_s^1 \dfrac{t^4}{5}\,dt = -\dfrac{s^5\ln s}{5} - \dfrac{1 - s^5}{25}$.

   $s^5\ln s \to 0$, donc $\lim\limits_{s \to 0^+} I(s) = -\dfrac{1}{25}$.

   b. Par parties, $u = (\ln t)^2$, $v' = t^4$ : $J(s) = \left[\dfrac{t^5}{5}(\ln t)^2\right]_s^1 - \dfrac25\displaystyle\int_s^1 t^4\ln t\,dt = -\dfrac{s^5(\ln s)^2}{5} - \dfrac25\,I(s)$.

   $s^5(\ln s)^2 \to 0$, donc $\lim\limits_{s \to 0^+} J(s) = -\dfrac25 \cdot \left(-\dfrac{1}{25}\right) = \dfrac{2}{125}$.

2. $\left[f_{(a,b)}(t)\right]^2 = t^4\left(a^2 + 2ab\ln t + b^2(\ln t)^2\right)$, donc $K(s) = a^2\,\dfrac{1 - s^5}{5} + 2ab\,I(s) + b^2 J(s)$.

   $\lim\limits_{s \to 0^+} K(s) = \dfrac{a^2}{5} - \dfrac{2ab}{25} + \dfrac{2b^2}{125}$.

   *Remarque :* cette limite est la « norme au carré » de $f_{(a,b)}$ ; elle est strictement positive dès que $(a, b) \neq (0, 0)$, car le discriminant $\left(\frac{2}{25}\right)^2 - 4 \cdot \frac15 \cdot \frac{2}{125} = -\frac{4}{625}$ est négatif.
