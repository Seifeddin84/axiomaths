---
theorem: "Distance d'un point à une droite"
---

:::redaction
Soit $H$ le projeté orthogonal de $M$ sur $\mathcal D$.
D'après la relation de Chasles, $\overrightarrow{AM} = \overrightarrow{AH} + \overrightarrow{HM}$.
Par bilinéarité, $\overrightarrow{AM}\wedge\vec u = \overrightarrow{AH}\wedge\vec u + \overrightarrow{HM}\wedge\vec u$.
Or $\overrightarrow{AH}$ et $\vec u$ sont colinéaires, donc $\overrightarrow{AH}\wedge\vec u = \vec 0$.
De plus $\overrightarrow{HM} \perp \vec u$, donc $\lVert\overrightarrow{HM}\wedge\vec u\rVert = HM \cdot \lVert\vec u\rVert$.
D'où $d(M, \mathcal D) = HM = \dfrac{\lVert\overrightarrow{AM}\wedge\vec u\rVert}{\lVert\vec u\rVert}$.
:::
