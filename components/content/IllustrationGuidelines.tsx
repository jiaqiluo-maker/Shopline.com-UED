import React from 'react';
import { Language } from '../../types';
import { Download, FileDown, ExternalLink } from 'lucide-react';

interface Props {
  lang: Language;
}

// Helper to download images
const downloadUrl = async (url: string, name: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
        window.open(url, '_blank');
    }
};

const DownloadableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            <img src={src} alt={alt} className="w-full h-auto rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md" />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    const filename = src.split('/').pop() || 'image.png';
                    downloadUrl(src, filename);
                }}
                className="absolute top-4 right-4 p-2.5 bg-white text-gray-700 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-50 hover:text-blue-600 focus:opacity-100 transform scale-95 group-hover:scale-100"
                title="Download Image"
            >
                <Download className="w-5 h-5" />
            </button>
        </div>
    );
};

const ExternalResourceCard: React.FC<{ title: string; description: string; url: string }> = ({ title, description, url }) => (
    <div 
        onClick={() => window.open(url, '_blank')}
        className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                <ExternalLink className="w-6 h-6" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-700 transition-colors">{title}</h3>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
        <button 
            className="text-sm font-medium text-purple-600 bg-purple-50 px-4 py-2 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all"
        >
            Open
        </button>
    </div>
);

const IllustrationGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Illustration' : '插图',
        desc: lang === 'en' 
            ? "SHOPLINE designers use a clear and engaging illustration style to help merchants quickly understand how different features work and how to use them effectively."
            : "SHOPLINE 设计师采用清晰且引人入胜的插图风格，帮助商家快速了解不同功能的工作原理以及如何有效地使用它们。"
    },
    principles: {
        title: lang === 'en' ? 'Key Principles' : '关键原则',
        items: [
            {
                title: lang === 'en' ? 'Precision' : '精准',
                desc: lang === 'en' 
                    ? "Illustrations accurately represent and enhance a message's vividness. They offer usage scenarios, clarity and guidance for the next steps, enabling merchants to develop a deeper understanding."
                    : "插图准确地呈现并增强了信息的生动性。它们提供了使用场景、清晰度以及下一步的指引，使商家能够建立更深层次的理解。"
            },
            {
                title: lang === 'en' ? 'Consistent style' : '风格一致',
                desc: lang === 'en'
                    ? "All illustrations should follow the same visual language and form a cohesive series. Inconsistencies can be distracting and confusing."
                    : "所有插图都应遵循相同的视觉语言并形成连贯的系列。不一致可能会导致分心和困惑。"
            },
            {
                title: lang === 'en' ? 'Focus' : '聚焦',
                desc: lang === 'en'
                    ? "Each illustration should convey one concept only. This makes the story easier to understand and allows merchants to intuitively grasp the necessary actions."
                    : "每幅插图应仅传达一个概念。这使得故事更容易理解，并允许商家直观地掌握必要的操作。"
            }
        ]
    },
    scenarios: {
        shopping: {
            title: lang === 'en' ? 'Shopping' : '购物场景',
            desc: lang === 'en'
                ? "Colourful illustrations are predominantly used in scenarios that promote and guide businesses."
                : "彩色插图主要用于推广和引导业务的场景。",
            img: "https://i.postimg.cc/D0Cnd6hj/Construction8.png"
        },
        working: {
            title: lang === 'en' ? 'Working' : '工作场景',
            desc: lang === 'en'
                ? "Black and white illustrations with monochrome accents are primarily used to showcase SHOPLINE's corporate culture. They emphasise a simple, open and efficient style of operation."
                : "带有单色点缀的黑白插图主要用于展示 SHOPLINE 的企业文化。它们强调简单、开放和高效的运营风格。",
            img: "https://i.postimg.cc/Hn8BBs1G/Frame_35574828.png"
        }
    },
    system: {
        title: lang === 'en' ? 'Illustration System' : '插图体系',
        desc: lang === 'en'
            ? "SHOPLINE designers have developed a system of character illustration elements. For more details, find out more here:"
            : "SHOPLINE 设计师开发了一套人物插图元素系统。欲了解更多详情，请查看：",
        link: "https://www.figma.com/file/1esk0I8zst4htkdsJ0AonL/Illustration-Kit?node-id=585%3A4",
        img: "https://i.postimg.cc/59QhPfms/头.png"
    },
    expression: {
        title: lang === 'en' ? 'Character Expression' : '人物表情',
        img: "https://i.postimg.cc/kgJhdCxR/Frame_35574856.png"
    }
  };

  return (
    <div className="space-y-20 animate-fade-in pb-20">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{content.intro.title}</h1>
        <p className="text-xl text-gray-500 max-w-4xl leading-relaxed">
          {content.intro.desc}
        </p>
      </section>

      {/* Key Principles */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.principles.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {content.principles.items.map((item, i) => (
                <div key={i} className="space-y-3 p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="space-y-12">
         {/* Shopping */}
         <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.scenarios.shopping.title}</h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">{content.scenarios.shopping.desc}</p>
            <DownloadableImage src={content.scenarios.shopping.img} alt="Shopping Illustration" />
         </div>

         {/* Working */}
         <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.scenarios.working.title}</h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">{content.scenarios.working.desc}</p>
            <DownloadableImage src={content.scenarios.working.img} alt="Working Illustration" />
         </div>
      </section>

      {/* Illustration System */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.system.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.system.desc}</p>
        
        <div className="max-w-md">
            <ExternalResourceCard 
                title={lang === 'en' ? 'Illustration Kit' : '插图套件'} 
                description="Figma"
                url={content.system.link}
            />
        </div>

        <div className="pt-4">
            <DownloadableImage src={content.system.img} alt="Character Elements" />
        </div>
      </section>

      {/* Character Expression */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.expression.title}</h2>
        <DownloadableImage src={content.expression.img} alt="Character Expressions" />
      </section>

    </div>
  );
};

export default IllustrationGuidelines;