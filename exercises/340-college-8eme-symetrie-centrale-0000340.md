---
uid: "0000340"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "نقطتان متناظرتان على مستقيمين"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["symetrie-centrale", "construction", "droites"]
dressing: "construire un segment de milieu imposé"
rung: 5
---

$d$ و $\Delta$ مستقيمان و $O$ نقطة لا تنتمي إلى أي منهما. نريد بناء قطعة $[MN]$ منتصفها $O$ حيث $M\in d$ و $N\in\Delta$.

![Figure : نقطتان متناظرتان على مستقيمين](/exercises/images/340-college-8eme-symetrie-centrale-0000340-1.png)

1. نفترض أن $M$ و $N$ موجودتان. ما هي مناظرة $M$ بالنسبة إلى $O$ ؟ إلى أي مستقيم تنتمي ؟

2. ابنِ $d'$ مناظر $d$ بالنسبة إلى $O$.

3. استنتج بناء $N$ ثم $M$.

4. بين أن هذا البناء يحقق المطلوب.

5. ماذا يحدث إذا كان $\Delta$ يوازي $d$ ؟

---

## Solution

1. $O$ منتصف $[MN]$ معناه $N=S_O(M)$. وبما أن $M\in d$ فإن $N=S_O(M)\in S_O(d)=d'$. إذن $N$ تنتمي إلى $d'$ وإلى $\Delta$.

2. مناظر المستقيم يوازيه ويُعيَّن بنقطتين : نأخذ نقطتين من $d$ ونبني مناظريهما بالنسبة إلى $O$ ؛ المستقيم المار منهما هو $d'$.

3. $N$ هي نقطة تقاطع $d'$ و $\Delta$ ؛ ثم $M$ مناظرة $N$ بالنسبة إلى $O$.

   ![Figure : نقطتان متناظرتان على مستقيمين](/exercises/images/340-college-8eme-symetrie-centrale-0000340-2.png)

4. $M$ هي مناظرة $N$ بالنسبة إلى $O$ ، إذن $O$ منتصف $[MN]$. و $N\in d'=S_O(d)$ فمناظرها $M$ تنتمي إلى $S_O(d')=d$. و $N\in\Delta$ بالبناء. إذن $M\in d$ و $N\in\Delta$ و $O$ منتصف $[MN]$.

5. إذا كان $\Delta\parallel d$ فإن $d'\parallel d$ أيضا، إذن $d'\parallel\Delta$ :

   - إن كان $d'\neq\Delta$ : لا تقاطع، فلا يوجد حل.

   - إن كان $d'=\Delta$ : أي $O$ على نفس البعد من $d$ ومن $\Delta$ ، فكل نقطة $M$ من $d$ تصلح : يوجد عدد لا نهائي من الحلول.

   وفي حالة $\Delta$ غير موازٍ لـ $d$ (كما في الشكل) يوجد حل وحيد.

**الفكرة :** نحوّل شرط «$O$ منتصف $[MN]$» إلى انتماء $N$ إلى مستقيم معلوم ($d'$). **انتبه :** لا تنسَ مناقشة حالة التوازي.
