---
uid: "0000409"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Signe d'un quotient : une racine du numérateur est une valeur interdite"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["polynomes", "fonction-rationnelle", "signe", "tableau-de-signe"]
provenance: own
dressing: "racine du numérateur et valeur interdite"
rung: 3
---
On considère la fonction rationnelle $f$ définie par :
$$f(x) = \frac{x^3 - 7x + 6}{x^2 - 4}.$$

1. Vérifier que $1$ est une racine de $N(x) = x^3 - 7x + 6$, puis factoriser $N(x)$ en produit de trois facteurs du premier degré.

2. Déterminer l'ensemble de définition $D$ de $f$.

3. Simplifier $f(x)$ pour $x \in D$.

4. Résoudre dans $D$ l'équation $f(x) = 0$. Le réel $2$ est-il solution ?

5. Dresser le tableau de signes de $f(x)$ sur $D$ et résoudre l'inéquation $f(x) \geq 0$.

---

## Solution

:::property[Ensemble de définition d'une fonction rationnelle]
$\dfrac{N(x)}{D(x)}$ existe si et seulement si $\boxed{D(x) \neq 0}$.

On détermine l'ensemble de définition **avant** de simplifier. Une valeur interdite le reste après simplification.
:::

1. $N(1) = 1 - 7 + 6 = 0$ : $1$ est une racine de $N$.

   Schéma de Horner avec $\alpha = 1$ sur les coefficients $1$, $0$, $-7$, $6$ (il n'y a pas de terme en $x^2$ : on écrit $0$) :

   | | $x^3$ | $x^2$ | $x$ | constante |
   |---|---|---|---|---|
   | coefficients de $N$ | $1$ | $0$ | $-7$ | $6$ |
   | $\times 1$ puis $+$ | | $1$ | $1$ | $-6$ |
   | résultat | $1$ | $1$ | $-6$ | $0$ |

   Donc $N(x) = (x - 1)(x^2 + x - 6)$.

   Pour $x^2 + x - 6$ : $\Delta = 1 + 24 = 25$, racines $\dfrac{-1 - 5}{2} = -3$ et $\dfrac{-1 + 5}{2} = 2$.

   $$\boxed{N(x) = (x - 1)(x - 2)(x + 3)}$$

2. $x^2 - 4 = (x - 2)(x + 2)$ s'annule en $2$ et en $-2$.

   $$D = \mathbb{R} \setminus \{-2\,;\,2\}$$

3. Pour $x \in D$, on remplace $N(x)$ et $x^2 - 4$ par leurs factorisations :

   $$\displaystyle f(x) = \frac{(x - 1)(x - 2)(x + 3)}{(x - 2)(x + 2)}$$

   Comme $x \neq 2$, on peut simplifier par $x - 2$ :

   $$\boxed{f(x) = \frac{(x - 1)(x + 3)}{x + 2} \quad \text{pour } x \in D}$$

4. Pour $x \in D$ : un quotient est nul si et seulement si son numérateur est nul, c'est-à-dire $(x - 1)(x + 3) = 0$.

   Donc $x = 1$ ou $x = -3$. Ces deux valeurs sont dans $D$.

   $2$ annule le numérateur $N(x)$ de départ, mais $2 \notin D$ : $f(2)$ n'existe pas. Donc $2$ **n'est pas** solution.

   $$S = \{-3\,;\,1\}$$

5. Sur $D$, $f(x)$ a le même signe que $\dfrac{(x - 1)(x + 3)}{x + 2}$. Les valeurs où un facteur change de signe sont $-3$, $-2$ et $1$. La double barre $\Vert$ marque la valeur interdite $-2$.

   | $x$ | $-\infty$ | | $-3$ | | $-2$ | | $1$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $x + 3$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
   | $x + 2$ | | $-$ | | $-$ | $\Vert$ | $+$ | | $+$ | |
   | $x - 1$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
   | $f(x)$ | | $-$ | $0$ | $+$ | $\Vert$ | $-$ | $0$ | $+$ | |

   $f(x) \geq 0$ sur $[-3\,;\,-2[$ et sur $[1\,;\,+\infty[$. Mais on doit **retirer $2$**, qui n'est pas dans $D$ :

   $$S = [-3\,;\,-2[ \,\cup\, [1\,;\,2[ \,\cup\, ]2\,;\,+\infty[$$

   Contrôle : $f(-2{,}5) = \dfrac{(-3{,}5)(0{,}5)}{-0{,}5} = 3{,}5 > 0$ et $f(0) = \dfrac{(-1)(3)}{2} = -1{,}5 < 0$.

:::intuition
Simplifier ne **supprime pas** la valeur interdite. La fonction $\dfrac{(x-1)(x+3)}{x+2}$ est définie en $2$, mais pas la fonction $f$ de départ : le « trou » en $x = 2$ reste.
:::

:::trap
Après simplification, ne pas oublier d'écarter $2$ des solutions : la réponse $[1\,;\,+\infty[$ serait fausse, car $f(2)$ n'existe pas.
:::
