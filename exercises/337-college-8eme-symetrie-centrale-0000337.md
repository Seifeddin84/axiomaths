---
uid: "0000337"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تركيب : مستقيم المنتصفين"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["symetrie-centrale", "droite-des-milieux", "parallelogramme", "demonstration"]
dressing: "droite des milieux par la symétrie centrale"
rung: 5
---

**الجزء 1.** $ABC$ مثلث، $I$ منتصف $[AB]$ و $J$ منتصف $[AC]$ و $K$ مناظرة $I$ بالنسبة إلى $J$.

1. بين أن $AICK$ متوازي أضلاع.

2. استنتج أن $IBCK$ متوازي أضلاع.

3. بين أن $(IJ)\parallel(BC)$ و $IJ=\dfrac{1}{2}BC$.

**الجزء 2.** $ABCD$ رباعي، $E$ و $F$ و $G$ و $H$ منتصفات $[AB]$ و $[BC]$ و $[CD]$ و $[DA]$ على التوالي.

1. بين أن $EFGH$ متوازي أضلاع.

2. ما هي طبيعة $EFGH$ إذا كان $AC=BD$ ؟

![Figure : تركيب : مستقيم المنتصفين](/exercises/images/337-college-8eme-symetrie-centrale-0000337-1.png)

![Figure : تركيب : مستقيم المنتصفين](/exercises/images/337-college-8eme-symetrie-centrale-0000337-2.png)

---

## Solution

**الجزء 1.**

1.
   :::property[رباعي قطراه لهما نفس المنتصف]
   رباعي قطراه يتقاطعان في منتصفهما هو متوازي أضلاع.
   :::

   قطرا $AICK$ هما $[AC]$ و $[IK]$. $J$ منتصف $[AC]$ ، و $J$ منتصف $[IK]$ لأن $K=S_J(I)$. إذن $AICK$ متوازي أضلاع.

2. $S_J$ يحوّل $A$ إلى $C$ و $I$ إلى $K$ ، فيحوّل $[AI]$ إلى $[CK]$. إذن $CK=AI=IB$ و $(CK)\parallel(AI)=(AB)$.

   :::property[معيار]
   رباعي محدب فيه ضلعان متقابلان متوازيان ومتقايسان هو متوازي أضلاع.
   :::

   في $IBCK$ الضلعان $[IB]$ و $[KC]$ متقابلان، متوازيان ومتقايسان : $IBCK$ **متوازي أضلاع**.

   ![Figure : تركيب : مستقيم المنتصفين](/exercises/images/337-college-8eme-symetrie-centrale-0000337-3.png)

3. في $IBCK$ : $(IK)\parallel(BC)$ و $IK=BC$ (ضلعان متقابلان). والنقاط $I$ و $J$ و $K$ على استقامة واحدة مع $J$ منتصف $[IK]$ ، فـ $(IJ)=(IK)$ و $IJ=\dfrac{1}{2}IK$. إذن : $\boxed{(IJ)\parallel(BC)}$ و $\boxed{IJ=\dfrac{1}{2}BC}$. وهذه هي *خاصية المستقيم المار من منتصفي ضلعين*.

**الجزء 2.**

1. في المثلث $ABC$ : $E$ و $F$ منتصفا $[AB]$ و $[BC]$ ، إذن $(EF)\parallel(AC)$ و $EF=\dfrac{1}{2}AC$. في المثلث $ADC$ : $H$ و $G$ منتصفا $[AD]$ و $[CD]$ ، إذن $(HG)\parallel(AC)$ و $HG=\dfrac{1}{2}AC$. إذن $(EF)\parallel(HG)$ و $EF=HG$ : الرباعي $EFGH$ **متوازي أضلاع**.

   ![Figure : تركيب : مستقيم المنتصفين](/exercises/images/337-college-8eme-symetrie-centrale-0000337-4.png)

2. بنفس الطريقة في المثلثين $BCD$ و $BAD$ : $FG=\dfrac{1}{2}BD$ و $EH=\dfrac{1}{2}BD$. إذا كان $AC=BD$ فإن

   $$\displaystyle EF=FG=GH=HE=\dfrac{1}{2}AC$$

   فيكون $EFGH$ **معينا**.

**الفكرة :** نستعمل الخاصية المبرهنة في الجزء 1 مرتين لنفس القطر $[AC]$. **انتبه :** المنتصفات تعطي دائما متوازي أضلاع، مهما كان الرباعي $ABCD$.
