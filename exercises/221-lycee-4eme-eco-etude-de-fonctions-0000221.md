---
uid: "0000221"
school: "lycee"
level: "4eme"
section: "Economie et Gestion"
chapter: "Etude de fonctions"
source: "Série 2 — Continuité - Dérivabilité (Bac Économie et Gestion), Ex. 17"
title: "Coût moyen de production et seuil de rentabilité"
country: "Tunisie"
year: 2021
professor: "Seifeddine Talbi"
difficulty: "Moyen"
points: null
tags: ["cout-moyen", "asymptote-oblique", "seuil-de-rentabilite", "inequation-du-second-degre", "modelisation"]
---

Une entreprise fabrique et vend un liquide $L$. Une étude a permis de modéliser le coût moyen de production par la fonction $f(x) = 0{,}5x + \dfrac{8}{x}$ pour tout $x > 0$.

Le coût moyen $f(x)$ est exprimé en milliers de dinars et la quantité produite $x$ en $\text{m}^3$. On note $\mathcal{C}_f$ la courbe représentative de $f$ dans un repère orthonormé du plan (unité graphique $1$ cm).

### Partie A. Étude de la fonction coût moyen

1. Étudier le sens de variation de $f$ sur l'intervalle $]0, +\infty[$.

2. Déterminer les limites de $f$ en $0$ et en $+\infty$.

3. Donner le tableau de variations de $f$.

4. Montrer que la droite $D$ d'équation $y = 0{,}5x$ est une asymptote oblique à $\mathcal{C}_f$. Étudier la position relative de $\mathcal{C}_f$ par rapport à $D$.

5. Construire $\mathcal{C}_f$ ainsi que $D$.

### Partie B. Seuils de rentabilité pour l'entreprise

L'entreprise ne peut être bénéficiaire que si le prix de vente du mètre cube est supérieur au coût moyen de fabrication. Le prix de vente du mètre cube $p(x)$ est fonction de la quantité $x$ vendue :

