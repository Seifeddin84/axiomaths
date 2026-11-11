---
title: "Nombre dérivé et fonction dérivée"
slug: "lycee-3eme-sciences-exp-derivee"
school: "lycee"
level: "3eme"
sections: ["Sciences Expérimentales"]
chapter: "Nombre dérivé et Fonction dérivée"
summary: "De la vitesse instantanée au nombre dérivé : tangente, approximation affine, règles de dérivation, dérivée à gauche et à droite, demi-tangentes, puis la fonction dérivée pour étudier les variations et les extrema."
prerequisites: ["Limites", "Continuité", "Équation d'une droite"]
source: "Manuel officiel 3ème année Sciences expérimentales, Tome 1, chapitres 5 et 6"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Un mobile parcourt $d(t) = 5t^2$ mètres en $t$ secondes. Entre $t = 4$ et $t = 4 + h$, sa **vitesse moyenne** est
$$
\frac{d(4+h) - d(4)}{h} = \frac{5(4+h)^2 - 80}{h} = \frac{40h + 5h^2}{h} = 40 + 5h.
$$
Plus l'intervalle $h$ est petit, plus cette vitesse se rapproche de $40$ m/s : c'est la **vitesse instantanée** à l'instant $t = 4$. Le compteur d'une voiture fait exactement cela.

La même idée en géométrie : la droite qui joint deux points $A$ et $M$ d'une courbe (une **sécante**) tourne autour de $A$ quand $M$ se rapproche de $A$, et se stabilise sur la **tangente**.

![Des sécantes qui tendent vers la tangente](/lessons/images/derivee-secantes.svg "Quand M se rapproche de A, la pente de la sécante (AM) se rapproche de la pente de la tangente en A, qui est le nombre dérivé.")

:::intuition
Le **nombre dérivé** $f'(a)$ est une **pente** : celle de la tangente à la courbe au point d'abscisse $a$, c'est-à-dire « la vitesse à laquelle $f$ varie en $a$ ». La **fonction dérivée** $f'$ donne cette pente en chaque point. Son signe répond à la question la plus utile : **la fonction monte-t-elle ou descend-elle ?**
:::

## 1. Nombre dérivé

:::definition[Fonction dérivable en $a$]
Soit $f$ définie sur un intervalle ouvert $I$ et $a \in I$. On dit que $f$ est **dérivable en $a$** s'il existe un réel $\ell$ tel que
$$
\lim_{h \to 0}\frac{f(a+h) - f(a)}{h} = \ell, \qquad \text{ou encore} \qquad \lim_{x \to a}\frac{f(x) - f(a)}{x - a} = \ell.
$$
Le réel $\ell$ est le **nombre dérivé** de $f$ en $a$, noté $f'(a)$.
:::

