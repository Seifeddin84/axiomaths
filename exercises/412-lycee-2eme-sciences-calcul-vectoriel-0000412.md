---
uid: "0000412"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Calcul vectoriel"
source: "Axiomaths"
title: "Simplifier des écritures vectorielles"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["vecteurs", "operations", "relation-de-chasles", "equation-vectorielle"]
provenance: own
dressing: "réduction d'expressions et relation de Chasles"
rung: 1
---
1. Soient $\vec{u}$ et $\vec{v}$ deux vecteurs. Écrire plus simplement :

   a. $3(\vec{u} - 2\vec{v}) + 2(2\vec{u} + \vec{v})$

   b. $2(\vec{u} + \vec{v}) - 3(\vec{u} - \vec{v}) - 5\vec{v}$

   c. $\dfrac{1}{2}(4\vec{u} - 2\vec{v}) - \dfrac{1}{3}(3\vec{u} + 6\vec{v})$

2. Résoudre l'équation d'inconnue le vecteur $\vec{x}$ : $\;2\vec{x} + 3\vec{u} = \vec{u} - 4\vec{v}$.

3. Soient $A$, $B$, $C$, $D$, $M$ et $N$ six points du plan. Simplifier, grâce à la relation de Chasles :

   a. $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD}$

   b. $\overrightarrow{AB} - \overrightarrow{CB}$

   c. $\overrightarrow{MA} + \overrightarrow{AB} + \overrightarrow{BN}$

   d. $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA}$

   e. $\overrightarrow{AM} - \overrightarrow{BM}$

---

## Solution

:::property[Règles de calcul sur les vecteurs]
Pour tous vecteurs $\vec{u}$, $\vec{v}$ et tous réels $a$, $b$ :

$$\boxed{a(\vec{u} + \vec{v}) = a\vec{u} + a\vec{v}} \qquad \boxed{(a + b)\vec{u} = a\vec{u} + b\vec{u}} \qquad a(b\vec{u}) = (ab)\vec{u}$$
:::

:::property[Relation de Chasles et vecteur opposé]
$$\boxed{\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}} \qquad \boxed{\overrightarrow{BA} = -\overrightarrow{AB}} \qquad \overrightarrow{AA} = \vec{0}$$

Pour **soustraire** un vecteur, on **ajoute son opposé** : $\overrightarrow{AB} - \overrightarrow{CB} = \overrightarrow{AB} + \overrightarrow{BC}$.
:::

1. a. On distribue, puis on regroupe les $\vec{u}$ et les $\vec{v}$ :

   $$\displaystyle 3(\vec{u} - 2\vec{v}) + 2(2\vec{u} + \vec{v}) = 3\vec{u} - 6\vec{v} + 4\vec{u} + 2\vec{v}$$

   $$\displaystyle = (3 + 4)\vec{u} + (-6 + 2)\vec{v} = 7\vec{u} - 4\vec{v}$$

   b. Le signe $-$ devant une parenthèse change tous les signes à l'intérieur :

   $$\displaystyle 2(\vec{u} + \vec{v}) - 3(\vec{u} - \vec{v}) - 5\vec{v} = 2\vec{u} + 2\vec{v} - 3\vec{u} + 3\vec{v} - 5\vec{v}$$

   $$\displaystyle = (2 - 3)\vec{u} + (2 + 3 - 5)\vec{v} = -\vec{u} + 0\,\vec{v} = -\vec{u}$$

   c. $\dfrac{1}{2}(4\vec{u} - 2\vec{v}) = 2\vec{u} - \vec{v}$ et $\dfrac{1}{3}(3\vec{u} + 6\vec{v}) = \vec{u} + 2\vec{v}$.

   $$\displaystyle (2\vec{u} - \vec{v}) - (\vec{u} + 2\vec{v}) = 2\vec{u} - \vec{v} - \vec{u} - 2\vec{v} = \vec{u} - 3\vec{v}$$

2. On isole $\vec{x}$ comme dans une équation ordinaire :

   $$\displaystyle 2\vec{x} + 3\vec{u} = \vec{u} - 4\vec{v} \iff 2\vec{x} = \vec{u} - 4\vec{v} - 3\vec{u} = -2\vec{u} - 4\vec{v}$$

   $$\displaystyle \iff \vec{x} = \frac{1}{2}(-2\vec{u} - 4\vec{v}) = -\vec{u} - 2\vec{v}$$

   Contrôle : $2(-\vec{u} - 2\vec{v}) + 3\vec{u} = -2\vec{u} - 4\vec{v} + 3\vec{u} = \vec{u} - 4\vec{v}$.

3. a. Chasles deux fois de suite : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, puis $\overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$.

   $$\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}$$

   b. On ajoute l'opposé de $\overrightarrow{CB}$, qui est $\overrightarrow{BC}$ :

   $$\overrightarrow{AB} - \overrightarrow{CB} = \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$

   c. Les vecteurs s'enchaînent : $M \to A \to B \to N$.

   $$\overrightarrow{MA} + \overrightarrow{AB} + \overrightarrow{BN} = \overrightarrow{MN}$$

   d. On range les vecteurs pour qu'ils s'enchaînent : $A \to B \to C \to D \to A$.

   $$\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \overrightarrow{AA} = \vec{0}$$

   e. $\overrightarrow{AM} - \overrightarrow{BM} = \overrightarrow{AM} + \overrightarrow{MB}$, car l'opposé de $\overrightarrow{BM}$ est $\overrightarrow{MB}$.

   $$\overrightarrow{AM} + \overrightarrow{MB} = \overrightarrow{AB}$$

:::intuition
Pour la relation de Chasles, on cherche une **chaîne** : l'arrivée de chaque vecteur est le départ du suivant. Les points du milieu « s'annulent ».
:::

:::trap
$\overrightarrow{AB} - \overrightarrow{CB}$ n'est **pas** $\overrightarrow{AC}$ « parce que les $B$ se simplifient » sans réfléchir : on doit d'abord retourner $\overrightarrow{CB}$ en $\overrightarrow{BC}$ pour obtenir une chaîne $A \to B \to C$.
:::
