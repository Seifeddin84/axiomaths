---
title: "Équations différentielles : y' = ay, y' = ay + b et y'' + ω²y = 0"
slug: "lycee-4eme-maths-equations-differentielles"
school: "lycee"
level: "4eme"
sections: ["Mathématiques", "Sciences Expérimentales"]
chapter: "Équations différentielles"
summary: "Résoudre une équation où l'inconnue est une fonction : y' = ay (décroissance radioactive), y' = ay + b (refroidissement, perfusion, solution d'équilibre), puis y'' + ω²y = 0 (oscillations d'un ressort). Avec conditions initiales, vérifications numériques et la méthode d'Euler au tableur."
prerequisites: ["Fonctions exponentielles", "Dérivation", "Primitives", "Trigonométrie"]
source: "Programme officiel 4ème année Mathématiques (répartition 2022-23), chapitre « Équations différentielles »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une tasse de café brûlant refroidit vite au début, puis de plus en plus lentement. Un échantillon radioactif perd des atomes à une vitesse proportionnelle au nombre d'atomes restants. Un médicament perfusé à débit constant est éliminé par le corps proportionnellement à sa concentration. Une masse accrochée à un ressort est rappelée vers sa position de repos avec une force proportionnelle à son écart.

Dans chaque cas, **on ne connaît pas la fonction** (la température, la quantité, la concentration, la position) : on connaît une **loi qui relie la fonction à sa dérivée**. Une telle loi s'appelle une **équation différentielle**.

:::intuition
Une équation ordinaire (« $x^2 = 9$ ») a pour inconnue un **nombre**. Une équation différentielle a pour inconnue une **fonction**. Au lieu de dire « la courbe passe par tel point », la loi dit « **en chaque point, la pente de la courbe vaut tant** ». Imagine qu'on plante, en chaque point du plan, une petite flèche qui indique la pente à suivre : une solution est une courbe qui suit les flèches, comme une feuille portée par un courant. La loi fixe le courant, et la condition initiale dit où on lâche la feuille.
:::

## 1. Vocabulaire et vérification

:::definition[Équation différentielle]
Une **équation différentielle** est une égalité qui relie une fonction inconnue $y$ et une ou plusieurs de ses dérivées $y'$, $y''$, $\dots$ Une **solution** sur $\mathbb R$ est une fonction $f$ dérivable (autant de fois que nécessaire) qui vérifie l'égalité **pour tout réel $x$**. **Résoudre** l'équation, c'est trouver toutes ses solutions. L'**ordre** est le plus grand ordre de dérivation qui apparaît.
:::

Dans ce chapitre :

| Équation | Ordre | Ce qu'elle décrit |
|---|---|---|
| $y' = ay$ | $1$ | croissance ou décroissance proportionnelle à la quantité |
| $y' = ay + b$ | $1$ | même chose avec un apport ou un prélèvement constant |
| $y'' + \omega^2 y = 0$ | $2$ | oscillations |

La première chose à savoir faire, c'est **vérifier** qu'une fonction est solution : on la dérive, on remplace, on compare.

