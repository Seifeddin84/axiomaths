---
uid: "0000361"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités numériques"
source: "Axiomaths"
title: "Écriture scientifique"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["ecriture-scientifique", "puissances-de-10", "puissances", "nombre-de-chiffres"]
provenance: "own"
batch: "2026-11-22-revision-1ere-A"
---

Écrire en écriture scientifique :

1. $A=\dfrac{0{,}00045\times8\,000\,000\times(2{,}5\times10^{-3})^2}{0{,}0000125\times4\times10^{5}}$ ;

2. $B=4^{15}\times25^{14}$ ;

3. $C=2^{2026}\times5^{2020}$ ; combien de chiffres $C$ possède-t-il en écriture décimale ?

4. **Application.** La Terre est à $1{,}5\times10^{8}$ km du Soleil et la lumière parcourt $3\times10^{5}$ km par seconde. Combien de temps la lumière du Soleil met-elle pour nous atteindre (en minutes et secondes) ?

5. **Application.** Proxima du Centaure est à $4\times10^{13}$ km de nous. Combien d'années la lumière met-elle pour nous en parvenir (au dixième près) ? On prendra $1$ an $=3{,}15\times10^{7}$ s.

---

## Solution

:::property[Écriture scientifique et puissances]
Écriture scientifique : $\boxed{a\times10^{n}\text{ avec }1\leq a<10\text{ et }n\in\mathbb Z}$.

Règles : $\boxed{10^{m}\times10^{n}=10^{m+n}}$, $\boxed{(x^{m})^{n}=x^{mn}}$, $\boxed{(xy)^{n}=x^{n}y^{n}}$ et $\dfrac{10^{m}}{10^{n}}=10^{m-n}$.
:::

1. On écrit chaque nombre en écriture scientifique :

   $$\displaystyle 0{,}00045=4{,}5\times10^{-4}\qquad8\,000\,000=8\times10^{6}\qquad0{,}0000125=1{,}25\times10^{-5}$$

   $$\displaystyle (2{,}5\times10^{-3})^2=6{,}25\times10^{-6}$$

   **Numérateur :** on regroupe les décimaux et les puissances de $10$ :

   $$\displaystyle (4{,}5\times8\times6{,}25)\times10^{-4+6-6}=225\times10^{-4}$$

   **Dénominateur :**

   $$\displaystyle (1{,}25\times4)\times10^{-5+5}=5$$

   **Quotient :**

   $$\displaystyle A=\dfrac{225\times10^{-4}}{5}=45\times10^{-4}=\boxed{4{,}5\times10^{-3}}$$

2. On exprime tout avec des puissances de $2$ et de $5$ :

   $$\displaystyle 4^{15}=(2^2)^{15}=2^{30}\qquad25^{14}=(5^2)^{14}=5^{28}$$

   On sépare $2^{30}=2^{2}\times2^{28}$ pour former des $10$ :

   $$\displaystyle B=2^{2}\times2^{28}\times5^{28}=4\times(2\times5)^{28}=\boxed{4\times10^{28}}$$

3. On sépare $2^{2026}=2^{6}\times2^{2020}$ :

   $$\displaystyle C=2^{6}\times2^{2020}\times5^{2020}=64\times10^{2020}$$

   Mais $64$ n'est pas compris entre $1$ et $10$ : on écrit $64=6{,}4\times10$.

   $$\displaystyle C=\boxed{6{,}4\times10^{2021}}$$

   En écriture décimale, $C$ s'écrit $64$ suivi de $2020$ zéros.

   Le nombre de chiffres est $2+2020=\boxed{2022}$.

4. On utilise la formule « temps $=\dfrac{\text{distance}}{\text{vitesse}}$ » :

   $$\displaystyle t=\dfrac{1{,}5\times10^{8}}{3\times10^{5}}=0{,}5\times10^{3}=5\times10^{2}\ \text{s}=500\ \text{s}$$

   Comme $500=8\times60+20$ :

   $$\displaystyle t=\boxed{8\ \text{min}\ 20\ \text{s}}$$

5. Temps en secondes :

   $$\displaystyle t=\dfrac{4\times10^{13}}{3\times10^{5}}=\dfrac43\times10^{8}\approx1{,}33\times10^{8}\ \text{s}$$

   On convertit en années :

   $$\displaystyle \dfrac{1{,}33\times10^{8}}{3{,}15\times10^{7}}=\dfrac{13{,}3}{3{,}15}\approx4{,}2$$

   La lumière met environ $\boxed{4{,}2\text{ ans}}$.

:::intuition
Pour des puissances de bases différentes, on cherche à former des $10=2\times5$.
:::

:::trap
Laisser $64\times10^{2020}$ : ce n'est pas une écriture scientifique, et le nombre de chiffres est alors faux ($2022$ et non $2021$).
:::
