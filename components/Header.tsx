import React from 'react';
import { Globe, Menu } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, toggleSidebar }) => {
  const t = TRANSLATIONS[lang];

  const handleLangSwitch = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-md lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={handleLangSwitch}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
        >
          <Globe className="w-4 h-4" />
          {t.switchLang}
        </button>
      </div>
    </header>
  );
};

export default Header;