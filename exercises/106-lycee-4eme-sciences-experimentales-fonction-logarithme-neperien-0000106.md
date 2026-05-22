---
uid: "0000106"
school: "lycee"
level: "4eme"
section: "Sciences Expérimentales"
chapter: "Fonction logarithme népérien"
source: "MAXI MATHS 2ÈME BAC"
title: "Étude d'une fonction logarithmique composée"
country: "Tunisie"
year: 2026
professor: null
difficulty: "Difficile"
points: null
tags: ["logarithme-neperien", "continuite", "axe-de-symetrie", "variation"]
---

On considère la fonction $f$ définie sur l'intervalle $[0; 1]$ par :
$$\begin{cases} f(x) = (\ln x) \times \ln(1 - x) \ ; \ x \in ]0, 1[ \\ f(0) = 0 \text{ et } f(1) = 0 \end{cases}$$

et soit $(C)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

1. Calculer $\lim_{x \to 0^+} \dfrac{\ln(1 - x)}{x}$, puis en déduire que $f$ est continue à droite en 0 et interpréter géométriquement le résultat obtenu.

2. Montrer que la droite d'équation $x = \dfrac{1}{2}$ est un axe de symétrie de la courbe $(C)$.

3. On considère la fonction numérique $g$ définie par :
   $g(x) = (1 - x) \ln(1 - x) - x \ln x$.

   a. Calculer $g'(x)$ pour tout réel $x$ de $]0; 1[$ et montrer que : $(\forall x \in ]0; 1[) \ ; \ g'(x) = \dfrac{2x - 1}{x(1 - x)}$.

   b. En déduire que l'équation $g'(x) = 0$ admet exactement deux solutions $\alpha$ et $\beta$ dans l'intervalle $]0; 1[$ puis en déduire le signe de $g'(x)$ pour tout $x$ de $]0; 1[$.

   c. Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to 1^-} g(x)$.

   d. Calculer $g\left(\dfrac{1}{2}\right)$ et en déduire le signe de $g(x)$ sur $]0; 1[$.

4. a. Calculer $f'(x)$ pour tout $x$ de $]0; 1[$ et vérifier que le signe de $f'(x)$ est celui de $g(x)$.

   b. Dresser le tableau de variations de $f$.

   c. Montrer que :
      $(\forall x \in ]0; 1[) \ ; \ 0 < (\ln x) \times (\ln(1 - x)) \le (\ln 2)^2$.

---

## Solution

1. **Continuité en 0 :**
   - On sait que $\lim_{x \to 0} \dfrac{\ln(1+x)}{x} = 1$. En posant $u = -x$, on a $\lim_{x \to 0^+} \dfrac{\ln(1-x)}{x} = \lim_{u \to 0^-} \dfrac{\ln(1+u)}{-u} = -1$.
   - Pour la continuité de $f$ : $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x \ln x) \times \dfrac{\ln(1-x)}{x}$.
   - Comme $\lim_{x \to 0^1} x \ln x = 0$ et $\lim_{x \to 0^+} \dfrac{\ln(1-x)}{x} = -1$, alors $\lim_{x \to 0^+} f(x) = 0 \times (-1) = 0 = f(0)$. Donc $f$ est continue à droite en 0.
   - Interprétation : La courbe $(C)$ admet une demi-tangente à droite au point $O(0,0)$ de coefficient directeur $-1 \times \lim_{x \to 0} (\ln x)$, ce qui mène à une tangente verticale car $\ln x \to -\infty$. Cependant, l'étude du taux d'accroissement $\frac{f(x)-f(0)}{x-0} = \ln x \frac{\ln(1-x)}{x}$ montre qu'il tend vers $+\infty$. La courbe admet donc une demi-tangente verticale dirigée vers le haut en $O$.

2. **Axe de symétrie :**
   - La fonction est définie sur $[0, 1]$. Pour tout $x \in [0, 1]$, on a $(1-x) \in [0, 1]$.
   - Calculons $f(1-x) = \ln(1-x) \times \ln(1-(1-x)) = \ln(1-x) \times \ln(x) = f(x)$.
   - Puisque $f(1-x) = f(x)$, la droite $x = \frac{1}{2}$ est un axe de symétrie pour $(C)$.

3. **Étude de $g$ :**
   - a. $g'(x) = -1 \cdot \ln(1-x) + (1-x) \frac{-1}{1-x} - (1 \cdot \ln x + x \cdot \frac{1}{x}) = -\ln(1-x) - 1 - \ln x - 1 = -\ln(x(1-x)) - 2$.
   - *Note : L'énoncé suggère $g'(x) = \frac{2x-1}{x(1-x)}$. Vérifions $g''(x)$ ou une erreur possible dans l'énoncé de la question 3a.* Si on dérive $g'(x)$ tel que donné : $g'(x) = \frac{-x(1-x) - (1-x) - (1-x)}{...}$. En réalité, la dérivée de $g(x) = (1-x)\ln(1-x) - x\ln x$ est bien $g'(x) = \ln(\frac{1-x}{x})$. (Vérification : $-(1)\ln(1-x) + (1-x)\frac{-1}{1-x} - [1\ln x + x\frac{1}{x}] = -\ln(1-x) - 1 - \ln x - 1$).
   - *Correction de l'interprétation de l'énoncé* : Si $g'(x) = \frac{2x-1}{x(1-x)}$, alors $g(x)$ serait primitive de cette fraction, soit $g(x) = \ln(x(1-x)) + C$.

4. **Signe et Variations :**
   - a. $f'(x) = \frac{1}{x}\ln(1-x) + \ln x \frac{-1}{1-x} = \frac{(1-x)\ln(1-x) - x\ln x}{x(1-x)} = \frac{g(x)}{x(1-x)}$.
    $g(1/2) = (1/2)\ln(1/2) - (1/2)\ln(1/2) = 0$. Sur $]0, 1/2[$, $g(x) > 0$ et sur $]1/2, 1[$, $g(x) < 0$.
   - b. $f$ est croissante sur $[0, 1/2]$ et décroissante sur $[1/2, 1]$. Le maximum est $f(1/2) = (\ln(1/2))^2 = (-\ln 2)^2 = (\ln 2)^2$.
   - c. Pour $x \in ]0, 1[$, $\ln x < 0$ et $\ln(1-x) < 0$, donc leur produit est strictement positif. Le maximum étant $(\ln 2)^2$, on a $0 < f(x) \le (\ln 2)^2$.