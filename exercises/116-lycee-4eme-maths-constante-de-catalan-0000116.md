---
uid: "0000116"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Axiomaths"
title: "La constante de Catalan"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["constante-de-catalan", "integrales", "fonctions-reciproques", "suites-reelles", "integration-par-parties"]
---

On pose, pour tout $n \in \mathbb{N}$ : $u_n = \displaystyle\sum_{k=0}^{n} \dfrac{(-1)^k}{(2k+1)^2} = 1 - \dfrac{1}{3^2} + \dfrac{1}{5^2} - \dots + \dfrac{(-1)^n}{(2n+1)^2}$.

Le but de l'exercice est de montrer que la suite $(u_n)$ converge vers une limite $G$ (appelée **constante de Catalan**), de l'exprimer à l'aide d'intégrales et d'en donner un encadrement.

### Partie A

1. Montrer que la fonction $\tan$ réalise une bijection de $\left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[$ sur $\mathbb{R}$. On note $\varphi$ sa fonction réciproque.

2. Montrer que $\varphi$ est dérivable sur $\mathbb{R}$ et que pour tout réel $x$ : $\varphi'(x) = \dfrac{1}{1 + x^2}$.

3. a. Montrer que pour tout $t \geq 0$ : $1 - t^2 \leq \dfrac{1}{1 + t^2} \leq 1$.

   b. En déduire que pour tout $x \geq 0$ : $x - \dfrac{x^3}{3} \leq \varphi(x) \leq x$.

4. On considère la fonction $g$ définie sur $[0, 1]$ par : $g(x) = \dfrac{\varphi(x)}{x}$ si $x \in \,]0, 1]$ et $g(0) = 1$.

   Montrer que $g$ est continue sur $[0, 1]$. On pose $G = \displaystyle\int_0^1 g(x)\,dx$.

### Partie B

1. Montrer que pour tout $n \in \mathbb{N}$ et tout réel $t$ :
   $$\displaystyle \dfrac{1}{1 + t^2} = \sum_{k=0}^{n} (-1)^k t^{2k} + (-1)^{n+1}\dfrac{t^{2n+2}}{1 + t^2}$$

2. Pour $n \in \mathbb{N}$ et $x \in [0, 1]$, on pose $R_n(x) = \displaystyle\int_0^x \dfrac{t^{2n+2}}{1 + t^2}\,dt$.

   a. Montrer que pour tout $x \in [0, 1]$ : $\varphi(x) = \displaystyle\sum_{k=0}^{n} \dfrac{(-1)^k x^{2k+1}}{2k+1} + (-1)^{n+1}R_n(x)$.

   b. Montrer que pour tout $x \in [0, 1]$ : $0 \leq R_n(x) \leq \dfrac{x^{2n+3}}{2n+3}$.

3. On considère la fonction $\rho_n$ définie sur $[0, 1]$ par $\rho_n(x) = \dfrac{R_n(x)}{x}$ si $x \in \,]0, 1]$ et $\rho_n(0) = 0$.

   a. Montrer que $\rho_n$ est continue sur $[0, 1]$ et que pour tout $x \in [0, 1]$ : $0 \leq \rho_n(x) \leq \dfrac{x^{2n+2}}{2n+3}$.

   b. Vérifier que pour tout $x \in [0, 1]$ : $g(x) = \displaystyle\sum_{k=0}^{n} \dfrac{(-1)^k x^{2k}}{2k+1} + (-1)^{n+1}\rho_n(x)$.

4. a. En déduire que pour tout $n \in \mathbb{N}$ : $G = u_n + (-1)^{n+1}\displaystyle\int_0^1 \rho_n(x)\,dx$.

   b. Montrer que pour tout $n \in \mathbb{N}$ : $0 \leq (-1)^{n+1}\left(G - u_n\right) \leq \dfrac{1}{(2n+3)^2}$.

   c. En déduire que la suite $(u_n)$ est convergente et préciser sa limite.

5. Calculer $u_3$ et $u_4$. En déduire un encadrement de $G$ d'amplitude inférieure à $2 \times 10^{-2}$.

### Partie C

Pour $a \in \,]0, 1]$, on pose $J(a) = \displaystyle\int_a^1 \dfrac{\ln x}{1 + x^2}\,dx$.

