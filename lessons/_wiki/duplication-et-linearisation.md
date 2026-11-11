---
theorem: "Duplication et linéarisation"
---

:::proof[Cas particulier b = a]
| Étape | Justification |
|---|---|
| $\cos 2a = \cos(a + a) = \cos^2 a - \sin^2 a$ | formule d'addition |
| $= 2\cos^2 a - 1 = 1 - 2\sin^2 a$ | $\sin^2 a = 1 - \cos^2 a$, puis $\cos^2 a = 1 - \sin^2 a$ |
| $\sin 2a = \sin(a + a) = 2\sin a\cos a$ | formule d'addition |
| $\cos^2 a = \dfrac{1 + \cos 2a}{2}$ et $\sin^2 a = \dfrac{1 - \cos 2a}{2}$ | on isole dans les deux formes de $\cos 2a$ |
:::

:::redaction
D'après la formule d'addition avec $b = a$, $\cos 2a = \cos^2 a - \sin^2 a$.
Comme $\sin^2 a = 1 - \cos^2 a$, $\cos 2a = 2\cos^2 a - 1$ ; comme $\cos^2 a = 1 - \sin^2 a$, $\cos 2a = 1 - 2\sin^2 a$.
De même, $\sin 2a = \sin a\cos a + \cos a\sin a = 2\sin a\cos a$.
De $\cos 2a = 2\cos^2 a - 1$, on tire $\cos^2 a = \dfrac{1 + \cos 2a}{2}$.
De $\cos 2a = 1 - 2\sin^2 a$, on tire $\sin^2 a = \dfrac{1 - \cos 2a}{2}$.
:::
