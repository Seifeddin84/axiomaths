---
title: "Suites réelles"
slug: "lycee-3eme-economie-suites-reelles"
school: "lycee"
level: "3eme"
sections: ["Economie et Gestion"]
chapter: "Suites Réelles"
summary: "Décrire une évolution qui se répète d'année en année : suites arithmétiques et géométriques, limite, somme de termes, puis suites récurrentes de la forme $u_{n+1}=au_n+b$ qui modélisent stocks, prêts et revenus."
prerequisites: ["Suites arithmétiques et géométriques (2ème année)", "Pourcentages et coefficients multiplicateurs"]
source: "Manuel officiel 3ème année Économie et Gestion, Tome 1, chapitre 2"
updated: "2026-11-20"
---

:::remark[Fiche de révision]
📄 [Télécharger la fiche récapitulative (PDF, A3)](/fiches/3eme-economie-suites-reelles-fiche.pdf) : l'essentiel du chapitre sur une page à imprimer.
:::

## Pourquoi ce chapitre ?

Un capital de $1\,000$ dinars est placé à $5\,\%$ par an. Au bout de $10$ ans il vaut environ $1\,629$ dinars, au bout de $50$ ans environ $11\,467$. Une voiture qui perd $12\,\%$ par an vaut presque $0$ au bout de $40$ ans. Ces phénomènes se répètent d'une année à l'autre : on les décrit par une **suite**.

Deux questions guident le chapitre. **Que devient la suite quand $n$ devient très grand ?** C'est la notion de limite. **Peut-on calculer directement le $n$-ième terme sans passer par tous les précédents ?** C'est le terme général, et c'est surtout utile pour les suites définies par récurrence.

## 1. Rappels : suites arithmétiques et géométriques

:::definition[Suite arithmétique]
Une suite $(u_n)$ est **arithmétique** de raison $r$ si $u_{n+1}=u_n+r$ pour tout $n$. Alors $u_n=u_0+nr$ et
$$u_0+u_1+\dots+u_n=(n+1)\,\frac{u_0+u_n}{2}.$$
:::

:::definition[Suite géométrique]
Une suite $(u_n)$ est **géométrique** de raison $q$ si $u_{n+1}=q\,u_n$ pour tout $n$. Alors $u_n=u_0\,q^n$ et, pour $q\neq1$,
$$u_0+u_1+\dots+u_n=u_0\,\frac{1-q^{\,n+1}}{1-q}.$$
:::

:::example[Deux placements]
À intérêts **simples** (on touche toujours $4\,\%$ du capital de départ $2\,000$), $u_{n+1}=u_n+80$ : suite arithmétique. À intérêts **composés** à $4\,\%$ (les intérêts rapportent des intérêts), $u_{n+1}=1{,}04\,u_n$ : suite géométrique, $u_n=2\,000\times1{,}04^n$.
:::

:::method[Traduire un pourcentage]
Une hausse de $t\,\%$ multiplie par $1+\frac{t}{100}$ ; une baisse de $t\,\%$ multiplie par $1-\frac{t}{100}$. Une évolution à pourcentage constant est donc **géométrique**, une évolution de montant constant est **arithmétique**.
:::

## 2. Limite d'une suite arithmétique

