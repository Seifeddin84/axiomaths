---
uid: "0000222"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 18"
title: "Lecture graphique d'une fonction polynôme de degré 3, inflexion et équation f(x) = −x"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["lecture-graphique", "polynome-degre-3", "tangente", "point-d-inflexion", "theoreme-des-valeurs-intermediaires", "fonction-composee"]
---

On considère la fonction $f$ dont la courbe représentative est donnée dans la figure ci-dessous. On admet que $f(x) = mx^3 + nx^2 + px + q$. La courbe admet deux tangentes $\Delta$ et $T$ aux points d'abscisses $0$ et $2$ respectivement. $\Delta$ passe par le point $C(0{,}5\,;\,6{,}5)$. Les tangentes aux points d'abscisses $1$ et $3$ sont horizontales.

![Courbe de f avec ses points B(0, 2), D(1, 6), A(2, 4) et H(3, 2), les tangentes horizontales en D et H, la tangente Δ en B passant par C(0,5 ; 6,5) et la tangente T en A](/exercises/images/222-lycee-4eme-eco-etude-de-fonctions-0000222.png)

1. À partir de la figure :

   a. Par une lecture graphique, déterminer : $f(0)$, $f'(0)$, $f(1)$, $f'(1)$, $f(2)$, $f'(2)$, $f(3)$ et $f'(3)$.

   b. Écrire les équations des droites $\Delta$ et $T$.

   c. Résoudre l'équation $f(x) \geqslant 2$.

   d. Dresser le tableau de variations de $f$.

   e. En déduire le tableau de variations des fonctions $g$ et $h$ définies respectivement par $g(x) = \dfrac{1}{f(x)}$ et $h(x) = \sqrt{f(x) - 2}$, en précisant leurs domaines de définition.

2. En utilisant les résultats de la question 1.a, déterminer les réels $m$, $n$, $p$ et $q$.

On admet dans la suite que $f(x) = x^3 - 6x^2 + 9x + 2$.

3. Calculer $f'(x)$ et $f''(x)$.

4. Montrer que $\mathcal{C}_f$ admet un point d'inflexion dont on déterminera les coordonnées.

5. Montrer que l'équation $f(x) = -x$ admet une unique solution $\alpha$ dans $\mathbb{R}$ et vérifier que $\alpha \in ]-0{,}2\,;\,-0{,}1[$, puis donner un encadrement de $\alpha$ d'amplitude $10^{-1}$.

---

## Solution

**Méthode de lecture.** Une tangente **horizontale** signifie $f' = 0$. Pour une autre tangente, son coefficient directeur est $f'$ au point de tangence, et on le calcule avec deux points de la droite : $\dfrac{y_2 - y_1}{x_2 - x_1}$.

