# Écrire un cours AxioMath

Ce fichier n'est pas publié : les fichiers dont le nom commence par `_` sont ignorés.

Chaque fichier `lessons/<slug>.md` devient une page `/cours/<slug>`. Le cours apparaît aussi en haut de la page d'exercices du chapitre, si les champs `level`, `sections` et `chapter` correspondent à ceux des exercices.

## En-tête

```yaml
---
title: "Notions de polynômes"
slug: "lycee-2eme-sciences-polynomes"
school: "lycee"
level: "2eme"
sections: ["Sciences", "Technologies de l'Informatique"]
chapter: "Polynômes"          # même valeur que le champ chapter des exercices
order: 3                      # rang du chapitre dans l'année (précédent / suivant)
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

## Figures

Les images vont dans `public/lessons/images/`. On les insère ainsi :

```markdown
![Texte alternatif](/lessons/images/mon-image.svg "Légende affichée sous la figure")
```

## Pièges

- Dans un tableau, ne pas utiliser `|` dans une formule : écrire `\lvert x \rvert` pour une valeur absolue et `\mid` pour « divise ».
- Une formule centrée `$$ … $$` doit être seule sur ses lignes.
- Les liens internes vers une section utilisent l'identifiant du titre : `[section 7](#7-equations-et-inequations-de-degre-superieur-a-2)`.
