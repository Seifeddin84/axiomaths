---
theorem: "PGCD fois PPCM"
---

:::redaction
Soit $d = a \wedge b$ ; on écrit $a = da'$ et $b = db'$ avec $a' \wedge b' = 1$.
Soit $n$ un multiple commun de $a$ et $b$ : $n = ak = bl$ avec $k$, $l$ entiers.
En divisant par $d$, $a'k = b'l$, donc $b' \mid a'k$.
Or $a' \wedge b' = 1$, donc, d'après le lemme de Gauss, $b' \mid k$ : $k = b't$ avec $t$ entier.
Par suite $n = ab't = da'b'\,t$ : tout multiple commun est un multiple de $da'b'$.
Réciproquement, $da'b' = ab' = a'b$ est un multiple commun de $a$ et $b$.
Donc les multiples communs de $a$ et $b$ sont exactement les multiples de $da'b'$, et le plus petit strictement positif est $a \vee b = da'b'$.
D'où $(a \wedge b)(a \vee b) = d \times da'b' = (da')(db') = ab$.
:::
