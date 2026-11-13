---
uid: "0000212"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Dérivation - Primitives"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 8 (fonctions l à r)"
title: "Dérivées avec racines : quotients, produits et puissances"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["derivation", "derivee-racine", "derivee-quotient", "derivee-produit", "domaine-de-derivabilite"]
---

Dériver les fonctions suivantes :

- $l : x \longmapsto \dfrac{x}{\sqrt{x^2 - 1}}$

- $m : x \longmapsto x\sqrt{x - 1}$

- $n : x \longmapsto (2x - 5)^4$

- $o : x \longmapsto \dfrac{1}{\sqrt{x^2 + 1}}$

- $p : x \longmapsto \dfrac{4x - 5}{7x + 2}$

- $q : x \longmapsto x\sqrt{x} + x$

- $r : x \longmapsto 2x\sqrt{x}$

---

## Solution

**Formules utilisées** (pour des fonctions $u$ et $v$ dérivables) : $(uv)' = u'v + uv'$ ; $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ ; $(u^n)' = n\,u'\,u^{n-1}$ ; $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ (si $u > 0$).

**$l(x) = \dfrac{x}{\sqrt{x^2 - 1}}$.** Il faut $x^2 - 1 > 0$ (strictement, car la racine est au dénominateur) : $x < -1$ ou $x > 1$. $l$ est définie et dérivable sur $]-\infty, -1[ \,\cup\, ]1, +\infty[$.

On applique la formule du quotient avec $u(x) = x$, $u'(x) = 1$, $v(x) = \sqrt{x^2 - 1}$ et $v'(x) = \dfrac{2x}{2\sqrt{x^2 - 1}} = \dfrac{x}{\sqrt{x^2 - 1}}$ :

$$l'(x) = \dfrac{1 \times \sqrt{x^2 - 1} - x \times \dfrac{x}{\sqrt{x^2 - 1}}}{\left(\sqrt{x^2 - 1}\right)^2} = \dfrac{\sqrt{x^2 - 1} - \dfrac{x^2}{\sqrt{x^2 - 1}}}{x^2 - 1}$$

On met le numérateur au même dénominateur : $\sqrt{x^2 - 1} - \dfrac{x^2}{\sqrt{x^2 - 1}} = \dfrac{\left(x^2 - 1\right) - x^2}{\sqrt{x^2 - 1}} = \dfrac{-1}{\sqrt{x^2 - 1}}$. Donc :

$$l'(x) = \dfrac{-1}{\sqrt{x^2 - 1}\,\left(x^2 - 1\right)} = \dfrac{-1}{\left(x^2 - 1\right)\sqrt{x^2 - 1}}$$

**$m(x) = x\sqrt{x - 1}$.** Il faut $x - 1 \geq 0$ : $D_m = [1, +\infty[$. La racine n'est dérivable que pour $x - 1 > 0$ : $m$ est dérivable sur $]1, +\infty[$.

Produit avec $u(x) = x$, $u'(x) = 1$, $v(x) = \sqrt{x - 1}$ et $v'(x) = \dfrac{1}{2\sqrt{x - 1}}$ :

$$m'(x) = 1 \times \sqrt{x - 1} + x \times \dfrac{1}{2\sqrt{x - 1}} = \dfrac{2(x - 1) + x}{2\sqrt{x - 1}} = \dfrac{3x - 2}{2\sqrt{x - 1}}$$

(on a mis sur le même dénominateur : $\sqrt{x - 1} = \dfrac{2\left(\sqrt{x - 1}\right)^2}{2\sqrt{x - 1}} = \dfrac{2(x - 1)}{2\sqrt{x - 1}}$).

**$n(x) = (2x - 5)^4$.** Polynôme : dérivable sur $\mathbb{R}$. Avec $u(x) = 2x - 5$, $u'(x) = 2$ et $n = 4$ :

$$n'(x) = 4 \times 2 \times (2x - 5)^3 = 8\,(2x - 5)^3$$

**$o(x) = \dfrac{1}{\sqrt{x^2 + 1}}$.** Comme $x^2 + 1 > 0$ pour tout $x$, $o$ est définie et dérivable sur $\mathbb{R}$. Quotient avec $u(x) = 1$, $u'(x) = 0$, $v(x) = \sqrt{x^2 + 1}$ et $v'(x) = \dfrac{x}{\sqrt{x^2 + 1}}$ :

$$o'(x) = \dfrac{0 \times v - 1 \times v'}{v^2} = \dfrac{-\dfrac{x}{\sqrt{x^2 + 1}}}{x^2 + 1} = \dfrac{-x}{\left(x^2 + 1\right)\sqrt{x^2 + 1}}$$

**$p(x) = \dfrac{4x - 5}{7x + 2}$.** Dérivable là où $7x + 2 \neq 0$, c'est-à-dire sur $\mathbb{R} \setminus \left\{-\dfrac{2}{7}\right\}$. Quotient avec $u(x) = 4x - 5$, $u' = 4$, $v(x) = 7x + 2$, $v' = 7$ :

$$p'(x) = \dfrac{4(7x + 2) - 7(4x - 5)}{(7x + 2)^2} = \dfrac{28x + 8 - 28x + 35}{(7x + 2)^2} = \dfrac{43}{(7x + 2)^2}$$

**$q(x) = x\sqrt{x} + x$.** Il faut $x \geq 0$ : $D_q = [0, +\infty[$ ; $q$ est dérivable sur $]0, +\infty[$ (la formule de $\sqrt{\ }$ demande une valeur strictement positive). On dérive $x\sqrt{x}$ comme un produit ($u(x) = x$, $v(x) = \sqrt{x}$, $v'(x) = \dfrac{1}{2\sqrt{x}}$), et $x$ a pour dérivée $1$ :

$$q'(x) = \sqrt{x} + x \times \dfrac{1}{2\sqrt{x}} + 1$$

Or $\dfrac{x}{2\sqrt{x}} = \dfrac{\sqrt{x} \times \sqrt{x}}{2\sqrt{x}} = \dfrac{\sqrt{x}}{2}$. Donc :

$$q'(x) = \sqrt{x} + \dfrac{\sqrt{x}}{2} + 1 = \dfrac{3}{2}\sqrt{x} + 1$$

**$r(x) = 2x\sqrt{x}$.** Même domaine et même dérivabilité que $q$ : $D_r = [0, +\infty[$ et $r$ est dérivable sur $]0, +\infty[$. Avec le produit de $2x$ (dérivée $2$) par $\sqrt{x}$ :

$$r'(x) = 2\sqrt{x} + 2x \times \dfrac{1}{2\sqrt{x}} = 2\sqrt{x} + \sqrt{x} = 3\sqrt{x}$$
