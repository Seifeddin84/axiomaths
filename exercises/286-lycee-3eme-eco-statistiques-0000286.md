---
uid: "0000286"
school: "lycee"
level: "3eme"
section: "Economie et Gestion"
chapter: "Statistiques"
source: "Axiomaths"
title: "Augmentation de salaires : effet d'une transformation affine"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Facile"
points: null
tags: ["statistiques", "transformation-affine", "moyenne", "ecart-type", "coefficient-de-variation"]
provenance: "own"
dressing: "transformation affine"
rung: 1
batch: "2026-11-20-stat-3eco-A"
---

Dans une entreprise de $40$ employés, le salaire mensuel $x$ (en dinars) a pour moyenne $\overline{x}=600$ et pour écart type $\sigma_x=80$.

La direction accorde à chacun une augmentation de $5\,\%$, puis ajoute une prime fixe de $20$ dinars. Le nouveau salaire d'un employé qui gagnait $x$ dinars est noté $y$.

1. Exprimer $y$ en fonction de $x$.

2. Calculer la moyenne $\overline{y}$ et l'écart type $\sigma_y$ des nouveaux salaires.

3. Calculer la variance $V_y$.

4. Calculer les coefficients de variation $\dfrac{\sigma_x}{\overline{x}}$ et $\dfrac{\sigma_y}{\overline{y}}$. L'écart relatif entre les salaires a-t-il augmenté ou diminué ?

---

## Solution

1. Une augmentation de $5\,\%$ multiplie par $1+\dfrac{5}{100}=1{,}05$. Si le salaire est $x$, il devient $1{,}05\,x$, puis on ajoute la prime de $20$ dinars :

   $$\displaystyle \boxed{y=1{,}05\,x+20}$$

2. **Rappel.**

   :::property[Transformation affine d'une série]
   Si $y=ax+b$ pour chaque valeur, alors

   $$\displaystyle \overline{y}=a\,\overline{x}+b\qquad\text{et}\qquad \sigma_y=|a|\,\sigma_x .$$

   La constante $b$ décale toutes les valeurs de la même quantité : elle ne change donc *pas* la dispersion.
   :::

   Ici $a=1{,}05$ et $b=20$ :

   $$\displaystyle \overline{y}=1{,}05\times600+20=630+20=650 \qquad \sigma_y=1{,}05\times80=84.$$

   Le salaire moyen est maintenant de $650$ dinars et l'écart type de $84$ dinars.

3. La variance est le carré de l'écart type :

   $$\displaystyle V_y=\sigma_y^2=84^2=7\,056.$$

   *Vérification :* $V_y=a^2V_x=1{,}05^2\times80^2=1{,}1025\times6\,400=7\,056$ $\checkmark$

4. Le coefficient de variation mesure la dispersion *relative* : $CV=\dfrac{\sigma}{\overline{x}}$.

   $$
   \displaystyle \frac{\sigma_x}{\overline{x}}=\frac{80}{600}=\frac{2}{15}\approx0{,}133\quad(13{,}3\,\%)\qquad
     \frac{\sigma_y}{\overline{y}}=\frac{84}{650}\approx0{,}129\quad(12{,}9\,\%).
   $$

   La dispersion en dinars augmente ($80\to84$), mais la dispersion relative diminue légèrement ($13{,}3\,\%\to12{,}9\,\%$).

   **Pourquoi ?** Tous les salaires sont multipliés par $1{,}05$ (le $CV$ resterait inchangé), mais la prime fixe de $20$ dinars augmente la moyenne sans augmenter l'écart type : le $CV$ baisse.

:::intuition
Une transformation affine $y=ax+b$ déplace la moyenne comme elle déplace les valeurs, mais la constante $b$ ne change pas la dispersion.
:::
