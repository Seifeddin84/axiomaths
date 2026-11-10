---
title: "Divisibilité dans ℤ : diviseurs, division euclidienne, congruences"
slug: "lycee-4eme-maths-divisibilite-dans-z"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Divisibilité dans Z"
summary: "Diviseurs et multiples, division euclidienne avec entiers négatifs, congruences modulo n, calcul de restes de grandes puissances, tableaux de congruences, critères de divisibilité et petit théorème de Fermat."
prerequisites: ["Entiers naturels et relatifs", "Nombres premiers", "Partie entière d'un réel"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 7 « Divisibilité dans ℤ »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Regarde l'heure. Il est 22 h ; dans 5 h il sera 3 h. Personne n'écrit « 27 h ». On a gardé **le reste de la division par 24**. Presque toute l'arithmétique est cette idée : au lieu de manipuler des nombres énormes, on ne garde que ce qui reste quand on les range en paquets de même taille.

:::intuition
Il y a trois outils, et chacun fabrique le suivant. La **divisibilité** dit quand un partage tombe juste. La **division euclidienne** dit ce qu'il reste quand il ne tombe pas juste. Les **congruences** transforment ce « reste » en un nouveau calcul, qui obéit aux mêmes règles que l'addition et la multiplication, mais sur un cadran à $n$ positions.
:::

Dans tout le chapitre, $\mathbb N$ est l'ensemble des entiers naturels et $\mathbb Z$ celui des entiers relatifs.

## 1. Diviseurs et multiples

:::definition[Diviseur, multiple]
Soit $a$ un entier et $d$ un entier **non nul**. On dit que $d$ **divise** $a$, et on note $d \mid a$, s'il existe un entier $q$ tel que $a = dq$. On dit aussi que $a$ est **divisible par** $d$, ou que $a$ est un **multiple** de $d$.

L'ensemble des multiples de $d$ est $\{dq,\ q\in\mathbb Z\}$.
:::

Quelques réflexes : tout entier non nul $d$ divise $0$ (car $0 = d\times 0$) ; $1$ et $-1$ divisent tout entier ; si $d \mid a$ alors $-d \mid a$, donc les diviseurs d'un entier vont **par paires** $d$ et $-d$.

:::example[Les diviseurs d'un entier]
Les diviseurs de $12$ sont $\pm1,\ \pm2,\ \pm3,\ \pm4,\ \pm6,\ \pm12$. Ceux d'un nombre premier $p$ sont seulement $\pm1$ et $\pm p$.
:::

:::property[Règles de calcul]
Soit $a$, $b$, $c$ des entiers non nuls.

- Si $a \mid b$ et $b \mid a$, alors $a = b$ ou $a = -b$.
- Si $a \mid b$ et $b \mid c$, alors $a \mid c$ (transitivité).
- Si $a \mid b$ et $a \mid c$, alors $a \mid \alpha b + \beta c$ pour tous entiers $\alpha$ et $\beta$ (combinaison linéaire).
:::

:::proof[Combinaison linéaire]
| Étape | Justification |
|---|---|
| Il existe $q_1$ et $q_2$ entiers tels que $b = aq_1$ et $c = aq_2$ | $a \mid b$ et $a \mid c$ |
| $\alpha b + \beta c = a\,(\alpha q_1 + \beta q_2)$ | on met $a$ en facteur |
| $\alpha q_1 + \beta q_2$ est un entier | somme et produits d'entiers |
| donc $a \mid \alpha b + \beta c$ | définition de la divisibilité |
:::

:::method[Quand $n + p$ divise une expression en $n$]
On fait apparaître $n + p$ dans l'expression pour se ramener à un **diviseur d'un nombre fixe**.

Cherchons tous les entiers $n \neq 2$ tels que $n - 2 \mid n + 7$. On écrit $n + 7 = (n - 2) + 9$. Comme $n - 2 \mid n - 2$, on a $n - 2 \mid n + 7$ si et seulement si $n - 2 \mid 9$. Les diviseurs de $9$ sont $\pm1,\ \pm3,\ \pm9$, donc $n - 2 \in \{-9,\,-3,\,-1,\,1,\,3,\,9\}$, soit
$$
n \in \{-7,\ -1,\ 1,\ 3,\ 5,\ 11\}.
$$
Contrôle : pour $n = -7$, $n - 2 = -9$ divise $n + 7 = 0$ ✓ ; pour $n = 5$, $3 \mid 12$ ✓.
:::

## 2. Division euclidienne

### Le quotient et le reste

On partage $a$ en paquets de $b$. Quand $a$ et $b$ sont positifs, c'est la division de l'école primaire. Avec des entiers négatifs, il faut une règle qui ne laisse pas de place au doute.

:::definition[Quotient et reste]
Soit $a$ un entier et $b$ un entier non nul. Le **quotient** de $a$ par $b$ est l'entier $q$ défini ainsi :

- si $b > 0$ : $q$ est le plus grand entier inférieur ou égal à $\dfrac{a}{b}$ (la partie entière de $\dfrac{a}{b}$) ;
- si $b < 0$ : $q$ est le plus petit entier supérieur ou égal à $\dfrac{a}{b}$.

Le **reste** est l'entier $r = a - bq$.
:::

:::theorem[Division euclidienne]
Pour tout entier $a$ et tout entier $b \neq 0$, il existe un unique couple d'entiers $(q,r)$ tel que
$$
a = bq + r \qquad\text{et}\qquad 0 \leq r < \lvert b\rvert.
$$
:::

:::proof[Existence et unicité]
| Étape | Justification |
|---|---|
| **Existence, $b > 0$.** Soit $q = \left\lfloor\dfrac{a}{b}\right\rfloor$ ; alors $q \leq \dfrac{a}{b} < q + 1$ | définition de la partie entière |
| donc $bq \leq a < bq + b$, soit $0 \leq a - bq < b$ | on multiplie par $b > 0$ |
| **Existence, $b < 0$.** On applique le cas précédent à $-b > 0$ : $a = (-b)q' + r$ avec $0 \leq r < -b$ | cas précédent |
| donc $a = b(-q') + r$ avec $0 \leq r < \lvert b\rvert$ | $-b = \lvert b\rvert$ |
| **Unicité.** Si $a = bq + r = bq' + r'$ avec $0 \leq r, r' < \lvert b\rvert$, alors $b(q - q') = r' - r$ | on soustrait |
| $\lvert b\rvert\,\lvert q - q'\rvert = \lvert r' - r\rvert < \lvert b\rvert$, donc $\lvert q - q'\rvert < 1$ | $r$ et $r'$ sont dans $[0\,;\lvert b\rvert[$ |
| donc $q = q'$ puis $r = r'$ | $q - q'$ est un entier |
:::

:::warning
**Le reste est toujours positif ou nul**, même quand $a$ est négatif. La division de $-17$ par $5$ donne $-17 = 5\times(-4) + 3$, pas $-17 = 5\times(-3) - 2$ : le second reste serait $-2$, qui n'est pas dans $\{0,\dots,4\}$.
:::

![Division euclidienne de -17 par 5](/lessons/images/m4-division-euclidienne.svg "Sur la droite des entiers, -17 est compris entre les multiples de 5 qui l'encadrent, -20 et -15. Le quotient est -4 (on part du multiple situé juste en dessous de a) et le reste r = 3 se mesure à partir de ce multiple, vers la droite.")

:::example[Quotient et reste avec des signes]
- $a = -17$, $b = 5$ : $-\dfrac{17}{5} = -3{,}4$, partie entière $-4$, donc $q = -4$ et $r = -17 - 5\times(-4) = 3$.
- $a = 23$, $b = -7$ : $\dfrac{23}{-7} \approx -3{,}29$, le plus petit entier supérieur ou égal est $-3$, donc $q = -3$ et $r = 23 - (-7)(-3) = 2$. Contrôle : $23 = (-7)(-3) + 2$ avec $0 \leq 2 < 7$ ✓.
- $a = -100$, $b = 7$ : $q = -15$ et $r = 5$, car $7\times(-15) = -105$ et $-100 - (-105) = 5$.
:::

La conséquence la plus utile : **le reste d'un entier dans la division par $b$ est l'un des $\lvert b\rvert$ entiers $0, 1, \dots, \lvert b\rvert - 1$.** Dans la division par $2$, le reste est $0$ (entier pair) ou $1$ (entier impair).

## 3. Congruences modulo $n$

### Définition

On a vu qu'on raisonne souvent **par cas sur le reste**. Les congruences donnent une notation qui permet de calculer avec les restes sans écrire à chaque fois une division.

:::definition[Congruence]
Soit $n$ un entier naturel non nul et $a$, $b$ deux entiers. On dit que $a$ est **congru à $b$ modulo $n$**, et on note
$$
a \equiv b \pmod n,
$$
si $a - b$ est un multiple de $n$.
:::

:::theorem[Congruent $\iff$ même reste]
Deux entiers sont congrus modulo $n$ si et seulement si ils ont **le même reste** dans la division euclidienne par $n$. En particulier, tout entier $a$ est congru modulo $n$ à un unique entier $r \in \{0, 1, \dots, n-1\}$, son **reste modulo $n$**.
:::

:::proof[Même reste]
| Étape | Justification |
|---|---|
| Écrivons $a = nq + r$ et $b = nq' + r'$ avec $0 \leq r, r' < n$ | division euclidienne |
| $a - b = n(q - q') + (r - r')$ | on soustrait |
| $n \mid a - b \iff n \mid r - r'$ | $n \mid n(q - q')$ |
| $-n < r - r' < n$, donc $n \mid r - r' \iff r - r' = 0$ | le seul multiple de $n$ strictement compris entre $-n$ et $n$ est $0$ |
:::

:::example[Vrai ou faux ?]
- $31 \equiv 3 \pmod 7$ : vrai, car $31 - 3 = 28 = 7\times 4$.
- $2 \equiv -2 \pmod 4$ : vrai, car $2 - (-2) = 4$.
- $914 \equiv 21 \pmod{19}$ : $914 - 21 = 893 = 19\times 47$, vrai.
- $19 \equiv 124 \pmod{11}$ : faux. On calcule les restes : $19 = 11 + 8$ donne $8$, et $124 = 11\times 11 + 3$ donne $3$. (Et $124 - 19 = 105$ n'est pas un multiple de $11$.) En revanche $-129 \equiv 124 \pmod{11}$, car $-129 = 11\times(-12) + 3$.
:::

### Calculer avec les congruences

:::property[Compatibilité]
Soit $n \geq 1$ et $a \equiv b \pmod n$, $c \equiv d \pmod n$. Alors
$$
a + c \equiv b + d \pmod n,\qquad a c \equiv b d \pmod n,\qquad a^m \equiv b^m \pmod n\ \ (m \in \mathbb N^*).
$$
Et la relation « $\equiv \pmod n$ » est **réflexive** ($a \equiv a$), **symétrique** ($a \equiv b \Rightarrow b \equiv a$) et **transitive** ($a \equiv b$ et $b \equiv c \Rightarrow a \equiv c$).
:::

:::proof[Congruence d'un produit]
| Étape | Justification |
|---|---|
| $ac - bd = (a - b)\,c + b\,(c - d)$ | on développe : $ac - bc + bc - bd$ |
| $n \mid a - b$ donc $n \mid (a - b)c$ | $a \equiv b \pmod n$ |
| $n \mid c - d$ donc $n \mid b(c - d)$ | $c \equiv d \pmod n$ |
| donc $n \mid ac - bd$ | somme de deux multiples de $n$ |
:::

Le cas des puissances se déduit par récurrence : $a^{m+1} = a^m\cdot a$.

### Le cadran à $n$ positions

![Cycle de la multiplication par 2 modulo 7](/lessons/images/m4-horloge.svg "Modulo 7, multiplier par 2 envoie 1 sur 2, 2 sur 4, 4 sur 1 : un cycle de longueur 3. Les restes 3, 6, 5 forment un second cycle, et 0 reste à sa place.")

Les puissances de $2$ modulo $7$ **bouclent** : $2^0 \equiv 1$, $2^1 \equiv 2$, $2^2 \equiv 4$, $2^3 \equiv 8 \equiv 1$, puis tout recommence. C'est la clé pour calculer un reste de grande puissance.

:::method[Reste d'une grande puissance]
1. Calculer les premières puissances modulo $n$ jusqu'à retrouver $1$ (ou un reste déjà vu) : la longueur du cycle est $p$.
2. Écrire l'exposant $m = pq + s$ (division euclidienne par $p$).
3. $a^m = (a^p)^q\cdot a^s \equiv 1^q\cdot a^s = a^s \pmod n$.
:::

:::example[Le reste de $2^{2024}$ modulo $7$]
Comme $2^3 = 8 \equiv 1 \pmod 7$, on divise l'exposant par $3$ : $2024 = 3\times 674 + 2$. Donc
$$
2^{2024} = \left(2^3\right)^{674}\times 2^2 \equiv 1^{674}\times 4 = 4 \pmod 7.
$$
Le reste est $4$.
:::

:::example[Un reste avec un cycle plus long]
Les puissances de $3$ modulo $7$ sont $3,\ 2,\ 6,\ 4,\ 5,\ 1$ : le cycle a pour longueur $6$. Comme $100 = 6\times 16 + 4$, on a $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.
:::

:::example[Démontrer qu'un entier est divisible par $5$]
Montrons que pour tout entier naturel $n$, $5$ divise $2^{4n+1} + 3$. On a $2^4 = 16 \equiv 1 \pmod 5$, donc $2^{4n} = (2^4)^n \equiv 1 \pmod 5$ et $2^{4n+1} \equiv 2 \pmod 5$. Alors $2^{4n+1} + 3 \equiv 2 + 3 = 5 \equiv 0 \pmod 5$ : c'est un multiple de $5$.
:::

### Les tableaux de congruences

Quand on ne peut pas faire apparaître un cycle, on **épuise les cas** : un entier modulo $n$ n'a que $n$ restes possibles, donc il suffit de $n$ vérifications.

:::example[$n^3 - n$ est un multiple de $6$]
On passe en revue les restes de $n$ modulo $6$ :

| Reste de $n$ modulo $6$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Valeur de $r^3 - r$ | $0$ | $0$ | $6$ | $24$ | $60$ | $120$ |
| Reste de $n^3 - n$ modulo $6$ | $0$ | $0$ | $0$ | $0$ | $0$ | $0$ |

Dans les six cas, le reste est $0$ : pour tout entier $n$, $6 \mid n^3 - n$. (On peut remplacer $n$ par son reste $r$, car $n \equiv r$ entraîne $n^3 - n \equiv r^3 - r \pmod 6$.)
:::

:::example[Une équation sans solution]
Montrons que $x^2 + y^2 = 4k + 3$ n'a aucune solution entière, quel que soit l'entier $k$. Modulo $4$ :

| Reste de $x$ modulo $4$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Reste de $x^2$ modulo $4$ | $0$ | $1$ | $0$ | $1$ |

Un carré est congru à $0$ ou $1$ modulo $4$, donc une somme de deux carrés est congrue à $0$, $1$ ou $2$, **jamais à $3$**. Par exemple, $2023 = 4\times 505 + 3$ n'est pas la somme de deux carrés.
:::

### Pièges

:::warning
Les congruences sont **compatibles** avec l'addition et la multiplication. Elles ne le sont pas avec tout :

- On ne **simplifie pas** : $2\times 7 \equiv 2\times 2 \pmod{10}$ (car $14 \equiv 4$), mais $7 \not\equiv 2 \pmod{10}$.
- Un produit peut être nul sans qu'aucun facteur le soit : $2\times 2 \equiv 0 \pmod 4$, avec $2 \not\equiv 0$.
- On ne réduit pas l'**exposant** modulo $n$, mais modulo la **longueur du cycle**. Modulo $11$, les puissances de $2$ bouclent au bout de $10$ crans ($2^{10} \equiv 1$), donc $2^{14} \equiv 2^{4} = 16 \equiv 5$. Réduire $14$ modulo $11$ donnerait $2^3 = 8$ : faux.
:::

### Critères de divisibilité

Comme $10 \equiv 1 \pmod 9$, on a $10^k \equiv 1 \pmod 9$ pour tout $k$, donc un entier est congru modulo $9$ (et modulo $3$) à la **somme de ses chiffres**. Comme $10 \equiv -1 \pmod{11}$, un entier est congru modulo $11$ à la somme **alternée** de ses chiffres, en commençant par les unités avec le signe $+$.

:::example[$48\,576$]
Somme des chiffres : $4 + 8 + 5 + 7 + 6 = 30$ ; $30$ est un multiple de $3$ mais pas de $9$, donc $48\,576$ est divisible par $3$ et pas par $9$. Somme alternée : $6 - 7 + 5 - 8 + 4 = 0$, donc $48\,576$ est divisible par $11$ (et en effet $48\,576 = 11\times 4416$).
:::

### Le petit théorème de Fermat

:::theorem[Théorème de Fermat]
Si $p$ est un nombre premier et $a$ un entier que $p$ ne divise pas, alors
$$
a^{p-1} \equiv 1 \pmod p.
$$
:::

Ce théorème est admis dans le manuel. Il garantit que le cycle des puissances de $a$ modulo $p$ a une longueur qui **divise $p - 1$**.

:::example[Une puissance modulo $13$]
$13$ est premier et ne divise pas $2$, donc $2^{12} \equiv 1 \pmod{13}$. Comme $100 = 12\times 8 + 4$, on a $2^{100} \equiv 2^4 = 16 \equiv 3 \pmod{13}$.
:::

:::history
La notation $\equiv$ est due à Gauss, qui l'introduit en 1801 dans ses *Disquisitiones arithmeticae*. Le petit théorème de Fermat, énoncé par celui-ci dans une lettre de 1640, a reçu sa première preuve publiée d'Euler, dans les années 1730.
:::

## 4. Méthodes pour les exercices

| Question | Outil |
|---|---|
| Montrer que $d$ divise une expression | combinaison linéaire, ou congruence : l'expression $\equiv 0 \pmod d$ |
| Trouver les $n$ tels que $n + p$ divise $an + b$ | écrire $an + b = a(n+p) + (b - ap)$ et se ramener aux diviseurs de $b - ap$ |
| Division euclidienne avec $a$ ou $b$ négatif | le reste est dans $\{0,\dots,\lvert b\rvert - 1\}$ : calculer $q$ par la partie entière |
| Reste de $a^m$ modulo $n$ | cycle des puissances, puis division de $m$ par la longueur du cycle |
| Prouver une propriété « pour tout $n$ » | tableau des restes de $n$ modulo $m$ |
| Prouver qu'une équation n'a pas de solution | trouver un module où les restes possibles ne conviennent pas |
| Premier $p$ | Fermat : $a^{p-1} \equiv 1 \pmod p$ si $p \nmid a$ |

## Vérifie-toi

::::check[Division euclidienne]
Écrire la division euclidienne de $-100$ par $7$.

:::answer
$-\dfrac{100}{7} \approx -14{,}29$, partie entière $-15$, donc $q = -15$ et $r = -100 - 7\times(-15) = 5$ : $-100 = 7\times(-15) + 5$ avec $0 \leq 5 < 7$.
:::
::::

::::check[Diviseurs]
Déterminer tous les entiers $n \neq -1$ tels que $n + 1$ divise $2n + 7$.

:::answer
$2n + 7 = 2(n+1) + 5$, donc $n + 1 \mid 2n + 7 \iff n + 1 \mid 5$. Les diviseurs de $5$ sont $\pm1$ et $\pm5$ : $n + 1 \in \{-5,-1,1,5\}$, soit $n \in \{-6,\,-2,\,0,\,4\}$. Contrôle : $n = 4$ donne $5 \mid 15$ ✓.
:::
::::

::::check[Reste d'une puissance]
Quel est le reste de $3^{50}$ dans la division par $8$ ?

:::answer
$3^2 = 9 \equiv 1 \pmod 8$, donc $3^{50} = (3^2)^{25} \equiv 1^{25} = 1 \pmod 8$. Le reste est $1$.
:::
::::

::::check[Tableau de congruences]
Montrer que, pour tout entier $n$, le produit $n(n+1)(n+2)$ est un multiple de $3$.

:::answer
On regarde le reste de $n$ modulo $3$. S'il vaut $0$, $3 \mid n$. S'il vaut $1$, alors $n + 2 \equiv 3 \equiv 0$. S'il vaut $2$, alors $n + 1 \equiv 3 \equiv 0$. Dans les trois cas, un des facteurs est un multiple de $3$, donc le produit aussi.
:::
::::
