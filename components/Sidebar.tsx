import React from 'react';
import { SHOPLINE_BLUE, NAV_GROUPS, LOGO_URL } from '../constants';
import { Language, SectionId } from '../types';

interface SidebarProps {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
  lang: Language;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, lang, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-30 h-screen w-64 bg-[#f7f8fa] border-r border-gray-200 
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 pb-4">
          <img src={LOGO_URL} alt="SHOPLINE" className="h-8 w-auto object-contain" />
        </div>
        
        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          {NAV_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
               <div className="px-4 py-2">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                   {lang === 'en' ? group.titleEn : group.titleZh}
                 </p>
               </div>
               <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsOpen(false);
                        }}
                        className={`
                          w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all
                          ${isActive 
                            ? `bg-blue-50 text-[${SHOPLINE_BLUE}]` 
                            : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}
                        `}
                        style={{
                            color: isActive ? SHOPLINE_BLUE : undefined,
                            backgroundColor: isActive ? 'rgba(0, 97, 255, 0.08)' : undefined
                        }}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {lang === 'en' ? item.labelEn : item.labelZh}
                      </button>
                    </li>
                  );
                })}
               </ul>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-200 mt-auto">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} SHOPLINE
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
