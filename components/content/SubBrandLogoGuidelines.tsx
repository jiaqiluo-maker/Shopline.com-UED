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

const SubBrandLogoGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Sub-brand Logo' : '子品牌标志',
        desc: lang === 'en' 
            ? "Sub-brand logos are highly versatile, allowing us to convey the sub-brand name in a concise and clear manner. SHOPLINE's sub-brands use a combination of the masterbrand's logo along with the wordmark of the sub-brand, emphasising their connection to the masterbrand: masterbrand logo + Sub-brand wordmark."
            : "子品牌标志具有高度的多功能性，使我们能够简洁明了地传达子品牌名称。SHOPLINE 的子品牌结合了主品牌标志和子品牌文字商标，强调它们与主品牌的联系：主品牌标志 + 子品牌文字商标。"
    },
    composition: {
        title: lang === 'en' ? 'Sub-brand Logo Composition' : '子品牌标志构成',
        desc: lang === 'en'
            ? "SHOPLINE's sub-brands emphasise their connection to the masterbrand by adopting a combination of the masterbrand's logo and the sub-brand's wordmark. This combination consists of the masterbrand's logo alongside the sub-brand's wordmark. The sub-brand wordmarks are designed using SHOPLINE's standard English font, Proxima Nova."
            : "SHOPLINE 的子品牌通过采用主品牌标志和子品牌文字商标的组合来强调它们与主品牌的联系。此组合由主品牌标志和子品牌文字商标并列组成。子品牌文字商标使用 SHOPLINE 的标准英文字体 Proxima Nova 设计。",
        img: 'https://i.postimg.cc/Dz9G6Y86/SHOPLINE_Payments_logo规范2.png'
    },
    brands: [
        {
            name: 'SHOPLINE Payments',
            desc: lang === 'en' ? 'Payment-related sub-brand of SHOPLINE.' : 'SHOPLINE 的支付相关子品牌。',
            img: 'https://i.postimg.cc/JhfXxdG6/SHOPLINE_Payments.png'
        },
        {
            name: 'SHOPLINE Logistics',
            desc: lang === 'en' ? 'Logistics-related sub-brand of SHOPLINE.' : 'SHOPLINE 的物流相关子品牌。',
            img: 'https://i.postimg.cc/mrv9j6tk/SHOPLINE_Logistics.png'
        },
        {
            name: 'SHOPLINE Partners',
            desc: lang === 'en' ? "SHOPLINE's open platform." : 'SHOPLINE 的开放平台。',
            img: 'https://i.postimg.cc/fbGdCgJm/SHOPLINE_Open_Platform.png'
        },
        {
            name: 'SHOPLINE App Store',
            desc: lang === 'en' ? "SHOPLINE's app marketplace." : 'SHOPLINE 的应用市场。',
            img: 'https://i.postimg.cc/QM27mnHH/SHOPLINE_APPSTORE3.png'
        },
        {
            name: 'SHOPLINE Dev',
            desc: lang === 'en' ? "SHOPLINE's Developer Documentation Sub-brand." : 'SHOPLINE 的开发者文档子品牌。',
            img: 'https://i.postimg.cc/k568xdXS/SHOPLINE_DEV.png'
        },
        {
            name: 'SHOPLINE POS',
            desc: lang === 'en' 
                ? "SHOPLINE POS is our physical store checkout system. It connects online and offline stores, allowing customers to have a combined experience of shopping in-store and making online purchases. It also enables offline order pickups and online after-sales services while improving store management efficiency by providing unified tools for inventory management, checkout processes, membership management and data analysis."
                : "SHOPLINE POS 是我们的实体店收银系统。它连接线上和线下商店，让顾客拥有店内购物和在线购买的综合体验。它还支持线下订单取货和在线售后服务，同时通过提供统一的库存管理、结账流程、会员管理和数据分析工具，提高商店管理效率。",
            img: 'https://i.postimg.cc/GpWDKSHM/SHOPLINE_POS.png'
        },
        {
            name: 'SHOPLINE B2B',
            desc: lang === 'en' 
                ? "SHOPLINE B2B is a sub-brand of SHOPLINE that provides a one-stop service for B2B merchants to build websites overseas." 
                : "SHOPLINE B2B 是 SHOPLINE 的子品牌，为 B2B 商家出海建站提供一站式服务。",
            img: 'https://i.postimg.cc/HLswxsxw/SHOPLINE_B2B.png'
        }
    ],
    downloads: {
        title: lang === 'en' ? 'Sub-brand Logo File Download' : '子品牌标志文件下载',
        files: [
            { title: 'Sub-brand Text Logo', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/ttjG/Sub-brand_text_logo_%281%29.zip' },
            { title: 'Proxima Nova Font', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/PBpv/Proxima_Nova_%281%29.zip' },
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

      {/* Composition */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.composition.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.composition.desc}</p>
        <DownloadableImage src={content.composition.img} alt="Logo Composition" />
      </section>

      {/* Sub-brands List */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">
            {lang === 'en' ? 'Sub-brand Examples' : '子品牌示例'}
        </h2>
        
        {content.brands.map((brand, i) => (
            <div key={i} className="flex flex-col gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-2 order-2 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{brand.desc}</p>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <DownloadableImage src={brand.img} alt={brand.name} className="bg-white" />
                    </div>
                </div>
            </div>
        ))}
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

export default SubBrandLogoGuidelines;