---
title: "Primitives : définition, tableau des primitives usuelles, formes composées"
slug: "lycee-4eme-maths-primitives"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Primitives"
summary: "Remonter de la dérivée à la fonction : définition d'une primitive, pourquoi deux primitives diffèrent d'une constante, primitive qui prend une valeur donnée, tableau des primitives usuelles, formes composées u'u^n, u'/√u, u' cos u, linéarisation, et applications au mouvement."
prerequisites: ["Dérivation", "Trigonométrie", "Fonctions réciproques"]
source: "Manuel officiel 4ème année Mathématiques, chapitre « Primitives »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Tu connais la fonction de position d'une voiture : dériver donne sa vitesse. Mais un compteur de vitesse ne te donne que la vitesse, et tu veux savoir **jusqu'où tu es allé**. Il faut remonter en arrière : de la vitesse à la position. C'est l'**opération inverse de la dérivation**, et elle s'appelle chercher une primitive.

:::intuition
Dériver est mécanique : on applique des règles. Primitiver est un jeu de reconnaissance : on regarde la fonction et on se demande « de quelle fonction est-ce la dérivée ? ». Et il y a un fait étonnant : la réponse n'est **pas unique**. Si on te donne seulement la vitesse, tu ne peux pas dire où la voiture **a démarré** : toutes les positions de départ possibles donnent la même vitesse. L'information qui manque est une **constante**, et c'est le seul degré de liberté.
:::

## 1. Définition

:::definition[Primitive]
Soit $f$ une fonction définie sur un intervalle $I$. Une **primitive de $f$ sur $I$** est une fonction $F$ dérivable sur $I$ telle que
$$
F'(x) = f(x)\quad\text{pour tout } x \in I.
$$
:::

:::example[Vérifier une primitive]
$F(x) = x^3 + 5x$ est une primitive de $f(x) = 3x^2 + 5$ sur $\mathbb R$ : $F'(x) = 3x^2 + 5$ ✓. Mais $G(x) = x^3 + 5x - 7$ en est aussi une : la constante $-7$ disparaît à la dérivation. Une fonction a **autant de primitives qu'il y a de constantes**.
:::

### Deux primitives, une constante près

:::theorem[Unicité à une constante près]
Soit $f$ une fonction qui admet une primitive $F$ sur un **intervalle** $I$. Alors les primitives de $f$ sur $I$ sont exactement les fonctions $x \mapsto F(x) + c$, où $c$ est une constante réelle.
:::

