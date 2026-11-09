---
title: "Activités algébriques"
slug: "lycee-1ere-activites-algebriques"
school: "lycee"
level: "1ere"
sections: []
chapter: "Activités Algébriques"
summary: "Développer, réduire, factoriser : les identités remarquables du second et du troisième degré, comment choisir la bonne méthode de factorisation, et comment s'en servir pour prouver une égalité, résoudre une équation ou étudier un signe."
prerequisites: ["Calcul littéral du collège", "Racines carrées", "Valeur absolue"]
source: "Manuel officiel 1ère année, Tome 2, chapitre 11"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Pense à un nombre. Ajoute-lui $1$, élève le résultat au carré, retire le carré du nombre de départ, puis retire encore $1$.

Avec $5$ : $6^2 = 36$, puis $36 - 25 = 11$, puis $11 - 1 = 10$. Avec $7$ : $64 - 49 - 1 = 14$. Tu trouves chaque fois **le double** du nombre de départ.

Essayer cent nombres ne prouve rien : le cent-unième pourrait faire exception. Une lettre, elle, prouve pour **tous** les nombres à la fois :
$$
(x+1)^2 - x^2 - 1 = x^2 + 2x + 1 - x^2 - 1 = 2x.
$$

:::intuition
Une lettre est « un nombre quelconque ». Calculer avec des lettres, c'est démontrer une chose pour tous les nombres en une seule fois. Il n'y a que deux gestes à maîtriser, et ils sont inverses l'un de l'autre :

- **développer** transforme un produit en somme : $(x+1)(x-1) \;\to\; x^2 - 1$ ;
- **factoriser** transforme une somme en produit : $x^2 - 1 \;\to\; (x+1)(x-1)$.

On développe pour **comparer** ou **calculer** ; on factorise pour **résoudre** une équation ou **trouver un signe**, car un produit ne s'annule que si l'un de ses facteurs s'annule.
:::

## 1. Expressions littérales et valeur numérique

Une **expression littérale** est un calcul où figurent des lettres. Sa **valeur numérique** s'obtient en remplaçant la lettre par un nombre, **entre parenthèses**.

:::example[Une même expression, trois valeurs]
Soit $E(x) = x^2 - 3x + 1$.

| $x$ | Calcul | $E(x)$ |
|---|---|---|
| $2$ | $2^2 - 3 \times 2 + 1 = 4 - 6 + 1$ | $-1$ |
| $-\dfrac{1}{2}$ | $\left(-\dfrac12\right)^2 - 3 \times \left(-\dfrac12\right) + 1 = \dfrac14 + \dfrac32 + 1$ | $\dfrac{11}{4}$ |
| $\sqrt{2}$ | $(\sqrt2)^2 - 3\sqrt2 + 1 = 2 - 3\sqrt2 + 1$ | $3 - 3\sqrt{2}$ |
:::

:::warning
Les parenthèses ne sont pas décoratives : $(-3)^2 = 9$ mais $-3^2 = -9$. De même $-x^2$ n'est **pas** $(-x)^2$. Quand tu remplaces $x$ par un nombre négatif, mets-le entre parenthèses avant de calculer.
:::

## 2. Développer et réduire

:::property[Distributivité]
Pour tous réels $a$, $b$, $c$, $d$ :
$$
(a+b)(c+d) = ac + ad + bc + bd.
$$
Chaque terme de la première parenthèse multiplie chaque terme de la seconde : $2 \times 2 = 4$ termes, qu'on réduit ensuite.
:::

