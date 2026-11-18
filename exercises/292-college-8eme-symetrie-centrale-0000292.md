---
uid: "0000292"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "تركيب : دائرة ومستطيل"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "symetrie-axiale", "cercle", "rectangle", "angles", "synthese"]
---

$\mathcal{C}$ دائرة مركزها $O$ وشعاعها $3\,\mathrm{cm}$ و $[AB]$ قطر لها. $M$ نقطة من $\mathcal{C}$ حيث $\widehat{AOM}=40^\circ$ ، $N$ مناظرة $M$ بالنسبة إلى $(AB)$ ، و $M'$ و $N'$ مناظرتا $M$ و $N$ بالنسبة إلى $O$.

1. ابنِ الشكل. بين أن $N$ و $M'$ و $N'$ تنتمي إلى $\mathcal{C}$.

2. احسب $\widehat{MON}$.

3. بين أن $MNM'N'$ مستطيل.

4. احسب $\widehat{OMN}$ و $\widehat{OMN'}$ ، ثم تحقق أن $\widehat{NMN'}=90^\circ$.

5. بين أن $(AB)$ محور تناظر للمستطيل $MNM'N'$.

---

## Solution

1.
   :::property[التناظر يحفظ الأطوال]
   $O$ تنتمي إلى $(AB)$ ، فمناظرتها بالنسبة إلى $(AB)$ هي $O$ نفسها. إذن $\boxed{ON=OM=3\,\mathrm{cm}}$.
   :::

   والتناظر المركزي يحفظ الأطوال أيضا ومركزه $O$ : $OM'=OM=3\,\mathrm{cm}$ و $ON'=ON=3\,\mathrm{cm}$. النقاط $N$ و $M'$ و $N'$ تبعد $3\,\mathrm{cm}$ عن $O$ : إنها تنتمي إلى $\mathcal{C}$.

   ![Figure : تركيب : دائرة ومستطيل](/exercises/images/292-college-8eme-symetrie-centrale-0000292.png)

2. التناظر المحوري يحفظ قيس الزوايا، فـ $\widehat{AON}=\widehat{AOM}=40^\circ$. و $M$ و $N$ على جهتين مختلفتين من $(AB)$ ، إذن :

   $$\displaystyle \widehat{MON}=40^\circ+40^\circ=80^\circ$$

3.
   :::property[قطرا متوازي الأضلاع]
   رباعي قطراه لهما نفس المنتصف هو متوازي أضلاع ؛ وإذا كان قطراه متقايسين فهو **مستطيل**.
   :::

   قطرا $MNM'N'$ هما $[MM']$ و $[NN']$. $O$ منتصف $[MM']$ لأن $M'=S_O(M)$ ، و $O$ منتصف $[NN']$ لأن $N'=S_O(N)$ : نفس المنتصف. و $MM'=2\times3=6\,\mathrm{cm}=NN'$ (قطران للدائرة) : القطران متقايسان. إذن $MNM'N'$ مستطيل.

4. المثلث $OMN$ متقايس الضلعين رأسه $O$ وزاويته في الرأس $80^\circ$ :

   $$\displaystyle \widehat{OMN}=\dfrac{180^\circ-80^\circ}{2}=50^\circ$$

   $N$ و $O$ و $N'$ على استقامة واحدة، إذن $\widehat{MON'}=180^\circ-80^\circ=100^\circ$. المثلث $OMN'$ متقايس الضلعين رأسه $O$ :

   $$\displaystyle \widehat{OMN'}=\dfrac{180^\circ-100^\circ}{2}=40^\circ$$

   و $O$ داخل الزاوية $\widehat{NMN'}$ ، إذن $\widehat{NMN'}=50^\circ+40^\circ=90^\circ$ : زاوية قائمة كما في كل مستطيل.

5. $N=S_{(AB)}(M)$ ، فـ $(AB)$ هو محور القطعة $[MN]$. التناظر المركزي $S_O$ يحوّل $(AB)$ إلى نفسه (مستقيم يمر من $O$) ، و $M$ إلى $M'$ و $N$ إلى $N'$ ؛ فيحوّل محور $[MN]$ إلى محور $[M'N']$. إذن $(AB)$ هو أيضا محور $[M'N']$. وهكذا $S_{(AB)}$ يبدّل $M$ و $N$ ، ويبدّل $M'$ و $N'$ : **المستطيل ينطبق على نفسه**، فـ $(AB)$ محور تناظره.

**الفكرة :** للمستطيل مركز تناظر ومحوران : $O$ ، و $(AB)$ ، والمستقيم العمودي عليه في $O$. **انتبه :** قارن مع تمرين المراكز والمحاور (متوازي الأضلاع العادي لا محور له).