:::proof[Deux primitives diffèrent d'une constante]
| Étape | Justification |
|---|---|
| Soit $G$ une autre primitive de $f$ sur $I$ | on veut montrer $G = F + c$ |
| $(G - F)'(x) = f(x) - f(x) = \textcolor{#ea580c}{0}$ pour tout $x \in I$ | dérivée d'une différence |
| donc $G - F$ est constante sur $I$ | une dérivée nulle sur un **intervalle** donne une constante |
| donc $G(x) = F(x) + c$ | on note $c$ cette constante |
| Réciproquement, $(F + c)' = F' + 0 = f$ | $F + c$ est bien une primitive |
:::

![Famille de primitives de x ↦ 2x − 2](/lessons/images/m4-primitives-famille.svg "Les primitives de f(x) = 2x − 2 sont les paraboles F_c(x) = x² − 2x + c : la même courbe, translatée verticalement. En x = 2, toutes ont la même tangente de pente 2. Une seule passe par A(2 ; 1).")

Géométriquement, les primitives forment une **famille de courbes translatées verticalement** : elles ont la même pente à la même abscisse, mais pas la même hauteur.

:::warning
Le mot « intervalle » compte. Sur $\mathbb R^*$ (qui n'est **pas** un intervalle), une primitive de $\dfrac{1}{x^2}$ est $-\dfrac1x$, mais sur $]-\infty\,;0[$ et sur $]0\,;+\infty[$ on peut choisir **deux constantes différentes**. Il faut toujours préciser l'intervalle.
:::

### Fixer la constante

Il y a une infinité de primitives, mais **une seule** qui prend une valeur donnée en un point.

:::property[La primitive qui prend une valeur donnée]
Si $f$ admet une primitive sur $I$, alors pour tout $x_0 \in I$ et tout réel $y_0$, il existe **une unique primitive $F$ de $f$ sur $I$ telle que $F(x_0) = y_0$**.
:::

:::method[Trouver la primitive qui prend la valeur $y_0$ en $x_0$]
1. Trouver **une** primitive $F_0$ de $f$.
2. Écrire la forme générale $F(x) = F_0(x) + c$.
3. Résoudre $F(x_0) = y_0$ d'inconnue $c$.

Pour $f(x) = 3x^2 - 2x + 1$ avec $F(1) = 5$ : $F_0(x) = x^3 - x^2 + x$, donc $F(x) = x^3 - x^2 + x + c$. $F(1) = 1 - 1 + 1 + c = 1 + c = 5$, donc $c = 4$ et $F(x) = x^3 - x^2 + x + 4$. Contrôle : $F(1) = 1 - 1 + 1 + 4 = 5$ ✓ et $F'(x) = 3x^2 - 2x + 1$ ✓.
:::

### Existence

L'existence est donnée par le théorème suivant, admis à ce niveau.

:::theorem[Existence des primitives]
Toute fonction **continue** sur un intervalle $I$ admet des primitives sur $I$. Plus précisément, pour $a \in I$, la fonction $F(x) = \displaystyle\int_a^x f(t)\,dt$ est **la primitive de $f$ qui s'annule en $a$**.
:::

:::curious[L'idée de la preuve]{theorem="Existence des primitives"}
L'idée : prendre pour $F(x)$ l'**aire** sous la courbe entre $a$ et $x$. Quand $x$ avance de $h$, l'aire gagne une bande presque rectangulaire, de hauteur proche de $f(x)$ : $\dfrac{F(x + h) - F(x)}{h} \approx f(x)$, donc $F' = f$.
:::


C'est le lien avec le chapitre sur les intégrales : l'aire sous la courbe, comptée depuis $a$ jusqu'à $x$, est une primitive. Attention : **« avoir une primitive » ne veut pas dire « savoir l'écrire »**. Les fonctions continues $e^{-x^2}$ ou $\dfrac{\sin x}{x}$ ont des primitives, mais aucune ne s'exprime avec les fonctions usuelles.

## 2. Primitives usuelles

On lit à l'envers le tableau des dérivées. Dans le tableau, $c$ est une constante réelle et $I$ un intervalle où la fonction est définie.

| $f(x)$ | Une primitive $F(x)$ | Intervalle $I$ |
|---|---|---|
| $a$ (constante) | $ax$ | $\mathbb R$ |
| $x^n$ ($n$ entier, $n \neq -1$) | $\dfrac{x^{n+1}}{n+1}$ | $\mathbb R$ si $n \geq 0$ ; $]-\infty\,;0[$ ou $]0\,;+\infty[$ si $n \leq -2$ |
| $\dfrac{1}{x^2}$ | $-\dfrac1x$ | $]-\infty\,;0[$ ou $]0\,;+\infty[$ |
| $\dfrac{1}{\sqrt x}$ | $2\sqrt x$ | $]0\,;+\infty[$ |
| $\cos x$ | $\sin x$ | $\mathbb R$ |
| $\sin x$ | $-\cos x$ | $\mathbb R$ |
| $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ | $\tan x$ | $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x$ | $\mathbb R$ |

:::example[Lire le tableau]
$\displaystyle f(x) = 4x^3 - \dfrac{3}{x^2} + 2\cos x$ sur $]0\,;+\infty[$ a pour primitive
$$
F(x) = x^4 + \dfrac{3}{x} + 2\sin x.
$$
On a primitivé terme à terme : $4x^3 \to x^4$, $-\dfrac3{x^2} \to +\dfrac3x$, $2\cos x \to 2\sin x$. Contrôle : $F'(x) = 4x^3 - \dfrac{3}{x^2} + 2\cos x$ ✓.
:::

:::property[Somme et multiple]
Si $F$ et $G$ sont des primitives de $f$ et $g$ sur $I$ et $\lambda$ un réel, alors $F + G$ est une primitive de $f + g$ et $\lambda F$ est une primitive de $\lambda f$.
:::

C'est la linéarité de la dérivation, lue à l'envers.

## 3. Formes composées

Le tableau ne suffit pas pour $(2x+1)^3$ ou $\cos(3x)$. Mais les formules de dérivation des composées, lues à l'envers, donnent des **formes à reconnaître**. Dans le tableau suivant, $u$ est une fonction dérivable, de dérivée $u'$.

| La fonction ressemble à | Une primitive | Condition |
|---|---|---|
| $u'\,u^n$ ($n \neq -1$) | $\dfrac{u^{n+1}}{n+1}$ | $u \neq 0$ si $n < 0$ |
| $\dfrac{u'}{u^2}$ | $-\dfrac1u$ | $u \neq 0$ |
| $\dfrac{u'}{\sqrt u}$ | $2\sqrt u$ | $u > 0$ |
| $u'\cos u$ | $\sin u$ | |
| $u'\sin u$ | $-\cos u$ | |
| $\dfrac{u'}{1 + u^2}$ | $\arctan u$ | |
| $u'\,(1 + \tan^2 u)$ | $\tan u$ | $\cos u \neq 0$ |

:::proof[$u'u^n$ et $\dfrac{u'}{\sqrt u}$]
| Étape | Justification |
|---|---|
| $\left(\dfrac{u^{n+1}}{n+1}\right)' = \dfrac{(n+1)\,u^n\,u'}{n+1} = u'\,u^n$ | dérivée de $u^{n+1}$ : $(n+1)u^n u'$ |
| $\left(2\sqrt u\right)' = 2\cdot\dfrac{u'}{2\sqrt u} = \dfrac{u'}{\sqrt u}$ | dérivée de $\sqrt u$ : $\dfrac{u'}{2\sqrt u}$ |
:::

:::method[Reconnaître une forme composée]
1. **Repérer** le « bloc » $u$ (ce qui est à l'intérieur d'une puissance, d'une racine, d'un $\cos$...).
2. **Calculer $u'$** et regarder si $u'$ apparaît dans $f$.
3. S'il apparaît à une **constante près**, on ajuste : on multiplie et on divise par cette constante.
4. **Contrôler** en dérivant.
:::

:::example[Trois reconnaissances]
- $f(x) = 2x\,(x^2 + 1)^3$. Ici $u = x^2 + 1$, $u' = 2x$ est présent : $f = u'u^3$ et $F(x) = \dfrac{(x^2 + 1)^4}{4}$. Contrôle : $F'(x) = \dfrac{4(x^2+1)^3\cdot 2x}{4} = 2x(x^2 + 1)^3$ ✓.
- $f(x) = \dfrac{x}{\sqrt{x^2 + 1}}$. Ici $u = x^2 + 1$, $u' = 2x$ : il manque un facteur $2$. On écrit $f = \dfrac12\cdot\dfrac{2x}{\sqrt{x^2 + 1}} = \dfrac12\cdot\dfrac{u'}{\sqrt u}$, donc $F(x) = \dfrac12\cdot 2\sqrt{x^2 + 1} = \sqrt{x^2 + 1}$.
- $f(x) = \cos(3x)$. Ici $u = 3x$, $u' = 3$ : $f = \dfrac13\cdot 3\cos(3x) = \dfrac13 u'\cos u$ et $F(x) = \dfrac13\sin(3x)$.
:::

:::example[Avec arctan]
$f(x) = \dfrac{1}{1 + 4x^2}$. Comme $4x^2 = (2x)^2$, on pose $u = 2x$, $u' = 2$ : $f = \dfrac12\cdot\dfrac{2}{1 + (2x)^2} = \dfrac12\cdot\dfrac{u'}{1 + u^2}$. Donc $F(x) = \dfrac12\arctan(2x)$.
:::

:::example[Avec tan]
$\tan^2 x = (1 + \tan^2 x) - 1$, donc une primitive de $\tan^2 x$ sur $\left]-\dfrac\pi2\,;\dfrac\pi2\right[$ est $\tan x - x$. Contrôle : $(\tan x - x)' = 1 + \tan^2 x - 1 = \tan^2 x$ ✓.
:::

:::remark
Les formes $\dfrac{u'}{u}$ (primitive $\ln\lvert u\rvert$) et $u'e^u$ (primitive $e^u$) viendront avec le logarithme et l'exponentielle. Elles complètent ce tableau.
:::

## 4. Primitives avec des fonctions trigonométriques

$\cos^2 x$ et $\sin^2 x$ ne figurent pas dans les tableaux, mais on les **linéarise** : $\cos^2 x = \dfrac{1 + \cos 2x}{2}$ et $\sin^2 x = \dfrac{1 - \cos 2x}{2}$.

:::example[$\cos^2$ et $\sin^2$]
Une primitive de $\cos^2 x$ est
$$
F(x) = \dfrac x2 + \dfrac{\sin 2x}{4}\qquad\text{car}\qquad F'(x) = \dfrac12 + \dfrac{2\cos 2x}{4} = \dfrac{1 + \cos 2x}{2} = \cos^2 x.
$$
De même, $\dfrac x2 - \dfrac{\sin 2x}{4}$ est une primitive de $\sin^2 x$.
:::

:::example[Deux primitives, une constante]
$\sin x\cos x$ se traite de **deux façons**. Avec $u = \sin x$, $u' = \cos x$ : $f = u'u$, d'où $F_1(x) = \dfrac{\sin^2 x}{2}$. Avec la formule $\sin x\cos x = \dfrac{\sin 2x}{2}$ : $F_2(x) = -\dfrac{\cos 2x}{4}$. Les deux paraissent différentes, et pourtant
$$
F_1(x) - F_2(x) = \dfrac{\sin^2 x}{2} + \dfrac{\cos 2x}{4} = \dfrac{1 - \cos 2x}{4} + \dfrac{\cos 2x}{4} = \dfrac14.
$$
Elles diffèrent d'une **constante**, comme le théorème l'annonce. Contrôle en $x = 0{,}7$ : la différence vaut $0{,}25$.
:::

:::method[Puissance d'un sinus ou cosinus]
Pour $\sin^3 x$ ou $\cos^3 x$ : on **sépare un facteur** et on utilise $\sin^2 + \cos^2 = 1$. Par exemple $\sin^3 x = \sin x\,(1 - \cos^2 x) = \sin x - \sin x\cos^2 x$. Le premier terme est immédiat ; le second est de la forme $-u'u^2$ avec $u = \cos x$ (car $u' = -\sin x$).
:::

## 5. Application : du mouvement à la position

:::example[Une balle lancée vers le haut]
On lance une balle verticalement à $v_0 = 20$ m/s depuis le sol. L'accélération est $a(t) = -9{,}8$ m/s$^2$ (on néglige l'air). On cherche la hauteur $x(t)$.

**Vitesse.** $v$ est une primitive de $a$ : $v(t) = -9{,}8\,t + c_1$, et $v(0) = 20$ donne $c_1 = 20$, donc $v(t) = 20 - 9{,}8\,t$.

**Position.** $x$ est une primitive de $v$ : $x(t) = 20t - 4{,}9\,t^2 + c_2$, et $x(0) = 0$ donne $c_2 = 0$, donc $x(t) = 20t - 4{,}9\,t^2$.

**Sommet.** La balle s'arrête de monter quand $v = 0$ : $t = \dfrac{20}{9{,}8} \approx 2{,}04$ s. La hauteur maximale est $x(2{,}04) = \dfrac{20^2}{2\times 9{,}8} \approx 20{,}4$ m.
:::

Deux constantes, deux conditions initiales : **à chaque primitive correspond une donnée** (la vitesse initiale, la position initiale).

## 6. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Vérifier que $F$ est une primitive de $f$ | dériver $F$ et retrouver $f$ |
| Trouver une primitive | tableau, linéarité, puis formes $u'u^n$, $\dfrac{u'}{\sqrt u}$, $u'\cos u$... |
| Un facteur manque ($2x$ au lieu de $x$) | multiplier et diviser par la constante |
| La primitive prend une valeur $y_0$ en $x_0$ | $F_0 + c$, puis résoudre $F(x_0) = y_0$ |
| $\cos^2$, $\sin^2$, $\sin\cos$ | linéariser |
| $\sin^3$, $\cos^3$ | séparer un facteur, utiliser $\sin^2 + \cos^2 = 1$ |
| Deux primitives qui ont l'air différentes | vérifier que leur différence est constante |
| Mouvement : position, vitesse, accélération | primitiver à chaque étape, avec la condition initiale |

