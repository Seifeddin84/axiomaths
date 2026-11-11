---
title: "Fonctions réciproques : bijections, dérivée de la réciproque, racine n-ième et arctangente"
slug: "lycee-4eme-maths-fonctions-reciproques"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Fonctions réciproques"
summary: "Quand une fonction continue et strictement monotone réalise une bijection, comment construire sa réciproque, tracer sa courbe par symétrie, dériver sans connaître sa formule, et application aux racines n-ièmes et à la fonction arctangente."
prerequisites: ["Continuité et théorème des valeurs intermédiaires", "Dérivation", "Limites", "Trigonométrie"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Fonctions réciproques »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Tu connais déjà des couples de fonctions qui **se défont l'une l'autre** : on élève au carré, puis on prend la racine ; on ajoute $3$, puis on retranche $3$ ; on passe en degrés Celsius puis en Fahrenheit, puis on revient. Une fonction $f$ envoie $x$ vers $y$. Sa **réciproque**, si elle existe, reprend $y$ et rend $x$.

:::intuition
Défaire n'est possible que si le chemin ne se perd pas. Si deux entrées différentes donnent la même sortie, on ne sait plus laquelle était la bonne : $(-2)^2 = 2^2 = 4$, donc « $\sqrt{4}$ » ne sait pas s'il faut rendre $-2$ ou $2$. Il faut **une seule entrée pour chaque sortie**, et **toutes les sorties atteintes** : c'est la définition d'une bijection. Le chapitre répond à trois questions : **quand** une fonction a-t-elle une réciproque, **à quoi** ressemble-t-elle, et **comment** la dériver quand on n'a même pas sa formule.
:::

## 1. Bijection

:::definition[Fonction bijective]
Soit $f$ une fonction définie sur un intervalle $I$ et $J$ un ensemble. On dit que $f$ est une **bijection de $I$ sur $J$** si tout élément $y$ de $J$ a **exactement un antécédent** $x$ dans $I$ :
$$
y = f(x),\quad x \in I \qquad\text{a une et une seule solution pour chaque } y \in J.
$$
La fonction qui à $y$ associe cet unique $x$ est la **fonction réciproque** de $f$, notée $f^{-1}$.
:::

Attention à la notation : $f^{-1}$ n'est **pas** $\dfrac1f$. L'exposant $-1$ désigne ici « la fonction qui défait $f$ ».

### Le critère à connaître

:::theorem[Continue et strictement monotone]
Soit $f$ une fonction **continue et strictement monotone** sur un intervalle $I$. Alors $f$ réalise une **bijection de $I$ sur l'intervalle $J = f(I)$**.
:::

:::proof[Une bijection]
| Étape | Justification |
|---|---|
| $f(I)$ est un intervalle, que l'on note $J$ | image d'un intervalle par une fonction continue (théorème des valeurs intermédiaires) |
| tout $y \in J$ a au moins un antécédent dans $I$ | $J = f(I)$ par définition |
| si $x_1 \neq x_2$, par exemple $x_1 < x_2$, alors $f(x_1) < f(x_2)$ ou $f(x_1) > f(x_2)$ | $f$ est strictement monotone |
| donc $f(x_1) \neq f(x_2)$ : deux éléments distincts n'ont pas la même image | on vient de le montrer |
| donc chaque $y \in J$ a **au plus** un antécédent | contraposée |
| donc **exactement** un | « au moins un » et « au plus un » ensemble |
:::

Le plus dur est de **trouver $J$**. On l'obtient avec le tableau de variation : si $f$ est strictement croissante sur $[a\,;b[$, alors $J = \Big[f(a)\,;\ \lim\limits_{x \to b^-} f(x)\Big[$.

:::example[Une bijection de $\mathbb R$ sur $\mathbb R$]
$f(x) = x^3 + x$ sur $\mathbb R$. Sa dérivée $f'(x) = 3x^2 + 1 > 0$ : $f$ est strictement croissante. Ses limites sont $-\infty$ en $-\infty$ et $+\infty$ en $+\infty$, donc $J = \mathbb R$. **Toute équation $x^3 + x = y$ a une et une seule solution réelle.** Par exemple $x^3 + x = 1$ n'a qu'une solution, et $f(0{,}68) \approx 0{,}99$, $f(0{,}69) \approx 1{,}02$ l'encadrent : c'est environ $0{,}6823$. On n'a pourtant **aucune formule simple** pour $f^{-1}$.
:::

:::example[Restreindre pour obtenir une bijection]
$k(x) = x^2 + 2x = (x + 1)^2 - 1$ n'est pas injective sur $\mathbb R$ ($k(-3) = k(1) = 3$). Sur $I = [-1\,;+\infty[$, elle est strictement croissante ($k'(x) = 2x + 2 \geq 0$, nulle seulement en $-1$), de $k(-1) = -1$ vers $+\infty$. C'est donc une bijection de $[-1\,;+\infty[$ sur $[-1\,;+\infty[$.

