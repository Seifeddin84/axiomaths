---
uid: "0000132"
school: "lycee"
level: "2eme"
section: ["Sciences", "Technologies de l'Informatique"]
chapter: "Polynômes"
source: "Axiomaths"
title: "QCM : degré, racines et factorisation"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["qcm", "polynomes", "degre", "racine", "factorisation"]
---

Pour chaque question, une seule des trois réponses proposées est correcte. Cocher la bonne réponse.

1. Le degré du polynôme $P(x) = (x^2 + 1)^3 - x^6$ est égal à :

   - [ ] $6$

   - [ ] $4$

   - [ ] $2$

2. Parmi les réels suivants, lequel est une racine du polynôme $P(x) = x^3 - 3x^2 + 4$ ?

   - [ ] $1$

   - [ ] $-1$

   - [ ] $-2$

3. Le réel $1$ est une racine du polynôme $P(x) = 2x^3 + ax^2 - 5x + 2$ si et seulement si :

   - [ ] $a = -1$

   - [ ] $a = 1$

   - [ ] $a = 3$

4. Pour tout réel $x$, $x^3 + x^2 - x - 1 = (x - 1)\,Q(x)$ avec :

   - [ ] $Q(x) = x^2 + 1$

   - [ ] $Q(x) = x^2 - 2x + 1$

   - [ ] $Q(x) = x^2 + 2x + 1$

5. L'ensemble de définition de la fonction rationnelle $f : x \mapsto \dfrac{x^2 - 4}{x - 2}$ est :

   - [ ] $\mathbb{R}$

   - [ ] $\mathbb{R} \setminus \{2\}$

   - [ ] $\mathbb{R} \setminus \{-2\,;\,2\}$

---

## Solution

1. **Réponse : $4$.** On a $(x^2 + 1)^3 = x^6 + 3x^4 + 3x^2 + 1$, donc $P(x) = 3x^4 + 3x^2 + 1$. Les termes en $x^6$ se détruisent : le degré n'est pas $6$.

2. **Réponse : $-1$.** $P(-1) = -1 - 3 + 4 = 0$. En revanche $P(1) = 2 \neq 0$ et $P(-2) = -8 - 12 + 4 = -16 \neq 0$.

3. **Réponse : $a = 1$.** $P(1) = 2 + a - 5 + 2 = a - 1$, donc $P(1) = 0 \iff a = 1$.

4. **Réponse : $Q(x) = x^2 + 2x + 1$.** Le schéma de Horner avec $\alpha = 1$ sur les coefficients $1,\ 1,\ -1,\ -1$ donne $1,\ 2,\ 1$ et un reste nul. On peut vérifier : $(x - 1)(x^2 + 2x + 1) = x^3 + 2x^2 + x - x^2 - 2x - 1 = x^3 + x^2 - x - 1$.

5. **Réponse : $\mathbb{R} \setminus \{2\}$.** Seul le dénominateur $x - 2$ doit être non nul. Le numérateur peut s'annuler en $-2$ : cela ne crée pas de valeur interdite. Attention : $f(x) = x + 2$ pour tout $x \neq 2$, mais $f$ n'est pas définie en $2$.
