---
uid: "0000277"
school: "college"
level: "8eme"
section: null
chapter: "العمليات والحساب على الأعداد الكسرية"
source: "Axiomaths"
title: "مجموع تسعة أعداد كسرية"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["fractions", "somme-telescopique", "decomposition"]
---

نعتبر المجموع :

$$S=\dfrac{1}{2}+\dfrac{1}{6}+\dfrac{1}{12}+\dfrac{1}{20}+\dfrac{1}{30}+\dfrac{1}{42}+\dfrac{1}{56}+\dfrac{1}{72}+\dfrac{1}{90}$$

1. تحقق أن $\dfrac{1}{2}=1-\dfrac{1}{2}$ ، $\dfrac{1}{6}=\dfrac{1}{2}-\dfrac{1}{3}$ ، $\dfrac{1}{12}=\dfrac{1}{3}-\dfrac{1}{4}$ و $\dfrac{1}{20}=\dfrac{1}{4}-\dfrac{1}{5}$.

2. نقبل أن $\dfrac{1}{n\times(n+1)}=\dfrac{1}{n}-\dfrac{1}{n+1}$ لكل عدد صحيح طبيعي $n$ غير معدوم. اكتب كل حد من $S$ على شكل فرق عددين كسريين. [لاحظ أن $6=2\times3$ و $12=3\times4$]

3. استنتج أن $S=\dfrac{9}{10}$.

4. احسب $T=\dfrac{1}{6}+\dfrac{1}{12}+\dfrac{1}{20}+\dfrac{1}{30}+\dfrac{1}{42}+\dfrac{1}{56}+\dfrac{1}{72}+\dfrac{1}{90}$.

5. احسب المجموع $\dfrac{1}{1\times2}+\dfrac{1}{2\times3}+\dfrac{1}{3\times4}+\cdots+\dfrac{1}{99\times100}$.

---

## Solution

1.
   $$\displaystyle 1-\dfrac{1}{2}=\dfrac{2}{2}-\dfrac{1}{2}=\dfrac{1}{2}\qquad\dfrac{1}{2}-\dfrac{1}{3}=\dfrac{3}{6}-\dfrac{2}{6}=\dfrac{1}{6}$$

   $$\displaystyle \dfrac{1}{3}-\dfrac{1}{4}=\dfrac{4}{12}-\dfrac{3}{12}=\dfrac{1}{12}\qquad\dfrac{1}{4}-\dfrac{1}{5}=\dfrac{5}{20}-\dfrac{4}{20}=\dfrac{1}{20}$$

2. المقامات هي $1\times2$ ، $2\times3$ ، $3\times4$ ، $\dots$ ، $9\times10$ :

   $$\displaystyle \dfrac{1}{2}=1-\dfrac{1}{2}\qquad\dfrac{1}{6}=\dfrac{1}{2}-\dfrac{1}{3}\qquad\dfrac{1}{12}=\dfrac{1}{3}-\dfrac{1}{4}$$

   $$\displaystyle \dfrac{1}{20}=\dfrac{1}{4}-\dfrac{1}{5}\qquad\dfrac{1}{30}=\dfrac{1}{5}-\dfrac{1}{6}\qquad\dfrac{1}{42}=\dfrac{1}{6}-\dfrac{1}{7}$$

   $$\displaystyle \dfrac{1}{56}=\dfrac{1}{7}-\dfrac{1}{8}\qquad\dfrac{1}{72}=\dfrac{1}{8}-\dfrac{1}{9}\qquad\dfrac{1}{90}=\dfrac{1}{9}-\dfrac{1}{10}$$

3. نعوّض كل حد بفرقه :

   $$\displaystyle S=\left(1-\dfrac{1}{2}\right)+\left(\dfrac{1}{2}-\dfrac{1}{3}\right)+\left(\dfrac{1}{3}-\dfrac{1}{4}\right)+\cdots+\left(\dfrac{1}{9}-\dfrac{1}{10}\right)$$

   $$\displaystyle S=1-\dfrac{1}{2}+\dfrac{1}{2}-\dfrac{1}{3}+\dfrac{1}{3}-\dfrac{1}{4}+\cdots+\dfrac{1}{9}-\dfrac{1}{10}$$

   كل عدد كسري يظهر مرتين بإشارتين متعاكستين فيُحذف، ولا يبقى إلا الحد الأول والحد الأخير :

   $$\displaystyle S=1-\dfrac{1}{10}=\dfrac{9}{10}$$

4. $T$ هو $S$ بعد حذف الحد الأول $\dfrac{1}{2}$ :

   $$\displaystyle T=S-\dfrac{1}{2}=\dfrac{9}{10}-\dfrac{5}{10}=\dfrac{4}{10}=\dfrac{2}{5}$$

5. نفس الطريقة : المجموع هو $1-\dfrac{1}{100}$ :

   $$\displaystyle \dfrac{1}{1\times2}+\cdots+\dfrac{1}{99\times100}=1-\dfrac{1}{100}=\dfrac{99}{100}$$

**الفكرة :** كتابة كل حد على شكل فرق تجعل الحدود تُحذف مثنى مثنى (مجموع تلسكوبي).

**انتبه :** لا ننسى الحد الأول $1$ ولا الحد الأخير $-\dfrac{1}{10}$ اللذين لا يُحذفان.
