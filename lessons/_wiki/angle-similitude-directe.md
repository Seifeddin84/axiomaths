---
theorem: "Angle d'une similitude directe"
---

:::proof[Comme pour un déplacement]
| Étape | Justification |
|---|---|
| Soit $(A, B)$ et $(C, D)$ deux couples de points distincts, d'images $(A', B')$ et $(C', D')$ | on compare les angles |
| $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv (\overrightarrow{AB}, \overrightarrow{CD}) + (\overrightarrow{CD}, \overrightarrow{C'D'}) + (\overrightarrow{C'D'}, \overrightarrow{A'B'})$ | relation de Chasles |
| $(\overrightarrow{C'D'}, \overrightarrow{A'B'}) \equiv -(\overrightarrow{AB}, \overrightarrow{CD})$ | $f$ conserve les angles orientés |
| donc $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv (\overrightarrow{CD}, \overrightarrow{C'D'})$ | les deux termes se compensent |
:::

:::redaction
Soit $(A, B)$ et $(C, D)$ deux couples de points distincts, d'images $(A', B')$ et $(C', D')$.
D'après la relation de Chasles, $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv (\overrightarrow{AB}, \overrightarrow{CD}) + (\overrightarrow{CD}, \overrightarrow{C'D'}) + (\overrightarrow{C'D'}, \overrightarrow{A'B'})$.
Or $f$ est directe, donc elle conserve les angles orientés : $(\overrightarrow{C'D'}, \overrightarrow{A'B'}) \equiv (\overrightarrow{CD}, \overrightarrow{AB}) \equiv -(\overrightarrow{AB}, \overrightarrow{CD})$.
D'où $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv (\overrightarrow{CD}, \overrightarrow{C'D'})\ [2\pi]$ : cet angle ne dépend pas des points choisis.
:::
