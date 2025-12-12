import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { Language } from '../../types';
import { Download, FileDown } from 'lucide-react';

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

const FileDownloadCard: React.FC<{ title: string; format: string; url: string; size?: string }> = ({ title, format, url, size }) => (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer" onClick={() => window.location.href = url}>
        <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                <FileDown className="w-6 h-6" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{title}</h3>
                <p className="text-xs text-gray-500 uppercase">{format} {size && `• ${size}`}</p>
            </div>
        </div>
        <button 
            className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all"
        >
            Download
        </button>
    </div>
);

const TypographyGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Typography' : '排版',
    },
    fonts: {
        title: lang === 'en' ? 'Typography Fonts' : '字体',
        images: [
            { src: 'https://i.postimg.cc/MTPtDkgV/En.png', label: lang === 'en' ? 'English standard fonts & Official website fonts' : '英文标准字体 & 官网字体' },
            { src: 'https://i.postimg.cc/rmngJ675/Cn.png', label: lang === 'en' ? 'Chinese standard font' : '中文标准字体' }
        ]
    },
    hierarchy: {
        title: lang === 'en' ? 'Typographic Hierarchy' : '排版层级',
        desc: lang === 'en'
            ? "The scale we use follows the 8px system, where type sizes are mainly divisible by eight. This mathematical approach to typography creates a clear hierarchy between headings, subheadings, and body text. When working on smaller designs, there is some flexibility in applying this system to ensure accurate and clear communication of information."
            : "我们采用 8px 系统，即字体大小主要能被 8 整除。这种数学化的排版方式在标题、副标题和正文之间建立了清晰的层级。在进行较小的设计时，可以灵活应用此系统，以确保信息的准确清晰传达。",
        images: [
            'https://i.postimg.cc/0NJJ4TM1/Re1.png',
            'https://i.postimg.cc/W4JJyBDx/Re2.png',
            'https://i.postimg.cc/LsZZWcqc/Re3.png'
        ]
    },
    scale: {
        title: lang === 'en' ? 'Typographic Scale' : '排版比例',
        desc: lang === 'en'
            ? "Maintaining a standardised typographic hierarchy and scale for these combined typesets is crucial. Such a typographic layout guarantees clarity and consistency across SHOPLINE's internal and external applications."
            : "保持标准化的排版层级和比例对于这些组合排版至关重要。这种排版布局保证了 SHOPLINE 内外部应用中的清晰度和一致性。",
        images: [
            'https://i.postimg.cc/HLGPFCZ8/ty1.png',
            'https://i.postimg.cc/9f3Nsj8F/ty2.png',
            'https://i.postimg.cc/hGF3NqyJ/ty3.png',
            'https://i.postimg.cc/TP8HBX7d/ty4.png'
        ]
    },
    downloads: {
        title: lang === 'en' ? 'Font Packs Download' : '字体包下载',
        files: [
            { title: 'Proxima Nova', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/geuS/Proxima_Nova.zip' },
            { title: 'Roboto', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/b9bI/Roboto_%281%29.zip' },
            { title: 'Open Sans / Noto Sans', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/UkMv/Open_Sans_%E6%80%9D%E6%BA%90%E4%BD%93_%281%29.zip' },
        ]
    },
    placement: {
        title: lang === 'en' ? 'Placement' : '布局位置',
        img: 'https://i.postimg.cc/L8rR08bx/Placement.png'
    }
  };

  return (
    <div className="space-y-20 animate-fade-in pb-20">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{content.intro.title}</h1>
      </section>

      {/* Fonts */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.fonts.title}</h2>
        <div className="flex flex-col gap-8 mt-6">
            {content.fonts.images.map((img, idx) => (
                <div key={idx} className="space-y-3">
                    <DownloadableImage src={img.src} alt={img.label} />
                    <p className="text-sm font-medium text-gray-500">{img.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Hierarchy */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.hierarchy.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.hierarchy.desc}</p>
        <div className="flex flex-col gap-10">
            {content.hierarchy.images.map((src, idx) => (
                <DownloadableImage key={idx} src={src} alt={`Hierarchy Example ${idx + 1}`} />
            ))}
        </div>
      </section>

      {/* Scale */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.scale.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.scale.desc}</p>
        <div className="flex flex-col gap-10">
            {content.scale.images.map((src, idx) => (
                <DownloadableImage key={idx} src={src} alt={`Scale Example ${idx + 1}`} />
            ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.downloads.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.downloads.files.map((file, i) => (
                <FileDownloadCard key={i} {...file} />
            ))}
        </div>
      </section>

      {/* Placement */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.placement.title}</h2>
        <DownloadableImage src={content.placement.img} alt="Placement" />
      </section>

    </div>
  );
};

export default TypographyGuidelines;