## Vérifie-toi

::::check[Primitive qui prend une valeur]
Déterminer la primitive $F$ de $f(x) = \dfrac{1}{\sqrt x}$ sur $]0\,;+\infty[$ telle que $F(4) = 7$.

:::answer
Une primitive est $2\sqrt x$, donc $F(x) = 2\sqrt x + c$. $F(4) = 2\times 2 + c = 4 + c = 7$, donc $c = 3$ et $F(x) = 2\sqrt x + 3$. Contrôle : $F'(x) = \dfrac{1}{\sqrt x}$ ✓.
:::
::::

::::check[Forme composée]
Trouver une primitive de $f(x) = \dfrac{x}{(x^2 + 1)^2}$ sur $\mathbb R$.

:::answer
$u = x^2 + 1$, $u' = 2x$ : il manque un facteur $2$. $f = \dfrac12\cdot\dfrac{u'}{u^2}$, donc $F(x) = -\dfrac{1}{2(x^2 + 1)}$. Contrôle : $F'(x) = \dfrac12\cdot\dfrac{2x}{(x^2 + 1)^2} = \dfrac{x}{(x^2+1)^2}$ ✓.
:::
::::

::::check[Linéariser]
Trouver la primitive de $\cos^2 x$ qui s'annule en $0$.