:::theorem[Tangente]
Si $f$ est dérivable en $a$, la courbe $\mathcal C_f$ admet au point $A(a\,;f(a))$ une **tangente** de pente $f'(a)$, d'équation
$$
y = f'(a)\,(x - a) + f(a).
$$
Le vecteur $\vec u(1\,;f'(a))$ est un vecteur directeur de cette tangente.
:::

:::example[Deux nombres dérivés]
- $f(x) = x^2$ en $a = 3$ : $\dfrac{(3+h)^2 - 9}{h} = \dfrac{6h + h^2}{h} = 6 + h \to 6$. Donc $f'(3) = 6$ et la tangente est $y = 6(x - 3) + 9 = 6x - 9$.
- $f(x) = \dfrac1x$ en $a = 2$ : $\dfrac{\frac{1}{2+h} - \frac12}{h} = \dfrac{-h}{2h(2+h)} = \dfrac{-1}{2(2+h)} \to -\dfrac14$. Donc $f'(2) = -\dfrac14$ et la tangente est $y = -\dfrac14(x - 2) + \dfrac12 = -\dfrac{x}{4} + 1$.
:::

:::method[Calculer un nombre dérivé avec la définition]
1. Écrire $f(a + h) - f(a)$ et **simplifier** pour pouvoir diviser par $h$ (développer, mettre au même dénominateur, ou multiplier par la quantité conjuguée).
2. Simplifier par $h$ (on a $h \neq 0$).
3. Faire tendre $h$ vers $0$ dans ce qui reste.

Pour $f(x) = 3x^2 - x$ en $a = 2$ : $\dfrac{3(2+h)^2 - (2+h) - 10}{h} = \dfrac{11h + 3h^2}{h} = 11 + 3h \to 11$.
:::

## 2. Approximation affine

:::definition[Approximation affine]
Si $f$ est dérivable en $a$, pour $h$ voisin de $0$,
$$
f(a + h) \approx f(a) + f'(a)\,h.
$$
C'est l'**approximation affine** de $f(a+h)$ : on remplace la courbe par sa tangente.
:::

:::example[Estimer sans calculatrice]
- $f(x) = \sqrt x$ en $a = 16$ : $f'(16) = \dfrac{1}{2\sqrt{16}} = \dfrac18$, donc $\sqrt{16{,}2} \approx 4 + \dfrac18 \times 0{,}2 = 4{,}025$ (la calculatrice donne $4{,}0249\ldots$).
- $f(x) = x^3$ en $a = 1$ : $f'(1) = 3$, donc $(1{,}1)^3 \approx 1 + 3 \times 0{,}1 = 1{,}3$ (valeur exacte $1{,}331$ : l'erreur est petite car $h$ est petit).
- Depuis un graphique : si la tangente en $-2$ a pour pente $f'(-2)$, alors $f(-1{,}99) \approx f(-2) + 0{,}01\,f'(-2)$.
:::

:::theorem[Dérivable implique continue]
Si $f$ est dérivable en $a$, alors $f$ est continue en $a$.
:::

:::proof[Dérivable implique continue]
| Étape | Justification |
|---|---|
| Pour $x \neq a$ : $f(x) = f(a) + (x - a)\,\dfrac{f(x) - f(a)}{x - a}$ | on a multiplié et divisé par $x - a$ |
| Quand $x \to a$, $\dfrac{f(x) - f(a)}{x-a} \to f'(a)$ et $(x - a) \to 0$ | $f$ est dérivable en $a$ |
| donc $(x - a)\,\dfrac{f(x) - f(a)}{x-a} \to 0 \times f'(a) = 0$ | produit de limites |
| donc $f(x) \to f(a)$ : $f$ est continue en $a$ | définition de la continuité |
:::

:::warning
La **réciproque est fausse** : $x \mapsto \lvert x \rvert$ est continue en $0$ mais n'y est pas dérivable (voir la section 4).
:::

## 3. Dérivées des fonctions usuelles et règles de calcul

:::theorem[Nombres dérivés usuels]
| Fonction | Dérivable pour | Nombre dérivé |
|---|---|---|
| $x \mapsto c$ (constante) | tout $a$ | $0$ |
| $x \mapsto x$ | tout $a$ | $1$ |
| $x \mapsto x^n$ ($n \geq 2$) | tout $a$ | $n\,a^{n-1}$ |
| $x \mapsto \dfrac1x$ | $a \neq 0$ | $-\dfrac{1}{a^2}$ |
| $x \mapsto \sqrt x$ | $a > 0$ | $\dfrac{1}{2\sqrt a}$ |
:::

:::proof[$\sqrt{x}$ en $a > 0$]
| Étape | Justification |
|---|---|
| $\dfrac{\sqrt{a+h} - \sqrt a}{h} = \dfrac{(a+h) - a}{h\,\big(\sqrt{a+h} + \sqrt a\big)}$ | on multiplie par la quantité conjuguée |
| $\phantom{\dfrac{\sqrt{a+h} - \sqrt a}{h}} = \dfrac{1}{\sqrt{a+h} + \sqrt a}$ | on simplifie par $h \neq 0$ |
| $\phantom{\dfrac{\sqrt{a+h} - \sqrt a}{h}} \xrightarrow[h \to 0]{} \dfrac{1}{2\sqrt a}$ | $\sqrt{a+h} \to \sqrt a$ par continuité de la racine |
:::

