---
uid: "0000294"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "مثلث متقايس الضلعين ومناظره"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "triangle-isocele", "losange", "angles"]
---

$ABC$ مثلث متقايس الضلعين رأسه $A$ حيث $\widehat{BAC}=40^\circ$. $I$ منتصف $[BC]$ و $D$ مناظرة $A$ بالنسبة إلى $I$.

1. ابنِ الشكل.

2. بين أن $ABDC$ متوازي أضلاع.

3. بين أن $ABDC$ معين.

4. احسب قيس كل من $\widehat{ABC}$ و $\widehat{BDC}$ و $\widehat{DBC}$.

5. استنتج قيس الزاوية $\widehat{ABD}$.

---

## Solution

1. نبني $ABC$ ثم نعيّن $D$ بحيث $I$ منتصف $[AD]$.

   ![Figure : مثلث متقايس الضلعين ومناظره](/exercises/images/294-college-8eme-symetrie-centrale-0000294.png)

2. قطرا $ABDC$ هما $[AD]$ و $[BC]$ ، ولهما نفس المنتصف $I$ (لأن $D=S_I(A)$ و $I$ منتصف $[BC]$). إذن $ABDC$ متوازي أضلاع.

3. $S_I$ يحوّل $A$ إلى $D$ و $B$ إلى $C$ و $C$ إلى $B$ ، فيحوّل $[AB]$ إلى $[DC]$ و $[AC]$ إلى $[DB]$. إذن $DC=AB$ و $DB=AC$. وبما أن $AB=AC$ :

   $$\displaystyle AB=BD=DC=CA$$

   لمتوازي الأضلاع $ABDC$ أضلاع أربعة متقايسة : إنه **معين**.

4. في المثلث المتقايس الضلعين $ABC$ زاويتا القاعدة متقايستان :

   $$\displaystyle \widehat{ABC}=\dfrac{180^\circ-40^\circ}{2}=70^\circ$$

   التناظر $S_I$ يحفظ قيس الزوايا ويحوّل $B$ إلى $C$ و $A$ إلى $D$ و $C$ إلى $B$ :

   - الزاوية $\widehat{BAC}$ تُحوَّل إلى $\widehat{CDB}$ ، إذن $\widehat{BDC}=40^\circ$.

   - الزاوية $\widehat{ACB}$ تُحوَّل إلى $\widehat{DBC}$ ، إذن $\widehat{DBC}=70^\circ$.

5. الشعاع $[BC)$ يقع بين $[BA)$ و $[BD)$ ، إذن :

   $$\displaystyle \widehat{ABD}=\widehat{ABC}+\widehat{CBD}=70^\circ+70^\circ=140^\circ$$

   **زوايا المعين $ABDC$** هي : $40^\circ$ و $140^\circ$ و $40^\circ$ و $140^\circ$.
