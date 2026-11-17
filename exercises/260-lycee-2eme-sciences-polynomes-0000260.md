---
uid: "0000260"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "QCM : polynômes et barycentre"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: 5
tags: ["qcm", "polynomes", "racines", "barycentre"]
provenance: own
---

Pour chaque question, **une ou plusieurs** réponses sont correctes. Aucune justification n'est demandée (1 pt par question).

1. Le degré du polynôme $P(x)=(x^2-x+1)^2-(x^2+x+1)^2$ est :

   - [ ] $4$

   - [ ] $3$

   - [ ] $2$

   - [ ] $0$

2. Soit $P(x)=x^3-3x^2-x+3$. Sont des racines de $P$ :

   - [ ] $1$

   - [ ] $-1$

   - [ ] $3$

   - [ ] $0$

3. Soit $P$ un polynôme de degré $3$ admettant $1$, $2$ et $4$ pour racines. Alors :

   - [ ] $P(x)=a(x-1)(x-2)(x-4)$ avec $a\neq0$

   - [ ] $P$ n'a pas d'autre racine

   - [ ] $P(0)=0$

   - [ ] $P$ est factorisable par $x^2-3x+2$

4. Soit $G$ le barycentre de $(A,2)$ et $(B,3)$. Alors :

   - [ ] $\overrightarrow{AG}=\dfrac35\overrightarrow{AB}$

   - [ ] $\overrightarrow{AG}=\dfrac25\overrightarrow{AB}$

   - [ ] $3\overrightarrow{GA}+2\overrightarrow{GB}=\vec0$

   - [ ] pour tout point $M$, $2\overrightarrow{MA}+3\overrightarrow{MB}=5\overrightarrow{MG}$

5. Parmi ces systèmes de points pondérés, lesquels admettent un barycentre ?

   - [ ] $\{(A,2),(B,-2)\}$

   - [ ] $\{(A,3),(B,-1)\}$

   - [ ] $\{(A,1),(B,2),(C,-3)\}$

   - [ ] $\{(A,-1),(B,-1),(C,3)\}$

---

## Solution

**Réponses.** 1 : B ; 2 : A, B, C ; 3 : A, B, D ; 4 : A, D ; 5 : B, D.

**Question 1.**

> **Rappel.** Le degré d'un polynôme est le plus grand exposant de $x$ *après* développement et réduction.

Pour développer sans erreur, on utilise l'identité $\boxed{a^2-b^2=(a-b)(a+b)}$ avec $a=x^2-x+1$ et $b=x^2+x+1$ :

$$a-b=-2x\qquad\text{et}\qquad a+b=2x^2+2$$

$$P(x)=-2x\,(2x^2+2)=-4x^3-4x$$

Les termes en $x^4$ se sont éliminés : le degré est $3$.    Réponse : **B**.

**Question 2.**

> **Définition.** Un réel $\alpha$ est une **racine** de $P$ si et seulement si $\boxed{P(\alpha)=0}$.

On calcule $P(\alpha)$ pour chaque valeur proposée :

$$P(1)=1-3-1+3=0\qquad P(-1)=-1-3+1+3=0$$

$$P(3)=27-27-3+3=0\qquad P(0)=3\neq0$$

Réponses : **A, B et C**.    ($0$ n'est pas une racine.)

**Question 3.**

> **Factorisation.** Si $\alpha_1$, $\alpha_2$, $\alpha_3$ sont des racines d'un polynôme $P$ de degré $3$, alors $\boxed{P(x)=a\,(x-\alpha_1)(x-\alpha_2)(x-\alpha_3)}$ avec $a\neq0$. Un polynôme de degré $3$ a **au plus trois** racines.

Proposition A : vraie, c'est la formule ci-dessus avec les racines $1$, $2$, $4$.

Proposition B : vraie, $P$ a déjà trois racines et ne peut pas en avoir une quatrième.

Proposition C : fausse, $P(0)=a\times(-1)\times(-2)\times(-4)=-8a\neq0$.

Proposition D : vraie, car $(x-1)(x-2)=x^2-3x+2$ est un facteur de $P(x)$.

Réponses : **A, B et D**.

**Question 4.**

> **Barycentre de deux points.** Si $\alpha+\beta\neq0$ et si $G$ est le barycentre de $(A,\alpha)$ et $(B,\beta)$, alors
>
> $$\boxed{\alpha\overrightarrow{GA}+\beta\overrightarrow{GB}=\vec0}\qquad\boxed{\overrightarrow{AG}=\dfrac{\beta}{\alpha+\beta}\overrightarrow{AB}}\qquad\textbf{$\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}=(\alpha+\beta)\overrightarrow{MG}$ pour tout $M$}$$

Ici $\alpha=2$ et $\beta=3$ :

$$\overrightarrow{AG}=\dfrac{3}{5}\overrightarrow{AB}\quad(\text{A vraie, B fausse})$$

$2\overrightarrow{GA}+3\overrightarrow{GB}=\vec0$ : la proposition C échange les coefficients, elle est fausse.

La proposition D est vraie : $2\overrightarrow{MA}+3\overrightarrow{MB}=5\overrightarrow{MG}$ pour tout point $M$.

Réponses : **A et D**.

**Question 5.**

> **Existence du barycentre.** Des points pondérés admettent un barycentre si et seulement si **la somme des coefficients est non nulle**.

$$\text{A : }2-2=0\quad\text{B : }3-1=2\quad\text{C : }1+2-3=0\quad\text{D : }-1-1+3=1$$

Réponses : **B et D**.