1. a. On lit les points marqués sur la courbe : $B(0\,;\,2)$, $D(1\,;\,6)$, $A(2\,;\,4)$, $H(3\,;\,2)$.

   - $f(0) = 2$, $f(1) = 6$, $f(2) = 4$, $f(3) = 2$.

   - Les tangentes en $1$ et en $3$ sont horizontales : $f'(1) = 0$ et $f'(3) = 0$.

   - $f'(0)$ est le coefficient directeur de $\Delta$. $\Delta$ passe par $B(0\,;\,2)$ et $C(0{,}5\,;\,6{,}5)$ : $f'(0) = \dfrac{6{,}5 - 2}{0{,}5 - 0} = \dfrac{4{,}5}{0{,}5} = 9$.

   - $f'(2)$ est le coefficient directeur de $T$. $T$ passe par $A(2\,;\,4)$ et par le point $(3\,;\,1)$ (on lit sur le quadrillage que $T$ passe $1$ unité sous le point $H$) : $f'(2) = \dfrac{1 - 4}{3 - 2} = -3$.

   b. Équation de la tangente en $a$ : $y = f'(a)(x - a) + f(a)$.

   - $\Delta$ (en $a = 0$) : $y = 9(x - 0) + 2$, soit $\Delta : y = 9x + 2$. On vérifie : en $x = 0{,}5$, $y = 6{,}5$, c'est bien le point $C$.

   - $T$ (en $a = 2$) : $y = -3(x - 2) + 4$, soit $T : y = -3x + 10$.

   c. $f(x) \geqslant 2$ signifie que la courbe est **au-dessus ou sur** la droite horizontale $y = 2$.

   Sur le graphique : à gauche de $B$ ($x < 0$) la courbe est sous la droite $y = 2$ ; elle la rencontre en $B$ ($x = 0$), reste au-dessus (elle monte jusqu'à $6$, redescend jusqu'à $H$ qui est sur la droite $y = 2$, puis remonte) ; en $H$ ($x = 3$) elle touche la droite sans passer dessous.

   $S = [0, +\infty[$.

   d. On lit les variations : la courbe monte jusqu'à $D$, descend jusqu'à $H$, puis remonte indéfiniment. À gauche, elle descend vers le bas sans limite.

   | $x$ | $-\infty$ | | $1$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
   | $f(x)$ | $-\infty$ | ↗ | $6$ | ↘ | $2$ | ↗ | $+\infty$ |

   e. **La fonction $g = \dfrac{1}{f}$.**

   - *Domaine.* $g(x)$ existe si $f(x) \neq 0$. Sur le graphique, la courbe coupe l'axe des abscisses **une seule fois**, en un point d'abscisse $x_0 \approx -0{,}2$. Donc $D_g = \mathbb{R} \setminus \{x_0\}$.

   - *Variations.* La fonction « inverse » $t \mapsto \dfrac{1}{t}$ est décroissante sur $]-\infty, 0[$ et sur $]0, +\infty[$ : **là où $f$ monte, $g$ descend, et là où $f$ descend, $g$ monte** (à condition de rester du même côté de $0$). On en déduit aussi les limites : $\dfrac{1}{\pm\infty} = 0$, $\dfrac{1}{0^-} = -\infty$, $\dfrac{1}{0^+} = +\infty$, et $g(1) = \dfrac{1}{6}$, $g(3) = \dfrac{1}{2}$.

   **La fonction $h = \sqrt{f - 2}$.**

   - *Domaine.* $h(x)$ existe si $f(x) - 2 \geqslant 0$, c'est-à-dire $f(x) \geqslant 2$ : c'est la question **c.** Donc $D_h = [0, +\infty[$.

   - *Variations.* La fonction racine carrée est **croissante** : $h$ varie dans le **même sens** que $f - 2$, donc que $f$. Les valeurs : $h(0) = \sqrt{0} = 0$, $h(1) = \sqrt{6 - 2} = 2$, $h(3) = \sqrt{2 - 2} = 0$.

   | $x$ | $-\infty$ | | $x_0$ | | $1$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|---|---|
   | $f(x)$ | $-\infty$ | ↗ | $0$ | ↗ | $6$ | ↘ | $2$ | ↗ | $+\infty$ |
   | $g(x)$ | $0$ | ↘ | $-\infty$ ‖ $+\infty$ | ↘ | $\dfrac{1}{6}$ | ↗ | $\dfrac{1}{2}$ | ↘ | $0$ |

   | $x$ | $0$ | | $1$ | | $3$ | | $+\infty$ |
   |---|---|---|---|---|---|---|---|
   | $h(x)$ | $0$ | ↗ | $2$ | ↘ | $0$ | ↗ | $+\infty$ |

2. On traduit chaque lecture par une équation sur $m$, $n$, $p$, $q$. Avec $f(x) = mx^3 + nx^2 + px + q$, la dérivée est $f'(x) = 3mx^2 + 2nx + p$.

   - $f(0) = q = 2$ ;

   - $f'(0) = p = 9$ ;

   - $f(1) = m + n + p + q = 6$. Comme $p + q = 11$ : $m + n = -5$ **(1)** ;

   - $f'(1) = 3m + 2n + p = 0$. Comme $p = 9$ : $3m + 2n = -9$ **(2)**.

   On résout le système (1), (2). On retranche $2 \times$ (1) à (2) pour éliminer $n$ : $(3m + 2n) - 2(m + n) = -9 - 2 \times (-5)$, soit $m = -9 + 10 = 1$. Puis (1) donne $n = -5 - 1 = -6$.

   Donc $m = 1$, $n = -6$, $p = 9$, $q = 2$ :

   $f(x) = x^3 - 6x^2 + 9x + 2$.

   *Vérification avec les autres lectures.* $f(2) = 8 - 24 + 18 + 2 = 4$ ✓ ; $f(3) = 27 - 54 + 27 + 2 = 2$ ✓ ; $f'(2) = 12 - 24 + 9 = -3$ ✓ ; $f'(3) = 27 - 36 + 9 = 0$ ✓.

3. $f(x) = x^3 - 6x^2 + 9x + 2$.

   $f'(x) = 3x^2 - 12x + 9$, que l'on peut factoriser : $f'(x) = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$ (on retrouve les tangentes horizontales en $1$ et en $3$).

   $f''(x) = 6x - 12 = 6(x - 2)$.

4. Un point d'inflexion apparaît là où $f''$ **s'annule en changeant de signe**.

   - $f''(x) < 0$ pour $x < 2$ (courbe concave) ;

   - $f''(2) = 0$ ;

   - $f''(x) > 0$ pour $x > 2$ (courbe convexe).

   $f''$ change de signe en $2$ : $\mathcal{C}_f$ admet un point d'inflexion d'abscisse $2$. Son ordonnée est $f(2) = 4$ :

   $A(2\,;\,4)$.

   C'est le point $A$ de la figure, où la tangente $T$ **traverse** la courbe.

5. L'équation $f(x) = -x$ équivaut à $f(x) + x = 0$. On pose $\varphi(x) = f(x) + x = x^3 - 6x^2 + 10x + 2$ et on cherche ses zéros.

   **Pour $x \geqslant 0$ : aucune solution.** On factorise : $x^3 - 6x^2 + 10x = x(x^2 - 6x + 10) = x\bigl((x - 3)^2 + 1\bigr)$. Pour $x \geqslant 0$ ce produit est positif, donc $\varphi(x) \geqslant 2 > 0$.

   **Pour $x < 0$ : exactement une solution.** $\varphi'(x) = 3x^2 - 12x + 10$. Pour $x < 0$, chaque terme est positif ($3x^2 > 0$, $-12x > 0$, $10 > 0$) : $\varphi'(x) > 0$ et $\varphi$ est **strictement croissante** sur $]-\infty, 0]$. De plus $\varphi$ est continue, $\displaystyle\lim_{x \to -\infty} \varphi(x) = -\infty$ et $\varphi(0) = 2 > 0$. Donc $\varphi$ s'annule **exactement une fois** sur $]-\infty, 0[$.

   Conclusion : $f(x) = -x$ admet une **unique solution** $\alpha$ dans $\mathbb{R}$, et $\alpha < 0$.

   **Vérification de $\alpha \in ]-0{,}2\,;\,-0{,}1[$.**

   - $\varphi(-0{,}2) = -0{,}008 - 0{,}24 - 2 + 2 = -0{,}248 < 0$ ;

   - $\varphi(-0{,}1) = -0{,}001 - 0{,}06 - 1 + 2 = 0{,}939 > 0$.

   $\varphi$ est continue et strictement croissante sur $[-0{,}2\,;\,-0{,}1]$ avec un changement de signe : $\alpha \in ]-0{,}2\,;\,-0{,}1[$.

   **Encadrement d'amplitude $10^{-1}$.** L'intervalle $]-0{,}2\,;\,-0{,}1[$ est déjà d'amplitude $0{,}1 = 10^{-1}$ : c'est l'encadrement demandé.

   *Pour aller plus loin (amplitude $10^{-2}$).* $\varphi(-0{,}18) \approx -0{,}0002 < 0$ et $\varphi(-0{,}17) \approx 0{,}122 > 0$, donc $-0{,}18 < \alpha < -0{,}17$ (en fait $\alpha \approx -0{,}18$).
