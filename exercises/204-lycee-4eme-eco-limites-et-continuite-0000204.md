---
uid: "0000204"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 1"
title: "Prolongement par continuité d'une fraction"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["continuite", "prolongement-par-continuite", "forme-indeterminee", "factorisation"]
---

Soit la fonction $f$ définie sur $\mathbb{R} \setminus \{1\}$ par $f(x) = \dfrac{3x^2 - 2x - 1}{x - 1}$.

1. Calculer $\displaystyle\lim_{x \to 1} f(x)$.

2. Montrer que $f$ est prolongeable par continuité en $1$ et définir son prolongement.

---

## Solution

1. Quand $x \to 1$ : le numérateur tend vers $3 - 2 - 1 = 0$ et le dénominateur vers $0$. C'est la forme indéterminée $\dfrac{0}{0}$ : $1$ est racine du numérateur, donc $(x - 1)$ en est un facteur.

   On factorise : $3x^2 - 2x - 1 = (x - 1)(3x + 1)$. (Vérification : $(x-1)(3x+1) = 3x^2 + x - 3x - 1 = 3x^2 - 2x - 1$.)

   Pour $x \neq 1$ :

   $$f(x) = \dfrac{(x-1)(3x+1)}{x-1} = 3x + 1$$

   On remplace : $3 \times 1 + 1 = 4$.

   $\displaystyle\lim_{x \to 1} f(x) = 4$.

2. La fonction $f$ n'est pas définie en $1$ (le dénominateur s'annule), mais elle a en $1$ une limite **finie** : $4$. Elle est donc prolongeable par continuité en $1$.

   Son prolongement par continuité est la fonction $\tilde{f}$ définie sur $\mathbb{R}$ par :

   $$\tilde{f}(x) = \begin{cases} f(x) & \text{si } x \neq 1 \\ 4 & \text{si } x = 1 \end{cases}$$

   *Remarque.* D'après la question 1, $f(x) = 3x + 1$ pour tout $x \neq 1$. Le prolongement est donc tout simplement la fonction affine $\tilde{f}(x) = 3x + 1$ sur $\mathbb{R}$ : la courbe de $f$ est la droite $y = 3x + 1$ privée du point d'abscisse $1$ (le « trou » au point $(1, 4)$), que le prolongement vient reboucher.
