---
theorem: "Expression analytique d'une translation"
---

:::proof[En coordonnées]
| Étape | Justification |
|---|---|
| $M' = t_{\vec u}(M) \iff \overrightarrow{MM'} = \vec u$ | définition de la translation |
| $\overrightarrow{MM'}$ a pour coordonnées $(x' - x, y' - y, z' - z)$ | coordonnées d'un vecteur |
| donc $x' - x = u_1$, $y' - y = u_2$, $z' - z = u_3$ | deux vecteurs égaux ont les mêmes coordonnées |
| Réciproquement, ces égalités disent que $\overrightarrow{MM'} = \vec u$ pour tout $M$ | les équivalences se lisent dans les deux sens |
:::

:::redaction
$M'$ est l'image de $M$ par $t_{\vec u}$ si et seulement si $\overrightarrow{MM'} = \vec u$.
Or $\overrightarrow{MM'}$ a pour coordonnées $(x' - x, y' - y, z' - z)$.
Deux vecteurs sont égaux si et seulement s'ils ont les mêmes coordonnées.
Donc $M' = t_{\vec u}(M) \iff x' = x + u_1,\ y' = y + u_2,\ z' = z + u_3$.
D'où ces trois égalités caractérisent la translation de vecteur $(u_1, u_2, u_3)$.
:::
