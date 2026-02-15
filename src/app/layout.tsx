import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ExerciseBasketProvider } from '@/context/ExerciseBasketContext';

export const metadata = {
  title: 'Axiomaths - Exercices de mathématiques',
  description: 'Collection complète d\'exercices de mathématiques pour le collège et le lycée tunisien',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Fonts - Standard fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&family=Open+Sans:wght@400;600;700;800&family=Lato:wght@400;700;900&family=Montserrat:wght@400;600;700;900&family=Poppins:wght@400;600;700;900&family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />

        {/* Latin Modern Roman (True Computer Modern) */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Satoshi Font - Via CDN */}
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" 
          rel="stylesheet"
        />
        
        {/* Optimistic Display - Via CDN (if available) or use fallback */}
        {/* Note: Optimistic Display is a commercial font, may need local files */}
      </head>
      <body className="antialiased font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ExerciseBasketProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Top Navbar - Orange accent */}
            <Navbar />
            
            <div className="flex">
              {/* Left Sidebar - Collapsible */}
              <Sidebar />
              
              {/* Main Content */}
              <main className="flex-1 min-h-screen">
                {children}
              </main>
            </div>
          </div>
        </ExerciseBasketProvider>
      </body>
    </html>
  );
}