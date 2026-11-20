---
uid: "0000323"
school: "college"
level: "8eme"
section: null
chapter: "العمليات والحساب على الأعداد الكسرية"
source: "Axiomaths"
title: "تحدّي : جذاء كسور"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["defi", "fractions", "produit-telescopique", "encadrement"]
---

نعتبر العددين :

$$A=\dfrac{1}{2}\times\dfrac{3}{4}\times\dfrac{5}{6}\times\cdots\times\dfrac{99}{100}\qquad\qquad B=\dfrac{2}{3}\times\dfrac{4}{5}\times\dfrac{6}{7}\times\cdots\times\dfrac{100}{101}$$

(في كل منهما خمسون عاملا).

1. قارن $\dfrac{1}{2}$ و $\dfrac{2}{3}$ ، ثم $\dfrac{3}{4}$ و $\dfrac{4}{5}$. بين أنه من أجل كل عدد طبيعي فردي $n$ :

   $$\displaystyle \dfrac{n}{n+1}<\dfrac{n+1}{n+2}$$

2. استنتج أن $A<B$.

3. احسب $A\times B$.

4. استنتج أن $A\times A<\dfrac{1}{101}$ ، ثم أن $A<\dfrac{1}{10}$.

---

## Solution

1. نوحّد المقامات :

   $$\displaystyle \dfrac{1}{2}=\dfrac{3}{6}<\dfrac{4}{6}=\dfrac{2}{3}\qquad\qquad \dfrac{3}{4}=\dfrac{15}{20}<\dfrac{16}{20}=\dfrac{4}{5}$$

   وفي الحالة العامة، نكتب كل كسر على شكل $1$ ناقص كسر :

   $$\displaystyle \dfrac{n}{n+1}=1-\dfrac{1}{n+1}\qquad\qquad \dfrac{n+1}{n+2}=1-\dfrac{1}{n+2}$$

   :::property[مقلوبا عددين]
   إذا كان $0<u<v$ فإن $\dfrac{1}{u}>\dfrac{1}{v}$.
   :::

   $n+1<n+2$ ، إذن $\dfrac{1}{n+1}>\dfrac{1}{n+2}$ ، ومنه $1-\dfrac{1}{n+1}<1-\dfrac{1}{n+2}$ :

   $$\displaystyle \boxed{\dfrac{n}{n+1}<\dfrac{n+1}{n+2}}$$

2. عوامل $A$ هي $\dfrac{n}{n+1}$ من أجل $n=1,3,5,\ldots,99$ ، وعوامل $B$ هي $\dfrac{n+1}{n+2}$ لنفس القيم. من السؤال 1 كل عامل في $A$ أصغر من العامل المقابل في $B$ ، وكل العوامل موجبة. إذن :

   $$\displaystyle A<B$$

3. نضرب في الترتيب $A\times B$ ثم نختزل :

   $$\displaystyle A\times B=\dfrac{1}{2}\times\dfrac{2}{3}\times\dfrac{3}{4}\times\dfrac{4}{5}\times\cdots\times\dfrac{99}{100}\times\dfrac{100}{101}$$

   البسط في كل كسر يختزل مع مقام الكسر الذي قبله، ولا يبقى إلا البسط الأول والمقام الأخير :

   $$\displaystyle \boxed{A\times B=\dfrac{1}{101}}$$

4. $A>0$ و $A<B$ ، إذن $A\times A<A\times B=\dfrac{1}{101}$. و $\dfrac{1}{101}<\dfrac{1}{100}$ ، فـ :

   $$\displaystyle A\times A<\dfrac{1}{100}=\dfrac{1}{10}\times\dfrac{1}{10}$$

   لو كان $A\geq\dfrac{1}{10}$ لكان $A\times A\geq\dfrac{1}{10}\times\dfrac{1}{10}=\dfrac{1}{100}$ ، وهذا مستحيل. إذن $\boxed{A<\dfrac{1}{10}}$.

**الفكرة :** بدل حساب $A$ مباشرة نضربه في عدد قريب منه ($B$) فتنهار السلسلة بالاختزال. **انتبه :** المتباينة $A<B$ تحتاج إلى أن كل العوامل موجبة.
