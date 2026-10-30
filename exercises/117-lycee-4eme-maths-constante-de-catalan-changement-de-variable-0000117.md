---
uid: "0000117"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Axiomaths"
title: "La constante de Catalan (2) : par changement de variable"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["constante-de-catalan", "integrales", "changement-de-variable", "integration-par-parties", "trigonometrie"]
---

On note $\varphi$ la fonction réciproque de la restriction de $\tan$ à $\left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[$. On rappelle (voir l'[exercice n°116](/lycee/4eme/mathematiques/integrales#ex-0000116)) que la **constante de Catalan** est le réel :

$$G = \int_0^1 \dfrac{\varphi(x)}{x}\,dx$$

où la fonction $x \mapsto \dfrac{\varphi(x)}{x}$ est prolongée par continuité en $0$ par la valeur $1$.

### Partie A — La fonction $t \mapsto \dfrac{t}{\sin t}$

On considère la fonction $h$ définie sur $\left[0, \dfrac{\pi}{2}\right]$ par $h(t) = \dfrac{t}{\sin t}$ si $t \neq 0$ et $h(0) = 1$.

1. Montrer que $h$ est continue sur $\left[0, \dfrac{\pi}{2}\right]$.

2. a. On pose $k(t) = \sin t - t\cos t$. Montrer que pour tout $t \in \left[0, \dfrac{\pi}{2}\right]$ : $k(t) \geq 0$.

   b. En déduire que $h$ est croissante sur $\left[0, \dfrac{\pi}{2}\right]$ et que pour tout $t \in \left[0, \dfrac{\pi}{2}\right]$ : $1 \leq h(t) \leq \dfrac{\pi}{2}$.

### Partie B — Deux changements de variable

1. En posant $x = \tan\theta$, montrer que : $G = \displaystyle\int_0^{\frac{\pi}{4}} \dfrac{\theta}{\sin\theta\cos\theta}\,d\theta$ (la fonction intégrée étant prolongée par $1$ en $0$).

2. En posant $t = 2\theta$, en déduire que : $G = \dfrac{1}{2}\displaystyle\int_0^{\frac{\pi}{2}} h(t)\,dt$.

3. En déduire que : $\dfrac{\pi}{4} \leq G \leq \dfrac{\pi^2}{8}$.

### Partie C — Un meilleur majorant

1. Montrer que pour tout $t \geq 0$ : $\sin t \geq t - \dfrac{t^3}{6}$.

2. En déduire que pour tout $t \in \left]0, \dfrac{\pi}{2}\right]$ : $h(t) \leq \dfrac{6}{6 - t^2}$.

3. a. Vérifier que pour tout $t \in \left[0, \dfrac{\pi}{2}\right]$ : $\dfrac{6}{6 - t^2} = \dfrac{\sqrt{6}}{2}\left(\dfrac{1}{\sqrt{6} - t} + \dfrac{1}{\sqrt{6} + t}\right)$.

   b. En déduire que : $G \leq \dfrac{\sqrt{6}}{4}\ln\left(\dfrac{\sqrt{6} + \frac{\pi}{2}}{\sqrt{6} - \frac{\pi}{2}}\right)$, puis donner une valeur approchée à $10^{-3}$ près de ce majorant.

### Partie D — $G$ comme intégrale d'un logarithme

On considère la fonction $\psi$ définie sur $]0, \pi[$ par $\psi(t) = \ln\left(\tan\dfrac{t}{2}\right)$.

1. Montrer que $\psi$ est dérivable sur $]0, \pi[$ et que $\psi'(t) = \dfrac{1}{\sin t}$.

2. Montrer que $\lim\limits_{a \to 0^+} a\,\psi(a) = 0$.

3. À l'aide d'une intégration par parties, montrer que pour tout $a \in \left]0, \dfrac{\pi}{2}\right]$ :
   $$\displaystyle \int_a^{\frac{\pi}{2}} h(t)\,dt = -a\,\psi(a) - \int_a^{\frac{\pi}{2}} \psi(t)\,dt$$

4. En posant $t = 2u$, en déduire que : $G = -\lim\limits_{a \to 0^+} \displaystyle\int_{\frac{a}{2}}^{\frac{\pi}{4}} \ln(\tan u)\,du$.

   On écrit : $G = -\displaystyle\int_0^{\frac{\pi}{4}} \ln(\tan u)\,du$.

---

## Solution

### Partie A