:::answer
$\cos^2 x = \dfrac{1 + \cos 2x}{2}$ a pour primitives $\dfrac x2 + \dfrac{\sin 2x}{4} + c$. En $0$ : $0 + 0 + c = 0$, donc $c = 0$ et $F(x) = \dfrac x2 + \dfrac{\sin 2x}{4}$.
:::
::::

::::check[Un freinage]
Une voiture roule à $20$ m/s et freine avec une décélération constante de $5$ m/s$^2$. Quelle distance parcourt-elle avant de s'arrêter ?

:::answer
$a(t) = -5$, donc $v(t) = 20 - 5t$ (car $v(0) = 20$). La voiture s'arrête quand $v = 0$, soit $t = 4$ s. La position, avec $x(0) = 0$, est $x(t) = 20t - 2{,}5\,t^2$ et $x(4) = 80 - 40 = 40$ m.
:::
::::

::::challenge
Trouver une primitive de $\sin^3 x$, puis en déduire $\displaystyle\int_0^\pi\sin^3 x\,dx$.

:::answer
$\sin^3 x = \sin x - \sin x\cos^2 x$. Une primitive de $\sin x$ est $-\cos x$. Pour $-\sin x\cos^2 x$, on pose $u = \cos x$, $u' = -\sin x$ : c'est $u'u^2$, de primitive $\dfrac{\cos^3 x}{3}$. Donc
$$
F(x) = -\cos x + \dfrac{\cos^3 x}{3}.
$$
Contrôle : $F'(x) = \sin x - \cos^2 x\sin x = \sin x\,(1 - \cos^2 x) = \sin^3 x$ ✓. Puis $F(\pi) = 1 - \dfrac13 = \dfrac23$ et $F(0) = -1 + \dfrac13 = -\dfrac23$, donc $\displaystyle\int_0^\pi\sin^3 x\,dx = F(\pi) - F(0) = \dfrac43$.
:::
::::

