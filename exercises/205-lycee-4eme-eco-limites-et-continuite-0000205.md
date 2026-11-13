---
uid: "0000205"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Limites et continuité"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 2"
title: "Domaine et continuité d'une racine et d'une valeur absolue"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Facile"
points: null
tags: ["continuite", "domaine-de-definition", "racine-carree", "valeur-absolue", "fonction-composee"]
---

Soient $f(x) = \sqrt{2x^2 - 3x + 1}$ et $g(x) = |2x - 1|$.

1. Déterminer le domaine de définition de chaque fonction.

2. Montrer que $f$ et $g$ sont continues sur leurs domaines de définition.

---

## Solution

**Rappels.** Les fonctions polynômes sont continues sur $\mathbb{R}$. La fonction racine carrée $t \mapsto \sqrt{t}$ est continue sur $[0, +\infty[$ et la fonction valeur absolue $t \mapsto |t|$ est continue sur $\mathbb{R}$. La composée de deux fonctions continues est continue.

1. **Domaine de $f$.** La racine carrée n'existe que pour un nombre positif ou nul : il faut $2x^2 - 3x + 1 \geq 0$.

   $\Delta = (-3)^2 - 4 \times 2 \times 1 = 9 - 8 = 1$, donc les racines sont $\dfrac{3 - 1}{4} = \dfrac{1}{2}$ et $\dfrac{3 + 1}{4} = 1$.

   Le coefficient de $x^2$ est $2 > 0$ : le trinôme est positif **à l'extérieur** des racines et négatif entre elles. Donc $2x^2 - 3x + 1 \geq 0$ pour $x \leq \dfrac{1}{2}$ ou $x \geq 1$.

   $D_f = \left]-\infty, \dfrac{1}{2}\right] \cup [1, +\infty[$.

   **Domaine de $g$.** Une valeur absolue existe pour tout réel : $D_g = \mathbb{R}$.

2. **Continuité de $f$.** On écrit $f = \sqrt{\,u\,}$ avec $u(x) = 2x^2 - 3x + 1$.

   - $u$ est un polynôme : elle est continue sur $\mathbb{R}$, donc sur $D_f$ ;

   - pour tout $x \in D_f$, $u(x) \geq 0$, donc $\sqrt{u(x)}$ a un sens, et la racine carrée est continue sur $[0, +\infty[$.

   Comme composée de deux fonctions continues, $f$ est continue sur $D_f$.

   **Continuité de $g$.** On écrit $g = |\,v\,|$ avec $v(x) = 2x - 1$.

   - $v$ est un polynôme (une fonction affine) : continue sur $\mathbb{R}$ ;

   - la valeur absolue est continue sur $\mathbb{R}$. En effet, elle vaut $t$ si $t \geq 0$ et $-t$ si $t < 0$ : ces deux morceaux sont continus, et en $0$ les limites à droite et à gauche valent toutes deux $0 = |0|$.

   Comme composée de deux fonctions continues, $g$ est continue sur $\mathbb{R}$.
