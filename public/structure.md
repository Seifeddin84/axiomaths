@Seifeddin84 ➜ /workspaces/axiomaths (main) $ tree -L 5 -I 'node_modules|.next|.git'
.
├── README.md
├── axiomaths@0.1.0
├── blog
│   └── euler-identity.md
├── create_exercise.py
├── eslint.config.mjs
├── exercises
│   ├── college-7eme-geometrie-0000002.md
│   ├── college-9eme-calcul-0000016.md
│   ├── lycee-1ere-calcul-0000033.md
│   ├── lycee-1ere-lineaire-0000015.md
│   ├── lycee-1ere-lineaire-0000020.md
│   ├── lycee-1ere-lineaire-0000021.md
│   ├── lycee-1ere-vecteurs-0000032.md
│   ├── lycee-1ere-vecteurs-0000034.md
│   ├── lycee-2eme-sciences-equations-0000007.md
│   ├── lycee-2eme-sciences-homothetie-0000019.md
│   ├── lycee-2eme-sciences-homothetie-0000035.md
│   ├── lycee-2eme-sciences-homothetie-0000036.md
│   ├── lycee-2eme-sciences-homothetie-0000037.md
│   ├── lycee-2eme-sciences-second-degré-0000010.md
│   ├── lycee-2eme-sciences-second-degré-0000011.md
│   ├── lycee-2eme-sciences-second-degré-0000012.md
│   ├── lycee-2eme-sciences-second-degré-0000013.md
│   ├── lycee-2eme-sciences-suites-0000017.md
│   ├── lycee-2eme-sciences-suites-0000018.md
│   ├── lycee-2eme-sciences-suites-0000022.md
│   ├── lycee-2eme-sciences-suites-0000023.md
│   ├── lycee-2eme-sciences-suites-0000024.md
│   ├── lycee-2eme-sciences-suites-0000025.md
│   ├── lycee-2eme-sciences-suites-0000026.md
│   ├── lycee-2eme-sciences-suites-0000027.md
│   ├── lycee-2eme-sciences-suites-0000028.md
│   ├── lycee-2eme-sciences-suites-0000029.md
│   ├── lycee-2eme-sciences-suites-0000030.md
│   ├── lycee-2eme-sciences-trigonometrie-0000014.md
│   ├── lycee-4eme-informatique-complexe-0000003.md
│   ├── lycee-4eme-informatique-complexe-0000004.md
│   ├── lycee-4eme-informatique-complexe-0000005.md
│   ├── lycee-4eme-informatique-complexe-0000006.md
│   ├── lycee-4eme-math-fonctions-reciproques-0000031.md
│   ├── lycee-4eme-math-intégrales-0000009.md
│   ├── lycee-4eme-math-nombres-complexes-0000008.md
│   └── lycee-4eme-maths-similitude-0000001.md
├── mathematicians
│   ├── alexandergrothendieck.md
│   ├── carlfriedrichgauss.md
│   ├── hugosteinhaus.md
│   └── leonhardeuler.md
├── next
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── apple-touch-icon.png
│   ├── blog
│   │   └── images
│   │       ├── euler-identity.png
│   │       └── euler.jpg
│   ├── exams
│   │   ├── lycee-2eme-eco-devoir-controle-3-00001.pdf
│   │   └── lycee-2eme-eco-devoir-controle-3-00001.yaml
│   ├── exercises
│   │   └── images
│   │       ├── lycee-2eme-sciences-homothetie-0000019.png
│   │       ├── lycee-2eme-sciences-homothetie-0000037.png
│   │       ├── lycee-4eme-informatique-complexe-0000004.png
│   │       ├── lycee-4eme-informatique-complexe-0000005.png
│   │       └── lycee-4eme-math-fonctions-reciproques-0000031.png
│   ├── favicon.png
│   ├── fiches
│   │   └── trigonometrie-2eme-sciences.pdf
│   ├── file.svg
│   ├── full site structure.txt
│   ├── globe.svg
│   ├── icon.png
│   ├── logo.png
│   ├── mathematicians
│   │   ├── euler.jpg
│   │   ├── gauss.jpg
│   │   └── steinhaus.jpg
│   ├── next.svg
│   ├── structure.md
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── api
│   │   │   └── exercises
│   │   │       └── route.ts
│   │   ├── blog
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── college
│   │   │   ├── [level]
│   │   │   │   ├── [chapter]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── devoirs
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── layout.tsx.backup
│   │   ├── lycee
│   │   │   ├── [level]
│   │   │   │   ├── [section]
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── page.tsx.backup
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── page.tsx.backup
│   │   ├── recherche
│   │   │   └── page.tsx
│   │   └── resources
│   │       ├── mathematicians
│   │       │   ├── [slug]
│   │       │   └── page.tsx
│   │       └── useful-links
│   │           └── page.tsx
│   ├── components
│   │   ├── BlogMarkdownRenderer.tsx
│   │   ├── DevoirsSearchTable.tsx
│   │   ├── ExerciseTable.tsx
│   │   ├── ExerciseTableView.tsx
│   │   ├── ExercisesView.tsx
│   │   ├── HomeSearchBar.tsx
│   │   ├── MathRenderer.tsx
│   │   ├── MathematicianPortrait.tsx
│   │   ├── Navbar.tsx
│   │   ├── PDFGenerator.tsx
│   │   ├── SearchTable.tsx
│   │   └── Sidebar.tsx
│   ├── config
│   │   └── themes.ts
│   ├── context
│   │   ├── ExerciseBasketContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks
│   │   └── useActiveTheme.ts
│   ├── lib
│   │   ├── blogReader.ts
│   │   ├── cheatsheets.ts
│   │   ├── exams.ts
│   │   ├── exerciseParser.ts
│   │   ├── fileReader.ts
│   │   └── mathematicianReader.ts
│   ├── types
│   │   ├── blog.ts
│   │   └── exercise.ts
│   └── typesmkdir
├── tailwind.config.js
├── tailwind.config.js.backup
└── tsconfig.json

37 directories, 122 files