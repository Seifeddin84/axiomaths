---
uid: "0000403"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Bac 2001 principale, Problème"
title: "Les intégrales de 1/chⁿ(t) et le produit de Wallis"
country: "Tunisie"
year: 2001
professor: null
difficulty: "Difficile"
points: 10
tags: ["bac", "wallis", "integrales", "fonction-reciproque", "integration-par-parties", "suites", "exponentielle"]
bac: "2001-principale-maths"
recommended: true
---

### Partie I

Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=\dfrac{2}{e^{x}+e^{-x}}$ et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O,\vec{\imath},\vec{\jmath})$.

1. a. Étudier les variations de la fonction $f$.

      En déduire que pour tout $x$ de $\mathbb{R}$ on a : $0<f(x)\leqslant1$.

   b. Tracer la courbe $\mathcal{C}$.

2. On considère la fonction $g$ définie sur $\left]0,\dfrac{\pi}{2}\right[$ par $g(x)=\ln(\tan x)$.

   a. Montrer que $g$ est dérivable sur $\left]0,\dfrac{\pi}{2}\right[$ et calculer $g'(x)$ pour $x$ appartenant à $\left]0,\dfrac{\pi}{2}\right[$.

   b. Montrer que $g$ admet une fonction réciproque $h$ définie sur $\mathbb{R}$. Calculer $h(0)$.

   c. Montrer que $h$ est dérivable sur $\mathbb{R}$ et que pour tout $x$ de $\mathbb{R}$, $2h'(x)=f(x)$.

      En déduire que pour tout $x$ de $\mathbb{R}$, $\displaystyle\int_0^x f(t)\,dt=2h(x)-\dfrac{\pi}{2}$.

### Partie II

Soit $n$ un entier naturel non nul et $F_n$ la fonction définie sur $[0,+\infty[$ par $F_n(x)=\displaystyle\int_0^x f^n(t)\,dt$, où $f^n(t)$ désigne $\left(f(t)\right)^n$.

1. a. Calculer $F_1(x)$ en fonction de $h(x)$ et montrer que $\displaystyle\lim_{x\to+\infty}F_1(x)=\dfrac{\pi}{2}$.

   b. Soit $K$ la fonction définie sur $\mathbb{R}$ par $K(t)=\dfrac{e^{t}-e^{-t}}{e^{t}+e^{-t}}$. Montrer que $K'(t)=f^2(t)$.

      Calculer alors $F_2(x)$ et montrer que $\displaystyle\lim_{x\to+\infty}F_2(x)=1$.

2. a. Montrer que l'image de l'intervalle $[0,+\infty[$ par $F_n$ est l'intervalle $\left[0,\displaystyle\lim_{x\to+\infty}F_n(x)\right[$.

   b. Vérifier que pour tout réel $t$ positif ou nul on a $f(t)<2e^{-t}$.

      En déduire, en utilisant I-1)a), que pour tout $x$ de $[0,+\infty[$ on a $F_n(x)\leqslant2$ et que $\displaystyle\lim_{x\to+\infty}F_n(x)$ est finie.

   c. Vérifier que pour tout réel $t$ positif ou nul, on a $f(t)\geqslant e^{-t}$.

      Montrer alors que pour tout réel $x$ positif, on a $\dfrac{1-e^{-nx}}{n}\leqslant F_n(x)$ et en déduire que $\displaystyle\lim_{x\to+\infty}F_n(x)$ est non nulle.

3. Soit la suite $(u_n)$ définie sur $\mathbb{N}^*$ par $u_n=\displaystyle\lim_{x\to+\infty}F_n(x)$.

   a. Donner la valeur de $u_1$ et la valeur de $u_2$.

   b. En remarquant que $4-\left(e^{t}+e^{-t}\right)^2=-\left(e^{t}-e^{-t}\right)^2$, montrer que pour tout $n$ de $\mathbb{N}^*$ et tout $t$ de $[0,+\infty[$ on a $f^{n-1}(t)\,f'(t)\,K(t)=f^{n+2}(t)-f^{n}(t)$.

   c. À l'aide d'une intégration par parties, montrer que pour tout $n$ de $\mathbb{N}^*$ et tout $x$ de $[0,+\infty[$ on a :

      $$\displaystyle\int_0^x f^{n-1}(t)\,f'(t)\,K(t)\,dt=\frac{1}{n}K(x)f^n(x)-\frac{1}{n}\int_0^x f^{n+2}(t)\,dt.$$

   d. En déduire que pour tout $n$ de $\mathbb{N}^*$ et tout $x$ de $[0,+\infty[$, on a :

      $$\displaystyle(n+1)F_{n+2}(x)-nF_n(x)=K(x)f^n(x).$$

      Montrer alors que $u_{n+2}=\dfrac{n}{n+1}\,u_n$.

4. a. Soit $n$ un entier naturel. Déterminer, en fonction de $n$, les deux termes $u_{2n+1}$ et $u_{2n+2}$.

   b. Montrer que la suite $(u_n)$ est décroissante.

   c. Montrer que pour tout $n$ de $\mathbb{N}$ on a : $\dfrac{2n}{2n+1}\leqslant\dfrac{u_{2n+2}}{u_{2n+1}}\leqslant1$.

      En déduire $\displaystyle\lim_{n\to+\infty}\dfrac{u_{2n+2}}{u_{2n+1}}$.

   d. Montrer alors que

      $$\displaystyle\lim_{n\to+\infty}\left[\left(\frac{2\times4\times6\times\cdots\times(2n)}{3\times5\times\cdots\times(2n-1)}\right)^{2}\times\frac{2}{2n+1}\right]=\pi.$$

---

## Solution

:::property[Dérivée d'une fonction réciproque]
Si $g$ est dérivable et strictement monotone sur un intervalle $I$, et si $g'$ ne s'annule pas, alors sa réciproque $h$ est dérivable sur $g(I)$ et $\boxed{h'(y)=\dfrac{1}{g'\left(h(y)\right)}}$.
:::

:::property[Intégration par parties]
Si $u$ et $v$ sont dérivables à dérivées continues sur $[0,x]$ :

$\boxed{\displaystyle\int_0^x u'(t)v(t)\,dt=\Big[u(t)v(t)\Big]_0^x-\int_0^x u(t)v'(t)\,dt}$
:::

:::theorem[Fonction croissante majorée]
Une fonction croissante et majorée sur $[0,+\infty[$ a une **limite finie** en $+\infty$, inférieure ou égale à tout majorant.
:::

### Partie I

1. a. $f$ est dérivable sur $\mathbb{R}$ comme quotient de fonctions dérivables dont le dénominateur ne s'annule pas, et

   $$\displaystyle f'(x)=\frac{-2\left(e^{x}-e^{-x}\right)}{\left(e^{x}+e^{-x}\right)^2}.$$

   Le dénominateur est positif, donc $f'(x)$ a le signe de $-(e^{x}-e^{-x})$. Or $e^x-e^{-x}>0\iff x>0$.

   | $x$ | $-\infty$ | | $0$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f'(x)$ | | $+$ | $0$ | $-$ | |
   | $f(x)$ | $0$ | $\nearrow$ | $1$ | $\searrow$ | $0$ |

   $f(0)=\dfrac{2}{2}=1$ et $\displaystyle\lim_{x\to\pm\infty}f(x)=0$ car $e^x+e^{-x}\to+\infty$.

   $f$ a donc pour maximum $f(0)=1$. De plus $f(x)>0$ pour tout $x$ (quotient de deux nombres positifs). Donc $\boxed{0<f(x)\leqslant1}$.

   b. $f$ est paire : $f(-x)=f(x)$, donc $\mathcal{C}$ est symétrique par rapport à l'axe $(Oy)$. L'axe $(Ox)$ est asymptote en $\pm\infty$ et le sommet est $(0,1)$.

   (On trouve de plus $f''(x)=0\iff\operatorname{sh}x=\pm1\iff x=\pm\ln(1+\sqrt2)$ : deux points d'inflexion d'ordonnée $\dfrac{1}{\sqrt2}$.)

   ![Courbe de f(x)=2/(eˣ+e⁻ˣ), en cloche, de maximum (0,1)](/exercises/images/403-lycee-4eme-maths-integrales-0000403.png)

2. a. $\tan$ est dérivable et strictement positive sur $\left]0,\dfrac{\pi}{2}\right[$ et $\ln$ est dérivable sur $]0,+\infty[$ : $g=\ln\circ\tan$ est dérivable, et

   $$\displaystyle g'(x)=\frac{\tan'(x)}{\tan x}=\frac{1+\tan^2x}{\tan x}=\frac{1}{\cos^2x}\times\frac{\cos x}{\sin x}=\boxed{\frac{1}{\sin x\cos x}=\frac{2}{\sin2x}}.$$

   b. Sur $\left]0,\dfrac{\pi}{2}\right[$ on a $\sin2x>0$, donc $g'(x)>0$ : $g$ est continue et strictement croissante.

   Limites : quand $x\to0^+$, $\tan x\to0^+$ donc $g(x)\to-\infty$ ; quand $x\to\dfrac{\pi}{2}^-$, $\tan x\to+\infty$ donc $g(x)\to+\infty$.

   Donc $g$ réalise une bijection de $\left]0,\dfrac{\pi}{2}\right[$ sur $]-\infty,+\infty[=\mathbb{R}$ : elle admet une réciproque $h:\mathbb{R}\to\left]0,\dfrac{\pi}{2}\right[$.

   $h(0)$ est l'unique $x$ tel que $\ln(\tan x)=0$, c'est-à-dire $\tan x=1$ : $\boxed{h(0)=\dfrac{\pi}{4}}$.

   c. $g$ est dérivable et $g'$ ne s'annule pas : d'après le rappel, $h$ est dérivable sur $\mathbb{R}$ et

   $$\displaystyle h'(x)=\frac{1}{g'(h(x))}=\frac{\sin\left(2h(x)\right)}{2}.$$

   Posons $\theta=h(x)$. Comme $g(\theta)=x$, on a $\tan\theta=e^x$. Alors

   $$\displaystyle\sin2\theta=\frac{2\tan\theta}{1+\tan^2\theta}=\frac{2e^x}{1+e^{2x}}=\frac{2}{e^{-x}+e^{x}}=f(x)$$

   (on a divisé numérateur et dénominateur par $e^x$). Donc $\boxed{2h'(x)=f(x)}$.

   **Déduction.** $2h$ est une primitive de $f$ :

   $$\displaystyle\int_0^xf(t)\,dt=2h(x)-2h(0)=\boxed{2h(x)-\frac{\pi}{2}}.$$

### Partie II

1. a. D'après I-2)c) : $F_1(x)=\displaystyle\int_0^xf(t)\,dt=2h(x)-\dfrac{\pi}{2}$.

   Comme $g(\theta)\to+\infty$ quand $\theta\to\dfrac{\pi}{2}^-$, la réciproque $h$ vérifie $h(x)\to\dfrac{\pi}{2}$ quand $x\to+\infty$. Donc

   $$\displaystyle\lim_{x\to+\infty}F_1(x)=2\times\frac{\pi}{2}-\frac{\pi}{2}=\boxed{\frac{\pi}{2}}.$$

   b. $K'(t)=\dfrac{\left(e^t+e^{-t}\right)^2-\left(e^t-e^{-t}\right)^2}{\left(e^t+e^{-t}\right)^2}=\dfrac{4}{\left(e^t+e^{-t}\right)^2}=\boxed{f^2(t)}$.

   Donc $F_2(x)=\displaystyle\int_0^xK'(t)\,dt=K(x)-K(0)=K(x)$ car $K(0)=0$.

   En divisant par $e^{x}$ : $K(x)=\dfrac{1-e^{-2x}}{1+e^{-2x}}\to1$. Donc $\boxed{F_2(x)=K(x)}$ et $\displaystyle\lim_{x\to+\infty}F_2(x)=1$.

2. a. $f^n$ est continue et strictement positive, donc $F_n'=f^n>0$ : $F_n$ est continue et strictement croissante sur $[0,+\infty[$, avec $F_n(0)=0$.

   L'image d'un intervalle $[0,+\infty[$ par une fonction continue strictement croissante est $\left[F_n(0),\displaystyle\lim_{+\infty}F_n\right[$, c'est-à-dire $\left[0,\displaystyle\lim_{x\to+\infty}F_n(x)\right[$.

   b. Pour $t\geqslant0$ : $e^t+e^{-t}>e^t$, donc $f(t)=\dfrac{2}{e^t+e^{-t}}<\dfrac{2}{e^t}=2e^{-t}$.

   Avec I-1)a) : $0<f\leqslant1$ donc $f^n\leqslant f$ (pour $n\geqslant1$). Alors

   $$\displaystyle F_n(x)\leqslant\int_0^xf(t)\,dt\leqslant\int_0^x2e^{-t}\,dt=2\left(1-e^{-x}\right)<2.$$

   Ainsi $\boxed{F_n(x)\leqslant2}$. $F_n$ est croissante et majorée : d'après le rappel, $\displaystyle\lim_{x\to+\infty}F_n(x)$ est **finie**.

   c. Pour $t\geqslant0$ : $f(t)\geqslant e^{-t}\iff2\geqslant e^{-t}\left(e^t+e^{-t}\right)=1+e^{-2t}\iff e^{-2t}\leqslant1$, vrai.

   Les deux membres sont positifs, donc $f^n(t)\geqslant e^{-nt}$ et

   $$\displaystyle F_n(x)\geqslant\int_0^xe^{-nt}\,dt=\left[-\frac{e^{-nt}}{n}\right]_0^x=\boxed{\frac{1-e^{-nx}}{n}}.$$

   Quand $x\to+\infty$, le minorant tend vers $\dfrac1n$, donc $\displaystyle\lim_{x\to+\infty}F_n(x)\geqslant\dfrac1n>0$ : **la limite est non nulle**.

3. a. D'après II-1) : $\boxed{u_1=\dfrac{\pi}{2}}$ et $\boxed{u_2=1}$.

   b. **Étape 1 : $f'=-fK$.** On a $f(t)K(t)=\dfrac{2\left(e^t-e^{-t}\right)}{\left(e^t+e^{-t}\right)^2}$, donc $f'(t)=-f(t)K(t)$.

   **Étape 2 : $K^2=1-f^2$.** En divisant l'indication $4-\left(e^t+e^{-t}\right)^2=-\left(e^t-e^{-t}\right)^2$ par $\left(e^t+e^{-t}\right)^2$ :

   $$\displaystyle f^2(t)-1=-K^2(t).$$

   **Étape 3 : conclusion.**

   $$\displaystyle f^{n-1}f'K=-f^{n-1}\cdot f\,K\cdot K=-f^{n}K^2=-f^n\left(1-f^2\right)=\boxed{f^{n+2}-f^{n}}.$$

   c. On pose $u(t)=\dfrac{f^n(t)}{n}$, de dérivée $u'(t)=f^{n-1}(t)f'(t)$, et $v=K$ de dérivée $K'=f^2$. D'après le rappel :

   $$\displaystyle\int_0^xf^{n-1}f'K\,dt=\left[\frac{f^n(t)}{n}K(t)\right]_0^x-\int_0^x\frac{f^n(t)}{n}f^2(t)\,dt=\frac{1}{n}K(x)f^n(x)-\frac{1}{n}\int_0^xf^{n+2}(t)\,dt,$$

   car $K(0)=0$.

   d. On intègre la relation de 3.b. de $0$ à $x$ :

   $$\displaystyle F_{n+2}(x)-F_n(x)=\frac{1}{n}K(x)f^n(x)-\frac{1}{n}F_{n+2}(x).$$

   On multiplie par $n$ : $nF_{n+2}-nF_n=Kf^n-F_{n+2}$, d'où $\boxed{(n+1)F_{n+2}(x)-nF_n(x)=K(x)f^n(x)}$.

   Quand $x\to+\infty$ : $f(x)\to0$ donc $f^n(x)\to0$, et $|K(x)|<1$, donc $K(x)f^n(x)\to0$. À la limite :

   $$\displaystyle(n+1)u_{n+2}-nu_n=0\quad\Longrightarrow\quad\boxed{u_{n+2}=\frac{n}{n+1}\,u_n}.$$

4. a. On applique la relation de 3.d. de deux en deux.

   *Termes impairs* : avec $n$ remplacé par $2k-1$, $u_{2k+1}=\dfrac{2k-1}{2k}\,u_{2k-1}$. En multipliant pour $k=1,\dots,n$ à partir de $u_1=\dfrac{\pi}{2}$ :

   $$\displaystyle\boxed{u_{2n+1}=\frac{\pi}{2}\times\frac{1\times3\times5\times\cdots\times(2n-1)}{2\times4\times6\times\cdots\times(2n)}}.$$

   *Termes pairs* : avec $n$ remplacé par $2k$, $u_{2k+2}=\dfrac{2k}{2k+1}\,u_{2k}$. En multipliant pour $k=1,\dots,n$ à partir de $u_2=1$ :

   $$\displaystyle\boxed{u_{2n+2}=\frac{2\times4\times6\times\cdots\times(2n)}{3\times5\times7\times\cdots\times(2n+1)}}.$$

   (Pour $n=0$ les produits sont vides : $u_1=\dfrac{\pi}{2}$, $u_2=1$.)

   *Contrôle* : $u_3=\dfrac12u_1=\dfrac{\pi}{4}$ (formule, $n=1$ : $\dfrac{\pi}{2}\times\dfrac12$ ✓) et $u_4=\dfrac23u_2=\dfrac23$ (formule : $\dfrac{2}{3}$ ✓).

   b. Pour $t\geqslant0$, $0<f(t)\leqslant1$ donc $f^{n+1}(t)\leqslant f^n(t)$. En intégrant : $F_{n+1}(x)\leqslant F_n(x)$, puis à la limite $u_{n+1}\leqslant u_n$ : **$(u_n)$ est décroissante**.

   c. Pour $n\geqslant1$, d'après 3.d. avec l'indice $2n$ : $u_{2n+2}=\dfrac{2n}{2n+1}\,u_{2n}$.

   Comme $(u_n)$ est décroissante, $u_{2n}\geqslant u_{2n+1}$, donc $u_{2n+2}\geqslant\dfrac{2n}{2n+1}\,u_{2n+1}$. De plus $u_{2n+2}\leqslant u_{2n+1}$. Comme $u_{2n+1}>0$ :

   $$\displaystyle\boxed{\frac{2n}{2n+1}\leqslant\frac{u_{2n+2}}{u_{2n+1}}\leqslant1}.$$

   (Pour $n=0$ la minoration vaut $0$ et est évidente puisque les $u_k$ sont positifs.)

   Comme $\dfrac{2n}{2n+1}\to1$, le théorème des gendarmes donne $\boxed{\displaystyle\lim_{n\to+\infty}\frac{u_{2n+2}}{u_{2n+1}}=1}$.

   d. Notons, pour $n\geqslant1$, $P_n=\dfrac{2\times4\times\cdots\times(2n)}{3\times5\times\cdots\times(2n-1)}$ (le dénominateur vaut $1$ pour $n=1$).

   D'après 4.a. : $u_{2n+2}=\dfrac{P_n}{2n+1}$ et $u_{2n+1}=\dfrac{\pi}{2}\times\dfrac{1}{P_n}$, car $\dfrac{1\times3\times\cdots\times(2n-1)}{2\times4\times\cdots\times(2n)}=\dfrac{3\times\cdots\times(2n-1)}{2\times\cdots\times(2n)}=\dfrac{1}{P_n}$.

   On forme le quotient :

   $$\displaystyle\frac{u_{2n+2}}{u_{2n+1}}=\frac{P_n}{2n+1}\times\frac{2P_n}{\pi}=\frac{2}{\pi}\,\frac{P_n^2}{2n+1},\qquad\text{donc}\qquad P_n^{\,2}\times\frac{2}{2n+1}=\pi\,\frac{u_{2n+2}}{u_{2n+1}}.$$

   D'après 4.c., le second membre tend vers $\pi\times1$ :

   $$\boxed{\displaystyle\lim_{n\to+\infty}\left[\left(\frac{2\times4\times\cdots\times(2n)}{3\times5\times\cdots\times(2n-1)}\right)^2\times\frac{2}{2n+1}\right]=\pi}.$$

:::method[Le produit de Wallis, version « Bac »]
Calculer $\displaystyle\lim_{x\to+\infty}\int_0^x f^n$ ; établir la récurrence $(n+1)u_{n+2}=nu_n$ par une intégration par parties ; encadrer $\dfrac{u_{2n+2}}{u_{2n+1}}$ entre $\dfrac{2n}{2n+1}$ et $1$ ; écrire ce quotient avec les deux produits.
:::

*Remarque.* Avec le changement de variable $\theta=\arctan(\operatorname{sh}t)$ (donc $\cos\theta=\dfrac{1}{\operatorname{ch}t}=f(t)$, et $d\theta=\dfrac{dt}{\operatorname{ch}t}$), on obtient $u_n=\displaystyle\int_0^{\pi/2}\cos^{n-1}\theta\,d\theta=W_{n-1}$ : ce sont les **intégrales de Wallis**, et $(n+1)u_{n+2}=nu_n$ est leur formule de récurrence. La limite démontrée en 4.d. est le **produit de Wallis** $\dfrac{\pi}{2}=\displaystyle\lim\prod_{k=1}^n\dfrac{(2k)^2}{(2k-1)(2k+1)}$. L'[exercice n°115](/lycee/4eme/mathematiques/integrales#ex-0000115) traite les intégrales de Wallis sous leur forme trigonométrique, et la partie II de l'[exercice n°143](/lycee/4eme/mathematiques/integrales#ex-0000143) (formule de Stirling) utilise la même technique de récurrence.

:::intuition
Les intégrales $\displaystyle\int_0^{+\infty}\dfrac{dt}{\operatorname{ch}^nt}$ sont des « intégrales de Wallis déguisées » : la fonction $f=\dfrac{1}{\operatorname{ch}}$ joue le rôle du cosinus, et la fonction réciproque $h$ de $\ln\tan$ est ce qui permet de passer de l'un à l'autre.
:::

:::trap
En 4.c., écrire la minoration $\dfrac{2n}{2n+1}$ sans voir qu'elle vient de $u_{2n+2}=\dfrac{2n}{2n+1}u_{2n}$ **et** de la décroissance de $(u_n)$ ; et en 4.d., oublier que le dénominateur du produit s'arrête à $2n-1$ alors que $u_{2n+2}$ va jusqu'à $2n+1$ (d'où le facteur $\dfrac{2}{2n+1}$).
:::
