---
uid: "0000031"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonctions réciproques"
source: "Facebook: Tunisiamaths / Lycée Pilote de Tunis"
title: "Fonction tangente hyperbolique inverse et suites complexes"
country: "Tunisie"
year: 2025
professor: null
difficulty: "Difficile"
points: 7
tags: ["analyse", "bijection", "réciproque", "suite", "théorème des accroissements finis", "nombres complexes"]
---

Soit la fonction $f$ définie sur $]2, +\infty[$ par : $f(x) = \tan\left(\dfrac{\pi}{x}\right)$.

1.  a) Etudier les variations de $f$.

    b) Montrer que $f$ réalise une bijection de $]2, +\infty[$ sur un intervalle $J$ que l'on déterminera.

    c) On notera $f^{-1}$ la fonction réciproque de $f$. Dresser le tableau de variation de $f^{-1}$.

    d) Construire les courbes $(C)$ de $f$ et $(C')$ de $f^{-1}$ dans un repère orthonormé $(O, \vec{u}, \vec{v})$.

2.  Soit $g$ la fonction définie sur $]0, +\infty[$ par : $g(x) = \dfrac{1}{f^{-1}(x)}$.

    Montrer que $g$ est dérivable sur $]0, +\infty[$ et que $g'(x) = \dfrac{1}{\pi(1+x^2)}$.

3.  On donne la suite $(v_n)$ définie sur $\mathbb{N}^*$ par : $v_n = g\left(\dfrac{1}{n}\right) - g\left(\dfrac{1}{n^2}\right)$.

    a) Montrer que pour tout $n$ de $\mathbb{N}^*$ : $\dfrac{n-1}{n^2} g'\left(\dfrac{1}{n}\right) \leq v_n \leq \dfrac{n-1}{n^2} g'\left(\dfrac{1}{n^2}\right)$.

    b) Déterminer alors $\lim_{n \to +\infty} n v_n$.

4.  Soit $p$ un entier naturel non nul.

    a) Montrer que l'équation : $\tan\left(\dfrac{\pi}{x}\right) = p$ admet dans $]2, +\infty[$ une solution unique $\alpha_p$.

    b) Soit $(u_n)$ la suite définie sur $\mathbb{N}^*$ par : $u_n = \dfrac{1}{n+1} \sum_{k=0}^{n} \alpha_{n+k}$.

    Montrer que pour tout $n$ de $\mathbb{N}^*$, $f^{-1}(2n) \leq u_n \leq f^{-1}(n)$. En déduire la limite de la suite $(u_n)$.

5.  Soit $(t_n)$ la suite définie sur $\mathbb{N}^*$ par : $t_n = \sum_{k=1}^{n} \sin\left(\dfrac{k\pi}{n}\right)$.

    On pose pour tout entier naturel $n$ non nul : $S_n = 1 + z + z^2 + \dots + z^{n-1}$ avec $z = e^{i\frac{\pi}{n}}$.

    a) Vérifier que $(1-z)S_n = 1 - z^n$ et montrer que $S_n = \frac{2}{1 - e^{i\frac{\pi}{n}}}$.

    b) Déterminer la partie réelle et la partie imaginaire de $S_n$.

    c) En déduire que $t_n = \dfrac{1}{f(2n)}$ pour tout entier naturel $n$ non nul.

    d) calculer $\lim_{n \to +\infty} \dfrac{n}{t_n}$.


---

## Solution


**1. a) Variations de $f$**
La fonction $f$ est définie sur $]2, +\infty[$ par $f(x) = \tan\left(\dfrac{\pi}{x}\right)$.
$f$ est dérivable sur cet intervalle comme composée de fonctions dérivables.
$$f'(x) = -\dfrac{\pi}{x^2} \left( 1 + \tan^2\left(\dfrac{\pi}{x}\right) \right)$$
Pour tout $x > 2$, $-\dfrac{\pi}{x^2} < 0$ et le terme entre parenthèses est strictement positif.
Donc **$f'(x) < 0$**. La fonction est strictement décroissante.

* **Limite en $2^+$ :** $\lim_{x \to 2^+} \frac{\pi}{x} = \frac{\pi}{2}$. Donc $\lim_{x \to 2^+} f(x) = +\infty$.
* **Limite en $+\infty$ :** $\lim_{x \to +\infty} \frac{\pi}{x} = 0$. Donc $\lim_{x \to +\infty} f(x) = 0$.

**1. b) Bijection**
$f$ est continue et strictement décroissante sur $]2, +\infty[$. Elle réalise une bijection de cet intervalle vers $J = f(]2, +\infty[) = ]0, +\infty[$.

**1. c) Variations de $f^{-1}$**
$f^{-1}$ est définie sur $J = ]0, +\infty[$. Elle a le même sens de variation que $f$, donc elle est **strictement décroissante**.
* $\lim_{y \to 0^+} f^{-1}(y) = +\infty$
* $\lim_{y \to +\infty} f^{-1}(y) = 2$

**1. d) Courbes**
*(Voi annexe en fin de document pour la figure)*. La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y=x$.

**Partie 2 : Étude de la fonction $g$**

**Expression de $g$**
Soit $y = \tan\left(\frac{\pi}{x}\right)$. Alors $\frac{\pi}{x} = \arctan(y) \iff x = \frac{\pi}{\arctan(y)}$.
D'où $f^{-1}(x) = \frac{\pi}{\arctan(x)}$.
On en déduit $g(x) = \dfrac{1}{f^{-1}(x)} = \dfrac{\arctan(x)}{\pi}$.

