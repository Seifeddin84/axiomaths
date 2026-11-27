---
uid: "0000330"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تركيب : مثلث ومناظره"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "triangle", "construction", "quadrillage", "images"]
dressing: "triangle et son symétrique sur quadrillage"
rung: 3
---

في الشبكة المرسومة (ضلع المربع الصغير يساوي $1\,\mathrm{cm}$)، $ABC$ مثلث و $O$ نقطة.

![Figure : تركيب : مثلث ومناظره](/exercises/images/330-college-8eme-symetrie-centrale-0000330-1.png)

1. ابنِ $A'$ و $B'$ و $C'$ مناظرات $A$ و $B$ و $C$ بالنسبة إلى $O$.

2. بين أن $ABA'B'$ متوازي أضلاع.

3. بين أن $BCB'C'$ متوازي أضلاع.

4. بين أن $(AB)\parallel(A'B')$ و $AB=A'B'$.

5. احسب مساحة المثلث $ABC$ (باحتساب المربعات)، ثم استنتج مساحة $A'B'C'$.

---

## Solution

1. من $A$ إلى $O$ : 4 يمينا و 2 إلى الأعلى ؛ من $B$ إلى $O$ : 3 يمينا و 2 إلى الأسفل ؛ من $C$ إلى $O$ : وحدة يمينا ووحدة إلى الأعلى. نواصل بنفس الانتقال من $O$ فنجد $A'$ و $B'$ و $C'$.

   ![Figure : تركيب : مثلث ومناظره](/exercises/images/330-college-8eme-symetrie-centrale-0000330-2.png)

2.
   :::property[رباعي قطراه لهما نفس المنتصف]
   إذا كان للقطرين نفس المنتصف فالرباعي متوازي أضلاع.
   :::

   قطرا $ABA'B'$ هما $[AA']$ و $[BB']$. $O$ منتصف $[AA']$ لأن $A'=S_O(A)$ ، و $O$ منتصف $[BB']$ لأن $B'=S_O(B)$. إذن $ABA'B'$ متوازي أضلاع.

3. قطرا $BCB'C'$ هما $[BB']$ و $[CC']$ ، ولهما نفس المنتصف $O$. إذن $BCB'C'$ متوازي أضلاع.

4. مناظر $[AB]$ هو $[A'B']$ ، إذن $A'B'=AB$ (حفظ الأطوال) و $(A'B')\parallel(AB)$ (مناظر مستقيم مستقيم موازٍ له). وهذا ما يؤكده الرباعي $ABA'B'$ : ضلعاه المتقابلان $[AB]$ و $[A'B']$ متوازيان.

5. نحيط المثلث بمستطيل أبعاده $3\times4$ : مساحته $12\,\mathrm{cm}^2$. ونطرح مساحات المثلثات القائمة الثلاثة الزائدة :

   $$\displaystyle \dfrac{1\times4}{2}=2\ ,\qquad \dfrac{2\times3}{2}=3\ ,\qquad \dfrac{3\times1}{2}=\dfrac{3}{2}$$

   $$\displaystyle \mathcal{A}(ABC)=12-\left(2+3+\dfrac{3}{2}\right)=12-\dfrac{13}{2}=\dfrac{11}{2}=5{,}5\,\mathrm{cm}^2$$

   التناظر المركزي يحفظ المساحات، إذن $\boxed{\mathcal{A}(A'B'C')=5{,}5\,\mathrm{cm}^2}$.
