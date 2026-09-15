---
uid: "0000122"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonctions réciproques"
source: null
title: "Fonction réciproque et trigonométrie"
country: "Tunisie"
year: null
professor: "M Sadok Majdi"
difficulty: "Difficile"
points: null
tags: ["etude-de-fonction", "fonction-reciproque", "trigonometrie", "derivation"]
---

Soit $f$ la fonction définie sur $[0, +\infty[$ par : $f(x) = \frac{1 - \sqrt{x}}{1 + \sqrt{x}}$.

1. Étudier la dérivabilité de $f$ à droite en $0$ et interpréter graphiquement le résultat obtenu.

2. a. Étudier les variations de $f$, en déduire que $f$ est une bijection de $[0, +\infty[$ sur $]-1, 1]$.

   b. Montrer que pour tout $x \in ]-1, 1]$ on a : $(f^{-1})(x) = \left(\frac{1+x}{1-x}\right)^2$. *(Note: l'énoncé indique $\left(\frac{1-x}{1+x}\right)^2$, vérifier l'expression lors de la résolution)*

3. Soit $\varphi$ la fonction définie sur $[0, \frac{\pi}{2}]$ par : $\varphi(x) = \frac{1 - \tan x}{1 + \tan x}$ si $x \in [0, \frac{\pi}{2}[$ et $\varphi(\frac{\pi}{2}) = -1$.

   a. Montrer que $\varphi$ est continue à gauche en $\frac{\pi}{2}$.

   b. Montrer que $\varphi$ est dérivable à gauche en $\frac{\pi}{2}$ et que $\varphi'_g(\frac{\pi}{2}) = -2$.

4. a. Vérifier que pour tout $x \in [0, \frac{\pi}{2}[$ on a : $\varphi'(x) = \frac{-2(1+\tan^2 x)}{(1+\tan x)^2}$.

   b. En déduire que $\varphi$ admet une fonction réciproque définie sur $[-1, 1]$.

5. a. Montrer que $\varphi^{-1}$ est dérivable à droite en $-1$ et calculer $(\varphi^{-1})'_d(-1)$.

   b. Montrer que pour tout $x \in ]-1, 1]$ on a : $(\varphi^{-1})'(x) = \frac{-1}{1+x^2}$.

6. Montrer que pour tout $x \in [-1, 1]$ on a : $(\varphi^{-1})(x) + \varphi^{-1}(-x) = \frac{\pi}{2}$.

---

## Solution

1. **Dérivabilité en 0 :**
   Le taux d'accroissement à droite en $0$ est :
   $\lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{\frac{1-\sqrt{x}}{1+\sqrt{x}} - 1}{x} = \lim_{x \to 0^+} \frac{1-\sqrt{x} - (1+\sqrt{x})}{x(1+\sqrt{x})} = \lim_{x \to 0^+} \frac{-2\sqrt{x}}{x(1+\sqrt{x})} = \lim_{x \to 0^+} \frac{-2}{\sqrt{x}(1+\sqrt{x})} = -\infty$.
   $f$ n'est pas dérivable à droite en $0$.
   **Interprétation :** La courbe de $f$ admet au point d'abscisse $0$ une demi-tangente verticale dirigée vers le bas.

2. a. **Variations et bijection :**
   Pour $x > 0$, $f'(x) = \frac{-\frac{1}{2\sqrt{x}}(1+\sqrt{x}) - \frac{1}{2\sqrt{x}}(1-\sqrt{x})}{(1+\sqrt{x})^2} = \frac{-1}{2\sqrt{x}(1+\sqrt{x})^2}$.
   Pour tout $x \in ]0, +\infty[$, $f'(x) < 0$. $f$ est donc strictement décroissante sur $[0, +\infty[$.
   Étant continue et strictement décroissante, $f$ réalise une bijection de $[0, +\infty[$ sur $J = ]\lim_{x \to +\infty} f(x), f(0)]$.
   $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{-\sqrt{x}}{\sqrt{x}} = -1$ et $f(0) = 1$. Donc $J = ]-1, 1]$.

   b. **Expression de $f^{-1}(x)$ :**
   Soit $y \in ]-1, 1]$ et $x \in [0, +\infty[$.
   $f(y) = x \iff \frac{1-\sqrt{y}}{1+\sqrt{y}} = x \iff 1-\sqrt{y} = x(1+\sqrt{y}) \iff 1-x = \sqrt{y}(1+x) \iff \sqrt{y} = \frac{1-x}{1+x}$.
   Puisque $x \in ]-1, 1]$, on a $\frac{1-x}{1+x} \ge 0$, donc $y = \left(\frac{1-x}{1+x}\right)^2$.
   Ainsi, pour tout $x \in ]-1, 1]$, $(f^{-1})(x) = \left(\frac{1-x}{1+x}\right)^2$.

