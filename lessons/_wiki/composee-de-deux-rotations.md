---
theorem: "Composée de deux rotations"
---

:::redaction
Soit $\Delta$ et $\Delta'$ les droites de l'énoncé.
$\Delta$ et $D$ se coupent en $O$, donc $S_D\circ S_\Delta$ est la rotation de centre $O$ et d'angle $2(\Delta, D) \equiv \theta$ : c'est $r$.
De même, $S_{\Delta'}\circ S_D$ est la rotation de centre $O'$ et d'angle $2(D, \Delta') \equiv \theta'$ : c'est $r'$.
Donc $r'\circ r = S_{\Delta'}\circ S_D\circ S_D\circ S_\Delta = S_{\Delta'}\circ S_\Delta$, car $S_D\circ S_D = \mathrm{Id}$.
D'après la relation de Chasles, $(\Delta, \Delta') \equiv (\Delta, D) + (D, \Delta') \equiv \dfrac{\theta + \theta'}{2}\ [\pi]$.
Si $\theta + \theta' \not\equiv 0\ [2\pi]$, $\Delta$ et $\Delta'$ se coupent en $\Omega$, et $r'\circ r$ est la rotation de centre $\Omega$ et d'angle $\theta + \theta'$.
Si $\theta + \theta' \equiv 0\ [2\pi]$, $\Delta \parallel \Delta'$.
Or $\Delta \neq \Delta'$ : sinon cette droite contiendrait $O$ et $O'$, serait $D$, et on aurait $\theta \equiv 0$.
D'où $r'\circ r$ est une translation de vecteur non nul.
:::