Pour la réciproque, on résout $y = x^2 + 2x$ d'inconnue $x \geq -1$ : $(x + 1)^2 = 1 + y$, et comme $x + 1 \geq 0$, $x + 1 = \sqrt{1 + y}$. Donc
$$
k^{-1}(y) = -1 + \sqrt{1 + y}\qquad (y \geq -1).
$$
Contrôle : $k(1) = 3$ et $k^{-1}(3) = -1 + \sqrt 4 = 1$ ✓.
:::

:::warning
**Le choix de l'intervalle compte.** Sur $[-1\,;+\infty[$, la réciproque de $k$ est $-1 + \sqrt{1 + y}$. Sur $]-\infty\,;-1]$ (où $k$ est strictement décroissante), la réciproque est $-1 - \sqrt{1 + y}$. Deux intervalles, deux bijections, deux réciproques. Une phrase du type « la réciproque de $x \mapsto x^2 + 2x$ » **n'a pas de sens** tant qu'on n'a pas dit sur quel intervalle.
:::

## 2. Propriétés de la fonction réciproque

:::property[Propriétés de $f^{-1}$]
Soit $f$ une bijection continue et strictement monotone de $I$ sur $J$.

- $f^{-1}$ est définie sur $J$, à valeurs dans $I$ ; $f^{-1}(f(x)) = x$ pour tout $x \in I$ et $f(f^{-1}(y)) = y$ pour tout $y \in J$ ;
- $y = f(x) \iff x = f^{-1}(y)$ (pour $x \in I$ et $y \in J$) ;
- $f^{-1}$ est **continue** et **strictement monotone** sur $J$, de **même sens de variation** que $f$ ;
- dans un repère **orthonormé**, les courbes de $f$ et de $f^{-1}$ sont **symétriques par rapport à la droite $y = x$**.
:::

:::proof[Même sens de variation]
Supposons $f$ strictement croissante. On veut montrer que $f^{-1}$ l'est aussi.

| Étape | Justification |
|---|---|
| On prend $y_1 < y_2$ dans $J$ et on pose $x_1 = f^{-1}(y_1)$, $x_2 = f^{-1}(y_2)$ | $y_i = f(x_i)$ |
| Par l'absurde, on suppose $x_1 \geq x_2$ | on cherche une contradiction |
| alors $f(x_1) \geq f(x_2)$, c'est-à-dire $y_1 \geq y_2$ | $f$ croissante |
| c'est contraire à $y_1 < y_2$ | hypothèse |
| donc $x_1 < x_2$, c'est-à-dire $f^{-1}(y_1) < f^{-1}(y_2)$ | la supposition était fausse |
:::

La continuité de $f^{-1}$ vient de ce qu'elle est monotone et que l'ensemble de ses valeurs, $I$, est un intervalle : une fonction monotone dont l'image est un intervalle ne peut pas faire de saut.

:::proof[La symétrie par rapport à $y = x$]
| Étape | Justification |
|---|---|
| $M(x\,;y)$ est sur $\mathcal C_f$ | on part d'un point de la courbe de $f$ |
| $\iff y = f(x)$ avec $x \in I$ | définition de $\mathcal C_f$ |
| $\iff x = f^{-1}(y)$ avec $y \in J$ | équivalence des propriétés |
| $\iff M'(\textcolor{#ea580c}{y}\,;\textcolor{#ea580c}{x})$ est sur $\mathcal C_{f^{-1}}$ | définition de $\mathcal C_{f^{-1}}$ : on a **échangé** abscisse et ordonnée |
| et $M'$ est le symétrique de $M$ par rapport à $y = x$ | dans un repère orthonormé, échanger les coordonnées est cette symétrie |
:::