:::example[Développer, puis réduire]
$$
(2x-1)(x+3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3.
$$
Contrôle avec $x = 2$ : $(3)(5) = 15$ et $2 \times 4 + 10 - 3 = 15$. ✓

Avec trois facteurs, on développe deux par deux, en cherchant d'abord une identité remarquable :
$$
(x-1)(x+1)(x+2) = (x^2 - 1)(x+2) = x^3 + 2x^2 - x - 2.
$$
:::

:::method[Se contrôler en une ligne]
Après un développement, remplace $x$ par une petite valeur ($0$, $1$ ou $2$) dans l'expression de départ et dans le résultat. Si les deux nombres diffèrent, il y a une erreur. S'ils sont égaux, ce n'est pas une preuve, mais c'est un très bon signe.
:::

## 3. Les identités remarquables

Ce sont des développements qui reviennent si souvent qu'on les apprend par cœur, **dans les deux sens**.

:::theorem[Identités du second degré]
Pour tous réels $a$ et $b$ :

| Développé | Factorisé | Nom |
|---|---|---|
| $a^2 + 2ab + b^2$ | $(a+b)^2$ | carré d'une somme |
| $a^2 - 2ab + b^2$ | $(a-b)^2$ | carré d'une différence |
| $a^2 - b^2$ | $(a-b)(a+b)$ | différence de deux carrés |
:::

![Le carré de côté a plus b découpé en quatre morceaux](/lessons/images/carre-somme.svg "L'aire du grand carré de côté a + b est la somme des aires de ses quatre morceaux : a², b² et deux rectangles ab.")

La figure explique le terme du milieu : il y a **deux** rectangles $ab$, donc $2ab$. C'est pourquoi $(a+b)^2 \neq a^2 + b^2$.

:::theorem[Identités du troisième degré]
Pour tous réels $a$ et $b$ :

| Développé | Factorisé |
|---|---|
| $a^3 + 3a^2b + 3ab^2 + b^3$ | $(a+b)^3$ |
| $a^3 - 3a^2b + 3ab^2 - b^3$ | $(a-b)^3$ |
| $a^3 - b^3$ | $(a-b)(a^2 + ab + b^2)$ |
| $a^3 + b^3$ | $(a+b)(a^2 - ab + b^2)$ |
:::

:::proof[Différence de deux cubes]
| Étape | Justification |
|---|---|
| $(a-b)(a^2 + ab + b^2) = a \cdot a^2 + a \cdot ab + a \cdot b^2 - b \cdot a^2 - b \cdot ab - b \cdot b^2$ | distributivité |
| $\phantom{(a-b)(a^2 + ab + b^2)} = a^3 + \textcolor{#ea580c}{a^2b} + \textcolor{#0d9488}{ab^2} - \textcolor{#ea580c}{a^2b} - \textcolor{#0d9488}{ab^2} - b^3$ | on écrit chaque produit |
| $\phantom{(a-b)(a^2 + ab + b^2)} = a^3 - b^3$ | les termes de même couleur se détruisent deux à deux |
:::

:::proof[Cube d'une somme]
| Étape | Justification |
|---|---|
| $(a+b)^3 = (a+b)^2 (a+b)$ | définition du cube |
| $\phantom{(a+b)^3} = (a^2 + 2ab + b^2)(a+b)$ | carré d'une somme |
| $\phantom{(a+b)^3} = a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$ | distributivité |
| $\phantom{(a+b)^3} = a^3 + \textcolor{#ea580c}{3}a^2b + \textcolor{#ea580c}{3}ab^2 + b^3$ | on regroupe les termes semblables |
:::

:::remark[Un moyen de s'en souvenir]
Les coefficients $1, 3, 3, 1$ de $(a+b)^3$ forment la ligne suivante du triangle de Pascal ($1, 2, 1$ pour le carré). Pour $(a-b)^3$, les signes alternent : $+,-,+,-$. Pour $a^3 \pm b^3$, le second facteur est $a^2 \mp ab + b^2$ : le signe du milieu est l'**opposé** de celui du premier facteur, et le dernier terme est toujours $+b^2$.
:::

:::property[Le second facteur ne s'annule jamais]
Pour tous réels $a$ et $b$ non tous deux nuls, $a^2 + ab + b^2 > 0$.

$$
a^2 + ab + b^2 = \left(a + \frac{b}{2}\right)^2 + \frac{3}{4}\,b^2 .
$$

C'est une somme de deux carrés, donc elle est positive, et elle ne s'annule que si $a + \frac b2 = 0$ et $b = 0$, c'est-à-dire $a = b = 0$. Il en va de même pour $a^2 - ab + b^2 = \left(a - \frac b2\right)^2 + \frac34 b^2$. Conséquence : $a^3 - b^3$ a **le même signe** que $a - b$, et $a^3 + b^3$ le même signe que $a + b$.
:::

## 4. Factoriser

Factoriser, c'est écrire comme un **produit**. Il n'y a pas de recette unique, mais une liste de réflexes à essayer **dans cet ordre**.

:::method[Choisir la bonne méthode]
1. **Un facteur commun ?** (un nombre, une puissance de $x$, une parenthèse).
2. **Combien de termes ?**
   - **2 termes** : différence de carrés ($a^2 - b^2$) ou de cubes ($a^3 \pm b^3$) ;
   - **3 termes** : un carré parfait $a^2 \pm 2ab + b^2$ ?
   - **4 termes** : un cube parfait, ou un **groupement**.
3. **Toujours vérifier** en redéveloppant le résultat.
:::

### Facteur commun

:::example[Un facteur commun qui est une parenthèse]
$$
(x+2)(3x-1) - (x+2)(x-5) = (x+2)\big[(3x-1) - (x-5)\big] = (x+2)(2x+4) = 2(x+2)^2.
$$
:::

:::warning
Quand tu enlèves une parenthèse précédée d'un signe $-$, **tous** ses signes changent : $-(x-5) = -x + 5$. C'est l'erreur de factorisation la plus fréquente.
:::

### Différence de deux carrés

:::example[Même quand les carrés se cachent]
- $9x^2 - 25 = (3x)^2 - 5^2 = (3x-5)(3x+5)$.
- $x^2 - 2 = x^2 - (\sqrt2)^2 = (x - \sqrt2)(x+\sqrt2)$. Tout nombre positif est un carré.
- $(x-4)^2 - 9 = \big((x-4) - 3\big)\big((x-4)+3\big) = (x-7)(x-1)$.

Même avec des fractions : comme $\dfrac{25}{4} = \left(\dfrac52\right)^2$,
$$
\left(x - \frac32\right)^2 - \frac{25}{4} = \left(x - \frac32 - \frac52\right)\left(x - \frac32 + \frac52\right) = (x-4)(x+1).
$$
:::

### Carré parfait

:::example[Reconnaître le double produit]
$4x^2 + 12x + 9$ : le premier terme est $(2x)^2$, le dernier $3^2$, et le terme du milieu est bien $2 \times 2x \times 3 = 12x$. Donc $4x^2 + 12x + 9 = (2x+3)^2$.
:::

### Cubes

:::example[Somme et différence de deux cubes]
- $8x^3 - 27 = (2x)^3 - 3^3 = (2x-3)\big((2x)^2 + 2x \cdot 3 + 3^2\big) = (2x-3)(4x^2 + 6x + 9)$.
- $x^3 + 125 = (x+5)(x^2 - 5x + 25)$.
:::

### Groupement

:::example[Faire apparaître un facteur commun]
$$
x^3 - 27 - 2x + 6 = (x-3)(x^2+3x+9) - 2(x-3) = (x-3)\big[(x^2 + 3x + 9) - 2\big] = (x-3)(x^2+3x+7).
$$
On a reconnu une différence de deux cubes, $x^3 - 27 = (x-3)(x^2+3x+9)$, puis on a écrit $-2x + 6 = -2(x-3)$ : le facteur commun $(x-3)$ est apparu.
:::

### Le cube caché

:::example[Un cube décalé]
$x^3 + 6x^2 + 12x + 7$. Les trois premiers termes ressemblent à $(x+2)^3 = x^3 + 6x^2 + 12x + 8$ : il ne manque que $1$. Donc
$$
x^3 + 6x^2 + 12x + 7 = (x+2)^3 - 1 = \big((x+2) - 1\big)\big((x+2)^2 + (x+2) + 1\big) = (x+1)(x^2 + 5x + 7).
$$
:::

## 5. Prouver une égalité, ou une non-égalité

:::method[Trois façons de montrer que $A = B$]
1. **Développer les deux membres** et constater qu'on trouve la même chose.
2. **Partir d'un membre** et le transformer, en une chaîne d'égalités, jusqu'à l'autre.
3. **Calculer $A - B$** et montrer que c'est $0$.
:::

:::example[Un développement]
Pour tous réels $a$ et $b$ : $(a+b)^2 - (a-b)^2 = (a^2+2ab+b^2) - (a^2-2ab+b^2) = 4ab$.
:::

:::method[Montrer que $A \neq B$ en général]
Il suffit d'**un seul** contre-exemple, ou de montrer que $A - B$ n'est pas toujours nulle.

Soit $A(x) = x^3 - 8$ et $B(x) = (x-2)(x^2 + 2x + 3)$. En factorisant $A(x) = (x-2)(x^2+2x+4)$ :
$$
A(x) - B(x) = (x-2)\big[(x^2+2x+4) - (x^2+2x+3)\big] = x - 2.
$$
Cette différence ne vaut $0$ que pour $x = 2$. Contre-exemple : $A(0) = -8$ mais $B(0) = -6$.
:::

## 6. Équations, signes, fractions

La factorisation sert à **annuler** un produit, à lire un **signe**, à **simplifier** une fraction.

### Équation produit nul

:::property[Produit nul]
$$
a \times b = 0 \iff a = 0 \text{ ou } b = 0.
$$
:::

:::example[Un produit nul]
$x^3 - 4x = 0 \iff x(x-2)(x+2) = 0 \iff x = 0$ ou $x = 2$ ou $x = -2$. L'ensemble des solutions est $\{-2\,;\,0\,;\,2\}$.
:::

:::warning
Cette règle ne marche **que si le second membre est $0$**. De $x(x+1) = 4$ on ne peut pas conclure « $x = 4$ ou $x+1 = 4$ » : il faut d'abord se ramener à $0$ en écrivant $x^2 + x - 4 = 0$.
:::

:::example[Une équation du troisième degré qui n'a qu'une solution]
$x^3 = 27 \iff (x-3)(x^2 + 3x + 9) = 0$. Or $x^2 + 3x + 9 = \left(x + \dfrac32\right)^2 + \dfrac{27}{4} > 0$ : le second facteur ne s'annule jamais. Donc la seule solution est $x = 3$.
:::

### L'équation $x^2 = a$ et la valeur absolue

:::property[Ce qu'il faut savoir]
- $x^2 = a$ : si $a > 0$, deux solutions $x = \sqrt a$ ou $x = -\sqrt a$ ; si $a = 0$, $x = 0$ ; si $a < 0$, aucune solution.
- $\lvert t \rvert = t$ si $t \geq 0$ et $\lvert t \rvert = -t$ si $t \leq 0$. En particulier $\lvert t \rvert = t \iff t \geq 0$.
- Pour $c > 0$ : $\lvert t \rvert = c \iff t = c$ ou $t = -c$.
- $\lvert a \rvert = \lvert b \rvert \iff a^2 = b^2 \iff a = b$ ou $a = -b$.
:::

:::example[Deux valeurs absolues égales]
$\lvert 2x-1 \rvert = \lvert x+4 \rvert \iff (2x-1)^2 - (x+4)^2 = 0 \iff \big((2x-1)-(x+4)\big)\big((2x-1)+(x+4)\big) = 0$, soit $(x-5)(3x+3) = 0$.

D'où $x = 5$ ou $x = -1$. Contrôle : $\lvert 9 \rvert = \lvert 9 \rvert$ et $\lvert -3 \rvert = \lvert 3 \rvert$. ✓
:::

:::example[Une valeur absolue et un nombre]
$\lvert 4 - 3x \rvert = 8 \iff 4 - 3x = 8$ ou $4 - 3x = -8$, soit $x = -\dfrac43$ ou $x = 4$.
:::

### Le signe d'un produit

::::example[Étudier le signe de $x^3 - 4x$]
On factorise : $x^3 - 4x = x(x-2)(x+2)$, puis on étudie le signe de chaque facteur.

:::signs
| $x$ | $-\infty$ | | $-2$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $x+2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
| $x$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x-2$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x^3-4x$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

Donc $x^3 - 4x \geq 0 \iff x \in [-2\,;\,0] \cup [2\,;\,+\infty[$.
::::

### Simplifier une fraction

:::method[Fractions rationnelles]
1. Chercher les **valeurs interdites** : celles qui annulent le dénominateur.
2. **Factoriser** le numérateur et le dénominateur.
3. Simplifier les **facteurs** communs (jamais des termes).
:::

:::example[Simplifier avec une condition]
Pour $x \neq 1$ et $x \neq -1$ :
$$
\frac{x^3 - 1}{x^2 - 1} = \frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \frac{x^2+x+1}{x+1} = x + \frac{1}{x+1}.
$$
La dernière égalité vient de $x(x+1) + 1 = x^2 + x + 1$.
:::

:::warning
On simplifie un **facteur**, pas un **terme** : $\dfrac{x+3}{x}$ n'est **pas** égal à $3$. En revanche $\dfrac{2x+6}{x+3} = \dfrac{2(x+3)}{x+3} = 2$ pour $x \neq -3$.
:::

## 7. Calcul malin

Une identité remarquable lue dans le bon sens remplace une calculatrice.

| Calcul | Idée | Résultat |
|---|---|---|
| $1003 \times 997$ | $(1000+3)(1000-3) = 1000^2 - 3^2$ | $999\,991$ |
| $94^2 - 2 \times 94 \times 7 + 7^2$ | $(94-7)^2 = 87^2$ | $7\,569$ |
| $125^2 - 124^2$ | $(125-124)(125+124)$ | $249$ |

:::history[Le mot algèbre]
Al-Khawarizmi, savant arabe de Bagdad (vers 780-850), a écrit un traité sur le calcul d'*al-jabr* et d'*al-muqabala*. *Al-jabr* signifie « réparation » : passer un terme soustrait de l'autre côté de l'égalité, où il devient additif. *Al-muqabala* signifie « comparaison » : simplifier les termes semblables des deux membres. Du premier mot vient « algèbre » ; du nom de l'auteur, « algorithme ».
:::

## Vérifie-toi

::::check[Développer un cube]
Développer $(2x-3)^3$.

:::answer
$(2x)^3 - 3(2x)^2(3) + 3(2x)(3)^2 - 3^3 = 8x^3 - 36x^2 + 54x - 27$.
:::
::::

::::check[Factoriser]
Factoriser $x^4 - 1$ le plus possible.

:::answer
$x^4 - 1 = (x^2-1)(x^2+1) = (x-1)(x+1)(x^2+1)$. Le dernier facteur $x^2 + 1$ est strictement positif : on ne peut pas aller plus loin.
:::
::::

::::check[Deux valeurs absolues]
Résoudre $\lvert x-3 \rvert = \lvert 2x+1 \rvert$.

:::answer
$(x-3)^2 - (2x+1)^2 = (x-3-2x-1)(x-3+2x+1) = (-x-4)(3x-2) = 0$, donc $x = -4$ ou $x = \dfrac23$. Contrôle : $\lvert -7 \rvert = \lvert -7 \rvert$ et $\left\lvert -\frac73 \right\rvert = \left\lvert \frac73 \right\rvert$. ✓
:::
::::

::::check[Vrai ou faux ?]
« Pour tous réels $a$ et $b$, $(a+b)^3 = a^3 + b^3$. »

:::answer
**Faux.** Contre-exemple : $a = b = 1$ donne $(1+1)^3 = 8$ mais $1^3 + 1^3 = 2$. Il manque les termes $3a^2b + 3ab^2$.
:::
::::

::::challenge
Les réels $a$ et $b$ vérifient $a + b = 3$ et $ab = 1$. Calculer $a^2 + b^2$ puis $a^3 + b^3$.

:::answer
$a^2 + b^2 = (a+b)^2 - 2ab = 9 - 2 = 7$.

$(a+b)^3 = a^3 + b^3 + 3ab(a+b)$, donc $a^3 + b^3 = 27 - 3 \times 1 \times 3 = 18$.
:::
::::

:::summary
- **Développer** : produit $\to$ somme ; **factoriser** : somme $\to$ produit. On développe pour calculer ou comparer, on factorise pour résoudre ou étudier un signe.
- Second degré : $(a\pm b)^2 = a^2 \pm 2ab + b^2$ et $a^2 - b^2 = (a-b)(a+b)$.
- Troisième degré : $(a\pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$ et $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.
- Ordre de factorisation : facteur commun, puis nombre de termes (2, 3 ou 4), puis **vérifier** en redéveloppant.
- $ab = 0 \iff a = 0$ ou $b = 0$ (seulement si le second membre est $0$) ; $\lvert a \rvert = \lvert b \rvert \iff a^2 = b^2$.
- Une fraction ne se simplifie que par un **facteur**, avec ses valeurs interdites écartées.
:::