:::summary
- $F$ est une **primitive** de $f$ sur $I$ si $F' = f$ sur $I$. Sur un **intervalle**, deux primitives diffèrent d'une **constante** : $F + c$.
- Il y a **une unique primitive** qui prend la valeur $y_0$ en $x_0$ : on écrit $F_0 + c$, puis on résout.
- Toute fonction **continue** sur un intervalle a des primitives ; $x \mapsto \displaystyle\int_a^x f(t)\,dt$ est celle qui s'annule en $a$.
- Tableau : $x^n \to \dfrac{x^{n+1}}{n+1}$, $\dfrac1{x^2} \to -\dfrac1x$, $\dfrac1{\sqrt x} \to 2\sqrt x$, $\cos \to \sin$, $\sin \to -\cos$, $1 + \tan^2 \to \tan$, $\dfrac{1}{1 + x^2} \to \arctan$.
- Formes composées : $u'u^n \to \dfrac{u^{n+1}}{n+1}$, $\dfrac{u'}{u^2} \to -\dfrac1u$, $\dfrac{u'}{\sqrt u} \to 2\sqrt u$, $u'\cos u \to \sin u$, $\dfrac{u'}{1 + u^2} \to \arctan u$. Un facteur constant manquant s'ajuste.
- Trigonométrie : linéariser $\cos^2$, $\sin^2$ ; séparer un facteur pour $\sin^3$ ou $\cos^3$.
- Toujours **vérifier** en dérivant.
:::
