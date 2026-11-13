---
uid: "0000211"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Dérivation - Primitives"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 8 (fonctions f à k)"
title: "Dérivées : polynômes, produit, quotient, puissance et racine"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["derivation", "derivee-produit", "derivee-quotient", "derivee-puissance", "derivee-racine"]
---

Dériver les fonctions suivantes :

- $f : x \longmapsto x^3 + 2x^2 - 3x + 1$

- $g : x \longmapsto x(2x - 1)$

- $h : x \longmapsto \dfrac{-3x + 5}{x^2 - x}$

- $i : x \longmapsto (-5x - 4)^3$

- $j : x \longmapsto \sqrt{x^2 + 3}$

- $k : x \longmapsto \sqrt{\dfrac{x + 1}{x - 1}}$

---

## Solution

**Formules utilisées** (pour des fonctions $u$ et $v$ dérivables) :

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $u \times v$ | $u'v + uv'$ |
| $\dfrac{u}{v}$ (avec $v \neq 0$) | $\dfrac{u'v - uv'}{v^2}$ |
| $u^n$ | $n\,u'\,u^{n-1}$ |
| $\sqrt{u}$ (avec $u > 0$) | $\dfrac{u'}{2\sqrt{u}}$ |

Pour chaque fonction, on commence par dire où elle est dérivable, puis on applique la formule.

**$f(x) = x^3 + 2x^2 - 3x + 1$.** C'est un polynôme : dérivable sur $\mathbb{R}$. On dérive terme à terme ($(x^n)' = n\,x^{n-1}$, la dérivée d'une constante est $0$) :

$$f'(x) = 3x^2 + 2 \times 2x - 3 + 0 = 3x^2 + 4x - 3$$

**$g(x) = x(2x - 1)$.** Polynôme : dérivable sur $\mathbb{R}$. On applique la formule du produit avec $u(x) = x$ et $v(x) = 2x - 1$, donc $u'(x) = 1$ et $v'(x) = 2$ :

$$g'(x) = 1 \times (2x - 1) + x \times 2 = 2x - 1 + 2x = 4x - 1$$

*Vérification.* En développant d'abord, $g(x) = 2x^2 - x$ et $g'(x) = 4x - 1$.

**$h(x) = \dfrac{-3x + 5}{x^2 - x}$.** Quotient de deux polynômes, dérivable là où le dénominateur n'est pas nul : $x^2 - x = x(x - 1) = 0$ pour $x = 0$ ou $x = 1$. Donc $h$ est dérivable sur $\mathbb{R} \setminus \{0, 1\}$.

On prend $u(x) = -3x + 5$, $u'(x) = -3$, $v(x) = x^2 - x$, $v'(x) = 2x - 1$ :

$$h'(x) = \dfrac{u'v - uv'}{v^2} = \dfrac{-3\left(x^2 - x\right) - (-3x + 5)(2x - 1)}{\left(x^2 - x\right)^2}$$

On développe le numérateur :

- $-3(x^2 - x) = -3x^2 + 3x$ ;

- $(-3x + 5)(2x - 1) = -6x^2 + 3x + 10x - 5 = -6x^2 + 13x - 5$.

Donc le numérateur vaut $-3x^2 + 3x - \left(-6x^2 + 13x - 5\right) = -3x^2 + 3x + 6x^2 - 13x + 5 = 3x^2 - 10x + 5$.

$$h'(x) = \dfrac{3x^2 - 10x + 5}{\left(x^2 - x\right)^2}$$

**$i(x) = (-5x - 4)^3$.** Polynôme : dérivable sur $\mathbb{R}$. On applique $(u^n)' = n\,u'\,u^{n-1}$ avec $u(x) = -5x - 4$, $u'(x) = -5$ et $n = 3$ :

$$i'(x) = 3 \times (-5) \times (-5x - 4)^2 = -15\,(-5x - 4)^2 = -15\,(5x + 4)^2$$

**$j(x) = \sqrt{x^2 + 3}$.** Comme $x^2 + 3 > 0$ pour tout $x$, $j$ est définie et dérivable sur $\mathbb{R}$. On applique $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ avec $u(x) = x^2 + 3$, $u'(x) = 2x$ :

$$j'(x) = \dfrac{2x}{2\sqrt{x^2 + 3}} = \dfrac{x}{\sqrt{x^2 + 3}}$$

**$k(x) = \sqrt{\dfrac{x + 1}{x - 1}}$.** On pose $u(x) = \dfrac{x + 1}{x - 1}$.

*Domaine.* Il faut $u(x) \geq 0$ et $x \neq 1$ : le quotient est positif pour $x \leq -1$ ou $x > 1$. Donc $D_k = ]-\infty, -1] \cup ]1, +\infty[$. La racine carrée n'est dérivable que pour des valeurs **strictement** positives : $k$ est dérivable sur $]-\infty, -1[ \,\cup\, ]1, +\infty[$ (pas en $-1$, où $u$ s'annule).

*Dérivée de $u$* (quotient avec $a(x) = x + 1$, $a' = 1$, $b(x) = x - 1$, $b' = 1$) :

$$u'(x) = \dfrac{1 \times (x - 1) - (x + 1) \times 1}{(x - 1)^2} = \dfrac{-2}{(x - 1)^2}$$

*Dérivée de $k$* : $k' = \dfrac{u'}{2\sqrt{u}}$, donc

$$k'(x) = \dfrac{-2}{(x - 1)^2} \times \dfrac{1}{2\sqrt{\dfrac{x+1}{x-1}}} = \dfrac{-1}{(x - 1)^2\sqrt{\dfrac{x + 1}{x - 1}}}$$
