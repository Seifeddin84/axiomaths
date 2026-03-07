'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavSection {
  title: string;
  path?: string;
  items?: { title: string; path: string }[];
}

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Lycée', 'Collège']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const navigation: NavSection[] = [
    {
      title: 'Lycée',
      items: [
        { title: '1ère Année', path: '/lycee/1ere' },
        { title: '2ème Année', path: '/lycee/2eme' },
        { title: '3ème Année', path: '/lycee/3eme' },
        { title: '4ème Année', path: '/lycee/4eme' },
      ],
    },
    {
      title: 'Collège',
      items: [
        { title: '7ème Année', path: '/college/7eme' },
        { title: '8ème Année', path: '/college/8eme' },
        { title: '9ème Année', path: '/college/9eme' },
      ],
    },
    { title: 'Recherche', path: '/recherche' },
    { title: 'Devoirs', path: '/devoirs' },
    {
      title: 'Ressources',
      items: [
        { title: 'Mathématiciens', path: '/resources/mathematicians' },
        { title: 'Liens Utiles', path: '/resources/useful-links' },
      ],
    },
  ];

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + '/');

  const isSectionActive = (section: NavSection) => {
    if (section.path) return isActive(section.path);
    return section.items?.some(item => isActive(item.path)) || false;
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto flex flex-col">
      {/* Mobile close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 md:hidden">
        <span className="text-sm font-bold text-gray-900 dark:text-white">Navigation</span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Fermer le menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex-1">
        <nav className="space-y-1">
          {navigation.map((section) => (
            <div key={section.title}>
              {section.items ? (
                <div>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-bold rounded-lg transition-colors ${
                      isSectionActive(section)
                        ? 'text-accent-600 dark:text-primary-400 bg-accent-50 dark:bg-primary-900/20'
                        : 'text-accent-600 dark:text-primary-400 hover:bg-accent-50 dark:hover:bg-primary-900/10'
                    }`}
                  >
                    <span>{section.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {expandedSections.includes(section.title) && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-800">
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={handleLinkClick}
                          className={`block pl-4 py-2 text-sm font-semibold rounded-r-lg transition-colors ${
                            isActive(item.path)
                              ? 'text-accent-700 dark:text-primary-300 bg-accent-50 dark:bg-primary-900/20 border-l-2 border-accent-500 dark:border-primary-500 -ml-[2px]'
                              : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-primary-400 hover:bg-accent-50 dark:hover:bg-primary-900/10'
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={section.path!}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-sm font-bold rounded-lg transition-colors ${
                    isActive(section.path!)
                      ? 'text-accent-600 dark:text-primary-400 bg-accent-50 dark:bg-primary-900/20'
                      : 'text-accent-600 dark:text-primary-400 hover:bg-accent-50 dark:hover:bg-primary-900/10'
                  }`}
                >
                  {section.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}