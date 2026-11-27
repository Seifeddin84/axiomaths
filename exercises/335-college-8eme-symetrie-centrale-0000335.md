---
uid: "0000335"
school: "college"
level: "8eme"
section: null
chapter: "التناظر المركزي"
source: "Axiomaths"
title: "دائرتان متناظرتان"
country: "Tunisie"
year: 2026
professor: "Axiomaths"
difficulty: "Moyen"
points: null
tags: ["symetrie-centrale", "cercles", "distances"]
dressing: "deux cercles symétriques"
rung: 3
---

$I$ و $I'$ نقطتان حيث $II'=4\,\mathrm{cm}$ و $O$ منتصف $[II']$. $\mathcal{C}$ دائرة مركزها $I$ وشعاعها $3\,\mathrm{cm}$ ، و $\mathcal{C}'$ مناظرتها بالنسبة إلى $O$.

1. ابنِ الشكل. بين أن $\mathcal{C}'$ دائرة مركزها $I'$ وشعاعها $3\,\mathrm{cm}$.

2. الدائرتان $\mathcal{C}$ و $\mathcal{C}'$ تتقاطعان في نقطتين $M$ و $N$. بين أن $N$ مناظرة $M$ بالنسبة إلى $O$.

3. بين أن $IMI'N$ معين.

4. بين أن $(MN)$ عمودي على $(II')$.

---

## Solution

1. $O$ منتصف $[II']$ ، إذن $I'=S_O(I)$. ومناظرة دائرة مركزها $I$ وشعاعها $3\,\mathrm{cm}$ هي دائرة مركزها $S_O(I)=I'$ وشعاعها $3\,\mathrm{cm}$.

   ![Figure : دائرتان متناظرتان](/exercises/images/335-college-8eme-symetrie-centrale-0000335.png)

2. $M$ تنتمي إلى $\mathcal{C}$ و $\mathcal{C}'$. بما أن $M\in\mathcal{C}'$ فإن $S_O(M)$ تنتمي إلى $S_O(\mathcal{C}')=\mathcal{C}$ ؛ وبما أن $M\in\mathcal{C}$ فإن $S_O(M)\in S_O(\mathcal{C})=\mathcal{C}'$. إذن $S_O(M)$ تنتمي إلى $\mathcal{C}\cap\mathcal{C}'=\{M,N\}$. لكن $S_O(M)\neq M$ لأن $M\neq O$ (إذ $OI=2\,\mathrm{cm}<3\,\mathrm{cm}$ فالنقطة $O$ داخل $\mathcal{C}$ وليست عليها). إذن $\boxed{S_O(M)=N}$.

3. $IM=3\,\mathrm{cm}$ لأن $M\in\mathcal{C}$ ، و $I'M=3\,\mathrm{cm}$ لأن $M\in\mathcal{C}'$. وبالمثل $IN=I'N=3\,\mathrm{cm}$. إذن

   $$\displaystyle IM=MI'=I'N=NI=3\,\mathrm{cm}$$

   الرباعي $IMI'N$ أضلاعه الأربعة متقايسة : إنه **معين**.

4. المثلث $IMI'$ متقايس الضلعين رأسه $M$ ، و $O$ منتصف قاعدته $[II']$ ، فالمستقيم $(MO)$ عمودي على $(II')$. ولأن $O$ منتصف $[MN]$ فإن $N\in(MO)$ ، إذن $(MN)\perp(II')$.
