---
uid: "0000378"
school: "lycee"
level: "2eme"
section: ["Sciences", "Informatique"]
chapter: "Notion de Polynômes"
source: "Axiomaths"
title: "Vrai ou faux ?"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["vrai-faux", "polynomes", "degre", "racine", "contre-exemple"]
provenance: "own"
dressing: "vrai ou faux sur les polynômes"
rung: 4
batch: "2026-11-19-2sc-polynomes-barycentre"
---

Répondre par vrai ou faux en justifiant (un calcul, ou un contre-exemple).

1. Le polynôme $(x+1)^3-(x-1)^3$ est de degré $3$.

2. Si $P$ et $Q$ sont deux polynômes de degré $3$, alors $P+Q$ est de degré $3$.

3. Le réel $2$ est une racine du polynôme $x^3-3x^2+4$.

4. Le polynôme $x^4+x^2+1$ n'a aucune racine réelle.

5. Un polynôme de degré $2$ peut admettre trois racines distinctes.

6. Si $a(x-1)^2+b=x^2-2x+5$ pour tout réel $x$, alors $a=1$ et $b=4$.

---

## Solution

1. **Faux.**

   :::property[Identités remarquables]
   $\boxed{(x+1)^3=x^3+3x^2+3x+1}$ et $\boxed{(x-1)^3=x^3-3x^2+3x-1}$.
   :::

   On soustrait :

   $$\displaystyle (x+1)^3-(x-1)^3=x^3+3x^2+3x+1-x^3+3x^2-3x+1$$

   $$\displaystyle (x+1)^3-(x-1)^3=6x^2+2$$

   Les termes en $x^3$ s'éliminent : le degré est $2$.

2. **Faux.** Contre-exemple : $P(x)=x^3$ et $Q(x)=-x^3+1$ sont de degré $3$, mais

   $$\displaystyle P(x)+Q(x)=1$$

   est de degré $0$.

3. **Vrai.**

   :::property[Racine]
   $\alpha$ est une racine de $P$ si et seulement si $\boxed{P(\alpha)=0}$.
   :::

   $$\displaystyle 2^3-3\times2^2+4=8-12+4=0$$

4. **Vrai.** Pour tout réel $x$, $x^4\geq0$ et $x^2\geq0$, donc

   $$\displaystyle x^4+x^2+1\geq1>0$$

   Ce polynôme ne s'annule jamais.

5. **Faux.**

   :::property[Nombre de racines]
   Un polynôme non nul de degré $n$ a $\boxed{\text{au plus }n\text{ racines}}$.
   :::

   Un polynôme de degré $2$ a donc au plus deux racines.

6. **Vrai.** On développe le membre de gauche :

   $$\displaystyle a(x-1)^2+b=ax^2-2ax+a+b$$

   :::property[Identification]
   Deux polynômes sont égaux si et seulement si leurs coefficients de même degré sont égaux.
   :::

   $$
   \displaystyle \left\{
     \begin{aligned}
       a&=1 &&\text{(coefficient de }x^2\text{)}\\
       -2a&=-2 &&\text{(coefficient de }x\text{)}\\
       a+b&=5 &&\text{(terme constant)}
     \end{aligned}
     \right.
   $$

   Donc $a=1$ et $b=5-1=4$.
