---
uid: "0000297"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تركيب : تناظر محوري ثم مركزي"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["symetrie-axiale", "symetrie-centrale", "angles", "composition", "synthese"]
---

$\Delta$ و $d$ مستقيمان متعامدان في $O$. $H$ نقطة من $\Delta$ و $K$ نقطة من $d$. $A$ نقطة داخل الزاوية $\widehat{HOK}$ حيث $OA=3\,\mathrm{cm}$ و $\widehat{HOA}=35^\circ$. $A_1$ مناظرة $A$ بالنسبة إلى $\Delta$ ، و $A_2$ مناظرة $A_1$ بالنسبة إلى $O$.

![Figure : تركيب : تناظر محوري ثم مركزي](/exercises/images/297-college-8eme-symetrie-centrale-0000297-1.png)

1. ابنِ $A_1$ و $A_2$.

2. بين أن $OA_1=OA_2=OA$ ، ثم احسب $\widehat{AOA_1}$ و $\widehat{AOA_2}$.

3. احسب $\widehat{AOK}$ ثم $\widehat{KOA_2}$.

4. استنتج أن $A_2$ مناظرة $A$ بالنسبة إلى $d$.

5. نعوّض $35^\circ$ بقيس كيفي $\alpha$ حيث $0<\alpha<90^\circ$. هل يبقى الاستنتاج صحيحا ؟ علّل.

---

## Solution

1. $A_1$ هي النقطة التي يكون $\Delta$ محورا للقطعة $[AA_1]$. ثم $A_2$ هي النقطة التي يكون $O$ منتصفا للقطعة $[A_1A_2]$.

   ![Figure : تركيب : تناظر محوري ثم مركزي](/exercises/images/297-college-8eme-symetrie-centrale-0000297-2.png)

2. $O\in\Delta$ ، فمناظرتها بالنسبة إلى $\Delta$ هي $O$ ، والتناظر المحوري يحفظ الأطوال : $\boxed{OA_1=OA=3\,\mathrm{cm}}$. ثم $S_O$ يحفظ الأطوال : $OA_2=OA_1=3\,\mathrm{cm}$. التناظر المحوري يحفظ قيس الزوايا : $\widehat{HOA_1}=\widehat{HOA}=35^\circ$ ، و $A$ و $A_1$ على جهتين مختلفتين من $\Delta$ ، إذن :

   $$\displaystyle \widehat{AOA_1}=35^\circ+35^\circ=70^\circ$$

   النقط $A_1$ و $O$ و $A_2$ على استقامة واحدة، و $O$ بينهما، فالزاويتان $\widehat{AOA_1}$ و $\widehat{AOA_2}$ متكاملتان :

   $$\displaystyle \widehat{AOA_2}=180^\circ-70^\circ=110^\circ$$

3. $d\perp\Delta$ ، إذن $\widehat{HOK}=90^\circ$ ، و $A$ داخلها :

   $$\displaystyle \widehat{AOK}=90^\circ-35^\circ=55^\circ$$

   $A$ و $A_2$ على جهتين مختلفتين من $d$ ، فالنصف مستقيم $[OK)$ داخل الزاوية $\widehat{AOA_2}$ :

   $$\displaystyle \widehat{KOA_2}=\widehat{AOA_2}-\widehat{AOK}=110^\circ-55^\circ=55^\circ$$

4. $OA=OA_2$ ، فالمثلث $OAA_2$ متقايس الضلعين رأسه $O$. و $\widehat{AOK}=\widehat{KOA_2}=55^\circ$ ، أي $[OK)$ ينصّف زاوية الرأس.

   :::property[مثلث متقايس الضلعين]
   في مثلث متقايس الضلعين، منصّف زاوية الرأس هو **محور تناظر المثلث**، وهو محور القاعدة.
   :::

   إذن $d=(OK)$ هو محور $[AA_2]$ : **$A_2$ مناظرة $A$ بالنسبة إلى $d$**.

5. نضع $\widehat{HOA}=\alpha$. نفس الحجج تعطي :

   $$\displaystyle \widehat{AOA_1}=2\alpha\ ,\qquad \widehat{AOA_2}=180^\circ-2\alpha\ ,\qquad \widehat{AOK}=90^\circ-\alpha$$

   $$\displaystyle \widehat{KOA_2}=(180^\circ-2\alpha)-(90^\circ-\alpha)=90^\circ-\alpha=\widehat{AOK}$$

   فالنتيجة صحيحة من أجل كل $\alpha$ بين $0$ و $90^\circ$ : $\boxed{S_O\big(S_\Delta(A)\big)=S_d(A)}$.

**الفكرة :** تناظر محوري ثم تناظر مركزي مركزه على المحور يعطي تناظرا محوريا بالنسبة إلى المستقيم العمودي. **انتبه :** لا تنسَ أن $O$ تنتمي إلى $\Delta$ : هذا ما يجعل $OA_1=OA$.
