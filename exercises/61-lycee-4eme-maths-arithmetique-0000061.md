---
uid: "0000061"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Divisibilité dans Z"
source: "Exercices corrigés - Lycée Hassan"
title: "Congruences et divisibilité"
country: "Maroc"
year: 2024
professor: "Mr Younes BABA"
difficulty: "Moyen"
points: 5
tags: ["arithmetique", "congruences", "divisibilite"]
---

1. Déterminer le reste de la division euclidienne de $(2974)^{2024}$ par $5$.

2. Montrer que pour tout $n \in \mathbb{N} : 9 \mid 7^{3n} - 1$.

3. Montrer que pour tout $n \in \mathbb{N} : 4^{4n+2} - 3^{n+3}$ est divisible par $11$.

---

## Solution

1) On a : $2974 \equiv 4[5] \implies 2974 \equiv -1[5]$

   $\implies (2974)^{2024} \equiv (-1)^{2024}[5]$

   $\implies (2974)^{2024} \equiv 1[5]$

   Donc le reste de la division euclidienne de $(2974)^{2024}$ par $5$ est $1$.

2) On a : $7^2 \equiv 4[9] \implies 7 \times 7^2 \equiv 7 \times 4[9] \implies 7^3 \equiv 1[9]$

   $\implies (7^3)^n \equiv 1^n[9] \implies 7^{3n} \equiv 1[9]$

   $\implies 9 \mid 7^{3n} - 1$

3) On a : $4^2 \equiv 5[11] \implies (4^2)^2 \equiv 5^2[11] \implies 4^4 \equiv 3[11] \implies 4^{4n} \equiv 3^n[11]$

   D'autre part : $3^3 \equiv 5[11]$ et $4^2 \equiv 5[11]$ donc $4^2 \equiv 3^3[11]$

   Donc : $4^{4n} \times 4^2 \equiv 3^n \times 3^3[11]$ ; c'est-à-dire $4^{4n+2} \equiv 3^{n+3}[11]$

   Par suite $4^{4n+2} - 3^{n+3} \equiv 0[11]$

   D'où $4^{4n+2} - 3^{n+3}$ est divisible par $11$