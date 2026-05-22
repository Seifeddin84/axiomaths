---
uid: "0000072"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Fonction logarithme népérien"
source: "Inconnu"
title: "Etude de fonction logarithme et suites de terme général n! "
country: "Tunisie"
year: 2026
professor: "Inconnu"
difficulty: "Difficile"
points: 10
tags: ["logarithme", "limites", "dérivation", "variations", "inégalités", "suites", "somme", "théorème-des-gendarmes"]
---

**A)** On considère la fonction $f$ définie sur $[0, +\infty[$ par : 

$$
\begin{cases}
f(x) = x \ln\left(1 + \frac{1}{x}\right) \text{ si } x > 0 \\
f(0) = 0
\end{cases}
$$

On note $\Gamma$ la courbe représentative de $f$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

1) a) Montrer que $f$ est continue à droite en $0$.

   b) Calculer $\lim_{x \to 0^+} \frac{f(x)}{x}$. Interpréter graphiquement le résultat obtenu.

2) a) Montrer que pour tout $x \in ]0, +\infty[$ on a : $f'(x) = \ln\left(1 + \frac{1}{x}\right) - \frac{1}{x+1}$.

   b) Montrer que pour tout $x \in ]0, +\infty[$ on a : $f''(x) = \frac{-1}{x(x+1)^2}$.

   c) Dresser le tableau de variation de $f'$. En déduire le signe de $f'(x)$ sur $]0, +\infty[$.

   d) Etudier, alors les variations de $f$. En déduire que pour tout $x \in [0, +\infty[$ on a : $0 \le f(x) < 1$.

3) Tracer la courbe $\Gamma$.

**B)**
1) a) Montrer que pour tout $t \ge 0$ on a : $t - \ln(1+t) \le \frac{t^2}{2}$.

   b) En déduire que pour tout $x \in ]0, +\infty[$ on a : $0 \le 1 - f(x) \le \frac{1}{2x}$.

2) a) Soit $k \in \mathbb{N}^*$ ; Montrer que pour tout $t \in [k, k+1]$ on a : $\frac{1}{k+1} \le \ln(k+1) - \ln(k) \le \frac{1}{k}$.

   b) En déduire que pour tout $n \in \mathbb{N}^*$ on a : $\sum_{k=1}^n \frac{1}{k} \le 1 + \ln(n)$.

**C)** On considère les suites $(U_n)$ et $(V_n)$ définies sur $\mathbb{N}^*$ par : $U_n = \frac{\sqrt[n]{n!}}{n}$ et $V_n = \frac{n^n}{n!}$.

1) a) Montrer que pour tout $n \in \mathbb{N}^*$ on a : $\ln(V_n) = -n \ln(U_n)$.

   b) Montrer que pour tout $n \in \mathbb{N}^*$ on a : $\frac{V_{n+1}}{V_n} = \left(1 + \frac{1}{n}\right)^n$.

   c) En déduire que pour tout $n \in \mathbb{N}^*$ on a : $\ln(V_{n+1}) - \ln(V_n) = f(n)$.

2) a) Montrer que pour tout $n \in \mathbb{N}^*$ on a : $0 \le 1 + \ln(V_n) - \ln(V_{n+1}) \le \frac{1}{2n}$.

   b) En déduire que pour tout $n \in \mathbb{N}^*$ on a : $0 \le n - 1 - \ln(V_n) \le \frac{1}{2}(1 + \ln(n))$.

   c) Montrer, alors que $\lim_{n \to +\infty} \frac{1}{n}\ln(V_n) = 1$.

   d) En déduire que la suite $(U_n)$ est convergente vers $\frac{1}{e}$.

---

## Solution

**Partie A**
1) a) $\lim_{x\to0^+} x\ln(1+\frac{1}{x}) = \lim_{x\to0^+} (x\ln(x+1) - x\ln x) = 0 = f(0)$. $f$ est continue à droite en $0$.

   b) $\lim_{x\to0^+} \frac{f(x)}{x} = \lim_{x\to0^+} \ln(1+\frac{1}{x}) = +\infty$. La courbe $\Gamma$ admet une demi-tangente verticale dirigée vers le haut au point d'abscisse $0$.

