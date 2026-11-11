---
title: "Probabilités : probabilité conditionnelle, variables aléatoires, loi binomiale, lois uniforme et exponentielle"
slug: "lycee-4eme-maths-probabilites"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Probabilités"
summary: "Dénombrer, définir une probabilité sur un ensemble fini et la calculer par équiprobabilité, conditionner (arbres, probabilités totales, formule de Bayes), traiter l'indépendance, puis passer aux variables aléatoires : loi, espérance, variance, fonction de répartition, loi binomiale, et enfin les lois continues uniforme et exponentielle."
prerequisites: ["Dénombrement (arrangements, combinaisons)", "Intégrales et primitives", "Fonction exponentielle", "Suites géométriques"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 9 « Probabilités »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Un test de dépistage repère $98\,\%$ des malades et ne se trompe que dans $1\,\%$ des cas sains. Tu passes le test : il est **positif**. Quelle est la probabilité que tu sois malade ?

Presque tout le monde répond $98\,\%$ ou $99\,\%$. Si $10\,\%$ de la population est malade, la bonne réponse est $91{,}6\,\%$. Si seulement $1\,\%$ l'est, elle tombe à $49{,}7\,\%$ : une chance sur deux malgré un test « fiable à $98\,\%$ ». L'intuition oublie un nombre : la **proportion de malades dans la population**. Pour le retrouver, il faut savoir faire trois choses :

1. **compter** les issues favorables (probabilité uniforme) ;
2. **conditionner** : changer de population quand on reçoit une information (arbres, formule de Bayes) ;
3. **résumer un hasard numérique** par sa loi, sa moyenne (espérance) et sa dispersion (variance).

La fin du chapitre passe aux phénomènes continus (une attente, une durée de vie), où les probabilités deviennent des **aires**.

:::intuition
Une probabilité est une masse totale de $1$ répartie sur toutes les issues possibles. Tout le chapitre consiste à savoir **où se trouve la masse**, à la découper (événements), à la recoller (réunion, complémentaire), à la redistribuer quand on apprend quelque chose (conditionnement) et à la résumer par un nombre (espérance).
:::

## 1. Dénombrer

Calculer une probabilité uniforme revient à compter. On rappelle les formules, pour un ensemble $E$ à $n$ éléments.

:::property[Les formules de dénombrement]
- **$p$-uplets** (l'ordre compte, les répétitions sont permises) : $n^p$. C'est un tirage de $p$ éléments **avec remise**.
- **Arrangements** (l'ordre compte, sans répétition) : $A_n^p = \dfrac{n!}{(n-p)!}$. C'est un tirage de $p$ éléments **successifs sans remise**. Pour $p = n$ : les $n!$ permutations.
- **Combinaisons** (l'ordre ne compte pas) : $C_n^p = \dfrac{n!}{p!\,(n-p)!}$, aussi noté $\dbinom{n}{p}$. C'est le nombre de parties à $p$ éléments, ou un tirage **simultané** de $p$ éléments. On a $C_n^p = C_n^{n-p}$.
- Nombre de parties de $E$ : $2^n$.
:::

:::method[Quel outil de dénombrement ?]
Deux questions :

1. **L'ordre compte-t-il ?** Non : combinaisons (tirage simultané, groupe, comité).
2. Si oui, **peut-on répéter un élément ?** Oui : $n^p$ (avec remise). Non : $A_n^p$ (sans remise).

Pour « au moins un », on passe presque toujours par le **contraire** : le nombre total moins le nombre de cas où aucun n'apparaît.
:::

## 2. Probabilité sur un ensemble fini

Dans ce paragraphe, l'univers $E$ est un ensemble fini.

:::definition[Vocabulaire]
Une **expérience aléatoire** est une expérience dont le résultat est soumis au hasard. L'ensemble $E$ de ses issues est l'**univers**. Un élément de $E$ est un **événement élémentaire**, une partie de $E$ est un **événement**.

- $E$ est l'événement **certain**, $\varnothing$ l'événement **impossible**.
- $\overline{A}$ est l'événement **contraire** de $A$.
- $A$ et $B$ sont **incompatibles** si $A \cap B = \varnothing$.
:::

:::definition[Probabilité]
Une **probabilité** sur $E = \{a_1, \dots, a_n\}$ est la donnée de nombres $p(a_i) \geq 0$ de somme $1$. La probabilité d'un événement $A$ est la somme de celles de ses événements élémentaires :
$$
\begin{aligned}
p(A) &= \sum_{a_i \in A} p(a_i),\\
p(E) &= 1, \qquad p(\varnothing) = 0.
\end{aligned}
$$
Le triplet $(E, \mathcal{P}(E), p)$ est un **espace probabilisé fini**.
:::

:::property[Règles de calcul]
Pour deux événements $A$ et $B$ :
- $p(\overline{A}) = 1 - p(A)$ ;
- $p(A \cup B) = p(A) + p(B) - p(A \cap B)$ ;
- si $A \cap B = \varnothing$, alors $p(A \cup B) = p(A) + p(B)$, et plus généralement la probabilité d'une réunion d'événements deux à deux incompatibles est la somme de leurs probabilités.
:::

:::proof[Règles de calcul]
| Étape | Justification |
|---|---|
| $E = A \cup \overline{A}$ avec $A \cap \overline{A} = \varnothing$, donc $1 = p(A) + p(\overline{A})$ | chaque issue est dans exactement un des deux |
| $A = (A \setminus B) \cup (A \cap B)$ et $B = (B \setminus A) \cup (A \cap B)$ | unions disjointes |
| $p(A) + p(B) = p(A \setminus B) + p(B \setminus A) + 2\,p(A \cap B)$ | on additionne |
| $A \cup B = (A \setminus B) \cup (A \cap B) \cup (B \setminus A)$, donc $p(A \cup B) = p(A \setminus B) + p(A \cap B) + p(B \setminus A)$ | trois morceaux disjoints |
| En soustrayant : $p(A \cup B) = p(A) + p(B) - p(A \cap B)$ | on a compté deux fois l'intersection |
:::

:::example[Un dé truqué]
On lance un dé dont le $6$ sort trois fois plus souvent que chacun des chiffres $1$ à $5$. Si $p(1) = \dots = p(5) = x$ et $p(6) = 3x$, alors $5x + 3x = 1$ donc $x = \dfrac{1}{8}$ : cinq faces à $\dfrac18$, le $6$ à $\dfrac38$.

- « nombre pair » : $p(2) + p(4) + p(6) = \dfrac{1+1+3}{8} = \dfrac58$ ;
- « impair $\leq 3$ » $= \{1, 3\}$ : $\dfrac28 = \dfrac14$ ;
- « pair $> 3$ » $= \{4, 6\}$ : $\dfrac{1+3}{8} = \dfrac12$ ;
- « multiple de $3$ ou pair » : $p(\{3,6\}) + p(\text{pair}) - p(\{6\}) = \dfrac48 + \dfrac58 - \dfrac38 = \dfrac34$.

Contrôle : $\{2,3,4,6\}$ donne $\dfrac{1+1+1+3}{8} = \dfrac68 = \dfrac34$ ✓.
:::

:::example[Deux défauts]
Dans un lot de $1000$ appareils, $60$ ont le défaut $D_1$, $50$ le défaut $D_2$ et $20$ les deux. On choisit un appareil au hasard.

![Diagramme de Venn : 40 appareils avec D1 seul, 20 avec les deux défauts, 30 avec D2 seul, 910 sans défaut.](/lessons/images/m4-proba-venn.svg "Les quatre zones du lot : 40 appareils avec D1 seul, 20 avec les deux défauts, 30 avec D2 seul et 910 sans défaut. Chaque probabilité est le nombre d'appareils divisé par 1000.")

- les deux défauts : $p(D_1 \cap D_2) = \dfrac{20}{1000} = 0{,}02$ ;
- au moins un défaut : $p(D_1 \cup D_2) = 0{,}06 + 0{,}05 - 0{,}02 = 0{,}09$ ;
- aucun défaut : $1 - 0{,}09 = 0{,}91$ ;
- $D_1$ sans $D_2$ : $0{,}06 - 0{,}02 = 0{,}04$ ; $D_2$ sans $D_1$ : $0{,}03$ ;
- exactement un défaut : $0{,}04 + 0{,}03 = 0{,}07$.

Contrôle : $0{,}04 + 0{,}02 + 0{,}03 + 0{,}91 = 1$ ✓.
:::

:::warning
$p(A \cup B) = p(A) + p(B)$ n'est valable que pour des événements **incompatibles**. Ici, $0{,}06 + 0{,}05 = 0{,}11$ compterait deux fois les $20$ appareils qui ont les deux défauts.
:::

## 3. Équiprobabilité

:::definition[Probabilité uniforme]
Lorsque toutes les issues ont la même probabilité (pièce équilibrée, dé non pipé, tirage au hasard), on est en situation d'**équiprobabilité**. La probabilité est alors **uniforme** : $p(a) = \dfrac{1}{\operatorname{card} E}$ pour tout événement élémentaire, et
$$
\begin{aligned}
p(A) &= \frac{\operatorname{card} A}{\operatorname{card} E}\\
&= \frac{\text{cas favorables}}{\text{cas possibles}}.
\end{aligned}
$$
:::

En effet, si les $N$ issues ont la même probabilité $c$, alors $N c = 1$ donc $c = \dfrac1N$, et un événement à $k$ issues a pour probabilité $\dfrac kN$.

:::example[Deux dés]
On lance un dé rouge et un dé vert. Les dés sont discernables : l'univers est $E = \{(i,j) : 1 \leq i,j \leq 6\}$, avec $\operatorname{card} E = 36$ issues équiprobables.

![Grille 6 par 6 des couples de deux dés : les 6 doubles en vert, les 6 couples de somme 7 en orange.](/lessons/images/m4-proba-des.svg "Les 36 issues de deux dés. Les doubles (vert) et les couples de somme 7 (orange) sont chacun au nombre de 6 : leurs probabilités sont égales à 6/36 = 1/6.")

- même chiffre : $p = \dfrac{6}{36} = \dfrac16$ ;
- deux chiffres distincts : $1 - \dfrac16 = \dfrac56$ ;
- somme égale à $7$ : $\dfrac{6}{36} = \dfrac16$.
:::

:::warning
L'équiprobabilité doit se **justifier**. Les sommes $2, 3, \dots, 12$ de deux dés ne sont **pas** équiprobables : $p(\text{somme} = 2) = \dfrac1{36}$ (un seul couple, $(1,1)$) alors que $p(\text{somme} = 7) = \dfrac6{36}$. On travaille sur les $36$ couples, pas sur les $11$ sommes.
:::

:::example[Un code]
Un code comporte deux lettres (parmi $26$) suivies de deux chiffres (parmi $10$). Il y a $26^2 \times 10^2 = 67\,600$ codes. Un enfant en compose un au hasard.

- il commence par $A$ : $1 \times 26 \times 10 \times 10 = 2600$ codes, donc $p = \dfrac{2600}{67\,600} = \dfrac1{26}$ ;
- il contient les lettres $A$ et $Z$ : $2$ ordres possibles pour les lettres, soit $2 \times 10^2 = 200$ codes, donc $p = \dfrac{200}{67\,600} = \dfrac1{338}$ ;
- il contient le chiffre $0$ deux fois : $26^2 \times 1 = 676$ codes, donc $p = \dfrac{676}{67\,600} = \dfrac1{100}$ ;
- aucun chiffre pair : $26^2 \times 5^2 = 16\,900$ codes, donc $p = \dfrac{16\,900}{67\,600} = \dfrac14$.
:::

:::example[Un examen]
Le programme compte $100$ questions, le candidat en a étudié $80$. On lui en tire $3$ simultanément. Le nombre de tirages possibles est $C_{100}^3 = 161\,700$.

| événement | cas favorables | probabilité |
|---|---|---|
| les $3$ étudiées | $C_{80}^3 = 82\,160$ | $0{,}508$ |
| exactement $2$ étudiées | $C_{80}^2 \times 20 = 63\,200$ | $0{,}391$ |
| exactement $1$ étudiée | $80 \times C_{20}^2 = 15\,200$ | $0{,}094$ |
| aucune étudiée | $C_{20}^3 = 1140$ | $0{,}007$ |

« Au moins une étudiée » : par le contraire, $1 - \dfrac{1140}{161\,700} \approx 0{,}993$.

Contrôle : $82\,160 + 63\,200 + 15\,200 + 1140 = 161\,700$ ✓.
:::

:::example[Le paradoxe des anniversaires]
Dans un groupe de $n$ personnes, avec $365$ dates équiprobables, la probabilité que **toutes** les dates soient différentes est $\dfrac{A_{365}^n}{365^n}$. La probabilité $p$ qu'au moins deux personnes aient la même date est le contraire :
$$
p = 1 - \frac{A_{365}^n}{365^n}.
$$
Le numérateur $A_{365}^n$ est un produit de $n$ facteurs : $365 \times 364 \times \cdots$, le dernier étant $365 - n + 1$.
Elle vaut $\approx 0{,}476$ pour $n = 22$, $\approx 0{,}507$ pour $n = 23$, $\approx 0{,}706$ pour $n = 30$ et $\approx 0{,}970$ pour $n = 50$. Dès $23$ personnes, on a plus d'une chance sur deux d'avoir un anniversaire commun : l'intuition croit qu'il en faudrait des centaines, parce qu'elle compte des **personnes** alors qu'il faut compter des **paires** (il y en a $253$ pour $23$ personnes).
:::

## 4. Probabilité conditionnelle

:::intuition
Dans une classe, $60\,\%$ des élèves sont des filles. Tu croises un élève : $p(\text{fille}) = 0{,}6$. Mais si tu sais que l'élève est dans le club de danse, composé presque uniquement de filles, la probabilité change. **Une information change la population de référence.** La probabilité conditionnelle est la probabilité calculée dans la nouvelle population.
:::

:::definition[Probabilité conditionnelle]
Soit $B$ un événement tel que $p(B) \neq 0$. La probabilité de $A$ **sachant** $B$ est
$$
p_B(A) = \frac{p(A \cap B)}{p(B)},
$$
aussi notée $p(A/B)$.
:::

:::theorem[$p_B$ est une probabilité]
L'application $A \longmapsto p_B(A)$ est une probabilité sur $E$ : elle vérifie $p_B(E) = 1$, $p_B(\varnothing) = 0$ et $p_B(A)$ est la somme des $p_B$ des événements élémentaires de $A$.
:::

:::proof[$p_B$ est une probabilité]
| Étape | Justification |
|---|---|
| $p_B(E) = \dfrac{p(E \cap B)}{p(B)} = \dfrac{p(B)}{p(B)} = 1$ | $E \cap B = B$ |
| $p_B(\varnothing) = \dfrac{p(\varnothing)}{p(B)} = 0$ | $\varnothing \cap B = \varnothing$ |
| Si $a \notin B$, alors $p_B(\{a\}) = 0$, car $\{a\} \cap B = \varnothing$ | l'issue est exclue |
| Si $A \cap B = \{a'_1, \dots, a'_m\}$, alors $p(A \cap B) = p(a'_1) + \dots + p(a'_m)$ | définition de $p$ |
| Donc $p_B(A) = \sum_j \dfrac{p(a'_j)}{p(B)} = \sum_j p_B(\{a'_j\})$ | on divise chaque terme par $p(B)$ |
:::

Toutes les règles du §2 s'appliquent donc à $p_B$ : par exemple $p_B(\overline{A}) = 1 - p_B(A)$.

:::property[Formule des probabilités composées]
$$
\begin{aligned}
p(A \cap B) &= p(B) \cdot p_B(A)\\
&= p(A) \cdot p_A(B).
\end{aligned}
$$
Pour trois événements : $p(A \cap B \cap C) = p(A) \times p_A(B) \times p_{A \cap B}(C)$.
:::

:::method[Arbre de probabilités]
Un arbre représente une expérience en étapes, avec la probabilité (éventuellement conditionnelle) sur chaque branche.

1. **Sur un nœud**, les probabilités des branches qui en partent ont pour somme $1$.
2. **Le long d'un chemin**, on **multiplie** (formule des probabilités composées).
3. **Pour un événement**, on **additionne** les chemins qui y mènent (ils sont incompatibles).
:::

:::example[Le test de dépistage]
Sur $1000$ personnes, $10\,\%$ sont malades ($M$). Un malade a un test positif ($T$) avec la probabilité $0{,}98$ ; une personne saine, avec la probabilité $0{,}01$. On choisit une personne au hasard. Les données sont $p(M) = 0{,}1$, $p_M(T) = 0{,}98$, $p_{\overline{M}}(T) = 0{,}01$.

![Arbre de probabilités du test : M avec 0,1 puis T avec 0,98 ; non M avec 0,9 puis T avec 0,01. Les feuilles valent 0,098, 0,002, 0,009 et 0,891.](/lessons/images/m4-proba-arbre.svg "Arbre du test de dépistage. On multiplie le long d'une branche : 0,1 × 0,98 = 0,098 pour « malade et positif ». On additionne les branches qui mènent à T : p(T) = 0,098 + 0,009 = 0,107.")

Les quatre feuilles sont $0{,}098$, $0{,}002$, $0{,}009$ et $0{,}891$ (somme $1$ ✓). Alors :

- $p(T) = p(M \cap T) + p(\overline{M} \cap T) = 0{,}098 + 0{,}009 = 0{,}107$ ;
- sachant que le test est positif, la probabilité d'être malade est
$$
\begin{aligned}
p_T(M) &= \frac{p(M \cap T)}{p(T)}\\
&= \frac{0{,}098}{0{,}107} \approx 0{,}916 ;
\end{aligned}
$$
- sachant que le test est négatif : $p_{\overline{T}}(M) = \dfrac{0{,}002}{0{,}893} \approx 0{,}0022$.

Avec seulement $1\,\%$ de malades, le même calcul donne $p_T(M) = \dfrac{0{,}01 \times 0{,}98}{0{,}01 \times 0{,}98 + 0{,}99 \times 0{,}01} \approx 0{,}497$.
:::

:::warning
$p_B(A)$ et $p_A(B)$ sont **deux nombres différents**. Ici $p_M(T) = 0{,}98$ (le test repère le malade) mais $p_T(M) \approx 0{,}916$ (un positif est malade). Les confondre est l'erreur la plus fréquente en probabilités, et celle du début du chapitre.
:::

## 5. Probabilités totales et formule de Bayes

:::definition[Partition]
Les événements $B_1, \dots, B_n$ forment une **partition** de $E$ s'ils sont deux à deux incompatibles et si leur réunion est $E$. Exemple : $B$ et $\overline{B}$.
:::

:::theorem[Formule des probabilités totales]
Soient $B_1, \dots, B_n$ une partition de $E$ avec $p(B_i) \neq 0$ pour tout $i$. Pour tout événement $A$ :
$$
\begin{aligned}
p(A) &= \sum_{i=1}^{n} p(A \cap B_i)\\
&= \sum_{i=1}^{n} p(B_i)\, p_{B_i}(A).
\end{aligned}
$$
:::

:::proof[Formule des probabilités totales]
| Étape | Justification |
|---|---|
| $A = (A \cap B_1) \cup \dots \cup (A \cap B_n)$ | les $B_i$ recouvrent $E$ |
| Ces événements sont deux à deux incompatibles | les $B_i$ le sont |
| $p(A) = \sum_i p(A \cap B_i)$ | additivité |
| $p(A \cap B_i) = p(B_i)\, p_{B_i}(A)$ | probabilités composées |
:::

:::corollary[Formule de Bayes]
Avec les mêmes hypothèses et $p(A) \neq 0$ :
$$
\begin{aligned}
p_A(B_i) &= \frac{p(B_i)\,p_{B_i}(A)}{p(A)},\\
p(A) &= \sum_{j=1}^{n} p(B_j)\,p_{B_j}(A).
\end{aligned}
$$
C'est le calcul « à l'envers » de l'arbre : on connaît les causes et leurs effets, on cherche la cause d'un effet observé. Le test de dépistage en est l'exemple.
:::

:::example[Trois machines]
Une usine reçoit un tiers de sa production de la machine $A$, un quart de $B$ et le reste de $C$. Les pourcentages de pièces défectueuses sont $0{,}2\,\%$, $1\,\%$ et $0{,}5\,\%$. On choisit une pièce au hasard.

La part de $C$ est $1 - \dfrac13 - \dfrac14 = \dfrac5{12}$. Soit $D$ « défectueuse » :
$$
\begin{aligned}
p(D) &= \tfrac13 \cdot 0{,}002 + \tfrac14 \cdot 0{,}01\\
&\quad + \tfrac5{12} \cdot 0{,}005\\
&= \tfrac{8 + 30 + 25}{12\,000} = 0{,}00525.
\end{aligned}
$$
Sachant qu'elle est défectueuse, la pièce provient de $A$ avec la probabilité $p_D(A) = \dfrac{8}{63} \approx 0{,}127$, de $B$ avec $\dfrac{30}{63} \approx 0{,}476$ et de $C$ avec $\dfrac{25}{63} \approx 0{,}397$.

Contrôle : $\dfrac{8 + 30 + 25}{63} = 1$ ✓. La machine $B$ produit moins que $A$ et $C$ réunies mais cause presque la moitié des défauts : elle est cinq fois plus défaillante que $A$.
:::

:::example[Des tirages qui s'enchaînent]
Une urne $U_1$ contient $7$ boules noires et $3$ vertes, une urne $U_2$ contient $2$ noires et $8$ vertes. On tire avec remise : si la boule tirée est noire, le tirage suivant se fait dans $U_1$ ; si elle est verte, dans $U_2$. Le premier tirage se fait dans une urne choisie au hasard. Soit $p_n$ la probabilité de tirer une noire au $n$-ième tirage.

**Premier tirage.** $p_1 = \dfrac12 \times \dfrac7{10} + \dfrac12 \times \dfrac2{10} = \dfrac9{20}$.

**Récurrence.** Les événements « noire au tirage $n-1$ » et son contraire forment une partition, donc
$$
\begin{aligned}
p_n &= \tfrac7{10}\,p_{n-1}\\
&\quad + \tfrac2{10}\,(1 - p_{n-1})\\
&= \tfrac12\,p_{n-1} + \tfrac15.
\end{aligned}
$$

**Formule explicite.** La suite $q_n = p_n - \dfrac25$ vérifie $q_n = \dfrac12\,q_{n-1}$ : elle est géométrique de raison $\dfrac12$ et de premier terme $q_1 = \dfrac9{20} - \dfrac25 = \dfrac1{20}$. Donc
$$
p_n = \frac25 + \frac1{20}\left(\frac12\right)^{n-1}.
$$
Donc $p_n \to \dfrac25$ quand $n \to +\infty$.
Contrôle : $p_2 = \dfrac25 + \dfrac1{40} = \dfrac{17}{40}$, et $\dfrac12 \times \dfrac9{20} + \dfrac15 = \dfrac{9 + 8}{40} = \dfrac{17}{40}$ ✓.
:::

## 6. Événements indépendants

:::definition[Événements indépendants]
Deux événements $A$ et $B$ sont **indépendants** si
$$
p(A \cap B) = p(A) \times p(B).
$$
Si $p(B) \neq 0$, cela équivaut à $p_B(A) = p(A)$ : savoir que $B$ est réalisé ne change pas la probabilité de $A$.
:::

:::property[Indépendance et contraire]
Si $A$ et $B$ sont indépendants, alors $A$ et $\overline{B}$ le sont aussi (et donc $\overline{A}$ et $B$, puis $\overline{A}$ et $\overline{B}$).
:::

:::proof[Indépendance et contraire]
| Étape | Justification |
|---|---|
| $A = (A \cap B) \cup (A \cap \overline{B})$, union disjointe | partition par $B$ |
| $p(A \cap \overline{B}) = p(A) - p(A \cap B)$ | additivité |
| $= p(A) - p(A)\,p(B) = p(A)\,(1 - p(B))$ | indépendance de $A$ et $B$ |
| $= p(A)\,p(\overline{B})$ | $p(\overline{B}) = 1 - p(B)$ |
:::

:::warning
**Incompatibles n'est pas indépendants.** Si $p(A) > 0$, $p(B) > 0$ et $A \cap B = \varnothing$, alors $p(A \cap B) = 0$ alors que $p(A)\,p(B) > 0$ : les deux événements sont **dépendants**. Quand $A$ est réalisé, on sait que $B$ ne l'est pas.
:::

:::example[Un dé]
On lance un dé équilibré. Soient $A$ « nombre pair », $B$ « multiple de $3$ », $C$ « multiple de $6$ ».

- $p(A) = \dfrac12$, $p(B) = \dfrac13$, $p(A \cap B) = p(\{6\}) = \dfrac16 = \dfrac12 \times \dfrac13$ : $A$ et $B$ sont **indépendants** ;
- $p(C) = \dfrac16$ et $A \cap C = \{6\}$ : $p(A \cap C) = \dfrac16$ alors que $p(A)\,p(C) = \dfrac1{12}$ : $A$ et $C$ sont **dépendants** (si c'est un multiple de $6$, il est forcément pair).
:::

:::example[Tirages dans une urne choisie au hasard]
Une urne $U_1$ contient $3$ boules noires et $6$ vertes, une urne $U_2$ contient $2$ noires et $3$ vertes. On choisit une urne au hasard et on tire deux boules **avec remise** dans cette urne. Soient $A$ « verte au premier tirage » et $B$ « verte au second ».

Par les probabilités totales : $p(A) = p(B) = \dfrac12 \times \dfrac69 + \dfrac12 \times \dfrac35 = \dfrac{19}{30}$, et
$$
\begin{aligned}
p(A \cap B) &= \tfrac12 \left(\tfrac69\right)^2\\
&\quad + \tfrac12 \left(\tfrac35\right)^2\\
&= \tfrac{181}{450} = \tfrac{362}{900},\\
p(A)\,p(B) &= \tfrac{361}{900}.
\end{aligned}
$$
Les deux nombres diffèrent de $\dfrac1{900}$ : $A$ et $B$ ne sont **pas indépendants**. Les tirages sont indépendants **dans chaque urne**, mais on ne sait pas quelle urne a été choisie : voir une boule verte rend un peu plus probable l'urne $U_1$, plus riche en vertes. L'écart est minuscule, mais l'égalité est stricte ou ne l'est pas.
:::

## 7. Variables aléatoires

:::definition[Variable aléatoire]
Soit $(E, \mathcal{P}(E), p)$ un espace probabilisé. Une **variable aléatoire** (ou aléa numérique) est une application $X : E \to \mathbb{R}$. On note $(X = x)$ l'événement $\{a \in E : X(a) = x\}$, et $X(E)$ l'ensemble des valeurs prises.

La **loi de probabilité** de $X$ est la donnée des $p(X = x_i)$ pour toutes les valeurs $x_i$ de $X(E)$.
:::

:::property[Somme des probabilités]
Si $X(E) = \{x_1, \dots, x_n\}$, alors $\displaystyle\sum_{i=1}^{n} p(X = x_i) = 1$.
:::

Les événements $(X = x_1), \dots, (X = x_n)$ forment une partition de $E$ : chaque issue a une et une seule valeur pour $X$. La somme de leurs probabilités est donc $p(E) = 1$.

:::method[Déterminer la loi d'une variable aléatoire]
1. Lister les valeurs $x_i$ que $X$ peut prendre.
2. Pour chaque $x_i$, décrire l'événement $(X = x_i)$ et calculer sa probabilité (dénombrement, arbre).
3. Présenter la loi dans un tableau.
4. **Vérifier que la somme des probabilités vaut $1$.**
:::

:::example[Trois lancers d'une pièce]
On lance trois fois une pièce équilibrée et $X$ est le nombre de « face ». Il y a $8$ issues équiprobables, et $p(X = k) = \dfrac{C_3^k}{8}$.

| $x_i$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $p(X = x_i)$ | $\dfrac18$ | $\dfrac38$ | $\dfrac38$ | $\dfrac18$ |

Contrôle : $\dfrac{1 + 3 + 3 + 1}{8} = 1$ ✓.
:::

:::example[Deux boules dans une urne]
Une urne contient deux boules numérotées $4$ et trois numérotées $2$. On tire simultanément deux boules ($C_5^2 = 10$ tirages équiprobables) et $X$ est la somme des numéros.

- $X = 4$ : deux boules « $2$ », soit $C_3^2 = 3$ tirages ;
- $X = 6$ : une de chaque, soit $2 \times 3 = 6$ tirages ;
- $X = 8$ : deux boules « $4$ », soit $1$ tirage.

| $x_i$ | $4$ | $6$ | $8$ |
|---|---|---|---|
| $p(X = x_i)$ | $0{,}3$ | $0{,}6$ | $0{,}1$ |

Contrôle : $0{,}3 + 0{,}6 + 0{,}1 = 1$ ✓.
:::

## 8. Espérance, variance et écart-type

:::definition[Espérance]
Si $X(E) = \{x_1, \dots, x_n\}$, l'**espérance** (ou moyenne) de $X$ est
$$
E(X) = \sum_{i=1}^{n} x_i \, p(X = x_i).
$$
:::

:::intuition
L'espérance est une **moyenne pondérée** : chaque valeur compte autant que sa probabilité. Si on répète l'expérience un très grand nombre de fois, la moyenne des résultats se rapproche de $E(X)$. C'est aussi le **point d'équilibre** du diagramme en bâtons de la loi, comme le centre de gravité de masses placées sur une règle.
:::

:::example[Un dé]
Pour un dé équilibré, $E(X) = \dfrac{1 + 2 + 3 + 4 + 5 + 6}{6} = \dfrac72 = 3{,}5$. L'espérance n'est pas une valeur qu'on peut obtenir : c'est une moyenne.
:::

:::theorem[Linéarité de l'espérance]
Pour toutes variables aléatoires $X$ et $Y$ et tous réels $\alpha$ et $b$ :
- $E(\alpha X) = \alpha\,E(X)$ ;
- $E(X + Y) = E(X) + E(Y)$ ;
- $E(X + b) = E(X) + b$.
:::

:::proof[Linéarité de l'espérance]
| Étape | Justification |
|---|---|
| $E(X) = \sum_{a \in E} X(a)\,p(a)$ | on regroupe les issues qui ont la même valeur $x_i$ |
| $E(\alpha X) = \sum_a \alpha X(a)\,p(a) = \alpha\,E(X)$ | on factorise $\alpha$ |
| $E(X + Y) = \sum_a \big(X(a) + Y(a)\big)\,p(a)$ | définition |
| $= \sum_a X(a)\,p(a) + \sum_a Y(a)\,p(a) = E(X) + E(Y)$ | on sépare la somme |
| $E(X + b) = E(X) + b\sum_a p(a) = E(X) + b$ | $\sum_a p(a) = 1$ |
:::

:::definition[Variance, écart-type]
La **variance** de $X$ est la moyenne du carré de l'écart à la moyenne, et l'**écart-type** en est la racine carrée :
$$
\begin{aligned}
V(X) &= E\big[(X - E(X))^2\big],\\
\sigma(X) &= \sqrt{V(X)}.
\end{aligned}
$$
La variance mesure la **dispersion** autour de la moyenne.
:::

:::property[Formule de König-Huygens]
$$
V(X) = E(X^2) - E(X)^2.
$$
De plus, pour tous réels $a$ et $b$ : $V(aX + b) = a^2\,V(X)$.
:::

:::proof[Formule de König-Huygens]
| Étape | Justification |
|---|---|
| On pose $m = E(X)$ et on développe $(X - m)^2 = X^2 - 2mX + m^2$ | identité remarquable |
| $V(X) = E(X^2) - 2m\,E(X) + m^2$ | linéarité |
| $= E(X^2) - 2m^2 + m^2 = E(X^2) - m^2$ | $E(X) = m$ |
| $E(aX + b) = am + b$, donc $aX + b - E(aX+b) = a\,(X - m)$ | linéarité |
| $V(aX + b) = E\big[a^2 (X - m)^2\big] = a^2\,V(X)$ | on sort la constante $a^2$ |
:::

:::example[Variance du dé]
Pour le dé, $E(X^2) = \dfrac{1 + 4 + 9 + 16 + 25 + 36}{6} = \dfrac{91}{6}$, donc
$$
\begin{aligned}
V(X) &= \tfrac{91}{6} - \left(\tfrac72\right)^2\\
&= \tfrac{35}{12} \approx 2{,}92,\\
\sigma(X) &\approx 1{,}71.
\end{aligned}
$$
:::

:::example[Les deux boules (suite)]
Pour la somme $X$ du §7 : $E(X) = 4 \times 0{,}3 + 6 \times 0{,}6 + 8 \times 0{,}1 = 5{,}6$ et $E(X^2) = 16 \times 0{,}3 + 36 \times 0{,}6 + 64 \times 0{,}1 = 32{,}8$. Donc
$$
\begin{aligned}
V(X) &= 32{,}8 - 5{,}6^2\\
&= 32{,}8 - 31{,}36\\
&= 1{,}44,\\
\sigma(X) &= 1{,}2.
\end{aligned}
$$
:::

:::example[Un jeu équitable, mais risqué]
On mise $2$ D, on lance un dé : le $6$ rapporte $6$ D, le $4$ et le $5$ rapportent $3$ D chacun, les autres faces rien. Le gain net $X$ vaut $+4$ avec la probabilité $\dfrac16$, $+1$ avec $\dfrac13$ et $-2$ avec $\dfrac12$.
$$
\begin{aligned}
E(X) &= \tfrac46 + \tfrac13 - 1 = 0,\\
E(X^2) &= \tfrac83 + \tfrac13 + 2 = 5,\\
V(X) &= 5,\\
\sigma(X) &\approx 2{,}24.
\end{aligned}
$$
Le jeu est **équitable** ($E(X) = 0$), mais on y gagne ou perd de l'ordre de $2$ D à chaque partie : l'espérance ne dit rien du **risque**, c'est le rôle de l'écart-type.
:::

## 9. Fonction de répartition

:::definition[Fonction de répartition]
La **fonction de répartition** d'une variable aléatoire $X$ est
$$
\begin{aligned}
F &: \mathbb{R} \to [0, 1],\\
F(x) &= p(X \leq x).
\end{aligned}
$$
:::

:::property[Lire une fonction de répartition]
- $F$ est **croissante**, nulle à gauche de la plus petite valeur de $X$ et égale à $1$ à partir de la plus grande.
- C'est une **fonction en escalier** : elle saute de $p(X = x_i)$ en chaque valeur $x_i$.
- $p(a < X \leq b) = F(b) - F(a)$, et $p(X = x_i) = F(x_i) - F(x_{i-1})$ si $x_{i-1}$ est la valeur précédente.
:::

:::example[Une pièce truquée]
Une pièce donne « pile » avec la probabilité $0{,}6$. On la lance trois fois et $X$ est le nombre de « pile ». Les lancers sont indépendants, donc $p(X = 0) = 0{,}4^3 = 0{,}064$, $p(X = 1) = 3 \times 0{,}6 \times 0{,}4^2 = 0{,}288$, $p(X = 2) = 3 \times 0{,}6^2 \times 0{,}4 = 0{,}432$ et $p(X = 3) = 0{,}6^3 = 0{,}216$ (somme $1$ ✓).

![Diagramme en bâtons de la loi de X : 0,064 ; 0,288 ; 0,432 ; 0,216.](/lessons/images/m4-proba-loi.svg "La loi de X : un bâton par valeur, de hauteur p(X = k).")

![Fonction de répartition de X en escalier : 0, puis 0,064, 0,352, 0,784 et 1.](/lessons/images/m4-proba-repartition.svg "La fonction de répartition F(x) = p(X ≤ x). Chaque marche a pour hauteur la probabilité de la valeur correspondante : 0,064 ; 0,352 = 0,064 + 0,288 ; 0,784 ; 1. Le point plein marque la valeur atteinte, le point creux la valeur non atteinte.")

| si $x$ est dans | $F(x)$ |
|---|---|
| $x < 0$ | $0$ |
| $0 \leq x < 1$ | $0{,}064$ |
| $1 \leq x < 2$ | $0{,}352$ |
| $2 \leq x < 3$ | $0{,}784$ |
| $x \geq 3$ | $1$ |

Par exemple $p(1 < X \leq 3) = F(3) - F(1) = 1 - 0{,}352 = 0{,}648$.
:::

:::example[Le plus grand numéro]
On tire un jeton dans chacune de trois urnes contenant les numéros $1$ à $6$, et $X$ est le plus grand des trois numéros. Pour un entier $k$ de $1$ à $6$, $X \leq k$ signifie que **chaque** jeton est $\leq k$ : chaque urne le permet avec la probabilité $\dfrac k6$, et les tirages sont indépendants, donc
$$
\begin{aligned}
F(k) &= p(X \leq k)\\
&= \left(\tfrac k6\right)^3 = \tfrac{k^3}{216}.
\end{aligned}
$$
On en déduit la loi : $p(X = k) = F(k) - F(k-1) = \dfrac{k^3 - (k-1)^3}{216}$, soit $\dfrac{1}{216}, \dfrac{7}{216}, \dfrac{19}{216}, \dfrac{37}{216}, \dfrac{61}{216}, \dfrac{91}{216}$ pour $k = 1, \dots, 6$.

Contrôle : $1 + 7 + 19 + 37 + 61 + 91 = 216$ ✓, et $E(X) = \dfrac{119}{24} \approx 4{,}96$ : le maximum de trois jetons est en moyenne proche de $5$.
:::

## 10. Loi binomiale

:::intuition
Un joueur de fléchettes touche sa cible avec la probabilité $0{,}9$. Sur $10$ tirs, combien de succès ? Chaque tir est un pari « succès ou échec » ; on répète le même pari et on compte les succès. Ce schéma (jouer $n$ fois à pile ou face, éventuellement avec une pièce truquée) est le plus fréquent en probabilités.
:::

:::theorem[Loi binomiale]
On répète $n$ fois, de façon **indépendante**, la même épreuve qui n'a que deux issues : le **succès** (de probabilité $p$) et l'**échec** (de probabilité $q = 1 - p$). Soit $X$ le nombre de succès. Alors, pour $k = 0, 1, \dots, n$ :
$$
p(X = k) = C_n^k\,p^k\,q^{n-k}.
$$
On dit que $X$ suit la **loi binomiale** de paramètres $n$ et $p$, notée $B(n, p)$. Pour $n = 1$, c'est une **loi de Bernoulli**.
:::

:::proof[Loi binomiale]
| Étape | Justification |
|---|---|
| Une issue est une suite de $n$ résultats, succès ou échec | univers de l'expérience |
| Une suite précise ayant $k$ succès et $n - k$ échecs a la probabilité $p^k(1-p)^{n-k}$ | les épreuves sont indépendantes : on multiplie |
| Il y a $C_n^k$ telles suites | on choisit les $k$ positions des succès parmi $n$ |
| Ces suites sont incompatibles : on additionne | additivité |
:::

:::theorem[Espérance et variance]
Si $X$ suit $B(n, p)$, alors
$$
\begin{aligned}
E(X) &= np,\\
V(X) &= np(1-p),\\
\sigma(X) &= \sqrt{np(1-p)}.
\end{aligned}
$$
:::

:::proof[Espérance et variance]
| Étape | Justification |
|---|---|
| $E(X) = \sum_{k=0}^{n} k\,C_n^k\,p^k q^{n-k}$ | définition de l'espérance, $q = 1-p$ |
| $k\,C_n^k = n\,C_{n-1}^{k-1}$ pour $k \geq 1$ | $\dfrac{k\,n!}{k!\,(n-k)!} = \dfrac{n\,(n-1)!}{(k-1)!\,(n-k)!}$ |
| $E(X) = np \sum_{k=1}^{n} C_{n-1}^{k-1}\,p^{k-1} q^{(n-1)-(k-1)} = np\,(p+q)^{n-1} = np$ | formule du binôme, $p + q = 1$ |
| $k(k-1)\,C_n^k = n(n-1)\,C_{n-2}^{k-2}$ pour $k \geq 2$ | même calcul |
| $E\big(X(X-1)\big) = n(n-1)\,p^2\,(p+q)^{n-2} = n(n-1)\,p^2$ | même méthode |
| $E(X^2) = E\big(X(X-1)\big) + E(X) = n(n-1)\,p^2 + np$ | linéarité |
| $V(X) = n(n-1)\,p^2 + np - n^2p^2 = np - np^2 = np(1-p)$ | König-Huygens |
:::

![Trois lois binomiales B(10 ; 0,2), B(10 ; 0,5) et B(10 ; 0,9) superposées en diagrammes en bâtons, avec leur espérance en pointillés.](/lessons/images/m4-proba-binomiale.svg "La loi B(10 ; p) selon p. Pour p = 0,5, elle est symétrique autour de 5 ; pour p = 0,2 elle est tassée vers 0 et pour p = 0,9 vers 10. Le trait pointillé de chaque couleur marque l'espérance np.")

:::method[Reconnaître une loi binomiale]
Il faut les **quatre** conditions : (1) la même épreuve est répétée $n$ fois, (2) les épreuves sont **indépendantes**, (3) chacune n'a que deux issues, (4) la probabilité $p$ du succès est la **même** à chaque épreuve. On compte alors les succès.
:::

:::warning
Un tirage **sans remise** ne donne pas une loi binomiale : la composition de l'urne change à chaque tirage, donc les tirages ne sont pas indépendants et $p$ n'est pas constant. (Les tirages avec remise, eux, sont indépendants.)
:::

:::example[Le joueur de fléchettes]
Le joueur atteint sa cible avec la probabilité $0{,}9$.

**Deux tirs** : $X$ suit $B(2 ; 0{,}9)$.

| $k$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $p(X = k)$ | $0{,}01$ | $0{,}18$ | $0{,}81$ |

Au moins un succès : $1 - 0{,}01 = 0{,}99$.

**Dix tirs** : $Y$ suit $B(10 ; 0{,}9)$. Neuf succès : $p(Y = 9) = C_{10}^9 \times 0{,}9^9 \times 0{,}1 = 10 \times 0{,}387\,42 \times 0{,}1 \approx 0{,}387$. Au moins un : $1 - 0{,}1^{10} = 0{,}999\,999\,999\,9$. Espérance : $E(Y) = 10 \times 0{,}9 = 9$.
:::

:::example[Combien de lancers pour obtenir un 6 ?]
On lance $n$ fois un dé et $A$ est « au moins un $6$ ». Le contraire est « aucun $6$ », de probabilité $\left(\dfrac56\right)^n$ :
$$
p(A) = 1 - \left(\frac56\right)^n.
$$
Pour $n = 3$ : $1 - \dfrac{125}{216} = \dfrac{91}{216} \approx 0{,}421$.

Pour que $p(A) \geq 0{,}9$, il faut $\left(\dfrac56\right)^n \leq 0{,}1$, soit $n \geq \dfrac{\ln 0{,}1}{\ln(5/6)} \approx 12{,}6$ (en divisant par $\ln\frac56 < 0$, on renverse l'inégalité). Il faut donc **au moins $13$ lancers**.

Contrôle : $1 - \left(\dfrac56\right)^{12} \approx 0{,}888 < 0{,}9$ et $1 - \left(\dfrac56\right)^{13} \approx 0{,}907 \geq 0{,}9$ ✓.
:::

## 11. Lois continues

:::intuition
Choisis un réel **au hasard** dans $[0 \,; 1]$. Quelle est la probabilité de tomber exactement sur $0{,}1$ ? Zéro : il y a une infinité de réels et une masse totale de $1$ à répartir. Mais « entre $0{,}5$ et $1$ » a bien une probabilité, $\dfrac12$. Quand la variable prend ses valeurs dans un intervalle, on ne donne plus la probabilité d'un point : on la mesure par une **aire** sous une courbe, la **densité**.
:::

### La loi uniforme

:::definition[Loi uniforme]
Soit $a < b$. La fonction constante $f(x) = \dfrac{1}{b-a}$ sur $[a\,;b]$ est la **densité** de la loi uniforme. Une variable aléatoire $X$ à valeurs dans $[a\,;b]$ suit la **loi uniforme** si, pour tout $[c\,;d] \subset [a\,;b]$,
$$
\begin{aligned}
p(c \leq X \leq d) &= \int_c^d \frac{\mathrm{d}x}{b-a}\\
&= \frac{d - c}{b - a}.
\end{aligned}
$$
:::

Les « chances » sont proportionnelles à la **longueur** de l'intervalle, et l'aire totale vaut $\displaystyle\int_a^b \frac{\mathrm{d}x}{b-a} = 1$. Deux conséquences : $p(X = c) = \displaystyle\int_c^c f = 0$ pour tout $c$ (donc $p(c \leq X \leq d) = p(c < X < d)$), et $p(X \notin [c\,;d]) = 1 - p(c \leq X \leq d)$.

![Densité constante 1/20 de la loi uniforme sur 0 à 20, avec l'aire entre 2 et 5 colorée.](/lessons/images/m4-proba-uniforme.svg "La loi uniforme sur [0 ; 20] : la probabilité d'un intervalle est l'aire du rectangle correspondant, ici 3 × 1/20 = 0,15.")

:::example[Le bus]
Un bus passe toutes les $20$ minutes et le temps d'attente $X$ suit la loi uniforme sur $[0\,;20]$.

- entre $2$ et $5$ minutes : $\dfrac{5-2}{20} = 0{,}15$ ; entre $10$ et $13$ : $\dfrac{3}{20} = 0{,}15$ aussi ;
- exactement $3$ minutes : $0$ ;
- moins de $3$ minutes : $\dfrac{3}{20} = 0{,}15$ ; plus de $3$ minutes : $1 - 0{,}15 = 0{,}85$.
:::

:::property[Fonction de répartition de la loi uniforme]
Pour $X$ uniforme sur $[a\,;b]$, $F(x) = p(X \leq x)$ vaut :
- $0$ si $x < a$ ;
- $\dfrac{x - a}{b - a}$ si $a \leq x \leq b$ ;
- $1$ si $x > b$.

La courbe de $F$ monte en ligne droite de $0$ à $1$ entre $a$ et $b$.
:::

:::example[Un trajet]
Le trajet d'un employé dure $X$ minutes, avec $X$ uniforme sur $[30\,;50]$ : $F(x) = \dfrac{x - 30}{20}$ sur $[30\,;50]$. Alors $p(30 \leq X \leq 40) = F(40) = \dfrac{10}{20} = 0{,}5$ et $p(30 \leq X \leq 43) = \dfrac{13}{20} = 0{,}65$.
:::

### La loi exponentielle

:::definition[Loi exponentielle]
Soit $\lambda > 0$. La fonction $f(t) = \lambda\,e^{-\lambda t}$ sur $[0\,; +\infty[$ est la **densité** de la loi exponentielle de paramètre $\lambda$. C'est bien une densité : l'aire sous la courbe sur $[0\,;x]$ est
$$
\begin{aligned}
\int_0^x \lambda e^{-\lambda t}\,\mathrm{d}t &= \left[-e^{-\lambda t}\right]_0^x\\
&= 1 - e^{-\lambda x},
\end{aligned}
$$
qui tend vers $1$ quand $x \to +\infty$.
Une variable aléatoire $X$ **suit la loi exponentielle de paramètre $\lambda$** si, pour tout $0 \leq c \leq d$, $p(c \leq X \leq d) = \displaystyle\int_c^d \lambda e^{-\lambda t}\,\mathrm{d}t$, ce qui donne
$$
\begin{aligned}
&p(c \leq X \leq d)\\
&= e^{-\lambda c} - e^{-\lambda d},\\
&p(X \geq c) = e^{-\lambda c}.
\end{aligned}
$$
:::

Sa fonction de répartition est $F(x) = p(X \leq x) = 1 - e^{-\lambda x}$ pour $x \geq 0$ (et $0$ pour $x < 0$). La loi exponentielle modélise les **durées de vie** d'un appareil, les temps d'attente.

![Densité exponentielle avec l'aire à droite de 10 colorée, égale à 1/2.](/lessons/images/m4-proba-exponentielle.svg "La loi exponentielle de paramètre ln 2 / 10 : l'aire sous la courbe à droite de 10 vaut 1/2.")

:::example[Trouver le paramètre]
$X$ suit une loi exponentielle et $p(X \geq 10) = 0{,}5$ : la moitié des appareils dure plus de $10$ ans. Alors $e^{-10\lambda} = \dfrac12$, donc $\lambda = \dfrac{\ln 2}{10} \approx 0{,}0693$. On en déduit :

- $p(0 \leq X \leq 10) = 1 - 0{,}5 = 0{,}5$ ;
- $p(100 \leq X \leq 300) = e^{-100\lambda} - e^{-300\lambda} = 2^{-10} - 2^{-30} \approx 9{,}77 \times 10^{-4}$ ;
- $p(X \geq 300) = 2^{-30} \approx 9{,}3 \times 10^{-10}$ : extrêmement rare, car chaque tranche de $10$ ans divise la probabilité de survivre par $2$.
:::

:::example[Un calcul rapide]
Si $X$ suit une loi exponentielle de paramètre $0{,}1$, alors $p(X > 10) = e^{-0{,}1 \times 10} = e^{-1} \approx 0{,}37$.
:::

:::theorem[Absence de mémoire]
Si $X$ suit une loi exponentielle de paramètre $\lambda$, alors pour tous $s, t \geq 0$ :
$$
\begin{aligned}
&p_{(X \geq s)}(X \geq s + t)\\
&= p(X \geq t).
\end{aligned}
$$
:::

:::proof[Absence de mémoire]
| Étape | Justification |
|---|---|
| $(X \geq s + t) \subset (X \geq s)$, donc $(X \geq s+t) \cap (X \geq s) = (X \geq s+t)$ | $t \geq 0$ |
| $p_{(X \geq s)}(X \geq s+t) = \dfrac{p(X \geq s + t)}{p(X \geq s)}$ | définition |
| $= \dfrac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t}$ | on simplifie |
| $= p(X \geq t)$ | $p(X \geq t) = e^{-\lambda t}$ |
:::

:::example[Une ampoule]
La durée de vie d'une ampoule, en heures, suit une loi exponentielle de paramètre $\lambda = 0{,}0004$. Elle dure plus de $1000$ h avec la probabilité $e^{-0{,}4} \approx 0{,}670$. **Sachant qu'elle a déjà tenu $1000$ h**, la probabilité qu'elle tienne encore $1000$ h est la même : $e^{-0{,}4} \approx 0{,}670$. Une ampoule en état de marche ne vieillit pas dans ce modèle : c'est exactement la propriété d'absence de mémoire.
:::

:::remark
La durée de vie **moyenne** est $\dfrac1\lambda$ (ici $2500$ h). On l'obtient par intégration par parties : $\displaystyle\int_0^{x} t\,\lambda e^{-\lambda t}\,\mathrm{d}t = \Big[-t\,e^{-\lambda t}\Big]_0^x + \int_0^x e^{-\lambda t}\,\mathrm{d}t$, qui tend vers $0 + \dfrac1\lambda$ quand $x \to +\infty$.
:::

## 12. Bilan et méthodes pour les exercices

:::summary
- **Uniforme :** $p(A) = \dfrac{\operatorname{card} A}{\operatorname{card} E}$. Contraire : $p(\overline{A}) = 1 - p(A)$. Réunion : $p(A \cup B) = p(A) + p(B) - p(A \cap B)$.
- **Conditionnelle :** $p_B(A) = \dfrac{p(A \cap B)}{p(B)}$, donc $p(A \cap B) = p(B)\,p_B(A)$. **Totales :** $p(A) = \sum p(B_i)\,p_{B_i}(A)$. **Bayes :** $p_A(B_i) = \dfrac{p(B_i)\,p_{B_i}(A)}{p(A)}$.
- **Indépendants :** $p(A \cap B) = p(A)\,p(B)$. Incompatibles et de probabilités non nulles : jamais indépendants.
- **Variable aléatoire :** $E(X) = \sum x_i p_i$, $V(X) = E(X^2) - E(X)^2$, $V(aX+b) = a^2V(X)$. $F(x) = p(X \leq x)$.
- **Binomiale $B(n,p)$ :** $p(X = k) = C_n^k p^k (1-p)^{n-k}$, $E = np$, $V = np(1-p)$.
- **Uniforme sur $[a\,;b]$ :** $p(c \leq X \leq d) = \dfrac{d-c}{b-a}$. **Exponentielle $\lambda$ :** $p(X \geq c) = e^{-\lambda c}$, $F(x) = 1 - e^{-\lambda x}$, absence de mémoire.
:::

:::method[Quel outil pour quelle question ?]
- **« Quelle est la probabilité de… » avec des issues équiprobables** : dénombrer (cas favorables sur cas possibles).
- **« Au moins un… »** : le contraire (« aucun »).
- **Expérience en étapes, ou une donnée « sachant que »** : arbre, probabilités composées.
- **« Sachant que (effet), quelle est la probabilité que (cause) ? »** : Bayes (probabilités totales au dénominateur).
- **Deux événements qui « n'ont rien à voir »** : tester $p(A \cap B) = p(A)\,p(B)$, ne jamais le supposer.
- **Un nombre associé à l'expérience** : variable aléatoire, loi, espérance, variance.
- **On compte des succès sur $n$ épreuves indépendantes identiques** : binomiale.
- **Variable qui prend toutes les valeurs d'un intervalle** : aire sous la densité (uniforme, exponentielle).
:::

:::tic[Simuler pour vérifier un calcul]
Pour estimer la probabilité que la somme de deux dés vaille $7$, on remplit les colonnes `A` et `B` avec `=ENT(6*ALEA())+1` (un dé), la colonne `C` avec `=SI(A2+B2=7;1;0)`, et on recopie ces trois formules sur $1000$ lignes. La fréquence de succès se lit en `E1` :

| cellule | formule | valeur typique |
|---|---|---|
| `E1` | `=MOYENNE(C2:C1001)` | entre $0{,}15$ et $0{,}18$ |

La valeur théorique est $\dfrac16 \approx 0{,}1667$. Chaque nouveau calcul (touche `F9`) donne un autre résultat, mais autour de $\dfrac16$ : l'écart typique est $\sqrt{\dfrac{p(1-p)}{n}}$, soit environ $1{,}2\,\%$ pour $n = 1000$. Pour gagner un chiffre de précision, il faut **cent fois plus** de lignes. La simulation ne remplace pas le calcul, mais elle repère tout de suite un calcul faux.
:::

:::history
Les probabilités naissent en $1654$ d'une correspondance entre Blaise Pascal et Pierre de Fermat sur le « problème des partis » : comment partager la mise d'un jeu interrompu ? Jacques Bernoulli y démontre la loi des grands nombres (son *Ars conjectandi* paraît en $1713$, après sa mort) : la moyenne des résultats se rapproche de l'espérance. Le pasteur Thomas Bayes laisse à sa mort un essai sur le calcul « à l'envers » des causes, publié en $1763$ par son ami Richard Price : c'est la formule de ce chapitre. Andreï Kolmogorov donne en $1933$ la définition moderne d'une probabilité, celle du §2.
:::

## Vérifie-toi

::::check[Au moins un rouge]
Un sac contient $10$ jetons : $4$ rouges et $6$ blancs. On en tire $3$ simultanément. Calculer la probabilité d'obtenir **au moins un** jeton rouge, puis **exactement deux** rouges.

:::answer
Il y a $C_{10}^3 = 120$ tirages équiprobables. **Au moins un rouge** : le contraire est « trois blancs », soit $C_6^3 = 20$ tirages, donc $p = 1 - \dfrac{20}{120} = \dfrac56$. **Exactement deux rouges** : $C_4^2 \times 6 = 36$ tirages, donc $p = \dfrac{36}{120} = \dfrac3{10}$. Contrôle : les quatre cas $0, 1, 2, 3$ rouge comptent $20 + 60 + 36 + 4 = 120$ tirages ✓.
:::
::::

::::check[Deux épreuves]
Un élève réussit l'épreuve de mathématiques ($M$) avec la probabilité $0{,}8$. S'il l'a réussie, il réussit l'épreuve de physique ($S$) avec la probabilité $0{,}75$ ; sinon avec la probabilité $0{,}4$. Calculer $p(S)$, puis la probabilité qu'il ait réussi les maths sachant qu'il a réussi la physique.

:::answer
Par les probabilités totales :
$$
\begin{aligned}
p(S) &= p(M)\,p_M(S)\\
&\quad + p(\overline{M})\,p_{\overline{M}}(S)\\
&= 0{,}8 \cdot 0{,}75\\
&\quad + 0{,}2 \cdot 0{,}4\\
&= 0{,}68.
\end{aligned}
$$
Par Bayes : $p_S(M) = \dfrac{p(M \cap S)}{p(S)} = \dfrac{0{,}6}{0{,}68} = \dfrac{15}{17} \approx 0{,}882$. Contrôle : $0{,}882 > 0{,}8$ : avoir réussi la physique rend la réussite en maths plus probable ✓.
:::
::::

::::check[Indépendants ou pas ?]
On lance deux dés équilibrés. Les événements « la somme vaut $7$ » et « le premier dé donne $3$ » sont-ils indépendants ? Même question avec « la somme vaut $8$ ».

:::answer
Premier dé donne $3$ : $p(B) = \dfrac16$. **Somme $7$** : $p(A) = \dfrac6{36} = \dfrac16$ et $A \cap B = \{(3,4)\}$, donc $p(A \cap B) = \dfrac1{36} = \dfrac16 \times \dfrac16$ : **indépendants** (quel que soit le premier dé, il reste un seul second dé qui fait $7$). **Somme $8$** : $p(A') = \dfrac5{36}$ et $A' \cap B = \{(3,5)\}$, donc $p(A' \cap B) = \dfrac1{36}$, alors que $p(A')\,p(B) = \dfrac5{216} \neq \dfrac6{216}$ : **dépendants** (si le premier dé donne $1$, la somme $8$ est impossible).
:::
::::

::::check[Un dé à trois valeurs]
Un dé a trois faces numérotées $1$, deux faces numérotées $2$ et une face numérotée $3$. On le lance deux fois et $X$ est la somme des deux numéros. Déterminer la loi de $X$, puis $E(X)$, $V(X)$ et $F(3)$.

:::answer
Pour un lancer : $p(1) = \dfrac12$, $p(2) = \dfrac13$, $p(3) = \dfrac16$. Les lancers sont indépendants :

| $x_i$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|
| $p(X = x_i)$ | $\dfrac14$ | $\dfrac13$ | $\dfrac5{18}$ | $\dfrac19$ | $\dfrac1{36}$ |

(par exemple $p(X = 4) = p(2,2) + 2\,p(1,3) = \dfrac19 + \dfrac16 = \dfrac5{18}$ ; somme $\dfrac{9 + 12 + 10 + 4 + 1}{36} = 1$ ✓). Alors
$$
\begin{aligned}
E(X) &= \tfrac{18 + 36 + 40 + 20 + 6}{36}\\
&= \tfrac{120}{36} = \tfrac{10}{3},\\
E(X^2) &= \tfrac{440}{36} = \tfrac{110}{9},\\
V(X) &= \tfrac{110}{9} - \tfrac{100}{9}\\
&= \tfrac{10}{9}.
\end{aligned}
$$
Enfin $F(3) = p(X \leq 3) = \dfrac14 + \dfrac13 = \dfrac7{12}$.
:::
::::

::::check[Un QCM au hasard]
Un QCM comporte $10$ questions à $3$ réponses, dont une seule est exacte. On répond au hasard. Soit $X$ le nombre de bonnes réponses. Calculer $p(X = 2)$, $p(X \geq 1)$, $E(X)$ et $\sigma(X)$.

:::answer
$X$ suit $B\left(10\,;\dfrac13\right)$ : les $10$ réponses sont indépendantes et chacune est juste avec la probabilité $\dfrac13$.
$$
\begin{aligned}
&p(X = 2)\\
&= C_{10}^2 \left(\tfrac13\right)^2 \left(\tfrac23\right)^8\\
&= \tfrac{45 \cdot 256}{3^{10}}\\
&= \tfrac{1280}{6561} \approx 0{,}195.
\end{aligned}
$$
$p(X \geq 1) = 1 - \left(\dfrac23\right)^{10} \approx 1 - 0{,}017 = 0{,}983$. $E(X) = \dfrac{10}{3} \approx 3{,}33$ et $\sigma(X) = \sqrt{10 \times \dfrac13 \times \dfrac23} = \sqrt{\dfrac{20}{9}} \approx 1{,}49$. En répondant au hasard, on a en moyenne $3$ bonnes réponses sur $10$.
:::
::::

::::check[Durée de vie d'une machine]
La durée de vie $X$ d'une machine, en années, suit une loi exponentielle de paramètre $0{,}2$. Calculer $p(X = 10)$, $p(X \leq 10)$ et $p(X \geq 10)$, puis la valeur $c$ telle que $p(X \leq c) = p(X \geq c)$.

:::answer
$p(X = 10) = 0$. $p(X \geq 10) = e^{-0{,}2 \times 10} = e^{-2} \approx 0{,}135$ et $p(X \leq 10) = 1 - e^{-2} \approx 0{,}865$ (somme $1$ ✓). Pour $c$ : $1 - e^{-0{,}2c} = e^{-0{,}2c}$ donne $e^{-0{,}2c} = \dfrac12$, soit $c = \dfrac{\ln 2}{0{,}2} \approx 3{,}47$ ans. C'est la **médiane** : une machine sur deux tombe en panne avant $3{,}47$ ans, alors que la durée de vie moyenne est $\dfrac1{0{,}2} = 5$ ans.
:::
::::

::::challenge
**Le problème de Monty Hall.** Un jeu télévisé propose trois portes : une voiture derrière l'une, des chèvres derrière les deux autres. Tu choisis la porte $1$. L'animateur, qui sait où est la voiture, ouvre une porte qui cache une chèvre, parmi les deux que tu n'as pas choisies (au hasard s'il a le choix), puis te propose de **changer** de porte. Faut-il changer ?

:::answer
Notons $V_i$ « la voiture est derrière la porte $i$ » ($p(V_i) = \dfrac13$) et $O_3$ « l'animateur ouvre la porte $3$ ». Il ne peut pas ouvrir ta porte ni celle de la voiture :
$$
\begin{aligned}
p_{V_1}(O_3) &= \tfrac12,\\
p_{V_2}(O_3) &= 1,\\
p_{V_3}(O_3) &= 0.
\end{aligned}
$$
Par les probabilités totales : $p(O_3) = \dfrac13 \times \dfrac12 + \dfrac13 \times 1 + 0 = \dfrac12$. Par Bayes :
$$
\begin{aligned}
p_{O_3}(V_1) &= \frac{\tfrac13 \cdot \tfrac12}{\tfrac12} = \tfrac13,\\
p_{O_3}(V_2) &= \frac{\tfrac13 \cdot 1}{\tfrac12} = \tfrac23.
\end{aligned}
$$
**Il faut changer** : on gagne avec la probabilité $\dfrac23$ au lieu de $\dfrac13$. L'intuition : ta porte avait $\dfrac13$ de chances dès le départ, et l'animateur, qui ne peut pas ouvrir la bonne porte, ne t'a rien appris sur elle ; toute la probabilité restante, $\dfrac23$, se concentre sur l'autre porte fermée. Si tu en doutes, simule $1000$ parties au tableur comme dans l'encadré du §12.
:::
::::