**Dérivée**
$g$ est dérivable sur $]0, +\infty[$.
$$g'(x) = \dfrac{1}{\pi} (\arctan(x))' = \dfrac{1}{\pi(1+x^2)}$$

**Partie 3 : Suite $(v_n)$ et TAF**

**3. a) Encadrement**
On applique le Théorème des Accroissements Finis à $g$ sur l'intervalle $[\frac{1}{n^2}, \frac{1}{n}]$ (pour $n \ge 2$). Il existe $c \in ]\frac{1}{n^2}, \frac{1}{n}[$ tel que :
$$g\left(\frac{1}{n}\right) - g\left(\frac{1}{n^2}\right) = g'(c) \left(\frac{1}{n} - \frac{1}{n^2}\right)$$
Comme $g'$ est décroissante sur $\mathbb{R}_+^*$ (car $x \mapsto 1+x^2$ est croissante), on a $g'(\frac{1}{n}) < g'(c) < g'(\frac{1}{n^2})$.
Sachant que $\frac{1}{n} - \frac{1}{n^2} = \frac{n-1}{n^2}$, on obtient :
$$\dfrac{n-1}{n^2} g'\left(\dfrac{1}{n}\right) \leq v_n \leq \dfrac{n-1}{n^2} g'\left(\dfrac{1}{n^2}\right)$$

**3. b) Limite**
On multiplie l'inégalité par $n$ :
$$\dfrac{n(n-1)}{n^2} g'\left(\dfrac{1}{n}\right) \leq n v_n \leq \dfrac{n(n-1)}{n^2} g'\left(\dfrac{1}{n^2}\right)$$
Quand $n \to +\infty$ :
* $\frac{n^2-n}{n^2} \to 1$.
* $g'(\frac{1}{n}) \to g'(0) = \frac{1}{\pi}$ et $g'(\frac{1}{n^2}) \to \frac{1}{\pi}$.
D'après le théorème des gendarmes : $\lim_{n \to +\infty} n v_n = \dfrac{1}{\pi}$.

**Partie 4 : Suite $(u_n)$**

**4. a) Existence de $\alpha_p$**
$f$ est une bijection de $]2, +\infty[$ vers $]0, +\infty[$. Pour tout entier $p \in \mathbb{N}^*$, $p \in ]0, +\infty[$. L'équation $f(x)=p$ admet donc une solution unique $\alpha_p = f^{-1}(p)$.

**4. b) Limite de $(u_n)$**
$u_n = \frac{1}{n+1} \sum_{k=0}^{n} f^{-1}(n+k)$.
Comme $f^{-1}$ est décroissante :
$$n \le n+k \le 2n \implies f^{-1}(2n) \le f^{-1}(n+k) \le f^{-1}(n)$$
En sommant pour $k$ de $0$ à $n$ (soit $n+1$ termes) et en divisant par $n+1$ :
$$f^{-1}(2n) \leq u_n \leq f^{-1}(n)$$
Or $\lim_{y \to +\infty} f^{-1}(y) = 2$. Donc $\lim f^{-1}(2n) = 2$ et $\lim f^{-1}(n) = 2$.
Conclusion : $\lim_{n \to +\infty} u_n = 2$.

**Partie 5 : Complexes**

**5. a) Calcul de $S_n$**
$S_n$ est la somme des termes d'une suite géométrique de raison $z = e^{i\frac{\pi}{n}} \neq 1$.
$S_n = \frac{1-z^n}{1-z}$. Comme $z^n = e^{i\pi} = -1$, on a $S_n = \dfrac{2}{1 - e^{i\frac{\pi}{n}}}$.

**5. b) Parties réelle et imaginaire**
$$S_n = \dfrac{2}{e^{i\frac{\pi}{2n}}(e^{-i\frac{\pi}{2n}} - e^{i\frac{\pi}{2n}})} = \dfrac{2}{e^{i\frac{\pi}{2n}}(-2i\sin(\frac{\pi}{2n}))} = \dfrac{i e^{-i\frac{\pi}{2n}}}{\sin(\frac{\pi}{2n})}$$
$$S_n = \dfrac{i(\cos(\frac{\pi}{2n}) - i\sin(\frac{\pi}{2n}))}{\sin(\frac{\pi}{2n})} = \cot\left(\dfrac{\pi}{2n}\right) i + 1$$
Donc $\text{Re}(S_n) = 1$ et $\text{Im}(S_n) = \cot\left(\dfrac{\pi}{2n}\right)$.

**5. c) Lien avec $t_n$**
$S_n = \sum_{k=0}^{n-1} e^{i\frac{k\pi}{n}}$.
$\text{Im}(S_n) = \sum_{k=0}^{n-1} \sin(\frac{k\pi}{n}) = \sin(0) + \sum_{k=1}^{n-1} \sin(\frac{k\pi}{n}) = t_n$.
D'où $t_n = \cot(\frac{\pi}{2n}) = \dfrac{1}{\tan(\frac{\pi}{2n})} = \dfrac{1}{f(2n)}$.

**5. d) Limite finale**
$$\dfrac{n}{t_n} = n f(2n) = n \tan\left(\dfrac{\pi}{2n}\right)$$
Posons $h = \frac{\pi}{2n}$. Si $n \to +\infty$, $h \to 0$. On a $n = \frac{\pi}{2h}$.
$$\dfrac{n}{t_n} = \dfrac{\pi}{2h} \tan(h) = \dfrac{\pi}{2} \times \dfrac{\tan(h)}{h}$$
Comme $\lim_{h \to 0} \frac{\tan(h)}{h} = 1$, alors $\lim_{n \to +\infty} \dfrac{n}{t_n} = \dfrac{\pi}{2}$.

**Annexe : Figure**
![Description of the figure](/exercises/images/lycee-4eme-math-fonctions-reciproques-0000031.png)