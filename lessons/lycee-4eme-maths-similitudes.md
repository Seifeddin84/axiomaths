---
title: "Similitudes : agrandir sans déformer"
slug: "lycee-4eme-maths-similitudes"
school: "lycee"
level: "4eme"
sections: ["Mathématiques"]
chapter: "Similitudes"
summary: "Définition et propriétés des similitudes, similitudes directes et indirectes, angle, centre, forme réduite, écriture complexe z' = az + b et z' = a z̄ + b."
prerequisites: ["Homothéties", "Isométries, déplacements et antidéplacements", "Nombres complexes (module, argument)", "Angles orientés"]
source: "Manuel officiel 4ème année Mathématiques, Tome 2, chapitre 4 « Similitudes »"
updated: "2026-11-10"
---

## Pourquoi ce chapitre ?

Une photocopieuse qui agrandit à 150 % ne déforme rien : les angles restent les mêmes, les droites restent des droites, un cercle reste un cercle. Seule l'échelle change. Les isométries (translations, rotations, symétries) conservent les distances ; les homothéties les multiplient par une constante. Une **similitude** est tout ce que l'on peut obtenir en combinant les deux.

:::intuition
Une similitude, c'est « un changement d'échelle suivi d'un déplacement de la feuille ». Le changement d'échelle donne le **rapport** $k$ ; le déplacement de la feuille (éventuellement retournée comme dans un miroir) donne l'**angle** et le **centre**. Avec les nombres complexes, tout cela tient dans la formule $z' = az + b$ : le module de $a$ est le rapport, son argument est l'angle.
:::

Le plan est orienté dans le sens direct. On note $\overrightarrow{MN}$ le vecteur d'origine $M$ et d'extrémité $N$, et $M'$ l'image du point $M$.

## 1. Rappels : homothéties et nombres complexes

Une **homothétie** $h$ de centre $I$ et de rapport $k \neq 0$ envoie $M$ sur le point $M'$ tel que $\overrightarrow{IM'} = k\,\overrightarrow{IM}$. Elle multiplie les distances par $\lvert k\rvert$ et conserve les angles orientés.

