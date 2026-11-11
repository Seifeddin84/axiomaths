---
title: "Problèmes du premier et du second degré"
slug: "lycee-2eme-sciences-problemes-premier-second-degre"
school: "lycee"
level: "2eme"
sections: ["Sciences"]
chapter: "Problèmes du premier et du second degré"
summary: "Mettre un problème en équation, manier la valeur absolue, résoudre ax² + bx + c = 0 avec le discriminant, étudier le signe d'un trinôme et traiter les équations qui s'y ramènent."
prerequisites: ["Calcul dans ℝ", "Identités remarquables"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 2"
updated: "2026-11-09"
---

## Pourquoi ce chapitre ?

On dispose de $20$ cm de ficelle pour border un rectangle. On note $x$ la longueur d'un côté. L'autre côté vaut $10 - x$ et l'aire vaut

$$
a(x) = x\,(10-x).
$$

**Questions :** peut-on obtenir une aire de $16\ \mathrm{cm}^2$ ? de $30\ \mathrm{cm}^2$ ?

La première est facile à deviner ($2 \times 8$). Pour la seconde, essayer des valeurs ne prouve rien : il faut **résoudre** $x(10-x) = 30$ et savoir dire proprement qu'il n'y a pas de solution. C'est le travail de ce chapitre : transformer une situation en équation, puis la résoudre à coup sûr.

![Aire du rectangle en fonction de x](/lessons/images/second-degre-aire.svg "L'aire ne dépasse jamais 25 cm², atteinte pour x = 5 : la droite a = 30 ne touche jamais la courbe.")

:::intuition
Une équation est une **question** posée à un nombre inconnu. Résoudre, c'est trouver *tous* les nombres qui répondent « oui », et savoir prouver qu'il n'y en a pas d'autres. Le second degré ajoute une difficulté : il peut y avoir deux réponses, une seule, ou aucune. Le discriminant est l'outil qui dit lequel de ces trois cas on a, avant même de calculer.
:::

## 1. Mettre un problème en équation

:::method[Les cinq temps d'un problème]
1. **Choisir l'inconnue** et dire ce qu'elle représente (avec son unité).
2. **Préciser son domaine** : une longueur est positive, un nombre de personnes est entier…
3. **Exprimer** chaque donnée en fonction de l'inconnue, puis écrire l'équation.
4. **Résoudre** l'équation.
5. **Revenir au problème** : garder les solutions qui respectent le domaine, vérifier, répondre par une phrase.
:::

:::example[Thalès et équation du premier degré]
Dans un triangle $ABC$, $M \in [AB]$ et $N \in [AC]$ avec $(MN) \parallel (BC)$. On donne $AN = x$, $NC = 5$, $MN = 8$, $BC = 13$. Déterminer $x$.

D'après Thalès, $\dfrac{AN}{AC} = \dfrac{MN}{BC}$, donc

$$
\begin{aligned}
\frac{x}{x+5} = \frac{8}{13} &\iff 13x = 8(x+5)\\
&\iff 5x = 40 \iff x = 8 .
\end{aligned}
$$

Vérification : $\dfrac{8}{13}$ ✓. On a bien $AN = 8$.
:::

:::example[Deux agences de location]
Agence A : $36$ dinars par jour $+\ 0{,}450$ dinar par km. Agence B : $20$ dinars par jour $+\ 0{,}650$ dinar par km. Quelle agence choisir selon la distance $x$ (en km) ?

Prix en dinars : $p_A(x) = 36 + 0{,}45x$ et $p_B(x) = 20 + 0{,}65x$. L'agence A est la moins chère si

$$
36 + 0{,}45x < 20 + 0{,}65x \iff 16 < 0{,}2x \iff x > 80.
$$

| Distance | Agence A | Agence B | Moins chère |
|---|---|---|---|
| $50$ km | $58{,}5$ | $52{,}5$ | B |
| $80$ km | $72$ | $72$ | égalité |
| $150$ km | $103{,}5$ | $117{,}5$ | A |

**Réponse :** B en dessous de $80$ km, A au-delà.
:::

## 2. Valeur absolue : une distance

:::definition[Valeur absolue]
La valeur absolue d'un réel $x$ est $\lvert x \rvert = x$ si $x \geq 0$ et $\lvert x \rvert = -x$ si $x \leq 0$. Sur une droite graduée, $\lvert x - a \rvert$ est la **distance** entre les points d'abscisses $x$ et $a$.
:::

Cette lecture géométrique évite presque tous les calculs :

| Écriture | Lecture | Solutions |
|---|---|---|
| $\lvert x - 3 \rvert = 2$ | $x$ est à distance $2$ de $3$ | $x = 1$ ou $x = 5$ |
| $\lvert x - 1 \rvert < 1$ | $x$ est à distance $< 1$ de $1$ | $x \in \left]0\,;2\right[$ |
| $\lvert x + 1 \rvert > 1 + \sqrt{2}$ | $x$ est à distance $> 1+\sqrt 2$ de $-1$ | $x \in \left]-\infty\,;-2-\sqrt 2\right[ \cup \left]\sqrt 2\,;+\infty\right[$ |

:::method[Équation $\lvert A \rvert = \lvert B \rvert$]
Deux nombres ont la même valeur absolue s'ils sont **égaux ou opposés** :
$$
\lvert A \rvert = \lvert B \rvert \iff A = B \ \text{ ou } \ A = -B.
$$
:::

:::example[Résoudre $\lvert 2x + 1 \rvert = \lvert 3 - x \rvert$]
- $2x + 1 = 3 - x \iff 3x = 2 \iff x = \dfrac{2}{3}$.
- $2x + 1 = -(3 - x) \iff 2x + 1 = x - 3 \iff x = -4$.

Vérification : pour $x = \frac23$ les deux membres valent $\frac73$ ; pour $x = -4$ ils valent $7$. $\mathcal{S} = \left\{-4\,;\dfrac{2}{3}\right\}$.
:::

## 3. Équation du second degré

:::definition[Équation du second degré]
Soient $a$, $b$, $c$ trois réels avec $a \neq 0$. L'équation $ax^2 + bx + c = 0$ est une **équation du second degré** d'inconnue $x$. Le réel $\Delta = b^2 - 4ac$ est son **discriminant**. L'écriture
$$
ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right]
$$
est la **forme canonique** du trinôme.
:::

L'idée vient d'Al-Khawarizmi (IXᵉ siècle), qui résolvait $x^2 + 10x = 39$ avec des aires : un carré de côté $x$ bordé de deux rectangles $x \times 5$ s'inscrit dans un grand carré de côté $x+5$ auquel il manque un petit carré de côté $5$ :

$$
x^2 + 10x = (x+5)^2 - 25 .
$$

L'équation devient $(x+5)^2 = 64$, donc $x + 5 = 8$ et $x = 3$ (il ne gardait que les solutions positives).

:::proof[Résoudre $ax^2 + bx + c = 0$]
| Étape | Justification |
|---|---|
| $ax^2 + bx + c = 0 \iff x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = 0$ | on divise par $a \neq 0$ |
| $\iff \left(x + \dfrac{b}{2a}\right)^2 - \dfrac{b^2}{4a^2} + \dfrac{c}{a} = 0$ | on complète le carré, comme Al-Khawarizmi |
| $\iff \left(x + \dfrac{b}{2a}\right)^2 = \dfrac{\textcolor{#ea580c}{b^2 - 4ac}}{4a^2}$ | on réduit au même dénominateur |
| $\Delta < 0$ : un carré ne peut pas être négatif, **aucune solution** | le membre de gauche est $\geq 0$ |
| $\Delta = 0$ : $x = -\dfrac{b}{2a}$ | un carré nul |
| $\Delta > 0$ : $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{\Delta}}{2a}$ | deux réels ont le même carré s'ils sont égaux ou opposés |
:::

:::theorem[Solutions de $ax^2+bx+c=0$]
| Signe de $\Delta$ | Nombre de solutions | Solutions |
|---|---|---|
| $\Delta < 0$ | $0$ | aucune |
| $\Delta = 0$ | $1$ (double) | $x_0 = -\dfrac{b}{2a}$ |
| $\Delta > 0$ | $2$ | $x_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ et $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$ |
:::

On retrouve la question du début : $x(10-x) = 30 \iff x^2 - 10x + 30 = 0$, avec $\Delta = 100 - 120 = -20 < 0$. **Aucune solution** : la ficelle ne permet jamais $30\ \mathrm{cm}^2$. Et $x(10-x) = 16 \iff x^2 - 10x + 16 = 0$ donne $\Delta = 36$, donc $x = \frac{10 \pm 6}{2} \in \{2\,;8\}$.

### Discriminant réduit

Quand $b = 2b'$ est pair, on simplifie : $\Delta = 4\Delta'$ avec $\Delta' = b'^2 - ac$, et les solutions deviennent $x = \dfrac{-b' \pm \sqrt{\Delta'}}{a}$.

:::example[$5x^2 - 16x + 3 = 0$]
Ici $b' = -8$ donc $\Delta' = 64 - 15 = 49$ et
$$
x = \frac{8 \pm 7}{5} \in \left\{\frac{1}{5}\,;\,3\right\}.
$$
:::

### Somme et produit des racines

Si $x_1$ et $x_2$ sont les deux racines, alors $ax^2 + bx + c = a(x - x_1)(x - x_2)$. En développant et en identifiant :

$$
x_1 + x_2 = -\frac{b}{a} \qquad\text{et}\qquad x_1 x_2 = \frac{c}{a}.
$$

:::property[Racines évidentes]
- Si $a + b + c = 0$, alors $1$ est racine et l'autre racine est $\dfrac{c}{a}$.
- Si $a - b + c = 0$, alors $-1$ est racine et l'autre racine est $-\dfrac{c}{a}$.
:::

Exemple : $3x^2 + 5x - 8 = 0$ vérifie $3 + 5 - 8 = 0$, donc les racines sont $1$ et $-\frac{8}{3}$. Sans aucun discriminant.

:::example[Discuter selon un paramètre]
Soit $(E_m) : x^2 - 2(m-1)x + m^2 - 3 = 0$. Ici $b' = -(m-1)$ et
$$
\Delta' = (m-1)^2 - (m^2 - 3) = -2m + 4 = -2(m-2).
$$

- $m > 2$ : $\Delta' < 0$, pas de solution.
- $m = 2$ : une racine double, $x = m - 1 = 1$.
- $m < 2$ : deux racines distinctes.

Les deux racines sont **strictement positives** si $\Delta' \geq 0$, $P = m^2 - 3 > 0$ et $S = 2(m-1) > 0$, c'est-à-dire pour $\sqrt{3} < m \leq 2$. Par exemple $m = 1{,}8$ donne $S = 1{,}6$ et $P = 0{,}24$.
:::

## 4. Signe d'un trinôme et inéquations

On factorise (quand c'est possible) et on lit le signe, ou on applique la règle suivante.

:::theorem[Signe de $f(x) = ax^2 + bx + c$]
| $\Delta$ | Factorisation | Signe de $f(x)$ |
|---|---|---|
| $\Delta < 0$ | impossible | du signe de $a$ pour tout $x$ |
| $\Delta = 0$ | $a(x - x_0)^2$ | du signe de $a$ pour $x \neq x_0$ |
| $\Delta > 0$ | $a(x - x_1)(x - x_2)$ | du signe de $a$ **à l'extérieur** des racines, du signe de $-a$ **entre** les racines |
:::

::::example[$x^2 - 5x + 6 < 0$]
$\Delta = 1$, racines $2$ et $3$, avec $a = 1 > 0$.

:::signs
| $x$ | $-\infty$ | | $2$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x^2 - 5x + 6$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
:::

Donc $x^2 - 5x + 6 < 0 \iff x \in \left]2\,;3\right[$ et $x^2 - 5x + 6 \geq 0 \iff x \in \left]-\infty\,;2\right] \cup \left[3\,;+\infty\right[$.
::::

Pour une inéquation de degré supérieur, on factorise en facteurs de degré $1$ ou $2$ puis on fait **un tableau de signes**, comme au chapitre sur les polynômes.

## 5. Équations qui se ramènent au second degré

:::method[Changement d'inconnue]
Quand une même expression apparaît plusieurs fois, on la remplace par $X$, on résout en $X$, puis on **revient à $x$**.
:::

:::example[Équation bicarrée $3x^4 - 5x^2 + 2 = 0$]
On pose $X = x^2$ (donc $X \geq 0$) : $3X^2 - 5X + 2 = 0$. Comme $3 - 5 + 2 = 0$, on a $X = 1$ ou $X = \frac{2}{3}$, les deux positifs. Donc
$$
x^2 = 1 \ \text{ ou } \ x^2 = \frac{2}{3} \iff x \in \left\{-1\,;\,1\,;\,-\frac{\sqrt 6}{3}\,;\,\frac{\sqrt 6}{3}\right\}.
$$
:::

:::example[Une même expression répétée : $(x^2 - x)^2 - 7(x^2 - x) + 10 = 0$]
On pose $X = x^2 - x$ : $X^2 - 7X + 10 = 0$, donc $X = 2$ ou $X = 5$.

- $x^2 - x - 2 = 0$ : $a - b + c = 0$, donc $x \in \{-1\,;2\}$.
- $x^2 - x - 5 = 0$ : $\Delta = 21$, donc $x = \dfrac{1 \pm \sqrt{21}}{2}$.

$\mathcal{S} = \left\{-1\,;\,2\,;\,\dfrac{1-\sqrt{21}}{2}\,;\,\dfrac{1+\sqrt{21}}{2}\right\}$.
:::

:::warning[Équations avec racine carrée : toujours vérifier]
Pour résoudre $\sqrt{2x+3} = x$, on **élève au carré** : $2x + 3 = x^2$, soit $x^2 - 2x - 3 = 0$, de racines $3$ et $-1$. Mais élever au carré peut créer de fausses solutions : $\sqrt{2(-1)+3} = 1 \neq -1$. Seul $x = 3$ convient ($\sqrt 9 = 3$). On pose toujours la condition $x \geq 0$ **avant** de calculer, ou on vérifie **après**.
:::

## 6. Un problème complet : la pierre dans le puits

On laisse tomber une pierre dans un puits ; $3$ secondes plus tard on entend le « plouf ». Une pierre lâchée sans vitesse initiale parcourt $5t^2$ mètres en $t$ secondes, et le son voyage à $340$ m/s. Quelle est la profondeur du puits ?

Soit $t$ la durée de chute (en s). La profondeur est $5t^2$, et le son met $\dfrac{5t^2}{340}$ s à remonter. Donc $t + \dfrac{5t^2}{340} = 3$, soit

$$
5t^2 + 340t - 1020 = 0 \iff t^2 + 68t - 204 = 0.
$$

Ici $b' = 34$ et $\Delta' = 34^2 + 204 = 1360$, donc $t = -34 \pm \sqrt{1360}$. Comme $t > 0$, on garde $t = -34 + 4\sqrt{85} \approx 2{,}878$ s.

**Réponse :** la profondeur est $5t^2 \approx 41{,}4$ m. (Vérification : le son met $\frac{41{,}42}{340} \approx 0{,}122$ s, et $2{,}878 + 0{,}122 = 3$.)

## Vérifie-toi

::::check[Racines et paramètre]
Pour quelles valeurs de $m$ l'équation $x^2 + mx + 4 = 0$ admet-elle deux racines distinctes ?

:::answer
$\Delta = m^2 - 16 > 0 \iff m < -4$ ou $m > 4$, c'est-à-dire $m \in \left]-\infty\,;-4\right[ \cup \left]4\,;+\infty\right[$.
:::
::::

::::check[Inéquation]
Résoudre dans $\mathbb{R}$ : $\;-x^2 + 4x - 3 \leq 0$.

:::answer
$\Delta = 4$, racines $1$ et $3$, et $a = -1 < 0$. Le trinôme est du signe de $a$ (négatif) à l'extérieur des racines : $\mathcal{S} = \left]-\infty\,;1\right] \cup \left[3\,;+\infty\right[$.
:::
::::

::::check[Racine parasite]
Résoudre $\sqrt{x+2} = x$.

:::answer
Condition : $x \geq 0$. En élevant au carré, $x + 2 = x^2$, soit $x^2 - x - 2 = 0$ de racines $-1$ et $2$. Seul $x = 2$ est positif et convient : $\sqrt 4 = 2$. $\mathcal{S} = \{2\}$.
:::
::::

::::challenge
Montrer que, parmi tous les rectangles de périmètre $36$ cm, l'aire ne dépasse jamais $81\ \mathrm{cm}^2$, et préciser le cas d'égalité.

:::answer
Avec un côté $x$, l'autre vaut $18 - x$ et l'aire est $x(18-x)$. Or $81 - x(18 - x) = x^2 - 18x + 81 = (x-9)^2 \geq 0$, donc l'aire est $\leq 81$, avec égalité si et seulement si $x = 9$ : c'est le carré de côté $9$ cm.
:::
::::

:::summary
- **Mise en équation** : inconnue, domaine, équation, résolution, **retour au problème**.
- $\lvert x - a \rvert$ = distance de $x$ à $a$ ; $\lvert A \rvert = \lvert B \rvert \iff A = B$ ou $A = -B$.
- $\Delta = b^2 - 4ac$ : $\Delta < 0$ aucune racine ; $\Delta = 0$ une racine $-\frac{b}{2a}$ ; $\Delta > 0$ deux racines $\frac{-b \pm \sqrt{\Delta}}{2a}$.
- Somme $-\frac{b}{a}$ et produit $\frac{c}{a}$ ; racine évidente si $a + b + c = 0$ ou $a - b + c = 0$.
- Signe de $ax^2 + bx + c$ : celui de $a$ à l'extérieur des racines, de $-a$ entre elles.
- Équation qui se ramène au second degré : changement d'inconnue, puis **retour à $x$** ; avec une racine carrée, toujours vérifier.
:::
