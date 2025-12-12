import React from 'react';
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

const SubBrandSymbolGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Sub-brand Symbol' : '子品牌符号',
        desc: lang === 'en' 
            ? "Our brand and product logos are clear, impactful and easily recognisable. Graphic Icons primarily serve as launch icons for mobile apps, conveying the functionality of the respective brands while emphasising their connection to the masterbrand."
            : "我们的品牌和产品标志清晰、有影响力且易于识别。图形图标主要用作移动应用程序的启动图标，在传达各自品牌功能的同时，强调其与主品牌的联系。"
    },
    basicNorms: {
        title: lang === 'en' ? 'Basic Norms' : '基本规范',
        desc: lang === 'en'
            ? "Currently, sub-brands have adopted the following styles:"
            : "目前，子品牌采用了以下风格：",
        list: lang === 'en' ? [
            "Showcasing strong alignment with the masterbrand of SHOPLINE, exhibiting a form that closely aligns with the masterbrand's logo.",
            "Highlighting the functions and characteristics of the sub-brand, with a corner mark indicating its association with the masterbrand."
        ] : [
            "展示与 SHOPLINE 主品牌的强一致性，呈现出与主品牌标志紧密结合的形式。",
            "突出子品牌的功能和特性，并以角标形式表明其与主品牌的关联。"
        ],
        img: 'https://i.postimg.cc/t4qCQ01Z/SHOPLINE_POS_logo规范.png',
        caption: lang === 'en' 
            ? "The POS symbol is a sub-brand graphic identity based on an extension of the masterbrand."
            : "POS 符号是基于主品牌延伸的子品牌图形标识。"
    },
    symbolUsage: {
        title: lang === 'en' ? 'Symbol Usage' : '符号使用',
        desc: lang === 'en'
            ? "The first usage scenario, the symbol presentation method needs to follow these guidelines:"
            : "在第一种使用场景中，符号的呈现方式需遵循以下准则：",
        list: lang === 'en' ? [
            "Positioned at the lower right oblique angle of about 45 degrees.",
            "The content expression needs to be a simple and flat silhouette representation.",
            "The colour is based on the main brand colour extension."
        ] : [
            "位于右下角约 45 度斜角处。",
            "内容表达需采用简洁扁平的剪影形式。",
            "颜色基于主品牌颜色的扩展。"
        ],
        images: [
            { 
                src: 'https://i.postimg.cc/GpbD5SRh/POS_symbol.png', 
                caption: lang === 'en' ? 'POS symbol (Full colour & reverse white)' : 'POS 符号（全彩和反白）' 
            },
            { 
                src: 'https://i.postimg.cc/PxgY2f5J/Social_Icon2.png', 
                caption: lang === 'en' ? 'POS social media avatar & launch icon' : 'POS 社交媒体头像和启动图标' 
            }
        ],
        mobileDesc: lang === 'en' 
            ? "On mobile devices, the SHOPLINE launch icon needs to occupy 75% of the Icon's display area."
            : "在移动设备上，SHOPLINE 启动图标需要占据图标显示区域的 75%。",
        appIconImg: 'https://i.postimg.cc/jSTVByFc/APP_icons.png'
    },
    minSize: {
        title: lang === 'en' ? 'Minimum Size' : '最小尺寸',
        desc: lang === 'en'
            ? "To ensure readability, maintain the minimum size requirements for both printed and web-based displays when using the logo. The logo shouldn’t be smaller than 100 pixels or 3.8 cm wide for print materials. Similarly, the circular logo should have a minimum size of 16 pixels or 0.6 cm wide for web-based displays."
            : "为了确保可读性，在使用标志时，请保持印刷和网络显示的最小尺寸要求。对于印刷材料，标志宽度不应小于 100 像素或 3.8 厘米。同样，对于网络显示，圆形标志的宽度最小应为 16 像素或 0.6 厘米。",
        img: 'https://i.postimg.cc/wM1NPVZf/zi-pin-pai-da-xiao-gui-fan.png'
    },
    downloads: {
        title: lang === 'en' ? 'Graphic Logo File Download' : '图形标志文件下载',
        files: [
            { title: 'Sub-brand Image Logo', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/6EHT/Sub-brand_image_logo_%281%29.zip' },
        ]
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

      {/* Basic Norms */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.basicNorms.title}</h2>
        <div className="space-y-4 text-gray-600 max-w-4xl leading-relaxed">
            <p>{content.basicNorms.desc}</p>
            <ul className="list-disc pl-5 space-y-2">
                {content.basicNorms.list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="space-y-3">
            <DownloadableImage src={content.basicNorms.img} alt="Basic Norms" />
            <p className="text-sm font-medium text-gray-500">{content.basicNorms.caption}</p>
        </div>
      </section>

      {/* Symbol Usage */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.symbolUsage.title}</h2>
        <div className="space-y-4 text-gray-600 max-w-4xl leading-relaxed">
            <p>{content.symbolUsage.desc}</p>
            <ul className="list-disc pl-5 space-y-2">
                {content.symbolUsage.list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {content.symbolUsage.images.map((img, i) => (
                 <div key={i} className="space-y-3">
                     <DownloadableImage src={img.src} alt={img.caption} />
                     <p className="text-sm font-medium text-gray-500">{img.caption}</p>
                 </div>
             ))}
        </div>

        <div className="mt-8 space-y-4">
             <p className="text-gray-600 text-lg font-medium">{content.symbolUsage.mobileDesc}</p>
             <DownloadableImage src={content.symbolUsage.appIconImg} alt="App Icons" />
        </div>
      </section>

      {/* Minimum Size */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.minSize.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.minSize.desc}</p>
        <DownloadableImage src={content.minSize.img} alt="Minimum Size" />
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
    </div>
  );
};

export default SubBrandSymbolGuidelines;