:::theorem[Écriture complexe d'une homothétie]
Soit $f$ l'application qui à $M(z)$ associe $M'(z')$. L'application $f$ est une homothétie de rapport $k \neq 1$ si et seulement si $z' = kz + b$ pour un complexe $b$. Son centre est alors le point d'affixe $z_I = \dfrac{b}{1-k}$.
:::

Le centre est le **point fixe** : on résout $z = kz + b$, soit $z(1-k) = b$.

:::example[Une homothétie en complexes]
L'application $z' = 2z + 3$ est l'homothétie de rapport $2$ et de centre $\dfrac{3}{1-2} = -3$. Contrôle : $2(-3) + 3 = -3$, le point $-3$ est bien invariant.
:::

:::theorem[Composée de deux homothéties]
La composée de deux homothéties de rapports $k_1$ et $k_2$ est une homothétie de rapport $k_1k_2$ si $k_1k_2 \neq 1$, et une translation si $k_1k_2 = 1$.
:::

:::proof[Composée de deux homothéties]
| Étape | Justification |
|---|---|
| $h_1 : z \mapsto k_1z + b_1$ et $h_2 : z \mapsto k_2z + b_2$ | écriture complexe d'une homothétie |
| $h_2\circ h_1 : z \mapsto k_2(k_1z + b_1) + b_2 = k_1k_2\,z + (k_2b_1 + b_2)$ | on remplace $z$ par $k_1z + b_1$ |
| si $k_1k_2 \neq 1$, c'est une homothétie de rapport $k_1k_2$ | théorème précédent |
| si $k_1k_2 = 1$, c'est $z \mapsto z + b$, une translation | le coefficient de $z$ vaut $1$ |
:::

## 2. Similitudes

:::definition[Similitude]
Soit $k$ un réel strictement positif. Une **similitude de rapport $k$** est une application du plan dans lui-même qui multiplie toutes les distances par $k$ : pour tous points $A$ et $B$ d'images $A'$ et $B'$,
$$
A'B' = k\,AB.
$$
:::

Les isométries sont les similitudes de rapport $1$. Une homothétie de rapport $k$ (positif ou négatif) est une similitude de rapport $\lvert k\rvert$.

:::theorem[Composée de deux similitudes]
La composée d'une similitude de rapport $k$ et d'une similitude de rapport $k'$ est une similitude de rapport $kk'$.
:::

:::theorem[Deux visages d'une similitude]
Une application du plan est une similitude si et seulement si c'est la composée d'une homothétie et d'une isométrie.
:::

:::proof[Une similitude est une homothétie suivie d'une isométrie]
| Étape | Justification |
|---|---|
| Soit $f$ une similitude de rapport $k$ et $h$ une homothétie de rapport $k$ (de centre quelconque) | données |
| $h^{-1}\circ f$ est une similitude de rapport $\dfrac{1}{k}\times k = 1$, donc une isométrie $g$ | rapport d'une composée, et $h^{-1}$ est de rapport $\dfrac{1}{k}$ |
| $f = h\circ g$ | $h\circ(h^{-1}\circ f) = f$ |
| Réciproquement, $h\circ g$ est de rapport $\lvert k\rvert \times 1$ | rapport d'une composée |
:::

:::property[Ce que conserve une similitude de rapport $k$]
- C'est une **bijection**, et sa réciproque est une similitude de rapport $\dfrac{1}{k}$.
- Elle conserve les **angles géométriques**, l'orthogonalité, le parallélisme, l'alignement et le barycentre.
- Elle transforme une droite en une droite, un segment en un segment, un cercle en un cercle.
- Elle multiplie les longueurs par $k$, les **aires par $k^2$** et le produit scalaire par $k^2$ : $\overrightarrow{A'B'}\cdot\overrightarrow{C'D'} = k^2\,\overrightarrow{AB}\cdot\overrightarrow{CD}$.
:::

:::theorem[Trois points suffisent]
Deux similitudes qui coïncident sur trois points non alignés sont égales.
:::

:::proof[Trois points non alignés]
| Étape | Justification |
|---|---|
| Soit $f$ et $g$ deux similitudes qui envoient $A$, $B$, $C$ (non alignés) sur les mêmes points | données |
| $f$ et $g$ ont le même rapport : $A'B' = k\,AB = k'\,AB$ donc $k = k'$ | $AB \neq 0$ |
| $g^{-1}\circ f$ est une isométrie qui fixe $A$, $B$ et $C$ | rapport $\dfrac{1}{k}\times k = 1$ |
| Une isométrie qui fixe trois points non alignés est l'identité | propriété des isométries |
| donc $f = g$ | on compose par $g$ |
:::

:::example[Triangles semblables]
Deux triangles $ABC$ et $A'B'C'$ sont **semblables** s'il existe une similitude qui envoie $A$, $B$, $C$ sur $A'$, $B'$, $C'$. C'est le cas si et seulement si les trois rapports $\dfrac{A'B'}{AB}$, $\dfrac{A'C'}{AC}$, $\dfrac{B'C'}{BC}$ sont égaux (et leur valeur commune est le rapport de la similitude). On le démontre en construisant la similitude comme dans le théorème d'existence ci-dessus.

Un triangle de côtés $2$, $3$, $4$ et un triangle de côtés $3$, $4{,}5$, $6$ sont semblables : les trois rapports valent $\dfrac{3}{2}$. Si le premier a pour aire $A$, le second a pour aire $\dfrac{9}{4}A$.
:::

## 3. Similitudes directes et indirectes

Une isométrie est soit un déplacement (elle conserve les angles orientés), soit un antidéplacement (elle les change en leurs opposés). Il en est de même pour une similitude, puisqu'elle s'écrit « homothétie puis isométrie ».

:::definition[Directe, indirecte]
Une similitude est **directe** si c'est la composée d'une homothétie et d'un **déplacement** ; elle est **indirecte** si c'est la composée d'une homothétie et d'un **antidéplacement**.

Une similitude directe conserve les mesures des angles orientés ; une similitude indirecte les change en leurs opposées.
:::

:::property[La règle des signes]
Disons « directe $= +1$ » et « indirecte $= -1$ ». La composée suit la règle des signes :

| $f\circ g$ | $g$ directe | $g$ indirecte |
|---|---|---|
| **$f$ directe** | directe | indirecte |
| **$f$ indirecte** | indirecte | directe |

La réciproque d'une similitude directe est directe ; celle d'une indirecte est indirecte.
:::

:::theorem[Une similitude de $A$ vers $C$ et de $B$ vers $D$]
Soit $A \neq B$ et $C \neq D$. Il existe **une unique** similitude directe qui envoie $A$ sur $C$ et $B$ sur $D$, et il existe **une unique** similitude indirecte qui fait de même.
:::

L'unicité vient du fait que deux similitudes de même nature qui coïncident sur $A$ et $B$ donnent, en composant l'une avec la réciproque de l'autre, une similitude directe de rapport $1$ qui fixe $A$ et $B$ : c'est l'identité. Pour l'existence, on place le point $B_1$ de la demi-droite $[CD)$ tel que $CB_1 = AB$, on prend le déplacement qui envoie $A$ sur $C$ et $B$ sur $B_1$, et on le compose avec l'homothétie de centre $C$ qui envoie $B_1$ sur $D$.

## 4. Similitudes directes : angle, centre, forme réduite

### L'angle

:::theorem[Angle d'une similitude directe]
Soit $f$ une similitude directe. Pour tous points $A \neq B$ d'images $A'$ et $B'$, l'angle $(\overrightarrow{AB},\overrightarrow{A'B'})$ **ne dépend pas** du couple $(A,B)$. Une de ses mesures $\theta$ s'appelle **l'angle** de $f$.
:::

L'angle d'une composée est la somme des angles ; celui de la réciproque est l'opposé.

### Le centre

:::theorem[Centre d'une similitude directe]
Toute similitude directe de rapport $k \neq 1$ admet **un unique point fixe** $I$, appelé son **centre**. Le centre, le rapport et l'angle $\theta$ sont ses **éléments caractéristiques** : $f$ est la similitude directe de centre $I$, de rapport $k$ et d'angle $\theta$ si et seulement si, pour tout $M \neq I$ d'image $M'$,
$$
IM' = k\,IM \qquad\text{et}\qquad (\overrightarrow{IM},\overrightarrow{IM'}) = \theta\ [2\pi].
$$
:::

Lire cette caractérisation, c'est comprendre l'application : chaque point $M$ **tourne** autour de $I$ de l'angle $\theta$ et sa distance à $I$ est **multipliée** par $k$.

![Similitude directe](/lessons/images/m4-similitude-directe.svg "La similitude directe z' = (1+i)z + 2 a pour centre I d'affixe 2i, pour rapport racine de 2 et pour angle pi/4. Le triangle ABC est envoyé sur le triangle A'B'C' : chaque point tourne de pi/4 autour de I, et sa distance à I est multipliée par racine de 2.")

### La forme réduite

:::theorem[Forme réduite]
Soit $f$ une similitude directe de centre $I$, de rapport $k$ et d'angle $\theta$. Si $h$ est l'homothétie de centre $I$ et de rapport $k$ et $r$ la rotation de centre $I$ et d'angle $\theta$, alors
$$
f = h\circ r = r\circ h.
$$
:::

On peut donc toujours voir une similitude directe comme **une rotation et une homothétie de même centre**, qui commutent.

:::example[Éléments caractéristiques d'une composée]
Soit $I$ un point, $h$ l'homothétie de centre $I$ et de rapport $\dfrac{1}{2}$, et $r$ la rotation de centre $I$ et d'angle $\dfrac{2\pi}{3}$. Alors $h\circ r$ est la similitude directe de centre $I$, de rapport $\dfrac{1}{2}$ et d'angle $\dfrac{2\pi}{3}$.

Si $h$ avait pour rapport $-\dfrac{1}{2}$, la similitude serait de rapport $\left\lvert-\dfrac{1}{2}\right\rvert = \dfrac{1}{2}$ et d'angle $\dfrac{2\pi}{3} + \pi = \dfrac{5\pi}{3}$ : un rapport négatif ajoute un demi-tour à l'angle.
:::

## 5. Similitudes directes et nombres complexes

C'est l'outil qui rend les exercices calculables. Le plan est rapporté à un repère orthonormé direct.

:::theorem[Écriture complexe d'une similitude directe]
Soit $f$ l'application qui à $M(z)$ associe $M'(z')$ avec
$$
z' = az + b,\qquad a \in \mathbb C^*,\ b \in \mathbb C.
$$
Alors $f$ est une similitude directe de rapport $k = \lvert a\rvert$ et d'angle $\theta = \arg a$. Si $a \neq 1$, son centre est le point d'affixe $z_I = \dfrac{b}{1-a}$ ; si $a = 1$, c'est une translation.

Réciproquement, toute similitude directe a une écriture de cette forme.
:::

:::proof[Rapport, angle et centre]
| Étape | Justification |
|---|---|
| Si $z_I$ est le centre, $z_I = az_I + b$, donc $z_I = \dfrac{b}{1-a}$ | $I$ est invariant, $a \neq 1$ |
| On soustrait : $z' - z_I = a\,(z - z_I)$ | $z' = az + b$ et $z_I = az_I + b$ |
| Pour $M \neq I$ : $\dfrac{z' - z_I}{z - z_I} = a$ | on divise par $z - z_I \neq 0$ |
| $\dfrac{IM'}{IM} = \lvert a\rvert$ | module du quotient |
| $(\overrightarrow{IM},\overrightarrow{IM'}) = \arg a$ | argument du quotient, théorème sur l'angle de deux vecteurs |
:::

:::method[Trouver la similitude directe qui envoie $A$ sur $A'$ et $B$ sur $B'$]
On cherche $a$ et $b$ tels que $z_{A'} = az_A + b$ et $z_{B'} = az_B + b$. En soustrayant :
$$
a = \frac{z_{B'} - z_{A'}}{z_B - z_A},\qquad b = z_{A'} - az_A.
$$
Puis $k = \lvert a\rvert$, $\theta = \arg a$ et $z_I = \dfrac{b}{1-a}$.
:::

:::example[Lire une écriture complexe]
**1.** $z' = (1+i)z + 2$. On a $a = 1 + i = \sqrt 2\,e^{i\pi/4}$ : rapport $\sqrt 2$, angle $\dfrac{\pi}{4}$. Le centre est $\dfrac{2}{1 - (1+i)} = \dfrac{2}{-i} = 2i$. Contrôle : $(1+i)(2i) + 2 = 2i - 2 + 2 = 2i$ ✓. C'est la similitude de la figure ci-dessus.

**2.** On cherche la similitude directe qui envoie $A(0)$ sur $A'(2)$ et $B(1)$ sur $B'(2+2i)$. On a $a = \dfrac{(2+2i) - 2}{1 - 0} = 2i$ et $b = 2 - 2i\cdot 0 = 2$, donc $z' = 2iz + 2$ : rapport $2$, angle $\dfrac{\pi}{2}$, centre $\dfrac{2}{1-2i} = \dfrac{2(1+2i)}{5} = \dfrac{2+4i}{5}$. Contrôle sur le centre : $2i\cdot\dfrac{2+4i}{5} + 2 = \dfrac{4i - 8 + 10}{5} = \dfrac{2+4i}{5}$ ✓.
:::

Ce que l'on lit sur $a$ : si $a$ est réel positif, c'est une homothétie ; si $a$ est réel négatif, c'est une homothétie de rapport négatif ; si $\lvert a\rvert = 1$ avec $a \neq 1$, c'est une rotation ; la composition de deux telles applications multiplie les $a$ (les rapports se multiplient, les angles s'additionnent) et la réciproque est $z = \dfrac{z' - b}{a}$.

## 6. Similitudes indirectes

:::definition[Centre et axe]
Soit $f$ une similitude indirecte de rapport $k \neq 1$.

- Elle admet **un unique point fixe** $I$, son **centre**.
- Si $h$ est l'homothétie de centre $I$ et de rapport $k$, alors $h^{-1}\circ f$ est la symétrie orthogonale d'axe une droite $\Delta$ passant par $I$ : c'est l'**axe** de $f$, et
$$
f = h\circ S_\Delta = S_\Delta\circ h.
$$
:::

:::proof[Une similitude indirecte a un centre]
| Étape | Justification |
|---|---|
| $f\circ f$ est une similitude **directe** de rapport $k^2 \neq 1$ | règle des signes : indirecte $\times$ indirecte |
| elle admet un unique point fixe $I$ | théorème du centre |
| posons $J = f(I)$ ; alors $f\circ f(J) = f(f\circ f(I)) = f(I) = J$ | $f\circ f(I) = I$ |
| donc $J$ est lui aussi fixe par $f\circ f$, d'où $J = I$ | unicité du point fixe |
| donc $f(I) = I$, et $I$ est unique car tout point fixe de $f$ l'est de $f\circ f$ | on vient de le montrer |
:::

L'axe est l'ensemble des points $M$ tels que $\overrightarrow{IM'} = k\,\overrightarrow{IM}$ : seuls les points de l'axe sont envoyés « tout droit » depuis $I$. Pour $M$ hors de l'axe, **l'axe porte la bissectrice intérieure de l'angle $\widehat{MIM'}$** : l'image est le « reflet de $M$ dans l'axe », agrandi du facteur $k$.

:::property[Quelques conséquences]
- $f\circ f$ est l'**homothétie** de centre $I$ et de rapport $k^2$.
- L'axe $\Delta$ et la perpendiculaire à $\Delta$ passant par $I$ sont globalement invariants.
- Une similitude indirecte de rapport $k \neq 1$ est déterminée par son rapport, son centre et son axe.
:::

### Écriture complexe

:::theorem[Écriture complexe d'une similitude indirecte]
L'application $z' = a\bar z + b$ ($a \neq 0$) est une similitude **indirecte** de rapport $k = \lvert a\rvert$. Si $\lvert a\rvert \neq 1$, son centre est le point d'affixe
$$
z_I = \frac{a\bar b + b}{1 - \lvert a\rvert^2}.
$$
:::

:::proof[Le centre d'une similitude indirecte]
| Étape | Justification |
|---|---|
| $z'' = a\,\overline{(a\bar z + b)} + b$ | on applique $f$ deux fois |
| $z'' = a\bar a\,z + a\bar b + b = \lvert a\rvert^2 z + (a\bar b + b)$ | $\overline{\bar z} = z$ et $a\bar a = \lvert a\rvert^2$ |
| $f\circ f$ est donc une similitude directe d'écriture $z \mapsto \lvert a\rvert^2 z + (a\bar b + b)$ | écriture complexe directe, avec $\lvert a\rvert^2 \neq 1$ |
| Son centre est $\dfrac{a\bar b + b}{1 - \lvert a\rvert^2}$ ; c'est aussi celui de $f$ | $I$ est le point fixe de $f\circ f$ |
:::

:::method[Trouver l'axe]
Avec $z_I$ le centre, $a = \lvert a\rvert\,e^{i\theta}$ et $w = z - z_I$, on a $w' = a\,\bar w$ (car $f(I) = I$). Un point de l'axe vérifie $w' = \lvert a\rvert\,w$, c'est-à-dire $e^{i\theta}\bar w = w$. En écrivant $w = \rho\,e^{i\varphi}$, cela donne $e^{i(\theta - \varphi)} = e^{i\varphi}$, donc $\varphi = \dfrac{\theta}{2}$ modulo $\pi$. **L'axe passe par $I$ et sa direction a pour angle $\dfrac{\arg a}{2}$.**
:::

![Similitude indirecte](/lessons/images/m4-similitude-indirecte.svg "La similitude indirecte z' = (1+i) z barre + 1 a pour centre I d'affixe -2-i, pour rapport racine de 2 et pour axe la droite passant par I dont la direction a pour angle pi/8. Ici l'axe est la bissectrice de l'angle formé par IM et IM'.")

:::example[Une similitude indirecte]
Soit $f : z' = (1+i)\bar z + 1$. Ici $a = 1 + i = \sqrt 2\,e^{i\pi/4}$ et $b = 1$.

- Rapport : $\lvert a\rvert = \sqrt 2$.
- Centre : $z_I = \dfrac{(1+i)\cdot 1 + 1}{1 - 2} = -2 - i$. Contrôle : $(1+i)\overline{(-2-i)} + 1 = (1+i)(-2+i) + 1 = -2 + i - 2i - 1 + 1 = -2 - i$ ✓.
- Axe : droite passant par $I$ de direction $\dfrac{\pi}{8}$. Contrôle avec $M(-1+2i)$ : $f(M) = (1+i)(-1-2i) + 1 = 2 - 3i$, et $\arg(M - I) = \arg(1 + 3i) \approx 71{,}6^\circ$, $\arg(M' - I) = \arg(4 - 2i) \approx -26{,}6^\circ$ ; leur demi-somme vaut $22{,}5^\circ = \dfrac{\pi}{8}$ ✓.
:::

:::history
Euclide consacre le livre VI de ses *Éléments* (vers 300 av. J.-C.) aux figures semblables et aux proportions. Vingt-trois siècles plus tard, l'écriture $z' = az + b$ résume toute cette théorie en une ligne.
:::

## 7. Méthodes pour les exercices

| Situation | Outil |
|---|---|
| Identifier la nature de $z' = az + b$ ou $z' = a\bar z + b$ | présence de $\bar z$ : indirecte ; sinon directe |
| Rapport et angle d'une directe | $\lvert a\rvert$ et $\arg a$ |
| Centre d'une directe ($a \neq 1$) | résoudre $z = az + b$ : $z_I = \dfrac{b}{1-a}$ |
| Directe qui envoie $A \mapsto A'$, $B \mapsto B'$ | $a = \dfrac{z_{B'} - z_{A'}}{z_B - z_A}$, puis $b = z_{A'} - az_A$ |
| Centre d'une indirecte | $z_I = \dfrac{a\bar b + b}{1 - \lvert a\rvert^2}$ ; l'axe est dirigé par $e^{i\arg(a)/2}$ |
| Nature d'une composée | règle des signes, rapports multipliés, angles additionnés |
| Aires, produits scalaires | multiplier par $k^2$ |

## Vérifie-toi

::::check[Une homothétie qui ne dit pas son nom]
Quelle est la nature de $z' = -2z + 3$ ?

:::answer
Ici $a = -2 = 2e^{i\pi}$ : rapport $2$, angle $\pi$. C'est l'homothétie de rapport $-2$ et de centre $\dfrac{3}{1-(-2)} = 1$. Contrôle : $-2\cdot 1 + 3 = 1$ ✓.
:::
::::

::::check[Trouver la similitude]
Déterminer la similitude directe $f$ qui envoie $A(1)$ sur $A'(3)$ et $B(i)$ sur $B'(3+2i)$, puis donner ses éléments caractéristiques.

:::answer
$a = \dfrac{(3+2i) - 3}{i - 1} = \dfrac{2i}{i-1} = \dfrac{2i(-1-i)}{(i-1)(-1-i)} = \dfrac{2 - 2i}{2} = 1 - i$ et $b = 3 - a\cdot 1 = 2 + i$. Donc $z' = (1-i)z + 2 + i$ : rapport $\sqrt 2$, angle $-\dfrac{\pi}{4}$, centre $\dfrac{2+i}{i} = 1 - 2i$. Contrôle : $f(B) = (1-i)i + 2 + i = 3 + 2i$ ✓.
:::
::::

::::check[Nature d'une composée]
On compose une similitude directe de rapport $2$ et d'angle $\dfrac{\pi}{6}$ avec une similitude indirecte de rapport $\dfrac{1}{2}$. Quelle est la nature de la composée ?

:::answer
D'après la règle des signes, directe $\circ$ indirecte est **indirecte**, et son rapport est $2\times\dfrac{1}{2} = 1$. C'est donc un antidéplacement (une symétrie orthogonale ou une symétrie glissée), pas une homothétie.
:::
::::

::::check[Centre et axe]
Déterminer le centre, le rapport et l'axe de $z' = 3\bar z + 2$.

:::answer
Rapport $\lvert 3\rvert = 3$. Centre $\dfrac{3\cdot 2 + 2}{1 - 9} = -1$. Comme $\arg 3 = 0$, l'axe passe par $-1$ avec la direction $\dfrac{0}{2} = 0$ : c'est **l'axe des réels**. Contrôle : un réel $x$ est envoyé sur $3x + 2$ et $-1$ est invariant ($-3 + 2 = -1$) ✓.
:::
::::