2) a) $f'(x) = 1 \cdot \ln(1+\frac{1}{x}) + x \left(\frac{-1/x^2}{1+1/x}\right) = \ln(1+\frac{1}{x}) - \frac{1}{x+1}$.

   b) $f''(x) = \frac{-1/x^2}{1+1/x} - \frac{-1}{(x+1)^2} = \frac{-1}{x(x+1)} + \frac{1}{(x+1)^2} = \frac{-1}{x(x+1)^2}$.

   c) Pour tout $x>0$, $f''(x) < 0$, donc $f'$ est strictement décroissante sur $]0, +\infty[$. Or $\lim_{x\to+\infty} f'(x) = 0$, donc $f'(x) > 0$ sur $]0, +\infty[$.

   d) $f'(x) > 0 \implies f$ est strictement croissante. $\lim_{x\to+\infty} x\ln(1+\frac{1}{x}) = \lim_{X\to0^+} \frac{\ln(1+X)}{X} = 1$. Comme $f(0)=0$ et $f$ croît vers $1$, $0 \le f(x) < 1$.

**Partie B**
1. a. Soit $\phi(t) = t - \ln(1+t) - \frac{t^2}{2}$. $\phi'(t) = 1 - \frac{1}{1+t} - t = \frac{-t^2}{1+t} \le 0$. $\phi(0) = 0$, donc $\phi$ est décroissante et $\phi(t) \le 0$ pour $t \ge 0$.

   b. En posant $t = \frac{1}{x}$ (pour $x>0$) : $\frac{1}{x} - \ln(1+\frac{1}{x}) \le \frac{1}{2x^2}$. En multipliant par $x>0$ : $1 - f(x) \le \frac{1}{2x}$. D'après A)2)d), $f(x) < 1$, donc $0 \le 1 - f(x) \le \frac{1}{2x}$.

2. a. En appliquant le théorème des accroissements finis ou par intégration : $t \in [k, k+1] \implies \frac{1}{k+1} \le \frac{1}{t} \le \frac{1}{k}$. En intégrant de $k$ à $k+1$, on obtient le résultat.

   b. En sommant ces inégalités de $k=1$ à $n-1$ : $\sum_{k=1}^{n-1} \frac{1}{k+1} \le \ln(n) - \ln(1) \implies \sum_{k=2}^n \frac{1}{k} \le \ln(n)$. On ajoute $1$ de chaque côté : $\sum_{k=1}^n \frac{1}{k} \le 1 + \ln(n)$.

**Partie C**
1. a. $\ln(V_n) = \ln(n^n) - \ln(n!) = n\ln(n) - \ln(n!)$. Et $-n\ln(U_n) = -n\left(\frac{1}{n}\ln(n!) - \ln(n)\right) = n\ln(n) - \ln(n!) = \ln(V_n)$.

   b. $\frac{V_{n+1}}{V_n} = \frac{(n+1)^{n+1}}{(n+1)!} \cdot \frac{n!}{n^n} = \frac{(n+1)^n \cdot (n+1)}{(n+1)n!} \cdot \frac{n!}{n^n} = \left(\frac{n+1}{n}\right)^n = \left(1+\frac{1}{n}\right)^n$.

   c. $\ln(V_{n+1}) - \ln(V_n) = \ln\left(\frac{V_{n+1}}{V_n}\right) = \ln\left( \left(1+\frac{1}{n}\right)^n \right) = n\ln(1+\frac{1}{n}) = f(n)$.

2) a. D'après B)1)b) avec $x=n$ : $0 \le 1 - f(n) \le \frac{1}{2n}$. D'où $0 \le 1 - (\ln(V_{n+1}) - \ln(V_n)) \le \frac{1}{2n}$.

   b. On somme de $k=1$ à $n-1$ : $0 \le (n-1) + \ln(V_1) - \ln(V_n) \le \frac{1}{2}\sum_{k=1}^{n-1} \frac{1}{k}$. Sachant $V_1 = 1 \implies \ln(V_1)=0$ et avec B)2)b), $0 \le n - 1 - \ln(V_n) \le \frac{1}{2}(1 + \ln(n))$.

   c. En divisant par $n$ : $0 \le 1 - \frac{1}{n} - \frac{1}{n}\ln(V_n) \le \frac{1+\ln(n)}{2n}$. Comme $\lim_{n \to +\infty} \frac{\ln(n)}{n} = 0$, le théorème des gendarmes donne $\lim_{n \to +\infty} \left(1 - \frac{1}{n}\ln(V_n)\right) = 0$, soit $\lim_{n \to +\infty} \frac{1}{n}\ln(V_n) = 1$.

   d. D'après C)1)a), $\frac{1}{n}\ln(V_n) = -\ln(U_n)$. Donc $\lim_{n \to +\infty} -\ln(U_n) = 1 \implies \lim_{n \to +\infty} U_n = e^{-1} = \frac{1}{e}$.