import Link from 'next/link';

interface ResourceLink {
  title: string;
  url: string;
  description: string;
  category: string;
}

const resources: ResourceLink[] = [
  // Cours et Tutoriels
  {
    title: "Khan Academy - Mathématiques",
    url: "https://fr.khanacademy.org/math",
    description: "Cours vidéo gratuits et exercices interactifs pour tous les niveaux",
    category: "Cours et Tutoriels"
  },
  {
    title: "Bibmath",
    url: "https://www.bibmath.net",
    description: "Cours, exercices et formulaires pour le lycée et l'université",
    category: "Cours et Tutoriels"
  },
  
  // Exercices et Problèmes
  {
    title: "Mathématiques Web",
    url: "https://www.mathematiques-web.fr",
    description: "Exercices corrigés du collège au lycée",
    category: "Exercices et Problèmes"
  },
  {
    title: "Xmaths",
    url: "http://xmaths.free.fr",
    description: "Cours et exercices pour le lycée",
    category: "Exercices et Problèmes"
  },
  {
    title: "Devoirat",
    url: "http://devoirat.net",
    description: "Cours et exercices pour le lycée",
    category: "Exercices et Problèmes"
  },
  {
    title: "Tunisie Collège",
    url: "https://www.tunisiecollege.net/",
    description: "Cours et exercices pour le collège",
    category: "Exercices et Problèmes"
  },
  {
    title: "Devoirs TN",
    url: "https://www.devoir.tn",
    description: "Cours et exercices pour le lycée et le collège",
    category: "Exercices et Problèmes"
  },
  {
    title: "Mathe Et Tiques",
    url: "https://www.maths-et-tiques.fr/index.php/cours-maths",
    description: "Cours et exercices collège et lycée français",
    category: "Exercices et Problèmes"
  },
  // Outils en ligne
  {
    title: "Desmos",
    url: "https://www.desmos.com/calculator",
    description: "Calculatrice graphique en ligne puissante et gratuite",
    category: "Outils en ligne"
  },
  {
    title: "GeoGebra",
    url: "https://www.geogebra.org",
    description: "Logiciel de mathématiques dynamiques pour la géométrie, l'algèbre et le traçage des courbes",
    category: "Outils en ligne"
  },
  {
    title: "Symbolab",
    url: "https://fr.symbolab.com",
    description: "Calculatrice mathématique avec résolution pas à pas",
    category: "Outils en ligne"
  },
  {
    title: "Wolfram Alpha",
    url: "https://www.wolframalpha.com",
    description: "Moteur de calcul computationnel",
    category: "Outils en ligne"
  },
  
  // Préparation aux examens
  {
    title: "Sujet Bac Tunisie",
    url: "https://www.bacweb.tn",
    description: "Annales et sujets corrigés du baccalauréat tunisien",
    category: "Préparation aux examens"
  },
  {
    title: "APMEP",
    url: "https://www.apmep.fr",
    description: "Association des professeurs de mathématiques - Annales et sujets",
    category: "Préparation aux examens"
  },
  
  // Culture mathématique
  {
    title: "Culture Math",
    url: "https://culturemath.ens.fr/",
    description: "Présente des sujets issus de la recherche, des idées importantes qui sont au cœur des mathématiques et de leur histoire,",
    category: "Culture mathématique"
  },
  {
    title: "Scientific American",
    url: "https://www.scientificamerican.com/math/",
    description: "Actualités des mathématiques",
    category: "Culture mathématique"
  },
  {
    title: "Quanta Magazine",
    url: "https://www.quantamagazine.org/",
    description: "Illuminating mathematics, physics, biology and computer science research through public service journalism.",
    category: "Culture mathématique"
  },
  {
    title: "Images des Mathématiques",
    url: "https://images.math.cnrs.fr",
    description: "Magazine de culture mathématique du CNRS",
    category: "Culture mathématique"
  },
  {
    title: "Numberphile",
    url: "https://www.youtube.com/user/numberphile",
    description: "Chaîne YouTube sur les mathématiques (en anglais)",
    category: "Culture mathématique"
  },
  {
    title: "3Blue1Brown",
    url: "https://www.youtube.com/c/3blue1brown",
    description: "Visualisations mathématiques exceptionnelles (en anglais)",
    category: "Culture mathématique"
  },
];

export default function UsefulLinksPage() {
  // Group resources by category
  const categories = [...new Set(resources.map(r => r.category))];
  const groupedResources = categories.reduce((acc, category) => {
    acc[category] = resources.filter(r => r.category === category);
    return acc;
  }, {} as Record<string, ResourceLink[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-900/30 border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-500 animate-pulse inline-block mr-2"></span>
            Ressources
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Liens Utiles
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-serif">
            Une sélection de ressources pour approfondir vos connaissances mathématiques
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                  {category}
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-purple-200 to-transparent dark:from-purple-800"></div>
              </div>

              {/* Links in this category */}
              <div className="grid md:grid-cols-2 gap-4">
                {groupedResources[category].map((resource) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 h-full hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-1">
                          {resource.title}
                        </h3>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="mt-4 text-xs font-mono text-purple-600 dark:text-purple-400 truncate">
                        {resource.url.replace('https://', '').replace('http://', '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Resources Link */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 p-8 border-4 border-purple-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                Grands Mathématiciens
              </h3>
              <p className="text-purple-100">
                Découvrez les mathématiciens qui ont marqué l'histoire
              </p>
            </div>
            <Link
              href="/resources/mathematicians"
              className="px-6 py-3 bg-white text-purple-600 font-black hover:bg-purple-50 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Explorer
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}