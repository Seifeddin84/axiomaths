---
uid: "0000406"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Factoriser avec le schéma de Horner : trois polynômes de degré 3"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["polynomes", "racine", "factorisation", "degre-3"]
provenance: own
dressing: "factoriser avec le schéma de Horner"
rung: 1
---
On considère les trois polynômes :

$$A(x) = x^3 - 6x^2 + 11x - 6, \qquad B(x) = 2x^3 + 3x^2 - 8x + 3, \qquad C(x) = x^3 + 2x^2 - 5x - 6.$$

1. Vérifier que $1$ est une racine de $A$ et de $B$, et que $-1$ est une racine de $C$.

2. Pour chacun des trois polynômes, utiliser le schéma de Horner pour déterminer un polynôme $Q$ de degré $2$ tel que $P(x) = (x - \alpha)\,Q(x)$, où $\alpha$ est la racine de la question 1.

3. Factoriser chaque polynôme en produit de trois facteurs du premier degré, puis résoudre dans $\mathbb{R}$ les équations $A(x) = 0$, $B(x) = 0$ et $C(x) = 0$.

---

## Solution

:::property[Racine et factorisation]
$\alpha$ est une **racine** de $P$ lorsque $P(\alpha) = 0$.

Si $\alpha$ est une racine de $P$ (de degré $3$), alors $\boxed{P(x) = (x - \alpha)\,Q(x)}$ avec $Q$ de degré $2$.
:::

:::method[Schéma de Horner]
Pour $P(x) = ax^3 + bx^2 + cx + d$ et une racine $\alpha$, on écrit $a$, $b$, $c$, $d$ sur une ligne. On **descend** $a$. Puis, à chaque colonne : on **multiplie** le résultat précédent par $\alpha$ et on **ajoute** au coefficient de la colonne.

La dernière case vaut $P(\alpha)$ (donc $0$), et les autres cases sont les coefficients de $Q$.
:::

1. Pour $A$ : $A(1) = 1 - 6 + 11 - 6 = 0$.

   Pour $B$ : $B(1) = 2 + 3 - 8 + 3 = 0$.

   Pour $C$ : $C(-1) = -1 + 2 + 5 - 6 = 0$.

   Ce sont bien des racines.

2. **Polynôme $A$**, $\alpha = 1$.

   | | $x^3$ | $x^2$ | $x$ | constante |
   |---|---|---|---|---|
   | coefficients de $A$ | $1$ | $-6$ | $11$ | $-6$ |
   | $\times 1$ puis $+$ | | $1$ | $-5$ | $6$ |
   | résultat | $1$ | $-5$ | $6$ | $0$ |

   Donc $A(x) = (x - 1)(x^2 - 5x + 6)$.

   **Polynôme $B$**, $\alpha = 1$.

   | | $x^3$ | $x^2$ | $x$ | constante |
   |---|---|---|---|---|
   | coefficients de $B$ | $2$ | $3$ | $-8$ | $3$ |
   | $\times 1$ puis $+$ | | $2$ | $5$ | $-3$ |
   | résultat | $2$ | $5$ | $-3$ | $0$ |

   Donc $B(x) = (x - 1)(2x^2 + 5x - 3)$.

   **Polynôme $C$**, $\alpha = -1$.

   | | $x^3$ | $x^2$ | $x$ | constante |
   |---|---|---|---|---|
   | coefficients de $C$ | $1$ | $2$ | $-5$ | $-6$ |
   | $\times (-1)$ puis $+$ | | $-1$ | $-1$ | $6$ |
   | résultat | $1$ | $1$ | $-6$ | $0$ |

   Donc $C(x) = (x + 1)(x^2 + x - 6)$.

3. On factorise chaque trinôme du second degré.

   $x^2 - 5x + 6$ : $\Delta = 25 - 24 = 1$, racines $\dfrac{5 - 1}{2} = 2$ et $\dfrac{5 + 1}{2} = 3$.

   $$\boxed{A(x) = (x - 1)(x - 2)(x - 3)} \qquad S_A = \{1\,;\,2\,;\,3\}$$

   $2x^2 + 5x - 3$ : $\Delta = 25 + 24 = 49 = 7^2$, racines $\dfrac{-5 - 7}{4} = -3$ et $\dfrac{-5 + 7}{4} = \dfrac{1}{2}$, donc $2x^2 + 5x - 3 = 2\left(x - \dfrac{1}{2}\right)(x + 3) = (2x - 1)(x + 3)$.

   $$\boxed{B(x) = (x - 1)(2x - 1)(x + 3)} \qquad S_B = \left\{-3\,;\,\dfrac{1}{2}\,;\,1\right\}$$

   $x^2 + x - 6$ : $\Delta = 1 + 24 = 25$, racines $\dfrac{-1 - 5}{2} = -3$ et $\dfrac{-1 + 5}{2} = 2$.

   $$\boxed{C(x) = (x + 1)(x - 2)(x + 3)} \qquad S_C = \{-3\,;\,-1\,;\,2\}$$

   Contrôle pour $C$ : $C(2) = 8 + 8 - 10 - 6 = 0$ et $C(-3) = -27 + 18 + 15 - 6 = 0$.

:::intuition
Une fois qu'on connaît **une** racine, un polynôme de degré $3$ devient un produit « facteur du premier degré $\times$ trinôme », et on sait résoudre le trinôme.
:::

:::trap
Dans le schéma de Horner, bien **multiplier par $\alpha$** (et non par $-\alpha$). Pour la racine $-1$, on multiplie par $-1$. Si la dernière case n'est pas $0$, il y a une erreur de calcul.
:::