:::theorem[Règles de dérivation]
Soient $f$ et $g$ dérivables, $\lambda$ un réel, $n \geq 2$ un entier.

| Fonction | Dérivée |
|---|---|
| $f + g$ | $f' + g'$ |
| $\lambda f$ | $\lambda f'$ |
| $f\,g$ | $f'g + f g'$ |
| $\dfrac1g$ (si $g \neq 0$) | $-\dfrac{g'}{g^2}$ |
| $\dfrac fg$ (si $g \neq 0$) | $\dfrac{f'g - fg'}{g^2}$ |
| $f^n$ | $n\,f' f^{n-1}$ |
| $\sqrt f$ (si $f > 0$) | $\dfrac{f'}{2\sqrt f}$ |
| $x \mapsto f(ax + b)$ | $x \mapsto a\,f'(ax + b)$ |
:::

:::warning
$(fg)' \neq f'g'$ : la dérivée d'un produit a **deux** termes. Et $\sqrt f$ n'est dérivable que là où $f > 0$ : la racine n'a pas de tangente non verticale en $0$, même si $f$ y est dérivable.
:::

:::example[Appliquer les règles]
- $\left(\dfrac{2x - 1}{x + 3}\right)' = \dfrac{2(x+3) - (2x - 1) \times 1}{(x+3)^2} = \dfrac{7}{(x+3)^2}$.
- $g(x) = x\sqrt{x+3}$ sur $]-3\,;+\infty[$ : $g'(x) = \sqrt{x+3} + x \times \dfrac{1}{2\sqrt{x+3}} = \dfrac{2(x+3) + x}{2\sqrt{x+3}} = \dfrac{3x + 6}{2\sqrt{x+3}}$. Le signe de $g'$ est celui de $3x + 6$.
- $\big((x^2 + 1)^4\big)' = 4 \times 2x \times (x^2+1)^3 = 8x\,(x^2+1)^3$.
- $\big(\sqrt{3x + 1}\big)' = \dfrac{3}{2\sqrt{3x+1}}$ sur $\left]-\dfrac13\,;+\infty\right[$.
:::

## 4. Dérivée à droite, à gauche, demi-tangentes

:::definition[Dérivabilité à gauche et à droite]
- $f$ est **dérivable à gauche** en $a$ si $\dfrac{f(a+h) - f(a)}{h}$ a une limite finie quand $h \to 0^-$ ; cette limite est notée $f'_g(a)$.
- $f$ est **dérivable à droite** en $a$ si cette limite existe quand $h \to 0^+$ ; on la note $f'_d(a)$.
:::

:::theorem[Dérivable en $a$ équivaut à dérivable des deux côtés avec la même valeur]
$f$ est dérivable en $a$ si et seulement si $f$ est dérivable à droite et à gauche en $a$ **et** $f'_g(a) = f'_d(a)$. On a alors $f'(a) = f'_g(a) = f'_d(a)$.
:::

:::property[Interprétation graphique]
Si $f'_d(a)$ existe, la courbe admet en $A$ une **demi-tangente** à droite, d'équation $y = f'_d(a)(x - a) + f(a)$ avec $x \geq a$. De même à gauche avec $f'_g(a)$ et $x \leq a$. Si $f'_g(a) \neq f'_d(a)$, la courbe a un **point anguleux** en $A$ : deux demi-tangentes différentes.
:::

![Points anguleux et demi-tangente verticale](/lessons/images/derivee-demi-tangentes.svg "À gauche, la courbe de |x² − 2x| a deux points anguleux, en 0 et en 2, avec des demi-tangentes de pentes −2 et 2. À droite, la courbe de la racine carrée a une demi-tangente verticale en O.")

:::example[Une valeur absolue]
$f(x) = \lvert x^2 - 2x \rvert$ vaut $x^2 - 2x$ pour $x \leq 0$ ou $x \geq 2$, et $2x - x^2$ pour $0 \leq x \leq 2$.

- En $0$ : à gauche, $\dfrac{f(h) - f(0)}{h} = \dfrac{h^2 - 2h}{h} = h - 2 \to -2$ donc $f'_g(0) = -2$ ; à droite, $\dfrac{2h - h^2}{h} = 2 - h \to 2$ donc $f'_d(0) = 2$.
- Comme $-2 \neq 2$, $f$ n'est **pas dérivable en $0$** : point anguleux, de demi-tangentes $y = -2x$ (à gauche) et $y = 2x$ (à droite). On trouve de même $f'_g(2) = -2$ et $f'_d(2) = 2$.
:::

:::definition[Demi-tangente verticale]
Si $\dfrac{f(a+h) - f(a)}{h}$ tend vers $+\infty$ ou $-\infty$ quand $h \to 0^+$ (respectivement $h \to 0^-$), $f$ n'est pas dérivable à droite (à gauche) en $a$ et la courbe admet en $A$ une **demi-tangente verticale**.
:::

:::example[La racine carrée]
$f(x) = \sqrt x$ en $0$ : $\dfrac{f(h) - f(0)}{h} = \dfrac{\sqrt h}{h} = \dfrac{1}{\sqrt h} \to +\infty$ quand $h \to 0^+$. La courbe de $f$ a une demi-tangente verticale en $O$, dirigée vers le haut.

De même $g(x) = \sqrt{2 - x}$ en $2$, à gauche : $\dfrac{g(x) - g(2)}{x - 2} = \dfrac{\sqrt{2-x}}{x - 2} = -\dfrac{1}{\sqrt{2 - x}} \to -\infty$ : demi-tangente verticale en $(2\,;0)$.
:::

:::method[Étudier la dérivabilité d'une fonction définie par morceaux]
1. Vérifier d'abord que $f$ est **continue** au point de raccord (sinon, elle n'est pas dérivable).
2. Calculer $f'_g(a)$ avec l'expression à gauche et $f'_d(a)$ avec l'expression à droite.
3. Conclure : égales et finies, $f$ est dérivable ; différentes et finies, point anguleux ; infinies, demi-tangente verticale.

Exemple. $f(x) = x^2$ si $x \leq 1$ et $f(x) = 2x - 1$ si $x > 1$. $f(1) = 1$ des deux côtés. $f'_g(1) = \lim\limits_{x \to 1^-}\dfrac{x^2 - 1}{x - 1} = \lim (x + 1) = 2$ et $f'_d(1) = \lim\limits_{x \to 1^+}\dfrac{2x - 2}{x - 1} = 2$. Donc $f$ est dérivable en $1$ et $f'(1) = 2$ : la droite $y = 2x - 1$ est tangente à la parabole au point de raccord.
:::

## 5. La fonction dérivée

:::definition[Dérivabilité sur un intervalle]
$f$ est **dérivable sur un intervalle ouvert $I$** si elle est dérivable en tout point de $I$. La **fonction dérivée** de $f$ est la fonction $f' : x \mapsto f'(x)$ définie sur $I$.

Sur un intervalle fermé en $a$ (par exemple $[a\,;b[$), on demande en plus la dérivabilité à droite en $a$ ; en $b$ (par exemple $]a\,;b]$), la dérivabilité à gauche.
:::

:::property[Les dérivées à connaître]
| $f(x)$ | $c$ | $x$ | $x^n$ | $\dfrac1x$ | $\sqrt x$ |
|---|---|---|---|---|---|
| $f'(x)$ | $0$ | $1$ | $n\,x^{n-1}$ | $-\dfrac{1}{x^2}$ | $\dfrac{1}{2\sqrt x}$ |
| sur | $\mathbb R$ | $\mathbb R$ | $\mathbb R$ | $\mathbb R^*$ | $]0\,;+\infty[$ |

Toute fonction polynôme est dérivable sur $\mathbb R$ ; toute fonction rationnelle est dérivable sur son ensemble de définition.
:::

## 6. Sens de variation et extrema

:::theorem[Signe de la dérivée et variations (admis)]
Soit $f$ dérivable sur un intervalle $I$.

- $f$ est **croissante** sur $I$ si et seulement si $f'(x) \geq 0$ pour tout $x \in I$ ;
- $f$ est **décroissante** sur $I$ si et seulement si $f'(x) \leq 0$ pour tout $x \in I$ ;
- $f$ est **constante** sur $I$ si et seulement si $f'(x) = 0$ pour tout $x \in I$.

Si $f' > 0$ sur $I$ (sauf éventuellement en un nombre fini de points), $f$ est **strictement** croissante, et de même pour $<$.
:::

:::curious[Par les accroissements finis]
**Si $f$ est croissante, alors $f' \geq 0$.** Pour $h \neq 0$, $f(x + h) - f(x)$ a le signe de $h$, donc $\dfrac{f(x + h) - f(x)}{h} \geq 0$ ; à la limite, $f'(x) \geq 0$.

**Si $f' \geq 0$, alors $f$ est croissante.** C'est le sens difficile. La preuve la plus courte utilise le **théorème des accroissements finis** (vu en 4ème) : pour $x < y$ dans $I$, il existe $c$ entre $x$ et $y$ tel que
$$
f(y) - f(x) = f'(c)\,(y - x).
$$
Comme $f'(c) \geq 0$ et $y - x > 0$, on obtient $f(y) \geq f(x)$. Avec $f'(c) > 0$, l'inégalité est stricte ; et si $f' = 0$, alors $f(y) = f(x)$ : $f$ est constante.

Pourquoi est-ce admis en 3ème ? Parce que les accroissements finis reposent sur le théorème de Rolle, qui lui-même demande qu'une fonction continue sur un segment **atteigne** son maximum.
:::


:::definition[Extremum local]
$f$ admet un **maximum local** en $a$ s'il existe un intervalle ouvert $J \ni a$ tel que $f(x) \leq f(a)$ pour tout $x \in J$ ; un **minimum local** si $f(x) \geq f(a)$. Un maximum ou un minimum local est un **extremum local**.
:::

:::theorem[Extremum et dérivée]
- Si $f$ est dérivable et admet un extremum local en $a$ (à l'intérieur de son domaine), alors $f'(a) = 0$ (admis).
- **Réciproque, version utile** : si $f'$ **s'annule en $a$ en changeant de signe**, alors $f$ admet un extremum local en $a$ (maximum si $f'$ passe de $+$ à $-$, minimum si de $-$ à $+$).
:::

:::curious[Pourquoi la tangente est horizontale]
Supposons que $f$ admet un maximum local en $a$ : $f(x) \leq f(a)$ pour $x$ dans un intervalle ouvert $J$ contenant $a$.

| Étape | Justification |
|---|---|
| Pour $x \in J$ et $x > a$ : $\dfrac{f(x) - f(a)}{x - a} \leq 0$ | numérateur $\leq 0$, dénominateur $> 0$ |
| Pour $x \in J$ et $x < a$ : $\dfrac{f(x) - f(a)}{x - a} \geq 0$ | numérateur $\leq 0$, dénominateur $< 0$ |
| Quand $x \to a$, les deux quotients tendent vers $f'(a)$ | $f$ est dérivable en $a$ |
| Donc $f'(a) \leq 0$ et $f'(a) \geq 0$, soit $f'(a) = 0$ | une limite de nombres $\leq 0$ est $\leq 0$ |

Pour un minimum, on remplace $f$ par $-f$. La réciproque (changement de signe de $f'$) découle du théorème sur le signe de la dérivée : $f$ croît avant $a$ et décroît après.
:::


:::warning
$f'(a) = 0$ **ne suffit pas** pour avoir un extremum : $f(x) = x^3$ vérifie $f'(0) = 0$ mais est strictement croissante sur $\mathbb R$. Il faut un **changement de signe** de $f'$.
:::

::::example[Étude de $f(x) = x^3 - 3x + 1$]
$f$ est dérivable sur $\mathbb R$ et $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$.

:::signs
| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x+1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x-1$ | | $-$ | | $-$ | $0$ | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

Donc $f$ croît sur $]-\infty\,;-1]$ jusqu'au maximum local $f(-1) = 3$, décroît sur $[-1\,;1]$ jusqu'au minimum local $f(1) = -1$, puis croît sur $[1\,;+\infty[$.

**Combien de solutions pour $f(x) = 0$ ?** $f$ est continue et strictement monotone sur chacun des trois intervalles. $f(-2) = -1 < 0 < f(-1) = 3$ ; $f(0) = 1 > 0 > f(1) = -1$ ; $f(1) = -1 < 0 < f(2) = 3$. Par le théorème des valeurs intermédiaires, il y a **exactement une** solution dans chacun de $]-2\,;-1[$, $]0\,;1[$ et $]1\,;2[$ : trois solutions, et seulement trois.
::::

## 7. Applications

:::example[Optimiser : le rectangle de périmètre minimal]
Parmi les rectangles d'aire $100\ \mathrm{m^2}$, lequel a le plus petit périmètre ? Si $x$ est un côté, l'autre vaut $\dfrac{100}{x}$ et
$$
P(x) = 2\left(x + \frac{100}{x}\right), \qquad P'(x) = 2\left(1 - \frac{100}{x^2}\right) = \frac{2(x - 10)(x + 10)}{x^2}.
$$
Sur $]0\,;+\infty[$, $P'$ est négative avant $10$ et positive après : $P$ admet un **minimum** en $x = 10$, de valeur $P(10) = 40$. Le rectangle cherché est le **carré** de côté $10$.
:::

:::example[Prouver une inégalité]
Montrer que $\sqrt x \leq \dfrac{x + 1}{2}$ pour tout $x \geq 0$. Soit $g(x) = \dfrac{x+1}{2} - \sqrt x$ sur $[0\,;+\infty[$, dérivable sur $]0\,;+\infty[$ avec
$$
g'(x) = \frac12 - \frac{1}{2\sqrt x} = \frac{\sqrt x - 1}{2\sqrt x}.
$$
$g'$ est négative sur $]0\,;1[$ et positive sur $]1\,;+\infty[$ : $g$ admet un minimum en $1$, et $g(1) = 0$. Donc $g(x) \geq 0$ pour tout $x \geq 0$ ✓.
:::

:::method[Un nombre dérivé caché dans une limite]
Une limite de la forme $\lim\limits_{x \to a}\dfrac{f(x) - f(a)}{x - a}$ **est** $f'(a)$.

- $\lim\limits_{x \to 2}\dfrac{x^3 - 8}{x - 2} = f'(2)$ avec $f(x) = x^3$ : la limite vaut $3 \times 2^2 = 12$.
- $\lim\limits_{x \to 1}\dfrac{\sqrt x - 1}{x - 1} = f'(1)$ avec $f(x) = \sqrt x$ : la limite vaut $\dfrac12$.

Conséquence pour le **prolongement par continuité** : si $f(a) = 0$ et si $f$ est dérivable en $a$, alors $g(x) = \dfrac{f(x)}{x - a}$ (définie pour $x \neq a$) a pour limite $f'(a)$ en $a$ : on la prolonge en posant $g(a) = f'(a)$. Dans le même esprit, si $f(a) = 0$ et $n \geq 2$ : $\dfrac{[f(x)]^n}{x - a} = [f(x)]^{n-1}\,\dfrac{f(x)}{x - a} \to 0 \times f'(a) = 0$.
:::

:::method[Lire un nombre dérivé sur un graphique]
- $f'(a)$ est la **pente de la tangente** en $A(a\,;f(a))$ : on lit deux points de cette droite et on calcule $\dfrac{\Delta y}{\Delta x}$.
- Tangente horizontale : $f'(a) = 0$ (extremum probable, à confirmer par le signe de $f'$).
- Tangente verticale : $f$ n'est pas dérivable en $a$.
- Pour une approximation affine de $f(a + h)$, on utilise $f(a) + h\,f'(a)$ avec les valeurs lues.
:::

:::method[Tangentes parallèles à une droite donnée]
Les tangentes de pente $k$ sont aux points où $f'(x) = k$. Pour $f(x) = x^3 - 3x$, $f'(x) = 3x^2 - 3$ : tangentes horizontales ($k = 0$) en $x = \pm 1$ ; tangentes parallèles à $y = 6x$ quand $3x^2 - 3 = 6$, soit $x = \pm\sqrt3$.
:::

## Vérifie-toi

::::check[Par la définition]
Calculer $f'(1)$ pour $f(x) = x^2 + 2x$ avec la définition, puis écrire la tangente.

:::answer
$\dfrac{(1+h)^2 + 2(1+h) - 3}{h} = \dfrac{4h + h^2}{h} = 4 + h \to 4$. Tangente : $y = 4(x - 1) + 3 = 4x - 1$.
:::
::::

::::check[Avec les règles]
Dériver $f(x) = \dfrac{x^2 + 1}{x - 1}$ sur $]1\,;+\infty[$ et $g(x) = \sqrt{x^2 + 1}$ sur $\mathbb R$.

:::answer
$f'(x) = \dfrac{2x(x-1) - (x^2 + 1)}{(x-1)^2} = \dfrac{x^2 - 2x - 1}{(x-1)^2}$. Pour $g$, $x^2 + 1 > 0$ partout donc $g'(x) = \dfrac{2x}{2\sqrt{x^2+1}} = \dfrac{x}{\sqrt{x^2+1}}$.
:::
::::

::::check[Un point anguleux]
$f(x) = \lvert x - 3 \rvert$ est-elle dérivable en $3$ ?

:::answer
À droite : $\dfrac{(3+h) - 3}{h} = 1$ donc $f'_d(3) = 1$. À gauche : $\dfrac{-h}{h} = -1$ donc $f'_g(3) = -1$. Les deux valeurs diffèrent : **non dérivable** en $3$, point anguleux.
:::
::::

::::check[Extremum ou pas ?]
Le nombre dérivé de $f$ en $a$ est nul. Peut-on conclure qu'il y a un extremum ?

:::answer
Non. Il faut que $f'$ **change de signe** en $a$. Contre-exemple : $f(x) = x^3$ en $0$.
:::
::::

::::challenge
Si $f$ est dérivable en $a$, montrer que $\lim\limits_{h \to 0}\dfrac{f(a+h) - f(a-h)}{2h} = f'(a)$. La réciproque est-elle vraie ?

:::answer
$$
\frac{f(a+h) - f(a-h)}{2h} = \frac12\left[\frac{f(a+h) - f(a)}{h} + \frac{f(a-h) - f(a)}{-h}\right] \xrightarrow[h \to 0]{} \frac12\big[f'(a) + f'(a)\big] = f'(a).
$$

La réciproque est **fausse** : pour $f(x) = \lvert x \rvert$ en $0$, $\dfrac{f(h) - f(-h)}{2h} = 0$ pour tout $h \neq 0$, donc la limite existe et vaut $0$, alors que $f$ n'est pas dérivable en $0$.
:::
::::

:::summary
- $f'(a) = \lim\limits_{h \to 0}\dfrac{f(a+h) - f(a)}{h}$ ; tangente : $y = f'(a)(x - a) + f(a)$ ; $f(a + h) \approx f(a) + f'(a)h$.
- Dérivable en $a$ $\Rightarrow$ continue en $a$ (la réciproque est fausse).
- Dérivées usuelles : $c \to 0$, $x^n \to nx^{n-1}$, $\frac1x \to -\frac{1}{x^2}$, $\sqrt x \to \frac{1}{2\sqrt x}$. Règles : somme, produit, quotient, puissance, $\sqrt f$, $f(ax+b)$.
- Dérivable en $a$ $\iff$ $f'_g(a) = f'_d(a)$ (finies). Valeurs différentes : point anguleux ; limite infinie : demi-tangente verticale.
- $f' \geq 0$ : croissante ; $f' \leq 0$ : décroissante. Extremum local : $f'$ s'annule **en changeant de signe**.
- Pour une limite $\frac{f(x) - f(a)}{x - a}$, penser au nombre dérivé.
:::
