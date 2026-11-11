---
theorem: "Deux points et leurs images"
---

:::proof[L'angle est imposé]
| Étape | Justification |
|---|---|
| Une rotation d'angle $\theta$ vérifie $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \theta$ pour tous $A \neq B$ | ce que conserve une rotation |
| Si $\overrightarrow{AB} = \overrightarrow{CD}$, $t_{\overrightarrow{AC}}$ convient, et une rotation qui convient aurait l'angle $(\overrightarrow{AB}, \overrightarrow{CD}) \equiv 0$ | translation ; angle nul |
| Sinon, $\theta = (\overrightarrow{AB}, \overrightarrow{CD}) \not\equiv 0$ ; soit $R$ la rotation d'angle $\theta$ qui envoie $A$ sur $C$ (centre $A$ si $A = C$) | point et son image |
| $B' = R(B)$ vérifie $CB' = AB = CD$ et $(\overrightarrow{AB}, \overrightarrow{CB'}) \equiv \theta \equiv (\overrightarrow{AB}, \overrightarrow{CD})$ | $R$ conserve les distances ; angle d'une rotation |
| donc $\overrightarrow{CB'} = \overrightarrow{CD}$ : $B' = D$ | même longueur, même direction et même sens |
| Toute rotation qui convient a l'angle $\theta$ et envoie $A$ sur $C$ : c'est $R$ | unicité |
| Le centre est équidistant de $A$ et $C$, et de $B$ et $D$ | il est sur les deux médiatrices |
:::

:::redaction
Une rotation d'angle $\theta$ vérifie $(\overrightarrow{AB}, \overrightarrow{A'B'}) \equiv \theta$ pour tous points $A \neq B$.
Si $\overrightarrow{AB} = \overrightarrow{CD}$, la translation de vecteur $\overrightarrow{AC}$ envoie $A$ sur $C$ et $B$ sur $D$, et une rotation qui le ferait aurait un angle $(\overrightarrow{AB}, \overrightarrow{CD}) \equiv 0$.
Sinon, on pose $\theta = (\overrightarrow{AB}, \overrightarrow{CD})$ ; comme $AB = CD$, $\theta \not\equiv 0$.
Soit $R$ la rotation d'angle $\theta$ qui envoie $A$ sur $C$ (de centre $A$ si $A = C$), et $B' = R(B)$.
$R$ conserve les distances, donc $CB' = AB = CD$ ; de plus $(\overrightarrow{AB}, \overrightarrow{CB'}) \equiv \theta \equiv (\overrightarrow{AB}, \overrightarrow{CD})$.
Donc $\overrightarrow{CB'}$ et $\overrightarrow{CD}$ ont même longueur, même direction et même sens : $B' = D$.
Toute rotation qui convient a l'angle $(\overrightarrow{AB}, \overrightarrow{CD}) = \theta$ et envoie $A$ sur $C$, donc c'est $R$.
Enfin son centre $\Omega$ vérifie $\Omega A = \Omega C$ et $\Omega B = \Omega D$ : il est à l'intersection des médiatrices de $[AC]$ et de $[BD]$.
:::