1. Montrer que $\lim\limits_{a \to 0^+} \varphi(a)\ln a = 0$.

2. À l'aide d'une intégration par parties, montrer que pour tout $a \in \,]0, 1]$ :
   $$\displaystyle \int_a^1 g(x)\,dx = -\varphi(a)\ln a - J(a)$$

3. En déduire que $\lim\limits_{a \to 0^+} J(a) = -G$.

### Partie D — Accélérer la convergence

D'après la partie B, $u_n$ approche $G$ à $\dfrac{1}{(2n+3)^2}$ près : c'est lent. On pose, pour tout $n \in \mathbb{N}$ :
$w_n = \dfrac{u_n + u_{n+1}}{2}$ et $e_n = \displaystyle\int_0^1 \rho_n(x)\,dx$.

1. Vérifier que pour tout $n \in \mathbb{N}$ : $G - w_n = \dfrac{(-1)^{n+1}}{2}\left(e_n - e_{n+1}\right)$.

2. a. Montrer que pour tout $x \in \,]0, 1]$ : $\rho_n(x) - \rho_{n+1}(x) = \dfrac{1}{x}\displaystyle\int_0^x t^{2n+2}\,\dfrac{1 - t^2}{1 + t^2}\,dt$.

   b. Montrer que pour tout $t \in [0, 1]$ : $0 \leq \dfrac{1 - t^2}{1 + t^2} \leq 1 - t^2$.

   c. En déduire que : $0 \leq e_n - e_{n+1} \leq \dfrac{1}{(2n+3)^2} - \dfrac{1}{(2n+5)^2}$.

3. a. Vérifier que pour tout réel $a > 0$ : $\dfrac{1}{2}\left(\dfrac{1}{a^2} - \dfrac{1}{(a+2)^2}\right) = \dfrac{2(a+1)}{a^2(a+2)^2} \leq \dfrac{2}{a^3}$.

   b. En déduire que pour tout $n \in \mathbb{N}$ : $0 \leq (-1)^{n+1}\left(G - w_n\right) \leq \dfrac{2}{(2n+3)^3}$.

4. a. Déterminer le plus petit entier $n$ tel que $\dfrac{2}{(2n+3)^3} \leq 10^{-3}$, puis le plus petit entier $n$ tel que $\dfrac{1}{(2n+3)^2} \leq 10^{-3}$. Commenter.

   b. À l'aide de la calculatrice, donner des valeurs approchées de $w_4$ et $w_5$, puis en déduire un encadrement de $G$ d'amplitude inférieure à $2 \times 10^{-3}$.

---

## Solution

### Partie A

1. $\tan$ est continue et strictement croissante sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ ($\tan' = 1 + \tan^2 > 0$), avec $\lim\limits_{x \to -\frac{\pi}{2}^+} \tan x = -\infty$ et $\lim\limits_{x \to \frac{\pi}{2}^-} \tan x = +\infty$ : c'est une bijection sur $\mathbb{R}$.

2. $\tan$ est dérivable et $\tan'(y) = 1 + \tan^2 y \neq 0$, donc $\varphi$ est dérivable sur $\mathbb{R}$ et

   $\varphi'(x) = \dfrac{1}{\tan'(\varphi(x))} = \dfrac{1}{1 + \tan^2(\varphi(x))} = \dfrac{1}{1 + x^2}$.

3. a. $\dfrac{1}{1+t^2} \leq 1$ est clair, et $(1 - t^2)(1 + t^2) = 1 - t^4 \leq 1$.

   b. On intègre sur $[0, x]$ avec $\varphi(0) = 0$ : $x - \dfrac{x^3}{3} \leq \varphi(x) - \varphi(0) \leq x$.

4. $g$ est continue sur $]0, 1]$ (quotient). Pour $x \in \,]0, 1]$ : $1 - \dfrac{x^2}{3} \leq g(x) \leq 1$, donc $\lim\limits_{x \to 0^+} g(x) = 1 = g(0)$.

### Partie B

1. Somme géométrique de raison $q = -t^2 \neq 1$ : $\displaystyle\sum_{k=0}^{n}(-t^2)^k = \dfrac{1 - (-t^2)^{n+1}}{1 + t^2} = \dfrac{1}{1+t^2} - (-1)^{n+1}\dfrac{t^{2n+2}}{1+t^2}$.