![Courbe de f(x) = x³ + x et de sa réciproque](/lessons/images/m4-reciproque.svg "La courbe de f(x) = x³ + x (en vert) et celle de sa réciproque (en orange) sont symétriques par rapport à la droite y = x. Le point A(1 ; 2) devient A'(2 ; 1), et la tangente de pente 4 devient une tangente de pente 1/4.")

:::method[Tracer la courbe d'une réciproque]
1. Tracer $\mathcal C_f$ et la droite $y = x$ (même unité sur les deux axes).
2. **Échanger** les coordonnées de quelques points : $(a\,;b) \to (b\,;a)$.
3. **Inverser** les pentes : une tangente de pente $m$ devient une tangente de pente $\dfrac1m$. Une tangente **horizontale** devient une tangente **verticale**.
4. Joindre, en respectant le sens de variation.
:::

## 3. Dérivée de la réciproque

On ne connaît pas toujours une formule de $f^{-1}$. Peut-on quand même la dériver ? Oui, et le résultat est très simple. L'idée est géométrique : la symétrie par rapport à $y = x$ **échange la hauteur gagnée et la largeur parcourue**. Si la tangente de $\mathcal C_f$ monte de $4$ quand on avance de $1$, celle de $\mathcal C_{f^{-1}}$ monte de $1$ quand on avance de $4$ : pente $\dfrac14$.

:::theorem[Dérivée de la réciproque]
Soit $f$ continue et strictement monotone sur $I$, de réciproque $f^{-1}$ sur $J = f(I)$. Soit $x_0 \in I$ et $y_0 = f(x_0)$.

- Si $f$ est dérivable en $x_0$ **avec $f'(x_0) \neq 0$**, alors $f^{-1}$ est dérivable en $y_0$ et
$$
(f^{-1})'(y_0) = \dfrac{1}{f'(x_0)} = \dfrac{1}{f'\big(f^{-1}(y_0)\big)}.
$$
- Si $f'(x_0) = 0$, $f^{-1}$ **n'est pas dérivable** en $y_0$ et $\mathcal C_{f^{-1}}$ a une **tangente verticale** au point d'abscisse $y_0$.
:::

:::proof[Dérivée de $f^{-1}$]
| Étape | Justification |
|---|---|
| Soit $y \neq y_0$ dans $J$ et $x = f^{-1}(y)$. Alors $x \neq x_0$ et $y = f(x)$, $y_0 = f(x_0)$ | $f^{-1}$ est injective |
| $\dfrac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \dfrac{x - x_0}{f(x) - f(x_0)} = \dfrac{1}{\tau(x)}$ avec $\tau(x) = \dfrac{f(x) - f(x_0)}{x - x_0}$ | on remplace, puis on inverse le taux d'accroissement |
| quand $y \to y_0$, on a $x = f^{-1}(y) \to x_0$ | $f^{-1}$ est continue |
| donc $\tau(x) \to f'(x_0)$ | $f$ dérivable en $x_0$ |
| si $f'(x_0) \neq 0$ : $\dfrac{1}{\tau(x)} \to \dfrac{1}{f'(x_0)}$ | inverse d'une limite non nulle |
| si $f'(x_0) = 0$ : $\tau(x) \to 0$ **en gardant un signe constant** ($f$ est strictement monotone), donc $\dfrac{1}{\tau(x)} \to \pm\infty$ | $\textcolor{#ea580c}{\text{taux de signe constant}}$ |
:::

### Un exemple sans formule

:::example[La dérivée d'une réciproque qu'on ne sait pas écrire]
$f(x) = x^3 + x$ est une bijection de $\mathbb R$ sur $\mathbb R$ (§1), avec $f'(x) = 3x^2 + 1 \neq 0$ partout. Donc $f^{-1}$ est dérivable sur $\mathbb R$.