:::method[Vérifier qu'une fonction est solution]
1. **Calculer** $f'$ (et $f''$ si l'équation est d'ordre $2$).
2. **Remplacer** $f$ et ses dérivées dans l'équation.
3. **Simplifier** et comparer les deux membres **pour tout $x$**. Une égalité vraie en un seul point ne prouve rien.

**Exemple 1.** $f(x) = e^{3x}$ est-elle solution de $y' = 3y$ ? On a $f'(x) = 3e^{3x} = 3f(x)$ : oui.

**Exemple 2.** $f(x) = x\,e^{x}$ est-elle solution de $y' = y$ ? On a $f'(x) = (1 + x)e^x$, qui n'est pas égal à $f(x) = x\,e^x$. Non. Contrôle en $x = 1$ : $f'(1) = 2e \approx 5{,}437$ alors que $f(1) = e \approx 2{,}718$.
:::

Remarque importante : **$f(x) = 5e^{3x}$, $f(x) = -e^{3x}$ et $f = 0$ sont toutes solutions de $y' = 3y$**. Une équation différentielle a en général une **infinité** de solutions, qui dépendent d'une ou plusieurs constantes. Pour en choisir une, il faut une **condition initiale**.

## 2. L'équation $y' = ay$

Que doit faire une fonction dont la dérivée est proportionnelle à elle-même ? Tu connais déjà un candidat : $e^{ax}$ a pour dérivée $a\,e^{ax}$. Reste à voir s'il y en a d'autres.

:::theorem[Solutions de $y' = ay$]
Soit $a$ un réel. Les solutions sur $\mathbb R$ de l'équation $y' = ay$ sont exactement les fonctions
$$
f(x) = C\,e^{ax}, \qquad C \in \mathbb R.
$$
:::

:::proof[Solutions de $y' = ay$]
| Étape | Justification |
|---|---|
| Si $f(x) = Ce^{ax}$, alors $f'(x) = aCe^{ax} = a f(x)$ : ces fonctions sont bien des solutions | dérivée de $e^{u}$ |
| Réciproquement, soit $f$ une solution. On pose $g(x) = f(x)\,e^{-ax}$, dérivable sur $\mathbb R$ | produit de fonctions dérivables |
| $g'(x) = f'(x)\,e^{-ax} - a f(x)\,e^{-ax}$ | dérivée d'un produit, et $\left(e^{-ax}\right)' = -a\,e^{-ax}$ |
| $= \bigl(f'(x) - a f(x)\bigr)e^{-ax} = 0$ | hypothèse $f' = af$ |
| donc $g$ est constante : $g(x) = C$ | une fonction de dérivée nulle sur un intervalle |
| d'où $f(x)\,e^{-ax} = C$, c'est-à-dire $\textcolor{#ea580c}{f(x) = C\,e^{ax}}$ | on multiplie par $e^{ax}$ |
:::

C'est la même preuve que l'unicité de l'exponentielle dans le chapitre précédent : on multiplie par $e^{-ax}$ pour « effacer » la croissance, et ce qui reste est constant.

### Choisir la solution : la condition initiale

:::property[Condition initiale]
Pour tous réels $x_0$ et $y_0$, il existe **une unique** solution de $y' = ay$ telle que $f(x_0) = y_0$ :
$$
f(x) = y_0\,e^{a(x - x_0)}.
$$
:::

Pourquoi ? La condition $Ce^{ax_0} = y_0$ impose $C = y_0\,e^{-ax_0}$, donc une seule valeur de $C$.

:::example[Une solution avec condition]
Résoudre $y' = -3y$ avec $f(1) = 2$.

Solutions : $f(x) = Ce^{-3x}$. La condition $Ce^{-3} = 2$ donne $C = 2e^{3}$, donc $f(x) = 2e^{3}e^{-3x} = 2\,e^{-3(x - 1)}$.

Contrôle : $f(1) = 2e^{0} = 2$ ✓ ; $f'(x) = -6\,e^{-3(x-1)} = -3f(x)$ ✓ ; $f(2) = 2e^{-3} \approx 0{,}0996$ : la quantité a presque disparu après une unité de temps.
:::

Le signe de $a$ décide de tout : si $a > 0$, les solutions non nulles **explosent** ; si $a < 0$, elles **s'éteignent** vers $0$ ; si $a = 0$, elles sont constantes.

### Application : la décroissance radioactive

Si $N(t)$ est le nombre d'atomes d'un échantillon, la loi physique dit que $N'(t) = -\lambda N(t)$ avec $\lambda > 0$ (la constante de désintégration). Donc
$$
N(t) = N_0\,e^{-\lambda t}.
$$
La **demi-vie** $t_{1/2}$ est le temps au bout duquel il reste la moitié : $e^{-\lambda t_{1/2}} = \dfrac12$, donc $t_{1/2} = \dfrac{\ln 2}{\lambda}$.

:::example[Le carbone 14]
Demi-vie $t_{1/2} = 5\,730$ ans, donc $\lambda = \dfrac{\ln 2}{5730} \approx 1{,}2097\times 10^{-4}$ par an. Contrôle : $e^{-\lambda\times 5730} = e^{-\ln 2} = \dfrac12$ ✓. C'est la même relation que dans le chapitre précédent, où l'on écrivait $\left(\frac12\right)^{t/5730}$ : les deux écritures sont identiques puisque $\left(\frac12\right)^{t/5730} = e^{-t\ln 2/5730}$.
:::

## 3. L'équation $y' = ay + b$

Rajoutons un **apport constant** $b$ : $y' = ay + b$. Le café refroidit vers la température de la pièce, la perfusion apporte une dose fixe. Il n'y a plus de solutions « pures » $Ce^{ax}$ : il y a un nouvel acteur.

:::intuition
Cherche d'abord une solution **constante** : si $y$ ne bouge pas, $y' = 0$, donc $ay + b = 0$, c'est-à-dire $y = -\dfrac{b}{a}$. C'est la **valeur d'équilibre** (la température de la pièce, la concentration où l'apport compense l'élimination). Ensuite, mesure tout **par rapport à cet équilibre** : l'écart $z = y + \dfrac ba$ obéit à la loi simple $z' = az$, qu'on sait résoudre.
:::

:::theorem[Solutions de $y' = ay + b$]
Soient $a \neq 0$ et $b$ deux réels. Les solutions sur $\mathbb R$ de $y' = ay + b$ sont exactement les fonctions
$$
f(x) = C\,e^{ax} - \dfrac{b}{a}, \qquad C \in \mathbb R.
$$
:::

:::proof[Solutions de $y' = ay + b$]
| Étape | Justification |
|---|---|
| Soit $f$ dérivable sur $\mathbb R$. On pose $g(x) = f(x) + \dfrac ba$ ; alors $g' = f'$ | $\dfrac ba$ est une constante |
| $f$ est solution $\iff f' = af + b$ | définition |
| $\iff g' = a\left(g - \dfrac ba\right) + b$ | $f = g - \dfrac ba$ |
| $\iff g' = ag - b + b = ag$ | on développe |
| $\iff g(x) = Ce^{ax}$ avec $C \in \mathbb R$ | théorème de la section 2 |
| $\iff \textcolor{#ea580c}{f(x) = Ce^{ax} - \dfrac ba}$ | on revient à $f = g - \dfrac ba$ |
:::

:::warning
**Le cas $a = 0$ est différent.** L'équation devient $y' = b$ : il ne reste que le calcul d'une primitive, et $f(x) = bx + C$. La formule $Ce^{ax} - \dfrac ba$ n'a aucun sens quand $a = 0$ (division par $0$).
:::

### Que deviennent les solutions ?

On lit le comportement sur la formule $f(x) = Ce^{ax} - \dfrac ba$ :

- Si $a < 0$ : $e^{ax} \to 0$ quand $x \to +\infty$, donc **toutes** les solutions tendent vers $-\dfrac ba$. L'équilibre est **stable** : on s'en rapproche quel que soit le point de départ.
- Si $a > 0$ : $e^{ax} \to +\infty$, donc toute solution avec $C \neq 0$ **s'éloigne** de l'équilibre. Il est **instable** : seule la solution constante y reste.

![Champs de pentes pour y' = −2y + 6 et y' = 2y − 6](/lessons/images/m4-ed-champ.svg "Chaque petit trait donne la pente imposée par l'équation en ce point. À gauche, y' = -2y + 6 : l'équilibre y = 3 attire toutes les solutions, et celle qui part de (0, 1) est y = 3 − 2e⁻²ˣ. À droite, y' = 2y - 6 : le même équilibre repousse les solutions, sauf la solution constante.")

:::example[Une équation et sa solution]
Résoudre $y' = -2y + 6$ avec $f(0) = 1$.

Ici $a = -2$, $b = 6$ et l'équilibre vaut $-\dfrac ba = 3$. Solutions : $f(x) = Ce^{-2x} + 3$. La condition $f(0) = C + 3 = 1$ donne $C = -2$ :
$$
f(x) = 3 - 2e^{-2x}.
$$
Contrôle : $f'(x) = 4e^{-2x}$ et $-2f(x) + 6 = -6 + 4e^{-2x} + 6 = 4e^{-2x}$ ✓ ; $f(1) = 3 - 2e^{-2} \approx 2{,}7293$ ; $f(x) \to 3$ quand $x \to +\infty$.
:::

:::method[Résoudre y' = ay + b avec condition initiale]
1. **Mettre l'équation sous la forme $y' = ay + b$** et lire $a$ et $b$. Si $a = 0$, c'est une primitive.
2. **Calculer l'équilibre** $-\dfrac ba$ et écrire $f(x) = Ce^{ax} - \dfrac ba$.
3. **Utiliser la condition** $f(x_0) = y_0$ pour trouver $C$.
4. **Vérifier** en dérivant et en testant la condition.
:::

### Application 1 : la loi de refroidissement de Newton

Un café à $90\,°\mathrm{C}$ est posé dans une pièce à $20\,°\mathrm{C}$. La vitesse de refroidissement est proportionnelle à l'écart avec la pièce : $T'(t) = -k\bigl(T(t) - 20\bigr)$ avec $k > 0$, soit $T' = -kT + 20k$.

C'est du type $y' = ay + b$ avec $a = -k$ et $b = 20k$, d'équilibre $-\dfrac ba = 20$ (la température de la pièce). Donc $T(t) = Ce^{-kt} + 20$, et $T(0) = 90$ donne $C = 70$ :
$$
T(t) = 20 + 70\,e^{-kt}.
$$
Si le café est à $60\,°\mathrm{C}$ au bout de $10$ minutes : $20 + 70e^{-10k} = 60$, donc $e^{-10k} = \dfrac47$ et $k = \dfrac{\ln(7/4)}{10} \approx 0{,}0560$ par minute.

![Refroidissement d'un café](/lessons/images/m4-ed-newton.svg "T(t) = 20 + 70 e⁻ᵏᵗ avec k = ln(7/4)/10. Le café passe de 90 °C à 60 °C en 10 minutes, atteint 30 °C au bout d'environ 34,8 minutes, et se rapproche de 20 °C sans jamais l'atteindre.")

:::example[Questions sur le café]
- Température après $20$ minutes : $T(20) = 20 + 70\left(\dfrac47\right)^2 = 20 + 70\times\dfrac{16}{49} \approx 42{,}86\,°\mathrm{C}$. On note que $\left(\frac47\right)^2$ vient de $e^{-20k} = \left(e^{-10k}\right)^2$.
- À partir de quand est-il à $30\,°\mathrm{C}$ (buvable) ? $20 + 70e^{-kt} = 30$ donne $e^{-kt} = \dfrac17$, donc $t = \dfrac{\ln 7}{k} = \dfrac{10\ln 7}{\ln(7/4)} \approx 34{,}8$ minutes. Contrôle : $e^{-kt} = \dfrac17$ donne bien $T = 20 + \dfrac{70}{7} = 30$ ✓.
- Atteindra-t-il $20\,°\mathrm{C}$ ? Non : $70e^{-kt} > 0$ pour tout $t$, il s'en approche sans jamais l'atteindre.
:::

### Application 2 : une perfusion

Un médicament est perfusé et la concentration $C(t)$ (en mg/L, $t$ en heures) vérifie $C'(t) = -0{,}2\,C(t) + 3$ : le corps élimine $20\,\%$ de ce qu'il contient par heure, et la perfusion apporte $3$ mg/L par heure. L'équilibre est $-\dfrac{3}{-0{,}2} = 15$. Avec $C(0) = 0$ : $C(t) = 15 - 15e^{-0{,}2t} = 15\left(1 - e^{-0{,}2t}\right)$.

:::example[Quand atteint-on 10 mg/L ?]
$15\left(1 - e^{-0{,}2t}\right) = 10 \iff e^{-0{,}2t} = \dfrac13 \iff t = 5\ln 3 \approx 5{,}49$ heures. Contrôle : $C(5{,}49) = 15\left(1 - \dfrac13\right) = 10$ ✓. Et $C(t) \to 15$ quand $t \to +\infty$ : on s'approche de la concentration d'équilibre $15$ mg/L, sans jamais la dépasser.
:::

:::tic[Avec un tableur : la méthode d'Euler]
Comment un ordinateur résout-il une équation différentielle sans formule ? Il avance **pas à pas** : sur un petit pas $h$, il remplace la courbe par sa tangente. Pour $y' = ay + b$ :
$$
y_{n+1} = y_n + h\,(a\,y_n + b).
$$
Pour $y' = -2y + 6$ avec $y(0) = 1$ et $h = 0{,}1$, on tape en `B2` la valeur $1$ puis en `B3` la formule `=B2+0.1*(-2*B2+6)` à recopier vers le bas. Elle revient à $y_{n+1} = 0{,}8\,y_n + 0{,}6$, une suite arithmético-géométrique de terme général $y_n = 3 - 2\times 0{,}8^n$.

| pas $h$ | $0{,}1$ | $0{,}01$ | exacte |
|---|---|---|---|
| valeur approchée de $f(1)$ | $2{,}7853$ | $2{,}7348$ | $2{,}7293$ |

Plus le pas est petit, plus on se rapproche de la vraie solution. On retrouve ici la limite $\left(1 + \dfrac xn\right)^n \to e^x$ du chapitre sur les exponentielles : $(1 - 2h)^{1/h} \to e^{-2}$ quand $h \to 0$.
:::

## 4. L'équation $y'' + \omega^2 y = 0$

Un ressort : la force de rappel est proportionnelle à l'écart, $m\,x'' = -k\,x$, soit $x'' + \dfrac km\,x = 0$. L'accélération est l'**opposée** (à un coefficient près) de la position.

:::intuition
Quelle fonction a une dérivée seconde égale à son opposée ? Tu en connais deux : $(\cos x)'' = -\cos x$ et $(\sin x)'' = -\sin x$. Avec le facteur $\omega$ dans l'argument, chaque dérivation ajoute un facteur $\omega$, donc deux dérivations ajoutent $\omega^2$ : $(\cos\omega x)'' = -\omega^2\cos\omega x$. Les fonctions qui oscillent sont solutions, et leurs combinaisons aussi.
:::

:::theorem[Solutions de $y'' + \omega^2 y = 0$]
Soit $\omega > 0$. Les solutions sur $\mathbb R$ de $y'' + \omega^2 y = 0$ sont exactement les fonctions
$$
f(x) = A\cos(\omega x) + B\sin(\omega x), \qquad A,\ B \in \mathbb R.
$$
:::

:::proof[Solutions de $y'' + \omega^2 y = 0$]
| Étape | Justification |
|---|---|
| Si $f = A\cos\omega x + B\sin\omega x$, alors $f'' = -A\omega^2\cos\omega x - B\omega^2\sin\omega x = -\omega^2 f$ : ce sont des solutions | on dérive deux fois |
| Réciproquement, soit $f$ une solution. On pose $g = f\cos\omega x - \dfrac{f'}{\omega}\sin\omega x$ et $h = f\sin\omega x + \dfrac{f'}{\omega}\cos\omega x$ | $f$ est deux fois dérivable, donc $g$ et $h$ sont dérivables |
| $g' = -\dfrac{\sin\omega x}{\omega}\left(f'' + \omega^2 f\right) = 0$ | les termes en $f'\cos\omega x$ s'annulent, puis hypothèse |
| $h' = \dfrac{\cos\omega x}{\omega}\left(f'' + \omega^2 f\right) = 0$ | les termes en $f'\sin\omega x$ s'annulent, puis hypothèse |
| donc $g = A$ et $h = B$ sont des constantes | dérivée nulle sur un intervalle |
| $g\cos\omega x + h\sin\omega x = f\left(\cos^2\omega x + \sin^2\omega x\right) = f$ | les termes en $f'$ s'annulent |
| d'où $\textcolor{#ea580c}{f(x) = A\cos\omega x + B\sin\omega x}$ | on remplace $g$ et $h$ par $A$ et $B$ |
:::

### Amplitude, phase, période

:::property[Forme amplitude-phase]
Si $(A, B) \neq (0, 0)$, posons $R = \sqrt{A^2 + B^2}$ ; il existe un réel $\varphi$ tel que $\cos\varphi = \dfrac AR$ et $\sin\varphi = \dfrac BR$, et
$$
A\cos\omega x + B\sin\omega x = R\cos(\omega x - \varphi).
$$
La solution oscille entre $-R$ et $R$ ($R$ est l'**amplitude**), avec la **période** $T = \dfrac{2\pi}{\omega}$.
:::

Pour le voir, on développe : $R\cos(\omega x - \varphi) = R\cos\varphi\cos\omega x + R\sin\varphi\sin\omega x = A\cos\omega x + B\sin\omega x$.

### Conditions initiales

Une équation d'ordre $2$ a **deux** constantes, donc il faut **deux** conditions : la position et la vitesse initiales. Avec $f(0) = \alpha$ et $f'(0) = \beta$, comme $f'(x) = -A\omega\sin\omega x + B\omega\cos\omega x$, on obtient $A = f(0)$ et $B = \dfrac{f'(0)}{\omega}$.

:::example[Une solution avec ses deux conditions]
Résoudre $y'' + 4y = 0$ avec $f(0) = 1$ et $f'(0) = 2\sqrt3$.

Ici $\omega = 2$. On trouve $A = f(0) = 1$ et $B = \dfrac{2\sqrt3}{2} = \sqrt3$, donc $f(x) = \cos 2x + \sqrt3\sin 2x$. Amplitude : $R = \sqrt{1 + 3} = 2$, et $\cos\varphi = \dfrac12$, $\sin\varphi = \dfrac{\sqrt3}{2}$, donc $\varphi = \dfrac\pi3$ :
$$
f(x) = 2\cos\left(2x - \dfrac\pi3\right).
$$
Contrôle : $f(0) = 2\cos\left(-\dfrac\pi3\right) = 1$ ✓ ; le maximum $2$ est atteint quand $2x - \dfrac\pi3 = 0$, c'est-à-dire en $x = \dfrac\pi6$ ✓ ; la période est $\dfrac{2\pi}{2} = \pi$.
:::

![Solutions de y'' + 4y = 0](/lessons/images/m4-ed-oscillation.svg "À gauche, les deux solutions de base cos 2x et sin 2x, de période π. À droite, la solution avec f(0) = 1 et f'(0) = 2√3 : c'est la somme cos 2x + √3 sin 2x (en pointillés les deux composantes), qui oscille entre -2 et 2 avec son maximum en x = π/6.")

:::example[Le ressort]
Une masse $m = 0{,}5$ kg est fixée à un ressort de raideur $k = 200$ N/m. Alors $x'' + \dfrac{200}{0{,}5}\,x = 0$, soit $x'' + 400\,x = 0$, donc $\omega = \sqrt{400} = 20$ rad/s et la période est $T = \dfrac{2\pi}{20} \approx 0{,}314$ s. On écarte la masse de $5$ cm et on la lâche sans vitesse : $x(0) = 0{,}05$ et $x'(0) = 0$ donnent $A = 0{,}05$ et $B = 0$, donc
$$
x(t) = 0{,}05\cos(20t)\ \text{ (en mètres)}.
$$
Contrôle : $x''(t) = -0{,}05\times 400\cos 20t = -400\,x(t)$ ✓ ; en $t = 0{,}1$ s, $x = 0{,}05\cos 2 \approx -0{,}0208$ m : la masse est déjà de l'autre côté.
:::

:::warning
**Ne pas confondre les signes.** $y'' + \omega^2 y = 0$ décrit des oscillations. Avec l'autre signe, $y'' - \omega^2 y = 0$, l'accélération pousse **dans le même sens que l'écart** : les solutions sont $Ae^{\omega x} + Be^{-\omega x}$, qui n'oscillent pas. Vérification : $\left(e^{\omega x}\right)'' = \omega^2 e^{\omega x}$.
:::

## 5. Méthodes pour les exercices

| Équation | Solutions | Constantes |
|---|---|---|
| $y' = ay$ | $f(x) = Ce^{ax}$ | $f(x_0) = y_0$ donne $C = y_0\,e^{-ax_0}$ |
| $y' = ay + b$, $a \neq 0$ | $f(x) = Ce^{ax} - \dfrac ba$ | $f(x_0) = y_0$ donne $C$ ; équilibre $-\dfrac ba$ |
| $y' = b$ | $f(x) = bx + C$ | primitive |
| $y'' + \omega^2 y = 0$ | $f(x) = A\cos\omega x + B\sin\omega x$ | $A = f(0)$, $B = \dfrac{f'(0)}{\omega}$ |

| Situation | Que faire |
|---|---|
| « Montrer que $f$ est solution » | dériver, remplacer, simplifier, **sans résoudre** |
| « La vitesse est proportionnelle à… » | écrire $y' = ay$ ou $y' = a(y - y_{\text{éq}})$, identifier $a$ et $b$ |
| Équation de la forme $y' = a(y - c)$ | l'équilibre est $c$, la solution est $c + Ce^{ax}$ |
| Demi-vie, temps de doublement | $e^{at} = \dfrac12$ ou $2$, d'où $t = \dfrac{\ln 2}{\lvert a\rvert}$ |
| Limite d'une solution quand $x \to +\infty$ | signe de $a$ : équilibre si $a < 0$, explosion si $a > 0$ |
| Oscillations | amplitude $R = \sqrt{A^2 + B^2}$, période $\dfrac{2\pi}{\omega}$ |
| Solution qui vérifie une propriété sur $f$ et $f(-x)$ | dériver pour se ramener à une équation d'ordre $2$ (voir le défi) |

## Vérifie-toi

::::check[Vérifier une solution]
La fonction $f(x) = 2e^{3x} - 1$ est-elle solution de $y' = 3y + 3$ ? Donner toutes les solutions de cette équation.

:::answer
$f'(x) = 6e^{3x}$ et $3f(x) + 3 = 6e^{3x} - 3 + 3 = 6e^{3x}$ : oui. Ici $a = 3$, $b = 3$, l'équilibre est $-\dfrac33 = -1$, donc toutes les solutions sont $f(x) = Ce^{3x} - 1$, $C \in \mathbb R$. Celle de l'énoncé correspond à $C = 2$. Contrôle en $x = 0$ : $f(0) = 1$, $f'(0) = 6$ et $3\times 1 + 3 = 6$ ✓.
:::
::::

::::check[Avec une condition]
Résoudre $y' = 2y - 4$ avec $f(1) = 3$.

:::answer
$a = 2$, $b = -4$, l'équilibre est $-\dfrac{-4}{2} = 2$, donc $f(x) = Ce^{2x} + 2$. La condition $Ce^{2} + 2 = 3$ donne $C = e^{-2}$, soit $f(x) = e^{2x - 2} + 2 = e^{2(x-1)} + 2$. Contrôle : $f(1) = 1 + 2 = 3$ ✓ ; $f'(x) = 2e^{2x-2}$ et $2f(x) - 4 = 2e^{2x-2} + 4 - 4$ ✓.
:::
::::

::::check[Radioactivité]
L'iode 131 a une demi-vie de $8$ jours. Au bout de combien de temps ne reste-t-il que $10\,\%$ de l'échantillon ?

:::answer
$N(t) = N_0e^{-\lambda t}$ avec $\lambda = \dfrac{\ln 2}{8} \approx 0{,}0866$ par jour. On veut $e^{-\lambda t} = 0{,}1$, donc $t = \dfrac{\ln 10}{\lambda} = 8\times\dfrac{\ln 10}{\ln 2} \approx 8\times 3{,}3219 \approx 26{,}6$ jours. Contrôle : $\left(\dfrac12\right)^{26{,}6/8} = \left(\dfrac12\right)^{3{,}32} \approx 0{,}1$ ✓.
:::
::::

::::check[Oscillateur]
Résoudre $y'' + 9y = 0$ avec $f(0) = 2$ et $f'(0) = 3$. Donner l'amplitude et la période.

:::answer
$\omega = 3$, $A = f(0) = 2$ et $B = \dfrac{f'(0)}{3} = 1$, donc $f(x) = 2\cos 3x + \sin 3x$. Amplitude $R = \sqrt{4 + 1} = \sqrt5 \approx 2{,}236$ ; période $\dfrac{2\pi}{3} \approx 2{,}094$. On a $f(x) = \sqrt5\cos(3x - \varphi)$ avec $\tan\varphi = \dfrac12$, soit $\varphi \approx 0{,}4636$. Contrôle : en $x = \dfrac\varphi3 \approx 0{,}1545$, $f = 2\cos 0{,}4636 + \sin 0{,}4636 \approx 1{,}789 + 0{,}447 = 2{,}236$ ✓.
:::
::::

::::check[Le cas $a = 0$]
Pourquoi la formule $Ce^{ax} - \dfrac ba$ ne s'applique-t-elle pas à $y' = 3$ ? Résoudre cette équation avec $f(0) = 1$.

:::answer
Elle contient une division par $a = 0$. L'équation $y' = 3$ demande une primitive de la fonction constante $3$ : $f(x) = 3x + C$, et $f(0) = C = 1$ donne $f(x) = 3x + 1$. Contrôle : $f'(x) = 3$ ✓ et $f(0) = 1$ ✓.
:::
::::

::::challenge
Trouver toutes les fonctions $f$ dérivables sur $\mathbb R$ telles que $f'(x) = f(-x)$ pour tout réel $x$.

:::answer
Comme $f$ est dérivable, $x \longmapsto f(-x)$ l'est aussi, donc $f'$ est dérivable. On dérive l'égalité : $f''(x) = -f'(-x)$. Or $f'(-x) = f\bigl(-(-x)\bigr) = f(x)$ (l'égalité de départ, en $-x$), donc $f'' = -f$, c'est-à-dire $f'' + f = 0$ et $f(x) = A\cos x + B\sin x$. Reste à imposer l'égalité de départ : $f'(x) = -A\sin x + B\cos x$ et $f(-x) = A\cos x - B\sin x$. Ces deux fonctions sont égales pour tout $x$ si et seulement si $B = A$. Les solutions sont les $f(x) = A(\cos x + \sin x)$. Contrôle avec $A = 1$ en $x = 0{,}5$ : $f'(0{,}5) = \cos 0{,}5 - \sin 0{,}5 \approx 0{,}3982$ et $f(-0{,}5) = \cos 0{,}5 - \sin 0{,}5 \approx 0{,}3982$ ✓.
:::
::::
