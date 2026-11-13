---
uid: "0000201"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 1 — Limites (Bac Économie et Gestion), Ex. 4"
title: "Cosinus divisé par une racine : limite par encadrement"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["limites", "encadrement", "theoreme-des-gendarmes", "cosinus", "racine-carree"]
---

Soit la fonction $f$ définie par $f(x) = \dfrac{\cos(x)}{\sqrt{x}}$.

1. Déterminer le domaine de définition de $f$, noté $D_f$.

2. Calculer $\displaystyle\lim_{x \to 0^+} f(x)$.

3. Montrer que pour tout $x > 0$ on a : $\dfrac{-1}{\sqrt{x}} \leq f(x) \leq \dfrac{1}{\sqrt{x}}$.

4. En déduire $\displaystyle\lim_{x \to +\infty} f(x)$.

---

## Solution

1. Pour que $f(x)$ existe, il faut deux choses :

   - $\sqrt{x}$ doit exister : $x \geq 0$ ;

   - on divise par $\sqrt{x}$ : il doit être différent de $0$, donc $x \neq 0$.

   Il reste $x > 0$ : $D_f = ]0, +\infty[$.

2. Quand $x \to 0^+$ :

   - le numérateur $\cos(x) \to \cos(0) = 1$ ;

   - le dénominateur $\sqrt{x} \to 0$, et $\sqrt{x} > 0$.

   On a donc « $\dfrac{1}{0^+}$ ».

   $\displaystyle\lim_{x \to 0^+} f(x) = +\infty$.

3. On part de l'encadrement connu du cosinus, valable pour tout réel $x$ :

   $$-1 \leq \cos(x) \leq 1$$

   Soit $x > 0$. Alors $\sqrt{x} > 0$ : diviser par $\sqrt{x}$ ne change pas le sens des inégalités.

   $$\dfrac{-1}{\sqrt{x}} \leq \dfrac{\cos(x)}{\sqrt{x}} \leq \dfrac{1}{\sqrt{x}}$$

   c'est-à-dire $\dfrac{-1}{\sqrt{x}} \leq f(x) \leq \dfrac{1}{\sqrt{x}}$ pour tout $x > 0$.

4. Quand $x \to +\infty$, $\sqrt{x} \to +\infty$, donc $\dfrac{1}{\sqrt{x}} \to 0$ et $\dfrac{-1}{\sqrt{x}} \to 0$.

   La fonction $f$ est coincée entre deux fonctions qui tendent vers $0$ : d'après le théorème des gendarmes,

   $\displaystyle\lim_{x \to +\infty} f(x) = 0$.

*Remarque.* On ne peut pas calculer cette limite « directement » : $\cos(x)$ n'a pas de limite en $+\infty$ (il oscille entre $-1$ et $1$). L'encadrement est ici le seul moyen.
