# Écrire un cours AxioMath

Ce fichier n'est pas publié : les fichiers dont le nom commence par `_` sont ignorés.

Chaque fichier `lessons/<slug>.md` devient une carte « Cours » placée en haut de la page d'exercices de son chapitre : un clic la déplie, un second la replie, sur la même page. Il n'y a pas de page `/cours`. Il faut donc que les champs `level`, `sections` et `chapter` correspondent **exactement** à ceux des exercices du chapitre (voir `normalize()` dans `src/lib/lessonReader.ts`).

## En-tête

```yaml
---
title: "Notions de polynômes"
slug: "lycee-2eme-sciences-polynomes"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Technologies de l'Informatique"]
chapter: "Polynômes"          # même valeur que le champ chapter des exercices
summary: "Une ou deux phrases."
prerequisites: ["Second degré"]
source: "Manuel officiel 2ème année, Tome 1, chapitre 3"
updated: "2026-11-06"
---
```

## Style

1. **L'intuition d'abord**, puis la définition ou le théorème, puis **un exemple chiffré tout de suite**.
2. Les démonstrations sont écrites en tableau à deux colonnes : `| Étape | Justification |`.
3. On met en couleur le terme qui change d'une ligne à l'autre : `\textcolor{#ea580c}{...}`.
4. Les titres `##` sont numérotés (`## 3. Degré d'un polynôme`). Ils forment le sommaire.

## Encadrés

```markdown
:::definition[Titre facultatif]
Texte, $\LaTeX$, tableaux…
:::
```

**Le titre entre crochets ne doit contenir aucun crochet** : `:::proof[$x^2$ croissante sur $[0\,;+\infty[$]` casse l'encadré (il s'affiche en texte brut). Écrire `pour $x \geq 0$` à la place.

Un lien interne vers une section utilise l'identifiant calculé à partir du titre rendu : `[section 5](#5-le-trinome-ax-2-bx-c)`. Pour un titre sans formule, c'est le titre en minuscules, sans accents, avec des tirets (`#6-dans-le-triangle-rectangle`). Vérifier le lien dans le navigateur.

| Nom | Affiché | Numéroté |
|---|---|---|
| `definition` | Définition | oui |
| `theorem` | Théorème | oui |
| `property` | Propriété | oui |
| `corollary` | Conséquence | non |
| `example` | Exemple | oui |
| `method` | Méthode | oui |
| `proof` | Démonstration (se termine par ∎) | non |
| `remark` | Remarque | non |
| `warning` | Attention | non |
| `intuition` | L'idée | non |
| `check` | Vérifie-toi | oui |
| `challenge` | Défi | non |
| `tic` | Avec un tableur | non |
| `history` | Math et culture | non |
| `summary` | Synthèse | non |

### Réponse cachée

Un encadré qui en contient un autre doit utiliser **4** deux-points :

```markdown
::::check[Titre]
La question.

:::answer
La réponse, cachée jusqu'au clic.
:::
::::
```

### Tableau de signes

```markdown
:::signs
| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $x-1$ | | $-$ | $0$ | $+$ | |
:::
```

Pour une valeur interdite, on écrit `$\Vert$` dans la case.

## Wiki des théorèmes (`/theoremes`)

Chaque encadré `:::theorem[Titre]` alimente la page `/theoremes`, sans rien écrire de plus : le titre devient le nom de l'entrée, le numéro affiché est celui de l'encadré dans son cours (« Théorème 3 »), et le lien de la classe renvoie au cours du chapitre. Deux encadrés au **même titre** (3ème Sciences exp. et 4ème Maths : « Dérivable implique continue ») forment une seule entrée avec deux classes.

- **Démonstration** : l'encadré `:::proof` placé juste après le théorème (ou après une phrase ou deux) est joint à l'énoncé. Sans lui, l'entrée est « Admis » si le texte voisin dit « admis » (ou « نقبل » en arabe), sinon « Énoncé ».
- **Titre trop court ou en double** : `:::theorem[Terme général]{wiki="Terme général d'une suite arithmétique"}` donne le nom du wiki sans changer l'encadré du cours. Pas de guillemets doubles dans le nom.
- **Noms différents, même théorème** (français et arabe, ou deux formulations) : `lessons/_theorem-aliases.json`. Le titre arabe doit y figurer tel qu'il est écrit dans l'encadré, c'est ce qui réunit « Théorème de Thalès » (1ère) et « مبرهنة طالس » (9ème). Les réciproques ont leur propre entrée.
- Un `:::theorem` sans titre est ignoré (avertissement dans le journal de build).

## Figures

Les images vont dans `public/lessons/images/`. On les insère ainsi :

```markdown
![Texte alternatif](/lessons/images/mon-image.svg "Légende affichée sous la figure")
```

## Pièges

- Dans un tableau, ne pas utiliser `|` dans une formule : écrire `\lvert x \rvert` pour une valeur absolue et `\mid` pour « divise ».
- Une formule centrée `$$ … $$` doit être seule sur ses lignes.
- Les liens internes vers une section utilisent l'identifiant du titre : `[section 7](#7-equations-et-inequations-de-degre-superieur-a-2)`.

## Cours en arabe (collège)

Les exercices de collège sont en arabe : leurs cours aussi, écrits de droite à gauche.

```yaml
lang: "ar"
school: "college"
level: "9eme"
sections: []                   # toujours vide au collège
chapter: "مبرهنة طالس وتطبيقاتها"   # exactement le champ chapter des exercices
```

- `lang: "ar"` met la carte en `dir="rtl"`, traduit les noms des encadrés (تعريف، مبرهنة، خاصية، برهان…) et le bouton de réponse cachée. Sans `lang`, le cours est en français.
- Les formules restent écrites de gauche à droite dans un îlot isolé. **Pas d'arabe dans une formule**, pas même dans `\text{…}` : écrire la phrase en dehors, puis la formule seule (« جذاء معدوم : $a \times b = 0$ يعني $a = 0$ أو $b = 0$ »).
- Une formule en ligne qui dépasserait la largeur de l'écran n'est jamais coupée : elle devient une ligne défilante. On préfère quand même une formule centrée `$$ … $$` pour toute chaîne d'égalités longue.
- Décimaux : `$1{,}5$` (virgule entre accolades). Séparateur de milliers : `\,` (ex. `10\,201`).
- Les légendes de figure (le texte entre guillemets) sont du texte brut : **pas de `$…$`** dedans ; de même dans `summary` et `prerequisites`.
- Figures : `python scripts/college_figures.py` régénère toutes les figures de collège (lettres latines et chiffres seulement, pas d'arabe dans les images) ; la légende arabe est dans le fichier du cours.
- Les ancres internes `[…](#…)` utilisent l'identifiant du titre rendu (les lettres arabes sont conservées).
