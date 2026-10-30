---
uid: "0000111"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Série d'exercices — Intégrales (Exercice N°11)"
title: "Suite d'intégrales et logarithme : encadrement et limite"
country: "Tunisie"
year: null
professor: null
difficulty: "Moyen"
points: null
tags: ["integrales", "integration-par-parties", "suites-reelles", "encadrement", "logarithme-neperien"]
---

On considère la suite $(U_n)_{n \in \mathbb{N}^*}$ définie sur $\mathbb{N}^*$ par : $U_n = \displaystyle\int_1^2 (x-1)^n \ln x \, dx$.

1. Calculer $U_1$ à l'aide d'une intégration par parties.

2. a. Montrer que pour tout $n \in \mathbb{N}^*$, $U_n \geq 0$.

   b. Montrer que la suite $(U_n)$ est décroissante. En déduire que $(U_n)$ est convergente.

3. Montrer à l'aide d'une intégration par parties que : $(n+1)U_n = \ln 2 - \displaystyle\int_1^2 \dfrac{(x-1)^{n+1}}{x} \, dx$.

4. a. Montrer que pour tout $x \in [1,2]$, on a : $\dfrac{(x-1)^{n+1}}{2} \leq \dfrac{(x-1)^{n+1}}{x} \leq (x-1)^{n+1}$.

   b. En déduire que : $\dfrac{1}{2(n+2)} \leq \displaystyle\int_1^2 \dfrac{(x-1)^{n+1}}{x} \, dx \leq \dfrac{1}{n+2}$.

   c. Montrer alors que pour tout $n \in \mathbb{N}^*$ : $\ln 2 - \dfrac{1}{n+2} \leq (n+1)U_n \leq \ln 2 - \dfrac{1}{2(n+2)}$.

   d. Déterminer $\lim\limits_{n \to +\infty} (n+1)U_n$ et $\lim\limits_{n \to +\infty} U_n$.

---

## Solution

1. On pose $u(x) = \ln x$ et $v'(x) = x - 1$, donc $u'(x) = \dfrac{1}{x}$ et $v(x) = \dfrac{(x-1)^2}{2}$.

   $U_1 = \left[\dfrac{(x-1)^2}{2}\ln x\right]_1^2 - \dfrac{1}{2}\displaystyle\int_1^2 \dfrac{(x-1)^2}{x}\,dx = \dfrac{\ln 2}{2} - \dfrac{1}{2}\displaystyle\int_1^2 \left(x - 2 + \dfrac{1}{x}\right)dx = \dfrac{\ln 2}{2} - \dfrac{1}{2}\left(-\dfrac{1}{2} + \ln 2\right) = \dfrac{1}{4}$.

2. a. Sur $[1,2]$ : $(x-1)^n \geq 0$ et $\ln x \geq 0$, et $1 \leq 2$, donc $U_n \geq 0$.

   b. $U_{n+1} - U_n = \displaystyle\int_1^2 (x-1)^n (x - 2) \ln x \, dx \leq 0$ car $x - 2 \leq 0$ sur $[1,2]$.
   $(U_n)$ est décroissante et minorée par $0$ : elle converge.

3. On pose $u(x) = \ln x$ et $v'(x) = (x-1)^n$, donc $v(x) = \dfrac{(x-1)^{n+1}}{n+1}$ :

   $U_n = \left[\dfrac{(x-1)^{n+1}}{n+1}\ln x\right]_1^2 - \dfrac{1}{n+1}\displaystyle\int_1^2 \dfrac{(x-1)^{n+1}}{x}\,dx = \dfrac{\ln 2}{n+1} - \dfrac{1}{n+1}\displaystyle\int_1^2 \dfrac{(x-1)^{n+1}}{x}\,dx$.

   On multiplie par $n + 1$.

4. a. Pour $x \in [1,2]$ : $\dfrac{1}{2} \leq \dfrac{1}{x} \leq 1$ ; on multiplie par $(x-1)^{n+1} \geq 0$.

   b. On intègre sur $[1,2]$ avec $\displaystyle\int_1^2 (x-1)^{n+1}dx = \left[\dfrac{(x-1)^{n+2}}{n+2}\right]_1^2 = \dfrac{1}{n+2}$.

   c. On combine 3. et 4.b. (le signe $-$ renverse l'encadrement).

   d. Par encadrement : $\lim\limits_{n \to +\infty} (n+1)U_n = \ln 2$, puis $U_n = \dfrac{(n+1)U_n}{n+1} \to 0$.
