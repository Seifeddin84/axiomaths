---
uid: "0000123"
school: "lycee"
level: "4eme"
section: "Sciences Expérimentales"
chapter: "Fonction logarithme népérien"
source: "Arthur"
title: "Étude d'une fonction logarithmique définie par morceaux"
country: "Tunisie"
year: null
professor: "M. Arthur"
difficulty: "Moyen"
points: null
tags: ["etude-de-fonction", "logarithme", "limites", "bijection"]
---

Soit $f$, une fonction définie par :

$$ f(x) = \begin{cases} x \ln x & \text{si } x > 0 \\ -x + 2\ln(x + 1) & \text{si } x \le 0 \end{cases} $$

Où $(C)$ sa courbe d'unité $2\text{ cm}$.

1. Déterminer l'ensemble de définition de $f$.

2. Montrer que $f$ est continue en $x_0 = 0$.

3. Calculer $\lim_{x \to 0^-} \left[ \frac{f(x) - f(0)}{x - 0} \right]$ et $\lim_{x \to 0^+} \left[ \frac{f(x) - f(0)}{x - 0} \right]$.

   Que peut-on en conclure sur $f$ et pour $(C)$.

4. Calculer la limite de $f$ en $-1$.

5. Montrer que pour tout $x > 0$, $f'(x) = \ln x + 1$ et étudier son signe.

6. Montrer que pour tout $x > -1$ et $x \le 0$, $f'(x) = \frac{-x + 1}{x + 1}$ et étudier son signe.

7. Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to +\infty} \frac{f(x)}{x}$.

   Que peut-on en conclure ?

8. Dresser le tableau de variation de $f$.

9. Écrire l'équation de la tangente $(T)$ à $(C)$ en $x = 1$.

10. On pose $h$ la restriction de $f$ sur $]-1 ; 0]$.

    a. Montrer que $h$ est une bijection de $]-1 ; 0]$ sur l'intervalle $J$ à déterminer.

    b. Calculer $h\left(-\frac{1}{2}\right)$. En déduire la valeur de $(h^{-1})'\left(\frac{1}{2} - 2\ln 2\right)$.

11. Tracer $(C)$ de $f$ et $(C')$ de $h^{-1}$ en précisant les deux demi-tangentes au point d'origine.

---

## Solution

1. **Ensemble de définition :**
   - Pour $x > 0$, la fonction $x \mapsto x \ln x$ est définie.
   - Pour $x \le 0$, le terme $\ln(x+1)$ nécessite $x + 1 > 0$, soit $x > -1$. Donc cette partie est définie sur $]-1 ; 0]$.
   L'ensemble de définition global est la réunion de ces intervalles : $D_f = ]-1 ; +\infty[$.

2. **Continuité en $x_0 = 0$ :**
   - Limite à droite : $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x \ln x) = 0$.
   - Limite à gauche : $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (-x + 2\ln(x + 1)) = 0 + 2\ln(1) = 0$.
   - Valeur en $0$ : $f(0) = -0 + 2\ln(1) = 0$.
   Puisque $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$, la fonction $f$ est continue en $0$.

3. **Dérivabilité en $0$ :**
   - À gauche : $\lim_{x \to 0^-} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^-} \frac{-x + 2\ln(x+1)}{x} = \lim_{x \to 0^-} \left( -1 + 2 \frac{\ln(x+1)}{x} \right) = -1 + 2(1) = 1$.
   - À droite : $\lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{x \ln x}{x} = \lim_{x \to 0^+} \ln x = -\infty$.
   **Conclusion :** $f$ n'est pas dérivable en $0$. Graphiquement, la courbe $(C)$ admet au point d'origine $O(0,0)$ une demi-tangente oblique de coefficient directeur $1$ à gauche, et une demi-tangente verticale dirigée vers le bas à droite.

4. **Limite en $-1$ :**
   $\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} (-x + 2\ln(x+1)) = 1 + 2(-\infty) = -\infty$.
   La droite d'équation $x = -1$ est une asymptote verticale à la courbe $(C)$.

5. **Dérivée pour $x > 0$ :**
   Pour $x > 0$, $f(x) = x \ln x$.
   $f'(x) = 1 \cdot \ln x + x \cdot \left(\frac{1}{x}\right) = \ln x + 1$.
   **Signe :** $\ln x + 1 \ge 0 \iff \ln x \ge -1 \iff x \ge e^{-1} \iff x \ge \frac{1}{e}$.
   Donc $f'(x) < 0$ sur $]0 ; \frac{1}{e}[$ et $f'(x) > 0$ sur $]\frac{1}{e} ; +\infty[$.

6. **Dérivée pour $x \in ]-1 ; 0]$ :**
   Pour $x \in ]-1 ; 0]$, $f(x) = -x + 2\ln(x+1)$.
   $f'(x) = -1 + 2\left(\frac{1}{x+1}\right) = \frac{-(x+1) + 2}{x+1} = \frac{-x + 1}{x+1}$.
   **Signe :** Sur $]-1 ; 0]$, $x \le 0 \implies -x \ge 0 \implies -x + 1 > 0$. De plus, $x+1 > 0$.
   Donc $f'(x) > 0$ pour tout $x \in ]-1 ; 0]$.

7. **Limites en $+\infty$ :**
   $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x \ln x = +\infty$.
   $\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \ln x = +\infty$.
   **Conclusion :** La courbe $(C)$ admet une branche parabolique de direction l'axe des ordonnées au voisinage de $+\infty$.

8. **Tableau de variation :**
   - Sur $]-1 ; 0]$ : $f$ est strictement croissante de $-\infty$ à $0$.
   - Sur $]0 ; 1/e]$ : $f$ est strictement décroissante de $0$ à $f(1/e) = -1/e$.
   - Sur $[1/e ; +\infty[$ : $f$ est strictement croissante de $-1/e$ à $+\infty$.

9. **Tangente en $x = 1$ :**
   On a $f(1) = 1 \ln(1) = 0$ et $f'(1) = \ln(1) + 1 = 1$.
   L'équation de la tangente est $y = f'(1)(x - 1) + f(1) \implies y = 1(x - 1) + 0 \implies y = x - 1$.

10. a. **Bijection de $h$ :**
    La fonction $h$ est continue et strictement croissante sur $]-1 ; 0]$ (car $h'(x) > 0$).
    Elle réalise donc une bijection de $]-1 ; 0]$ sur $J = ]\lim_{x \to -1^+} h(x) ; h(0)] = ]-\infty ; 0]$.

    b. **Calculs :**
    $h\left(-\frac{1}{2}\right) = -\left(-\frac{1}{2}\right) + 2\ln\left(-\frac{1}{2} + 1\right) = \frac{1}{2} + 2\ln\left(\frac{1}{2}\right) = \frac{1}{2} - 2\ln 2$.
    On a $(h^{-1})'\left(\frac{1}{2} - 2\ln 2\right) = \frac{1}{h'(-1/2)}$.
    Or $h'\left(-\frac{1}{2}\right) = \frac{-(-1/2) + 1}{-1/2 + 1} = \frac{3/2}{1/2} = 3$.
    Donc $(h^{-1})'\left(\frac{1}{2} - 2\ln 2\right) = \frac{1}{3}$.