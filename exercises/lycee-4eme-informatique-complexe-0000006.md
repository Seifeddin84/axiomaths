---
uid: "0000006"
school: "lycee"
level: "4eme"
section: "informatique"
chapter: "Nombres Complexes"
source: "Révision hiver 2025"
title: "Équation second degré"
country: "Tunisie"
year: 2025
professor: "Axiomaths"
difficulty: "Facile"
points: 4
tags: ["équation", "module"]
---


1. Résoudre dans $\mathbb{C}$ l'équation $z^2-2z+4=0$. 
    
    On désigne par $z_1$ la solution de partie imaginaire positive et par $z_2$ l'autre solution.
    
2. Déterminer le module de chacune des solutions $z_1$ et $z_2$.
    
3. Déterminer le module de $(z_1)^2$ et $(z_2)^2$.

---

## Solution


L'objectif est de résoudre l'équation $z^2-2z+4=0$ et d'étudier les solutions.


1. Résolution dans $\mathbb{C}$

    **Pour l'équation $z^2 - 2z + 4 = 0$**

    **Forme Algébrique :**
    On calcule le discriminant $\Delta = b^2 - 4ac$ :
    $$\Delta = (-2)^2 - 4(1)(4) = 4 - 16 = -12$$
    Comme $\Delta < 0$, il y a deux solutions complexes conjuguées :
    $$z = \frac{2 \pm i\sqrt{12}}{2} = \frac{2 \pm 2i\sqrt{3}}{2} = 1 \pm i\sqrt{3}$$

    On note $z_1$ la solution avec partie imaginaire positive :
    $$z_1 = 1 + i\sqrt{3}$$
    $$z_2 = 1 - i\sqrt{3}$$


2. Modules des solutions

    **Pour $z_1 = 1 + i\sqrt{3}$**

    **Module :**
    $$|z_1| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1+3} = \sqrt{4} = 2$$


    **Pour $z_2 = 1 - i\sqrt{3}$**

    **Module :**
    Comme $z_2 = \overline{z_1}$, alors $|z_2| = |z_1|$ :
    $$|z_2| = 2$$


3. Modules des carrés

    **Pour $(z_1)^2$**

    **Forme Algébrique (optionnel) :**
    $$(z_1)^2 = (1+i\sqrt{3})^2 = 1 + 2i\sqrt{3} - 3 = -2 + 2i\sqrt{3}$$

    **Module :**
    On utilise la propriété $|z^n| = |z|^n$ :
    $$|(z_1)^2| = |z_1|^2 = 2^2 = 4$$


    **Pour $(z_2)^2$**

    **Module :**
    $$|(z_2)^2| = |z_2|^2 = 2^2 = 4$$