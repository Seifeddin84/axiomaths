---
theorem: "Existence des primitives"
admis: true
---

:::proof[L'aire sous la courbe]
Attention au cercle vicieux : au lycée, l'intégrale est **définie** à partir d'une primitive, on ne peut donc pas s'en servir ici. La vraie preuve définit d'abord l'aire $A(x)$ sous la courbe entre $a$ et $x$ comme limite de sommes de Riemann, ce qui demande la continuité uniforme (hors programme). En admettant que cette aire existe et vérifie Chasles, voici pourquoi $A' = f$ (on prend $f$ positive et $h > 0$ pour la lisibilité).

| Étape | Justification |
|---|---|
| $A(x + h) - A(x)$ est l'aire de la bande entre $x$ et $x + h$ | Chasles |
| Sur $[x\,;x + h]$, $f$ a un minimum $m_h$ et un maximum $M_h$ | image d'un segment par une fonction continue |
| $m_h\,h \leq A(x + h) - A(x) \leq M_h\,h$ | la bande est entre deux rectangles |
| $m_h \leq \dfrac{A(x + h) - A(x)}{h} \leq M_h$ | on divise par $h > 0$ |
| $m_h \to f(x)$ et $M_h \to f(x)$ quand $h \to 0$ | continuité de $f$ en $x$ |
| Donc $A'(x) = f(x)$ | théorème des gendarmes |
:::

:::redaction
Soit $x \in I$ et $h > 0$ tel que $x + h \in I$.
D'après la relation de Chasles, $A(x + h) - A(x)$ est l'aire du domaine compris entre $x$ et $x + h$.
$f$ est continue sur le segment $[x\,;x + h]$, donc elle y admet un minimum $m_h$ et un maximum $M_h$.
Le domaine est compris entre deux rectangles de largeur $h$ et de hauteurs $m_h$ et $M_h$, donc $m_h\,h \leq A(x + h) - A(x) \leq M_h\,h$.
Comme $h > 0$, $m_h \leq \dfrac{A(x + h) - A(x)}{h} \leq M_h$.
Or $f$ est continue en $x$, donc $m_h$ et $M_h$ tendent vers $f(x)$ quand $h$ tend vers $0$.
D'après le théorème des gendarmes, $\dfrac{A(x + h) - A(x)}{h}$ tend vers $f(x)$ ; on raisonne de même pour $h < 0$.
D'où $A'(x) = f(x)$ : $A$ est une primitive de $f$ sur $I$, et $A(a) = 0$.
:::