1. $h$ est continue sur $\left]0, \frac{\pi}{2}\right]$ (quotient, $\sin t \neq 0$) et $\lim\limits_{t \to 0} \dfrac{\sin t}{t} = 1$, donc $\lim\limits_{t \to 0^+} h(t) = 1 = h(0)$.

2. a. $k'(t) = \cos t - \cos t + t\sin t = t\sin t \geq 0$ sur $\left[0, \frac{\pi}{2}\right]$, et $k(0) = 0$ : donc $k(t) \geq 0$.

   b. Sur $\left]0, \frac{\pi}{2}\right]$ : $h'(t) = \dfrac{\sin t - t\cos t}{\sin^2 t} = \dfrac{k(t)}{\sin^2 t} \geq 0$. Avec la continuité en $0$, $h$ est croissante sur $\left[0, \frac{\pi}{2}\right]$.

   D'où $h(0) \leq h(t) \leq h\left(\frac{\pi}{2}\right)$, soit $1 \leq h(t) \leq \dfrac{\pi}{2}$.

### Partie B

1. $\theta \mapsto \tan\theta$ est dérivable sur $\left[0, \frac{\pi}{4}\right]$, avec $\tan 0 = 0$, $\tan\frac{\pi}{4} = 1$ et $dx = (1 + \tan^2\theta)\,d\theta = \dfrac{d\theta}{\cos^2\theta}$.

   Pour $\theta \in \left]0, \frac{\pi}{4}\right]$ : $\varphi(\tan\theta) = \theta$, donc $\dfrac{\varphi(x)}{x}\,dx = \dfrac{\theta\cos\theta}{\sin\theta}\cdot\dfrac{d\theta}{\cos^2\theta} = \dfrac{\theta}{\sin\theta\cos\theta}\,d\theta$.

   Les deux fonctions valent $1$ en $0$, d'où $G = \displaystyle\int_0^{\frac{\pi}{4}} \dfrac{\theta}{\sin\theta\cos\theta}\,d\theta$.

2. $\sin\theta\cos\theta = \dfrac{1}{2}\sin 2\theta$, donc $\dfrac{\theta}{\sin\theta\cos\theta} = \dfrac{2\theta}{\sin 2\theta} = h(2\theta)$.

   Avec $t = 2\theta$, $d\theta = \dfrac{dt}{2}$ et $t$ varie de $0$ à $\frac{\pi}{2}$ : $G = \dfrac{1}{2}\displaystyle\int_0^{\frac{\pi}{2}} h(t)\,dt$.

3. On intègre $1 \leq h(t) \leq \frac{\pi}{2}$ sur $\left[0, \frac{\pi}{2}\right]$ : $\dfrac{\pi}{2} \leq \displaystyle\int_0^{\frac{\pi}{2}} h(t)\,dt \leq \dfrac{\pi^2}{4}$, donc $\dfrac{\pi}{4} \leq G \leq \dfrac{\pi^2}{8}$ (soit $0{,}785 \leq G \leq 1{,}234$).

### Partie C

1. $\ell(t) = \sin t - t + \dfrac{t^3}{6}$ : $\ell'(t) = \cos t - 1 + \dfrac{t^2}{2}$, $\ell''(t) = t - \sin t \geq 0$ pour $t \geq 0$.

   Donc $\ell'$ est croissante sur $[0, +\infty[$ avec $\ell'(0) = 0$ : $\ell' \geq 0$. Puis $\ell$ est croissante avec $\ell(0) = 0$ : $\ell \geq 0$.

2. Pour $t \in \left]0, \frac{\pi}{2}\right]$ : $t^2 \leq \dfrac{\pi^2}{4} < 6$, donc $t - \dfrac{t^3}{6} = \dfrac{t(6 - t^2)}{6} > 0$ et $\sin t \geq \dfrac{t(6 - t^2)}{6} > 0$.

   En passant aux inverses et en multipliant par $t > 0$ : $h(t) = \dfrac{t}{\sin t} \leq \dfrac{6}{6 - t^2}$.

