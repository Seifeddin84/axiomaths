---
uid: "0000273"
school: "college"
level: "8eme"
section: null
chapter: "العمليات والحساب على الأعداد الكسرية"
source: "Axiomaths"
title: "تفكيك ومقارنة"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["fractions", "factorisation", "comparaison", "expressions-litterales"]
---

$a$ و $b$ عددان كسريان. نعتبر $P=a\times b+a$ و $Q=a\times b+b$.

1. فكّك $P$ و $Q$ إلى جذاءين.

2. احسب $P$ و $Q$ من أجل $a=\dfrac{4}{3}$ و $b=\dfrac{1}{3}$ ثم قارنهما.

3. بين أن $P-Q=a-b$.

4. استنتج أنه إذا كان $a>b$ فإن $P>Q$ ، وإذا كان $a<b$ فإن $P<Q$.

5. قارن $P$ و $Q$ من أجل $a=-\dfrac{2}{3}$ و $b=-\dfrac{1}{2}$ دون حساب $P$ و $Q$ ، ثم تحقق بالحساب.

---

## Solution

1.
   :::property[التفكيك إلى جذاء]
   نبحث عن العامل المشترك : $\boxed{k\times x+k\times y=k\times(x+y)}$.
   :::

   في $P=a\times b+a\times1$ العامل المشترك هو $a$ ، وفي $Q=a\times b+b\times1$ العامل المشترك هو $b$ :

   $$\displaystyle P=a\times(b+1)\qquad\qquad Q=b\times(a+1)$$

2. نعوّض :

   $$\displaystyle P=\dfrac{4}{3}\times\left(\dfrac{1}{3}+1\right)=\dfrac{4}{3}\times\dfrac{4}{3}=\dfrac{16}{9}$$

   $$\displaystyle Q=\dfrac{1}{3}\times\left(\dfrac{4}{3}+1\right)=\dfrac{1}{3}\times\dfrac{7}{3}=\dfrac{7}{9}$$

   للعددين نفس المقام $9$ و $16>7$ ، إذن $\boxed{P>Q}$.

3. نطرح، وعند حذف الأقواس المسبوقة بعلامة $(-)$ تتغير علامات ما بداخلها :

   $$\displaystyle P-Q=(a\times b+a)-(a\times b+b)=a\times b+a-a\times b-b$$

   الحدان $a\times b$ و $-a\times b$ يختزلان :

   $$\displaystyle \boxed{P-Q=a-b}$$

   :::property[المقارنة بالفرق]
   $\boxed{x>y}$ يعني أن $\boxed{x-y>0}$.
   :::

4. $P-Q=a-b$. إذا كان $a>b$ فإن $a-b>0$ ، إذن $P-Q>0$ أي $P>Q$. وإذا كان $a<b$ فإن $a-b<0$ ، إذن $P-Q<0$ أي $P<Q$.

5. نقارن $a$ و $b$ أولا بتوحيد المقامين :

   $$\displaystyle a=-\dfrac{2}{3}=-\dfrac{4}{6}\qquad b=-\dfrac{1}{2}=-\dfrac{3}{6}$$

   $-4<-3$ ، إذن $a<b$ ، ومن السؤال 4 : $\boxed{P<Q}$. التحقق بالحساب :

   $$\displaystyle P=\left(-\dfrac{2}{3}\right)\times\left(-\dfrac{1}{2}+1\right)=-\dfrac{2}{3}\times\dfrac{1}{2}=-\dfrac{1}{3}=-\dfrac{2}{6}$$

   $$\displaystyle Q=\left(-\dfrac{1}{2}\right)\times\left(-\dfrac{2}{3}+1\right)=-\dfrac{1}{2}\times\dfrac{1}{3}=-\dfrac{1}{6}$$

   و $-2<-1$ ، فعلا $P<Q$.

**الفكرة :** لمقارنة عبارتين نطرح إحداهما من الأخرى : إشارة الفرق تكفي، ولا حاجة لحساب كل منهما.
