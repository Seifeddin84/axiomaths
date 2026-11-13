---
title: "Suites arithmétiques et géométriques"
slug: "lycee-2eme-suites-arithmetiques-et-geometriques"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Informatique"]
chapter: "Suites arithmétiques et géométriques"
summary: "Ajouter toujours la même chose (suite arithmétique) ou multiplier toujours par le même facteur (suite géométrique) : termes généraux, sommes, et la technique de la suite auxiliaire qui ramène une suite compliquée à l'une des deux."
prerequisites: ["Calcul dans IR", "Puissances", "Fonctions affines"]
source: "Manuel officiel 2ème année, Tome 2, chapitres 1 et 2"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

Un loyer de $200$ dinars augmente de $5\,\%$ chaque année. Un puits coûte $50$ dinars le premier mètre, puis **$10$ dinars de plus** à chaque mètre. Dans les deux cas le prix « grandit » d'une année ou d'un mètre à l'autre, mais pas de la même façon :

- le loyer **est multiplié** par $1{,}05$ : $200 \to 210 \to 220{,}5 \to 231{,}525 \to 243{,}10\ldots$ ; il dépasse $240$ dinars la **quatrième** année après la première (en 2009 si le premier loyer est de 2005) ;
- le prix du mètre **augmente de $10$** : $50, 60, 70, \ldots$. Creuser $15$ m coûte $1\,800$ dinars (réponse à la [section 3](#3-sommes-de-termes-consecutifs)), et avec $1\,000$ dinars on atteint $10$ m.

:::intuition
Il n'existe que deux façons « régulières » de faire évoluer un nombre.

- **Ajouter toujours la même quantité** $r$ : suite **arithmétique**. Les points $(n\,;U_n)$ sont **alignés**.
- **Multiplier toujours par le même facteur** $q$ : suite **géométrique**. Les points $(n\,;U_n)$ forment une courbe qui s'envole (si $q > 1$) ou s'écrase vers $0$ (si $0 < q < 1$).

Quand une suite n'est ni l'une ni l'autre, on cherche à l'**habiller** d'une suite auxiliaire qui, elle, l'est (section 6).
:::

![Suite arithmétique et suite géométrique](/lessons/images/suites-croissance.svg "À gauche, une suite arithmétique de raison 2 : les points sont alignés. À droite, une suite géométrique de raison 1,5 : la croissance s'accélère.")

## 1. Qu'est-ce qu'une suite ?

:::definition[Suite]
Une **suite** de nombres réels associe à chaque entier naturel $n \geq n_0$ un réel unique $U_n$, appelé **terme général**. On la note $(U_n)$.
:::

On peut la définir de deux façons :

- **Par son terme général** : $U_n = n^2 - 3n$ donne directement $U_0 = 0$, $U_{10} = 70$, $U_{n+1} = (n+1)^2 - 3(n+1)$, $U_{2n} = 4n^2 - 6n$.
- **Par récurrence** : on donne le premier terme et une **relation** qui fournit chaque terme à partir du précédent. Par exemple $t_0 = 2$ et $t_{n+1} = t_n - 3$ donne $2, -1, -4, -7, \ldots$

:::warning[Indice $\neq$ valeur]
$U_{n+1}$ est le terme **suivant** $U_n$ ; ce n'est pas $U_n + 1$. De même $U_{2n}$ est le terme d'indice $2n$ : on remplace $n$ par $2n$ **partout** dans la formule.
:::

## 2. Suites arithmétiques

:::definition[Suite arithmétique]
Une suite $(U_n)$ est **arithmétique** s'il existe un réel $r$ tel que pour tout entier $n$ : $\ U_{n+1} = U_n + r$. Le réel $r$ est la **raison**.
:::

:::theorem[Terme général]{wiki="Terme général d'une suite arithmétique"}
Si $(U_n)$ est arithmétique de premier terme $U_0$ et de raison $r$, alors
$$
U_n = U_0 + n\,r .
$$
Plus généralement, $U_n = U_p + (n - p)\,r$ pour tous entiers $n$ et $p$.
:::

:::proof[$U_n = U_0 + nr$]
On écrit la définition pour chaque indice, puis on **additionne membre à membre**.

| Étape | Justification |
|---|---|
| $U_1 = U_0 + r$, $\ U_2 = U_1 + r$, $\ \ldots,\ U_n = U_{n-1} + r$ | définition appliquée $n$ fois |
| $U_1 + U_2 + \cdots + U_n = U_0 + U_1 + \cdots + U_{n-1} + \textcolor{#ea580c}{n\,r}$ | somme des $n$ égalités : chaque $r$ s'ajoute |
| $U_n = U_0 + n\,r$ | on simplifie les termes $U_1, \ldots, U_{n-1}$ des deux côtés |
:::

**Représentation graphique.** Les points $A_n(n\,;U_n)$ sont sur la droite d'équation $y = rx + U_0$ : pente $r$, ordonnée à l'origine $U_0$. Réciproquement, si $U_n = an + b$, alors $U_{n+1} - U_n = a$ : c'est une suite arithmétique de raison $a$ et de premier terme $b$.

:::remark[Sens de variation]
Si $r > 0$ la suite est croissante, si $r < 0$ elle est décroissante, si $r = 0$ elle est constante.
:::

:::example[Retrouver la raison avec deux termes]
$(U_n)$ est arithmétique avec $U_{15} = -12$ et $U_{24} = 15$. Entre les indices $15$ et $24$, on a fait $9$ pas de longueur $r$ : $U_{24} = U_{15} + 9r$, donc $r = \dfrac{15 - (-12)}{9} = 3$, puis $U_0 = U_{15} - 15r = -12 - 45 = -57$. Contrôle : $U_{24} = -57 + 24 \times 3 = 15$ ✓.
:::

:::property[Trois termes consécutifs]
Trois réels $a$, $b$, $c$ sont des termes consécutifs d'une suite arithmétique si et seulement si $a + c = 2b$ (**$b$ est la moyenne** de $a$ et $c$), car alors $b - a = c - b$.
:::

## 3. Sommes de termes consécutifs

:::theorem[Somme arithmétique]
La somme $S$ de $n$ termes consécutifs d'une suite arithmétique est
$$
S = n \times \frac{a + b}{2} ,
$$
c'est-à-dire (nombre de termes) $\times$ (premier terme $+$ dernier terme) $\div\, 2$, où $a$ est le premier terme et $b$ le dernier terme de la somme. En particulier, $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$.
:::

:::proof[L'astuce de Gauss]
Soit $S = a + (a + r) + \cdots + (b - r) + b$ avec $n$ termes.

| Étape | Justification |
|---|---|
| $S = a + (a+r) + \cdots + (b - r) + b$ | on range du premier au dernier |
| $S = b + (b - r) + \cdots + (a + r) + a$ | on range du dernier au premier |
| $2S = (a + b) + (a + b) + \cdots + (a + b)$, avec $n$ fois $(a+b)$ | on additionne les deux lignes **colonne par colonne** : le $+r$ de l'une compense le $-r$ de l'autre |
| $S = \dfrac{n\,(a+b)}{2}$ | on divise par $2$ |
:::

:::warning[Compter les termes]
La somme $U_p + U_{p+1} + \cdots + U_q$ contient $q - p + 1$ termes, pas $q - p$. Par exemple, $U_{45} + \cdots + U_{381}$ a $381 - 45 + 1 = 337$ termes.
:::

:::example[Quatre sommes]
- $1 + 2 + \cdots + 100 = \dfrac{100 \times 101}{2} = 5050$.
- $500 + 501 + \cdots + 2000$ a $2000 - 500 + 1 = 1501$ termes : $S = 1501 \times \dfrac{500 + 2000}{2} = 1501 \times 1250 = 1\,876\,250$.
- $1 + 3 + 5 + \cdots + 75$ : les termes $2k + 1$ vont de $k = 0$ à $k = 37$, soit $38$ termes, donc $S = 38 \times \dfrac{1 + 75}{2} = 38^2 = 1444$.
- **Le puits** : les prix $50, 60, \ldots$ forment une suite arithmétique de raison $10$. Le $15^{\text{e}}$ mètre coûte $50 + 14 \times 10 = 190$, donc $15$ m coûtent $15 \times \dfrac{50 + 190}{2} = 1800$ dinars. Pour $n$ mètres le coût est $5n(n + 9)$ : $950$ dinars pour $n = 10$, $1100$ pour $n = 11$. Avec $1000$ dinars on creuse donc $10$ m ✓.
:::

## 4. Suites géométriques

:::definition[Suite géométrique]
Une suite $(U_n)$ est **géométrique** s'il existe un réel $q$ tel que pour tout entier $n$ : $\ U_{n+1} = q\,U_n$. Le réel $q$ est la **raison**.
:::

:::theorem[Terme général]{wiki="Terme général d'une suite géométrique"}
Si $(U_n)$ est géométrique de premier terme $U_0$ et de raison $q \neq 0$, alors
$$
U_n = U_0\,q^n .
$$
Plus généralement, $U_n = U_p\,q^{\,n-p}$ pour tous entiers $n$ et $p$.
:::

:::proof[$U_n = U_0\,q^n$]
On **multiplie membre à membre** les égalités de la définition.

| Étape | Justification |
|---|---|
| $U_1 = q\,U_0$, $\ U_2 = q\,U_1$, $\ \ldots,\ U_n = q\,U_{n-1}$ | définition appliquée $n$ fois |
| $U_1 U_2 \cdots U_n = \textcolor{#ea580c}{q^n}\,U_0 U_1 \cdots U_{n-1}$ | produit des $n$ égalités |
| $U_n = q^n\,U_0$ | on simplifie $U_1, \ldots, U_{n-1}$ (supposés non nuls) |
:::

:::property[Trois termes consécutifs et variations]
- Trois réels non nuls $a, b, c$ sont des termes consécutifs d'une suite géométrique si et seulement si $b^2 = a\,c$.
- Pour $U_0 > 0$ : si $q > 1$ la suite est **croissante** ; si $0 < q < 1$ elle est **décroissante** ; si $q < 0$ les signes **alternent**.
:::

:::example[Trouver la raison avec deux termes]
$U_4 = 25$ et $U_{11} = 1\,953\,125$. Alors $U_{11} = U_4\,q^7$, donc $q^7 = \dfrac{1\,953\,125}{25} = 78\,125 = 5^7$, d'où $q = 5$. Contrôle : $25 \times 5^7 = 1\,953\,125$ ✓.

**Attention à la parité de l'exposant.** Si $V_0 = -6$ et $V_8 = -1536$, alors $q^8 = \frac{-1536}{-6} = 256 = 2^8$, donc $q = 2$ **ou** $q = -2$ : les deux conviennent, car l'exposant $8$ est pair. Avec un exposant impair il n'y a qu'une seule solution réelle.
:::

## 5. Sommes géométriques

:::theorem[Somme géométrique]
Pour $q \neq 1$ et $n$ entier naturel :
$$
1 + q + q^2 + \cdots + q^n = \frac{1 - q^{n+1}}{1 - q} .
$$
La somme de $n$ termes consécutifs d'une suite géométrique de raison $q \neq 1$ est
$$
S = (\text{premier terme de la somme}) \times \frac{1 - q^{\,n}}{1 - q} .
$$
Si $q = 1$, tous les termes sont égaux et $S = n \times (\text{premier terme})$.
:::

:::proof[$1 + q + \cdots + q^n$]
Posons $S = 1 + q + q^2 + \cdots + q^n$.

| Étape | Justification |
|---|---|
| $qS = q + q^2 + \cdots + q^n + q^{n+1}$ | on multiplie $S$ par $q$ |
| $S - qS = 1 - q^{n+1}$ | tous les termes de $q$ à $q^n$ **se détruisent** |
| $S\,(1 - q) = 1 - q^{n+1}$ | on factorise $S$ |
| $S = \dfrac{1 - q^{n+1}}{1 - q}$ | on divise par $1 - q \neq 0$ |
:::

:::example[Trois sommes]
- **Quitte ou double.** A propose à B : A donne $100$ dinars par jour pendant $10$ jours, B donne $1, 2, 4, \ldots$ en doublant chaque jour. B paie $1 + 2 + \cdots + 2^9 = \dfrac{1 - 2^{10}}{1 - 2} = 1023$ dinars et reçoit $1000$ : B **perd** $23$ dinars, il refuse.
- $27 + 81 + 243 + \cdots + 19\,683 = 3^3 + \cdots + 3^9$ : $7$ termes, premier terme $27$, raison $3$, donc $S = 27 \times \dfrac{1 - 3^7}{1 - 3} = 27 \times 1093 = 29\,511$.
- $(V_n)$ géométrique avec $V_0 = 5$ et $q = \frac12$ : $V_0 + \cdots + V_6$ a $7$ termes, donc $S = 5 \times \dfrac{1 - (\frac12)^7}{1 - \frac12} = 10 \times \dfrac{127}{128} = \dfrac{635}{64} \approx 9{,}92$.
:::

## 6. La suite auxiliaire : quand une suite n'est ni arithmétique ni géométrique

La plupart des exercices du chapitre commencent par : « montrer que la suite $(U_n)$ n'est ni arithmétique ni géométrique », puis on introduit une suite $(V_n)$ qui, elle, l'est.

:::method[Montrer que $(U_n)$ n'est ni arithmétique ni géométrique]
Calculer $U_0$, $U_1$, $U_2$ et vérifier que
- $U_1 - U_0 \neq U_2 - U_1$ (donc pas arithmétique) **et**
- $\dfrac{U_1}{U_0} \neq \dfrac{U_2}{U_1}$ (donc pas géométrique).

Un seul contre-exemple suffit, mais il faut **les deux**.
:::

:::method[Exploiter la suite auxiliaire]
Le sujet donne $V_n$ en fonction de $U_n$. Alors :
1. **Calculer $V_{n+1}$** en remplaçant $U_{n+1}$ par sa définition (la relation de récurrence).
2. **Simplifier et factoriser** jusqu'à reconnaître $V_{n+1} = q\,V_n$ (géométrique) ou $V_{n+1} = V_n + r$ (arithmétique). Les coefficients sont **les mêmes pour tout $n$**.
3. Donner **le premier terme** de $(V_n)$ et écrire $V_n$ avec le terme général.
4. **Revenir à $U_n$** en résolvant la définition de $V_n$ par rapport à $U_n$.
:::

Voici les cinq grandes familles.

### 6.1 Suite arithmético-géométrique : $U_{n+1} = a\,U_n + b$

L'idée : trouver le **point fixe** $\ell$ tel que $\ell = a\ell + b$, c'est-à-dire $\ell = \dfrac{b}{1 - a}$ (pour $a \neq 1$). La quantité $U_n - \ell$ mesure l'écart à ce point fixe, et la relation multiplie cet écart par $a$ à chaque pas.

:::proof[$V_n = U_n - \ell$ est géométrique de raison $a$]
| Étape | Justification |
|---|---|
| $V_{n+1} = U_{n+1} - \ell = a\,U_n + b - \ell$ | définition de $V_n$ et de la récurrence |
| $b - \ell = -a\,\ell$ | car $\ell = a\ell + b$ |
| $V_{n+1} = a\,U_n - a\,\ell = \textcolor{#ea580c}{a}\,(U_n - \ell) = a\,V_n$ | on factorise $a$ |
:::

:::example[$U_0 = 5$ et $U_{n+1} = 3U_n - 4$]
Les premiers termes sont $5, 11, 29$ : $11 - 5 = 6 \neq 29 - 11 = 18$ et $\frac{11}{5} \neq \frac{29}{11}$, donc ni arithmétique ni géométrique. Point fixe : $\ell = \frac{-4}{1 - 3} = 2$. On pose $V_n = U_n - 2$ : $(V_n)$ est géométrique de raison $3$ et de premier terme $V_0 = 3$, donc $V_n = 3 \times 3^n = 3^{n+1}$ et
$$
U_n = 3^{n+1} + 2 .
$$
Contrôle : $U_1 = 9 + 2 = 11$ ✓, $U_2 = 27 + 2 = 29$ ✓, $U_3 = 83 = 3 \times 29 - 4$ ✓.
:::

Autre exemple : $U_0 = 4$ et $U_{n+1} = \frac12 U_n + 3$ : $\ell = \frac{3}{1/2} = 6$, $V_n = U_n - 6$ est géométrique de raison $\frac12$ avec $V_0 = -2$, donc $U_n = 6 - 2\left(\tfrac12\right)^n$. La suite se rapproche du point fixe $6$.

### 6.2 Suite homographique : $U_{n+1} = \dfrac{\alpha\,U_n + \beta}{\gamma\,U_n + \delta}$

C'est le cas où le sujet donne $V_n = \dfrac{1}{U_n}$ ou $V_n = \dfrac{U_n - \ell_1}{U_n - \ell_2}$ (les $\ell_i$ étant les points fixes). On fait le calcul de l'étape 1 avec **une seule fraction**.

:::example[Une suite $V_n = \frac{1}{U_n}$ arithmétique]
$U_0 = 1$ et $U_{n+1} = \dfrac{U_n}{1 + 3U_n}$. Avec $V_n = \dfrac{1}{U_n}$ :
$$
V_{n+1} = \frac{1 + 3U_n}{U_n} = \frac{1}{U_n} + 3 = V_n + 3 .
$$
$(V_n)$ est arithmétique de raison $3$ et de premier terme $V_0 = 1$ : $V_n = 1 + 3n$ et $U_n = \dfrac{1}{1 + 3n}$. Contrôle : $U_1 = \frac{1}{1+3} = \frac14$ ✓, $U_2 = \frac{1/4}{1 + 3/4} = \frac17$ ✓.
:::

:::example[Une suite $V_n = \frac{U_n - 1}{U_n}$ géométrique]
$U_0 = 2$ et $U_{n+1} = \dfrac{3U_n}{U_n + 2}$. Les points fixes sont $0$ et $1$. Avec $V_n = \dfrac{U_n - 1}{U_n}$ :
$$
\begin{aligned}
V_{n+1} &= \frac{U_{n+1} - 1}{U_{n+1}} = \frac{\dfrac{3U_n - U_n - 2}{U_n + 2}}{\dfrac{3U_n}{U_n + 2}}\\
&= \frac{2U_n - 2}{3U_n} = \frac{2}{3}\cdot \frac{U_n - 1}{U_n} = \frac23\,V_n .
\end{aligned}
$$
$(V_n)$ est géométrique de raison $\frac23$ et de premier terme $V_0 = \frac12$ : $V_n = \frac12\left(\frac23\right)^n$. Pour revenir à $U_n$ : $V_n = 1 - \frac{1}{U_n}$, donc $U_n = \dfrac{1}{1 - V_n}$ :
$$
U_n = \frac{1}{1 - \frac12\left(\frac23\right)^n} .
$$
Contrôle : $U_1 = \frac{1}{1 - 1/3} = \frac32 = \frac{3 \times 2}{2 + 2}$ ✓ et $U_2 = \frac{1}{1 - 2/9} = \frac97$ ✓.
:::

### 6.3 Coefficients variables : $U_{n+1} = \dfrac{c(n)}{d(n)}\,U_n$

On cherche à « absorber » le facteur qui dépend de $n$ en posant par exemple $V_n = \dfrac{U_n}{n}$ ou $V_n = n^2\,U_n$.

:::example[$U_1 = 3$ et $U_{n+1} = \dfrac{2(n+1)}{n}\,U_n$]
Avec $V_n = \dfrac{U_n}{n}$ : $V_{n+1} = \dfrac{U_{n+1}}{n+1} = \dfrac{2U_n}{n} = 2V_n$. $(V_n)$ est géométrique de raison $2$ et de premier terme $V_1 = 3$ : $V_n = 3 \times 2^{n-1}$, donc $U_n = 3n \times 2^{n-1}$. Contrôle : $U_2 = \frac{2 \times 2}{1} \times 3 = 12 = 3 \times 2 \times 2$ ✓ et $U_3 = \frac{2 \times 3}{2} \times 12 = 36 = 3 \times 3 \times 4$ ✓.
:::

### 6.4 Radicaux : on **élève au carré**

:::example[$U_0 = 0$ et $U_{n+1} = \sqrt{9U_n^2 + 8}$]
On pose $V_n = \sqrt{U_n^2 + 1}$. Alors
$$
V_{n+1}^2 = U_{n+1}^2 + 1 = 9U_n^2 + 8 + 1 = 9\,(U_n^2 + 1) = 9\,V_n^2 .
$$
Comme $V_n > 0$ pour tout $n$, on en tire $V_{n+1} = 3V_n$ : géométrique de raison $3$, $V_0 = 1$, donc $V_n = 3^n$. Enfin $U_n^2 = V_n^2 - 1 = 9^n - 1$, donc $U_n = \sqrt{9^n - 1}$ (car $U_n \geq 0$). Contrôle : $U_1 = \sqrt{8}$ ✓ et $U_2 = \sqrt{9 \times 8 + 8} = \sqrt{80} = \sqrt{81 - 1}$ ✓.
:::

### 6.5 Une puissance d'une suite arithmétique est géométrique

:::property[$a^{U_n}$]
Si $(U_n)$ est arithmétique de raison $r$ et si $a > 0$, alors $V_n = a^{U_n}$ est géométrique de raison $a^r$ : $V_{n+1} = a^{U_n + r} = a^r\,a^{U_n} = a^r\,V_n$. Exemple : $U_n = 3n + 1$ et $V_n = 2^{U_n}$ donnent $V_n = 2 \times 8^n$, de raison $2^3 = 8$.
:::

## 7. Sommes télescopiques

Quand chaque terme s'écrit comme une **différence** $T_k - T_{k+1}$ (ou $T_{k+1} - T_k$), presque tout disparaît dans la somme.

:::example[Radicaux]
Soit $w_n = \sqrt{2n+3} - \sqrt{2n+1}$ et $W_n = w_0 + w_1 + \cdots + w_n$. Écrivons les termes :
$$
\begin{aligned}
W_n &= (\sqrt3 - 1) + (\sqrt5 - \sqrt3) + (\sqrt7 - \sqrt5) + \cdots\\
&\quad + (\sqrt{2n+3} - \sqrt{2n+1})\\
&= \sqrt{2n+3} - 1 ,
\end{aligned}
$$
car chaque racine intermédiaire apparaît une fois avec le signe $+$ et une fois avec le signe $-$. Contrôle : $n = 1$ donne $\sqrt5 - 1$ ✓, $n = 3$ donne $\sqrt9 - 1 = 2$ ✓. (Pour $w_n$ on peut aussi multiplier par la quantité conjuguée : $w_n = \dfrac{2}{\sqrt{2n+3} + \sqrt{2n+1}}$.)
:::

:::example[Fractions]
Comme $\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$, on a $\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \cdots + \dfrac{1}{n(n+1)} = 1 - \dfrac{1}{n+1} = \dfrac{n}{n+1}$.
:::

## Vérifie-toi

::::check[Arithmétique]
$(U_n)$ est arithmétique avec $U_{15} = -12$ et $U_{24} = 15$. Calculer $S = U_{15} + U_{16} + \cdots + U_{24}$.

:::answer
$S$ a $24 - 15 + 1 = 10$ termes : $S = 10 \times \dfrac{-12 + 15}{2} = 15$.
:::
::::

::::check[Géométrique]
$(U_n)$ est géométrique avec $U_2 = 12$ et $U_5 = -96$. Déterminer $q$, $U_0$ et $U_2 + U_3 + U_4 + U_5$.

:::answer
$q^3 = \dfrac{-96}{12} = -8$, donc $q = -2$ (exposant impair : une seule solution). $U_0 = \dfrac{U_2}{q^2} = \dfrac{12}{4} = 3$. Somme de $4$ termes de premier terme $12$ : $S = 12 \times \dfrac{1 - (-2)^4}{1 + 2} = 12 \times \dfrac{-15}{3} = -60$. Contrôle : $12 - 24 + 48 - 96 = -60$ ✓.
:::
::::

::::check[Suite auxiliaire]
$U_0 = 4$ et $U_{n+1} = \frac12 U_n + 3$. Exprimer $U_n$ en fonction de $n$ avec $V_n = U_n - 6$.

:::answer
$V_{n+1} = \frac12 U_n + 3 - 6 = \frac12(U_n - 6) = \frac12 V_n$ : géométrique de raison $\frac12$, $V_0 = -2$, donc $V_n = -2\left(\frac12\right)^n$ et $U_n = 6 - 2\left(\frac12\right)^n$. Contrôle : $U_1 = 5 = \frac12 \times 4 + 3$ ✓.
:::
::::

::::challenge
Soit $a$, $b$, $c$ trois réels non nuls qui sont à la fois des termes consécutifs d'une suite arithmétique et d'une suite géométrique. Montrer que $a = b = c$.

:::answer
On a $a + c = 2b$ et $b^2 = ac$, donc $\left(\dfrac{a+c}{2}\right)^2 = ac$, soit $(a + c)^2 - 4ac = (a - c)^2 = 0$. Donc $a = c$ puis $b = \dfrac{a + c}{2} = a$.
:::
::::

:::summary
- **Arithmétique** : $U_{n+1} = U_n + r$ ; $U_n = U_p + (n-p)\,r$ ; points alignés ; $S = n\,\dfrac{a + b}{2}$ ; $a, b, c$ consécutifs $\iff a + c = 2b$.
- **Géométrique** : $U_{n+1} = q\,U_n$ ; $U_n = U_p\,q^{\,n-p}$ ; $S = a\,\dfrac{1 - q^n}{1 - q}$ ($q \neq 1$) ; $a, b, c$ consécutifs $\iff b^2 = ac$.
- Nombre de termes de $U_p + \cdots + U_q$ : $q - p + 1$. Exposant pair : **deux** raisons possibles.
- **Ni l'une ni l'autre** : montrer avec $U_0, U_1, U_2$ (différences **et** quotients), puis suite auxiliaire : calculer $V_{n+1}$, reconnaître $q\,V_n$ ou $V_n + r$, écrire $V_n$, revenir à $U_n$.
- Point fixe de $U_{n+1} = aU_n + b$ : $\ell = \frac{b}{1-a}$, $U_n - \ell$ géométrique de raison $a$.
- Radicaux : on élève au carré. Sommes télescopiques : on écrit chaque terme comme une différence.
:::