3. a. $\dfrac{1}{\sqrt{6} - t} + \dfrac{1}{\sqrt{6} + t} = \dfrac{2\sqrt{6}}{6 - t^2}$, et $\dfrac{\sqrt{6}}{2} \cdot 2\sqrt{6} = 6$.

   b. L'inégalité de C.2 est vraie aussi en $0$ ($1 \leq 1$). On intègre sur $\left[0, \frac{\pi}{2}\right]$ :

   $\displaystyle\int_0^{\frac{\pi}{2}} \dfrac{6}{6 - t^2}\,dt = \dfrac{\sqrt{6}}{2}\Big[\ln(\sqrt{6} + t) - \ln(\sqrt{6} - t)\Big]_0^{\frac{\pi}{2}} = \dfrac{\sqrt{6}}{2}\ln\left(\dfrac{\sqrt{6} + \frac{\pi}{2}}{\sqrt{6} - \frac{\pi}{2}}\right)$.

   Avec B.2 : $G \leq \dfrac{\sqrt{6}}{4}\ln\left(\dfrac{\sqrt{6} + \frac{\pi}{2}}{\sqrt{6} - \frac{\pi}{2}}\right) \approx 0{,}931$.

   Avec le minorant $u_3 \approx 0{,}908$ de l'[exercice n°116](/lycee/4eme/mathematiques/integrales#ex-0000116) : $0{,}908 \leq G \leq 0{,}932$.

### Partie D

1. $t \mapsto \tan\frac{t}{2}$ est dérivable et strictement positive sur $]0, \pi[$, donc $\psi$ est dérivable et

   $\psi'(t) = \dfrac{\frac{1}{2}\left(1 + \tan^2\frac{t}{2}\right)}{\tan\frac{t}{2}} = \dfrac{1}{2\sin\frac{t}{2}\cos\frac{t}{2}} = \dfrac{1}{\sin t}$.

2. $a\,\psi(a) = a\ln\dfrac{a}{2} + a\ln\left(\dfrac{\tan\frac{a}{2}}{\frac{a}{2}}\right)$.

   Le premier terme tend vers $0$ (car $a\ln a \to 0$) ; dans le second, $\dfrac{\tan\frac{a}{2}}{\frac{a}{2}} \to 1$, donc le $\ln$ tend vers $0$.

3. On pose $u(t) = t$ et $v'(t) = \dfrac{1}{\sin t}$, donc $v(t) = \psi(t)$ :

   $\displaystyle\int_a^{\frac{\pi}{2}} \dfrac{t}{\sin t}\,dt = \Big[t\,\psi(t)\Big]_a^{\frac{\pi}{2}} - \int_a^{\frac{\pi}{2}} \psi(t)\,dt = -a\,\psi(a) - \int_a^{\frac{\pi}{2}} \psi(t)\,dt$, car $\psi\left(\frac{\pi}{2}\right) = \ln\left(\tan\frac{\pi}{4}\right) = 0$.

4. Avec $t = 2u$ : $\displaystyle\int_a^{\frac{\pi}{2}} \psi(t)\,dt = 2\int_{\frac{a}{2}}^{\frac{\pi}{4}} \ln(\tan u)\,du$.

   Quand $a \to 0^+$ : $\displaystyle\int_a^{\frac{\pi}{2}} h(t)\,dt \to 2G$ ($h$ est continue sur $\left[0, \frac{\pi}{2}\right]$) et $a\,\psi(a) \to 0$.

   Donc $2\displaystyle\int_{\frac{a}{2}}^{\frac{\pi}{4}} \ln(\tan u)\,du = -a\,\psi(a) - \int_a^{\frac{\pi}{2}} h(t)\,dt \to -2G$, d'où le résultat.

*Remarques.*
- *La valeur moyenne de $h$ sur $\left[0, \frac{\pi}{2}\right]$ est $\dfrac{2}{\pi}\displaystyle\int_0^{\frac{\pi}{2}} h(t)\,dt = \dfrac{4G}{\pi} \approx 1{,}166$ : autrement dit, $G = \dfrac{\pi}{4} \times$ (moyenne de $\dfrac{t}{\sin t}$ sur $\left[0, \frac{\pi}{2}\right]$).*
- *Sur $\left]0, \frac{\pi}{4}\right[$, $\tan u < 1$ donc $\ln(\tan u) < 0$ : la formule $G = -\displaystyle\int_0^{\frac{\pi}{4}} \ln(\tan u)\,du$ donne bien un nombre positif.*
- *Autres chemins vers le même nombre : la série alternée de l'[exercice n°116](/lycee/4eme/mathematiques/integrales#ex-0000116), l'intégrale $\displaystyle\int_1^{+\infty} \dfrac{\ln x}{1 + x^2}\,dx$ de l'[exercice n°90](/lycee/4eme/mathematiques/fonction-logarithme-neperien#ex-0000090) et l'encadrement de l'[exercice n°112](/lycee/4eme/mathematiques/integrales#ex-0000112).*
