---
uid: "0000199"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 2"
title: "Différence de deux racines : forme conjuguée et encadrement"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "racine-carree", "expression-conjuguee", "encadrement", "theoreme-des-gendarmes"]
---

Soit la fonction $f$ définie par $f(x) = \sqrt{x+1} - \sqrt{x}$.

1. Déterminer le domaine de définition de $f$, noté $D_f$.

2. Montrer que pour tout $x \in D_f$ on a :

   $$f(x) = \dfrac{1}{\sqrt{x+1} + \sqrt{x}}$$

3. Calculer alors $\displaystyle\lim_{x \to +\infty} f(x)$.

4. Montrer que pour tout $x \in D_f$ : $0 \leq f(x) \leq 1$.

5. En déduire $\displaystyle\lim_{x \to +\infty} \dfrac{f(x)}{x}$.

---

## Solution

1. Une racine carrée n'existe que pour un nombre positif ou nul. Il faut donc **les deux** conditions :

   - $x + 1 \geq 0$, c'est-à-dire $x \geq -1$ ;

   - $x \geq 0$.

   Les deux sont vraies en même temps exactement quand $x \geq 0$.

   $D_f = [0, +\infty[$.

2. Soit $x \in D_f$. Le nombre $\sqrt{x+1} + \sqrt{x}$ est $> 0$ (car $\sqrt{x+1} \geq 1$), donc on peut multiplier et diviser $f(x)$ par ce nombre :

   $$f(x) = \dfrac{\left(\sqrt{x+1} - \sqrt{x}\right)\left(\sqrt{x+1} + \sqrt{x}\right)}{\sqrt{x+1} + \sqrt{x}}$$

   Au numérateur, on reconnaît $(a - b)(a + b) = a^2 - b^2$ avec $a = \sqrt{x+1}$ et $b = \sqrt{x}$ :

   $$\left(\sqrt{x+1}\right)^2 - \left(\sqrt{x}\right)^2 = (x + 1) - x = 1$$

   D'où, pour tout $x \in D_f$ :

   $$f(x) = \dfrac{1}{\sqrt{x+1} + \sqrt{x}}$$

3. Directement, $f(x) = \sqrt{x+1} - \sqrt{x}$ est une forme indéterminée $+\infty - \infty$ quand $x \to +\infty$. La forme obtenue à la question 2 résout le problème :

   $\sqrt{x+1} \to +\infty$ et $\sqrt{x} \to +\infty$, donc le dénominateur $\sqrt{x+1} + \sqrt{x} \to +\infty$.

   Donc $\displaystyle\lim_{x \to +\infty} f(x) = \dfrac{1}{+\infty} = 0$.

4. Soit $x \in D_f$, c'est-à-dire $x \geq 0$.

   - Positivité : $\sqrt{x+1} + \sqrt{x} > 0$, donc $f(x) = \dfrac{1}{\sqrt{x+1} + \sqrt{x}} > 0$. En particulier $f(x) \geq 0$.

   - Majoration : comme $x \geq 0$, on a $x + 1 \geq 1$ donc $\sqrt{x+1} \geq \sqrt{1} = 1$ (la racine carrée est croissante). De plus $\sqrt{x} \geq 0$. En additionnant : $\sqrt{x+1} + \sqrt{x} \geq 1$.

     Le passage à l'inverse change le sens de l'inégalité pour des nombres positifs : $\dfrac{1}{\sqrt{x+1} + \sqrt{x}} \leq \dfrac{1}{1} = 1$.

   On a bien montré que pour tout $x \in D_f$ : $0 \leq f(x) \leq 1$.

5. On veut la limite de $\dfrac{f(x)}{x}$ quand $x \to +\infty$. On prend $x > 0$ et on divise l'encadrement de la question 4 par $x$ (positif, donc les inégalités gardent leur sens) :

   $$0 \leq \dfrac{f(x)}{x} \leq \dfrac{1}{x}$$

   Or $\displaystyle\lim_{x \to +\infty} 0 = 0$ et $\displaystyle\lim_{x \to +\infty} \dfrac{1}{x} = 0$.

   D'après le théorème des gendarmes (la fonction est coincée entre deux fonctions qui tendent vers la même limite), $\displaystyle\lim_{x \to +\infty} \dfrac{f(x)}{x} = 0$.

*Remarque.* On remarque que $f(0) = \sqrt{1} - \sqrt{0} = 1$ : la borne $1$ de la question 4 est atteinte en $x = 0$, et $f(x)$ décroît ensuite vers $0$.
