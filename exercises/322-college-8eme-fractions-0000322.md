---
uid: "0000322"
school: "college"
level: "8eme"
section: null
chapter: "العمليات والحساب على الأعداد الكسرية"
source: "Axiomaths"
title: "تركيب: قائمة أعداد تتكرر"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Difficile"
points: null
tags: ["fractions", "recurrence", "decouverte-de-regularite"]
dressing: "liste de nombres qui se répète"
rung: 5
---

نعتبر قائمة الأعداد $a_1,\ a_2,\ a_3,\ \dots$ المعرّفة كما يلي : $a_1=\dfrac{1}{2}$ وكل عدد، ابتداء من الثاني، يُحسب من العدد الذي يسبقه بالقاعدة : $a_{n+1}=\dfrac{1}{1-a_n}$. أي أن $a_2=\dfrac{1}{1-a_1}$ و $a_3=\dfrac{1}{1-a_2}$ وهكذا.

1. احسب $a_2$ و $a_3$ و $a_4$ و $a_5$.

2. ماذا تلاحظ ؟

3. احسب $a_1+a_2+a_3$ و $a_1\times a_2\times a_3$.

4. احسب $a_{100}$ و $a_{2027}$.

5. احسب المجموع $a_1+a_2+a_3+\cdots+a_{100}$. [جمّع الحدود ثلاثة ثلاثة]

---

## Solution

1.
   $$\displaystyle a_2=\dfrac{1}{1-\dfrac{1}{2}}=\dfrac{1}{\dfrac{1}{2}}=2$$

   $$\displaystyle a_3=\dfrac{1}{1-2}=\dfrac{1}{-1}=-1$$

   $$\displaystyle a_4=\dfrac{1}{1-(-1)}=\dfrac{1}{2}$$

   $$\displaystyle a_5=\dfrac{1}{1-\dfrac{1}{2}}=2$$

2. نلاحظ أن $a_4=a_1$ و $a_5=a_2$. كل عدد يُحسب من العدد الذي يسبقه فقط، إذن بعد $a_4=a_1$ نعيد نفس الحسابات ونجد نفس الأعداد. القائمة تتكرر كل $3$ أعداد :

   $$\displaystyle \dfrac{1}{2}\ ,\ 2\ ,\ -1\ ,\ \dfrac{1}{2}\ ,\ 2\ ,\ -1\ ,\ \dfrac{1}{2}\ ,\ 2\ ,\ -1\ ,\ \dots$$

3.
   $$\displaystyle a_1+a_2+a_3=\dfrac{1}{2}+2-1=\dfrac{1}{2}+1=\dfrac{3}{2}$$

   $$\displaystyle a_1\times a_2\times a_3=\dfrac{1}{2}\times2\times(-1)=-1$$

4. نقسم الرتبة على $3$ :

   :::property[تكرار القائمة]
   إذا كان باقي قسمة $n$ على $3$ هو $1$ فإن $a_n=a_1$ ، وإذا كان $2$ فإن $a_n=a_2$ ، وإذا كان $0$ فإن $a_n=a_3$.
   :::

   $$\displaystyle 100=3\times33+1\quad\Rightarrow\quad a_{100}=a_1=\dfrac{1}{2}$$

   $$\displaystyle 2027=3\times675+2\quad\Rightarrow\quad a_{2027}=a_2=2$$

5. الأعداد من $a_1$ إلى $a_{99}$ تكوّن $99\div3=33$ مجموعة من ثلاثة أعداد، ومجموع كل مجموعة $\dfrac{3}{2}$ :

   $$\displaystyle a_1+\cdots+a_{99}=33\times\dfrac{3}{2}=\dfrac{99}{2}$$

   ويبقى الحد $a_{100}=\dfrac{1}{2}$ :

   $$\displaystyle a_1+\cdots+a_{100}=\dfrac{99}{2}+\dfrac{1}{2}=\dfrac{100}{2}=50$$

**الفكرة :** عندما تتكرر القائمة، نعوّض الحساب الطويل بقسمة الرتبة على طول الدورة.

**انتبه :** $2027$ لا يقبل القسمة على $3$ ؛ نعتمد على الباقي لا على الحاصل.