2. a. On intègre l'égalité de B.1 entre $0$ et $x$ : $\displaystyle\int_0^x \dfrac{dt}{1+t^2} = \varphi(x) - \varphi(0) = \varphi(x)$ et $\displaystyle\int_0^x t^{2k}\,dt = \dfrac{x^{2k+1}}{2k+1}$.

   b. Pour $t \in [0, x]$ : $0 \leq \dfrac{t^{2n+2}}{1 + t^2} \leq t^{2n+2}$ ; on intègre sur $[0, x]$.

3. a. $\rho_n$ est continue sur $]0, 1]$ ($R_n$ est une primitive d'une fonction continue). D'après 2.b, pour $x \in \,]0,1]$ : $0 \leq \rho_n(x) \leq \dfrac{x^{2n+2}}{2n+3}$, donc $\lim\limits_{x \to 0^+}\rho_n(x) = 0 = \rho_n(0)$. L'encadrement est aussi vrai en $0$.

   b. Pour $x \in \,]0, 1]$, on divise 2.a par $x$. En $x = 0$ : les deux membres valent $1$.

4. a. On intègre 3.b sur $[0, 1]$ : $\displaystyle\int_0^1 \dfrac{x^{2k}}{2k+1}\,dx = \dfrac{1}{(2k+1)^2}$, d'où la somme $u_n$.

   b. $(-1)^{n+1}(G - u_n) = \displaystyle\int_0^1 \rho_n(x)\,dx$ et, d'après 3.a, $0 \leq \displaystyle\int_0^1 \rho_n(x)\,dx \leq \displaystyle\int_0^1 \dfrac{x^{2n+2}}{2n+3}\,dx = \dfrac{1}{(2n+3)^2}$.

   c. $|G - u_n| \leq \dfrac{1}{(2n+3)^2} \to 0$ : $(u_n)$ converge vers $G$.

5. $u_3 = 1 - \dfrac{1}{9} + \dfrac{1}{25} - \dfrac{1}{49} = \dfrac{10016}{11025} \approx 0{,}9085$ et $u_4 = u_3 + \dfrac{1}{81} = \dfrac{91369}{99225} \approx 0{,}9208$.

   D'après 4.b : pour $n = 3$, $G - u_3 \geq 0$ ; pour $n = 4$, $u_4 - G \geq 0$. Donc
   $$\displaystyle 0{,}908 \leq u_3 \leq G \leq u_4 \leq 0{,}921$$
   amplitude $u_4 - u_3 = \dfrac{1}{81} \approx 0{,}012 < 2 \times 10^{-2}$.

### Partie C

1. Pour $a \in \,]0, 1]$ : $0 \leq \varphi(a) \leq a$ (A.3.b) et $\ln a \leq 0$, donc $a\ln a \leq \varphi(a)\ln a \leq 0$. Comme $\lim\limits_{a \to 0^+} a\ln a = 0$, on conclut par encadrement.

2. On pose $u(x) = \varphi(x)$, $v'(x) = \dfrac{1}{x}$, donc $u'(x) = \dfrac{1}{1+x^2}$, $v(x) = \ln x$ :

   $\displaystyle\int_a^1 \dfrac{\varphi(x)}{x}\,dx = \Big[\varphi(x)\ln x\Big]_a^1 - \int_a^1 \dfrac{\ln x}{1+x^2}\,dx = -\varphi(a)\ln a - J(a)$.

3. $g$ est continue sur $[0,1]$, donc $a \mapsto \displaystyle\int_a^1 g(x)\,dx$ est continue en $0$ et tend vers $G$. Avec C.1 : $J(a) = -\varphi(a)\ln a - \displaystyle\int_a^1 g(x)\,dx \to -G$.

### Partie D

1. D'après B.4.a : $G - u_n = (-1)^{n+1}e_n$ et $G - u_{n+1} = (-1)^{n+2}e_{n+1} = -(-1)^{n+1}e_{n+1}$. On additionne et on divise par $2$.

