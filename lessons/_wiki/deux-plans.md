---
theorem: "Deux plans"
---

:::proof[Par les vecteurs normaux]
| Étape | Justification |
|---|---|
| Si $\vec n' = \lambda\vec n$, tout vecteur orthogonal à $\vec n$ l'est à $\vec n'$ : les deux plans ont la même direction | un plan est déterminé par sa direction et un point |
| Ils sont donc parallèles, confondus s'ils ont un point commun | plans de même direction |
| Si $\vec n$ et $\vec n'$ ne sont pas colinéaires, $\vec w = \vec n\wedge\vec n' \neq \vec 0$ et $\vec w$ est orthogonal à $\vec n$ et à $\vec n'$ | définition du produit vectoriel |
| Les plans ne sont pas parallèles, donc ils se coupent suivant une droite $\Delta$ | deux plans non parallèles sont sécants |
| Un vecteur directeur de $\Delta$ est dans les deux directions, donc orthogonal à $\vec n$ et à $\vec n'$ : il est colinéaire à $\vec w$ | les vecteurs orthogonaux à deux vecteurs non colinéaires forment une droite vectorielle |
| $\mathcal P \perp \mathcal P' \iff \vec n \perp \vec n' \iff \vec n\cdot\vec n' = 0$ | deux plans sont perpendiculaires quand leurs normales le sont |
:::

:::redaction
Si $\vec n$ et $\vec n'$ sont colinéaires, un vecteur est orthogonal à $\vec n$ si et seulement s'il l'est à $\vec n'$.
Donc $\mathcal P$ et $\mathcal P'$ ont la même direction : ils sont parallèles, et confondus s'ils ont un point commun.
Sinon, $\vec w = \vec n\wedge\vec n'$ est non nul et orthogonal à $\vec n$ et à $\vec n'$.
Les plans n'étant pas parallèles, ils se coupent suivant une droite $\Delta$.
Un vecteur directeur de $\Delta$ appartient aux directions des deux plans, donc il est orthogonal à $\vec n$ et à $\vec n'$.
Or les vecteurs orthogonaux à deux vecteurs non colinéaires sont colinéaires entre eux, donc ce vecteur est colinéaire à $\vec w$.
Par suite $\vec n\wedge\vec n'$ dirige $\Delta$.
Enfin, deux plans sont perpendiculaires si et seulement si leurs vecteurs normaux le sont, d'où $\mathcal P \perp \mathcal P' \iff \vec n\cdot\vec n' = 0$.
:::