- $f(1) = 2$ et $f'(1) = 4$, donc $(f^{-1})'(2) = \dfrac{1}{f'(1)} = \dfrac14$.
- $f(2) = 10$ et $f'(2) = 13$, donc $(f^{-1})'(10) = \dfrac{1}{13}$.

Pour le premier, la tangente à $\mathcal C_{f^{-1}}$ au point $A'(2\,;1)$ est $y = 1 + \dfrac14(x - 2)$. C'est le symétrique de la tangente $y = 2 + 4(x - 1)$ à $\mathcal C_f$ au point $A(1\,;2)$ (voir la figure du §2).

Le piège à éviter : on **n'évalue pas $f'$ en $y_0$**, mais en $x_0 = f^{-1}(y_0)$. Pour $y_0 = 2$, on dérive en $x_0 = 1$, pas en $2$.
:::

:::example[Contrôle sur une réciproque connue]
$k^{-1}(y) = -1 + \sqrt{1 + y}$ se dérive directement : $(k^{-1})'(y) = \dfrac{1}{2\sqrt{1 + y}}$, soit $\dfrac14$ en $y = 3$. Le théorème donne la même valeur : $k(1) = 3$, $k'(1) = 4$, donc $(k^{-1})'(3) = \dfrac14$ ✓.
:::

:::example[Une tangente verticale]
$f(x) = x^3$ est une bijection de $\mathbb R$ sur $\mathbb R$, mais $f'(0) = 0$. Sa réciproque, la racine cubique, n'est donc **pas dérivable en $0$** : sa courbe a l'axe des ordonnées comme tangente en $O$. La tangente horizontale de $x \mapsto x^3$ devient verticale, comme le dit la méthode du §2.
:::

## 4. Racine $n$-ième

Pour $n$ entier, $n \geq 2$, la fonction $x \longmapsto x^n$ est continue et strictement croissante sur $[0\,;+\infty[$, de $0$ vers $+\infty$.

:::definition[Racine $n$-ième]
La **racine $n$-ième**, notée $x \longmapsto \sqrt[n]{x}$ (ou $x^{1/n}$), est la **réciproque de $x \mapsto x^n$ sur $[0\,;+\infty[$**. Elle est définie sur $[0\,;+\infty[$ :
$$
y = x^n,\ x \geq 0 \iff x = \sqrt[n]{y},\ y \geq 0.
$$
Si $n$ est **impair**, $x \mapsto x^n$ est une bijection de $\mathbb R$ sur $\mathbb R$ et $\sqrt[n]{x}$ est définie sur $\mathbb R$ tout entier.
:::

:::example[Quelques racines]
$\sqrt[4]{81} = 3$ car $3^4 = 81$. $\sqrt[3]{27} = 3$. Et, comme $3$ est impair, $\sqrt[3]{-8} = -2$ (car $(-2)^3 = -8$). En revanche $\sqrt{-4}$ n'existe pas dans $\mathbb R$ : l'exposant $2$ est pair.
:::

:::property[Dérivée et comportement]
- $\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}$ pour $a, b \geq 0$ ;
- sur $]0\,;+\infty[$, $\sqrt[n]{x}$ est dérivable et $\big(\sqrt[n]{x}\big)' = \dfrac{1}{n\,x^{\frac{n-1}{n}}}$ ;
- en $0$, $\sqrt[n]{x}$ **n'est pas dérivable** : tangente verticale ;
- $\lim\limits_{x \to +\infty}\sqrt[n]{x} = +\infty$.
:::

:::proof[La dérivée de la racine $n$-ième]
| Étape | Justification |
|---|---|
| $f(t) = t^n$ a pour dérivée $f'(t) = nt^{n-1}$, non nulle pour $t > 0$ | dérivation d'une puissance |
| $f^{-1}(x) = \sqrt[n]{x}$ | définition |
| $\big(\sqrt[n]{x}\big)' = \dfrac{1}{f'\big(\sqrt[n]{x}\big)} = \dfrac{1}{n\big(\sqrt[n]{x}\big)^{n-1}}$ | dérivée de la réciproque |
| $\big(\sqrt[n]{x}\big)^{n-1} = x^{\frac{n-1}{n}}$ | règles des exposants rationnels |
:::

:::example[Un calcul]
$\big(\sqrt[3]{x}\big)' = \dfrac{1}{3x^{2/3}}$. En $x = 8$, $8^{2/3} = 4$, donc la pente vaut $\dfrac{1}{3\times 4} = \dfrac1{12}$. Et en $x = 0$, la formule « explose » : $\dfrac{1}{3\times 0} $ n'existe pas, ce qui traduit la tangente verticale.
:::

## 5. La fonction arctangente

La fonction $\tan$ n'est pas injective sur son ensemble de définition : elle est $\pi$-périodique. On la **restreint à un intervalle où elle est strictement croissante**.

Sur $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$, $\tan$ est continue, de dérivée $\tan'(t) = 1 + \tan^2 t > 0$, et ses limites sont $-\infty$ et $+\infty$ aux bornes. C'est donc une bijection de $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$ sur $\mathbb R$.

:::definition[Arctangente]
La fonction **arctangente**, notée $\arctan$, est la réciproque de $\tan$ restreinte à $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$. Elle est définie sur $\mathbb R$ :
$$
y = \tan t,\ t \in \left]-\dfrac\pi2\,;\dfrac\pi2\right[ \iff t = \arctan y.
$$
:::

:::property[Valeurs et variations]
- $\arctan$ est **impaire**, strictement croissante sur $\mathbb R$, à valeurs dans $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$ ;
- $\lim\limits_{x \to +\infty}\arctan x = \dfrac\pi2$ et $\lim\limits_{x \to -\infty}\arctan x = -\dfrac\pi2$ ;
- $\arctan 0 = 0$, $\ \arctan\dfrac1{\sqrt3} = \dfrac\pi6$, $\ \arctan 1 = \dfrac\pi4$, $\ \arctan\sqrt3 = \dfrac\pi3$.
:::

Les valeurs se lisent à l'envers dans le tableau des valeurs de $\tan$ : $\tan\dfrac\pi4 = 1$ donc $\arctan 1 = \dfrac\pi4$.

:::theorem[Dérivée de $\arctan$]
$\arctan$ est dérivable sur $\mathbb R$ et, pour tout réel $x$,
$$
\arctan'(x) = \dfrac{1}{1 + x^2}.
$$
:::

:::proof[Dérivée de $\arctan$]
| Étape | Justification |
|---|---|
| $\tan'(t) = 1 + \tan^2 t$, qui est **non nul** | dérivée de $\tan$ |
| $\arctan'(x) = \dfrac{1}{\tan'(\arctan x)} = \dfrac{1}{1 + \tan^2(\arctan x)}$ | dérivée de la réciproque |
| $\tan(\arctan x) = x$ | $\tan\circ\arctan = \mathrm{id}_{\mathbb R}$ |
| donc $\arctan'(x) = \dfrac{1}{1 + x^2}$ | on remplace |
:::

La dérivée est **toujours positive** (donc $\arctan$ est strictement croissante) et **maximale en $0$**, où elle vaut $1$ : la courbe est à son plus raide au centre, puis elle s'aplatit vers les deux asymptotes horizontales $y = \pm\dfrac\pi2$. Elle est aussi la primitive de $\dfrac{1}{1 + x^2}$ qui s'annule en $0$, d'où $\displaystyle\int_0^1\dfrac{dx}{1 + x^2} = \arctan 1 - \arctan 0 = \dfrac\pi4$.

:::theorem[Une identité]
Pour tout $x > 0$,
$$
\arctan x + \arctan\dfrac1x = \dfrac\pi2.
$$
:::

:::proof[$\arctan x + \arctan\dfrac1x = \dfrac\pi2$]
| Étape | Justification |
|---|---|
| On pose $\varphi(x) = \arctan x + \arctan\dfrac1x$ sur $]0\,;+\infty[$ | on étudie la somme |
| $\varphi'(x) = \dfrac{1}{1 + x^2} + \dfrac{-\frac1{x^2}}{1 + \frac{1}{x^2}}$ | $(\arctan u)' = \dfrac{u'}{1 + u^2}$ avec $u = \dfrac1x$, $u' = -\dfrac{1}{x^2}$ |
| $= \dfrac{1}{1 + x^2} - \dfrac{1}{x^2 + 1} = \textcolor{#ea580c}{0}$ | on multiplie numérateur et dénominateur par $x^2$ |
| $\varphi$ est constante sur l'intervalle $]0\,;+\infty[$ | dérivée nulle |
| $\varphi(1) = \dfrac\pi4 + \dfrac\pi4 = \dfrac\pi2$ | valeurs usuelles |
:::

:::example[Contrôle numérique]
$\arctan 3 \approx 1{,}2490$ et $\arctan\dfrac13 \approx 0{,}3218$ ; la somme vaut $1{,}5708 \approx \dfrac\pi2$ ✓.
:::

:::warning
$\arctan(\tan x) = x$ **seulement si $x \in \left]-\dfrac\pi2\,;\dfrac\pi2\right[$**. Par exemple $\tan\dfrac{3\pi}4 = -1$, donc $\arctan\left(\tan\dfrac{3\pi}4\right) = \arctan(-1) = -\dfrac\pi4$, et non $\dfrac{3\pi}4$. L'identité $\tan(\arctan x) = x$, elle, est vraie pour **tout** réel $x$.
:::

:::remark
Une surprise pour la suite. Le chapitre sur le logarithme montre que $\ln$ est une bijection de $]0\,;+\infty[$ sur $\mathbb R$. Sa réciproque, l'exponentielle, a la dérivée que donne le théorème du §3 : avec $f = \ln$ et $f'(t) = \dfrac1t$, on obtient $(\exp)'(y) = \dfrac{1}{1/\exp(y)} = \exp(y)$. **L'exponentielle est sa propre dérivée**, sans avoir eu à calculer quoi que ce soit.
:::

## 6. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Montrer que $f$ a une réciproque sur $I$ | $f$ continue et strictement monotone sur $I$ ; on trouve $J = f(I)$ avec le tableau de variation |
| Trouver l'intervalle $J$ | limites et valeurs aux bornes de $I$, dans le sens de variation |
| Écrire $f^{-1}$ | résoudre $y = f(x)$ d'inconnue $x \in I$ ; garder le bon signe de la racine |
| Tracer $\mathcal C_{f^{-1}}$ | symétrie par rapport à $y = x$ ; pentes inversées |
| Calculer $(f^{-1})'(y_0)$ | trouver $x_0$ tel que $f(x_0) = y_0$, puis $\dfrac{1}{f'(x_0)}$ ; si $f'(x_0) = 0$ : tangente verticale |
| Résoudre $f(x) = y$ pour un $y$ donné | une seule solution par bijection ; encadrer par le théorème des valeurs intermédiaires |
| Calculs avec $\arctan$ | $\arctan x + \arctan\dfrac1x = \dfrac\pi2$ pour $x > 0$ ; $\arctan' = \dfrac{1}{1 + x^2}$ ; valeurs en $0$, $\dfrac{1}{\sqrt3}$, $1$, $\sqrt3$ |

## Vérifie-toi

::::check[Bijection et unicité]
Montrer que l'équation $x^3 + x - 1 = 0$ a une unique solution $\alpha$ dans $\mathbb R$, et que $0 < \alpha < 1$.

:::answer
$g(x) = x^3 + x - 1$ a pour dérivée $3x^2 + 1 > 0$ : $g$ est continue et strictement croissante sur $\mathbb R$, de limites $\mp\infty$. Elle est donc une bijection de $\mathbb R$ sur $\mathbb R$ : $g(x) = 0$ a **une et une seule** solution $\alpha$. Comme $g(0) = -1 < 0$ et $g(1) = 1 > 0$, on a $0 < \alpha < 1$ (on trouve $\alpha \approx 0{,}6823$).
:::
::::

::::check[Dérivée d'une réciproque]
Soit $g(x) = x^5 + x$, bijection de $\mathbb R$ sur $\mathbb R$. Calculer $(g^{-1})'(2)$.

:::answer
On cherche $x_0$ avec $g(x_0) = 2$ : $g(1) = 1 + 1 = 2$, donc $x_0 = 1$. Alors $g'(x) = 5x^4 + 1$, $g'(1) = 6 \neq 0$, et $(g^{-1})'(2) = \dfrac{1}{g'(1)} = \dfrac16$.
:::
::::

::::check[Écrire la réciproque]
Soit $h(x) = x^2 - 4x$ sur $[2\,;+\infty[$. Montrer que $h$ est une bijection sur un intervalle $J$ à préciser, puis donner $h^{-1}$.

:::answer
$h(x) = (x - 2)^2 - 4$ et $h'(x) = 2x - 4 \geq 0$ sur $[2\,;+\infty[$, nulle seulement en $2$ : $h$ est continue et strictement croissante, de $h(2) = -4$ vers $+\infty$. Donc $J = [-4\,;+\infty[$. Pour $y \geq -4$ : $(x - 2)^2 = y + 4$, et comme $x - 2 \geq 0$, $x = 2 + \sqrt{y + 4}$. Donc $h^{-1}(y) = 2 + \sqrt{y + 4}$. Contrôle : $h(5) = 5$ et $h^{-1}(5) = 2 + 3 = 5$ ✓.
:::
::::

::::check[Arctangente]
Calculer $\displaystyle\lim_{x \to +\infty}\arctan\!\left(x^2\right)$, puis la pente de la tangente à $\mathcal C_{\arctan}$ au point d'abscisse $1$.

:::answer
Quand $x \to +\infty$, $x^2 \to +\infty$, donc $\arctan(x^2) \to \dfrac\pi2$. La pente en $1$ est $\arctan'(1) = \dfrac{1}{1 + 1} = \dfrac12$, et la tangente est $y = \dfrac\pi4 + \dfrac12(x - 1)$.
:::
::::

::::challenge
Montrer que $\arctan 1 + \arctan 2 + \arctan 3 = \pi$.

:::answer
On sait $\arctan 1 = \dfrac\pi4$. Soit $s = \arctan 2 + \arctan 3$. Chacun des deux angles est dans $\left]0\,;\dfrac\pi2\right[$, donc $s \in ]0\,;\pi[$. La formule d'addition de la tangente donne
$$
\tan s = \dfrac{2 + 3}{1 - 2\times 3} = -1.
$$
Dans $]0\,;\pi[$, le seul angle de tangente $-1$ est $\dfrac{3\pi}4$. Donc $s = \dfrac{3\pi}{4}$ et le total vaut $\dfrac\pi4 + \dfrac{3\pi}4 = \pi$. Contrôle : $0{,}7854 + 1{,}1071 + 1{,}2490 = 3{,}1415 \approx \pi$ ✓.
:::
::::

:::summary
- $f$ **continue et strictement monotone** sur un intervalle $I$ $\Rightarrow$ $f$ est une **bijection de $I$ sur $J = f(I)$**. On trouve $J$ avec le tableau de variation.
- $y = f(x) \iff x = f^{-1}(y)$ ; $f^{-1}$ est continue, strictement monotone, **de même sens** que $f$.
- $\mathcal C_{f^{-1}}$ est le **symétrique de $\mathcal C_f$ par rapport à $y = x$** (repère orthonormé). Les pentes s'inversent, une tangente horizontale devient verticale.
- Si $f'(x_0) \neq 0$ : $(f^{-1})'(y_0) = \dfrac{1}{f'(x_0)}$ avec $y_0 = f(x_0)$. On dérive en $x_0 = f^{-1}(y_0)$, **pas** en $y_0$. Si $f'(x_0) = 0$ : tangente verticale.
- $\sqrt[n]{x}$ est la réciproque de $x^n$ sur $[0\,;+\infty[$ ; $\big(\sqrt[n]{x}\big)' = \dfrac{1}{n\,x^{(n-1)/n}}$ ; pas dérivable en $0$.
- $\arctan$ est la réciproque de $\tan$ sur $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$ ; $\arctan'(x) = \dfrac{1}{1 + x^2}$ ; limites $\pm\dfrac\pi2$ ; $\arctan x + \arctan\dfrac1x = \dfrac\pi2$ pour $x > 0$.
- **L'intervalle de restriction** doit toujours être précisé.
:::
