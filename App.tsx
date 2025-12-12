import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LogoGuidelines from './components/content/LogoGuidelines';
import ColorGuidelines from './components/content/ColorGuidelines';
import TypographyGuidelines from './components/content/TypographyGuidelines';
import SubBrandSymbolGuidelines from './components/content/SubBrandSymbolGuidelines';
import SubBrandLogoGuidelines from './components/content/SubBrandLogoGuidelines';
import GraphicDeviceGuidelines from './components/content/GraphicDeviceGuidelines';
import PhotographyGuidelines from './components/content/PhotographyGuidelines';
import IllustrationGuidelines from './components/content/IllustrationGuidelines';
import { Language, SectionId } from './types';
import { Image } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('logo');
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese as per request context
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'logo':
        return <LogoGuidelines lang={lang} />;
      case 'color':
        return <ColorGuidelines lang={lang} />;
      case 'typography':
        return <TypographyGuidelines lang={lang} />;
      case 'wordmark-logo':
        return <SubBrandLogoGuidelines lang={lang} />;
      case 'wordmark-symbol':
        return <SubBrandSymbolGuidelines lang={lang} />;
      case 'graphics':
        return <GraphicDeviceGuidelines lang={lang} />;
      case 'photography':
        return <PhotographyGuidelines lang={lang} />;
      case 'illustration':
        return <IllustrationGuidelines lang={lang} />;
      default:
        return <LogoGuidelines lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        lang={lang}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header 
            lang={lang} 
            setLang={setLang} 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="flex-1 overflow-y-auto bg-white scroll-smooth">
            <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16 mb-20">
                {renderContent()}
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;