:::property[Limite d'une suite arithmétique]
Soit $(u_n)$ arithmétique de raison $r$.

- si $r>0$ : $u_n\to+\infty$ ;
- si $r<0$ : $u_n\to-\infty$ ;
- si $r=0$ : la suite est constante.
:::

:::intuition
On ajoute à chaque étape un même nombre positif (ou négatif) : la suite augmente (ou diminue) d'un pas régulier, sans jamais s'arrêter.
:::

## 3. Limite d'une suite géométrique

:::property[Limite de $q^n$]
Soit $q$ un réel.

| Valeur de $q$ | Comportement de $q^n$ |
|---|---|
| $q>1$ | $q^n\to+\infty$ |
| $q=1$ | constante égale à $1$ |
| $-1<q<1$ | $q^n\to0$ |
| $q\le-1$ | pas de limite (signes alternés, valeur absolue qui ne tend pas vers $0$) |
:::

:::property[Limite de $u_0\,q^n$]
Soit $u_n=u_0\,q^n$ avec $u_0\neq0$.

- si $|q|<1$, $u_n\to0$ ;
- si $q>1$ et $u_0>0$, $u_n\to+\infty$ ; si $q>1$ et $u_0<0$, $u_n\to-\infty$ ;
- si $q\le-1$, $(u_n)$ n'a pas de limite.
:::

:::example[Trois comportements]
$u_n=15\,000\times0{,}88^n\to0$ (dépréciation). $u_n=2\,000\times1{,}04^n\to+\infty$ (placement à intérêts composés). $u_n=-3\times1{,}5^n\to-\infty$ (le signe de $u_0$ compte). $u_n=(-2)^n$ n'a pas de limite.
:::

:::warning
Le signe du **premier terme** compte quand $q>1$. Et $q^n\to0$ **exige** $-1<q<1$ : pour $q=-1{,}5$, $q^n$ ne tend pas vers $0$.
:::

::::check[À toi]
Donner la limite de $u_n=5-2\times0{,}9^n$ et de $v_n=4\times(-0{,}5)^n$.

::::answer
$0{,}9^n\to0$ donc $u_n\to5$. $|-0{,}5|<1$ donc $(-0{,}5)^n\to0$ et $v_n\to0$ (les termes alternent de signe mais se rapprochent de $0$).
:::
::::

## 4. Opérations sur les limites usuelles

:::property[Combiner une constante et un terme géométrique]
Si $(w_n)$ a pour limite $\ell$ et $a,b$ sont des réels, alors $(a\,w_n+b)$ a pour limite $a\ell+b$. Si $(w_n)\to+\infty$ et $a>0$, alors $a\,w_n+b\to+\infty$ ; si $a<0$, alors $a\,w_n+b\to-\infty$.
:::

:::example[Un niveau d'équilibre]
$u_n=8\,000-4\,000\times0{,}75^n$ : comme $0{,}75^n\to0$, $u_n\to8\,000-0=8\,000$. La suite approche $8\,000$ sans l'atteindre.
:::

## 5. Somme de termes d'une suite géométrique

Quand $|q|<1$, la somme $S_n=u_0+\dots+u_n=u_0\,\dfrac{1-q^{\,n+1}}{1-q}$ a une limite :

:::property[Somme infinie]
Si $-1<q<1$, alors $u_0+u_0q+\dots+u_0q^n\;\longrightarrow\;\dfrac{u_0}{1-q}$ quand $n\to+\infty$.
:::

:::example[Un développement décimal périodique]
$0{,}1818\ldots=0{,}18+0{,}0018+\dots$ est la somme d'une suite géométrique de premier terme $0{,}18$ et de raison $0{,}01$ : sa limite est $\dfrac{0{,}18}{0{,}99}=\dfrac2{11}$.
:::

:::example[Dons décroissants]
Un don de $600$ dinars, puis chaque année $75\,\%$ du précédent : le total est $C_n=2\,400\,(1-0{,}75^{\,n+1})\to2\,400$. Même avec une infinité d'années, le total ne dépasse pas $2\,400$ dinars.
:::

## 6. Suites définies par $u_{n+1}=a\,u_n+b$

C'est le cas de la plupart des modèles économiques : stock qui se renouvelle, dette qu'on rembourse, population qu'on prélève.

:::method[Étudier $u_{n+1}=a\,u_n+b$ avec $a\neq1$]
1. Chercher le réel $\alpha$ tel que $\alpha=a\alpha+b$, c'est-à-dire $\alpha=\dfrac{b}{1-a}$ (point d'équilibre).
2. Poser $v_n=u_n-\alpha$ et montrer que $v_{n+1}=a\,v_n$ : la suite $(v_n)$ est **géométrique** de raison $a$.
3. En déduire $v_n=v_0\,a^n$ puis $u_n=\alpha+(u_0-\alpha)\,a^n$.
4. Conclure sur la limite à l'aide de la section 3.
:::

:::proof
Comme $\alpha=a\alpha+b$, on a $b=\alpha-a\alpha$. Donc
$$v_{n+1}=u_{n+1}-\alpha=a\,u_n+b-\alpha=a\,u_n-a\alpha=a\,(u_n-\alpha)=a\,v_n.$$
:::

:::example[Gestion d'un stock]
$u_{n+1}=0{,}75\,u_n+2\,000$, $u_0=4\,000$. Équilibre : $\alpha=\dfrac{2\,000}{0{,}25}=8\,000$. Donc $v_n=u_n-8\,000$ est géométrique de raison $0{,}75$ avec $v_0=-4\,000$ : $u_n=8\,000-4\,000\times0{,}75^n\to8\,000$.
:::

:::property[Limite de $u_n=\alpha+(u_0-\alpha)\,a^n$]
- si $|a|<1$ : $u_n\to\alpha$, quel que soit $u_0$ ;
- si $a>1$ : $u_n\to+\infty$ si $u_0>\alpha$ et $u_n\to-\infty$ si $u_0<\alpha$ (si $u_0=\alpha$, la suite est constante) ;
- si $a\le-1$ et $u_0\neq\alpha$ : pas de limite.
:::

:::warning
**Piège.** Si $(u_n)$ a une limite $\ell$, alors $\ell=a\ell+b$. Mais la réciproque est fausse : cette équation donne seulement un **candidat**. Avec $u_{n+1}=-1{,}5\,u_n+5$ et $u_0=1$, le candidat est $2$, or $u_n=2-(-1{,}5)^n$ n'a pas de limite.
:::

::::check[À toi]
Étudier $u_{n+1}=1{,}2\,u_n-10$ avec $u_0=40$ : trouver $\alpha$, exprimer $u_n$, donner la limite.

::::answer
$\alpha=\dfrac{-10}{1-1{,}2}=50$. $v_n=u_n-50$ est géométrique de raison $1{,}2$ avec $v_0=-10$, donc $u_n=50-10\times1{,}2^n\to-\infty$ : le modèle conduit à une population qui devient négative (étang vide en $9$ ans).
:::
::::

## 7. À la machine : tableur

:::tic[Calculatrice et tableur]
Pour $u_{n+1}=0{,}75\,u_n+2\,000$ : écrire $4000$ en `A1` puis `=0,75*A1+2000` en `A2` et étirer vers le bas. Les valeurs se stabilisent près de $8\,000$ : on lit la limite et on vérifie la formule $\alpha=\frac{b}{1-a}$. Pour trouver à partir de quel rang un seuil est dépassé, on regarde le premier rang où la colonne dépasse la valeur voulue.
:::

## 8. Les pièges classiques

| Erreur | Ce qu'il faut faire |
|---|---|
| Écrire $q^n\to0$ pour $q=-1{,}5$ | Vérifier $-1<q<1$ avant de conclure |
| Oublier le signe de $u_0$ quand $q>1$ | $u_0>0\Rightarrow+\infty$, $u_0<0\Rightarrow-\infty$ |
| Appliquer $u_0+\dots+u_n=(n+1)\frac{u_0+u_n}{2}$ à une suite géométrique | Cette formule est réservée au cas arithmétique |
| Dire « la limite est $\alpha$ » sans étudier $a$ | Pour $a\le-1$, ou $a>1$ avec $u_0\neq\alpha$, la suite s'éloigne de $\alpha$ |
| Compter $n$ termes au lieu de $n+1$ dans une somme de $u_0$ à $u_n$ | De $u_0$ à $u_n$ il y a $n+1$ termes |

## 9. Synthèse

:::summary[À retenir]
- Arithmétique (raison $r$) : $u_n=u_0+nr$ ; géométrique (raison $q$) : $u_n=u_0q^n$.
- Limite de $q^n$ : $0$ si $-1<q<1$ ; $+\infty$ si $q>1$ ; pas de limite si $q\le-1$.
- Somme géométrique : $u_0\dfrac{1-q^{n+1}}{1-q}$ ; si $|q|<1$, elle tend vers $\dfrac{u_0}{1-q}$.
- $u_{n+1}=au_n+b$ : $\alpha=\dfrac{b}{1-a}$, $u_n=\alpha+(u_0-\alpha)a^n$ ; limite $\alpha$ si $|a|<1$.
:::

:::history[Achille et la tortue]
Zénon d'Élée (Ve siècle av. J.-C.) prétendait qu'Achille ne rattraperait jamais la tortue : quand il atteint l'endroit où elle se trouvait, elle a avancé ; quand il atteint ce nouvel endroit, elle a encore avancé, et ainsi de suite. Si la tortue a $100$ mètres d'avance et qu'Achille va dix fois plus vite, les distances successives sont $100+10+1+0{,}1+\dots$, une somme géométrique de raison $\frac1{10}$ qui vaut $\dfrac{100}{1-0{,}1}=\dfrac{1\,000}9\approx111{,}1$ mètres. Infinité d'étapes, mais distance totale finie : c'est exactement la limite d'une somme géométrique.
:::
