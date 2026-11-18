---
uid: "0000296"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تقسيم قطعة أرض"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["symetrie-centrale", "aire", "parallelogramme", "probleme"]
---

قطعة أرض على شكل متوازي أضلاع $ABCD$ ، $AB=60\,\mathrm{m}$ وارتفاعها $30\,\mathrm{m}$ ، ومركزها $O$. يريد مالكها تقسيمها بممر مستقيم يمر من $O$ ويقطع $[AB]$ في $E$ حيث $AE=15\,\mathrm{m}$ وفي $[CD]$ في نقطة $F$.

![Figure : تقسيم قطعة أرض](/exercises/images/296-college-8eme-symetrie-centrale-0000296.png)

1. بين أن $F$ مناظرة $E$ بالنسبة إلى $O$. احسب $CF$ و $DF$.

2. احسب مساحة قطعة الأرض.

3. بين أن الممر $[EF]$ يقسم القطعة إلى جزأين $AEFD$ و $EBCF$ متساويين في المساحة. ما مساحة كل منهما ؟

4. تحقق من النتيجة بحساب مساحة شبه المنحرف $AEFD$.

5. نغيّر موضع $E$ : $AE=x$ حيث $0<x<60$ (بالمتر). احسب مساحة $AEFD$ بدلالة $x$ ثم علّق.

---

## Solution

1. $S_O$ يحوّل $[AB]$ إلى $[CD]$ ($A\mapsto C$ و $B\mapsto D$) ، فمناظرة $E$ تنتمي إلى $[CD]$. وهي أيضا على المستقيم $(EO)$ لأن $O$ منتصف القطعة الواصلة بين $E$ ومناظرتها. والمستقيم $(EO)$ يقطع $(CD)$ في نقطة واحدة هي $F$. إذن $F=S_O(E)$. وبما أن $S_O$ يحفظ الأطوال ويحوّل $A$ إلى $C$ و $E$ إلى $F$ :

   $$\displaystyle CF=AE=15\,\mathrm{m}$$

   ومنه $DF=CD-CF=60-15=45\,\mathrm{m}$.

2. مساحة متوازي الأضلاع = القاعدة $\times$ الارتفاع :

   $$\displaystyle \mathcal{A}(ABCD)=60\times30=1800\,\mathrm{m}^2$$

3. $S_O$ يحوّل $A$ إلى $C$ و $E$ إلى $F$ و $F$ إلى $E$ و $D$ إلى $B$. إذن مناظر الرباعي $AEFD$ هو $CFEB$ أي $EBCF$. التناظر المركزي يحفظ المساحات ، إذن $\mathcal{A}(AEFD)=\mathcal{A}(EBCF)$. ومجموعهما $1800\,\mathrm{m}^2$ ، فلكل منهما :

   $$\displaystyle \dfrac{1800}{2}=900\,\mathrm{m}^2$$

4. $AEFD$ شبه منحرف قاعدتاه $AE=15$ و $DF=45$ وارتفاعه $30$ :

   $$\displaystyle \mathcal{A}=\dfrac{(15+45)}{2}\times30=30\times30=900\,\mathrm{m}^2\ \checkmark$$

5. $AE=x$ ، $CF=x$ ، $DF=60-x$. مساحة شبه المنحرف $AEFD$ :

   $$\displaystyle \dfrac{x+(60-x)}{2}\times30=\dfrac{60}{2}\times30=900\,\mathrm{m}^2$$

   لا تتوقف على $x$ : **كل ممر يمر من $O$ يقسم القطعة إلى جزأين متساويين**. وهذا يتفق مع التناظر المركزي.

**الفكرة :** برهانان : بالتناظر (دون حساب) وبالصيغة (بحساب). **انتبه :** هذا غير صحيح لممر لا يمر من $O$.
