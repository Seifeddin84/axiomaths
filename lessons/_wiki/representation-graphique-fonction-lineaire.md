---
theorem: "Représentation graphique d'une fonction linéaire"
admis: true
---

:::proof[Avec les vecteurs]
On utilise les vecteurs colinéaires (chapitre « Somme de deux vecteurs, colinéarité »). Le point $A(1\,;\,a)$ vérifie $\overrightarrow{OA} = \overrightarrow{OI} + a\,\overrightarrow{OJ}$.

| Étape | Justification |
|---|---|
| Si $M(x\,;\,ax)$, alors $\overrightarrow{OM} = x\,\overrightarrow{OI} + ax\,\overrightarrow{OJ} = x\,\overrightarrow{OA}$ | coordonnées dans le repère $(O, I, J)$ |
| Donc $O$, $A$ et $M$ sont alignés : $M$ est sur la droite $(OA)$ | vecteurs colinéaires |
| Réciproquement, si $M \in (OA)$, il existe $t$ tel que $\overrightarrow{OM} = t\,\overrightarrow{OA}$, donc $M(t\,;\,at)$ | même raisonnement à l'envers |
| La représentation graphique de $f$ est exactement la droite $(OA)$ | les deux inclusions |
:::

:::redaction
Soit $A$ le point de coordonnées $(1\,;\,a)$ ; on a $\overrightarrow{OA} = \overrightarrow{OI} + a\,\overrightarrow{OJ}$.
Soit $M(x\,;\,ax)$ un point de la représentation graphique de $f$.
On a $\overrightarrow{OM} = x\,\overrightarrow{OI} + ax\,\overrightarrow{OJ} = x\,\big(\overrightarrow{OI} + a\,\overrightarrow{OJ}\big) = x\,\overrightarrow{OA}$.
Donc $\overrightarrow{OM}$ et $\overrightarrow{OA}$ sont colinéaires, par suite $M \in (OA)$.
Réciproquement, soit $M \in (OA)$ ; comme $O \neq A$, il existe un réel $t$ tel que $\overrightarrow{OM} = t\,\overrightarrow{OA} = t\,\overrightarrow{OI} + at\,\overrightarrow{OJ}$.
Donc $M$ a pour coordonnées $(t\,;\,at)$, c'est-à-dire $M(t\,;\,f(t))$ : $M$ est sur la représentation graphique de $f$.
D'où la représentation graphique de $f$ est la droite $(OA)$, qui passe par $O$ et par $A(1\,;\,a)$.
:::
