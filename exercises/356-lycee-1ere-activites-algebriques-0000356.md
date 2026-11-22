---
uid: "0000356"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités algébriques"
source: "Axiomaths"
title: "Factorisations en chaîne"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["factorisation", "identites-remarquables", "equations-produit", "tableau-de-signes"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

On pose $A(x)=(2x-1)^2-(x+4)^2$, $B(x)=x^3-3x^2-4x+12$ et $C(x)=x^4-13x^2+36$.

1. Factoriser $A(x)$, $B(x)$ et $C(x)$ en produits de facteurs du premier degré. [Pour $C$ : écrire $-13x^2=-4x^2-9x^2$.]

2. Résoudre dans $\mathbb R$ les équations $A(x)=0$ et $C(x)=0$.

3. Résoudre dans $\mathbb R$ l'inéquation $B(x)\leq0$.

4. Résoudre dans $\mathbb R$ l'inéquation $\dfrac{A(x)}{B(x)}\geq0$.

---

## Solution

:::property[Outils]
$\boxed{a^2-b^2=(a-b)(a+b)}$. Un produit est nul si et seulement si $\boxed{\text{l'un de ses facteurs est nul}}$. Le signe d'un produit se lit avec un tableau de signes.
:::

1. **Pour $A$.** Différence de deux carrés avec $a=2x-1$ et $b=x+4$ :

   $$\displaystyle A(x)=\big[(2x-1)-(x+4)\big]\big[(2x-1)+(x+4)\big]=(x-5)(3x+3)$$

   $$\displaystyle A(x)=\boxed{3(x-5)(x+1)}$$

   **Pour $B$.** On groupe les termes deux par deux :

   $$\displaystyle B(x)=x^2(x-3)-4(x-3)=(x-3)(x^2-4)$$

   Puis $x^2-4=(x-2)(x+2)$ :

   $$\displaystyle B(x)=\boxed{(x-3)(x-2)(x+2)}$$

   **Pour $C$.** On suit l'indication : $C(x)=x^4-4x^2-9x^2+36$, puis on groupe :

   $$\displaystyle C(x)=x^2(x^2-4)-9(x^2-4)=(x^2-4)(x^2-9)$$

   $$\displaystyle C(x)=\boxed{(x-2)(x+2)(x-3)(x+3)}$$

2. **Équation $A(x)=0$.** $3(x-5)(x+1)=0\iff x=5$ ou $x=-1$ :

   $$\displaystyle S=\{-1\,;\,5\}$$

   **Équation $C(x)=0$.** Un des quatre facteurs est nul :

   $$\displaystyle S=\{-3\,;\,-2\,;\,2\,;\,3\}$$

3. On étudie le signe de $B(x)=(x-3)(x-2)(x+2)$. Les valeurs qui annulent un facteur sont $-2$, $2$ et $3$.

   | $x$ | $-\infty$ |  | $-2$ |  | $2$ |  | $3$ |  | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $x+2$ |  | $-$ | $0$ | $+$ |  | $+$ |  | $+$ |  |
   | $x-2$ |  | $-$ |  | $-$ | $0$ | $+$ |  | $+$ |  |
   | $x-3$ |  | $-$ |  | $-$ |  | $-$ | $0$ | $+$ |  |
   | $B(x)$ |  | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |  |

   $B(x)\leq0$ sur les intervalles où la dernière ligne porte le signe $-$ ou s'annule :

   $$\displaystyle S=\boxed{]-\infty\,;-2]\cup[2\,;3]}$$

4. Le quotient n'existe que si $B(x)\neq0$, c'est-à-dire $x\notin\{-2\,;2\,;3\}$.

   On étudie le signe de $\dfrac{A(x)}{B(x)}=\dfrac{3(x-5)(x+1)}{(x-3)(x-2)(x+2)}$ avec les cinq valeurs $-2$, $-1$, $2$, $3$ et $5$.

   | $x$ | $-\infty$ |  | $-2$ |  | $-1$ |  | $2$ |  | $3$ |  | $5$ |  | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
   | $x+2$ |  | $-$ | $0$ | $+$ |  | $+$ |  | $+$ |  | $+$ |  | $+$ |  |
   | $x+1$ |  | $-$ |  | $-$ | $0$ | $+$ |  | $+$ |  | $+$ |  | $+$ |  |
   | $x-2$ |  | $-$ |  | $-$ |  | $-$ | $0$ | $+$ |  | $+$ |  | $+$ |  |
   | $x-3$ |  | $-$ |  | $-$ |  | $-$ |  | $-$ | $0$ | $+$ |  | $+$ |  |
   | $x-5$ |  | $-$ |  | $-$ |  | $-$ |  | $-$ |  | $-$ | $0$ | $+$ |  |
   | $\dfrac{A(x)}{B(x)}$ |  | $-$ | $\|$ | $+$ | $0$ | $-$ | $\|$ | $+$ | $\|$ | $-$ | $0$ | $+$ |  |

   Les valeurs $-2$, $2$ et $3$ sont interdites (double barre) ; $-1$ et $5$ annulent le numérateur et conviennent (inégalité large) :

   $$\displaystyle S=\boxed{]-2\,;-1]\cup]2\,;3[\,\cup[5\,;+\infty[}$$

:::intuition
Factoriser d'abord, le tableau de signes se lit ensuite facteur par facteur.
:::

:::trap
Inclure dans la solution une valeur qui annule le dénominateur ($-2$, $2$ ou $3$).
:::
