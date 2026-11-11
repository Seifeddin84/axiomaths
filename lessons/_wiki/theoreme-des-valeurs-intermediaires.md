---
theorem: "Théorème des valeurs intermédiaires"
admis: true
---

:::proof[Preuve par dichotomie]
Quitte à remplacer $f$ par $-f$, on suppose $f(a) \leq k \leq f(b)$. On coupe l'intervalle en deux, et on garde la moitié qui « encadre » encore $k$.

| Étape | Justification |
|---|---|
| $a_0 = a$, $b_0 = b$. Si $m = \dfrac{a_n + b_n}{2}$ vérifie $f(m) \leq k$, on pose $a_{n+1} = m$, $b_{n+1} = b_n$ ; sinon $a_{n+1} = a_n$, $b_{n+1} = m$ | construction |
| Pour tout $n$ : $f(a_n) \leq k \leq f(b_n)$ | vrai pour $n = 0$, et chaque étape le conserve |
| $(a_n)$ est croissante, $(b_n)$ décroissante, et $b_n - a_n = \dfrac{b - a}{2^n} \to 0$ | on remplace une borne par le milieu |
| $(a_n)$ et $(b_n)$ sont adjacentes : elles ont une limite commune $c \in [a\,;b]$ | théorème des suites adjacentes |
| $f(a_n) \to f(c)$ et $f(b_n) \to f(c)$ | $f$ est continue en $c$ |
| $f(c) \leq k \leq f(c)$, donc $f(c) = k$ | passage à la limite dans les inégalités |

Elle s'appuie sur les suites adjacentes, qui reposent sur une propriété de $\mathbb R$ admise : toute suite croissante et majorée converge. Dans $\mathbb Q$ c'est faux, et le théorème aussi : $x^2 - 2$ passe de $-1$ à $2$ sur $[1\,;2]$ sans s'annuler en un rationnel.
:::

:::redaction
Supposons $f(a) \leq k \leq f(b)$ (sinon on remplace $f$ par $-f$ et $k$ par $-k$).
On définit $a_0 = a$, $b_0 = b$ et, pour tout $n$, $m_n = \dfrac{a_n + b_n}{2}$ :
si $f(m_n) \leq k$, on pose $a_{n+1} = m_n$ et $b_{n+1} = b_n$ ; sinon $a_{n+1} = a_n$ et $b_{n+1} = m_n$.
Par récurrence, pour tout $n$, $f(a_n) \leq k \leq f(b_n)$ et $a_n \leq b_n$.
Or $(a_n)$ est croissante, $(b_n)$ est décroissante et $b_n - a_n = \dfrac{b - a}{2^n}$, qui tend vers $0$.
Donc $(a_n)$ et $(b_n)$ sont adjacentes : elles convergent vers une même limite $c \in [a\,;b]$.
Comme $f$ est continue en $c$, $f(a_n) \to f(c)$ et $f(b_n) \to f(c)$.
Par passage à la limite dans $f(a_n) \leq k \leq f(b_n)$, on obtient $f(c) \leq k \leq f(c)$.
D'où $f(c) = k$.
:::
