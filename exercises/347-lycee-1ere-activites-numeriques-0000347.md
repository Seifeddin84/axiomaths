---
uid: "0000347"
school: "lycee"
level: "1ere"
section: null
chapter: "Activités Numériques"
source: "Lycée Farhat Hached Makthar : série d'exercices n°1 (2019-2020)"
title: "PGCD et bouquets de roses"
country: "Tunisie"
year: 2019
professor: "M. Ghorbeli Med Hedi"
difficulty: "Moyen"
points: null
tags: ["arithmetique", "pgcd", "algorithme-d-euclide", "probleme-concret", "partage"]
provenance: scan
dressing: "bouquets de roses et PGCD"
rung: 2
---

1. a. En utilisant l'algorithme d'Euclide, montrer que $\mathrm{PGCD}(1756\,;\,1317)=439$.

   b. En déduire l'écriture de la fraction $\dfrac{1317}{1756}$ sous forme irréductible.

   c. Écrire la fraction $\dfrac{1317}{1756}$ avec un dénominateur égal à $2012$.

2. Un fleuriste veut réaliser des bouquets identiques avec $1756$ roses blanches et $1317$ roses rouges, c'est-à-dire des bouquets comprenant un même nombre de roses et la même répartition entre roses blanches et roses rouges, en utilisant toutes les fleurs.

   a. Quel sera le nombre maximum de bouquets identiques ? Justifier clairement la réponse.

   b. Quelle sera alors la composition de chaque bouquet ?

---

## Solution

:::method[Algorithme d'Euclide]
On divise $a$ par $b$ : $a=bq+r$ avec $0\le r<b$, puis on recommence avec $(b\,;r)$.

$$\boxed{\text{le PGCD est le dernier reste non nul}}$$
:::

1. a. On enchaîne les divisions euclidiennes :

   $$\displaystyle 1756=1317\times1+439$$

   $$\displaystyle 1317=439\times3+0$$

   Le dernier reste non nul est $439$ : $\boxed{\mathrm{PGCD}(1756\,;1317)=439}$.

   b. On divise le numérateur et le dénominateur par le PGCD :

   $$\displaystyle \dfrac{1317}{1756}=\dfrac{439\times3}{439\times4}=\boxed{\dfrac{3}{4}}$$

   c. On a $2012=4\times503$. On multiplie donc le numérateur et le dénominateur de $\dfrac34$ par $503$ :

   $$\displaystyle \dfrac{1317}{1756}=\dfrac{3}{4}=\dfrac{3\times503}{4\times503}=\boxed{\dfrac{1509}{2012}}$$

   Contrôle : $1317\times2012=2\,649\,804=1\,756\times1\,509$.

2. a. Supposons que le fleuriste fasse $k$ bouquets identiques. Chaque bouquet contient le même nombre $w$ de roses blanches et le même nombre $r$ de roses rouges, et **toutes** les fleurs sont utilisées :

   $$\displaystyle 1756=k\times w \qquad 1317=k\times r$$

   Donc $k$ est un **diviseur commun** de $1756$ et de $1317$.

   Le plus grand diviseur commun est le PGCD : le nombre maximum de bouquets est

   $$\boxed{k=\mathrm{PGCD}(1756\,;1317)=439}$$

   b. Avec $439$ bouquets :

   $$\displaystyle w=\dfrac{1756}{439}=4 \qquad r=\dfrac{1317}{439}=3$$

   **Chaque bouquet contient $4$ roses blanches et $3$ roses rouges, soit $7$ roses.**

   Contrôle : $439\times4=1756$ et $439\times3=1317$.

:::intuition
« Partager sans reste en parts identiques » veut dire « diviser exactement » : on cherche les **diviseurs communs**, et « le plus grand nombre de parts » est leur PGCD.
:::

:::trap
Ne pas répondre « $439$ » sans justifier : l'énoncé demande de dire pourquoi le nombre de bouquets est un diviseur commun, puis pourquoi c'est le **plus grand**.
:::