2. a. $R_n(x) - R_{n+1}(x) = \displaystyle\int_0^x \dfrac{t^{2n+2} - t^{2n+4}}{1 + t^2}\,dt = \int_0^x t^{2n+2}\,\dfrac{1 - t^2}{1 + t^2}\,dt$ ; on divise par $x$.

   b. Sur $[0,1]$ : $1 - t^2 \geq 0$ et $1 + t^2 \geq 1$, donc $0 \leq \dfrac{1 - t^2}{1 + t^2} \leq 1 - t^2$.

   c. Pour $x \in \,]0,1]$ : $0 \leq \rho_n(x) - \rho_{n+1}(x) \leq \dfrac{1}{x}\displaystyle\int_0^x \left(t^{2n+2} - t^{2n+4}\right)dt = \dfrac{x^{2n+2}}{2n+3} - \dfrac{x^{2n+4}}{2n+5}$ (vrai aussi en $0$).

   On intègre sur $[0,1]$ : $0 \leq e_n - e_{n+1} \leq \dfrac{1}{(2n+3)^2} - \dfrac{1}{(2n+5)^2}$.

3. a. $\dfrac{1}{a^2} - \dfrac{1}{(a+2)^2} = \dfrac{(a+2)^2 - a^2}{a^2(a+2)^2} = \dfrac{4(a+1)}{a^2(a+2)^2}$, et $\dfrac{2(a+1)}{a^2(a+2)^2} \leq \dfrac{2}{a^3} \iff a(a+1) \leq (a+2)^2 \iff 0 \leq 3a + 4$ : vrai.

   b. D'après 1. : $(-1)^{n+1}(G - w_n) = \dfrac{e_n - e_{n+1}}{2}$ ; on applique 2.c puis 3.a avec $a = 2n + 3$.

4. a. $\dfrac{2}{(2n+3)^3} \leq 10^{-3} \iff 2n + 3 \geq \sqrt[3]{2000} \approx 12{,}6 \iff n \geq 5$.

   $\dfrac{1}{(2n+3)^2} \leq 10^{-3} \iff 2n + 3 \geq \sqrt{1000} \approx 31{,}6 \iff n \geq 15$.

   Pour la même précision, $w_5$ n'utilise que les termes $u_0, \dots, u_6$, alors que $u_n$ demande $16$ termes : l'erreur décroît comme $\dfrac{1}{n^3}$ au lieu de $\dfrac{1}{n^2}$.

   b. $w_4 \approx 0{,}91669$ et $w_5 \approx 0{,}91552$. D'après 3.b : pour $n = 4$, $G \leq w_4$ ; pour $n = 5$, $G \geq w_5$. Donc
   $$\displaystyle 0{,}9155 \leq G \leq 0{,}9167$$
   amplitude $w_4 - w_5 = \dfrac{1}{2}\left(\dfrac{1}{11^2} - \dfrac{1}{13^2}\right) = \dfrac{24}{20449} \approx 1{,}2 \times 10^{-3}$.

*Remarques.*
- *On a ainsi trois visages du même nombre : $G = \displaystyle\sum_{k \geq 0}\dfrac{(-1)^k}{(2k+1)^2} = \int_0^1 \dfrac{\varphi(x)}{x}\,dx = -\int_0^1 \dfrac{\ln x}{1+x^2}\,dx \approx 0{,}91597$. Le changement $x \mapsto \frac{1}{x}$ montre aussi que $G = \displaystyle\int_1^{+\infty}\dfrac{\ln x}{1+x^2}\,dx$ : c'est la limite $\beta$ de l'[exercice n°90](/lycee/4eme/mathematiques/fonction-logarithme-neperien#ex-0000090) et la limite $L$ de l'[exercice n°112](/lycee/4eme/mathematiques/integrales#ex-0000112).*
- *Comparer avec $\displaystyle\sum_{k \geq 0}\dfrac{(-1)^k}{2k+1} = \varphi(1) = \dfrac{\pi}{4}$ (même méthode avec $x = 1$ en B.2.a). Pour les carrés, personne ne sait si $G$ est rationnel ou non : c'est un problème ouvert.*
- *La moyenne de deux sommes partielles consécutives (partie D) est la première étape de l'accélération d'Euler : on peut recommencer avec $(w_n)$ pour converger encore plus vite.*
