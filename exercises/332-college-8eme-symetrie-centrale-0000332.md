---
uid: "0000332"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تركيب : مثلث قائم ومناظراته"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "triangle-rectangle", "rectangle", "angles", "construction"]
dressing: "triangle rectangle et symétriques"
rung: 3
---

$ABC$ مثلث قائم الزاوية في $A$ حيث $AB=4\,\mathrm{cm}$ و $\widehat{ABC}=35^\circ$. $I$ منتصف $[BC]$ ، $D$ مناظرة $A$ بالنسبة إلى $I$ ، و $E$ مناظرة $C$ بالنسبة إلى المستقيم $(AB)$.

1. ابنِ الشكل ثم احسب $\widehat{ACB}$.

2. بين أن $A$ منتصف $[CE]$.

3. بين أن $BE=BC$ ثم احسب $\widehat{EBC}$.

4. ما طبيعة المثلث $BCE$ ؟ احسب $\widehat{BEC}$.

5. بين أن $ABDC$ مستطيل ثم أن $AD=BE$.

---

## Solution

1.
   :::property[مجموع زوايا مثلث]
   مجموع قيس زوايا مثلث يساوي $\boxed{180^\circ}$.
   :::

   في المثلث $ABC$ : $\widehat{ACB}=180^\circ-90^\circ-35^\circ=55^\circ$.

   ![Figure : تركيب : مثلث قائم ومناظراته](/exercises/images/332-college-8eme-symetrie-centrale-0000332.png)

2. $E$ مناظرة $C$ بالنسبة إلى $(AB)$ ، إذن $(AB)$ هو محور القطعة $[CE]$ : $(AB)\perp(CE)$ ، و $(AB)$ يمر من منتصف $[CE]$. بما أن $(AC)\perp(AB)$ أيضا، فالمستقيمان $(AC)$ و $(CE)$ المارّان من $C$ والعموديان على $(AB)$ منطبقان : $E\in(AC)$. منتصف $[CE]$ ينتمي إلى $(AB)$ وإلى $(AC)$ ، أي هو $A$. إذن **$A$ منتصف $[CE]$**.

3. $B$ تنتمي إلى المحور، فمناظرتها هي $B$ نفسها. و $S_{(AB)}$ يحوّل $C$ إلى $E$ ، فهو يحفظ الأطوال :

   $$\displaystyle BE=BC$$

   التناظر المحوري يحفظ قيس الزوايا، فـ $\widehat{EBA}=\widehat{CBA}=35^\circ$. و $E$ و $C$ على جهتين مختلفتين من $(AB)$ ، إذن :

   $$\displaystyle \widehat{EBC}=\widehat{EBA}+\widehat{ABC}=35^\circ+35^\circ=70^\circ$$

4. $BE=BC$ ، فالمثلث $BCE$ **متقايس الضلعين** رأسه $B$. زاويتا القاعدة متقايستان :

   $$\displaystyle \widehat{BEC}=\widehat{BCE}=\dfrac{180^\circ-70^\circ}{2}=55^\circ$$

   وهذا متفق مع $\widehat{ACB}=55^\circ$ لأن $E$ تنتمي إلى $(AC)$.

5. قطرا $ABDC$ هما $[AD]$ و $[BC]$. $I$ منتصف $[BC]$ ، و $I$ منتصف $[AD]$ لأن $D=S_I(A)$. للقطرين نفس المنتصف، فالرباعي $ABDC$ متوازي أضلاع. زاويته في $A$ قائمة، إذن هو **مستطيل**. وقطرا المستطيل متقايسان : $AD=BC$. ومن السؤال 3 : $BE=BC$. إذن $\boxed{AD=BE}$.

**الفكرة :** $A$ هي في نفس الوقت منتصف $[CE]$ وعلى محور التناظر : التناظران المحوري والمركزي يتقاطعان في هذا الشكل.