$$(S_2) : \quad p(x) = \begin{cases} -0{,}8x + 10 & \text{si } x \in ]0\,;\,10[ \\ 2 & \text{si } x \in [10\,;\,+\infty[ \end{cases}$$

1. Tracer $\mathcal{C}_p$, la courbe représentant le prix de vente $p(x)$.

2. Étudier graphiquement la continuité de $p$.

3. Déterminer graphiquement l'intervalle dans lequel doit se situer la production $x$ pour que l'entreprise soit bénéficiaire.

4. Confirmer le résultat précédent par le calcul.

---

## Solution

### Partie A

1. $f(x) = 0{,}5x + \dfrac{8}{x}$ est dérivable sur $]0, +\infty[$. On dérive : $(0{,}5x)' = 0{,}5$ et $\left(\dfrac{8}{x}\right)' = -\dfrac{8}{x^2}$.

   $f'(x) = 0{,}5 - \dfrac{8}{x^2}$.

   On met sur le même dénominateur pour étudier le signe :

   $f'(x) = \dfrac{0{,}5x^2 - 8}{x^2} = \dfrac{x^2 - 16}{2x^2} = \dfrac{(x - 4)(x + 4)}{2x^2}$.

   Pour $x > 0$ : $2x^2 > 0$ et $x + 4 > 0$. Le signe de $f'(x)$ est donc celui de $x - 4$ :

   - $f'(x) < 0$ si $0 < x < 4$ : $f$ est **décroissante** sur $]0, 4]$ ;

   - $f'(x) > 0$ si $x > 4$ : $f$ est **croissante** sur $[4, +\infty[$.

   Le coût moyen est donc minimal pour $x = 4$ : $f(4) = 0{,}5 \times 4 + \dfrac{8}{4} = 2 + 2 = 4$.

2. **En $0$ (à droite)** : $0{,}5x \to 0$ et $\dfrac{8}{x} \to +\infty$, donc $\displaystyle\lim_{x \to 0^+} f(x) = +\infty$.

   **En $+\infty$** : $0{,}5x \to +\infty$ et $\dfrac{8}{x} \to 0$, donc $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.

   *Interprétation.* La courbe a pour asymptote verticale l'axe des ordonnées ($x = 0$) : produire de très petites quantités coûte énormément par mètre cube.

3. On rassemble le signe de $f'$, les limites et la valeur du minimum.

   | $x$ | $0$ | | $4$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f'(x)$ | ‖ | $-$ | $0$ | $+$ | |
   | $f(x)$ | $+\infty$ | ↘ | $4$ | ↗ | $+\infty$ |

4. On calcule l'écart entre la courbe et la droite $D : y = 0{,}5x$ :

   $f(x) - 0{,}5x = \dfrac{8}{x}$.

   Cet écart tend vers $0$ quand $x \to +\infty$ : la droite $D$ est **asymptote oblique** à $\mathcal{C}_f$ en $+\infty$.

   Pour tout $x > 0$, $\dfrac{8}{x} > 0$ : $\mathcal{C}_f$ est **au-dessus** de $D$ sur tout $]0, +\infty[$.

5. **Préparer le tracé.** $D$ passe par $O$ et par $(10\,;\,5)$. Quelques points de $\mathcal{C}_f$ :

   | $x$ | $1$ | $2$ | $4$ | $8$ | $12$ |
   |---|---|---|---|---|---|
   | $f(x)$ | $8{,}5$ | $5$ | $4$ | $5$ | $\approx 6{,}7$ |

   La courbe descend le long de l'axe des ordonnées, atteint son minimum $(4\,;\,4)$ avec une tangente horizontale, puis remonte en se rapprochant de $D$ par au-dessus.

   ![Courbe du coût moyen f avec son minimum au point (4, 4) et l'asymptote oblique D d'équation y = 0,5x en pointillés](/exercises/images/221-lycee-4eme-eco-etude-de-fonctions-0000221-a.png)

### Partie B

1. Pour $x \in ]0, 10[$, $p(x) = -0{,}8x + 10$ est une fonction affine : sa courbe est un **segment**. On calcule ses extrémités :

   - en $x = 0$ : $y = 10$ (point **exclu**, cercle vide, car $x = 0$ n'est pas dans $]0, 10[$) ;

   - en $x = 10$ : $y = -8 + 10 = 2$.

   Pour $x \geq 10$, $p(x) = 2$ : la courbe est une **demi-droite horizontale** à la hauteur $2$, à partir du point $(10\,;\,2)$ (inclus).

   ![Courbe du prix p formée d'un segment de (0, 10) à (10, 2) puis d'une demi-droite horizontale à la hauteur 2, avec la courbe du coût moyen et leurs deux points d'intersection d'abscisses environ 0,9 et 6,8](/exercises/images/221-lycee-4eme-eco-etude-de-fonctions-0000221-b.png)

2. Sur $]0, 10[$ et sur $]10, +\infty[$, $p$ est affine donc continue : il reste à regarder le point de raccord en $x = 10$.

   Graphiquement, le segment arrive exactement au point $(10\,;\,2)$ et la demi-droite horizontale **repart de ce même point** : on peut tracer la courbe d'un seul trait, sans lever le crayon. $p$ est donc **continue** sur $]0, +\infty[$ (et en particulier en $10$).

   *Vérification par le calcul.* $\displaystyle\lim_{x \to 10^-} p(x) = -0{,}8 \times 10 + 10 = 2$, $\displaystyle\lim_{x \to 10^+} p(x) = 2$ et $p(10) = 2$ : les trois valeurs coïncident.

3. L'entreprise est bénéficiaire quand le prix de vente est **supérieur** au coût moyen, c'est-à-dire quand $\mathcal{C}_p$ est **au-dessus** de $\mathcal{C}_f$.

   Sur le graphique, les deux courbes se coupent en deux points, d'abscisses environ $0{,}9$ et $6{,}8$. Entre ces deux abscisses, $\mathcal{C}_p$ est au-dessus de $\mathcal{C}_f$. Pour $x \geq 10$, $\mathcal{C}_p$ est au contraire sous $\mathcal{C}_f$.

   Graphiquement, l'entreprise est bénéficiaire pour $x \in ]0{,}9\,;\,6{,}8[$ (en $\text{m}^3$).

4. **Pour $x \in ]0, 10[$.** On résout $p(x) > f(x)$ :

   $-0{,}8x + 10 > 0{,}5x + \dfrac{8}{x}$.

   On multiplie par $x > 0$ (le sens de l'inégalité ne change pas) :

   $-0{,}8x^2 + 10x > 0{,}5x^2 + 8 \iff 0 > 1{,}3x^2 - 10x + 8$.

   On multiplie par $10$ pour supprimer les décimales : $13x^2 - 100x + 80 < 0$.

   Discriminant : $\Delta = (-100)^2 - 4 \times 13 \times 80 = 10\,000 - 4\,160 = 5\,840 = 16 \times 365$, donc $\sqrt{\Delta} = 4\sqrt{365}$.

   Racines : $x_{1,2} = \dfrac{100 \mp 4\sqrt{365}}{26} = \dfrac{50 \mp 2\sqrt{365}}{13}$, soit $x_1 \approx 0{,}907$ et $x_2 \approx 6{,}785$.

   Le coefficient de $x^2$ est positif ($13 > 0$) : le trinôme est **négatif entre ses racines**. Les deux racines sont bien dans $]0, 10[$, donc sur cet intervalle :

   $p(x) > f(x) \iff x \in \left] \dfrac{50 - 2\sqrt{365}}{13}\,;\,\dfrac{50 + 2\sqrt{365}}{13} \right[$.

   **Pour $x \geq 10$.** $p(x) = 2$ alors que $f(x) \geq f(4) = 4$ (minimum de $f$) : $p(x) < f(x)$, pas de bénéfice.

   **Conclusion.** L'entreprise est bénéficiaire pour une production $x$ comprise (strictement) entre $\dfrac{50 - 2\sqrt{365}}{13} \approx 0{,}91$ et $\dfrac{50 + 2\sqrt{365}}{13} \approx 6{,}79$ mètres cubes : c'est bien le résultat lu sur le graphique.
