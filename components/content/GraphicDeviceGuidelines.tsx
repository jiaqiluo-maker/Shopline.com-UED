import React from 'react';
import { Language } from '../../types';
import { Download } from 'lucide-react';

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

const GraphicDeviceGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Graphic Device' : '图形辅助元素',
    },
    label: {
        title: lang === 'en' ? 'Label' : '标签',
        desc: lang === 'en' 
            ? "SHOPLINE uses a simple label in our logo design. The label can also be seen as an arch, representing the brand's diversity and the success of the stores."
            : "SHOPLINE 在标志设计采用了简单的标签形态。该标签也可视为一个拱门，象征着品牌的多样性以及店铺的成功。",
        img: "https://i.postimg.cc/vmfDvrk0/Label_Tags.png"
    },
    usage: {
        title: lang === 'en' ? 'Graphic Device Usage' : '图形应用规范',
        desc: lang === 'en'
            ? "Label shapes are often used as backgrounds or clipping masks in various scenarios, as shown below:"
            : "标签形状常在各种场景中用作背景或剪切蒙版，如下所示：",
        extraDesc: lang === 'en'
            ? "Label shapes can also be used as backgrounds."
            : "标签形状也可用作背景。",
        images: [
            "https://i.postimg.cc/Bn1vq5SG/Tag_Shape_placement.png",
            "https://i.postimg.cc/QN4N1YVN/Tag_Shape_placement3.png"
        ]
    }
  };

  return (
    <div className="space-y-20 animate-fade-in pb-20">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{content.intro.title}</h1>
      </section>

      {/* Label */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.label.title}</h2>
        <p className="text-xl text-gray-500 max-w-4xl leading-relaxed">
          {content.label.desc}
        </p>
        <DownloadableImage src={content.label.img} alt="Label Graphic Device" />
      </section>

      {/* Usage */}
      <section className="space-y-12">
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.usage.title}</h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">{content.usage.desc}</p>
        </div>
        
        <div className="flex flex-col gap-12">
             {content.usage.images.map((img, i) => (
                 <DownloadableImage key={i} src={img} alt={`Graphic Device Usage ${i + 1}`} />
             ))}
        </div>
        
        <p className="text-gray-600 max-w-4xl leading-relaxed font-medium">
            {content.usage.extraDesc}
        </p>
      </section>
    </div>
  );
};

export default GraphicDeviceGuidelines;