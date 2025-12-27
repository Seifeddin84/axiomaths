---
uid: "0000009"
school: "lycee"
level: "4eme"
section: "Mathématiques"
chapter: "Intégrales"
source: "Aix Marseille, série C & E, 1973, exercice 1"
title: "Intégrale et linéarisation trigonométrique"
country: "France"
year: 1973
difficulty: "Difficile"
points: 4
tags: ["intégrale", "trigonométrie", "linéarisation"]
---

1.  Linéariser $\cos^7\theta$.
2.  Calculer $I=\int_0^{\frac{\pi}{2}}\cos^7\theta d\theta$.

---

## Solution


L'objectif est de linéariser l'expression trigonométrique $\cos^7\theta$ pour calculer son intégrale sur $[0, \frac{\pi}{2}]$.


1. Linéarisation ($\cos^7\theta$)


    **Formule d'Euler :**
    On utilise $\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$.
    $$\cos^7\theta = \left(\frac{e^{i\theta} + e^{-i\theta}}{2}\right)^7 = \frac{1}{2^7} (e^{i\theta} + e^{-i\theta})^7$$

    **Développement (Binôme de Newton) :**
    On utilise $(a+b)^7 = a^7 + 7a^6b + 21a^5b^2 + 35a^4b^3 + 35a^3b^4 + 21a^2b^5 + 7ab^6 + b^7$.

    $$(e^{i\theta} + e^{-i\theta})^7 = e^{7i\theta} + 7e^{5i\theta} + 21e^{3i\theta} + 35e^{i\theta} + 35e^{-i\theta} + 21e^{-3i\theta} + 7e^{-5i\theta} + e^{-7i\theta}$$

    **Regroupement :**
    On regroupe les termes conjugués ($e^{ix} + e^{-ix} = 2\cos(x)$) :

    $$(e^{i\theta} + e^{-i\theta})^7 = (e^{7i\theta} + e^{-7i\theta}) + 7(e^{5i\theta} + e^{-5i\theta}) + 21(e^{3i\theta} + e^{-3i\theta}) + 35(e^{i\theta} + e^{-i\theta})$$

    $$(e^{i\theta} + e^{-i\theta})^7 = 2\cos(7\theta) + 7(2\cos(5\theta)) + 21(2\cos(3\theta)) + 35(2\cos(\theta))$$

    **Résultat final :**
    On réinjecte le facteur $\frac{1}{2^7} = \frac{1}{128}$ :

    $$\cos^7\theta = \frac{1}{128} \left[ 2\cos(7\theta) + 14\cos(5\theta) + 42\cos(3\theta) + 70\cos(\theta) \right]$$

    $$\cos^7\theta = \frac{1}{64}\cos(7\theta) + \frac{7}{64}\cos(5\theta) + \frac{21}{64}\cos(3\theta) + \frac{35}{64}\cos(\theta)$$



2. Calcul de l'intégrale ($I$)


    **Primitives :**
    On utilise la forme linéarisée. Une primitive de $\cos(k\theta)$ est $\frac{1}{k}\sin(k\theta)$.

    $$I = \frac{1}{64} \left[ \frac{\sin(7\theta)}{7} + \frac{7\sin(5\theta)}{5} + \frac{21\sin(3\theta)}{3} + 35\sin(\theta) \right]_0^{\frac{\pi}{2}}$$

    $$I = \frac{1}{64} \left[ \frac{1}{7}\sin(7\theta) + \frac{7}{5}\sin(5\theta) + 7\sin(3\theta) + 35\sin(\theta) \right]_0^{\frac{\pi}{2}}$$

    **Calcul des bornes :**
    En $0$, tous les sinus sont nuls.
    En $\frac{\pi}{2}$ :
        * $\sin(\frac{7\pi}{2}) = -1$
        * $\sin(\frac{5\pi}{2}) = 1$
        * $\sin(\frac{3\pi}{2}) = -1$
        * $\sin(\frac{\pi}{2}) = 1$

    $$I = \frac{1}{64} \left( -\frac{1}{7} + \frac{7}{5} - 7 + 35 \right)$$

    $$I = \frac{1}{64} \left( 28 + \frac{7}{5} - \frac{1}{7} \right)$$

    **Simplification :**
    On met au même dénominateur (35) :

    $$28 + \frac{7}{5} - \frac{1}{7} = \frac{980 + 49 - 5}{35} = \frac{1024}{35}$$

    $$I = \frac{1}{64} \times \frac{1024}{35}$$

    Comme $1024 = 16 \times 64$ :

    $$I = \frac{16}{35}$$
