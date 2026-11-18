---
uid: "0000289"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "مناظرا رأسين وشبه منتصف"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "parallelogramme", "aire", "configuration"]
---

$ABC$ مثلث، $E$ و $F$ مناظرتا $B$ و $C$ على التوالي بالنسبة إلى $A$ ، و $I$ منتصف $[BC]$.

![Figure : مناظرا رأسين وشبه منتصف](/exercises/images/289-college-8eme-symetrie-centrale-0000289-1.png)

1. ابنِ $E$ و $F$.

2. بين أن $BCEF$ متوازي أضلاع.

3. $J$ مناظرة $I$ بالنسبة إلى $A$. بين أن $J$ منتصف $[EF]$.

4. بين أن مساحة $BCEF$ تساوي أربعة أضعاف مساحة $ABC$. [لاحظ أن $A$ منتصف $[BE]$]

---

## Solution

1. $E$ على المستقيم $(BA)$ بحيث $A$ منتصف $[BE]$ ، و $F$ على $(CA)$ بحيث $A$ منتصف $[CF]$.

   ![Figure : مناظرا رأسين وشبه منتصف](/exercises/images/289-college-8eme-symetrie-centrale-0000289-2.png)

2. قطرا $BCEF$ هما $[BE]$ و $[CF]$ ؛ $A$ منتصف كل منهما (لأن $E=S_A(B)$ و $F=S_A(C)$). إذن $BCEF$ **متوازي أضلاع**.

3. التناظر $S_A$ يحوّل $B$ إلى $E$ و $C$ إلى $F$ ، فيحوّل $[BC]$ إلى $[EF]$ ، ويحوّل منتصف $[BC]$ (أي $I$) إلى منتصف $[EF]$. إذن مناظرة $I$ ، وهي $J$ ، منتصف $[EF]$.

4. نقسّم $BCEF$ إلى أربعة مثلثات رؤوسها في $A$ : $ABC$ و $ACE$ و $AEF$ و $AFB$.

   - $AEF$ مناظر $ABC$ ، و $AFB$ مناظر $ACE$ ؛ فمساحاتها متساوية مثنى مثنى.

   - $ABC$ و $ACE$ لهما نفس الارتفاع المنطلق من $C$ ، وقاعدتاهما $AB=AE$ ، فلهما نفس المساحة.

   إذن المثلثات الأربعة متساوية المساحة، ومنه :

   $$\displaystyle \boxed{\mathcal{A}(BCEF)=4\times\mathcal{A}(ABC)}$$

**الفكرة :** مركز التناظر يقسم متوازي الأضلاع إلى أربعة مثلثات متساوية المساحة.