3. a. **Continuité en $\frac{\pi}{2}$ :**
   $\lim_{x \to (\frac{\pi}{2})^-} \varphi(x) = \lim_{x \to (\frac{\pi}{2})^-} \frac{1 - \tan x}{1 + \tan x} = \lim_{x \to (\frac{\pi}{2})^-} \frac{\frac{1}{\tan x} - 1}{\frac{1}{\tan x} + 1} = \frac{0 - 1}{0 + 1} = -1 = \varphi\left(\frac{\pi}{2}\right)$.
   Donc $\varphi$ est continue à gauche en $\frac{\pi}{2}$.

   b. **Dérivabilité en $\frac{\pi}{2}$ :**
   $\lim_{x \to (\frac{\pi}{2})^-} \frac{\varphi(x) - \varphi(\frac{\pi}{2})}{x - \frac{\pi}{2}} = \lim_{x \to (\frac{\pi}{2})^-} \frac{\frac{1 - \tan x}{1 + \tan x} + 1}{x - \frac{\pi}{2}} = \lim_{x \to (\frac{\pi}{2})^-} \frac{\frac{2}{1 + \tan x}}{x - \frac{\pi}{2}}$.
   Posons $t = \frac{\pi}{2} - x$. Quand $x \to \left(\frac{\pi}{2}\right)^-$, $t \to 0^+$.
   $\lim_{t \to 0^+} \frac{\frac{2}{1 + \tan(\frac{\pi}{2} - t)}}{-t} = \lim_{t \to 0^+} \frac{2}{-t(1 + \frac{1}{\tan t})} = \lim_{t \to 0^+} \frac{2\tan t}{-t(\tan t + 1)} = \lim_{t \to 0^+} -2 \left(\frac{\tan t}{t}\right) \frac{1}{1 + \tan t} = -2(1)(1) = -2$.
   Donc $\varphi'_g\left(\frac{\pi}{2}\right) = -2$.

4. a. **Dérivée de $\varphi$ :**
   Pour $x \in [0, \frac{\pi}{2}[$, $\varphi'(x) = \frac{-(1+\tan^2 x)(1+\tan x) - (1+\tan^2 x)(1-\tan x)}{(1+\tan x)^2} = \frac{-(1+\tan^2 x)(1 + \tan x + 1 - \tan x)}{(1+\tan x)^2} = \frac{-2(1+\tan^2 x)}{(1+\tan x)^2}$.

   b. **Bijection :**
   $\varphi'(x) < 0$ sur $[0, \frac{\pi}{2}[$ et $\varphi'_g(\frac{\pi}{2}) < 0$, donc $\varphi$ est strictement décroissante sur $[0, \frac{\pi}{2}]$.
   $\varphi$ est continue et strictement décroissante, elle réalise une bijection de $[0, \frac{\pi}{2}]$ sur $[\varphi(\frac{\pi}{2}), \varphi(0)] = [-1, 1]$.
   Elle admet donc une fonction réciproque $\varphi^{-1}$ définie sur $[-1, 1]$.

5. a. **Dérivabilité de $\varphi^{-1}$ en $-1$ :**
   $\varphi\left(\frac{\pi}{2}\right) = -1 \iff \varphi^{-1}(-1) = \frac{\pi}{2}$.
   $\varphi$ est dérivable à gauche en $\frac{\pi}{2}$ et $\varphi'_g\left(\frac{\pi}{2}\right) = -2 \neq 0$.
   Donc $\varphi^{-1}$ est dérivable à droite en $-1$ et $(\varphi^{-1})'_d(-1) = \frac{1}{\varphi'_g(\pi/2)} = -\frac{1}{2}$.

   b. **Expression de $(\varphi^{-1})'(x)$ :**
   Soit $x \in ]-1, 1]$ et $y = \varphi^{-1}(x) \iff x = \frac{1-\tan y}{1+\tan y}$.
   $(\varphi^{-1})'(x) = \frac{1}{\varphi'(y)} = \frac{(1+\tan y)^2}{-2(1+\tan^2 y)}$.
   Or $1 + x^2 = 1 + \left(\frac{1-\tan y}{1+\tan y}\right)^2 = \frac{(1+\tan y)^2 + (1-\tan y)^2}{(1+\tan y)^2} = \frac{2 + 2\tan^2 y}{(1+\tan y)^2} = \frac{2(1+\tan^2 y)}{(1+\tan y)^2}$.
   Par conséquent, $(\varphi^{-1})'(x) = \frac{-1}{1+x^2}$.

6. **Démonstration de la relation :**
   Soit $g(x) = \varphi^{-1}(x) + \varphi^{-1}(-x)$ définie sur $[-1, 1]$.
   $g$ est dérivable sur $]-1, 1[$ et $g'(x) = (\varphi^{-1})'(x) - (\varphi^{-1})'(-x) = \frac{-1}{1+x^2} - \left(\frac{-1}{1+(-x)^2}\right) = 0$.
   La fonction $g$ est donc constante sur $[-1, 1]$.
   Calculons $g(0) = 2\varphi^{-1}(0)$.
   $\varphi(y) = 0 \iff \frac{1-\tan y}{1+\tan y} = 0 \iff \tan y = 1 \iff y = \frac{\pi}{4}$.
   Donc $\varphi^{-1}(0) = \frac{\pi}{4}$.
   D'où $g(0) = 2 \times \frac{\pi}{4} = \frac{\pi}{2}$.
   Conclusion : pour tout $x \in [-1, 1]$, $(\varphi^{-1})(x) + \varphi^{-1}(-x) = \frac{\pi}{2}$.